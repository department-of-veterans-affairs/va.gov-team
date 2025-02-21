# Status

## AuthN/AuthZ
```mermaid
sequenceDiagram
    actor user as User
    participant tp as Travel Pay Front-end
    participant tpm as Travel Pay Backend: vets-api
    participant eis as EIS Platform
    participant sts as Secure Token Service
    participant redis as Redis
    participant tpapi as Travel Pay API

    note over user,tp: Typical VA.gov Sign-In Flow<br/><br/>va.gov-team repo: <br/>products/identity/Products/Sign-In Service/<br/>Engineering Docs/Authentication Types/<br/>Client Auth (User)/<br/>auth_flows/cookie_oauth.md#sequence-diagram
    
    user->>tp: /my-health/travel-pay/*

    tp->>tpm: /claims/*

    activate tpm
        tpm ->> redis: Get cached tokens
        
        opt cached tokens missing (TTL expired)
            tpm ->>+ eis: Get EIS token (OAuth)
            eis ->>- tpm: EIS token

            tpm ->> tpm: Generate STS Assertion
            tpm ->>+ sts: Unsigned asssertion
            sts ->> sts: Validate & sign assertion
            sts ->>- tpm: Signed STS assertion

            tpm ->>+ tpapi: STS assertion
            tpapi ->> tpapi: Verify assertion
            tpapi ->>- tpm: BTSSS access token

            tpm ->> redis: Store EIS and BTSSS tokens
        end
    deactivate tpm

    note over user,tpapi: Resource flows (defined below)
```

## Visiting `/my-health/travel-pay/claims`

```mermaid
sequenceDiagram
    actor user as User
    participant tp as Travel Pay Front-end
    participant tpm  as Travel Pay Backend: vets-api
    participant tpapi as Travel Pay API

    user->>tp: /my-health/travel-pay/claims

    tp->>tpm: GET /claims
    activate tpm
        tpm->>tpapi: GET /api/v1.2/claims
        activate tpapi
            tpapi-->>tpm: [claim]
        deactivate tpapi

        tpm-->>tp: [claim]
    deactivate tpm

    tp-->>user: [claim]
    alt No claims
        tpapi-->>tpm: []
        tpm-->>tp: []
        tp->>user: "No travel claims to show."
    else 4** status code error
        tpapi-->>tpm: 400/401/404 error
        tpm-->>tp: 400/401/404 error
        tp->>user: Forbidden error alert: <br />"We can’t find any travel claims for you"
    else Other error
        tpapi-->>tpm: Error
        tpm-->>tp: Error
        tp->>user: Error alert: <br />"We’re sorry, we can’t access your travel claims right now"
    end
```

# Claim Details

## Visiting `/my-health/travel-pay/claims/{id}` directly

```mermaid
sequenceDiagram
    actor user as User
    participant tp as Travel Pay Front-end
    participant tpm  as Travel Pay Backend: vets-api
    participant tpapi as Travel Pay API

    user->>tp: /my-health/travel-pay/claims/{id}

    tp->>tpm: GET /claims/{id}
    activate tpm
        tpm->>tpapi: GET /api/v1.2/claims
        activate tpapi
            tpapi-->>tpm: {claim details}
        deactivate tpapi
        tpm-->>tp: {claim details}
    deactivate tpm

    tp-->>user: {claim details}
```

# Travel Pay entry from apppointments

```mermaid
sequenceDiagram
    actor user as User
    participant appts as Appointments Front-end
    participant tp as Travel Pay Front-end
    participant vaos as VAOS: vets-api
    participant tpm  as Travel Pay Backend: vets-api
    participant tpapi as Travel Pay API

    user->>appts: /my-health/appointments/past
    appts ->> vaos: GET /vaos/v2/appointments

    alt include[:travel_pay_claims] && Flipper.enabled(view_claim_details)
      activate vaos
        vaos ->>+ tpm: associate_many_claims(appts)
        tpm ->>+ tpapi: GET /api/v1.2/claims/search-by-appointment-date?{start,end}
        tpapi ->>- tpm: [claims]

        activate tpm
          tpm ->> tpm: Associate claim & metadata with appointment
        deactivate tpm

        tpm -->>- vaos: [appointments w/ claims]
        vaos -->> appts: [appointments w/ claims]
      deactivate vaos
    else !include[:travel_pay_claims] || !Flipper.enabled(view_claim_details)
      activate vaos
        vaos -->> appts: [appointments]
      deactivate vaos
    end
    appts-->>user: Appointments list
    user->>appts: Select appointment
    alt appt_has_claim
        appts-->>user: Appointment w/ claim details link
        user->>tp: /my-health/travel-pay/claims/{id}

        tp->>tpm: GET /claims/{id}
        activate tpm
            tpm->>tpapi: GET /api/v1.2/claims
            activate tpapi
                tpapi-->>tpm: {claim details}
            deactivate tpapi
            tpm-->>tp: {claim details}
        deactivate tpm
        tp-->>user: {claim details}
    else !appt_has_claim
        appts-->>user: Appointment w/ travel reimbursement link
        user->>tp: /my-health/travel-pay/file-new-claim/{id}

        Note over user,tpapi: SMOC flow (shown below)
    end
```

# Simple Mileage-only Claim

## Visiting `/my-health/travel-pay/file-new-claim/{id}`

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
    user -->> smoc: "File a mileage only claim"
    Note over user,tpapi: SMOC qualifying questions
    smoc ->> user: "Are you claiming only mileage?"
    user -->> smoc: Yes
    smoc ->> user: "Did you travel in your own vehicle?"
    user -->> smoc: Yes
    smoc ->> user: "Is this the address you traveled from?"
    user -->> smoc: Yes
    alt "No" to any questions
      user -->> smoc: No
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
