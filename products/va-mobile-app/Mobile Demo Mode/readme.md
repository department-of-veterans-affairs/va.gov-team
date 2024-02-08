
# VA Health and Benefits Mobile App Demo Mode #

## Purpose: ##

* The VA Health and Benefit App’s Demo Mode mode provides a safe and non-productionalized environment for users to interact and engage with the app’s navigation, functionality, features, and designs.

* Demo mode is set up with a single user that is not tied to any production test account and allow users to access all of the app’s latest offerings. Users can complete actions such as submitting a secure message or a prescription refill to experience the entire user journey without impacting other systems or teams. 

* Demo users should use the latest version of the app in order to experience the latest version of demo mode. Work in progress items that the VA Health and Benefits App Team is working on will not appear in demo mode until it is released into production.

* Google Play store uses demo access to perform their testing; if unable to access they will decline the release 


**Password:** Zhuzh-it
* Case sensitive
* Space sensitive

### Contacts: ###
Area | Name 
------ | ------
VA PO | Rachel Han, Ryan Thurwell
Ad Hoc | Group Product Manager - Matt Hall
Slack Channel  | #va-mobile-app



**Steps to Access Demo Mode**
 1.    Download or update existing app to the latest version (any device)
 2.   [Apple App Store Link](https://apps.apple.com/us/app/va-health-and-benefits/id1559609596)
 3.    [Google Play Store Link](https://play.google.com/store/apps/details?id=gov.va.mobileapp&hl=en_US&gl=US)
 4.    Open the app
 5.    Tap the VA Logo 7 times
 6.    Enter the Password and click demo button
 7.    Screen is updated with a Demo Mode bar on the home screen
 8.    Click Sign In button 
 9.    Demo user is now at the home page of the mobile app and can explore 





## Troubleshooting: ##

### Demo Mode’s password is not working
- Case sensitive and space sensitive - review password entered 
- Mobile app may need to be updated - update the app 
- Demo password has changed - review password on Demo Mode Gitbhub

### A new feature does not appear in Demo Mode 
- If the new feature has not yet been released to production, it will not appear in demo mode
- If the new feature is released to veterans in production, try the following:
- Download the latest version of VA Health and Benefits App 
  - Open the app and log into Demo
  - Hard close the app (app switcher then swipe to close it) 
  - Open it again
   - If it's still not there, data may be cached 
   - Log into demo mode
   - Go to Settings -> Developer Screen -> Click the Remote Config button 
   - Scroll down to the Override Toggle section 
   - Tap the relevant feature toggle to on 
   - Click Apply Overrides 
   - Log back into Demo Mode
