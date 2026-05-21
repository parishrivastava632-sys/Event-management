import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Event-management",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
