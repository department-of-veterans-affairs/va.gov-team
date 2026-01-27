# Testing with pre-release app version: Android

## **Install and set-up**

1. Participants opens Firebase link on phone, enters email address  
   1. Link for testing: [send Firebase link](https://appdistribution.firebase.dev/i/b2288c54d279c68f)  
   2. Enter email address that can be accessed on phone  
2. Open link from email on phone (from: VA Health and Benefits…)  
   1. Tap Get Started  
   2. Download app tester  
3. Enable permissions to install a pre-release version  
   1. Google Play \- profile photo \- Settings \- About  
   2. Tap “Play Store version” seven times until you see the notice that you are a developer.  
   3. Scroll up and tap General \- Developer options \- toggle “Internal app sharing” on  
4. Return to email browser, select Done  
5. (if required) Uninstall standard version of app  
6. Download the release and install

## **Clean-up**

1. Uninstall test build of VA app  
2. Uninstall Firebase  
3. Install standard VA app  
4. Toggle off “Internal app sharing”   
   1. Play Store: profile \- general \- developer options  
5. Log into VA app

## **After the session**

1. Remove their email address from Firebase so they don’t continue to get email updates

## **Notes**

* Alternatively, we can add participants manually to Firebase, which triggers an automated invitation email to them.  
* The pre-release version of the app will replace the standard version  
* Explanation for changing permissions to share with participants:   
  * Google Play is the standard way apps are sent to Android phones. This app is safe, but because the version we’re testing today is still in development, it hasn't gone through Google’s final review yet, and therefore it’s blocked by default. We need to adjust a setting to allow you to download it, and we’ll make sure to turn it back off once we’re finished.  
* Troubleshooting changing permissions  
  * Some phones have another layer of protection that prevents users from downloading unknown apps (Samsung Galaxy)  
    * Phone Settings \- Security and privacy \- Auto blocker  
  * Problem with turning on developer mode  
    * Clear cache: Phone Settings \- Apps \- Google Play Store \- Storage and cache \- Clear cache  
* Confirming with participants ahead of time (for both iOS and Android)  
  * **VA Credentials:** You have a username & password for ID.me or Login.gov and can access your two-factor authentication (text code or app).  
  * **Email Access:** You can open your email directly on your mobile phone to click the test link.  
  * **Testing Tools:** You are willing to download TestFlight (iOS) or Firebase App Distribution (Android).  
  * **Storage:** You have at least 200MB of free space.  
  * **Phone operating system version:**  
    * **iPhone:** iOS 16 or newer.  
    * **Android:** Android 12 or newer.  
  * **App Replacement:** If you have the standard VA app, the test version will temporarily replace it. (If you don't have the app, it will simply install as a new one). We will help you restore the original version at the end.  
  * **Android Permissions:** You are comfortable allowing your phone to "Install Unknown Apps" within your security settings for this session.  
  * **Connection:** You will be connected to WiFi during our call for a stable download.
