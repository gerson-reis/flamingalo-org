# 🚀 Quick Start Guide - Flamingalo

## Prerequisites

- Node.js 18+ installed
- npm or yarn
- Code editor (VSCode recommended)

## Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to directory
cd flamingalo

# Install dependencies
npm install
```

> **Windows:** the repo contains an archived copy of the old WordPress site (`flamingalo.org/`) whose filenames contain `?`, which Windows can't create, so a plain `git clone` fails at checkout. Clone without that folder instead:
>
> ```bash
> git clone --no-checkout <repository-url> flamingalo && cd flamingalo
> git config core.protectNTFS false
> git sparse-checkout set --cone src public backup
> git checkout main
> npm ci
> ```
>
> The sparse checkout also leaves out the committed `node_modules/`, which `npm ci` rebuilds. Run `npm ci` again after switching branches.

## Development

```bash
# Start development server
npm run dev

# Open in browser
# http://localhost:4321
```

The server will automatically reload when you make changes to files.

## Project Structure

```
flamingalo/
├── src/
│   ├── components/
│   │   ├── 2025/ 2026/ 2027/   # One folder per edition: Header, Hero, InfoSection,
│   │   │                       #   SurvivalGuide, GetInvolved, Footer, Menu, ...
│   │   └── blog/               # Blog components
│   ├── constants/{year}/       # Per-edition social links
│   ├── content/blog/           # Blog posts (Markdown)
│   ├── i18n/                   # English and Portuguese strings
│   ├── layouts/                # Astro layouts
│   ├── pages/                  # /, /2025, /2026, /2027, blog, guide + pt/ twins
│   ├── styles/                 # Global styles
│   └── types/                  # TypeScript types
└── public/                     # Static files
```

## Main Commands

```bash
# Development
npm run dev          # Start dev server at localhost:4321

# Build
npm run build        # Generate production build

# Preview
npm run preview      # Preview local build

# Astro CLI
npm run astro        # Access Astro commands
```

## Editing Content

### Event Dates

Each edition keeps its dates in its own components. The current edition is 2027:

- **Hero date**: `src/components/2027/Hero.tsx` (`finalDate`)
- **Intro card date**: `src/components/2027/InfoSection.tsx` (first card)

Only edit the current year's folder, because the older folders power the `/2025` and `/2026` archive pages. Text shown in both languages lives in `src/i18n/index.ts` (`en` and `pt` blocks). `EVENT_INFO` in the 2025/2026 constants isn't read by any component, so editing it changes nothing.

### Social Links

Edit `src/constants/2027/social-links.ts` (shared by the English and Portuguese pages):

```typescript
export const SOCIAL_LINKS: SocialLink[] = [
  {
    title: "Instagram",
    description: "Description...",
    buttonText: "Instagram",
    buttonUrl: "https://..."
  },
  // ...
];
```

### Styles

- **Colors**: Edit `src/styles/global.css`
- **Components**: Each component in `src/components/`

## Adding a New Component

1. Create the component file:

```typescript
// src/components/2027/MyComponent.tsx
import React from 'react';
import type { MyComponentProps } from '../../types';

export const MyComponent: React.FC<MyComponentProps> = ({ prop }) => {
  return <div>{prop}</div>;
};
```

2. Add the types:

```typescript
// src/types/index.ts
export interface MyComponentProps {
  prop: string;
}
```

3. Export it from the edition's index:

```typescript
// src/components/2027/index.ts
export { MyComponent } from './MyComponent';
```

4. Use in page:

```astro
---
// src/pages/index.astro
import { MyComponent } from '../components/2027';
---

<MyComponent client:load prop="value" />
```

## Modifying Styles

### Global

Edit `src/styles/global.css`:

```css
/* Add your classes */
.my-class {
  color: #e74c76;
}
```

### CSS Variables

```css
:root {
  --primary-color: #e74c76;
  --secondary-color: yellow;
}

.element {
  color: var(--primary-color);
}
```

## Working with Images

### Add New Image

1. Place image in `public/`
2. Reference in component:

```tsx
<img src="/my-image.jpg" alt="Description" />
```

### Optimization

Astro automatically optimizes images during build.

## Deployment

flamingalo.org deploys automatically from `main` through Cloudflare Pages (see [README.md](./README.md)), so the live site needs none of the commands below. They're alternatives for other hosts.

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

### Netlify

```bash
# Build
npm run build

# The dist/ directory will be deployed
```

### GitHub Pages

```bash
# Configure astro.config.mjs
export default defineConfig({
  site: 'https://username.github.io',
  base: '/flamingalo',
});

# Build and deploy
npm run build
# Push dist/ to gh-pages branch
```

## Troubleshooting

### Port in use

```bash
# Use another port
npm run dev -- --port 3000
```

### Cache issues

```bash
# Clear cache
rm -rf node_modules/.astro
npm run dev
```

### Build errors

```bash
# Clean everything and reinstall
rm -rf node_modules dist .astro
npm install
npm run build
```

## Recommended VSCode Extensions

When opening the project in VSCode, you'll be asked if you want to install recommended extensions. Install them for a better development experience:

- Astro
- Prettier
- ESLint
- Tailwind CSS IntelliSense
- EditorConfig

## Next Steps

1. ✅ Familiarize yourself with the project structure
2. ✅ Edit content in `constants/`
3. ✅ Customize styles in `global.css`
4. ✅ Add new components if needed
5. ✅ Test locally with `npm run dev`
6. ✅ Build with `npm run build`
7. ✅ Deploy to production

## Useful Resources

- [Astro Documentation](https://docs.astro.build)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

## Getting Help

- Read [ARCHITECTURE.md](./ARCHITECTURE.md)
- Check [README.md](./README.md)
- GitHub Issues

## Tips

### Hot Reload

Astro automatically reloads:
- ✅ `.astro` components
- ✅ React components
- ✅ CSS styles
- ✅ Files in `public/`

### Performance

- Use `client:load` only when necessary
- Prefer Astro components for static content
- Optimize images before adding

### TypeScript

- Always define types for props
- Use `type` for type imports
- Enable strict mode in `tsconfig.json`

## Advanced Commands

```bash
# Astro check
npm run astro check

# Add integration
npm run astro add <integration>

# Project info
npm run astro info
```

Happy coding! 🚀
