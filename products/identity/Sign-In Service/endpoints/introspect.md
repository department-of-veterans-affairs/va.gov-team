# Introspect

### Description
Used to get user data from the `/introspect` endpoint

### Token endpoint

```
Staging: https://staging-api.va.gov/sign_in/introspect
Production: https://api.va.gov/sign_in/introspect
```

| Header key | Value |
| --- | --- |
| `Authorization` | `Bearer <accessTokenHash>` *requires an accessToken |

*Sample request*

```
// Receives accessToken from storage

staging-api.va.gov/sign_in/introspect
Headers: ...
  Authorization: Bearer eyJWT...
```

*Sample response*

```json
{
  "data": {
   "id": "",
   "type": "users",
   "attributes": {
      "uuid": "876f0f36-6b12-4273-babe-12144eaa2d57",
      "first_name": "FAKEY",
      "middle_name": null,
      "last_name": "MCFAKERSON",
      "birth_date": "1938-10-06",
      "email": "faker.fake@fake.com",
      "gender": "M",
      "ssn": "123456789",
      "birls_id": null,
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
