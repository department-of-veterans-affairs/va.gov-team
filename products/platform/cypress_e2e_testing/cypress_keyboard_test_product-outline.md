# Cypress Keyboard E2E Test - Product Outline [DRAFT]

## Overview

*Porting the previous keyboard tests over from Nightwatch into Cypress will allow teams to begin conducting keyboard E2E tests.*

## Problem Statement
*Keyboard E2E tests are not currently being done, because the pilot teams have switched over to Cypress, which does not have that capability currently. How might we enable teams to conduct keyboard navigation-style E2E tests.*

## Personas
*Who are the users of this product?*
* VFS Teams
* VSP Staff

## Measuring Success

### Key Performance Indicators (KPIs)
* VFS Teams use the Keyboar Tests, based on a search for the use of helpers
* Tests are not breaking, based on number of support requests received

---

## Assumptions
- *We assume that we won't hit any roadblocks within Cypress that require a patch to the main lib or significant R&D to overcome*

## Solution Approach
- Identify helpers to be ported from Nightwatch
- Research Cypress native methods that can be used when there’s not a 1:1 from Nightwatch
- We presume Cypress will have methods and/or workarounds to help us port all helpers
- Discovery with FE team members to understand how Cypress is integrated into our forms library
- Identify opportunities to extend and expand keyboard-e2e test helpers

--- 

## Launch Dates
- *Launch Date*: Mid/Late-Dec (Specific Date TBD)

---
   
## Screenshots

_Include before/after screenshots, if applicable. Delete this section otherwise._

### Before

### After

---

## Reference Material

_Link to the following materials as relevant._

- [Automated Accessibility/508 Compliance Testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/testing/508-automated-testing.md)
- [Future Accessibility Tests](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#future-accessibility-tests)

### Communications

<details>

- Team Name: (VSP Testing Team)
- GitHub Label: 
- Slack channel: 
- Product POCs:

</details>

### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
 
</details>
