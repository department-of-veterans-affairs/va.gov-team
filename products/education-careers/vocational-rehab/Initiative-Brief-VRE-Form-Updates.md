# Initiative Brief: 28-1900 Veteran Readiness and Employment (VR&E aka Chapter 31)

## Outcome Summary
Veterans submitting online form 28-1900 have a positive experience and can trust that their submissions include all the required information to ensure efficient processing.

**Related/Associated product(s)**
- [VR&E Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/vocational-rehab/README.md)

## Problem
- The current online 28-1900 form is using an outdated version of the paper form. It's missing new fields and generating an old version of the form pdf. It also contains some accessibility issues that need to be addressed. The form intake API also needs to be migrated to a new RES API.

## Desired User Outcomes

- The 28-1900 online form generates and submits the most recent version of the claim pdf to increase processing efficiency
- The 28-1900 online form collects all required information from the Veteran to ensure successful claim processing
- Veterans encounter fewer critical accessibility issues (level 0-2) with completing the online form

## Undesired User Outcomes
- The online form has errors or issues that lead to processing delays
- Veterans find the form experience confusing, frustrating, or too cumbersome

## Desired Business Outcomes
- The RES intake API successfully receives and processes the form payload

## Undesired Business Outcomes
- Online form submissions generate claim errors that delay processing 

---
## Measuring Success

| KPI                       | Baseline Value | Target Value | Actual Value | Link to Data Source |
|---------------------------|----------------|--------------|--------------|---------------------|
| % fields received by RES  |                |              |              |                     |
| # of claim errors         |                |              |              |                     |

---

## Discovery
### Assumptions/Risks
- Sending an updated payload to the RES API will ensure efficient processing
- Adding missing fields will ensure online claims are complete and additional development is not needed
- Remediating critical accessibility issues will improve Veterans' experience with the online form

- **Value Risks** (will people use it): 
  - 
- **Usability Risks** (can people figure out how to use it):
  - Addressing the critical accessibilty issues will not address other problems with the form flow
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - 
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - 

### What're you building
- Update the form wizard component to meet accessibility standards
- Address outstanding accessibility issues identified in the last audit
- Point the form payload to the new RES endpoint
- Update the form payload to send missing and new fields
- Out of scope: 
- Future: An assessment of the complete VR&E online form experience will be done to identify and prioritize form improvements and additional accessibility work.

#### Go-to-market 
- We will be working closely with VBA and RES stakeholders to ensure the payload for the form results in efficient processing

--- 

## Launch Planning
### Collaboration Cycle
- [Kickoff ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/74141)
- [CAIA Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/75169)

### Timeline 
- Collab cycle kick off: 1/22/2024
- CAIA kick off: 2/14/2024
- Design Intent: 2/5/2024
- Midpoint Review:
- Staging Review:

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*: March 2024
- *Actual Launch Date*: TBD

---
   
## Screenshots

### Before
- [Chatper 31 VR&E Form Flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1684161597392/5c1f8869cf5d03b792c8b82cf19b39dc26c486c2?sender=u934f98f179a86c76e6ee9592)

### After
- 

---

#### Communications
- Team Name: Benefits Non-Disability Experience Team (Team Umbrella)
- GitHub Label(s): Umbrella, Ch31
- Slack channel: benefits-non-disability
- Product POCs: Laura Steele (product manager), Emily Theis (OCTO Lead)

#### Stakeholders
- Office/Department:
   - VBA (Donna Robinson)
   - RES Team (Hope Lam)

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
