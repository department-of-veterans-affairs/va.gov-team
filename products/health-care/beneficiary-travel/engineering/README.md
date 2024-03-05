# BTSSS Claims Inject Documentation

‼ This is still very much a work in progress. Reach out to [Mark Dewey](https://dsva.slack.com/team/U03Q3UP7RPS) or the OCTO health team with any questions. 

## Contacts

- OCTO Lead: Mark Dewey
- BTSSS API PM: Michell Ortiz
- BTSSS API Technical Lead: Jorge Gomez-danes Mejia


## Authentication

To get access keys; send a request to btsss_support@va.gov. cc'Mark Dewey and they will handle the request. 

### OAuth/JWT policy

The BTSSS Claims Ingest API utilizes the OAuth 2.0 protocol. This authentication process is handled by VAEC. The api follows a stand system to system 0Auth flow. We use VEIS for the authentication provider. Calls for the token are made to the VEIS service and then token is passed to the Claims API in the header. You will get a client secret, client id, and scope. The client secret and client id are the same for all environments, the scope changes as you are promoted from QA to production.  

### Subscription Key

Since there is resource sharing happening behind the scenes, a Subscription Key scoped to the API(s) you are calling, in this case, the BTSSS Claims Ingest API is needed.  The VEIS Platform Team can provide this to you to you once you are provided with a valid Service Principal as you move through your development process.  Each environment will have its own Subscription keys.  Production is load balanced across two instances, and will require two subscription keys.

For QA, you will need to pass the key as a header named `OCP-APIM-Subscription-Key`. 

For production, you need 2 headers, `OCP-APIM-Subscription-Key-E` `OCP-APIM-Subscription-Key-S`.  Both are required to be passed to ensure load balanced calls function properly.

### Client ID

Every application needs to be registered for  `ClientNumber` with the BTSSS team. 

This `ClientNumber` needs to be passed with every request in the body as part of the json. 

## Api Endpoints 

Always refer to the [Swagger](https://claimingestsvc-ppd-btsss-east.nprod.vaec.va.gov/swagger/index.html) for the latest information. 

Notes
- Must be on the VA network to access these endpoints. 

### Submit claims 

#### Use Cases/Noted Business Rules

> In not specific order

1. As a Veteran, I can submit 1 claim per appointment per facility per day
1. The API will submit a claim for an appointment in any state, but only a checked-out/completed appointment can create a successful claim
1. As soon as a claim is submitted, the status available for query
1. The endpoint can be called with just an appointment date or an appointment date and time. Only passing in the date will fail if there are multiple appointments. If there is only 1 appointment that its possible to pass in just the date. If the date and time are provided then it does some checking around the `1 claim per day per facility` rule.
1. The only stop codes that are automatically rejected are the codes for telehealth. All other stope codes go through manual process if not automatically accepted. The BTSSS team is currently working through more documentation and configuration for this. 

## Known Issues 

- The API sometimes attaches the wrong payment facility. We are looking into how fix that
- If no date is supplied for submitting a claim, and the Veteran has multiple appointments on that day, the API throws an `invalid datetime` error
- The submit claim endpoint is very slow, but a new, more performant endpoint is underdevelopment and ETA of fall 2023

## Test data

Currently, its up to the consuming team to manage their own test data. 

Refer to the [test data](./test.data.md) guide for details

## Sample curls for QA enviroment 

> [Postman Collection](./postman/BTSSS%20API.postman_collection.json)

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
