# Facility Pages

Facility pages encompass Vet Centers, VAMC Systems and Facilities, VBA, etc., or all facility pages that are generated on content-build from drupal data. 
These pages are changed by editors at different levels, but the resulting content is processed by content-build or next-build. 

## Testing
Testing of these pages is difficult, due to the potentially changing nature of the data. From one day to the next, a facility may be closed and inaccessible, 
and should that happen, testing that may include that site is complicated.

## Alerting and Monitoring
* VAMC Monitoring information: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/engineering/monitoring.md
* Vet Center monitoring information: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/vet-centers/engineering/monitoring.md
* Facility Locator monitoring: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/monitoring.md

## Product technical documentation
If a specific product has its own Lighthouse integration, notes are stored in the Product-specific engineering docs: 
* [Facility Locator](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/engineering)
* [VAMCs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/medical-centers/engineering)
* [Vet Centers](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/vet-centers/engineering)
* [Regional Offices](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/regional-offices/engineering)


## Vets-api / Lighthouse Key & rate limits
Products that are Drupal-driven may interact with the Lighthouse API as well. 

* Vets-api: Facilities API Code: https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/facilities_api
* Lighthouse Facilities API Documentation: https://developer.va.gov/explore/api/va-facilities - Documentation for API that indexes data sourced from VA.gov, Lighthouse

### **API user/key:**
The Facility Locator has its own API consumer & key used for GET requests. (Documented at FL link above.)

Other Facilities products share the same Lighthouse API consumer:
API consumer: `FacilitiesDrupalCMS`

This API consumer is primarily used to POST data to Lighthouse, for cases where the CMS is the source of truth (e.g. Mental health phone numbers, health services data)

**This API key is shared** 
Right now this API key only accesses the Facilities API. But within Lighthouse, the rate limit for API Keys is shared across all accessed APIs. If this key were used to access multiple APIs, traffic spikes will affect the rate limit for all other APIs using the same key. 
[Background on shared API keys (Slack)](https://dsva.slack.com/archives/CUB5X5MGF/p1695666665300929), originally related to the Forms product.

### **Rate limits**
Rate limits are applied _**per consumer**_ to _**all APIs**_ accessed by that consumer.
The API rate limit is **2,000 requests/min.** (The 2,000 requests/min. rate limit applies to the collective traffic across all APIs accessed by the consumer/key.)

If/when we request rate limit changes, that rate limit will be set for all APIs accessed by the `FacilitiesDrupalCMS` API consumer, even if products are using different API keys. 

More info on [rate limit changes (Github)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/engineering/troubleshooting.md#request-api-limit-increase).

More info on Facilities API consumer(s): https://dsva.slack.com/archives/C02BTJTDFTN/p1712611808581129
