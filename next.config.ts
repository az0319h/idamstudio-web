import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
      domains: ["res.cloudinary.com"],
   },
   logging: {
      fetches: {
         fullUrl: true,
      },
   },
};

export default nextConfig;
