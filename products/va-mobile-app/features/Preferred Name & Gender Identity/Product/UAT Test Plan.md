**Objective/Summary**


**What to test - **We need to verify,**<span style="text-decoration:underline;"> in pre-prod and prod</span>**, that:



1. Users are able to successfully
    1. View & or modify Preferred Name & Gender Identity information on Profile 
2. Confirm Info is displayed as expected

**Who can do this testing and how?**



* The mobile app team has conducted testing internally
    * Dev Unit Testing
    * QA Validation
    * QA regression
* We will recruit 1-2 participants (between known contacts and VA Veteran recruits) in order to test data in production

This document specifically focuses on the testing to be done by Veterans with Production accounts as part of UAT

**Test Scenarios**



* User is able to **view** current information pertaining to
    * Preferred Name (empty state or already existing)
    * Gender Identity  (empty state or already existing)
* User is able to **Update** current information pertaining to
    * Preferred Name
    * Gender Identity

<table>
  <tr>
   <td>
<strong>Scenario</strong>
   </td>
   <td>
    <strong>Expected Results</strong>
   </td>
   <td><strong>Pass/Fail</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Preferred Name</strong>: View Preferred Name
   </td>
   <td>User is able to view their existing data for Preferred Name (empty or already existing info previously added from the web)
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>Preferred Name:</strong> Add or Update Preferred Name
   </td>
   <td>
    User should be able to Add or update Preferred Name
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong><em>Preferred Name: Compare Preferred Name details with Va.gov</em></strong>
   </td>
   <td>
    User should see the data on both mobile & web
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>Gender Identity</strong> View Gender Identity on the Personal Info section of the app
   </td>
   <td>
    User is able to view their existing data for Gender Identity (empty or already existing info previously added from the web)
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>Gender Identity</strong> Add or Update Gender Identity
   </td>
   <td>
    User should be able to Add or update Gender Identity info
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>Gender Identity:<em> Compare Gender Identity details with Va.gov</em></strong>
   </td>
   <td>
    User should see the data on both mobile & web
   </td>
   <td>
   </td>
  </tr>
</table>


**Fundamental Assumptions**



* We are assuming that 
    * Our participants may have already added their preferred name & gender identity preferences
    * Participants are willing to add a preferred name or update their gender identity 

**Pre-UAT ‘Stage gate’**



* The build that will be used to test Preferred Name & Gender will be the build that includes the most functionally complete code, to date. 
* Prior to determining which build will be used for UAT, the QA team will complete a first pass of the tickets and document any bugs that are identified. 

**Criteria**



* Participants have already updated their preferred name & gender identity OR
* Participants are willing to add/update their preferred name or add/update their gender identity

**Recruitment:**



* Recruit 1-2 Veterans that are willing to validate and or update their preferred name & gender identity on the app.  *Participants will be ok, that once they update or add preferred name or gender identity info, they will be able to change it, but will not be able to delete.

**Testing Approach**

Recruited users will be sent an instructional email that describes the testing process, and illustrates the flow users will follow to complete UAT (see Tester Steps to Execute). 

_The email will include yes/ no questions that ask the user to verify that their data is displaying correctly. The questions have been structured in such a way to ensure that users are not revealing personal or sensitive information over email. _

_If you answered “No” to any of these, please include a brief explanation. _

_Please do not include sensitive information in your explanation or any of your answers.”_

_Users will send back their answers with Yes or No highlighted. “No” Answers will be reviewed and investigated.  _

**UAT will be considered complete if:**



1. 2 or more users have satisfactory responses. (All questions/ test cases were answered with “PASS” or N/A unable to test) OR,
2. We receive any number of satisfactory responses, and failed test cases are investigated and resolved by the Mobile App Team. 
    1. In cases where the team is not able to resolve the failed test case within a week, there will be a discussion with team leadership to determine whether the issues should be pursued further.  

**Tester Steps to Execute**

Pre-session prep 



1. Provide the participant with directions on how to download the test version of the app (reserve 5 min at the beginning of the UAT session to help them through it if they have problems) 
2. Ask the participant to come to the session logged-in to Va.gov (they’ll need to compare their MHV data with what they’re seeing in the app) 
1. Navigate participant to Personal Information
1. Home screen -> Profile -> Personal Information
2. Scenario 1: Ask participant to view the Preferred Name card, 
1. Does it display their current ‘preferred name’ based on their previous update? (if they previously updated this info on the web) 
2. If it is Not updated or if participant is willing to update the information , go to Scenario 2
3. Scenario 2: Ask participant to add or update their Preferred Name 
1. Failure: Select Preferred Name card -> Add preferred Name with non-numeric value -> Select Save
    1. User should receive a Fail message (Enter letters only)
2. Success: Select Preferred Name card -> Add preferred Name -> Select Save
    2. User should receive a success message
3. View the information updated
4. Scenario 3: Compare their Preferred Name information matches va.gov
1. Ask the participant to go to their va.gov web profile and compare the data
5. Scenario 4: Ask participant to view the Gender Identity card, 
3. Does it display their current ‘gender identity’ preferences based on their previous update? (if they previously updated this info on the web) 
4. If it is Not updated or if participant is willing to update the information , go to Scenario 5
6. Scenario 5: Ask participant to add or update their Gender Identity preference
2. Failure: Select Gender Identity card -> Select Save w/out selecting Gender identity type (This scenario will only be applicable if the user has never selected a Gender Identity preference previously
    1. User should receive a Fail message
3. Success: Select Gender Identity card -> Select Gender Identity preference-> Select Save
    2. User should receive a success message

**Recruitment Message**

<h3>Testing Instructions</h3>


Here's instructions for how to access the app depending on if you have an [iPhone](https://docs.google.com/document/d/1SnNqpnCaKR46YqK9-CTnBakEmeusZbKXW8qYDm8PW14/edit?usp=sharing) or [Android](https://docs.google.com/document/d/1vVRCqiIbunnfy_umwETlhXDmLyS5Cppo6bRde-082gQ/edit?usp=sharing).

Please take a look at the instructions before the session and see if you can access the app okay. Let me know if you have any trouble.

We will use the Zoom app on your phone to screen share during the session so please go ahead and download zoom for your [iPhone](https://itunes.apple.com/us/app/id546505307) or [Android](https://play.google.com/store/apps/details?id=us.zoom.videomeetings).

Any questions so far?

Thank you again for helping us out!
