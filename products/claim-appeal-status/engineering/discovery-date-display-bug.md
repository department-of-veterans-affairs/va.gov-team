# Discovery: File Upload Date Display Bug

Issue: [#117391](https://github.com/department-of-veterans-affairs/va.gov-team/issues/117391)

## Problem Statement

When a veteran uploads a file after 7 PM EDT or 8 PM EST, the system displays the submission date as the following day.

**Example Scenario:**

A veteran uploads additional evidence at 9:00 PM EDT on August 15, 2025. They look in their Documents Filed section and see "Received on August 16, 2025" instead of the expected "Received on August 15, 2025". This creates confusion and potentially distrust in the system as they may think" "How can a document be submitted in the future?" or potentially "Is the document not going to be submitted until tomorrow because its outside business hours right now? If so, why is it telling me its submitted when its not?"

**Root Cause:**

The date formatting utility in the Claims Status application treats date strings like "2023-03-17" as UTC timestamps rather than calendar dates without time components. When the system converts these UTC timestamps to the user's local timezone for display, the dates shift backward or forward across day boundaries.

This issue occurs in the `buildDateFormatter` function within the claims status helpers file (`src/applications/claims-status/utils/helpers.js`), which uses date-fns's `parseISO` function. This function interprets date-only strings (like "2025-08-15") as midnight UTC, causing the timezone shift during display.

## Current Implementation Analysis

### Request Flow with File References

#### How Dates Move Through the System

When a veteran uploads a file, the date travels through several stages where timezone handling can go wrong:

1. **File Upload Creates a Timestamp**

   When the upload succeeds, the system captures the current moment and formats it for display. This happens in the upload action handler:

   File: `src/applications/claims-status/actions/index.js`
   ```javascript
   const now = new Date(Date.now());
   const uploadDate = buildDateFormatter()(now.toISOString());
   ```

   - The code creates a Date object for "right now"
   - Converts it to an ISO string (like "2025-08-15T21:00:00-04:00")
   - The ISO conversion changes the time to UTC ("2025-08-16T01:00:00.000Z")
   - This UTC string gets passed to the formatter, which will display it as August 16

2. **API Returns Dates Without Timezone Information**

   The Lighthouse API provides dates in a simple format without timezone data:

   ```json
   {
     "attributes": {
       "uploadDate": "2023-03-17",
       "receivedDate": "2023-03-15",
       "requestedDate": "2023-03-01"
     }
   }
   ```

   - These dates represent the day something happened, not a specific moment in time
   - They should display the same regardless of the user's timezone
   - The current system incorrectly treats them as UTC timestamps

3. **Component Displays the Formatted Date**

   The DocumentsFiled component shows these dates to users:

   File: `src/applications/claims-status/components/claim-files-tab/DocumentsFiled.jsx`
   ```javascript
   {`Received on ${formatDate(doc.uploadDate)}`}
   ```

   - The component passes the date string to the formatter
   - The formatter interprets "2023-03-17" as UTC midnight
   - Users in US timezones see "March 16, 2023" instead

### Core Functions

#### The Problematic Date Formatter

The root of the issue lies in how the Claims Status application formats dates. The current implementation treats all dates as UTC timestamps:

File: `src/applications/claims-status/utils/helpers.js`
```javascript
export const buildDateFormatter = (formatString = DATE_FORMATS.LONG_DATE) => {
  return date => {
    const parsedDate = parseISO(date);
    return isValid(parsedDate)
      ? format(parsedDate, formatString)
      : 'Invalid date';
  };
};
```

What this code does:
- Takes any date string (like "2025-08-15" or "2025-08-15T21:00:00-04:00")
- Uses `parseISO` which interprets date-only strings as UTC midnight
- For "2025-08-15", creates a Date object for midnight UTC on that date
- When formatted for display, this UTC time converts to the previous evening in US timezones

#### How the Platform Handles Dates Correctly

The VA.gov platform provides utilities specifically designed to handle dates without timezone conversion:

File: `src/platform/utilities/date/index.js`
```javascript
export function formatDateParsedZoneLong(date) {
  const localDate = stripTimezoneFromIsoDate(date);
  return format(parseISO(localDate), 'MMMM d, yyyy');
}

export function stripTimezoneFromIsoDate(date) {
  return date ? date.replace(/(Z|[-+](\d{4}|\d{2}:\d{2}))$/, '') : date;
}
```

What this approach does:
- Removes any timezone information from the date string
- Treats the resulting date as a simple calendar date without timezone context
- Ensures "2025-08-15" displays as "August 15, 2025" everywhere

### VA.gov Date Handling Patterns

#### How Other VA Applications Handle Dates

The platform has established patterns for handling dates that the Claims Status application doesn't follow:

**Pattern 1: Using Platform Utilities for Date-Only Display**

The Dependents Verification application correctly uses platform utilities:

File: `src/applications/dependents/dependents-verification/components/VeteranInformationComponent.jsx`
```javascript
import { formatDateParsedZoneLong } from 'platform/utilities/date';

const dobDate = dob ? formatDateParsedZoneLong(dob) : null;
```

This ensures birth dates display consistently regardless of timezone.

**Pattern 2: Explicit Timezone Handling for Appointments**

When actual times matter (like appointment scheduling), VA applications explicitly handle timezones:

File: `src/applications/vaos/utils/timezone.js`
```javascript
const timeZone = 'America/New_York';
const easternTimeZoneDate = utcToZonedTime(date, timeZone);
```

This converts times to Eastern Time and clearly indicates the timezone to users.

**Pattern 3: System-Wide Eastern Time Standard**

For system notifications, VA.gov standardizes on Eastern Time:

File: `src/platform/utilities/date/index.js`
```javascript
export const formatDowntime = (dateTime, dayPattern = 'd') => {
  const timeZone = 'America/New_York';
  const easternTimeZoneDate = utcToZonedTime(date, timeZone);
  return format(easternTimeZoneDate, `${monthFormat} ${dayFormat} 'at' ${timeFormat} 'ET'`);
};
```

This ensures all users see the same time for system events, with "ET" clearly labeled.

### Components Using Date Formatting

The date formatting issue affects multiple components throughout the Claims Status application:

| Component | File Location | How It Uses Dates | Current Problem |
|-----------|--------------|-------------------|-----------------|
| DocumentsFiled | `components/claim-files-tab/DocumentsFiled.jsx` | Displays upload and received dates | Shows wrong day for evening uploads |
| Upload Success Handler | `actions/index.js` | Creates upload confirmation date | Converts local time to UTC |
| RecentActivity | `components/claim-status-tab/RecentActivity.jsx` | Shows timeline of claim events | Dates may appear on wrong day |
| ClaimStatusHeader | `components/ClaimStatusHeader.jsx` | Displays claim submission date | Off by one day for some users |

### Processing Logic

#### How the Bug Manifests

Understanding the exact flow helps explain why users see incorrect dates:

**When Processing a Date from the API:**

The API provides a simple date string without timezone information. Here's what happens:

File: `src/applications/claims-status/utils/helpers.js` (buildDateFormatter function)
```javascript
// Step 1: API provides date
const apiDate = "2025-08-15";

// Step 2: parseISO interprets as UTC
const parsed = parseISO("2025-08-15");
console.log(parsed.toISOString());
// Output: "2025-08-15T00:00:00.000Z"

// Step 3: Format for display (user in ET timezone)
const displayed = format(parsed, 'MMMM d, yyyy');
// Output: "August 14, 2025"
```

The process:
- API sends "2025-08-15" meaning August 15th
- parseISO treats this as midnight UTC on August 15th
- For a user in Eastern Time, midnight UTC is 7 or 8 PM the previous day
- The formatted display shows August 14th instead of August 15th

**When Processing an Evening Upload:**

Here's what happens when a user uploads a file in the evening:

File: `src/applications/claims-status/actions/index.js` (upload success handler)
```javascript
// User uploads at 9 PM ET on August 15
const uploadTime = new Date('2025-08-15T21:00:00-04:00');

// Current behavior
const isoString = uploadTime.toISOString();
// Result: "2025-08-16T01:00:00.000Z"

const formatted = buildDateFormatter()(isoString);
// Parses: "2025-08-16T01:00:00.000Z"
// Displays: "August 16, 2025"
```

The process:
- User uploads at 9 PM Eastern on August 15th
- JavaScript converts this to 1 AM UTC on August 16th
- The formatter uses the UTC date (August 16th)
- User sees their upload dated as August 16th instead of August 15th

## Technical Limitations

### Testing Coverage Gaps

The current test suite doesn't catch timezone-related bugs because it only tests simple cases:

File: `src/applications/claims-status/tests/utils/helpers.unit.spec.jsx`
```javascript
describe('buildDateFormatter', () => {
  it('should format date correctly', () => {
    const formatter = buildDateFormatter();
    expect(formatter('2020-01-28')).to.equal('January 28, 2020');
  });
});
```

This test:
- Only checks a date in the middle of the day
- Doesn't test evening times
- Doesn't verify timezone boundaries
- Would pass even with the bug present

What we need to test:
```javascript
it('should display same date for evening uploads', () => {
  const eveningDate = '2025-08-15T23:00:00-04:00';
  const formatter = buildDateFormatter();
  const result = formatter(eveningDate);
  expect(result).to.equal('August 15, 2025');
});

it('should handle date-only strings without timezone shift', () => {
  const dateOnly = '2025-08-15';
  const formatter = buildDateFormatter();
  const result = formatter(dateOnly);
  expect(result).to.equal('August 15, 2025');
});
```

### Maintainability Issues

The Claims Status application uses a different date handling approach than the rest of VA.gov, creating maintenance challenges:

**Inconsistent Approaches Across the Codebase:**
- Claims Status: Custom `buildDateFormatter` that causes timezone shifts
- Platform Standard: `formatDateParsedZoneLong` that preserves dates
- Result: Developers must remember which approach to use where

**Mixed Date Formats in the Same Component:**

The DocumentsFiled component handles multiple date formats inconsistently:

File: `src/applications/claims-status/components/claim-files-tab/DocumentsFiled.jsx`
```javascript
const items = [
  { uploadDate: "2023-03-17" },        // Date-only from API
  { receivedDate: "2023-03-15" },      // Date-only from API
  { date: new Date().toISOString() }   // Full ISO with timezone
];
```

All three formats go through the same formatter, but they represent different things:
- API dates are simple calendar dates that should display as-is
- JavaScript dates include time and timezone information
- The current formatter treats them all as UTC timestamps

### Semantic Accuracy Issues

The date display bug has real impacts on veterans using the system:

**User Trust and Confusion:**
- Veterans uploading documents near deadlines see incorrect submission dates
- Creates uncertainty about whether submissions were received on time
- Generates support tickets and phone calls
- Undermines confidence in the digital claims system

**Specific Problem Scenarios:**

| User's Upload Time | What They See | What They Expected | Impact |
|-------------------|---------------|-------------------|---------|
| 11:00 PM ET on the 15th | "Received on 16th" | "Received on 15th" | Deadline anxiety |
| 9:00 PM PT on the 15th | "Received on 16th" | "Received on 15th" | West coast affected more severely |
| 6:00 AM ET on the 16th | "Received on 16th" | "Received on 16th" | Works correctly |

## Solution Evaluation

### Option 1: Adopt Platform Standard (Recommended)

The best solution aligns the Claims Status application with VA.gov platform standards by using the existing date utilities:

**Implementation:**

File: `src/applications/claims-status/utils/helpers.js`
```javascript
import { formatDateParsedZoneLong, formatDateParsedZoneShort } from 'platform/utilities/date';

export const buildDateFormatter = (formatString = DATE_FORMATS.LONG_DATE) => {
  return date => {
    if (formatString === DATE_FORMATS.LONG_DATE) {
      return formatDateParsedZoneLong(date);
    }
    return formatDateParsedZoneShort(date);
  };
};
```

**Why This Is The Best Approach:**
- Uses battle-tested platform utilities already proven in other VA applications
- Aligns with VA.gov standards for consistency
- Platform team maintains the date handling logic
- Handles all date formats correctly (date-only strings and full timestamps)
- No custom code to maintain

**Implementation Risk:**
- Requires testing all components that display dates
- Small chance of edge cases we haven't identified
- Can be rolled back if issues arise

### Option 2: Custom Timezone Stripping

We could fix the issue by stripping timezone information before parsing:

**Implementation:**

File: `src/applications/claims-status/utils/helpers.js`
```javascript
export const buildDateFormatter = (formatString = DATE_FORMATS.LONG_DATE) => {
  return date => {
    const dateWithoutTimezone = date ? date.replace(/(Z|[-+](\d{4}|\d{2}:\d{2}))$/, '') : date;
    const parsedDate = parseISO(dateWithoutTimezone);
    return isValid(parsedDate)
      ? format(parsedDate, formatString)
      : 'Invalid date';
  };
};
```

**Why We Don't Recommend This:**
- Duplicates logic that already exists in platform utilities
- Creates another custom solution to maintain
- Doesn't align with VA.gov standards
- Risk of missing edge cases the platform utilities handle

### Option 3: Fix Only New Uploads

We could minimally fix just the upload date generation:

**Implementation:**

File: `src/applications/claims-status/actions/index.js`
```javascript
const now = new Date();
const uploadDate = format(now, 'yyyy-MM-dd');
```

**Why This Is Insufficient:**
- Only fixes dates for new uploads going forward
- Doesn't fix dates coming from the API
- Doesn't fix existing uploaded documents
- Leaves the root cause unaddressed

### Comparison Matrix

| Criteria | Option 1: Platform Standard | Option 2: Custom Fix | Option 3: Partial Fix |
|----------|----------------------------|---------------------|---------------------|
| Fixes all date displays | Yes | Yes | No |
| Aligns with VA.gov standards | Yes | No | No |
| Maintenance burden | Platform team | Claims team | Claims team |
| Risk of regression | Low | Low | Very Low |
| Long-term sustainability | Excellent | Poor | Poor |
| Completeness of solution | Complete | Complete | Partial |

### Recommendation: Option 1 - Platform Standard

We recommend adopting the platform standard date utilities for the following reasons:

1. **Consistency**: Aligns with how other VA.gov applications handle dates
2. **Reliability**: Platform utilities are tested and proven across multiple applications
3. **Maintenance**: Platform team maintains and updates the utilities
4. **Completeness**: Fixes all date display issues, not just some

**Implementation Plan:**

1. **Update the date formatter** to use platform utilities (shown above)
2. **Fix upload date generation** to create date-only strings
3. **Add comprehensive tests** for timezone edge cases
4. **Deploy behind feature flag** for gradual rollout
5. **Monitor for any date display issues** during rollout

**Success Metrics:**
- Zero date discrepancies reported by users
- All dates display as the actual day events occurred
- No timezone-related support tickets
- Tests pass for all timezone edge cases

**Next Steps:**
1. Create implementation ticket with technical details
2. Add timezone edge case tests
3. Implement fix behind feature flag
4. Test with team members in different timezones
5. Gradual production rollout with monitoring
