<aside>
💡 Refresh Token Grant
</aside>

---

## High-level workflow

1. User lands on [VA.gov](http://VA.gov) wanting to sign in via OAuth
2. User clicks on the button to sign in with their service provider **<CSP>**
3. Vets-website calls the vets-api OAuth `/authorize` endpoint with specific query parameters outlined in the [Authorization](https://www.notion.so/Authorization-ddfa6918658248dab85ce763bad4fbdc) document
4. Vets-api redirects to **<CSP>** website for user to enter credentials
5. **<CSP>** calls Sign-in-Service (SiS) API endpoint `/callback` to create an auth code
6. SiS API redirects user to `[environment]/auth/login/callback` with a `code` query parameter and `state` that is verified client side
7. Vets-website makes a POST call to the SiS API `/token` endpoint to get Access Token + Refresh Tokens + Anti-CSRF Token
    
    ```jsx
    {
      "data": {
        "access_token": "<accessTokenHash>",
        "refresh_token": "<refreshTokenHash",
        "anti_csrf_token": "<antiCsrfTokenHash>"
      }
    }
    ```
    
8. Vets-api stores Access Token + Refresh Token + Anti-CSRF Token in cookies
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

    
    
    ### Authorization endpoint (Web)

```jsx
Staging: https://staging-api.va.gov/sign_in/<CSP>/authorize
Production: https://api.va.gov/sign_in/<CSP>/authorize

enum <CSP> { "logingov", "idme", "dslogon", "mhv" }
```

| Query parameter | Description | Default |
| --- | --- | --- |
| response_type | Set to code to indicate that an authorization code is requested as the response | code |
| client_id | Identifier for the app.  You will receive a client_id when first registering your app with the service |  |
| state | Services two primary functions: 1. A way to persist data between the user being directed to the auth server & back again, 2.) Serves as a CSRF protection mechanism |  |
| redirect_uri | Optional. The URL to which a user should be redirected to after the authorization is complete.  Must match the redirect URL that you have previously registered with the service. |  |
| scope | Optional. Includes one or more scope values to request additional levels of access (depending on service). |  |
| code_challenge | Used internally by SiS to hash & encode a value to verify good requests |  |
| code_challenge_method | Hashing algorithm. | S256 |
