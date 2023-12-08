---- 


# We've moved our docs!

### This document is no longer maintained.

### Please visit the [Platform website](https://depo-platform-documentation.scrollhelp.site/) for the latest information or contact the Platform Support Team via [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1).


----
# Vets-API Endpoint Punch List

Once the external service has been integrated:

### Service Object

- [ ] Service class
- [ ] Config class & Faraday connection
- [ ] Breakers initializer
- [ ] Response class
- [ ] `settings.yml`

### Controller, Route & Serializer

- [ ] Controller action
- [ ] Route
- [ ] Serializer

### Frontend Signoff

- [ ] Agreement on API schema

### Swagger Docs

- [ ] `app/swagger/request/*`
- [ ] `app/swagger/schema/*`
- [ ] `app/controllers/v0/apidocs_controller.rb`

### Betamocks

- [ ] Config - `vets-api/config/betamocks/services_config.yml`
- [ ] Create recording file
- [ ] Update `vets-api-mockdata/make_table.rb`
- [ ] Update `vets-api-mockdata/users.csv` if applicable
- [ ] Config - `vets-api/config/settings.yml`

### Spec Coverage

- [ ] Service object specs
- [ ] Request specs (including `swagger_spec.rb`)
- [ ] VCR cassettes
- [ ] Response schema

### Deployment

- [ ] Config set in `devops/ansible/deployment/config/vets-api/dev-settings.local.yml.j2`
- [ ] Config set in `devops/ansible/deployment/config/vets-api/staging-settings.local.yml.j2`
- [ ] Config set in `devops/ansible/deployment/config/vets-api/prod-settings.local.yml.j2`
- [ ] Config set in `devops/ansible/roles/review-instance-configure/templates/settings.local.yml`

## Source

- Stems from the [Endpoint Punch List Presentation](https://hackmd.io/p/r1Mn_TqYG#/)
- [Source file](https://hackmd.io/s/r1Mn_TqYG) for the presentation
