# MyVA Test Cases 

[MyVA staging users information](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva.md)

### Test cases for ["LOA1 user"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/loa1_design.md)

|Test case|Intended outcome|Staging User|
|----|----|----|
|LOA1 user has not verified their identity|User is shown a prompt to verify their identity|**350**|
|LOA1 user has not verified their identity and has an application in progress on VA.gov|User is shown a prompt to verify their identity and also shown their application in progress|**Tze can add application to user 350**|
|LOA1 user has not verified their identity and does not have anything in-progress|User is shown a prompt to verfy their identity and CTAs related to filing a claim, applying for healthcare, and applying for education benefits|**350**|


### Test cases for ["Disability Rating"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/nametag.md)

|Test case|Intended outcome|Staging User|
|----|----|----|
|User DOES have a disability rating|User will see their disability rating next to their name|**226**|
|User DOES NOT have a disability rating|User will not see their disability rating next to their name|**10**|


### Test cases for ["Claims and Appeals"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/claims-and-appeals-status.md)
|Test case|Intended outcome|Staging User|
|----|----|----|
|User DOES have an **open** pension/disability claim, with an update in the last 30 days|User will see latest claim information in box and "Manage all claims and appeals" link|**226**|
|User has open claims or appeal in progress, but there have been no updates in more than 30 days |User sees messaging "You've had no updates to your claims in progress the past 30 days" and "Manage all claims and appeals" link |**Will work with the Claims and Appeals team to get this**|  
|User has never filed a claim or all claims are closed|User will not see the claim section at all|**10**|
|Ensure # of claims is accurate|Number of claims is correctly reflected|**226**|


### Test cases for ["Healthcare"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/health-care-section.md)
|Test case|Intended outcome|Staging User|
|----|----|----|
|User IS enrolled in healthcare|User sees healthcare section, including the following links: "Get your VA medical records", "Get your lab result", "Refill and track prescriptions", messaging link (could vary based on use case). |**377**|
|User IS NOT enrolled in healthcare|User does not see healthcare section. User sees a link to "Apply for health care" in the "Benefits you might be interested in" section|**369**|
|User DOES have unread secure messages|User sees bolded link "You have X unread messages"|**[377](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva.md)**|
|User DOES NOT have any unread secure messages or no secure messages at all|User sees link "Send a secure message to your healthcare team"|**226**|
|User DOES have appointments in the next 30 days|User is shown next appointment ("Date" "Time" "Location/VA Video Connect") and link to "Schedule and view your appointments"|**cecil.morgan@id.me**|
|User DOES NOT have appointments in the next 30 days|User sees messaging stating that they do not have appointments in the next 30 days, and link to "Schedule and view your appointments' should be with the other links|**TBD**|
|User DOES NOT have appointments|Link to "Schedule and view your appointments' should be with the other links|**226**|
|Ensure # of new messages is accurate|Number of new messages is correctly reflected|**377**|
|Ensure # of appointments is accurate|Number of upcoming appointments is correctly reflected|**judy.morrison@id.me**|

#### Static health care links
|Test case|Intended outcome|Staging User|
|----|----|----|
|Refill and track your prescriptions|Any user with healthcare will show the static link|**36**|
|View your VA medical records| Any user with healthcare will show the static link |**36**|
|View your lab test results|Any user with healthcare will show the static link| **(36)**|

### Test cases for ["Apply for Benefits"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/apply-for-benefits.md)
#### "Applications in progress"

|Test case|Intended outcome|Staging User|
|----|----|----|
|User DOES have an application in progress|User will see application information, status, last saved date, application expiration date, form number, application title and link "Continue your application"|**100**|
|User DOES NOT have an application in progress|User sees messaging saying "You have no benefit applications in progress"|**369**|

#### "Benefits you may be interested in"

|Test case|Intended outcome|Staging User|
|----|----|----|
User is already enrolled in health care|User does NOT see "Learn how to apply for healthcare" link|**38**|
User is NOT enrolled in health care|User sees "Learn how to apply for healthcare" link|**369**|
User HAS NEVER applied for healthcare|User sees "Learn how to apply for healthcare" link, then applies, the link/blurb goes away and it shows as an application in-progress |**Tze to recreate using existing user**|
User HAS filed a claim|User does NOT see "Learn how to file a claim for disability" link|**226**|
User HAS NOT filed a claim|User sees "Learn how to file a claim for disability" link|**10**|
User HAS NEVER applied for a disability claim|User sees link to "Learn how to file a claim for disability" link then applies, the link disapears, and it becomes a 526 application in-progress|**Tze to recreate using existing user**|
User receives DD4edu payments|User does NOT see "Apply for education benefits" CTA|**378**|
|User has started or submited an application for education benefits|User will NOT see the "Learn how to apply for Education Benefits" link |**Tze to add education benefit application to an existing user**|
|User DOES NOT have an application for education benefits in-progress|User will see the "Learn how to apply for Education Benefits" link|**TBD**|
