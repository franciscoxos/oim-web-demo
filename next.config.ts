import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: process.env.GH_PAGES === "1" ? "/oim-web-demo" : "",
  assetPrefix: process.env.GH_PAGES === "1" ? "/oim-web-demo/" : "",
};

export default nextConfig;
