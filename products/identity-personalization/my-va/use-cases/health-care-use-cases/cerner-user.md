# My VA Health Care Use Case: User has VA health care and has received health care services at a Cerner facility

**Last updated:** August 25, 2023

For LOA3 users who sign in, have VA health care, and have received care at a Cerner facility, we will show an alert in the Health care section of My VA directing them to the new VA health portal and My HealtheVet.

## UX
- Any logged in LOA3 user can see the Health care section on My VA.
- When we detect that a user has received care at a Cerner facility via the [Drupal integration](https://depo-platform-documentation.scrollhelp.site/developer-docs/how-to-opt-in-to-drupal-as-the-source-of-truth-for), the only thing that displays in the Health care section of My VA is a Cerner alert.
	- The content of this alert states the names of the facilities that a user has visited that are Cerner facilities and directs the user to the [VA Health patient portal](https://patientportal.myhealth.va.gov/clear-session?to=https%3A%2F%2Fstaging-patientportal.myhealth.va.gov%3Fauthenticated%3Dtrue) for these facilities. The health care facility names that are in this alert use the Drupal integration to show only the names of facilities that a user receives VA health care at that are Cerner facilities. This content is dynamic.
	- This alert also provides a link to [My HealtheVet](https://www.myhealth.va.gov/mhv-portal-web/home) to access care for any other facilities besides the ones listed in the alert as Cerner facilities.
	- Uses the [warning alert component](https://design.va.gov/storybook/?path=/docs/components-va-alert--default#warning) from the VA design system.
- When this alert shows, no other content appears in the Health care section of My VA.
- [Desktop mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/ADCF0E10-E520-4E53-AA3A-70B27D06AD46)
- [Mobile mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/B86A600B-1B19-4128-854C-299A3A7AAD07)

## How to reproduce
- Find a staging user who receives care at a Cerner facility in the [health care staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myvaaudit.md#health-care-section).
- Log into staging.va.gov with a test user who receives care at a Cerner facility.
- Once logged in, you will be redirected to My VA.
- Verify that you see the Cerner alert in the Health care section and that the Cerner facility (or facilities) listed are dynamically populating so the alert only lists applicable facility names and not a list of all Cerner facilities.
- Verify that the alert contains links to the VA health portal and My HealtheVet.
- Verify that you do not see anything else besides the Cerner alert in the Health care section.
