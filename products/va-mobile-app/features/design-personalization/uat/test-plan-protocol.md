# VA Mobile App - Personalized Home Screen: UAT Plan & Protocol

Based on [Standard Work - Mobile App UAT 020123](https://docs.google.com/document/d/1_TGZ3W4d7DbLfNAkbaSvv5GAHZUnkTA4_izlJWxgR0I/edit) 


## **Test Plan**


### Objective/Summary


**What to test - **We need to verify,**<span style="text-decoration:underline;"> in pre-prod and prod</span>**, that:

The Home Screen accurately displays the Veterans’ personal information and in-flight activities, and Veterans can navigate to and from the Home Screen using active feature modules. We also want to verify that users with both strong and low internet connectivity can see and use the home screen without significant problems.


### Test Scenarios (all users)



1. User has one or more activities displayed on the Home Screen 
2. User can navigate to and from an active Home Screen item and its respective feature screen
3. User can open their Veteran Status Card 
4. User can see the same activity on the Home Screen reflected on the respective Category Screen

<table>
  <tr>
   <td>
<strong>Scenario</strong>
   </td>
   <td><strong>Expected Results</strong>
   </td>
   <td><strong>Pass/ Fail</strong>
   </td>
  </tr>
  <tr>
   <td>
<strong>Activity Display</strong>

   </td>
   <td>
<ul>

<li>User views all in-flight activities 
<ul>
 
<li>if there are no activities, screen displays, or reads for screenreader users, proper empty state or error state
</li> 
</ul>

<li>Activities contain accurate description text
</li>
</ul>
   </td>
   <td>
<ul>

<li>PASS if all of the criteria is met

<li>FAIL if one or more of the criteria is not met
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<strong>Navigation</strong>

   </td>
   <td>
<ul>

<li>User clicks on each active home screen feature module and navigates to the respective feature screen

<li>User navigates back from that feature screen to the home screen

<li>Activities display accurate description text after navigation (Secure Message # should decrement if user opens a message)
</li>
</ul>
   </td>
   <td>
<ul>

<li>PASS if all of the criteria is met

<li>FAIL if one or more of the criteria is not met
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>


<strong>About you</strong>

   </td>
   <td>
<ul>

<li>The About you section displays the correct data (branch of service, disability rating, monthly payment)

<li>User can open the Veteran Status Card from the Home Screen 
</li>
</ul>
   </td>
   <td>
<ul>

<li>PASS if all of the criteria is met

<li>FAIL if one or more of the criteria is not met
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<strong>Category Screen Activity</strong>

   </td>
   <td>
<ul>

<li>Applicable category screen modules display the same description text as the Home Screen
</li>
</ul>
   </td>
   <td>
<ul>

<li>PASS if all of the criteria is met

<li>FAIL if one or more of the criteria is not met
</li>
</ul>
   </td>
  </tr>
</table>



### Pre-UAT



* The build that will be used to test out the Home Screen will be the build that includes the most functionally complete code, to date. 
* Prior to determining which build will be used for UAT, the QA team will complete a first pass of the tickets and document any bugs that are identified. 


### Recruitment


#### Criteria



* We will recruit **3 participants** (between known contacts) to test data in Production - 
    * or Android users
    * Non screen reader users
    * Veteran has an active claim or VA health care
    * If possible, recruit a Veteran with Cerner health care
    * If possible, test in low connectivity
* Veterans will be recruited from?
    * Ask the Veterans Ad Hoc slack channel
    * Contact folks from [Veterans willing to help VA teams with pilot sessions](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/team-veterans.md) list on github
    * Other Veterans we know


#### Recruitment Message 

To post in the #Veterans Ad Hoc Slack channel: 
> Hello! I’m a designer & researcher on the VA mobile app team. I’m running research for the new personalized VA mobile app home screen. **I’m looking for 3-5 Veterans who have an active claim or actively use VA health care users to participate in UAT this week, May 8-10.** We can be flexible about day and time and am looking to schedule this ASAP. The guided session will take no more than 30 minutes. 
> You must: 
> 
> * Use a mobile device for the session
> * Have Zoom installed on your phone, a working microphone, and be willing to share your phone screen over Zoom.
> * Be willing to install Testflight + a special build of the VA mobile app for the session (we will help remove it)
> * Have VA login credentials you can use to log out of & into the app on your own (a username and password, not biometrics)
> * Ideally have an active claim or actively use VA health care 
> 
>  If you’re interested, please **reply in a thread**
> 
>  Thank you so much!

Participation email invite w Zoom:
> Thank you for helping us out with with testing the VA mobile app!  We're going to be testing a new personalized VA mobile app home screen.
> 
> For our session:
>  * Please use a mobile device to join this Zoom (you'll share your phone screen over Zoom).
>  * We're going to install Testflight + a special build of the VA mobile app (we will help you remove it at the end)
>  * Make sure you have VA login credentials you can use to log out of & into the app on your own (a username and password, not biometrics)
> 
> Please reach out with any questions or to let me know if this doesn't doesn't work for you.
> 
> Thanks!
> Holly & Brea
> VA Mobile UR/UX team



### **Success Criteria**

UAT will be considered complete if:

* All users have satisfactory responses. (All questions/ test cases were answered with “PASS” or N/A unable to test)


## Tester Steps to Execute (Protocol)



* Thanks so much for joining today. My name is [name], very nice to meet you.
* Today we're going to talk about the VA mobile app. Our discussion will help the team understand how to improve the app for Veterans in the future.
* During our session today, we are going to be using a special version of the VA mobile app and in a few minutes I'm going to send you a link to a special version of the app to explore. We’re going to get all of that set up now. 



### Section 0: Introduction (2 minutes)

There are a few things I'd like to mention:



* This entire session should take about 30 minutes. I want to be sure not to keep you much longer, so I may occasionally prompt you with the next question or topic.
* First, we’ll download and install a special version of the VA mobile app on your mobile device to use during our conversation. Then, we’ll talk together before moving to a part where I’ll ask you to use that special version of the VA mobile app. I will help you get it set up. Before we do that, I want to confirm a few things:
    * Were you able to join our session today using Zoom on your iPhone or iPad?
    * Are you still ok with downloading & installing a special version of the VA mobile app on your phone today?
    * Last, we are going to need you to be able to log into the VA mobile app using the option you prefer (Login.gov, ID.me or My HealtheVet) with your username and password for our session. Will you be able to do that?


### **Section 1: App setup & screenshare (10 minutes)**


#### **Screen share Setup**



* First, I’d like to ask you to share your device’s screen so I can help you install the app and we can look at it together. I can walk you through how to start the screen share. _[Help participant share screen]_
    * [iOS: Zoom screen share](https://depo-platform-documentation.scrollhelp.site/research-design/iphone-start-screen-share)
* Great, I’m seeing your screen. Now I’m going to help you get the app ready.


#### App Install & log in



* Like I mentioned earlier, now I'm going to send you a special, future version of the VA mobile app in the Zoom chat... Please go ahead and tap on the link to open it on your phone. [Android build]  [iOS build](https://testflight.apple.com/join/65PnVx09)
* If Testflight is not installed:
    * Scroll to the first button that says “View in App Store”
    * Tap to Install Testflight
    * Now we’re going to navigate back to that screen we were looking in the browser. Go ahead and do that. Ok, here we are.
* Scroll down the screen til you get to a button that says Start Testing to tap to download and install the VA health & benefits mobile app. I will help you uninstall the app at the end of the conversation.
    * Tap Don’t Allow, then tap Continue.
    * Now go ahead and tap Install.
    * If they can’t download successfully, end session.
* Ok, tap Open to open the app.
    * Tap the Next button, then tap Start Testing.
    * Participant will be on Sign In screen—**confirm that version number at bottom of the screen is  2.27.1 (1542)** If it’s not, try again to get the build installed.
* Now I’m going to guide you quickly through the first couple of screens to get you where you need to be for our conversation today. 
* Log in: First, we’ll need you to log into the app with the option you prefer (Login.gov, ID.me or My HealtheVet) using your username and password.
    * If they can’t log in successfully, end session.
* If the next screen is Touch ID: Tap “Skip” and then stop at the next screen (it will be the first screen of the onboarding carousel).
* If the next screen is Onboarding: Ok, stop here.


### Section 2: User Acceptance Tasks (5 minutes)



* **Task 1: Review Home Screen for accuracy**

    Go ahead and explore this first screen (Scroll up & down). 

    - [ ] Does this area on top called “Activity” look like it’s showing all of the things in the VA mobile app that you’re keeping track of, things that are coming up soon or things that you need to do?(Secure Messages, Appointments, Prescriptions, and Claims and Appeals?)
    - [ ] Scrolling down, (if applicable) Does the “About you” section information look correct to you?
      - [ ] Branch of service correct?
      - [ ] Disability rating correct?
      - [ ] Monthly payment correct?
* **Task 2: Navigate to and from the Home Screen using activity modules**

    Now we’re going to make sure the Activity section is working as it should. 

    - [ ] Go ahead and tap each one of the active home screen module/s, and stop when you get there.
      - [ ]  _Are they taken to the correct feature/s?_
    - [ ] Once on the feature screen: Ok, go ahead and return to the Home screen.
      - [ ] _Are they able to get back home (it’s ok to help)?_
* **Task 3: (if applicable)? Click on the Veteran Status Card**

    Next we’re going to make sure the “About you” section is working as it should. 

    - [ ] Tap on the Veteran Status Card.
       - [ ]  _Does the Veteran Status Card open?_
* **Task 4: Navigate to the corresponding Category Screen for each visible home screen module**

    Last, we’re going to check and make sure the screens for those categories at the bottom of the screen (Health, Benefits) are working as they should.

    - [ ] Tap into Health. Does the Health screen display the same data for each feature  as the home screen?
    - [ ] Tap into Benefits. Does the Benefits screen display the same data for each feature as the home screen?


### **Section 3: App + Testflight uninstall (2 minutes)**



* Ok, we are finished with the special version of the VA mobile app we installed today. Now I’m going to help you remove the special version of the VA mobile app and the Testflight app you installed on an earlier call from your phone.
    * First, close the VA mobile app (swipe up with 3 fingers to close) and go to your device home screen.
    * Find the Testflight app icon on your phone.
        * Touch the app icon until a menu until a minus icon appears, then tap it again. Select delete app.
    * The Testflight app is now uninstalled from your phone.
    * Next, find the VA app icon on your phone.
        * Touch the app icon until a menu until a minus icon appears, then tap it again. Select delete app.
    * The VA mobile app is now uninstalled from your phone.
* If the participant is a current app user: Now, I can help you get the current version of the VA mobile app back on your phone. We'll go to the App Store to download it, and then you can log in with your username and password. Did you want to do that together, or did you prefer to do it by yourself?
    * If yes:
        * Go to the App store
        * Download/redownload VA mobile app. Tap Open.
        * Log in with your credentials.
* Great. All done! You can stop sharing your screen.
    * Swipe the little arrow on the left, then select Stop Share.
    * Instructions: [iOS: Stop screen share](https://depo-platform-documentation.scrollhelp.site/research-design/iphone-stop-screen-share)

We really appreciate you taking the time to share your thoughts with us. Your feedback is so helpful to us as we continue to work on the app and improve it for Veterans.

Thank you so much again, and enjoy the rest of your day!

 
## **Revisions to plan**
5/8/24 Updated to allow Android users

## **Analysis**

[2024 - VA Mobile App Home Screen - UAT - Analysis](https://docs.google.com/spreadsheets/d/1HSL0SJRwomx4dwDioufKgfQbYSpkYVZvO4F379H5GQw/edit#gid=831278958)
