# Toxic Exposure Product Outline

## Outcome Summary
To make it easy for Veterans to file disability compensation claims resulting from the PACT Act via va.gov, we are adding a toxic exposure (TE) section to the 21-526ez Veterans Disability Compensation and Related Compensation Benefits form on VA.gov. This change brings the digital form at VA.gov into parity with the 526ez paper form on these exposure questions, and will enable Veterans to specify aspects of their service history that might qualify them for disability benefits related to toxic exposure.

**Related/Associated product(s)**
- 21-526ez | [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/21-526ez.md)

## Problem
Today, while Veterans can file disability compensation for conditions believed to be caused by TE on the paper version of the 21-526ez, they’re not able to file a TE claim at va.gov. This creates an unnecessary burden for the Veteran, who may have mental, physical, or other environmental challenges or disabilities that prevent or otherwise make it difficult for them to file a claim using the paper version of the 526 form.

## Desired User Outcomes
- Veterans will be able to complete the paper form equivalent of Section IV; questions 15a-15e 
- 15a: "Are you claiming any conditions related to toxic exposures?
- 15b: "Did you serve in any of the following gulf war hazard locations?"
- 15c: "Did you serve in any of the following Herbicide locations?"
- 15d: "Have you been exposed to any of the following?" and;
- 15e: "If you were exposed multiple times, please provide all additional dates and locations of potential exposure."

## Undesired User Outcomes
- Filing a disability compensation claim with TE-related service-conencted conditions is not possible due to circumstances outside of the Veterna's control.
- Filing a disability compensation claim with TE-related service-conencted conditions is more time consuming and more difficult for the Veteran.

## Desired Business Outcomes
- Bring the online 526 form into compliance by being up to date with the 2022 paper form
- Mantain or reduce abandonment rates
- Successfully migrate 526 submission infrastructure off EVSS
- Reduce or maintain existing submission errors
- Maintain % of submissions that use normal path
- Maintain or reduce uses of backup and failsafe path

## Undesired Business Outcomes
- The online 526 form is more error prone than it was previously
- Performance is worse than it was previously
- Veterans express that the UX is worse than it was before

## Measuring Success
We will be measuring the success of the release and delivering a weekly report on Fridays: [UX Monitoring Toxic Exposure Release ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-08-Toxic-Exposure/TE-UX-Monitoring.md)
### Key Performance Indicators (KPIs)

| Product KPI                                                 | Baseline  | Target                                        | Data Source                                                  |
|-------------------------------------------------------------|-----------|-----------------------------------------------|--------------------------------------------------------------|
| Bring online 526 form up to date with 2022 paper form       | 40 months | Within 6 mo.                                  | [VA.gov OMB expiry date](https://www.va.gov/disability/file-disability-claim-form-21-526ez/introduction)                                                             |
| Maintain or reduce abandonment rates                        | 24%       | ≤ 24%                                         | [Domo](https://va-gov.domo.com/page/447193050/kpis/details/1994399128?pfilters=%5B%7B%22column%22:%22form_name%22,%22operand%22:%22IN%22,%22values%22:%5B%22Form%2021-526EZ%20-%20Original%20Disability%20Claim%22%5D,%22dataType%22:%22string%22,%22affectedCardUrns%22:%5B%5D,%22label%22:%22form_name%22,%22key%22:%22form_name:%22,%22dataSourceId%22:%22e83cb7cf-0e3d-4699-89b3-761589681307%22%7D%5D)<br>[526 Toxic Exposure GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/BtqeUqzLR3y7cFsUETgZwQ) |
| Successfully migrate 526 submission infrastructure off EVSS | No       | Yes                                      | [LH Submit success](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/yux-sxc-qai) |
| Reduce or maintain existing submission errors               | 0.62%     | ≤ 0.62%                                       | [v0 Submit errors](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/y2b-q9c-7pb)<br>[LH Submit errors](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/94n-6kh-g5e) |
| Maintain % of submissions that use normal path              | 99.38%    | 99.38% (inferred from % of submission errors) | [v0 Submit errors](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/y2b-q9c-7pb)<br>[LH Submit errors](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/94n-6kh-g5e) |
| Maintain or reduce uses of backup and failsafe path         |           |                                               | Pending Backup Path monitoring                               |
| Maintain or reduce form exits                                                            |           |                                               |                                                              |
| Measure Toxic Exposure opt-in rate %                                                            |           |                                               |[526 Toxic Exposure GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/BtqeUqzLR3y7cFsUETgZwQ)                                                              |

---
## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - We believe Veterans find value in being able to file disability claims online, especially as their condition relates to the PACT Act. From January to June 2024 40% of traffic came from a PACT Act campaign (ar_pact_fy23) 
- **Usability Risks** (can people figure out how to use it):
  - We believe that by leveraging UX research, design, VA.gov design system standards, predefined UI components, and governance checkpoints such as CAIA, and Collab Cycle that the solution is usable.
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
    - The core functionality is similar to how the 21-526ez digital form is already built today
    - This solution will also be built natively using the Lighthouse API for more performant and future-proof functionality
    - Feature flags enable a staged rollout to mitigate any potential negative impacts to Veterans and VA.
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
 Yes. We believe there will be a posititve organizational impact. In addition to bringing the digital 526 form into closer compliance with the paper version of the form, this feature also fulfills the intent of the PACT Act while improving access.

### What're you building
There are two use cases that we are in scope for this release. Veterans who start a new 526 form online will be able claim service-connected conditions that they believe are related to toxic exposure. Veterans who begin a new form will be directed to the toxic exposure pages that are conditionally displayed based on their form responses. Veterans who are continuing a form they started previously (an In Progress Form or IPF) will also be able to claim service-connected conditions that they believe are related to toxic exposure. These Veterans will see an alert on the Review & Submit page alerting them about the new toxic exposure questions and will be provided with a link that navigates their browser to the toxic exposure pages in the 526 form. This solution will also cover other claim types such as Benefits Disability at Discharge (BDD), Fully Developed Claim (FDC), and accepts submissions where either the Veteran doesn't know or isn't sure about their dates of service.

#### Go-to-market 
Since the feature is part of the larger preexisting 526 form, communications will be more narrow in scope. The 526 Product Guide has been updated for the Contact Center to include the new Toxic Exposure pages. VBA will also help with comms to internal claims processors to make sure they're aware of the new form version.

---
## Launch Planning
[Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/disability-experience/team-docs/Release%20Plans/Toxic%20Exposure%20Release%20Plan.md)
#### Collaboration Cycle
[Collaboration Cycle Kickoff ticket](https://github.com/orgs/department-of-veterans-affairs/projects/1268/views/7?pane=issue&itemId=66471236)

#### Timeline 

|Phase|Date(s)|Status|
|-----|-----|-----|
|Development complete|Aug 2, 2024|In Progress|
|Submit for PSIRR|Aug 2, 2024|Not started|
|Submit Staging Review|Aug 5, 2024|Not started|
|Possible PACT-related surges|Aug 7 - Aug 14|Not started|
|Staging Review|Aug 8, 2024|Not started|
|Moderated production testing|Aug 9, 2024|Not started|
|Go/no go meeting|Aug 14, 2024|Not started|
|Canary 5% rollout|Aug 15, 2024|Not started|

#### Initiative Launch Dates
- *Target Launch Date*
  - August 15th
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before
<img src="https://github.com/user-attachments/assets/4d7ecfa6-e145-4ea0-a030-19e3061da90c" width="300"></img>

### After
<img src="https://github.com/user-attachments/assets/42e5520e-a21b-466b-808b-cf45e42fe1a8" width="300"></img> 
<img src="https://github.com/user-attachments/assets/469d086c-c8ea-4f8d-9c41-41cb391c1396" width="300"></img>

---

#### Communications
Announcements will be posted in benefits-disability Slack channel. Still understanding if other communications are needed.

<details>

- Team Name: DBEX Team 1, DBEX Team 2
- GitHub Label(s): #disability-experience
- Slack channel: benefits-disability
- Product POCs: Emily Theis (OCTO), Jared Pace (Team 1), Lisa Capaccioli (Team 2)

</details>

### Architectural Details
[Architecture diagram](https://lucid.app/lucidchart/645d8a16-22de-4971-9626-198da0483430/edit?invitationId=inv_f335ce12-6583-4396-8892-0c33e67c8b9e&page=S.QYMIEDG_Hk#)

### Incident Response
[Incident Response SOP](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/TREX/DEBUG/SOP-Toxic-Exposure-Lighthouse-Form526-Submission-Troubleshooting.md)

[Product Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/product/toxic-exposure-product-playbook.md)

[Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/mqg-msb-htb/benefits---dbex---evss-to-lh-submit?fromUser=false&view=spans&from_ts=1719957251673&to_ts=1722549251673&live=true)

- Team 1 Tech Lead, Aurora Hampton
- Team 1 Design Lead, Mike Eng
- Team 1 Product Manager, Jared Pace
- Team 1 Delivery Manager, Sarah Knopp
- Team 2 Tech Lead, Thomas Blackwell
- Team 2 Design Lead, Julie Pedtke
- Team 2 Product Manager, Lisa Capaccioli
- OCTO PO, Emily Theis
- OCTO Design and Research Lead, Shannon Ford
- OCTO Engineering Lead, Sam Wiley
- VBA Senior Automation Strategist, David Reis
- Lighthouse / Benefits Claims API Product Manager, Kayla Watanabe
- Lighthouse / Benefits Claims API Tech Lead, Alex Wilson

#### Stakeholders
*What offices/departments are critical to make this initiative successful?*
OCTO, VBA

<details>
  
- Office/Department:
- Contact(s): 
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
