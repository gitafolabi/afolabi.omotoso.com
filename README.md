# Portfolio + Blog

Portfolio website and Markdown-powered blog built with Next.js and Tailwind CSS.

## Stack

- Next.js App Router
- React
- Tailwind CSS
- Markdown posts with `gray-matter`, `remark`, and `remark-html`
- Formspree contact form

## Local development

Install dependencies:

```bash
npm install
```

Copy environment variables:

```bash
cp .env.example .env.local
```

Run locally:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_FORMSPREE_ENDPOINT`

See [.env.example](/Users/afolabiomotoso/apps-build/afolabi.omotoso_com/.env.example).

## Content updates

Portfolio content lives in:

- [data/profile.ts](/Users/afolabiomotoso/apps-build/afolabi.omotoso_com/data/profile.ts)
- [data/projects.ts](/Users/afolabiomotoso/apps-build/afolabi.omotoso_com/data/projects.ts)

Blog posts live in:

- [content/posts](/Users/afolabiomotoso/apps-build/afolabi.omotoso_com/content/posts)

## Quality checks

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Deploy to Vercel

1. Import the GitHub repository into Vercel.
2. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
3. Deploy.
4. In Vercel domain settings, add:
   - your apex domain
   - your `www` domain

## Form handling

The contact form uses Formspree.
Configure the provider and set the endpoint in your environment variables.

## Notes

- The site is statically generated for fast delivery.
- Blog posts are published from Markdown files in the repository.
- The contact form requires the Formspree endpoint to be configured in Vercel.
