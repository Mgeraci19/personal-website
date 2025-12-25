import "@/styles/globals.css";
import Layout from "../components/Layout";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import Callout from '../components/Callout';
import { useEffect } from 'react';
import hljs from 'highlight.js';

const components = {
  Callout
};

export default function App({ Component, pageProps }) {


  return (
    <MDXProvider components={components}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}
