# The Daily Paper Podcast Website

This repository contains the source code for **The Daily Paper Podcast** website, built as a modern, static React application. It serves as the public-facing home for the show: episodes, show notes, links to research, and any supporting content you decide to publish.

The repo is intended to be straightforward to run locally and easy to deploy to static hosting (e.g., GitHub Pages + custom domain).

---

## Tech Stack

- **Framework:** [Vite](https://vitejs.dev/) + [React](https://react.dev/)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Library:** shadcn-ui (headless/unstyled components layered on top of Tailwind)
- **Package manager:** npm (lockfile included); a Bun lockfile is also present if you prefer Bun

---

## Prerequisites

You’ll need:

- **Node.js:** Recommended LTS (>= 18; 20 LTS is ideal)
- **npm:** Comes with Node

Check your versions:

```bash
node -v
npm -v
```

---

## Getting Started

Clone the repo and install dependencies:

```bash
# Clone
git clone git@github.com:RobTheEconomist/daily-paper-insights.git

# Enter project directory
cd daily-paper-insights

# Install dependencies
npm install
```

### Local Development

Start the dev server:

```bash
npm run dev
```

By default Vite will print a local URL, typically:

```text
http://localhost:5173/
```

Open that in your browser to view the site. The dev server supports fast hot-reloading when you edit files under `src/`.

To stop the dev server, press `Ctrl + C` in the terminal.

---

## Scripts

The exact scripts are defined in `package.json`, but the typical Vite workflow applies:

- **`npm run dev`**  
  Start the development server with hot module reload (HMR).

- **`npm run build`**  
  Create an optimized production build in the `dist/` folder.

- **`npm run preview`**  
  Serve the contents of `dist/` locally to verify the production build.

- **`npm run lint`** (if present)  
  Run the linting rules configured for the project.

If additional scripts are added (e.g., test, format), they should be documented here as well.

---

## Project Structure

High-level layout:

```text
.
├── public/              # Static assets copied as-is to the final build
├── src/                 # Application source code (React + TypeScript)
│   ├── components/      # Reusable UI components (shadcn/Tailwind-based)
│   ├── pages/           # Page-level components / route views (if used)
│   ├── lib/             # Utilities, helpers, configuration (if used)
│   ├── main.tsx         # Application entry point (Vite/React root)
│   └── App.tsx          # Root App component and layout
├── index.html           # Vite entry HTML (and current "Coming Soon" shell if used)
├── CNAME                # Custom domain configuration for GitHub Pages
├── package.json         # Dependencies and npm scripts
├── package-lock.json    # npm lockfile
├── bun.lockb            # Bun lockfile (optional alternative PM)
├── tailwind.config.ts   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration for Tailwind
├── tsconfig*.json       # TypeScript configuration files
└── vite.config.ts       # Vite configuration
```

> Note: Folder names under `src/` (e.g., `components`, `pages`, `lib`) may evolve. If you significantly reorganize, please update this section.

---

## Styling & UI Conventions

- Tailwind is used for **layout and styling**.  
  Keep layout concerns in JSX via Tailwind utility classes; avoid ad-hoc CSS files unless clearly scoped.

- shadcn-ui is used for **consistent components** (buttons, inputs, cards, etc.).  
  When introducing new UI, prefer:
  - Reusing existing shadcn components
  - Adding new components under `src/components/` with a consistent pattern

- Typography, colors, and general look-and-feel should follow the **modern newspaper aesthetic**:
  - Serif for headlines (e.g., article titles, masthead)
  - Sans-serif for body copy
  - Neutral, paper-like backgrounds; restrained use of accent colors

---

## Data & Content

The initial version of this project includes **synthetic / placeholder content** (text, images, and sample data) that may look real but is not production-ready.

Before going live:

1. Audit `src/` for placeholder copy, mock data, and example content.
2. Replace with:
   - Real podcast episodes and metadata
   - Real links to research papers or sources
   - Actual social links / contact details
3. Remove any stubbed components or routes that aren’t part of the intended public site.

If you’re adding structured data (e.g., episodes, guests, research links), consider:

- Centralizing it in a config file (e.g., `src/data/episodes.ts`)
- Documenting any assumptions or manual steps required to update it

---

## Deployment

This project builds to a static site and can be deployed to any static host.

### Production Build

Generate the optimized build:

```bash
npm run build
```

This produces a `dist/` directory containing static assets (HTML, JS, CSS).

### GitHub Pages + Custom Domain

This repo is configured to work well with GitHub Pages:

- **GitHub Pages:** configure the repo to deploy from the `main` branch (root or `dist` depending on your setup).
- **CNAME:** the `CNAME` file in the repo should contain the custom domain (e.g., `www.thedailypaperpodcast.com`).
- **DNS:** the registrar for `thedailypaperpodcast.com` should point:
  - `www` (CNAME) → `<github-username>.github.io`
  - Root domain (`@`) via A records if you want root redirects.

If you change the deployment target (Netlify, Vercel, etc.), update this section with the relevant steps.

---

## Development Workflow

Suggested workflow for contributors:

1. **Create a feature branch** from `main`:

   ```bash
   git checkout -b feature/<short-description>
   ```

2. **Run locally** and iterate with:

   ```bash
   npm run dev
   ```

3. **Keep commits small and focused**, with clear messages.

4. **Run checks** before opening a PR:

   ```bash
   npm run build
   # and if available:
   npm run lint
   ```

5. **Open a pull request** into `main` and request review.

---

## Environment Configuration

At the time of writing, the application is a static frontend and does not require runtime secrets to function.

If you later integrate external services (analytics, podcast hosting APIs, etc.), follow these guidelines:

- Use `.env` / `.env.local` and Vite’s `VITE_` prefix for exposed variables.
- Never commit secrets (API keys, tokens) to the repo.
- Document any required environment variables here (name, purpose, example values).

---

## Maintenance Notes

- **Node / dependencies:** Periodically update dependencies (e.g., via `npm outdated` / `npm update`) and test `npm run build` + `npm run preview`.
- **Tailwind / shadcn:** When adding new components, keep the design system coherent.
- **Accessibility:** Aim for good keyboard navigation and basic ARIA coverage; this is a public marketing site.
- **SEO:** Configure `<title>`, `<meta>` tags, and open graph tags in `index.html` or via React Helmet / similar if you add it.

---

## Contact

For questions about this repo, deployment, or future architecture changes, please contact the repository owner or maintainer.
