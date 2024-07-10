# Introspect

## Description

Used to obtain serialized user data from the vets-api User object. This is an authenticated route: an `access_token` must be passed.

## Introspect Endpoint - GET

```jsx
Staging: https://staging-api.va.gov/v0/sign_in/introspect
Production: https://api.va.gov/v0/sign_in/introspect
```

## Introspect Parameters

| Parameter | Description | Value Type | Example Values |
| --- | --- | --- | --- |
| `access_token` | Sign in Service access token | String | `eyJhbGci0...` |
| `anti_csrf_token` | Optional anti-CSRF token, required if `enable_anti_csrf` is enabled. | String | `efc7b88e5baa009d2cc0e1cf7c6d31b4` |

### Cookie & API Auth

The manner in which the `access_token` is passed to Sign in Service for validation is dependent on the client's auth type, controlled through their `ClientConfig`.

#### API Sample Request

API clients will pass their token through Bearer Authentication, setting the `Authorization` header to `Bearer <access_token>`.

```bash
# API Request
curl -x GET --location 'http://localhost:3000/v0/sign_in/introspect' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiJ9...'
```

#### Cookie Sample Request

Cookie clients will use the `vagov_access_token` cookie set for them as a result of a successful `/token` or `/refresh` call to pass the `access_token`.

```bash
# Cookie Request
curl -x GET --location 'http://localhost:3000/v0/sign_in/introspect' \
--header 'Set-Cookie: vagov_access_token=eyJhbGciOiJSUzI1NiJ9...'
```

### Sample Response

Regardless of the client's type, a successful SiS response will return a JSON `data` object that contains the user's most important attributes and identifiers.

```json
{
  "data": {
   "id": "",
   "type": "users",
   "attributes": {
      "uuid": "876f0f36-6b12-4273-babe-12144eaa2d57",
      "first_name": "FAKEY",
      "middle_name": "FAUX",
      "last_name": "MCFAKERSON",
      "birth_date": "1938-10-06",
      "email": "faker.fake@fake.com",
      "gender": "M",
      "ssn": "123456789",
      "birls_id": "445566",
      "authn_context": "logingov",
      "icn": "1012852978V019884",
      "edipi": "1320002080",
      "active_mhv_ids": ["12210827", "123456"],
      "sec_id": null,
      "vet360_id": null,
      "participant_id": "600152407",
      "cerner_id": null,
      "cerner_facility_ids": [],
      "vha_facility_ids":[
         "200MH",
         "989",
         "360",
         "200MHS",
         "648"
      ],
      "id_theft_flag": false,
      "verified": true,
      "access_token_ttl": 300
     }
  }
}
```
