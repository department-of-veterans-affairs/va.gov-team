# VA API Postman Quick Setup

## Prerequisites
1. Generate RSA key pair (see API's CCG documentation)
2. Request sandbox access for your specific API
3. Receive client ID via email from VA

## Setup Steps

### 1. Import Collection
Download and import `Lighthouse OAuth Token.postman_collection.json` from VA into Postman: https://github.com/department-of-veterans-affairs/vets-api-clients/tree/master/samples/postman

### 2. Configure Collection Variables
Go to the collection's Variables tab and set:

| Variable | Value | Where to Find |
|----------|-------|---------------|
| `aud` | OAuth audience URL | API's CCG documentation |
| `token_endpoint` | Token request URL | API's CCG documentation |
| `clientId` | Your client ID | Email from VA |
| `privatePem` | Your private key contents | Your .pem file (include BEGIN/END lines) |

**Do not edit** `client_assertion` or `import_do_not_edit` - these auto-populate.

### 3. Configure Request Body
Select "POST Client Credentials Example" and set:

- **scope**: Copy from API's CCG documentation
- **launch**: 
  - If required by API: Use Base64-encoded value from docs
  - If not required: Uncheck the field

Leave other fields as-is (grant_type, client_assertion_type, client_assertion).

### 4. Send Request
Click Send. You should receive an access token valid for 5 minutes.

## API-Specific Examples

### Healthcare Costs & Coverage API
- **aud**: `https://deptva-eval.okta.com/oauth2/aus11tblrdtCyi1ZZ2p8/v1/token`
- **token_endpoint**: `https://sandbox-api.va.gov/oauth2/health-care-costs-coverage/system/v1/token`
- **scope**: `system/Account.read system/ChargeItem.read system/Encounter.read system/Invoice.read system/Medication.read system/MedicationDispense.read system/Organization.read system/Patient.read system/PaymentReconciliation.read launch`
- **launch**: Required - use test patient ICN like `eyJwYXRpZW50IjoiMTAwMDcyMDEwMFYyNzEzODcifQ==`

### Patient Health API
- **aud**: `https://deptva-eval.okta.com/oauth2/aus8nm1q0f7VQ0a482p7/v1/token`
- **token_endpoint**: `https://sandbox-api.va.gov/oauth2/health/system/v1/token`
- **scope**: Check API documentation
- **launch**: Check if required

## Making API Calls
Use the access token in your API requests:
- **Header**: `Authorization: Bearer {access_token}`
- **Base URL**: Check API documentation

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Invalid client | Verify client ID matches the API |
| Invalid signature | Check private key includes BEGIN/END lines |
| Policy failed | Wrong API - each needs separate access |
| Missing scope | Copy exact scope string from docs |

## Key Points
- Each API needs its own client ID (can reuse RSA keys)
- Tokens expire in 5 minutes
- Check each API's docs for specific requirements
