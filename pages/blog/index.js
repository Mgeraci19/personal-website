import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Head from 'next/head';

export default function BlogIndex({ posts }) {
    return (
        <>
            <Head>
                <title>Blog - Michael Geraci</title>
            </Head>
            <div>
                <h1>Thoughts</h1>
                <ul>
                    {posts.map(post => (
                        <li key={post.slug}>
                            <Link href={`/blog/${post.slug}`}>
                                {post.frontMatter.title}
                            </Link>
                            <span className="meta"> – {post.frontMatter.date}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <style jsx>{`
        .meta {
            opacity: 0.6;
            font-size: 1rem;
            color: var(--foreground);
        }
      `}</style>
        </>
    );
}

export async function getStaticProps() {
    const files = fs.readdirSync(path.join('pages/blog'));
    const posts = files
        .filter(filename => filename.endsWith('.md') || filename.endsWith('.mdx'))
        .map(filename => {
            const markdownWithMeta = fs.readFileSync(path.join('pages/blog', filename), 'utf-8');
            const { data } = matter(markdownWithMeta);
            return {
                frontMatter: data,
                slug: filename.split('.')[0]
            };
        });

    posts.sort((a, b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date));

    return {
        props: {
            posts
        }
    };
}
