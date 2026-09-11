import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/anasayfa",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ana-sayfa",
        destination: "/",
        permanent: true,
      },
      {
        source: "/admin/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
