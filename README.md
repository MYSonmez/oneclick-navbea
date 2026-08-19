# NAVBEA OneClick — Static Design Phase

This repository currently contains a static visual prototype built with pnpm,
Next.js App Router, React, strict TypeScript and Tailwind CSS.

## Active scope

- Sidebar links navigate between real routes.
- All other controls are intentionally static.
- There are no API routes, persistence, simulated mutations or connected data.
- The visual target is a dense, premium operational SaaS interface informed by
  the approved NAVBEA sector references.

## Routes

```text
/ 
/live
/safety
/work
/work/time-matching
/people
/assets
/solutions
/solutions/marketplace
/insights
/infrastructure
/administration
```

## Commands

```bash
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
pnpm check
```

## Deployment

The project is prepared for Vercel's native Next.js integration:

- Node.js `24.x`
- pnpm `11.19.0`
- install command: `pnpm install --frozen-lockfile`
- build command: `pnpm build`
- output: Next.js default
- root directory: repository root (`.`)

No environment variable is currently required. `NEXT_PUBLIC_APP_NAME` is
optional and defaults to `OneClick`. See `docs/DEPLOYMENT.md` for the release
checklist and Vercel settings.

Product research remains locally under `navbea/`. Visual references remain
locally under `oneclick/design reference images/`. These folders are not
committed or deployed; the application assets it uses live under `public/`.
