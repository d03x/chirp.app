import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  compiler : {
    removeConsole : true,
    reactRemoveProperties:true,
  },
  experimental : {
    taint:true,
  },
  output : "standalone",
  sassOptions: {
    includePaths: [path.join(__dirname, "src/sass")],
  }
};

export default nextConfig;
