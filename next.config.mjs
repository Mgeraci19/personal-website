import nextMDX from '@next/mdx';

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

const isProd = process.env.NODE_ENV === 'production';
const envConfig = {
  isProd,
};


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx'],
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: envConfig,
};

export default withMDX(nextConfig);
