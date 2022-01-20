# Vets API EVSS API Endpoints (`vets-api/lib/evss/)

## EVSS settings

```yaml
# `vets-api/config/settings.yml`
# Settings for EVSS
evss: # ln# 285
  prefill: true
  url: https://csraciapp6.evss.srarad.com
  service_name: "wss-form526-services-web"
  alternate_service_name: "wss-form526-services-web-v2"
```

## Services

### dependents

| HTTP Verb | Path | Location | Method |
| --- | --- | --- | --- |
| n/a | `https://csraciapp6.evss.srarad.com/wss-686-services-web-2.6/rest/` | configuration.rb | base_path |
| GET | `load/retrieve`                                   | service.rb | retrieve |
| POST | `inflightform/cleanForm`                         | service.rb | clean_form(form) |
| POST | `inflightform/validateForm`                      | service.rb | validate(form) |
| POST | `inflightform/saveForm`                          | service.rb | save(form) |
| POST | `form686submission/submit`                       | service.rb | submit(form, form_id) |

- `"#{Settings.evss.url}/wss-686-services-web-2.6/rest/"` # base path
- `GET 'load/retrieve'`                                   # retrieve
- `POST 'inflightform/cleanForm'`                         # clean_form(form)
- `POST 'inflightform/validateForm'`                      # validate(form)
- `POST inflightform/saveForm'`                           # save(form)
- `POST 'form686submission/submit'`                       # submit(form, form_id)

### disability_compensation_form

- `"#{Settings.evss.url}/#{Settings.evss.alternate_service_name}/rest/form526/v2"` # base path
- `POST 'submit'`                                                                  # submit_form526(form_content)
- `POST 'validate'`                                                                # validate_form526(form_content)

### gi_bill_status

- `"#{Settings.evss.url}/wss-education-services-web/rest/education/chapter33/v1"` # base path
- `GET ''`                                                                        # get_gi_bill_status

### intent_to_file

- `"#{Settings.evss.url}/wss-intenttofile-services-web/rest/intenttofile/v1"` # base path
- `GET ''`                                                                    # get_intent_to_file
- `GET "#{itf_type}/active"`                                                  # get_active(itf_type)
- `POST itf_type.to_s`                                                        # create_intent_to_file(itf_type)

### letters

- `"#{Settings.evss.letters.url}/wss-lettergenerator-services-web/rest/letters/v1"` # base path
- `GET ''`                                                                          # get_letters
- `GET 'letterBeneficiary'`                                                         # get_letter_beneficiary

### pciu

- `"#{Settings.evss.url}/wss-pciu-services-web/rest/pciuServices/v1"` # base path
- `POST 'secondaryPhoneNumber'`                                       # post_alternate_phone
- `POST 'emailAddress'`                                               # post_email_address

### pciu_address

- `"#{Settings.evss.url}/wss-pciu-services-web/rest/pciuServices/v1"` # base path
- `GET 'counties`                                                     # get_countries
- `GET 'states'`                                                      # get_states
- `GET 'mailingAddress'`                                              # get_address
- `POST 'mailingAddress'`                                             # update_address

### ppiu

- `"#{Settings.evss.url}/wss-ppiu-services-web/rest/ppiuServices/v1"` # base path
- `GET 'paymentInformation'`                                          # get_payment_information
- `POST 'paymentInformation'`                                         # update_payment_information

### reference_data

- `"#{Settings.evss.url}/wss-referencedata-services-web/rest/referencedata/v1"` # base path
- `GET 'countries'`                                                             # get_countries
- `GET 'states'`                                                                # get_states
- `GET 'intakesites'`                                                           # get_separation_locations 

### vso_search

- `"#{Settings.evss.url}/wss-common-services-web-#{API_VERSION}/rest/vsoSearch/#{API_VERSION}/"` # base path
- `POST 'getCurrentInfo'`                                                                        # get_current_info