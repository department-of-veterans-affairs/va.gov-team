# Travel Pay Expenses

## Context

With the release of Simple, Mileage-only Claims, we have enabled travel reimbursement support for the most common claim type. However, BTSSS supports several additional, less common expense types that must also be accommodated by VA.gov. These expense types are:

1. Lodging
2. Flight
3. Common Carrier
4. Meal
5. Toll
6. Parking

**Requirements**

- Users must be able to add any or all of these expense types to a claim prior to submission, with most expense types requiring a unique set of user-input parameters.
- The architecture must account for the synchronous or asynchronous lifecycle of each expense, including how and when expenses can be added to a claim.

**Considerations**

- Ensure the user experience supports adding multiple expense types.
- Design forms and workflows to capture the specific data required for each expense type.
- Address lifecycle management for expenses, including validation, editing, and removal before claim submission.

### Intent
_what is the purpose? why are they used? How do clerks use them? etc._

### Association
_What other pieces of travel pay are linked to expenses? etc._

### Operation
_How are they attached to a claim? What can go wrong? etc._

## Links
- links
- go
- here
