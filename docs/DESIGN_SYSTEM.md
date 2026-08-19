# OneClick Static Design System

## Direction

Premium light operational shell with a deep navy navigation rail and spatial
dark canvases. The interface should be dense, precise and readable rather than
an endless grid of oversized SaaS cards.

## Shell

- 76 px compact sidebar; 260 px CSS hover expansion.
- Compact mode uses clear icons and tooltips. Full labels and groups appear on
  hover or keyboard focus.
- No divider directly below the logo.
- 64 px top context bar.
- Sidebar destinations use Next.js `Link`; other controls remain static.

## Typography

- Inter Variable only.
- Home welcome title: 30 px / semibold.
- Operational page title: 28 px / semibold.
- Section title: 11–14 px / semibold.
- Operational body: 10–12 px.
- Metadata: 8–9 px, used sparingly; 7 px is reserved for compact technical labels.
- Metrics use tabular-looking alignment and strong contrast.

## Geometry

- Major canvas: 16–18 px radius.
- Cards: 12–14 px radius.
- Controls: 7–10 px radius.
- Avoid nested cards unless they communicate a real structural level.

## Palette

```text
Canvas       #F4F6F9
Surface      #FFFFFF
Text         #101828
Muted        #718094
Border       #DCE2EA
Navy         #071525
Blue         #1267E8
Success      #178366
Warning      #B57118
Danger       #D83E55
```

## Composition rules

- One dominant focal surface per page.
- Status strips remain compact and horizontal.
- Spatial pages allocate most width to the operational canvas.
- Workstation pages use explicit columns and alignment.
- Red, amber and green communicate meaning; accent blue communicates selection.
- No decorative charts, fake loading states, modals, toasts or disabled controls.

## Viewport composition

- 1280 × 720 is the minimum desktop workstation contract.
- 1440 × 900 is the full command-view target.
- The fixed topbar is 58 px. Page content uses 12 px outer padding and 10–12 px
  structural gaps.
- Primary page content is centered in a shared 1720 px maximum workspace. The
  page hierarchy and component scale remain unchanged between 1280 px and wide
  desktop viewports; only available canvas width grows.
- Spatial pages fit one main canvas and one contextual rail in the viewport.
- Pages use one primary vertical document scroll. Adjacent queue, detail and
  context columns do not introduce competing vertical scroll positions. Dense
  tables may use horizontal overflow when their column contract requires it.

## AI surfaces

- Global command: navigation, search, query and controlled action entry.
- Brief: prioritized summary on Home.
- Contextual insight: evidence-backed recommendation inside a workflow.
- Workspace: deeper analysis or conversation, used selectively.
- AI output must show source/freshness and confidence when it influences a
  decision. Facts, inference and recommendations are visually distinguishable.

## Primary product surfaces

- Home is the premium AI-first welcome surface. Conversation, briefs and
  recommendations are dominant; only recent destinations and concise personal
  guidance follow. Operational charts do not belong on Home.
- Live Operations is the shared control surface. The spatial canvas remains
  dominant while live telemetry, operational charts, the synchronized register
  and selected-entity context support investigation.
- Command Center is not a separate navigation destination. Its legacy route
  redirects to Live Operations.
