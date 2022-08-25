# Proposal for evaluating the redirect from the homepage to My VA after login

Last updated May 5, 2022

## Plan overview

This is the high level proposal for evaluating how well My VA performs once we start redirecting users to it who login from the homepage. **This is not a plan for My VA to entirely replace the existing homepage**. Conversations on how to handle the VA.gov homepage in a logged-out vs. logged-in state are still ongoing.

- Start transition after the "Benefit payments & debts" module on My VA launches (target for transition: June 2022).
- For people who login **from the homepage**, redirect them to My VA instead of keeping them on the homepage. Launch this to 25% of users for ~1 week, then evaluate analytics. If we can not meaningfully glean insights from 1 week's worth of analytics, we'll monitor for an additional week.
- Determine next steps/tweeks. If necessary, make updates and changes to My VA before next phase of launch.
- Launch to 50% of users for ~1 week, then evaluate analytics. If we can not meaningfully glean insights from 1 week's worth of analytics, we'll monitor for an additional week.
- Determine next steps/tweeks. If necessary, make updates and changes to My VA before next phase of launch.
- Launch to 100% of users for ~1 month, then evaluate analytics. If we can not meaningfully glean insights from 1 week's worth of analytics, we'll monitor for an additional week.
- Determine next steps/tweeks. If necessary, make updates and changes to My VA.

## Analytics to monitor

### [Next clicks from My VA](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p184624291/_r.tabId=navigationsummary&_r.drilldown=analytics.pagePath:~2Fmy-va~2Findex.html&navigationsummary-keySelector.searchTerm=~2Fmy-va~2F/)

**Hypothesis**: Clicks from My VA to the homepage will increase if people can not find a link on My VA that they can find on the homepage.

**KPI**: We see less than a 10% increase or no increase in clicks back to the homepage from My VA.

|Metric|1 week pre-launch | 1 week post-launch to 25% | 1 week post-launch to 50%| 1 week post-launch to 100%|
|-------|-----------|-----------|-----------|-----------|
|Clicks to the homepage from My VA|TBD|TBD|TBD|TBD|

### [Top interactions from My VA](https://analytics.google.com/analytics/web/#/report/content-event-pages/a50123418w177519031p176188361/explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePath:www.va.gov~2Fmy-va~2F,analytics.eventCategory:Interactions/)

**Hypothesis**: If a link lives on the homepage and My VA, clicks into those links from My VA will increase.

**KPI**: We see a 25% increase or greater for clicks into the following links:

|Link name | # of clicks 1 week pre-launch | # of clicks 1 week post-launch to 25% |  # of clicks 1 week post-launch to 50%|  # of clicks 1 week post-launch to 100%|
|----|-----------|-----------|-----------|-----------|
|View claim|TBD|TBD|TBD|TBD|
|Manage all your claims and appeals|TBD|TBD|TBD|TBD|
|View all appointments|TBD|TBD|TBD|TBD|
|View all messages|TBD|TBD|TBD|TBD|
|View all prescriptions|TBD|TBD|TBD|TBD|
|View all payments|TBD|TBD|TBD|TBD|

### [Searches initiated from My VA](https://analytics.google.com/analytics/web/#/report/content-site-search-pages/a50123418w177519031p176188361/explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=50&_r.drilldown=analytics.searchStartPage:www.va.gov~2Fmy-va~2F/)

**Hypothesis**: If a link lives on My VA, there will be no increase in searches for this information from My VA or overall.

**KPI**: For searches initiated from My VA, searches for information found on both My VA and the homepage will stay the same or decrease.

|Search term| Rank 1 month pre-launch |Rank 1 week post-launch to 25% | Rank 1 week post-launch to 50%| Rank 1 week post-launch to 100%|
|----|-----------|-----------|-----------|-----------|
|Disability rating|TBD|TBD|TBD|TBD|
|Rating|TBD|TBD|TBD|TBD|
|Disability|TBD|TBD|TBD|TBD|
|Claim(s)|TBD|TBD|TBD|TBD|
|Payment|TBD|TBD|TBD|TBD|
|Payment history|TBD|TBD|TBD|TBD|

**Hypothesis**: If a link does not live on My VA that does live on the homepage, there will be an increase in searches for this information from My VA or overall.

**KPI**: For searches initiated from My VA, searches for information found on the homepage but NOT My VA will increase.

|Search term| Rank 1 week pre-launch |Rank 1 week post-launch to 25% | Rank 1 week post-launch to 50%| Rank 1 week post-launch to 100%|
|----|-----------|-----------|-----------|-----------|
|DD214|TBD|TBD|TBD|TBD|
|Letter|TBD|TBD|TBD|TBD|
|Benefit letter|TBD|TBD|TBD|TBD|
|GI bill|TBD|TBD|TBD|TBD|

### [Logged-in searches overall](https://analytics.google.com/analytics/web/#/report/content-site-search-search-terms/a50123418w177519031p176188361/explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=50&_.useg=useri0ZvPaPpQKyUHGrYCFPigw/)

**Hypothesis**: If a link lives on My VA, there will be no increase in searches for this information from My VA or overall.

**KPI**: For logged-in users, searches for information found on both My VA and the homepage will stay the same or decrease for all VA.gov searches.

|Search term| Rank 1 week pre-launch |Rank 1 week post-launch to 25% | Rank 1 week post-launch to 50%| Rank 1 week post-launch to 100%|
|----|-----------|-----------|-----------|-----------|
|Disability rating|TBD|TBD|TBD|TBD|
|Rating|TBD|TBD|TBD|TBD|
|Disability|TBD|TBD|TBD|TBD|
|Claim(s)|TBD|TBD|TBD|TBD|
|Payment|TBD|TBD|TBD|TBD|
|Payment history|TBD|TBD|TBD|TBD|

**Hypothesis**: If a link does not live on My VA that does live on the homepage, there will be an increase in searches for this information from My VA or overall.

**KPI**: For logged-in users, searches for information found on the homepage but NOT My VA will increase for all VA.gov searches.

|Search term| Rank 1 week pre-launch |Rank 1 week post-launch to 25% | Rank 1 week post-launch to 50%| Rank 1 week post-launch to 100%|
|----|-----------|-----------|-----------|-----------|
|DD214|TBD|TBD|TBD|TBD|
|Letter|TBD|TBD|TBD|TBD|
|Benefit letter|TBD|TBD|TBD|TBD|
|GI bill|TBD|TBD|TBD|TBD|

### Medallia feedback

**KPI**: There are few or no complaints about the redirect.

|| Rank 1 week pre-launch |Rank 1 week post-launch to 25% | Rank 1 week post-launch to 50%| Rank 1 week post-launch to 100%|
|----|-----------|-----------|-----------|-----------|
|Redirect feedback|TBD|TBD|TBD|TBD|
