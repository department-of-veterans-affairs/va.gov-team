# Initiative Brief: 25-8832 Personalized Career Planning and Guidance (PCPG aka Chapter 36)

## Outcome Summary
Veterans submitting online form 25-8832 have a positive experience and can trust that their submissions include all the required information to ensure efficient processing.

**Related/Associated product(s)**
- [PCPG Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/education-career-counseling/README.md)

## Problem
- The current online 25-8832 form is using an outdated version of the paper form. It's missing new fields and generating an old version of the form pdf. It also contains some accessibility issues that need to be addressed. The form intake API also needs to be migrated to a new RES API.

## Desired User Outcomes

- The 25-8832 online form generates and submits the most recent version of the claim pdf to increase processing efficiency
- The 25-8832 online form collects all required information from the Veteran to ensure successful claim processing
- Veterans encounter fewer critical accessibility issues (level 0-2) with completing the online form

## Undesired User Outcomes
- The online form has errors or issues that lead to processing delays
- Veterans find the form experience confusing, frustrating, or too cumbersome

## Desired Business Outcomes
- Downstream systems successfully receive and process the form payload

## Undesired Business Outcomes
- Online form submissions generate claim errors that delay processing 

---
## Measuring Success

| KPI                       | Baseline Value | Target Value | Actual Value | Link to Data Source |
|---------------------------|----------------|--------------|--------------|---------------------|
| % fields received by API  |                |              |              |                     |
| # of claim errors         |                |              |              |                     |

---

## Discovery
### Assumptions/Risks
- Sending an updated payload to the Benefits Intake API will ensure efficient processing
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
- Remove form wizard component
- Address outstanding accessibility issues identified in the last audit
- Point the form payload to the Benefits Intake API
- Update the form payload to send missing and new fields
- Out of scope: 
- Future: An assessment of the complete VR&E online form experience will be done to identify and prioritize form improvements and additional accessibility work.

#### Go-to-market 
- We will be working closely with VBA stakeholders to ensure the payload for the form results in efficient processing

--- 

## Launch Planning
### Collaboration Cycle
- [Collab Cycle ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76364)
- [CAIA Ticket](TBD) 

### Timeline 
- Collab cycle kick off: 2/15/2024
- CAIA kick off: 
- Design Intent: 2/20/2024
- Midpoint Review:
- Staging Review:

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*: May 2024
- *Actual Launch Date*: TBD

---
   
## Screenshots

### Before
- [Chatper 36 PCPG Form Flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1691434304975/3f0c405c820c184d21393b3bbd76324a5ee7c677?sender=u0e8ac1d6d7681bb7e1b80558)

### After
- 

---

#### Communications
- Team Name: Benefits Non-Disability Experience Team (Team Umbrella)
- GitHub Label(s): Umbrella, Ch36
- Slack channel: benefits-non-disability
- Product POCs: Laura Steele (product manager), Emily Theis (OCTO Lead)

#### Stakeholders
- Office/Department:
   - VBA (Terry Brown)

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
