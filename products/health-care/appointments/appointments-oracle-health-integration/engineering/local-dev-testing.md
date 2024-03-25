# Local Development and Testing Guide for VetsAPI Oracle Health Appointments features

## Running VetsAPI
* \> bundle install
* \> foreman start -m all=1,clamd=0,freshclam=0
 
## Running VetsGov website
* > yarn && yarn watch

## Running CES dependencies

### vetsapi-patient-gateway

### vaos-service

### Caddy
Because vets-api is configured to use one eCaddy provides a reverse proxy for `vetsapi-patient-gateway` and `vaos-service`
* > brew install caddy

Download the [Caddyfile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/appointments-oracle-health-integration/engineering/Caddyfile) and then from the directoy fo the file run caddy
* > caddy start

## Testing Appointments workflow
### What users to log in as?
