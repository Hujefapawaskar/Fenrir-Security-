# Fenrir Security

AI-powered cybersecurity scanning dashboard built with React, Vite, and Tailwind CSS v4.

## Tech Stack

- React 19
- Vite 6
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Framer Motion
- Lucide Icons
- Gemini API integration (`@google/genai`)

## Local Development

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create `.env.local` from `.env.example` and set:

- `GEMINI_API_KEY` — required for chatbot responses
- `VITE_SITE_URL` — public site URL for canonical/OG/Twitter/sitemap tags

Example:

```env
GEMINI_API_KEY="your_gemini_api_key"
VITE_SITE_URL="https://your-site-name.netlify.app"
```

### 3) Start dev server

```bash
npm run dev
```

### 4) Build for production

```bash
npm run build
```

## SEO + Social Metadata

This project includes:

- Open Graph and Twitter card tags in `index.html`
- SVG logo, favicon, and social card in `public/`
- Auto-generated `robots.txt` and `sitemap.xml`

`npm run build` runs `prebuild`, which executes:

- `scripts/generate-seo.mjs`

This script uses `VITE_SITE_URL` to generate correct absolute URLs.

## Netlify Deployment

`netlify.toml` is already configured:

- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect: `/* -> /index.html` (200)

### Netlify environment variables

Set these in **Site settings → Environment variables**:

- `GEMINI_API_KEY`
- `VITE_SITE_URL` (your Netlify/custom domain URL)

## Project Structure

- `src/` — app source
- `public/` — static assets (logo, social card, sitemap, robots)
- `scripts/generate-seo.mjs` — SEO file generator
- `netlify.toml` — Netlify build + redirects
