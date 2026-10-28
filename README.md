# Portfolio site for Preetham Jaladi

This project is a responsive React + TypeScript + Tailwind portfolio designed to present a software engineer profile for hiring teams and recruiters.

## Local setup

1. Install dependencies:
   npm install
2. Start the app:
   npm run dev
3. Build for production:
   npm run build

## Content configuration

### Steals page

`/steals` (also `/steals/`) is a static coming-soon page in `src/pages/Steals.tsx`.
The shared header, footer, and saved theme work on both pages. Header section links
return to the relevant homepage section.

Future resource metadata belongs in `src/data/steals.ts`. It supports a title,
category, description, URL or file path, copy/download action, and optional usage
instructions. Add actual files under `public/steals/prompts/`, `skills/`,
`workflows/`, or `templates/` when ready. No resources are currently published.

`npm run build` emits both `dist/index.html` and `dist/steals/index.html` with
root-relative assets. Deploy the entire `dist/` directory. Static hosts must serve
directory index files (and redirect `/steals` to `/steals/`), or rewrite `/steals`
to `/steals/index.html`. No catch-all SPA rewrite is required. Use a domain-root
deployment; subdirectory hosting requires adjusting the app's root-relative URLs.

The core content lives in `src/content.ts`.

Before deployment, update the following values:
- `profileLinks.email`
- `profileLinks.linkedin`
- `profileLinks.github`
- `projects[].repo`
- `projects[].demo`
- `experience[]` entries
- `education[]` dates
- `resumeUrl` if you want a custom resume file path

The resume file is `public/resume.pdf`, replaced with the supplied `Preetham.pdf`. Existing resume links download this file, and the production build copies it to `dist/resume.pdf`.

## Deployment notes

- The site includes SEO metadata in `index.html`.
- The canonical URL is configured as a placeholder: `https://portfolio.example.com/`.
- Replace the placeholder URL with the live deployment domain before publishing.
- Use `npm run build` and deploy the generated `dist/` folder to Vercel, Netlify, GitHub Pages, or a static host.
