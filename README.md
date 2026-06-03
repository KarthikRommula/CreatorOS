# CreatorOS

A modern, all-in-one dashboard concept for content creators — combining channel analytics, AI-assisted video optimization, trend discovery, and competitor intelligence into a single polished interface.

CreatorOS is a Next.js application that demonstrates a complete "Creator Studio" experience. It presents two perspectives on a creator's workflow through a single page: a **Public** view focused on pre-publish optimization and content strategy, and a **Private** analytics view that surfaces deep performance metrics across reach, engagement, audience, and revenue.

> Note: The dashboards are populated with representative, hard-coded sample data to showcase the UI and interaction design. There is no backend or live data integration; the project is a front-end experience built entirely with React Server/Client Components.

## Features

The app is driven by a top-level **Public / Private** toggle that switches between two dashboards.

### Public — Creator Studio

A four-tab workspace for optimizing content before and after publishing:

- **Home (Analytics)** — Channel health at a glance: active subscribers with a growth sparkline, views and watch-time KPIs with mini-charts, and a "Top Performing Content" list annotated with why each video performs (e.g. *Evergreen*, *High Retention*) and metrics like retention and CTR.
- **Latest Video (Studio)** — An AI-powered optimization suite for the most recent upload, featuring a mocked video player, a tabbed metadata editor (title, description, tags), an optimization score, strengths/improvements checklists, and transcript/chapter tools.
- **Trend Watch** — A content-inspiration engine showing trending topics with growth metrics and AI context, source citations in an interactive dropdown, and aggregated audience requests with comment evidence shown in a dialog.
- **Intel (Competitors & Opportunities)** — Strategic intelligence including a market-pulse banner, a competitor activity feed with AI counter-strategies, collaboration matches with a pre-drafted outreach email dialog, and high-value sponsor opportunities.

### Private — Analytics Dashboard

A four-tab metrics deep-dive:

- **Reach** — Click-through rate, traffic-source breakdown, and impressions insights.
- **Engagement** — Audience retention key moments and average percentage viewed for Shorts and long-form content.
- **Audience** — Viewer types (returning vs. new), device demographics, and subscriber totals.
- **Revenue** — Monetization breakdown across RPM, ad revenue, and merch.

### General

- Light/dark/system theming via `next-themes`.
- Responsive, accessible UI built on Radix primitives (shadcn/ui).
- Smooth tab transitions and micro-interactions.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router) with [React 19](https://react.dev/)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) with `tailwindcss-animate` / `tw-animate-css`
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (New York style) built on [Radix UI](https://www.radix-ui.com/) primitives
- **Icons:** [lucide-react](https://lucide.dev/)
- **Charts:** [Recharts](https://recharts.org/)
- **Forms & Validation:** `react-hook-form` with `zod` and `@hookform/resolvers`
- **Notifications:** `sonner`
- **Analytics:** `@vercel/analytics`
- **Fonts:** Geist & Geist Mono via `next/font`

## Architecture / How It Works

The application is a single-route Next.js App Router project.

- `app/layout.tsx` defines the root layout, loads fonts, wires up the `ThemeProvider`, and mounts Vercel Analytics.
- `app/page.tsx` is the home route. It holds the `isPrivate` state for the Public/Private toggle and conditionally renders either `PublicDashboard` or `AnalyticsDashboard`.
- `components/public-dashboard.tsx` orchestrates the four public tabs, composing the `ChannelStats`, `VideoGrader`, `TrendWatch`, and `CompetitorIntel` feature components.
- `components/analytics-dashboard.tsx` renders the private four-tab metrics view.
- Reusable, presentational UI lives under `components/ui/` (shadcn/ui components), with shared helpers in `lib/utils.ts` (the `cn` class-merging utility) and custom hooks in `hooks/`.

All feature components are client components (`"use client"`) and currently render static sample data.

## Project Structure

```
CreatorOS/
├── app/
│   ├── globals.css           # Tailwind layers and design tokens
│   ├── layout.tsx            # Root layout, fonts, theme provider, analytics
│   └── page.tsx              # Home route + Public/Private toggle
├── components/
│   ├── analytics-dashboard.tsx   # Private analytics (Reach/Engagement/Audience/Revenue)
│   ├── public-dashboard.tsx      # Public studio tab orchestrator
│   ├── channel-stats.tsx         # Home tab — channel health
│   ├── video-grader.tsx          # Latest Video tab — AI optimization suite
│   ├── trend-watch.tsx           # Trend Watch tab
│   ├── competitor-intel.tsx      # Intel tab
│   ├── app-sidebar.tsx           # Studio-style navigation sidebar
│   ├── theme-provider.tsx        # next-themes wrapper
│   └── ui/                       # shadcn/ui component library
├── hooks/                    # Custom React hooks (use-mobile, use-toast)
├── lib/
│   └── utils.ts              # cn() class-name helper
├── public/                   # Icons and placeholder assets
├── styles/
├── components.json           # shadcn/ui configuration
├── next.config.mjs
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Prerequisites

- [Node.js](https://nodejs.org/) 18.18+ (Node 20 LTS or newer recommended for Next.js 16)
- A package manager — `npm`, `pnpm`, or `yarn`

## Installation

```bash
# Clone the repository
git clone https://github.com/KarthikRommula/CreatorOS.git
cd CreatorOS

# Install dependencies
npm install
# or
pnpm install
```

## Usage

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app. Use the Public/Private toggle in the top-right to switch dashboards.

### Build for production

```bash
npm run build
npm run start
```

## Available Scripts

| Script          | Description                                  |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Start the Next.js development server         |
| `npm run build` | Create an optimized production build         |
| `npm run start` | Run the production build                     |
| `npm run lint`  | Lint the project with ESLint                 |

## Configuration

No environment variables are required to run the project — all data is currently hard-coded sample content.

A few build settings are worth noting in `next.config.mjs`:

- `typescript.ignoreBuildErrors: true` — production builds are not blocked by TypeScript errors.
- `images.unoptimized: true` — Next.js Image Optimization is disabled (useful for static export / simple hosting).
