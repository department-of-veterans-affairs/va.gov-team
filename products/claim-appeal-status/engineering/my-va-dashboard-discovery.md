# Discovery: Claims and Appeals Access Issue on My VA Dashboard

**Environment:** Staging  
**Affected User:** Staging User 220  
**Date:** 2025-10-16  

## Summary
A logic error in the My VA dashboard prevents users from accessing their claims information when the Appeals API returns an error, even when the Claims API is functioning correctly. Similarly, this same logic error would prevent users from seeing their appeals information when the Claims API returns an error, even when the Appeals API is functioning correctly. While the original issue was identified through an Appeals API failure that hid claims data, the inverse problem would also occur with a Claims API failure hiding appeals data.

## Steps to Reproduce
1. Log in as staging user 220 (vets.gov.user+220@gmail.com) You will land on the dashboard (`/my-va/`)
2. Observe "Manage all claims and appeals" button is not visible
3. Observe `/v0/appeals` returns a 500
4. Observe `/v0/benefits_claims` returns 200 and claims are not visible
5. Navigate to `/track-claims/your-claims` - Claims are accessible, Appeals show error

[https://github.com/user-attachments/assets/67e331eb-7e46-48d0-b33b-049689231c61](https://github.com/user-attachments/assets/6ab01196-d5ae-461d-8d7e-8c08a28b12bb)

## Root Cause
Boolean logic error in [`ClaimsAndAppeals.jsx:278`](https://github.com/department-of-veterans-affairs/vets-website/blob/19f7ebf66ff72e8768a79a05488613a2cf7cdef9/src/applications/personalization/dashboard/components/claims-and-appeals/ClaimsAndAppeals.jsx#L278):
```javascript
const hasAPIError = !!hasAppealsError || !!hasClaimsError;
```

This OR condition treats an Appeals API failure the same as a complete system failure, blocking access to successfully-loaded Claims data.

## Related Issues
### Appeals API JSON Schema Validation Failure
The Appeals 500 error affecting Staging User 220 is caused by a vets-api JSON schema validation failure, making this Boolean logic bug manifest more frequently than it otherwise would. This represents a compounding failure scenario where:

1. The JSON schema bug causes Appeals API failures for certain users
2. The Boolean logic bug then blocks all claims/appeals data due to that failure

**Related Ticket:** [#115204 - Appeals API JSON Schema Validation Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/115204)

While fixing the JSON schema issue will reduce the occurrence of this problem for affected users, the underlying Boolean logic bug will still cause complete data blockage whenever either API legitimately fails for any reason (network issues, service outages, etc.).

## User Impact
Users cannot:
- View their claims information on My VA dashboard when Appeals API fails
- View their appeals information on My VA dashboard when Claims API fails
- Access the "Manage all claims and appeals" button (masked by error warning)

## Recommendation
Update error handling logic to support graceful degradation with targeted error messages:

* Appeals API failure: Display appeals error message while showing available claims data
* Claims API failure: Display claims error message while showing available appeals data
* Both APIs failing: Display combined error message indicating both services are unavailable

This three-message approach follows the existing pattern in the Claim Status Tool. Design team consultation will be needed for final error message content and UI placement.
