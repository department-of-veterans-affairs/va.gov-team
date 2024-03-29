# Dowloadable Copy of Submission Initiative Brief

---

## Outcome Summary
> *Brief statement describing opportunity you're pursuing e.g. "Increase Use of Search Tools on VA.gov." Include measurable outcome (i.e. metric) you're trying to affect.*
* Today, when Veterans file an appeal on va.gov, there is no way for them to maintain a record of their submission. To increase Veteran trust of the reliability of our products, we want to provide the ability to retain a copy of a submitted appeal, so Veterans can store it in their personal records.

**Related/Associated product(s)**
- Request a Board Appeal VA Form 10182 | [Link to product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews/Notice-of-Disagreement) 

## Problem
> *Describe the challenge / pain point you seek to address.:* 
* Usability and design, experimentation, testing conducted with Veterans indicates that most expect to be able to download a copy of their submitted claim for their records. During research, many veterans expressed difficulty maintaining personal records, and simultaneously expressed distrust of va.gov's website because of a fear of data loss. 
* The reason for Veteran distrust in VA.gov services frequently points to site performence and their past experiences with VA healthcare and previous claims. Many veterans expressed challenges getting access to their records and finding data that they expected the VA to keep on file. Others expressed challenges meeting deadlines due to lost correspondence letters or other communications that slipped through the cracks. Although the reasons vary across factors related and unrelated to va.gov, we believe we can improve trust by providing Veterans with a record they can keep.
* This initiative helps further OCTO-DE's goal of making the claimant experience better by ensuring that application and decision review workflows set clear expectations about the process.

## Desired User Outcomes
- As a Veteran, I want the ability to download a copy of my submitted appeal, so that I know my appeal was successfully submitted.
- As a Veteran, I want to know exactly what date and time I submitted my appeal, so that I can keep it in my personal records.
- As a Veteran, I want to know which issues I added to a claim, so I can keep track of what I've filed.
- As a Veteran using Assistive Technology, I want an accessible way to review and save a copy of my submitted appeal.

## Undesired User Outcomes
- As a Veteran, I do not want to be misled when downloading a copy of my claim, such that I believe it was successfully submitted when it was not.
- As a Veteran, I do not want to mistake the copy of my claim for a paper version that I need to mail, which could cause longer development time due to duplicate filing.
  
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
- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)
- CTA button click for NEW download event | Baseline: N/A | Target: TBD | Link to Data Source: TBD
- CTA button click for CURRENT print confirmation page event | Baseline: 89 clicks out of 564 submissions| Link to Data Source: TBD
---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - Prior user research for Decision Reviews and Claim Status Tool have shown us that Veterans are expecting a way to keep a record of what they submitted.
- **Usability Risks** (can people figure out how to use it):
  - This replaces the current CTA to 'Print this page for confirmation'
  - The risk is if Veterans believe they need to submit the downloaded PDF, but we've included measures (watermark) that clearly states the copy is not for submission. 
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

The following are feature recommendations based on the [accessibility resarch](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews/Notice-of-Disagreement/Research/012024-accessible-submission-download) we've conducted.

1. Updates to the Board Appeal confirmation page
   1. Update success alert to provide more immediate
   2. Add a summary section that allows the user to download a PDF copy of the board appeal
   3. Include a "review" content section that contains all of the answers submitted within the form
   4. Update the "What to expect next" content to include more information about process timeline and method of contact
2. Creating an accessible downloadable copy of completed submission
   1. Creating a PDF boilerplate to generate an accessible PDF
   2. Creating a .txt file of the confirmation page, which includes a copy of all submitted responses
3. Updating the Board Appeal confirmation email
   1. Include more direct language about appeal processing and link to Claim Status Tool
   2. Include a link to an authenticated page that houses the PDF of the completed submission and/or .txt file
4. Authenticated page
   1. Authenticated page that houses direct download of the PDF of the completed submission and/or .txt file

- Does not include use of Lighthouse PDF endpoint, since the generated PDF is inaccessible.

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- [Collab Cycle ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/66135)

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots (updated post-usability testing)

### Confirmation page

#### Before
<details><summary>Board Appeal Current Confirmation Page</summary>
  
![Current ](https://github.com/department-of-veterans-affairs/va.gov-team/assets/111457818/5eed0b84-4b45-4f15-a817-5a48cd576a20)

</details>


#### After
<details><summary>Board Appeal New Confirmation Page</summary>

![Claim Download V3 2](https://github.com/department-of-veterans-affairs/va.gov-team/assets/111457818/66977745-b7c7-46c4-991f-b9958e4765d6)

</details>


### Email

#### Before

<details><summary>Board Appeal Current Confirmation Email</summary>
  
![Current Board Appeal Confirmation Email](https://github.com/department-of-veterans-affairs/va.gov-team/assets/111457818/98904102-ff4c-4d25-850f-b8170451db92)

</details>

#### After

<details><summary>Board Appeal New Confirmation Email</summary>
  
![New Board Appeal Confirmation Email](https://github.com/department-of-veterans-affairs/va.gov-team/assets/111457818/63c8deae-a9eb-491b-9cae-b2dd843888d8)

</details>


---


#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: Benefits Decision Review
- GitHub Label(s): benefits-team-1, Decision-Reviews-Team
- Slack channel: [benefits-decision-review](https://dsva.slack.com/archives/C5AGLBNRK)
- Product POCs: Zach Goldfine, Sade Ragsdale

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: Board of Veteran Appeals
- Contact(s): John Gosnall
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
