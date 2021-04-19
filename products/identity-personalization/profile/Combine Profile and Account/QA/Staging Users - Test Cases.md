# Profile 2.0 Staging Users - Test Cases 
(last updated Monday, July 20, 2020)
Notes:
As of Wednesday July 15, Profile 2.0 is turned on for all users in staging.
You can use the local hack (setting `PROFILE_VERSION` to `1` in Local Storage) to see profile 1.0 if it's ever needed.
 
  
 
## Test cases for "Account Security"

|Test user|Test case|Staging user|
|----|----|----|
|LOA1 user| User cannot see the rest of the profile and they are directed to verify their identity first.|You'll need to create an account on staging in order to view this and all LOA1 use cases. **Do not verify it's identity or add 2FA during the sign up process**. |
|LOA1 user|	Uses does not have 2FA (and should be directed to verify identity)|You'll need to create an account on staging in order to view this and all LOA1 use cases. **Do not verify it's identity or add 2FA during the sign up process**.|
|LOA1 user|	Should NOT show terms and condtions section at all| You'll need to create an account on staging in order to view this and all LOA1 use cases. **Do not verify it's identity or add 2FA during the sign up process**.|
|LOA3 user|	Should see entire profile and that they have verified identity |vets.gov.user+36@gmail.com|
|LOA3 user|	User is not in MPI - we show MVI error that says "We're having trouble matching your information to our Veteran records.  We're sorry. We're having trouble matching your information to our Veteran records, so we can't give you access to tools for managing your health and benefits. If you'd like to use these tools on VA.gov, please contact your nearest VA medical center. Let them know you need to verify the information in your records, and update it as needed. The operator, or a patient advocate, can connect you with the right person who can help.|Test locally|
|LOA3 user| (ID verified + 2FA)	should see that 2FA has been set up |vets.gov.user+36@gmail.com|
|LOA3 user| (ID verified w/o 2FA)	user should see prompt to set up 2FA	DS logon| Test locally|
|User has accepted T+C| User sees "accepted" Terms and Conditions and is a healthcare user|vets.gov.user+36@gmail.com|
|User has not accepted T+C|	User sees message stating "X", and is a healthcare user|Test locally|



### Test cases for "Connected Apps"

|Test user|Test case|Staging user|
|----|----|----|
|LOA1 user|Not able to see Connected Apps section|You'll need to create an account on staging in order to view this and all LOA1 use cases. **Do not verify it's identity or add 2FA during the sign up process.**|
|LOA3 user|(ID verified + 2FA)	Able to see Connected apps section|vets.gov.user+36@gmail.com|
|User does NOT have connected apps|	User does NOT have connected apps|vets.gov.user+2@gmail.com|
|User DOES have connected apps|	User DOES have connected apps	|vets.gov.user+1@gmail.com|


### Test cases for "Military Information"

|Test user|Test case|Staging user|
|----|----|----|
|LOA1 user|	User is NOT able to see "Military Information" section	|You'll need to create an account on staging in order to view this and all LOA1 use cases. **Do not verify it's identity or add 2FA during the sign up process.**|
|LOA3 user| User is (ID verified + 2FA)	Able to see "Military Information" section	|vets.gov.user+36@gmail.com|
|LOA3 user| User with military info	Military info IS NOT unavailable in DEERS	|vets.gov.user+10@gmail.com|
|LOA3 user| User with military info	Military info IS available|vets.gov.user+36@gmail.com|


### Test cases for "Direct Deposit"

|Test user|Test case|Staging user|
|----|----|----|
|LOA1 user|LOA1 users should not be able to access the user profile|You'll need to create an account on staging in order to view this and all LOA1 use cases. **Do not verify it's identity or add 2FA during the sign up process.**|
|LOA3 user| User is eligible for comp & pen direct deposit and has 2FA enabled. User should see all Direct Deposit info|vets.gov.user+226@gmail.com|
|LOA3 user who is eligible for comp & pen direct deposit and has 2FA enabled but has not set up direct deposit|User should see prompt to add bank information|vets.gov.user+202@gmail.com|
|LOA3 user who receives comp & pen direct deposit who does not have 2FA enabled|This user should see the direct deposit functionality but they should see a gate to add 2FA first|TBD as of 8.11.20|
|An error occurred while retrieving the data|The user should see an error message|Test locally|
|LOA3 user is eligible for comp & pen direct deposit and has 2FA enabled but account is flagged for fraud|The user should be able to see the direct deposit functionality as normal but submitting the form should fail with a special error message|(Don't have a user for this)|
|User has a fiduciary|Direct Deposit section is removed from side-nav|Incompetent w/p fiduciary User +61, Incompetent w fiduciary User +65, Deceased User+33|


### Test cases for "Personal Information"

|Test user|Test case|Staging user|
|----|----|----|
|LOA1 user|can't see personal information|You'll need to create an account on staging in order to view this and all LOA1 use cases. **Do not verify it's identity or add 2FA during the sign up process.**|
|LOA3 user| (ID verified + 2FA)	can see personal information|vets.gov.user+36@gmail.com|	
|LOA3 user who cant pull up record in MPI|User	Cant see "Personal information" or any other information, they are sent to account security page and shown the MPI alert |Test locally| 
