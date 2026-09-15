package com.hdkguvenlik.app;

import android.app.AlarmManager;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.media.AudioAttributes;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Build;
import android.os.IBinder;
import android.os.PowerManager;
import android.os.SystemClock;
import android.util.Log;

import androidx.annotation.Nullable;
import androidx.core.app.NotificationCompat;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class LeadNotificationService extends Service {

    private static final String TAG = "HDKNotificationService";
    private static final String CHANNEL_ID = "hdk_leads_channel";
    private static final String FOREGROUND_CHANNEL_ID = "hdk_service_channel";
    private static final String STREAM_URL = "https://ntfy.sh/hdk-guvenlik-leads/json";

    private boolean isRunning = false;
    private Thread listenerThread;

    @Override
    public void onCreate() {
        super.onCreate();
        createNotificationChannels();
        startForeground(1, createForegroundNotification());
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        if (!isRunning) {
            isRunning = true;
            startListening();
        }
        return START_STICKY;
    }

    private void createNotificationChannels() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationManager manager = getSystemService(NotificationManager.class);
            if (manager == null) return;

            // Arka plan servis kanalı (sessiz)
            NotificationChannel serviceChannel = new NotificationChannel(
                    FOREGROUND_CHANNEL_ID,
                    "HDK Servis Durumu",
                    NotificationManager.IMPORTANCE_LOW
            );
            serviceChannel.setDescription("Keşif bildirimlerini dinleyen arka plan servisi");
            manager.createNotificationChannel(serviceChannel);

            // Anlık yeni keşif alarm kanalı (YÜKSEK ÖNCELİKLİ - SESLİ & TİTREŞİMLİ)
            Uri soundUri = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);
            AudioAttributes audioAttributes = new AudioAttributes.Builder()
                    .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
                    .setUsage(AudioAttributes.USAGE_NOTIFICATION)
                    .build();

            NotificationChannel alertChannel = new NotificationChannel(
                    CHANNEL_ID,
                    "Yeni Keşif Talepleri",
                    NotificationManager.IMPORTANCE_HIGH
            );
            alertChannel.setDescription("Yeni keşif formu doldurulduğunda çalan anlık bildirim");
            alertChannel.enableVibration(true);
            alertChannel.setVibrationPattern(new long[]{0, 400, 200, 400, 200, 600});
            alertChannel.setSound(soundUri, audioAttributes);
            alertChannel.setLockscreenVisibility(Notification.VISIBILITY_PUBLIC);
            manager.createNotificationChannel(alertChannel);
        }
    }

    private Notification createForegroundNotification() {
        Intent notificationIntent = new Intent(this, MainActivity.class);
        PendingIntent pendingIntent = PendingIntent.getActivity(
                this, 0, notificationIntent,
                PendingIntent.FLAG_IMMUTABLE
        );

        return new NotificationCompat.Builder(this, FOREGROUND_CHANNEL_ID)
                .setContentTitle("HDK Güvenlik Panel Aktif")
                .setContentText("Yeni keşif talepleri 7/24 anlık olarak izleniyor.")
                .setSmallIcon(R.mipmap.ic_launcher)
                .setContentIntent(pendingIntent)
                .setOngoing(true)
                .setPriority(NotificationCompat.PRIORITY_LOW)
                .build();
    }

    private void startListening() {
        listenerThread = new Thread(() -> {
            while (isRunning) {
                HttpURLConnection conn = null;
                BufferedReader reader = null;
                try {
                    URL url = new URL(STREAM_URL);
                    conn = (HttpURLConnection) url.openConnection();
                    conn.setRequestMethod("GET");
                    conn.setReadTimeout(0); // Sonsuz dinleme (stream)
                    conn.setConnectTimeout(15000);

                    reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                    String line;
                    while (isRunning && (line = reader.readLine()) != null) {
                        if (line.trim().isEmpty()) continue;
                        try {
                            JSONObject json = new JSONObject(line);
                            String event = json.optString("event");
                            if ("message".equals(event)) {
                                String title = json.optString("title", "🚨 Yeni Keşif Talebi!");
                                String message = json.optString("message", "Yeni bir müşteri keşif formu doldurdu.");
                                showLeadAlert(title, message);
                            }
                        } catch (Exception parseErr) {
                            Log.e(TAG, "JSON Parse error: " + parseErr.getMessage());
                        }
                    }
                } catch (Exception e) {
                    Log.w(TAG, "Connection lost, reconnecting in 5s: " + e.getMessage());
                    try {
                        Thread.sleep(5000);
                    } catch (InterruptedException ignored) {}
                } finally {
                    if (reader != null) try { reader.close(); } catch (Exception ignored) {}
                    if (conn != null) conn.disconnect();
                }
            }
        });
        listenerThread.start();
    }

    private void showLeadAlert(String title, String message) {
        // Telefon ekranı kapalı ve kilitli olsa dahi ekranı ve işlemciyi anında uyandır
        try {
            PowerManager pm = (PowerManager) getSystemService(Context.POWER_SERVICE);
            if (pm != null) {
                PowerManager.WakeLock wl = pm.newWakeLock(
                        PowerManager.PARTIAL_WAKE_LOCK | PowerManager.ACQUIRE_CAUSES_WAKEUP | PowerManager.ON_AFTER_RELEASE,
                        "HDKGuvenlik:LeadAlertWakeLock"
                );
                wl.acquire(10000); // 10 saniye boyunca uyanık tut
            }
        } catch (Exception ignored) {}

        NotificationManager manager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
        if (manager == null) return;

        // Tıklanınca açılacak ekran
        Intent openAppIntent = new Intent(this, MainActivity.class);
        openAppIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        PendingIntent openPending = PendingIntent.getActivity(
                this, (int) System.currentTimeMillis(), openAppIntent,
                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
        );

        NotificationCompat.Builder builder = new NotificationCompat.Builder(this, CHANNEL_ID)
                .setSmallIcon(R.mipmap.ic_launcher)
                .setContentTitle(title)
                .setContentText(message)
                .setStyle(new NotificationCompat.BigTextStyle().bigText(message))
                .setPriority(NotificationCompat.PRIORITY_MAX)
                .setCategory(NotificationCompat.CATEGORY_ALARM)
                .setAutoCancel(true)
                .setContentIntent(openPending)
                .setVibrate(new long[]{0, 400, 200, 400, 200, 600})
                .setDefaults(Notification.DEFAULT_ALL);

        // Mesaj içerisinden telefon numarası tespiti
        try {
            String[] lines = message.split("\n");
            for (String l : lines) {
                if (l.contains("Telefon:") || l.contains("05") || l.contains("+90")) {
                    String phone = l.replaceAll("[^0-9+]", "");
                    if (phone.length() >= 10) {
                        Intent callIntent = new Intent(Intent.ACTION_DIAL, Uri.parse("tel:" + phone));
                        PendingIntent callPending = PendingIntent.getActivity(
                                this, (int) System.currentTimeMillis() + 1, callIntent,
                                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
                        );
                        builder.addAction(android.R.drawable.ic_menu_call, "📞 Hemen Ara", callPending);

                        Intent waIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://wa.me/" + phone.replace("+", "")));
                        PendingIntent waPending = PendingIntent.getActivity(
                                this, (int) System.currentTimeMillis() + 2, waIntent,
                                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
                        );
                        builder.addAction(android.R.drawable.ic_menu_send, "💬 WhatsApp", waPending);
                        break;
                    }
                }
            }
        } catch (Exception ignored) {}

        int notificationId = (int) (System.currentTimeMillis() % 100000);
        manager.notify(notificationId, builder.build());
    }

    @Override
    public void onTaskRemoved(Intent rootIntent) {
        super.onTaskRemoved(rootIntent);
        // Kullanıcı uygulamayı son uygulamalardan kapattığında (swipe) servisi anında yeniden canlandır
        try {
            Intent restartServiceIntent = new Intent(getApplicationContext(), LeadNotificationService.class);
            restartServiceIntent.setPackage(getPackageName());
            PendingIntent restartPending = PendingIntent.getService(
                    getApplicationContext(), 1, restartServiceIntent,
                    PendingIntent.FLAG_ONE_SHOT | PendingIntent.FLAG_IMMUTABLE
            );
            AlarmManager alarmManager = (AlarmManager) getSystemService(Context.ALARM_SERVICE);
            if (alarmManager != null) {
                alarmManager.set(
                        AlarmManager.ELAPSED_REALTIME_WAKEUP,
                        SystemClock.elapsedRealtime() + 1000,
                        restartPending
                );
            }
        } catch (Exception ignored) {}
    }

    @Override
    public void onDestroy() {
        isRunning = false;
        if (listenerThread != null) listenerThread.interrupt();
        // Servis beklenmedik şekilde durursa 2 saniye sonra otomatik ayağa kaldır
        try {
            Intent restartServiceIntent = new Intent(getApplicationContext(), LeadNotificationService.class);
            restartServiceIntent.setPackage(getPackageName());
            PendingIntent restartPending = PendingIntent.getService(
                    getApplicationContext(), 1, restartServiceIntent,
                    PendingIntent.FLAG_ONE_SHOT | PendingIntent.FLAG_IMMUTABLE
            );
            AlarmManager alarmManager = (AlarmManager) getSystemService(Context.ALARM_SERVICE);
            if (alarmManager != null) {
                alarmManager.set(
                        AlarmManager.ELAPSED_REALTIME_WAKEUP,
                        SystemClock.elapsedRealtime() + 2000,
                        restartPending
                );
            }
        } catch (Exception ignored) {}
        super.onDestroy();
    }

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }
}
