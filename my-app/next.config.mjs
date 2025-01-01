/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
  basePath: '/<repository-name>', // Replace <repository-name> with your repo name if deploying to a subpath
  assetPrefix: '/<repository-name>', // Matches basePath for assets
};

export default nextConfig;
