# Our OAuth workflow

> 💡 Authorization Code Grant

## High-level workflow

1. User lands on [VA.gov](http://VA.gov) wanting to sign in via OAuth
2. User clicks on the button to sign in with their service provider **<CSP>**
3. Vets-website calls the vets-api OAuth `/authorize` endpoint with specific query parameters outlined in the [`/authorize` Authorize](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/authorize.md) document
4. Vets-api redirects to **<CSP>** website for user to enter credentials
5. **<CSP>** calls Sign-in-Service (SiS) API endpoint `/callback` to create an auth code
6. SiS API redirects user to to [VA.gov](http://VA.gov) with a `code` query parameter
7. Vets-website makes a call to the SiS API `/token` endpoint to get Access Token + Refresh Tokens + Anti-CSRF Token
    
    ```json
    {
      "data": {
        "access_token": "<accessTokenHash>",
        "refresh_token": "<refreshTokenHash",
        "anti_csrf_token": "<antiCsrfTokenHash>"
      }
    }
    ```
    
8. Vets-website stores Access Token + Refresh Token
    1. Still need to figure out the best secure option outline (Todo: @AGarcia-Clarity)
9. Vets-website uses Access Token in Authorization header to hit the `/introspect` endpoint
    1. `Authorization: Bearer <accessTokenHash>`
    
    ```json
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
          "vha_facility_ids": [
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
    ```
    
10. Uses the Refresh token to get an new Access Token + Refresh Token (when Access token reaches expiry) by hitting the `/refresh` endpoint
    
```json
  {
    "data": {
      "access_token": "<accessTokenHash>",
       "refresh_token": "<refreshTokenHash>",
       "anti_csrf_token": "<antiCsrfTokenHash>"
    }
  }
```
