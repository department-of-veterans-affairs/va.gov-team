# BTSSS Claims Inject Documentation

‼ This is still very much a work in progress. Reach out to [Mark Dewey](https://dsva.slack.com/team/U03Q3UP7RPS) or the OCTO health team with any questions. 

## Contacts

- OCTO Lead: Mark Dewey
- BTSSS API PM: Michell Ortiz
- BTSSS API Technical Lead: Jorge Gomez-

## Authenication

### OAuth/JWT policy

The BTSSS Claims Ingest API utilizes the Oauth 2.0 protocol. This authentication process is handled by VAEC. The api follows a stand system to system 0Auth flow. We use VEIS for the authenication provider. Calls for the token are made to the VEIS service and then token is passed to the Claims API in the header. You will get a client secret, client id, and scope. The client secret and client id are the same for all enviroments, the scope changes as you are promoted from QA to production.  

### Subscription Key

Since there is resource sharing happening behind the scenes, a Subscription Key scoped to the API(s) you are calling, in this case, the BTSSS Claims Ingest API is needed.  The VEIS Platform Team can provide this to you to you once you are provided with a valid Service Principal as you move through your development process.  Each environment will have its own Subscription keys.  Production is load balanced across two instances, and will require two subscription keys.

For QA, you will need to pass the key as a header named `OCP-APIM-Subscription-Key`. 

For produciton, you need 2 headers, `OCP-APIM-Subscription-Key-E` `OCP-APIM-Subscription-Key-S`.  Both are required to be passed to ensure load balanced calls function properly.

### Client ID

Every application needs to be registered for  `ClientNumber` with the BTSSS team. 

This `ClientNumber` needs to be passed with every request in the body as part of the json. 

## Api Endpoints 

Always refer to the [Swagger](https://claimingestsvc-ppd-btsss-east.nprod.vaec.va.gov/swagger/index.html) for the latest information. 

Notes
- Must be on the VA network to access these endpoints. 

## Test data

Currently, its up to the consuming team to manage their own test data. 

Refer to the [test data](./test.data.md) guide for details

## Sample curls for QA enviroment 

### Get token

```bash
curl --location --request POST 'https://login.microsoftonline.us/{{SOME_GUID}}/oauth2/v2.0/token' \
--form 'grant_type="client_credentials"' \
--form 'client_id="{{SOME_GUID}}"' \
--form 'client_secret="{{SOME_SECRET}}"' \
--form 'scope="{{SOME_GUID}}/.default"'
```


### Sumbit Claim

> ⚠ warning: This is extremely slow, ~30+ secs per call
```bash
curl --location --request POST '{{BASE_URL}}/api/ClaimIngest/submitclaim' \
--header 'Authorization: bearer {{TOKEN}}' \
--header 'OCP-APIM-Subscription-Key: {{SOME_KEY}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "ClientNumber": "{{SOME_CLIENT_NUMBER}}",
    "ClaimantID": "1013041640V512624",
    "ClaimantIDType": "icn",
    "Appointment": {
        "AppointmentDateTime": "2022-10-20"
    },
    "MileageExpense": {
        "TripType": "RoundTrip"
    }
}'
```

### Get Claim Status

```bash
curl --location '{{BASE_URL}}/api/ClaimIngest/V1/GetClaimsStatus' \
--header 'accept: */*' \
--header 'Content-Type: application/json' \
--data '{
  "vetId": "1013742142V598816",
  "vetIdType": "icn",
  "startRangeDate": "2023-06-30T14:01:02.204Z",
  "endRangeDate": "2023-07-26T14:53:02.204Z",
  "ClientNumber": "{{SOME_CLIENT_NUMBER}}",
}'
```