# Initiative Brief: 686c/674 Form Updates

## Outcome Summary
Veterans submitting online 21-686c and 21-674 claims can trust that their submissions include all the required information to ensure efficient processing. Veterans experience a online form that is accessible and easy to use. [Project milestone](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1292).

**Related/Associated product(s)**
- [686/674 Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/21-686c-product-outline.md)

## Problem
- Veterans are submitting online 686/674 claims that generate outdated pdf claim forms, are missing information, and/or contain information that is no longer required. Downstream systems (RBPS) need to offramp these claims for manual processing, which delays the Veteran's benefits.
- The current online form uses depreceitated design system elements (v1), which lowers the forms' usability.

## Desired User Outcomes

- The 686 and 674 online form flow generates and submits the most recent version of the claim pdf to increase the liklihood of automated processing by RBPS.
- The 686 and 674 online form flow collects all required information from the Veteran to ensure successful claim processing. 
- Veterans spend less time filling out the 674 form flow because depreciated fields have been removed.
- Veterans encounter fewer critical accessibility issues with completing the online 686/674 form.

## Undesired User Outcomes
- 686 and 674 online claims still encounter processing delays
- Veterans find the form experience confusing, frustrating, or too cumbersome

## Desired Business Outcomes
- 686 and 674 online form submissions no longer need to be offramped for manual processing -- they can be automatically processed by RBPS.

## Undesired Business Outcomes
- 686 and 674 online form submissions generate claim errors that prevent automated processing 

## Core Bet

By modernizing the 686c/674 online forms to match current business rules and streamline inputs we believe we will reduce downstream errors and manual interventions while improving Veteran trust in the digital experience.

---
## Measuring Success

| KPI                                                                                        | Why It Matters                                                         | Target                             | Indicator Type |
| ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- | ---------------------------------- | -------------- |
| Form start-to-submit rate                                                                  | Signals usability and reduction in drop-off due to improved form logic | ≥?%                               | Leading        |
| Average time to complete form                                                              | Reflects reduced burden from deprecated fields and improved UI         | 10% decrease from baseline         | Leading        |
| % of staging submissions that generate valid PDFs without errors                           | Ensures backend PDF system is working as expected pre-launch           | ≥95%                               | Leading        |
| % of staging submissions that include all required RBPS fields                             | Checks if structured data is complete before production                | ≥90%                               | Leading        |
| % of production submissions that autoestablish a claim in VBMS without manual intervention | Signals backend and payload integrity; reduces downstream work         | ≥?%                               | Leading        |
| % of dependency claims requiring no development letters                                    | Validates completeness and clarity of front-end form design            | Increase over baseline (e.g. +15%) | Lagging        |
| % of claims that are successfully processed without rerouting or fallback                  | Measures backend integrity and successful intake into VA systems       | ≥90%                               | Lagging        |
| Mean time to resolution for claims processing issues post-launch                           | Measures downstream impact of form quality                             | Trend downward from baseline       | Lagging        |



---

## Discovery
### Assumptions/Risks
- Sending the correct form pdf form version to RBPS for processing will rememdiate the proccesing errors we've observed.
- Removing depreciated fields from the online form flows will streamline the experience for Veterans
- Remediating critical accessibility issues will improve Veterans' experience with the form flows
- Addressing the critical accessibilty issues and removing depreciated form fields will not address existing problems with the form flow
- Current [limits on the findability](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717521751866/127cbff63df95bedf011a5463797989197bc069d) of the form on VA.gov may limit Veterans' ability to find the form

### What're you building
- Update the 686 online form flow to include new fields and remove old fields
- Update the 674 online form flow to include new fields and remove old fields
- Update the pdf version both the 686 and 674 online form flows generate
- Remediate any critical accessibilty issues
- Update design system components from v1 to v3
- Out of scope: Complete redesign of form experience.
- Future: An assessment of the complete 686/674 online form experience will be done to identify and prioritize form improvements and additional accessibility work.

#### Go-to-market 
- We will be working closely with VBA and RBPS stakeholders to ensure the payload for the 686 and 674 forms results in efficient processing

--- 

## Launch Planning
### Collaboration Cycle
- [Kickoff ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/74059)
- [CAIA Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/75068)

### Timeline 
- Collab cycle kick off: January 19, 2024
- CAIA kick off:
- Design Intent: January 30, 2024
- Midpoint Review: January 17, 2025
- Staging Review: February 2025

* [Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*: February 2025
- *Actual Launch Date*: TBD

---
   
## Screenshots

### Before
- [686c/674 form flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1687976281975/2a9c6ca9ea6d955afa7977c777bbb72b15280903?sender=u934f98f179a86c76e6ee9592)

### After
- [686c/674 wireframes](https://www.figma.com/file/7W55oNwdVXvXOTI9SaFzQ7/686c-Add-or-Remove-Dependents?type=design&node-id=8-9&mode=design&t=kcdjZspxOR8ocdvT-0)

---

#### Communications
- Team Name: Benefits Dependent Experience Team
- GitHub Label(s): dependents-benefits
- Slack channel: benefits-dependents-management
- Product POCs: Laura Steele (product manager), Sanja Bajovic (OCTO Product Owner)

#### Stakeholders
- Office/Department:
   - OCTO: Sanja Bajovic (PO and Tech Lead), Dene Gabaldon (Design Lead)
   - VBA: Kevin Schneider (OBA), David Reis (OBA), Kayce White (Comp Service)
   - RBPS: Team: Baha Khaled
   - Privacy Officer: Lakisha Wright (lakisha.wright@va.gov)

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
