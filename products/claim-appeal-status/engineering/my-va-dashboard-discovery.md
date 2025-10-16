# Discovery: Claims and Appeals Access Issue on My VA Dashboard

**Environment:** Staging  
**Affected User:** Staging User 220  
**Date:** 2025-10-16  

## Summary
A logic error in the My VA dashboard prevents users from accessing their claims information when the Appeals API returns an error, even when the Claims API is functioning correctly.

## Current Behavior

### My VA Dashboard (`/my-va/`)
- Appeals: 500 error
- Claims: API returns 200 (success), but content is blocked from display
- "Manage all claims and appeals" button is masked by error warning

### Track Claims page (`/track-claims/your-claims`)
- Claims: Accessible
- Appeals: 500 error

*It is worth noting that the Appeals 500 error source for Staging User 220 is caused by a vets-api JSON schema validation failure. View thread on this issue [HERE](https://github.com/department-of-veterans-affairs/va.gov-team/issues/115204). 
Caseflow service returns `null` values for the `description` field within appeal issues.
The schema at `lib/caseflow/schema/appeals_issue.json` strictly requires the `description` field to be of type `"string"`, not allowing `null` values. 

https://github.com/user-attachments/assets/67e331eb-7e46-48d0-b33b-049689231c61

## Root Cause
Boolean logic error in [`ClaimsAndAppeals.jsx:278`](https://github.com/department-of-veterans-affairs/vets-website/blob/19f7ebf66ff72e8768a79a05488613a2cf7cdef9/src/applications/personalization/dashboard/components/claims-and-appeals/ClaimsAndAppeals.jsx#L278):

```javascript
const hasAPIError = !!hasAppealsError || !!hasClaimsError;
```

This OR condition treats an Appeals API failure the same as a complete system failure, blocking access to successfully-loaded Claims data.

## User Impact
Users cannot:
- View their claims information on My VA dashboard when Appeals API fails
- Access the "Manage all claims and appeals" button (masked by error warning)

## Recommendation
Update error handling logic to allow Claims data to display when only the Appeals API fails, showing custom alerts related to which endpoint is failing instead of complete blockage.

