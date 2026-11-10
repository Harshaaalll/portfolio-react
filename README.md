# Harshal Bhambhani — portfolio (React)

Vite + React rebuild of [harshaaalll.github.io](https://harshaaalll.github.io/), same design, deployed on Vercel.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the build locally
```

## How it is organised

- `src/pages/Home.jsx`, `src/pages/Portfolio.jsx`: the two routes (`/` and `/portfolio`). `Portfolio` is lazy-loaded.
- `src/components/home/*`: Nav, Hero, About, Experience, Projects, Contact, Footer.
- `src/components/portfolio/ProjectSection.jsx`: renders one project write-up (TL;DR, metrics, flowchart, workflow, decisions, insight, GitHub link).
- `src/data/projects.json`: the 18 project write-ups. `src/data/home.json`: project cards, experience and skills.
- `src/styles/*.css`: the original stylesheets, injected per page so the two pages never leak styles into each other.

## Add a project

Add an entry to `src/data/projects.json` (a `header` plus ordered `blocks`; copy an existing project) and a matching card to `src/data/home.json` with the same `id`.

## Deploy

`vercel.json` already sets the Vite build, SPA rewrites and redirects from the old `/portfolio.html` URL.
Import the repo at vercel.com/new (framework: Vite) or run `npx vercel --prod`.
