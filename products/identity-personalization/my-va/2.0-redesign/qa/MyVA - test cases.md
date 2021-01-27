# MyVA Test Cases 

[MyVA staging users information](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva.md)

 [Name Tag](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/nametag.md)

### Test cases for "LOA1 user"
|Test case|Intended outcome|Staging User|
|----|----|----|
|LOA1 user has not verified their identity|User is shown a prompt to verify their identity|**350**|
|LOA1 user has not verified their identity but has an application in progress on VA.gov|User is shown a prompt to verify their identity but also shown an Application in progress|**Tze can add application to user 350**|
|LOA1 user has not verified their identity and does not have anything in-progress|User is shown a prompt to verfy their identity and CTAs related to filing a claim, applying for healthcare, and applying for education benefits|**350**|


### Test cases for "First-time user experience"
|Test case|Intended outcome|Staging User|
|----|----|----|
|LOA3 user has logged-in for the first time after verifying their identity |User is shown CTA's related to filing a claim, applying for healthcare, and applying for education benefits "|**Tze can create a new user and verify their identity**|


### Test cases for "Disability Rating"
|Test case|Intended outcome|Staging User|
|----|----|----|
|User DOES have a disability rating|User will see their disability rating next to their name|**226**|
|User DOES NOT have a disability rating|User will not see their disability rating next to their name|**10**|


### Test cases for "Education Benefits"  
|Test case|Intended outcome|Staging User|
|----|----|----|
|User has started or submited an application for education benefits|User will NOT see the "Apply for Education Benefits" CTA |Tze to add education benefit application to an existing user|
|User DOES NOT have an application for education benefits in-progress|User will see the "Apply for Education Benefits" CTA|TBD|

### Test cases for ["Claims and Appeals"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/claims-and-appeals-status.md)
|Test case|Intended outcome|Staging User|
|----|----|----|
|User DOES have an **open** pension/disability claim|User will see claim information|**226**|
|User has open claims or appeal in progress and there has been an update in the past 30 days |User sees the claim update|Will work with the Claims and Appeals team to get this| 
|User has open claims or appeal in progress, but there have been no updates in more than 30 days |User sees messaging "You've had no updates to your claims in progress the past 30 days"|Will work with the Claims and Appeals team to get this|  
|User has never filed a claim and all claims are closed|User will not see the claim section at all|**10**|


### Test cases for ["Healthcare"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/health-care-section.md)
|Test case|Intended outcome|Staging User|
|----|----|----|
|User IS enrolled in healthcare|User sees healthcare section, User sees "Get your VA medical records/Get your lab result" links. |**377**|
|User IS NOT enrolled in healthcare|User does not see healthcare section. User sees a CTA to "Apply for health care"|**369**|
|User DOES have secure messages|User sees latest message info ("From" "Date" "Subject")|**[377](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva.md)**|
|User DOES NOT have secure messages|User sees messaging stating that they do not have any messages|**226**|
|User DOES have prescriptions managed by the VA|User sees most recent prescription update ("Medication" "Status")|**[377](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva.md)**|
|User DOES NOT have prescriptions managed by the VA|User does not see the prescription section |Need to determine if this applies to any of the healthcare users, will check MHV|
|User DOES NOT have prescription refills but has prescriptions managed by the VA|User sees messaging "You have no prescription refills in progress"|**226**|
|User DOES have appointments|User is shown next appointment ("Date" "Time" "Location/VA Video Connect")|judy.morrison@id.me|
|User DOES NOT have appointments|User sees messaging stating that they do not have any appointments |**226**|

**Lab results:** Any user with healthcare will show the static "View your lab and test results" link (**36**)

**Get your VA medical records:** Any user with healthcare will show the static "Get your VA medical records" link (**36**)

### Test cases for ["Apply for Benefits"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/apply-for-benefits.md)
#### "Applications in progress"
|Test case|Intended outcome|Staging User|
|----|----|----|
|User DOES have an application in progress|User will see application information, status, last saved date, application expiration date, form number, and application title|**100**|
|User DOES NOT have an application in progress|User sees messaging saying "You have no benefit applications in progress"|TBD|
#### "Benefits you may be interested in"
|Test case|Intended outcome|Staging User|
|----|----|----|
User is already enrolled in health care|User does NOT see "Apply for healthcare" CTA|**38**|
User is NOT enrolled in health care|User sees "Apply for healthcare" CTA|**369**|
User HAS filed a claim|User does NOT see "File a claim" CTA|**226**|
User HAS NOT filed a claim|User sees "File a claim" CTA|**10**|


### Test cases for accuracy 





