# File Upload Disccovery: Existing Approaches

There are a few different ways to upload a file in vets-api, and multiple places where this functionality is used.

## Approaches
### CarrierWave Uploaders
CarrierWave Uploaders define how the files are stored and uploaded. CarrierWave abstracts a lot of the connection logic. See the list of [vets-api CarrierWave uploaders here](https://github.com/department-of-veterans-affairs/vets-api/tree/master/app/uploaders).

Pros:
* Simple to set up and use
* Allows for easy S3 integration

Cons:
* Not good at forwarding to arbitrary APIs
* Relies on server or S3 storage, which means we have to think about PII retention

### Faraday::Multipart
[Faraday::Multipart](https://github.com/lostisland/faraday-multipart) is a Faraday middleware that allows streaming uploads. This approach is infrequently used in vets-api:

* https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/decision_reviews/lib/decision_reviews/v1/configuration.rb
* https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/meb_api/lib/dgi/toe/configuration.rb
* https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/meb_api/lib/dgi/letters/configuration.rb
* https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/meb_api/lib/dgi/forms/configuration/letter_configuration.rb
* https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/meb_api/lib/dgi/fry_dea/configuration.rb

Pros:
* Middleware already included in the Gemfile
* Allows direct streaming to backing APIs, which means we don't necessarily have to think about PII retention

Cons:
* More complicated setup
* Less straightforward to also use S3

## Recommendation

We'll need to at least use the Faraday::Mutlipart middleware to ultimately get the file to the Travel Pay API, but we recommend using CarrierWave as well for the initial upload. The benefits of this are:

* Gives us some fault-tolerance in the form of retries, etc.
* Allows us to be flexible in our approach (e.g. async or sync)
* Allows us to lean into an established pattern on vets-api

## Approach

* [Infrastructure/Architecture](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/engineering/complex_claims/uploads/c4)
* [Sequence diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/engineering/complex_claims/uploads/sequence_diagrams.md)
