|                                PATH |                     Backing service |                                                   Details |
| ----------------------------------: | ----------------------------------: | --------------------------------------------------------- |
|             `/v0/letters_generator` |        Lighthouse Letters Generator | [Link](#v0disability_compensation_formrated_disabilities) |
| `/v0/letters_generator/beneficiary` |        Lighthouse Letters Generator |        [Link](#v0disability_compensation_formrating_info) |
|    `/v0/letters_generator/download` |        Lighthouse Letters Generator |                             [Link](#v0rated_disabilities) |
|                       `/v0/letters` |                                EVSS |                             [Link](#v0rated_disabilities) |
|           `/v0/letters/beneficiary` |                                EVSS |                             [Link](#v0rated_disabilities) |
|          `/v0/letters/:letter_type` |                                EVSS |                             [Link](#v0rated_disabilities) |
|         `/v0/letters_discrepancies` | Lighthouse Letters Generator + EVSS |               [Link](#v0rated_disabilities_discrepancies) |

## Endpoint details

#### `/v0/letters_generator`
**HTTP method:** GET \
**Backing Service:** Lighthouse Letters Generator \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/2b7d0e7/app/controllers/v0/disability_compensation_forms_controller.rb#L18-L31)

This endpoint is used to retrieve a list of eligible letter types for the logged-in user.


#### `/v0/letters_generator/beneficiary`
**HTTP method:** GET \
**Backing Service:** Lighthouse Letters Generator \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/2b7d0e7/app/controllers/v0/disability_compensation_forms_controller.rb#L85-L101)

This endpoint is used to retrieve the beneficiary information for the logged-in user.


#### `/v0/letters_generator/download`
**HTTP method:** GET \
**Backing Service:** Lighthouse Letters Generator \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/2b7d0e7/app/controllers/v0/rated_disabilities_controller.rb#L10-L23)

This endpoint is used to download a specific letter type from the eligible letter types for the logged-in user.


#### `/v0/letters`
**HTTP method:** GET \
**Backing Service:** EVSS \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/2b7d0e7/app/controllers/v0/rated_disabilities_discrepancies_controller.rb#L14-L27)

This endpoint is used to retrieve a list of eligible letter types for the logged-in user. This is the EVSS version of the `/v0/letters_generator` endpoint


#### `/v0/letters/beneficiary`
**HTTP method:** GET \
**Backing Service:** EVSS \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/2b7d0e7/app/controllers/v0/rated_disabilities_discrepancies_controller.rb#L14-L27)
This endpoint is used to retrieve the beneficiary information for the logged-in user. This is the EVSS version of the `/v0/letters_generator/beneficiary` endpoint


#### `/v0/letters/:letter_type`
**HTTP method:** POST \
**Backing Service:** EVSS \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/2b7d0e7/app/controllers/v0/rated_disabilities_discrepancies_controller.rb#L14-L27)
This endpoint is used to download a specific letter type from the eligible letter types for the logged-in user. This is the EVSS version of the `/v0/letters_generator/download` endpoint


#### `/v0/letters_discrepancies`
**HTTP method:** GET \
**Backing Service:** Lighthouse Letters Generator + EVSS \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/2b7d0e7/app/controllers/v0/rated_disabilities_discrepancies_controller.rb#L14-L27)
This endpoint is used to determine if the are discrepancies between the list of eligible letters returned by Lighthouse and EVSS. Whether this endpoint is called or not is determined by a feature toggle on the front end.
