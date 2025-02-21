# Simple Mileage-only Claim

This proposal is intended to potentially reduce or eliminate the need for asynchronous processing of simple mileage only claims.

The bet is that the bulk of the processing time occurs in the `GET /appointments` request to the Travel Pay API, especially if the appointments need to be synced from VistA to BTSSS.

Making an _asynchronous_ call to a newly exposed `vets-api` endpoint to fetch and find a relevant appointment at the beginning of the flow could be a way to reduce the dependency on sidekiq.

Reducing the dependency on sidekiq can greatly reduce the occurence of silent failures and our dependence on VA Notify.

## PROPOSED: Visiting `/my-health/travel-pay/file-new-claim/{id}`

```mermaid
sequenceDiagram
    actor user as User
    participant smoc as Travel Pay Front-end
    participant vaos as VAOS: vets-api
    participant tpm  as Travel Pay Backend: vets-api
    participant tpapi as Travel Pay API

    user ->> smoc: /my-health/travel-pay/file-new-claim/{id}

    smoc ->> vaos: GET /vaos/v2/appointment/{id}?_include=facilities,travel_pay_claims
    vaos -->> smoc: {appointment}

    smoc -) tpm: ASYNC GET /travel-pay/v0/appointments/{appt.start}

    activate tpm
      tpm ->>+ tpapi: GET /api/v1.2/appointments
      tpapi -->>- tpm: [appointments]

      activate tpm
        tpm ->> tpm: Find {btsss-appt} by {appt.start}
      deactivate tpm

      tpm --) smoc: ASYNC {btsss-appt}
    deactivate tpm

    smoc ->> user: "File a travel reimbursement claim" landing page
    user ->> smoc: "File a mileage only claim"
    Note over user,tpapi: SMOC qualifying questions
    smoc ->> user: "Are you claiming only mileage?"
    user ->> smoc: Yes
    smoc ->> user: "Did you travel in your own vehicle?"
    user ->> smoc: Yes
    smoc ->> user: "Is this the address you traveled from?"
    user ->> smoc: Yes
    alt "No" to any questions
      user ->> smoc: No
      smoc ->> user: "We can't file this type of travel reimbursement"
    end

    Note over user,tpapi: SMOC qualifying questions passed, review claim

    alt PENDING - ASYNC GET btsss-appt request
      smoc ->> user: Please wait
      note over smoc: follow success or failure paths
    else FAILURE - ASYNC GET btsss-appt request
      note over smoc: render error
    else SUCCESS - ASYNC GET btsss-appt request
      smoc ->> smoc: Enable submit button
      user ->> smoc: Submit claim

      smoc ->> tpm: POST /travel-pay/v0/claims/{btsss-appt.id}
  
      activate tpm
        tpm ->>+ tpapi: POST /api/v1.2/claims {btsss-appt.id}
        tpapi -->>- tpm: {claim}
  
        tpm ->>+ tpapi: POST /api/v1.2/expenses/mileage {claim.id}
        tpapi -->>- tpm: {status}
  
        tpm ->>+ tpapi: PATCH /api/v1.2/claims/#{claim.id}/submit
        tpapi -->>- tpm: {claim}
  
        tpm -->> smoc: {claim}
      deactivate tpm
  
      smoc ->> user: Submitted claim summary
    end
```

## CURRENT: Visiting `/my-health/travel-pay/file-new-claim/{id}`

```mermaid
sequenceDiagram
    actor user as User
    participant smoc as Travel Pay Front-end
    participant vaos as VAOS: vets-api
    participant tpm  as Travel Pay Backend: vets-api
    participant tpapi as Travel Pay API

    user ->> smoc: /my-health/travel-pay/file-new-claim/{id}
    smoc ->> vaos: GET /vaos/v2/appointment/{id}?_include=facilities,travel_pay_claims

    vaos -->> smoc: {appointment}
    smoc ->> user: "File a travel reimbursement claim" landing page
    user ->> smoc: "File a mileage only claim"
    Note over user,tpapi: SMOC qualifying questions
    smoc ->> user: "Are you claiming only mileage?"
    user ->> smoc: Yes
    smoc ->> user: "Did you travel in your own vehicle?"
    user ->> smoc: Yes
    smoc ->> user: "Is this the address you traveled from?"
    user ->> smoc: Yes
    alt "No" to any questions
      user ->> smoc: No
      smoc ->> user: "We can't file this type of travel reimbursement"
    end

    Note over user,tpapi: SMOC qualifying questions passed, review claim

    user ->> smoc: Submit claim

    smoc ->> tpm: POST /travel-pay/va/claims/{appt.start}

    activate tpm
      tpm ->>+ tpapi: GET /api/v1.2/appointments
      tpapi -->>- tpm: [appointments]

      activate tpm
        tpm ->> tpm: Find {btsss-appt} by {appt.start}
      deactivate tpm

      tpm ->>+ tpapi: POST /api/v1.2/claims {btsss-appt.id}
      tpapi -->>- tpm: {claim}

      tpm ->>+ tpapi: POST /api/v1.2/expenses/mileage {claim.id}
      tpapi -->>- tpm: {status}

      tpm ->>+ tpapi: PATCH /api/v1.2/claims/#{claim.id}/submit
      tpapi -->>- tpm: {claim}

      tpm -->> smoc: {claim}
    deactivate tpm

    smoc ->> user: Submitted claim summary
```
