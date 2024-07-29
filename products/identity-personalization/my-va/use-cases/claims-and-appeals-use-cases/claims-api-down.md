# My VA Claims and Appeals Use Case: The claims API is down and we can’t display any claims or appeals information

**Last updated:** May 29, 2024 (added Figma links)

For LOA3 users who sign in when the claims API is down, they will see an error in the Claims and appeals section on My VA.

## UX
- Any logged in LOA3 user can see the Claims and appeals section on My VA.
- If an LOA3 user logs in and there is an error with the claims API, then we will not be able to show a card for any recent claim or appeal updates.
- If this error occurs, we display an error that states "**We can't access your claims or appeals information.** We're sorry. Something went wrong on our end. If you have any claims and appeals, you won't be able to access your claims and appeals information right now. Please refresh or try again later."
- This error is the only thing that displays in the section when it occurs.
- Uses the [warning alert component](https://design.va.gov/components/alert#warning-alert) from the VA design system.
- [Desktop mockup](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=0-279&t=GBCeuQm7m0x4XIc1-1)
- [Mobile mockup](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=0-809&t=GBCeuQm7m0x4XIc1-1)

## How to reproduce

- In order to reproduce this error, log into VA.gov or staging.va.gov with any user.
- In the Developer Tools menu, go to the Network tab and right click on the api. Select `Block Request Url` and then reload the page.
- Be sure to remove that block after testing.
- [See more details about blocking specific network requests here.](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/profile_errors.md#appendix-blocking-specific-network-requests)
