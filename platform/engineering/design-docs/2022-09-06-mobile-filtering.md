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

## Considerations

### How to Transmit Filter Options

#### Query Params

The existing filter system uses query params, and the mobile app already uses this in some places. It would be easy to mimic this approach while making the changes we need under the hood. This would also allow us to make few or no client changes in locations where we're using the current filter system, which would be optimal for backward compatibility.

#### GET with Payload

It's possible to transmit a GET request with a payload. According to the MDN docs, this is usually done by changing the verb used from GET to QUERY, but rails does not seem to support that verb. Meaning this may be effectively the same as using query params.

#### POST with Payload

This would require rewriting any endpoints we want to use filtering. It's by far the biggest lift.

### Which Filter Operations Do We Want to Support?

The current filter system supports these operations:
- eq : matches the value exactly (case sensitive)
- match : matches the value (case insenstive)
- not_eq : does not match the value
- lteq : less than or equal to the value
- gteq : greatre than or equal to the value

It is unclear why lteq and gteq are supported but simple less than and greater than are not. Those operations barely used in the app anyhow.

### Pagination

Our pagination strategy adds params to the page navigation links to enable the client simply use the pagination links (i.e., next, previous, first, last) to consistently navigate through the a collection of records. It requires that the params be "validated" via a contract, which ensures that params are allowed and of the correct data type. In order for this to continue working correctly, we will need to either add a contract for filters or add some special handling for filters within the pagination helper. Because we specifically do not want to have to whitelist the filters, any contract we add would have to be top-level only. In other words, it would only confirm that the filters param is a hash and would not dig into the hash for deeper validation.

### Error Handling

Validate filter options, return 422 when they're incorrect.

### Library vs. Mixin

Will it be better to write this as a service object that can work with any class or as a model mixin? Can we expect a library to work reliably with all of our models?

## Implementation Options

We present our findings here.