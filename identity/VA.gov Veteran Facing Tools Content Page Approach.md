# Overview
As part of the VA Web Brand Consolidation effort, all Veteran Facing Tools (VFT) that are not health related (i.e. not to be hosted by My HealtheVet) will be migrated from Vets.gov to VA.gov. In doing so, we need to ensure that users who are accessing VA.gov have been logged in with the proper account types in order to access the VFT.

Details for health tools: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/identity/%5B%2312255%5D%20VA.gov%20MHV%20SSO%20Content%20Page%20Approach.md

# Approach
The following table describes the approach for each tool:

| Tool | Content Page URL | Tool URL | Required Account Type | Not Logged In | Logged in (LOA1) | Logged in (LOA3) |
|------|------------------|----------|-----------------------|---------------|------------------|------------------|
| 10-10 EZ (Healthcare) | N/A | /health-care/apply-for-health-care-form-10-10ez | Any | Direct navigation to tool | Direct navigation to tool | Direct navigation to tool |
| 1990 (GI Bill) | N/A | /education/apply-for-education-benefits/application/1990/introduction | Any | Direct navigation to tool | Direct navigation to tool | Direct navigation to tool |
| Check Your GI Bill Benefits | | | LOA3 | Content page w/ login button | Content page w/ verify your identity button | Redirect to tool |
| GI Bill Comparison Tool (GIBCT) | N/A | | Any | Direct navigation to tool | Direct navigation to tool | Direct navigation to tool |
| 526 (Disability Benefits) | N/A | | LOA3 | Direct navigation to tool | Direct navigation to tool | Direct navigation to tool |
| 527 (Pension) | N/A | | Any | Direct navigation to tool | Direct navigation to tool | Direct navigation to tool |
| 530 (Burial Benefits) | N/A | | Any | Direct navigation to tool | Direct navigation to tool | Direct navigation to tool |
| Claims & Appeals | | | LOA3 | Content page w/ login button | Content page w/ verify your identity button | Redirect to tool |
| VA Letters | | | LOA3 | Content page w/ login button | Content page w/ verify your identity button | Redirect to tool |
| Veteran ID Card (VIC) | | | LOA3 | Content page w/ login button | Content page w/ verify your identity button | Content page w/ button to get to the tool |

## Definitions
- Required Account Type
   - None: User does not have to be logged in to access the tool
   - LOA1: Includes ID.me (not ID proofed), DS Logon Level 1, MHV Basic, and MHV Advanced
   - LOA3: Any account with ID.me ID proofing, DS Logon Level 2, MHV Premium
- Behaviors
   - Direct navigation to tool: There is no content page for this tool; the user should always be directly navigated to the tool
   - Content page w/ login button: Content page loads with a CTA for the user to log in to access the tool
   - Content page w/ verify your identity button: Content page loads with CTA for the user to go through the identity proofing process to access the tool
   - Redirect to tool: As the user is logged in with a sufficient account level, the user should be redirected to the tool
