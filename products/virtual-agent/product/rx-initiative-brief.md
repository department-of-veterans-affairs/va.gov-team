# Prescriptions Initiative Brief
#### Overview

The Office of the CTO (OCTO) and the Office of Connected Care (OCC) joined as the first partnership for the VA Chatbot platform to provide the users accessibility into getting their personalized prescription information in a timely manner. The prescription skill includes an opt-in voice feature, listing of what prescriptions they have on file, prescription details, refill dates, order prescriptions, and track prescription orders.
 </details>
 
---

## Outcome Summary
With Rx skill enabalement, the VA Chatbot is better able to support the needs of our veterans in a timely manner, while reducing calls to live agent call centers.

**Related/Associated product(s)**
- Product outline: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/product/product_outline.md#key-decisions

## Problem 
> What is the problem and who is affected? 

Without embedding the Rx skill into the VA Chatbot we will see the call centers continue to rise in number of calls from veterans and caregivers around prescription details. 
> What evidence do we have of the problem?

Transcript analysis suggest that the VA Chatbot is being asked to handle healthcare topics - medication refill and renewals is part of that.
> Why do you think the problem is occurring?

Users want to avoid calling the VA and to optimize their use of the VA Chatbot. Likely users also engage with the chatbot for another topic, then direct their questions to their personalized needs, not just general VA.gov topics.
> How does this initiative help further OCTO-DE's mission and goals?

As part of the One-Bot approach - the VA Chatbot team wanted to collaborate with teams outside of OCTO. VHA Office of Connected Care had previously built an RX refill Alexa skill that they wanted to repurpose as a chatbot experience.

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
