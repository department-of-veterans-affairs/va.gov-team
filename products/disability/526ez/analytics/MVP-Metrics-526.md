# MVP Metrics for the 526ez

Various teams working on the 526ez have investigated inconsistencies in analytics data coming from Domo and Google Analytics. As a result, 526 teams have not been able to reliably use analytics to advance our understanding of the Veteran experience. 

In this this document, we will idenitify and define the MVP metrics that will most inform product and design decisions. From there, we will determine what work needs to be done to correct confusing or innacurate data.

## Define MVP Metrics 

|Metric     | Proposed Definition | Barriers to Clean Data |
|-------------------|----------------------------|-----------------|
|Exit rate (by page)|Number of users who exited at the page ÷ number of users who viewed the page|  ||| Office Hours|
|Abandonment rate (by page)| Number of users who view a page and exit without returning in X amount of time ÷ number of users who viewed the steps | 
|Completion rate (by page)| Number of users who view a page, fill out (at least) required fields, hits conintue button, and is able to able to advance to the next page ÷ number of users who viewed the steps| 1. Not based on unique users-- could also include repeat users who exit and reenter within a single time period. 2. Shown time periods could artificially divide user sessions so their exit isn't included 2.  |
|Number of sessions| Number of users who enter the form and then leaves the form (either due to timeout, logout, or navigating to another page| Domo shows average number of sessions (Total sessions where user viewed form ÷ total users, filtered for users who completed the form)

## Approach to Correct Analytics

## Other Analytics Opportunities 

### Real User Monitoring w/ DataDog 

The Benefits Decision Reviews Team shared their experience using DataDog  [in a slack thread]([url](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/76054#:~:text=slack%20thread%20about%20Real%20User%20Monitoring%20in%20DataDog)). 
- Cons: Due to lots of PHI/PII, a lot of the screen is redacted so data is mostly time on page and drop-off. Cursor/click-activity is not always accurate.
- Pros: Error tracking-- seeing where a user gets stuck or potentially hits an error. Watching the recordings could be useful for research to see where Veterans are getting frustrated or where there is a significant drop off.

### Google Analytics

We know that Domo is powered by Google Analytics, but will need to attend Office Hours to better understand how it can be used. OCTO GA has a historical "disability + claims" dashboard, but nothing that seems to be configured for the current flow. 

The Contention Classification Team is currently using GA to analyze the 'new disabilities page' and could be a resource, as well. 

  
### Resources 
A majority of this thinking is pulled from other teams working on the 526ez. 
[Single source of truth Domo/Google Analytics]([url](https://docs.google.com/document/d/19Cfs8L1SmUaRUsWbOF35Y0BUsYz_c-QtlIltO6LEp3Y/edit#heading=h.t2fki7dfdv2r)https://docs.google.com/document/d/19Cfs8L1SmUaRUsWbOF35Y0BUsYz_c-QtlIltO6LEp3Y/edit#heading=h.t2fki7dfdv2r) 

