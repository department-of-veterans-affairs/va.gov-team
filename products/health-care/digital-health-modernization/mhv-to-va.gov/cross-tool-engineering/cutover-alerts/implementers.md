# OH Migration Schedules — Implementer's Guide

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

### 4. Usage Examples
There are additional examples that describe [how to use the alerts in this comment](https://github.com/department-of-veterans-affairs/vets-website/blob/cd593eb3b26692754e1a3b0b9c1cb59341ca9c20/src/platform/mhv/components/CernerFacilityAlert/CernerFacilityAlert.jsx#L12-L45).

---

## Data Structure

```javascript
// state.user.profile.migrationSchedules
[{
  migrationDate: "March 3, 2026",
  migrationStatus: "ACTIVE",  // "NOT_STARTED" | "ACTIVE" | "COMPLETE"
  facilities: [{ facilityId: "516", facilityName: "Columbus VA" }],
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

## Reference: Web Tool Configurations

Phase-to-alert mappings for web are defined in `src/platform/mhv/components/CernerFacilityAlert/constants.js`:

| Tool | Warning Phases | Disabled Phases |
|------|---------------|-----------------|
| Appointments | p0, p1 | p2-p6 |
| Medical Records | p1-p4 | p5 |
| Medications | p1-p3 | p4, p5 |
| Secure Messaging | p1, p2 | p3-p5 |

---
## Mobile App Integration

The VA Health and Benefits mobile app uses the same migration schedule data, but accesses it through a different endpoint.

### Data Source

Mobile gets migration data from `/v0/user/authorized-services` in the `meta` payload:

```typescript
// authorizedServices.migratingFacilitiesList
[{
  migrationDate: "2026-04-01",
  facilities: [{ facilityId: 528, facilityName: "Test VA Medical Center" }],
  phases: {
    current: "p5",
    p0: "February 1, 2026",
    p1: "February 15, 2026",
    // ... p2-p7
  }
}]
```

### Using OHAlertManager

The mobile app provides an `OHAlertManager` component that handles alert rendering:

```tsx
import { OHAlertManager, OHParentScreens } from 'components'

<OHAlertManager
  parentScreen={OHParentScreens.Medications}
  authorizedServices={authorizedServices}
/>
```

Available screens: `Appointments`, `SecureMessaging`, `MedicalRecords`, `Medications`

### Mobile Phase Configuration

Mobile has its own phase-to-alert mappings (defined in `OHAlertManager.tsx`):

| Screen | Warning Phases | Error Phases | End Date |
|--------|---------------|--------------|----------|
| Appointments | p0, p1 | p2-p6 | p7 |
| Secure Messaging | p1, p2 | p3-p5 | p6 |
| Medical Records | p1-p4 | p5 | p6 |
| Medications | p1-p3 | p4, p5 | p6 |

---
## Testing

We have mock data set up for you:

- **Frontend mocks:** `src/platform/mhv/api/mocks/user/index.js` — look for `transitioningUser`
- **Backend specs:** `spec/lib/mhv/oh_facilities_helper/service_spec.rb`
- **Mobile mocks:** `VAMobile/src/store/api/demo/mocks/kimberlyForOHMigration/getAuthorizedServices.json`
- **Mobile tests:** `VAMobile/src/components/OHAlertManager.test.tsx`

If you run into issues or have questions, reach out to us in the [#mhv-health-portal-coordination](https://dsva.slack.com/archives/C04DRS3L9NV) slack channel. We're happy to help you get set up.
