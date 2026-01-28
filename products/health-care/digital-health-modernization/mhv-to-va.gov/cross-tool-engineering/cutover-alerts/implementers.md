# OH Migration Schedules — Developer Guide

## Overview

When VA facilities migrate to Oracle Health, we need a way to know when to disable features and show alerts. We built a scheduling system that provides this data to your application. The migration schedule data is already in Redux when a user logs in—you don't need to make any additional API calls.

This guide explains how to use that data to decide when to disable features or show alerts in your application.

---

## Quick Implementation

### 1. Access Migration Data

```javascript
import { useSelector } from 'react-redux';

const migrationSchedules = useSelector(state => state.user.profile.migrationSchedules);
```

### 2. Disable Features by Phase

```javascript
const shouldDisableFeature = (schedules, disabledPhases) => {
  return schedules.some(s => disabledPhases.includes(s.phases.current));
};

// Example: Disable during p4, p5, p6
const isDisabled = shouldDisableFeature(migrationSchedules, ['p4', 'p5', 'p6']);
```

### 3. Display Alerts (Optional)

```jsx
import CernerFacilityAlert from 'platform/mhv/components/CernerFacilityAlert';

<CernerFacilityAlert healthTool="MEDICATIONS" />
```

---

## Data Structure

```javascript
// EXAMPLE
// state.user.profile.migrationSchedules
[{
  migrationDate: "March 3, 2026",
  migrationStatus: "ACTIVE",  // "NOT_STARTED" | "ACTIVE" | "COMPLETE"
  facilities: [{ id: "516", name: "Columbus VA" }],
  phases: {
    current: "p1",  // "p0"-"p7" or null
    p0: "January 2, 2026",  // -60 days
    p1: "January 17, 2026", // -45 days
    p2: "February 1, 2026", // -30 days
    p3: "February 25, 2026", // -6 days
    p4: "February 28, 2026", // -3 days
    p5: "March 3, 2026",     // Migration day
    p6: "March 5, 2026",     // +2 days
    p7: "March 10, 2026"     // +7 days
  }
}]
```

**Note:** `phases.current` is `null` when outside the migration window.

---

## Reference: Current Tool Configurations

| Tool | Warning Phases | Disabled Phases |
|------|---------------|-----------------|
| Appointments | p0, p1 | p2-p7 |
| Medical Records | p1, p2, p3 | p4, p5, p6 |
| Medications | p1, p2, p3 | p4, p5, p6 |
| Secure Messaging | p1, p2 | p3-p6 |

---

## Testing

We have mock data set up for you:

- **Frontend mocks:** `src/platform/mhv/api/mocks/user/index.js` — look for `transitioningUser`
- **Backend specs:** `spec/lib/mhv/oh_facilities_helper/service_spec.rb`

If you run into issues or have questions, reach out to us in the MHV Platform slack channel. We're happy to help you get set up.
