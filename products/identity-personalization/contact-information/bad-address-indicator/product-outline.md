# Bad Address Indicator Product Outline

## POCs
- GitHub Label: Address Validation
- Slack channel: #vsa-authd-exp
- Keywords
     - Candidate Address Validation  
     - Address Change 
     
|Name|Role|Email|
|----|----|-----|
|Lisa Koenigsberg|DSVA Lead| lisa.koenigsberg@va.gov |
|Justin Pickett |Product Manager| jpickett@governmentcio.com |
|Samara Strauss |DSVA Designer| samara.strauss@va.gov |
|Arthur Green |Designer| agreen@governmentcio.com |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
|Amen Ra | FE Engineer| ara@governmentcio.com |
|Lihan Li | BE Engineer | lihan@adhocteam.us |
|Tze-chiu Lei | QA Analyst | tze@adhocteam.us |


---

### Table of Contents

# Executive Summary 
- [The Problem](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Hypothesis](#hypothesis)
- [Requirements](#requirements)
- [Constraints](#constraints)
- [Discovery Takeaways](#discovery-takeaways)
- [Decisions](#decisions)
- [The Plan](#the-plan)
- [KPIs](#kpis)

# Implementation Information
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [How to Access and Test](#how-to-access-and-test)
- [Error Handling](#error-handling)
- [Service Level Objective](#service-level-objective)
- [API Calls and Dependent Systems](#api-calls-and-dependent-systems)
- [Design](#design)
- [Screenshots](#screenshots)

---
 
# Executive Summary
Each address stored in Vet360 comes with an optional Bad Address Indicator (BAI). When BAI is true that means that the VA has had mail returned to it from that address, which means not only have the taxpayers paid for a bad government interaction, but also that the Veteran in question did not receive their benefit.

## The Problem
We receive returned mail back from Veteran addresses not recognized by Vet360, which is a major concern for several reasons:

1.  **Veterans are not receiving their mail because we have a bad mailing address on file for them** - This may mean they are not receiving their pension or disability payments, prescriptions or other important mail.
2.  **We currently do not have a good method of notifying Veterans we have a bad mailing address on file for them** - There is no current method of notifying Veterans that we have a bad mailing address and that they need to update their mailing address.
3.  **The VA loses money on return mail transactions**


## Solution Goals
1.  Implement an effective method of notifying Veterans that they have a bad mailing address.
2.  Clearly communicating they have a bad mailing address, that they need to update their mailing address and that they can do it on VA.gov or by calling into the VA.
3.  Displaying information regarding their bad mailing address status clearly on VA.gov
4.  Allowing them to update their address on VA.gov [Updating address UX is being optimized here] (https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/change-address/address-validation)

### User Goals
**As a user, I want to be notified as soon as possible that I have had returned mail from the VA**.

- The VA needs to efficiently communicate this to me through effective channels:  email, phone and/or VA.gov.
- The messaging needs to be clear that the returned mail is because of a bad mailing address.

**As a user, I want to be able to update my mailing address**

- It should be clear what action needs to be completed in order for the mail to be delivered to a good mailing address.

### Business Goals
As the authenticated experience team, we want to be able to do the following:

- Effectively communicate to the Veteran that they have a bad mailing address on file that is causing their mail to be returned.
- Cleary communicate what action(s) the Veteran needs to perform.
- Guide the Veteran to the Profile screen where they can update their mailing address.
- Provide confirmation that the Veteran has updated their mailing address successfully.


## Assumptions

- Veterans do not know they have had mail returned back to the VA.  They may think it's late or there was some other type of error.
- Notifying Veterans quickly after we receive returned mail will make it obvious to them that the VA takes this situation very seriously and will quickly act to rectify.
- Displaying messaging (as a modal alert or an inline alert) in specific areas on VA.gov will be an effective method to convey information about the Veteran's bad mailing address status and what action they can take.
- Displaying the bad address we have on file in the modal could be helpful to the Veteran.
- If our process of communication is clear and the messaging is effective, we can provide a better Veteran experience as well as save the VA and taxpayers money by limiting the returned mail at the VA.


## Questions

1. How do we currently communicate with the Veteran?  Can we send an email notifying them of a bad mailing address?
2. If we can send email notifications, where would we direct the Veteran in the messaging?  To VA.gov in general?  To the 'Change Address' page?
3. Will Veterans know they need to sign in to update their mailing address?
4. Will Veterans know where to go to update their mailing address?
5. Is it better to display the messaging in a modal intercept, after sign in on the VA.gov homepage - or do we utitlize a more passive method and display inline alerts on the Profile page (and various other areas)?
6.  Can we personalize the modal message with the Veteran's bad address on file?  Can we personalize the messaging with what type of mail has been returned? (Example: pension check, prescription refills, meeting/appointment mailinings)
7.  Should we consider a threshold value for returned mail items, in order to escalate the intensity of the messaging method? (Example:  if the threshold for returned mail items is 5, we may show a 'warning' alert the first 5 times mail is returned - after the threshold is reached we may escalete the messaging to an error status)


## Requirements

### Goals

1.  **Effective communication method** - The communication method needs to happen as quickly as possible after we realize a Veteran has been flagged for a bad address.  The communication needs to be clear about what is happening and next steps for the Veteran.
2.  **Messaging** - We need to make sure the messaging is displayed in all appropriate areas and it is easy for the Veteran to understand.
3.  **Wayfinding** - We should make it easy for the Veteran to navigate to their Profile page to update their mailing address.

### In Scope

1.  Figure out method of communication to the Veteran
2.  Messaging/Alerts
  - Modal/Alert placement and content
 3.  Wayfinding
  - Figure out best way to guide the Veteran to their Profile

## Constraints
- We may not be able to use email to notify the Veteran of their bad mailing address status


## Discovery Takeaways
- There are a few emails that VA.gov sends out: for 2FA, connecting accounts and now also Direct Deposit. 

- If a user is logged in, forms pre-populate with the address on file. The user has the ability to change that pre-filled content with a new address but that information is not then used to update the master record/profile today. 

- The Bad Address Indicator is just an on/off flag and not associated with any threshold.

- We have displayed modals on the VA.gov homepage.

- There is a design system modal version that allows us to place a CTA button in order to guide the Veteran to the Profile page to update their mailing address.

- If the user is signed in we can display personalize messaging, for example we can show them the bad address we have on file.

## Decisions


## The Plan


## KPIs

- Reduction in the amount of returned USPS mail
- Reduced errors in updating mailing address

Other metrics are qualitative:

1. Can Veterans quickly find how to update their mailing address?

### Objective
- 
### Tracking
- 
---

# Implementation Info

## Status


## Solution Narrative

- 


## How to Access and Test

**Staging**

- https://staging.va.gov/my-va/


## Error Handling


## Service Level Objective

## API Calls and Dependent Systems

Candidate Address Validation uses the ______ API ()



## On Call Support

#vsp-platform-support and #vsa-authd-exp slack channels

## Design 

[Designs are in this folder]().

### Screenshots

#### Before (Profile)
![]()

![]()
