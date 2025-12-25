import Head from 'next/head';
import Link from 'next/link';
import Callout from '../components/Callout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Geraci</title>
        <meta name="description" content="Personal website of Michael Geraci" />
      </Head>





      <div className="container">
        <h1>Michael Geraci</h1>
        <p>
          I am a software engineer and writer based in New York.
          I enjoy building simple, performant tools and exploring the outdoors.
        </p>

        <Callout type="note" title="Status">
          I am currently exploring <strong>Next.js</strong> and <strong>MDX</strong> to build better documentation tools.
        </Callout>

        <h2>Work</h2>
        <ul>
          <li><Link href="/projects">Projects</Link> – Things I've built</li>
          <li><Link href="/blog">Thoughts</Link> – Loose updates and essays</li>
        </ul>

        <h2>Collection</h2>
        <ul>
          <li><Link href="/books">Books</Link> – Reading list and favorites</li>
          <li><Link href="/links">Links</Link> – Curated internet finds</li>
        </ul>

        <h2>Personal</h2>
        <ul>
          <li><a href="https://github.com/Mgeraci19">GitHub</a> – Code and projects</li>
        </ul>
      </div>

      <style jsx>{`
        .container {
          max-width: 650px;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
}
