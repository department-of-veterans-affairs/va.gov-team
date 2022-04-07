# MHV Inherited Proofing Usage

## Summary
This solution will enable veterans who have already completed the MHV in person verification process to automatically transition their verification information over to a login.gov account. This will work regardless of their login.gov account status. 

## Description
This document describes how to use the MHV Inherited Proofing VA.gov service. The service enables a client, such as login.gov, to receive a special authentication request from va.gov which includes an authentication code to then request verification information about the currently logged in user. The client will send a signed JWT request with the auth code and expect a JWT back from the VA.gov Inherited Proofing service. This JWT must be decrypted with the clients private key. Formal registration of the public private key pairs should be completed during the initial development phase of the project, with preference being given to public registered endpoints which share public certificates the client intends to use.

## Version History
| Version Number | Author                                                 | Revision Date | Description of Change |
|----------------|--------------------------------------------------------|---------------|-----------------------|
| 0.1            | Trevor Bosaw, John Bramley, Josh Scanish, Joe Niquette | 4/7/2022      | Initial Creation      |

## Definitions
 - **Client**: Refers to login.gov backend services
 - **User**: Refers to the entity which is attempting to complete the inherited proofing process. For example a Veteran who has logged in with a verified MHV account who is eligible for the inherited proofing process with login.gov would be considered a `user`.
 - **user info api**, **vets-api**, **api**: All terms which refer to the endpoint which will listen for requests from clients which require user data of an eligible Veteran.

## References
 - [JWE RFC](https://datatracker.ietf.org/doc/html/rfc7516)
 - [JWT RFC](https://datatracker.ietf.org/doc/html/rfc7519)
 - [JWS RFC](https://datatracker.ietf.org/doc/html/rfc7515)

## Overview
- Vets-api passes the `auth_code` to the Login.gov service, which makes an authentication call to Login.gov, including the `auth_code` in the `inherited_proofing_auth` URL param.
- As part of their account creation/signin process Login.gov will make an API call to `api.va.gov/inherited_proofing/user_attributes`. This call will include a JWT containing the `auth_code` and `exp`, signed with Login.gov's private key, and will be passed through the authorization header.
- The `InheritedProofingController` will validate the request's authenticity by first decrypting the JWT using Login.gov's public key, then using the decrypted code to find the saved Redis cache containing the user's uuid. It will then use the User uuid to obtain the necessary user attributes for IAL2 proofing and store them in a JWT encrypted with login.gov's public key before returning them to Login.gov.
- Login.gov will use their associated private key to decode the JWT, then complete the account creation process with the contained user attributes and forward the user back to `api.va.gov/inherited_proofing/login`. At this point, the user will be logged out and have their session cleared (since they are currently authenticated through MHV), then placed into the regular Login.gov authentication flow. Since they will still possess an active session for their new Login.gov account, they will immediately be authenticated and returned back to the `v1/sessions/saml_callback` as an authenticated Login.gov IAL2 user.

## Diagram
![MHV Inherited Proofing - Technical Flow - API (1)](https://user-images.githubusercontent.com/71290526/162254371-b908ab45-8642-448a-898b-b1593b02937a.png)

## Detailed Design

### Data Request

Login.gov will send a GET request to `api.va.gov/inherited_proofing/user_attributes` with a JWT consisting of `{ inherited_proofing_auth: <auth_code>, exp: ${EXPIRATION_TIME} }` signed by the login.gov private key. The JWT will be passed through the authorization param: `Authorization: Bearer <JWT>`. This technique ensures the request came from login.gov. Vets-API will then validate the auth code by:
 - validating the sender's certificate chain
 - validate the request signature by decrypting the auth code value with the clients public key
 - validate the auth code exists within the Redis store
 - validate auth code attributes such as "has this code been used before" and "has the auth code expired"

If the validation passes for the auth code then vets-api will update the auth code entry in Redis to mark the record for deletion. If the Redis entry for the auth code is not otherwise marked for deletion then the entry will expire naturally after 90 minutes. The auth code is the key in the Redis table, the value will be the attributes associated with the original creation of the auth code. These attributes will include:
 - attribute :user_uuid, String
 - attribute :code, String
 - attribute :data, Hash

The `:data, Hash` will be a hash of the attributes received from the MHV API and will contain the follow values:
```
    'mhvId' => 19031205,
    'identityProofedMethod' => 'IPA',
    'identityProofingDate' => '2020-12-14',
    'identityDocumentExist' => true,
    'identityDocumentInfo' => {
       'primaryIdentityDocumentNumber' => '73929233',
       'primaryIdentityDocumentType' => 'StateIssuedId',
       'primaryIdentityDocumentCountry' => 'United States',
       'primaryIdentityDocumentExpirationDate' => '2026-03-30'
```

An example request from the client:
```
curl -X GET localhost:3000/inherited_proofing/user_attributes -H 'Authorization: Bearer
eyJhbGciOiJIUzI1NiJ9.eyJpbmhlcml0ZWRfcHJvb2ZpbmdfYXV0aCI6IjJiYzViZjViOTU1YTg4ZGY2ZjNkZTNjNjJjODdmNmYyIn0.HziiPA5EzB_tWhmSizocDfd3E6GyCK4W-nugKwp6HXg'
```

The bearer token is an Access Token JWT encoded with login.gov's private key and with at least the fields:
```
{ inherited_proofing_auth: <code_from_auth_call>, exp: <expiration_time_integer> }
```
They will decrypt using their private key, with default rails JWE methods, which are:

`alg: RSA-OAEP`

`enc: A128CBC-HS256`

### Data Response
Vets-API will create a JWT which contains the requested user attributes. The original auth code stored in Redis has a key which points to the user_uuid that can be used to obtain the PII of the current user. This user_uuid is used to search the user model Redis and returns all relevant PII for the currently logged in user. (Note: Standard validation checks of user_uuid are omitted from this document as they have been reviewed and approved in previous iterations of development) The user attributes are converted from a Ruby hash to JSON and then packaged inside the JWT payload which is encrypted with the clients public key (the public key for the client is obtained from an endpoint similar to this [one](https://idp.int.identitysandbox.gov/api/openid_connect/certs). The JWT is then sent over TLS back to login.gov. These interactions are not within the browser and occur only between backend servers from vets-api and login.gov.

**Example resulting JWT:**

`eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkExMjhHQ00ifQ.KoJTbwJhEVOUaGIX-i4jmav3_P4N_2PQZV9ViP0crVLhKBn-sQb4AQS2Drle0g24CBXJWnQ2RTohePWRnKQ_Ww.J9oXtVOaRqNch7aE.xhJHPRlmSYx_Mqz4.e6qKKqC007gF2BZpG795Hg`

**Which is then decoded to produce a header:**
```
{
  "alg": "RSA-OAEP",
  "enc": "A128GCM"
}
```
And a payload, in this case the payload is `some-payload`

Example Payload JSON:
```
{
 "given_name": "abraham",
 "family_name": "lincoln",
 "address": {
   "street_address": "1600 Pennsylvania Ave",
   "locality": "Washington",
   "region": "DC",
   "postal_code": "20500"
 },
 "phone": "(800) 867-5309",
 "dob": "1809-02-12",
 "ssn": "796111863",
 "inherited_proofing_auth": "646061c0a41cea527c6045780849103e"
}
```

# Login.gov Developer Guide

## Login.gov Authorization
*  Initial browser redirect from `vets-api` to login.gov is a standard OAuth Authorization, with an additional field, `inherited_proofing_auth`:
 ```
https://idp.int.identitysandbox.gov/openid_connect/authorize?acr_values=
http%3A%2F%2Fidmanagement.gov%2Fns%2Fassurance%2Fial%2F2&client_id=
${CLIENT_ID}&nonce=${NONCE}&prompt=select_account&redirect_uri=
${REDIRECT_URI}&response_type=code&scope=
profile+email+openid+social_security_number&state=${STATE}&inherited_proofing_auth=
${AUTH_CODE}
```

* `REDIRECT_URI` is a redirect to the specific inherited proofing callback, one of:
	* `localhost:3000/inherited_proofing/callback`
	* `https://api.va.gov/inherited_proofing/callback`
	* `https://staging-api.va.gov/inherited_proofing/callback`
	* `https://staging-api.va.gov/review_instance/inherited_proofing/callback`
	* `https://dev-api.va.gov/inherited_proofing/callback`


| Name          | Description                                                                                              | Value Type       |
|---------------|----------------------------------------------------------------------------------------------------------|------------------|
| AUTH_CODE     | 32 character hexadecimal random string that is generated by vets-api for each inherited proofing attempt | String, REQUIRED |
| NONCE         | 32 character hexadecimal random string generated by vets-api                                             | String, REQUIRED |
| STATE         | 32 character hexadecimal random string generated by vets-api                                             | String, REQUIRED |
| CLIENT_ID     | value from our login.gov application                                                                     | String, REQUIRED |
| acr_values    | currently set to ial2 url, http://idmanagement.gov/ns/assurance/ial/2                                    | String, REQUIRED |
| prompt        | set to select_account, as required                                                                       | String, OPTIONAL |
| response_type | set to code, as required                                                                                 | String, OPTIONAL |
| scope         | set to include profile email openid social_security_number                                               | String, REQUIRED |

* Once inherited proofing verification is fully complete, the expectation is for login.gov to redirect back to `redirect_uri`, where `vets-api` will log out of current `MHV` authentication, store proof of verification, and redirect back to login.gov for a final, verified authentication (separate from the authentication above)

## User Attributes

### Request

* API from login.gov to `vets-api`, `/inherited_proofing/user_attributes` with JWT  bearer token as authentication:
 ```
curl -X GET https://staging-api.va.gov/inherited_proofing/user_attributes -H "Authorization: Bearer
eyJhbGciOiJIUzI1NiJ9.eyJpbmhlcml0ZWRfcHJvb2ZpbmdfYXV0aCI6IjJiYzViZjViOTU1YTg4ZG
Y2ZjNkZTNjNjJjODdmNmYyIn0.HziiPA5EzB_tWhmSizocDfd3E6GyCK4W-nugKwp6HXg"
```
* During the process of inherited proofing, login.gov will call `vets-api` at one of the following to gain verified user attributes:
	* `localhost:3000/inherited_proofing/user_attributes`
	* `https://api.va.gov/inherited_proofing/user_attributes `
	* `https://staging-api.va.gov/inherited_proofing/user_attributes `
	* `https://staging-api.va.gov/review_instance/inherited_proofing/user_attributes `
	* `https://dev-api.va.gov/inherited_proofing/user_attributes `
* API must be called with a JWT, encoded with `inherited_proofing_auth` and `exp` fields, using the login.gov private key:
``` ruby
{ 
  inherited_proofing_auth: ${AUTH_CODE}, 
  exp: ${EXPIRATION_TIME} 
} 
```

| Name       | Description                             | Value Type                                              |
|------------|-----------------------------------------|---------------------------------------------------------|
| AUTH_CODE  | 32 character hexadecimal random string from the `authorize` call  |  String, REQUIRED    |
| EXPIRATION_TIME | representing epoch time, for example: `1649276453` | Integer, REQUIRED |

### Response
Response will be an encrypted json web token (JWE), in a simple JSON wrapper:
``` ruby
{ 
  data: ${ENCRYPTED_USER_ATTRIBUTES}
}
```
* `ENCRYPTED_USER_ATTRIBUTES` are user attributes encrypted as a JWE
* To decrypt, use login.gov private key, with `alg: RSA-OAEP`, `enc: A128CBC-HS256`
* When decrypted, user attributes are:
``` ruby
{ 
  first_name: ${FIRST_NAME},
  last_name: ${LAST_NAME},
  address: ${ADDRESS},
  phone: ${PHONE},
  birth_date: ${BIRTH_DATE},
  ssn: ${SSN}
}
```
* `ADDRESS` has format:
``` ruby
{
  street: ${STREET},
  street2: ${STREET 2},
  city: ${CITY},
  state: ${STATE},
  country: ${COUNTRY},
  zip: ${ZIP}
}
```

## `inherited_proofing/user_attributes` Endpoint Parameters

| Name       | Description                             | Value Type                                              |
|------------|-----------------------------------------|---------------------------------------------------------|
| First_name | users first name                        | String, REQUIRED                                        |
| Last_name  | users last name                         | String, REQUIRED                                        |
| Phone      | users phone number                      | String, OPTIONAL                                        |
| Birth_date | users birth date                        | String, REQUIRED,`iso8601` formatted (ex: `2020-01-31`) |
| SSN        | users social security number            | String, REQUIRED                                        |
| Address    | address block of information for user   | Hash, REQUIRED                                     |
| Street     | users street address                    | String, REQUIRED                                        |
| Street 2   | optional sub street address description | String, OPTIONAL                                        |
| City       | users city                              | String, OPTIONAL                                        |
| State      | users state                             | String, OPTIONAL                                        |
| Country    | users country                           | String, OPTIONAL                                        |
| Zip        | users zip code                          | String, REQUIRED                                        |


## Callback
* After login.gov completes inherited proofing successfully, expectation is to call callback described in `redirect_uri` parameter from `/authenticate`
*  As described above, `redirect_uri` can be one of:
	* `localhost:3000/inherited_proofing/callback`
	* `https://api.va.gov/inherited_proofing/callback`
	* `https://staging-api.va.gov/inherited_proofing/callback`
	* `https://staging-api.va.gov/review_instance/inherited_proofing/callback`
	* `https://dev-api.va.gov/inherited_proofing/callback`


