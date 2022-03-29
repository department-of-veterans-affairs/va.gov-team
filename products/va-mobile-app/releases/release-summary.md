# VA Mobile team - Release Highlights

## Release: 3/29/22

Improvements & Bug Fixes
- Claim Refinements
  - Accessibility improvements
  - Enable multi image upload capabilities
  - Bug fixes (constant display of snack bar)
  - Bug fixes-Styling & formatting on deleting photo uploads


## Release: 3/15/22

 New & Improved & Bug Fixes
- View Payment History* - Feature deployed to production with feature toggle set to Off
- Dev flag added for Firebase analytics/performance

Bugs
- Fixed Valcon Left Margin bug

BackEnd Release

- Add payment_history to user service directory
- Add payment history to maintenance window service map
- Extract Phone parsing into library
- Fixed appointment type error bug
- New version of user endpoint to no longer return gender & fax number


## Release: 2/24/22 (Regular Release date 3/1/22)

New + Improved
- Fixed bug causing Appeals Details page to crash
- Refactoring: Redux Toolkit/Dependency Updates
- Fixed chrome debugger on Android -Modified native modules that get device name, version number, & build info to make asynchronous

BackEnd Release

- Updated policies & MFA check to account for login.gov and ID.ME
- Addressed Sentry error(s) associated with pre-caching for at home video appt's


## Release: 2/15/22

New + Improved

- Implemented dark mode
- Major refactor of our UI state management (Redux toolkit), improving developer experience, and preparing us for potential redesign work
- Update time/date layout on secure messaging



## Release: 2/1/22

New + Improved

- Pagination added to the vaccine detail screen 

Bug Fixes

- Address screen reader accessibility issues
  - Announce save & delete draft buttons
  - Limit the copy/paste functionality to only certain sections of the app which were causing accessibility issues
- Fix display of correct mailing address within the letters overview flow
- Display of direct deposit check sample image that was missing 

## Release: 1/18/22

New + Improved

- Implemented ability to delete draft(s) from the Messages draft messages folder


## Release: 1/04/22

New + Improved

- Vaccine Records added to Demo Mode (Internal)
- Add analytics for clicks on COVID buttons from respective Home or Health screens

Bug Fixes

- Address screen reader accessibility issues
   - Secure Messages screen
   - Profile & Letters screen
   - Vaccine list screen to fix saying minus for dates




## Release: 12/21/21

New + Improved

- Manufacturer label added to the details screen for Covid vaccines
- Action sheet added when removing email.  Alert for Android
- Implementation of persistent snack bar when a user has successfully moved a message into a folder
- Implemented the ability to move messages into folders
- Updated 'Trash' with folder capabilities to match VA. gov functionality

Bug Fixes

- Updated LargeNavButton to read subtext properly
- Removed a11yHint for LargeNavButton on Homescreen as the text was a duplicate of the subtext
- Addressed timezone/date display for Benefit Summary letter 
- Fixed issues of downtime message persisting when the maintenance window is past




## Release: 12/7/21 

New + Improved

Design Updates
- Change profile screen to sentence case
- Updated the vaccine details view to move series and reaction value below the header 
- Updated copy for TTY text
- Updated spinner text to match action sheet text (update from delete to remove)

Bug Fixes

- Fixed app crashing issue related to add appt to calendar feature
- Fixed app crashing issue on the claims ‘upload or add photos’ feature 
- Fixed pagination issue for past appointments (back-end) 
- Fixed white on white text input when OS set to Dark or night mode
- Fixed AccessibilityHint or VA vaccine record card on Health Care to read accurately


## Release: 11/23/21

New + Improved
 - VA vaccine record history can now be viewed on the app
 - Customers can now receive push notification reminders for upcoming appointments
 - COVID IA updates made to help users distinguish between passive COVID content and personal COVID vaccine details
 - Added confirmation messaging when removing attachments from secure messages

Bug Fixes:
 - Minor content punctuation update made on the Access your VA health care onboarding screen


## Release: 11/9/21

New + Improved
 - Firebase distribution added to the QA builds and to the On-Demand builds, also adds functionality to add users to Firebase testing via their email
 - Consistently display Error State messages (above form field and check boxes)  
 - Implemented Cerner messaging (only or some)
 - Added autoscrool to the thread message.  When a user selects a message from any of the list pages, the message page loads with the message displayed in view. 
 - Added Disability Rating Empty state messaging
 - Action sheet added for removing phone number

Bug Fixes:
- Receiver name no longer disappears when a file attachment is removed from a secure message 
- Receiver name will now display instead of the sendername when saving draft in secure message edit draft flow
- Change action sheet copy to read delete vs remove on the the delete home address flow 
- Flag set for header test to not allow scaling (addresses issue of headers being cut off due to font size)


## Release: 10/26/21

New + Improved

- Design Updates
    - Fill color has been update for secondary active & attach button fill colors
    - FA-paper clip icon updated within design system  
    - Text font changed for secondary attach button
    -Accordion alerts modifications
        - Made changes to common components  (collapse & expand states)
        - Address confirmation alert is now displayed at the top of the screen when the address input does not match USPS suggested address 
- Action Sheet confirmations now appear 
    - When saving a draft within the Secure Messaging flow
    - When selecting delete address within the Home address screen
- Removed links to claims from disability ratings screen
- Incorporated disability explainer text messaging
- Current App Version and Build number have been added to the UI
- To improve accessibility for appointment cancellations, changes were made to the text hierarchy were made
- UI Label was added to identify Covid-19 Vaccine appointments

Bug Fixes:

- Punctuation fix on cancel COVID-19 appointment card description


## Release: 10/12/21

New + Improved

- Users can now identify which appointments will be on video and which will be phone calls
- Implemented the ability for users to add a reason for an appointment
- Optimized the app for Android 12 & iOS 15


## Release: 9/28/21
New & Improved

- Users can now view if they or the facility canceled an appointment
- Add Network Security Configuration File to App

Bug Fixes

- Fixed Web view button breakout to display web page by the native browser. (Google Pixel 3 XL)
- User is able to take and attach photos with their built in camera without error. (Google Pixel 3 XL)
- Fixed "Vah" issues on Samsung phones in Claims workflow

## Release: 9/14/21
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
