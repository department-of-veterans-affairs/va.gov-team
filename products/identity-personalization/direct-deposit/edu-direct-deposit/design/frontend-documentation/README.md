# Direct deposit for edu: Frontend documentation

## [Direct deposit screens](https://xd.adobe.com/view/532272b2-b423-4e1b-a8c6-d1a583da3d37-0671/)

## Contents

- When to show the direct deposit section
- Overall page structure
- Education module specs
- VA payment history specs
- "Add" states
- When someone has one type of direct deposit but not the other

## When to show the direct deposit section

Currently, we are only showing the direct deposit section if someone is eligible for comp & pen payments. Going forward, we need to show the direct deposit section if someone is eligible for comp & pen **or** education payments. There may be scenarios where someone is eligible for both, and there may be scenarios where someone is eligible for only one type of payment.

## Overall page structure

[Direct deposit screens](https://xd.adobe.com/view/532272b2-b423-4e1b-a8c6-d1a583da3d37-0671/)

The current page has two sections:

- Disability compensation and pension benefits
- Education benefits

Going forward, we are pulling out the payments section (the payments section covers all payment types), so there will now be three sections:

- Disability compensation and pension benefits
- Education benefits
- VA payment history

## Education module specs

### Design

[Direct deposit screens](https://xd.adobe.com/view/532272b2-b423-4e1b-a8c6-d1a583da3d37-0671/)

**Edit state**

You'll notice the direct deposit section for edu looks exactly like the one for comp & pen. They're basically the same, minus the connection to different backend endpoints, of course.

*Read-only state copy*

- **Section title**: Education benefit
- **Field title**: Account

*Edit state copy*

- **Field labels**

This is all the same as the comp & pen module **except** for the following fields that Peggy has suggested we update (ticket for updating comp & pen copy to match is []())

  - Routing number (Your bank’s name will appear after you add the 9-digit routing number)
  - Account number (This should be no more than 17 digits)
  
**Add state**

### Backend

Lihan has already set up the endpoints, though they will need to be unblocked before you can start connecting to the backend. Please connect with Lihan on any questions you have about connecting frontend <> backend.
