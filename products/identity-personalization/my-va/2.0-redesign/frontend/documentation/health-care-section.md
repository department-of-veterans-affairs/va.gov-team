# Health care section

![Health care section example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Health%20care%20section%20example.jpg)

## When to show the health care section

**Show**

- Someone is enrolled in VA health care.

**Do not show**

- Someone is NOT enrolled in VA health care.

## Latest Message

### When to show the messages section

**Show**

- Someone is enrolled in VA health care, even if they have no messages. We will never **not** show messaging block within the health care section.

### States
  
**State 1: Multiple new messages**  

![Multiple new messages](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Health%20care%20section_multiple%20new%20messages.jpg)

Specs

- This section only shows NEW/unread messages.
- **Latest message** shows the most recent unread messages someone has.
- “You have **[X] new messages**.” shows the total number of new/unread messages.
- **View all messages** links into the [messaging tool in MyHealtheVet](https://sqa.eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging).
  - **Note**: This is the staging link. We need to confirm the link for production.

**State 2: One new message**  

![One new messages](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Health%20care%20section_one%20new%20messages.jpg)

Specs

Everything is the same as the state with multiple messages, with the exception of the # of messages (ie. “You have 1 new message.”)

**State 3: No new message**  

![No new messages](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Health%20care%20section_no%20new%20messages.jpg)

## Next Appointment

### When to show the appointments section

**Show**

- Someone is enrolled in VA health care, even if they have no upcoming appointments. We will never **not** show appointments within the health care section.

### States
  
**State 1: Multiple upcoming appointments**  

![Multiple upcoming appointments](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Health%20care%20section_multiple%20upcoming%20appointments.jpg)

Specs

- **Next appointment** should show the next upcoming appointment based on chronological date and time.
- “You have **[X] upcoming appointments.” should show the total number of upcoming appointments that are scheduled in the VAOS tool.
- **View all appointments** links into [the VAOS tool](https://www.va.gov/health-care/schedule-view-va-appointments/appointments/).

Facility/location types (these should all be pulled in dynamically from the VAOS tool):

- VA (includes facility name)
- VA Video connect
- Phone
- Express care request

**State 2: One upcoming appointment**  

![One upcoming appointment](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Health%20care%20section_one%20upcoming%20appointment.jpg)

**State 3: No upcoming appointments**  

![No upcoming appointments](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Health%20care%20section_no%20upcoming%20appointment.jpg)

## Prescriptions update
