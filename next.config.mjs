/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,

  swcMinify: true,
  images: {
    domains: ["demo.uix.store", "images.unsplash.com"],
  },
 
};

export default nextConfig;
