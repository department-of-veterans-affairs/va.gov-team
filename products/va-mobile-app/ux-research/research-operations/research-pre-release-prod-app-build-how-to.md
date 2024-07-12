# Conducting remote User Research with a pre-release production app build & user credentials
Last updated July 2024
 
Deciding whether to conduct remote user research using a pre-release production build of the VA mobile app (using a participant's real credentials) should be determined on a case-by-case basis considering the goals of the research. Testing in this manner allows participants to experience the app as it interacts with live production APIs, leading to greater data variability and more realistic reactions to content compared to using fake data. 
Conducting the research involves several steps during both the research [planning phase](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/research-pre-release-prod-app-build-how-to.md#research-study-planning) and the actual [research sessions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/research-pre-release-prod-app-build-how-to.md#during-the-research-session).

_[NNG: Conducting Usability Testing with Real Users' Real Data](https://www.nngroup.com/articles/users-real-data/)_  




## Research study planning



* Account for about 15 minutes of app installation and setup during the research session, and additional time in case of technical difficulties.
* For a more seamless/easy installation (where it is also not necessary to collect any App store ID’s in advance), consider limiting the testing device type to iOS (iPhones and iPads).
    *  On iOS, the Testflight link opens a webpage with links (and instructions) to download both Testflight and the app’s test build so the participant can easily switch apps to return to the screen:   
[image]  
Given the current app distribution setup, installing a build from a link on Android (using Firebase) requires a more involved set of steps, and can be more variable due to differences in operating system Settings between device manufacturers. 
* Plan to [guide the participant through installation at the start of the session](https://docs.google.com/document/d/1QI_SqEC1nJNHFD9VbsbjlRubvxCo0vKL2n8lDTAbHsM/edit#heading=h.bb0zvoiv64ag), after the introduction/consent but before any warm-up questions. Doing it in this order ensures that participants will still answer some planned questions, even if technical issues prevent them from getting the app installed and logged in. It also prevents the moderator from making up questions on the spot.
* Have the recruiter confirm and get consent in advance—preferably right before the sessions—that participants:
    * Have Zoom installed on their mobile device prior to the session and join the session using Zoom (on their own) _*Most important_
    * Are OK with installing the Testflight app & the app test build
    * Are able to log in with VA credentials (username & password)
* Before the session, get the correct link from engineering & note the version number (this is used during the session to confirm that the participant has installed the correct build).


## During the research session

The moderator should help participants do the following during the session:



* Share their mobile screen in Zoom (see ​​[VA Platform - Research - Mobile sessions](https://depo-platform-documentation.scrollhelp.site/research-design/research-mobile-sessions) guidance for details). 
* Confirm again verbally that they are on Zoom on the mobile device that they’d like to use for the session, are ok with installing Testflight and the VA mobile app, and have their credentials ready.
* To ensure that the participant proceeds through the app’s onboarding, biometrics & push notification screens after login, the app must be a new install (not an update). If the participant already has the VA mobile app installed on their device, have them uninstall it before installing the test version of the app.
* Provide a link to download the app in the Zoom chat, and install Testflight and the pre-release version of the VA mobile app.
* Log into the pre-release version of the mobile app using their real credentials (pause the recording while they’re doing this).
* At the end of the session, uninstall Testflight & the pre-production build.

Example [App setup & screenshare](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-04%20Personalized%20Home%20Screen%20-%20evaluative%20research/personalized%20home%20screen%20-%20conversation%20guide.md#section-1-app-setup--screenshare-15-minutes) 


###  Example script for conversation guide


#### App Install & log in

*Once a participant has joined the meeting using Zoom on their mobile device and is sharing their screen, follow these steps to install the VA mobile app.*

**Installation**



* First thing we want to do—if you're an app user—is to remove the current version from your phone. _(help them do that)_
* Like I mentioned earlier, now I'm going to send you a special, future version of the VA mobile app in the Zoom chat... Please go ahead and tap on the link to open it on your phone. [link to iOS App build](https://testflight.apple.com/join/65PnVx09)
    * _If Testflight is not installed on the participant’s device:_
        * Scroll to the first button that says “View in App Store”
        * Tap to Install Testflight
            * _If they can’t download the app successfully, try again but then [skip to Warm-Up questions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-02%20Personalized%20Home%20Screen%20-%20evaluative%20research/personalized%20home%20screen%20-%20conversation%20guide.md#section-2-warm-up-questions-5-minutes)._
        * Now we’re going to navigate back to that screen we were looking at in the browser. Go ahead and do that. Ok, here we are.
* Scroll down the screen til you get to a button that says ‘Start Testing’ to tap to download and install the VA health & benefits mobile app. I will help you uninstall the app at the end of the conversation.
    * Tap Don’t Allow, then tap Continue.
    * Now go ahead and tap Install.
    * _If they can’t download the app successfully, try again but then [skip to Warm-Up questions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-02%20Personalized%20Home%20Screen%20-%20evaluative%20research/personalized%20home%20screen%20-%20conversation%20guide.md#section-2-warm-up-questions-5-minutes)._
* Ok, tap Open to open the app.
    * Tap the Next button, then tap Start Testing.
    * _Participant will be on Sign In screen—confirm that version number at bottom of the screen is [correct version number #.##.# (###)] If it’s not, try again to get the build installed._

**Log in with production credentials**



* Now I’m going to guide you quickly through the first couple of screens to get you where you need to be for our conversation today. When we get there, we’ll stop and do some warm up questions before using the app.
* Log in: First, we’ll need you to log into the app with the option you prefer (Login.gov, ID.me or My HealtheVet) using your username and password.
    * _If they can’t log in successfully, [skip to Warm-Up questions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-02%20Personalized%20Home%20Screen%20-%20evaluative%20research/personalized%20home%20screen%20-%20conversation%20guide.md#section-2-warm-up-questions-5-minutes)._
* If the next screen is Touch ID: Tap “Skip” and then stop at the next screen (it will be the first screen of the onboarding carousel).
* If the next screen Onboarding: Ok, stop here. _(proceed with Warm-up questions)_


#### App + Testflight uninstall

*At the end of the session, follow these steps to uninstall Testflight and the VA mobile app.*


* Ok, we are finished with the special version of the VA mobile app we installed today. Now I’m going to help you remove the special version of the VA mobile app and the Testflight app you installed on an earlier call from your phone.
    * First, close the VA mobile app (swipe up with 3 fingers to close) and go to your device home screen.
    * Find the Testflight app icon on your phone.
        * NonSR: Touch the app icon until a menu until a minus icon appears, then tap it again. Select delete app.
        * SR: Double tap but hold until a menu appears. Select delete app.
    * The Testflight app is now uninstalled from your phone.
    * Next, find the VA app icon on your phone.
        * NonSR: Touch the app icon until a menu until a minus icon appears, then tap it again. Select delete app.
        * SR: Double tap but hold until a menu appears. Select delete app.
    * The VA mobile app is now uninstalled from your phone.
* If the participant is a current app user: Now, I can help you get the current version of the VA mobile app back on your phone. We'll go to the App Store to download it, and then you can log in with your username and password. Did you want to do that together, or did you prefer to do it by yourself?
    * If yes:
        * Go to the App store
        * Download/redownload VA mobile app. Tap Open.
        * Log in with your credentials.
* Great. All done! You can stop sharing your screen.
    * NonSR: Swipe the little arrow on the left, then select Stop Share.
    * SR: Go back to Zoom, in the menu, go all the way to the right and select Stop Share.
        * _Instructions: [iOS: Stop screen share](https://depo-platform-documentation.scrollhelp.site/research-design/iphone-stop-screen-share)_
