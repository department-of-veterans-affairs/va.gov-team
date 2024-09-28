# Current Status
This endpoint retrieves the current terms of use status of a specified user, where the user's ICN is encoded in the STS assertion and token.

## Endpoint

`GET /sts/terms_of_use/current_status`

## Hosts

| Environment | Host URL                 |
| ----------- | ------------------------ |
| dev         | `https://dev-api.va.gov` |
| staging     | `https://staging-api.va` |
| prod        | `https://api.va.gov`     |


## Requests

### STS Token Request
This endpoint requires an STS token. A STS token can be requested with an encoded JWT assertion with the following claims:
- `iss` -> The identifier of who is issuing this assertion. Usually the host name of your application - e.g. `https://staging-api.va.gov`
- `aud` -> The route you are making the request to (the token route) `https://staging-api.va.gov/v0/sign_in/token`
- `service_account_id` ->  The unique hex identifier provided to you - e.g. `"bc52648e7111648e563ac82e13d0b99b"`
- `sub` -> The `icn` of the user you are requesting the current status for - `"1008709396V637156"` 
- `scopes` -> An array endpoints where you are going to use the token - `[https://staging-api.va.gov/sts/terms_of_use/current_status]`
- `user_attributes` -> The attributes to include in the token. The `icn` of the user you are requesting the current status for - `{ icn: 1008709396V637156 }`
- `iat` -> The time the assertion was issued in Unix Epoch time
- `exp` -> The time the assertion expires in Unix Epoch time. - `iat + 5.minutes`
  
#### Generate Assertion
1. Create assertion payload
    ```ruby
  	assertion_payload = {
  	  iss: 'https://staging-api.va.gov', # your applications host
  	  sub: '1008709396V637156', 
  	  aud: 'https://staging-api.va.gov/v0/sign_in/token',
  	  iat: Time.current.to_i, # 1726687940
  	  exp: Time.current.to_i + 300, 
  	  scopes: ['https://staging-api.va.gov/sts/terms_of_use/current_status'],
  	  service_account_id: 'cbc52648e7111648e563ac82e13d0b99b',
  	  user_attributes: { icn: '1008709396V637156' } 
  	}
    ```
2. Encode JWT with your private key
   ```ruby
   private_key = OpenSSL::PKey::RSA.new(File.read('path/to/key/private_key.pem'))
   assertion = JWT.encode(assertion_payload, private_key, 'RS256') 
   ```
3. Request the access_token with the following params:
   - `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer`
   -  `assertion={{your_assertion}}`
     
     
   ```bash
   curl -X POST https://staging-api.va.gov/v0/sign_in/token \
    -H "Content-Type: application/x-www-form-urlencoded" \
    -d "grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer" \
    -d "assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOi8v...." 
   ```

5. You will receive the access_token to use in the current_status request
   ```json
   {
     "data": {
         "access_token": "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ2YS5...vcUejdt-xg9NOgUCFO3DkbAjN4JA"
     }
   }
   ```

### Current Status Request
#### Headers

| Header          | Type   | Required | Description                                                                                  |
| --------------- | ------ | -------- | -------------------------------------------------------------------------------------------- |
| `Authorization` | string | Yes      | The STS token received from the assertion that contains the user's ICN and correct scope.    |
| `Content-Type`  | string | Yes      | `application/json`                                                                           |

#### Example 
```bash
curl -X GET https://staging-api.va.gov/sts/terms_of_use/current_status \
  -H "Authorization: Bearer <STS_TOKEN>" \
  -H "Content-Type: application/json"
```

## Responses

### Success (200)
#### Valid ICN and current status is `accepted`
  ```json
  {
    "agreement_status": "accepted"
  }
  ```
#### Valid ICN and current status is `declined`
  ```json
  {
    "agreement_status": "declined"
  }
  ```
#### Invalid ICN
   ```json
   {
     "agreement_status": null
   }
   ```

### Unauthorized (401)
#### Invalid, or expired `access_token`
```json
{
  "errors":"Service Account access token JWT is malformed"
}
```
