# Faris Alkhateeb — Portfolio

Cinematic scroll-driven portfolio built with **Next.js**, **React**, **Three.js**, and **Framer Motion**.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploy (Netlify)

This repo includes `netlify.toml` for automatic Next.js builds. Connect the GitHub repo in Netlify; no custom publish directory is required.

## Sync to GitHub

```bash
git add .
git commit -m "Your message"
git push origin main
```

## Project structure

- `src/app/` — pages and layout
- `src/components/` — UI and portfolio sections
- `public/` — hero video, profile photo, and work images (`public/works/`)

Legacy static HTML (`index.html`, `cinematic_portfolio.html`) is kept for reference; the live site uses the Next.js app.
