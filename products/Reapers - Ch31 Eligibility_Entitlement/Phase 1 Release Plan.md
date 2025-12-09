# **Release Plan Phase I **

## Step 1: Development
List the features toggles here.

**Toggle name: **vre_eligibility_status_updates**

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

**Points of Contact**

**Primary POC's**

Robert Allender - Government Lead

Ekaterina Shick - Program Manager

**Back Up POC's**

Vanson Samuel - Technical Lead 

Jeffrey Marks - Backend 

Nicholas Hibbits - Frontend 



 ## **Post Launch metrics**
 
Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.




