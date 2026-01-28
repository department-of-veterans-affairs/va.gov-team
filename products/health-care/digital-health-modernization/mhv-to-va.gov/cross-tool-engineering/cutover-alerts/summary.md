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

Each tool team determines appropriate warning and disable phases based on their system dependencies. The platform supports configuration changes without requiring code changes or deployments.

---

## Questions?

Reach out to the [#mhv-health-portal-coordination](https://dsva.slack.com/archives/C04DRS3L9NV) slack channel if you have questions.
