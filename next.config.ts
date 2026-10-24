```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "grupogogreen.com",
      },
    ],
  },
};

export default nextConfig;
```