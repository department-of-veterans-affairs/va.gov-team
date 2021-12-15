## **Login.gov Mobile App UAT Plan and Discussion Guide**

## 
Objective/Summary


**What to test**

We need to verify, in pre-prod and prod, that:

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

Session 1:



* We will ask you to log into the VA: Health and Benefits app and take screenshots of some profile, health, and claims information.
* We will ask users to create and upgrade a login.gov account

Session 2



* We will ask you to log into the VA: Health and Benefits app using their Login.gov credentials
* We will ask you to confirm that the information on profile, health, and claims displays in the same way.

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


## Session 1 Discussion Guide


### Moderator logistics

_Use [#feedback-backchannel](https://dsva.slack.com/messages/C40B45NJK/details/) in Slack for real-time feedback from observers._

_Mute your Slack notifications_

_Before the session, send out the [observer instructions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/during-research/howto-observer-instructions.md) to your observers (Slackbot will do this for you if you type "observer instructions" into [#feedback-backchannel](https://dsva.slack.com/channels/feedback-backchannel))._

_In the Attendees section, make sure everyone except the participant is on mute._

_In the Audio section, click the drop-down arrow and make sure "Play Entry/Exit Chimes" is unchecked_

_Check your [screensharing setup] and share permissions for participants._

_When the participant is ready, begin the session with the following intro_


### Project-specific setup



1.  Please download the Zoom application to your mobile device.
    * [Apple App Store link to Zoom app](https://itunes.apple.com/us/app/id546505307)
    * [Google Play store link to the Zoom app](https://play.google.com/store/apps/details?id=us.zoom.videomeetings)


### Intro - 5 minutes

Thank you for joining us today. My name is [NAME]. To give you some background, the VA has built a mobile app, and today we’d like to test it out with you using a new login credential login.gov. We're not looking to test you, but test the app to see if sign in works and that your information is displaying correctly. I also want to introduce [ENGINEER], who is one of the engineers on the project. They are going to follow along and may jump in if something doesn't work as expected and need to get some further details. I also have a few other colleagues on the line observing and taking notes.

Any questions so far?

Before we start, a few things I want to mention:



* This entire session should take less than an hour. I want to be sure not to keep you much longer, so I may occasionally prompt you with the next question or topic.
* We are not testing your ability. We just want to improve these tools to better meet Veteran's needs. I will not be offended by any opinions you express, and I welcome your feedback.
* We are going to be making sure you can create a username and password for the app using Login.gov. Please don't feel any pressure to share any personal information you are not comfortable with us viewing.
* I am going to ask you to share your screen on Zoom. I don't expect that you have done this before, and I will walk you through each step to screen share.
* If for any reason and at any time you want to stop the session, please let me know.

Does this all sound ok so far?

A few questions for you:



* What type of device did you use to join this Zoom call today?
    * If not mobile: Can you join from a mobile device?
* Do you have your username and password that you normally use for VA websites handy?
    * If not: Can you access them easily? We will need you to sign in with your own username and password for today’s conversation.
* Are you comfortable signing up for a Login.gov account?
* Do you have a state-issued ID handy?
    * If not: Could you locate that? We’ll need it as part of the login.gov sign up process.
* Are you comfortable if I record my screen and audio as we talk today? We use the recordings to confirm that we have captured your opinions accurately. The recordings are destroyed after we complete analysis, and none of your comments will be attributed to you directly.
    * If yes: Once I start recording, I am going to confirm that you are ok with me recording this session once more.

_Start recording._



* I have started recording. I'd like to confirm: Are you comfortable if I record my screen and the audio as we talk today?

Again, the main goal today is to verify the new credentials work and the app shows the correct information. However, if we have time at the end we want to hear any feedback you have. We will not be offended by any opinions you express.

Those are all the logistics. Do you have any questions for me before we get started?


### 
**First Task: Log into the app with a non-Login.gov credential **



* Please open the VA: Health and Benefits app on your device and log in using any option as long as it’s not Login.gov.
    * If already signed in, that’s okay
    * What credential did they use?
* Please confirm your information
    * Claims
    * Appointments
    * Profile
    * Letters

We will want to make sure the information is the same, so please take screenshots if needed.


### 
**Second Task: Create a Login.gov credential**



* Please create a login.gov ID at this link: [https://secure.login.gov/sign_up/enter_email](https://secure.login.gov/sign_up/enter_email) 
* _Remind user that password is not shared through Zoom_

### 
**Third Task: Ensure that user is prompted to upgrade Login.gov credential**

* Please sign out of the mobile app if needed
* Log in using your new Login.gov username and password
    * User should be prompted to upgrade credential

### 
**Fourth Task: Upgrade credential**

* Using the steps provided at this link, please upgrade your login.gov credential:  [https://www.login.gov/help/verify-your-identity/how-to-verify-your-identity/](https://www.login.gov/help/verify-your-identity/how-to-verify-your-identity/) 

### 
**Thank-You and Closing – 3 minutes**


Well we really appreciate you taking the time to share your thoughts with us today. Your feedback is so helpful to us as we continue to improve tools like this one.

Thanks! Lastly, do you know any other Veterans, caregivers, or service members who might be willing to participate in a future user research session? If Yes: Thank you! I'll have our team send you an email with a little blurb that you can pass along.

Great, well thank you so much again, and enjoy the rest of your day!


## Session 2 Discussion Guide


### Moderator logistics

_Use [#feedback-backchannel](https://dsva.slack.com/messages/C40B45NJK/details/) in Slack for real-time feedback from observers._

_Mute your Slack notifications_

_Before the session, send out the [observer instructions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/during-research/howto-observer-instructions.md) to your observers (Slackbot will do this for you if you type "observer instructions" into [#feedback-backchannel](https://dsva.slack.com/channels/feedback-backchannel))._

_In the Attendees section, make sure everyone except the participant is on mute._

_In the Audio section, click the drop-down arrow and make sure "Play Entry/Exit Chimes" is unchecked_

_Check your [screensharing setup] and share permissions for participants._

_When the participant is ready, begin the session with the following intro_


### Project-specific setup



2.   Please download the Zoom application to your mobile device.
    * [Apple App Store link to Zoom app](https://itunes.apple.com/us/app/id546505307)
    * [Google Play store link to the Zoom app](https://play.google.com/store/apps/details?id=us.zoom.videomeetings)


### Intro - 5 minutes

Thanks for joining us today! My name is name, and I also have some colleagues on the line observing and taking notes. Today we're going to talk about logging into the VA mobile app.

Before we start, a few things I want to mention:



* This entire session should take less than an hour. I want to be sure not to keep you much longer, so I may occasionally prompt you with the next question or topic.
* We are not testing your ability. We just want to improve these tools to better meet Veteran's needs. I will not be offended by any opinions you express, and I welcome your feedback.
* We are going to be making sure you can create a username and password for the app using Login.gov. Please don't feel any pressure to share any personal information you are not comfortable with us viewing.
* If for any reason and at any time you want to stop the session, please let me know.
* Are you comfortable if I record my screen and audio as we talk today? We use the recordings to confirm that we have captured your opinions accurately. The recordings are destroyed after we complete analysis, and none of your comments will be attributed to you directly.
    * If yes: Once I start recording, I am going to confirm that you are ok with me recording this session once more.

_Start recording._



* I have started recording. I'd like to confirm: Are you comfortable if I record my screen and the audio as we talk today?

### 
**First Task: Confirm Upgraded credentials **

* Has your identity been confirmed using Login.gov?

### 
**Second Task: Log into the app with an upgraded Login.gov credential **

* Please open the VA: Health and Benefits app on your device and log in using Login.gov.
* Please confirm your information. Refer to the earlier screenshots if needed:
    * Claims
    * Appointments
    * Profile
    * Letters

### 
**Third Task: Confirm that direct deposit can be edited**

* Please go to profile > Direct Deposit information
* No need to edit the information, but we want to check that you _can _edit.

### 
**Thank-You and Closing – 3 minutes**


Well we really appreciate you taking the time to share your thoughts with us today. Your feedback is so helpful to us as we continue to improve tools like this one.

Thanks! Lastly, do you know any other Veterans, caregivers, or service members who might be willing to participate in a future user research session? If Yes: Thank you! I'll have our team send you an email with a little blurb that you can pass along.

Great, well thank you so much again, and enjoy the rest of your day!
