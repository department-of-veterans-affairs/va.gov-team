# Direct deposit test users

### Test cases for viewing payment information

|Test user|Test case|Staging user|
|----|----|----|
|LOA1 user| LOA1 users should not be able to access the user profile|Any LOA1 account|
|LOA3 user who receives comp & pen direct deposit who also has 2FA enabled| This user should see the [direct deposit functionality](https://user-images.githubusercontent.com/1915775/58044291-67eeb800-7b0d-11e9-81fb-88f850ac7b07.png) in the user profile (**Note: we need a user for whom we have access to their email account to test the confirmation email**)|226 (No access to this email account)|
|LOA3 user who is eligible for comp & pen direct deposit and has 2FA enabled but has not set up direct deposit (empty data) | This user should see a prompt for [setting up direct deposit](https://user-images.githubusercontent.com/1915775/58051673-d4bf7d80-7b20-11e9-8e2a-a990c93eea32.png) for the first time. **We should also confirm under what conditions this is true.** As in, are these users receiving funds via paper check? Or what does it mean to have empty data for direct deposit?|User 200|
|LOA3 user who receives comp & pen direct deposit who does **not** have 2FA enabled| This user should see the direct deposit functionality *but* they should see a [gate to add 2FA](https://user-images.githubusercontent.com/1915775/58044275-5efde680-7b0d-11e9-9fb1-71e0056ac5d2.png) first|[jamie.wood](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/reference_documents/ds%20logon/ds-logon-lower-env-test-accounts.md)|
|LOA3 user is not eligible for comp & pen direct deposit (although may receive direct deposit via GI Bill)| This user should **not** see the direct deposit feature|Can use any "+100" users|
|An error occurred while retrieving the data| The user should see an [error message](https://user-images.githubusercontent.com/1915775/58048893-9a9ead80-7b19-11e9-980c-d9fdf5dd65f9.png)|Test locally|

### Test cases for updating payment information

|Test user|Test case|Staging user|
|----|----|----|
|LOA3 user is eligible for comp & pen direct deposit and has 2FA enabled but account is flagged for fraud| The user should be able to see the direct deposit functionality as normal but submitting the form should fail with a [special error message](https://user-images.githubusercontent.com/34068740/57635120-905a3d80-7574-11e9-9c80-47f39045669b.png)|`WILLIAM DANIELS` - need to ask EVSS what this person's user number is|
|User has inputted an invalid routing number|Submitting the form should fail with a special error message, `Invalid routing number: We couldn’t find a bank linked to this routing number. Please check your bank’s 9-digit routing number and enter it again.`. This message should be visible as a banner above the form.|Any user|
