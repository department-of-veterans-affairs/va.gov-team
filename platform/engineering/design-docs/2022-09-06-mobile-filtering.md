# Mobile Filtering

**Author(s):** Kris Pethtel, Andrew Herzberg
**Last Updated:** September 6, 2022
**Status:** **Draft**
**Approvers:** FE, BE

## Overview

We would like to enable the front-end to filter all models by all top-level attributes without defining how the filtering works on a per-model basis. We do not want to enable digging into attribute objects.

## Considerations

### How to Transmit Filter Options

#### Query Params

We already transmit filter options from the mobile client to the back end in a few places, such as in the mobile prescriptions controller. However, that approach has some limitations. For example, it doesn't handle more complex requests and it requires changes to be made to the model, which we do not want. But we could use the same basic approach to transmitting the filters and build upon them.

#### GET with Payload

It's possible to transmit a GET request with a payload. According to the MDN docs, this is usually done by changing the verb used from GET to QUERY, but rails does not seem to support that verb. Meaning this may be effectively the same as using query params.

#### POST with Payload

This would require rewriting any endpoints we want to use filtering. It's by far the biggest lift.

### Which Filter Operations Do We Want to Support?



### Pagination

Presumably the filter params would be added to the pagination urls.

### Caching

Is there a concern here? Clearly we'd cache the full collection before filtering. Would there be any cases where we're also filtering via the upstream query that could cause caching inconsistencies?

### Error Handling

Validate filter options, return 422 when they're incorrect.

### Library vs. Mixin

Will it be better to write this as a service object that can work with any class or as a model mixin? Can we expect a library to work reliably with all of our models?

## Implementation Options

We present our findings here.