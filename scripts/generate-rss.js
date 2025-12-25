const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const RSS = require('rss');

async function generateRssFeed() {
    const site_url = 'https://mgeraci19.github.io/personal-website';
    const allPosts = fs.readdirSync(path.join(__dirname, '../content/blog'));

    const feed = new RSS({
        title: 'Michael Geraci | Thoughts',
        description: 'Personal thoughts and essays.',
        site_url: site_url,
        feed_url: `${site_url}/rss.xml`,
        language: 'en',
        pubDate: new Date(),
        copyright: `All rights reserved ${new Date().getFullYear()}, Michael Geraci`,
    });

    const posts = allPosts
        .filter(filename => filename.endsWith('.md') || filename.endsWith('.mdx'))
        .map(filename => {
            const filePath = path.join(__dirname, '../content/blog', filename);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data, content } = matter(fileContent);
            return {
                data,
                content,
                slug: filename.replace(/\.mdx?$/, ''),
            };
        })
        .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));

    posts.forEach(post => {
        // Only include if date is present (skips drafts if needed)
        if (post.data.date) {
            feed.item({
                title: post.data.title,
                description: post.data.description,
                url: `${site_url}/blog/${post.slug}`,
                date: post.data.date,
                author: 'Michael Geraci',
            });
        }
    });

    fs.writeFileSync(path.join(__dirname, '../public/rss.xml'), feed.xml({ indent: true }));
    console.log('✅ RSS Feed generated at public/rss.xml');
}

generateRssFeed();
