import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vgbujcuwptvheqijyjbe.supabase.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pquxfbbxflqvtidtlrhl.supabase.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
