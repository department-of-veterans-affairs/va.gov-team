# Prescriptions Initiative Brief
#### Overview

<details>
 
 *There is roughly a 1:many relationship between products and initiatives, or our attempts to improve a product/achieve Veteran outcomes. The same goes for product outlines and initiative briefs. This template can be used as product documentation for the Collaboration Cycle, especially when iterating an existing product. In addition, the Brief is an important communication tool within a team and between the team and Crew Chief/PO/other teams.* 
 
</details>

<details>
 <Summary>Examples:</Summary>
 
 - *Product: On-site Search* 
   - *Initiatives: Type-ahead, [Search Landing Page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/search-landing/initiative-brief.md), [Surfacing Other Search Tools](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/surfacing%20other%20search%20tools/initiative-%20brief.md)*
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

* Veterans have accessibilty to viewing, refilling, and tracking prescriptions in a chatbot experience
* Veterans experiencing difficulties refilling a prescription can be sent to a live agent for additional support

<!--
## Desired User Outcomes
- *Why would a user want to use this?*
- *With this problem solved, what should users be able to do/achieve that they couldn't before?*

* view, refill and track prescriptions on chatbot
* find support for troubleshooting 

## Undesired User Outcomes

* inability to view, refill and track prescriptions on chatbot
* inability to get support for prescription inquiries

## Desired Business Outcomes

- *Why would your business want this to exist?*
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*

* direct ties to a live agent for rx refill troubleshooting
* reduces time for veteran to reach support
* meets the requirement of having One VA Bot platform
* meets presendential CX mandates

## Undesired Business Outcomes

* channels are not connected; chatbot remains siloed product 

-->

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)
* task completion (how many prescriptions get refilled, etc)
* usage (how many people come to chatbot to use the Rx feature)
* usage of voice feature (how many people use the voice component)
* how many people are transferred to live agent
* task completion time (time spent in Rx Skill)

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - will Veterans use the main Rx Skill
  - will Veterans use the Voice activated Skill
  - 
- **Usability Risks** (can people figure out how to use it):
  - Is accessibility a concern
  - Voice activation not working
  - Users cannot transition from skill to skill
  - No internationalization of the skill; non-English speakers
  - 

- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Clashing of JOVO, Proxy bot and main chatbot
  - API errors
  - Intent mismatches
  - Authentication issues
  - Inability to communicate with backend server
 
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Yes, usability testing indicates that Veterans are interested in feature 
  - Yes, examination of chatbot transcripts indicates Veterans are already looking for this information
  - Yes, already consistent with other channels at the VA

### What're you building
> *What's in scope for you to build with this initiative? Describe key features/flows. 
> *What have you explicitly decided to **not** include and why?*
> *How does this solution address your Assumptions & Risks?

* Authentication of Veteran
* Viewing, refilling and tracking prescriptions 
* Entries & exits to the skill
* Voice activated feature

Not included: 
* no renewels -- requires doctor overview
* no prescription history
* no prescription requests
* no secure messaging with healthcare providers
* cannot cancel request
* no payment information; no exchange of funds
* 

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

* Internal communications between OCTO, VES, VEO, and OCC (VHA)

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
  - MVP (without Live Agent): October
      
- *Actual Launch Date* 
  - MVP (without Live Agent): proposed end of October

---
   
## Screenshots

### Before
* [Usability testing mockups](https://xd.adobe.com/view/c97e3903-3451-4696-9f87-d9cde5d83eaf-9c2d/?fullscreen&hints=on)

### After
* sc of prototype - will update end of July 2023

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: Va.gov Chatbot
- GitHub Label(s): va-virtual-agent
- Slack channel: #virtual-agent-public
- Product POCs: Luciana Morais, Nathalie Rayter

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCC (VHA), OCTO, VES 
- Contact(s): Hugo Padilla (OCC), Luciana Morais (OCTO), Nathalie Rayter (VES)
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
