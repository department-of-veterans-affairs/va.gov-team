# Mocked Authentication
## Table of Contents
- [Overview](#overview)
- [How Mocked Authentication Works](#how-mocked-authentication-works)
- [Client | Frontend Guide](#client-guide)
  - [How to use Mocked Authentication](#how-to-use-mocked-authentication)
  - [The Mocked Authentication User Flow](#mocked-authentication-user-flow)
- [Server | API Guide](#server-guide)
  - [Previously Mocked Users](#previously-mocked-users)
  - [How to Generate `state` code and `acr`](#how-to-generate-state-code-and-acr)
  - [How to Create and Encode User Credentials](#how-to-create-and-encode-user-credentials)
    - [Capturing CSP User Attributes Response](#capturing-csp-user-attributes-response)
    - [Query Existing Mocked CSP Attribute Responses](#query-existing-mocked-csp-attribute-responses)
    - [Building a CSPs User Attributes Response](#build-csp-user-attributes-response)
      - [Login.gov](#logingov)
      - [ID.me](#idme)
      - [DS Logon](#dsl)
      - [My HealtheVet](#mhv)
  - [Invoking the Mocked Authentication Route](#invoking-the-mocked-authentication-route)
- [Common Issues and Solutions](#common-issues-and-solutions)

<aside><em>💡 Note: Mocked authentication is only available in the development and localhost environments.</em></aside>

## Overview

Mocked authentication was created to solve pain points Engineers, Designers, Product Owners, QA Testers, and other users of VA.gov all face surrounding authentication. Most of the time these people do not care about how they authenticate with a Credential Service Provider (CSP) and would rather just be in a logged in state in order to continue with their tasks. Mocked authentication is an easier way to test features on a local or development build of VA.gov without the need for real authentication with using test user credentials.

## How Mocked Authentication Works

VA.gov mocked authentication interacts with the [Sign in Service](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Sign-In%20Service), playing the role of the CSP in between the `/authorize` & `/callback` calls. Local and development environments for VA.gov already leverage mocked MPI responses to populate user attributes. The mocked authentication flow uses .json files to provide the identifying attributes (first & last name, DOB, SSN, etc.) normally returned by the CSP as arguments. It then uses these mocked identifying attributes to structure a call to the SiS `/callback` route, prompting vets-api to look up the matching data from the mocked MPI response and log the user in.

## Client Guide

### How to use Mocked Authentication
To use mocked authentication you need to navigate to the mocked authentication route on vets-website located at

- [http://localhost:3001/sign-in/mocked-auth](http://localhost:3001/sign-in/mocked-auth) or,
- [http://dev.va.gov/sign-in/mocked-auth](http://dev.va.gov/sign-in/mocked-auth)

> ℹ️ Note: You must add [mocked credentials JSON](https://github.com/department-of-veterans-affairs/vets-api-mockdata/tree/master/credentials) in the vets-api-mockdata repository in order for mocked authentication to work. See above instructions on how to do that.

### Mocked Authentication User Flow

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

If you have previously mocked your selected user and saved the `credential_info` and `state` encoded parameters, you can proceed directly to  [Invoking the Mocked Authentication Route](#invoking-the-mocked-authentication-route) and call `mocked_authentication/authorize`. The [Generating `state` & an `acr` value](#generate-a-state-code-and-acr) and [Create and Encode User Credentials](#create-and-encode-user-credentials) sections are meant for generating and preparing the mocked CSP response data to be passed to the mocked authentication route. If you already have this data, these steps are not necessary.

### How to Generate `state` Code and `acr`

Follow these steps to generate `state` code and `acr`:

1. Ensure you are in either a localhost (`localhost:3000`) or development (`dev-api.va.gov`) environment.

2. Choose a [mocked user you wish to authenticate as](https://github.com/department-of-veterans-affairs/vets-api-mockdata/tree/master/credentials). Identify if they are an ID.me or Login.gov user.

3. Execute a cURL request to [the SiS `/authorize`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/authorize.md) endpoint:
    ```bash
    curl 'localhost:3000/v0/sign_in/authorize?type=logingov&code_challenge_method=S256&acr=ial2&client_id=vamock&code_challenge=1BUpxy37SoIPmKw96wbd6MDcvayOYm3ptT-zbe6L_zM='
    ```
    Take note of the following parameters:
    - `type`: This specifies the CSP used for authentication. It must be one of `logingov`, `idme`, `dslogon`, `mhv`.
    - `client_id`: Set this to `vamock` to enable mocked authentication configurations. This behaves similarly to standard web authentication.

4. Extract the following from the oauth-form element in the HTML response:
   - `state`: This payload, returned by the CSP via the `/callback` endpoint, is validated against the payload returned by `/authorize`.
      ```bash
      id="state"
      value="eyJhbGciOiJSUzI1NiJ9.eyJhY3IiOiJpYWwyIiwidHlwZS...
      ```

   - `acr` (Login.gov only): The `IA`L that is being requested of the CSP by VA.gov.
      ```bash
      id="acr_values" value="http://idmanagement.gov/ns/assurance/ial/2"
      ```

### How to Create and Encode User Credentials

Sign-In Service interacts directly with four distinct CSP providers, each returning user data in a unique format. These formats contain identifying attributes that `vets-api` utilizes to look up the user in MPI and acquire their full attributes. Therefore, the user credential object you create will vary based on the type of CSP authentication you are mocking.

Here are several methods to construct the credential info data for the mocked authentication service:

- Activate CSP user attributes logging and authenticate to capture a user's CSP-provided attributes.
- Use the Mocked Authentication `credential_list` endpoint to obtain a JSON response containing all currently mocked profiles available for a specific CSP type.
- Construct the credential info data using a provided template.

#### Capturing CSP User Attributes Response

The Mocked Authentication module integrates with vets-api, allowing automatic logging of the CSP user attributes returned during real localhost authentication. For safety reasons, this functionality is deactivated by default.

To enable it on your localhost:

1. Set the `log_credential` method located in `vets-api/lib/idme/configuration.rb` or `vets-api/lib/logingov/configuration.rb` to return true.
   ```ruby
   def log_credential
     true
   end
   ```
2. Authenticate with your chosen user.

After doing this, you should find your user's CSP attributes in your `vets-api-mockdata/credentials` directory.

Once you have copied the logged credential data, it needs to be encoded. To do this:

1. Start a Rails console.
   ```bash
   rails c
   ```
2. Save the copied data to a variable.
   ```ruby
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
   ```
3. Cast the data to JSON and call the `Base64.encode64` method on it.
   ```ruby
   Base64.encode64(credential_info.to_json)
   =>"eyJzdWIiOiJlYjE3MmUzMS0zNmEwLTQyNjYtYWE3Yi1....
   ```

#### Query Existing Mocked CSP Attribute Responses

The Mocked Authentication module provides a `credential_list` endpoint to deliver mocked CSP attribute response payloads in JSON format. Most of these responses are captured using the CSP response logging method detailed above. Both features are designed to work together, making the capture and use of CSP data for any test user as seamless as possible.

To use this, navigate to the given endpoint through your web browser or cURL. The `type` parameter should be one of `logingov`, `idme`, `dslogon`, or `mhv`, and should align with the `type` selected for the `sign_in_service/authorize` call.


```bash
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

The `credential_list` route provides the encoded credentials, enabling you to directly proceed to the final step. Here, you'll call the mocked authentication route with your `encoded_credential` and `state` parameters.

#### Build CSP User Attributes Response

You can also build your mocked credential object manually using the templates below.

<details id="logingov">
  <summary>Login.gov</summary>

  Note: 💡 Make sure the `acr` value copied from the `/authorize` `acr` response matches the `:ial` value in the credential_info payload below.

  ```ruby
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


### Invoking the Mocked Authentication Route

To invoke the Mocked Authentication Route, you need to use the `state` value returned from `sign_in_service/authorize` and the encoded `credential_info` data created in the previous step. These values should be used to call the `/mocked_authentication/authorize` function:

```bash
curl 'localhost:3000/mocked_authentication/authorize?credential_info=eyJzdWIiOiJlYmYyZTZlZC01...' -L
```

The Mocked Authentication controller processes this information and redirects to the successful Sign in Service `/callback` function. This results in a redirect to the VA.gov frontend, which provides a code parameter that can be [used to acquire session tokens](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/token.md).

## Common Issues and Solutions
### Issue: No users appearing in the dropdown
This is usually due to the fact that you do not have the latest `vets-api-mockdata`

**Solution:**
- Confirm that you have cloned the [vets-api-mockdata](https://github.com/department-of-veterans-affairs/vets-api-mockdata) repo.
- Check that you have pulled the latest version of `vets-api-mockdata`.
- Validate your `Settings.betamocks.cache_dir` in `vets-api` is set to the location where you cloned `vets-api-mockdata`. For example:
  ```yaml
  # settings.local.yml
  betamocks:
    cache_dir: ../vets-api-mockdata
  ```
### Issue: Receiving an invalid client_id error
This error could be due to the Sign in Service client config for Mocked Authentication missing from your database.

**Solution:**
- Make sure you have seeded your database with the following command:
  ```bash
  bundle exec rails db:seed
  ```
### Issue: Redirected to id.me or login.gov
This error could be due to the Sign in Service client config for Mocked Authentication missing from your database.

**Solution:**
- Make sure you have seeded your database with the following command:
  ```bash
  bundle exec rails db:seed
  ```

### Issue: Receiving a Code in state is not valid error
This issue often appears if you had an error on your first sign-in attempt, or if you hit the back button during the sign-in process and select a new user, causing the state to get corrupted.

**Solution:**
- Reset the state by navigating to the mocked authentication page:
  - [http://localhost:3001/sign-in/mocked-auth](http://localhost:3001/sign-in/mocked-auth)
  - [http://dev.va.gov/sign-in/mocked-auth](http://dev.va.gov/sign-in/mocked-auth)
