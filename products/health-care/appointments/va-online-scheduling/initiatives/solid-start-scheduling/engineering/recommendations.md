# Questions, Feedback and Recommendations

## Assumption

1. All Veteran UI will happen on va.gov
2. All Staff UI will happen on dynamics
3. All data is stored in a database in app dynamics
4. There will be an API layer between va.gov and dynamics
​

## API standards to follow

> In general, we should try to align with these as much as possible

- VA Standards <https://code.va.gov/docs/default/component/va-api-standards/>
- JSON API standards <https://jsonapi.org/>
- open api swagger <https://swagger.io/specification/>

## Big Things

- [work on authenticate](./api-authenicate.md)
- [create a standardized API response](./standard-api-response.md)
- Start using swagger that is generated from code

## Things to consider

- Use RESTful verbs and  url structures

## Nitpicks

- Try to use structures for objects
  - example:
- instead of message id (or request id), use the header `x-correlation-id`.
  - the `x-` denotes a custom header
  - correlation is a more descriptive word

## House keeping questions

- QUESTION: How are we monitoring?
- QUESTION: How are we deploying?
- QUESTION: We should be versioning the endpoints
- QUESTION: Where is the source code located? Github?

## Specific endpoint feedback

### POST GetAppointments

- Should be a GET
- Rename to something along the lines of GET /veteran/status
  - The reason is that endpoint does more than just return appointments, this is also how we are getting the veteran information
- Do we need to support pagination for appointments?
  - QUESTION: What is the upperbound of number of appointments a Veteran could have?

### POST AppointmentAvailability

- Should be a GET
- This should support
  - Date filter
  - QUESTION: Should the get appointment slots support Pagination?
- what va.gov uses for appointment slot API data contract:
  - <https://code.va.gov/catalog/vagov-platform/api/vaos-api/api-spec#/appointments/getFacilityAppointmentSlots>
- Consider adding a Slot Id to help track the time slots
  - using time stamps to align slots can be harder than it needs to be
- QUESTION: when does the time slot get locked?
- QUESTION: How are skills related to appointments?

### POST SaveAppointment

- QUESTION: This is a UPSERT, that fine, what all fields get updated?

### POST CancelAppointment

- QUESTION: What is the response? A HTTP 204?
