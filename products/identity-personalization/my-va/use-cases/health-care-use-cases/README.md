# My VA: Health care use cases

**Last updated: May 2025**

- User flow
- Figma files
- Test Rail QA

<details><summary>Archive | How to reproduce in staging</summary>

- [Does not have health care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/health-care-use-cases/no-health-care.md#how-to-reproduce)
- [Health care appointments](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/health-care-use-cases/health-care-appointments.md#how-to-reproduce)
- [Health care messages](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/health-care-use-cases/health-care-messages.md#how-to-reproduce)
- [The main user call fails and the system can’t tell if the user has VA health care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/health-care-use-cases/main-user-call-fails.md#how-to-reproduce)
- [The appointments API is down and the system can't tell if the user has appointments scheduled but can tell they have VA health care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/health-care-use-cases/appointments-api-down.md#how-to-reproduce)
- [The messaging API is down and we can’t tell if the user has any unread messages](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/health-care-use-cases/messaging-api-down.md#how-to-reproduce)

</details>

## Phase 1, 3.0 Experience
- For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the user will see the [LOA1 experience](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/LOA1-use-cases).
- This feature on My VA integrates with My HealtheVet and the VA online scheduling tool (VAOS or Appointments) to give the user dynamic content updates for upcoming appointments and unread messages.
- Users only see this content if they are defined as health care users, and have a health care facility associated with them. Which means, the facilities attribute in `user` state is greater than 0.

## Common use cases

<details><summary>User does not have VA health care</summary>

- **Use case:** When a LOA3 user does not have VA health care, they will see text in the section prompting them to apply for VA health care. No other secondary content shows in this use case.
- **Status code:** TBD
- **Content:** TBD
- **Format:** TBD
- [Link to designs]
- [Link to code]

</details>

### Appointments

<details><summary>User does not have any upcoming appointments</summary>

- **Use case:** When a user does not have any upcoming appointments, they will see text in this section that states ... TBD
- **Status code:** TBD
- **Content:** See designs
- **Format:** TBD
- [Link to designs]
- [Link to code]

</details>


<details><summary>User has upcoming appointments</summary>

- **Use case:** If a user has a confirmed upcoming appointment, they will see **up to** two cards in this section that tells them the date, time, and location of the appointment, as well as a link to the online scheduling tool.
- **Status code:** TBD
- **Content:** See designs
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs]
- [Link to code]

</details>


### Messages

<details><summary>User does not have any unread messages</summary>

- **Use case:** When a user does not have any unread messages, they will see ... TBD
- **Status code:** TBD
- **Content:** See designs
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs]
- [Link to code]

</details>


<details><summary>User has unread messages</summary>

- **Use case:** When a user has unread messages, they will see a card informing them they have unread messages.
- **Status code:** TBD
- **Content:** See designs
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs]
- [Link to code]

</details>


## Edge cases

### Flags
There are no flags associated with this feature.

### System errors

<details><summary>The main user call fails and the system can’t tell if the user has VA health care</summary>

- **Use case:** If an LOA3 user logs in and the main user call fails, then we will not be able to detect if a user has VA health care or not. If this error occurs, in most cases the entire page will fail to load and the user will see a full page error.
   - In rare cases, this error could occur and the page may still load. If this occurs, we display an error in the health care section.
- **Status code:** TBD
- **Content:** 

**Ashley - will need to revisit this copy with CAIA**

Header: We can't access any health care information right now.

We're sorry. Something went wrong on our end. If you get health care through VA, you can go to My HealtheVet to access your health care information. Visit My HealtheVet

- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs]
- [Link to code]

</details>


<details><summary>The appointments API is down and the system can't tell if the user has appointments scheduled but can tell they have VA health care</summary>

- **Use case:** If an LOA3 user logs in who has VA health care and there is an error with the appointments API, then we will be able to detect that they have VA health care but we will not be able to show any upcoming appointment information. If this error occurs, we display a warning alert in the Health care section.
- **Status code:** TBD
- **Content:**

Header: We can't access your appointment information.

We're sorry. Something went wrong on our end and we can’t access your appointment information. Please try again later or go to the appointments tool: [Schedule and manage your appointments](https://va.gov/my-health/appointments)

- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs]
- [Link to code]

</details>


<details><summary>The messaging API is down and we can’t tell if the user has any unread messages</summary>

- **Use case:** If an LOA3 user logs in who has VA health care and the messaging API is down, then we will not be able to detect if a user has unread messages or not. If this error occurs, we direct the user to their inbox.
- **Status code:** TBD
- **Content:** TBD
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs]
- [Link to code]

</details>

---

<details><summary>Archive | My VA: Health Care Use Cases, September 2024</summary>

# My VA: Health Care Use Cases

**Last updated:** September 16, 2024 (added note about how health care users are determined)

## Overview of Health Care:
- This feature on My VA integrates with My HealtheVet and the VA online scheduling tool (VAOS, or Appointments) to give the user dynamic content updates for upcoming appointments and unread messages.
- This feature also contains links to useful, top-task health care features: prescription refills, travel reimbursement, and VA medical records and test results.
- For all of these use cases, the user must be LOA3 (identity verified). All LOA3 users will see this section on My VA.
- Beyond LOA3 status, the determining factor for what the user sees is whether they are a health care user or not, which is defined by whether the user has a health care facility associated with them, i.e. the facilities attribute in `user` state is greater than 0.  
- [LOA1 users](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/LOA1-use-cases) will see an empty state of this section on My VA.

## Common use cases
- [User does not have VA health care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/health-care-use-cases/no-health-care.md)
- [User has VA health care and does or does not have upcoming appointments](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/health-care-use-cases/health-care-appointments.md)
- [User has VA health care and does or does not have unread messages](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/health-care-use-cases/health-care-messages.md)


## Edge cases

### Flags
There are no flags associated with this feature.

### System
- [The main user call fails and the system can’t tell if the user has VA health care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/health-care-use-cases/main-user-call-fails.md)
- [The appointments API is down and the system can't tell if the user has appointments scheduled but can tell they have VA health care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/health-care-use-cases/appointments-api-down.md)
- [The messaging API is down and we can’t tell if the user has any unread messages](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/health-care-use-cases/messaging-api-down.md)


## Flow diagrams
- [User flow for health care on My VA](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0-7253&mode=design)

</details>
