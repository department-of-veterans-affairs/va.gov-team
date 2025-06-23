# Travel Pay Expenses

## Context

With the release of Simple, Mileage-only Claims, we have enabled travel reimbursement support for the most common claim type. However, BTSSS supports several additional, less common expense types that must also be accommodated by VA.gov. These expense types are:

- Mileage
- AirTravel
- CommonCarrier
- Lodging
- Meal
- Toll
- Parking

**Requirements**

- Users must be able to add any or all of these expense types to a claim prior to submission, with most expense types requiring a unique set of user-input parameters.
- The architecture must account for the synchronous or asynchronous lifecycle of each expense, including how and when expenses can be added to a claim.

**Considerations**

- Ensure the user experience supports adding multiple expense types.
- Design forms and workflows to capture the specific data required for each expense type.
- Address lifecycle management for expenses, including validation, editing, and removal before claim submission.

### Intent

The purpose of Travel Pay Expenses is to associate costs incurred by the Veteran doing VA-related activities with their reimbursement claim.

### Association

For our purposes, the only noteworthy relationship of expenses are travel claims.

### Operation

We expect that expenses will be attached to claims using the `POST /api/v2/expenses/{type}` BTSSS API endpoint, with the type mapping to those listed above. Per BTSSS API documentation, expenses can be added to claims that have not been submitted for processing, or are in an On Hold status. The endpoint is provided a `claimId` and any pertinent information required for the expense type. Any documents related to the claim expenses are uploaded via the `POST /api/v2/claims/{claimId}/documents/form-data` endpoint.

## Links
- [BTSSS API Expense endpoint Swagger documentation](https://github.com/department-of-veterans-affairs/btsss-beneficiary-travel-api/blob/master/lighthouse-docs/travel-pay-api-swagger-v2.yml#L1684)
