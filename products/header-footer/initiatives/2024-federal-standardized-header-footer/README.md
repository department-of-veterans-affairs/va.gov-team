# Federal standardized header and footer

* Epic: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/14078
* [Decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/header-footer/initiatives/2024-federal-standardized-header-footer/decision-log.md) 

#### Overview

This initiative will work to solve three problems:
1. Increase performance - The performance of the header should be reviewed and optimized as much as possible to better support Veterans and beneficiaries accessing VA.gov on low-bandwidth connected devices or those who are concerned about data plans. (Equity)
2. Use web components - The VA.gov header needs to be migrated to use web components in order to allow the update of the VA.gov Design System to USWDS 3.0. 
3. Prototype OFCIO's new global header and footer layout - attempt to adopt OFCIO's new experimental global header and footer and test with Veterans and beneficiaries to validate that it can be successfully adopted with no (minimal?) negative impact to site visitors.

---

## Outcome Summary
- Performance/data requirements of header is reduced
- Usability of the main navigation is maintained or improved, especially on mobile devices.
- Usability flow into authenticated experience(s) is maintained or improved, especially on mobile devices.
- Usability of the VCL is maintained or improved, especially on desktop devices.
- Larger font sizes help Veterans understand and interact with VA.gov
- Usability of the header and page is unaffected by font-family change
- Usability of the authenticated experience is unaffected (may be out-of-scope?)

OFCIO’s goals with this work:
- Veterans have provided positive feedback about the USA brand mark.
- Veterans have provided positive feedback about the use of the VA seal.


**Related/Associated product(s)**
- VA.gov header and footer | https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/header-footer/README.md

## Problem
* How might we better support Veterans and beneficiaries on low-bandwidth devices?
* How might we modernize the header to 'unblock' the work on the VA.gov Design System move to USWDS 3.0
* How might OFCIO unify a Federal brand
* How might VA.gov migrate intent, design, and needs into the guardrails provided by this revised design with guardrails.


## Desired User Outcomes
* Faster page load time/interaction with page elements
* Increased trust in website

## Undesired User Outcomes
* Frustration/confusion

## Desired Business Outcomes
* Use of web components to better align with VA.gov Design System
* Fewer breaks of the injected header experience
* Ability to unify a Federal brand

OFCIO’s goals with this work:
- Global header and footer, and global menus and navigation, code can be copy/pasted and used on other federal .gov websites
- USWDS team can copy/paste the code and design parameters, and refactor as necessary, to codify these updates in the design system


## Undesired Business Outcomes
* Decreased user satisfaction

---
## Measuring Success

### Key Performance Indicators (KPIs)

* Performance of header on various page types:
  * VA.gov homepage
  * VA.gov health hub page
  * Injected performance on legacy teamsite page (e.g. https://www.va.gov/health/)
  * 10-10EZ form?
* Overall satisfaction score
* VA.gov experience rating

| Product KPI | Baseline as of **DATE** | Target | Link to data source (e.g. GA, Domo) |
| ----------- |  ----------- |  ----------- |  ----------- | 
| VA.gov homepage performance |   |   |   | 
| VA.gov health hub page performance |   |   |   | 
| Legacy Teamsite page performance |   |   |   | 
| Online form performance |   |   |   | 
| VA.gov Overall Satisfaction |   |   |   | 
| VA.gov Experience rating |   |   |   | 


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

See initiative design folder
 - https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/header-footer/initiatives/2024-federal-standardized-header-footer/design

---

#### Communications

- Team Name: Public Websites
- GitHub Label(s): 
- Slack channel: #sitewide-public-websites
- Product POCs:
  - VA Product Owner: Dave Conlon
  - Product Manager: Wes Rowe
  - Delivery Manager: Jill Adams


#### Stakeholders
  
- Andy Lewandowski, Office of the Federal CIO
- Matt Dingee, OCTO Platform
- Web governance board


### Current Status

#### 2024-05-28 
- Initiative was discontinued by stakeholders. Not shipped.

#### 2024-03-01
- Cindy finished drafting the [header/footer research report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/header-footer/initiatives/2024-federal-standardized-header-footer/research/research-findings-phases1%262.md) and shared with @aklausmeier for feedback.

#### 2024-02-29
- Cindy's goal is to have the synthesis and reporting completed before the end of Sprint 105, and will then start the research readout and post-research tasks.

#### 2024-02-16
- Project placed on paus because the OFCIO wants to conduct a broadened research endeavor that will encompass more than just VA.gov
- Randi to finish working on the flattened injected header/footer; Design team to continue their work on the auth portion; will release only the injected header changes when the Design team is finished.
- Cindy to continue work on the synthesis and reporting.

#### 2024-02-05
- Jill/Fran/Randi met with Amanda to chat about the slight changes to the auth menu
- Wes's team to work on the user's displayed name only
- Randi is slogging through the injected header with help from Micah on the auth portion

#### 2024-01-22
- Decision [log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/header-footer/initiatives/2024-federal-standardized-header-footer/decision-log.md) created regarding creating a flattened HTML for the injected header/footer.

#### 2024-1-10
- Randi created tickets for preliminary (head-start) build-out of the header and footer. The header story will be pulled into Sprint 102

#### 2024-01-08
- Header build out [Ticket ](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/16815)was able to be pulled into Sprint 101; it will most likely roll over to Sprint 102
- Footer build out [ticket ](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/16809)created, refined, and poised to be pulled into Sprint 102, if possible.
- Mega menu clean-up [ticket ](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/16816)created and will be reviewed with Dave to get approval for style/markup cleanup.
- CodePen completion is on track
- Research tasks are on track

#### Status week of 01/02/2024
- The [Federal Header/Footer research topline summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/header-footer/federal-standardized-header-footer/research/phase1-no-AT/topline.md) has been revised by Cindy Merrill and is now ready for Dave / Amanda to share more widely.
- Cindy will be working on these two tickets during Sprint 101, which begins on 01/03
  - Draft Federal Header Footer Phase 2 research plan #[16611](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/16611)
  - Draft Federal Header Footer Phase 2 conversation guide #[16613](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/16613)
- Randi Mays and/or Chris Kim will be working on these two tickets during Sprint 101:
  - [Review Codepen for Federal Header #16571](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/16571)
  - and then: [#16573 Build Codepen Header/Footer Prototype screens](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/16573)

#### Status week of 12/27
- Cindy (on 12/22) met with Amanda K and wrote a [research summary report]( https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/header-footer/federal-standardized-header-footer/research/phase1-no-AT/topline.md.) that's somewhere between a topline and a full report
- Cindy will transition to planning Phase 2 of the research (in January
- Laura delivered the CodePen work she's done so far to Chris/Randi for review. Ticket to finish builing out the prototype is [here](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/16573)

#### Status week of 12/4/2023
* Cindy submitted her research plan and convo guide to Shane on 12/6
* Research dates identified: Dec 15-22 (10 completed sessions with a 25% overage like Perigean requests).

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
