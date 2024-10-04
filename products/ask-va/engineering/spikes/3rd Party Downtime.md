**When 3rd-Party Services are Down**
There are several services that we depend on for the AVA VA.gov project to work in PROD. This is a thought exercise to see how we might handle a failure in each of those services.

<img width="563" alt="image" src="https://github.com/user-attachments/assets/59f3c7ff-d7ed-42c5-bca3-865e5e224a11">


**Login Services**
If the login services are down, we will only be able to service unauthenticated inquiries and show the summary status of an inquiry when searched by its inquiry number.
VA.gov Website (vets-website)

If the VA.gov website is down, the user cannot navigate to our application. There’s nothing that we can do. Even a redirect to the classic AVA application wouldn’t work in this scenario, since there’s no available page to redirect from. We can monitor the health of the site, but there’s a dedicated team that does that work already. We could only add our “me too!” to the growing list.
AskVA CRM Application

Our application is heavily dependent on the AVA CRM application. They are our datastore. A top priority should be detecting the outage early on so that the user doesn’t get all the way through the creation of an inquiry, only to find that it cannot be submitted.

For authenticated users, we pull the AVA profile data early on. For unauthenticated users, the entire form is filled out before our first interaction with the CRM APIs.

**NOTE**: The exception to this is when the cached data from CRM needs to be refreshed. For example, when it’s time to grab the latest Category/Topic/Subtopic list - typically when the first user of the day accesses our application.

**NOTE:** We cannot store PII/PHI on the client for use when they return.
Before we exercise selecting a plan (need zenhub tickets):
Research the current monitoring of the dependent services & the metrics on downtime, for instance on 8/26, the educational facility service was down for part of the day.  If we find a service that is rarely down, maybe we don’t need to worry about it day 1. 
Create the UI experience for any time we’re asking the user to “try again” - then see where it applies (likely for the login failure, the submit inquiry & submit correspondence endpoints). 


**Suggestions**

Call a fast-responding CRM API endpoint at the start of each inquiry. The resulting data is ignored, but the server response will let us know if the CRM application is responsive or not. If we get an error on the call, alert the user that we cannot accept their inquiry at this time. Tell them to try again later,or point them to other resources.
VA.gov Services (vets-api)
Much like when the VA.gov website is down, if the supporting APIs are unavailable, there’s not much we can do. But there are cases where specific services (API endpoints) are down while the VA.gov APIs are up as a whole. So, we’ll consider those cases.

**MEDICAL FACILITIES SEARCH**

This is a required field. As such, the user cannot move to the next page in the inquiry form until a facility has been selected.

**Suggestion for initial go-live**

Fail the user’s attempt to complete the inquiry at any point of failure & ask them to “try again later”
Monitor the failure, reporting on the failed service & possibly prioritize CRM dependent solutions based on frailty of underlying service(s).


**CRM Dependent Suggestions**

If a service outage is detected, allow free-form input for this field, bypassing the Search button and related radio buttons. This may not be a viable option, especially if the selection affects routing, or the CRM agent depends on a specific format.
If the service is down, auto-select a bogus facility code to indicate this. The agent will need to handle the follow up (searching for previous, valid entries for the submitter, or by contacting the submitter to get more information).  How do we alert a CRM agent they need to immediately call & validate a value before “re-routing”?

Provide a means (perhaps a report) to list all inquiries with this bogus value.

**GI BILL ED. INSTITUTIONS**

This is a required field. As such, the user cannot move to the next page in the inquiry form until a facility has been selected.

**Suggestions**

If a service outage is detected, allow free-form input for this field, bypassing the Search button and related radio buttons. This may not be a viable option, especially if the selection affects routing.
If the service is down, auto-select a bogus facility code to indicate this. The agent will need to handle the follow up (searching for previous, valid entries for the submitter, or by contacting the submitter to get more information).

Provide a means (perhaps a report) to list all inquiries with this bogus value.
Example of service down in production:



**VA PROFILE**

If the call to VA Profile for an authenticated user fails, we cannot pre-fill any data in the form. The user can enter their information, but the content of the inquiry will be marked as untrusted. That means that CRM won’t update their AVA Profile information.

**ADDRESS VALIDATION**

Addresses need to be validated.

**Suggestions**

If the service to validate addresses is down, we could allow free-form input for the address fields. Assuming that the address has no effect on routing and that the CRM agents will see the inputs as typed by the submitter.

**BRANCH OF SERVICE**

We cache the Branch of Service values, but the call to retrieve them to populate the cache could fail.

**Suggestions**

We could keep a copy of the BoS values in the backend and revert to that (static, hard-coded) list when the call fails. This way, the submitter is not blocked, but the static data could become stale and needs to be updated on those rare occasions that there is an update to the BoS values.
Dashboard Thoughts
The dashboard has its own set of interactions with the external services. The following applies to handling these outages.

Reply/Attach – [content needed]
…

General Suggestions
All service calls can be wrapped in a retry loop, only failing if the upstream service is non-responsive, say, 3 times in a row.
Before implementing any logic to handle these fringe cases we can implement “nothing-fancy” reporting by logging each unique failure point to DataDog, then using those metrics to determine when/if a case needs new code to be explicitly handled.


