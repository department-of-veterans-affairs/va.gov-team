## Background

The AP team met with technical & delivery representatives from the Lighthouse team on May 20, 2021.
This meeting was held to determine the technical & practical feasibility of exposing Drupal's content API via [Lighthouse](https://developer.va.gov/).

This effort was tracked in CMS issue [#5148](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5148) and a recording is available [here](https://dsva.slack.com/archives/C021UM3QTCY/p1621533672015400?thread_ts=1621354381.005100&cid=C021UM3QTCY).

## Q & A 
*   Will lighthouse transparently proxy requests? 
    *   Yes. (most of the existing APIs are pass-throughs)
*   Does Drupal JSON:API provide multiple endpoints? 
    *   Yes, every content type receives its own, unique URL path ([ref](https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/api-overview))
*   Is JSON:API easier to integrate with Lighthouse than GraphQL? 
    *   Lighthouse does not support GraphQL and are unsure about JSON:API, but they do support RESTful APIs with [HAL](https://en.wikipedia.org/wiki/Hypertext_Application_Language). (asked about JSON:API in [this thread](https://dsva.slack.com/archives/C021UM3QTCY/p1622657069035800))
    *   As of now, Lighthouse requires an [OpenAPIv3 specification](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md).
*   How does passthrough work in Lighthouse context/mapping?	e.g. [http://api.va.gov/cms/v1/](http://api.va.gov/cms/v1/)
    *   There are no transformations just pass through so likely just need to rewrite the request to the correct CMS endpoint(s)
*   Does Lighthouse provide caching or do we need to implement that?
    *   No. We would need to provide our own caching solution. (e.g. [Varnish](https://varnish-cache.org/intro/))
*   How does Lighthouse work in the context of API version control?
    *   API version control is the application's responsibility
*   What sort of API rate limiting would be appropriate?
    *   Lighthouse team will help with monitoring and API rate limiting. This is done in code with pull requests, not configuration changes with a UI ([example rate limit commit](https://github.com/department-of-veterans-affairs/lighthouse-platform-tools/commit/07ad26de1f874f80e2184f90ccdb92c66d6ee6a8))
*   How much Drupal infrastructure scaling would be needed to handle that?
    *   This is the application's responsibility
*   How do API keys work in a client side application?
    *   An API key is required, however it's okay if it is exposed publicly (e.g. in a [SPA](https://en.wikipedia.org/wiki/Single-page_application)'s config)
*   What is the current API gateway software in use?
    *   [Kong API Gateway](https://github.com/Kong/kong), open source version. May be moving to [Apigee](https://cloud.google.com/apigee/) but nothing concrete yet, only initial intent
    *   Might be able to get on the new shiny TIC 3.0 and point directly at Apigee. TIC 3.0 has the feature that it directly connects to the cloud or is already inside it?
    *   [https://www.cisa.gov/trusted-internet-connections](https://www.cisa.gov/trusted-internet-connections) 
    *   [https://dsva.slack.com/archives/C021UM3QTCY/p1621616832022900](https://dsva.slack.com/archives/C021UM3QTCY/p1621616832022900) 
*   Can Lighthouse be configured to only allow certain HTTP Methods so that we can reduce our security attack surface? e.g. allow GET only, block POST ...
    *   [Yes](https://dsva.slack.com/archives/C021UM3QTCY/p1621624998028400?thread_ts=1621614999.016700&cid=C021UM3QTCY)
        *   Sample configuration: [https://github.com/department-of-veterans-affairs/lighthouse-platform-tools/blob/main/environments/prod/config/vets-api.yaml#L29](https://github.com/department-of-veterans-affairs/lighthouse-platform-tools/blob/main/environments/prod/config/vets-api.yaml#L29) 
*   Is api.va.gov in front or behind the [TIC](https://www.cisa.gov/trusted-internet-connections)?
    *   Behind the TIC, and is subject to packet inspection and blocks because of that. 
    *   A front-end monitoring solution will be required to report on:
        *   timeouts (if the request doesn’t receive a response)
        *   unexpected response codes (need to determine what those are or what behavior the TIC exhibits on rule triggering)
*   Where is the source code for Lighthouse?
    *   [lighthouse-platform-tools](https://github.com/department-of-veterans-affairs/lighthouse-platform-tools)
*   Where are the current API docs?
    *   [https://developer.va.gov/explore](https://developer.va.gov/explore) 
    *   [https://github.com/department-of-veterans-affairs/developer-portal](https://github.com/department-of-veterans-affairs/developer-portal) 

## Conclusion

It is possible to expose Drupal Content API endpoints to the public via the Lighthouse API gateway.
Additionally, those endpoints may be queried by e.g. a React single-page application, (or applications) since API keys are not required to be kept secret.
Using this approach to serve public content in real time would require:
- Creating and implementing an OpenAPI specification
- Implementation of a HAL-compliant RESTful API as specified
- Drupal application infrastructure upgrades to allow for scalability and high availability.

Additional effort would be required to discover & implement a front-end monitoring solution allowing discovery and resolution of any availability issues introduced by the TIC.

## Steps to create a sandbox:

High level: https://developer.va.gov/api-publishing

1. Create/Update [OpenAPI sec](https://developer.va.gov/api-publishing/expectations)
2. Submit to Lighthosue team

### Notes about the API creation process

* Conversation regarind OpenAPI usage in Lighthouse: https://dsva.slack.com/archives/C021UM3QTCY/p1631539815009500
  * OpenAPI spec is delivered to the Lighthosue team for uploading.  There is not a self servcie.
  * Weekly updates to the Spec is to often.
  * Lighthouse does not validate the request based upon the OpenAPI spec.
  * We can have a "undocumented API" until we can get the spec published.  This will probably be ok as we can time the API with public release of the front end apps.
