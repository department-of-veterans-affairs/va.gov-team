

## 
**Login.gov Mobile App Integration Test Plan**

Prepared by Ayush Chakravarty, Meko Hong, Patrick Saxton, and Ambika Roos.


## 
Objective/Summary


**What to test - **We need to verify, in pre-prod and prod, that:

The introspect service is creating sessions and user data end points are sending the correct data, and that the IAM SAML requests to login.gov are working correctly. We will test this using the following scenarios:



1. Users with an existing LOA3 login.gov account should be able to successfully log in to our app and see their data using the login.gov credential
2. Users who do not have an existing login.gov account and who are asked to register a new account for login.gov via the app should be:
    1. Directed to the verify stage (like id.me already does). 
    2. Able to successfully log in via login.gov on the app after being verified and see their data
3. Users that created an LOA1/IAL1 login.gov account on the web and then try to log in on the app should be:
    3. Sent through the verify step (again, like id.me) 
    4. Able to successfully log in via login.gov on the app after being verified and see their data

**Who can do this testing and how?**



* In pre-prod, the mobile app team will be conducting testing internally
    * Dev Unit Testing
    * QA Validation
    * QA Regression (testing basic functionality of features)
* In total we will recruit 12 participants (between known contacts and VA Veteran recruits.
* 


### Test Scenarios

_Note: We are awaiting IAM’s explanation on how we might be able to test these scenarios before going into production. If IAM is unable to accommodate or issues arise, we will apply this testing matrix after production._


<table>
  <tr>
   <td>
   </td>
   <td><strong>User has no other VA creds</strong>
   </td>
   <td><strong>User has basic/other VA creds</strong>
   </td>
   <td><strong>User has premium/ other VA creds</strong>
   </td>
  </tr>
  <tr>
   <td><strong>User has no Login.gov Credentials</strong>
   </td>
   <td><strong>Scenario A:</strong>
<p>
Verify that a user is directed to verify step (expected behavior)
<p>
(Credential creation is not testable on mobile, since the mobile app does not support first-time credential creation, but we will ensure that users are appropriately redirected)
   </td>
   <td><strong>Scenario B:</strong>
<p>
Not testable re: Login.gov because users with basic creds cannot access the app.
   </td>
   <td><strong>Scenario C</strong>
<p>
Ad Hoc / OCTO Vets (5 users total)
<p>
Steps:
<ol>

<li>Create a login.gov credential (using our guide)

<li>Verify the credential so it upgrades to premium (using steps <a href="https://www.login.gov/help/verify-your-identity/how-to-verify-your-identity/">here</a>).

<li>Log in with credential.

<li>Confirm data is correct.

<li>Confirm direct deposit can be edited.
</li>
</ol>
   </td>
  </tr>
  <tr>
   <td><strong>User has basic Login.gov Credentials</strong>
   </td>
   <td><strong>Scenario D</strong>
<p>
Not testable re: Login.gov because users with basic creds cannot access the app.
<p>
Unable to identify population of users who have basic credentials of both types.1
   </td>
   <td><strong>Scenario E</strong>
<p>
Not testable re: Login.gov because users with basic creds cannot access the app.
<p>
Unable to identify population of users who have basic credentials of both types.
   </td>
   <td><strong>Scenario F</strong>
<p>
Ad Hoc / OCTO Vets
<p>
(5 users total)
<p>
Steps:
<ol>

<li>Log in with basic login.gov creds and verify that user is prompted to upgrade

<li>Verify the credential so it upgrades to premium (using steps <a href="https://www.login.gov/help/verify-your-identity/how-to-verify-your-identity/">here</a>)

<li>Log in with credential.

<li>Confirm data is correct.

<li>Confirm direct deposit can be edited.
</li>
</ol>
   </td>
  </tr>
  <tr>
   <td><strong>User has premium Login.gov Credentials</strong>
   </td>
   <td><strong>Scenario G</strong>
<p>
Unable to identify population of users who only have Login.gov credentials
   </td>
   <td><strong>Scenario H</strong>
<p>
Unable to identify population of users who only have Login.gov credentials.
   </td>
   <td><strong>Scenario I</strong>
<p>
Ad Hoc / OCTO Vets
<p>
(5 users total)
<p>
Steps:
<ol>

<li>Log in with credential

<li>Confirm data is correct

<li>Confirm direct deposit can be edited
</li>
</ol>
   </td>
  </tr>
</table>


Note: We would like to test with at least 12 users total; users can be from scenarios C, F, and I or only in scenario C.


## Email to Veterans

Dear VA Veterans,

The VA: Health and Benefits app team is seeking testers for a new login implementation. We are looking for up to 10 testers who are able to share 2 hours of their time.

We ask that testers meet the following criteria:



* Have a mobile device (phone or tablet) where they can download Zoom and the VA: Health and Benefits app.
* Have a state-issued ID
* Be willing to share screen.

We will ask users to attend two one-hour sessions each.

Session 1 (30 min):



* We will ask users to create and upgrade a login.gov account

Session 2 (60 min):



* We will ask you to log into the VA: Health and Benefits app using their Login.gov credentials
* We will ask you to confirm that the information on profile, health, and claims displays in a familiar way.
* We will ask you to log into the VA: Health and Benefits app using a different credential and confirm your profile, health, and claims information.

All information will be kept confidential, and we will destroy any records within 10 business days.

We would be extremely grateful for your help testing this feature! Please reach out to me ([leanna.miller@va.gov](mailto:leanna.miller@va.gov)) if you have any questions for us. We’re looking forward to testing with you! \



## Questions/Steps

Scenario C



1. Create a login.gov credential (using our guide)
2. Verify the credential so it upgrades to premium (using steps [here](https://www.login.gov/help/verify-your-identity/how-to-verify-your-identity/)).
3. Log in with credential.
4. Confirm data is correct.
5. Confirm direct deposit can be edited.

Scenario F



1. Log in with basic login.gov creds and verify that user is prompted to upgrade
2. Verify the credential so it upgrades to premium (using steps [here](https://www.login.gov/help/verify-your-identity/how-to-verify-your-identity/))
3. Log in with credential.
4. Confirm data is correct.
5. Confirm direct deposit can be edited.

Scenario I



1. Log in with credential
2. Confirm data is correct
3. Confirm direct deposit can be edited

