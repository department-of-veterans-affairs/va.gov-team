# Notification settings: User has partial or missing contact information
**Last updated:** Jan 9, 2024 `draft`

comments requiring review have been placed inside `buttons` in-line

LOA3 users who sign in, go to the profile, and click into the notification settings page will see an alert `need confirmation if this is an alert or if it is called something else` to add or update contact info in their profile.

The notification settings page makes use of the [editing-as-a-subtask feature](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/editing-as-a-subtask/README.md) to assist users in updating their information. 

## Current State: Only Text Messaging is Supported
GIVEN a user that isn't flagged/blocked and a mobile phone number is on file
WHEN they open the notification settings page 
THEN they see an alert that allows them to edit 

## Future State: Text Messaging AND Email will be supported
GIVEN a user that isn't flagged/blocked and they have a mobile phone number is on file
WHEN they open the notification settings page 
THEN they see an alert that allows them to edit their mobile phone number
AND a prompt to add an email address

GIVEN a user that isn't flagged/blocked they have an email address is on file
WHEN they open the notification settings page 
THEN they see an alert that allows them to edit the email address
AND a prompt user to add a mobile number

## UX
