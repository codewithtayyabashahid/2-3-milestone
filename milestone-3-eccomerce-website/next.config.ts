import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["fakestoreapi.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
