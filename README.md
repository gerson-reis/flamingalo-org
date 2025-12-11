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
│   └── blog/          # Blog components
├── content/
│   └── blog/          # Markdown blog posts
├── pages/
│   ├── 2025/          # 2025 event page
│   ├── 2026/          # 2026 event page
│   ├── blog/          # Blog pages
│   └── index.astro    # Homepage (defaults to 2026)
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

- `/` - Homepage (2026 event)
- `/2025` - Flamingalo 2025
- `/2026` - Flamingalo 2026
- `/blog` - Information and news feed
- `/blog/[slug]` - Individual blog posts
- `/collaboration-guide` - How to contribute

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

## 🚢 Deployment

Compatible with:
- Vercel (recommended)
- Netlify
- Cloudflare Pages
- Any static hosting

## 📄 License

© Flamingalo - All rights reserved
