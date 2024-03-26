# Local Development and Testing Guide for VetsAPI Oracle Health Appointments features
This document is intended to provide guidance and a reference list of commands for developers that wish to run and debug the Vets-api appointment workflow using a locally-hosted instance.

## Running VetsAPI
* \> bundle install
* \> foreman start -m all=1,clamd=0,freshclam=0
 
## Running VetsGov website
* > yarn && yarn watch

## Running CES dependencies

### Caddy
Because vets-api is configured to use one eCaddy provides a reverse proxy for `vetsapi-patient-gateway` and `vaos-service`
* > brew install caddy

Download the [Caddyfile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/appointments-oracle-health-integration/engineering/Caddyfile) and then from the directoy fo the file run caddy
* > caddy start

### Configuring local setup
Follow the guidance detailed in the Vets-api README for configuring local settings: https://github.com/department-of-veterans-affairs/vets-api?tab=readme-ov-file#configuration

Note that if you are running CES via Caddy, the `va_mobile: url` value must be overriden to use the local url where the CES stack is running.


## Testing Appointments workflow
### What users to log in as?
