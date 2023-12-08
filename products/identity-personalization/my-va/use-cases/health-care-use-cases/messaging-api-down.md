# My VA Health Care Use Case: The messaging API is down and we can’t tell if the user has any unread messages

**Last updated:** October 27, 2023

For LOA3 users who sign in and the messaging API is down, if they have VA health care, they will see a secondary link to send a secure message to their health care team.

## UX
- Any logged in LOA3 user can see the Health care section on My VA.
- If an LOA3 user logs in who has VA health care and the messaging API is down, then we will not be able to detect if a user has unread messages or not.
- If this error occurs, we do not display an error message. Instead, we display the [Go to your inbox](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging) secondary link in the health care section.
- [Desktop mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/6DE35B58-BF5A-45A8-9122-33C99486954A)
- [Mobile mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/E2F919C4-1E23-432E-82EC-11B4DC1424FA)

## How to reproduce
- In order to reproduce this error, log into VA.gov or staging.va.gov with any user.
- In the Developer Tools menu, go to the Network tab and right click on the api. Select `Block Request Url` and then reload the page.
- Be sure to remove that block after testing.
- [See more details about blocking specific network requests here.](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/profile_errors.md#appendix-blocking-specific-network-requests)
