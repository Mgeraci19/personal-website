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
  const router = useRouter();

  // Highlight code on route changes
  useEffect(() => {
    hljs.highlightAll();
  }, [router.pathname]);

  // Show back button only on individual blog posts, not the blog index
  const isBlogPost = router.pathname.startsWith('/blog/') && router.pathname !== '/blog';

  return (
    <MDXProvider components={components}>
      <Layout>
        {isBlogPost && (
          <div className="back-link">
            <Link href="/blog">← Back to Blog</Link>
            <style jsx>{`
              .back-link {
                margin-bottom: 2rem;
                font-size: 1rem;
              }
              .back-link :global(a) {
                text-decoration: none;
                color: var(--foreground);
                opacity: 0.6;
              }
              .back-link :global(a:hover) {
                opacity: 1;
                color: var(--primary);
              }
            `}</style>
          </div>
        )}
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}
