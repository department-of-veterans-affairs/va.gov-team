## Initiative Brief – Home Page iteration March 2022

#### Overview

Our goal is to test ideas for making it easier to find and interact with the elements of the page that positively impact Veterans by improving the usefulness of what matters to them and removing clutter and distractions. ***These experiments are not going to be deployed in production, but rather on a publicly accessible subdomain of va.gov.***

We will work through the Collaboration Cycle to determine how to measure outcomes in a non-production environment.
  
 
---

## Outcome Summary
We have two primary hypotheses:
- By giving a recent and Veteran-relevant VAntage Point blog article much higher and more visible placement, Veterans will engage with the content significantly more (at least 100% increase in clicks).
- By promoting login through more visible placement of the CTA, we believe more Veterans will sign in and thereby receive a more personalized experience (KPIs TBD).

**Related/Associated product(s)**
- [Product](https://va.gov) | [Link to product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/home-page/readme.md)

## Problem

Sitewide Crew sees an opportunity to improve engagement with the main content on the VA.gov home page and drive specific behaviors:
- Veterans and their caregivers who use the unauthenticated version of VA.gov are getting a less personalized and useful experience.
- We have seen very little engagement with VAntage Point blog articles on the home page. 
- We also have found that very few of the Top Tasks in the 4 panels at the top of the page get meaningful levels of engagement. These massive blocks of text links have the potential to discourage engagement with the page in general.


## Desired User Outcomes
- Increased logins
- Increased engagement with VAntage Point content
- Less time spent on page before taking action

## Undesired User Outcomes
- Decrease in engagement with the most popular Top Tasks might be concerning, but would have to be viewed in context of overal engagement patterns.
- Search behavior should be monitored for signs that prominent placement of Search in the page is attracting users for use cases that would be better served by some other path/product.

## Desired Business Outcomes

- More traffic from the home page to the VAntage Point blog
- More logins

## Undesired Business Outcomes
- 

---
## Measuring Success

### Key Performance Indicators (KPIs)

**Because we are going to run this experiment on a subdomain of va.gov, we will need to work closely with the Analytics team to design the experiment and KPIs. We will need to design the experiment around a lack of historical data on subdomain traffic and a current lack of A/B testing capability.**

---

## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - The use of the home page itself is a given.
  - The case for change is very strong, given engagement gaps with the current design.
- **Usability Risks** (can people figure out how to use it):
  - It may be unclear that "Search" is searching content on VA.gov. The list of other search tools below complicates what exactly they're searching when they type something into that section.
  - The "Popular" heading may be unclear as to what exactly this list is for. (Popular what?)
  - The "other search tools" may be unclear as to where someone would actually be going when they click on those links, and what information they would find there.
  - There is a lot of copy in the "Browse benefits..." section. Users are likely just scanning the headings and not reading the copy. It could be generally overwhelming and create too much cognitive load to some users and they may ignore the section.
- **Feasibility Risks** (can we build it with available tech/data):
  - The idea of creating a “parallel” home page experience seems pretty straightforward but has not been tried before in recent memory. There are potential challenges to our ideas, including Analytics setup and Search API integration. Future CMS integration has not yet been explored for feasibility or level of effort.
  - Changes to the codebase are small and localized. The only external dependency relates to the Search component, but the implementation and functionality will be identical to the search that already exists in the header.
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - We may need the support of teams outside of OCTO-DE to get our experiment live on a va.gov subdomain.

### Prioritization
> *Describe how the team will consider competing solution hypotheses/ideas. Prioritize them accounting for reach, impact/value, effort, and confidence.*

Given the strong evidence for change and experimental nature of our work, we intend to implement several ideas at once. Further refinement will be possible later, especially when any of these changes is moved to production.

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

Since it’s not going to production, this is a future concern.

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

Since it’s not going to production, we don’t have external constraints.

* [Release Plan template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before (Current)
<details>
<summary>
<img width="461" alt="image" src="https://user-images.githubusercontent.com/4054752/159072462-61d0404c-56c7-4aff-a096-c4b010911c2e.png">
</details>

### After (Still on VA.gov subdomain)
<details>
<summary> First build - March 2022 </summary>
 
![First build design](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/images/va-home-page-first-build.png)

</details>
---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name:  CMS-Offices
- GitHub Label(s): CMS-Offices, homepage
- Slack channel:  #cms-offices
- Product POCs:  Dave Conlon (VA Sitewide Crew), Wes Rowe (Sitewide CMS team)

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


