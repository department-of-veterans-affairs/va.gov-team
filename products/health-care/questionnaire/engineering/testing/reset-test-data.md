<!-- markdownlint-disable no-duplicate-heading -->

# Reset test data

Since we are using real APIs in staging we need to reset the data for testing. In order to reset the data for testing we need to use Postman

## Overall process

0. Have the tools needed
1. Get the QR you want to delete
2. Call the Sandbox API to delete the QR

## 0 - Tools Needed

- [Postman](https://www.postman.com/)
- Access to [staging](https://staging.va.gov/health-care/health-questionnaires/questionnaires)
- And API_KEY to interact with the delete endpoint
- Ability to use dev tools to get headers from network requests
- **very helpful** JSON viewer browser extension

## 1 - Get QR ID

We need to get the ID(s) of the QR that what to delete

### how

1. sign into staging.va.gov with user `va.api.user+idme.101@gmail.com`
2. open a new tab, and go to `https://staging-api.va.gov/health_quest/v0/questionnaire_responses?source=1008882029V851792`
3. The `entry` property is a list of Questionnaire responses. We care about the `resource.id` property
4. Save the id(s) for step 2

## 2 - Delete QR

## how

1. Get the QR id from step 1
2. Open POSTMAN and import the [curl command](#curl-request) below
3. Replace `${API_KEY}` with the real API_KEY in the headers
4. Replace `${questionnaire_response_id}` in the URL

### curl request

```sh
curl --location --request DELETE 'https://sandbox-api.va.gov/services/pgd/v0/sandbox-data/r4/QuestionnaireResponse/${questionnaire_response_id}' \
--header 'apikey: ${API_KEY}'
```
