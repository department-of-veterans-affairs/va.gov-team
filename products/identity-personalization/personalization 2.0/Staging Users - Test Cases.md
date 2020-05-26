# Profile 2.0 Staging Users - Test Cases 
(last updated May, 25th, 2020)
 
  
 
## Test cases for "Account Security"

|Test user|Test case|Staging user|
|----|----|----|
|LOA1 user| User cannot see the rest of the profile and they are directed to verify their identity first.|Any LOA1 user|
|LOA1 user| Does have 2FA (should also be directed to verify identity)|user 350|
|LOA1 user|	Uses does not have 2FA (and should be directed to verify identity)|vets.gov.user.555@gmail.com|
|LOA1 user|	Should NOT show terms and condtions section at all|user 350|
|LOA3 user|	Should see entire profile and that they have verified identity |any LOA3 user|
|LOA3 user|	User is not in MPI - we show MVI error that says "We're having trouble matching your information to our Veteran records.  We're sorry. We're having trouble matching your information to our Veteran records, so we can't give you access to tools for managing your health and benefits. If you'd like to use these tools on VA.gov, please contact your nearest VA medical center. Let them know you need to verify the information in your records, and update it as needed. The operator, or a patient advocate, can connect you with the right person who can help.|test locally (via Sandra Hallie)|
|LOA3 user| (ID verified + 2FA)	should see that 2FA has been set up|	user 36|
|LOA3 user| (ID verified w/o 2FA)	user should see prompt to set up 2FA	DS logon| user jamie.wood* (sometimes doesn’t work)|
|User has accepted T+C| User sees "accepted" Terms and Conditions and is a healthcare user|	user 36|
|User has not accepted T+C|	User sees message stating "X", and is a healthcare user|test locally (Sandra)|



### Test cases for "Connected Apps"

|Test user|Test case|Staging user|
|----|----|----|
|LOA3 user is eligible for comp & pen direct deposit and has 2FA enabled but account is flagged for fraud| The user should be able to see the direct deposit functionality as normal but submitting the form should fail with a [special error message](https://user-images.githubusercontent.com/34068740/57635120-905a3d80-7574-11e9-9c80-47f39045669b.png)|`WILLIAM DANIELS` - need to ask EVSS what this person's user number is|
|User has inputted an invalid routing number|Submitting the form should fail with a special error message, `Invalid routing number: We couldn’t find a bank linked to this routing number. Please check your bank’s 9-digit routing number and enter it again.`. This message should be visible as a banner above the form.|Any user|


### Test cases for "Military Information"

|Test user|Test case|Staging user|
|----|----|----|
|LOA3 user is eligible for comp & pen direct deposit and has 2FA enabled but account is flagged for fraud| The user should be able to see the direct deposit functionality as normal but submitting the form should fail with a [special error message](https://user-images.githubusercontent.com/34068740/57635120-905a3d80-7574-11e9-9c80-47f39045669b.png)|`WILLIAM DANIELS` - need to ask EVSS what this person's user number is|
|User has inputted an invalid routing number|Submitting the form should fail with a special error message, `Invalid routing number: We couldn’t find a bank linked to this routing number. Please check your bank’s 9-digit routing number and enter it again.`. This message should be visible as a banner above the form.|Any user|



### Test cases for "Direct Deposit"

|Test user|Test case|Staging user|
|----|----|----|
|LOA3 user is eligible for comp & pen direct deposit and has 2FA enabled but account is flagged for fraud| The user should be able to see the direct deposit functionality as normal but submitting the form should fail with a [special error message](https://user-images.githubusercontent.com/34068740/57635120-905a3d80-7574-11e9-9c80-47f39045669b.png)|`WILLIAM DANIELS` - need to ask EVSS what this person's user number is|
|User has inputted an invalid routing number|Submitting the form should fail with a special error message, `Invalid routing number: We couldn’t find a bank linked to this routing number. Please check your bank’s 9-digit routing number and enter it again.`. This message should be visible as a banner above the form.|Any user|



### Test cases for "Personal Information"

|Test user|Test case|Staging user|
|----|----|----|
|LOA3 user is eligible for comp & pen direct deposit and has 2FA enabled but account is flagged for fraud| The user should be able to see the direct deposit functionality as normal but submitting the form should fail with a [special error message](https://user-images.githubusercontent.com/34068740/57635120-905a3d80-7574-11e9-9c80-47f39045669b.png)|`WILLIAM DANIELS` - need to ask EVSS what this person's user number is|
|User has inputted an invalid routing number|Submitting the form should fail with a special error message, `Invalid routing number: We couldn’t find a bank linked to this routing number. Please check your bank’s 9-digit routing number and enter it again.`. This message should be visible as a banner above the form.|Any user|
