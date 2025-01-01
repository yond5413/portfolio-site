/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    assetPrefix: '/dev-portfolio/',
    basePath: '/dev-portfolio',
  }
  
  module.exports = nextConfig
  
  