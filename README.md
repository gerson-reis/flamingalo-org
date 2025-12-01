# Flamingalo - Burn Portugal 🦩🔥

Official website for Flamingalo, the Burning Man-inspired event in Portugal.

## 🚀 Technologies

- **Astro 5** - Modern, fast web framework
- **React 19** - UI component library
- **TypeScript** - Static typing for JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **HeroUI** - React component library

## 📁 Project Structure

```
flamingalo/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx       # Header with logo
│   │   ├── Hero.tsx         # Animated hero banner
│   │   ├── InfoCard.tsx     # Info card component
│   │   ├── InfoSection.tsx  # Info cards section
│   │   ├── SurvivalGuide.tsx # Survival guide section
│   │   ├── SocialCard.tsx   # Social media card
│   │   ├── GetInvolved.tsx  # Get involved section
│   │   ├── Footer.tsx       # Footer component
│   │   └── index.ts         # Component exports
│   ├── layouts/
│   │   └── Layout.astro     # Base layout
│   ├── pages/
│   │   └── index.astro      # Home page
│   └── styles/
│       └── global.css       # Global styles & animations
├── public/                  # Static assets
│   ├── favicon.svg
│   ├── flamingalo-logo-text-2025-v1.png
│   ├── mundo-bizarro-type-pink.png
│   └── mundo-bizarro-pano-v2.jpg
├── astro.config.mjs         # Astro configuration
├── tailwind.config.ts       # Tailwind configuration
└── package.json

```

## 🎨 Components

### Header
Fixed header with logo and white background effect.

### Hero
Main banner featuring:
- Infinite scroll animation background
- "Mundo Bizarro" logo with blend mode
- Date and location info
- CTA button with skew animations

### InfoSection
Responsive grid with 4 info cards (emoji + text).

### SurvivalGuide
Download section for the survival guide PDF.

### GetInvolved
Grid of 6 social media cards with links to:
- Telegram (main & newsletter)
- Instagram
- Facebook
- Email newsletter
- Organization info

### Footer
Simple footer with event description.

## 🎯 Features

### Componentization
- Isolated, reusable React components
- TypeScript-typed props
- Clear separation of concerns

### Performance
- Static Site Generation (SSG) with Astro
- Selective React component hydration with `client:load`
- Image optimization

### Accessibility
- Skip navigation link
- Alt text on images
- Semantic HTML
- Proper heading hierarchy

### Responsiveness
- Mobile-first design
- Responsive grid system
- Breakpoints for tablet and desktop
- Adaptive images

### Animations
- Infinite scrolling banner (CSS keyframes)
- Skew button animations
- Smooth hover effects
- 3D transforms for better performance

## 🛠️ Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview build
npm run preview
```

## 🌐 Deployment

The project is ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 📝 Best Practices Implemented

### Structure
- ✅ Small, focused components
- ✅ Separation of layouts, pages, and components
- ✅ Centralized exports (`index.ts`)

### TypeScript
- ✅ Interfaces for all props
- ✅ Strict typing enabled
- ✅ Props with default values

### CSS
- ✅ Centralized global styles
- ✅ CSS custom properties for animations
- ✅ Mobile-first approach
- ✅ BEM-like naming convention

### Performance
- ✅ Lazy loading of React components
- ✅ Font preloading
- ✅ Asset optimization
- ✅ 3D transforms for smooth animations

### Accessibility
- ✅ Skip navigation link
- ✅ Semantic HTML
- ✅ ARIA labels where needed
- ✅ Proper color contrast

## 🎨 Color Palette

- **Primary Pink**: `#e74c76`
- **Highlight Yellow**: `yellow`
- **Light Background**: `#f8f8f8`
- **Dark Text**: `#333`
- **Footer**: `#2c2c2c`

## 📱 Breakpoints

- **Mobile**: up to 600px
- **Tablet**: 768px
- **Desktop**: 1024px+

## 🔗 External Links

- [Registration Form](https://docs.google.com/forms/d/e/1FAIpQLScs8aI-l4wNJsx-DzniUFuuZE5TOFTVsRtmzK8fiW-8_zx-qw/viewform?usp=header)
- [Survival Guide](https://drive.google.com/file/d/1vd2aHBn61nMJj_PD7GqsoHOPr73e7DNK/view?usp=sharing)
- [Telegram Flamingalo 2025](https://t.me/+8rF8c-tPM9c5MGU0)
- [Instagram](https://www.instagram.com/flamingalo.pt/)
- [Facebook](https://www.facebook.com/groups/flamingalo/)
- [Telegram Newsletter](https://t.me/flamingalo_news)
- [Email Newsletter](https://subscribepage.io/Flamingalo)

## 📄 License

© Flamingalo - All rights reserved
