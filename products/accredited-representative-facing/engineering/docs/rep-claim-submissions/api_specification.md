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
*__All paths__*

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

# `POST /v0/representative_form_upload`
*__Create claim attachment__*

## Parameters
```
------WebKitFormBoundarypxBF02BAMBoxQKhu
Content-Disposition: form-data; name="form_id"

21-686c
------WebKitFormBoundarypxBF02BAMBoxQKhu
Content-Disposition: form-data; name="file"; filename="VBA-21-686c-ARE.pdf"
Content-Type: application/pdf


------WebKitFormBoundarypxBF02BAMBoxQKhu--
```

## Responses
### 200 OK
```json
{
  "confirmationNumber": "6f8555b5-83f8-40c7-bde9-e1c4f86a400e",
  "status": 200
}
```

# `POST /v0/submit_representative_form`
*__Create claim__*

## Parameters
```json
{
  "confirmationCodes": ["78eb9051-d173-40fe-bb5e-b7ebff519ba1"],
  "formName": "Application Request to Add and/or Remove Dependents",
  "formData": {
    "veteranSsn": "562893346",
    "postalCode": "21218",
    "veteranFullName": {
      "first": "Oren",
      "last": "Mittman"
    },
    "veteranDateOfBirth": "1901-01-01",
    "formNumber": "21-686c",
    "email": "john@veteran.com",
    "claimantFullName": {}
  }
}
```

## Responses
### 200 OK
```json
{
  "data": {
    "id": "1",
    "type": "persistent_attachments_va_form_documentation",
    "attributes": {
      "confirmationCode": "03d52b41-bc92-4830-beda-dfc3c2669af4",
      "name": "Mock File",
      "size": 161111,
      "isEncrypted": true,
      "warnings": []
    }
  }
}
```

# `GET /v0/claims`
*__Get claims__*

## Responses
### 200 OK
```json
[
  {
    "submittedDate": "2025-04-01",
    "firstName": "John",
    "lastName": "Snyder",
    "formType": "21-686c",
    "packet": true,
    "confirmationNumber": "e3bd5925-6902-4b94-acbc-49b554ffcec1",
    "vbmsStatus": "awaiting_receipt",
    "vbmsReceivedDate": "2025-04-19",
    "url": null
  }
]
```
