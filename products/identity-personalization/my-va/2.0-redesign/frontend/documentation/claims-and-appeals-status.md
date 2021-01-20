# Claims and appeals specs 

![Claims and appeals examples](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Claim%20%26%20appeals%20status%20example.jpg)

## When to show the claims and appeals section

**Show**

- Someone has at least one claim or appeal in progress, in the claim status tool even if that claim or appeal has not been updated in more than 30 days.

**Do not show**

- Someone has NEVER filed a claim or appeal.
- Someone has filed at least one  claim or appeal, but all claims and appeals have been closed for MORE than 30 days.

## States
  
**State 1: Multiple claims in progress**  

- The claim block should show the most recently updated claim or appeal, within the last 30 days.
- Even if multiple claims have been updated in the last 30 days, we will only highlight the most recent one.
- **View details** button links directly into the claim or appeal.
- “You have **[X] claims or appeals in progress**.” should show the total number of open claims and appeals in the claim status tool.
- **View to all claims and appeals** goes to the [claims and appeals tool](https://www.va.gov/track-claims/your-claims).
- Claim Statuses — These are all pulled dynamically from existing claims/appeals statuses.

![Multiple claims in progress](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Claim%20%26%20appeals%20status_multiple%20claims.jpg)

**State 2: One claim in progress**

![One claim in progress](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Claim%20%26%20appeals%20status_one%20claims.jpg)

Specs

Everything is the same as the state with multiple claims in progress, with the exception of the # of claims (ie. “1 total claim or appeal in progress”).

**State 3: A user who has open claims or appeal in progress, but there have been no updates in more than 30 days**

![No claims in progress](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/images/Claim%20%26%20appeals%20status_no%20claims.jpg)

