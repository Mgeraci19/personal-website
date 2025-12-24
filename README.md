# Personal Website

A minimalist, high-performance personal website and digital garden built with **Next.js** and **MDX**.

## 🚀 Usage

### Development
```bash
npm run dev
# Open http://localhost:3000
```

### Build & Test RSS
```bash
npm run build
# Generates static HTML and public/rss.xml
```

---

## 🛠 Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/) (Pages Router)
    *   Chosen for simplicity and robust Static Site Generation (SSG).
    *   Configured with `output: 'export'` for serverless hosting.
*   **Content**: [MDX](https://mdxjs.com/)
    *   Allows writing content in Markdown + React components.
    *   Configured to support `.md` files to allow direct editing in **Obsidian**.
*   **Styling**: Vanilla CSS
    *   No Tailwind or heavy libraries. Pure CSS variables for theming.
    *   Focus on typography, readability, and zero layout shift.
*   **Deployment**: GitHub Pages
    *   Deploys automatically via GitHub Actions on push to `main`.

---

## 💡 Key Architectural Decisions

### 1. The "Obsidian Workflow"
This site is designed to be a "Digital Garden" that can be tended to directly from an Obsidian vault.
*   **File Format**: The blog index (`pages/blog/index.js`) reads both `.mdx` and `.md` files.
*   **Workflow**: Write post in Obsidian -> Commit & Push via Obsidian Git -> Site auto-deploys.
*   **Frontmatter**: Posts use standard YAML frontmatter (`title`, `date`, `description`).

### 2. No-Server Subscription Model
Instead of a complex backend, we use **RSS-to-Email** to handle subscriptions.
1.  **Generation**: A custom script (`scripts/generate-rss.js`) runs at build time to create `public/rss.xml`.
2.  **Delivery**: Services like **Buttondown** poll this feed and email new posts to subscribers automatically.
3.  **Benefit**: Zero database maintenance, free hosting, full control.

### 3. "Document Style" Design
The design specifically mimicks high-quality documentation sites (like Vercel or Stripe docs) rather than generic marketing blobs.
*   **Typography**: Inter (System UI fallback) with tight line-heights for density.
*   **Components**: Includes `<Callout />` for alerts and **Syntax Highlighting** (Highlight.js) for code blocks.
*   **Consistency**: Every page (Home, Blog, Projects) shares the exact same header/width hierarchy.

---

## 📂 Project Structure

```
├── components/      # React components (Layout, Navigation, Callout)
├── pages/
│   ├── blog/        # Blog posts (.md/.mdx) + Index
│   ├── index.js     # Homepage
│   ├── projects.mdx # Projects portfolio
│   ├── books.mdx    # Reading list
│   └── _app.js      # Global wrapper (MDX Provider, Layout)
├── public/          # Static assets + images
├── scripts/         # Build utilities (RSS generator)
└── styles/          # CSS modules and globals
```

## 📝 Writing Content for Future You

### Adding a Blog Post
1. Create a file in `pages/blog/my-post.md`.
2. Add frontmatter:
   ```yaml
   ---
   title: My Post
   date: '2024-01-01'
   description: One sentence summary.
   ---
   ```
3. Write standard Markdown.

### Using Components
You can use React components inside `.mdx` files (or `.md` if recognized):

**Callouts**:
```jsx
<Callout type="note" title="Heads up">
  This is a note.
</Callout>
```

**Code Blocks**:
Just use standard markdown fences (\`\`\`) - they highlight automatically.
