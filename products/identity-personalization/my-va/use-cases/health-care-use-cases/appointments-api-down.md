# My VA Health Care Use Case: The appointments API is down and the system can't tell if the user has appointments scheduled but can tell they have VA health care

**Last updated:** January 6, 2024 _(Removal of MHV link, updated with Figma links)_

For LOA3 users who have VA health care but sign in when the appointments API is down, they will see an error in the Health care section on My VA as well as other useful health care links.

## UX
- Any logged in LOA3 user can see the Health care section on My VA.
- If an LOA3 user logs in who has VA health care and there is an error with the appointments API, then we will be able to detect that they have VA health care but we will not be able to show any upcoming appointment information.
- If this error occurs, we display an error that states "**We can't access your appointment information** We're sorry. Something went wrong on our end and we can’t access your appointment information. Please try again later or go to the appointments tool: [Schedule and manage your appointments](https://va.gov/my-health/appointments)"
- Uses the [error alert component](https://design.va.gov/storybook/?path=/docs/components-va-alert--error) from the VA design system.
- When this error occurs and the user does not have any unread messages, they will also see links in the Health care section to [“Send a secure message to your health care team”](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging), [Refill and track your prescriptions](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/refill-prescriptions), [Request travel reimbursement](https://va.gov/health-care/get-reimbursed-for-travel-pay/), and [Get your VA medical records and lab and test results](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/download-my-data).
- When this error occurs and there are no unread messages, all secondary links appear on the left hand side on desktop.
- When this error occurs and the user does have unread messages, they will see the unread messages alert above the appointments error as well as links in the Health care section to [Refill and track your prescriptions](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/refill-prescriptions), [Request travel reimbursement](https://va.gov/health-care/get-reimbursed-for-travel-pay/), and [Get your VA medical records and lab and test results](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/download-my-data). These links currently all go to their respective pages in My HealtheVet.
- When this error occurs and there are unread messages, all secondary links appear on the right hand side on desktop.
- [Desktop mockup without messages](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A266&mode=design&t=5F61Y67ZSUQb0Pyb-1)
- [Mobile mockup without messages](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A798&mode=design&t=5F61Y67ZSUQb0Pyb-1)
- [Desktop mockup with messages](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A253&mode=design&t=5F61Y67ZSUQb0Pyb-1)
- [Mobile mockup with messages](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A787&mode=design&t=5F61Y67ZSUQb0Pyb-1)

## How to reproduce
- In order to reproduce this error, find any staging user who has VA health care in the [health care staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myvaaudit.md#health-care-section).
- In the Developer Tools menu, go to the Network tab and right click on the api. Select `Block Request Url` and then reload the page.
- Be sure to remove that block after testing.
- [See more details about blocking specific network requests here.](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/profile_errors.md#appendix-blocking-specific-network-requests)
- Verify that you see the appointments error in the Health care section and the four links below it.
- Verify that if the user has unread messages, you see the messages alert above the appointments error and secondary links appear on the right hand side on desktop.
