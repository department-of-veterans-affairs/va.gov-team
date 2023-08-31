
# Feature Overview: Editing as a Sub-Task 

**Last updated: August 31, 2023 -- aupdated location**

## Table of Contents 

## POCs

- **Github labels**: authenticated-experience
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp); [#va-profile](https://dsva.slack.com/channels/va-profile)  
### Authenticated experience

- [This is currently managed by the VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles).



## Overview

There are several processes in the profile where editing another section or data point in a different part of the profile allows a user to access a more complete product. 

As an example, if a user is missing a mobile phone number, when they navigate to the notification settings in the profile, they'll see an alert advising them to update their mobile phone number to access more of the notification settings. Instead of sending them to another section in the profile, this editing-as-a-subtask workflow can be worked in to quickly allow users to edit the missing information without a lot of navigation.
 
---

### Outcome Summary
> *Brief statement describing opportunity you're pursuing e.g. "Increase Use of Search Tools on VA.gov." Include measurable outcome (i.e. metric) you're trying to affect.*

During the [useability study to add email as a channel](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/usability-study-add-email-jan-2023), we noticed that users were struggling with the current update flow for updating email or mobile phone when attempting to view the notification settings. The reengineered workflow reduces the cognitive load for updating data points that live elsewhere in the profile 

**Related/Associated product(s)**

This sits between two products and allows users to "Edit as a Sub-Task". A user on the notification settings screen will see a call to action advising them of missing information. Following the CTA will allow them to begin the sub-task and they'll be prompted to enter in the missing contact information. Once submitted, the user will return them to the notifications screen. 
- [Notification Settings](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences)
- [Contact information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information)

## Problem Statement 
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

## Projects 



## Analytics / Measuring Success


## Feature Overview 




## Feature Overview

### What to know about this feature


## Backend



### How to Access and Test


## Frontend



## Design & UX



### Flow diagrams





