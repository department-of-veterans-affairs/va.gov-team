# Claims Management Sequence Diagram

"Claims Management" means taking action on a claim that has been denied. Taking action on a denied claim usually means appealing the claim. In order to do that, a Veteran needs access to their **decision letter**, **right-to-appeal form**, and the **reason their claim was denied**. The Travel Pay API will provide access to the Veteran's resources through various endpoints. They also need to be directed to the appeals process on VA.gov.

## Direct Entry
```mermaid
sequenceDiagram
  actor user as User
  participant deets as Claim Details
  participant tpbe as Travel Pay Backend: vets-api
  participant tpapi as Travel Pay API

  user ->>+ deets: Navigates to single claim
  deets ->>+ tpbe: GET /travel_pay/v0/claims/:id
  tpbe ->>+ tpapi: GET /claims/:id
  note right of tpapi: /api/claims/:id response includes:<br/>claim details<br/> appointment details <br/>expense details<br/>latest rejection reason 
  tpapi -->>- tpbe: {claim}
  tpbe ->>+ tpapi: GET /claims/:id/documents
  tpapi -->>- tpbe: [document]

  activate tpbe
  loop every document
    tpbe ->>- tpbe: generate document download links
  end

  tpbe ->> tpbe: serialize claim details

  tpbe -->>- deets: {claim_details}
  deets ->>- user: Claim Details

  user ->>+ deets: Clicks link to download attachment
  deets ->>+ tpbe: /travel_pay/v0/claims/:id/documents/:doc_id
  tpbe ->>+ tpapi: /claims/:id/documents/:doc_id
  tpapi -->>- tpbe: {document binary}
  tpbe -->>- deets: {document binary}
  deets ->> user: {document binary}
```

## Entry Through Claims Status
## Entry Through Appointments
