# **Release Plan **

## Step 1: Development
List the features toggles here.

**Toggle name:**  ****

**Description: It will show or hide "My Eligibility and Benefits" Page based on user selection**

## Step 2: Validation

Since we use a continuous delivery model, once code is in the main branch, it will be deployed that day.

Before enabling your feature toggle in production, you'll need to:

•	 Follow best practices for QA.

•	 Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.

•	 Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.

•	 Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. 

During this meeting, you'll need to:

1. review the plan with your DEPO/OCTO representative.
    
2.  review the release plan with your team.
    
## Step 3: Production rollout

### **Do I need a staged rollout?**

Yes, a staged rollout is required unless you can confidently answer "yes" to all of the following:

•	This change does not add substantial new functionality to VA.gov **Yes**

•	This change does not impact user flows through tasks **Yes**

•	This change does not affect traffic to backend services **Yes**

## **Define the Rollback process**
Even though your feature has been tested and ready, production is still a different environment than staging. You'll need to create a rollback plan if things go wrong. Usually, this is as simple as a feature toggle flip. Be as specific as possible.

**Reapers Team will monitor for errors and if they see a spike or unexpected behavior, they will disable the toggle.**

## **Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)** 

**Planning**

•	Desired date range or test duration: **11/7/25 - 11/11/25**

•	Desired number of users: **5 users**

•	How you'll conduct the testing: **We will share a script and link to staging to execute functional testing.**

**Results**

•	Number of users: 5

•	Number of bugs identified / fixed: [FILL_IN]/[FILL_IN]

•	Was any downstream service affected by the change?: yes/no, [FILL_IN]

•	Types of errors logged: [FILL_IN]

•	Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes/no

•	If yes, what: [FILL_IN] with ticket numbers

 ## **Phase II: Staged Rollout (also known as unmoderated production testing)** 

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

**Rollout Planning**

•	Desired date range: **3/19 in 2 hour increments over a total of 6 hours**

•	**Targeting 8am – 2pm ET**

•	How will you make the product available in production while limiting the number of users who can find/access it: 

**The feature toggle has the ability to control the amount of people by enabling the % of actors during the production rollout.**

•	What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:

o	**Error rate < 5%**

•	Links to the dashboard(s) showing "success criteria" metrics: **Datadog https://vagov.ddog-gov.com/dashboard**

•	Who is monitoring the dashboard(s)?: **Vanson Samuel will be monitoring**


**Results**

•	Number of unique users: **100% of users are exposed to the new features** 

•	Metrics at this stage (per your "success criteria"): **errors stay < 5%**

•	Was any downstream service affected by the change?: **no**

•	Types of errors logged: **All traffic is logged by Vets-website into Datadog. We will be looking for http status codes with errors (4XX)**

•	What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? **If challenges are encountered, we would try to make the necessary code changes or rollback.**

 ## **Post Launch metrics**
 
Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.




