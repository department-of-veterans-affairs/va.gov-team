# Initiative Brief: 686c/674 Form Updates

## Outcome Summary
Veterans submitting online 21-686c and 21-674 claims can trust that their submissions include all the required information to ensure efficient processing.

**Related/Associated product(s)**
- [686/674 Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/21-686c-product-outline.md)

## Problem
- Veterans are submitting online 686/674 claims that generate outdated pdf claim forms, are missing information, and/or contain information that is no longer required. Downstream systems (RBPS) need to offramp these claims for manual processing, which delays the Veteran's benefits.

## Desired User Outcomes

- The 686 and 674 online form flow generates and submits the most recent version of the claim pdf to increase the liklihood of automated processing by RBPS.
- The 686 and 674 online form flow collects all required information from the Veteran to ensure successful claim processing. 
- Veterans spend less time filling out the 674 form flow because depreciated fields have been removed.
- Veterans encounter fewer critical accessibility issues with completing the online 686/674 form

## Undesired User Outcomes
- 686 and 674 online claims still encounter processing delays
- Veterans find the form experience confusing, frustrating, or too cumbersome

## Desired Business Outcomes
- 686 and 674 online form submissions no longer need to be offramped for manual processing -- they can be automatically processed by RBPS.

## Undesired Business Outcomes
- 686 and 674 online form submissions generate claim errors that prevent automated processing 

---
## Measuring Success

| KPI                       | Baseline Value | Target Value | Actual Value | Link to Data Source |
|---------------------------|----------------|--------------|--------------|---------------------|
| # of 686 claims offramped |                |              |              |                     |
| # of claim errors         |                |              |              |                     |

---

## Discovery
### Assumptions/Risks
- Sending the correct form pdf form version to RBPS for processing will rememdiate the proccesing errors we've observed.
- Removing depreciated fields from the online form flows will streamline the experience for Veterans
- Remediating critical accessibility issues will improve Veterans' experience with the form flows

- **Value Risks** (will people use it): 
  - 
- **Usability Risks** (can people figure out how to use it):
  - Addressing the critical accessibilty issues and removing depreciated form fields will not address existing problems with the form flow
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - 
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - 

### What're you building
- Update the 686 online form flow to include new fields and remove old fields
- Update the 674 online form flow to include new fields and remove old fields
- Update the pdf version both the 686 and 674 online form flows generate
- Remediate any critical accessibilty issues
- Out of scope: Remediation of non-critical accessibility issues. Descoping a complete accessibilty audit will ensure we can get critical form updates to Veterans in a timely manner.
- Future: An assessment of the complete 686/674 online form experience will be done to identify and prioritize form improvements and additional accessibility work.

#### Go-to-market 
- We will be working closely with VBA and RBPS stakeholders to ensure the payload for the 686 and 674 forms results in efficient processing

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- [Kickoff ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/74059)
- CAIA Ticket

### Timeline 
> Collab cycle kick off:
> CAIA kick off:
> Design Intent:
> Midpoint Review:
> Staging Review:

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*: March 2024
- *Actual Launch Date*: TBD

---
   
## Screenshots

### Before
- [686c/674 form flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1687976281975/2a9c6ca9ea6d955afa7977c777bbb72b15280903?sender=u934f98f179a86c76e6ee9592)

### After
- 

---

#### Communications
- Team Name: Benefits Dependent Experience Team (Team Tree)
- GitHub Label(s): Tree
- Slack channel: benefits-dependents-management
- Product POCs: Laura Steele (product manager), Emily Theis (OCTO Lead)

#### Stakeholders
- Office/Department:
   - VBA (Brandi Traylor)
   - RBPS Team (TBD)

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
