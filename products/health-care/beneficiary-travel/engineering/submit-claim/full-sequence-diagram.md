```mermaid
```

## Backend
```mermaid
sequenceDiagram
  actor vet as Veteran
  participant appts as Appointments: VA.gov
  participant smoc as Mileage Claim Submission: VA.gov
  participant tcdeets as Travel Pay Claim Details: VA.gov
  participant vaos as VAOS: vets-api
  participant tpm  as Travel Pay Backend: vets-api
  participant tpapi as Travel Pay API

  %% User navigates to past appts

  appts ->> vaos: GET /vaos/v2/appointments

  alt include[:travel_pay_claims] && Flipper.enabled(view_claim_details)
    vaos ->> tpm: associate_many_claims(appts)
    tpm ->> vaos: [appointments w/ claims]
    vaos ->> appts: [appointments w/ claims]
  else !include[:travel_pay_claims] || !Flipper.enabled(view_claim_details)
    vaos ->> appts: [appointments]
  end

  %% User navigates to claim details

  appts ->> vaos: GET /vaos/v2/appointments/appt-id

  alt Claim already submitted for appt-id
    %% User clicks view claim link
    tcdeets ->> tpm: GET /travel-pay/v1/claims/claim-id
    tpm ->> tcdeets: {claim}
  else Claim not submitted
    %% User clicks submit claim link
    smoc ->> vaos: GET /vaos/v2/appointments/appt-id
    vaos ->> smoc: {appt}
    smoc ->> tpm: POST /travel-pay/va/claims/{appt.start}
    tpm ->> tpapi: GET /api/v1.2/appointments
    tpapi ->> tpm: [appointments]
    tpm ->> tpm: Find {btsss-appt} by {appt.start}
    tpm ->> tpapi: POST /api/v1.2/claims {btsss-appt.id}
    tpapi ->> tpm: {claim}
    tpm ->> tpapi: POST /api/v1.2/expenses/mileage {claim.id}
    tpm ->> tpapi: PATCH /api/v1.2/claims/#{claim.id}/submit
    tpapi ->> {claim}
    tpm ->> smoc: {claim}
  
```
