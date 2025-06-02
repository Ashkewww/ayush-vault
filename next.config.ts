import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['hkkbnfvufeounhbqpozc.supabase.co'], // <-- use your Supabase project domain here
    loader: 'custom',
    loaderFile: './lib/supabase-image-loader.ts',
  },
};

export default nextConfig;
