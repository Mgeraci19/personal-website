import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import Callout from '../../components/Callout';

const components = {
    Callout,
};

export default function BlogPost({ frontMatter, mdxSource }) {
    return (
        <>
            <Head>
                <title>{frontMatter.title} - Michael Geraci</title>
                <meta name="description" content={frontMatter.description} />
            </Head>

            <div className="blog-post">
                <div className="back-link">
                    <Link href="/blog">← Back to Blog</Link>
                </div>

                <header className="post-header">
                    <h1>{frontMatter.title}</h1>
                    {frontMatter.date && <time>{frontMatter.date}</time>}
                </header>

                <MDXRemote {...mdxSource} components={components} />
            </div>

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
        .post-header {
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--card-border);
          padding-bottom: 1rem;
        }
        h1 {
          margin-bottom: 0.5rem;
          font-size: 2.2rem;
        }
        time {
          color: #888;
          font-size: 0.9rem;
        }
      `}</style>
        </>
    );
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('content/blog'));
    // Filter only markdown files, ignore index.js and other non-content
    const paths = files
        .filter(filename => filename.endsWith('.md') || filename.endsWith('.mdx'))
        .map(filename => ({
            params: {
                slug: filename.replace(/\.mdx?$/, ''),
            },
        }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    // Try both extensions
    let markdownWithMeta;
    try {
        markdownWithMeta = fs.readFileSync(path.join('content/blog', slug + '.md'), 'utf-8');
    } catch (err) {
        markdownWithMeta = fs.readFileSync(path.join('content/blog', slug + '.mdx'), 'utf-8');
    }

    const { data: frontMatter, content } = matter(markdownWithMeta);
    const mdxSource = await serialize(content);

    return {
        props: {
            frontMatter,
            mdxSource,
        },
    };
}
