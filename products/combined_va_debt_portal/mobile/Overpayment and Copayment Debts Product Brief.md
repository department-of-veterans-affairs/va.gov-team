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

## Desired Outcomes

* Veterans will want to view their benefit overpayment and medical copayment debt on the mobile app to understand how much money they owe to the VA.   
* Veterans will want to view details related to the benefit overpayment and medical copayment debts on the mobile app so they understand why that debt exists.

## Measuring Success

### Key Performance Indicators (KPIs)

* Total number of views of benefit overpayments and medical copayments. We expect this to be a non-zero amount and will increase once overpayments and copayments are viewable in the app. We will track the total number of views on a monthly basis.  
* Overall app volume. We expect an increase in overall app volume as benefit overpayments and medical copayments debt information are implemented within the app. We will track the overall app volume on a monthly basis.  
* Total number of clicks on the link to access VA.gov. We expect that Veterans will want to make a payment towards their benefit overpayment and medical copayment debts, and that this non-zero amount will increase. We will track the total number of clicks on the link to access VA.gov on a monthly basis. 

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
* According to the Financial Management Team, Veterans can have a lot of copayment debts.    
* The Financial Status Report (VA Form 5655\) is a form to request debt resolution, debt compromise, or monthly debt payments.    
* The streamlined waiver path of the Financial Status Report (FSR \- VA Form 5655\) is currently live and provides Veterans who meet qualifications to bypass sections of the FSR. This waiver will only apply to Veterans who have copays and reduces the time required to complete the Financial Status Report (which is \~60 minutes).    
* [Here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/benefits-memorials-2/staging-users-debtproducts.md) is the Debt Resolution Staging Users by Product, with \+81 being a good [test user](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)

## Solution Approach

* The MVP to provide Veterans with the ability to make a debt payment, request help with their debt, or dispute a debt will include linking them to their Debt Portal on VA.gov. In future iterations, we plan to allow Veterans to take these actions within app, so Veterans have a seamless user experience. As of April 2025, this is dependent on the Financial Management Team.

## Decision Log

| Date | Decision | Notes|
| --- | --- | --- | 
|5/7/2025| Demand Letters will not be part of this effort. |Demand Letters are not even included on VA.gov, but something the Financial Management team is working on. No timeline was provided.|
|5/8/2025| Once the new Lighthouse API for Copayment Debts is built, the old API will not be deprecated.| The Financial Management team said they may reduce the data of the previous API, but will continue to use it if data that isn't available on the new one (example the statements).|
|5/14/2025| Copayments will be included as a part of the MVP. | The Financial Management team is working on getting a new Lighthouse API for Copayment Debts. There is no official timeline on the API yet, but is top priority and the Financial Management team believes it could be ready in a few months. This additional API data will allow Veterans to see the current status of their copay balance and not have to see data from their last statement, which could be almost a month old and not reflective of any recent payments or changes that have occurred.|
|5/14/2025| We will plan to include copayment statements as part of the MVP. | If we learn that this will be a LOE from engineering, then, we will scope back on this and release as part of v2.|
|5/21/2025| We will not include notifications as part of MVP. | The decision was made at our VA/PO sync with Ryan Thurlwell and Michelle, to include notifiactions when we release a different Debt Service feature, such as when Veterans are able to make a payment for their debts within the app.| 
