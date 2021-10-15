# VA Mobile team - Release Highlights

## Release: 10/26

DRAFT......
New + Improved
- Accessibility Improvements
    - change hierarchy oftext on the cancel appt page
    - 1408 - Refine active states on buttons
1421 - "How to update Direct Deposit" information for MHV/ DS logon credentialed users
1654 - Analytics - Change events for log in
1359 - Save draft confirmation (action sheet) on Secure Messaging
1360 - Delete home address confirmation (action sheet)
1419 - Common component: Accordion alert
1417 - Address confirmation message
1690 - BUG - sev-4 - All - Missing period at end of Cancel COVID-19 appointment card description text
1403 - Replace CTA to Claims in Disability Rating with explainer text
1482 - Add Version Number and Build Number to app UI
1143 - Display upcoming/past COVID-19 appointments*
1071 - Appointments: improve accessibility of cancellation label*   

Bug Fixes
- Fixed missing punctuation on the canel COVID-19 appt screen

## Release: 10/12

New + Improved

- Users can now identify which appointments will be on video and which will be phone calls
- Implemented the ability for users to add a reason for an appointment
- Optimized the app for Android 12 & iOS 15


## Release: 9/28
New & Improved

- Users can now view if they or the facility canceled an appointment
- Add Network Security Configuration File to App

Bug Fixes

- Fixed Web view button breakout to display web page by the native browser. (Google Pixel 3 XL)
- User is able to take and attach photos with their built in camera without error. (Google Pixel 3 XL)
- Fixed "Vah" issues on Samsung phones in Claims workflow

## Release: 9/14
New & Improved

- Added disability rating to the app
- Updated screen labels to be consistent with web (show status/details) on the Claims & Appeals screen(s)
- Added loading message to claims info page
- Centered all elements in the Web View nav bar
- App Store & Google Play links added to the Share App message
- Now capturing event Letter Download as part of analytics

Bug Fixes

- Fixed ClaimScreen name in order to capture accurately as part of Firebase/GA 
- Fixed the display of effective date when null on the Rating Disability Details page
- Fixed error state- Community care appointments not loading
- Folders screen
  - Now displays icon when there is a draft with an attachment
  - Fixed accessibility reading when draft folder message is null
- Fixed the incorrect messages that were displaying for  
  - Loading secure messages
  - Sign out
- Fixed GitHub commands for Android QA builds
- Fixed functionality within the address flow when canceling new address.  User is now redirected back to the personal info screen and existing address displayed with no suggestion validation is seen 
- Fixed SettingsScreen.test.tsx issue with navigateTo wrapper
- Corrected Android App label in setting to show rn-fetch-blob
