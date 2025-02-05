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
    activate vaos
      vaos ->>+ tpm: associate_many_claims(appts)
      tpm ->>+ tpapi: GET /api/v1.2/claims/search-by-appointment-date?{start,end}
      tpapi ->>- tpm: [claims]

      activate tpm
        tpm ->> tpm: Associate claim & metadata with appointment
      deactivate tpm

      tpm ->>- vaos: [appointments w/ claims]
      vaos ->> appts: [appointments w/ claims]
    deactivate vaos
  else !include[:travel_pay_claims] || !Flipper.enabled(view_claim_details)
    activate vaos
      vaos ->> appts: [appointments]
    deactivate vaos
  end

  %% User navigates to claim details

  activate vaos
  appts ->> vaos: GET /vaos/v2/appointments/appt-id
  deactivate vaos

  alt Claim already submitted for appt.id


    %% User clicks view claim link


    activate tcdeets
      tcdeets ->>+ tpm: GET /travel-pay/v1/claims/claim-id
      tpm ->>- tcdeets: {claim}
    deactivate tcdeets
  else Claim not submitted for appt.id


    %% User clicks submit claim link


    activate smoc
      smoc ->>+ vaos: GET /vaos/v2/appointments/appt-id
      vaos ->>- smoc: {appt}
      smoc ->> tpm: POST /travel-pay/va/claims/{appt.start}

      activate tpm
        tpm ->>+ tpapi: GET /api/v1.2/appointments
        tpapi ->>- tpm: [appointments]

        activate tpm
          tpm ->> tpm: Find {btsss-appt} by {appt.start}
        deactivate tpm

        tpm ->>+ tpapi: POST /api/v1.2/claims {btsss-appt.id}
        tpapi ->>- tpm: {claim}

        tpm ->>+ tpapi: POST /api/v1.2/expenses/mileage {claim.id}
        tpapi ->>- tpm: {status}

        tpm ->>+ tpapi: PATCH /api/v1.2/claims/#{claim.id}/submit
        tpapi ->>- tpm: {claim}

        tpm ->> smoc: {claim}
      deactivate tpm
    deactivate smoc
  end
```
