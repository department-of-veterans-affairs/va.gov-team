# Mobile Filtering

**Author(s):** Kris Pethtel, Andrew Herzberg
**Last Updated:** September 6, 2022
**Status:** **Draft**
**Approvers:** FE, BE

## Overview

The vets-api has a filter system built in to model collections that allows clients to send query params specifying which records they want to include in the response. For example, a user can add a param like, `filter[refillStatus][eq]=refillinprocess` to indicate that they only want prescriptions where refill_status equals refillinprocess. This is relatively easy to use on the back end, but it has a few flaws.

Most notably, it requires that any filterable attributes be whitelisted in the model along with any operations that are permitted on that attribute. This is compounded by the fact that some of the models we use are defined outside of the mobile module, meaning that changing them requires outside approval.

The filtering code itself has some shortcomings as well, such as poor handling of cases where the client wants to fetch records where an attribute is one of multiple values, and we can't easily change the filtering logic because that would impact other teams who use it.

We would like to give the mobile client the ability to filter by any attributes on the model without adding explicit handling within the model. We only want to allow filtering on top-level attributes. In other words, if a client wants to filter appointments based on location street address, that would not be allowed because location street address is not top-level.

Because we don't want to whitelist valid operations per attribute on the model, it's possible that some queries will not be possible or will not yield desireable results. For example, requests for equality on a hash object would not make sense because we do not intend to allow such complex operations. Such a request should result in a 422 response. The filters will need robust error handling and logging for cases that either don't make sense or yield errors.

## How to Transmit Filter Options

### Query Params
#### Example
```/v0/health/rx/prescriptions?filter[refill_status][eq]=refillinprocess```

#### Pros
  - This is how the existing filtering works, allowing for backwards compatibility.
  - No versioning of endpoints required.
  - We know it works and doesn't yield any big surprises.
  - Vets-api currently implementation of this uses query params so some logic could be borrowed from this.
  - Sticks with convention of other mobile endpoints.

#### Cons
  - Longer, hard to read urls for requests with multiple filter parameters. URL length limits depend on browswers and webservers. Browswers are not relevant for our purposes, and popular webservers like nginx and apache support at least 4000 characters. Encoding special characters used in the filter query params will use some of that space, but it's unlikely that the 4000 character limit will be a problem.
  - Cannot easily support complex filtering requirements. Some operations could be created for more complex data types, such as arrays and hashes, but even simple equality operators could become problematically complex for non-primitive data types.

#### Overview
The support of complex filtering requirements listed in the cons is not a requirement of this feature, nor does it seem practical for it to become a requirement for these endpoints in the future. Harder to read URLs is not a significant concern. Long and complex urls are widely used in the modern web and will not be visible to mobile users. Unless we anticipate very complex queries, length should not be a concern.

On a side note, there is also an uncommonly used HTTP QUERY method that is exactly what we're looking for. It's essentially a GET with a body. However, as far as I can tell, it is not supported by rails.

### GET with Payload Body
#### Pros
  - Allows for more robust filtering logic
  - Keeps the url parameters from getting too long and hard to read
  - Backwards compatible.
  - No versioning of endpoints required.

#### Cons
  - Breaks REST/HTTP specs. While GET technically allows to have a payload body, it is not supposed to have any semantic effect on the request itself, that would not be true in this case.

#### Overview
Breaking REST/HTTP spec is too dangerous and may have too many unintended consquences to implement, and the additional flexibility it offers is not a current or expected requirement.

### POST with Payload
#### Pros
  - Allows for more robust filtering logic
  - Keeps the url parameters from getting too long and hard to read

#### Cons
  - Would require new endpoint for each Index action. This should not be a significant problem because the new endpoint can point to the same method as the existing GET endpoint.
  - Take the most time to implement and integerate into FE.

#### Overview
Given that support of complex filtering requirements listed in the cons is not a requirement of this feature, nor does it seem practical for it become a requirement for these endpoints in the future, it does not seem worth it to take the extra time to implement this.

### Conclusion
We recommend using query params to transmit filter options.

While it does not allow for the most robust filtering functionality, the extra work and maintience required to implement POST with Payload is not worth it when we do not foresee the more complex filtering logic enabled by using a POST with payload to ever be necessary for future endpoints. Even if these complex filtering requirements did ever become necessary for an endpoint, there are easy one time solutions that can be implemented that would not require a re-write of this filtering logic. For example, if a endpoint needed a complex filter grouping, such as ((Exp1 AND Exp2) OR (Exp3 OR Exp4)), we could extract this logic into new boolean field that could be filtered on or develop a method of doing that via query params, such as using groups. For example, we could do something like: ```filter[group1][refill_status][eq]=refillinprocess&filter[group2][prescription_name][eq]=ibuprofen```. That's a simplified example, but the important point is that once the filtering code belongs to entirely to the mobile team, we will have the freedom to determine how it operates.

Our second preference would be POST with body. The logic behind using POST without creating a new record is that you're creating a "search object". This is counter-intuitive and feels a bit like mental gymnastics, but it is not uncommon. However, unless we intend to implement more complex functionality, like object matching or very long filter lists, it doesn't seem to have any advantages over query params.

Additionally, it would be wise to discuss these decisions with the front end team to get their opinions. They may have better ideas of what types of queries they want to make and what limitations seem reasonable. They may also have opinions on the additional effort involved in switching over to POSTS with bodies.

## Implementation Options

### Library
#### Pros
  - Maintainability. Minimal code changes to existing code.
  - Has zero impact on other teams.
  - Simplicity. No magic, no gotchas.

#### Cons
 - Requires changes to each controller. This is true of all

### Model Mixin
#### Pros
  - Some might consider it more elegant

#### Cons
  - Requires changes to code outside of the mobile module.
  - Has no tangible benefits over a library. If our models were ActiveRecord-backed, it would make sense to use a mixin that would be able to use the filters in the fetching process, but that's not the case.

### Controller Mixin/Concern
#### Pros
  - Could potentially add "auto-magical" functionality to our controllers so that they don't require any changes to implement filtering.

#### Cons
  - Filtering has to happen in a specific portion of our controllers, between fetching and caching. In order for the magic to be useful, we'd have to establish a more rigid process in controllers to ensure that indexes are processed in a specific order. This would require substantial changes to existing controllers and the lack of flexibility would likely be a problem in the long run.

### Model Collection Mixin
#### Pros
  - Makes more sense than a model mixin because our queries return collections, so filtering actually happens on the collection, not the model.

#### Cons
  - The current filtering is written into the collection code. It would be awkard to have two filtering processes in collection.

#### Conclusion
We recommend implementing filtering as a library.

We do not foresee implementing model specific behavior as functionality that would ever be needed. For example, whitelisting which fields and operators on a model can be filtered on (like how vets-api current filtering works) would be unncessary and FE can be relied upon to know which fields should and should not be filtered.

## Other Concerns

### Which Filter Operations Do We Want to Support?

The current filter system supports these operations:
- eq : matches the value exactly (case sensitive)
- match : matches the value (case insenstive)
- not_eq : does not match the value
- lteq : less than or equal to the value
- gteq : greater than or equal to the value

We can easily build those out and more. For example, we could add:
- one_of : this is a feature that was requested from the front end team. We changed the current filtering to allow it with some inherent limitations.
- includes : this could be used for array inclusion
- attribute_match : this could be used for matching against attributes in hashes.

### Pagination

Our pagination strategy adds params to the page navigation links to enable the client simply use the pagination links (i.e., next, previous, first, last) to consistently navigate through the a collection of records. It requires that the params be "validated" via a contract, which ensures that params are allowed and of the correct data type. In order for this to continue working correctly, we will need to make some changes to the pagination code to include these non-whitelisted filters.

### Security

While we want to allow highly flexible, client driven searching without whitelisting attributes or operations, it's also critical that anything we add does not introduce an attack vector. One of the primary reasons that the existing filtering code requires whitelisting is probably that it relies on metaprogramming. Whitelisting protects against any security concerns introduced by that.

However, no metapgramming is needed because our models list which attributes they contain as well as their data types. As a result, we can easily determine whether a model has an attribute and whether an operation makes sense for it. We expect no security concerns.

### Error Handling

Because we don't want to whitelist attributes and their appropriate operations, we will need robust error handling in the filtering code. This should be relatively easy to achieve. Our models enforce data types on attributes, so we will be able to know whether an operation makes sense for an attribute and return 422 if it does not. We will also need to rescue any runtime errors within the filtering, log the error details, and return 422.

### Performance Impact

No significant performance change is expected. The filtering should be very fast. We should run tests with and without filtering to ensure this.

## Suggested Course of Action

As mentioned above, we suggest continuing with using query params because using GET with body violates HTTP standards and POST with body is significantly more work with questionable benefits. The current approach of using query params is proven to work, and once the code is in the mobile module we will be able to customize it to our needs.

We also recommend implementing this code as a library rather than a model or controller mixin. This will require adding a line or two to each controller we want to filter in, but that's true of the current filtering code as well. That seems like a small price to pay relative to the added complexity of auto-magical behavior.

These two design decisions are also unrelated. If we later decide that GET with query params isn't working, we should be able to swap it out relatively quickly without major changes to the filtering library, so long as we separate the parsing of the filters in a separate class from the actual filtering.

### Work Involved

- create filtering library with extensive testing and error handling
- add filtering to controllers
- pagination changes
- alter openapi docs to explain how this works. It may be best to do this by adding a page to our team wiki and linking to that page from the openapi docs
- swap out current filtering in the prescriptions controller to use the new filtering