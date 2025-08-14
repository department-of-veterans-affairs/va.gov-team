# VASS

## Assumption

1. All Veteran UI will happen on va.gov
2. All Staff UI will happen on dynamics
3. All data is stored in a database in app dynamics
4. There will be an API layer between va.gov and dynamics
​

## Big Questions

### Authentication Strategy

- When in the workflow should the user create a VA.gov account (ID.me/Login.gov)
  - Actual question: What level of authenticate do we need? Low Auth? Just an account? no account? LOA3?
- When in the process do we establish and ICN and/or EDIPI?
  - Actual Question: What unique identifier as we using to track a Veteran going through the process, between the two systems that is already existing in the va.gov ecosystem
- Could we use a Low Auth Framework for the initial call and then
  - Low Auth Framework: <https://github.com/department-of-veterans-affairs/lorota>
​

### Notifications

- Text Messaging and Emails
  - We should try to use VA Notify
    - Docs: <https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/README.md>
    - API For sending (not scheduling) texts/emails
    - They have error handling and best practices for flows
- Can Dynamics handle the scheduling?
  - Is there a plugin
  - Probably a better solution to use a built in Azure functionality
​

### Pipeline

- How is this kicked off for new Veteran?
- How are getting this data that we are collecting (demographics, contact, etc) into the existing systems?
​

## API Feedback

### API Standards

> In general, we should try to align with these as much as possible

- VA Standards <https://code.va.gov/docs/default/component/va-api-standards/>
- JSON API standards <https://jsonapi.org/>
- open api swagger <https://swagger.io/specification/>

### General

- Are we aiming to be RESTful? Are there reasons to deviate?
- `X-Correlation-ID` vs `Message Id`, the `x-` naming convention is using to showing non-standard parameters
- Use nest objects when possible
  - example

     ```json
      {
        "veteran":{
         "firstName": "Jane",
         "lastName": "Doe"
        }
      }
    ```

- Standard structure

```json
{
  "correlationId": "string",
  "timeStamp": "2025-07-29T14:28:02.920Z",
  "statusCode": 0,
  "message": "string",
  "success": true,
  "data": {...}
}
```

### Authentication

- How are tokens scoped?
- Whats is the Auth service we are using something in Azure, something in the VA ecosystem or are we rolling our own?
- When in the process does an EDIPI get created for a Veteran?
- Where are we getting the EDIPI initially?

### POST GetAppointments

- Why is this a POST? is this changing any server state?
- For the EDIPI, which one is being respected? The header or the body?
- Are we sure this  the right data for the landing page?
  - Are there mocks up?
  - Side note, this is not a GET Appointments endpoint, this a a Get Landing Page data. This is a BFF (Backend For Frontend Pattern) (which is fine, just calling it out)
- `availableForAppointment`
  - I would expect this to be broken out in a boolean and a message

### POST AppointmentAvailability

- Should this be a GET?
- For the EDIPI, which one is being respected? The header or the body?
- what va.gov uses for appointment slot API data contract:
  - <https://code.va.gov/catalog/vagov-platform/api/vaos-api/api-spec#/appointments/getFacilityAppointmentSlots>
  - Consider adding a Slot Id to help track the time slots
- When does the appointment get locked?
- How are skills related to appointments?

### POST SaveAppointment

- For the EDIPI, which one is being respected? The header or the body?
- This is a UPSERT, that fine, what all fields get updated?

### POST CancelAppointment

- What is the response?

