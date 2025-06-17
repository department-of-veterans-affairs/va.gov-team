# Decision: Travel Claim Pagination Strategy

Status: Proposed

## Context

The Travel Pay API paginates claims responses for both the `/claims` (i.e. `get_all_claims`) and the `/claims/search-by-appointment_date` endpoints. The default items/page is 25, that's what we've been using so far. However we've noticed that once the claims count get high enough: 
- In the claim > appt asosciation service not all claims are being appended to all appointments (even when they exist) causing users to believe they can file a claim for an appointment when a claim already exists (it just wasn't sent with the appointment data)
- In the status list page only the first 25 claims are being returned so users have no way to know what's happened with older claims

Therefore, the Travel Pay application needs to implement functionality to paginate claims in two places: in the claims status list page and within the claim > appt association service (BE-only).

## Decision Drivers

### Claim > Appt Association Service

* More of an impact on Mobile since there's no other way to view past claims (aside from Past Appt Details)
* BE only implementation
* Pagination of both appts + claims leads to further complexity
* Error handling

### Status List page

* FE + BE implementation
* Pagination based on date range requested
* Possibly (Probably) means also updating the endpoints from `get_all_claims` to `get_claims_by_date_range` service
* Error handling

## Considered Options - Claim > Appt Association Service

### Option 1: Fetch All Claims for last 30 days only

Fetch all claims only within 30-day window, paginate if necessary to append all those claims to all appts also within 30-day window (max page size for claims call is 50 items, so _possibly_ we won't need claims pagination in this scenario at all). (Needs discovery around how appts are sorted/paginated as well.) When user navigates to Past Appt Details page/screen, make a call to `vets-api` to retrieve just the claim for that appointment.

#### Pros
- We can still easily know whether or not a claim has been filed for a specific appointment _within the 30-day time frame_ allowing us to show/not show the link to file SMOC
- We don't need to figure out how to paginate and map through both appts + claims for massive datasets (max appt timeframe handled by `vets-api` is 2 years)

#### Cons
- Will require new `vets-api` endpoint to retrieve the claim summary for a specific appt datetime
- Still might require pagination of claims/appts

### Option 2: Fetch ALL claims, and paginate in the service

Fetch all claims in the date range set by the appointments service API call, paginate them + appointments into one ginormous array (max appt timeframe handled by `vets-api` is 2 years), map over the entire list to append claims to appts.

#### Pros
- We'll have all claims appended to all appts, no additional API calls when navigating to the appt details page/screen

#### Cons
- Need to account for the largest amount of appts/claims possible, up to 2 years worth in one API call.
  - Potential performance hiccups
  - Many opportunities for errors (multiple pagination calls to external services for both appts + claims)

## Considered Options - Claim Status List page

### Option 1: Fetch All Claims page by page to return all to the FE

Fetch all claims page by page until the `totalRecordCount` == `claims.count` in the API before returning the entire list to the FE, where they can be sorted and filtered on the FE.

#### Pros
- One API call, no FE changes needed
- Processing all done in API

#### Cons
- Potential for significant performance issues during multiple calls to the TP API claims endpoint

### Option 2: Fetch claims only for specific date range specified by FE API call; paginate as requested by FE

Fetch all claims in the date range set by the FE. If more claims than can be displayed (using the `totalrecordCount` header) send only the first page back, paginate in the API when user navigates to the next page.

#### Pros
- More performance friendly, default timeframe is 3 months, only retrieve claims for requested timeframe one page at a time

#### Cons
- New endpoint needed in `vets-api` to retrieve claims by date range (rather than all claims)
- Need to add pagination params to both BE (in the response) and in the FE API request.


## Decision Outcome

[PENDING DECISION]

## Pros and Cons of the Options


## Implementation Notes


## Validation

