# My VA Health Care Use Case: User has VA health care and has received health care services at a Cerner facility

**Last updated:** January 5, 2024 _(removal of reference to MyHealtheVet link on My VA)_

For LOA3 users who sign in, have VA health care, and have received care at a Cerner facility, we will show all health care links in the Health care section and no updates within cards.

## UX
- Any logged in LOA3 user can see the Health care section on My VA.
- When we detect that a user has received care at a Cerner facility via the [Drupal integration](https://depo-platform-documentation.scrollhelp.site/developer-docs/how-to-opt-in-to-drupal-as-the-source-of-truth-for), we show all health care links (Go to your inbox, Schedule and manage your appointments, Refill and track your prescriptions, Request travel reimbursement, and Get your VA medical records and lab and test results) and no other cards or empty state text in the section.
- [Desktop mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/VradRV8)
- [Mobile mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/YGlJVpL)

## How to reproduce
- Find a staging user who receives care at a Cerner facility in the [health care staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myvaaudit.md#health-care-section).
- Log into staging.va.gov with a test user who receives care at a Cerner facility.
- Once logged in, you will be redirected to My VA.
- Verify that you see the health care section with six links underneath the header and nothing else in that section.
