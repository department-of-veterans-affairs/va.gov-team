# Initiative Brief Template
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
* We need a way for a Veteran who has just finished submitting their 526EZ form to be able to review, save, and / or print the information they submitted on the form. While a [design system pattern](https://design.va.gov/patterns/help-users-to/keep-a-record-of-submitted-information) exists for this purpose, the single accordion breaks during technical implementation due to the length of content and data types. We are repurposing the [Review and Submit](https://design.va.gov/templates/forms/review) template with multiple accordions on the page for our “Keep a record of submitted information” page. 100% of Veterans should have the opportunity to save a copy of their submission.

## Problem
> *Describe the challenge / pain point you seek to address.:* 
* What is the problem and who is affected? And, what evidence do we have of the problem?
Veterans who have completed and submitted the 526EZ disability benefits form need a reliable way to review, save, and print the information they submitted, using a page design that can handle long content and varied data types. This feature currently does not exist within the form. 
* Why do you think the problem is occurring? Other reasons why this might be occurring?
There is no current solution implemented for the problem that we are trying to solve. 
* How does this initiative help further OCTO-DE's mission and goals?
This initiative would improve trust and transparency in the disability benefits submission process by providing Veterans with a clear, reliable record of their claims. It would also reduce support calls and follow-up inquiries from Veterans who are unsure what they submitted or cannot access their information. The VA has also has design standards for "keeping a record of submitted information" while implementing a technically feasible solution.

## Desired User Outcomes
*Why would a user want to use this?*

- To have a clear, accessible record of the information they submitted for their disability benefits claim.
- To save or print their submission for personal records or future reference.
- To verify what they submitted in case of errors, appeals, or follow-up communications.

*With this problem solved, what should users be able to do/achieve that they couldn't before?*

- Easily review the entire submission in one place without hidden or collapsed information.
- Save all the information.
- Print all submitted information.
- Trust the system and feel confident that their record matches exactly what was submitted, reducing uncertainty or anxiety about their claim.

## Undesired User Outcomes
- Incomplete record: The Veteran prints or saves the page but not all information makes it to the saved or printed page because of technical challenges or because the Veteran doesn’t realize they need to expand all accordions before printing, leading to wasted time or repeated attempts.
- Loss of information: The Veteran believes they have saved their submission but later discovers that sections were truncated or omitted.
- Accessibility barriers: Veterans using assistive technologies (e.g., screen readers, keyboard navigation) cannot easily review or print their submission.
- Lack of confidence: Veterans feel uncertain whether their information was submitted correctly because they don’t have a complete, reliable record.
- Increased support burden: Veterans contact VA support to verify what they submitted, adding unnecessary workload for both users and VA staff.

## Desired Business Outcomes

*Why would your business want this to exist?*

- To improve trust and transparency in the disability benefits submission process by providing Veterans with a clear, reliable record of their claims.
- To reduce support calls and follow-up inquiries from Veterans who are unsure what they submitted or cannot access their information.
- To align with VA’s design standards for "keeping a record of submitted information" while implementing a technically feasible solution.
- To improve compliance and auditability, ensuring Veterans and VA staff can reference an accurate record if questions or disputes arise.

*With this problem solved, what should your business be able to do/achieve that they couldn't before?*

- Deliver a consistent UX that meets the design system's intent while functioning correctly with long, complex data submissions.
- Provide self-service capabilities that reduce number of calls to the call center.

## Undesired Business Outcomes

- Increased support calls or emails from Veterans asking for confirmation or copies of their submitted claim information.
- Reduced trust in VA online services if Veterans feel the system does not provide a complete or reliable record.
- Failure to meet internal guidelines or accessibility standards for “keeping a record of submitted information.”
- An inconsistent user experience in how Veterans can access or print their submitted information across different forms or services, leading to confusion.
- Processing delays caused by Veterans needing to resubmit or clarify their information because they lack a personal record.

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)
The Platform Analytics team is currently working to create a GA4 and Domo dashboard for us. 
---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

**Value Risks** (will people use it): 
- Veterans may not notice or access the "Keep a record of submitted information" page after submitting their claim.
- If printing or saving requires manual steps (e.g., opening all accordions), Veterans may abandon the task.

**Validation approach**
- Usability testing with "fresh eyes" internal testers or Veterans (if time allows) immediately after submission to assess discoverability and perceived usefulness.
- Surveys or analytics tracking on how often the page is viewed, printed, or saved.

**Usability Risks** (can people figure out how to use it):
- Veterans may get confused by the "Keep a record of submitted information" page because it will have the same layout as the "Review and Submit" page.
- Veterans may not understand that all accordions must be opened before printing or saving, resulting in incomplete records.
- Multi-accordion layout may feel overwhelming or hard to navigate, especially with long data sets.
- Accessibility issues (screen readers, keyboard navigation) may make expanding or reviewing all data difficult.
- Veterans may not realize that they will not be able to access a copy of their submission once their session has ended. 

**Validation approach**
- Usability testing with "fresh eyes" internal testers or Veterans for clarity of instructions and ease of navigation.
- Accessibility audits following WCAG 2.1 AA and VA standards.
- A/B testing of different instructions or default-open accordions.
- Testing specifically on the content that relays to the user that they will not be able to access a copy of their submission after they end their session. 

**Technical Feasibility Risks** (can we build it with available tech/data):
(Examples: Upstream/Downstream API/Data availability and reliability, Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan))
- Existing front-end framework may struggle to handle long data sets in the multi-accordion pattern.
- Browser print functionality may not consistently capture all data across different browsers/devices.
- Potential performance degradation on pages with large amounts of content and multiple accordions.
- Reliability of upstream or downstream data sources could lead to missing or inaccurate submission details.

**Validation approach**
- Early technical prototyping and browser testing.
- Testing and release plan including limited roll-out behind a feature flag 
  
**Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
(Examples: VA stakeholder testing, marketing, compliance requirements) 
- Platform may reject deviation from the existing design system pattern.
- Limited engineering resources could delay implementation or ongoing maintenance.
- Inconsistent approaches across other VA forms could create fragmented experiences if this pattern is unique.

**Validation approach**
- Early stakeholder reviews (experimental design request, collab cycle, ongoing conversations with OCTO enabling partners) to confirm alignment with VA standards.
- Roadmap alignment with engineering capacity and other form teams to promote a scalable solution.

### Supporting research

*Is this work supported by user research?* If this work is **not supported by existing user research**, will this work include user research?*
Since the pattern that we are using is an existing pattern in the design system, we are assuming that it will already be meet accessibility standards and some usability needs. However, we do intend on validating the use of this pattern for the Keep a Record of Submitted Information page and are still in the process of determining what would be the best approach (internal "fresh eyes" testing and/or user research).  

*If this work **will include user research**, please briefly state what you hope to learn from that research.*
We are still in the process of determining what we would like to conduct research on, but here are some key questions we have: 
- Whether the accordions should be opened by default or whether users will click a link that says "Expand all accordions"
- If users are confused by the fact that the pattern is also used on the previous page in the flow (Review and Submit page).
- Whether users understand how to save the HTML copy of their submission.
- Whether users understand how to print the HTML copy of their submission.
- Any pain points in printing the HTML copy of their submission via default browser functionality. 
- Whether the visual hierarchy provided on the page via the accordions as well as the visual hierarchy within the accordions supports the user in clearly understanding the information they submitted. 
- Any pain points that users using screen readers might experience. 

### What're you building?

> *What's in scope for you to build with this initiative? Describe key features/flows.*
- Providing an HTML copy of all of the information the Veteran submitted on their 526EZ form. 
 
> *What have you explicitly decided to **not** include and why?*
- Downloadable PDF. (This is currently technically not feasible and more discovery/ collaboration needs to be done with the data sources in order to solve for this.) 
- An emailed copy of the submission to the Veteran. (This is out of scope. We are currently trying to provide this feature as quickly as possible.)
- A persistent URL link that can be accessed after the user logs out of their session. (This is out of scope and would require more understanding and collaboration with related VA systems.)

> *Are you building for the VA Health and Benefits mobile application? Explain why or why not.*
I am not sure.

> *How does this solution address your Assumptions & Risks?*
The solution we are proposing is currently the quickest and lowest lift option for us to provide users with a copy of their form submission. We will need to validate the design in order to address the assumptions and risks. 

#### Go-to-market 

> *What marketing, outreach, or communications are necessary for this product to be successful?*
The feature will live within the 526 form and users will encounter it after they fill out the form. There is not outreach or marketing necessary. 

> *Which groups/orgs are necessary to make this happen?*
Collaboration across Platform Design System. 

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*
Our deadline to deliver this feature is the end of September 2025. 

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - End of September 2025
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots
[Figma File](https://www.figma.com/design/zduybBnXDjVkKpJosfC6oh/526---Submission---Provide-a-Copy-Update-7.2?node-id=14-5195&t=joXJoFnoMT9R8lC5-1)

### Before

### After

---

#### Communications
*Where will you discuss this initiative?*
Slack channels: # benefits-disability-design and # benefits-disability

<details>

- Team Name: Disability Benefits Crew, Core Form Team
- GitHub Label(s): disability-benefits, disability-benefits-team1
- Slack channel: # benefits-disability-design, # benefits-disability
- Product POCs:

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*
OCTO, Platform Design System

<details>
  
- Office/Department:
- Contact(s): 
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
