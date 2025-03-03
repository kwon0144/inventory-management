import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images : {
    remotePatterns: [
      {      
        protocol: "https",
        hostname: "s3-bucket-inventory-management.s3.ap-southeast-2.amazonaws.com",
        port: "",
        pathname: "/**"
      },
    ],
  },
};

export default nextConfig;
