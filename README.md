# Portfolio + Blog

Portfolio website and Markdown-powered blog built with Next.js and Tailwind CSS.

## Stack

- Next.js App Router
- React
- Tailwind CSS
- Markdown posts with `gray-matter`, `remark`, and `remark-html`

## Local development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

- `NEXT_PUBLIC_SITE_URL`
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

## Content updates

Portfolio content lives in:

- [data/profile.ts](https://github.com/gitafolabi/afolabi.omotoso.com/blob/main/data/profile.ts)
- [data/projects.ts](https://github.com/gitafolabi/afolabi.omotoso.com/blob/main/data/projects.ts)

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
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL`
3. Deploy

## Form handling

The contact form submits to a Vercel route and sends email through Resend.
Configure the required mail variables in Vercel environment variables.

## Notes

- The site is statically generated for fast delivery.
- Blog posts are published from Markdown files in the repository.
- The contact form requires the Resend-related mail variables to be configured in Vercel.
