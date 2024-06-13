# My VA Health Care Use Case: The messaging API is down and we can’t tell if the user has any unread messages

**Last updated:** January 6, 2024 _(added Figma links)_

For LOA3 users who sign in and the messaging API is down, if they have VA health care, they will see a secondary link to send a secure message to their health care team.

## UX
- Any logged in LOA3 user can see the Health care section on My VA.
- If an LOA3 user logs in who has VA health care and the messaging API is down, then we will not be able to detect if a user has unread messages or not.
- If this error occurs, we do not display an error message. Instead, we display the [Go to your inbox](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging) secondary link in the health care section.
- [Desktop mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A318&mode=design&t=5F61Y67ZSUQb0Pyb-1)
- [Mobile mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A853&mode=design&t=5F61Y67ZSUQb0Pyb-1)

## How to reproduce
- In order to reproduce this error, log into VA.gov or staging.va.gov with any user.
- In the Developer Tools menu, go to the Network tab and right click on the api. Select `Block Request Url` and then reload the page.
- Be sure to remove that block after testing.
- [See more details about blocking specific network requests here.](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/profile_errors.md#appendix-blocking-specific-network-requests)
