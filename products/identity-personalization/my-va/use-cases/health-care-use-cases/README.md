# My VA: Health Care Use Cases

**Last updated:** August 25, 2023

## Overview of Health Care:
- This feature on My VA integrates with My HealtheVet and the VA online scheduling tool (VAOS) to give the user dynamic content updates for upcoming appointments and unread messages.
- This feature also contains links to useful, top-task health care features: prescription refills, travel reimbursement, and VA medical records and test results.
- For all of these use cases, the user must be LOA3 (identity verified). All LOA3 users will see this section on My VA.
- [LOA1 users](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/LOA1-use-cases) will not see this section on My VA.

## Common use cases
- [User has VA health care and does or does not have upcoming appointments](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/health-care-use-cases/health-care-appointments.md)
- [User has VA health care and does or does not have unread messages](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/health-care-use-cases/health-care-messages.md)
- [User has VA health care and has received health care services at a Cerner facility](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/health-care-use-cases/cerner-user.md)
- [User does not have VA health care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/health-care-use-cases/no-health-care.md)

## Edge cases

### Flags
There are no flags associated with this feature.

### System
- [The main user call fails and the system can’t tell if the user has VA health care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/health-care-use-cases/main-user-call-fails.md)
- [The appointments API is down and the system can't tell if the user has appointments scheduled but can tell they have VA health care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/health-care-use-cases/appointments-api-down.md)
- [The messaging API is down and we can’t tell if the user has any unread messages](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/health-care-use-cases/messaging-api-down.md)


## Flow diagrams
- [User flow for health care on My VA](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/p/23DF1405-7CBD-4457-B5B1-6D3518D13CEA/canvas)
