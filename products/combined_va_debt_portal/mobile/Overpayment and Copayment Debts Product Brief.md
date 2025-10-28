# Product Brief: Overpayment and Copayment Debts 

## Overview

Veterans can experience debt from the VA. The two types of debt that the Financial Management Team has focused on include: 

* Overpayments   
* Copayments (also referred to as copays)

Benefit overpayment debt can occur when a Veteran receives more compensation than they are entitled to, and it is handled by the Veterans Benefits Administration (VBA). Examples of overpayments include a dependent change from a divorce, or even when a Veteran receives education benefits for a class but then drops the class and does not report that. In these instances, the Veteran will owe money to the VA for such actions. 

Copayments are part of an individual's health insurance and are the amount of money owed for a specific healthcare service or prescription; the remainder of the cost is covered by insurance. Veterans with medical copayment debt from the VA have received care at a VA health facility. The Veterans Health Administration (VHA) manages medical copayments.  

Veterans can view their overpayment and copayment debts through the authenticated experience on VA.gov. After logging on, they can access their debt portal through the My VA tab. If overpayment or copayment debt exists, Veterans can take the following actions: 

* View the debt  
* Make a payment and resolve the debt online  
* Dispute charges   
* Request assistance from the VA for financial hardship (by completing the Financial Status Report, VA Form 5655\)  
* View resources about VA debt management

## Problem Statement

The mobile app does not have any debt-related information for Veterans to access. How might we provide Veterans with the ability to view the total amount owed for benefit overpayment and medical copayment debts, as well as the details related to that debt on the mobile app?  

## Bets to be Informed by Research

* Veterans will want an overview of their benefit overpayment and medical copayment debts on the mobile app.  
* Veterans will want to see details about their benefit overpayment and medical copayment debt on the mobile app to understand how much they owe for that debt.  
* Veterans might not understand overpayment and copayment debts and will want information on VA Debt Management resources and support.  
* Veterans will want information on steps to dispute a charge or request financial assistance, as well as be able to make a payment on their overpayment and copayment debt.

## Desired User Outcomes

* Veterans will want to view their benefit overpayment and medical copayment debt on the mobile app to understand how much money they owe to the VA.   
* Veterans will want to view details related to the benefit overpayment and medical copayment debts on the mobile app so they understand why that debt exists.

## Desired Business Outcomes

* Increase the visibility of these debts by the business, so that it provides additional awareness to Veterans, informing them that they owe money to the VA. By adding these details to the mobile app, gives Veterans a convenient way to view money they might owe the VA and then take the necessary actions on their debt/bill.

## Measuring Success

### Key Performance Indicators (KPIs)

* Total number of views of benefit overpayments and medical copayments from the **Activity tile**. We expect this to be a non-zero amount and will increase once overpayments and copayments are viewable in the app. We will track the total number of views on a monthly basis.
* Total number of views of benefit overpayments and medical copayments from the **Payment tab**. We expect this to be a non-zero amount and will increase once overpayments and copayments are viewable in the app. We will track the total number of views on a monthly basis.   
* Overall app volume. We expect an increase in overall app volume as benefit overpayments and medical copayments debt information are implemented within the app. We will track the overall app volume on a monthly basis.  
* Total number of clicks on the link to access VA.gov. We expect that Veterans will want to request help or dispute their debt or copay, and that this non-zero amount will increase. We will track the total number of clicks on the links to access VA.gov on a monthly basis. 
* Total number of clicks on the "Resolve Debt" and Resolve Copay" buttons. These buttons will allow users to begin the payment journey for their overpayment debt (on pay.va.gov) or copayment bill (on pay.gov). We expect this non-zero amount will increase. We will track the total number of clicks on each button to access the respective payment sites on a monthly basis.
* Total number of views of the PDF Copayment statements. We expect this to be a non-zero amount and expect that Veterans who have any copayment bills will want to view the PDF. We will track the total number of views on a monthly basis.
* Total number of error alerts shown to the user. We will want to track this metric to ensure that everything is functioning as intended and that if we see a high volume of errors, there is a problem that will need to be addressed. We will track the total number of errors on a monthly basis. 
* Total number of clicks on the empty state of benefit overpayments and medical copayments. We expect this to be a non-zero amount and want to track this as a metric to assess the design, and not a metric determining the success of the debt feature itself. This will be a temporary metric that is tracked for 6 months.
* Total number of clicks on the copy button within the overpayments and copayment pay screens. We expect this to be a non-zero amount and want to track this as a metric to assess the design, and not a metric determining the success of the debt feature itself. This will be a temporary metric that is tracked for 6 months.  

### Supporting OCTO OKRs:

O1: VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.

## Assumptions

* We assume all the background, research, and direction the Financial Management team provided is accurate.   
* We assume that Veterans want a similar web and mobile user experience when accessing their debt.  
* We assume that Veterans will continue to want to view overpayments and copayments debt separately.

## Important Notes/Decisions/Background

* The MFS team will work closely with the Financial Management Team on this initiative.  
* The resources and support page on VA Debt can be found [here](https://www.va.gov/resources/va-debt-management/).   
* From user research conducted by the Financial Management Team, they reported a key finding that “everyone was excited about the potential of a mobile app and the ability to manage their VA bills and debt in the mobile app”.    
* On VA.gov, overpayment and copayment debt information are separated on the debt portal.
* Statements are received for copayment debts, and demand letters are received for overpayment debts.
* Demand letters will not be part of this effort, as they are not even available on VA.gov. 
* For Veterans to pay their overpayments online, a new tab will open from VA.gov, taking them to [pay.va.gov](https://www.pay.va.gov/). According to the Financial Management team this system will be deprecated and Veterans will need a new method to process payments electronically.
* Pay.va.gov is using pay.gov in the background, to ensure that Veterans are submitting a payment for a specific debt.    
* For Veterans to pay their copayments online, a new tab will open from VA.gov, taking them to pay.gov. The Financial Management team is currently working with the pay.gov team to add a new functionality.
* There are only 6 months of copayment statements that are currently displayed in the debt portal.
* Copayment Statements are issued on the first of the month.
* Copays balance will updated monthly because the FM team is reliant on monthly statement data. This will potentially change as the FM team switches to a new API for balance information by the end of November 2025. Slack [thread](https://dsva.slack.com/archives/CPE4AJ6Q0/p1758143040792019?thread_ts=1757608693.242239&cid=CPE4AJ6Q0) for reference.
* Overpayments that have been paid on pay.va.gov are updated as soon as the Debt Management Center processes the Veteran's payment and updates their system. Slack [thread](https://dsva.slack.com/archives/CPE4AJ6Q0/p1758143040792019?thread_ts=1757608693.242239&cid=CPE4AJ6Q0) for reference.
* The FM team is working to allow Veterans to process a payment for Overpayments and Copayments within VA.gov and not leave the website. Overpayments will be changing to pay.gov first, then copayments. Current plan for the FM team as of September 18, 2025. Slack [thread](https://dsva.slack.com/archives/CPE4AJ6Q0/p1758143040792019?thread_ts=1757608693.242239&cid=CPE4AJ6Q0) for reference.
* According to the Financial Management Team, Veterans can have a lot of copayment debts. The FM team estimates anywhere from 0 to ~300 copays per year.
* Veterans are estimated to have anywhere from 0 to 30 overpayments. According to the FM team, currently there are 677, 117 Veteran accounts with overpayment debts + 69,058 Non-Veteran accounts (i.e. beneficiaries). Each account could potentially have more than one overpayment but the number isn't as high as the copay side.     
* The Financial Status Report (VA Form 5655\) is a form to request debt resolution, debt compromise, or monthly debt payments.    
* The streamlined waiver path of the Financial Status Report (FSR \- VA Form 5655\) is currently live and provides Veterans who meet qualifications to bypass sections of the FSR. This waiver will only apply to Veterans who have copays and reduces the time required to complete the Financial Status Report (which is \~60 minutes).
* As of 9/18/2025, the FM team will be making these additional changes to copays:
  * Payment History - Vista MVP: update balance information to move away from monthly statement data. This is only for Vista stations (Cerner/Oracle stations will follow later).
  * Pay.gov Integration for copays - Integrate pay.gov into the experience so Veterans can process a payment for a copay directly from the web experience.  
* During the FM // MFS sync (9/19/2025) the FM informed MFS that they are targeting to have the new Copay API developed. This will provide Copay data to be update on a 24 hour bases (occurs nightly). MFS team will need to work with FM team to make sure that mobile app aligns on messages. 
*  [Here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/benefits-portfolio/benefits-memorials-2/staging-users-debtproducts.md) is the Debt Resolution Staging Users by Product, with \+81 being a good [test user](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)
 

## Solution Approach

* The MVP to provide Veterans with the ability to make a debt payment, request help with their debt, or dispute a debt will include linking them to their Debt Portal on VA.gov. In future iterations, we plan to allow Veterans to take these actions within app, so Veterans have a seamless user experience. As of April 2025, this is dependent on the Financial Management Team.
* As of 10/6/2025 we will be implementing the new Copay API into the MVP release of Overpay/Copay. The MFS team will need to create the mobile API. 

## Decision Log

| Date | Decision | Note|
| --- | --- | --- | 
|5/7/2025| Demand Letters will not be part of this effort. |Demand Letters are not even included on VA.gov, but something the Financial Management team is working on. No timeline was provided.|
|5/8/2025| Once the new Lighthouse API for Copayment Debts is built, the old API will not be deprecated.| The Financial Management team said they may reduce the data of the previous API, but will continue to use it if data that isn't available on the new one (example the statements).|
|5/14/2025| Copayments will be included as a part of the MVP. | The Financial Management team is working on getting a new Lighthouse API for Copayment Debts. There is no official timeline on the API yet, but is top priority and the Financial Management team believes it could be ready in a few months. This additional API data will allow Veterans to see the current status of their copay balance and not have to see data from their last statement, which could be almost a month old and not reflective of any recent payments or changes that have occurred.|
|5/14/2025| We will plan to include copayment statements as part of the MVP. | If we learn that this will be a LOE from engineering, then, we will scope back on this and release as part of v2.|
|5/21/2025| We will not include notifications as part of MVP. | The decision was made at our VA/PO sync with Ryan Thurlwell and Michelle, to include notifiactions when we release a different Debt Service feature, such as when Veterans are able to make a payment for their debts within the app.| 
|6/12/2025| Veterans who need to pay an overpayment bill will be linked directly to www.pay.va.gov. | This discussion occurred since the MFS team found out that www.pay.va.gov will eventually go away and overpayment bills will eventually be paid in pay.gov. As of today, no timeline has been provided for when the transition will be finalized. This decision was made in the Financial Management OCTO Slack by Denise.| 
|6/30/2025| MVP Payment options will be in browser view.| This decision occurred during the Core Mobile Office Hours. Jonathan provided guidance that if a Veteran does not need to be authorized, it will be displayed in the browser view and will follow these guidelines to maintain consistency for Veterans.| 
|8/12/2025| Align Copayments with the same user pattern as Overpayments.| Based on results of research the user pattern that was designed for Overpayments tested the best, so we will update the user pattern for Copayments to match Overpayments. Michelle provided us with the direction to make the updates to the design on 8/12/25 during a UX//PO sync.|
|8/12/2025| Minimize use of accordions | This was feedback from ADE to reduce the number of taps to get to relevant information which would improve the UX for all users. Michelle provided us with the direction to make the updates to the design on 8/12/25 during a UX//PO sync.|
|8/13/2025| MVP will include the interim payment option for Overpayments and Copayments. | After conducting user testing, 10 out of 11 participants would use the payment interim payment solution for their debts. Michelle confirmed this decision during the VA//PO sync.|
|8/18/2025| Mobile **does not** need to account for the Chapter 33 alert. | The FM team expressed in a Slack thread (on the FM team's Slack channel) that they are going to be removing the Chapter 33 alert from VA,gov, since this was a temporary alert.|
|8/18/2025| Removed the "feedback-to-vet" label during UX refinement. | During UX refinement, Michelle provided approval for the team to move forward with "rework overpayments pay online info and Move or rename PDF statements. These are now items in the UX backlog that can be picked up to work on.|
|8/18/2025| Engineers can begin working on providing the Governance team with the data that will be cached for the overpayment/copayment initiative. | During Natalie // Michelle 1:1, Michelle provided approval for engineers to move forward on this effort and to remove the "feedback-to-vet" label.|
|8/26/2025| We will include accordions in our design. | During the MFS//Core Mobile UX sync, it was decided that we should use accordions in our feature design since mobile and web are different. This decision overrides the decision on 8/12 to "Minimize use of axcordions".|
|8/28/2025| UX will work on updating the copay account number and make design adjustments. | This feedback was discovered during user testing and Michelle approved that the team could remove the feedback-to-vet label in a Slack message.|
|9/4/2025| Veterans do not see paid overpayments or copayments. | This was an outstanding question that was asked [here](https://dsva.slack.com/archives/CPE4AJ6Q0/p1755620211706699). This is currently not being surfaced on the web and had FM engineers dig into the code for this. |
|9/4/2025| Remove the Feedback-to-vet to align alerts between mobile and web. | Michelle said that we could remove that label, and we have tickets in progress or completed that have captured that work. |
|9/4/2025| Completed Content and Flow Alignment between Mobile and Web. | Michelle said that we could consider this work done in a Slack thread. |
|9/4/2025| Understand how users navigate to payment website. | Michelle said that we could pass off the documentation to the Core Mobile team and close this out. |
|9/09/2025| At this current time, data is not available to describe a type of payment.| This type of data will be implemented across web and mobile in future iterations and includes details such as "partial payment" and "received via ACH". |
|9/10/2025| Mobile designs will include the Notice of rights and responsibilities for overpayments and copayments. | This notice is regulatory-related and needs to be included in the detail/overview pages. The FM team does not own the content. |
|9/15/2025| We got the approval from Michelle to remove the Feedback-to-Vet label during UX refinement. | During our UX refinement, Michelle reviewed and approved the content feedback that we received on the updated prototype, as well as told us to move forward with the following tickets: [850](https://github.com/department-of-veterans-affairs/va-mobile-feature-support/issues/850), [853](https://github.com/department-of-veterans-affairs/va-mobile-feature-support/issues/853), [852](https://github.com/department-of-veterans-affairs/va-mobile-feature-support/issues/852), and [849](https://github.com/department-of-veterans-affairs/va-mobile-feature-support/issues/849). |
|9/15/2025| Mobile designs do not need to include a note on eductional debts, since receivable ID went live on 9/15. | This was confirmed in a Slack [thread](https://dsva.slack.com/archives/CPE4AJ6Q0/p1757953910434839?thread_ts=1757707662.279659&cid=CPE4AJ6Q0). |
|9/16/2025| Veterans with 500 errors see the same error messages as 404 errors. | This was confirmed in a Slack [thread](https://dsva.slack.com/archives/CPE4AJ6Q0/p1758044068158549). |
|9/16/2025| Engineers can investigate Spike monitoring outside of Sentry. | During refinement Michelle provided approval for engineers to move forward on this effort and to remove the "feedback-to-vet" label. |
|9/17/2025| VBA diary codes 681 & 682 will surface the following action links: Pay your balance, request financial help, or dispute this bill. | This was confirmed in a [Slack](https://dsva.slack.com/archives/CPE4AJ6Q0/p1757445252670279) thread, but Denise will continue to review this as future iterations it would be beneficial to surface the link for the FSR form. |
|9/17/2025| The mobile MVP of overpay/copay will include One Thing Per Page. | The FM Team is planning to launch One Thing Per Page by 10/8 (pending staging review) and plans for the feature flag to be fully enabled by the end of Oct. 2025. This was confirmed in a [Slack](https://dsva.slack.com/archives/CPE4AJ6Q0/p1758144950625129?thread_ts=1757687041.799969&cid=CPE4AJ6Q0) thread. |
|9/17/2025| The mobile MVP will not include the Payment history for Copays. | The Financial Management team is pushing hard on this effort but does not have a date for that just yet. [Slack](https://dsva.slack.com/archives/CPE4AJ6Q0/p1758144950625129?thread_ts=1757687041.799969&cid=CPE4AJ6Q0) thread for reference. |
|9/18/2025| We will not include No History alert for MVP.| For Copayments the MFS engineers found code for this and Tom confirmed in [this](https://dsva.slack.com/archives/CPE4AJ6Q0/p1758214709665539?thread_ts=1756484262.963509&cid=CPE4AJ6Q0) Slack message that we do not need to include this alert. |
|9/22/2025| MFS will include the "It may take up to 4 business days for payments to reflect on your account" messaging under Current debts.| This decision aligns with the content that is on VA.gov and the decision is tracked in this [Slack](https://dsva.slack.com/archives/CPE4AJ6Q0/p1758204820816849?thread_ts=1757608693.242239&cid=CPE4AJ6Q0) thread. |
|9/30/2025| Unauthenticated pages will open in web browser, unless it's a form.| This decision was provided to the MFS team during our UX Core Mobile sync.|
|10/6/2025| The new Copay API data will be included in the MVP.| This decision was made by Denise and Michelle. The MFS team will be working to understand what design and content changes will need to be made. This will push out the release of Overpayments and Copayments to the mobile app.|
|10/7/2025| Midpoint feedback was vetted and approved.| During our sync it was decided we would move forward with feedback, except that we did not need to immediately act on the copy account number layout for MVP. [Here](https://dsva.slack.com/archives/C07SD9P7XB9/p1759954661735949) is the Slack message to confirm what was discussed during that meeting. |
|10/8/2025| Overpayments will be used in place of debts throughout design.| This content decision was announced in our FM//MFS sync and was feedback that was provided to the FM team.|
|10/9/2025| Since MVP release will include the new copay API, we met with the PM of the FM Team to capture the design and content updates that need to be made to MVP.| We will now include transaction history, remove the following content, "any payments you've made will not be reflected here until our system are updated with your next monthly statement", and update content within transaction history to state "Recent statement charges". At the time of our sync, there were no new limited messages that we needed to include.|
|10/21/2025| Completed Core Mobile Review.| This review occurred during our Core Mobile UX Review and feedback was documented in [this](https://github.com/department-of-veterans-affairs/va-mobile-feature-support/issues/955) ticket.|

## Features to consider for v2
This information was collected from [research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/research-findings.md), as well as working with the FM team to understand what is currently implemented when MFS plans to release MVP. 
| Date |Recommendation | Note|
| --- | --- | --- |
|9/23/2025| Provide a space for users to view resolved debt, and remove resolved debt from the current list of outstanding debts and bills.| Not currently technically feasible.|
|9/23/2025| Clarify why a debt exists. Add easy and actionable ways for users to learn why they have a particular debt, moving away from generic explanation.| Research needed on what is technically feasible.|
|9/23/2025| Add due dates for bills and debts on the Payments page to help users manage their finances at a glance.| Not currently technically feasible.|
|9/23/2025| Provide access to debt letters. If not possible, provide a clear explanation for why they can not be read in the app.| Research needed: will PII always block adding letters? Research needed: what is allowed to be written?|
|9/23/2025| Notification of an overpayment debt or copayment bill.|Research needed and will want to have the new Copayment API implemented so that data is updated within a 24-hour period.|

## Reference Materials

## Communications

<details>

- Team Name: Mobile Feature Support   
- Slack channel: \#mobile-feature-support-public   
- Product POCs:  
  - Michelle Middaugh, VA Product Owner, Mobile Feature Support  
  - Ryan Thurlwell, VA Lead, VA Mobile App
  - Denise Coveyduc, VA Product Owner, Financial Management Team
 

</details>

## Stakeholders 

#### Team Members

<details>
   
 - PM: Natalie Gibbons  
 - Engineering: Alex Teal  
 - Design: Natasha Huckleberry
 - Research: Emily DeWan

