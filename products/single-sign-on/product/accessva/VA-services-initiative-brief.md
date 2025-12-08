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
* Eliminate the custom, external AccessVA site by providing a place on VA.gov for the various types of users to access their needed applications. 

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

- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - Users must use this page to access certain services they currently access via AccessVA.
- **Usability Risks** (can people figure out how to use it):
  - We're using the same categories from AccessVA on the new page + the accordion method of organizing application links. This should feel somewhat familiar to AccessVA users.
  - Because the page is relatively simple, we could do unmoderated testing if needed.
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Examples: 
    - VA stakeholder testing, marketing, compliance requirements 

### Supporting research

- *Is this work supported by user research?* 
  - *If this work **is supported by user research**, please cite the user research by providing links to our [VA.gov research repo](https://github.com/department-of-veterans-affairs/va.gov-research-repository)*
  - *If this work is **not supported by existing user research**, will this work include user research?*
    - *If this work **will include user research**, please briefly state what you hope to learn from that research.*
    - *If this work **does not cite nor include user research**, please state why and be prepared to defend your decision.*

### What're you building?

> *What's in scope for you to build with this initiative? Describe key features/flows.*
 
> *What have you explicitly decided to **not** include and why?*

> *Are you building for the VA Health and Benefits mobile application? Explain why or why not.*

> *How does this solution address your Assumptions & Risks?*

#### Go-to-market 

> *What marketing, outreach, or communications are necessary for this product to be successful?*

> *Which groups/orgs are necessary to make this happen?*

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
