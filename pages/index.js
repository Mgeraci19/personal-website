import Head from 'next/head';
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
          <li><a href="/projects">Projects</a> – Things I've built</li>
          <li><a href="/blog">Thoughts</a> – Loose updates and essays</li>
        </ul>

        <h2>Collection</h2>
        <ul>
          <li><a href="/books">Books</a> – Reading list and favorites</li>
          <li><a href="/links">Links</a> – Curated internet finds</li>
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
