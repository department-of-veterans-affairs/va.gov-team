# Product Outline: Floating Chatbot on VA.gov
---
## Overview

The VA.gov Chatbot will be available across the VA.gov domain in the lower right-hand corner of the browser, available to site visitors on desktop and mobile.

---

## Problem Statement:

The VA.gov Chatbot is currently only available on the [Contact Us page](https://va.gov/contact-us/virtual-agent/) of the website, which make it hard to find and limits its usefulness to website visitors. Moreover, Veteran research has validated that Veterans expect a chatbot to behave as it does on other websites: one that is anchored in the lower right-hand corner of a page, that is minimizable, and that remembers them across their session (i.e., can see recent conversation transcript).

## Desired User Outcomes
* Veterans are able to discover the Chatbot.
* Veterans know where to find the Chatbot.
* Veterans feel that the Chatbot follows patterns they expect across the web.
* Veterans understand how to interact with the Chatbot (ex: they can minimize it to view content behind it).
* Veterans are able to see their recent conversation with the Chatbot across their current session.
* Veterans are able to save their transcript for future reference.
* Veterans are able to use the Chatbot with assistive technology.

## Undesired User Outcomes

* Veterans are confused by the presentation/behavior of the Chatbot.
* Veterans are obstructed in accessing the content they need on VA.gov because of the Chatbot.
* Veterans are not able to successfully use the Chatbot with assistive technology.

## Desired Business Outcomes

* The Chatbot enables Veterans to get answers to their questions instantaneously, 24/7.
* Because of increased discoverability and prominence, the Chatbot becomes a more frequently used support channel by Veterans.

## Undesired Business Outcomes

* The Chatbot is unable to handle the increased volume of user inquiries.
* Increased usage of the Chatbot drives additional traffic to human-supported channels.

---
## Measuring Success


### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_
* _**Limit 5-6 KPIs per product**__

| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| Average CSAT Score (excluding nonresponses) |             |                    |         X           |        |
| Rate of users clicking on Chatbot      |             |          X          |                    |        |
| Rate of returning users*      |             |                    |          X          |        |
| Rate of users engaging with the chatbot after clicking on it      |      X       |                    |                    |        |
| End of Conversation Survey Response (excluding nonresponses)      |             |                    |         X           |        |

#### Baseline KPI Values
* _Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective: Enhance Veteran Experience with the Chatbot
  - Key result: Rate of users clicking on chatbot: 5% or higher
  - Key result: Increase in rate of users responding "Yes" to end of conversation survey 
- Objective: Improve Veterans' access to information 🍋
  - Key result: Reduce the number of Veterans who are directed to offline channels (phone, in-person) for basic information access (by 10%?) 🍋
---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*
- Veterans will find it valuable to engage with the Chatbot experience on the new pages.
- Payload of the Chatbot will not affect the performance and the load times of the page the Chatbot is placed on.
- Chatbot will need to meet the accessibility standard of the new page it is placed on.
- To place the Chatbot on [About VA health benefits](https://www.va.gov/health-care/about-va-health-benefits/) page, the current knowledge base of the Chatbot need not be updated. 

## Solution Approach

- *What are you going to build now, and why have you decided to start there?*
  - As a first thin slice, we are placing a floating chatbot on the [About VA health benefits](https://www.va.gov/health-care/about-va-health-benefits/). This will enable us to support the veterans who come to this FAQ page and provide quick answers with the Chatbot.
  - The Chatbot to be always sticking on the lower right corner. The Veterans can minimize the Chatbot as needed. The history of the conversation with the Chatbot will be available to be refered only for the current session.
  - We will support this on desktop, mobile & tablets.
  - We will also release/expose the Chatbot on the new page to top 5% of the users. 
- *Why this solution / approach over other solutions / approaches?*
  - This soultion will help us understand how the Veterans interact and engage with the Chatbot on a new page and monitor the performace and load times of the page. With insights gatehred form this luanch, we hope to improve the Chatbot with new features and also tweak it to place it on more pages.
- *What have you explicitly decided to not include in this initial set of functionality, and why?*
  - We will not include the ability to save and/or email the transcript/conversation to the Veterans, as this is capability does not already 
- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*
  - After the launch on the [About VA health benefits](https://www.va.gov/health-care/about-va-health-benefits/) page, we will start placing the Chatbot on more pages on va.gov and also add more Chatbot features such as saving/emailing the transcript to the Veterans.

### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)*

- Initiative | [Link to Initiative Brief](#)

--- 

## Launch Strategy
- We anticipate that the move to ubiquity on VA.gov will naturally increase discoverability of the Chatbot and do not plan to conduct marketing at this time.
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/Floating%20Chatbot%20release%20plan)

## Launch Dates
- *Target Launch Date*
  - Q2 2025 🍋
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

---

## Solution Narrative

### Current Status
- Currently, the Chatbot lives on the [VA Chatbot product](https://www.va.gov/contact-us/virtual-agent/) page and is visible to 100% of the traffic visiting this page. It supports general information about a myriad of helath topics as well as authenticated flows for prescriptions and refills and claims status information.
- The Chatbot is static on the page and does not float as the Veteran scrolls thorugh the page and cannot be minimized.

### Key Decisions 🍋

---
   
## Screenshots

### Before
Contact Us page
![image](https://github.com/user-attachments/assets/68146255-63cb-4d68-8661-0a5daa9dc118)


### After
Desktop - Inactive

![image](https://github.com/user-attachments/assets/d6128e1a-f650-42be-919d-4b7a6cb46d4c)

Desktop - active

![image](https://github.com/user-attachments/assets/5f426bb1-2c6e-4566-b474-087d924fd81b)

Mobile - Inactive

![image](https://github.com/user-attachments/assets/7621f0c1-7b85-47ee-8ab9-ccb51abd36a4)

Mobile - Active

![image](https://github.com/user-attachments/assets/89732b9e-1546-4ec4-836c-775fc91ec30a)


---

#### Communications

<details>
  
- Team Name: Virtual Agent
- GitHub Label(s): Virtual-Agent
- Slack channel: #va-chatbot-public
- Product POCs: 
   - Nathalie Rayter (Product Owner)
   - Christina Schuler (Project Manager)
   - Vrushali Patil (Product Manager)
   - Anita Dewitt (Tech Lead) 

</details>

#### Team Members

<details>
 
 - DEPO Lead: 
 - PM: 
 - Engineering:
 - Research/Design: 
 
</details>


#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
 
</details>

---
## Previous Work

How might we meet the chatbot expectations of Veterans by moving the Chatbot from its current, static location?

* The first iteration of the Virtual Agent Chatbot was first built as a Proof of Value in Spring 2021 and resided on a page wholly devoted to facilitate user research on this beta version of the chatbot. This page communicated the fact that the Chatbot was in beta testing, expectations when using the chatbot, explicit instructions on how to use the chatbot with a screen reader, and privacy information.
* On March 2, 2022, the Chatbot was launched more widely to the Veteran population via a link to this same page on the VA.gov Contact Us page. 
* Since then, there have been more than 110,000 chatbot interactions from new and returning users.
* Clearly the Chatbot is no longer in beta testing and it is our desire to move the Chatbot off its standalone page, and make it more widely available on VA.gov. We intend to do user research to determine the best pages this will be, and the mechanism by which the Chatbot will be displayed on these pages.
* All previous measurable outcomes contained within the previous Product Outline still hold, but specifically for this initative an emphasis will be placed on these Digital Experience measures:
  * Usage of digital, self-service tools
  * Completion rate of online transactions (specifically with clickthroughs to linked existing VA.gov content, use of the Chatbot's Claims and Appeals feature, and use of the Chatbot's forthcoming Sign-in Support feature)
  * Veteran satisfaction with VA.gov

**Related/Associated product(s)**
- [Virtual Agent Chatbot Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/Virtual_Agent_Product_Outline.pdf)
- [Phase 2 Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/Virtual_Agent_Product_Outline_Phase2.pdf)

## Problem
* Currently, multiple clicks are required to reach the Chatbot.
* In order to acheive the original goal stated in our initial Product Outline, "...help the Veteran to self-serve and find information more easily", we wish to make the Chatbot more readily available by placing it in a more prominent position within VA.gov.
* On October 6th, the link to the Chatbot on the Contact us page was moved from its Info Alert Box at the top of Contact Us to an H2 section further down the page. User interactions dropped by approximately 21%. 
* By moving the Chatbot, we hope to avoid this problem in the future, by making the Chatbot always avaiable at the same location, ready to serve Veterans and help them navigate VA.gov.
* Additionally by placing the Chatbot more prominently on VA.gov, it could serve as a way to promote or serve as an entry point for the numerous other VA.gov features currently available on the website.

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
- We are currently in the process of building a custom Domo dashboard for the Chatbot page in this ticket: https://github.com/department-of-veterans-affairs/va.gov-team/issues/45133. We would take the KPIs tracked in that dashboard and extend them in an updated report to all the pages that the Chatbot is placed on. We would use the data gathered from the initial custom Domo Dashboard for a single page to extrapolate the baselines and targets for how we would expect the Chatbot to perform on multiple pages. We would be interested at how the Chatbot performs at the micro level (in isolation on indivdiual pages) and at the macro level (how it's affecting performance of VA.gov and in aggregate). To see all metrics being tracked, please see that ticket.
- We would also closely monitor the KPIs and dashboards of the pages that the Chatbot is placed on to see if there are any adverse affects on the Ease of Use, Task Completion, Findability, and User Satisfaction of those individual pages. Upon launch we would compare day over day the performance of pages the Chatbot is placed on by looking at Google Analytics and Domo reports such as this dashboard: https://va-gov.domo.com/page/80919003.
---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - The Chatbot repurposes content and features that already exists within VA.gov. Will users find value in being able to reach these experiences from other pages on VA.gov?
  - Do we risk distracting users from the main call-to-actions on VA.gov pages if the Chatbot is avaialble on those pages.
  - Will users be distracted by the Chatbot and cause decreased engagement, interactions, task completions, user satisfaction with the page the Chatbot is on.
- **Usability Risks** (can people figure out how to use it):
  - The Chatbot currently resides on its own page where it is the main focus of the page. When we move the Chatbot to other pages, where some action will be required to engage with the Chatbot (by clicking on a button to expand a flyout, or accordion, or maximize it, etc.) will we still have the same level of engagement?
  - Careful research will be required to ensure the accessibiltiy of existing pages isn't compromised by placing the Chatbot on them. Additionally the accessibility of the Chatbot will need to be considered as control is passed from the main page to the Chatbot.
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - The Payload of the Chatbot widget will need to be monitored so as not to affect the performance and load times of the pages where the Chatbot is on.
  - Placement of the Chatbot react component will need to integrate well with the current VA.gov frontend architecture.
  - Authentication use cases within the Chatbot will need to be considered given the current Identity process.
  - Working with the Platform teams to understand the current landscape of the VA.gov website, legacy pages, banners, etc. and how it might affect this implementation.

<!--
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
-->

- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - We will need to coordinate with the Public Websites and Sitewide team, if we are the team who will be responsible for making the changes.
  - 508 Office will need to review.
  - Proper marketing to announce the Chatbot being more widely available will be required.
<!--
  - Examples: 
    - VA stakeholder testing, marketing, compliance requirements 
-->

### What're you building
> *What's in scope for you to build with this initiative? Describe key features/flows. 
> *What have you explicitly decided to **not** include and why?*
> *How does this solution address your Assumptions & Risks?

- Functionally, we will be moving the Chatbot from the single page it resides on, to other pages on VA.gov. The exact placement and mechanism by which the Chatbot will be available on these pages is still to be determined by user research and tech feasbility. 
- We may build a feature toggle mechanism to show / hide the Chatbot on VA.gov pages.
- Responsiveness on the mobile web version of VA.gov will be addressed.
- All critical accessibility issues on the Chatbot will be addressed.

- Placement of the chatbot outside of the main VA.gov domain will not be included.  
- Integration with any other functionality within VA.gov will not be included.

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*
- Coordination with the Contact Center in order to update existing user guides for the Chatbot, as well as prepare them for whatever impact moving the chatbot may have on their call volume.
- Working with Marketing Teams to prepare the Veteran community on Chatbot capabilities (what it can and cannot do) and expecation setting.

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket: https://github.com/department-of-veterans-affairs/va.gov-team/issues/48652

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)
* Release Plan will be finalized after project progresses. Key activities include:
  1. Conducting user research on placement of the Chatbot
  2. Identify an initial VA.gov page we can launch a Proof of Concept
  3. Development
  4. Launch on Proof of Concept to % of users
  5. Observe Chatbot performance, make necessary changes, increase availability of Chatbot
  6. Go/No Go to 100% launch of Moved Chatbot

#### Initiative Launch Dates
- *Target Launch Date*
  - Q2 2023
- *Actual Launch Date* 
  - tbd in Q1 2023 Chatbot feature prioritization workshop

---
   
## Screenshots

### Before
![image](https://user-images.githubusercontent.com/24488607/200672469-79ff7d57-d492-4221-876e-ba7202356b9b.png)

### After

- For illustrative purposes only. Further User Research and discussions required on placement and which pages we will move the Chatbot to.

![image](https://user-images.githubusercontent.com/24488607/200673802-d7335cd7-4c60-42f2-993c-5b6963f87836.png)


---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: Virtual Agent
- GitHub Label(s): Virtual-Agent
- Slack channel: #va-virtual-agent-public
- Product POCs: 
   - Luciana Morais (Product Owner)
   - Alina Murphy (Project Manager)
   - Ian Santarinala (Product Owner)
   - Karan Krishnani (Tech Lead)

</details>


#### Stakeholders
*What offices/departments/teams/people are critical to make this initiative successful?*

<details>
  
Public websites team; Call Centers: Chante Lantos-Swett; 
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
