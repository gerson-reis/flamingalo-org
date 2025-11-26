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
│   ├── components/      # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── InfoSection.tsx
│   │   ├── SurvivalGuide.tsx
│   │   ├── GetInvolved.tsx
│   │   └── Footer.tsx
│   ├── constants/       # Constants
│   ├── layouts/         # Astro layouts
│   ├── pages/          # Pages
│   ├── styles/         # Global styles
│   └── types/          # TypeScript types
└── public/             # Static files
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

### Event Information

Edit `src/constants/social-links.ts`:

```typescript
export const EVENT_INFO = {
  title: "Mundo Bizarro",
  date: "April 30 – May 5",
  location: "Alentejo, Portugal",
  // ...
};
```

### Social Links

Edit `src/constants/social-links.ts`:

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
// src/components/MyComponent.tsx
import React from 'react';
import type { MyComponentProps } from '../types';

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

3. Export in index:

```typescript
// src/components/index.ts
export { MyComponent } from './MyComponent';
```

4. Use in page:

```astro
---
// src/pages/index.astro
import { MyComponent } from '../components';
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
