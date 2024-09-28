# Notification settings: User has no contact info on file
**Last updated:**  February 15, 2024

LOA3 users who sign in, go to the profile, and click into the notification settings page can’t manage notifications if we don’t have relevant contact info in their profile.

## UX
We use the [warning alert component](https://design.va.gov/components/alert#warning-alert) to direct the user to provide the missing contact info, which uses the edit-as-a-subtask pattern ([feature documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/editing-as-a-subtask)). Review the [user flow behaviors on the mobile page](https://www.figma.com/file/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?type=design&node-id=0%3A1&mode=design&t=beICgF9Ke3eKxb6t-1) to better understand this flow.

Note: These mock-ups represent what the user will see once MHV notifications migrate to VA.gov. Pre-migration alert references mobile phone only.

* [Desktop mock-up](https://www.figma.com/file/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?type=design&node-id=0-685&mode=design&t=beICgF9Ke3eKxb6t-11)
* [Mobile mock-up](https://www.figma.com/file/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?type=design&node-id=0-51&mode=design&t=beICgF9Ke3eKxb6t-11) 

Once they update their contact information, they'll be brought back to the notification settings page, where a success message will be displayed under the `h1` element. 
* [Mock-up](https://www.figma.com/file/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?type=design&node-id=0-426&mode=design&t=beICgF9Ke3eKxb6t-11)


## Codes
N/A

## How to reproduce
1. **Do not add contact information**
2. Go to staging.va.gov/profile/notification-settings
3. Login with vets.gov.user+38 ([staging user info](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
4. You can also use any other LOA3 test user, just remove mobile phone and email address upon accessing staging.
