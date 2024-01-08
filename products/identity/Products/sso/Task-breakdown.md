## High Level Requirements and Scope:
(provided by Lauren Alexanderson)

SSO team is being asked to do the items in bold (1,2,4,5)
1. **Complete the SSOe work, so that a Veteran can sign in on VA.gov and be taken to and from My VA Health, MHV, and EBN.**
2. **Create va.gov/sign-in so that we have a URL where we can send users trying to login directly to Cerner from a bookmarked link, etc.**
3. Update unauthenticated content throughout the health hub to facilitate way-finding / de-specify MHV.
4. **Update the alert boxes, so that an authenticated user can see on the health tools pages which portal or portals they need to go to.**
5. **Update the va.gov/my-health experience to help Veterans get to MHV, My VA Health, or both, as appropriate.**
6. Ensure contact centers are prepared to help Veterans navigate between the portals.

## Known Implementation Tasks
### Workstream 1: Complete SSOe integration work
- Validate logout functionality
- Finalize/validate keepalive functionality
- Validate any error cases
- Test with mix of LOA1/3 users across all credential types

### Workstream 2: Multi-app, standalone sign-in page on VA.gov
- Implement frontend app reachable at self-contained URL that initiates sign-in flow.
- Add app/state parameters to identify application initiating login, and state to be passed back after login.
- Implement/update v1 sessions controller in support of above - may need stateful mapping in redis for callback state.
- Add configuration for per-app callback/redirect URL
- Audit above implementation to make sure we're not introducing any open redirect/cross site request forgery scenarios.

### Workstream 4: Update alert boxes
- Implement reusable alert component to be embedded in health tools that presents destination selection as needed.
  - I.e., has options navigating to appropriate services (HEL/MHV) based on user profile.

### Workstream 5: Update va.gov/my-health
- Update existing frontend app to have authenticated logic that redirects or presents destination selection dialog as needed.

### Non-workstream-specific Tasks
- Seeding test users/data across all systems, representative of all scenarios.
- Need mapping of facility IDs to human-readable facility names/cities. Can probably pull from facilities API. 
- Add per-user facility mapping to user/profile object in vets-api.
- Identify/enumerate what return URLs/deep links are needed from HEL/MHV when either of  those sites links to the login page.

## Open Questions/Unknowns
1. Will Cerner patients have a VHA facility ID established in MVI that we can use to identify them and route appropriately? If so what is it? We need concurrence across all three systems about how to interpret these values.
2. What identifier(s) is HealtheLife using to identify a patient? ICN/EDIPI/etc (they should get whatever identifier they need via SAML payload from SSOe, but for seeding test data we need to ensure things line up correctly.
3. What development environments are present for HealtheLife? What MVI environment/other systems are they connected to?
4. Can we scope this down to existing VA patients (using same logic we use today for MHV account creation?) 
5. Can MHV update their user onboarding flow to create implicit credentials/accounts in time for IOC?
