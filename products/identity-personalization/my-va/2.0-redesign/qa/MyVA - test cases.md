# MyVA Test Cases 
[reference doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/product/readme.md)

### Test cases for "LOA1"
|Test case|Intended outcome|Staging User|
|----|----|----|
|User has not verified their identity|User is shown a prompt to verify their identity|TBD|
|User has an application in progress on VA.gov|User is shown "Application in progress"|TBD|
|User does not have any of the above|User is shown links to all sections (claims, healthcare, education, records, other benefits|TBD|


### Test cases for "LOA3"
|Test case|Intended outcome|Staging User|
|----|----|----|
|User has signed up for something|User sees relevant statuses |TBD|
|User has signed up for nothing|User sees all relevant sign-up info links for all sections|TBD|

### Test cases for "Education"
This is not dynamic and links remain the same regardless

### Test cases for "Healthcare"
|Test case|Intended outcome|Staging User|
|----|----|----|
|User's healthcare application status is "In Progress"|User sees an application status of "In-Progress"|TBD|
|User's healthcare application status is "Deceased"|User sees an application status of "Deceased"|374:Deceased|
|User's healthcare application status is "Enrolled"|User sees an application status of "Enrolled"|363:Enrolled|
|User's healthcare application status is "Decision"|User sees an application status of "Decision"|369:We determined that you don’t qualify for VA health care, 366:Canceled or declined health care|
|User's healthcare application status is "Update"|User sees an application status of "Update"|365:Update: We need more information, 367:Update: We're reviewing your application|
|User DOES have secure messages|User sees current messages ("From" "Subject" "Date")|TBD|
|User DOES NOT have secure messages|Messaging is as follows: "You don’t have any unread messages from your health care team"|TBD|
|User DOES have prescriptions|User sees prescriptions in-progress|TBD|
|User DOES NOT have prescriptions|User sees no prescriptions in progress. Messaging is as follows: You don’t have any prescriptions being refilled. If you’ve refilled a prescription within the last 30 days, it may be out for delivery and not showing up here.  To view and track all of your prescriptions, please go to MyHealtheVet.|TBD|
|User DOES have appointments|User is shown scheduled and accepted appointments|judy.morrison@id.me|
|User DOES NOT have appointments|User is shown the following Messaging: Find out how to make a doctor’s appointment with a member of your VA health care team online or by phone.|judy.morrison@id.me|

**Lab Results: Any user with healthcare will show static lab results link**

### Test cases for "Claims"
|Test case|Intended outcome|Staging User|
|----|----|----|
|User DOES have a disability rating|User will see their disability rating|38,228|
|User DOES not have a disability rating|this section will not appear|10,17|
|User DOES have a pension/disability claim|User will see claim information|**LUKE M to provide**|
|User DOES NOT have a pension/disability claim|User will see a link how to file a claim|**LUKE M to provide**|


### Test cases for "Records"
**This will be a list of static links**

### Test cases for "Applications in Progress"
|Test case|Intended outcome|Staging User|
|----|----|----|
|User DOES have an application in progress|User will see application information, status, last saved date, application expiration date, form number, and applicatoin title|**LUKE M to provide**|
|User DOES NOT have an application in progress|This section will not appear|**LUKE M to provide**|



