# AGENTS.md — NAVBEA → OneClick

## Active Prototype Directive — 19 August 2026

The current milestone is a static visual-design pass. This directive overrides
earlier implementation requirements for this milestone:

- only sidebar route navigation is functional,
- page controls are visual composition, not interactive product controls,
- do not add API routes, persistence, mock state machines or cross-page data,
- do not recreate removed workflow logic until the user explicitly ends the
  static design phase,
- validate the shared shell and Home composition before expanding functionality.

NAVBEA documents remain product-research sources, not implementation contracts
during this phase.

## Purpose

This file defines how Codex should work inside this project.

The product is being transformed from the current **NAVBEA** operational platform into a broader **OneClick** experience.

The main objective is not to rewrite the application from scratch. The objective is to:

- understand the existing product,
- preserve important functionality,
- improve information architecture,
- establish a coherent design system,
- prepare the application for future OneClick capabilities,
- and implement changes incrementally.

---

# Mandatory Working Order

Before making large changes:

1. Read `README.md`.
2. Inspect the `/navbea` reference folder.
3. Read the relevant NAVBEA product documents.
4. Inspect the actual current application behavior and page structure.
5. Inspect the `/oneclick` reference folder.
6. Read `docs/IA.md`.
7. Read `docs/DESIGN_SYSTEM.md`.
8. Identify the affected workflow.
9. Produce a short implementation plan.
10. Only then make structural or visual changes.

Do not begin a large redesign from screenshots alone.

---

# Source of Truth

Use the following priority when determining current functionality:

```text
1. Actual NAVBEA behavior
2. NAVBEA functional / technical documents
3. Existing application code
4. Existing redesign
5. Screenshots and design references
```

Use the following priority when deciding future OneClick direction:

```text
1. README.md
2. docs/IA.md
3. Existing workflows that must remain usable
4. docs/DESIGN_SYSTEM.md
5. OneClick reference images
6. Individual visual experiments
```

Reference screenshots are not authoritative.

---

# Do Not Remove Functionality Without Understanding It

If an existing page looks redundant, outdated or oddly named:

**do not delete it immediately.**

First determine:

- who uses it,
- what workflow it belongs to,
- whether another screen actually replaces it,
- whether its data or actions are required elsewhere,
- whether it is a high-frequency operational surface.

When uncertain, preserve the capability and reorganize access to it.

---

# High-Priority Existing Workflows

Treat these as important until proven otherwise:

- Live Operations
- Alerts & Incidents
- Time Matching
- Active Tasks
- Approvals
- People
- Asset Management
- Reports
- Maps / Zones
- Device / Gateway / Sensor Management
- Emergency Management
- Work Orders / Checklists

Especially important:

```text
/modules/task-time-distributions/time-matching
```

The Time Matching workflow must remain easy to access.

---

# Navigation Rules

Do not independently redesign navigation per page.

The application must use one coherent global navigation model.

Avoid exposing every low-level feature as a top-level sidebar item.

Prefer user intent:

```text
Work
  Time Matching
  Approvals
  Tasks
```

over technical categorization:

```text
Modules
  Task Time Distributions
  ...
```

The sidebar hierarchy should be derived from `docs/IA.md`.

If a better hierarchy is discovered, update `docs/IA.md` first or alongside the implementation.

---

# Route Migration

Do not break deep links unnecessarily.

Example:

Current:

```text
/modules/task-time-distributions/time-matching
```

Future semantic route:

```text
/work/time-matching
```

Preferred migration:

```text
new route
→ reuse existing functionality
→ keep old alias or redirect
→ migrate internal links gradually
```

---

# Design System Rule

Do not hardcode random page-specific styles when a shared token or component should exist.

Before adding a new primitive, check whether one already exists for:

- page shell
- sidebar
- topbar
- command bar
- page header
- KPI card
- status badge
- table
- filter control
- tab
- drawer
- modal
- chart container
- map control
- AI insight panel
- empty state
- skeleton / loading state
- toast / feedback

Use `docs/DESIGN_SYSTEM.md` as the visual contract.

---

# Avoid Page-by-Page Visual Drift

All major screens must feel like the same product.

Do not allow:

- different sidebar styles on different routes,
- different spacing systems,
- inconsistent card radius,
- random accent colors,
- different typography hierarchy,
- multiple unrelated table styles,
- different AI interaction patterns per screen.

If a new pattern is needed, make it reusable.

---

# OneClick AI

Do not implement AI as a random collection of unrelated widgets.

Prefer three consistent AI surfaces:

## 1. Global Command Bar

Used for:

- search,
- navigation,
- commands,
- queries,
- solution discovery.

## 2. Contextual Insight

Used inside a page for:

- anomaly explanation,
- recommendation,
- risk,
- optimization opportunity,
- suggested next step.

## 3. AI Workspace / Drawer

Used for:

- deeper analysis,
- explanation,
- multi-step assistance,
- solution creation,
- structured recommendation.

Do not place a large AI panel on every page by default.

---

# Operational vs Configuration Surfaces

Keep daily operational work separate from setup/configuration.

Examples:

```text
Alerts & Incidents → Active Alerts
```

is operational.

```text
Studio / Configuration → Alert Rules
```

is configuration.

Similarly:

```text
Work → Tasks
```

is operational.

```text
Studio → Workflow Builder
```

is configuration.

Do not mix them into one confusing page unless the workflow clearly requires it.

---

# Use 3D and Rich Visuals Intentionally

Rich spatial visuals are encouraged for suitable pages, especially:

- Home / Command Center
- Live Operations
- Solution Discovery
- Deployment
- Site / Map
- Digital Twin

Do not use decorative 3D scenes on dense workstation pages such as:

- Time Matching
- large administration tables
- user management
- approval queues

unless the 3D element adds real operational meaning.

---

# Data Visualization Rule

Every chart should answer a question.

A chart should help determine:

- what changed,
- whether it is good or bad,
- why it changed,
- what action should follow.

Avoid filler charts.

---

# Density Rule

Different pages require different density.

## High-density

- Time Matching
- Alerts
- Tasks
- People
- Asset lists
- Reports

## Visual / spatial

- Home
- Live Operations
- Solution Discovery
- Deployment
- Maps

Do not force one layout style onto every page.

---

# User Action Feedback

Every consequential action should have a clear state:

- loading,
- success,
- error,
- disabled,
- confirmation if needed,
- rollback / undo where appropriate.

Never leave the user unsure whether an action succeeded.

---

# Accessibility and Usability

Maintain:

- keyboard navigation where practical,
- visible focus states,
- sufficient color contrast,
- non-color status indicators,
- readable dense tables,
- clear error messages,
- responsive behavior.

Do not sacrifice accessibility for visual effects.

---

# Performance

Avoid expensive effects when they do not improve the experience.

For 3D, maps and complex charts:

- lazy-load where practical,
- avoid blocking the initial UI,
- provide loading states,
- preserve usability if advanced visuals fail,
- keep dense operational pages responsive.

---

# Refactoring Rule

Prefer incremental refactors over large destructive rewrites.

When modifying a major screen:

1. identify current functionality,
2. list actions and data states,
3. map them to the target IA,
4. reuse existing logic where appropriate,
5. redesign presentation,
6. verify no capability was lost.

---

# Before Completing a Major Page

Check:

- Does the page have one clear primary purpose?
- Is the hierarchy understandable?
- Does it use the shared design system?
- Does it fit the global navigation?
- Are important actions obvious?
- Are live / delayed / offline states clear?
- Is the page consistent with related pages?
- Did any old functionality disappear?
- Is AI being used for a real reason?
- Can a professional user operate this page efficiently?

---

# Initial Implementation Priority

Use this order when establishing the system:

1. Home / Command Center
2. Live Operations
3. Time Matching
4. Alerts & Incidents
5. Work / Tasks
6. Solution Discovery
7. Solution Plan
8. Insights & Reports
9. People
10. Assets
11. Locations / Maps
12. Infrastructure
13. Administration

Do not attempt to redesign every page before the shared system is proven on the priority screens.

---

# Expected Mindset

Do not optimize for:

> “Make this screenshot prettier.”

Optimize for:

> “Create a coherent operational product that can evolve into OneClick.”

The product should be:

**simple at first glance, powerful when explored, and intelligent when used.**

---

# Established Engineering Foundation

The implementation stack is fixed unless the user explicitly changes it:

```text
pnpm
Next.js App Router
React
TypeScript (strict)
Tailwind CSS
```

Use `pnpm` only. Do not introduce npm or Yarn lockfiles.

Before Next.js-specific implementation, read the relevant bundled documentation
under `node_modules/next/dist/docs/` after dependencies are installed. Prefer
current App Router conventions and server components; add client boundaries only
for real interaction or browser-state needs.

Use this source layout:

```text
src/app         routes and route-level states
src/components  shared shell and reusable primitives
src/config      navigation, routes and product configuration
src/features    workflow/domain verticals
src/lib         framework-agnostic helpers and adapters
src/types       shared cross-feature contracts when needed
```

The living project references are:

- `docs/PROJECT_ANALYSIS.md`
- `docs/IA.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/WORKFLOWS.md`
- `docs/ROUTE_MAP.md`
- `docs/ARCHITECTURE.md`
- `docs/IMPLEMENTATION_PLAN.md`

Do not create empty routes or speculative abstractions merely to make the target
architecture appear complete. Add a route, feature, component, state library,
chart library, or map library when the active milestone proves the requirement.

Every implementation milestone must pass:

```text
pnpm lint
pnpm typecheck
pnpm build
```

Then verify the affected workflow, responsive behavior, focus/keyboard behavior,
loading/empty/error/permission states, and any legacy route contract.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
