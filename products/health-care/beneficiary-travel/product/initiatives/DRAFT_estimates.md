## 

All estimates assume we have the dependencies, designs, etc we need to implement

Total min \~ 24 weeks, total max \~38 weeks.

## Claims Management

Dev complete estimate: **min 6 weeks, max 8 weeks**  
Functionality:

* Show rejection reasons  
* Show attachment links (decision letter, appellate rights doc, receipts, etc)  
* Download attachments (decision letter, appellate rights doc, receipts, etc)  
* Show link to online appeal process

Unknowns:

* Ambiguity on what the exact features of claims management are

Risks:

* None

Dependencies:

* API connections built (in progress) and deployed (coming v2)

## Complex Claims: Submitting for non-SMOC expenses

Dev complete estimate: **min \~ 10 weeks, max \~ 14 weeks**  
Functionality:

* Start claim  
* Re-engage with existing claim  
* Add mileage expense  
* Add lodging expense  
* Add air travel expense  
* Add common carrier expense  
* Add meal expense  
* Add parking expense  
* Add toll expense  
* Get existing claim expenses  
* Remove expenses  
* Attach files  
* Remove files  
* Viewing files  
* Submit claim

Unknowns:

* Leverage current SMOC flow? Build an alternative entry point?  
* Is it sufficient to rely on the BTSSS CRM as a backing store for ‘incomplete’ claims?  
* What’s the best way to re-engage with ‘incomplete’ claims?  
* What data structures are required?   
* What data won’t VA.gov have that is needed by the endpoints?  
* What policies need to be implemented?  
* There is currently an edit capability for the attachments \- do we need this?

Risks:

* Not figuring out the priority of expenses reduces usefulness  
* Not knowing what policies restrictions exist increases the LOE  
* Many unknown-unknowns

Dependencies:

* API endpoints exist for adding/removing/viewing expenses  
* API endpoints exist for uploading/removing/viewing files

## Complex Claims: Submitting for non-simple mileage expenses

There may be a case where a user says “no” to “submitting only mileage?” and then needs to submit mileage AND toll, for example.

Dev complete estimate: **min \~ 6 weeks, max \~ 12 weeks**  
Functionality:

* Start claim  
* Re-engage with existing claim (may not need)  
* Add mileage expense  
* Add parking expense  
* Add toll expense  
* Attach receipts  
* Remove receipts  
* View receipts  
* Submit claim

Unknowns:

* The user experience will inform the difficulty of the implementation  
* Completing milestones in certain orders changes the estimate  
* Do we need to show veterans the route used to calc mileage?

Risks:

* None at this time

Dependencies:

* API endpoints exist for adding/removing/viewing expenses  
* API endpoints exist for uploading/removing/viewing files

## Complex Claims: Travel claims for community care appointments

Dev complete estimate:  
Functionality:

* Recognizing the appointment type  
* Attach files  
* Remove files  
* Delete files  
* Submit claim

Unknowns:

* ?

Assumptions:

* VA.gov already pulls community care appointments

Risks:

* 

Dependencies:

* API needs to support finding community care appointments in its system

<hr />

## (INCL ABOVE) Complex Claims: Mileage from different origin address

Dev complete estimate: **min \~2 weeks, max \~ 4 weeks**  
Functionality:

* Start claim  
* Add mileage expense  
* Submit claim

Unknowns:

* How complicated does this need to be?  
  * Is it enough to tweak the SMOC flow?  
  * Does tweaking the SMOC flow encourage more tweaking down the line, when that’s maybe not what we want to do?  
  * Is this considered 1-way mileage (to \+ from) or round trip?

Assumptions:

* Assumes “otherwise simple” (no tolls, parking, or other complexities)  
* This is not necessarily an update of the user’s home address

Dependencies:

1. API endpoints exist for adding address information to the expense
