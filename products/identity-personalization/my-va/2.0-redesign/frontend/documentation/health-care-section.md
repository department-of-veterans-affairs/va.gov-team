# Health care section

![Health care section example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Health%20care%20section%20example.jpg)

## When to show the health care section

**Show**

- Someone is enrolled in VA health care.

**Do not show**

- Someone is NOT enrolled in VA health care.

<details>
  <summary><h2>Latest message specs</h2></summary>

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

</details>

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

Specs

Everything is the same as the state with multiple upcoming appointments, with the exception of the # of appointments (ie. “You have 1 upcoming appointment.”)

**State 3: No upcoming appointments**  

![No upcoming appointments](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Health%20care%20section_no%20upcoming%20appointment.jpg)

## Prescriptions update

### When to show the prescriptions section

**Show**

Someone is enrolled in VA health care AND:

- They either have prescriptions in the process of being refilled, OR...
- They have prescriptions managed by the VA, but none are in the process of being refilled.

**Don't show**

Someone IS enrolled in VA health care, BUT: 

- They have never had any prescriptions managed by the VA.

### States
  
**State 1: Multiple prescription refills**  

![Multiple prescription refills](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Health%20care%20section_multiple%20prescription%20refills.jpg)

Specs

- As of now, this section should only show prescriptions in the process of being refilled. This means that those prescriptions have one of these status: Submitted or Filled.
- **Prescription update** should show the most recent prescription that has a status of Submitted OR Filled within the last 30 days.
- “You can **[X] prescription updates**.” should reflect the total number of prescriptions with a status of submitted or filled.
- **View all prescriptions** links into [the prescription tool in MyHealtheVet](https://sqa.eauth.va.gov/mhv-portal-web/web/myhealthevet/refill-prescriptions).
  - **Note**: This is the staging link. We need to confirm the link for production.
- Statuses (can be detected dynamically via our current integration): Submitted or Filled
  
**State 2: One prescription refill**  

![One prescription refill](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Health%20care%20section_one%20prescription%20refill.jpg)

Specs

Everything is the same as the state with multiple prescriptions in the refill process with the exception of the # of prescriptions (ie. “You have 1 prescription update.”)
  
**State 3: No prescription refills, but HAS prescriptions managed by the VA**  

![No prescription refills](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Health%20care%20section_no%20prescription%20refill.jpg)
  
**State 4: No prescription refills, and DOES NOT HAVE prescriptions managed by the VA**  

We do not show the prescriptions section in this case.

## Related links

![Related links](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Health%20care%20section_related%20links.jpg)

- [View lab and test results](https://sqa.eauth.va.gov/mhv-portal-web/eauth?deeplinking=download_my_data)
- [Get your VA medical records](https://sqa.eauth.va.gov/mhv-portal-web/eauth?deeplinking=download_my_data)
