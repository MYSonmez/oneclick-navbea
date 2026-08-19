# Vercel Deployment

## Deployment profile

OneClick currently deploys as a static operational design application using
the native Vercel adapter for Next.js. There are no API routes, databases,
server actions or required secrets in the current milestone.

```text
Framework preset: Next.js
Root directory: .
Node.js: 24.x
Package manager: pnpm 11.19.0
Install command: pnpm install --frozen-lockfile
Build command: pnpm build
Output directory: Next.js default (do not override)
Production branch: main
```

The version declarations in `package.json`, `.nvmrc` and the lockfile are the
source of truth. A `vercel.json` file is intentionally not present because the
native framework defaults cover this project and avoid configuration drift.

## Environment variables

No environment variable is required for the current static milestone.

Optional:

```text
NEXT_PUBLIC_APP_NAME=OneClick
```

Values prefixed with `NEXT_PUBLIC_` are embedded into the browser bundle during
the build. Never store secrets in one of these variables. Future private API,
AI or database credentials must be configured in Vercel Project Settings and
must not use the `NEXT_PUBLIC_` prefix.

## Vercel project setup

1. Import `MYSonmez/oneclick-navbea` in Vercel.
2. Confirm that the detected framework is **Next.js**.
3. Keep the root directory at the repository root.
4. Select Node.js **24.x** if the dashboard does not inherit it automatically.
5. Do not override the output directory.
6. Keep `main` as the production branch.
7. Enable Deployment Protection for preview deployments while the application
   contains design-stage operational information.
8. Deploy the first build as a preview and complete the smoke test below before
   assigning a production domain.

## Required release gate

Run locally before every production release:

```bash
pnpm install --frozen-lockfile
pnpm check
```

The GitHub `Quality` workflow runs lint, strict TypeScript and the production
build on pushes to `main` and on pull requests. Do not promote a deployment if
that workflow or the Vercel build is red.

## Preview smoke test

Verify the generated Vercel preview on desktop and mobile:

- `/`
- `/live`
- `/safety`
- `/work`
- `/work/time-matching`
- `/people`
- `/assets`
- `/insights`
- `/solutions`
- `/solutions/marketplace`
- `/infrastructure`
- `/administration`
- an unknown route renders the branded 404 page
- legacy routes redirect to their semantic destinations
- images render without layout shift or broken URLs
- navigation is keyboard reachable and focus is visible
- there is no horizontal page overflow
- response headers include `nosniff`, clickjacking protection, referrer policy
  and the restricted permissions policy

## Search visibility

The current application is an operational workspace rather than a public
marketing site. It intentionally returns a `robots.txt` policy that blocks
crawling and also emits `noindex` metadata. Remove those restrictions only when
a deliberate public indexing decision has been made.

## Rollback

Vercel creates a deployment for each Git commit. If a production regression is
found, promote the last known-good deployment in the Vercel dashboard or revert
the offending commit on `main`. Do not patch the generated deployment output.
