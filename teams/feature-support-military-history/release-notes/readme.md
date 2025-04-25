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

