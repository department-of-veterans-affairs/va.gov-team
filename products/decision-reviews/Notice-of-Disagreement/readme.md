# Notice of Disagreement - Appeal to the Board

## Communications
- GitHub Label: [NOD](https://github.com/department-of-veterans-affairs/va.gov-team/labels/???)
- Slack channel: n/a ([#vsa-benefits-memorials](https://dsva.slack.com/channels/vsa-benefits-memorials))
- Product POCs: Matt Self and Veronica Henry
- va.gov link: https://www.va.gov/decision-reviews/board-appeal/
- Phyical form: https://www.va.gov/vaforms/va/pdf/VA10182.pdf
- Stakeholders: The Board - will fill in from NOD info

## The Problem
Veterans are still working with a paper form system for filing a paper form.  There is a three step process for different types of board appeals
Currently VA.gov only supports Higher Level Review, which does not allow for submission of any new evidence. This does not exist on eBenefits either, so this digitization is the first step in bringing the review process to veterans using VA.gov.  Although Supplemental Claims is "next" in terms of typical route for a veteran, a business decision has been made to work with Lighthouse and OAR on NOD next.  

We believe that bringing this to VA.gov will greatly reduce the time-to-a-decision for veterans.  This will be talked about further below.

## Devlopment Plan
Pulling in some details from Lighthouse.
![Lighthouse Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Notice-of-Disagreement/NOD_plan_Lighthouse_Dec1.png)

### VA.gov Implementation

#### Phase 1 (True MVP) Implementation Elements (Q1)
1. Research and Design
We will not be performing as much initial research on usability for the NOD form.  We have a lot of lessons learned from HLR and we also have all of the research conducted by Lighthouse.  We believe that we can immediately get started on initial designs (even working mockups).
2. Back-end Development
This is highly dependant on Lighthouse and their final API delivery, however a lesson learned from the HLR work is that we need to spend some time designing the API together.  We had some assumptions that were not clearly realized between the teams and we would like to avoid that.  Since this phase only has a contestable issue and submission endpoint similar to HLR, we should be able to leverage a lot of the work we have done with Lighthouse before.
3. Front-end Development 
Assuming we have a similar structure to HLR, the design should be completed relatively early in Q1 allowing the front-end developers time to complete the implementation.
4. Roll-out Strategy
Phased roll-out as usual, however we should be able to start NOD rollout 2 months after phase 1 kickoff.  Detailed release plan (highly based off of HLR) will be provided in the beginning of Q1.  This includes UAT testing. 

#### Phase 2 (MVP+) Implementation Elements (Q2)
1. Research and Design
In this phase, our research team will be doing usability and UAT the phase 1 MVP delivery.  Additionally, they will be working with the NOD researcher on the next phase design.
2. Back-end Development
3. Front-end Development 
4. Roll-out Strategy

#### Phase 3 (Full NOD) Implementation Elements (Q3)
1. Research and Design
2. Back-end Development
3. Front-end Development 
4. Roll-out Strategy


BELOW THIS IS STILL HLR STUFF - WORKING ON THE OUTLINE


![Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/Appeals_Process_Higher_Level_Review_Flowchart-1.png)

### Program Requirements
If you disagree with VA’s decision, you can request to have a senior reviewer take a new look at your case. The reviewer will determine whether the decision can be changed based on a difference of opinion or an error.

1. Can I request a Notice of Disagreement?
  - You can request a Notice of Disagreement of an initial claim, Higher Level Review, legacy appeal [Luke check this 100%], or a Supplemental Claim decision. 
  - This option isn’t available after a previous Notice of Disagreement or Board Appeal on the same claim. It’s also not available if you have a contested claim (this is rare).
2. Note:
  - You can’t submit any evidence.
  - You and/or your representative can speak with the reviewer on the phone. You can tell them why you think the decision should be changed and identify errors. 

### History
Currently you can only submit through paper form by mail, in person, or fax.

#### Apply
Fill out the Decision Review Request: Notice of Disagreement (VA Form 20-0996). 
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

- Intro page: Increase visibility of, and add info about New Evidence and Opt out process. Move info about New Evidence up to the first paragraph. Add info box or F.A.Q. (e.g. Why should I opt out? What are the implications?) for the Opt out process and the rules for New Evidence in the NOD process.

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
- Number of NOD submissions (input KPI)
- Time to NOD decision (input KPI)
- Is there a higher ratio of accepted NOD claims than before (input KPI for part of the ratio)
- % of "rejected" NOD claims (input KPI)

### Baseline KPIs
- NOD Submissions: Total NOD EPs established FY 2020 through July. Average: 7k a month
- NOD ADC: Monthly and FYTD average days pending, through July. 
- NOD Grant Rates: Grant rates, from PA&I’s monthly AMA Reports website. Average 17.1%

Note: I thought average grant rate for NOD was much higher - where did we hear this?

Details Here: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/metrics/NOD_FY2020.xlsx
--- 

## Go-to-market Strategy
1. Banner on eBenefits
2. Updated public websites

## Launch Date
- *Target Launch Date*
- *Actual Launch Date*
- *What date will you evaluate impact after launch?*


---
## Results and Recommendations
### Results
- TBD after launch

### Recommendations
- TBD after launch

# Implementation Info

## Status
1. Lighthouse has finished their research and is ready to start initial implementation

## Technical Decisions/Discovery

## Product Decisions
Rewriting this as I lost the tab with the edits before I could save post meeting.

#### Meeting Minutes 11/13:
Goal of meeting was to determine the logic for filtering contestable issues. A contestable issue and NOD eligibilty are very different.  There were some previous assumptions about who owns the filtering of the contestable issues into eligible NOD issues.

During UAT testing, we ran into a major issue where the contestable issues list contained essentially every denied decision.  Since NOD has relatively strict timelines (a year after the decision date) and only a handful of exceptions, we realized a major change to the filtering/business logic needs to occur. It was decided that MVP would filter strictly on decision date and that we would add some content updates to explain (further) why an issue may not be showing up.  The exceptions are going to require a paper form and possible making a call to a number that can help them etc.

1. Update content with further details on why you do not see an issue you thought was contestable (like Blue Water items) and what to do in case you do not see it.
2. Update filter to only show < year old decisions.

## Team
- VA Digital Strategist(s): Matt Self
- Product Manager: Veronica Henry 
- Research Lead: Christian Valla
- Design Lead: Kevin Stachura
- Engineers: Anna Carey, Robin Garrison, Ed Mangimelli

## Incident Response
- Primary POCs (Veronica Henry, Matt Self, John Hashimoto)
- Engineering POCs (Ed Mangimelli, Robin Garrison)
- Dashboards:
  - Production: http://grafana.vfs.va.gov/d/qCRjZjDMk/NOD-higher-level-review?orgId=1&var-data_source=Prometheus%20(Production)
  - Staging: http://grafana.vfs.va.gov/d/qCRjZjDMk/NOD-higher-level-review?orgId=1&var-data_source=Prometheus%20(Staging)
   
## Screenshots

### Before
N/A

### After

