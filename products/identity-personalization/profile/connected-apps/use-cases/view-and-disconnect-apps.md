# Connected apps: User views and disconnects apps
**Last updated:** February 9, 2023

- Once users have verfied their identity, users can view and disconnect apps.

## UX
### User does not have apps connected - view apps

- If a user does not have any app connected, they will see information about Connected apps and a link to go to the app directory. 
	- [Desktop mock-up](https://www.sketch.com/s/479aa6d6-a7a7-4d82-acf1-c06a6699655e/a/ELvK4q2)
	- [Mobile mock-up](https://www.sketch.com/s/479aa6d6-a7a7-4d82-acf1-c06a6699655e/a/KvDEaZr)

### User has apps connected - view and disconnect apps

- If a user already has apps connected, they will see a list of their apps. 
	- [Desktop mock-up](https://www.sketch.com/s/479aa6d6-a7a7-4d82-acf1-c06a6699655e/a/dl71Zrn)
	- [Mobile mock-up](https://www.sketch.com/s/479aa6d6-a7a7-4d82-acf1-c06a6699655e/a/qeE9kQk)
- Each app has a button to disconnect the app.
- Selecting this button will prompt an alert asking the user to confirm they'd like to disconnect the app.
	- [Desktop mock-up](https://www.sketch.com/s/479aa6d6-a7a7-4d82-acf1-c06a6699655e/a/JnmMD8G)
	- [Mobile mock-ups](https://www.sketch.com/s/479aa6d6-a7a7-4d82-acf1-c06a6699655e/a/OmlYekq)

#### Success - app disconnected
- Once the app has successfully been disconnected, a success alert will appear.
- [Desktop mock-up, success](https://www.sketch.com/s/479aa6d6-a7a7-4d82-acf1-c06a6699655e/a/4a894g3)
- [Mobile mock-up, success](https://www.sketch.com/s/479aa6d6-a7a7-4d82-acf1-c06a6699655e/a/nRGWVZ4)

#### Error - app not disconnected
- If an error occurs and the app cannot be disconnected, an error alert will appear.
- [Desktop mock-up, error](https://www.sketch.com/s/479aa6d6-a7a7-4d82-acf1-c06a6699655e/a/DPJ8A1y)
- [Mobile mock-up, error](https://www.sketch.com/s/479aa6d6-a7a7-4d82-acf1-c06a6699655e/a/7y8Gpd2)

## Codes
N/A

## How to reproduce
### View Connected apps
1. Go [staging.va.gov/profile/account-security](staging.va.gov/profile/account-security)
2. Log in with any of the users listed in the [connected apps section of our test case docs](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-profile.md#connected-apps).
3. Go to the personalized menu in the upper right of the navigation, and click into the profile. You'll be dropped into the Personal information section of the profile.
4. Select Connected apps in the sidebar menu.
