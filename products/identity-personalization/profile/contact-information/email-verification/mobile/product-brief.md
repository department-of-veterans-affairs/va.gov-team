# Email Verification (mobile) Product Brief

## Overview

To create a [VA.gov](http://VA.gov) account, Veterans must first enter an email address and verify their identity. Their email address is necessary if they log in to their account through [ID.me](http://ID.me) or [Login.gov](http://Login.gov). The email address that a Veteran uses to set up their account is then used for important communications from the VA. 

Currently, there is no verification process on the web and the VAHB app to ensure that, over time, the email address is valid and being monitored by the user. Veterans with stale email addresses can lead to reduced engagement, and the VA is unable to ensure that they are properly communicating with that user. 

As of July 2025, the VA Profile team is working to implement an email verification process on [VA.gov](http://VA.gov). They will require the Veteran’s email address stored in [VA.gov](http://VA.gov) Profile to be verified once a year. After this is created on the web, we will need to integrate it with the email verification process on the VAHB mobile app, ensuring that VAHB has the most up-to-date email addresses.   

## Problem Statement

The VA wants to ensure that important email communications reach Veterans on the mobile app. How might we ensure that the email address a Veteran actively uses is the email address on file within the mobile app and that Veterans are aware of which email address is receiving VA communications from the VAHB app?  

## Desired User Outcomes

* Users understand which email addresses are receiving important VA communications and can update them if the email addresses have become stale.   
* The user experience for validating and confirming the correct email address is straightforward and aligns with industry standards. 

## Desired Business Outcomes

* Email addresses stored in the Profile section of the VAHB app are required, validated, and confirmed as accurate by the user at least once a year.  
* The VAHB Mobile App has affinity with the web experience.

## Measuring Success

### Key Performance Indicators (KPIs)

* The total number of notifications that will alert Veterans to verify their email address on the mobile app.   
* The total number of Veterans who verify the email address that is listed is accurate on the mobile app.  
* The total number of Veterans who have updated their email address to a different address than the one originally listed on the mobile app. 

### Supporting OCTO OKRs:

1.3: 100% of our transactions received via our digital experiences are either processed correctly or we have notified the user of an error.   
2.2: We have reduced the total error rates in our platform by 50% compared to Q4 2024 towards a goal of less than 1% per endpoint. 

## Assumptions

* We assume that all background research and direction completed by the VA Profile team is accurate.

## Important Notes/Decisions/Background

* The VA Profile team is creating an email verification process for [VA.gov](http://VA.gov). The Mobile Feature Support (MFS) team will be responsible for implementing the email verification process on the mobile app. TBD on when this will be implemented on [VA.gov](http://VA.gov). 

## Solution Approach

* The email verification user flow will be implemented on [VA.gov](http://VA.gov) (by the VA Profile team) first, then it will be implemented on the mobile app.   
* The email verification user flow on the mobile app will align with the web user flow, so that this does not cause confusion for users.  
* Once the email verification process has been implemented on [VA.gov](http://VA.gov), the MFS team will conduct technical discovery to make sure that we understand any nuances on the mobile app.   

## Reference Materials

### Communications

<details>
  
- Team Name: Mobile Feature Support  
- Slack channel: \#mobile-feature-support-public   
- Product POCs:  
  - Michelle Middaugh, VA Product Owner, Mobile Feature Support  
  - Ryan Thurlwell, VA Lead, VA Mobile App  
  - TBD VA Profile 

</details> 

## Stakeholders 

#### Team Members

<details>  
   
 - DEPO Lead: Michelle Middaugh 
 - PM: Natalie Gibbons  
 - Engineering: Alex Teal  
 - Research: Emily DeWan
 - Design: Natasha Huckleberry
