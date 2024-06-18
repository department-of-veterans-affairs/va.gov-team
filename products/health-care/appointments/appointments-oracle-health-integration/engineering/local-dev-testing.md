# Local Development and Testing Guide for VetsAPI Oracle Health Appointments features
This document is intended to provide guidance and a reference list of commands for developers that wish to run and debug the Vets-api appointment workflow using a locally-hosted instance.

## Running VetsAPI
* \> bundle install
* \> foreman start -m all=1,clamd=0,freshclam=0
 
## Running VetsGov website
* > yarn && yarn watch

## Running CES dependencies

### Caddy
Because vets-api is configured to use one endpoint for all VAMF services, Caddy provides a reverse proxy for `vetsapi-patient-gateway`, `vaos-service`, and `mobile-facility-service`
* > brew install caddy

Download the [Caddyfile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/appointments-oracle-health-integration/engineering/Caddyfile) and update the ports to match your local CES stack.

Then from the directory containing the caddy file, run caddy

* > caddy start

### Configuring local vets-api setup
Follow the guidance detailed in the Vets-api README for configuring local settings: https://github.com/department-of-veterans-affairs/vets-api?tab=readme-ov-file#configuration

Note that if you are running CES via Caddy, the `va_mobile: url` value must be overriden to use your local Caddy URL.

#### Run Local Services
Testing the appointment cancellation workflow locally requires running `vetsapi-patient-gateway`, and `mobile-facility-service`.

#### Update vets-api-mockdata
The user's JWT is mocked locally, and in order to successfully test a cancellation using the `vets.gov.user+81@gmail.com` login, you have to update the contents of the `map/secure_token_service/token.yml` file in the `vets-api-mockdata` repo to the following:

```YML
---
:method: :post
:status: 200
:headers:
  Content-Type:
  - application/json; charset=utf-8
  Content-Length:
  - '14658'
  Date:
  - Wed, 26 Jul 2023 19:56:07 GMT
:body: '{"access_token":"eyJhbGciOiJSUzUxMiJ9.eyJhdXRoZW50aWNhdGVkIjp0cnVlLCJsYXN0TmFtZSI6IlVzZXIiLCJzdWIiOiIxMDEyODQ1NjM4VjY3NzgxMyIsImlkVHlwZSI6IklDTiIsImlzcyI6Imdvdi52YS52YW1mLnVzZXJzZXJ2aWNlLnYyIiwidmFtZi5hdXRoLnJlc291cmNlcyI6WyJeLiokIl0sInZpc3RhSWRzIjpbXSwidmVyc2lvbiI6Mi44LCJmaXJzdE5hbWUiOiJTdXBlciIsIm5iZiI6MTcxODIyNDM4NiwidmFtZi5hdXRoLnJvbGVzIjpbInN0YWZmIiwidmV0ZXJhbiIsImFkbWluIl0sImV4cCI6MjAzMzU4NDU2NiwianRpIjoiNjU1ZGU0ZmYtNTQ4ZS00YzkxLTlkYmUtNjZlNTI5M2U3ZDU4In0.T-tCRyACadm-flAeJPSnnQGQOWE8UuisK879J1kHDlDSlBH2SjLOUGZss97NqP3Zd4h7ZgYLQiifsPXfObb8f3mhU1WDcpLIp2iskfoCfN_duTYRgRfA9-zCIi_mfd7b0df2dnVVUMRhJc_CVbI5TXivOWtuNvw6WRIA_en1skBOMp0BwRtH3TLmxv6qAzth-9xZrt1-C3k8uwJD7M7CLcTQyKjDCHuiOdMHTWwM_85b-HVV0eEVoElzthc1FBqsFZlf_o5NSaW5pDJW5L6ZmIdJzax2IONoBqNiYMTPA77fze_xvj9UvzmAgyqeeWOEsYx3LVPBf_n8cAhRXGBWtA","token_type":"Bearer","expires_in":899}'
```

## Testing Appointments workflow
### Logging in
With both VetsAPI and VetsGov website running locally, open http://localhost:3001/sign-in/mocked-auth in a browser to begin the login process.
* Choose id.me as the provider
* Select the `vets.gov.user+81@gmail.com` profile and click 'Continue signing in'.

## Capturing vets-api requests
### Logging in
With both VetsAPI and VetsGov website running locally, open http://localhost:3001/sign-in/mocked-auth in a browser to begin the login process.
* Choose a provider (ex. id.me)
* Select from one of the available Profiles (ex. vets.gov.user+1@gmail.com) and click 'Continue signing in'.

### Capture the Appointment request
* Open a tool to capture the network requests from the page (in Chrome, select Inspect>Network)
* Refresh the page
* Select one of the entries beginning with `appointments?` and right-click Copy>Copy a cURL

### Import the request to Postman
* In Postman, choose `Import` and paste the cURL into the textbox
* Execute the request 


