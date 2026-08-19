# Factory Profile — Product and Design Plan

## 1. Evidence-based product position

NAVBEA is an RTLS/IoT operations platform, not simply a map. Badges, tags,
beacons, gateways, readers, sensors, cameras and enterprise systems produce
events that are associated with a person, asset, place, time, task and policy.
OneClick is the future experience layer that turns that chain into setup,
operation, intervention and optimization with AI assistance.

For the factory profile, the interface must support these outcomes:

- workforce safety and emergency response;
- personnel, visitor and contractor visibility;
- equipment, vehicle and forklift tracking;
- task, checklist, shift and time operations;
- environmental and sensor monitoring;
- maintenance and infrastructure health;
- alarms, incidents, reports and verified value;
- self-service solution discovery, setup and continuous improvement.

## 2. Proposed sidebar

```text
FACTORY OPERATIONS

01  Home
02  Live Operations
03  Safety & Incidents
04  Work
05  People
06  Assets & Fleet
07  Insights
08  Solutions

PLATFORM

09  Infrastructure
10  Administration
```

The main sidebar leads to domain landing pages. Secondary navigation inside a
domain exposes its detailed workflows. This prevents every low-level NAVBEA
screen from becoming a top-level item while keeping the important capabilities
accessible.

The factory profile should eventually vary by role:

- an HSE user lands on Safety and Emergency;
- a shift manager sees Work, People and Approvals first;
- a maintenance user sees Assets and Infrastructure first;
- an administrator sees Infrastructure and Administration;
- favorites and recent destinations provide one-click access without changing
  the shared hierarchy.

## 3. Page briefs before visual design

### Home

Primary question: **What should I understand and do next?**

- premium AI welcome and conversational command surface;
- prioritized personal brief with source, freshness and confidence;
- recommendations that distinguish fact, inference and suggested action;
- assigned work, approvals, exceptions and recently used destinations;
- concise suggested work and recently used destinations;
- compact site pulse only when operational context affects the user.

### Live Operations

Primary question: **Where is everyone and everything, and is the data reliable?**

- factory/building/floor/zone scoping;
- people, asset, forklift, safety and sensor layers;
- synchronized spatial view and searchable live register;
- last-seen, signal, battery, gateway and freshness information;
- selected entity timeline and nearby incidents;
- weak coverage, delayed data and offline gateway overlays.

### Safety & Incidents

Primary question: **What risk exists and what response stage is it in?**

- correlated active incident queue;
- severity, affected people/assets, place, source and SLA;
- detection evidence and rule/model explanation;
- assignment, escalation, response and resolution timeline;
- emergency muster with expected/safe/missing/unverified groups;
- SOS, inactivity, man-down, restricted-zone and proximity scenarios;
- incident history, evidence and audit record.

### Work

Primary question: **What work is due, blocked or awaiting a decision?**

- work overview organized by exception;
- tasks and work orders;
- time matching and distribution;
- approvals and rejected/corrected records;
- shifts, attendance and overtime;
- checklists, inspections and field rounds;
- contractor work and evidence;
- location-verified completion and SLA.

### People

Primary question: **Who is on site, where are they expected and are they safe?**

- employees, visitors and contractors;
- team, company, shift and permission context;
- on-site/off-site/unknown and last-seen state;
- badge assignment, battery and signal confidence;
- authorized zones, time-in-zone and movement history;
- attendance, training/document suitability and active safety events.

### Assets & Fleet

Primary question: **Where is the asset, is it available and is it being used correctly?**

- equipment, tools, inventory, vehicles and forklifts;
- live/last-known location and movement history;
- ready/in-use/idle/maintenance/offline states;
- utilization, dwell time and capacity;
- restricted exit, lost asset, inactivity and proximity events;
- maintenance windows, service records and responsible team;
- assigned tag and telemetry confidence.

### Insights

Primary question: **What changed, why, and what decision should follow?**

- role-based operational dashboards;
- safety, work, people, asset, environment and infrastructure reports;
- spatial/time heatmaps and route/dwell analysis;
- alarm and task lifecycle/SLA analysis;
- utilization, avoided loss, cost, savings and ROI;
- data scope, comparison baseline, source and freshness on every visual;
- scheduled delivery and exports.

### Solutions

Primary question: **Which outcome is active, missing or worth adding?**

- active factory solution packages and health;
- measurable value and adoption per solution;
- problem-based discovery rather than a generic app catalog;
- conversational needs analysis through AI Solution Engineer;
- Solution Plan covering apps, dashboards, rules, workflows, hardware,
  integration, estimates and confidence;
- existing gateway/map/integration reuse;
- deployment, validation and rollback readiness.

### Infrastructure

Primary question: **Can the operation trust the field data?**

- system, site and data-pipeline health;
- gateway/reader inventory, connection, firmware and last event;
- beacon/tag/badge identity, assignment, signal and battery;
- sensor/camera state, measurement and calibration;
- coverage diagnostics, blind spots and installation topology;
- maps, floors, zones, routes and geofences;
- installation, warranty, maintenance and service history;
- HR, ERP, access-control, API, MQTT and webhook integrations.

### Administration

Primary question: **Who can access what, and how is the tenant governed?**

- users, roles, site/zone scope and permissions;
- organizations, sites, licenses and solution packages;
- SSO, MFA, retention and privacy settings;
- notification and escalation policies;
- audit logs and compliance evidence;
- support, documentation, tickets and service status.

## 4. AI experience model

AI is a cross-product intelligence layer, not an isolated chatbot page.

1. **Global command:** search, navigation, questions and safe commands.
2. **Contextual insight:** anomaly explanation, recommendation and next step.
3. **AI workspace:** deeper analysis, solution design and multi-step help.

Important AI outputs show data source, time range, confidence and reasoning.
Safety-critical or high-impact actions require explicit human approval and audit.

## 5. Detailed critique of the current design

### Global shell and sidebar

- The only factory-specific signal is the profile label in the top bar. The
  navigation remains a generic list and does not expose Safety, People, Assets,
  Infrastructure or Administration as coherent domains.
- All nine entries have the same visual weight. There are no operational versus
  platform groups, so urgency and mental hierarchy are lost.
- The collapsed sidebar uses 7px abbreviations under icons. They are below a
  comfortable reading size, visually noisy and not a substitute for tooltips.
- Expansion depends on hover. Keyboard focus does not visibly expand the group,
  and hover-only discovery is poor for touch and accessibility.
- The bright full-width blue active item is disproportionately dominant. It
  competes with critical red/amber operational states in page content.
- The product mark is recognizable, but the collapsed shell communicates no
  tenant/site/shift state and the expanded state has weak section separation.

### Top bar

- The profile selector, command field, system health, notification and avatar
  are aligned cleanly, but several elements visually promise interaction while
  the current milestone makes them static.
- The command field is visually overemphasized despite having no behavior. Its
  placeholder is generic and does not demonstrate the future combined search,
  navigation and AI model.
- “System %99.1” is too abstract. It does not distinguish gateway connectivity,
  tag visibility, delayed data or affected operational scope.
- The top bar plus page header plus KPI strip consume about one third of a 720px
  viewport before the main work surface begins.

### Typography and accessibility

- Many supporting labels are 7–9px and low-contrast gray. They become decorative
  texture rather than readable operational information.
- Page descriptions sit inline beside large titles, weakening the hierarchy and
  creating long, visually unstable header rows.
- Uppercase eyebrow text is overused and excessively letter-spaced.
- Status meaning is often color-dependent, with too little icon or textual
  redundancy.
- Focus, selected and hover semantics have not been designed as a coherent set.

### Surfaces and visual language

- Repeated white cards, thin gray borders and rounded rectangles create a clean
  baseline but also a generic SaaS appearance. Most surfaces have identical
  depth regardless of importance.
- Radius, padding and border treatments are consistent, yet that consistency is
  mechanical: a metric, queue, filter and decision panel often look like the
  same component.
- The navy/blue palette is professional, but the dark hero surfaces in Solutions,
  Insights and Locations are copied rather than purpose-built.
- The product has no distinctive information visualization language beyond the
  factory image and small status colors.

### Home and Live

- The factory scene is the strongest part of the current design and provides a
  useful spatial anchor.
- Home and Live repeat almost the same scene and layer controls, so their roles
  are insufficiently differentiated. Home should summarize decisions; Live
  should support precise spatial investigation.
- Markers and overlays are visually plausible but do not expose source device,
  last-event time, confidence or gateway coverage. They therefore feel authored
  onto an image instead of derived from an RTLS system.
- The layer chips, 3D selector and arrow controls look interactive even when
  static. This weakens trust in the prototype.
- The KPI strip fits many values but gives all metrics equal weight and lacks a
  strong relationship with the incident/scene currently in focus.
- The right brief rail is useful structurally, but its AI output lacks evidence,
  confidence, affected scope and a clear distinction between detected fact and
  recommendation.

### Alerts, Tasks and Approvals

- The three-column queue/detail/context pattern is appropriate for workstation
  use and is the most reusable structural idea in the current product.
- The three pages are too similar. Different decisions have been poured into the
  same shell without domain-specific evidence, controls or status models.
- Lists contain only a few oversized rows, leaving unused space while still
  presenting an impression of density.
- Search, tabs and primary actions look functional but are static, contradicting
  the current design-only contract.
- Detail panels do not show enough source lineage, history, attachments,
  dependencies or related records to support a real decision.
- Right rails are underused and create large blank areas below a single card.

### Time Matching

- The system-record versus personnel-record comparison is a better match for the
  workflow than a generic table, and the score bridge makes the intended
  relationship visible.
- The composition still treats each match as an isolated card. It does not yet
  communicate bulk selection, exception count, remaining duration or conflict
  resolution efficiently.
- Filter scope is presented as a passive strip, so the relationship between
  period/project/person/task filters and the records is weak.
- The workflow stepper consumes vertical space without showing completion rules,
  errors or what moves a record to the next stage.
- Repeated cards and generous row heights reduce throughput on a high-density
  operational screen.

### Solutions, Insights and Locations

- These are placeholders rather than designed product pages.
- The same headline, dark container, three cards and large empty area are reused
  across unrelated domains.
- Copy explicitly says the page is a static visual exercise, which breaks product
  immersion and feels machine-generated.
- Insights contains no analytical question, comparison, chart or source.
- Locations contains no site hierarchy, map, floors, zones, coverage or device
  relationship.
- Solutions does not distinguish active packages, measurable value, discovery,
  solution planning or deployment.
- Arrow and “active” treatments imply functionality and state that do not exist.

## 6. Design direction for the next implementation

- Preserve the light operational canvas and dark factory spatial stage, but make
  them role-specific rather than repeated everywhere.
- Use 12px as a practical minimum for secondary interface text; reserve smaller
  type only for nonessential metadata with sufficient contrast.
- Use a collapsed 72–80px navigation rail with icons only, proper tooltips and a
  keyboard-accessible expanded state.
- Give each domain a distinct workstation layout while preserving shell, type,
  spacing, controls and status semantics.
- Reserve dark surfaces for spatial monitoring, focused command contexts and
  high-value solution storytelling—not ordinary tables or reports.
- Make density intentional: compact tables and queues for Work/People/Assets;
  spatial canvases for Live/Locations; analytical grids for Insights.
- Expose data confidence and freshness as first-class visual states.
- Remove every decorative control that cannot eventually support a real task.

## 7. Recommended implementation order

1. Approve the factory sidebar and page briefs.
2. Redesign the shared sidebar, top bar and page-header system.
3. Prove the new system on AI-first Home and Live Operations.
4. Build Safety & Incidents as the first dense operational domain.
5. Redesign Work, starting with Time Matching.
6. Add People and Assets & Fleet.
7. Build Infrastructure around real beacon/gateway health concepts.
8. Design Insights and Solutions only after their content models are fixed.
