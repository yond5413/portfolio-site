/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH, 
};

export default nextConfig;
