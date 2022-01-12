# Proposal for My VA --> logged-in homepage transition

## Plan overview

This is the high level proposal for a plan to transition the My VA dashboard to become the logged-in homepage:

- Start transition after the payments & debts module on My VA launches (target: late March/early April 2022).
- For people who login from the homepage, redirect them to My VA instead of keeping them on the homepage. Launch this to 25% of users for ~1 month, then evaluate analytics.
- Determine next steps/tweeks. If necessary, make updates and changes to My VA before next phase of launch.
- Launch to 50% of users for ~1 month, then evaluate analytics.
- Determine next steps/tweeks. If necessary, make updates and changes to My VA before next phase of launch.
- Launch to 100% of users for ~1 month, then evaluate analytics.
- Determine next steps/tweeks. If necessary, make updates and changes to My VA.

## Analytics to monitor

### Next clicks

#### Hypotheses

1. Clicks from My VA to the homepage will increase if people can not find a link on My VA that they can find on the homepage.

#### KPIs

Next clicks from My VA

- Success: We see less than a X% increase or no increase in clicks back to the homepage from My VA.
- Failure: We see greater than X% increase in clicks back to the homepage from My VA. 

### Increased clicks

### Hypotheses

1. If a link lives on the homepage and My VA, clicks into those links from My VA will increase.
2. If a link lives on the homepage and does *not* live on My VA (eg. link to get your DD214), clicks into those pages will decrease.

#### KPIs

[Top interactions from My VA](https://analytics.google.com/analytics/web/#/report/content-event-pages/a50123418w177519031p176188361/explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePath:www.va.gov~2Fmy-va~2F,analytics.eventCategory:Interactions/)

If a link lives on the homepage and My VA, clicks into those links from My VA will increase.
- Success: We see a 25% increase for clicks into the following links: Claims, payments, health care links, etc.
- Failure: We see very little increase, no increase, or a decrease for clicks into the following links: ...

Pageviews for links that don't live on the homepage

If a link lives on the homepage and does *not* live on My VA (eg. link to get your DD214), clicks into those pages will decrease.
- Success: No decrease into links that do not live on My VA.
- Failure: A decrease of X% or more into links that do not live on My VA.


### Increased searches

[Searches initiated from My VA](https://analytics.google.com/analytics/web/#/report/content-site-search-pages/a50123418w177519031p176188361/explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=50&_r.drilldown=analytics.searchStartPage:www.va.gov~2Fmy-va~2F/)

If a link lives on My VA, there will be no increase in searches for this information.

If a link does not live on My VA, there will be an increase in searches.
