# aval

Static site. Plain HTML/CSS/JS, one folder per page/funnel step, deployed to Vercel as a static site.

## Structure

- `/index.html` — root landing page
- `/<page>/index.html` — a page or funnel step lives in its own folder so it's addressable at `/<page>`
- `/api/*` — Vercel serverless functions, if/when needed (webhooks, form handlers)

## Deploy

Pushing to `main` triggers a Vercel deploy. No build step — static files are served as-is.
