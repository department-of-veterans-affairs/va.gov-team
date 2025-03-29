# Handling Lighthouse API Schema Changes

## Background

The form submission process submits API POST requests to Lighthouse APIs as defined in the documentation here: https://developer.va.gov/explore/api/decision-reviews/docs?version=current

The schemas used in the Decision Review endpoints are from the `vets-json-schema` gem (see https://github.com/department-of-veterans-affairs/vets-json-schema/tree/master/src/schemas).

An issue that has occurred before is Lighthouse API schema versions not matching with what the Decision Reviews form submission expects, as Lighthouse API schemas are updated independently of the `vets-json-schema` gem.

## Proposal

Lighthouse provides endpoints that return the latest schemas, which can be used instead of the schemas stored in the `vets-json-schema` gem.
See Lighthouse API documentation on the schema endpoints (e.g `/higher_level_reviews/schema`).

By using this endpoint to get the current schema, this would eliminate the need to maintain a separate schema version in `vets-json-schema`.

## Risks

As this proposal requires another API request during the form submission process, that will cause the request process to take longer.
The schema response can be cached in Redis (e.g. 24 hours).
In the event there is an error with the schema API request and we do not want to require the user to resubmit the form, `vets-json-schema` can also be used as a failover.

## Additional Information
- SC endpoint update that required a schema update: https://github.com/department-of-veterans-affairs/va.gov-team/issues/102836
