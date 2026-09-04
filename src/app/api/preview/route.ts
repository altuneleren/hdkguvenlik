import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get("action");
  const cookieStore = await cookies();

  if (action === "disable") {
    cookieStore.delete("hdk_preview");
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (searchParams.get("preview") === "hdk" || searchParams.has("preview")) {
    cookieStore.set("hdk_preview", "granted", {
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 gün geçerli
      httpOnly: false,
      sameSite: "lax",
    });
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const cookieStore = await cookies();

    if (body.action === "disable") {
      cookieStore.delete("hdk_preview");
      return NextResponse.json({ success: true, mode: "disabled" });
    }

    if (body.preview === "hdk" || body.action === "enable") {
      cookieStore.set("hdk_preview", "granted", {
        path: "/",
        maxAge: 60 * 60 * 24 * 30, // 30 gün geçerli
        httpOnly: false,
        sameSite: "lax",
      });
      return NextResponse.json({ success: true, mode: "granted" });
    }

    return NextResponse.json({ error: "Geçersiz istek" }, { status: 400 });
  } catch {
    return NextResponse.json({ error: "İstek işlenemedi" }, { status: 400 });
  }
}
