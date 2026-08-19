# Static Route Map

The current routes remain available during the factory-profile IA migration.
The factory semantic route layer below is now implemented as static design
surfaces; legacy routes remain available for compatibility.

| Route | Surface |
|---|---|
| `/` | Personal Home |
| `/command-center` | Legacy redirect to Live Operations |
| `/live` | Live Operations |
| `/alerts` | Alerts & Incidents |
| `/work` | Unified Work Center |
| `/work/tasks` | Legacy redirect to Work Center |
| `/work/time-matching` | Time & Shift |
| `/work/approvals` | Legacy redirect to Work Center |
| `/solutions` | My Solutions |
| `/solutions/marketplace` | Solution Marketplace |
| `/solutions/plan` | Legacy redirect to Marketplace |
| `/solutions/deployments` | Legacy redirect to My Solutions |
| `/solutions/value` | Legacy redirect to My Solutions |
| `/insights` | Insights |
| `/locations` | Locations |

## Factory-profile routes

| Target route | Destination | Existing capability to reuse |
|---|---|---|
| `/` | Personal Home | Role-aware brief, work and favorites |
| `/command-center` | Legacy alias | Redirects to `/live` |
| `/live` | Live Operations | Current Live |
| `/safety` | Safety & Incidents | `/alerts` plus emergency workflows |
| `/work` | Work Center | Unified tasks, work orders and approvals |
| `/work/tasks` | Legacy alias | Redirects to `/work` |
| `/work/time-matching` | Time & Shift | Time matching, shift exceptions and time approvals |
| `/work/approvals` | Legacy alias | Redirects to `/work` |
| `/people` | People | NAVBEA personnel/visitor/contractor capabilities |
| `/assets` | Assets & Fleet | NAVBEA equipment/vehicle capabilities |
| `/insights` | Insights | Current static Insights plus NAVBEA reports |
| `/solutions` | My Solutions | Active portfolio and measured value |
| `/solutions/marketplace` | Marketplace | Problem-led discovery and readiness |
| `/solutions/plan` | Legacy alias | Redirects to `/solutions/marketplace` |
| `/solutions/deployments` | Legacy alias | Redirects to `/solutions` |
| `/solutions/value` | Legacy alias | Redirects to `/solutions` |
| `/infrastructure` | Infrastructure | Beacon/gateway/tag/sensor/device management |
| `/administration` | Administration | Users, roles, tenant, license and audit |

Legacy NAVBEA deep links remain redirects to the corresponding static route.
