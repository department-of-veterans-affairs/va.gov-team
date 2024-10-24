# RFC: Schedule appointments in VA mobile

- Date: 2022-01-14
- Related Issue: https://app.zenhub.com/workspaces/va-mobile---backend-61d75d03a7505500147ec7f6/issues/department-of-veterans-affairs/va-mobile-app/2078

## Background
Currently, veterans must schedule their appointments via the web app or phone. No scheduling ability exists in VA mobile.

## Motivation
This feature has been heavily requested by veterans and will bring the mobile app functionality closer to parity with the web app.

## Design

Because this feature is already implemented in the web app, we're using that as a basis for how this should work in the mobile app.

### Current va.gov web app appointment creation workflow

Below is a rough outline of the appointment creation workflow.

- Click "Start Scheduling".
    - Navigates to https://staging.va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment
    - On page load, it fetches the html and javascript.
    - Displays a list of treatment types.
- Click on service type.
    - Requests the user's VA appointments. First for the past year: GET https://staging-api.va.gov/vaos/v0/appointments?start_date=2021-01-14T05:00:00.000Z&end_date=2022-01-14T05:00:00.000Z&type=va
    - Then for the previous year: GET https://staging-api.va.gov/vaos/v0/appointments?start_date=2020-01-14T05:00:00.000Z&end_date=2021-01-14T05:00:00.000Z&type=va
    - It may be doing this to determine the user's facilities.
- Click "Continue".
    - Note: There are some variations in the workflow. When the user selects "eye care", for example, it will ask for which type of eye care. If you then select "optometry", it has to make another request to get optometry availability data. It's not worth breaking down every type in this document, but it's important to know that there are variations.
    - Navigates to https://staging.va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/va-facility-2
    - Fetches facilities and child clinics: GET https://staging-api.va.gov/vaos/v2/facilities?children=true&ids[]=983&ids[]=984
        - It only displays facilities that have the requested service in the `healthService` attribute.
    - Fetches this: GET https://staging-api.va.gov/vaos/v2/scheduling/configurations?facility_ids[]=983&facility_ids[]=984&cc_enabled=true
        - Returns services info for the facilities in the url. Unclear how this is being used
    - Fetches facilities again (not sure why): https://staging-api.va.gov/vaos/v2/facilities?children=true&ids[]=983&ids[]=984
    - Fetches configuration with all facilities: https://staging-api.va.gov/vaos/v2/scheduling/configurations?facility_ids[]=983&facility_ids[]=984&facility_ids[]=983QE&facility_ids[]=983QA&facility_ids[]=983GD&facility_ids[]=983GC&facility_ids[]=983GB&facility_ids[]=984GF&facility_ids[]=984GC&facility_ids[]=984GB&facility_ids[]=984GD&facility_ids[]=984GA
    - Only facilities that have the requested `healthService` are listed. That data exists in both the facilities and configuration endpoints.
- Select a facility and click "Continue".
    - Requests user's appointment limit at the clinic: GET https://staging-api.va.gov/vaos/v0/facilities/983/clinics?type_of_care_id=323&system_id=983
        - If the limit is met, the user must select another facility.
    - Requests clinics that provide the selected service within the facility: GET https://staging-api.va.gov/vaos/v0/facilities/limits?type_of_care_id=323&facility_ids[]=983
        - If clinics are returned, the user is asked to select from them, but it is possible to move forward without selecting one.
    - Navigates to: https://staging.va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/request-date
    - Provides a calendar date picker. It uses the provided date as the start date in the request below.
    - Fetches available appointments: GET https://staging-api.va.gov/vaos/v0/facilities/983/available_appointments?type_of_care_id=323&clinic_ids[]=455&start_date=2022-04-01&end_date=2022-05-31
- User selects a time and clicks "Continue"
    - Navigates to https://staging.va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/reason-appointment
    - Requires that the user select a reason for the visit and provide a written detail about the reason
- User submits appointment reason
    - Navigates to: https://staging.va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/choose-visit-type
    - Asks user to select an appointment type: office, phone, or telehealth.
- User submits appointment type.
    - Navigates to: https://staging.va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/contact-info
- User submits contact info.
    - Navigates to: https://staging.va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/review
    - Shows you all the info you've entered with a confirmation button.
- User reviews appointment details and clicks "Request appointment".
    - Requests the appointment and returns information about the requested appointment and facility: POST https://staging-api.va.gov/vaos/v0/appointment_requests?type=va
    - This contains the appointment reason the user entered earlier: POST https://staging-api.va.gov/vaos/v0/appointment_requests/8a4895917e216e7f017e59eb494a0028/messages
    - This tells the UI whether the patient allows email or text messages: PUT https://staging-api.va.gov/vaos/v0/preferences
    - Sends back the same information it received. Unclear why: GET https://staging-api.va.gov/vaos/v0/preferences
    - Fetches the data it just posted: GET https://staging-api.va.gov/vaos/v0/appointment_requests/8a4895917e216e7f017e59eb494a0028
    - Fetches the facility data: GET https://staging-api.va.gov/vaos/v2/facilities/983GD
    - Fetches the message data it just posted: GET https://staging-api.va.gov/vaos/v0/appointment_requests/8a4895917e216e7f017e59eb494a0028/messages
    - Navigates to: https://staging.va.gov/health-care/schedule-view-va-appointments/appointments/requests/8a4895917e216e7f017e5a517716002d?confirmMsg=true
    - Displays appointment details

### Back-end work

This is a non-exhaustive list of the routes used in this process. It's not complete because there are multiple workflows dependent upon such things as facility type and requested service type.

GET https://staging-api.va.gov/vaos/v0/appointments
GET https://staging-api.va.gov/vaos/v2/facilities
GET https://staging-api.va.gov/vaos/v2/scheduling/configurations
GET https://staging-api.va.gov/vaos/v0/facilities/983/clinics
GET https://staging-api.va.gov/vaos/v0/facilities/limits
GET https://staging-api.va.gov/vaos/v0/facilities/983/available_appointments
POST https://staging-api.va.gov/vaos/v0/appointment_requests
POST https://staging-api.va.gov/vaos/v0/appointment_requests/8a4895917e216e7f017e59eb494a0028/messages
GET https://staging-api.va.gov/vaos/v0/preferences
PUT https://staging-api.va.gov/vaos/v0/preferences
GET https://staging-api.va.gov/vaos/v0/appointment_requests/8a4895917e216e7f017e59eb494a0028
GET https://staging-api.va.gov/vaos/v2/facilities/983GD
GET https://staging-api.va.gov/vaos/v0/appointment_requests/8a4895917e216e7f017e59eb494a0028/messages

Because VAOS endpoints don't accept the mobile app's bearer tokens, we can't use these endpoints directly at this time. But we do have options:
1. Add bearer token auth to the VAOS rails engine. This is unlikely to happen due to organizational limitations.
2. Create mobile versions of these endpoints that simply authorize and then use the VAOS controller actions. This is possible, but it's not ideal. We would still have to handle the VAOS controllers' auth internally and it's definitely not the rails way.
3. Extract as much logic as possible out of these controllers and into service objects and use the service objects in both. This seems like the best option. Currently, all of these endpoints except the appointment requests messages post have the bulk of their logic in service objects.

## Risks
This is a large and complex feature to implement that will require substantial work on both the front and back ends. Thankfully, we do know that the process works because it's already in use in the web app. Unfortunately, the backend endpoints used by the web app do not accept the mobile app's bearer tokens, which means those endpoints can't be used by the mobile app and that functionality may have to be reproduced in the mobile back-end. Assuming we create all the controller functionality we need and use the VAOS services to power the controllers, it's possible that those services will be changed without our knowledge and create front-end bugs. That risk can be mitigated with thorough and well-written specs.

## Alternatives
None at this time if we want to have this functionality in the mobile app.
