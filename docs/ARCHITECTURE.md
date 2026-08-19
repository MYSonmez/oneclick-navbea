# Static Prototype Architecture

```text
src/app
  route pages
src/components/shell
  Link-only global shell
src/components/home
  static Home composition
src/components/static-workspaces.tsx
  static routed workspace compositions
public
  brand and spatial assets
```

All pages are React Server Components. There are no API routes, client state,
persistence libraries or simulated data adapters.
