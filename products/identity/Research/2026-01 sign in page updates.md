# Sign-In Page Review Findings

## Overview

This review was conducted to evaluate how other government websites present their sign-in experiences and identify potential improvements for the VA.gov sign-in page. The goal was to determine whether aligning VA.gov's sign-in page with other government sites could make the experience more familiar and intuitive for Veterans, while acknowledging that different organizations may have specialized authentication needs.

Sites reviewed included CBP.gov, SSA.gov, several state government websites, and the U.S. Web Design System (USWDS) guidance.

## Findings

### Sign-In Options Across Government Sites

| Category | Sites Visited | Description |
|----------|-------------|-------------|
| **Single Sign-In Options** | IRS, US Securities and Exchange, CBP, Federal Student Aid, Medicare, Kentucky Medicaid, Ohio DMV, Texas Tax Office | Many government sites reviewed (including CBP.gov and SSA.gov) provided only a single sign-in option, which is not relevant to VA.gov since we have 2 CSPS. |
| **Multiple Sign-In Options** | Social Security Administration, USDA eAuthentication | For sites offering multiple authentication methods, there was considerable variation in how these options were presented. The motivations behind different design decisions were difficult to discern from external review alone. |
| **Sign-In vs. Create Account Placement** | US Citizenship and Immigration, Federal Student Aid, US Digital Mint |There were marked inconsistencies in how sites handle "Sign In" and "Create Account" functionality; some sites separated these actions in the profile/login section (typically upper right corner) while others split the option on the sign in page itself.  No clear pattern emerged across government sites |

### USWDS Guidance

The U.S. Web Design System recommends separating "Sign In" from "Create an Account" as distinct actions to provide clarity to users.

### VA.gov Context and Recent History

- **CSP Deprecation Transition Decision**: VA.gov made a deliberate decision to combine "Sign In" and "Create an Account" under one section to reduce cognitive load and minimize confusion for Veterans during the CSP deprecation phase when extra content was needed on the page to explain what was happening.

- **Recent Changes**: The positioning of ID.me and Login.gov was recently switched on the sign-in page, which created confusion among users, as reported by MHV coordinators.

- **Credential Service Provider (CSP) Deprecation**: Veterans have recently experienced significant changes with the deprecation of two CSPs, creating disruption and requiring adaptation to new authentication methods.

## Recommendations

**Do not make changes to the VA.gov sign-in page at this time.**

While the standard recommendation would typically be to align with USWDS guidance and separate "Sign In" from "Create an Account," the following factors support maintaining the current approach:

1. **Existing Strategic Decision**: The decision to combine sign-in and account creation was made intentionally to reduce cognitive load for Veterans and should be respected.

2. **Recent Change Fatigue**: Veterans have experienced substantial disruption due to:
   - Deprecation of two credential service providers
   - Recent repositioning of Login.gov and ID.me, which caused confusion and anxiety

3. **Lack of Compelling Problem**: There is no evidence of a significant user problem with the current sign-in page design that would justify introducing additional changes.  It is worth mentioning that there has been anecdotal mentions in the Medallia surveys but nothing of significant note to show a reliable pattern.

4. **Risk of Additional Friction**: Any modifications at this time would create unnecessary friction and potentially compound existing user confusion and frustration.

5. **Stability Needed**: Veterans need a period of stability to adjust to recent authentication changes before introducing any new modifications to the sign-in experience.

### Future Considerations

If and when usability issues are identified through user research or analytics that indicate problems with the current sign-in page design, those specific issues should be addressed with targeted solutions. Any future changes should be informed by Veteran feedback and tested thoroughly before implementation.
