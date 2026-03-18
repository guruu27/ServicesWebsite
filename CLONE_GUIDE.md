# FinSight Website Clone — Step-by-Step Guide

> Reference: [https://finsight.framer.ai/](https://finsight.framer.ai/)
> A modern, dark-themed fintech landing page showcasing a smart money management product.

---

## Table of Contents

1. [Tech Stack & Setup](#1-tech-stack--setup)
2. [Design System](#2-design-system)
3. [Project Structure](#3-project-structure)
4. [Global Styles & Fonts](#4-global-styles--fonts)
5. [Navigation Bar](#5-navigation-bar)
6. [Hero Section](#6-hero-section)
7. [Features Grid Section](#7-features-grid-section)
8. [Product Showcase Section](#8-product-showcase-section)
9. [Benefits / Integration Section](#9-benefits--integration-section)
10. [Testimonials / Social Proof](#10-testimonials--social-proof)
11. [Call-to-Action Section](#11-call-to-action-section)
12. [Footer](#12-footer)
13. [Animations & Interactions](#13-animations--interactions)
14. [Responsive Design](#14-responsive-design)
15. [Deployment](#15-deployment)

---

## 1. Tech Stack & Setup

### Recommended Stack

| Tool | Purpose |
|------|---------|
| **Next.js 14+** (App Router) | Framework (React, SSR, routing) |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Scroll & hover animations |
| **TypeScript** | Type safety |

### Initialize Project

```bash
npx create-next-app@latest finsight-clone --typescript --tailwind --app --src-dir
cd finsight-clone
npm install framer-motion
```

### Folder Layout

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Home page assembling all sections
│   └── globals.css         # Tailwind directives & custom CSS
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── FeaturesGrid.tsx
│   ├── ProductShowcase.tsx
│   ├── Benefits.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── lib/
│   └── constants.ts        # Colors, copy, links
└── public/
    └── images/             # Mockups, icons, logos
```

---

## 2. Design System

### Color Palette

```css
:root {
  /* Backgrounds */
  --bg-primary:    #010204;   /* Deep navy-black */
  --bg-secondary:  #0e0b0e;   /* Slightly lighter dark */
  --bg-card:       rgba(255, 255, 255, 0.04); /* Glass card fill */

  /* Accents */
  --accent-blue:   #007be3;
  --accent-purple: #4f4ff1;
  --accent-cyan:   #0099ff;

  /* Text */
  --text-primary:  #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.6);
  --text-muted:    rgba(255, 255, 255, 0.3);

  /* Borders */
  --border-card:   rgba(255, 255, 255, 0.08);

  /* Gradients */
  --gradient-hero:  linear-gradient(135deg, #007be3, #4f4ff1);
  --gradient-mask:  radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, #010204 70%);
}
```

### Tailwind Config Additions

```js
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        dark:    { DEFAULT: '#010204', 800: '#0e0b0e', 700: '#252525' },
        accent:  { blue: '#007be3', purple: '#4f4ff1', cyan: '#0099ff' },
      },
      fontFamily: {
        display: ['"Be Vietnam Pro"', 'sans-serif'],
        body:    ['"Inter"', 'sans-serif'],
        mono:    ['"Space Grotesk"', 'monospace'],
      },
      borderRadius: {
        card: '20px',
        pill: '100px',
      },
      backdropBlur: {
        glass: '10px',
      },
    },
  },
};
```

---

## 3. Project Structure

```
page.tsx (home)
│
├── <Navbar />
├── <Hero />
├── <FeaturesGrid />
├── <ProductShowcase />
├── <Benefits />
├── <Testimonials />
├── <CTA />
└── <Footer />
```

Each section is a full-width block. The page scrolls vertically through them.

---

## 4. Global Styles & Fonts

### Import Google Fonts

In `layout.tsx`:

```tsx
import { Be_Vietnam_Pro, Inter, Space_Grotesk } from 'next/font/google';

const beVietnam = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-body',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-mono',
});
```

### Base Styles (`globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background: #010204;
  color: #ffffff;
  font-family: var(--font-body);
  overflow-x: hidden;
}

/* Glass card utility */
.glass-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

/* Gradient text utility */
.gradient-text {
  background: linear-gradient(135deg, #007be3, #4f4ff1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## 5. Navigation Bar

### Design Specs
- **Position:** Fixed/sticky at top, full width
- **Background:** Transparent with blur on scroll → `backdrop-filter: blur(10px)`
- **Layout:** Logo left, nav links center, CTA button right
- **Border:** Subtle bottom border `rgba(255,255,255,0.08)`

### Structure

```tsx
// components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-glass border-b border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <span className="font-display font-semibold text-lg">FinSight</span>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-sm text-white/60">
          <a href="#features">Features</a>
          <a href="#product">Product</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
        </div>

        {/* CTA */}
        <button className="bg-white text-black text-sm font-medium px-5 py-2 rounded-pill
                           hover:bg-white/90 transition-all duration-300">
          Get Started
        </button>
      </div>
    </nav>
  );
}
```

---

## 6. Hero Section

### Design Specs
- **Background:** Deep dark `#010204` with radial gradient glow in blue/purple
- **Layout:** Centered text, large headline, subtitle, CTA buttons
- **Typography:** Headline 64–96px (`font-display`), weight 600–700
- **Animation:** Spinning circular border indicator (scroll hint)
- **Gradient glow:** Radial gradient behind the headline for depth

### Structure

```tsx
// components/Hero.tsx
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#007be330_0%,_transparent_70%)]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl"
      >
        {/* Badge */}
        <span className="inline-block text-xs font-mono text-accent-cyan border border-white/10
                         px-4 py-1.5 rounded-pill mb-6">
          Smart Financial Management
        </span>

        {/* Headline */}
        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-[96px] leading-tight mb-6">
          Money moves{' '}
          <span className="gradient-text">smarter</span>{' '}
          with you
        </h1>

        {/* Subtitle */}
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Track, manage, and grow your finances with AI-powered insights
          that adapt to your spending habits.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-black font-medium px-8 py-3 rounded-pill
                             hover:bg-white/90 transition-all duration-300">
            Get Started Free
          </button>
          <button className="border border-white/20 text-white font-medium px-8 py-3 rounded-pill
                             hover:border-white/40 transition-all duration-300">
            Watch Demo
          </button>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 w-8 h-8 border border-white/20 rounded-full
                      animate-spin-slow" />
    </section>
  );
}
```

### Scroll Indicator Animation

```css
/* globals.css */
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}
```

---

## 7. Features Grid Section

### Design Specs
- **Layout:** 3-column grid on desktop → 2-col tablet → 1-col mobile
- **Cards:** Glass-morphism style, rounded corners (20px), hover lift effect
- **Content:** Icon/image + title + short description per card

### Structure

```tsx
// components/FeaturesGrid.tsx
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Smart Analytics',
    description: 'AI-powered insights that break down your spending patterns and suggest optimizations.',
    image: '/images/feature-analytics.png',
  },
  {
    title: 'Real-time Tracking',
    description: 'Monitor your transactions as they happen with instant notifications and categorization.',
    image: '/images/feature-tracking.png',
  },
  {
    title: 'Goal Planning',
    description: 'Set financial goals and get personalized recommendations to achieve them faster.',
    image: '/images/feature-goals.png',
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-16">
          Everything you need to{' '}
          <span className="gradient-text">take control</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="aspect-video rounded-xl overflow-hidden mb-5 bg-dark-800">
                <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">{f.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 8. Product Showcase Section

### Design Specs
- **Layout:** Large centered mockup (phone or dashboard) with floating UI elements
- **Style:** Device frames with aspect-ratio scaling, glass overlays
- **Background:** Subtle gradient glow behind the device

### Structure

```tsx
// components/ProductShowcase.tsx
import { motion } from 'framer-motion';

export default function ProductShowcase() {
  return (
    <section id="product" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#4f4ff120_0%,_transparent_60%)]" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-6">
          Beautifully designed for{' '}
          <span className="gradient-text">your finances</span>
        </h2>
        <p className="text-white/60 text-center max-w-xl mx-auto mb-16">
          An intuitive interface that makes managing money feel effortless.
        </p>

        {/* Device Mockup */}
        <div className="flex justify-center gap-8 items-end">
          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card p-3 w-[280px] aspect-[9/19]"
          >
            <img
              src="/images/phone-mockup.png"
              alt="FinSight mobile app"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card p-3 w-[500px] aspect-video hidden lg:block"
          >
            <img
              src="/images/dashboard-mockup.png"
              alt="FinSight dashboard"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

---

## 9. Benefits / Integration Section

### Design Specs
- **Layout:** Two-column — text left, visual right (alternating rows)
- **Cards:** Side-by-side content blocks with icons/images
- **Style:** Same glass-card treatment

### Structure

```tsx
// components/Benefits.tsx
import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Bank-level Security',
    description: 'Your data is encrypted end-to-end with 256-bit AES encryption.',
    image: '/images/benefit-security.png',
  },
  {
    title: 'Seamless Integrations',
    description: 'Connect with 10,000+ banks and financial institutions worldwide.',
    image: '/images/benefit-integrations.png',
  },
];

export default function Benefits() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto space-y-20">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col lg:flex-row items-center gap-12 ${
              i % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Text */}
            <div className="flex-1">
              <h3 className="font-display font-bold text-3xl md:text-4xl mb-4">{b.title}</h3>
              <p className="text-white/60 text-lg leading-relaxed">{b.description}</p>
            </div>

            {/* Image */}
            <div className="flex-1 glass-card p-4">
              <img src={b.image} alt={b.title} className="w-full rounded-xl" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
```

---

## 10. Testimonials / Social Proof

### Design Specs
- **Layout:** Grid of quote cards
- **Style:** Glass cards with subtle borders, avatar + name + role

### Structure

```tsx
// components/Testimonials.tsx
const testimonials = [
  { name: 'Alex Johnson', role: 'Freelance Designer', quote: 'FinSight changed how I manage my business expenses.' },
  { name: 'Sarah Chen', role: 'Startup Founder', quote: 'The analytics alone saved me hours every month.' },
  { name: 'Mike Torres', role: 'Software Engineer', quote: 'Finally an app that actually understands my spending.' },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-16">
          Loved by <span className="gradient-text">thousands</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card p-8">
              <p className="text-white/80 text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="font-medium text-sm">{t.name}</p>
                <p className="text-white/40 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 11. Call-to-Action Section

### Design Specs
- **Background:** Gradient glow or glass panel
- **Content:** Large headline + button, centered
- **Border radius:** 26px on container card

### Structure

```tsx
// components/CTA.tsx
export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[900px] mx-auto glass-card p-16 text-center
                      bg-[radial-gradient(ellipse_at_center,_#007be315_0%,_transparent_70%)]">
        <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
          Ready to take control of your money?
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-lg mx-auto">
          Join thousands of users who are already managing their finances smarter.
        </p>
        <button className="bg-white text-black font-medium px-10 py-4 rounded-pill text-lg
                           hover:bg-white/90 transition-all duration-300">
          Get Started Free
        </button>
      </div>
    </section>
  );
}
```

---

## 12. Footer

### Design Specs
- **Max width:** 1200px centered
- **Layout:** Multi-column with logo, link groups, and social links
- **Border:** Top border `rgba(255,255,255,0.08)`
- **Link color:** `#0099ff` for external links

### Structure

```tsx
// components/Footer.tsx
const footerLinks = {
  Product:  ['Features', 'Pricing', 'Integrations', 'Changelog'],
  Company:  ['About', 'Blog', 'Careers', 'Press'],
  Legal:    ['Privacy', 'Terms', 'Security'],
  Support:  ['Help Center', 'Contact', 'Status'],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="font-display font-semibold text-lg">FinSight</span>
            <p className="text-white/40 text-sm mt-3">Money moves smarter with you.</p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-medium text-sm mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8
                        border-t border-white/[0.08] text-white/30 text-xs">
          <p>&copy; 2025 FinSight. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

---

## 13. Animations & Interactions

### Framer Motion Patterns Used

| Pattern | Implementation |
|---------|---------------|
| **Fade-in on scroll** | `whileInView={{ opacity: 1, y: 0 }}` with `initial={{ opacity: 0, y: 20 }}` |
| **Staggered children** | `transition={{ delay: i * 0.15 }}` in mapped lists |
| **Hover lift** | `hover:-translate-y-1` via Tailwind |
| **Button transitions** | `transition-all duration-300` with `cubic-bezier(0.4, 0, 0.2, 1)` |
| **Spinning scroll hint** | CSS `@keyframes` with 8s linear infinite rotation |
| **Background glow pulse** | Subtle opacity animation on radial gradients |

### Smooth Scroll

```css
html { scroll-behavior: smooth; }
```

### Performance Optimizations

```css
.animated-element {
  will-change: transform, opacity;
}
```

---

## 14. Responsive Design

### Breakpoints (Tailwind defaults)

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Default    | < 768px  | Single column, smaller text (40px headings) |
| `md`       | 768px+  | 2-column grids, medium text |
| `lg`       | 1024px+ | 3-column grids, full layout, 64–96px headings |

### Key Responsive Rules

- **Max container width:** `1200px` with `mx-auto`
- **Feature grid:** `grid-cols-1` → `md:grid-cols-2` → `lg:grid-cols-3`
- **Hero text:** `text-5xl` → `md:text-7xl` → `lg:text-[96px]`
- **Side-by-side sections:** Stack vertically on mobile via `flex-col lg:flex-row`
- **Navbar:** Hamburger menu on mobile (hidden links with toggle)

---

## 15. Deployment

### Option A: Vercel (Recommended for Next.js)

```bash
npm install -g vercel
vercel
```

### Option B: Static Export

```bash
# next.config.js → output: 'export'
npm run build
# Deploy the 'out/' folder to any static host (Netlify, Cloudflare Pages, etc.)
```

### Pre-Launch Checklist

- [ ] Replace all placeholder images with real mockup assets
- [ ] Replace placeholder copy with final content
- [ ] Test all breakpoints (mobile, tablet, desktop)
- [ ] Add meta tags & Open Graph images
- [ ] Add favicon and app icons
- [ ] Lighthouse audit (aim for 90+ on all metrics)
- [ ] Add analytics (Plausible, Vercel Analytics, etc.)

---

## Asset Checklist

| Asset | Purpose | Suggested Size |
|-------|---------|---------------|
| `logo.svg` | Navbar + footer logo | 32×32px |
| `phone-mockup.png` | Product showcase | 560×1200px |
| `dashboard-mockup.png` | Product showcase | 1000×600px |
| `feature-analytics.png` | Feature card | 600×400px |
| `feature-tracking.png` | Feature card | 600×400px |
| `feature-goals.png` | Feature card | 600×400px |
| `benefit-security.png` | Benefits section | 600×400px |
| `benefit-integrations.png` | Benefits section | 600×400px |
| `og-image.png` | Social sharing | 1200×630px |

---

## Quick Start Summary

```bash
# 1. Create project
npx create-next-app@latest finsight-clone --typescript --tailwind --app --src-dir
cd finsight-clone

# 2. Install dependencies
npm install framer-motion

# 3. Set up fonts in layout.tsx (Be Vietnam Pro, Inter, Space Grotesk)

# 4. Add design tokens to tailwind.config.ts

# 5. Create globals.css with glass-card and gradient-text utilities

# 6. Build components section by section (Navbar → Hero → Features → ... → Footer)

# 7. Assemble in page.tsx

# 8. Add images and final copy

# 9. Test responsive breakpoints

# 10. Deploy
```
