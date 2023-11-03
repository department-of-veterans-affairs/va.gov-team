# My VA Health Care Use Case: User has VA health care and does or does not have upcoming appointments

**Last updated:** October 27, 2023

For LOA3 users who sign in and have VA health care, we will show a card with dynamic content in the Health care section of My VA if they have an upcoming appointment. If they don’t have any upcoming appointments, we show text stating this in the Health care section. This section also contains other useful health care links.

## UX
- Any logged in LOA3 user can see the Health care section on My VA.

### User has an upcoming appointment

- If a logged in LOA3 user has a confirmed upcoming appointment, they will see a card in this section that tells them the date, time, and location of the appointment, as well as a link to "Schedule and manage your appointments" which links to the [online scheduling tool](https://va.gov/my-health/appointments).
- This card is always displayed on the left hand side of the page on desktop under the Health care header.
- Uses the [card component](https://design.va.gov/components/card) from the VA design system.
- [Desktop mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/6DE35B58-BF5A-45A8-9122-33C99486954A)
- [Mobile mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/E2F919C4-1E23-432E-82EC-11B4DC1424FA)

### User does not have any upcoming appointments

- When a user does not have any upcoming appointments, they will see text in this section that states “You have no upcoming appointments to show.”
	- When a user has unread messages, this text shows directly below the messages alert  on the left hand side on desktop.
- When a user does not have any upcoming appointments, they will see a link to [“Schedule and manage your appointments”](https://va.gov/my-health/appointments) in the link list in this section.
- [Desktop mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/8AB87684-AE2C-42F4-BC9D-60E4B26AE1BB)
- [Mobile mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/28297FB0-D585-45CF-84CB-1935A09F74F3)

### Other health care links

- If the user does not have unread messages, they will see a link to “Go to your inbox” that links them to the [secure messaging portal in My HealtheVet](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging). 
- All users who receive VA health care also see links in the Health care section for [Visit My HealtheVet on VA.gov](https://va.gov/my-health/), [Refill and track your prescriptions](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/refill-prescriptions), [Request travel reimbursement](https://va.gov/health-care/get-reimbursed-for-travel-pay/), and [Get your VA medical records and lab and test results](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/download-my-data).
- When a user has an appointment card to show, all secondary links show on the right hand side on desktop, and directly below the appointment card on mobile.
- When a user does not have any upcoming appointments or unread messages, these secondary links show on the left hand side on desktop.

## How to reproduce
- Find a staging user who has VA health care in the [health care staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myvaaudit.md#health-care-section).
- Log into staging.va.gov with a test user who has VA health care.
- Once logged in, you will be redirected to My VA.
- Verify that if the user has an upcoming appointment, you see a card for the soonest upcoming appointment under the "Health care" header.
- Verify that the link in the card to “Schedule and manage your appointments” links to the online scheduling tool and the soonest upcoming appointment information matches what is displaying on My VA.
- Verify that if the user does not have any upcoming appointments, you see text stating as such under the Health care header.
- Verify that you see secondary links to "Visit My HealtheVet on VA.gov", “Go to your inbox” (only if the user has no unread messages), “Refill and track your prescriptions”, “Request travel reimbursement”, and “Get your VA medical records and lab and test results” that link to their respective pages in My HealtheVet and on VA.gov.
- Verify that the secondary links appear on the right hand side on desktop if the user has an upcoming appointment or unread messages.
- Verify that the secondary links appear on the left hand side on desktop if the user does not have any upcoming appointments or unread messages.
