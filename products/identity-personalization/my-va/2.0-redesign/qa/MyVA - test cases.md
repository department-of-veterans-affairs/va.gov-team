# MyVA Test Cases 
[Staging user reference doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/product/readme.md)

 [Name Tag](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/nametag.md)

### Test cases for "LOA1 user"
|Test case|Intended outcome|Staging User|
|----|----|----|
|LOA1 user has not verified their identity|User is shown a prompt to verify their identity|TBD|
|LOA1 user has not verified their identity but has an application in progress on VA.gov|User is shown a prompt to verify their identity but also shown an Application in progress|TBD|
|LOA1 user has not verified their identity and does not have anything in-progress|User is shown a prompt to verfy their identity and CTAs related to filing a claim, applying for healthcare, and applying for education benefits|TBD|


### Test cases for "First-time user experience"
|Test case|Intended outcome|Staging User|
|----|----|----|
|LOA1 user has logged-in for the first time after verifying their identity |User is shown CTA's related to filing a claim, applying for healthcare, and applying for education benefits "|TBD|


### Test cases for "LOA3 users"
|Test case|Intended outcome|Staging User|
|----|----|----|
|User has signed up for something|User sees relevant information/statuses for the section(s) that apply to them|TBD|
|User has signed up for nothing (first time user experience)|User is shown CTA's related to filing a claim, applying for healthcare, and applying for education benefits"|TBD|

### Test cases for "Disability Rating"
|Test case|Intended outcome|Staging User|
|----|----|----|
|User DOES have a disability rating|User will see their disability rating next to their name|38,228|
|User DOES NOT have a disability rating|User will not see their disability rating next to their name|10,17|


### Test cases for "Education Benefits"
|Test case|Intended outcome|Staging User|
|----|----|----|
|User DOES have education benefits|User will NOT see the "Apply for Education Benefits" CTA |38,228|
|User DOES NOT not have education benefits|User will see the "Apply for Education Benefits" CTA|10,17|

### Test cases for ["Claims and Appeals"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/claims-and-appeals-status.md)
|Test case|Intended outcome|Staging User|
|----|----|----|
|User DOES have a pension/disability claim|User will see claim information|TBD|
|User has open claims or appeal in progress, but there have been no updates in more than 30 days |User sees messaging "You've had no updates to your claims in progress the past 30 days"|TBD 
|User DOES NOT have a pension/disability claim|User will see a CTA to "File a Claim" |TBD|
|User's application status is "In Progress"|User sees an application status of "In-Progress"|TBD|
|User's application status is "Deceased"|User sees an application status of "Deceased"|374:Deceased|
|User's application status is "Enrolled"|User sees an application status of "Enrolled"|363:Enrolled|
|User's application status is "Decision"|User sees an application status of "Decision"|369:We determined that you don’t qualify for VA health care, 366:Canceled or declined health care|
|User's application status is "Update"|User sees an application status of "Update"|365:Update: We need more information, 367:Update: We're reviewing your application|


### Test cases for ["Healthcare"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/health-care-section.md)
|Test case|Intended outcome|Staging User|
|----|----|----|
|User DOES have secure messages|User sees latest message info ("From" "Date" "Subject")|TBD|
|User DOES NOT have secure messages|User sees messaging stating that they do not have any messages|TBD|
|User DOES have prescriptions managed by the VA|User sees most recent prescription update ("Medication" "Status")|TBD|
|User DOES NOT have prescriptions|User does not see the prescription section |TBD|
|User DOES NOT have prescription refills but has prescriptions managed by the VA|User sees messaging "You have no prescription refills in progress"|TBD|
|User DOES have appointments|User is shown next appointment ("Date" "Time" "Location/VA Video Connect")|judy.morrison@id.me|
|User DOES NOT have appointments|User sees messaging stating that they do not have any appointments |judy.morrison@id.me|

**Lab results:** Any user with healthcare will show the static "View your lab and test results" link

**Get your VA medical records:** Any user with healthcare will show the static "Get your VA medical records" link

### Test cases for ["Apply for Benefits"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/apply-for-benefits.md)
|Test case|Intended outcome|Staging User|
|----|----|----|
|User DOES have an application in progress|User will see application information, status, last saved date, application expiration date, form number, and application title|TBD|
|User DOES NOT have an application in progress|User sees error messaging saying "You have no benefit applications in progress"|TBD|
User already has health care, disability, OR education|The block for the benefit they have is no longer shown in in the “Benefits you might be interested in" section|TBD



