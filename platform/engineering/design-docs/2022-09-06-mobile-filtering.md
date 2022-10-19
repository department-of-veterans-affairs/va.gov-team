# Mobile Filtering

**Author(s):** Kris Pethtel, Andrew Herzberg
**Last Updated:** September 6, 2022
**Status:** **Draft**
**Approvers:** FE, BE

## Overview

(Should I add a separate flaws section?)

The vets-api has a filter system built in to model collections that allows clients to send query params specifying which records they want to include in the response. For example, a user can add a param like, `filter[refillStatus][eq]=refillinprocess` to indicate that they only want prescriptions where refill_status equals refillinprocess. This is relatively easy to use on the back end, but it has one major flaw: it requires that any filterable attributes be whitelisted in the model along with any operations that are permitted on that attribute.

It also has some other minor flaws. For example, it has poor handling of cases where the client wants to fetch records where an attribute is one of multiple values, and it does not work correctly with the mobile module's pagination helper.

We would like to give clients the ability to filter by any attributes on the model without adding explicit handling within the model. We only want to allow filtering on top-level attributes. In other words, if a client wants to filter appointments based on location street address, that would not be allowed because location street address is not top-level.

Note that one typical advantage of filtering is to reduce time it takes to get a response by reducing the amount of data in the response. This will not apply in this case because all current upstream services do not support filering so there will be little difference in round-trip time.

## Considerations

### How to Transmit Filter Options

#### Query Params
##### Example
```/v0/health/rx/prescriptions?filter[refill_status][eq]=refillinprocess```
##### Pros
  - This is how the existing filtering works, allowing for backwards compatibility.   
  - No versioning of endpoints required.
  - Vets-api currently implementation of this uses query params so some logic could be borrowed from this.
  - Sticks with convention of other mobile endpoints. No other cases of GET requests with Bodys
##### Cons
  - Longer, hard to read urls for requests with multiple filter parameters.
  - Cannot easily support complex filtering requirements. 
    - Filtering by non-primitive data types (hashes, arrays, etc) would require work arounds to support. 
    - Complex AND/OR filter groups could not be represented in query parameters. EX: ((Exp1 AND Exp2) OR (Exp3 OR Exp4) )   
##### Conclusion
  Given the support of complex filtering requirements listed in the cons is not a requirement of this feature, nor does it seem practical for it become a requirement for these endpoints in the future and harder to read URLs is a relatively minor con since the parameters are generated programatically. This option seems to be the best fit for transmitting filter options.

#### GET with Payload Body
##### Pros
  - Allows for filtering of non-primitive data types (hashes, arrays, etc.)
  - Keeps the url parameters from getting too long and hard to read
  - Backwards compatible.
  - No versioning of endpoints required.
##### Cons
  - Breaks REST/HTTP specs. While GET is technically allows to have a payload body, it is not suppose to have any semantic effect on the request itself, that would not be true in this case. 
##### Conclusion
Breaking REST/HTTP spec is too dangerous and may have too many unintended consquences to implement.

#### POST with Payload
##### Pros
  - Allows for the most robust filtering logic
  - Keeps the url parameters from getting too long and hard to read
##### Cons
  - Would require new endpoint for each Index action
  - Take the most time to implement and integerate into FE.
##### Conclusion
Given the support of complex filtering requirements listed in the cons is not a requirement of this feature, nor does it seem practical for it become a requirement for these endpoints in the future, it does not seem worth it to take the extra time to implement this. 

### Which Filter Operations Do We Want to Support?

The current filter system supports these operations:
- eq : matches the value exactly (case sensitive)
- match : matches the value (case insenstive)
- not_eq : does not match the value
- lteq : less than or equal to the value
- gteq : greatre than or equal to the value
- one_of : identical to eq but when filtering multiple values if a records satifies any of the filter conditions, it will be included in the filtered set. If this operation is used then it must be the only operator used in the request.  

### Pagination

Our pagination strategy adds params to the page navigation links to enable the client simply use the pagination links (i.e., next, previous, first, last) to consistently navigate through the a collection of records. It requires that the params be "validated" via a contract, which ensures that params are allowed and of the correct data type. In order for this to continue working correctly, we will need to either add a contract for filters or add some special handling for filters within the pagination helper. Because we specifically do not want to have to whitelist the filters, any contract we add would have to be top-level only. In other words, it would only confirm that the filters param is a hash and would not dig into the hash for deeper validation.

### Error Handling

Validate filter options, return 422 when they're incorrect.

### Implementation Options

#### Library
##### Pros
  - Maintainability. Minimal code changes to existing code. 
  - Simplicity. 
##### Cons
  - Harder to implement model specific behavior.
##### Conclusion
TODO

#### Mixin
##### Pros
  - More control over how filtering works from model to model
##### Cons
  - Maintainability
##### Conclusion
TODO
