# Statuses & What Happens Next

## Statuses

- [pending_soc](#pending-soc)
- [pending_form9](#pending-form-9)
- [pending_certification](#pending-certification)
- [pending_certification_ssoc](#pending-certification-ssoc)
- [remand_ssoc](#remand-ssoc)
- [pending_hearing_scheduling](#pending-hearing-scheduling)
- [scheduled_hearing](#scheduled-hearing)
- [on_docket](#on-docket)
- [at_vso](#at_vso)
- [decision_in_progress](#decision-in-progress)
- [bva_development](#bva-development)
- [stayed](#stayed)
- [remand](#remand)
- [bva_decision](#bva-decision)

## Closed statuses

The following will be closed after these statuses and will not have a "what happens next" section. We have a logic to show a message that says appeal has been closed after status becomes inactive. 

- [field_grant](#field-grant)
- [withdrawn](#withdrawn)
- [ftr](#ftr)
- [ramp](#ramp)
- [reconsideration](#reconsideration)
- [death](#death)
- [other_close](#other-close)


## Pending SOC
**API**: pending_soc
**Logic**: When the appeal has not yet received an SOC

#### Title
A Decision Review Officer is reviewing your appeal

#### Description
The Veterans Benefits Administration received your Notice of Disagreement. A Decision Review Officer will review all of the evidence related to your appeal, including any new evidence you sent. The officer may contact you to request additional evidence or medical examinations, as needed. When the officer has completed their review, they will determine whether or not they can grant your appeal.

### What happens next?
What happens next depends on whether the Decision Review Officer has enough evidence to decide in your favor. 

#### Option 1 title 
The Veterans Benefits Administration will grant some or all of your appeal

#### Description 
**If the Decision Review Officer determines that there is enough evidence to grant one or more of the issues on your appeal**, they will make a new decision. If this decision changes your disability rating or eligibility for VA benefits, you should expect this change to be made in 1 to 2 months.

-- or --

#### Option 2 title 
The Veterans Benefits Administration will send you a Statement of the Case

#### Description
**If the Decision Review Officer determines that there is not enough evidence to fully grant your appeal**, they will send you their findings in a document called a Statement of the Case. You can then decide whether to continue your appeal to the Board of Veterans’ Appeals.
 
 
## Pending form 9
**API**: pending_form9
**Logic**: When the appeal has an SOC but not a Form 9

#### Title
Please review your Statement of the Case

#### Description
The Veterans Benefits Administration sent you a Statement of the Case on [date]. The Statement of the Case explains the reasons why they could not fully grant your appeal. 

If you don’t agree with the Statement of the Case, you can continue your appeal to the Board of Veterans’ Appeals. To do this you must complete and return a VA Form 9 within 60 days.

### What happens next?

If you return a VA Form 9 within 60 days, what happens next depends on whether you also submit new evidence.

#### Option 1 title
Your appeal will be sent to the Board
#### Description
**If you don’t submit new evidence after the Statement of the Case on [date]**, the Decision Review Officer will finish their review and transfer your case to the Board of Veterans’ Appeals.

-- or --

#### Option 2 title
The Veterans Benefits Administration will send you a Supplemental Statement of the Case
#### Description
**If you submit new evidence after the Statement of the Case on [date]**, the Decision Review Officer will need to write a Supplemental Statement of the Case before transferring your case to the Board of Veterans’ Appeals. Once your appeal is transferred, new evidence can be sent directly to the Board and will not be reviewed by the Veterans Benefits Administration.
 
 
 
## Pending certification
**API**: pending_certification
**Logic**: When the appeal has not been certified but has a Form 9

#### Title
The Decision Review Officer is finishing their review of your appeal

#### Description
The Veterans Benefits Administration received your Form 9 and will transfer your appeal to the Board of Veterans’ Appeals. Before doing so, the Decision Review Officer must certify that they have finished reviewing all of the evidence related to your appeal.

### What happens next?
What happens next depends on whether you submit new evidence.

#### Option 1 title
Your appeal will be sent to the Board
#### Description
**If you don’t submit new evidence after the Statement of the Case on [date]**, the Decision Review Officer will finish their review and transfer your case to the Board of Veterans’ Appeals.

-- or --

#### Option 2 title
The Veterans Benefits Administration will send you a Supplemental Statement of the Case

#### Description
**If you submit new evidence after the Statement of the Case on [date]**, the Decision Review Officer will need to write a Supplemental Statement of the Case before transferring your case to the Board of Veterans’ Appeals. Once your appeal is transferred, new evidence can be sent directly to the Board and will not be reviewed by the Veterans Benefits Administration.

## Pending certification SSOC
**API**: pending_certification_ssoc
**Logic**: When the appeal has not been certified but has an SSOC

#### Title
Please review your Supplemental Statement of the Case

#### Description
The Veterans Benefits Administration sent you a Supplemental Statement of the Case on [date]. This is because:
•	You, your legal representative, your health care provider, or VA added new evidence to your appeal, and/or
•	VA found it had further duty to assist you in developing your appeal, such as helping you get treatment records or providing a physical exam if needed. 

### What happens next?
What happens next depends on whether you submit new evidence.

#### Option 1 title
Your appeal will be sent to the Board
#### Description
**If you don’t submit new evidence after the Supplemental Statement of the Case on [date]**, the Decision Review Officer will finish their review and transfer your case to the Board of Veterans’ Appeals.

-- or --

#### Option 2 title
The Veterans Benefits Administration will send you a Supplemental Statement of the Case
#### Description 
**If you submit new evidence after the Supplemental Statement of the Case on [date]**, the Decision Review Officer will need to write a Supplemental Statement of the Case before transferring your case to the Board of Veterans’ Appeals. Once your appeal is transferred, new evidence can be sent directly to the Board and will not be reviewed by the Veterans Benefits Administration.

## Remand SSOC

**API**: remand_ssoc
**Logic**: When the AOJ is working the remand and there is an SSOC

#### Title
Please review your Supplemental Statement of the Case

#### Description
The Veterans Benefits Administration sent you a Supplemental Statement of the Case on [date] because after completing the remand instructions from the Board, they couldn’t fully grant your appeal.

### What happens next
What happens next depends on whether you submit new evidence.

#### Option 1 title
Your appeal will be returned to the Board
#### Description
**If you don’t submit new evidence after the Supplemental Statement of the Case on [date]**, the Veterans Benefits Administration will finish their work on the remand and return your case to the Board of Veterans’ Appeals.

-- or --

#### Option 2 title
The Veterans Benefits Administration will send you a new Supplemental Statement of the Case
#### Description
**If you submit new evidence after the Supplemental Statement of the Case on [date]**, the Veterans Benefits Administration will need to write a new Supplemental Statement of the Case before returning your case to the Board of Veterans’ Appeals. 
 

## Pending hearing scheduling
**API**: pending_hearing_scheduling
**Logic**: When the appeal has been certified and there is a pending Board hearing request

#### Title
You’re waiting for your hearing to be scheduled

#### Description
You requested a [type] hearing on your Form 9. When your hearing is scheduled, you will receive a notice in the mail at least 30 days before the hearing date.

#### What happens next? 

#### Title
You will have your [type] hearing
#### Description
At your hearing, a Veterans Law Judge will ask you questions about your appeal. A transcript of your hearing will be made and added to your appeal file. The judge will not make a decision about your appeal at the hearing. Learn more about hearings, including how to request a different type of hearing or withdraw your hearing request.


## Scheduled hearing 
**API**: scheduled_hearing
**Logic**: When the appeal has been certified and there is a Board hearing scheduled

#### Title
Your hearing has been scheduled

#### Description
Your [type] hearing is scheduled for [date] at [location]. 

### What happens next?

#### Title
You will have your [type] hearing.
#### Description
Your hearing is scheduled for [date] at [location]. At your hearing, a Veterans Law Judge will ask you questions about your appeal. A transcript of your hearing will be taken and added to your appeal file. The judge will not make a decision about your appeal at the hearing. 

## On Docket  
**API**: on_docket
**Logic**: When the appeal has been certified and any pending Board hearing requests are resolved, but the appeal is not yet assigned to an attorney

#### Title
Your appeal is waiting to be assigned to a judge

#### Description
Your appeal is at the Board of Veterans’ Appeals waiting to be assigned to a Veterans Law Judge. Staff at the Board will make sure that your case is complete, accurate, and ready to be decided by a judge.

### What happens next?

#### Title
The Board will make a decision

#### Description 
A Veterans Law Judge, working with their team of attorneys, will review all of the available evidence and write a decision. For each issue you are appealing, they can decide to:

 • **Grant:** The judge disagrees with the original decision and decides in your favor.
 • **Deny:** The judge agrees with the original decision.
 • **Remand:** The judge sends the issue back to the Veterans Benefits Administration to gather more evidence or to fix a mistake before deciding whether to grant or deny.

**Note:** About 60% of all decisions have at least 1 issue remanded.
 
 
## At VSO  
 
**API**: at_vso
**Logic**: When the appeal is in location 55, at a VSO

#### Title
Your appeal is currently with your Veteran Service Organization

#### Description
[The American Legion] is currently reviewing your appeal to make additional arguments in support of your case. For more information, please contact [The American Legion].

### What happens next?
#### Title
The Board will make a decision

#### Description 
Once your representative has completed their review, your case will be returned to the Board. A Veterans Law Judge, working with their team of attorneys, will review all of the available evidence and write a decision. For each issue you are appealing, they can decide to:

 • **Grant:** The judge disagrees with the original decision and decides in your favor.
 • **Deny:** The judge agrees with the original decision.
 • **Remand:** The judge sends the issue back to the Veterans Benefits Administration to gather more evidence or to fix a mistake before deciding whether to grant or deny.

**Note:** About 60% of all decisions have at least 1 issue remanded.


## Decision in progress
 
**API**: decision_in_progress
**Logic**: When the appeal has been assigned to an attorney

#### Title
A judge is reviewing your appeal

#### Description
Your appeal is at the Board of Veterans’ Appeals being reviewed by a Veterans Law Judge and their team of attorneys. If you submit evidence that isn’t already included in your case, this may delay your appeal.

### What happens next?

#### Title
The Board will make a decision

#### Description 
A Veterans Law Judge, working with their team of attorneys, will review all of the available evidence and write a decision. For each issue you are appealing, they can decide to:

 • **Grant:** The judge disagrees with the original decision and decides in your favor.
 • **Deny:** The judge agrees with the original decision.
 • **Remand:** The judge sends the issue back to the Veterans Benefits Administration to gather more evidence or to fix a mistake before deciding whether to grant or deny.

**Note:** About 60% of all decisions have at least 1 issue remanded.

## BVA development

**API**: bva_development
**Logic**: When the appeal has been assigned to attorney but is currently in abeyance

#### Title
The judge is seeking additional information before making a decision

#### Description
The Board of Veterans’ Appeals is seeking evidence or an outside opinion from a legal, medical, or other professional necessary to make decision about your appeal.

### What happens next?

#### Title
The Board will make a decision

#### Description 
A Veterans Law Judge, working with their team of attorneys, will review all of the available evidence and write a decision. For each issue you are appealing, they can decide to:

 • **Grant:** The judge disagrees with the original decision and decides in your favor.
 • **Deny:** The judge agrees with the original decision.
 • **Remand:** The judge sends the issue back to the Veterans Benefits Administration to gather more evidence or to fix a mistake before deciding whether to grant or deny.

**Note:** About 60% of all decisions have at least 1 issue remanded.

_**NOTE FOR DEVELOPER**_ - If there aren't any issues for any of the sections, do not show header

## Stayed

**API**: stayed
**Logic**: When the appeal has been stayed

#### Title
The Board is waiting until a higher court makes a decision

#### Description
A higher court has requested that a group of appeals currently before the Board of Veterans’ Appeals be held open. This is because the decision the court makes on a different appeal  could impact your appeal.

### What happens next?

#### Title
The Board will make a decision

#### Description 
A Veterans Law Judge, working with their team of attorneys, will review all of the available evidence and write a decision. For each issue you are appealing, they can decide to:

 • **Grant:** The judge disagrees with the original decision and decides in your favor.
 • **Deny:** The judge agrees with the original decision.
 • **Remand:** The judge sends the issue back to the Veterans Benefits Administration to gather more evidence or to fix a mistake before deciding whether to grant or deny.

**Note:** About 60% of all decisions have at least 1 issue remanded.

## Remand
**API**: remand
**Logic**: When the Board has made a decision that contains a remand

#### Title
The Board made a decision on your appeal

#### Description
The Board of Veterans’ Appeals sent you a decision on your appeal. Here is an overview of the decision:

[outline of issues by whether they were allowed, denied, or remanded]
Allowed - The judge overrules the original decision and finds these issues in your favor
Denied - The judge upholds the original decision for the following issue
Remand - The judge needs additional evidence to be collected or a procedural error to be corrected for the following issue

The case is returned to the VBA to complete a “remand order.
![image](https://user-images.githubusercontent.com/13420618/35200415-03935dce-fedc-11e7-94c8-69fe205d4c4e.png)

_**NOTE FOR DEVELOPER**_ - If there aren't any issues for any of the sections, do not show header

If this decision changes your disability rating or your eligibility for VA benefits, you should expect this adjustment to be made in 1 to 2 months.

### What happens next?

#### Title 
The Veterans Benefits Administration completes the remand instructions
#### Description 
They may contact you to request additional evidence or medical examinations, as needed. When they have completed the remand instructions, they will determine whether or not they can grant your appeal. If not, your appeal will return to the Board of Veterans’ Appeals for a new decision.

## BVA decision

API: bva_decision
Logic: When the Board has made a final decision

### Title 
The Board made a decision on your appeal

### Description
The Board of Veterans’ Appeals sent you a decision on your appeal. Here is an overview of the decision:

[outline of issues by whether they were granted or denied]
Allowed - The judge overrules the original decision and finds these issues in your favor
Denied - The judge upholds the original decision for the following issue
![image](https://user-images.githubusercontent.com/13420618/35200393-c05acda8-fedb-11e7-8371-d5fafd90c019.png)


If this decision changes your disability rating or eligibility for VA benefits, you should expect this adjustment to be made in 1 to 2 months.

## Field grant

**API**: field_grant
**Logic**: When the appeal has been closed due to a field grant

#### Title
The Veterans Benefits Administration granted your appeal

#### Description
The Veterans Benefits Administration agreed with you and decided to overturn the original decision. If this decision changes your disability rating or eligibility for VA benefits, you should expect this adjustment to be made in 1 to 2 months. 

## Withdrawn

**API**: withdrawn
**Logic**: When the appeal has been closed due to the Veteran withdrawing

#### Title
You withdrew your appeal

#### Description
You have opted to not continue your appeal. If this information is incorrect, please contact your Veteran Service Organization or representative for more information.
 
## Failure to respond 
 
**API**: ftr
**Logic**: When the appeal has been closed due to failure to respond

#### Title 
Your appeal was closed

#### Description
You did not take an action VA requested in order to continue your appeal. If this information is incorrect, or if you want to reopen your appeal, please contact your Veteran Service Organization or representative for more information.

## RAMP

**API**: ramp
**Logic**: When the appeal has been closed due to opting in to RAMP

#### Title
You opted in to the Rapid Appeals Modernization Program (RAMP)

#### Description
You chose to participate in the new supplemental claim or higher-level review lanes. This does not mean that your appeal has been closed. If this information is incorrect, please contact your Veteran Service Organization or representative as soon as possible. 

At this time, Vets.gov is not able to provide information about appeals that are part of RAMP.

## Reconsideration

**API**: reconsideration
**Logic**: When the appeal has been closed due to a motion for reconsideration being denied

#### Title
Your Motion for Reconsideration was denied

#### Description
The Board of Veterans’ Appeals declined to reopen your appeal. Please contact your Veteran Service Organization or representative for more information.

## Death

**API**: death 
**Logic**: When the appeal has been closed due to death of the Veteran

#### Title
The appeal was closed

#### Description
VA records indicate that [Veteran name] is deceased, so this appeal has been closed. If this information is incorrect, please contact your Veteran Service Organization or representative as soon as possible.

## Other close

**API**: other_close
**Logic**: When the appeal has been closed for some other reason

#### Title
Your appeal was closed

#### Description
Your appeal was dismissed or closed. Please contact your Veteran Service Organization or representative for more information.

