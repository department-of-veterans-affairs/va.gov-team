# Higher Level Review - Aug 2024 Updates

#### Overview

<details>
 
 *There is roughly a 1:many relationship between products and initiatives, or our attempts to improve a product/achieve Veteran outcomes. The same goes for product outlines and initiative briefs. This template can be used as product documentation for the Collaboration Cycle, especially when iterating an existing product. In addition, the Brief is an important communication tool within a team and between the team and Crew Chief/PO/other teams.* 
 
</details>

<details>
 <Summary>Examples:</Summary>
 
 - *Product: On-site Search* 
   - *Initiatives: Type-ahead, [Search Landing Page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/search-landing/initiative-brief.md), [Surfacing Other Search Tools](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/surfacing%20other%20search%20tools/initiative-%20brief.md)*
 - *Product: VA.gov Profile*
   - *Initiatives: Combine Account & Profile, Direct Deposit for Disability, Candidate Address Validation, Direct Deposit for Education, Notification Preferences*
 - *Product: Disability Claims*
   - *Initiatives: Original Claims, Benefits Delivery at Discharge (BDD)*
 
 </details>
 
 > 💡 Helpful guidance/tips
 
---

## Outcome Summary
> *Brief statement describing opportunity you're pursuing e.g. "Increase Use of Search Tools on VA.gov." Include measurable outcome (i.e. metric) you're trying to affect.*
* .

**Related/Associated product(s)**
- Product | Link to product outline 

## Problem
> *Describe the challenge / pain point you seek to address.:* 
* What is the problem and who is affected? And, what evidence do we have of the problem?
* Why do you think the problem is occurring? Other reasons why this might be occurring?
* How does this initiative help further OCTO-DE's mission and goals?

<!--
## Desired User Outcomes
- *Why would a user want to use this?*
- *With this problem solved, what should users be able to do/achieve that they couldn't before?*

## Undesired User Outcomes
## Desired Business Outcomes

- *Why would your business want this to exist?*
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*

## Undesired Business Outcomes
-->

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - .
- **Usability Risks** (can people figure out how to use it):
  - .
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Examples: 
    - VA stakeholder testing, marketing, compliance requirements 

### What're you building
> *What's in scope for you to build with this initiative? Describe key features/flows. 
> *What have you explicitly decided to **not** include and why?*
> *How does this solution address your Assumptions & Risks?

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

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
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before

### After

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 
- GitHub Label(s): 
- Slack channel: 
- Product POCs:

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department:
- Contact(s): 
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)

<details><summary>HLR Form Launch 2021</summary>
  
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
