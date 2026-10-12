# aval

Static site. Plain HTML/CSS/JS, one folder per page/funnel step, deployed to Vercel as a static site.

## Structure

- `/index.html` — root landing page
- `/<page>/index.html` — a page or funnel step lives in its own folder so it's addressable at `/<page>`
- `/api/*` — Vercel serverless functions, if/when needed (webhooks, form handlers)

## Deploy

Pushing to `main` triggers a Vercel deploy. Vercel runs `npm run build` (`build.mjs`), which copies the site into `dist/` and minifies the HTML, CSS and JS. Source files stay unminified in the repo.

Fonts are self-hosted in `/fonts` (cached for a year). Images are cached in the browser for 7 days, so a replaced image needs a new filename to show up right away.
