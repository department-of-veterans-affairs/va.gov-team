# Higher-Level Review - Aug 2024 Updates

## Team Communications
- **Government lead**: Amy Lai
- **Slack channel**: [#benefits-decision-reviews](https://dsva.slack.com/archives/C5AGLBNRK)
- **Github labels**: team-DRAGONS, Decision-Reviews-Team

### Core Team  
  
|Name|Role|Email|
|----|----|-----|
|Amy Lai|Product Owner, Gov't Lead| amy.lai2@va.gov |
|Julie Strothman|Design Lead, VA| julie.strothman@va.gov|
|Cory Sohrakoff|Engineering Lead, VA| Cory.T.Sohrakoff@omb.eop.gov|
|Pam Macalintal|Delivery Manager|pam.macalintal@agile6.com|
|Christian Crumlish|Product Manager| ccrumlish@kindsys.us|
|Lauren Dawson| UX Researcher/Designer |lauren.dawson@agile6.com |
|Kyra Berman-Gestring| UX Researcher/Designer |kyra.berman-gestring@agile6.com |
|Tracy Tran| Accessibility Engineer | tracy.tran@agile6.com |
|Cindy Lackey | Content Designer/Strategist | cindy.lackey@coa.solutions |
|Grace Xu |Engineering Lead| gxu@kindsys.us|
|Jerry Sea |Full Stack Engineer| jsea@kindsys.us |
|Randi Mays | Full Stack Engineer | rmays@kindsys.us |

|Michael Hobson | Product Manager, Lighthouse | michael.hobson@adhocteam.us |

#### Overview

 - Product: Higher-Level Review
   - Initiatives: March 2024 OMB Updates
 
---

## Outcome Summary
> *Brief statement describing opportunity you're pursuing e.g. "Increase Use of Search Tools on VA.gov." Include measurable outcome (i.e. metric) you're trying to affect.*
* Need to update digital application to match the content updates to the latest paper form

**Related/Associated product(s)**
- Product | [Link to product outline ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/README.md#hlr-product-outline)

## Problem
> *Describe the challenge / pain point you seek to address.:* 
* Current application information is now out-of-date, and we're submitting a PDF that's will expire in March 2025

<!--
## Desired User Outcomes
- Users are able to request with the most up-to-date form online

## Undesired User Outcomes
- Users are unable to submit their form online

## Desired Business Outcomes
- It's part of OCTOs priorities to keep forms up-to-date, within one year of OMB form updates.

## Undesired Business Outcomes
-->

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)
- Maintained and/or decrease form error rates | Baseline | 0 | [Link](https://vagov.ddog-gov.com/dashboard/kiy-k3e-5ta/benefits---higher-level-reviews?fromUser=true&fullscreen_end_ts=1723039010131&fullscreen_paused=false&fullscreen_refresh_mode=sliding&fullscreen_section=overview&fullscreen_start_ts=1720360610131&fullscreen_widget=6057318125087330&refresh_mode=sliding&view=spans&from_ts=1720359812406&to_ts=1723038212406&live=true) 
- Decrease failed claims | Baseline | 0 | [Link](https://vagov.ddog-gov.com/dashboard/kiy-k3e-5ta/benefits---higher-level-reviews?fromUser=true&fullscreen_end_ts=1723038990462&fullscreen_paused=false&fullscreen_refresh_mode=sliding&fullscreen_section=overview&fullscreen_start_ts=1722434190462&fullscreen_widget=7389534908363640&refresh_mode=sliding&view=spans&from_ts=1722434181808&to_ts=1723038981808&live=true)

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - No risk. It's an already existing product.
- **Usability Risks** (can people figure out how to use it):
  - Low to no risk. Form has already been in use. We separated a single question into two screens to simplify the content, so it should be easier.
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - No risk, data being passed is the same as before. Lighthouse will update it so the generated PDF is using the latest PDF.
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - It will match OMB paper form.

### What're you building
> *What's in scope for you to build with this initiative? Describe key features/flows. 
> *What have you explicitly decided to **not** include and why?*
> *How does this solution address your Assumptions & Risks?

We are updating the content for the HLR form to match the latest OMB updates. There's been an update to language to better represent contact methods, as well as, call time availabilities.
The scope of this update is still only to be available for disability compensation claims. It does not include the ability to submit a written statement.

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

None

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - Aug 19 2024
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

|         | Before | After |
| ------- | ------ | ----- |
| Intro | <img width="500" alt="before-intro" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/edf1fd70-6979-4157-b429-ab5c70749d63"> | <img width="500" alt="intro2" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/a8dc675b-25fd-450e-88ab-2b4dda3001fa"> |
| Subtask start | <img width="500" alt="before-subtask-start" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/5d99e6b3-d8ae-489f-8f9a-cd9f022a47d0"> | <img width="500" alt="subtask-start" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/2374c5c5-0439-4b9f-856a-0f331788fc24"> |
| Subtask other | <img width="500" alt="before-subtask-other" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/0211e770-4a72-4f0a-86ae-8a8951f4d4af"> | <img width="500" alt="subtask-other" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/2383842e-537d-4d79-a6e4-9829e0e56dfd"> |
| Homeless | <img width="500" alt="before-homeless" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/a4026723-b0a8-469d-b4d6-0fca8cc73a7f"> | <img width="500" alt="homeless" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/8ebf6d0e-0949-498a-85d8-90b4078fba74"> |
| Contestable issues | <img width="589" alt="before-contestable-issues" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/7276ba01-57aa-49cc-8a54-f91f398dc257"> | <img width="574" alt="contestable-issues" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/f990272d-362f-45b9-8a5b-3e24dc168101"> |
| Area of disagreement | <img width="500" alt="before-disagreement" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/cc9148fb-9345-4ae2-b3e7-c31a17bb84b3"> | <img width="500" alt="disagreement" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/acb3b4b7-8d53-4f99-b5df-a3258d3f84e6"> |
| Opt-in | <img width="500" alt="before-opt-in" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/d2563ec1-8b5e-4406-b4e8-b77d107b8970"> | <img width="500" alt="opt-in" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/262332d7-d222-4457-90cd-58a989983c6f"> |
| Informal conference | <img width="500" alt="informal-conf-current" src="https://github.com/user-attachments/assets/17b3a096-682c-41d3-a22b-a8085e40aaf9"> | <img width="500" alt="informal-conf-new" src="https://github.com/user-attachments/assets/73c1b2ac-6fb5-482b-9078-7b3201cff3bc"> |
| Informal conference choice (new page) | (none) | <img width="499" alt="choice-new" src="https://github.com/user-attachments/assets/4506c7c6-c719-40cd-8006-b8be1a57f974"> |
| Rep time choice | <img width="500" alt="time-rep-current" src="https://github.com/user-attachments/assets/e081bc2f-5bff-4ccb-8a5c-9a487e662b2f"> | <img width="500" alt="time-rep-new" src="https://github.com/user-attachments/assets/0bbedfd3-3a91-4f8a-b890-9fcdbf87571a"> |
| Vet time choice | <img width="500" alt="time-veteran-current" src="https://github.com/user-attachments/assets/ca57e8c6-bae9-423a-ac90-54cd29432f2a"> | <img width="500" alt="time-veteran-new" src="https://github.com/user-attachments/assets/efc02c31-bcd4-4ba3-a69a-5a112e50ff39"> |
| Review & submit | <img width="500" alt="before-review-and-submit" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/e1cc826b-5236-4dc4-95e0-8bbf7642f665"> | <img width="500" alt="review-and-submit" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/a8037269-5cba-4ab9-9027-4bf456948eb8"> |

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: Benefits Decision Review
- GitHub Label(s): Decision-Reviews-Team
- Slack channel: [#benefits-decision-reviews](https://dsva.slack.com/archives/C5AGLBNRK)
- Product POCs: Amy Lai, Julie Strothman, Eileen Chi

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: VBA
- Contact(s): Shireen Lackey, Jane Chi
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)

<details><summary>HLR Form Launch 2021</summary>

## HLR Product Outline
  
## Communications
- GitHub Label: [hlr](https://github.com/department-of-veterans-affairs/va.gov-team/labels/???)
- Slack channel: n/a ([#benefits-decision-reviews](https://dsva.slack.com/archives/C5AGLBNRK))
- Product POCs: Amy Lai, Julie Strothman, Cory Sohrakoff
- va.gov link: https://www.va.gov/decision-reviews/higher-level-review/
- Physical form: https://www.vba.va.gov/pubs/forms/VBA-20-0996-ARE.pdf
- Stakeholders: AMO (Jane Chi jane.chi1@va.gov, Lauren Sylvia Lauren.Sylvia@va.gov), Lighthouse (Kelly Lein Kelly.Lein@va.gov, Premal Shaw Premal.Shah@va.gov) and VBA (Paul Shute Paul.Shute@va.gov)

## The Problem
Currently VA.gov does not support any appeals or decision review paths. The existing path is only through the paper form.  This does not exist on eBenefits either, so this digitization is the first step in bringing the review process to veterans using VA.gov.  It is also the first step before supplemental claims and Notice of Disagreement.  We believe that bringing this to VA.gov will greatly reduce the time-to-a-decision for veterans.  This will be talked about further below.

![Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/Appeals_Process_Higher_Level_Review_Flowchart-1.png)

### Program Requirements
If you disagree with VA’s decision, you can request to have a senior reviewer take a new look at your case. The reviewer will determine whether the decision can be changed based on a difference of opinion or an error.

1. Can I request a Higher-Level Review?
  - You can request a Higher-Level Review of an initial claim or Supplemental Claim decision. You have one year from the date on your decision letter to request a Higher-Level Review. 
  - This option isn’t available after a previous Higher-Level Review or Board Appeal on the same claim. It’s also not available if you have a contested claim (this is rare).
2. Note:
  - You can’t submit any evidence.
  - You and/or your representative can speak with the reviewer on the phone. You can tell them why you think the decision should be changed and identify errors. 

### History
Currently you can only submit through paper form by mail, in person, or fax.

#### Apply
Fill out the Decision Review Request: Higher-Level Review (VA Form 20-0996). 
Download VA Form 20-0996 (PDF)

Submit your application by mail, in person, or by fax
By mail

Send the completed form to the benefit office that matches the benefit type you selected on the form.

Compensation

> Department of Veterans Affairs

> Claims Intake Center

> PO Box 4444

> Janesville, WI 53547-4444

In person

Bring your completed form to a regional benefit office. 
Find a regional benefit office near you

By fax 

Fax your completed form and any supporting documents to 844-531-7818. 

You can also ask a regional benefit office for a copy of this form to fill out. Or you can call the VA toll-free hotline at 800-827-1000, Monday through Friday, 8:00 a.m. to 9:00 p.m. ET, to request a form.

### User Goals
1. Apply on VA.gov without leaving my home or mailing anything in.
2. Quicker decision time.
3. Clear process for getting a decision

### Business Goals
1. Reduce the number of errors in submissions.
2. Reduce the number of paper forms.
3. Take advantage of the Claims and Appeals status tool.

## Assumptions
1. Totally new flow but based on existing design and general flow of VA forms.
2. Similar look and feel to 526.
3. AMO will drive information such as required fields, etc.
4. LightHouse owns the PDF generation for the submission.
5. We will not be doing automated submission, the PDF will be the primary submission vehicle.
6. Integration with Claims and Appeals Status Tool will happen post-MVP.

## Questions
See research:
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews/higher-level-review/research

## Requirements
#### In Scope 
The following pages are being built out.  This is pulled from the research info.

- Intro page: Increase visibility of, and add info about New Evidence and Opt out process. Move info about New Evidence up to the first paragraph. Add info box or F.A.Q. (e.g. Why should I opt out? What are the implications?) for the Opt out process and the rules for New Evidence in the HLR process.

- Opt out page: Move to the Contested issues page to provide contextual info. (This idea came from Riley O.). Users needs to know what specific claim they opt out from. (Or at the very least add info: Opt out is for the issues / claims that you will choose when going through this flow).

- Add notes page: Users are confused about the purpose of this page, when they understand (with our guidance) that it’s not for new evidence. Consider removing from flow (Legal requirement?). If this step is needed copy needs to be reworked for clarity.

- Same office page: Remove preselection and move contextual info to the top of page. Users since are confused about the purpose of this step. Consider removing from the flow (Legal requirement?). If this step is needed, copy needs to be reworked for clarity.

- Informal Conference page: clarify through copy and potentially new design elements that this step is only to schedule a call to book a conference. Add an option to contact both a representative and themselves. Allow users to add an alternate phone number. Remove "Senior Reviewer" in contextual info box.

- Contact Info page: When user edits Contact Info, allow them do auto update on all VA systems, at least their Profile Page.

- Contested Issues page: “Don’t see issue” link: remove “Pension”.

- Review application page and Submit application page: add button for print and save. Consider sending a confirmation email for the Submit page.

#### Out of Scope
- Automated submission
- PDF generation (LightHouse is working it)

## Value Propositions
Service members being able to apply for their first VA benefits on VA.gov versus eBenefits will improve their overall experience and likelyhood of filing for these benefits.

## OKRs and KPIs
## KPIs
- Number of HLR submissions (input KPI)
- Time to HLR decision (input KPI)
- Is there a higher ratio of accepted HLR claims than before (input KPI for part of the ratio)
- % of "rejected" HLR claims (input KPI)

### Baseline KPIs
- HLR Submissions: Total HLR EPs established FY 2020 through July. Average: 7k a month
- HLR ADC: Monthly and FYTD average days pending, through July. 
- HLR Grant Rates: Grant rates, from PA&I’s monthly AMA Reports website. Average 17.1%

Note: I thought average grant rate for HLR was much higher - where did we hear this?

Details Here: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/metrics/HLR_FY2020.xlsx
--- 

## Go-to-market Strategy
1. Banner on eBenefits
2. Ads in Miltary Times Magazine
3. TAP

## Launch Date
- *Target Launch Date*
  - November for UAT
  - Early December for Launch
  - Updated to late January due to accessibilty and UAT testing
- *Actual Launch Date*
  - March 3, 2021
- *What date will you evaluate impact after launch?*
  - One month after launch (although we will be looking at data during)

---
## Results and Recommendations
### Results
- TBD after launch

### Recommendations
- TBD after launch

# Implementation Info

## Status
1. MVP design completed.
2. Front-end implementation complete.
3. Back-end schema changes to LH API complete (8/17)
4. Integration
</details>

<details><summary>HLR Form Refresh 8/2021</summary>
  
## HLR Form Refresh - August 2021
A new version of the form was released. All updates/tasks addressed in this ticket: https://github.com/department-of-veterans-affairs/va.gov-team/issues/28113 

## Technical Decisions/Discovery

## Product Decisions

#### Meeting Minutes 11/13:
Goal of meeting was to determine the logic for filtering contestable issues. A contestable issue and HLR eligibilty are very different.  There were some previous assumptions about who owns the filtering of the contestable issues into eligible HLR issues.

During UAT testing, we ran into a major issue where the contestable issues list contained essentially every denied decision.  Since HLR has relatively strict timelines (a year after the decision date) and only a handful of exceptions, we realized a major change to the filtering/business logic needs to occur. It was decided that MVP would filter strictly on decision date and that we would add some content updates to explain (further) why an issue may not be showing up.  The exceptions are going to require a paper form and possible making a call to a number that can help them etc.

1. Update content with further details on why you do not see an issue you thought was contestable (like Blue Water items) and what to do in case you do not see it.
2. Update filter to only show < year old decisions.

## Team

- VA Digital Strategist(s): Matt Self
- Product Manager: Ronnie Henry
- Research Lead: Christian Valla
- Design Lead: Kevin Stachura
- Engineers: Anna Carey, Robin Garrison, Asha Gross, Michel McDonald

## Incident Response
- Primary POCs (Ronnie Henry, Matt Self)
- Engineering POCs (Anna Carey, Robin Garrison)
- Lighthouse for Downstream API POCs (Kelly Lein, Pramal Shah)
- Dashboards:
  - Production: http://grafana.vfs.va.gov/d/qCRjZjDMk/hlr-higher-level-review?orgId=1&var-data_source=Prometheus%20(Production)
  - Staging: http://grafana.vfs.va.gov/d/qCRjZjDMk/hlr-higher-level-review?orgId=1&var-data_source=Prometheus%20(Staging)
   
## Screenshots

### Before
N/A

### After
</details>
