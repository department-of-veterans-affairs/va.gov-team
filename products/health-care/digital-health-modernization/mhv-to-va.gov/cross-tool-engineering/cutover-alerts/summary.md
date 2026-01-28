# OH Migration Schedules — Summary

## Purpose

When VA facilities migrate to Oracle Health, some features won't work for a period of time. Without proper handling, Veterans would try to use features that fail, leading to an increase in silent failures and support calls.

We built the OH Migration Schedule system to solve this. It provides each VA.gov health tool with the data needed to know when a Veteran's facility is migrating and what phase of the migration they're in. Tool teams use this data to show alerts and disable features at the appropriate times.

---

## Business Value

### Improved Veteran Experience
- Veterans receive **advance notice** (up to 60 days) before their facility's services are affected
- Clear messaging explains **what's happening and when** services will return
- Features are **disabled during outages**, preventing frustration from silently-failed transactions

### Reduced Support Burden
- Fewer help desk calls from confused Veterans attempting unavailable actions
- Consistent messaging across all VA.gov health tools
- Centralized schedule data reduces coordination overhead between teams

### Risk Mitigation
- Prevents data integrity issues from transactions attempted during migration
- Centralized control allows rapid response if migration timelines change
- Graceful degradation—system defaults to normal operation if configuration issues occur

### Failsafe
- If a migration unexpectedly needs more time to complete, the agreed upon approach is to show a system maintenance message to the user, which disables the feature entirely.
---

## How It Works

**Centralized (Horizon team manages):**
1. Migration dates are set in AWS Parameter Store (no code deployment needed)
2. When Veterans log in, the system calculates which phase each facility is in
3. This data is delivered to all VA.gov health tools via the user profile

**Tool teams implement:**
1. Check the current phase for the Veteran's facilities
2. Show appropriate warnings or disable features based on phase
3. Design messaging that fits their tool's context

### Phases Lifecyle
We talk about different alerts/behavior with regard to "phases"

Facilities move through a series of OH migration phases identified as p0–p7.

These phase identifiers are ordered (p0 is earliest, p7 is latest) and are supplied by the backend (vets-api) for each facility in the user's VA Profile facility list.

For each tool (appointments, medical records, medications, etc.):
- warningPhases: phases where we show a warning-style alert because some functionality may be limited or changing soon.
- errorPhases: phases where we show an error-style alert because the functionality is not available online for affected facilities.
- errorStartDate / errorEndDate: the first and last phases (inclusive) used when displaying date-related messaging for that tool, based on T-XX dates for each tool's functionality migrating (calculated on the backend).

A facility’s current migration phase is compared against these arrays to determine which alert type (if any) should be displayed on the page.

---

## Current Coverage

The following VA.gov health tools have integrated with the migration schedule system:

| Tool | Warning Period | Disabled Period |
|------|---------------|-----------------|
| Appointments | 60 days before | 30 days before → 7 days after |
| Medical Records | 45 days before | 0 days before → 2 days after |
| Medications | 45 days before | 3 days before → 2 days after |
| Secure Messaging | 45 days before | 6 days before → 2 days after |

### Mobile App

The VA Health and Benefits mobile app has also integrated with the migration schedule system, covering the same four health tools. Veterans using the mobile app receive the same advance notice and feature handling as those on VA.gov.

---

## Timeline Flexibility

The timelines are final and cannot be determined by MHV teams. However, the scheduling system supports adding additional facilities + migration dates as a configuration change. In rare cases the relative timings of each phase may be changed, but this decision will be determined by OCTO MHV leadership.

---

## Questions?

Reach out to the [#mhv-health-portal-coordination](https://dsva.slack.com/archives/C04DRS3L9NV) slack channel if you have questions.
