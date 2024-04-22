# ID.me Change 2FA Flow
The following describes the ability for a user to remotely change their 2FA settings, as of October 2018.

| Screenshot | Details |
|------------|---------|
| ![sign in](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/idme/change-2fa-flow/2fa-01-signin.png) | User signs in (note that as 2FA can be added to any credential, they may be signing in with their DS Logon, MHV, or ID.me account) |
| ![2fa challenge](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/idme/change-2fa-flow/2fa-02-2fachallenge.png) | At the bottom of the 2FA challenge screen, the user can click on `update your settings here` to change their 2FA settings. |
| ![verify](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/idme/change-2fa-flow/2fa-03-verify.png) | To update their 2FA settings, the user must complete a lightweight identity proofing step. |
| ![verified](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/idme/change-2fa-flow/2fa-04-verified.png) | After verifying their identity, the user may continue. |
| ![setup](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/idme/change-2fa-flow/2fa-05-setup.png) | Finally, the user may set up their new 2FA settings. |

# Security Notes
- For users who have already gone through LOA3 proofing, the information on the form that is shown above is cross-referenced against their verified LOA3 identity records and attributes.
- For users who have not gone through LOA3 proofing, info submitted via that form is checked against authoritative/credit sources.

In both cases, uses first successfully sign in via their 1st factor. this feature is available for them to invoke when they get to their second factor sign-in.
