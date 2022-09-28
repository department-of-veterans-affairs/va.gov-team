# Connected apps: User views, connects, and disconnects apps
**Last updated:** September 26, 2022

- Once users have verfied their identity, users can view, connect, and disconnect, apps.

## UX
### View apps
- If a user already has apps connected, the user will see a list of the apps.
- If they have not yet added apps, they will see information on Connected apps and a link to go to the app directory. 
- [Desktop mock-up]
- [Mobile mock-up]

### Connect apps
- If a user does not already have apps connected, they will see information on Connected apps and a link to go to the app directory. 
- If a user has already connected apps, they will see an additional information component, which contains a link to go to the app directory.
- If they have not yet added apps, the link will be a link to go to the app directory. 
- Clicking the link will lead the user to a list of third party apps.
- User can connect an app through the app itself. 
- [Desktop mock-up - no connected apps]
- [Mobile mock-up - no connected apps]
- [Desktop mock-up - connected apps]
- [Mobile mock-up - connected apps]

### Disconnect apps
- If a user already has apps connected, they will have the option to disconnect apps.
- The user will see a list of connected apps.
- Each app will have a button to Disconnect the app.
- Selecting this button will prompt an alert that says _____
- [Desktop mock-up]
- [Mobile mock-up]

### Success - app disconnected
- Once the app has successfully been disconnected, a success alert will appear.
- [Desktop mock-up, success]
- [Mobile mock-up, success]

### Error - app not disconnected
- If an error occurs and the app cannot be disconnected, an error alert will appear.
- [Desktop mock-up, error]
- [Mobile mock-up, error]

## Codes
N/A

## How to reproduce

See [profile staging users and test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-profile.md) and [profile product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#how-to-access-and-test) and for information on how to test connected apps

### Notes
- Any LOA3 user can access Connected apps
- You can test with any staging user

### View Connected apps
1. Go [staging.va.gov/profile/account-security](staging.va.gov/profile/account-security)
2. Log in with any [staging user](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv).
3. Go to the personalized menu in the upper right of the navigation, and click into the profile. You'll be dropped into the Personal information section of the profile.
4. Select Connected apps in the sidebar menu.
