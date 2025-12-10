# "AccessVA" to "VA services" Initiative Brief
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
* Eliminate the custom, external AccessVA site by providing a place on VA.gov for various types of users to access their needed applications. 

**Related/Associated product(s)**
- Single-Sign On (External) | [product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/single-sign-on#product-outline) 

## Problem
> *Describe the challenge / pain point you seek to address.:* 
* Business case: AccessVA is a custom site which costs overhead to maintain => moving to VA.gov would help lesseon/remove this overhead.
* UX case: AccessVA is a "legacy" site and does not meet modern VA experience standards => redesigning the page according to the VA Design System will help guarantee the site is compliant and accessible.
* "Technology" case: AccessVA uses ISVA. As the VA works to modernize it's SSO architecture, continued use of ISVA is unclear => moving off ISVA removes the risk of a "rug pull" via the removal of the underlying technology.
* "VA Strategy" case: Visiting AccessVA is the 1st step for accessing some key services that don't have an unauth state to offer users. Consolidating services to VA.gov falls in line with the ["Digital Front Door" campaign](https://digital.va.gov/office-of-information-and-technology/digital-front-door/).

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

- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo) (to be filled in by product?)

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - (to be filled in by product)
- **Usability Risks** (can people figure out how to use it):
  - Risk: Users may initially be confused by the dramatically different style of VA.gov vs AccessVA which does not use the VADS.
    - We're using the same user categories from AccessVA on the new page + the accordion method of organizing application links. This should feel somewhat familiar to AccessVA users.
    - Because the page is relatively simple, we could do unmoderated testing to verify task success.
  - Risk: Users may initially have a difficult time finding the application they want if they were depending on "muscle-memory" to navigate to the correct app + the logo. Since this is a static page, we cannot display the application logos via Drupal.
    - Applications will be links, served in alphabetical order, and grouped by user type. This should help with findability.
    - This is something we can test for via unmoderated studies for task success.
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - (to be filled in by engineering)
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - (to be filled in by product)
  - Examples: 
    - VA stakeholder testing, marketing, compliance requirements 

### Supporting research

- *Is this work supported by user research?*
  - Yes, some apps on AccessVA do not have an unauth state and rely upon AccessVA as the first step in their sign-on process.
  - [AccessVA research repo](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/single-sign-on/research/user-discovery/2025-08-AccessVA)*
>  - *If this work is **not supported by existing user research**, will this work include user research?*
>    - *If this work **will include user research**, please briefly state what you hope to learn from that research.*
>    - *If this work **does not cite nor include user research**, please state why and be prepared to defend your decision.*

### What're you building?

> *What's in scope for you to build with this initiative? Describe key features/flows.*
- (to be filled in by product?)  
> *What have you explicitly decided to **not** include and why?*
- (to be filled in by product?)
> *Are you building for the VA Health and Benefits mobile application? Explain why or why not.*
- (to be filled in by product, but my guess is no)
> *How does this solution address your Assumptions & Risks?*
- (to be filled in my product)
#### Go-to-market 

> *What marketing, outreach, or communications are necessary for this product to be successful?*
- (to be filled by product?)
> *Which groups/orgs are necessary to make this happen?*
- We are working with OCTO-Identity who is helping support this project. Because the page is a static page, the OCTO - Sitewide Content and IA Team will be building and updating the page.
--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket (will file for one once this outline is done)

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md) (separate document to be filled in by product)

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd (to be filled in by product)
- *Actual Launch Date* 
  - tbd (to be filled in by product)

---
   
## Screenshots

### Before
<img width="1206" height="638" alt="image" src="https://github.com/user-attachments/assets/41290a7e-b0c7-49d3-8bef-355ecb2bed05" />

### After

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: ICAM Portfolio Services - External SSO
- GitHub Label(s): ICAM-external-SSO
- Slack channel: [#icam-svcs-external-sso](https://dsva.slack.com/archives/C07T842J0TY)
- Product POCs:
  - Amos Stone | ICAM Technical Advisor & SSOe Product Owner:
    - john.stone3@va.gov
  - Sherry Smith | ICAM Product Lead/Product Line Manager & SSOe Product Owner:
    - sherry-lynne.smith@va.gov
  - Damien DeAntonio | ICAM Services Portfolio - Architect:
    - damien.deantonio@va.gov
  - Joel Calumpong | ICAM SSO UX lead:
    - joeljon.calumpong@va.gov

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: VA OCTO - Identity
- Contact(s):
  - Samara Strauss | OCTO Identity crew lead
    - samara.strauss@va.gov
  - Lainey Trahan | VA.gov Identity Team - Product Manager
    - Elaine.Trahan@va.gov
  - Joelle Wells | Identity Experience, Product Manager
    - joelle.wells@va.gov
  - Clayton Zook | Identity Experience Team - UX Reseacher
    - Clayton.Zook@VA.gov
  - Megan Driscoll | Identity Experience - Content Designer
    - megan.driscoll2@va.gov
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
