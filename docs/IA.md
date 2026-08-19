# OneClick Information Architecture

## Active profile: Factory Operations

The first complete OneClick profile is a factory operations workspace. The
sidebar is organized around decisions and daily work, not hardware types or
legacy NAVBEA modules.

```text
FACTORY OPERATIONS

Home
Live Operations
Safety & Incidents
Work
People
Assets & Fleet
Insights
My Solutions
Marketplace

PLATFORM
Infrastructure
Administration
```

The expanded sidebar shows the full labels and section structure. The collapsed
sidebar shows only clear icons with tooltips; it must not use unreadably small
abbreviations under icons.

## Navigation behavior

- AI is not a standalone sidebar destination. It appears in the global command
  surface, contextual insights and an analysis workspace.
- Beacons, tags, gateways, readers and sensors are managed under Infrastructure.
  Their data powers operational pages such as Live, Safety, Work and Assets.
- High-frequency operations remain at most two navigation steps away.
- Operational use and configuration remain separate.
- The visible menu can later vary by role, licensed solution and permission, but
  all factory users share this information model.

## Destination hierarchy

### Home

```text
AI welcome and conversational command
Personal brief with source, freshness and confidence
Prioritized recommendations and suggested next actions
Assigned work and pending decisions only when they need attention
Pinned and recently used destinations
Role and shift context
```

Home is an AI-first welcome and guidance surface. It prioritizes conversation,
briefs, recommendations and personal work. Live Operations owns the shared
site-wide control surface and the primary factory scene.

### Live Operations

```text
Factory/campus/floor/zone scope
Personnel, asset, vehicle and sensor layers
Map/digital-twin and synchronized live list
Live, delayed and offline freshness states
Selected entity details and event history
Gateway coverage and weak-signal overlay
```

### Safety & Incidents

```text
Active incidents
Emergency muster
SOS, man-down and lone-worker events
Restricted/risk-zone violations
Pedestrian/vehicle proximity
Incident history and evidence
```

### Work

```text
Work Center
  Unified task, work-order and approval queue
  Selected record detail, evidence and ownership
  Checklists, decisions and field execution
Time & Shift
  Time matching and exceptions
  Shift and attendance context
  Bulk verification and time approvals
```

### People

```text
Employees on site
Teams and shifts
Visitors and contractors
Badge/tag assignment
Access scope and last-seen state
Attendance and area-time history
```

### Assets & Fleet

```text
Equipment and inventory
Vehicles and forklifts
Live/last-known position
Availability and utilization
Movement and zone history
Maintenance and service state
Tag assignment and device confidence
```

### Insights

```text
Operational dashboards
Safety, workforce, asset and environment reports
Spatial and time heatmaps
Alarm/task SLA analysis
Utilization, cost, savings and ROI
Scheduled reports and exports
```

Every chart must answer a decision question and expose its data scope and
freshness. Generic filler charts are not permitted.

### Solutions

```text
My Solutions
  Active factory solutions
  Solution health and measured value
  Deployment progress and adoption
  Shared-infrastructure use
Marketplace
  Discover by operational problem
  AI-guided needs analysis
  Readiness, scope and expected outcome
  Software, workflow, hardware and integration estimate
```

Solutions use two destinations. Lifecycle stages are content inside these
destinations, not additional sidebar entries:

```text
My Solutions
Marketplace
```

Marketplace entries describe the operational problem, expected outcome,
readiness, prerequisites, software capabilities, hardware and integration
requirements, infrastructure reuse, deployment estimate and support lifecycle.
They are not generic promotional cards.

Marketplace is one coherent discovery workspace. It does not expose separate
sidebar children for plan, deployment or value. A prospective solution's plan
and readiness stay in Marketplace; once adopted, deployment, health, adoption
and verified value move into My Solutions.

## AI surface contract

AI is expressed through four consistent surfaces:

```text
Global OneClick Command
Personal / operational brief
Contextual recommendation
AI analysis workspace or conversation
```

Important AI output distinguishes verified data, inference and recommendation.
It exposes source, freshness and confidence, and retains human confirmation for
consequential operational decisions.

## Desktop viewport contract

The minimum workstation viewport is 1280 × 720. The full command view target is
1440 × 900.

- Home presents the AI welcome, personal brief and highest-priority guidance in
  the first fold. Recommendations and recent destinations continue below using
  natural page scrolling; operational charts remain on Live or Insights.
- Live, Safety, Work, Tasks, Approvals and Time Matching use one primary page
  scroll. Adjacent queue, detail and context columns do not introduce separate
  vertical scroll positions.
- People and Assets fit filters, table header, 7–9 rows and contextual detail.
- Marketplace fits discovery filters, the first result set and AI Solution
  Engineer context.
- Infrastructure separates topology and inventory instead of stacking two full
  workspaces vertically.

### Infrastructure

```text
System and data health overview
Gateways and readers
Beacons, tags and badges
Sensors and cameras
Coverage, signal and battery diagnostics
Firmware, installation and service history
Maps, floors, zones and geofences
API, webhook and enterprise integrations
```

### Administration

```text
Users, roles and permissions
Sites, tenant and organization settings
Licenses and activated packages
Notification and escalation policies
Audit and compliance logs
Support, documentation and service status
```

## Data-to-experience model

```text
Badge / Tag / Sensor / Camera
                ↓
Gateway / Reader / Gateway Agent
                ↓
Location Engine / Event System / Rules / AI
                ↓
Live state → Incident → Work → Verification → Insight
```

The interface should reveal enough lineage to establish trust: source device,
last data time, confidence/freshness and the rule or model behind an important
detection.

## Legacy route preservation

The existing time-matching, approval and active-task deep links remain aliases
or redirects while the semantic routes are introduced. No important NAVBEA
workflow may become harder to reach during the migration.
