# Find a Form engineering README

## Architecture

High level: 
* **Forms DB** is the single source of truth for Form PDFs and Forms metadata. [Forms DB Contacts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-a-va-form#va-forms-contacts)
* Forms data (including URLs to PDF files) is migrated nightly from the Forms DB to Drupal CMS, into the VA Forms content type, via Drupal migration.
* VA Forms API in Lighthouse then pulls Forms data from the Drupal CMS nightly, via sidekiq job.
  * `https://api.va.gov/services/va_forms/v0/forms`: Owned by Lighthouse
* [VA.gov Find a Form](https://www.va.gov/find-forms/) makes calls through vets-api to pull form data from the Lighthouse Forms API.
  * `https://api.va.gov/v0/forms`: Public Websites-owned vets-api proxy to the https://api.va.gov/services/va_forms/v0/forms endpoint
* VA.gov Form Detail pages (e.g. https://www.va.gov/find-forms/?q=21-0966) display data housed in Drupal CMS.

### Ownership
**Forms DB** [Contacts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-a-va-form#va-forms-contacts)
* Forms DB infrastructure is owned by Office of Information Technology (OIT).
* Forms DB content is owned by Forms Managers from each VA administration.
* Form PDFs are stored on servers managed by OIT. Form downloads from VA.gov point to PDFs on OIT servers.

**[Public Websites team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/README.md#team)** is responsible for:  
* VA Forms content model in Drupal
* Data migration from Forms DB to Drupal
* Drupal CMS editorial experience
* Display of Forms data in VA.gov, specifically Find a Form & Form Detail pages.
* Vets-api endpoint `https://api.va.gov/v0/forms` and triaging related issues.

## Forms DB migration into Drupal CMS: Data Flow & Documentation
[Migrations: Forms](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/master/READMES/migrations-forms.md) - describes the data path from the Forms DB > Drupal CMS > Lighthouse > Front-end. 

[Relationship Between VA Forms DB/Lighthouse API/Drupal](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5702) - 2/2020 Discovery re: Forms architecture and ata storage decision points. 

## End-to-End Flow to LH Forms API
The path for data calls from `Veteran > VA.gov > vets-api > Lighthouse > delivery to Veteran` is circuitous at best. Much infrastructure is implicated.  

9/2023 - Info provided from Lighthouse team in [Slack thread](https://dsva.slack.com/archives/CBU0KDSB1/p1695326998602989?thread_ts=1695043056.784489&cid=CBU0KDSB1)

![image (30)](https://github.com/department-of-veterans-affairs/va.gov-team/assets/85581471/5c362f5f-361c-4afa-8f49-faa86415a32b)


## Vets-api / Lighthouse Key & rate limits
* Vets-api: VA Forms Code: [vets-api/modules/va_forms](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/va_forms)
* VA Forms API Documentation: https://developer.va.gov/explore/api/va-forms - Documentation for API that indexes data sourced from VA.gov, Lighthouse

### **API user/key:**
Find Forms uses an API key that belongs to the **`VAGOV` consumer**. This key is used when routing through vets-api to get Lighthouse data. 

**As of 9/2023**: The `VAGOV` consumer has a single API key & rate limit used for all of the following APIs: 
* Decision Reviews API (V1/V2)
* VA Forms API (V0)
* Appeals Status API (V0)
* Benefits Reference Data API
* Address Validation API

**This API key is shared** [Background on shared API keys (Slack)](https://dsva.slack.com/archives/CUB5X5MGF/p1695666665300929) The rate limit for this API Key is shared across all of those APIs. If one API has a spike in traffic, that will affect the rate limit for all other APIs using the same key. 

### **Rate limits**
Rate limits are applied _**per consumer**_ to _**all APIs**_ accessed by that consumer.
As of 9/23, the API rate limit is **1,000 requests/min.** (The 1,000 requests/min. rate limit applies to the collective traffic across all APIS accessed by the consumer/key.)

If/when we request rate limit changes, that rate limit will be set for all APIs accessed by the `VAGOV` API consumer (listed above), even if products are using different API keys. And, other products' rate limit requests may affect the Forms product.

More info on [rate limit changes (Github)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/engineering/troubleshooting.md#request-api-limit-increase).

### Error messages
When API hits a rate limit, an error message will be displayed to end users, "We're sorry. Something went wrong when we tried to load the search widget." That message originates from Drupal in a React widget on the Find-Form node:
https://staging.cms.va.gov/node/2352/edit
https://staging.cms.va.gov/find-forms


## VA.gov Find-Form / Form Detail Page Content architecture & build
* Find Forms: Content Flow Diagram (2020): [Whimiscal VA Forms - content flow](https://whimsical.com/va-forms-content-flow-UpSBvigLWBK72p8ajG8v3a)
* Form Detail Page Content Architecture Diagram (2020): [Whimsical diagram - form detail page content architecture](https://whimsical.com/forms-detail-page-content-architecture-Bn5zRk2PDzuSjpu1d5q4Pu)
