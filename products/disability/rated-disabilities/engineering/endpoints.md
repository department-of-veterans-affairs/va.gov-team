|                                                  PATH |                                           Backing service |                                               Details |
| ----------------------------------------------------: | --------------------------------------------------------: | ----------------------------------------------------- |
| `/v0/disability_compensation_form/rated_disabilities` | Lighthouse Veteran Service History and Eligibility + EVSS |                          [Link](#v0benefits_claimsid) |
|        `/v0/disability_compensation_form/rating_info` | Lighthouse Veteran Service History and Eligibility + EVSS |                            [Link](#v0benefits_claims) |
|                              `/v0/rated_disabilities` |        Lighthouse Veteran Service History and Eligibility |                [Link](#v0benefits_claimsidsubmit5103) |
|                `/v0/rated_disabilities_discrepancies` | Lighthouse Veteran Service History and Eligibility + EVSS |                     [Link](#v0evssidrequest_decision) |

## Endpoint details

#### `/v0/disability_compensation_form/rated_disabilities`
**HTTP method:** GET \
**Backing Service:** Lighthouse Veteran Service History and Eligibility + EVSS \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/2b7d0e7/app/controllers/v0/disability_compensation_forms_controller.rb#L18-L31)

This endpoint is used to retrieve a list of rated disabilities for the logged-in user. Whether it uses EVSS or Lighthouse is determined by a feature toggle


#### `/v0/disability_compensation_form/rating_info`
**HTTP method:** GET \
**Backing Service:** Lighthouse Veteran Service History and Eligibility + EVSS \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/2b7d0e7/app/controllers/v0/disability_compensation_forms_controller.rb#L85-L101)

This endpoint is used to retrieve the total combined disability rating for the logged-in user. Whether it uses EVSS or Lighthouse is determined by a feature toggle


#### `/v0/rated_disabilities`
**HTTP method:** GET \
**Backing Service:** Lighthouse Veteran Service History and Eligibility \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/2b7d0e7/app/controllers/v0/rated_disabilities_controller.rb#L10-L23)

This endpoint is used to retrieve the total combined disability rating + the rated disabilities for the logged in user


#### `/v0/rated_disabilities_discrepancies`
**HTTP method:** POST \
**Backing Service:** EVSS \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/2b7d0e7/app/controllers/v0/rated_disabilities_discrepancies_controller.rb#L14-L27)

This endpoint is used to determine if there are discrepancies between the number of rated disabilities that Lighthouse and EVSS return. Currently it only evaluates whether the number of items returned by each. It also applies logic to only retain disability ratings with certain `decision` values and to remove any inactive disability ratings. The FE has a feature toggle that is used to determine whether this endpoint is called or not. The goal is to be able to remove this controller entirely when the lighthouse migration is completed.
