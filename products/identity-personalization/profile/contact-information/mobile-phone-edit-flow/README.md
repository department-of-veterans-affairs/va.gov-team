# Project Outline: Mobile Phone Edit Flow


## Overview
*After you've explored the problem and through testing / hypothesis have identified the ideal solution, write up one sentence describing the solution you'll be creating.*

We will re-engineer the workflow for updating a user's mobile phone number. 

 - *Product: VA.gov Profile*
   - *Initiatives: enhance the user experience when updating mobile phone number. 

## Problem Statement
*In a couple of sentences, describe the Who, What, Why, and Where of the challenge / pain point you seek to address. [Here's a sample problem statement definition activity you can try on your team to help generate this](https://www.atlassian.com/team-playbook/plays/problem-framing)*

Currently a mobile phone number is required in order to access the notification settings within the profile. For users who do not have a mobile phone number, the profile immediately shows the users a message advising them to input a mobile number to access the notification settings:

![image](https://user-images.githubusercontent.com/129431463/236836710-59d5264e-91ce-4da8-8622-220e88da1ac2.png)

If they select the link today, this jumps them to the contact information and scrolls them down the screen to the mobile phone number section where they then have to select edit and input their information followed by the need to navigate BACK to the original page they wanted to use, Notification Settings. This is a very jarring process, many users were confused by the jump from one part of the profile to another and it requires the user to remember several layers of information in order to update their profile and return to their original workflow.  

How we might resolve this would be through a reimagined flow in order to reduce confusion to avoid disorienting the user. 
 
## Desired User Outcomes
We're looking to design a new workflow that will allow a user to input their mobile phone without jumping to different parts of the profile thereby reducing confusion and streamlining the process for gaining access to the Notification Settings. 

Ideally, when a user navigates to the Notification Settings page and they see the CTA requiring them to input a mobile number, clicking the "Add a mobile phone number to your profile" link will open a new page that focuses exclusevly on editing the mobile number. 

This new process avoids context switching that exists within the old workflow. 

Additionally, this new workflow could be used for updates to other infomration within the profile. 
Users could be on different parts of VA.gov and we could enable this sort of flow to update information in the profile without forcing users to navigate to the profile and locate the information. 

- *Why would a user want to use this?*
Users will use this when they need to add a mobile phone number in order to access the Notification Settings within the Profile 

- *With this problem solved, what should users be able to do/achieve that they couldn't before?*
Users will more easily be able to update their mobile phone number in order to make use of the Notification Settings available within the Profile. 

## Undesired User Outcomes


## Desired Business Outcomes

- *Why would your business want this to exist?*
This is a way to simplify updates that reduces complexity for the end user. This update helped memory impared veterans when engaging with the site. 

- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*
We'll hopefully see a reduced number of calls to the VA where users are seeking support to figure out how to update their Notification Settings. 

## Undesired Business Outcomes


---
## Measuring Success


### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_
* _**Limit 5-6 KPIs per product**__

| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| KPI      |             |                    |                    |        |
| KPI      |             |                    |                    |        |

#### Baseline KPI Values
* _Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective:
  - Key result: 
  - Key result: 


---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

## Solution Approach

- *What are you going to build now, and why have you decided to start there?*
- *Why this solution / approach over other solutions / approaches?*
- *What have you explicitly decided to not include in this initial set of functionality, and why?*
- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*

### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)*

- Initiative | [Link to Initiative Brief](#)

--- 

## Launch Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

---

## Solution Narrative

### Current Status

### Key Decisions

---
   
## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name: 
- GitHub Label: 
- Slack channel: 
- Product POCs:
- Stakeholders: 

</details>

#### Team Members

<details>
 
 - DEPO Lead: Chante Lantos-Swett (in for Samara Strauss) 
 - PM: Travis Cahill
 - Engineering: Adam Whitlock [FE]
 - Research/Design: Liz Lants
 
</details>


#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
 
</details>

# Collab Cycle Ticket Questions:

1. Will your work result in visible changes to the user experience? **Yes**
Examples of visible changes include:
**A new input page with similar design elements used accross the profile ** 
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/3945dc61-faa2-433b-86ae-36a404d6bae9)


Examples of no visible changes include:
Changes to code that the user won’t see
Changes to accessible labels (aria-label, aria-labelledby, aria-describedby)

2. Are you doing research with VA.gov users? **Yes** Well i think we did research and that's what made us make this change., need to find the link to the research
We ask this question to determine if a research review is necessary.
Examples of research with VA.gov users include:
Usability testing 
User surveys
Card sorting

3. Will your work involve changes to: (select all that apply)
Tools, applications and dynamic pages*
Static pages**
Both
Other

*For tools and applications, take into account if any static page entry points will need updates.

**Please review the Static vs Dynamic guidance.

4. Does your product/feature have Google Analytics tracking and a KPI dashboard in Domo?
We ask this question to determine if Analytics will need to be involved in your Collaboration Cycle reviews, and if an Analytics Request is necessary.

5. Do you need to capture any additional analytics or metrics?
We ask this question to determine if Analytics will need to be involved in your Collaboration Cycle reviews, and if an Analytics Request is necessary.

Kickoff artifacts
It is the Product Manager’s responsibility to ensure the Product Outline is attached to the ticket.
The VFS team is responsible for providing all relevant and up-to-date links, screenshots, images, and designs of the product's as-is version.
