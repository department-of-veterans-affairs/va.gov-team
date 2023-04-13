# My VA Use Case: There's an error because the system can't connect to MPI

For users who sign in and the main user call fails, they will see an error for the entire page.

## UX
- If this error occurs, the entire page will fail to load and the user will see a full page error that says "We're sorry. Something went wrong on our end. Please refresh this page or try again later."
- [Desktop mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/B161F007-530B-4927-AD5B-DDF75B54F637)
- [Mobile mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/AB8722B5-7D20-4E84-AA75-D4BCA9448D37)

## How to reproduce
- In order to reproduce this error, log into VA.gov or staging.va.gov with any user.
- In your browser, go to the Developer Tools menu, go to the Network tab and right click on the api. Select `Block Request Url` and then reload the page.
- Be sure to remove that block after testing.
- [See more details about blocking specific network requests here.](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/profile_errors.md#appendix-blocking-specific-network-requests)
