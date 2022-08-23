# Notification settings: User has no contact info on file
**Last updated: August 22, 2022**

LOA3 users who sign in, go to the profile, and click into the notification settings page can’t manage notifications if we don’t have relevant contact info in their profile.

## UX
* We use the  [warning alert component](https://design.va.gov/components/alert#warning-alert) to direct the user to the contact info section to provide the missing contact info.
* Once they update their contact information, the success message will include a link back to the notification settings page. 
* [Desktop mock-up](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/a/JnO1Jv0)
* [Mobile mock-up](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/a/52l205y)

## Codes
N/A

## How to reproduce
1. **Do not add contact information**
2. Go to staging.va.gov/profile/notification-settings
3. Login with vets.gov.user+38 ([staging user info](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
4. You can also use any other LOA3 test user, just remove mobile phone and email address upon accessing staging.
