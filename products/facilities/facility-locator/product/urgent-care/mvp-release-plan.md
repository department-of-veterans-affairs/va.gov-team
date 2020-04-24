# Urgent Care MVP Release Plan

## Go Live!
- Code complete: 2/20/2020
- Urgent care alert:  3/17/2020

### Planning:
**Post-launch KPI 1**- Rate of search refinements for Community Care compared to VA facility searches

- Between Oct 16, 2019-Nov 14, 2019: Baseline rate of search refinements
  - 3.71% CCare 
  - 2.20%  health

**Post-launch KPI 2**- % of users who complete Urgent Care searches that end up viewing benefit page (unauth)

- Between Oct 16, 2019-Mar 17, 2020: Baseline average of 24,000/month (n=119,939)

**Post-launch KPI 3**- Time to return search results

- November 2019 baseline average = 3.49 sec (all facility types)

### Milestone 1 post-launch results:
**Post-launch KPI 1**- Rate of search refinements for Community Care compared to VA facility searches

- Between Feb 1, 2020-March 10, 2020: Rate of search refinements
  - 4.95% CCare provider
  - 9.75% urgent care
  - 15.22% pharmacy
  - 2.4% health 

**Post-launch KPI 2**- % of users who complete Urgent Care searches that end up viewing benefit page (unauth)

- As of March 10, new data is not yet available

**Post-launch KPI 3**- Time to return search results

- Between Feb 1, 2020-Mar 8, 2020: average = 3.31 sec (all facility types)

### Milestone 2 post-launch results:
**Post-launch KPI 1**- Rate of search refinements for Community Care compared to VA facility searches

- Between March 11, 2020-April 14, 2020: Rate of search refinements
  - 7.18% CCare provider
  - 7.05% urgent care
  - 15.8% pharmacy
  - 2.76% health 

**Post-launch KPI 2**- % of users who complete Urgent Care searches that end up viewing benefit page (unauth)

-  March 17 - April 14, 2020: 4,219 users

**Post-launch KPI 3**- Time to return search results

- Between March 11-April 13, 2020: average = 4.38 sec (all facility types)

**Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?**

- Based on [user feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/research/user-research/FL-Search-march2020/research-findings.md), we are planning iterations to the presentation of search results and changes to the user-map interaction. 


## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

**How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?**

The increase in search refinements is surprising as we expected them to decrease. We've uncovered several possible causes:
- Office of Community Care stakeholders were not opted out and routinely visit the site to see new changes. They may be artifically increasing the rate of refinement with their testing. 
- Urgent care searches require a selection of "VA service type" (VA urgent care of Community urgent care (in VA's network). If Veterans are unclear which category to choose, they may be searching both. This would count as refinement.
- We were initially surprised about the clickthrough rate for the urgent care benefit. However, learning that non-Veteran users continue to search with the legacy workflow, our baseline rate may not represent Veteran users only. 
- There was an unexpected finding with time-to-return search results. The analytics implementation was capturing any 1 of the 7 values (including all) within the dropdown based on the parameters within the URL (i.e facilityType=health). Anything not within the dropdown was mapped to "unknown" and contributed a fair amount of traffic. Based on discussions with Jon Wehausen, the ONLY way we would get an unknown (since the URL is controlled by a dropdown value), is by the user manually changed facilityType=x in the URL bar to something that isn't one of the six values within the dropdown, likely a tech-savvy non-Veteran user. We decided to continue to monitor this occurrence over time. 

**What qualitative feedback have you gathered from users or other stakeholders, if any?**

Aricka Lewis and I interviewed a subject matter expert from the Office of Community Care to learn more about the community care journey for Veterans.
Insights:
- Although VA.gov is built for Veteran use, community providers or patient advocates also use it to find providers for referrals.   Their search process tends to use the legacy workflow, which may also be contributing to the increase in refinements.
  - Between 3/11 and 4/19, there were 25,553 unique searches using the new workflow (site search category = NonVAUrgentCare). This is about 5% of the total searches. By comparison, there were 6,648 searches using the legacy workflow during the same time period, representing 1.32% of the searches during that time.
- Urgent care facilities either fill the urgent care prescription or send it to a specific pharmacy for filling. Veterans do not search for for their own pharmacies.

**Which of the assumptions you listed in your product outline were/were not validated?**

_As a Veteran using the Tricare or Optum network area, I need to find a retail pharmacy so that I can have fill my prescription._

**How might your product evolve now or in the future based on these results?**
- We needed to hide the community pharmacy (in VA's network) search option due to the data issues at the source. Returning this functionality will be low priority based on our findings about Veteran pharmacy searches. 
- In addition to the ux enhancements mentioned above, we plan to return urgent care search results with a single list containing both VA facilities and community urgent care providers as a result of Veteran feedback and search refinement data. 

## VSA Initiative Impact Review
[Link](https://docs.google.com/presentation/d/1FrAFdI8gYC3kuyyMKaiq6_fjui9yrWA946G_wNGHny4/edit?usp=sharing)
