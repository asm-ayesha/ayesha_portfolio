
# Ayesha Siddika Portfolio

Live:

Description
- A professional, motion-forward portfolio template built with Next.js (App Router), Tailwind CSS and Framer Motion. Designed for fast iteration and clean visuals with a dark, glassmorphism aesthetic.

Features
- Animated hero with profile ring
- Custom loading screen with progress counter
- Projects section with live iframe previews (driven by `src/constants/siteData.js`)
- Smooth scrolling (Lenis) and custom cursor
- Responsive, mobile-first layout with Tailwind utilities

Tech stack
- Next.js (App Router)
- React + JSX
- Tailwind CSS
- Framer Motion
- Lenis (smooth scrolling)
- React Icons

Folder structure (key files)
- `src/app/` — Next.js App Router entry (layout, page)
	- `layout.js` — global metadata & `ClientShell` wrapper
	- `page.js` — home page composition
- `src/components/` — reusable UI (LoadingScreen, ClientShell, ProjectCard, Navbar, Cursor, etc.)
- `src/sections/` — page sections (Hero, About, Projects, Contact)
- `src/constants/siteData.js` — central content source (nav, projects, social links)
- `src/app/globals.css` — global CSS and helper classes

Requirements
- Node.js 18+ (LTS recommended)
- npm or yarn

Quick start
1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Build & run production

```bash
npm run build
npm run start
```

Editing content
- Change visible site content in `src/constants/siteData.js` (projects, social links, hero roles).
- Update site title and OpenGraph metadata in `src/app/layout.js`.


