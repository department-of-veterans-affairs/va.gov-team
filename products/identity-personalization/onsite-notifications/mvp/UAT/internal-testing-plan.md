# Onsite Notifications MVP - Internal Testing Plan

## Goals
 1. Confirm the feature is showing up as intended per feature flag and triggered notification
 2. Confirm the feature is working as intended (ordering by date for multiple notifications, link functionality, dismiss functionality)
 
 ## How will we test?
 1. Testing with 5 internal users on desktop and mobile
 2. Testing single notification and multiple notification scenarios
 
 ## Process for testing
 | | Task | Owner |Status|
 |----|----|----|----|
 |1.| Gather profile IDs of test subjects and securely send to VA Notify| Samara | Completed - week of 9/5 |
 |2.| Let VA Notify know how many notifications to send to which test subjects | Angela |Completed - 9/9 |
 |3.| VA Notify tells us when they will be able to trigger those notifications| VA Notify (Melanie) | Completed Monday 9/12 |
 |4.| UAT go/no go meeting| Erica, Angela and Taylor | Completed Wednesday 9/14 |
 |5.| Reach out to test subjects to confirm their availablility and to relay the process for validation| Angela | Completed Thursday 9/15 |
 |6.| When test users confirm their availability turn feature on for them in production via feature flipper| Angela | Completed Thursday 9/15 |
 |7.| Test subjects test and share validation confirmation with Angela, including screenshots. As part of validation test subjects are asked to dismiss all notifications as their last test/step| Test subjects, but Angela and Erica to confirm | Completed 9/21 |
 |8.| Troubleshoot as needed if issues are discovered and communicate any issues with Taylor and VA Notify| Angela, Erica and Taylor as needed | Not needed |
 |9.| Turn off feature flag for all test subjects| Angela | Completed 9/21 |
 |10.| Document results/findings| Angela | Completed 9/21 |
 |11.| Let team + VA Notify know that internal testing is complete | Angela or Erica | Completed 9/21 |

## Instructions for test subjects
_Angela will share these instructions with the test subjects  as part of step 4 above._
1. Confirm you see the notification(s) on desktop and mobile
2. Confirm the link within the notification(s) naviagtes you to the combined debt portal on desktop and mobile
3. Send screenshots from both desktop and mobile to Angela (example of what she needs will be provided)
4. After completing all validation steps, confirm you are able to dismiss the notification(s)
