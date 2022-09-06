# Travel Pay Engineering details


## Architecture Diagram

![diagram](../assets/Travel%20re-embursement.0.png)


## API Docs

- [Sample JSONs from API](./btsss-injest-api-samples/)
- [API Doc](../assets/BTSSS_Claim_Ingest_API_ICD.docx)

## CURL calls

### POST for token 

curl --location --request POST 'https://login.microsoftonline.us/f7c49e36-971b-42c7-b244-a88eed6c0bf6/oauth2/v2.0/token' \
--form 'grant_type=" client_credentials"' \
--form 'client_id=" <your SPN client id provided by VAEC>"' \
--form 'client_secret=" <your SPN client secret provided by VAEC>' \
--form 'scope="4a77476c-ceed-45db-ad7e-ac2bbbc4f72a/.default"'


### POST for claim

curl --location --request POST 'https://dev.integration.d365.va.gov/EC/dev/ClaimIngestSvc/api/ClaimIngest/submitclaim' \
--header 'Authorization: bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "ClientNumber": "CLI-00001002",
    "ClaimantID": "{{patient ICN}}}",
    "ClaimantIDType": "icn",
    "Appointment": {
        "AppointmentDateTime": "2022-09-01"
    },
    "MileageExpense": {
        "TripType": "RoundTrip"
    }
}'