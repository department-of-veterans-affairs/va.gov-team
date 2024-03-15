# Configuration Requirements for ID.me Integration
This file outlines what pieces need to be configured for ID.me in each environment, where each config lives and the POC for setting up new config.

### Definitions
**Relying Party (RP)** - this refers to a consumer of the SAML assertion from ID.me (aka vets.gov); each relying party has it's own identifier, each environment is a separate RP. 

**Certificate** - ID.me uses our cert to encrypt and sign the SAML assertion. The cert is associated with an RP. In all environments except prod we use a self-signed cert, these have already been generated. On dev/staging/prod the key is stored in credstash.

### Relevant Configuration Files
- https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/saml.yml
- Local: https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/application.yml.example
- AWS: https://github.com/department-of-veterans-affairs/devops/tree/master/ansible/roles/platform-api/files
- Front-end: https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/js/common/helpers/environment.js

#### Local Development
All local development shares one config. 
- [x] Relying Party EntityID (`SAML_ISSUER` env variable): `saml-rp.vetsgov.localhost`
- [x] Callback URL: `http://localhost:3001/auth/login/callback`
- [x] Update API_URL in [vets-website repo](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/js/common/helpers/environment.js)

#### Dev
- [x] Key: `AWS_PROFILE=govcloud credstash get plat.dev.cert_private_key`  
- [x] [Certificate](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/roles/platform-api/files/dev/vets-api.crt)
- [x] Relying Party EntityID (`SAML_ISSUER` env variable): `saml-rp.vetsgov.dev`
- [x] Callback URL: `https://dev.vets.gov/auth/login/callback`
- [x] Update API_URL in [vets-website repo](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/js/common/helpers/environment.js)

#### Staging
- [x] Key: `AWS_PROFILE=govcloud credstash get plat.staging.cert_private_key`  
- [x] [Certificate](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/roles/platform-api/files/staging/vets-api.crt)
- [x] Relying Party EntityID (`SAML_ISSUER` env variable): `saml-rp.vetsgov.staging`
- [x] Callback URL: `https://staging.vets.gov/auth/login/callback`
- [x] email ID.me (tanel@id.me) to configure new RP (include: cert, entityID, and callback url)
- [x] Update API_URL in [vets-website repo](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/js/common/helpers/environment.js)

#### Production
- [x] Key/Certificate: Create a *signed* certificate using [these instructions](https://dsva.slack.com/files/ori_schwartz/F2DSFNCSZ/how_to_create_a_va_signed_ssl_certificate.md). Put the key in credstash: `AWS_PROFILE=govcloud credstash put plat.dev.cert_private_key` and the cert in the [ansible prod files directory](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/roles/platform-api/files/prod/vets-api.crt)
- [x] Relying Party EntityID (`SAML_ISSUER` env variable): `saml-rp.vetsgov.prod`
- [x] Callback URL: `https://www.vets.gov/auth/login/callback`
- [x] email ID.me (tanel@id.me) to configure new RP (include: cert, entityID, and callback url)
- [x] Update API_URL in [vets-website repo](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/js/common/helpers/environment.js)
