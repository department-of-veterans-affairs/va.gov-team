# Initiative Brief: Editing as a Sub-Task 
### Initial Launch with Mobile Phone Number Add/Update 

**Last updated: January 5, 2024 --** Updated metrics

#### Overview

- *Product: Notification Settings / Contact Information* 
  - *Initiatives: Editing as a Subtask*
 
---

## Important Artifacts 
[Epic ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/49319)
<br>
[QA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/default-send/QA/qaPlan.md)
<br>
[Release Plan ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/default-send/releasePlan/defaultSendReleasePlan.md)
<br>
[UAT ](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Research/2023-09-UAT-edit-as-subtask-default-send-checkbox-ui)


## Outcome Summary
> *Brief statement describing opportunity you're pursuing e.g. "Increase Use of Search Tools on VA.gov." Include measurable outcome (i.e. metric) you're trying to affect.*

During the [usability study to add email as a channel](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/usability-study-add-email-jan-2023), we noticed that users were struggling with the current update flow for updating email or mobile phone when attempting to view the notification settings. We will re-engineer the workflow for updating a user's contact information from the notifications setting page in order to reduce confusion for users.

**Related/Associated product(s)**

This sits between two products and allows users to "Edit as a Sub-Task". A user on the notification settings screen will see a call to action advising them of missing information. Following the CTA will allow them to begin the sub-task and they'll be prompted to enter in the missing contact information. Once submitted, the user will return them to the notifications screen. 
- [Notification Settings](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences)
- [Contact information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information)

## Problem
> *Describe the challenge / pain point you seek to address.:* 

Currently a mobile phone number is required in order to access the notification settings within the profile. For users who do not have a mobile phone number, the profile immediately shows the users a message advising them to input a mobile number to access the notification settings:

![image](https://user-images.githubusercontent.com/129431463/236836710-59d5264e-91ce-4da8-8622-220e88da1ac2.png)

If they select the link today, this jumps them to the contact information and scrolls them down the screen to the mobile phone number section where they then have to select edit and input their information followed by the need to navigate BACK to the original page they wanted to use, Notification Settings. This is a very jarring process, many users were confused by the jump from one part of the profile to another and it requires the user to remember several layers of information in order to update their profile and return to their original workflow.  

How we might resolve this would be through a reimagined flow in order to reduce confusion to avoid disorienting the user. By simplifying the engagement experience for our end users, this ties to OCTO-DE's mission to provide tools to help veterans/personalize their online experience. 


## Desired User Outcomes

- *Why would a user want to use this?*
- *With this problem solved, what should users be able to do/achieve that they couldn't before?*

We're looking to design a new workflow that will allow a user to input their mobile phone without jumping to different parts of the profile thereby reducing confusion and streamlining the process for gaining access to the Notification Settings.

Ideally, when a user navigates to the Notification Settings page and they see the CTA requiring them to input a mobile number, clicking the "Add a mobile phone number to your profile" link will open a new page that focuses exclusevly on editing the mobile number.

This new process avoids context switching that exists within the old workflow.

Additionally, this new workflow could be used for updates to other infomration within the profile. Users could be on different parts of VA.gov and we could enable this sort of flow to update information in the profile without forcing users to navigate to the profile and locate the information.

## Undesired User Outcomes
A user could forget what task they are working on and navigate away from the platform. 

## Desired Business Outcomes

- *Why would your business want this to exist?*
This is a way to simplify updates that reduces complexity for the end user. This update helped memory impared veterans when engaging with the site.
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*
We'll hopefully see a reduced number of calls to the VA where users are seeking support to figure out how to update their Notification Settings.

## Undesired Business Outcomes
Increased complexity for end users resulting in confusion, however, we're hopeful this change will reduce confusion.

---
## Measuring Success

[Metrics workbook](https://docs.google.com/spreadsheets/d/1ts0vX2Nzu3UQp1q1nNz20ZKS_iPUkXmDRi-nPSQrT_s/edit?usp=sharing)

### Objective #1: Streamline flow to add contact information from the Notifcations preferences page.

**KPI: See a decrease in ranking for referrals to Contact information from Notification preferences.**

- [Contact information entrance page report](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p176188361/explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePath:www.va.gov~2Fprofile~2Fcontact-information~2F&_r.tabId=navigationsummary/)

|KPI/metric|Baseline: 1 month pre-launch 9/26/-10/25/2023| 25% 10/25-10/30/2023 | 50% 10/31-11/6/2023 | 100% 11/7-11/13/2023 | 1 month post-launch to 100% 11/7-12/5/2023| 2 months post-launch to 100% 11/7/2023-1/2/2024|
|----------|:-:|:-:|:-:|:-:|:-:|:-:|
|Ranking of Notification preferences as an entrance page to Contact information|[Ranked 2nd (6,503 Clicks ) 12.78% entered Contact Information from Notification Settings](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.date00=20230926&_u.date01=20231024&_.advseg=&_.useg=&_.sectionId=&explorer-table.secSegmentId=analytics.previousPagePath&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.previousPagePath%22,%22PT%22,%22www.va.gov~2Fprofile~2Fnotifications%22,0%5D%5D&explorer-table.rowCount=500)| [Still ranked 2nd 967 at 10.31%](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.date00=20231025&_u.date01=20231030&_.advseg=&_.useg=&_.sectionId=&explorer-table.secSegmentId=analytics.previousPagePath&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.previousPagePath%22,%22PT%22,%22www.va.gov~2Fprofile~2Fnotifications%22,0%5D%5D&explorer-table.rowCount=500/) |[Ranked 3rd 961 clicks at 8.29%](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.date00=20231031&_u.date01=20231106&_.advseg=&_.useg=&_.sectionId=&explorer-table.secSegmentId=analytics.previousPagePath&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.previousPagePath%22,%22PT%22,%22www.va.gov~2Fprofile~2Fnotifications%22,0%5D%5D&explorer-table.rowCount=500/)|[Ranked 8th 443 clicks at 3.69% of traffic](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.date00=20231107&_u.date01=20231113&_.advseg=&_.useg=&_.sectionId=&explorer-table.secSegmentId=analytics.previousPagePath&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.previousPagePath%22,%22PT%22,%22www.va.gov~2Fprofile~2Fnotifications%22,0%5D%5D&explorer-table.rowCount=500/) |[Ranked 8th 1,845 clicks at 3.51% of traffic](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.date00=20231107&_u.date01=20231205&_.advseg=&_.useg=&_.sectionId=&explorer-table.secSegmentId=analytics.previousPagePath&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.previousPagePath%22,%22PT%22,%22www.va.gov~2Fprofile~2Fnotifications%22,0%5D%5D&explorer-table.rowCount=500/)|[Ranked 8th 3,566 clicks](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.date00=20231107&_u.date01=20240102&_.advseg=&_.useg=&_.sectionId=&explorer-table.secSegmentId=analytics.previousPagePath&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.previousPagePath%22,%22PT%22,%22www.va.gov~2Fprofile~2Fnotifications%22,0%5D%5D&explorer-table.rowCount=500/), 3.7% of traffic to the page| 

**KPI: Establish baseline metrics for number of saves of the add a mobile number form.**

- [see save / failure metrics on the top right ](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/DRqBrmiyTD6l8L75rei0fw/a50123418w177519031p176188361/_u.date00=20230806&_u.date01=20230814/)

No pre-launch stats as this didn't exist prior. 
|KPI/metric| 25% 10/25-10/30/2023| 50% 10/31-11/6/2023 | 100% 11/7-11/13/2023 | 1 month post-launch to 100% 11/7-12/5/2023| 2 months post-launch to 100% 11/7/2023-1/2/2024|
|----------|:-:|:-:|:-:|:-:|:-:|
|Number of saves of the add a mobile number form (success)|177|465|958|3838|7200|
|Number of saves of the add a mobile number form (failures)|1|7|4|30|71|
|Save success as a %| 99.44% |98.52%|99.58%|99.22%|99.01%|

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - Users leverage the current functionality, we're changing how that current feature works to make it a better user experience, so yes users will continue to leverage it

- **Usability Risks** (can people figure out how to use it):
  - This improves upon the current feature, since users have struggled when the feature in production navigates them to the contact information page, this is an attempt to reduce some of the context switching an end user may experience.  

- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)

We've built this and it's in staging currently. 
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Examples: 
    - VA stakeholder testing, marketing, compliance requirements 

### What're you building
> *What's in scope for you to build with this initiative? Describe key features/flows. 
> *What have you explicitly decided to **not** include and why?*
> *How does this solution address your Assumptions & Risks?

We're creating this new flow that can be used for other updates to key information in the profile. This could theoretically be used at other locations accross va.gov 
We will expand this functionality to allow users to update email and other items, but for now we're beginning with just the mobile phone number updates. 

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- [Kickoff ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/58231)
- [collab cycle ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/58231)

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/default-send/releasePlan/defaultSendReleasePlan.md) 

---
   
## Screenshots

### Before
[Use Case](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/use-cases/user-missing-contact-info.md)

Step1:
https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/a/uuid/EFD07E4E-8467-4542-A9C6-0184B4536E4B

Step2: 
Not shown but the process jumps the user to the contact screen and scrolls them to the mobile phone number and they have to then select edit and input their information

### After
Overall: https://www.sketch.com/s/1fd4d140-84ad-4301-9c74-d5cebc4a012d 
[user flow](https://www.sketch.com/s/1fd4d140-84ad-4301-9c74-d5cebc4a012d/p/293F15EA-9CCC-466C-A3B7-3E54E3111676/canvas)

Step1: https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/a/uuid/EFD07E4E-8467-4542-A9C6-0184B4536E4B

Step 2: https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/a/uuid/4190DD48-3E42-4579-9AB5-16836A8E8762

Step 3: Upon submit, users will be taken back to the screen in step 1 and now will be able to edit/access the notification settings 

---
#### Team Members

<details>
 
 - DEPO Lead: Chante Lantos-Swett (in for Samara Strauss) 
 - PM: Travis Cahill
 - Engineering: Adam Whitlock [FE]
 - Research/Design: Liz Lantz
 
</details>

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: AE Profile
- GitHub Label(s): @auth-exp-profile
- Slack channel: accountexp-authexp
- Product POCs: Travis Cahill 

</details>

