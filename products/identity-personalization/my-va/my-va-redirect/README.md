# My VA Redirect Initiative Brief

**Last updated: November 29, 2022 (updates to success metrics)**

### Table of Contents
- [Outcome Summary](#outcome-summary)
- [Problem](#problem)
- [Measuring Success](#measuring-success)
- [Discovery](#discovery)
- [Launch Planning](#launch-planning)

---
## Outcome Summary
Evaluate how My VA performs as a personalized logged in homepage via redirect. This is not an initiative to replace the existing logged in homepage. Veterans would be redirected to My VA upon logging in from the VA.gov homepage in order to provide them a more immediate personalized experience.

**Related/Associated product(s)**
- My VA | [product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va#product-outline-my-va) 

## Problem
Our mission is to elevate Veterans’ personal and benefit information on VA.gov so that they can more easily understand their statuses, complete necessary tasks and take action where needed. The current logged in homepage on VA.gov lacks elements of personalization that enable Veterans to access the information they need and perform tasks as effectively and efficiently as possible.

---
## Measuring Success

### Key Performance Indicators (KPIs)

#### [Next clicks and exits from My VA](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_r.tabId=navigationsummary&_r.drilldown=analytics.pagePath:www.va.gov~2Fmy-va~2F&navigationsummary-keySelector.searchTerm=~2Fmy-va&explorer-table.plotKeys=%5B%5D/)

**Hypothesis**: Clicks from My VA to the homepage will increase if people can not find a link on My VA that they can find on the homepage.

**KPI**
We do not see an increase in clicks back to the homepage from My VA, as measured by where the homepage ranks releative to other pages for next clicks.

| |1 week pre-launch (8/22 - 8/28) | 1 week post-launch to 25% (8/29 - 9/4) |1 week post-launch to 50% (9/6 - 9/11) |1 week post-launch to 100% (9/12 - 9/18)| 1 month post-launch to 100% (10/6 - 10/12)| 3 months post-launch to 100% (12/6 - 12/12)|
|-------|-----------|-----------|-----------|-----------|-----------|-----------|
|Rank of the homepage as a next click from My VA|#7|#7|#6|#6|#6|TBD|

**KPI** 
We do not see an increase in percentage of users exiting VA.gov entirely from My VA.

||1 week pre-launch (8/22 - 8/28) | 1 week post-launch to 25% (8/29 - 9/4) |1 week post-launch to 50% (9/6 - 9/11) |1 week post-launch to 100% (9/12 - 9/18)|  1 month post-launch to 100% (10/6 - 10/12)| 3 months post-launch to 100% (12/6 - 12/12)|
|-------|-----------|-----------|-----------|-----------|-----------|-----------|
|Exits from VA.gov from My VA|6.1%|5.7%|6.01%|5.72%|5.71%|TBD|

#### [Top interactions from My VA](https://va-gov.domo.com/page/1167851935)

**Hypothesis**: If a link lives on the homepage and My VA, clicks into those links from My VA will increase.

**KPI**: We see a 25% increase or greater for clicks into the following links:

|Link name | # of clicks 1 week pre-launch (8/22 - 8/28) | # of clicks 1 week post-launch to 25% (8/29 - 9/4) |# of clicks 1 week post-launch to 50% (9/6 - 9/11) | # of clicks 1 week post-launch to 100% (9/12 - 9/18) |  # of clicks 1 month post-launch to 100% (10/6 - 10/12)|  # of clicks 3 months post-launch to 100% (12/6 - 12/12)|
|----|-----------|-----------|-----------|-----------|-----------|-----------|
|View claim ("view details")|21,041|29,622|29,265|52,218|53,074|TBD|
|Manage all claims and appeals ("check your claim or appeal status")|20,359|32,265|35,643|72,042|78,661|TBD|
|Schedule and view your appointments|1,950|2,694|3,136|5,146|5,069|TBD|
|View your messages|6,704|10,432|12,035|22,114|21,172|TBD|
|Refill and track prescriptions|4,063|6,734|8,556|16,510|15,830|TBD|
|View your payment history|17,107|28,115|18,796|29,365|28,827|TBD|

#### [Searches initiated from My VA](https://va-gov.domo.com/page/1167851935)

**Hypothesis**: If a link lives on My VA, there will be no increase in searches for this information from My VA or overall.

**KPI**: For searches initiated from My VA, searches for information found on both My VA and the homepage will stay the same or decrease.

|Search term| Rank 1 week pre-launch (8/22 - 8/28) |Rank 1 week post-launch to 25% (8/29 - 9/4) |Rank 1 week post-launch to 50% (9/6 - 9/11) |Rank 1 week post-launch to 100% (9/12 - 9/18)|Rank 1 month post-launch to 100% (10/6 - 10/12)|Rank 3 months post-launch to 100% (12/6 - 12/12)|
|-------|-----------|-----------|-----------|-----------|-----------|-----------|
|Disability rating, rating, disability letter, or disability (whichever appears first)|26|39|28|25|27|TBD|
|Claim or Claims (whichever appears first)| 23| 23 |16|12|13|TBD|
|Payment or payment history (whichever appears first)|5|12|17|20|18|TBD|

**Hypothesis**: If a link does not live on My VA that does live on the homepage, there will be an increase in searches for this information from My VA or overall.

**KPI**: For searches initiated from My VA, searches for information found on the homepage but NOT My VA will increase.

|Search term| Rank 1 week pre-launch (8/22 - 8/28) |Rank 1 week post-launch to 25% (8/29 - 9/4) |Rank 1 week post-launch to 50% (9/6 - 9/11) |Rank 1 week post-launch to 100% (9/12 - 9/18)|Rank 1 month post-launch to 100% (10/6 - 10/12)|Rank 3 months post-launch to 100% (12/6 - 12/12)|
|-------|-----------|-----------|-----------|-----------|-----------|-----------|
|DD214|4|4|3|2|3|TBD|
|Letter, letters, or benefit letter (whichever appears first)|2|2|2|3|2|TBD|
|GI bill|9|10|14|19|23|TBD|

#### [Logged-in searches overall](https://analytics.google.com/analytics/web/#/report/content-site-search-search-terms/a50123418w177519031p176188361/explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=50&_.useg=useri0ZvPaPpQKyUHGrYCFPigw/)

**Hypothesis**: If a link lives on My VA, there will be no increase in searches for this information from My VA or overall.

**KPI**: For logged-in users, searches for information found on both My VA and the homepage will stay the same or decrease for all VA.gov searches.

|Search term| Rank 1 week pre-launch (8/22 - 8/28) |Rank 1 week post-launch to 25% (8/29 - 9/4) |Rank 1 week post-launch to 50% (9/6 - 9/11) |Rank 1 week post-launch to 100% (9/12 - 9/18)|Rank 1 month post-launch to 100% (10/6 - 10/12)|Rank 3 months post-launch to 100% (12/6 - 12/12)|
|-------|-----------|-----------|-----------|-----------|-----------|-----------|
|Disability rating, rating, disability letter, or disability (whichever appears first)|5|8|12|16|18|TBD|
|Claim or Claims (whichever appears first)|25|26|33|30|30|TBD|
|Payment or payment history (whichever appears first)|7|11|34|31|25|TBD|

**Hypothesis**: If a link does not live on My VA that does live on the homepage, there will be an increase in searches for this information from My VA or overall.

**KPI**: For logged-in users, searches for information found on the homepage but NOT My VA will increase for all VA.gov searches.

|Search term| Rank 1 week pre-launch (8/22 - 8/28) |Rank 1 week post-launch to 25% (8/29 - 9/4) |Rank 1 week post-launch to 50% (9/6 - 9/11) |Rank 1 week post-launch to 100% (9/12 - 9/18)|Rank 1 month post-launch to 100% (10/6 - 10/12)|Rank 3 months post-launch to 100% (12/6 - 12/12)|
|-------|-----------|-----------|-----------|-----------|-----------|-----------|
|DD214|15|12|5|4|4|TBD|
|Letter, letters, or benefit letter (whichever appears first)|18|17|9|7|17|TBD|
|GI bill (or related terms)|24|25|39|34|29 ("Chapter 35")|TBD|

#### Medallia feedback

**[My VA Medallia report](https://va-gov.domo.com/page/825663825)**

**KPI**: There isn't a drop in satisfaction as a result of the redirect.

|| 3 months pre-launch (8/22 - 8/28) |3 months post-launch to 100% (12/12)|
|-------|-----------|-----------|
|My VA rating|3.3|TBD|


---

## Discovery
### Assumptions/Risks
  #### Risk types
  <details>
  <summary>Click to expand</summary>
  
  - Value Risk: will people use it?
  - Usability Risk: can people figure out how to use it
  - Technical/Feasibility Risks: can we build it with available tech/data?
  - Organizational Viability Risks/Constraints: will there be a positive organizational impact?
  </details>

| Risk Category | Risk | How will we validate/test/prep against this risk? | Comments |
|--------|--------|---------|---------|
| Value Risk | Will we be able to tell if people are using it? Does it meet expectations? | Ensure Medallia is in place, functioning properly to capture feedback | |
| Usability Risk| What will the nature of redirect be? How to do it in the least jarring way, and track that experience appropriately? | (POST MVP IMPLEMENTATION) Consider naming of page to make it clear to users; consider adding a loading image with message "loading your personalized experience", consider adding a prominent button/link to return to the current logged in home page, conduct generative research post-launch of redirect to get feedback |
|(Technical) Feasibility Risk| Can My VA handle traffic is the personalized logged in homepage?| Load testing on each credential type pre-launch and usability testing. Each of these mechanisms should have been load tested pre-launch in their own right anyway, but good to doubel check (will follow up with Tom) | |
|(Technical) Feasibility Risk| What is the nature of the redirect? | Identity team to add a feature toffle specific to the redirect, that team to manage the FE implementation to check for feature toggle and redirect users after login from the VA homepage to the My VA page. | 6/17 - Identity team implemented redirect and feature toggle on staging and prod, feature is entirely behind feature flag on prod until we are ready at which point our team will be able to control when we turn the redirect on for users for a phased launch.|
| Organizational Viability Risk/Constraint| Who do we need to get support/champions for us, who is going to be opposed? |   | |
| Usability Risk | We'll want to measure/track what will people do next?| Usability testing  | |
| Usability Risk | What do they need to do next and can they do it?| Usability testing  | |
| Usability Risk | Do all forms of login credentials function properly?| Usability testing  | |
|(Technical) Feasibility Risk| Will device type matter for redirect experience? | Usability test on mobile and desktop | |

### Solution Summary
For Veterans who login from the homepage, implement a redirect to send them to My VA instead of landing on the logged in homepage post login. Begin a phased launch of this redirect to 25% of Veterans for ~1 week and evaluate analytics. If we can not meaningfully glean insights from 1 week's worth of analytics, we'll monitor for an additional week. Based on inital phased rollout make adjustments to My VA as needed and then continue phased launch to 50% of users, similarly for approximately 1 week. Again, monitor and make adjustments as needed, and continue phased launch to 100% of users. Once we have achieved 100% rollout, monitor analytics closely for 1 month to evaluate performance. It is important to reiterate that this initiative is not a replacement of the existing logged in homepage.

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- [Collab cycle for Auth Exp My VA -- My VA Redirect](https://github.com/department-of-veterans-affairs/va.gov-team/issues/42582)
- [My VA redirect](https://github.com/department-of-veterans-affairs/va.gov-team/issues/41223) feature work epic

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Release Plan ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/my-va-redirect/launch-materials/my-va-redirect-release-plan.md)

#### Initiative Launch Dates
- Monday, 8/29/22 - 25%
- Tuesday, 9/6/22 - 50% (I've got some extra PTO around labor day and don't want to increase access while I'm out)
- Monday, 9/12/22 - 100%

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: Authenticated Experience My VA
- GitHub Label(s): my-va-redirect
- Slack channel: #accountexp-authexp
- Product POCs:

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
