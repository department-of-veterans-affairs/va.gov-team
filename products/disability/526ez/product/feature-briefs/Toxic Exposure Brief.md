# Toxic Exposure Brief

## Purpose

The purpose of this document is to describe and align development teams and stakeholders on what will be delivered, how, and when. It is a living document which serves as the source of truth and a communication tool for keeping stakeholders informed about the progress.

## Background

To make it easy for Veterans to file disability compensation claims resulting from the PACT Act via va.gov, we are adding a toxic exposure (TE) section to the 21-526ez Veterans Disability Compensation and Related Compensation Benefits form on VA.gov. This change brings the digital form at VA.gov into parity with the 526ez paper form on these exposure questions, and will enable Veterans to specify aspects of their service history that might qualify them for disability benefits related to toxic exposure.

## Problem or Opportunity

Today, while Veterans can file disability compensation for conditions believed to be caused by TE on the paper version of the 21-526ez, they’re not able to file a TE claim at va.gov. This creates an unnecessary burden for the Veteran, who may have mental, physical, or other environmental challenges or disabilities that prevent or otherwise make it difficult for them to file a claim using the paper version of the 526 form.

## Proposed Solution

See [TE Figma Files](https://www.figma.com/design/dBKlB23Hs2oa53euXcXmmK/526-%2F-Toxic-Exposure-%2F-Paper-Sync?node-id=34-73279&p=f&t=urnN1yIMbK2E48qj-0)

## In Scope

For more information on Scope and Rationale, see this document: [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/toxic-exposure.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/toxic-exposure.md)

## Out of Scope

For more information on Scope and Rationale, see this document: [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/toxic-exposure.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/toxic-exposure.md)

## Success

Desired User Outcomes:

- Veterans will be able to complete the paper form equivalent of Section IV; questions 15a-15e  
- 15a: "Are you claiming any conditions related to toxic exposures?  
- 15b: "Did you serve in any of the following gulf war hazard locations?"  
- 15c: "Did you serve in any of the following Herbicide locations?"  
- 15d: "Have you been exposed to any of the following?" and;  
- 15e: "If you were exposed multiple times, please provide all additional dates and locations of potential exposure."

Undesired User Outcomes:

- Filing a disability compensation claim with TE-related service-connected conditions is not possible due to circumstances outside of the Veteran's control.  
- Filing a disability compensation claim with TE-related service-conencted conditions is more time consuming and more difficult for the Veteran.

---

Desired Business Outcomes:

- Bring the online 526 form into compliance by being up to date with the 2022 paper form  
- Mantain or reduce abandonment rates  
- Successfully migrate 526 submission infrastructure off EVSS  
- Reduce or maintain existing submission errors  
- Maintain % of submissions that use normal path  
- Maintain or reduce uses of backup and failsafe path

Undesired Business Outcomes:

- The online 526 form is more error prone than it was previously  
- Performance is worse than it was previously  
- Veterans express that the UX is worse than it was before

## Risks & Challenges

- **Value Risks**  (will people use it):  
  - We believe Veterans find value in being able to file disability claims online, especially as their condition relates to the PACT Act. From January to June 2024 40% of traffic came from a PACT Act campaign (ar\_pact\_fy23)  
- **Usability Risks**  (can people figure out how to use it):  
  - We believe that by leveraging UX research, design, VA.gov design system standards, predefined UI components, and governance checkpoints such as CAIA, and Collab Cycle that the solution is usable.  
- **\[Technical\] Feasibility Risks**  (can we build it with available tech/data):  
  - The core functionality is similar to how the 21-526ez digital form is already built today  
  - This solution will also be built natively using the Lighthouse API for more performant and future-proof functionality  
  - Feature flags enable a staged rollout to mitigate any potential negative impacts to Veterans and VA.  
- **Organizational Viability Risks/Constraints**  (will there be a positive organizational impact): Yes. We believe there will be a positive organizational impact. In addition to bringing the digital 526 form into closer compliance with the paper version of the form, this feature also fulfills the intent of the PACT Act while improving access.

## Plan

[Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/benefits-portfolio/disability-experience/team-docs/Release%20Plans/Toxic%20Exposure%20Release%20Plan.md)

## Guiding Principles

What is guiding us to the best outcome for Veterans?  
