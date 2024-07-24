# Release Plan: AVA phase 1

## Approach: 

### Phased Rollout: 

Due to the launch of a new form on the VA.Gov site, we will go live with a phased approach for form and dashboard experiences.

During these stages, the team will monitor the following Shared Metrics of Success:

* Number of inquiries are consistent as compared to same types on same days
  * Tracking via DataDog / GA?
    * Form Drop Off / Form Conversion (Abandonment rates)
    * Avg Session Duration 
    * Page Conversion
    * Error Rates
    * Flow usage\
      **Potential red flag:** drop in GI Bill / Education
* Medallia survey to monitor sentiment and user feedback.
  * Context: are they reporting any errors
* API call exception in Sentry logs should be minimal (ideally zero)
* Required for option 1: 
  * Sticky routes — if a user is directed to classic or new, they’ll stay with that version for the remainder of the day.

> Notes:
> * ACTION ITEM: see if platform supports this out-of-the-box, else determine local storage solution to keep users on classic/new once they’ve visited.
> * ACTION ITEM: check with MHV for how they did this for side-by-side deploy of old/new app?
> * IDEA: for required fields backed by services, can we allow the user to bypass and have agent follow up with them?

### Incident monitoring:

#### Primary Concerns:

* Health facility or school facility, if unable to select an option, can they still submit the form.  
  * Mitigation: this has been addressed in ticket # XYZ and ABC 
  * Mitigation: if unable to submit, prompt the agent to follow up with the user. 
* A user has a bookmarked URL to the original URL to continue using the old experience
  * Context: 
    * we use a url under va.gov/contact-us .
    * We have a list of references from users, which we will eventually route to the newer link.
    * FYI: there are printed materials and emails etc to account for.
  * Mitigation: we will change all discovered links except Ask.VA.GOV to reroute until we have a 100% cut over.  
* A user will have the consistent form and dashboard (new / new and old/ old).
  * Mitigation: refresh the routing of users to new experience per day in staged roll out.  
* A user experiences the current portal and then is directed to the new version (or vice versa) for a jarring user experience. This is especially an issue for a business line user.
  * Context: this has been difficult in the past,
    * MessageID (each API call will assign a value and return it)
    * The MessageID will be assigned to a user @ time of session start.
    * This approach works for both unauthenticated and authenticated users.
  * Mitigation: assign a cookie to a user to maintain a consistent user experience. (See Sticky routes note)

### Rollback Strategy

If the team recognizes a potential issue deemed worthy of a rollback, then the redirect url will be shut off and traffic returned to the AskVA.GOV site. 

* Catastrophic Rollback Feature Toggle (Dynamic): All traffic to new AVA, for rollback (toggled), redirect 100% traffic to classic AVA.
* Rollback Features: more granular toggles, per feature, each off by default.
* Next prod release for fixes, daily around 1pm ET,... for TRUE outages, contact platform for emergency release. Not something we want to do regularly!

#### Alert Notifications: 

The page will always be up, and crm would upload an announcement regarding a potential outage or impact to users. 

## Feature Toggles:

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

### User Acceptance Testing

#### Planning

* Desired date range or test duration: [FILL_IN]
* Desired number of users: [FILL_IN]
* How you'll recruit the right production test users: [FILL_IN]
* How you'll conduct the testing: [FILL_IN]
* How you'll give the test users access to the product in production w/o making it live on VA.gov:
  * Users will be given access to staging which will mirror the production interface

#### Results

* Number of users: [FILL_IN]
* Number of bugs identified / fixed: [FILL_IN]/[FILL_IN]
  * [FILL_IN] : list
  * [FILL_IN] : of
  * [FILL_IN]: Tickets of bugs/changes
* Was any downstream service affected by the change?: yes/no, [FILL_IN]
* Types of errors logged: [FILL_IN]
* Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes/no
* If yes, what: [FILL_IN] with ticket numbers

## Roll Out Planning
Proposed Dark Launch Jan 15-17th 
* Desired date range: Starting Jan 20th for Canary Release,
  * Canary Launch: 500 Submitters or 10% of traffic
  * Stage A: 25% of Submitters 
  * Stage B: 50% of submitters 
  * Stage C: 75% of Submitters
  * Stage D: 100% of Submitters\
**Watchout:** End of week and end of month are high volume, a weekend or monday would be the best approach in early or middle of month\
**Decision:** a day minimum per stage to monitor click responses.
* How will you make the product available in production while limiting the number of users who can find/access it: 
  * Uses will be routed to Classic AVA or New AVA based on the MessageID assigned at the start of the session, they will maintain that experience for that stage duration (of 1 day per stage, starting with Canary testing) 
  * The next day those users already assigned the MessageID to New AVA will continue to have that experience and a new % of users based on the stage (A: 25%, B: 50%, C: 75%, D: 100%)  will be routed to the new experience. 
  * While this is happening some URLs will be redirected to the New AVA experience, until 100% of the list of catalogued URLs have been migrated during Stage D. 
* What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?
  * Form Drop Off / Form Conversion (Abandonment rates)
  * Avg Session Duration 
  * Page Conversion
  * Error Rates
  * Flow usage
    * Potential red flag: drop in GI Bill/ education
* Links to the dashboard(s) showing "success criteria" metrics: [FILL_IN] with link to dashboards (example: Google Analytics dashboard)
* Who is monitoring the dashboard(s)?: [FILL_IN]
* Create Release Notes for each new release. Identify what to check to see changes to the application for a given release.
* Datadog / DOMO dashboard 
* Sentry error reporting (email? Or place to check for exception details)

**Remainder of this document to be iterated on at time of Launch and Post Launch** Metrics shall be gathered at the 

| Stage | Time of Metrics Gathering | Link to Artifact |
| ----- | ------------------------- | ---------------- |
| A: Canary | |
| B: 25% of Traffic | |
| C: 50% of Traffic | |
| D: 75% of Traffic | |
| E: 100% of Traffic | |
