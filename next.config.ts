import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com"]
  },
  env: {
    RESEND_API_KEY2: process.env.RESEND_API_KEY2,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "1mb",
      allowedOrigins: ["*"],
    },
  }
};

export default nextConfig;
