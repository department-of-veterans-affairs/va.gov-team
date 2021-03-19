# Claims and appeals specs 

## InVision Mockups

- [Desktop](https://vsateams.invisionapp.com/share/SH10HT8JCKYM#/screens)
- [Mobile](https://vsateams.invisionapp.com/share/GC10HT8RSMQN#/screens)

## When to show the claims and appeals section

**Show**

- Someone has at least one claim or appeal in progress, in the claim status tool even if that claim or appeal has not been updated in more than 30 days.
- All of the user's claims and appeals have been closed, _but_ at least one was closed in the past 30 days.

**Do not show**

- Someone has NEVER filed a claim or appeal.
- Someone has filed at least one  claim or appeal, but all claims and appeals have been closed for MORE than 30 days.

## States
  
**State 1: At least 1 claim update in the last 30 days**  

*Data specs*

- This information already exists on the current My VA dashboard. We get this information through the existing claim status tool on VA.gov. If you have questions about this integration, please work with the **claims and appeals team** for more specifics.

*UX specs*

- The claim block should show the most recently updated claim or appeal, within the last 30 days.
- Even if multiple claims have been updated in the last 30 days, we will only highlight the most recent one.
- **View details** links directly into the claim or appeal.
- **Manage all  your claims and appeals** goes to the [claims and appeals tool](https://www.va.gov/track-claims/your-claims).
- Claim Statuses — These are all pulled dynamically from existing claims/appeals statuses.

*Visual specs*

- The claim block shown here is an existing element, so it should pull in data accordingly. If you have specific questions, please work with **Tressa** to get answers.

*Copy specs*

- **All final copy is TBD**

![Multiple claims in progress](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Claim%20%26%20appeals%20status_multiple%20claims.jpg)

**State 2: A user who has open claims or appeal in progress, but there have been no updates in more than 30 days**

![No claims in progress](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Claim%20%26%20appeals%20status_no%20claims.jpg)

