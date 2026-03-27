# Afolabi Omotoso Portfolio + Blog

A starter portfolio website and Markdown-powered blog built with Next.js, React, Tailwind CSS, `gray-matter`, `remark`, and `remark-html`.

This version has been tailored to Afolabi Omotoso's CV for a platform engineering and DevOps-focused personal site.

## Stack

- Next.js App Router
- React
- Tailwind CSS
- Markdown blog content with static generation
- Netlify-ready contact form
- Optional dark/light mode toggle
- SEO metadata and sitemap support

## Project structure

```text
.
├── app
│   ├── blog
│   │   ├── [slug]/page.tsx
│   │   └── page.tsx
│   ├── contact/page.tsx
│   ├── portfolio/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── sitemap.ts
├── components
│   ├── contact-form.tsx
│   ├── footer.tsx
│   ├── navbar.tsx
│   ├── project-card.tsx
│   ├── section-heading.tsx
│   └── theme-toggle.tsx
├── content
│   └── posts
│       ├── designing-for-speed-without-losing-clarity.md
│       └── why-static-content-still-wins.md
├── data
│   └── projects.ts
├── lib
│   └── posts.ts
├── .env.example
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and update the values:

```bash
cp .env.example .env.local
```

Variables:

- `NEXT_PUBLIC_SITE_URL`: Your production site URL. Example: `https://afolabiomotoso.com`

### 3. Run locally

```bash
npm run dev
```

Then open `http://localhost:3000`.

### 4. Review it locally

Start with these pages:

- `http://localhost:3000/`
- `http://localhost:3000/portfolio`
- `http://localhost:3000/blog`
- `http://localhost:3000/contact`

While reviewing locally, pay attention to:

- Whether the homepage summary feels accurate and senior enough
- Whether the portfolio cards should stay as achievement-style case studies or be replaced with named public projects
- Whether the contact section should show your phone number publicly
- Whether the blog tone feels like the kind of writing you want to publish

If something feels off, the easiest files to edit are:

- [`data/profile.ts`](/Users/afolabiomotoso/apps-build/afolabi.omotoso_com/data/profile.ts)
- [`data/projects.ts`](/Users/afolabiomotoso/apps-build/afolabi.omotoso_com/data/projects.ts)
- [`content/posts`](/Users/afolabiomotoso/apps-build/afolabi.omotoso_com/content/posts)

## Adding portfolio projects

Edit [`data/projects.ts`](/Users/afolabiomotoso/apps-build/afolabi.omotoso_com/data/projects.ts) to add, remove, or update project cards.

Each project has:

- `title`
- `description`
- `category`
- `stack`
- `href`

## Adding blog posts

Create a new Markdown file in [`content/posts`](/Users/afolabiomotoso/apps-build/afolabi.omotoso_com/content/posts) with frontmatter like:

```md
---
title: "My New Post"
date: "2026-03-26"
tags:
  - Next.js
  - Writing
excerpt: "A short description shown on the blog listing page."
---

Write the post content here.
```

When you run `npm run build`, Next.js statically generates the blog index and each individual post page.

## Deployment options

### Vercel

Best fit if you want the smoothest Next.js workflow.

Pros:

- First-party Next.js support
- Great defaults for previews, builds, and image optimization
- Fast setup and generous free tier for personal projects

Cons:

- More platform-specific coupling than a pure static host
- Advanced usage can grow beyond the free tier

Steps:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add environment variables in the Vercel project settings:
   - `NEXT_PUBLIC_SITE_URL=https://afolabiomotoso.com`
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id`
4. Deploy.
5. Add `afolabiomotoso.com` and optionally `blog.afolabiomotoso.com` under Vercel domain settings.

Official docs:

- https://vercel.com/docs/deployments/overview
- https://vercel.com/docs/domains/set-up-custom-domain

### Netlify

A strong option if you want solid previews and a polished static-site workflow.

Pros:

- Easy Git-based deploys
- Good preview deploy experience
- Works well for static and hybrid web projects

Cons:

- Next.js features sometimes need more adapter awareness than Vercel
- Native fit is slightly less seamless than Vercel for cutting-edge Next.js behavior

Steps:

1. Push the project to GitHub.
2. Import the repository into Netlify.
3. Set the build command to `npm run build`.
4. Set the publish directory according to the Netlify Next.js runtime guidance if prompted.
5. Add `NEXT_PUBLIC_SITE_URL=https://afolabiomotoso.com` in environment variables if you want the production metadata to match your domain.
6. Add your custom domains in Netlify domain settings.
7. After the first deploy, open `Forms` in the Netlify dashboard, select the `contact` form, and add email notifications for `afolabi@afolabiomotoso.com`.

Official docs:

- https://docs.netlify.com/site-deploys/create-deploys/
- https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/

### Cloudflare Pages

A very good choice if you want hosting close to your existing Cloudflare DNS setup.

Pros:

- Excellent edge performance
- Clean pairing with Cloudflare DNS and SSL
- Useful if you want the site and DNS managed in one ecosystem

Cons:

- Next.js support may require Cloudflare-specific build/runtime setup
- Slightly more platform nuance than Vercel for full Next.js feature coverage

Steps:

1. Push the project to GitHub.
2. Create a new Pages project in Cloudflare.
3. Connect the repository.
4. Configure the Pages build settings based on your selected Next.js integration/runtime.
5. Add the custom domain `afolabiomotoso.com`.
6. If you want a dedicated blog subdomain, add `blog.afolabiomotoso.com` as another custom domain.

Official docs:

- https://developers.cloudflare.com/pages/
- https://developers.cloudflare.com/pages/configuration/custom-domains/

## Cloudflare DNS configuration

If Cloudflare remains your DNS provider, you usually add DNS records in Cloudflare that point to the external host.

### Option A: Entire site on Vercel

Recommended when the whole site lives on one Next.js deployment and the blog is under `/blog`.

Main domain:

| Type | Name | Value | Proxy status |
| --- | --- | --- | --- |
| A | `@` | `76.76.21.21` | Start with `DNS only`; switch to `Proxied` after verification if desired |

Optional blog subdomain:

| Type | Name | Value | Proxy status |
| --- | --- | --- | --- |
| CNAME | `blog` | `cname.vercel-dns-0.com` | Start with `DNS only`; switch to `Proxied` after verification if desired |

Notes:

- Vercel documents `76.76.21.21` for apex domains and `cname.vercel-dns-0.com` for subdomains.
- In Cloudflare, the apex can also be configured with flattened CNAME behavior when appropriate, but Vercel’s documented apex setup is the direct A record above.

### Option B: Entire site on Netlify

Main domain:

| Type | Name | Value | Proxy status |
| --- | --- | --- | --- |
| Flattened CNAME | `@` | `apex-loadbalancer.netlify.com` | Start with `DNS only`; switch to `Proxied` after verification if desired |

Optional blog subdomain:

| Type | Name | Value | Proxy status |
| --- | --- | --- | --- |
| CNAME | `blog` | `your-site-name.netlify.app` | Start with `DNS only`; switch to `Proxied` after verification if desired |

Notes:

- Netlify recommends ALIAS, ANAME, or flattened CNAME for apex domains where supported.
- Cloudflare supports CNAME flattening at the apex, which is why this pairing works well.

### Option C: Cloudflare Pages hosting

If the site is hosted directly on Cloudflare Pages and the domain is already on Cloudflare, adding the custom domain usually configures the DNS automatically.

If you split the blog onto another host, then use a subdomain record such as:

| Type | Name | Value | Proxy status |
| --- | --- | --- | --- |
| CNAME | `blog` | `your-project.pages.dev` | Proxied or DNS only depending on Cloudflare Pages guidance |

### Cloudflare SSL

To keep HTTPS working cleanly:

1. In Cloudflare, keep SSL/TLS enabled.
2. Use `Full` or `Full (strict)` SSL mode once the hosting provider has issued its own certificate.
3. Add the custom domain inside the hosting provider dashboard first so the provider provisions a certificate for the hostname.
4. Wait for DNS propagation and certificate issuance.

In practice, both Cloudflare and the hosting provider participate:

- Cloudflare serves its edge certificate to visitors.
- Vercel, Netlify, or Cloudflare Pages serves the origin certificate expected behind Cloudflare.

## Recommended setup for this project

For this portfolio and blog, the cleanest path is:

1. Deploy the full Next.js app to Vercel.
2. Use `afolabiomotoso.com` as the primary domain.
3. Keep the blog at `afolabiomotoso.com/blog` unless you specifically want a separate blog deployment.
4. Manage DNS in Cloudflare with:
   - Apex `A` record to `76.76.21.21`
   - Optional `blog` CNAME to `cname.vercel-dns-0.com` only if you create a separate subdomain route

This gives you the least friction for Next.js while keeping Cloudflare in control of DNS and SSL at the edge.

## Performance and SEO recommendations

- Keep blog posts statically generated, which this starter already does.
- Add Open Graph images later for richer social sharing.
- Use `next/image` for future local images and project thumbnails.
- Keep portfolio content in structured data files to reduce layout churn.
- Run Lighthouse after deployment and compress any large media assets before upload.

## Notes

- The contact form is configured for Netlify Forms and is a good fit if you deploy this site on Netlify.
- The current copy has been tailored from your CV and LinkedIn URL, but you should still do a final personal review before publishing.
- If you prefer, you can remove the public phone number and keep email + LinkedIn only.
