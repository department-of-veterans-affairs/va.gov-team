# Overview
As part of the VA Web Brand Consolidation effort, all Veteran Facing Tools (VFT) that are not health related (i.e. not to be hosted by My HealtheVet) will be migrated from Vets.gov to VA.gov. In doing so, we need to ensure that users who are accessing VA.gov have been logged in with the proper account types in order to access the VFT.

# Design
CTA designs are here: https://adhoc.invisionapp.com/share/MUOC4SMW8SG#/screens/322898547_TOC

# Approach
The following table describes the approach for each tool:

## LOA3 Tools (Requires Griffins)

| Tool | Content Page URL | Tool URL | Required Account Type | Not Logged In | Logged in (LOA1) | Logged in (LOA3) |
|------|------------------|----------|-----------------------|---------------|------------------|------------------|
| Check Your GI Bill Benefits | N/A | /education/gi-bill/post-9-11/ch-33-benefit | LOA3 | Tool page w/ login button | Tool page w/ verify your identity button | Tool page w/ continue to tool button |
| 526 (Disability Benefits) | N/A | disability-benefits/apply/form-526-disability-claim/introduction | LOA3 | Tool page w/ login button | Tool page w/ verify your identity button | Tool page w/ continue to tool button |
| Claims & Appeals | /claim-or-appeal-status | /track-claims | LOA3 | Content page w/ login button | Content page w/ verify your identity button | Redirect to tool |
| VA Letters | N/A | /records/download-va-letters/ | LOA3 | Tool page w/ login button | Tool page w/ verify your identity button | Tool page w/ continue to tool button |
| Veteran ID Card (VIC) | N/A |/types-of-veteran-id-cards/vic/ | LOA3 | Tool page w/ login button | Tool page w/ verify your identity button | Tool page w/ continue to tool button |

## Other Tools

The following tools do not require a particular logged in user type.

| Tool | Content Page URL | Tool URL | Required Account Type | Not Logged In | Logged in (LOA1) | Logged in (LOA3) |
|------|------------------|----------|-----------------------|---------------|------------------|------------------|
| 10-10 EZ (Healthcare) | N/A | /health-care/apply-for-health-care-form-10-10ez | Any | Direct navigation to tool | Direct navigation to tool | Direct navigation to tool |
| 1990 (GI Bill) | N/A | /education/apply-for-education-benefits/application/1990/introduction | Any | Direct navigation to tool | Direct navigation to tool | Direct navigation to tool |
| GI Bill Comparison Tool (GIBCT) | N/A | /education/gi-bill-school-comparison-tool/ | Any | Direct navigation to tool | Direct navigation to tool | Direct navigation to tool |
| 527 (Pension) | N/A | | Any | Direct navigation to tool | Direct navigation to tool | Direct navigation to tool |
| 530 (Burial Benefits) | N/A | | Any | Direct navigation to tool | Direct navigation to tool | Direct navigation to tool |

## Definitions
- Required Account Type
   - None: User does not have to be logged in to access the tool
   - LOA1: Includes ID.me (not ID proofed), DS Logon Level 1, MHV Basic, and MHV Advanced
   - LOA3: Any account with ID.me ID proofing, DS Logon Level 2, MHV Premium
- Behaviors
   - Direct navigation to tool: There is no content page for this tool; the user should always be directly navigated to the tool
   - Content/Tool page w/ login button: Content/Tool page loads with a CTA for the user to log in to access the tool
   - Content/Tool page w/ verify your identity button: Content/Tool page loads with CTA for the user to go through the identity proofing process to access the tool
   - Content/Tool page w/ continue to tool: Content/Tool page loads with CTA for the user to continue to the tool (no redirect behavior)
   - Redirect to tool: As the user is logged in with a sufficient account level, the user should be redirected to the tool
