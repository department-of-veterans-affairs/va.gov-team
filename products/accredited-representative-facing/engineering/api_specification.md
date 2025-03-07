# Authentication
*__All paths__*

## Parameters
```yaml
- name: Authorization
  type: Header
```

## Responses
### 401 Unauthorized
```json
{
  "errors": "Access token JWT is malformed"
}
```

# Authorization
*__All `/v0/power_of_attorney_request` paths__*

## Parameters
```yaml
- name: Authorization
  type: Header
```

## Responses
### 403 Forbidden
```json
{
  "errors": [
    "Not authorized"
  ]
}
```

# `GET /v0/user`
*__Get user__*

## Responses
### 200 OK
```json
{
  "account": {
    "accountUuid": "1234"
  },
  "profile": {
    "firstName": "John",
    "lastName": "Doe",
    "verified": true,
    "signIn": {
      "serviceName": "IDme"
    }
  }
}

```

# `GET /v0/power_of_attorney_requests`
*__Search power of attorney requests__*

## Parameters
```yaml
- name: status
  type: Query parameter
  values: ["pending", "processed"]
```

## Responses
### 200 OK
Array of [`poaRequestJson`](#poaRequestJson)

# `GET /v0/power_of_attorney_requests/:id`
*__Get power of attorney request__*

## Parameters
```yaml
- name: id
  type: path
```

## Responses
### 200 OK
[`poaRequestJson`](#poaRequestJson)

### 404 Not Found
```json
{
  "errors": [
    "Record not found"
  ]
}
```

# `POST /v0/power_of_attorney_requests/:id/decision`
*__Create power of attorney request decision__*

## Parameters
```json
{
  "decision": {
    "type": "declination",
    "reason": "Not enough consent granted"
  }
}
```

## Responses
### 200 OK
```json
{}
```

### 400 Bad Request
```json
{
  "errors": [
    "Invalid type parameter - Types accepted: [acceptance declination]"
  ]
}
```

### 404 Not Found
```json
{
  "errors": [
    "Record not found"
  ]
}
```

# `poaRequestJson`
*__Power Of Attorney Request JSON__*

```json
{
  "id": "123",
  "claimantId": "123",
  "createdAt": "2025-03-06T15:56:30Z",
  "expiresAt": null,
  "powerOfAttorneyForm": {
    "authorizations": {
      "recordDisclosure": true,
      "recordDisclosureLimitations": [
        "HIV",
        "DRUG_ABUSE"
      ],
      "addressChange": true
    },
    "claimant": {
      "name": {
        "first": "John",
        "middle": "Middle",
        "last": "Doe"
      },
      "address": {
        "addressLine1": "123 Main St",
        "addressLine2": "Apt 1",
        "city": "Springfield",
        "stateCode": "IL",
        "country": "US",
        "zipCode": "62704",
        "zipCodeSuffix": "6789"
      },
      "ssn": "6789",
      "vaFileNumber": "6789",
      "dateOfBirth": "1980-12-31",
      "serviceNumber": "123456789",
      "serviceBranch": "ARMY",
      "phone": "1234567890",
      "email": "veteran@example.com"
    }
  },
  "resolution": {
    "id": "123",
    "type": "expiration",
    "createdAt": "2025-03-06T15:56:30Z"
  },
  "accreditedIndividual": {
    "id": "123",
    "fullName": "John Doe"
  },
  "powerOfAttorneyHolder": {
    "type": "veteran_service_organization",
    "name": "Some Organization",
    "id": "123"
  },
  "powerOfAttorneyFormSubmission": {
    "status": "FAILED"
  }
}
```
