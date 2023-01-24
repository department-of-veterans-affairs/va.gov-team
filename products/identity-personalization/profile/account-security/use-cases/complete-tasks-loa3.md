# Account security: User views and completes tasks
**Last updated:** September 26, 2022

- Once users have verfied their identity, users can add 2-factor authentication to their account, view terms and conditions for health tools (in some cases), and find a link to their sign in service (eg. ID.me) to manage their sign in information.

## UX
### 2-factor authentication
- The user will see the name of the section and prompt that tells them they can add 2-factor authentication.
- If they have not yet added 2-factor authentication, there will not be a checkmark next to the section. 
- Clicking the link will lead the user through the process of 2-factor authentication.
- A checkmark will appear once the user has completed this task. 
- [Desktop mock-up, 2-factor authentication](https://www.sketch.com/s/ebd4596f-0707-46cb-941e-247a808725cc/v/aWWp5P/a/3OYm1ew)
- [Mobile mock-up, 2-factor authentication](https://www.sketch.com/s/ebd4596f-0707-46cb-941e-247a808725cc/a/4aAPxQJ)

### Terms and conditions
- Whether or not terms and conditions shows depends on a few factors including if the user is LOA3 and if they have a MHV account.
- If someone has not agreed to terms and conditions, there will not be a checkmark next to the section. 
- Clicking the link will bring the user to the [Terms and conditions for medical information page](https://staging.va.gov/health-care/medical-information-terms-conditions/).
- A checkmark will appear once the user has completed this task. 
- [Desktop mock-up, terms and conditions](https://www.sketch.com/s/ebd4596f-0707-46cb-941e-247a808725cc/v/aWWp5P/a/Gm030dY)
- [Mobile mock-up, terms and conditions](https://www.sketch.com/s/ebd4596f-0707-46cb-941e-247a808725cc/a/Gm0knaD)

### Link to sign in service
- The user will see a section with information on how to change their sign in information for their sign in service of choice. 
- The link will bring the user to the website where they manage their account (either Login.gov,DS Logon, MyHealtheVet, or ID.me).
- This section will never have a checkmark, as this task can be completed often and does not directly determine account security. 
- [Desktop mock-up, change sign in information for sign in service](https://www.sketch.com/s/ebd4596f-0707-46cb-941e-247a808725cc/v/aWWp5P/a/Gm030dY)
- [Mobile mock-up, change sign in information for sign in service](https://www.sketch.com/s/ebd4596f-0707-46cb-941e-247a808725cc/a/OmJwWpv)

## Codes
N/A

## How to reproduce

See [profile staging users and test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-profile.md) and [profile product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#how-to-access-and-test) and for information on how to test account security

### Notes
- Any LOA3 user can access Account security information
- You can test with any staging user

### View Account Security
1. Go [staging.va.gov/profile/account-security](staging.va.gov/profile/account-security)
2. Log in with any [staging user](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv).
3. Go to the personalized menu in the upper right of the navigation, and click into the profile. You'll be dropped into the Personal information section of the profile.
4. Select Account security in the sidebar menu.
