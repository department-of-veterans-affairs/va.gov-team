# Onsite Notifications MVP - Internal Testing Plan

## Goals:
 1. Confirm the feature is showing up as intended per feature flag and triggered notification
 2. Confirm the feature is working as intended
 
 ## How will we test?
 1. Testing with 5 internal users on desktop and mobile
 2. Testing single notification and multiple notification scenarios
 
 ## Process for testing
 1. Gather profile IDs of test subject and securely send to VA Notify
 2. Let VA Notify how many notifications to send to which test subjects
 3. VA Notify tells us when they will be able to trigger those notifications 
 4. We reach out to test subjects to confirm their availablility and to relay the process for validation 
 5. When test users confirm their availability Angela then turns feature on for them in production via feature flipper
 6. Test subjects test and share validation confirmation with Angela, including screenshots. As part of validation test subjects are asked to dismiss all notifications as their last test/step
 7. Troubleshoot as needed if issues are discovered and communicate any issues with Taylor and VA Notify, as needed
 8. Turn off feature flag for all test subjects
 9. Angela to document results/findings

## Instructions for test subjects
_Angela will share these instructions with the test subjects  as part of step 4 above._
1. Confirm you see the notification(s) on desktop and mobile
2. Confirm the link within the notification(s) naviagtes you to the combined debt portal on desktop and mobile
3. Send screenshots from both desktop and mobile to Angela (example will be provided)
4. After completing all validation steps, confirm you are able to dismiss the notification(s)
