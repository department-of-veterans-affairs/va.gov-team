# Prescriptions Initiative Brief
#### Overview

The Office of the CTO (OCTO) and the VHA Office of Connected Care (OCC) joined as the first partnership for the VA Chatbot platform to provide the users accessibility into getting their personalized prescription information in a timely manner. The prescription skill includes an opt-in voice feature, listing of what prescriptions they have on file, prescription details, refill dates, order prescriptions, and track prescription orders.
 </details>
 
---

## Outcome Summary
With Rx skill enabalement, the VA Chatbot is better able to support the needs of our veterans in a timely manner, while reducing calls to live agent call centers.

**Related/Associated product(s)**

- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/product/product_outline.md#key-decisions)
- [Voice Health Assistant](https://wiki.mobilehealth.va.gov/display/VVHA/VHA+Voice+Health+Assistant)

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

- > Why would your business want this to exist?
This supports cross collaboration between VA teams to best support the needs of our veterans by providing prescription information in a chatbot experience as a more user friendly experience.
- > With this problem solved, what should your business be able to do/achieve that they couldn't before?
Provide VA Chatbot users with personalized experience in regards to their presriptions while reducing calls to live agent call centers which meets presendential CX mandates.


## Undesired Business Outcomes

* channels are not connected; chatbot remains siloed product 

-->

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup> *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- Product KPI, baseline, target, link to data source: GA, Domo
* **Task completion:** How many prescriptions get refilled, etc.
* **Usage:** How many people come to chatbot to use the Rx feature?
* **Usage of voice feature:** How many people use the voice component?
* **Task completion time:** How much time is spent in Rx Skill?
  
* **How many people are transferred to live agent?** (Health chat iteration for MVP launch)

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks**: 
  - Will Veterans use the main Rx Skill?
  - Will Veterans use the Voice activated Skill?
    
- **Usability Risks**:
  - Is accessibility a concern?
  - Does voice activation work consistently?
  - Potential risk that users cannot transition from skill to skill.
  - It is designed only for English speakers; there is no internationalization of the skill.

- **[Technical] Feasibility Risks**:
  - Clashing of JOVO, Proxy bot and main chatbot
  - API errors
  - Intent mismatches
  - Authentication issues
  - Inability to communicate with backend server
 
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints**: Will there be a positive organizational impact?:
  - Yes, usability testing indicates that Veterans are interested in expansion of Chatbot features. 
  - Yes, examination of chatbot transcripts indicates Veterans are already looking for their medication information.
  - Yes, VA Chatbot is already consistent with other channels at the VA.

### What're you building
> *What's in scope for you to build with this initiative? (Describe key features/flows) 
- Authentication of veteran
- Viewing, refilling, and tracking prescriptions
- Entries and exits to the skill
- Voice activated feature

> *What have you explicitly decided to **not** include and why?*
- No renewals -- requires provider overview 
- No prescription history
- No new prescription requests
- No secure messaging with healthcare providers
- No request cancelation option
- No payment information or exchange of funds

> *How does this solution address your Assumptions & Risks?
- Maintains transparent to users that this is not provider/healthcare recommendation tool 


#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

* Internal communications between OCTO, VES, VEO, and OCC (VHA)

--- 

## Launch Planning
### Collaboration Cycle

- Kickoff ticket: https://github.com/department-of-veterans-affairs/va.gov-team/issues/61873

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*
1. Rx skill MVP to integrate the proxy bot into VA Chatbot as a first iteration
2. Accessibility updates including refinement of voice feature
3. Health chat integration to provide users with a link to connect them to a live agent.

* WIP: [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date:* October 2023
  - Rx Skill MVP
      
- *Health Chat MVP Launch Date:* January 2024
  - Includes feature updates, accessibility updates, and Health Chat integration 

---
   
## Screenshots

### Before
* [Usability testing mockups](https://xd.adobe.com/view/c97e3903-3451-4696-9f87-d9cde5d83eaf-9c2d/?fullscreen&hints=on)

### After
* [Rx prototype](https://www.sketch.com/s/b5a58a23-6128-421b-9869-50bad5b2686f/prototype/a/E0136A5B-837B-4DF5-AEE6-986C7A365CFB)

---

#### Communications
> *Where will you discuss this initiative?*

- **Team Name:** VA Chatbot
- **GitHub Label(s):** va-virtual-agent
- **Slack channel:** #virtual-agent-public
- **Product POCs:** Luciana Morais, Nathalie Rayter


#### Stakeholders
> *What offices/departments are critical to make this initiative successful?*
  
- **Office/Department:** OCC (VHA), OCTO, VES 
- **Contact(s):** Hugo Padilla (OCC), Luciana Morais (OCTO), Nathalie Rayter (VES)
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
