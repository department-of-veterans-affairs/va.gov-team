# Mocked Authentication
## Table of Contents
- [Overview](#overview)
- [How Mocked Authentication works](#how-mocked-authentication-works)
- [Client | Frontend Guide](#client-guide)
  - [How to use Mocked Authentication](#how-to-use-mocked-authentication)
  - [The Mocked Authentication user flow](#mocked-authentication-user-flow)
- [Server | API Guide](#server-guide)
  - [Previously mocked users]()
  - [Generating `state` & an `acr` value](#generate-a-state-code-and-acr)
  - [Creating and encoding User Credentials](#create-and-encode-user-credential-info)
    - [Log CSP User Attributes Response](#log-csp-user-attributes-response)
    - [Query existing mocked CSP Attribute Responses](#query-existing-mocked-csp-attribute-responses)
    - [Build CSP User Attributes Response](#build-csp-user-attributes-response)
      - [Login.gov](#logingov)
      - [ID.me](#idme)
      - [DS Logon](#dsl)
      - [My HealtheVet](#mhv) 
  - [Calling the Mocked Authentication Route](#calling-the-mocked-authentication-route)

<aside><em>💡 Note: Mocked authentication is only available in the development and localhost environments.</em></aside>

## Overview

Mocked authentication was created to solve pain points Engineers, Designers, Product Owners, QA Testers, and other users of VA.gov all face surrounding authentication. Most of the time these people do not care about how they authenticate with a Credential Service Provider (CSP) and would rather just be in a logged in state in order to continue with their tasks. Mocked authentication is an easier way to test features on a local or development build of VA.gov without the need for real authentication with using test user credentials.

## How Mocked Authentication works

VA.gov mocked authentication interacts with the [Sign-in Service](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Sign-In%20Service), playing the role of the CSP in between the `/authorize` & `/callback` calls. Local and development environments for VA.gov already leverage mocked MPI responses to populate user attributes. The mocked authentication flow uses .json files to provide the identifying attributes (first & last name, DOB, SSN, etc.) normally returned by the CSP as arguments. It then uses these mocked identifying attributes to structure a call to the SiS `/callback` route, prompting vets-api to look up the matching data from the mocked MPI response and log the user in.

## Client Guide

### How to use Mocked Authentication
To use mocked authentication you need to navigate to the mocked authentication route on vets-website located at

- [http://localhost:3001/sign-in/mocked-auth](http://localhost:3001/sign-in/mocked-auth) or,
- [http://dev.va.gov/sign-in/mocked-auth](http://dev.va.gov/sign-in/mocked-auth)

> ℹ️ Note: You must add [mocked credentials JSON](https://github.com/department-of-veterans-affairs/vets-api-mockdata/tree/master/credentials) in the vets-api-mockdata repository in order for mocked authentication to work. See above instructions on how to do that.

### Mocked Authentication User flow

![mock-auth](https://user-images.githubusercontent.com/67602137/228640745-4014f7e9-632c-4459-9c1d-79d6573bae9e.png)

1. Navigate to your preferred environments route (see above)
2. Using the dropdown select a Credential Service Provider (CSP) to use mock authentication with (either Login.gov, ID.me, DS Logon, or My HealtheVet)
3. Clicking the **Mocked Authentication** button will cause the `mockLogin` authentication utility to fire.
4. The `mockLogin` utility will generate the proper URL for the mocked authentication route with OAuth + PKCE integration for the vets-api (backend) to consume:
    
    ```javascript
    // Example of route generation with PKCE
    window.location = `https://dev-api.va.gov/v0/sign_in/
      ?client_id=vamock
      &response_type=code
      &type=<dropdown_selected_credential>
      &state=<random_hash_stored>
      &code_challenge=<random_hash_stored>
      &code_challenge_method=S256`
    
    ```
    
5. You will land on the server's UI (`/mocked_authentication/profiles`) page that displays a dropdown select box to select a preferred credential
6. Use the dropdown to select a mocked user (full list of mocked authentication users are located in the [vets-api-mockdata repo](https://github.com/department-of-veterans-affairs/vets-api-mockdata/tree/master/credentials))
![Screenshot 2023-04-24 at 3 00 11 PM](https://user-images.githubusercontent.com/67602137/234090965-1ccadeb8-fef1-4944-9060-e942128f9f24.png)

7. Click **Continue signing in** to continue with mocked authentication
8. Land back on your client-side environment in an authenticated state

## Server Guide

### Previously Mocked Users

If you have already mocked your chosen user before and have your `credential_info` & `state` encoded parameters saved, then you can [skip to calling the Mocked Authentication route](#calling-the-mocked-authentication-route) and call `mocked_authentication/authorize`. The [Generating `state` & an `acr` value](#generate-a-state-code-and-acr) and [Creating and encoding User Credentials](#create-and-encode-user-credential-info) sections are for obtaining & preparing the mocked CSP response data that is to be passed to the mocked authentication route.

### Generate a `state` code and `acr`

1. Make sure you are on either a localhost (`localhost:3000`) or development (`dev-api.va.gov`) environment.

2. Select a [mocked user that you would like to authenticate as](https://github.com/department-of-veterans-affairs/vets-api-mockdata/tree/master/credentials). Determine whether they are an ID.me or Login.gov user.

3. Make a cURL request to [the SiS `/authorize`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/authorize.md) endpoint:
    ```bash
    curl 'localhost:3000/v0/sign_in/authorize?type=logingov&code_challenge_method=S256&acr=ial2&client_id=vamock&code_challenge=1BUpxy37SoIPmKw96wbd6MDcvayOYm3ptT-zbe6L_zM='
    ```
    Note the following parameters:
      - `type`: the CSP the authentication is performed with. Must be one of `logingov`, `idme`, `dslogon`, `mhv`
      - `client_id`: `vamock`, enables mocked authentication configurations, behaves most like standard web authentication

4. Capture the following from the `oauth-form` element in the HTML response:

- `state`: This payload is returned by the CSP calling `/callback` and validated against the one returned by `/authorize`

  ```
  id="state"
  value="eyJhbGciOiJSUzI1NiJ9.eyJhY3IiOiJpYWwyIiwidHlwZSI6ImxvZ2luZ292IiwiY2xpZW50X2lkIjoidmFtb2NrIiwiY29kZV9jaGFsbGVuZ2UiOiIxQlVweHkzN1NvSVBtS3c5NndiZDZNRGN2YXlPWW0zcHRULXpiZTZMX3pNIiwiY2xpZW50X3N0YXRlIjpudWxsLCJjb2RlIjoiYjllNzdmMjhjNmQwYzY1MDJjMjE0MDFhOWVlMWE3ZTAifQ.VpJ0r-IZrPp9bgobejrrQPennK4EZ9etrK1AOmFzco6NTZJhpDgiuGdCYGU_RmHSiOSGHmph8e25J9Rl5zrOFmIGLSlr2C7seEoIhIwSjmxI34pKReV8JvotMXprVIG75u9xfT9Xp9OuQy7d0OvnPE7yMHJppfrmuh0naxT0--YOtehJLR1pFsNSyDeh8VIKaOv8lEAnrmM7rQMxbA2y7iL1nFU_rRcMFGiJIxViiW9ewz_AgkTthGHNxInLaOoFuym7KwGH0sIXJZUl7E9FZkZ1bFuR2LdP1sJjondE_AmJr6k4w4vccs1D5dDr244epBmQrXeS7uQVcUA02XLyHA"
  ```

- `acr` (Login.gov only): The IAL that is being requested of the CSP by VA.gov.
  ```
  id="acr_values" value="http://idmanagement.gov/ns/assurance/ial/2"
  ```

### Create and Encode User Credential Info

SiS communicates directly with 4 different CSP providers, each with a different user data response format to return the identifying attributes `vets-api` uses to look up the user in MPI and obtain their full attributes. As such, the user credential object that you create will be different depending on which CSP authentication you are mocking.

There are several ways to build the credential info data that will be supplied to the mocked authentication service:

* Enable CSP user attributes logging & authenticate to capture that user's CSP-provided attributes
* Use the Mocked Authentication `credential_list` endpoint to receive a JSON response with all of the currently mocked profiles available of a CSP type
* Build the credential info data using a provided template

#### Log CSP User Attributes Response

The Mocked Authentication module is integrated with vets-api to be able to automatically log the CSP user attributes returned when you perform a real localhost authentication. This functionality has been hardcoded off for safety, to enable it on your localhost edit the `log_credential` function in the SiS `idme/configuration.rb` & `logingov/configuration.rb` files, then authenticate with your chosen user. You will then be able to find your user's CSP attributes within your `vets-api-mockdata/credentials` directory.

Once you have copied the logged credential data you will need to encoded it. Open a rails console, save the copied to a variable, and then cast it to JSON & call the `Base64.encode64` method on it.
```
ruby c
credential_info = {
  "sub": "eb172e31-36a0-4266-aa7b-b44c939e6850",
  "iss": "https://idp.int.identitysandbox.gov/",
  "email": "vets.gov.user+0@gmail.com",
  "email_verified": true,
  "given_name": "HECTOR",
  "family_name": "J",
  "birthdate": "1932-02-05",
  "social_security_number": "796126859",
  "address": {
    "formatted": "123 Fake St.\nWashington, DC 20001",
    "street_address": "123 Fake St.",
    "locality": "Washington",
    "region": "DC",
    "postal_code": "20001"
  },
  "verified_at": 1638987170,
  "ial": "http://idmanagement.gov/ns/assurance/ial/2",
  "aal": "urn:gov:gsa:ac:classes:sp:PasswordProtectedTransport:duo"
}
Base64.encode64(credential_info.to_json)
 =>"eyJzdWIiOiJlYjE3MmUzMS0zNmEwLTQyNjYtYWE3Yi1iNDRjOTM5ZTY4NTAiLCJpc3MiOiJodHRwczovL2lkcC5pbnQuaWRlbnRpdHlzYW5kYm94Lmdvdi8iLCJlbWFpbCI6InZldHMuZ292LnVzZXIrMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZ2l2ZW5fbmFtZSI6IkhFQ1RPUiIsImZhbWlseV9uYW1lIjoiSiIsImJpcnRoZGF0ZSI6IjE5MzItMDItMDUiLCJzb2NpYWxfc2VjdXJpdHlfbnVtYmVyIjoiNzk2MTI2ODU5IiwiYWRkcmVzcyI6eyJmb3JtYXR0ZWQiOiIxMjMgRmFrZSBTdC5cbldhc2hpbmd0b24sIERDIDIwMDAxIiwic3RyZWV0X2FkZHJlc3MiOiIxMjMgRmFrZSBTdC4iLCJsb2NhbGl0eSI6Ildhc2hpbmd0b24iLCJyZWdpb24iOiJEQyIsInBvc3RhbF9jb2RlIjoiMjAwMDEifSwidmVyaWZpZWRfYXQiOjE2Mzg5ODcxNzAsImlhbCI6Imh0dHA6Ly9pZG1hbmFnZW1lbnQuZ292L25zL2Fzc3VyYW5jZS9pYWwvMiIsImFhbCI6InVybjpnb3Y6Z3NhOmFjOmNsYXNzZXM6c3A6UGFzc3dvcmRQcm90ZWN0ZWRUcmFuc3BvcnQ6ZHVvIn0=" 
```

#### Query existing mocked CSP Attribute Responses

The Mocked Authentication module hosts a `credential_list` endpoint to serve mocked CSP attribute response payloads as JSON. Most of these responses are recorded from the CSP response logging method above; the two features are intended for use in tandem to make capturing and using CSP data for any test user as seamless as possible.

Navigate to the following endpoint through your web browser or cURL; the `type` parameter must be one of `logingov`, `idme`, `dslogon`, or `mhv`, and should match the `type` chosen for the `sign_in_service/authorize` call.

```
curl 'localhost:3000/mocked_authentication/credential_list?type=logingov'

{ "mock_profiles":
  { "logingovuser1":
    { "encoded_credential":"ewogIC...",
      "credential_payload": {"sub": "381ce..."}
    }
  },
  { "logingovuser2":
    { "encoded_credential":"pdcsAC...",
      "credential_payload": {"sub": "920ey..."}
    }
  }
}
```

The `credential_list` route will include the credential_list encoded, allowing you to skip directly to the final step of calling the mocked authentication route with your `encoded_credential` & `state` parameters.

#### Build CSP User Attributes Response

You can also build your mocked credential object manually using the templates below.

<details id="logingov">
  <summary>Login.gov</summary>
    
  Note: 💡 Make sure the `acr` value copied from the `/authorize` `acr` response matches the `:ial` value in the credential_info payload below.

  ```ruby
  rails c
  credential_info = {
    sub: "ebf2e6ed-53b6-409d-a30a-cc98ae2adc01",
    iss: "https://idp.int.identitysandbox.gov/",
    email: "test@email.com",
    email_verified: true,
    given_name: "ABRAHAM",
    family_name: "LINCOLN",
    birthdate: "1900-01-01",
    social_security_number: "123456789",
    address: 
      { formatted: "1600 Pennsylvania Ave\nWashington, DC 12345",
        street_address: "1600 Pennsylvania Ave",
        locality: "Washington",
        region: "DC",
        postal_code: "12345" },
    verified_at: 1636478785,
    ial: "http://idmanagement.gov/ns/assurance/ial/2",
    aal: "urn:gov:gsa:ac:classes:sp:PasswordProtectedTransport:duo"
  }
  Base64.encode64(credential_info.to_json)
  ```
</details>

<details id="idme">
  <summary>ID.me</summary>

  ```ruby
  rails c
  credential_info = {
    iss: "https://api.idmelabs.com/oidc",
    sub: "85c50aa76934460c8736f687a6a30546", 
    aud: "ef7f1237ed3c396e4b4a2b04b608a7b1",
    exp: 1679359052,
    iat: 1679341051,
    credential_aal_highest: 2,
    credential_ial_highest: "classic_loa3",
    email: "test@email.com",
    fname: "ABRAHAM",
    lname: "LINCOLN",
    level_of_assurance: 3,
    multifactor: true,
    credential_aal: 2,
    credential_ial: 1,
    uuid: "idme_uuid"
  }
  Base64.encode64(credential_info.to_json)
  ```
</details>

<details id="dsl">
  <summary>DS Logon</summary>

  ```ruby
  rails c
  credential_info = {
    iss: "https://api.idmelabs.com/oidc",
    sub: "40e5bbdb6d2044ec89aad782c97d1faa",
    aud: "ef7f1237ed3c396e4b4a2b04b608a7b1",
    exp: 1652842354,
    iat: 1652824354,
    credential_aal_highest: 2,
    credential_ial_highest: "classic_loa3",
    dslogon_birth_date: "1968-09-11",
    dslogon_deceased: "false",
    dslogon_fname: "Abraham",
    dslogon_gender: "male",
    dslogon_idvalue: "123456789",
    dslogon_idtype: "ssn",
    dslogon_lname: "Lincoln",
    dslogon_assurance: "2",
    dslogon_mname: "George",
    dslogon_status: "SPONSOR",
    dslogon_uuid: "edipi",
    email: "test@email.com",
    level_of_assurance: 3,
    multifactor: true,
    credential_aal: 2,
    credential_ial: "classic_loa3",
    uuid: "40e5bbdb6d2044ec89aad782c97d1faa"
  }
  Base64.encode64(credential_info.to_json)
  ```
</details>

<details id="mhv">
  <summary>My HealtheVet (MHV)</summary>

 ```ruby
  rails c
  credential_info = {
    iss: ["https://api.idmelabs.com/oidc"],
    sub: ["85c50aa76934460c8736f687a6a30546"],
    aud: ["ef7f1237ed3c396e4b4a2b04b608a7b1"],
    exp: [1679459269],
    iat: [1679441269],
    credential_aal_highest: [2],
    credential_ial_highest: [1],
    mhv_icn: ['1012853550V207686'],
    mhv_profile:
      ['{"accountType":"Premium",
        "availableServices":{"21":"VA Medications","4":"Secure Messaging","3":"VA Allergies","2":"Rx Refill","12":"Blue Button (all VA data)","1":"Blue Button self entered data.","11":"Blue Button (DoD) Military Service Information"}}'],
    mhv_assurance: ["Premium"],
    mhv_uuid: ['12345748'],
    email: ['test@email.com'],
    level_of_assurance: [0],
    multifactor: ['false'],
    credential_aal: [2],
    credential_ial: [1],
    uuid: ['85c50aa76934460c8736f687a6a30546']
  }
  Base64.encode64(credential_info.to_json)
  ```
</details>


### Calling the Mocked Authentication Route

Take the `state` value returned from `sign_in_service/authorize` and the encoded `credential_info` information generated in the previous step, and use them to call the `/mocked_authentication/authorize` function:

```bash
curl 'localhost:3000/mocked_authentication/authorize?credential_info=eyJzdWIiOiJlYmYyZTZlZC01M2I2LTQwOWQtYTMwYS1jYzk4YWUyYWRjMDEiLCJpc3MiOiJodHRwczovL2lkcC5pbnQuaWRlbnRpdHlzYW5kYm94Lmdvdi8iLCJlbWFpbCI6ImpvZS5uaXF1ZXR0ZStsZ292aWFsMkBvZGRiYWxsLmlvIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImdpdmVuX25hbWUiOiJqb2VpYWwyIiwiZmFtaWx5X25hbWUiOiJ0ZXN0bGFzdG5hbWUiLCJiaXJ0aGRhdGUiOiIxOTgwLTA4LTE2Iiwic29jaWFsX3NlY3VyaXR5X251bWJlciI6IjEwMjk5ODc3NSIsImFkZHJlc3MiOnsiZm9ybWF0dGVkIjoiMjI4IE4gU3BlbmNlciBSZFxuUGF4dG9uLCBNQSAwMTYxMiIsInN0cmVldF9hZGRyZXNzIjoiMjI4IE4gU3BlbmNlciBSZCIsImxvY2FsaXR5IjoiUGF4dG9uIiwicmVnaW9uIjoiTUEiLCJwb3N0YWxfY29kZSI6IjAxNjEyIn0sInZlcmlmaWVkX2F0IjoxNjM2NDc4Nzg1LCJpYWwiOiJodHRwOi8vaWRtYW5hZ2VtZW50Lmdvdi9ucy9hc3N1cmFuY2UvaWFsLzIiLCJhYWwiOiJ1cm46Z292OmdzYTphYzpjbGFzc2VzOnNwOlBhc3N3b3JkUHJvdGVjdGVkVHJhbnNwb3J0OmR1byJ9&state=eyJhbGciOiJSUzI1NiJ9.eyJhY3IiOiJpYWwyIiwidHlwZSI6ImxvZ2luZ292IiwiY2xpZW50X2lkIjoidmFtb2NrIiwiY29kZV9jaGFsbGVuZ2UiOiIxQlVweHkzN1NvSVBtS3c5NndiZDZNRGN2YXlPWW0zcHRULXpiZTZMX3pNIiwiY2xpZW50X3N0YXRlIjpudWxsLCJjb2RlIjoiMTkyNGE3ZDExOWQ5NTUzNWFjYmY0NDQzOGU1OWM2MDEifQ.LpB18SdiC5uuuTBSfFpNQYAobS5OnuRGVhIqI5Teu5D2a_Ie3hzUXkS1vbJPEN1npeYvcxkHwyvmYOm7hVzPy-Y21SiyibHIuMibXciqozcdzWaql3-eTR-jppUhu_TTWUjsphF2qiEEqbvv31xs-DiEzlkVi3Xoj_OxxZSRaUtZI-cSn05sgT9nOReARBaC7QG3s7F94GJiguyrX1FL0EKbq6p5v83LxlGW_BMtqSAeFqPfxkubnatlrSh9JihIChVBHj7ep-_bpIg5soQbS-I32pdiyC8IXgS70WaeGubsQWOfpRZ1k1vt5dm-JJuAYjzC2acsx2i5u7jo4wDF3g' -L
```

The Mocked Authentication controller should take this information and redirect to a successful Sign-in Service `/callback` function, which will result in a redirect to the VA.gov frontend with a `code` parameter that can be [used to obtain session tokens](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/token.md).
