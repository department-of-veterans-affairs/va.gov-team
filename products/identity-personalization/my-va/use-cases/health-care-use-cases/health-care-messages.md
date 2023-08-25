# My VA Health Care Use Case: User has VA health care and does or does not have unread messages

**Last updated:** August 25, 2023

For LOA3 users who sign in and have VA health care and unread messages, we will show an alert for their unread message(s) in the Health care section of My VA, as well as other useful health care links. When a user does not have any unread messages, they will see a link to send a secure message to their health care provider in this section of My VA.

## UX

- Any logged in LOA3 user can see the Health care section on My VA.

### User has unread message(s)

- When a user has unread messages, they will see an alert directly under the Health care header that says “You have X unread messages. [Review your messages](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging)”. This alert is dynamic so that it says the amount of unread messages that the user has in the secure messaging portal in My HealtheVet and gives them a link to go view their unread messages there.
	- When a user has an unread messages alert, they will not see a secondary link to “Send a secure message to your health care team” in this section.
	- The unread messages alert uses the [warning alert component](https://design.va.gov/storybook/?path=/docs/components-va-alert--default#warning) from the VA design system.
- [Desktop mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/FC0B70C7-FF70-4A54-8247-DC0AD864E5ED)
- [Mobile mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/ACC876AD-8A95-4CF0-BC33-814C674A33D4)

### User does not have any unread messages

- When a user does not have any unread messages, they will see a link in the Health care section to [“Send a secure message to your health care team”](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging). When this link applies, it always shows first in the list of links in this section.
- [Desktop mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/6DE35B58-BF5A-45A8-9122-33C99486954A)
- [Mobile mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/E2F919C4-1E23-432E-82EC-11B4DC1424FA)

### Other health care links
- When a user does not have any upcoming appointments, they will see a link to [“Schedule and manage your appointments”](https://va.gov/my-health/appointments) in the link list in this section.
- All users who receive VA health care also see links in the Health care section for [Refill and track your prescriptions](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/refill-prescriptions), [Request travel reimbursement](https://va.gov/health-care/get-reimbursed-for-travel-pay/), and [Get your VA medical records and lab and test results](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/download-my-data).
- If the user has unread messages or an upcoming appointment, all secondary links show on the right hand side on desktop.

## How to reproduce
- Find a staging user who has VA health care in the [health care staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myvaaudit.md#health-care-section).
- Log into staging.va.gov with a test user who has VA health care.
- Once logged in, you will be redirected to My VA.
- Verify that if they have unread messages, you see an alert below the Health care header for unread messages that links to the secure messaging portal in My HealtheVet.
- Verify that if they do not have any unread messages, you see a link to send a secure message to your health care team in this section.
- Verify that you see secondary links to “Refill and track your prescriptions”, “Request travel reimbursement”, and “Get your VA medical records and lab and test results” and that these links appear on the right hand side on desktop if the user has unread messages or upcoming appointments.
- Verify that if the user does not have unread messages or upcoming appointments, the secondary links appear on the left hand side on desktop.
