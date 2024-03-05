# MVP Metrics for the 526ez

Various teams working on the 526ez have investigated inconsistencies in analytics data coming from Domo and Google Analytics. As a result, 526 teams have not been able to reliably use analytics to advance our understanding of the Veteran experience. 

In this this document, we will idenitify and define the MVP metrics that will most inform product and design decisions. From there, we will determine what work needs to be done to correct confusing or innacurate data.

## Define MVP Metrics 

|Metric     | Proposed Definition | Barriers to Clean Data |
|-------------------|----------------------------|-----------------|
|Exit rate |Number of users who exited at the page ÷ number of users who viewed the page| Current values are caluclated based on "# of users who started the form," which skews the data (due to conditional pages). Update denominator to "total # of users who viewed that page"  |
|Abandonment rate | Number of users who view a page and exit without returning in X amount of time ÷ number of users who viewed the step | No current abandonment is available on Domo. Must be added.
|Completion rate | Number of users who view a page, fill out (at least) required fields, hits conintue button, and is able to able to advance to the next page ÷ number of users who viewed the steps| 1. There is a discrepancy in definitions provided by OCTO analytics team and Platform. 2. The rate is not based on unique users-- could also include repeat users who exit and reenter within a single time period. 3. Shown time periods could artificially divide user sessions so their exit isn't included.  | I don't know... |
|Submission| When user successfully completes, submits, and reaches the confirmation page| 
|Number of sessions| Number of users who enter the form and then leaves the form (either due to timeout, logout, or navigating to another page| This data exists as an average and by session count|

## Approach to Correct Analytics

- How big is the lift to change rates/denominators from "# of users **who started the form**" to "# of users who viewed **that particular page**?

- Can we create multiple funnels for the different use cases (starting with BDD or RNG) to avoid the issues with condiitional logic?

- Once we correct the exit rates, will it be easier to determine abandonment and add it to our Domo dashboard?

- Will GA give us better access to refining analtyics than Domo?

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

