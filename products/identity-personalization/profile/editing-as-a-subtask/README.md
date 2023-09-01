
# Feature Overview: Editing as a Sub-Task 

**Last updated:** 9/1/23 (added links to Sketch)

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

During the [useability study to add email as a channel](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/usability-study-add-email-jan-2023), we noticed that users were struggling with the current update flow for updating email or mobile phone when attempting to view the notification settings. The reengineered workflow reduces the cognitive load for updating data points that live elsewhere in the profile.

**Related/Associated product(s)**

This feature always sits between two products and allows users to "Edit as a Sub-Task". 

For example, a user on the notification settings screen will see a call to action advising them of missing information. Following the CTA will allow them to begin the sub-task and they'll be prompted to enter in the missing contact information. Once submitted, the user will return them to the notifications screen. 
- [Notification Settings](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences)
- [Contact information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information)

## Problem Statement 
> *Describe the challenge / pain point you seek to address.:* 

This feature aims to reduce context switching/cognitive load for end users by reimagining the way we allow users to edit-as-a-subtask. By changing the proces we hope to reduce confusion to avoid disorienting users. This ties to OCTO-DE's mission to provide tools to help veterans/personalize their online experience. 


## Desired User Outcomes

This new process avoids context switching that exists within alternative/previously existing workflows.


## Undesired User Outcomes
A user could forget what task they are working on and navigate away from the platform. 

## Desired Business Outcomes

This is a way to simplify updates that reduces complexity for the end user. This update helped memory impared veterans when engaging with the site.

We'll hopefully see a reduced number of calls to the VA where users are seeking support to figure out how to update their Notification Settings.

## Undesired Business Outcomes
Increased complexity for end users resulting in confusion, however, we're hopeful this change will reduce confusion.

---






## Analytics / Measuring Success


## Feature Overview
 |Where|Status|
 |---|:-:|
 |Notification Settings Alert / CTA link| Pre Launch| 

### What to know about this feature


## Future places to use this feature 

### Profile landing page
- As of August 2023, in Personal information, there’s a link in the “bad mailing address” alert that could kick off the sub-task flow ([mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/JnRG2qz)).  This will likely get moved to the Profile hub once that's launched, since that will be the profile landing apge

### Direct deposit
- The “we don’t have a mailing address” alert has a link to add an address that could kick off the sub-task flow ([mock-up](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/pYAQ1Zo))

## Backend



### How to Access and Test


## Frontend



## Design & UX

### Sketch files
- [Mobile](https://www.sketch.com/s/1fd4d140-84ad-4301-9c74-d5cebc4a012d/p/06F02913-A0E1-4801-9D24-86E8DC71BB17/canvas)
- [Desktop](https://www.sketch.com/s/1fd4d140-84ad-4301-9c74-d5cebc4a012d)

### Flow diagrams
- This user flow can be kicked off from anywhere on VA.gov
- A visualization of the flow, once kicked off, will live on the [mobile page](https://www.sketch.com/s/1fd4d140-84ad-4301-9c74-d5cebc4a012d/p/06F02913-A0E1-4801-9D24-86E8DC71BB17/canvas) of our Sketch files (not yet created as of 9/1/23)



