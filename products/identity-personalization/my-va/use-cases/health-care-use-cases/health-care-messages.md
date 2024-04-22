# My VA Health Care Use Case: User has VA health care and does or does not have unread messages

**Last updated:** January 5, 2024 (removal of reference to MyHealtheVet link on My VA)

For LOA3 users who sign in and have VA health care and unread messages, we will show an indicator next to the "Go to your inbox" link in the Health care section of My VA, as well as other useful health care links. When a user does not have any unread messages, they will see the link to "Go to your inbox" in this section of My VA but without any indicator next to it.

## UX

- Any logged in LOA3 user can see the Health care section on My VA.

### User has unread message(s)

- When a user has unread messages, they will see a red indicator next to the "Go to your inbox" link to indicate that they have unread messages.
- [Desktop mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A305&mode=design&t=0sqAEWapTl9rGnyL-1)
- [Mobile mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A627&mode=design&t=0sqAEWapTl9rGnyL-1)

### User does not have any unread messages

- When a user does not have any unread messages, they will see a link in the Health care section to [“Go to your inbox”](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging). When this link applies, it always shows second in the list of links in this section.
- [Desktop mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A318&mode=design&t=0sqAEWapTl9rGnyL-1)
- [Mobile mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A853&mode=design&t=0sqAEWapTl9rGnyL-1)

### Other health care links
- When a user does not have any upcoming appointments, they will see a link to [“Schedule and manage your appointments”](https://va.gov/my-health/appointments) in the link list in this section.
- All users who receive VA health care also see links in the Health care section for [Refill and track your prescriptions](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/refill-prescriptions), [Request travel reimbursement](https://va.gov/health-care/get-reimbursed-for-travel-pay/), and [Get your VA medical records and lab and test results](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/download-my-data).
- If the user has an upcoming appointment, all secondary links show on the right hand side on desktop.

## How to reproduce
- Find a staging user who has VA health care in the [health care staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myvaaudit.md#health-care-section).
- Log into staging.va.gov with a test user who has VA health care.
- Once logged in, you will be redirected to My VA.
- Verify that if they have unread messages, you see a red indicator next to the "Go to your inbox" link that links to the secure messaging portal in My HealtheVet.
- Verify that if they do not have any unread messages, you do not see a red indicator next to the "Go to your inbox" link.
- Verify that you see secondary links to “Refill and track your prescriptions”, “Request travel reimbursement”, and “Get your VA medical records and lab and test results” and that these links appear on the right hand side on desktop if the user has upcoming appointments.
- Verify that if the user does not have upcoming appointments, the secondary links appear on the left hand side on desktop.
