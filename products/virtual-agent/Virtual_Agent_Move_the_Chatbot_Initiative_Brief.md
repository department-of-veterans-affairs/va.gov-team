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
