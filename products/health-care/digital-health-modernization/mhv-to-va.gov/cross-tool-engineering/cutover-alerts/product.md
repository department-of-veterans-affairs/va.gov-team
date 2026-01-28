# OH Migration Schedules — Product Overview

## What This Enables

When VA facilities migrate to Oracle Health, certain features won't work for a period of time. We built the OH Migration Schedule system to provide your product with the data it needs to handle this gracefully.

Here's what it gives you:

- **Migration phase data** — Know exactly where each facility is in the migration timeline
- **Facility-specific information** — Veterans at different facilities see relevant information for each one
- **Centralized schedule management** — Migration dates are managed in one place; your app gets the updates without code changes

**Important:** This system provides the scheduling data. Your team needs to integrate with it to show alerts or disable features based on the current phase.

---

## How It Works

When a Veteran logs in, the system checks if any of their facilities are in a migration window and determines the current **phase** (p0–p7). Each phase represents a specific point in the migration timeline:

| Timeline | Phase | What Happens |
|----------|-------|--------------|
| 60 days before | p0 | Early awareness alerts can begin |
| 45 days before | p1 | Warning alerts typically start |
| 30 days before | p2 | Warning alerts continue |
| 6 days before | p3 | Final warnings; some features may disable |
| 3 days before | p4 | Most features disabled |
| **Migration day** | **p5** | **Features disabled during cutover** |
| 2 days after | p6 | Features still disabled, stabilizing |
| 7 days after | p7 | Migration window closes |

**After p7:** The `current` phase becomes `null`, indicating the migration window is complete.

---

## Current Tool Configurations

These tools have already integrated with the migration schedule system. They use the phase data to decide when to show warnings and when to disable features:

| Tool | Shows Warning | Feature Disabled |
|------|--------------|------------------|
| **Appointments** | 60 days out (p0) | 30 days out through p7 |
| **Medical Records** | 45 days out (p1) | 3 days out through p6 |
| **Medications** | 45 days out (p1) | 3 days out through p6 |
| **Secure Messaging** | 45 days out (p1) | 6 days out through p6 |

---

## What Your Team Needs to Decide

The migration phases, when features should be disabled, and the messaging Veterans see are already defined by VA stakeholders. Your team needs to decide:

1. **Should you also add a feature flag?** — A feature flag gives you an escape hatch to disable your application independently of the migration schedule if something goes wrong.

---

## If a Migration Runs Long

If a migration takes longer than expected and extends beyond the p7 window, the agreed-upon solution is to put up a maintenance window until the problem can be resolved. This keeps the Veteran experience consistent and avoids confusion.

---

## Points of Contact

| Role | Name | Contact |
|------|------|---------|
| Platform Lead | TBD | TBD |
| Engineering | TBD | TBD |
| Product | TBD | TBD |

---

## What's Centralized vs What Your Team Owns

**Centralized (we manage this):**
- Migration dates and facility mappings in AWS Parameter Store
- Phase calculations based on migration dates
- Delivering the schedule data to your app via the user profile

**Your team owns:**
- Deciding which phases should show warnings vs disable features
- Implementing the logic to check the current phase
- Designing the alert messaging for your tool

---

## Questions?

We're here to help. Reach out to us on the MHV Platform slack channel if you want to talk through phase configurations for your tool or need help getting started.

We value your feedback on this system. If something doesn't work well for your use case, let us know—we're still iterating on this.
