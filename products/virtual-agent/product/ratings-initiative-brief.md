# Ratings Initiative Brief
#### Overview

Veterans are able to view and track disability ratings information through myVA and the VA Mobile app. This effort will bring the VA Chatbot in line with the capabilities of other tools on the VA platform, giving consistency to the veteran experience of tracking the claims journey. 
---

## Outcome Summary
With the ability to return disability ratings, the VA Chatbot is better able to support the needs of our veterans during the claims process. 

**Related/Associated product(s)**

- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/product/product_outline.md#key-decisions)

## Problem 
> What is the problem and who is affected? 

Without enabling the VA chatbot to respond to disability rating inquiries, we are leaving veterans without answers to one of the most pertinent aspects of the claims process. Veterans look to track their ratings to maintain a complete picture of their disability profile. The chatbot should have the same capabilities in this area as other tools on the VA platform. The chatbot responding to some claims-related topics and not others ultimately harms user's confidence in the bot over the long term.  

> What evidence do we have of the problem?

Transcript analysis suggest that the VA Chatbot is being asked to handle an increasing number of ratings inquiries. The most common utterance is some form of the question "What is my rating?" followed by process questions (i.e. how long until...?) and general rating FAQs. 

> Why do you think the problem is occurring?

Veterans have multiple avenues to track ratings and other aspects of the claims and appeals process. If they are hearing about the new VA chatbot, they likely assume that it has the same information as myVA or the mobile app. 

> How does this initiative help further OCTO-DE's mission and goals?

Enabling ratings capabilities on the VA chatbot directly furthers OCTO-DE's mission - delivering high quality digital experiences to veterans and their families - and strategic goals, particularly that 1) logged-in users can easily track applications, claims and appeals online and 2) Veterans and their families can trust the security, accuracy and relevance of VA digital services. 

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
* **Task completion:** Percentage of users that successefuly view disability ratings
* **Usage:** How many users - unique and returning - are coming to the chatbot to view disability ratings?
* **Task completion time:** How much time is spent in the ratings user flow?
* **Flow Interruptions:** How many times is the intended ratings flow interrupted by a new utterance? 

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks**: 
  - Will Veterans use the ratings feature?
  - Will veterans find the capability useful, or require more beyond just viewing combined / individual ratings?
    
- **Usability Risks**:
  - Is accessibility a concern?
  - Does the feature work well with screen readers?
  - It is designed only for English speakers; there is no internationalization of the skill.

- **[Technical] Feasibility Risks**:
  - API errors
  - Intent mismatches
  - Authentication issues
  - Inability to communicate with backend server
 
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints**: Will there be a positive organizational impact?:
  - Yes, usability testing indicates that Veterans are interested in expansion of Chatbot features. 
  - Yes, examination of chatbot transcripts indicates Veterans are looking for ratings information. 
  - Yes, VA Chatbot is already consistent with other channels at the VA.

### What're you building
> *What's in scope for you to build with this initiative? (Describe key features/flows) 
#### MVP 1
- Authentication of veteran
- Viewing combined and individual disability ratings (associated condition, service connected, effective date)
- Response to user if no disability rating associated with profile 

#### MVP 2
- Authentication of veteran
- Viewing combined and individual disability ratings (associated condition, service connected, effective date)
- Response to user with no disability rating, route to claims status (or other similarly relevant feature - pending usability testing outcome)

> *What have you explicitly decided to **not** include and why?*
- Not including associated decision letter next to ratings - future iteration, requires more discovery. 

<!--
#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*
-->

--- 

## Launch Planning
### Collaboration Cycle

- Kickoff ticket: 

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*
1. 

<!--
* WIP: [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)
-->

#### Initiative Launch Dates
- *Target Launch Date:* January 2024
  - Ratings MVP

---
   
## Screenshots

### Before
* [Usability testing mockups](https://www.sketch.com/s/b5a58a23-6128-421b-9869-50bad5b2686f)

### After
* 

---

#### Communications
> *Where will you discuss this initiative?*

- **Team Name:** VA Chatbot
- **GitHub Label(s):** va-virtual-agent
- **Slack channel:** #virtual-agent-public
- **Product POCs:** Ryan Powers, Nathalie Rayter


#### Stakeholders
> *What offices/departments are critical to make this initiative successful?*
  
- **Office/Department:** OCTO, VES
- **Contact(s):** Luciana Morais (OCTO), Nathalie Rayter (VES)
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
