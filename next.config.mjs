import nextMDX from '@next/mdx';

import rehypeHighlight from 'rehype-highlight';

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
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: envConfig,
};

export default withMDX(nextConfig);
