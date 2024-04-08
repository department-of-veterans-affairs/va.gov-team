# Service Account Authentication

## Version History

| Version Number | Author | Revision Date | Description of Change |
| --- | --- | --- | --- |
| 0.1 | John Bramley | 8/10/2023 | Initial creation |
| 0.2 | Dick Davis | 12/8/2023 | Include instructions for `access_token_user_attributes` |
| 0.3 | John Bramley | 1/03/24 | `auth_flows` refactor |

## Summary

The Sign in Service (SiS) offers a private key JWT flow to allow API authentication and scoped authorization for its clients. In this flow, clients preregister a `ServiceAccountConfig` with SiS that includes their public key & desired scopes, then make a request to the `/token` endpoint with a JWT assertion requesting specific scopes & signed with their private key. SiS validates the JWT against the saved `ServiceAccountConfig`'s public key and scopes, then issues a scoped access token that can be used to access SiS or 3rd-party SiS-client routes that can validate the access token against the SiS [public key](https://staging-api.va.gov/sign_in/openid_connect/certs).

### Postman Collection

The VSP Identity team maintains a [Postman collection](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Product%20Documentation/va_identity_postman.json) to enable developers to more easily test against SiS routes; this collection is configured to manage Service Account authentication tokens. Documentation on how to use the SiS Postman collection can be found [here](../postman.md).

## Service Account Config Registration

- A [`ServiceAccountConfig`](../configuration/service_account.md) must be registered with the appropriate SiS environment in order to receive Service Account access_tokens. This database object provides SiS with the client's public certificates and scoped permissions used to authenticate requests and provision scoped access tokens.

## Service Account Flow

### Technical Diagram

![Service Account Auth Flow](https://github.com/department-of-veterans-affairs/va.gov-team/assets/71290526/4cac8550-66cf-4678-a015-12d0b2b03b03)

## Service Account Token Request

- Service Account authentication uses the same [`POST /token`](../endpoints/token.md#service-account-auth) endpoint as standard user authentication to request a token. The two are differentiated by their `grant_type` params:
- The params sent in the request MUST include:
  - `grant_type`: `urn:ietf:params:oauth:grant-type:jwt-bearer`
    - this needs to be URL-encoded if going through a browser: `urn%3Aietf%3Aparams%3Aoauth%3Agrant%2Dtype%3Ajwt%2Dbearer`
  - `assertion`: a JWT payload, signed with your private key and encoded with `RS256` key encryption.

### Signed Service Account Assertion

- The signed JWT payload requesting a Service Account access token has the following attributes:

| attribute | data type | description | sample value |
| --- | --- | --- | --- |
| `iss` | string | issuer of Service Account assertion, must matched the saved ServiceAccountConfig `access_token_audience` | http://localhost:40001 |
| `sub` | string | email of the user requesting the action | `vets.gov.user+0@gmail.com` |
| `aud` | string | the SiS token route that is being requested | http://localhost:3000/v0/sign_in/token |
| `iat` | integer | current time in Unix/Epoch (10 digit) format | 1691702191 |
| `exp` | integer | assertion should have a 5 minute (300 second) duration | 1691702791 |
| `scopes` | array | one or more requested scopes, validated against saved ServiceAccountConfig `scopes`| ['http://localhost:3000/sign_in/client_configs'] |
| `service_account_id` | uuid | unique identifier for account connection | 9caf51576cd6fe65b662588584ed97b1 |
| `jti` | string | a random identifier that can be used by the client to log & audit their Service Account interactions | '2ed8a21d207adf50eb935e32d25a41ff' |
| `user_attributes` | hash | a hash of user_attributes and their values to be included in the token, validated against saved ServiceAccountConfig `access_token_user_attributes`. | icn, type, credential_id |

- Create a Service Account assertion payload:

  ```ruby
  current_time = Time.now.to_i
  token = {
    'iss' => 'http://localhost:4000',
    'sub' => 'vets.gov.user+0@gmail.com',
    'aud' => 'http://127.0.0.1:3000/v0/sign_in/token',
    'iat' => current_time,
    'exp' => current_time + 300,
    'scopes' => ['http://localhost:3000/v0/account_controls/credential_index'],
    'service_account_id' => '01b8ebaac5215f84640ade756b645f28',
    'jti' => '2ed8a21d207adf50eb935e32d25a41ff',
    'user_attributes' => { 'icn' => '1012667122V019349' }
  }
  ```
  
- Use a [JWT encoding program](https://dinochiesa.github.io/jwt/) or your Rails console to create and encode a JWT assertion signed with the private key that matches the saved ServiceAccountConfig's public key.

  ```ruby
    private_key = OpenSSL::PKey::RSA.new(File.read('private_key.pem'))
    JWT.encode(token, private_key, 'RS256')
    => "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHrw..."
  ```

- This Assertion JWT will be validated to ensure
  - The JWT is properly signed by the expected Service Account using the ServiceAccountConfig stored public certificates.
  - The token is not expired.
  - The requested permissions are appropriate - *all* scopes in the assertion are a subset of the scopes in the saved ServiceAccountConfig.

### Example Request

```
POST /token HTTP/1.1
Host: http://identity-dashboard-api-dev.vfs.va.gov
Accept: application/json
Content-Type: none

grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer
assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjQwMDAiLCJzdWIiOiJ2ZXRzLmdvdi51c2VyKzBAZ21haWwuY29tIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwL3YwL3NpZ25faW4vdG9rZW4iLCJpYXQiOjE3MDI0ODgzNTQsImV4cCI6MTcwMjQ4ODY1NCwic2NvcGVzIjpbImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zaWduX2luL2NsaWVudF9jb25maWdzIl0sInNlcnZpY2VfYWNjb3VudF9pZCI6IjljYWY1MTU3NmNkNmZlNjViNjYyNTg4NTg0ZWQ5N2IxIiwianRpIjoiMmVkOGEyMWQyMDdhZGY1MGViOTM1ZTMyZDI1YTQxZmYiLCJ1c2VyX2F0dHJpYnV0ZXMiOnsidHlwZSI6ImxvZ2luZ292IiwiY3JlZGVudGlhbF9pZCI6ImViMTcyZTMxLTM2YTAtNDI2Ni1hYTdiLWI0NGM5MzllNjg1MCJ9fQ.f0Fx4QzYLe-SIita320ttkwFN0FtpLRBjkW2J3HoXkI0GNPJER7H0GPFetd_xnupK08Sxcv85bqd7NhvYJ1xiUCf7Yubhd95f_GabShWorue7658nGHREY_SBQtIgaFgxp98lkbf30FNGTxivmRNXqfJA3_HigOJrnEkKLY8aVQq79zhQpt-XuSMJi0CrCQybsIG5QHDW7dEBAFYfvDuinqh6_iLZ9fi5Ib9USSDVbUf00iZZSfcth8e3jwww2g5wcLEA4VgnuF53CxHFnOPkBO5mVNWjo9-b6-xT7Q7PSkNAwox65dQlrzdrRmGvmgSe3PJatUj5rAVOkHulCG3bA
```

## Service Account Token Response

- Sign in Service responds with a JSON object in `application/json` format, response data is held within an initial `data` key.
- `access_token` contains the encoded JWT access token, signed by Sign in Service's private key
- The returned token has the following attributes:

  - `iss`: SiS Issuer (`va.gov sign in`)
  - `aud`: URL of Service Account making the token assertion
  - `jti`: a random unique identifier
  - `sub`: email address of user requesting delegated access
  - `iat`: creation time in epoch
  - `exp`: expiration time in epoch (5 minutes after creation time)
  - `version`: version number
  - `scope`: array of URL strings for scoped authorization

### Example Response

```
HTTP/1.1 200 OK
Content-Type: application/json

{
  "data": {
    "access_token": "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ2YS5nb3Ygc2lnbiBpbiIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDAwMCIsImp0aSI6Ijk3ZDg2OGE4LTQ4ZjAtNDQ5Yi05ZDUxLTdiNzM0YTI2Y2Y0ZiIsInN1YiI6InZldHMuZ292LnVzZXIrMEBnbWFpbC5jb20iLCJleHAiOjE3MDI0ODkwMjIsImlhdCI6MTcwMjQ4ODcyMiwidmVyc2lvbiI6IlYwIiwic2NvcGVzIjpbImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC92MC9hY2NvdW50X2NvbnRyb2xzL2NyZWRlbnRpYWxfaW5kZXgiXSwic2VydmljZV9hY2NvdW50X2lkIjoiMDFiOGViYWFjNTIxNWY4NDY0MGFkZTc1NmI2NDVmMjgiLCJ1c2VyX2F0dHJpYnV0ZXMiOnsiaWNuIjoiMTAwODU5NjM3OVY4NTk4MzgifX0.dgZGN_G57G8H_-lXRW20kNL-osmmtuIxEFoIRlCvCil0ppDEOjCGKzmapBNddsSpHN1KjiTV1Zf8VGv2OAH_MqBJOk7hWLgd9UN4wjZGhGXJkXLXhxtm5lvGKBZrCvGykHyPjlFllKM-jzaGAZtqqUcd-b-yJF9dShKT0mr-kGpnyexK9TiC0nJoYMaHvBK-j31jS9ySODSGaqsAR4ukcmufhtGXxiAs2ZqFb7k9cygFjk8PALSQrDalQq7NpBvq7uZS-2V2HPS8et-EojPsgdceZ5iCUfUhHz1FT-y1dgJmr7FDrE1_A8_1G1yfAyEqg3CVAlg0FoEcGhjphH8TQA"
  }
}
```

### Error Example Response

```
HTTP/1.1 400 Bad Request
Content-Type: application/json

{
  "errors": "Service account config not found"
}
```

### Error Responses

| Param or Attribute | Validated Against | Error Code | Error Message |
| ----- | ---- | ---- | ---- |
| `grant_type` | `urn:ietf:params:oauth:grant-type:jwt-bearer` | 400 | `Grant Type is not valid` |
| JWT signature | ServiceAccountConfig `certificates` | 400 | `Assertion body does not match signature` |
| JWT `exp` | Current Time | 400 | `Assertion has expired` |
| JWT encoding | ruby `JWT.decode` | 400 | `Assertion is malformed` |
| JWT `service_account_id` | ServiceAccountConfig `service_account_id` | 400 | `Service account config not found` |
| JWT `iss` | ServiceAccountConfig `access_token_audience` | 400 | `Assertion issuer is not valid` |
| JWT `aud` | `<SiS-environment>/sign_in/token` | 400 | `Assertion audience is not valid` |
| JWT `scopes` | ServiceAccountConfig `scopes` (must include all asserted) | 400 | `Assertion scopes are not valid` |
| JWT `user_attributes` | ServiceAccountConfig `access_token_user_attributes` | 400 | `Assertion user attributes are not valid` |

## Service Account Access Token Validation

- The returned `service_account_access_token` can be used with Sign in Service or any SiS client that consumes its [public key](https://dev-api.va.gov/sign_in/openid_connect/certs) to validate the authenticity of the JWT encoded token.

```ruby
encoded_token = "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ2YS5nb3Ygc2lnbiBpbiIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDAwMCIsImp0aSI6ImM3OWVlMTRiLTgxYWUtNGZmNy1iN2Y2LWFjOGI0ZDBlMTM4OCIsInN1YiI6InZldHMuZ292LnVzZXIrMEBnbWFpbC5jb20iLCJleHAiOjE3MDI0OTI1NjIsImlhdCI6MTcwMjQ5MjI2MiwidmVyc2lvbiI6IlYwIiwic2NvcGVzIjpbImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC92MC9hY2NvdW50X2NvbnRyb2xzL2NyZWRlbnRpYWxfaW5kZXgiXSwic2VydmljZV9hY2NvdW50X2lkIjoiMDFiOGViYWFjNTIxNWY4NDY0MGFkZTc1NmI2NDVmMjgiLCJ1c2VyX2F0dHJpYnV0ZXMiOnsiaWNuIjoiMTAxMjY2NzEyMlYwMTkzNDkifX0.Rf7rooKzBQoO9nB7vk2O7TKEMmLMJ9yCldQwOhXoD0_gegT3nbz7l6Qcpg8_hRYE10znebOtyCvYooz_Ki8uxn5E3Fz_XTz6FhFp5jef7fN4DzQAH7IHlGewd5xlzaDKxdV5nxtShZjmr-zZybDUUvmJLZrwaNukSpfLyPkv8by12cI5Scs460NuPZx6VM_wMPk_lLJa1nwECiYFa5-d6wmO3J0kw1jDyI6ZMPmynTPYSDq7pYtxXgvZKgqAvL97PmNXkuKYOHLmZgOEx-c-USu61z4mS3_9r-sfBwYdj-kl5mu1bXfjBdh9fIFI-HSHwWxvDjHQx5DlV_WuPltBmQ"
uri = URI('staging-api.va.gov/sign_in/openid_connect/certs')
response = Net::HTTP.get(uri)
public_key = JWT::JWK::Set.new(JSON.parse(response)).first.public_key
JWT.decode(encoded_token, public_key.public_key, true, { algorithm: 'RS256' }).first
=> {"iss"=>"va.gov sign in",
    "aud"=>"http://localhost:4000",
    "jti"=>"c79ee14b-81ae-4ff7-b7f6-ac8b4d0e1388",
    "sub"=>"vets.gov.user+0@gmail.com",
    "exp"=>1702492562,
    "iat"=>1702492262,
    "version"=>"V0",
    "scopes"=>["http://localhost:3000/v0/account_controls/credential_index"],
    "service_account_id"=>"01b8ebaac5215f84640ade756b645f28",
    "user_attributes"=>{"icn"=>"1012667122V019349"}}
```

### Service Account Access Token Validation - Sign in Service

- To test the validity of the Service Account access token against Sign in Service you may use the `account_controls/credential_index` route, which is protected by Service Account authorization. This route returns a listing of Credential Service Provider records the requested `icn` possesses.

- Make a request to `<vets-api-environment>/v0/account_controls/credential_index`, passing your access token (including the ICN you are querying) with Bearer auth.
  - The URL you request must match the `scopes` of the Service Account access token; they are compared before access is granted.
- The access token will be validated against the following criteria:
  - The JWT signature will be validated against SiS's public key.
  - The token will be validated to ensure it is not expired.
  - The scope or scopes in the JWT will be validated against the currently requested URL to ensure there is a match.
- If your access token is accepted then `/client_config` will return a `200` response with data on the credentials tied to the requested ICN.

```bash
> curl http://localhost:3000/v0/account_controls/credential_index -v -H "Accept: application/json" -H "Authorization: Bearer <access_token>"
* Trying 127.0.0.1:3000...
* Connected to localhost (127.0.0.1) port 3000 (#0)
> GET /v0/account_controls/credential_index HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.81.0
> Accept: application/json
> Authorization: Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ2YS5nb3Ygc2lnbiBpbiIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDAwMCIsImp0aSI6IjgwODJhZTUxLWM5NGMtNDI1Ni04NjZiLTQ0N2Q3MzlkODM1NCIsInN1YiI6InZldHMuZ292LnVzZXIrMEBnbWFpbC5jb20iLCJleHAiOjE3MDI0OTI3ODMsImlhdCI6MTcwMjQ5MjQ4MywidmVyc2lvbiI6IlYwIiwic2NvcGVzIjpbImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC92MC9hY2NvdW50X2NvbnRyb2xzL2NyZWRlbnRpYWxfaW5kZXgiXSwic2VydmljZV9hY2NvdW50X2lkIjoiMDFiOGViYWFjNTIxNWY4NDY0MGFkZTc1NmI2NDVmMjgiLCJ1c2VyX2F0dHJpYnV0ZXMiOnsiaWNuIjoiMTAxMjY2NzEyMlYwMTkzNDkifX0.bw3mRS-TNmavYAkjRB4KRD3w5npRwFK-MF5S8T8hsap_YsVu5_Vw9zfXFHw0_4sGalc7813JeDUzA78GQu3NP3Ye2zGmVtn0xaztKIFoUwLtj823hQSfbO8YO28WtW947dLMX1r6AezM3Eg1I3PgFU2sXMjFujdu4S3F3rpjBmnXChYJ4hsgfmGv-kk1YJdbuQreAqkq3OXoW2ijLQiMzVJCwLe-7ztZpOr2F2lC14LvPc5TnsIHsgVGBz2JUlKQhv99yA0a9veTxcUZeLX5dndqGrZnBHsaypW4B-rCUa7hLqTySut7FrKRCWTCv5RJEgV_3ZiWh58fG85DGFnCKA
> 
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
< ETag: W/"f9f577eb4d0741750ff1148f242e299d"
< Cache-Control: max-age=0, private, must-revalidate
< X-Request-Id: 288b138d-6f19-4a47-a8a1-7eb59c63c809
< X-Runtime: 0.043493
< vary: Origin
< Content-Length: 100
< 
* Connection #0 to host localhost left intact
{"data":[{"type":"logingov","credential_id":"eb172e31-36a0-4266-aa7b-b44c939e6850","locked":false}]}
```
