# Health care section

![Health care section example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Health%20care%20section%20example.jpg)

## When to show the health care section

**Show**

- Someone is enrolled in VA health care.

**Do not show**

- Someone is NOT enrolled in VA health care.

## Messages

### When to show the messages section

**Show**

- Someone is enrolled in VA health care, even if they have no messages. We will never **not** show messaging block within the health care section.

### States
  
**State 1: Multiple new messages**  

![Multiple new messages](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Health%20care%20section_multiple%20new%20messages.jpg)

Specs

- This section only shows NEW/unread messages.
- **Latest message** shows the most recent unread messages someone has.
- “You have **2 new messages**.” shows the total number of new/unread messages.
- **View all messages** links into the [messaging tool in MyHealtheVet](https://sqa.eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging).
  - **Note**: This is the staging link. We need to confirm the link for production.

**State 2: One new message**  

![One new messages](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Health%20care%20section_one%20new%20messages.jpg)

Specs

Everything is the same as the state with multiple messages, with the exception of the # of messages (ie. “You have 1 new message.”)

**State 3: No new message**  

![No new messages](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Health%20care%20section_no%20new%20messages.jpg)

## Appointments

## Prescriptions
