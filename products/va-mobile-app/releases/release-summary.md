# VA Mobile team - Release Highlights

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
