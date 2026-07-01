import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: process.env.SUBPATH ? `/${process.env.SUBPATH}` : "",
  assetPrefix: process.env.SUBPATH ? `/${process.env.SUBPATH}/` : "",
};

export default nextConfig;
