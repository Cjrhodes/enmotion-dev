/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  experimental: {
    outputFileTracingRoot: __dirname,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/api': path.resolve(__dirname, 'src/api'),
    };
    return config;
  },
};
 
module.exports = nextConfig