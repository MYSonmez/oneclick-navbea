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
```

Product research remains under `navbea/`. Visual references remain under
`oneclick/design reference images/` and are indexed in `docs/ASSETS.md`.
