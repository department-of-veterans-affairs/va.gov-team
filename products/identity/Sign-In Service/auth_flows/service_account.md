# Service Account Authentication

## Version History

| Version Number | Author | Revision Date | Description of Change |
| --- | --- | --- | --- |
| 0.2 | Dick Davis | 12/8/2023 | Include instructions for `access_token_user_attributes` |
| 0.1 | John Bramley | 8/10/2023 | Initial creation |

## Summary

The Sign in Service offers a private key JWT flow to allow API authentication and scoped authorization for its clients. In this flow, clients preregister a `ServiceAccountConfig` with SiS that includes their public cert & desired scopes, then make a request to the `/token` endpoint with a JWT assertion requesting specific scopes & signed with their private key. SiS validates the JWT against the saved `ServiceAccountConfig`'s public key and scopes, then issues a scoped access token that can be used to access SiS or 3rd-party SiS-client routes.

### Sign in Service Postman Collection

 Creating and testing a Service Account authentication configuration is most easily done with the [SiS Postman Collection](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Sign%20In%20Service/sis_postman_v1.json), which has all of the necessary routes configured and will automatically populate environmental variables with the appropriate codes & tokens when they are returned.

## Service Account Config Registration

- A [`ServiceAccountConfig`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/sign_in/service_account_config.rb) must be registered with appropriate SiS environment. ServiceAccountConfigs have the following attributes:

| attribute | data type | description | sample value |
| --- | --- | --- | --- |
| `service_account_id` | uuid | unique identifier for account connection | 9caf51576cd6fe65b662588584ed97b1 |
| `description` | string | custom text description of account integration | Some Sign in Service Client |
| `scopes` | array | one or more string URL permissions granted to the client | ['http://localhost:3000/sign_in/client_configs'] |
| `access_token_audience` | string | URL of the requesting account | http://localhost:4000 |
| `access_token_duration` | DateTime | duration of access token; maximum of 5 minutes | 5.minutes |
| `access_token_user_attributes` | array | properties allowed for `user_attributes` claim in access token | ['icn'] |
| `certificates` | array | one or more public certs provided by the client | ["-----BEGIN CERTIFICATE-----\nMIIDAjCCAeoCC..."] |

### Manual Service Account Config Creation

- To register a service account with custom attributes, open a Rails console on the SiS instance you wish to register it on, copy the `service_account_config` below (modified how you wish), then save it to the database with `service_account_config.save`.

  ```ruby
  service_account_config = SignIn::ServiceAccountConfig.new({
    service_account_id: SecureRandom.hex,
    description: 'Sample Client API',
    scopes: ['http://localhost:3000/sign_in/client_configs'],
    access_token_audience: 'http://localhost:4000',
    access_token_duration: 5.minutes,
    access_token_user_attributes: ['icn'],
    certificates: ["-----BEGIN CERTIFICATE-----\nMIIDAjCCAeoCCQCd5yxC1/1eSTANBgkqhkiG9w0BAQsFADBDMQswCQYDVQQGEwJV\nUzEPMA0GA1UECAwGT3JlZ29uMREwDwYDVQQHDAhQb3J0bGFuZDEQMA4GA1UECgwH\nT2RkYmFsbDAeFw0yMzA3MjAxMzM2MTFaFw0yNDA3MTkxMzM2MTFaMEMxCzAJBgNV\nBAYTAlVTMQ8wDQYDVQQIDAZPcmVnb24xETAPBgNVBAcMCFBvcnRsYW5kMRAwDgYD\nVQQKDAdPZGRiYWxsMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAw15I\nxiDnedSaypN4J85mpqnW/lEhUVBOab8WH6yHP/TAybwuEA1g5FlvsK+JI8daB9ww\ntj5jEO7lVObrLXDj9n2nvA05UxaoeSihVJcZZyXeqszyceV5Jy19cQFeHQsNCH/f\n2rgWupyCe6UrqK8l9K/F5MILXLoDDKE1a/2mdoWl7dPy9eCBfkuoptKsWp/UYSzE\nUOeveppS+fqvcyoJIRO1vMqt7Lf07RhxmzOEOF71IzxTUDbI/RLgO+LgEHPHOg9J\nW7Tubh0RvKD2W7xqMDQF/81t+Y+LQ8+jnpE/7LUrHWUMmQHd5BXECFoBi/XiR01t\ndcBtKdQfwmRydoPMZQIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQC/2iLSxm+0Eehq\ntxZq7h8CMTMuOueLVeTu/UY9zT/juvobTmwgsKqYLmKx4JC7Ioycn7z1diX0LeEV\nECcMV0dIYgNDQ9J1pEVA1GJX72d3za45ZlY9R0tujDD8eynx/rxbimv5KaxmNmBA\na/2qmpxHyy2F4ZjHX4w60CYRVHvqNzSjCUpHkMw+40P89I3YStFhW64i3lpm7YRJ\nAsf3Uq21LI1T9xWECQ6YBDeRHeyn2EOqAYe/xLV23AXP1pID3Mso+KpXch7Nsemc\nKRXpqqNAsSZqbyXm3Wwf5zR7zKwTE2E5UfpQxlcQMFJi6HJKOua/6ujsm9JimNlr\n2FRiU/DM\n-----END CERTIFICATE-----\n"]
  })
  ```

### Seeded Service Account Config Creation

- the `vets-api` development seed file contains a configuration for a Service Account Config similar to the one above; in order to populate it run `rails db:seed` from `vets-api` root and confirm through a rails console or Postgres that the entry was created.

### `service_account_id` & Private Certificates

- Regardless of the source of your Service Account Config, copy the `service_account_id` that you randomly generated or passed in, it will be required in your service account assertion.
- You will need the private key paired with the certificate you registered; the certificate in the example above & the development seed config is paired with the [SiS test service account private key](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/fixtures/sign_in/sample_service_account.pem).

## Service Account Token Request

- Service Account authentication uses the same [`POST /token`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/token.md) endpoint as standard user authentication. The two are differentiated by their `grant_type` params, and Service Account authentication is planned to be moved to its own route in the future.
- The params sent in the request MUST include:
  - `grant_type`: `urn:ietf:params:oauth:grant-type:jwt-bearer`
    - this needs to be URL-encoded if going through a browser: `urn%3Aietf%3Aparams%3Aoauth%3Agrant%2Dtype%3Ajwt%2Dbearer`
  - `assertion`: a JWT signed with your private key

### Signed Service Account Assertion

- The signed JWT assertion requesting a Service Account access token has the following attributes:

| attribute | data type | description | sample value |
| --- | --- | --- | --- |
| `iss` | string | issuer of Service Account assertion, must matched the saved ServiceAccountConfig `access_token_audience` | http://localhost:40001 |
| `sub` | string | email of the user requesting the action | vets.gov.user+0@gmail.com |
| `aud` | string | the SiS token route that is being requested | http://localhost:3000/v0/sign_in/token |
| `iat` | integer | current time in Unix/Epoch (10 digit) format | 1691702191 |
| `exp` | integer | assertion should have a 5 minute (300 second) duration | 1691702791 |
| `scopes` | array | one or more requested scopes, validated against saved ServiceAccountConfig `scopes`| ['http://localhost:3000/sign_in/client_configs'] |
| `service_account_id` | uuid | unique identifier for account connection | 9caf51576cd6fe65b662588584ed97b1 |
| `jti` | string | a random identifier that can be used by the client to log & audit their Service Account interactions | '2ed8a21d207adf50eb935e32d25a41ff' |
| `user_attributes` | object | optional attributes for the user to be included with the access token | `{ "icn" => '1234' }` |


- Create a Service Account assertion payload:

  ```ruby
  {
    "iss": "http://localhost:4000",
    "sub": "vets.gov.user+0@gmail.com",
    "aud": "http://localhost:3000/v0/sign_in/token",
    "iat": 1691702191,
    "exp": 1691702791,
    "scopes": ["http://localhost:3000/sign_in/client_configs"],
    "service_account_id": "9caf51576cd6fe65b662588584ed97b1",
    "jti": "2ed8a21d207adf50eb935e32d25a41ff",
    "user_attributes": { 'icn' => 1234 }
  }
  ```
  
- Use a [JWT encoding program](https://dinochiesa.github.io/jwt/) or your Rails console to create and encode a JWT assertion signed with the private key that matches the saved ServiceAccountConfig's public key.

### Example Request

```
POST /token HTTP/1.1
Host: http://identity-dashboard-api-dev.vfs.va.gov
Accept: application/json
Content-Type: none

grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer
assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOi8vaWRlbnRpdHktZGFzaGJvYXJkLWFwaS1kZXYudmZzLnZhLmdvdiIsInN1YiI6InZldHMuZ292LnVzZXIrMEBnbWFpbC5jb20iLCJhdWQiOiJodHRwOi8vMTI3LjAuMC4xOjMwMDAvdjAvc2lnbl9pbi90b2tlbiIsImlhdCI6MTY4NzI3ODQzNiwiZXhwIjoxNjg3Mjc5MDM2LCJzY29wZXMiOlsiaHR0cHM6Ly9kZXYtYXBpLnZhLmdvdi92MC9zaWduX2luL2NsaWVudF9jb25maWc6UkVBRCJdLCJzZXJ2aWNlX2FjY291bnRfaWQiOiIzZWQzYzc2OWIxYzZlMDgyM2NlZGI3NDdjOWZlYTFiNSIsImp0aSI6ImRkNjc4OWM0MjFiM2JjMWRlZjgyMjU4MzAzZTI3MzE1In0.qFw-lLPLQW4wx07RtHEFq6hWPf-Ympq40zO8t78sNktd3Dplf_p9Nhu0pSUyHiwrtEfNUregYVPkamEkNWv3--KCtzodpxfoDVwpTVweS2zzfiezBRhmVR6XNSrcE064DfK2mvCQC9FZRoZr3WEPZTX2ZXREiF825Bt2K-PTnJQVwCu_y4qkiPS2Yb9W1pZPHrOoe-HhRwGs7AOiM623z8alvWSIXAwGJWVmWjz_XEcDXyLdDDhafC98UkUUF3euoM183jOpASvuM9PReqLgEl01r-eyXHECvOt8T3yVMUibAjovuiV16MEQrohss9sF2SygP1JfDxmg0nXk4ypgMQ
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
|JWT `user_attributes`|ServiceAccountConfig `access_token_user_attributes` (individual properties must be specified in config)|400|`Assertion user attributes are not valid`|

## Service Account Access Token Validation

- The returned `service_account_access_token` can be used with Sign in Service or any SiS client that consumes its [public key](https://dev-api.va.gov/sign_in/openid_connect/certs), which can be used to validate the authenticity of the JWT encoded token.

### Service Account Access Token Validation - Sign in Service

- To test the validity of the Service Account access token against Sign in Service you may use the `client_configs` route, which is protected by Service Account authorization.

- Make a request to `<vets-api-environment>/client_configs`, passing your access token with Bearer auth:

  ```bash
  curl http://localhost:3000/sign_in/client_configs -v -H "Accept: application/json" -H "Authorization: Bearer <access token>"
  ```

- The URL you request must match the `scopes` of the Service Account access token; they are compared before access is granted.
- If your access token is accepted then `/client_config` will return a `200` response with an empty `data` hash.

  ```bash
  *   Trying 127.0.0.1:3000...
  * Connected to localhost (127.0.0.1) port 3000 (#0)
  > GET /sign_in/client_configs HTTP/1.1
  > Host: localhost:3000
  > User-Agent: curl/7.81.0
  > Accept: application/json
  > Authorization: Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ2YS5nb3Ygc2lnbiBpbiIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDAwMCIsImp0aSI6IjRkNGE4ZmUyLWJkYjktNGYwZS1iNzcxLWQ3NzNjN2M3YWY1NiIsInN1YiI6InZldHMuZ292LnVzZXIrMEBnbWFpbC5jb20iLCJleHAiOjE2OTE3MTE2NTYsImlhdCI6MTY5MTcxMTM1NiwidmVyc2lvbiI6IlYwIiwic2NvcGVzIjpbImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zaWduX2luL2NsaWVudF9jb25maWdzIl0sInNlcnZpY2VfYWNjb3VudF9pZCI6IjAxYjhlYmFhYzUyMTVmODQ2NDBhZGU3NTZiNjQ1ZjI4In0.q1Lo3BcJ76jTMRdFYK3TVwX6SzLYlpr3S_R5CxnJb5gI1j5oGfe-dYAGyKle2EtW7PlRT-aaWFz57HiMYUde_Dl1_1mRGB61KyBXz7gk2kLtPExG4GK59wt7WvHUUrAHGkAcMXyjcxnFgTiwZPcCdnjEd-ANqFoiqvP9-CADxpSrEHL-R5tk2jR6jhYEx2lj_ySzRXZAS_aAhx6ynQN_e3mOGekWQ47FDakkab1y0AIcJAMtS3Z2wbwanDfXfbsMEcQqH9iEm6959KboP1sCC4-xxAsuAdrxKD8JrbJO5wyc36GcblafaeQtX0kiHsTb20xc13f9HUBcUhpZO_DdRQ

  * Mark bundle as not supporting multiuse
  < HTTP/1.1 200 OK
  < X-Frame-Options: SAMEORIGIN
  < X-XSS-Protection: 1; mode=block
  < X-Content-Type-Options: nosniff
  < X-Download-Options: noopen
  < X-Permitted-Cross-Domain-Policies: none
  < Referrer-Policy: strict-origin-when-cross-origin
  < X-Git-SHA: MISSING_GIT_REVISION
  < X-GitHub-Repository: https://github.com/department-of-veterans-affairs/vets-api
  < Content-Type: application/json; charset=utf-8
  < ETag: W/"8fe32e407a1038ee38753b70e5374b3a"
  < Cache-Control: max-age=0, private, must-revalidate
  < X-Request-Id: 5d2f1c92-d7f1-415d-bc82-99a3ebbcf74e
  < X-Runtime: 0.022570
  < vary: Accept, Origin
  < Content-Length: 11
  < 
  * Connection #0 to host localhost left intact
  {"data":[]}%            
  ```
