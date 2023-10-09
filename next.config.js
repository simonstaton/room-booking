/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  output: 'standalone',
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) => {
      // Ignore inline SVG from NextJS rules
      if (rule.test && typeof rule.test === 'object' && rule.test.test) {
        return rule.test.test('.svg');
      }
      return false;
    });
    if (fileLoaderRule) fileLoaderRule.exclude = /\inline\.svg$/;
    config.module.rules.push({
      test: /\inline\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
