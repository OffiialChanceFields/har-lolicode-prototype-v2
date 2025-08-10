/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
      '@har2lolicode/parser',
      '@har2lolicode/filter',
      '@har2lolicode/analyzer',
      '@har2lolicode/generator'
    ],
};

module.exports = nextConfig;
