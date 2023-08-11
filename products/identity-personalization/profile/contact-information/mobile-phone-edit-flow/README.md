# Initiative Brief: ~Mobile Phone Edit Flow~ Editing as a Sub-Task
06/27/2023

#### Overview

- *Product: Notification Settings / Contact Information* 
  - *Initiatives: Editing as a Subtask*
 
---

## Outcome Summary
> *Brief statement describing opportunity you're pursuing e.g. "Increase Use of Search Tools on VA.gov." Include measurable outcome (i.e. metric) you're trying to affect.*

During the [useability study to add email as a channel](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/usability-study-add-email-jan-2023), we noticed that users were struggling with the current update flow for updating email or mobile phone when attempting to view the notification settings. We will re-engineer the workflow for updating a user's contact information from the notifications setting page in order to reduce confusion for users.

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

### Key Performance Indicators (KPIs)

Objective #1: Improve quality/completeness of Profile Data

KPI: See an increase in profiles with completed mobile phone number 

[GA Dashboard](https://analytics.google.com/analytics/web/#/dashboard/3Z1vT6SlQqevdav1s72QwA/a50123418w177519031p176188361/)

|KPI/metric|Baseline: 1 month pre-launch [add dates]|1 month post-launch to 100% [add dates]| 2 months post-launch to 100% [add dates]|
|----------|-------------|---------------|-------------------|
|Percentage of users updating using the new feature|0%|||
|Percentage of users missing mobile phone number||||


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

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md) 

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

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


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department:
- Contact(s): 
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)


<br>
---
---


# Collab Cycle Ticket Questions:
## 1. Will your work result in visible changes to the user experience? 

**Yes**

### Examples of visible changes include:
A new URL
A new input page with similar design elements used accross the profile 
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/3945dc61-faa2-433b-86ae-36a404d6bae9)

### Examples of no visible changes include:
> Changes to code that the user won’t see

List of what's changing:
behavior of the two types of update buttons (if you have, or don't have info) will navigate to a new URL  
GA events for API calls will have additional data to represent if the API call came from the new editing page or not. 
No changes to accessibility items as we're recycling code from an already functioning and approved page. 

## 2. Are you doing research with VA.gov users? 

**Yes** 
[Usability testing was completed and our related findin is here:](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/usability-study-add-email-jan-2023/findings-summary.md#7-of-8-participants-easily-navigated-the-path-to-add-their-email-address)

## 3. Will your work involve changes to: (select all that apply)
 
 **dynamic pages**
this is a new dynamic page within the Profile

## 4. Does your product/feature have Google Analytics tracking and a KPI dashboard in Domo?

[GA Dashboard where we expect to see this info](https://analytics.google.com/analytics/web/#/dashboard/3Z1vT6SlQqevdav1s72QwA/a50123418w177519031p176188361/)

## 5. Do you need to capture any additional analytics or metrics?

We'll have new submits, we'd like to see how many click events are happening on the new link that takes a user to the new field edit page. 

## Kickoff artifacts
It is the Product Manager’s responsibility to ensure the [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/identity-personalization/profile/contact-information/mobile-phone-edit-flow/README.md) is attached to the ticket.
The VFS team is responsible for providing all relevant and up-to-date links, screenshots, images, and designs of the product's as-is version.


