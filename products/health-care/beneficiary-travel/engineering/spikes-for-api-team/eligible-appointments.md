
# {WIP} Problem: API endpoint to get `eligible appointments`

- Currently, we are foreseeing a UX problems were we could be giving Veterans an option to submit a claim with a low chance of getting approved.
- How can we drive the creation of claims that are more likely to be successful

## Risks

- Currently we stand the risk of allowing creation of claims that we predetermine if they will be approved or not
  - Things like
    - same day claims
    - facility too close claims
    - appointment not eligible claims
- If we let Veterans create low-chance/invalid claims, we will
  - loose Veteran confidence
  - Create extra work for staff members
  - overwhelm the system with junk claims

## Proposed Spike

One idea that is one the table is how can give clients some guidance into what appointments have a higher change of getting approved by creating an API endpoint that allows for querying for what appointments are eligible given a date range.

From the hip the API endpoint would look like

```
GET /appointments/eligible

Parameters
- ICN (from token?)
- Date range to check

Returns
- List of appointments that have a chance of getting approved
```

## Questions to answer

- [ ] Do we have a report to what are the leading causes of claims getting rejected?
- [ ] Are we/How are we actively monitoring the number of claims that are rejected?
- [ ] Is there a way to re-use the rules engine in the context of an API call
  - [ ] If so, how can we create an endpoints that returns what appointments are eligible for claims creation?
- [ ] Are there low hanging fruit that we can implement some logic around the claims submission or in a separate endpoint
- [ ] Can we create an endpoint that returns the eligible appointments for a time range that is performant enough to develop and release

## Acceptance Criteria  

- [ ] Questions are answered
- [ ] The engineering leadership (OCTO + Team leads) agree on a path forward
- [ ] Any tickets are created for follow on work
