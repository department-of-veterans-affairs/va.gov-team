# ToU Status Endpoint

VA.gov is developing a solution to allow for the full replacement of the MAP terms of use service. VA.gov is already the source of truth for all new terms of use decisions by being the frontend for all decisions across VA. The next component of this solution is a terms of use status endpoint which mimics the current MAP ToU status endpoint. The current MAP ToU status endpoint does not require authentication and only requires a valid ICN. VA.gov’s first version of the ToU status endpoint will only require a valid ICN and no authentication. The endpoint will return only one of three values in an attempt to reduce ICN farming.

1. **Requirement**: VA.gov ToU status endpoint API endpoint that will return the terms of use status for a user when provided a valid ICN
    1. Example Request:
        
        [`https://staging-api.va.gov/v0/terms_of_use_agreements/1012829948V217207/current_status`](https://staging-api.va.gov/v0/terms_of_use_agreements/1012829948V217207/current_status)
        
    2. Example Response:
        
        `{ agreement_status: 'ACCEPTED' }`
        
2. **Requirement**: VA.gov ToU status endpoint will be unauthenticated
3. **Requirement**: VA.gov ToU status endpoint request will only need an ICN to return a terms of use status for that user
4. **Requirement**: VA.gov ToU status endpoint will respond with the following values in JSON format:
    1. `{ agreement_status: 'ACCEPTED' }`
    2. `{ agreement_status: 'DECLINED' }`
    3. `{ agreement_status: null }`
5. Use latest agreement on vets-api to determine external VA users terms of use status
    1. **Requirement**: All terms of use accept and deny decisions MUST go through va.gov
6. **Requirement**: VA.gov will not call Sign Up Service for any of this information, the data will be sourced from internal va.gov databases
7. **Requirement**: VA.gov ToU status endpoint will not return any error messages, if the ICN is improperly formatted or doesn’t exist within vets-api, the endpoint will respond with null.
8. **Requirement**: VA.gov will not support terms of use status for non-verified users and users without an ICN.

### Current MAP ToU status endpoint:

- https://sqa.eauth.va.gov/MAPCERNER/signup/v1/patients/1013742210V126663/status/summary

### Future considerations

1. MHV has agreed to implement a bearer token authentication solution with the new status endpoint provided by vets-api which will then allow for the endpoint to be authenticated for all calls.
