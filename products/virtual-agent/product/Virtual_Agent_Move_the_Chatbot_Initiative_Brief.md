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
  - Key result: Increase in rate of users responding "Yes" to end of conversation survey 
- Objective: Improve Veterans' access to information 
  - Key result: Rate of users clicking on chatbot: 5% or higher
---

## Assumptions
*Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*
- Moving the Chatbot to a launchable button on the lower right hand corner on a webpage renders it discoverable by the Veteran.
- Veterans will find it valuable to engage with the Chatbot experience on the new pages.
- Payload of the Chatbot will not affect the performance and the load times of the page the Chatbot is placed on.
- Chatbot will need to meet the accessibility standard of the new pages it is placed on.
- To place the Chatbot on [About VA health benefits](https://www.va.gov/health-care/about-va-health-benefits/) page and its sub-pages, the current knowledge base of the Chatbot does not need an update. 

## Solution Approach

- *What are you going to build now, and why have you decided to start there?*
  - As a first thin slice, we propose placing the floating chatbot on the [About VA health benefits](https://www.va.gov/health-care/about-va-health-benefits/) page and its sub-pages. This will enable us to support the Veterans who come to this FAQ page and provide quick answers with the Chatbot. **NOTE: While we suggest this as initial placement, actual location(s) will be determined in collaboration with the VA.gov Platform team.**
  - The Chatbot to be always sticking on the lower right corner. The Veterans can minimize the Chatbot as needed. The history of the conversation with the Chatbot will be available to be refered only for the current session.
  - The Chatbot will load with the page-loads and wil remain an inactive state until the Veteran activates it by clicking on it.
  - We will support this on desktop, mobile & tablets.
  - We will persue an incremental release/launch process starting with 10% of the users to the selected pages.

- *Why this solution / approach over other solutions / approaches?*
  - This soultion will help us understand how the Veterans interact and engage with the Chatbot in the context of the new pages as well as monitor the performace and load times of those pages. With insights gatehred form this luanch, we hope to improve the Chatbot with new features and place it on more pages.
  - This approach is also supported by qualitative user reaseacrh that confirms that Veterans expect a ubiquitous floating chatbot.

- *What have you explicitly decided to not include in this initial set of functionality, and why?*
  - We will not include the ability to save and/or email the transcript/conversation to the Veterans, as this is capability does not already present in the current state of the Chatbot.
  - We will not contextualize the Chatbot's welcome message in this release.

- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*
  - After the launch on the [About VA health benefits](https://www.va.gov/health-care/about-va-health-benefits/) page and its sub-pages, we will start placing the Chatbot on more pages on va.gov and also add more Chatbot features such as saving/emailing the transcript to the Veterans.
  - Our approach to ubiquity will be in partnership with the Va.gov Platform team.

--- 

## Launch Strategy
- We anticipate that the move to ubiquity on VA.gov will naturally increase discoverability of the Chatbot and do not plan to conduct marketing at this time.
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/Floating%20Chatbot%20release%20plan.md)

## Launch Dates
- *Target Launch Date*
  - March 7th, 2025
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

---

## Solution Narrative

### Current Status
- Currently, the Chatbot lives on the [VA Chatbot product](https://www.va.gov/contact-us/virtual-agent/) page and is visible to 100% of the traffic visiting this page. It provides general information about VA benefits and services as well as authenticated flows for prescriptions and refills, and claims status information.
- The Chatbot is static on the page, does not float as the Veteran scrolls thorugh the page and cannot be minimized.

### Key Decisions
- In Q1 FY 2025 the Chatbot team implemented architectural changes (a.k.a Rootbot) to imrpove quality of intent matching to better serve veetrans. We belivee that this has improved the performance of the chatbot such that it is ready for a qider audience.

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
 
 - DEPO Lead: Nathalie Rayter
 - PM: Vrushali Patil
 - Engineering: Anita DeWitt
 - Research/Design: N/A
 
</details>


#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
Veteran Experience Services, VA.gov Platform team, CAIA
 
</details>
