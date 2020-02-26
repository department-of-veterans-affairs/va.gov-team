## Direct deposit test users

|Test user|Test case|Staging user|
|----|----|----|
|LOA3 user is eligible for comp & pen direct deposit and has 2FA enabled but account is flagged for fraud| The user should be able to see the direct deposit functionality as normal but submitting the form should fail with a [special error message](https://user-images.githubusercontent.com/34068740/57635120-905a3d80-7574-11e9-9c80-47f39045669b.png)|`WILLIAM DANIELS` - need to ask EVSS what this person's user number is|
|User has inputted an invalid routing number|Submitting the form should fail with a special error message, `Invalid routing number: We couldn’t find a bank linked to this routing number. Please check your bank’s 9-digit routing number and enter it again.`. This message should be visible as a banner above the form.|Any user|
