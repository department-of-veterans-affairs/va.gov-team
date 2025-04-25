# VAHB Mobile App - Mobile Feature Support Team Release Notes

Please view the release notes below for information about our deployments to various VA.gov products. For additional information, please visit the following links:

- [Who is the Mobile Feature Support team?](https://github.com/department-of-veterans-affairs/va-mobile-feature-support)
- [What products do we work on, and why?](https://github.com/department-of-veterans-affairs/va-mobile-feature-support)
- [Who are our stakeholders?](https://github.com/department-of-veterans-affairs/va-mobile-feature-support?tab=readme-ov-file#key-stakeholders)

------


## Coming Soon | March 20 - April 25, 2025
- Please bear with us as we catch up!

## VAHB Mobile App Veteran Status Card Surfacing | 03/20/2025
- Display a contextual error message when the Veteran Service History and Eligibility API returns an unexpected error response
- Display a contextual error message when the Veteran Service History and Eligibility API returns a status of `NOT_TITLE_API`.
- Display a contextual error message when there is a system error or when the Veteran Service History and Eligibility API returns a status of `ERROR`.
- All users of the mobile app are now able to see the Proof of Veteran Status button, regardless of their eligibility.

## VAHB Mobile App Bug Fixes | 03/19/2025
- Fixed an issue where a console banner was getting in the way and making local development difficult.

## VAHB Mobile App Veteran Status Card Surfacing | 03/19/2025
- Ensured that the mobile app can successfully connect to the Veteran Service History and Eligibility API.

## VAHB Mobile App Bug Fixes | 03/06/2025
- Fixed a bug where some users using VoiceOver on iPhone 15 Pro were redirected to the home screen after sending a secure message instead of returning to the messages screen with a confirmation snackbar. Now, all users will receive the snackbar and remain in the messages screen for a consistent experience.
- Fixed a bug where users were unable to use tap to focus on SnackBar if other focusable content was behind SnackBar.
- Fixed a bug where “Claims History” text was not wrapping and infringing on “VA” header space.
- Fixed a bug where push notifications when tapped did not disappear from the device list of notifications.

## VAHB Mobile App Design System | 03/06/2025
- The new Loading component that was built out by the Design System team is now incorporated into the app.
- The new SnackBar component that was built out by the Design System team is now incorporated into the Global sections of the app.

## VAHB Mobile App Bug Fixes | 03/03/2025
- Fixed a bug where deeplinking from a specific push notification was happening more than once for a given push notification. Users will now only be deeplinked once for a given push notification.
- Resolved an issue where macOS label was resolving to a machine that doesn’t exist.

## VAHB Mobile App Bug Fixes | 02/25/2025
- Fixed a bug where phone number, SSN and Email were not properly recognized if they ended in punctuation.
- Fixed a bug where the notification onboarding screen did not appear in the onboarding flow after hitting reset.
- Improved error handling for messaging outages. When /v0/messaging/health/folders/0/messages is down, the VA Mobile app now provides clearer error messaging and improved navigation, preventing users from getting stuck in the inbox.
- Fixed a bug where some assistive tech tech could not get ‘into’/’onto’ screens where the only actionable items are initially offscreen.

## VAHB Mobile App Design System | 02/25/2025
- Incorporated the Icon Component into the app so that the app is compliant with the Design System requirements.

## VAHB Mobile App Design System | 02/19/2025
- Fixed a bug where the Alert Icon was misaligned and not displaying properly. The first line of the description text is now vertically centered with the Alert Icon.

## VAHB Mobile App Bug Fixes | 02/18/2025
- Fixed a bug where rows in a simple list component were too tall.
- Fixed a bug where the Alert component heading was not announced with VoiceOver.

## VAHB Mobile App Bug Fixes | 02/17/2025
- Fixed a bug where VoiceOver was not announcing the role of the SegmentedControl component.
- Resolved an issue where some tests were failing due to how heading roles were set in alert messages. This update ensures tests run smoothly and helps maintain the app’s quality and reliability.

## VAHB Mobile App Design System | 02/17/2025
- The LoadingIndicator was patched in order for the detox/e2e tests to function properly.
- Updated how Snackbars are handled to prevent them from disappearing unexpectedly during navigation. This makes in-app notifications more reliable and consistent.

## VAHB Mobile App Executive Order - Off-Cycle Release | 02/13/2025
- In response to an Executive Order, gender identity information was removed from the profile section of the app.

## VAHB Mobile App Bug Fixes | 02/13/2025
- Fixed a bug where session refresh rates were too short. Users now maintain login session tokens for the full 45 days.

## VAHB Mobile App Bug Fixes | 02/12/2025
- Fixed a bug where there was a typo in the message that’s created for veterans when they select “share the app” from the settings screen.

## VAHB Mobile App Bug Fixes | 02/11/2025
- Fixed a bug where users were not able to see the status of claims they had submitted due to receiving error messages.

## VAHB Mobile App Bug Fixes | 02/04/2025
- Improved the UI for when fields such as date, groupName, type and dosage data comes back empty.

## VAHB Mobile App Unit Tests | 12/13/2024
- Updated app unit tests to use i18n translations instead of hardcoded strings for Address Summary, Address Validations and Edit Address Screen within the Contact Information Screen.

## VAHB Mobile App Unit Tests | 12/11/2024
- Updated app unit tests to use i18n translations instead of hardcoded strings for Account Security, In App Recruitment Screen, Notifications Settings Screen and Settings Screen within the Profile Settings Screen.
- Updated app unit tests to use i18n translations instead of hardcoded strings for Edit Direct Deposit Screen, How To Update Direct Deposit Screen and Direct Deposit Screen within the Payments Screen.

## VAHB Mobile App Unit Tests | 12/04/2024
- Updated app unit tests to use i18n translations instead of hardcoded strings for Edit Email Screen, Edit Phone Number Screen and How Will You Screen within the Contact Information Screen.
- Updated app unit tests to use i18n translations instead of hardcoded strings for No Payments Screen, Payment Issue Screen, Payment Missing Screen and Payment History Screen within the Payment History Screen.
- Updated app unit tests to use i18n translations instead of hardcoded strings for Loa Gate, Login Screen, Onboarding Carousel, Sync Screen and Login Screen within Screens.



