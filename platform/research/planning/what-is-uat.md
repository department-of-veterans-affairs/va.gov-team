# User Acceptance Testing (UAT)

* **Definitions for terms used in this file:**

  * *"DSVA" refers to DSVA team members and DSVA detailees.*

  * *"Internal contractors" refers to DSVA's primary vendor contractor (e.g., AdHoc) and its subcontractors.*

  * *"External contractors" refers to any other contractor team working on the Veteran Tools Platform.*
  
<hr> 

* [What is UAT?](#what-is-uat)
* [UAT Logistics](#uat-logistics)
* [Process for DSVA](#process-for-dsva-and-internal-contractors)
* [Process for External Contractors](#process-for-external-contractors)

<hr>

## What is UAT?

### Purpose

During user acceptance testing (UAT), actual users test the service/tool/feature to make sure it can handle required tasks in real-world scenarios **in the production environment**. This helps us eliminate potential risks. 

### Goals

* Confirm all features exist as expected
* Confirm interface works as expected
* Confirm data works as expected in relation to the new service/tool/feature, e.g., 
  * Production data from API contains the expected content
  * When user saves data in the new service/tool/feature, data is saved and displays in the expected locations 
* Confirm that a user's production account works as expected in relation to the new service/tool/feature, e.g.,
  * The new dashboard shows the user's correct home address
  * **NOTE:** User actions in UAT should not have a permanent or lasting impact on a user's accounts or access to benefits. 
    * If you're working with another back-end system, figure out if you can back out, delete, or otherwise flag UAT test applications and accounts. 
      * There are circumstances where it is not possible to conduct UAT without affecting a back-end system and the change or update made during UAT becomes a permanent action on the user's account. Please be sure to identify if this situation pertains to your UAT and if so, inform the user that "test" becomes real once the action is complete.
    * In the Conversation Guide, include instructions for participants to back out or delete temporary data during the UAT session. 


## UAT Logistics

### Team

* The entire team should be involved in this process, including design, research, engineering, and product. 
* Designers and Product Managers should work together to create the UAT Conversation Guide.


### Scheduling
* Schedule a UAT after you've fully tested the service/tool/feature in lower environments and are confident that it will work as intended **in the production environment**.
* Plan in advance! And have a plan if your service/tool/feature doesn't pass the UAT.


### Considerations

1. Identity what you need to test and what type of user you need. 
    * How many users are you looking to test with? 
    * What scenarios do you need to cover? 
1. How and where are you going to test?  
    * Is it in person?  
    * Is it remote and will you use joinme to record? 
    * How long will it take?
1. Does the user need to do anything before the test? (Like create an account?) 
    * Is there anything you need to tell the user upfront? (Like they will have to enter their SSN, see PII, confidential information, etc.)

### Recruiting

UAT is designed to test functionality in the production environment. It is not a usability test, so testing with Veterans is not always required. 

Here are some examples to help you understand when you must test with Veterans vs when you might choose to test with a general (non-Veteran) audience.

**Example 1 - Add new dataset to Facility Locator**

* The Facility Locator can be used without logging in. 
* It does not make use of user data (other than computer IP address). 
* The map view, list view, and detail view are features where being a Veteran does not change their usage, e.g., being a Veteran is not a trait that makes "Veteran map user" different from "general map user."
* **You can use a general audience for UAT.**

**Example 2 - Add personalization to Dashboard**

* The Dashboard can only be used by logging in to vets/va.gov.
* Some acceptance criteria are "Show the user's applications in progress, prescription refills, claims and appeals, and secure messages on the Dashboard."
* **You should use a Veteran audience for UAT.** And recruit people who have at least 1 of the above 4 items.

**Example 3 - Add new 4142 form into the 526 claim flow**

* The 4142 is part of a larger user flow to create a 526 claim.
* Your team is only working on, and testing, the 4142 form.
* Some acceptance criteria are "Carry user data over from 526 fields into the 4142 form" and "Send new user data from 4142 to 526 form."
  * But asking participants to fill out the 526 form that surrounds the 4142 is tedious and does not help your team's work on the 4142 form.
* You design the UAT so that the UAT moderator completes the surrounding 526 form for the participant. And passes control to the participant at the point where the 4142 form is triggered (and again at the point when the 4142 returns to the 526).
* **You can use a General or Veteran audience for UAT.**

<hr>


## Process for DSVA and Internal Contractors

1. Work with the devops team to determine how you will do your UAT.

2. Recruit participants. These methods for UAT recruiting have been useful in the past.

    - See [the "UAT recruiting" bullet point here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-process.md). Fill out the form if you'd like to use this option for UAT recruiting.

    - **IS ADVISORY BOARD STILL OPERATING?** Advisory Board: DSVA has an advisory board which was started by Marina Martin, the previous CTO and Team Lead.  It is comprised of key stakeholders and VA champions who have helped us over the years, many of whom are Veterans.  To email this group, please work with StatOps Lead or Vets.gov Lead. 

    - Social Media: If you can craft a few sentences about who you are looking for and what you need tested you can put this up on social media sites to try and get Veterans.  Facebook search different groups and ask the administrator to join or post or if it's public, post yourself.  You can also try on Twitter or on your personal Facebook page and ask others to share!

    - ID.me: ID.me has a huge network of Veterans and they post regularly on their social platforms.  You could reach out in the slack channel and ask if they would be willing to help. 

    - Ask the business owner or main stakeholder on the project to help recruit. 

    - **IS MARTIN STILL A GOOD CONTACT?** Martin Taylor: Martin used to be in charge of VA Comms and is a big champion of our work.  In the past he has helped recruit Veterans for testing. 
    
    -  MHV Coordinators: This should really be a special ask and should only be done if it's necessary for you to go through MHV Coordinators.  In the past we have gotten pushback from Susan Haidary (who runs the MHV Coordinator program) on requesting help from them.

    - VSOs: _can someone enter info here about going through VSOs for this if you have had experience_

    - Operation Code: https://operationcode.org/ More info about this coming soon!

<hr>

## Process for External Contractors

1. Create a UAT test script. The test script is to make sure you've captured all acceptance criteria before you write the Conversation Guide in the next step. This can be any format you like.

1. Create a Conversation Guide. [See examples](#example-conversation-guides-for-uat)   

1. Recruit participants. Follow the [normal steps for recruiting](https://department-of-veterans-affairs.github.io/va-digital-service-handbook/resources/user-research#participant-recruiting), [consent](https://department-of-veterans-affairs.github.io/va-digital-service-handbook/resources/user-research#participant-consent) and [thank-yous](https://department-of-veterans-affairs.github.io/va-digital-service-handbook/resources/user-research#participant-thank-yous).

1. Your code needs to be in the production environment for UAT, but not visible to users who are not part of your UAT. 
    * You should be using feature toggles to hide your code when you push to staging. 
    * Your code can be made visible in the production environment to a limited set of users via a password.
    * You need to work with the DSVA devops team to set that up.
    * Post in the #support-external Slack channel -- explain that you're planning a UAT in production and want to put your service/tool/feature behind a password.

1. When the UAT is completed, consolidate all the problems the UAT found.
    * Create Github issues for each problem found. 
    * Fix all issues related to acceptance criteria.
    * Add any remaining issues to your backlog and prioritize them.


