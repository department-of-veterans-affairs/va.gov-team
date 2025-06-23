
# Release Plan: AVA phase 1

### Approach 

####  Phased Rollout

Due to the launch of a new form on the VA.Gov site, we will go live with a phased approach for form and dashboard experiences.

During these stages, the team will monitor the following Shared Metrics of Success:
  * Tracking via DataDog 
    * **Error rate**  - The number of non 2xx codes vs 2xx (successful) codes for Form submissions and Dashboard replies.
	- **Latency** - Average time to receive a successful response (2xx) from CRM for Form submissions and Dashboard replies.
	- **Throughput** - Number of requests. Requests = Form submissions
- Medallia survey to monitor sentiment and user feedback.
	- Are any users reporting errors
 - Reports from agents and business lines

#### Primary Concerns

* Health facility or school facility, if unable to select an option, can they still submit the form.  
	- Mitigation: If unable to submit, prompt the agent to follow up with the user. 
* A user has a bookmarked URL to the original URL to continue using the old experience
	- Mitigation:  Redirect users accessing Ask.Va.Gov to new AVA experience until we have a 100% and all areas that reference the classic URL are updated.
* A user will have the consistent form and dashboard (new / new and old/ old).
	* Mitigation: Refresh the routing of users to new experience per day in staged roll out.  
* A user experiences the current portal and then is directed to the new version (or vice versa) for a jarring user experience. This is especially an issue for a business line user.
	* Mitigation: Assign a cookie to a user to maintain a consistent user experience. (See Sticky routes note)

### Rollback Strategy

If the team recognizes a potential issue deemed worthy of a rollback or if the external events that impact launch (i.e. government shutdown), then the redirect will be shut off and traffic returned to the AskVA.GOV site. 

* Catastrophic Rollback Feature Toggle (Dynamic): All traffic to new AVA, for rollback (toggled), redirect 100% traffic to classic AVA.
* Rollback Features: more granular toggles, per feature, each off by default.
* Next prod release for fixes, daily around 1pm ET,... for TRUE outages, contact platform for emergency release. Not something we want to do regularly!

#### Alert Notifications

The page will always be up, and CRM would post an announcement regarding a potential outage or impact to users. 

## Feature Toggles

List all known feature 

| Toggle Name | Description |
| ----------- | ----------- |
| Classic Ask VA | Toggles redirect to Classic Ask VA experience, editable dynamically ( no deployment required). Expiration Date via Flipper. |
| New Ask VA | Toggles % of traffic |


### Rollback Process

<table>
  <tr><th>Severity</th><th>Description</th><th>Action</th></tr>
  <tr><td>Fatal Error</td><td>
    
```
Events or Errors where a user’s core functionality of AVA cannot be executed.
Examples:
  * Can’t complete a question (can’t answer a required field)
  * Can’t sign in
  * Can’t read the details of my answer from the VA| Roll back to Ava Classic
  * Inquiry details don’t enter CRM - Submitter submits but the details don’t follow down stream 

```

  </td><td>Rollback to AVA Classic</td></tr>
  <tr><td>Non-Blocking</td><td>

```
Non Fatal errors include minor design issues and impact to non required fields.
Examples:
  * Can’t answer a non required field
  * Can’t check the status of my inquiry while not authenticated
``` 

  </td><td>Maintain New AVA</td></tr>
</table>


## Roll Out Planning

Targeting Launch March 18-25th 
* Desired date range: A day minimum per stage to monitor metrics.
	- Canary Launch: 10% of traffic (Thursday, March 27)
	- Stage A: 25% of Submitters (Friday, March 28)
	- Stage B: 50% of submitters (Monday, March 31)
	- Stage C: 75% of Submitters (Tuesday, April 1)
	- Stage D: 100% of Submitters (Wednesday, April 2)
	- **Watchout:** End of week and end of month are high volume, a weekend or Monday would be the best approach in early or middle of month.

* How will you make the product available in production while limiting the number of users who can find/access it: 
	- Users will be routed to Classic AVA or New AVA using the Percentage of Actors configuration. They will maintain that experience for that stage duration (of 1 day per stage, starting with Canary testing) 
	  - The next day those users already assigned the New AVA experience will continue to have that experience and a new % of users based on the stage (A: 25%, B: 50%, C: 75%, D: 100%) will be routed to the new experience. 
	  - While this is happening Va.Gov URLs will be redirected to the New AVA experience, until 100% of the list of catalogued URLs have been migrated.
* What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?
	- **Note:** We are giving ourselves some wiggle room with our targets since this would be our first time on production.
	- **Error rate**  - The number of non 2xx codes vs 2xx (successful) codes for Form submissions and Dashboard replies.
		 - Target: 15% or less.
	- **Latency** - Average time to receive a successful response (2xx) from CRM for Form submissions and Dashboard replies.
		 - vets-api ~ 2s, CRM ~ 7s
	- **Throughput** - Number of requests. Requests =  Form submissions
		- Canary (10%) ~ 46 submissions
		- Stage A ~ 124 submissions
		- Stage B ~ 237 submissions
		- Stage C ~ 306 submissions
		- Stage D ~ 504 submissions
			- Estimations are based on Google Analytics contact us page click count data for February and March
	- If Google Analytics for new AVA is setup in time for launch, we can also monitor Form Avg Session Duration and Completion Rate. However, the aforementioned metrics will be the primary items 

* Links to the dashboard(s) showing "success criteria" metrics: 
	- [Ask VA Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/i7e-qkf-zim/ask-va-dashboard-draft?fromUser=false&refresh_mode=sliding&from_ts=1739807531939&to_ts=1742223131939&live=true)
* Who is monitoring the dashboard(s)?: 
	- Ask VA development team

5/29 update: BP moved launch metrics to the [Launch metrics GitHub doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/engineering/Launch-metrics.md) in ask-va/engineering
