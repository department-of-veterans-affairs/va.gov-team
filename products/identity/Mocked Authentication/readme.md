# Mocked Authentication

## Overview

Mocked authentication was created to provide developers, designers, QA testers, and others an easier way to use a local or development build of VA.gov without the need for real authentication with a Credential Service Provider (CSP) using test user credentials.

### How Mocked Authentication works

VA.gov mocked authentication interacts with the [Sign-in Service](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Sign-In%20Service), playing the role of the CSP in between the `/authorize` & `/callback` calls. Local and development environments for VA.gov already leverage mocked MPI responses to populate user attributes. The mocked authentication flow takes the identifying attributes (first & last name, DOB, SSN, etc.) normally provided by the CSP as arguments, then structures a call to the SiS `/callback` route, prompting vets-api to look up the matching data from the mocked MPI response and log the user in.

## Using Mocked Authentication

### Previously Mocked Users

If you have already mocked your chosen user before and have your `credential_info` & `state` encoded parameters saved, then you can skip to step #6 and call `mocked_authentication/authorize`. Steps #1-5 are for obtaining & preparing the mocked CSP response data that is to be passed to the mocked authentication route.

### Generate a `state` code & ACR

1. Make sure you are on either a localhost (`localhost:3000`) or development (`dev-api.va.gov`) environment.

2. Select a [mocked user that you would like to authenticate as](https://github.com/department-of-veterans-affairs/vets-api-mockdata/tree/master/mvi). Determine whether they are an ID.me or Login.gov user.

3. Make a cURL request to [the SiS `/authorize`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/authorize.md) endpoint:
    ```
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

### Create & Encode User Credential Info

5. SiS communicates directly with 4 different CSP providers, each with a different user data response format to return the identifying attributes `vets-api` uses to look up the user in MPI and obtain their full attributes. As such, the user credential struct that you create will be different depending on which CSP authentication you are mocking. Build the credential struct within a Ruby console, populating the identifying attributes from the `vets-api-mockdata` mocked MPI response, and then cast the struct to JSON before calling `Base64.encode64` on it so that it can be passed as a URL parameter.

#### Login.gov

- Make sure the `acr` value copied from the `/authorize` `acr` response matches the `:ial` value in the User Credential struct.

```
rails c
credential_info = OpenStruct.new(
  :sub=>"logingov_uuid",
  :iss=>"https://idp.int.identitysandbox.gov/",
  :email=>"test@email.com",
  :email_verified=>true,
  :given_name=>"ABRAHAM",
  :family_name=>"LINCOLN",
  :birthdate=>"1900-01-01",
  :social_security_number=>"123456789",
  :address=>
    { :formatted=>"1600 Pennsylvania Ave\nWashington, DC 12345",
      :street_address=>"1600 Pennsylvania Ave",
      :locality=>"Washington",
      :region=>"DC",
      :postal_code=>"12345" },
  :verified_at=>1636478785,
  :ial=>"http://idmanagement.gov/ns/assurance/ial/2",
  :aal=>"urn:gov:gsa:ac:classes:sp:PasswordProtectedTransport:duo"
)
Base64.encode64(credential_info.to_json)
```

#### ID.me

```
rails c
credential_info = OpenStruct.new(
  :iss => "https://api.idmelabs.com/oidc",
  :sub => "85c50aa76934460c8736f687a6a30546", 
  :aud => "ef7f1237ed3c396e4b4a2b04b608a7b1",
  :exp => 1679359052,
  :iat => 1679341051,
  :credential_aal_highest => 2,
  :credential_ial_highest => "classic_loa3",
  :email => "test@email.com",
  :fname => "ABRAHAM",
  :lname => "LINCOLN",
  :level_of_assurance => 3,
  :multifactor => true,
  :credential_aal => 2,
  :credential_ial => 1,
  :uuid="idme_uuid"
)
Base64.encode64(credential_info.to_json)
```

#### DSLogon

```
rails c
credential_info = OpenStruct.new(
  :iss => "https://api.idmelabs.com/oidc",
  :sub => "40e5bbdb6d2044ec89aad782c97d1faa",
  :aud => "ef7f1237ed3c396e4b4a2b04b608a7b1",
  :exp => 1652842354,
  :iat => 1652824354,
  :credential_aal_highest => 2,
  :credential_ial_highest => "classic_loa3",
  :dslogon_birth_date => "1968-09-11",
  :dslogon_deceased => "false",
  :dslogon_fname => "Abraham",
  :dslogon_gender => "male",
  :dslogon_idvalue => "123456789",
  :dslogon_idtype => "ssn",
  :dslogon_lname => "Lincoln",
  :dslogon_assurance => "2",
  :dslogon_mname => "George",
  :dslogon_status => "SPONSOR",
  :dslogon_uuid => "edipi",
  :email => "test@email.com",
  :level_of_assurance => 3,
  :multifactor => true,
  :credential_aal => 2,
  :credential_ial => "classic_loa3",
  :uuid => "idme_uuid"
)
Base64.encode64(credential_info.to_json)
```

#### MHV

```
rails c
credential_info = OpenStruct.new(
  :mhv_icn => ['1012853550V207686'],
  :mhv_profile => 
    ['{"accountType":"Premium",
       "availableServices":{"21":"VA Medications","4":"Secure Messaging","3":"VA Allergies","2":"Rx Refill","12":"Blue Button (all VA data)","1":"Blue Button self entered data.","11":"Blue Button (DoD) Military Service Information"}}'],
  :mhv_uuid => ['12345748'],
  :email => [test@email.com],
  :multifactor => ['false'],
  :uuid => [idme_uuid],
  :level_of_assurance' => []
)
Base64.encode64(credential_info.to_json)
```

### Calling the Mocked Authentication Route

6. Take the `state` value returned in step #4 and the encoded `credential_info` information generated in step #5, and use them to call the `/mocked_authentication/authorize` function:

```
curl 'localhost:3000/mocked_authentication/authorize?credential_info=eyJzdWIiOiJlYmYyZTZlZC01M2I2LTQwOWQtYTMwYS1jYzk4YWUyYWRjMDEiLCJpc3MiOiJodHRwczovL2lkcC5pbnQuaWRlbnRpdHlzYW5kYm94Lmdvdi8iLCJlbWFpbCI6ImpvZS5uaXF1ZXR0ZStsZ292aWFsMkBvZGRiYWxsLmlvIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImdpdmVuX25hbWUiOiJqb2VpYWwyIiwiZmFtaWx5X25hbWUiOiJ0ZXN0bGFzdG5hbWUiLCJiaXJ0aGRhdGUiOiIxOTgwLTA4LTE2Iiwic29jaWFsX3NlY3VyaXR5X251bWJlciI6IjEwMjk5ODc3NSIsImFkZHJlc3MiOnsiZm9ybWF0dGVkIjoiMjI4IE4gU3BlbmNlciBSZFxuUGF4dG9uLCBNQSAwMTYxMiIsInN0cmVldF9hZGRyZXNzIjoiMjI4IE4gU3BlbmNlciBSZCIsImxvY2FsaXR5IjoiUGF4dG9uIiwicmVnaW9uIjoiTUEiLCJwb3N0YWxfY29kZSI6IjAxNjEyIn0sInZlcmlmaWVkX2F0IjoxNjM2NDc4Nzg1LCJpYWwiOiJodHRwOi8vaWRtYW5hZ2VtZW50Lmdvdi9ucy9hc3N1cmFuY2UvaWFsLzIiLCJhYWwiOiJ1cm46Z292OmdzYTphYzpjbGFzc2VzOnNwOlBhc3N3b3JkUHJvdGVjdGVkVHJhbnNwb3J0OmR1byJ9&state=eyJhbGciOiJSUzI1NiJ9.eyJhY3IiOiJpYWwyIiwidHlwZSI6ImxvZ2luZ292IiwiY2xpZW50X2lkIjoidmFtb2NrIiwiY29kZV9jaGFsbGVuZ2UiOiIxQlVweHkzN1NvSVBtS3c5NndiZDZNRGN2YXlPWW0zcHRULXpiZTZMX3pNIiwiY2xpZW50X3N0YXRlIjpudWxsLCJjb2RlIjoiMTkyNGE3ZDExOWQ5NTUzNWFjYmY0NDQzOGU1OWM2MDEifQ.LpB18SdiC5uuuTBSfFpNQYAobS5OnuRGVhIqI5Teu5D2a_Ie3hzUXkS1vbJPEN1npeYvcxkHwyvmYOm7hVzPy-Y21SiyibHIuMibXciqozcdzWaql3-eTR-jppUhu_TTWUjsphF2qiEEqbvv31xs-DiEzlkVi3Xoj_OxxZSRaUtZI-cSn05sgT9nOReARBaC7QG3s7F94GJiguyrX1FL0EKbq6p5v83LxlGW_BMtqSAeFqPfxkubnatlrSh9JihIChVBHj7ep-_bpIg5soQbS-I32pdiyC8IXgS70WaeGubsQWOfpRZ1k1vt5dm-JJuAYjzC2acsx2i5u7jo4wDF3g' -L
```

The Mocked Authentication controller should take this information and redirect to a successful Sign-in Service `/callback` function, which will result in a redirect to the VA.gov frontend with a `code` parameter that can be [used to obtain session tokens](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/token.md).