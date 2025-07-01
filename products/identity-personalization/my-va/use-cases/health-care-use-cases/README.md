# My VA: Health care use cases

**Last updated: May 2025**

- [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1746474542228/c397457f63aa34d09dee9f34d785af90cd3b8b96?wid=36-1746474575795&outline=open)
- [Figma files](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5353-14055&t=hwoiHCaMFjyRAOid-1)
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

- **Use case:** When a LOA3 user does not have VA health care, they will see text in the section informing them they have no health care information at this time, and a link to My HealtheVet.
- **Status code:** TBD
- **Format:** Paragraph copy. See designs
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5069-18072&t=hwoiHCaMFjyRAOid-1)
- [Link to code]
- **Content:** See designs

</details>


### Appointments

<details><summary>User does not have any upcoming appointments</summary>

- **Use case:** When a user does not have any upcoming appointments, they will see a card that informs them they have no appointments and a link to manage appointments.
- **Status code:** TBD
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5008-17793&t=cZLTEcVoQuXx90AV-1)
- [Link to code]
- **Content:** See designs

</details>


<details><summary>User has upcoming appointments</summary>

- **Use case:** If a user has a confirmed upcoming appointment, they will see **up to** two cards in this section that tells them the date, time, and location of the appointment, as well as a link to the online scheduling tool.
- **Status code:** 200
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5022-17383&t=cZLTEcVoQuXx90AV-1)
- [Link to code]
- **Content:** See designs

</details>


### Messages

<details><summary>User does not have any unread messages</summary>

- **Use case:** When a user does not have any unread messages, they will see a card telling them and a link to their inbox.
- **Status code:** TBD
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5008-17793&t=cZLTEcVoQuXx90AV-1)
- [Link to code]
- **Content:** See designs

</details>


<details><summary>User has unread messages</summary>

- **Use case:** When a user has unread messages, they will see a card informing them they have unread messages, and a link to their inbox.
- **Status code:** TBD
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5022-17383&t=cZLTEcVoQuXx90AV-1)
- [Link to code]
- **Content:** See designs

</details>


## Edge cases

### Validation
This feature has no validation use cases.

### Flags
There are no flags with this feature.

### System errors

<details><summary>The main user call fails and the system can’t tell if the user has VA health care</summary>

- **Use case:** If an LOA3 user logs in and the main user call fails, then we will not be able to detect if a user has VA health care or not. If this error occurs, in most cases the entire page will fail to load and the user will see a full page error.
   - In rare cases, this error could occur and the page may still load. If this occurs, we display an error in the health care section.
- **Status code:** TBD
- **Format:** [Slim warning alert component](https://design.va.gov/components/alert/#web-2)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5333-17024&t=hwoiHCaMFjyRAOid-1)
- [Link to code]
- **Content:** 

We can’t show your health care information right now. Refresh this page or try again later.

</details>


<details><summary>The appointments API is down and the system can't tell if the user has appointments scheduled but can tell they have VA health care</summary>

- **Use case:** If an LOA3 user logs in who has VA health care and there is an error with the appointments API, then we will be able to detect that they have VA health care but we will not be able to show any upcoming appointment information. If this error occurs, we display a warning alert in the Appointments section.
- **Status code:** TBD
- **Format:** [Slim warning alert component](https://design.va.gov/components/alert/#web-2)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5362-14384&t=hwoiHCaMFjyRAOid-1)
- [Link to code]
- **Content:**

We can’t show your appointments right now. Refresh this page or try again later.

</details>


<details><summary>The messaging API is down and we can’t tell if the user has any unread messages</summary>

- **Use case:** If an LOA3 user logs in who has VA health care and the messaging API is down, then we will not be able to detect if a user has unread messages or not. If this error occurs, we provide a warning alert in the Messages section.
- **Status code:** TBD
- **Format:** [Slim warning alert component](https://design.va.gov/components/alert/#web-2)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5393-14001&t=cZLTEcVoQuXx90AV-1)
- [Link to code]
- **Content:**

We can't show your messages right now. Refresh this page or try again later.

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
