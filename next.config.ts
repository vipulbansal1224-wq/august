import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "augustindustry.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
