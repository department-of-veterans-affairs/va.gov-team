# Health care section

![Health care section example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Health%20care%20section%20example.jpg)

## InVision Mockups

- [Desktop](https://vsateams.invisionapp.com/share/RNZWCZBXZJ6#/screens/443777220)
- [Mobile](https://vsateams.invisionapp.com/share/XNZWCYAYD45#/screens/443913926_My_VA_Mobile_Icons)

## When to show the health care section

**Show**

- Someone is enrolled in VA health care.

**Do not show**

- Someone is NOT enrolled in VA health care.

## Latest message 

### When to show the messages section

**Show**

- Always show the messaging link.

### States
  
**State 1: User has unread messages**  

*Messages data specs*

- We have all of this data already showing on the existing My VA dashboard. It all comes through MyHealtheVet, but I don't know that we have a team to work with if we have questions about what data we have now or how this is currently set up. Please let us know ASAP if you have any concerns about the way we are handling data or how it's displayed.

*UX specs*

- This link only shows NEW/unread messages.
- “You have **[X] unread messages**.” shows the total number of new/unread messages. This links into the [messaging tool in MyHealtheVet](https://sqa.eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging).
  - **Note**: This is the staging link. We need to confirm the link for production.

*Visual specs*

- The biggest challenge here may be the columns. We don't have many examples of handling information in columns like this on VA.gov, but we've reviewed this with some of the design leads and they agree that this treatment makes sense given that it improves scannability over the existing single-column treatment. For an example of how we handle information in columns, please refer to the [Pittsburgh VA medical center site](https://www.va.gov/pittsburgh-health-care/).
- The link style **is** an existing element, but I think it may also only exist on the [Pittsburgh VA medical center site](https://www.va.gov/pittsburgh-health-care/).

*Copy specs*

- **All final copy is TBD**

![Multiple new messages](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Health%20care%20section_multiple%20new%20messages.jpg)

**State 2: No new message**  

TBD, waiting on design for this

![No new messages](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Health%20care%20section_no%20new%20messages.jpg)

## Next Appointment

### When to show the appointments section

**Show**

- Someone is enrolled in VA health care, even if they have no upcoming appointments. We will never **not** show appointments within the health care section.

### States
  
**State 1: User has an upcoming appointment**  

*Appointments data specs*

- Currently, we do **not** show appointments data on the My VA dashboard. That's because the VAOS tool did not exist when the original My VA was created. Now that we have the VAOS tool, we can pull this data in directly through that integration. Please work with the **VAOS team** if you have questions on how to integrate with that data and pull it into the My VA dashboard.

*UX specs*

- **Next appointment** should show the next upcoming appointment based on chronological date and time.
- **Schedule and view your appointments** links into [the VAOS tool](https://www.va.gov/health-care/schedule-view-va-appointments/appointments/).

Facility/location types (these should all be pulled in dynamically from the VAOS tool):

- VA (includes facility name)
- VA Video connect
- Phone
- Express care request

*Visual specs*

- The biggest challenge here may be the columns. We don't have many examples of handling information in columns like this on VA.gov, but we've reviewed this with some of the design leads and they agree that this treatment makes sense given that it improves scannability ove the existing single-column treatment. For an example of how we handle information in columns, please refer to the [Pittsburgh VA medical center site](https://www.va.gov/pittsburgh-health-care/).

![Multiple upcoming appointments](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Health%20care%20section_multiple%20upcoming%20appointments.jpg)

*Copy specs*

- **All final copy is TBD**

**State 2: No upcoming appointments**  

![No upcoming appointments](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Health%20care%20section_no%20upcoming%20appointment.jpg)

## Prescriptions

We are not showing customized prescription data at this time. If someone has health care, we will always show a **Refill and track your prescriptions** link that goes to [the prescription tool in MyHealtheVet](https://sqa.eauth.va.gov/mhv-portal-web/web/myhealthevet/refill-prescriptions).
  - **Note**: This is the staging link. We need to confirm the link for production.

## Links

- [Get your lab and test results](https://sqa.eauth.va.gov/mhv-portal-web/eauth?deeplinking=download_my_data)
- [Get your VA medical records](https://sqa.eauth.va.gov/mhv-portal-web/eauth?deeplinking=download_my_data)

![Related links](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Health%20care%20section_related%20links.jpg)
