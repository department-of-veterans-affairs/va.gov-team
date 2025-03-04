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
    alt YES
      note over user,smoc: Continued SMOC flow
    else NO
      note over smoc:  we gofg
    end

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

## Add expense
```mermaid
sequenceDiagram
  actor user as User
  participant tpfe as Travel Pay Front-end
  participant tpm  as Travel Pay Backend: vets-api
  participant tpapi as Travel Pay API

  note over user,tpapi: In order to add an expense, there must be a claim created

  tpfe ->> user: You have no expenses
  loop for each expense
    user ->> tpfe: Click 'Add Expense'
    tpfe ->> tpm: POST /claims/:id/:TYPE-expenses
    tpm ->> tpapi: POST /claims/:id/expenses/:TYPE **1
    tpapi -->> tpm: {expense}
    tpm -->> tpfe: {expense}
    tpfe ->> user: <shows expense summary>
  end
```

`**N` denotes an assumption

* **1: assumes the endpoint will be structured this way (e.g `expenses/mileage`, `expenses/lodging`)