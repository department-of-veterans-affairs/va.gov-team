# MyVA Test Cases 

[MyVA staging users information](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva.md)

### Test cases for an unauthenticated user

|Test case|Intended outcome|Staging User|Prototype link|Found issues|
|----|----|----|----|----|
|User has not signed in to VA.gov|User is shown My VA in the main navigation below the 'Sign in' button, if clicked on it should prompt the user to sign in. Once logged in it will take them to directly to My VA.|**any user**|[My VA Unauthenticated](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448962033_My_VA_Desktop_Unauthenticated)|Pass-Need to refresh cache to see My VA link|


### Test cases for [Cerner users](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/health-care-section.md#alertserrors)
|Test case|Intended outcome|Staging User|Prototype link|Found issues|
|----|----|----|----|----|
|User is a patient at or is managing health care through a Cerner facility|User should see the title for 'Health care' and then the Cerner alert to redirect them to the correct place (Chalmers P. Wylie Veterans Outpatient Clinic should be above the first button)|**[ssoissoetesting+mhvcss4@gmail.com](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-cerner.md)**|[Cerner alert](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032780_My_VA_Desktop_Cerner_MHV)|Pass|

#### Test cases for Cerner buttons

|Test case|Intended outcome|Staging User|Prototype link|Found issues|
|----|----|----|----|----|
|Go to My VA Health|Should go to My VA Health homepage|**[ssoissoetesting+mhvcss4@gmail.com](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-cerner.md)**|[Cerner alert](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032780_My_VA_Desktop_Cerner_MHV)|Pass|
|Go to My Healthevet|Should go to MHV user dashboard|**[ssoissoetesting+mhvcss4@gmail.com](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-cerner.md)**|[Cerner alert](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032780_My_VA_Desktop_Cerner_MHV)|Pass|

### Test cases for ["LOA1 user"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/loa1_design.md)

|Test case|Intended outcome|Staging User|Prototype link|Found issues|
|----|----|----|----|----|
|LOA1 user has not verified their identity and has an application in progress on VA.gov|User is shown a prompt to verify their identity, their application in progress, and the 'Benefits you might be interested in' section (links related to filing a claim, applying for healthcare, and applying for education benefits) |**Tze can add application to user TBD**| [LOA1 with applications](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/screens/448961807)|Pass|
|LOA1 user has not verified their identity and does not have anything in-progress|User is shown a prompt to verfy their identity and links related to filing a claim, applying for healthcare, and applying for education benefits ('Benefits you might be interested in')|**Tze can create LOA1 account**|[LOA1 screen](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032788_My_VA_LOA1)| Pass|


### Test cases for ["Disability Rating"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/nametag.md)

|Test case|Intended outcome|Staging User|Prototype link|Found issues|
|----|----|----|----|----|
|User DOES have a disability rating|User will see their disability rating under their name (Your disability rating: X% service connected>), it should link to the [disability rating overview page](https://staging.va.gov/disability/view-disability-rating/rating)|**226**| [Shown in documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/nametag.md)|Pass|
|User DOES NOT have a disability rating|User will NOT see a disability rating under their name |**10**| [Shown in documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/nametag.md)|~~(NEEDS TICKET)~~- If a user does not have a disability rating it should not show anything - currently showing 'view disability rating'. Follow-up note on this: looks like there's an error pulling user 10's disability rating, in which case we are supposed to be show this text. Confirmed it's working properly with user 39|


### Test cases for ["Claims and Appeals"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/claims-and-appeals-status.md)

**NOTE**: The only way to get a claim in the last 30 days is to file a new one for a user, for user 15 the claim will disappear after April 30 (30 days after March 31) - we will need to make sure we add one before Tze starts testing
|Test case|Intended outcome|Staging User|Prototype link|Found issues|
|----|----|----|----|----|
|User DOES have an **open** pension/disability claim, with an update in the last 30 days|User will see latest claim information in box and "Manage all claims and appeals" link|**15**| [Has open claim](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032782_My_VA_Desktop_Everything)|Pass|
|Claim that is showing in MyVA matches what is in the claim status tool|Cross reference the claims status tool to make sure the info is correct|**15**| [Has open claim](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032782_My_VA_Desktop_Everything)|
|User has open claims or appeal in progress, but there have been no updates in more than 30 days |User sees messaging "You've had no updates to your claims in progress the past 30 days" and "Manage all claims and appeals" link |**226**| [No updates](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032785_My_VA_Desktop_No_Appts_In_30-_No_Claims)|Pass| 
|User has never filed a claim or all claims are closed|User will not see the claim section at all|**10**|[no claims](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032783_My_VA_Desktop_Health_Care_No_Claims)|Pass|

#### Claims and appeals links
|Test case|Intended outcome|Staging User|Prototype link|Found issues|
|----|----|----|----|----|
|View details (in the specific claims details card)| Link to the specific claim shown on My VA|**15**| [View details](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032782_My_VA_Desktop_Everything)|Pass|
|Manage all claims and appeals| Link to the main claims and appeals tool page |**15**| [Manage all claims and appeals link](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032782_My_VA_Desktop_Everything)|[23015](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23015) User 226 routed back to MY VA, same with user 15 - this needs to link to the claims and appeals tool page| 

### Test cases for ["Healthcare"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/health-care-section.md)
|Test case|Intended outcome|Staging User|Prototype link|Found issues|
|----|----|----|----|----|
|User IS enrolled in healthcare|User sees healthcare section|**377**| [Health care](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032782_My_VA_Desktop_Everything)|Pass|
|User IS NOT enrolled in healthcare|User does not see healthcare section. User sees a link to "A\Learn how to apply for health care" in the "Benefits you might be interested in" section|**369**|[No health care](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032786_My_VA_Desktop_No_Health_Care)| Pass|
|User DOES have unread secure messages|User sees bolded link "You have X unread messages"|**[377](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva.md)**| [Messages](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032782_My_VA_Desktop_Everything)| [#22991](https://github.com/department-of-veterans-affairs/va.gov-team/issues/22991) Should be 'unread messages' not 'new messages' |
|User DOES NOT have any unread secure messages or no secure messages at all|User sees link "Send a secure message to your healthcare team"|**226**|[No Messages](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032779_My_VA_Desktop_2_No_Messages)|[#22994](https://github.com/department-of-veterans-affairs/va.gov-team/issues/22994) This is showing 'You have 0 unread messages'|
|Ensure # of new messages is accurate|Number of new messages should match the unread messages shown in MHV|**[377](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva.md#secure-messages)** (Should be 3 messages)| [Has messages](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032782_My_VA_Desktop_Everything)|Pass|
|Ensure My VA account links to the correct MHV account|Should say 'Welcome, Kristie' at the top|**377**| N/A|
|User DOES have appointments in the next 30 days|User is shown next appointment ("Date" "Time" "Location/VA Video Connect") and link to "Schedule and view your appointments"|**judy.morrison@id.me**|[Appointments](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032782_My_VA_Desktop_Everything)|[23063](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23063) She has an appointment in the next 30 days and it's not showing up at all.
|User DOES have appointments in the next 30 days|Cross reference VAOS to make sure the actual next appointment is the one that is showing on My VA|**judy.morrison@id.me**|[Appointments](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032782_My_VA_Desktop_Everything)|[23063](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23063) She has an appointment in the next 30 days and it's not showing up at all.|
|User DOES NOT have appointments in the next 30 days, but does have future appointments|User sees messaging stating that they do not have appointments in the next 30 days, and link to "Schedule and view your appointments' should be with the other links|**ruben.moreno@id.me**|[No appts 30 days](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032785_My_VA_Desktop_No_Appts_In_30-_No_Claims)| [23064](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23064) Needs to show messaging stating that they do not have appointments in the next 30 days|
|User DOES NOT have appointments|Link to "Schedule and view your appointments' should be with the other links|**226**|[NO appts](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/449052948_My_VA_Desktop_No_Appts_In_30_Days_Copy)|Pass|


#### Static health care links
|Test case|Intended outcome|Staging User|Prototype link|Found issues|
|----|----|----|----|----|
|Schedule and view your appointments|Any user with healthcare will show the static link- should go to VAOS tool|**36**| [Link](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032782_My_VA_Desktop_Everything)|Pass|
|'You have X unread messages" or Send a secure message to your health care provider|Any user with healthcare will show the static link- should go to messaging in MHV|**36**| [Link](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032782_My_VA_Desktop_Everything)|Error - will check tomorrow|
|Refill and track your prescriptions|Any user with healthcare will show the static link- should go to prescriptions in MHV|**36**| [Link](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032782_My_VA_Desktop_Everything)|Error - will check tomorrow|
|View your VA medical records| Any user with healthcare will show the static link - should go to medical records content page |**36**|[Link](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032782_My_VA_Desktop_Everything)|Error - will check tomorrow|
|View your lab test results|Any user with healthcare will show the static link-should go to lab and test results content page| **36**|[Link](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032782_My_VA_Desktop_Everything)|Pass|

### Test cases for ["Apply for Benefits"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/apply-for-benefits.md)

#### "Applications in progress"

|Test case|Intended outcome|Staging User|Prototype link|Found issues|
|----|----|----|----|----|
|User DOES have an application in progress|User will see application information, status, last saved date, application expiration date, form number, application title and link "Continue your application"|**100**|[Application in progress](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032782_My_VA_Desktop_Everything)|Pass|
|User DOES NOT have an application in progress|User sees messaging saying "You have no benefit applications in progress"|**369**|[No applications](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032781_My_VA_Desktop_Everything_Copy)| Pass|

#### "Benefits you may be interested in"

|Test case|Intended outcome|Staging User|Prototype link|Found issues|
|----|----|----|----|----|
User is already enrolled in health care|User does NOT see "Learn how to apply for healthcare" link|**36**|[Has health care](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032782_My_VA_Desktop_Everything)|Pass|
User is NOT enrolled in health care and has NEVER applied for healthcare|User sees "Learn how to apply for healthcare" link and blurb|**Tze to recreate using existing user**|[Applying for health care](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/449055980_My_VA_Health_Care)|
User has started an application for healthcare for the first time, but has not finished the application|The health care blurb/link disappears and the health care application shows as an application in-progress |**Tze to recreate using existing user**|[User started health care application](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/449055979_My_VA_FTUX)|Can't test|
User HAS filed a claim|User sees "Learn how to file a claim for disability" link|**15**|[Has open claim](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032782_My_VA_Desktop_Everything)|Pass|
User HAS NOT filed a claim|User sees "Learn how to file a claim for disability" link|**226**| [no claims](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032783_My_VA_Desktop_Health_Care_No_Claims)|Pass|
User receives direct deposit for edu payments|User does NOT see "Apply for education benefits" link|**378**|[recieves education](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/449056409_My_VA_Desktop_Recieves_Education)|Pass|
|User has started an application for education benefits|User will see the "Learn how to apply for Education Benefits" link |**Tze to add education benefit application to an existing user**|[Started education benefits app](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/449055977_My_VA_Education_Application)||
|User DOES NOT receive direct deposit for edu payments|User will see the "Learn how to apply for Education Benefits" link|**226**|[No education benefits](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032782_My_VA_Desktop_Everything)|Pass|


#### Apply for VA benefits links
|Test case|Intended outcome|Staging User|Prototype link|Found issues|
|----|----|----|----|----|
|What benefits does VA offer?|Opens to a list of links of all the benefits available at VA, each link should link to the benefit overview page|**100**|[Benefits dropdown](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/449055978_My_VA_FTUX_Dropdown)|Pass|
|Continue your application|Links to the specific unfinished application represented in My VA|**100**|[Has health care](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/448032782_My_VA_Desktop_Everything)|Pass|
|Learn how to apply for health care| Links to health care 'how to apply' page|**10**|[Health care link](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/449055979_My_VA_FTUX)|Pass|
|Learn how to file a claim for disability|Links to disability claim 'how to apply' page| **226**| [Claim link](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/449055979_My_VA_FTUX)|[23072](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23072)- Needs to link to the 'How to apply for a claim' page, not the claim disability homepage|
|Learn how to apply for education benefits|Links to education 'how to apply' page| **226**| [Education link](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/449055979_My_VA_FTUX)|[23073](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23073)- Needs to link to the 'How to apply for education benefits' page, not the education benefits homepage|

## Other various bugs

- Claims spinner needs content below it
- Move ‘Apply for benefits’ dropdown up to be below My VA - **ticket created >** [22996](https://github.com/department-of-veterans-affairs/va.gov-team/issues/22996)
- Went to education benefits page, clicked ‘back’ and it logged me out (did the same for disability compensation), is this a bug?
- LOA1 'Benefits you might be interested in' never loaded and is a never ending spinner - we might also need an error state for this?
- Question - user 378 DOES NOT show health care section or benefit blurb - does this mean they've applied and got rejected?
