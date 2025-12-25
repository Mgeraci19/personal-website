# Project Roadmap & Status (AI Generated)

## ✅ Completed Features

### 1. **Core Architecture**
*   **Next.js (Pages Router)**: Chosen for rigorous structure and simple Static Site Generation (SSG).
*   **GitHub Pages**: Configured for cost-free, serverless hosting.
*   **Strict Styling**: Implemented a "Design System" using Vanilla CSS variables (No Tailwind).
    *   *Result*: A consistent, high-contrast, document-style aesthetic across all pages.
*   **Mobile Responsiveness**: Navigation and layout adapt fluidly to mobile screens.

### 2. **Content Pipeline (The "Obsidian Workflow")**
*   **MDX & Markdown Support**: Configured the build system to treat `.md` files as `.mdx`.
    *   *Benefit*: You can write in Obsidian using standard Markdown, and it just works.
*   **Interactive Components**:
    *   **Callouts**: `<Callout type="note" />` for alerts.
    *   **Syntax Highlighting**: Atom One Dark theme for code blocks.
*   **Sections Created**:
    *   **Home**: Minimalist bio + directory.
    *   **Projects**: Rich template for showcasing work.
    *   **Thoughts (Blog)**: Date-sorted index of writings.
    *   **Collection**: Books & Links.

### 3. **The "No-Backend" Subscription System**
*   **RSS Generation**: A custom script `scripts/generate-rss.js` runs continuously during the build.
*   **Automation**: It generates `public/rss.xml` containing all blog posts.
*   **Integration**: Ready for use with **Buttondown** (or ConvertKit/Substack) to automate emails.

---

## 🗺 Roadmap & Next Steps

### 🔴 Immediate Action Items

1.  **Configure GitHub Pages Source**
    *   *Action*: Go to Repo Settings -> Pages -> Source.
    *   *Setting*: Select "GitHub Actions" (since we are using `deploy.yml`).
2.  **Buttondown Integration**
    *   *Action*: Create account on [Buttondown](https://buttondown.email/).
    *   *Setting*: Point it to your feed URL: `https://mgeraci19.github.io/personal-website/rss.xml`.
    *   *Verify*: Send a test email from Buttondown to ensure it parses the feed correctly.
3.  **Cloudflare DNS (Optional)**
    *   *Context*: You mentioned having a URL.
    *   *Action*: Update GitHub Pages custom domain settings and point Cloudflare CNAME to `mgeraci19.github.io`.

### 🟡 Mid-Term Refinements

1.  **Open Graph (Social) Images**
    *   *Idea*: Automatically generate "cards" (images with the post title) so links look good on Twitter/iMessage.
    *   *Tool*: `@vercel/og`.
2.  **SEO Audit**
    *   *Current*: We have basic `<title>` and `<description>`.
    *   *Next*: Add `sitemap.xml`, `robots.txt`, and canonical tags.
3.  **Analytics**
    *   *Idea*: Basic, privacy-focused tracking (e.g., goatcounter or Cloudflare Web Analytics) to see which posts are popular.

### 🟢 Long-Term Ideas

*   **"Digital Garden" Graph**: Visualize links between Obsidian notes on the site (requires more complex graph parsing).
*   **Search**: Client-side fuzzy search (cmd+k) to find posts.

---

## 🧠 tech_debt / notes
*   *None currently.* The removal of server-side `rehype-highlight` in favor of client-side `highlight.js` resolved the only build stability issue.
