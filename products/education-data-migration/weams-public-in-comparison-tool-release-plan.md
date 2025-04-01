# **Release Plan Template**

If you answer yes to any of the questions below, you'll need to create a release plan using this template.

•	Does the feature you are working on moderately or significantly affect the Veteran experience of the product? 

•	Does the feature you are working on change the structure of the underlying data? 

•	Does the feature's backend or downstream interactions change? 

•	Is this a brand new experience for a Veteran? 

The team should develop this plan in parallel with the development of the feature your team is creating.

## How to use this release plan

1.	Create a release plan using this template in your feature documentation. Optionally, remove the extra text from the template.
	
2.	Fill out all the details below.
	
3.	Review the release plan with the team and your OCTO before releasing your app to production.

## Step 1: Development
You'll need to create a feature toggle (or two) for any moderately or significantly changing feature.

Follow the best practices for creating feature toggles.

List the features toggles here.

**Toggle name:**  **"giCtCollab": "gi_ct_collab"**

**Description: **It will enable WEAMS Public integration in Comparison Tool**

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

**EDM Team will monitor for errors and if they see a spike or unexpected behavior, they will disable the toggle.**

## **Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)** 

**Planning**

•	Desired date range or test duration: **2/20/25 - 2/25/25**

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

•	Desired date range: **3/31 in 2 hour increments over a total of 6 hours**

•	**Targeting 8am – 2pm ET**

•	How will you make the product available in production while limiting the number of users who can find/access it: 

**The feature toggle has the ability to control the amount of people by enabling the % of actors during the production rollout.**

•	What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:

o	**Error rate < 5%**

•	Links to the dashboard(s) showing "success criteria" metrics: **Datadog https://vagov.ddog-gov.com/dashboard**

•	Who is monitoring the dashboard(s)?: **Vanson Samuel will be monitoring**

## **Stage A: Canary**

Test a small Veteran population to ensure any obvious bugs/edge cases are found.

 **Planning**

•	Length of time: **2 hours** (minimum 2 hours)

•	Percentage of Users (and roughly how many users do you expect this to be): **5%** (Recommendation: select a percentage that targets ~500 users, or at most 10%)

**Results**

•	Number of unique users: **5% of users will be exposed to the new features** 

•	Metrics at this stage (per your "success criteria"): **errors stay below < 5%**

•	Was any downstream service affected by the change?: **no** 

•	Types of errors logged: **All traffic is logged by Vets-website into Datadog. We will be looking for http status codes with errors (4XX)**

•	What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? **If challenges are encountered, we would try to make the necessary code changes or rollback.**

## **Stage B: 25% of users**

Test a larger user population to ensure larger usage patterns expose no issues.

**Planning**

•	Length of time: **2 hours** (minimum 2 hours)

•	Percentage of Users (and roughly how many users do you expect this to be): **25%**

**Results**

•	Number of unique users: **25% of users will be exposed to the new features** 

•	Metrics at this stage (per your "success criteria"): **errors stay < 5%**

•	Was any downstream service affected by the change?: **no**

•	Types of errors logged: **All traffic is logged by Vets-website into Datadog. We will be looking for http status codes with errors (4XX)**

•	What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? **If challenges are encountered, we would try to make the necessary code changes or rollback.**

## **Stage C: 50% of users**

Test a larger user population to ensure larger usage patterns expose no issues.

**Planning**

•	Length of time: **2 hours** (minimum 2 hours)

•	Percentage of Users (and roughly how many users do you expect this to be): **50%**

**Results**

•	Number of unique users: **50% of users are exposed to the new features** 

•	Metrics at this stage (per your "success criteria"): **errors stay < %5**

•	Was any downstream service affected by the change?:  **no**

•	Types of errors logged: **All traffic is logged by Vets-website into Datadog. We will be looking for http status codes with errors (4XX)**

•	What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? **If challenges are encountered, we would try to make the necessary code changes or rollback.**

## **Stage D: 100% of users**

Test a larger user population to ensure larger usage patterns expose no issues.

**Planning**

•	Length of time: **2 hours** (minimum 2 hours)

•	Percentage of Users (and roughly how many users do you expect this to be): **100%**

**Results**

•	Number of unique users: **100% of users are exposed to the new features** 

•	Metrics at this stage (per your "success criteria"): **errors stay < 5%**

•	Was any downstream service affected by the change?: **no**

•	Types of errors logged: **All traffic is logged by Vets-website into Datadog. We will be looking for http status codes with errors (4XX)**

•	What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? **If challenges are encountered, we would try to make the necessary code changes or rollback.**

 ## **Post Launch metrics**
 
Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.

***1-week results***

•	Number of unique users: [FILL_IN]

•	Post-launch KPI 1 actual: [FILL_IN]

•	Post-launch KPI 2 actual: [FILL_IN]

•	Post-launch KPI 3 actual: [FILL_IN]

•	Any issues with VA handling/processing?: [PICK_ONE]: yes | no | N/A

•	Types of errors logged: [FILL_IN]

•	Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no | N/A

•	If yes, what: [FILL_IN]

***1-month results***

•	Number of unique users: [FILL_IN]

•	Post-launch KPI 1 actual: [FILL_IN]

•	Post-launch KPI 2 actual: [FILL_IN]

•	Post-launch KPI 3 actual: [FILL_IN]

•	Any issues with VA handling/processing?: [PICK_ONE]: yes | no | N/A

•	Types of errors logged: [FILL_IN]

•	Any UX changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no | N/A

•	If yes, what: [FILL_IN]

 ## **Post-launch Questions**
 
To be completed once you have gathered your initial set of data, as outlined above.

1.	How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
	
2.	What qualitative feedback have you gathered from users or other stakeholders?
  
3.	Which assumptions you listed in your product outline were/were not validated?
  
4.	How might your product evolve now or in the future based on these results?
  
5.	What technical tasks are needed to clean up (i.e., removal of feature toggles)?

