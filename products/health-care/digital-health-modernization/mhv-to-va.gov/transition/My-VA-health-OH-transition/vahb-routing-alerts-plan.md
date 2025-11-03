# VAHB mobile app - My VA Health (OH) routing alerts plan

This file articulates decisions made regarding which areas of the VAHB mobile app will render routing alerts to the My VA Health portal for users of the app, and planned changes around those alerts as the transition away from My VA Health takes place beginning in January 2026. 

## Current state
VAHB is currently configured to only show the warning message in 2 places: Prescriptions and Messages.
* Yellow warning alert for My VA Health patient portal was removed from appointments because scheduling is not part of the app and everything else is already integrated for OH.
* It was never part of MR because the intention was to put full MR support, for OH and Vista, in at the same time so the message wouldn't be necessary.

### Prescriptions
For Prescriptions, the alert only shows up if: 
* the patient has at least 1  prescription with the status `transferred`
  * So, they could have current OH facilities, but if no transferred rx  we wouldn't show the alert

### Messages
For Messages, the alert only shows up if: 
* the patient has OH facilities on record AND the remote config flag showing the banners at all is enabled AND the user is NOT enabled for OH SM by the backend flipper flag
* Update: 11/3/25 - per Jayson Perkins, this is currently broken because the remote config flag was never added to production. He plans to get fixed today.
