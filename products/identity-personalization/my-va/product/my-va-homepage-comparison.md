# My VA vs. Homepage comparison

Since launching the redesigned My VA dashboard in July 2021, we are now in a position where we can start to consider redirecting people from the unauth homepage to My VA after login. Here are some things we might want to consider as part of that decision.

## Which top links exist on both the homepage and My VA?

These are pulled from the top tasks section of the VA.gov homepage.

**Note**: Since the My VA dashboard surfaces information based on people's individual experiences, not all links will show for all users. Links will show for some users depending on whether that user meets certain criteria.

|Link name on the homepage | Does this link/task exist on My VA when applicable?|
|--------------------------|------------------------------------|
|Refill and track your prescriptions | Yes |
|Send a secure message to your health care team | Yes |
|Schedule and manage health appointments | Yes |
|View your lab and test results | Yes |
|Apply now for VA health care| Yes |
|Check your claim or appeal status| Yes |
|View your payment history| No |
|Upload evidence to support your claim| No |
|File for a VA disability increase| Yes |
|File a claim for compensation| Yes |
|Change your current education benefits| No|
|Compare GI Bill benefits by school| No|
|Apply for education benefits| Yes|
|Get Veteran ID cards| No|
|Get your VA medical records| Yes|
|Download your benefit letters| No|
|Change your address| No (however, we do link directly to the VA.gov profile where someone can change their address)|
|Request your military records (DD214)| No|

## What needs to be added to My VA before we can redirect here at log in?

At this point, we may want to consider at least adding information around payments to My VA before redirecting there, since [financial information is the most highly searched content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/product/post-2.0-redesign-analytics.md#searches) from My VA. Additionally, viewing payment information is one of the [top events related to managing benefits on VA.gov overall in the last year (between 11.1.20 and 11.1.21)](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20201101&_u.date01=20211101&explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=50&_r.drilldown=analytics.eventCategory:Interactions/), so it would make sense to prioritize this over other updates to My VA.

In terms of other updates, we'll want to add education information and records information over time, based on what we've heard across user research engagements, what we see in top searches from My VA, and what exists as top tasks on the homepage. Whether we redirect to My VA from the homepage at login before we add education or record info is up for debate. This might depend on whether or not the current homepage design stays the same. Should it stay the same for some time, we could redirect from the unauth homepage to My VA upon login because the top edu/records links will still be accessible from the homepage.


## If we redirect people from the logged out homepage to My VA when they log in, how can we measure whether this is improving the user experience?

- **Next clicks**: If people are redirected to My VA, is their next click back to the homepage?
- **Increased clicks**: Do we see a significant increase in interactions quarter over quarter? 
- **Increased searches**: For information that does not exist on My VA that does exist on the homepage, are we seeing more searches for these terms?
