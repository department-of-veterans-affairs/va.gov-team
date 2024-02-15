# My VA Use Case: There's an error because the system can't connect to MPI

For users who sign in and the main user call fails, they will see an error for the entire page.

## UX
- If this error occurs, the entire page will fail to load and the user will see a full page error that says "We're sorry. Something went wrong on our end. Please refresh this page or try again later."
- [Desktop mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A128&mode=design&t=qbn63trCAjh7M4BK-1)
- [Mobile mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A782&mode=design&t=qbn63trCAjh7M4BK-1)

## How to reproduce
- In order to reproduce this error, log into VA.gov or staging.va.gov with any user.
- In your browser, go to the Developer Tools menu, go to the Network tab and right click on the api. Select `Block Request Url` and then reload the page.
- Be sure to remove that block after testing.
- [See more details about blocking specific network requests here.](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/profile_errors.md#appendix-blocking-specific-network-requests)
