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

[Direct deposit screens](https://xd.adobe.com/view/532272b2-b423-4e1b-a8c6-d1a583da3d37-0671/)

### Edit state

You'll notice the direct deposit section for edu looks exactly like the one for comp & pen. They're basically the same, minus the connection to different backend endpoints, of course.

#### Read-only state

*Specs*

The read-only state is structured the same as the comp & pen section, and it functions the same as the comp & pen section.

*Copy*

All read only copy is the same as the comp & pen module except:

- **Section title**: Education benefit

#### Edit state 

[Direct deposit for edu edit state](https://xd.adobe.com/view/532272b2-b423-4e1b-a8c6-d1a583da3d37-0671/screen/59f1a007-7073-476a-a0e5-9d9df06c3059)

*Specs*

The edit state is structured the same as the comp & pen section, and it functions the same as the comp & pen section. **This includes all frontend validation.** When it doubt, apply the same validation that we have for the comp & pen module for the edu module. [The mockups show the required state](https://xd.adobe.com/view/532272b2-b423-4e1b-a8c6-d1a583da3d37-0671/screen/ab5e191e-7c12-4ed8-90f9-1c967365fe1d) but they don't outline every validation use case. If there's something you have questions about, let's regroup on what to apply.

*Copy*

- **Field labels**

This is all the same as the comp & pen module **except** for the following fields that Peggy has suggested we update (ticket for updating comp & pen copy to match is [#16470](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/16470)):

  - Routing number (Your bank’s name will appear after you add the 9-digit routing number)
  - Account number (This should be no more than 17 digits)
  
#### Add state

[Direct deposit for edu add state](https://xd.adobe.com/view/532272b2-b423-4e1b-a8c6-d1a583da3d37-0671/screen/51b79b7f-f94e-4edd-85ee-642deb647e6f)

#### Save state
