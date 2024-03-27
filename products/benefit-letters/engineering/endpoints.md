|                                PATH |                     Backing service |                                 Details |
| ----------------------------------: | ----------------------------------: | --------------------------------------- |
|             `/v0/letters_generator` |        Lighthouse Letters Generator |            [Link](#v0letters_generator) |
| `/v0/letters_generator/beneficiary` |        Lighthouse Letters Generator | [Link](#v0letters_generatorbeneficiary) |
|    `/v0/letters_generator/download` |        Lighthouse Letters Generator |    [Link](#v0letters_generatordownload) |
|                       `/v0/letters` |                                EVSS |                      [Link](#v0letters) |
|           `/v0/letters/beneficiary` |                                EVSS |           [Link](#v0lettersbeneficiary) |
|          `/v0/letters/:letter_type` |                                EVSS |           [Link](#v0lettersletter_type) |
|         `/v0/letters_discrepancies` | Lighthouse Letters Generator + EVSS |        [Link](#v0letters_discrepancies) |

## Endpoint details

#### `/v0/letters_generator`
**HTTP method:** GET \
**Backing Service:** Lighthouse Letters Generator \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/ffb5e23/app/controllers/v0/letters_generator_controller.rb#L30-L33)

This endpoint is used to retrieve a list of eligible letter types for the logged-in user.


#### `/v0/letters_generator/beneficiary`
**HTTP method:** GET \
**Backing Service:** Lighthouse Letters Generator \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/ffb5e23/app/controllers/v0/letters_generator_controller.rb#L72-75)

This endpoint is used to retrieve the beneficiary information for the logged-in user.


#### `/v0/letters_generator/download`
**HTTP method:** GET \
**Backing Service:** Lighthouse Letters Generator \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/ffb5e23/app/controllers/v0/letters_generator_controller.rb#L35-L70)

This endpoint is used to download a specific letter type from the eligible letter types for the logged-in user.


#### `/v0/letters`
**HTTP method:** GET \
**Backing Service:** EVSS \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/ffb5e23/app/controllers/v0/letters_controller.rb#L12-L16)

This endpoint is used to retrieve a list of eligible letter types for the logged-in user. This is the EVSS version of the `/v0/letters_generator` endpoint


#### `/v0/letters/beneficiary`
**HTTP method:** GET \
**Backing Service:** EVSS \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/ffb5e23/app/controllers/v0/letters_controller.rb#L31-L35)
This endpoint is used to retrieve the beneficiary information for the logged-in user. This is the EVSS version of the `/v0/letters_generator/beneficiary` endpoint


#### `/v0/letters/:letter_type`
**HTTP method:** POST \
**Backing Service:** EVSS \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/ffb5e23/app/controllers/v0/letters_controller.rb#L18-L29)
This endpoint is used to download a specific letter type from the eligible letter types for the logged-in user. This is the EVSS version of the `/v0/letters_generator/download` endpoint


#### `/v0/letters_discrepancies`
**HTTP method:** GET \
**Backing Service:** Lighthouse Letters Generator + EVSS \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/ffb5e23/app/controllers/v0/letters_discrepancy_controller.rb#L22-L50)
This endpoint is used to determine if the are discrepancies between the list of eligible letters returned by Lighthouse and EVSS. Whether this endpoint is called or not is determined by a feature toggle on the front end.
