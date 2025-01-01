/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/portfolio-site/',
  basePath: '/portfolio-site',
}

module.exports = nextConfig

