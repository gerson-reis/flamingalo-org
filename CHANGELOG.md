# Changelog - Flamingalo Project

## 2026-09-24 – Flamingalo 2027 edition

### ✨ Added
- Added `src/components/2027/`, `src/constants/2027/` and the `/2027` + `/pt/2027` pages, following `ESTRUTURA-ANOS.md`
- Homepage (`/`, `/pt/`) and the blog and collaboration-guide pages now use the 2027 components
- Menus on every edition link to Flamingalo 2027, 2026 and 2025
- Hero dates now include the year (e.g. "May 12 – 17, 2027")
- The 2027 hero no longer uses the 2026 Cabaret Chaotica artwork: it has a flat brand-pink background, a "Flamingalo 2027" title in Amatic SC and a shorter height, so the info cards show on the first screen
- The Survival Guide button on the 2027 pages reads "Survival Guide 2027", with a note that the 2027 guide is coming soon and the button opens the 2026 guide meanwhile

### 🐛 Fixes
- `/2026` shows the 2026 edition again (May 27 – 31, 2026). The 2026-09-17 date update had edited the 2026 components, so `/2026` had been showing the 2027 dates
- The `/2025` hero shows the real 2025 dates, April 30 – May 5, 2025. It said "May 27 – June 1", a leftover from an earlier date update

### 📚 Documentation
- README, ESTRUTURA-ANOS, ARCHITECTURE and QUICKSTART updated for the 2027 edition, the Cloudflare Pages deploy and cloning on Windows

## 2026-09-23 – Flicket sign-up removed
- Removed the "Get Flickets" hero button from every edition, and the flicket form links from the two 2026 flickets blog posts
- Removed the now-unused `hero.getTickets` string and the `ctaText` / `ctaLink` hero props

## 2026-09-17 – 2027 dates on the homepage
- Homepage dates, intro card, social cards, Get Involved text and page title moved to Flamingalo 2027 (May 12 – 17, 2027)

## [2.0.0] - 2025-11-26

### ✨ Complete Restructure

Transformed the WordPress/Elementor site into a modern React + Astro application following best practices.

### 🏗️ Project Structure

#### Added Components
- `Header.tsx` - Fixed header with logo and white background effect
- `Hero.tsx` - Animated hero banner with infinite scroll background
- `InfoCard.tsx` - Reusable info card component
- `InfoSection.tsx` - Grid section with 4 info cards
- `SurvivalGuide.tsx` - Survival guide download section
- `SocialCard.tsx` - Reusable social media card
- `GetInvolved.tsx` - Social links grid section
- `Footer.tsx` - Simple footer component
- `index.ts` - Centralized component exports

#### Added Types
- `src/types/index.ts` - Shared TypeScript interfaces for all components

#### Added Constants
- `src/constants/social-links.ts` - Event info, social links, and site configuration

#### Added Layouts
- `Layout.astro` - Base layout with meta tags and fonts

#### Added Pages
- `index.astro` - Main page using all components

#### Added Styles
- `global.css` - Complete global styles with animations and responsive design

### 📚 Documentation

#### Added
- `README.md` - Complete project documentation
- `ARCHITECTURE.md` - Detailed architecture and design decisions
- `QUICKSTART.md` - Quick start guide for developers
- `CHANGELOG.md` - This file

### 🛠️ Configuration

#### Added
- `.prettierrc` - Code formatting configuration
- `.eslintrc.json` - Linting rules
- `.editorconfig` - Editor configuration
- `.vscode/settings.json` - VSCode settings
- `.vscode/extensions.json` - Recommended extensions

### 🎨 Design Features

#### Implemented
- **Animations**
  - Infinite scrolling banner background
  - Skew animations on CTA buttons
  - Mix blend modes for visual effects
  - Smooth hover transitions

- **Responsive Design**
  - Mobile-first approach
  - Breakpoints: 600px, 768px, 1024px
  - Flexible grid layouts
  - Adaptive images

- **Accessibility**
  - Skip navigation link
  - Semantic HTML structure
  - Alt text on all images
  - Keyboard navigation support
  - WCAG 2.1 AA compliance

### 🚀 Performance

#### Optimizations
- Static Site Generation (SSG)
- Partial hydration with `client:load`
- CSS animations using transform/opacity
- Image optimization
- Minimal JavaScript bundle

### 📦 Dependencies

#### Core
- Astro 5.16.1
- React 19.2.0
- TypeScript 19.2.7
- Tailwind CSS 4.1.17
- HeroUI 2.8.5
- Framer Motion 12.23.24

### 🎯 Best Practices

#### Implemented
- **Component Architecture**
  - Small, focused components
  - Typed props with TypeScript
  - Presentational components
  - Reusable and composable

- **Code Organization**
  - Clear separation of concerns
  - Centralized constants
  - Shared type definitions
  - Logical folder structure

- **CSS Strategy**
  - Global styles for common patterns
  - Component-specific styles
  - CSS custom properties
  - Mobile-first responsive design

- **TypeScript**
  - Strict typing enabled
  - Interfaces for all props
  - Type imports with `type` keyword
  - Shared type definitions

### 🔧 Developer Experience

#### Improvements
- Hot module replacement
- TypeScript IntelliSense
- ESLint integration
- Prettier formatting
- VSCode extensions recommendations
- Comprehensive documentation

### 📱 Responsiveness

#### Breakpoints
- **Mobile**: < 600px
  - Single column layouts
  - Smaller typography
  - Stacked components

- **Tablet**: 768px - 1024px
  - Two column grids
  - Medium typography
  - Adjusted spacing

- **Desktop**: > 1024px
  - Multi-column grids
  - Full-size typography
  - Optimal spacing

### 🎨 Color Palette

- **Primary Pink**: `#e74c76` - Main brand color
- **Highlight Yellow**: `yellow` - Accent color
- **Light Background**: `#f8f8f8` - Section backgrounds
- **Dark Text**: `#333` - Body text
- **Footer Dark**: `#2c2c2c` - Footer background

### 📊 Metrics

#### Target Performance
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.8s

### 🔗 External Links

All external links preserved from original site:
- Ticket registration form
- Survival guide PDF
- Telegram groups (main & newsletter)
- Instagram profile
- Facebook group
- Email newsletter

### ⚡ Build Output

```
Production build generates:
- Optimized HTML
- Minified CSS
- Tree-shaken JavaScript
- Optimized images
- Static assets
```

### 🎯 Migration from WordPress

#### Preserved
- ✅ All content and information
- ✅ Visual design and animations
- ✅ Responsive layout
- ✅ All external links
- ✅ Brand colors and typography

#### Improved
- ✅ Performance (SSG vs WordPress)
- ✅ Code organization (components vs Elementor)
- ✅ Maintainability (TypeScript vs inline HTML)
- ✅ Developer experience (modern tooling)
- ✅ SEO (static HTML)
- ✅ Security (no backend)

### 🚀 Deployment Ready

The project is ready to deploy to:
- Vercel (recommended)
- Netlify
- Cloudflare Pages
- GitHub Pages
- Any static hosting

### 📝 Future Enhancements

#### Recommended
- [ ] Add unit tests (Vitest/Testing Library)
- [ ] Add E2E tests (Playwright)
- [ ] Implement i18n (Portuguese/English)
- [ ] Add CMS integration (Strapi/Sanity)
- [ ] PWA capabilities
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Image lazy loading improvements

---

## Migration Summary

**Before**: WordPress + Elementor site with inline styles and limited maintainability

**After**: Modern React + Astro application with:
- ✅ Component-based architecture
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Full documentation
- ✅ Developer tooling
- ✅ Performance optimizations
- ✅ Accessibility improvements
- ✅ Best practices implementation

**Result**: A production-ready, performant, and maintainable website that preserves all original content while providing a superior development experience.

