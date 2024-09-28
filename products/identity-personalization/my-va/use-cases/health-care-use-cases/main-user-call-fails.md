# My VA Health Care Use Case: The main user call fails and the system can’t tell if the user has VA health care

**Last updated:** July 17, 2023

For LOA3 users who sign in and the main user call fails, they will likely see an error for the entire page but in rare cases the page may load and they will see an error in the Health care section on My VA.

## UX
- Any logged in LOA3 user can see the Health care section on My VA.
- If an LOA3 user logs in and the main user call fails, then we will not be able to detect if a user has VA health care or not.
- If this error occurs, in most cases the entire page will fail to load and the user will see a [full page error](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/system-cant-connect-to-MPI.md).
- In rare cases, this error could occur and the page may still load. If this occurs, we display an error that states "**We can't access any health care information right now.** We're sorry. Something went wrong on our end. If you get health care through VA, you can go to My HealtheVet to access your health care information. [Visit My HealtheVet](https://www.myhealth.va.gov/mhv-portal-web/home)"
- This error is the only thing that displays in the section when it occurs and the page still loads.
- Uses the [warning alert component](https://design.va.gov/components/alert#warning-alert) from the VA design system.
- [Desktop mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A279&mode=design&t=5F61Y67ZSUQb0Pyb-1)
- [Mobile mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A809&mode=design&t=5F61Y67ZSUQb0Pyb-1)

## How to reproduce
- In order to reproduce this error, log into VA.gov or staging.va.gov with any user.
- In your browser, go to the Developer Tools menu, go to the Network tab and right click on the api. Select `Block Request Url` and then reload the page.
- Be sure to remove that block after testing.
- [See more details about blocking specific network requests here.](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/profile_errors.md#appendix-blocking-specific-network-requests)

