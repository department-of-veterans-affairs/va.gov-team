# Discovery: Document Upload Date Display Bug

## Issues:
- [[CST] [Bug] Document Upload Receipts appearing in the future (Date/time discrepancy) #119384](https://github.com/department-of-veterans-affairs/va.gov-team/issues/119384)
- [[CST] [BUG] Evening file submissions display next day as submission date #117391](https://github.com/department-of-veterans-affairs/va.gov-team/issues/117391)

## Table of Contents
- [Problem Statement](#problem-statement)
- [Key Questions to Resolve](#key-questions-to-resolve)
- [Root Cause Analysis](#root-cause-analysis)
- [What are the VA.gov Deadline Rules?](#what-are-the-vagov-deadline-rules)
- [What are the Timezone Handling Patterns Across VA.gov?](#what-are-the-timezone-handling-patterns-across-vagov)
- [Where This Bug Impacts Veterans](#where-this-bug-impacts-veterans)
- [Solution: Return ISO 8601 Timestamps](#solution-return-iso-8601-timestamps)
- [Brainstorm of Possible UX Improvements While Awaiting API Fix](#brainstorm-of-possible-ux-improvements-while-awaiting-api-fix)
- [Appendix A: Detailed Technical Flow](#appendix-a-detailed-technical-flow)
- [Appendix B: Additional Affected Areas](#appendix-b-additional-affected-areas)

## Problem Statement

When a veteran uploads a file after 8 PM EDT (7 PM EST), the system displays the submission date as the following day.

**Example Scenario:**

A veteran uploads evidence at 10:18 PM EDT on August 15, 2025. In the success alert they see "We received your file upload on August 15, 2025". They look in the Documents Filed section and see "Received on August 16, 2025" instead of the expected "Received on August 15, 2025".  This creates confusion and potentially distrust in the system as they may think "How can a document be submitted in the future?" or potentially "Is the document not going to be submitted until tomorrow because it's outside business hours right now?". They look in the Status tab in the Recent activity section and also see the confusing "August 16, 2025" as the day the VA.gov received their document.

This is a real screenshot from a user in which this Example Scenario was created out of:
<img width="1167" height="591" alt="image (5)" src="https://github.com/user-attachments/assets/bad11660-bbae-43f3-b97c-58869968b677" />

## Key Questions to Resolve

1. **What are the VA.gov Deadline Rules?**
   - What timezone defines the legal deadline for evidence submission (UTC, ET, or local)?
   - How should dates be displayed to ensure veterans understand deadline compliance?
   - See: [What are the VA.gov Deadline Rules?](#what-are-the-vagov-deadline-rules)

2. **What is the Platform Standard for Timezone Display?**
   - Given the different timezone patterns currently in use across VA.gov (as documented above), which pattern is most appropriate for claims data: user's local time, Eastern Time, or UTC?
   - See: [What are the Timezone Handling Patterns Across VA.gov?](#what-are-the-timezone-handling-patterns-across-vagov)

3. **Can Lighthouse Return ISO 8601 Timestamps?**
   - Is the Lighthouse team able to modify their API to return full timestamps?
   - Are there any technical constraints preventing this?
   - What is the timeline for implementing this change?
   - See: [Solution: Return ISO 8601 Timestamps](#solution-return-iso-8601-timestamps)

4. **Should We Implement UX Improvements While Awaiting the API Fix?**
   - Would removing the local date from the upload notification reduce confusion?
   - Would showing both UTC and local times in upload notification reduce confusion?
   - Should we add disclaimers to the Documents Filed and Recent Activity sections?
   - How can we best communicate the timezone issue to veterans without causing more confusion?
   - See: [Brainstorm of Possible UX Improvements While Awaiting API Fix](#brainstorm-of-possible-ux-improvements-while-awaiting-api-fix)

## Root Cause Analysis

The bug's root cause is visible in the API schemas:

### Benefits Documents API v1 (Upload)
The upload endpoint ([`POST /services/benefits-documents/v1/documents`](https://developer.va.gov/explore/api/benefits-documents/docs?version=current)) accepts NO date/time from the client:

<img width="2630" height="1428" alt="image" src="https://github.com/user-attachments/assets/ede470a9-e834-45d4-b5b5-516010b86dee" />

**Key insight**: Since no timestamp is sent with the upload, we can infer Lighthouse generates its own server-side timestamp in UTC.

### Benefits Claims API v2 (Retrieval)
The retrieval endpoint ([`GET /services/claims/v2/veterans/{veteranId}/claims/{claimId}`](https://developer.va.gov/explore/api/benefits-claims/docs?version=current)) returns dates as date-only strings:

<img width="1356" height="1502" alt="image" src="https://github.com/user-attachments/assets/7c28c11d-561f-48b2-92d1-275a8b26d704" />

**Key insight**: The API returns only date strings without time or timezone information: `"2025-08-16"` instead of `2025-08-16T02:18:00.000Z`.

### How This Creates the Bug

When a veteran uploads a document after 7 PM ET (after midnight UTC), the following sequence occurs:

1. **Upload Time**: August 15 10:18 PM ET is August 16 2:18 AM UTC
2. **Lighthouse Storage**: Since no timestamp is sent with upload, it means Lighthouse generates and stores UTC timestamp `2025-08-16T02:18:00.000Z`
3. **API Response**: Returns only the UTC date portion: `"2025-08-16"` (losing time and timezone information)
4. **Frontend Display**: Shows "August 16, 2025" instead of "August 15, 2025" since it can only display the date string it receives. Without time the frontend has no way of knowing if the file was uploaded in the evening of August 16 UTC and therefore for a ET user should remain August 16th or whether it was uploaded in the morning of August 16 UTC and therefore for a ET user should be August 15th.

**Root cause**: The external Lighthouse Benefits Claims API returns date-only strings instead of full ISO 8601 timestamps, which prevents the frontend from displaying the date in the user's timezone. Users naturally expect to see dates in their local timezone, causing confusion when documents appear to be submitted on the "next day."

## What are the VA.gov Deadline Rules?

**Key Question**: What timezone defines the legal deadline for evidence submission?

**Example: Upload at 10 PM ET on Aug 15**
- If deadlines are midnight UTC (8 PM ET): If Veteran missed deadline then showing "Aug 16" (the UTC date) is correct
- If deadlines are ET: If Veteran is on time showing "Aug 16" (the UTC date) is wrong
- If deadlines are local time: Need timestamps to display correctly

**Action Required**: Confirm deadline timezone with VA legal before implementing any fix, as displaying the wrong timezone could create legal liability.

## What are the Timezone Handling Patterns Across VA.gov?

There is no consistent timezone handling pattern across VA.gov applications. Different teams have implemented different approaches based on their specific needs:

### 1. User's Local Timezone
Applications that detect and use the user's browser timezone:
- **MHV Medical Records**: Uses `Intl.DateTimeFormat().resolvedOptions().timeZone` to detect user's timezone
  - File: `src/applications/mhv-medical-records/util/helpers.js:393-397`
  - Code:
  ```javascript
  const timeZonePart = new Intl.DateTimeFormat('en-US', {
    timeZoneName: 'short',
  })
    .formatToParts(date)
    .find(part => part.type === 'timeZoneName')?.value;
  ```
- **MHV Secure Messaging**: Uses `moment.tz.guess()` for timezone detection
  - File: `src/applications/mhv-secure-messaging/util/helpers.js:106,121`
  - Code: `const timeZone = moment.tz.guess();`
- **Note**: Many applications that display dates in user's local timezone use the platform utility `formatDateLong`, which internally uses `parseISO()` to convert UTC timestamps to the browser's local timezone

### 2. Fixed Eastern Time
Applications that always display in Eastern Time:
- **Ask-VA**: Explicitly converts all dates to `'America/New_York'` and appends "E.T." suffix
  - File: `src/applications/ask-va/config/helpers.jsx:742-745`
  - Code:
  ```javascript
  return formatInTimeZone(
    utcDate,
    'America/New_York',
    "MMM. d, yyyy 'at' h:mm aaaa 'E.T'",
  ```
- **Appeals**: Falls back to `'America/New_York'` when timezone detection fails

### 3. Facility-Specific Timezone
Applications that use the timezone of the VA facility:
- **VAOS (Appointments)**: Uses facility-specific timezones based on facility ID
  - File: `src/applications/vaos/services/appointment/transformers.js:82`
  - Code: `getTimezoneByFacilityId(appt.locationId);`
  - File: `src/applications/vaos/utils/timezone.js:68-71`
  - Code:
  ```javascript
  export function getTimezoneByFacilityId(id) {
    if (!id) return null;
    // Maps facility IDs to IANA timezones like 'America/Chicago', 'America/New_York', etc.
  }
  ```
- **Check-in**: Uses `utcToZonedTime(startTime, appointmentToFile.timezone)` - uses appointment's timezone
  - File: `src/applications/check-in/travel-claim/pages/complete/TravelClaimSuccessAlert.jsx:32-36`
  - Code:
  ```javascript
  date: utcToZonedTime(
    appointmentToFile.startTime,
    appointmentToFile.timezone,
  ),
  ```

### 4. Conditional Logic
Applications with complex rules:
- **Events**: If user is in US, uses their local timezone; otherwise uses event's timezone or defaults to Eastern Time
  - File: `src/applications/static-pages/events/components/Results/index.js:12-16,38-40`
  - Code:
  ```javascript
  const getUserTimeZone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;
  const isUserInUS = () => {
    const userTimeZone = getUserTimeZone();
    return userTimeZone.startsWith('America/');
  };
  // Later in component:
  const userTimeZone = getUserTimeZone();
  const useUserTimeZone = isUserInUS();
  ```

### 5. No Timezone Handling (Date-Only)
Applications receiving date-only strings without timezone information:
- **Claims-status**: Currently receives date-only strings from Lighthouse API, cannot perform timezone conversion
- **Personalization/Dashboard (claims display)**: Works around date-only limitation with `replaceDashesWithSlashes` helper
  - File: `src/applications/personalization/dashboard/utils/date-formatting/helpers.js:7-9`
  - Code:
  ```javascript
  export const replaceDashesWithSlashes = date => {
    return date.replace(/-/g, '/');
  };
  ```
  - Usage: `src/applications/personalization/dashboard/utils/getStatusContents.jsx:57`
  - Code: `new Date(replaceDashesWithSlashes(details.lastSocDate))`
  - Note: This workaround is needed because JavaScript's `new Date()` interprets "2025-08-16" as UTC but "2025/08/16" as local time

### Platform Standard
The VA.gov platform provides a `formatDateLong` utility (src/platform/utilities/date) that handles date formatting for both timestamps and date-only strings. When given full ISO 8601 timestamps, it converts from UTC to the user's local timezone for display. For example, "2025-08-16T02:18:00.000Z" (2:18 AM UTC on August 16) would display as "August 15, 2025" for a user in EDT because 2:18 AM UTC is 10:18 PM EDT the previous day. This utility is used by multiple applications across VA.gov, suggesting the platform's intended pattern is to display dates in the user's local timezone when timestamp data is available.

However, when given date-only strings like "2025-08-16" (which is what Claims Status Tool receives from Lighthouse), no timezone conversion occurs - the date displays as "August 16, 2025" regardless of the user's timezone. Claims Status Tool uses this utility but cannot benefit from its timezone conversion capability.

Despite the platform utility's preference for local timezone display, the inconsistency across VA.gov applications reflects legitimate business needs. Ask-VA uses Eastern Time for consistency across support channels, VAOS uses facility timezone to match physical appointment locations, and Claims Status is limited by the API's date-only format.

### VA Design System Guidance
The [VA Design System](https://design.va.gov/content-style-guide/dates-and-numbers#times-and-time-zones) specifies that office hours should "always use the time zone ET" while user progress/saved work should "show hours in their local time zone." However, evidence submissions don't clearly fit either category - they are formal submissions with legal deadline implications. This gap in design guidance may contribute to the inconsistent timezone patterns observed across VA.gov applications.

## Where This Bug Impacts Veterans

Since the Claims API v2 returns all dates as date-only strings, this bug affects multiple areas where dates are displayed:

### 1. Documents Filed Tab
- **Location**: `/track-claims/your-claims/[claim-id]/files`
- **Component**: `src/applications/claims-status/components/claim-files-tab/DocumentsFiled.jsx`
- **Impact**: Uploaded documents show next day's date for evening submissions
- **Data field**: `supportingDocuments[].uploadDate`

### 2. Recent Activity Tab
- **Location**: `/track-claims/your-claims/[claim-id]/status`
- **Component**: `src/applications/claims-status/components/claim-status-tab/RecentActivity.jsx`
- **Impact**: Evidence submission deadlines appear missed when submitted between 7 PM ET and midnight ET
- **Data fields**:
  - `trackedItems[].documents[].uploadDate`
  - `trackedItems[].requestedDate`, `receivedDate`, `closedDate`

**Stakeholder Escalation**: A veteran submitted evidence before midnight ET on their deadline day, but the system showed it as received the next day, making it appear they missed the deadline.

**Note**: Additional affected areas throughout the claims status application are documented in Appendix B.

### Impact

This date display issue creates several concerns across all affected areas:

1. **Potential Compliance Issues**
   - May cause confusion about whether deadlines were met
   - Could lead to unnecessary appeals or inquiries
   - Creates discrepancies between actual submission time and displayed date

2. **Trust Erosion**
   - Veterans lose confidence in the system's accuracy
   - Creates doubt about whether documents are being processed correctly

3. **Operational Impact**
   - Increased support calls about deadline disputes
   - Manual verification required to confirm actual submission times
   - Additional workload for claims processors to investigate discrepancies

4. **Equity Issues**
   - Disproportionately affects veterans in Eastern/Central time zones
   - Veterans working evening shifts more likely to encounter the bug
   - Creates inconsistent experiences based on upload time

## Solution: Return ISO 8601 Timestamps

The solution requires updating the Lighthouse Benefits Claims API to return complete timestamp information rather than date-only strings.

### The Fix
**Lighthouse API should follow REST API standards (RFC 3339 / ISO 8601):**
- Return full ISO 8601 timestamps instead of date-only strings
- Change from: `"uploadDate": "2025-08-16"`
- Change to: `"uploadDate": "2025-08-16T02:18:00.000Z"`

### Benefits of This Approach
- Enables consistent timezone display across all systems
- Preserves time information for future features
- Follows industry standards (GitHub, AWS, Stripe, etc.)
- No information loss
- Enables relative time displays (e.g., "2 hours ago")

### Recommended Display Approach (Industry Best Practice)
Based on federal precedent (IRS e-filing) and legal filing systems, **display all dates in Eastern Time (ET)** with clear timezone labels.

#### Problems with Alternative Approaches

**Local Time Display:**
- **VPN Gaming**: Veteran in Philippines (UTC+8) misses deadline. Uses VPN to appear in Hawaii (UTC-10), gaining 18 hours to submit "on time"
- **Travel Confusion**: Veteran submits at 11 PM from California. Later views from Virginia - same submission shows different dates (11 PM PST = 2 AM EST next day)
- **DST Ambiguity**: During "fall back," 1:00-1:59 AM occurs twice. A 1:30 AM submission creates legal ambiguity - which occurrence counts?

**UTC Display:**
- **Non-intuitive**: California Veteran submits at 10 PM PST (6 AM UTC next day). Sees "Received: [tomorrow's date]" despite it being "today" locally
- **Complex Deadlines**: Midnight UTC = 8 PM EDT / 7 PM EST / 4 PM PST. Veterans shouldn't need conversion charts for deadlines

#### Why ET Display Works
- Single source of truth: "All deadlines are midnight ET"
- Matches VA headquarters business operations
- Follows federal precedent (IRS e-filing uses ET)
- Use "ET" notation (automatically handles EDT/EST transitions)
- Aligns with VA Design System guidance for office hours

### Potential Cross-Application Impact

Currently, applications receiving date-only strings from Lighthouse. If Lighthouse returns ISO 8601 timestamps:

- Applications would receive full timestamp information (e.g., "2025-08-16T02:18:00.000Z")
- All claim dates should be displayed in Eastern Time with "ET" label for consistency
- **personalization/dashboard** (displays claim dates on My VA page) would need updates
- Testing would be required to ensure all applications display dates consistently in ET

### Frontend Implementation for ET Display

Once Lighthouse returns proper timestamps, the frontend should display all claim-related dates in Eastern Time for consistency.

**Frontend Implementation** (`src/applications/claims-status/utils/helpers.js`):
```javascript
import { parseISO } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

// Formatter that displays dates in Eastern Time with clear labeling
export const formatDateWithTimeET = dateString => {
  if (!dateString) return 'Invalid date';

  try {
    const date = parseISO(dateString);
    // Format in Eastern Time (automatically handles EDT/EST)
    return formatInTimeZone(
      date,
      'America/New_York',
      "MMMM d, yyyy 'at' h:mm a 'ET'"
    );
  } catch {
    // Fallback for date-only strings
    return formatDateLong(dateString);
  }
};
```

This approach ensures all Veterans see the same date/time regardless of their location, preventing confusion about deadlines.

## Brainstorm of Possible UX Improvements While Awaiting API Fix

While we work with the Lighthouse API team to implement the fix (returning full timestamps), we can make immediate UX improvements to reduce confusion:

### Remove Date from Upload Alert

**Current Alert:**
```
"We received your file upload on August 15, 2025"
```
*Issue: This date is generated on the frontend on successful submission (`new Date()`) in the user's local timezone, but the Documents Filed section shows "August 16, 2025" from the API (UTC date). This inconsistency likely confuses users.*

<img width="666" height="279" alt="Screenshot 2025-09-15 at 8 08 39 AM" src="https://github.com/user-attachments/assets/68fc2c0e-31f3-45f2-9e62-19632595460e" />

**Updated Alert:**
```
"We successfully received your file upload"
```

### Documents Filed / Recent Activity Disclaimers

**Option A: Simple Note**
Add above the documents list:
```
ℹ️ Note: All dates shown are based on Coordinated Universal Time (UTC) and will be displayed as one day later for files uploaded after 7 PM ET.
```

**Option B: Additional Info Component**
Add a `va-additional-info` component near the "Documents Filed" and "Recent Activity" sections:
```jsx
<va-additional-info
  trigger="About document dates"
  disable-analytics
>
  <p>
    Dates shown are based on UTC time. If you uploaded documents in the evening (after 7 PM ET), they will show the next day's date.
  </p>
</va-additional-info>
```

## Appendix A: Detailed Technical Flow

### API Documentation
- **Benefits Documents API v1 Spec**: https://api.va.gov/internal/docs/benefits-documents/v1/openapi.json
- **Benefits Claims API v2 Spec**: https://developer.va.gov/explore/api/benefits-claims/docs?version=current

### Part A: Document Upload Flow (10:18 PM ET, August 15, 2025)

1. **User Action** (`src/applications/claims-status/components/claim-files-tab/AddFilesForm.jsx`)
   - User navigates to https://va.gov/track-claims/your-claims/[claim-id]/files
   - User selects a file and clicks "Submit documents for review" button at 10:18 PM ET
   - Component calls `onSubmit(formattedFiles)`

2. **Frontend Processing** (`src/applications/claims-status/components/claim-files-tab/AdditionalEvidencePage.jsx`)
   - `onSubmitFiles` method called
   - Invokes `submitFiles(claimId, null, files)` action

3. **Upload Action** (`src/applications/claims-status/actions/index.js`)
   - Creates FineUploaderBasic instance
   - Makes API call: `POST /v0/benefits_claims/{claimId}/benefits_documents`
   - On success, creates notification with `now.toISOString()`
   - Note: This notification date displays correctly in the alert

4. **vets-api Controller** (`vets-api/app/controllers/v0/benefits_documents_controller.rb`)
   - Receives file upload request
   - Calls `service.queue_document_upload(params)`

5. **vets-api Service** (`vets-api/lib/lighthouse/benefits_documents/service.rb`)
   - `queue_document_upload` method processes file
   - Creates `LighthouseDocument` object without any date
   - Calls `submit_document` which uploads to Lighthouse API

6. **Lighthouse API Call** (`vets-api/lib/lighthouse/benefits_documents/configuration.rb`)
   - Makes `POST` request to external Lighthouse Benefits Documents API v1
   - Endpoint: `POST /services/benefits-documents/v1/documents`
   - Payload includes: file, claimId, participantId, fileName
   - **No date/timestamp sent with upload**

7. **External Lighthouse Processing**
   - Lighthouse Benefits Documents API receives file at 2:18 AM UTC (August 16)
   - Stores document with timestamp: `2025-08-16T02:18:00.000Z`

### Part B: Document Retrieval and Display Flow (Page Refresh)

8. **User Refreshes Page** (`src/applications/claims-status/containers/FilesPage.jsx`)
   - FilesPage component mounts

9. **Fetch Claim Details** (`src/applications/claims-status/actions/index.js`)
   - `getClaim(id)` action dispatched
   - Makes API call: `GET /v0/benefits_claims/{id}`

10. **vets-api Controller** (`vets-api/app/controllers/v0/benefits_claims_controller.rb:32-61`)
    - `show` action handles request
    - Calls `service.get_claim(params[:id])`

11. **vets-api Service** (`vets-api/lib/lighthouse/benefits_claims/service.rb:43-55`)
    - `get_claim` method called
    - Makes request to external API: `config.get("#{@icn}/claims/#{id}")`

12. **External API Call** (`vets-api/lib/lighthouse/benefits_claims/configuration.rb`)
    - Makes `GET` request to external Lighthouse Benefits Claims API v2
    - Endpoint: `GET /services/claims/v2/veterans/{icn}/claims/{id}`

13. **External Lighthouse Response**
    - Returns claim data with `supportingDocuments` array
    - Each document includes:
    ```json
    {
      "uploadDate": "2025-08-16",  // Date in UTC
      "documentType": "L029",
      "fileName": "evidence.pdf"
    }
    ```

14. **vets-api Returns Data**
    - Passes through the response without date transformation
    - Returns to frontend with `uploadDate: "2025-08-16"`

15. **Redux State Update** (`src/applications/claims-status/actions/index.js`)
    - Dispatches `SET_CLAIM_DETAIL` with claim data
    - Stores in `state.disability.status.claimDetail.detail`

16. **DocumentsFiled Component** (`src/applications/claims-status/components/claim-files-tab/DocumentsFiled.jsx`)
    - Receives claim from props
    - Extracts `supportingDocuments` from `claim.attributes`
    - Maps through documents

17. **Date Formatting** (`src/applications/claims-status/components/claim-files-tab/DocumentsFiled.jsx`)
    - Calls `formatDate(doc.uploadDate)` where `doc.uploadDate = "2025-08-16"`
    - `formatDate` uses `buildDateFormatter()`

18. **Date Display** (`src/applications/claims-status/utils/helpers.js`)
    - `buildDateFormatter` receives `"2025-08-16"`
    - Calls `parseISO("2025-08-16")` creating date at midnight local time
    - Formats as "August 16, 2025"
    - **User sees UTC date instead of local date**

## Appendix B: Additional Affected Areas

Since the Claims API v2 returns all dates as date-only strings, the following additional areas are also affected by this bug:

### Your Claims List
- **Component**: `src/applications/claims-status/components/ClaimsListItem.jsx`
- **Location**: `/track-claims/`
- **Affected dates**:
  - Claim received date (`claimDate`)
  - Last updated date (`phaseChangeDate`)

### Claim Overview Tab
- **Component**: `src/applications/claims-status/components/claim-overview-tab/ClaimPhaseStepper.jsx`
- **Location**: `/track-claims/your-claims/[claim-id]/overview`
- **Affected dates**:
  - Claim date (`claimDate`)
  - Current phase date (`currentClaimPhaseDate`)

### Claim Letters
- **Component**: `src/applications/claims-status/components/claim-letters/ClaimLetterListItem.jsx`
- **Location**: `/track-claims/your-claims/[claim-id]/letters`
- **Affected dates**:
  - Letter received date (`letter.receivedAt`)

### Claim Status Header
- **Component**: `src/applications/claims-status/components/ClaimStatusHeader.jsx`
- **Location**: Displayed on all claim detail pages
- **Affected dates**:
  - "Last updated" date from tracked items

### What We Are Doing Section
- **Component**: `src/applications/claims-status/components/claim-status-tab/WhatWeAreDoing.jsx`
- **Location**: `/track-claims/your-claims/[claim-id]/status`
- **Affected dates**:
  - Phase change date (`phaseChangeDate`)

### Files Needed/Optional
- **Components**:
  - `src/applications/claims-status/components/claim-files-tab/FilesNeeded.jsx`
  - `src/applications/claims-status/components/claim-files-tab/FilesOptional.jsx`
- **Location**: `/track-claims/your-claims/[claim-id]/files`
- **Affected dates**:
  - Evidence suspense dates (`suspenseDate`)

### Due Date Display
- **Component**: `src/applications/claims-status/components/DueDate.jsx`
- **Location**: Various pages showing evidence deadlines
- **Affected dates**:
  - Evidence suspense dates

### Closed Claim Alert
- **Component**: `src/applications/claims-status/components/claim-status-tab/ClosedClaimAlert.jsx`
- **Location**: `/track-claims/your-claims/[claim-id]/status`
- **Affected dates**:
  - Claim close date (`closeDate`)

All these components use the `buildDateFormatter()` utility function which correctly formats the date strings it receives, but cannot correct for the missing timezone information from the API.
