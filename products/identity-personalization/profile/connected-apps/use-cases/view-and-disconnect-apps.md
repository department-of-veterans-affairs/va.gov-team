# Connected apps: User views and disconnects apps
**Last updated:** February 14, 2024

- Once users have verfied their identity, users can view and disconnect apps.

## UX
### User does not have apps connected - view apps

- If a user does not have any app connected, they will see information about Connected apps and a link to go to the app directory. 
	- [Desktop mock-up](https://www.figma.com/file/eMR2XSTGnWQgF2YEphWK8O/Profile---Connected-Apps?type=design&node-id=0-254&mode=design&t=wSU7j7GeuMsAZiyE-11)
	- [Mobile mock-up](https://www.figma.com/file/eMR2XSTGnWQgF2YEphWK8O/Profile---Connected-Apps?type=design&node-id=0-119&mode=design&t=wSU7j7GeuMsAZiyE-11)

### User has apps connected - view and disconnect apps

- If a user already has apps connected, they will see a list of their apps. 
	- [Desktop mock-up](https://www.figma.com/file/eMR2XSTGnWQgF2YEphWK8O/Profile---Connected-Apps?type=design&node-id=0-191&mode=design&t=wSU7j7GeuMsAZiyE-11)
	- [Mobile mock-up](https://www.figma.com/file/eMR2XSTGnWQgF2YEphWK8O/Profile---Connected-Apps?type=design&node-id=0-2&mode=design&t=wSU7j7GeuMsAZiyE-11)
- Each app has a button to disconnect the app.
- Selecting this button will prompt an modal asking the user to confirm they'd like to disconnect the app.
	- [Mock-up, mobile view ](https://www.figma.com/file/eMR2XSTGnWQgF2YEphWK8O/Profile---Connected-Apps?type=design&node-id=0-98&mode=design&t=wSU7j7GeuMsAZiyE-11) 

#### Success - app disconnected
- Once the app has successfully been disconnected, a success alert will appear.
- [Mock-up, success](https://www.figma.com/file/eMR2XSTGnWQgF2YEphWK8O/Profile---Connected-Apps?type=design&node-id=0-72&mode=design&t=wSU7j7GeuMsAZiyE-11)

#### Error - app not disconnected
- If an error occurs and the app cannot be disconnected, an error alert will appear.
- [Mock-up, error](https://www.figma.com/file/eMR2XSTGnWQgF2YEphWK8O/Profile---Connected-Apps?type=design&node-id=0-57&mode=design&t=wSU7j7GeuMsAZiyE-11)

## Codes
N/A

## How to reproduce
### View Connected apps
1. Go [staging.va.gov/profile/account-security](staging.va.gov/profile/account-security)
2. Log in with any of the users listed in the [connected apps section of our test case docs](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-profile.md#connected-apps).
3. Go to the personalized menu in the upper right of the navigation, and click into the profile. You'll be dropped into the Personal information section of the profile.
4. Select Connected apps in the sidebar menu.
