# Flamingalo Website 🦩🔥

Official website for Flamingalo, the Burning Man-inspired event in Portugal.

## 🚀 Tech Stack

- **Astro 5** - Static site generation
- **React 19** - UI components
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Astro Content Collections** - Blog management

## 📁 Structure

```
src/
├── components/
│   ├── 2025/          # Components for 2025 event
│   ├── 2026/          # Components for 2026 event
│   ├── 2027/          # Components for 2027 event (current)
│   └── blog/          # Blog components
├── content/
│   └── blog/          # Markdown blog posts
├── pages/
│   ├── 2025/          # 2025 event page
│   ├── 2026/          # 2026 event page
│   ├── 2027/          # 2027 event page
│   ├── pt/            # Portuguese twin of every page (/pt/...)
│   ├── blog/          # Blog pages
│   └── index.astro    # Homepage (defaults to 2027)
└── styles/
    └── global.css     # Global styles
```

## 🛠️ Commands

```bash
npm install          # Install dependencies
npm run dev         # Start dev server (localhost:4321)
npm run build       # Build for production
npm run preview     # Preview production build
```

## 🌐 Routes

- `/` - Homepage (2027 event)
- `/2025` - Flamingalo 2025
- `/2026` - Flamingalo 2026
- `/2027` - Flamingalo 2027
- `/blog` - Information and news feed
- `/blog/[slug]` - Individual blog posts
- `/collaboration-guide` - How to contribute

Every route also exists in Portuguese under `/pt/` (e.g. `/pt/2027`).

## 📝 Adding Blog Posts

Create a new folder in `src/content/blog/` with an `index.md` file:

```markdown
---
title: "Your Post Title"
date: 2025-01-15
author: "Author Name"
authorImage: "/blog/author.png"
image: "/blog/post-image.png"
excerpt: "Short description"
categories: ["Category1", "Category2"]
---

# Your content here
```

## 🎨 Multi-Year Support

Each year has isolated components and constants:
- Components: `src/components/{year}/`
- Constants: `src/constants/{year}/`
- Easy to maintain separate event editions

The homepage (`/`) shows the current edition, **2027**. To add the next one, follow the step-by-step guide in [ESTRUTURA-ANOS.md](./ESTRUTURA-ANOS.md). Create the new year's folders first and never edit the previous year's components to update the homepage, or that year's `/YYYY` archive page changes too.

## 🚢 Deployment

flamingalo.org is deployed on **Cloudflare Pages** through its GitHub integration:

- Every push to `main` builds and goes live within a couple of minutes, so merging a PR is a production release.
- Pull requests get a preview URL (`https://<hash>.flamingalo-org.pages.dev`) in their checks.
- The separate `Workers Builds: flamingalo` check only builds `main`, so it fails on PR branches. That's expected and doesn't block merging.

As a static Astro build it would also run on Vercel, Netlify or any static host.

## 📄 License

© Flamingalo - All rights reserved
