# Mobile API Design Doc

**Author(s):** Jonathan Julian (CTO Support, Engineering), Alastair Dawson (CTO Support, Engineering)  
**Last Updated:** August 17, 2020  
**Status:** **Draft** | In Review | Approved  
**Approvers:** Andrew Gunsch, John Paul Ashenfelter, Michael Fleet, Johnny Holton  

## Overview

### Objective
The new flagship VA Mobile app contains functionality that is available on VA.gov, as well as some novel features. 
The app needs to be powered by an API providing authenticated Veteran data. This API should:

- Reuse backend integrations wherever possible
- Not add complexity to an already complex system
- Be able to be built and maintained without undue overhead
- Complement and even bolster adjacent projects such as VA.gov web and Lighthouse

This document is intended for engineers and engineering leadership alike.

### Background
In the winter/spring of 2020, a “VA Mobile App Discovery Sprint” was held to determine the feasibility of a flagship mobile app for the VA. It was immediately apparent that the authenticated Veteran experience would provide the most value, similar to the VA.gov experience. The goal of the mobile app is not to replicate every bit of VA.gov, but to provide a new mode of communication to allow Veterans to interact more easily with the department. Since VA.gov is powered by vets-api and VSP, it seemed like a natural fit for the mobile app to be powered by APIs in the same space.

### High Level Design
Since vets-api already contains integrations to backend services that the mobile app will need (such as MVI, Claims, Appointments), the mobile API will be built inside of the vets-api codebase, and exposed in the same way that VA.gov API endpoints are exposed.

The mobile API will provide functionality that is currently exclusive to VA.gov as well as some already-public functionality from Lighthouse, so existing integrations will be reused. A Rails engine will house the mobile API surface area, with necessary functionality connected as closely as possible to the backend integrations. In some cases, this may be a simple passthrough, while in other cases the mobile API will provide its own presentation layer on top of the integrations. This will allow the mobile API to grow independently of the rest of vets-api, while providing a consistent API that will be useful for future mobile applications to consume.

All endpoints will be versioned, so that long-lasting mobile releases will continue to function into the future. When modifications are required, changes will be made in a way to not break existing clients. The team is considering building a machine-readable discovery API endpoint to decouple the mobile app from hard-coded urls.

All mobile authorization will be confined to this Rails engine. The mobile app will require some new endpoints as well, and these will be built in the Rails engine for isolation. [A companion auth design doc has more details](https://github.com/department-of-veterans-affairs/va.gov-team/pull/12482).

## Specifics

### Detailed Design
The mobile endpoints need custom authentication, merged responses, and reduced payloads. With versioning this is possible in the core api albeit with a fractured experience. Mobile endpoints could be on v0, v1, or even v2. MVP mobile endpoints will be in flux, and parallel va.gov changes could cause versions to climb.

Mobile clients will only access endpoints under `/mobile`, even if they are effectively pass-through from the core API. Optimizations could find their way back to the core API but any changes there would not need to take the mobile app(s) into account.

As we have more discussions about the mobile app it’s becoming clear that it’s key difference from va.gov will be that it’s a distilled experience. e.g. You’re not going to fill out a multi page 526 form on the mobile app, but you will get updates as it moves through the system. This difference in how the data is consumed is why mobile apps would always use `/mobile`.

**Pros**:

- Web and mobile endpoints can serialize customized data for their views
- There will be mobile only endpoints, all the mobile endpoints will live in one place
- Easier to document the mobile API as separate entity
- Less version creep, each client manages breaking changes independently
- More consistent in the core API (versions naturally evolve, a v1 mobile endpoint doesn’t live between web’s v0 and v2)
- Easier to move the mobile API out of vets-api completely should the need arise

**Cons**:

- Although routes and controllers will be unique, services will be shared and must not break wither contract.
- More tests! Vets-api takes a while to run its test suite, will be more than if they shared endpoints.
- There’s now three entry points to the API core, lighthouse, and mobile

#### Application Controller

Authentication for the mobile app is via IAM's SSOe OAuth service. It is 100% API based and does not use callbacks or cookies. The mobile `ApplicationController` would extend the core `ApplicationController` and override its authentication methods.

Enabling the mobile API will expose some tech debt in the `ApplicationController` that is not a requirement to fix; but it would clean up things for all its sub-classes. The logic in the core `ApplicationController` that does not apply globally could move to concerns be and 
included as needed. e.g. `render_job_id` only applies to the `DocumentsController` and the `EVSSClaimsController`. 

#### Routing

The mobile engine's endpoints mount at `/mobile`:

```ruby
mount Mobile::Engine, at: '/mobile'
```

Rails does not have a way to proxy requests other than redirects (301s). Routes that are similar to the core API will re-use core services but implement their own controller logic.

#### Request/response differences

How requests and responses function within the mobile module will be isolated from the core API. However, there are improvements that could be ported back and it would be good to get consensus on an approach. The plan is for views, such as user profile, that currently over-fetch or over-deliver, should implement fieldsets and includes in REST url params so no extra data is returned. JSON-API defines sparse [fieldsets](https://jsonapi.org/format/#fetching-sparse-fieldsets) and [includes](https://jsonapi.org/format/#fetching-includes) which can be implemented with custom code or through gems such as [JSON-API Resources](https://jsonapi-resources.com/) or [Graphiti](https://www.graphiti.dev/guides/).

#### Discovery endpoint and versioning

Because mobile apps are less frequently updated (if at all for some users) we will provide a discovery endpoint which accepts an app version and returns a directory of routes. Similar to how [Github’s](https://api.github.com/) does. It could also help in a shared scenario mapping routes for both web and mobile. Assuming web wants a discovery API and the added complexity of looking up its routes.

##### Deprecation

We don’t imagine setting a hard line when an app version becomes unsupported, but as time goes on I’m sure we’ll notice trends. For example, if we are on 2.1.0, and there is a burden to retaining the 1.0.0 functionality in one or more of our /mobile endpoints, then we can choose a sunset date for 1.0.0 depending on the user base and activity of that version’s cohorts. Although React Native (using Expo) allows for over-the-air code updates, we have no plans to use that feature. However, the discovery endpoint can be used to inform an app user that their experience will be diminished and they should attempt to upgrade to 1.1.0.


### Code Location
The code will live in a 'mobile' directory within the [modules](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules) directory within vets-api.

### Testing Plan
To ensure changes to shared backend services will not break code, tests will be written to assert the mobile API requirements. Any breaking changes to upstream services will fail our tests.

### Logging
We plan to adhere to all VSP standards for logging.

### Debugging
TBD

### Caveats
TBD

### Security Concerns
#### Potential threats

##### SSOe introspect DoS
Adding more surface area to the API does enable new possibilities for denial-of-service attacks. We plan on making a call to SSOe (introspect) with every vets-api session cache miss, to validate the access token and establish a session. An attacker could DoS the introspect endpoint by passing multiple requests all with invalid access tokens.

Remediation could include caching each “miss” for a period of time, protecting the introspect endpoint.

##### CSRF for API POST requests
We know we can disable CSRF checking on the server-side for the mobile POST routes, but that seems unwise. We will research best practices for this that do not include turning off the CSRF checking.


### Privacy Concerns
TBD

### Open Questions and Risks
TBD

### Work Estimates
N/A

### Alternatives
#### Alternative to building in vets-api
##### Build Mobile API entirely outside of vets-api
Benefits to our team would include autonomy and speed of development, but have some major drawbacks:
- Lack of reuse - back-end integrations will need to be re-established
- High LOE when it comes to deployment
- The work could not be be easily reused by VA.gov

##### Build Mobile API as a proxy in front of vets-api
Benefits to our team include a degree of autonomy, improved speed of development, but have some definite drawbacks:
- High LOE when it comes to deployment, although the future VSP container-managed deployment could mitigate this
- The work could not be be easily reused by VA.gov

#### Versioned endpoints
We considered having versioned endpoints in the core API be mobile specific. The discovery endpoint would then let the web client or the mobile app know which routes to use. This was not chosen to avoid having mobile versions that are dractiscally different from the web client's (v0 has 20 fields, v1 has only 5 for mobile, v2 which is the web's updated endpoint then has 25 fields). 


### Future Work
Future work could be using GraphQL to allow web and mobile clients get custom responses from the same endpoint. If speed and response payload size for mobile need to be optimzed gRPC could provide up to 5x smaller payloads.

### Revision History

Date | Revisions Made | Author
-----|----------------|--------
Aug 10, 2020 | Initial draft | Jonathan Julian
Aug 17th, 2020 | Add detailed design section | Alastair Dawson
Sep 1st, 2020 | Add PR responses | Alastair Dawson
