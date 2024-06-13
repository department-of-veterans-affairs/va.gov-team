# User Credential Lock

## Direct `vets-api` Access
The (vets-api side) `credential_index`, `credential_lock`, and `credential_unlock` methods can be accessed directly with a properly formatted service_account access token formatted to match the Identity Dashboard Service Account Config.

To do so, you will have to manually create a Service Account access_token that includes the `user_attributes` for the user you wish to query: an `icn` for a `credential_index` call, and a `type` & `credential_id` for `credential_lock`/`credential_unlock` calls.

```ruby
# vets-api console
current_time = Time.now.to_i
token_payload = {
        iss: Settings.hostname,
        sub: <requesting_user_email>,
        aud: 'http://127.0.0.1:3000/v0/sign_in/token',
        iat: current_time,
        exp: current_time + 300,
        scopes: ['http://localhost:3000/v0/account_controls/<credential_index/lock/unlock>'],
        service_account_id: '01b8ebaac5215f84640ade756b645f28',
        jti: SecureRandom.hex,
        user_attributes: { 'icn' => <icn>, 'type' => <type>, 'credential_id' => <credential_id> }
}
private_key = OpenSSL::PKey::RSA.new(File.read(Settings.sign_in.jwt_encode_key))
JWT.encode token_payload, private_key, 'RS256'
```

```bash
curl --location 'http://localhost:3000/v0/account_controls/credential_index' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiIxMjcuMC4wLjE6MzAwMCIsInN1YiI6InZldHMuZ292LnVzZXIrMEBnbWFpbC5jb20iLCJhdWQiOiJodHRwOi8vMTI3LjAuMC4xOjMwMDAvdjAvc2lnbl9pbi90b2tlbiIsImlhdCI6MTcwMjI2MzA2NSwiZXhwIjoxNzAyMjYzMzY1LCJzY29wZXMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAwL3YwL2FjY291bnRfY29udHJvbHMvY3JlZGVudGlhbF9pbmRleCJdLCJzZXJ2aWNlX2FjY291bnRfaWQiOiIwMWI4ZWJhYWM1MjE1Zjg0NjQwYWRlNzU2YjY0NWYyOCIsImp0aSI6IjdkNjA0ZmQ1ZTk3YTI4ZjYxOGY5Yjg1NDZhMTVkMmRlIiwidXNlcl9hdHRyaWJ1dGVzIjp7ImljbiI6IjEwMDg1OTYzNzlWODU5ODM4In19.Lk5s5JO0JwCjeMfXAO0-vAlqGczecZhUtAQHi-sz7gY88YVBhtdBSUcXeEcz0cFqbpTxp1ZveRTcJm3rDNDnV0LXi_1DeaLLnrqPFqo3plP_MdVXOmxjTjZ9B189KiszPgHO6qrLW6kaYZ_9tULmRjudixl5zinKQzJgqk75lFNQSJlg7J6rUFN_Ae2DDlICeo6OiPbkRhl4usvnazatydH2ZKxblZ9NvG4xbar6j9472t-wvS82O9jpIDh9CN8OGEtPXNq9umJsr0neilpSFq3ZflPybBVnrz3PHi_biC0mh7vzTM2k4g1-pniKaLA0uVudBO-noT-8l2yQfcTiuA'
{"data":[{"type":"logingov","credential_id":"e444837a-e88b-4f59-87da-10d3c74c787b","locked":false}]}%
```

For more detailed instructions on creating and using Service Account access_tokens see the [service_account auth](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/auth_flows/service_account.md) documentation.

## Identity Dashboard Access

- The [Identity Dashboard Postman collection](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/postman.md) is recommended for ease of testing the Identity Dashboard portions of this feature.
- Start both your
  - vets-api (localhost:3000)
  - identity dashboard (localhost:4000)
- Make sure your Identity Dashboard ServiceAccountConfig has the updated scopes. This is most easily done by running `rails db:seed`, you can verify the correct scopes through the rails console on the `SignIn::ServiceAccountConfig` object.
- Select the user account you wish to test with and first perform and authentication to verify that it is in good working order. You can also look up that account's UserVerifications to view the credential uuids & lock status directly:
```ruby
UserVerification.find_by(logingov_uuid: "e444837a-e88b-4f59-87da-10d3c74c787b")
=> #<UserVerification:0x00007f52cf077438                           
 id: 2471,                                                      
 user_account_id: "141eca6f-5b0e-4523-b7a2-fe66159296d9",       
 idme_uuid: nil,                                                
 logingov_uuid: "e444837a-e88b-4f59-87da-10d3c74c787b",         
 mhv_uuid: nil,                                                 
 dslogon_uuid: nil,                                             
 verified_at: Tue, 10 Oct 2023 13:45:52.159802000 UTC +00:00,   
 created_at: Tue, 10 Oct 2023 13:45:52.256103000 UTC +00:00,    
 updated_at: Tue, 10 Oct 2023 13:45:52.256103000 UTC +00:00,    
 backing_idme_uuid: nil,
 locked: false>
```
- Obtain an Identity Dashboard access token through authentication with SiS or the `/mock_cookie` route; the following `credential_index`, `credential_lock`, and `credential_unlock` requests are all made to the Identity Dashboard, which will obtain a SiS Service Account acccess_token and use it to query `vets-api`.

### GET `credential_index` Method

`credential_index` queries `vets-api` based on a user's ICN & returns a serialized list of that user's UserVerifications, including their credential_id, the CSP type, and lock status.

#### Request Parameters

`icn`: string

#### Example Request
```bash
curl --location 'localhost:4000/va_gov_account/credential_index?icn=1008596379V859838' \
--header 'Cookie: vagov_access_token=<sis_user_access_token>'
```

#### Example Response
Your response format will include a serialized list of UserVerifications that each include the CSP type, credential_id, and locked status.

```json
{
    "data": [
        {
            "type": "logingov",
            "credential_id": "e444837a-e88b-4f59-87da-10d3c74c787b",
            "locked": false
        },
        {
            "type": "mhv",
            "credential_id": "a9d653a5-494c-48d0-816d-a3f8c7bc46f9",
            "locked": false
        },
        {
            "type": "dslogon",
            "credential_id": "a62f1559-2141-4666-8fba-af5488cd0161",
            "locked": true
        },
        {
            "type": "idme",
            "credential_id": "85c50aa76934460c8736f687a6a30546",
            "locked": false
        }
    ]
}
```

### POST `credential_lock` & `credential_unlock` methods

`credential_lock` & `credential_unlock` take a specific credential_id and update the correlated `UserVerification` on `vets-api`, preventing that user from logging in with it. The actual locking behavior that reads from `UserVerification.locked` is [already implemented](https://github.com/department-of-veterans-affairs/vets-api/pull/14352), this PR only updates the UserVerification attributes. The parameters and response formats for `lock` & `unlock` are identical.

#### Request Parameters
  - `credential_id`: id of the CSP you wish to lock or unlock
  - `type`: the CSP you wish to lock or unlock, valid choices are: `logingov`, `idme`, `dslogon`, `mhv`

#### Request Format
```curl
# lock request
curl --location --request POST 'localhost:4000/va_gov_account/credential_lock?credential_id=85c50aa76934460c8736f687a6a30546&type=idme' \
--header 'Cookie: vagov_access_token=<sis_user_access_token>'
# unlock request
curl --location --request POST 'localhost:4000/va_gov_account/credential_unlock?credential_id=e444837a-e88b-4f59-87da-10d3c74c787b&type=logingov' \
--header 'Cookie: vagov_access_token=<sis_user_access_token>'
```

#### Response Format
Your response format will include the credential_id, type, & locked status.

```json
{
    "data": {
        "type": "idme",
        "credential_id": "85c50aa76934460c8736f687a6a30546",
        "locked": true
    }
}
