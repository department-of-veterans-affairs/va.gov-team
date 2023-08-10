# Service Account Authentication

## Version History

| Version Number | Author | Revision Date | Description of Change |
| --- | --- | --- | --- |
| 0.1 | John Bramley | 8/10/2023 | Initial creation |

## Summary

The Sign in Service offers a private key JWT flow to allow API authentication and scoped authorization for its clients. In this flow, clients preregister a `ServiceAccountConfig` with SiS that includes their public key & desired scopes, then make a request to the `/token` endpoint with a JWT assertion requesting specific scopes & signed with their private key. SiS validates the JWT against the saved `ServiceAccountConfig`'s public key and scopes, then issues a scoped access token that can be used to access SiS or 3rd-party SiS-client routes.

### Sign in Service Postman Collection

 Creating and testing a Service Account authentication configuration is most easily done with the [SiS Postman Collection](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Sign%20In%20Service/sis_postman_v1.json), which has all of the necessary routes configured and will automatically populate environmental variables with the appropriate codes & tokens when they are returned.

## Service Account Config Registration

- A [`ServiceAccountConfig`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/sign_in/service_account_config.rb) must be registered with appropriate SiS environment. The following is a ServiceAccountConfig for a localhost SiS instance:

  ```ruby
  service_account_config = SignIn::ServiceAccountConfig.new({
    service_account_id: SecureRandom.hex, # unique identifier for account connection
    description: 'VA Identity Dashboard API', # custom text description of account integration
    scopes: ['http://localhost:3000/v0/sign_in/client_config'], # array string URL permissions granted to the client
    access_token_audience: 'http://identity-dashboard-api-dev.vfs.va.gov', # URL of the requesting account
    access_token_duration: 5.minutes, # duration of access token; maximum of 5 minutes
    certificates: ["-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA24ECpVAz0UCzL3mYShHVblvJLDPzvC8w7CFU7WQKdJoSU1hDq6ntICrCmTPtjuZ2HD20z9BWeLtfnKvAy8lM7PmChfnXuD/azozJJcgFWSlg0Ii7R7gldiKlNhiNoyvT0bhZoJohKXpfYNlQCtsXEpTZUHb+dIuYR9BgfQt+7FRqpNgpCxGUuHjb29gISNJ0RV4QkPDzuzdLbn7QPL3xPoHaFchl2VJzNK7FittAgOyHakvyqs8RNFmRjZ5PC0i1Wufm0fVJ8/9TsWBaMBhHn7Y9Dto8hrWBdy4WJ1hg1IbldnfD2e1x5QyWBUPOhZFlx2nRpZt62NWKHNoPdL/gWQIDAQAB\n-----END PUBLIC KEY-----"]
    # an array of one or more public certs provided by the client
  })

  # the same Service Account Config on a single line & without comments
  service_account_config = SignIn::ServiceAccountConfig.new(service_account_id: SecureRandom.hex, description: 'VA Identity Dashboard API', scopes: ['http://localhost:3000/v0/sign_in/client_config'], access_token_audience: 'http://identity-dashboard-api-dev.vfs.va.gov', access_token_duration: 5.minutes, certificates: ["-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA24ECpVAz0UCzL3mYShHVblvJLDPzvC8w7CFU7WQKdJoSU1hDq6ntICrCmTPtjuZ2HD20z9BWeLtfnKvAy8lM7PmChfnXuD/azozJJcgFWSlg0Ii7R7gldiKlNhiNoyvT0bhZoJohKXpfYNlQCtsXEpTZUHb+dIuYR9BgfQt+7FRqpNgpCxGUuHjb29gISNJ0RV4QkPDzuzdLbn7QPL3xPoHaFchl2VJzNK7FittAgOyHakvyqs8RNFmRjZ5PC0i1Wufm0fVJ8/9TsWBaMBhHn7Y9Dto8hrWBdy4WJ1hg1IbldnfD2e1x5QyWBUPOhZFlx2nRpZt62NWKHNoPdL/gWQIDAQAB\n-----END PUBLIC KEY-----"])
  ```

- To register a service account open a Rails console on the SiS instance you wish to register it on, then copy the above `service_account_config`, modified how you wish, and save it to the database with `service_account_config.save`.
- Copy the `service_account_id` that you randomly generated or passed in, it will be required in your service account assertion.
- You will need the private key paired with the public key you registered; the public key in the example above is paired with the [SiS test service account private key](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/fixtures/sign_in/sample_service_account.pem).

## Service Account Token Request

- Service Account authentication uses the same [`POST /token`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/token.md) endpoint as standard user authentication. The two are differentiated by their `grant_type` params, and Service Account authentication is planned to be moved to its own route in the future.
- The params sent in the request MUST include:
  - `grant_type`: `urn:ietf:params:oauth:grant-type:jwt-bearer`
    - this needs to be URL-encoded if going through a browser: `urn%3Aietf%3Aparams%3Aoauth%3Agrant%2Dtype%3Ajwt%2Dbearer`
  - `service_account_assertion`: a JWT signed with your private key

### Signed Service Account Assertion

- Create a Service Account assertion payload:

  ```ruby
  {
    "iss": "http://identity-dashboard-api-dev.vfs.va.gov", # issuer of Service Account assertion, must matched the saved ServiceAccountConfig "access_token_audience"
    "sub": <user_email>, # email of the user requesting the action
    "aud": "http://localhost:3000/v0/sign_in/token", # the SiS token route that is being requested
    "iat": <current Unix timestamp>, # current time in Unix/Epoch (10 digit) format
    "exp": <current Unix timestamp + 300>, # the assertion has a 5 minute duration
    "scopes": ["http://localhost:3000/v0/sign_in/client_config"], # one or more requested scopes, validated against saved ServiceAccountConfig scopes
    "service_account_id": <copied_service_account_id>, # the client application's Service Account uuid
    "jti": SecureRandom.hex # a random identifier that can be used by the client to log & audit their Service Account interactions
  }
  ```
  
- Use a [JWT encoding program](https://dinochiesa.github.io/jwt/) to create and encode a JWT assertion signed with the private key that matches the saved ServiceAccountConfig's public key.


### Example Request

  ```
  POST /token HTTP/1.1
  Host: http://identity-dashboard-api-dev.vfs.va.gov
  Accept: application/json
  Content-Type: none

  grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer
  service_account_assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOi8vaWRlbnRpdHktZGFzaGJvYXJkLWFwaS1kZXYudmZzLnZhLmdvdiIsInN1YiI6InZldHMuZ292LnVzZXIrMEBnbWFpbC5jb20iLCJhdWQiOiJodHRwOi8vMTI3LjAuMC4xOjMwMDAvdjAvc2lnbl9pbi90b2tlbiIsImlhdCI6MTY4NzI3ODQzNiwiZXhwIjoxNjg3Mjc5MDM2LCJzY29wZXMiOlsiaHR0cHM6Ly9kZXYtYXBpLnZhLmdvdi92MC9zaWduX2luL2NsaWVudF9jb25maWc6UkVBRCJdLCJzZXJ2aWNlX2FjY291bnRfaWQiOiIzZWQzYzc2OWIxYzZlMDgyM2NlZGI3NDdjOWZlYTFiNSIsImp0aSI6ImRkNjc4OWM0MjFiM2JjMWRlZjgyMjU4MzAzZTI3MzE1In0.qFw-lLPLQW4wx07RtHEFq6hWPf-Ympq40zO8t78sNktd3Dplf_p9Nhu0pSUyHiwrtEfNUregYVPkamEkNWv3--KCtzodpxfoDVwpTVweS2zzfiezBRhmVR6XNSrcE064DfK2mvCQC9FZRoZr3WEPZTX2ZXREiF825Bt2K-PTnJQVwCu_y4qkiPS2Yb9W1pZPHrOoe-HhRwGs7AOiM623z8alvWSIXAwGJWVmWjz_XEcDXyLdDDhafC98UkUUF3euoM183jOpASvuM9PReqLgEl01r-eyXHECvOt8T3yVMUibAjovuiV16MEQrohss9sF2SygP1JfDxmg0nXk4ypgMQ
  ```

## Service Account Token Response

- Sign in Service responds with a JSON object in `application/json` format, response data is held within an initial `data` key.
- `service_account_access_token` contains the encoded JWT access token, signed by Sign in Service's private key

### Example Response

  ```
  HTTP/1.1 200 OK
  Content-Type: application/json

  {
    "data": {
      "service_account_access_token": "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS52YS5nb3YvdjAvc2lnbl9pbiIsImF1ZCI6Imh0dHA6Ly9pZGVudGl0eS1kYXNoYm9hcmQtYXBpLWRldi52ZnMudmEuZ292IiwianRpIjoiNTIxYjViODI4MDBkMDM1YTA3Yzc5ZmE3NTkzYzZhMDgiLCJzdWIiOiJ2ZXRzLmdvdi51c2VyKzBAZ21haWwuY29tIiwiaWF0IjoxNjg3Mjc5OTExLCJleHAiOjE2ODcyODAyMTEsInZlcnNpb24iOiJ2MCIsInNjb3BlcyI6WyJodHRwczovL2Rldi1hcGkudmEuZ292L3YwL3NpZ25faW4vY2xpZW50X2NvbmZpZzpSRUFEIl19.QjKiqNGxsOCALacX-bY3_s1n1BJ5OeS8tfN9oHoreVQaCZPN_L9dMjq3xep4ghpCb9TxaF4VZlrmRiUo5IlrRBSH0g2NmkYGuO_ZLa8arQRdG4jAby60aRxV93ZEnp9kKmyx-qADEz6YuzFibzQG0xUBMspZnhZl641q8H96-c5sAp3W_6RzD6WMqo3JNu6mbz7IO4w-A31qTY-qmFbR-LUrApeDdQf7OJqAgfERJDYPY3aSm7fnPajDHEYGaAQq85jwx6qp9njuPQjO7gjYJtQ02vxjz21vbjm-zkYcj10c7wOK01MDk7QsKI4ea5mZ5FfIlf4Qc3FdT_gSskxQfA"
    }
  }
  ```

### Error Example Response

  ```
  HTTP/1.1 400 Bad Request
  Content-Type: application/json

  {
    "errors": "Service account assertion body does not match signature"
  }
  ```

### Error Responses

|Param or Attribute|Validated Against|Error Code|Error Message|
|-----|----|----|----|
|`grant_type`|`urn:ietf:params:oauth:grant-type:jwt-bearer`|400|`Grant Type is not valid`|
|JWT signature|ServiceAccountConfig `certificates`|400|`Service account assertion body does not match signature`|
|JWT `exp`|Current Time|400|`Service account assertion has expired`|
|JWT encoding|ruby `JWT.decode`|400|`Service account assertion is malformed`|
|JWT `service_account_id`|ServiceAccountConfig `service_account_id`|400|`Service account config not found`|
|JWT `iss`|ServiceAccountConfig `access_token_audience`|400|`Service account assertion issuer is not valid`|
|JWT `aud`|`<SiS-environment>/sign_in/token`|400|`Service account assertion audience is not valid`|
|JWT `scopes`|ServiceAccountConfig `scopes` (must include all asserted)|400|`Service account assertion scopes are not valid`|

## Service Account Access Token Validation

- The returned `service_account_access_token` can be used with Sign in Service or any SiS client that consumes its [public key](https://dev-api.va.gov/sign_in/openid_connect/certs), which can be used to validate the authenticity of the JWT encoded token.

### Service Account Access Token Validation - Sign in Service

- To test the validity of the Service Account access token against Sign in Service you may use the `client_config` route, which is protected by Service Account authorization.

- Make a request to `<vets-api-environment>/v0/client_config`, passing your access token with either Bearer or token auth:

  ```bash
  # Bearer Auth
  curl http://localhost:3000/v0/sign_in/client_config -v -H "Accept: application/json" -H "Authorization: Bearer <access token>"
  
  # Cookie Auth
  curl http://localhost:3000/v0/sign_in/client_config -v -H "Accept: application/json" --cookie "service_account_access_token=<access token>"
  ```

- The URL you request must match the `scopes` of the Service Account access token; they are compared before access is granted.
- If your access token is accepted then `/client_config` will return a `204 - No Content` response.

  ```bash
  * Trying 127.0.0.1:3000...
  * Connected to localhost (127.0.0.1) port 3000 (#0)
  > GET /v0/sign_in/client_config HTTP/1.1
  > Host: localhost:3000
  > User-Agent: curl/7.81.0
  > Cookie: service_account_access_token=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjMwMDAvdmFfc2lnbl9pbl9zZXJ2aWNlIiwiYXVkIjoiaHR0cDovL2lkZW50aXR5LWRhc2hib2FyZC1hcGktZGV2LnZmcy52YS5nb3YiLCJqdGkiOiI1MDllZDlkNzYyMzg1ZmRmYzUwMTgwYzRkNjI2ZWVkNSIsInN1YiI6InZldHMuZ292LnVzZXIrMEBnbWFpbC5jb20iLCJpYXQiOjE2ODc4ODYxNjQsImV4cCI6MTY4Nzg4NjQ2NCwidmVyc2lvbiI6IlYwIiwic2NvcGVzIjpbImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC92MC9zaWduX2luL2NsaWVudF9jb25maWciXX0.c4E6x6DmBM7T6YO0lzp51hVD6KJ_wjNDUTx9EzLaAX3kAuSCuBN_7jyaB7pUdJ4RinTPGFGoOsZ_SUSbM7vzJZ0jeAsGwDv7fbeikID7VWaFlACKqZXakmCyooSO8qFfL3WjQRg4mFBoxPNHqxEYa-sPvdUnDw91j1k8jo-ps9msvQXfqVR34_W6DE5yMk9G3cyrfiKv2V1DAGLGr3l3BIbi401dTmJhjX0oMbmT7VyBq-T8zWA3BT_wE9msqTUCaRCwuIEOOp0qi2jZ88BsARMoxMrHyttIuQ2G_81eh02u70QN_5ID9GQf6eAibU3XEkp6bXf3WF73Ocu9G_EanA
  > Accept: application/json
  > 
  * Mark bundle as not supporting multiuse
  < HTTP/1.1 204 No Content....
  ```
