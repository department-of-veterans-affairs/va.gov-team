#Onsite Notifications MVP - Internal Testing Plan

##Goals:
 1. Confirm the feature is showing up as intended per feature flag and triggered notification
 2. Confirm the feature is working as intended
 
 ##How will we test?
 1. Testing with 5 internal users on desktop and mobile
 2. Testing single notification and multiple notification scenarios
 
 ##Process for testing
 1. Gather profile IDs of test subject and securely send to VA Notify
 2. Let VA Notify how many notifications to send to which test subjects
 3. VA Notify tells us when they will be able to trigger those notifications 
 4. We reach out to test subjects to confirm their availablility and to relay the process for validation 
 5. When test users confirm their availability Angela then turns feature on for them in production via feature flipper
