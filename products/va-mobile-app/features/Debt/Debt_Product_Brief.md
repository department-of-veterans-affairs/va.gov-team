# VA Debt within Health & Benefits Mobile App - Product Brief 

[#4352](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/4352)

Version 1: July 2022

## Problem Statement

### Current Experience ###

* How does it currently function in the app or elsewhere?  How does this affect Veterans?  Highlight any current pain points.

Veterans accrue debt to VA that they need to pay back but there was no visibility into it.  There’s now a view of this.
NOTE: There’s a difference between money owed to VA and debt. In this case, debt means payments due that have already been sent to DMC (debt management center) after departments have tried to recoup the debt. 

The feature on VA.gov looks to be pretty letters focused
See debt letters mvp discovery readout and project brief


It's common for Veterans to have more than one type of debt, particularly with education
Dropping a class, changing enrollment, or a mistake on the school's end results in separate housing, tuition, and books debts
These debts are listed individually and result in separate letters from the DMC
"The letter from the regional office will have all of them combined, but each debt is treated separately so they will get 3 separate letters."

Debt
Accrues for variety of reasons, health copays on VHA side and usually overpayments on VBA side

VA sends out debt letters that are not always helpful
Debt goes to treasury (Debt Management Center)
Paper letter & clock starts
The VA sends out millions of letters (~2.5MM) yearly and have approximately 600,000-700,000 accounts of active debt at a time.

Veterans can work out payment plan

We’re also working on surfacing payments in the top-level nav 

Not a lot of external dependencies so good to balance with less certain projects

[2022-01 My VA benefit payment and debt Info and onsite notifications research](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/64)
May suggest that they are going to recommend to redo this experience
Focus on addressing IA issues

### Desired Outcomes ###

* What do we want the experience to be like for Veterans and/or other users?

Functionality exists within the VA Health & Benefits App that allows Veterans to view and manage their VA Debt.

## Assumptions and Level of Confidence

1. What assumptions are we making about this problem?  How confident are we about these assumptions?

## Risks

1. What are the things that could throw a wrench in our efforts? 
    1.  Are there steps we can take to mitigate these risks?
  
New team and the team that built it is gone
Documentation?

Be careful not to straight adopt VA language here because it could be confusing to Veterans.
Debt and money that you owe


## Business Goals
* How would this benefit VA?
* Which OCTO and Program goals does this tie to?

## Roadmap

**V1**

* What scope would be included in the v1/MVP?
* 
These are the logical parts of debt we should review with other teams and consider when planning our technical and product approach. 
* Displaying Debt
* Helping Veterans to understand level of urgency 
* Helping to prevent debt
* Helping to flag early
* Timely reminders before a debt is charged
* Flagging when something is wrong and then being able to change it
  * Have to call a number (now)
  * Very frustrating experience
  * Is there a journey map for this
* Can Veterans get a waiver
* Helping to get debt resolved
  * Taking action


**V2 and beyond**

* What would we save for later iterations?

## Technical Approach

*	Are there other VA groups or tools we need to work with?

## Measuring success 

*	What metrics can we watch to see if our efforts are reaching the desired outcomes?

## Stakeholders

* Who within VA do we need to ensure we work with?  Who has ‘veto’ power?

Business owner is Jason Hoge, Chief of Treasury, Education, and Outreach; only engage if Matt Self says to
Matt Self, OCTO, owns Benefits portfolio for VA.gov 
Samara Strauss, OCTO, Authed Exp lead. (This team is working to build in-browser debt notifications)

Matt Self is PO for VA.gov product
Informed: Paul Shute

## Open Questions

* What do we need to learn before moving forward?

How does payment show up in VA.gov since the payment is just applied to your debt?
Just view or also pay debt?

Building what exists today or finding something mobile specific to improve?

Who manages payments?
Pay.gov 


## Important Links
