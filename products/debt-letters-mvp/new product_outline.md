# Product Outline Template

#### Communications
- Team Name: Benefits and Memorials 2 (BAM2)
- GitHub Label: Debt Letters MVP
- Slack channel: [#vsa-bam-2](https://dsva.slack.com/channels/vsa-bam-2)
- Product POCs: Matthew Self
- Stakeholders: Jason Hoge, Thomas Corley, Melissa Rebstock

#### Team Members
|Name|Role|
|----|----|
|Matthew Self| DSVA Lead| 
|Leah Keeler | Product Manager|
|Cameron Testerman | BE Engineer|
|Brad Conley | FE Engineer|
|Mahariel Rosario | FE Engineer|
|Riley Orr | Designer|
|Becca Walsh | Designer|
---

## Overview
We will give Veterans who have incurred a debt with the VA a place on VA.gov that will act both as a single landing page that explains the process of debt management at the VA, as well as the ability to be notified when new communications about debt are added to their file so they can view them on VA.gov after logging in.

## Problem Statement
Communications about debt, which are delivered principally through the paper mail service, are sporadic, and untimely, and often times go unread due to a variety of reasons (misplaced, didn’t open, etc.). This makes keeping track of and resolving debt difficult, time-consuming, and stressful for Veterans.

## How Might We
- Make the process of debt management and communication more clear and friendly to Veterans?
- Make the receipt of debt communications more timely for Veterans?
- Give every Veteran the information they need to resolve their debt in the most efficient manner possible?
- Alert Veterans to the fact their are new communications from the VA about a debt?
- Help Veterans understand the nature and origin of their debts?
- Ensure digital communications aren't communicating information that is contradictory to paper letters?
 
## Desired User Outcomes

Beyond the general benefits of moving to a digital platform, Veterans would specifically have much more timely access to information about debts which could potentially have a dramatic impact by altering the amounts of expected benefits payments and affecting credit scores among other things. For many Veterans, understanding the origin of a debt, what options exist for resolving it, and being able to know immediately of changes in the status of the debt are the primary Veterans objectives this work will address.

With this feature implemented, Veterans will be able to visit a single location that will act as the hub for debt management at the VA. From this place they will be able to get general information about how to verify debt obligations, understand the options for debt resolution, and get access to other relevant content and information aimed at making the debt management process more transparent and clear to Veterans.

Additionally, logged-in Veterans will be able to see a listing of outbound debt communications debt letters that the VA has sent to the Veteran. This listing of debt letters will allow the Veteran to better understand the status of their account and have a digital repository which they can use to manage their debt with the VA. By providing these communications in a digital fashion along with some mechanism to notify the Veteran when new debt letters are added to the file, we will be shortening the potential time it takes Veterans to learn about and respond to changes in their account.

All of this combined, centralizing/improving content about VA debt management, providing digital access to debt letters, and providing new letter notifications will allow Veterans to more quickly and efficiently understand the debt management process, and more importantly, how it applies to their situation and what their options are. By having this critical understanding as quickly as possible empowers Veterans to take the actions they need in order to eliminate or minimize debts and other adverse outcomes.

## Desired Business Outcomes

- To provide a single digital destination on VA.gov for Veterans to get general information about managing debt with the VA
- To provide Veterans with timely digital access to outbound communications regarding debt they have incurred with the VA
- To comply with a portion of the Veterans and Benefit Transition Act of 2018: delivery of debt notices by electronic means
- To be able to notify Veterans electronically when new communications about a debt have been added to their account
- To modernize and improve the Veteran experience as it relates to debt management and communication

## Assumptions
- #### We will be able to figure out a way around the fact that the letters are stored in the eFolder only as PDF documents given that we don't *want* to just throw a PDF up on the website
- We will be able to access and parse the letter types we care about from the repository they are stored in, which is the VBMS eFolder
- We will be able to work with the VBMS team *efficiently* to have them intake and implement our requirements for the "notification" feature
- Letters stored in the eFolder will be consistently formatted and named
- We'll be able to navigate the configuration and payment model for notifications w/the various offices involved


## Solution Approach
Our solution approach will be phased.
#### Phase 1
We will focus on two distinct features:
- Debt Landing Page: This page will be accessible to anyone visiting the site and will be a single source of truth for debt management that clearly communicates to Veterans what their options are and will provide functionality and/or calls-to-action to give Veterans the ability to resolve debt in the way that is most appropriate for their situation
- View Debt Letters: This feature will be accessible to logged-in Veterans and will allow them to view both a listing and the content of debt letters in their eFolder

We've decided to start with these two features because through some early digging we've learned that an integration between VA.gov and the VBMS eFolder is already in place and looks promising in its ability to support our "view" use case, largely as-is. The more complex feature, the notifications piece, will have a number of technical and business hurdles that we'll have to address, including working with a partner development team to implement enhancements within VBMS that seem to suggest a natural phasing of the work.

#### Phase 2
- Notifications: We will implement a digital mechanism to alert Veterans to addition of new debt letters to their eFolder. This will likely be a configurable (opt-in/out?) email notification that will give Veterans the ability to easily navigate directly to the newly added communication on VA.gov
- Expanded Letter Types: As new debt letter types are categorized and added to the document taxonomy and VBMS eFolder, we will work with VBMS to add support for them

Because both of these features have more complicated external dependancies (DMC, GovDelivery, VBMS) we plan to implement them after delivering more immediate user value in Phase 1.


-Debt Status: The DMC is able to provide various debt status via an API the created. Due to the large number of potential statuses, the initial early design prototype is to summarize the codes into categories that will make it easier to provide helpful content on next steps based on the type of debt. 

-Debt Detail and History: In order to provide the Veteran a better understanding of their debts, a debt detail page will have debt history that will relay statuses such as paid off, written off to collections or on hold. This will give hte Veteran a historical view of the debts and helpful content around what the next steps are to resolve, settle the debt. 

#### Out-of-Scope
The following we've decided specifically not to do for this project but could be good candidates for additional enhancements down the line:
- Support for non-Veteran user types; non-Veterans are as likely to incur debts as Veterans and have a similar series of interactions with the VA when they do
- Payments; we aren't modifying/unifying any of the payment portals
- Forms; there are a couple of forms (i.e., Financial Status Report) which don't appear to have digital versions yet; we aren't planning to change that here
- The .pdf's of the debt letters that will be downloaded from vbms eFolders may not be 508 compliant. Since we do not have control of the generation of those letters, this is out of scope for this project. If we area able to find out who is responsible for the generation of the letters, we will do due diligence to make them aware of the 508 requirements. 

## KPIs

Current Traffic from DMC Google analytics - 30 day. period 

Overall visitors 58k visitors 
va.gov/debtman  33K 
Payment Options 5K
Bounce Rate landing page 65%
Bounce Rate Payment options 35%

For MVP Release the KPIs we will be tracking is: 

Bounce Rate: Goal is to reduce bounce rate to be <50% with the hypothesis that Veterans will have teh ability to log in to see their debts 
Overall logged in users - Veterals will need to authenticate to see debs and debt letters
Overall debbt letters views/downloads wiht the hypothesis that tehy do not have the hard sopies of the letters if they chose to view/download electronically 

--- 

## Go-to-market Strategy
There is a multi-office working group organized by VEO with participation from the relevant stakeholders (DEPO, DMC, VBMS, OIT, AMO) that is facilitating comms. That being said, this is still largely being formulated and there are a number of considerations including legacy VA pages that we will have to work with DMC and in some cases individual business lines to make a determination on the appropriate path forward (deprecation, sustain, etc.).

## Target Launch Date
August 10, 2020 - MVP
Iteration 1- September, Notifications are dependent on our partner  team 

---

## Solution Narrative

### Current Status

### Key Decisions

---
   
## Screenshots

### Before

### After
