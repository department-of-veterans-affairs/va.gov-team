---- 


# We've moved our docs!

### This document is no longer maintained.

### Please visit the [Platform website](https://depo-platform-documentation.scrollhelp.site/) for the latest information or contact the Platform Support Team via [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1).


----
# Mobile V2 Appointments Index

**Author(s):** Kris Pethtel
**Last Updated:** June 7,2022
**Status:** **Draft**
**Approvers:** FE, BE, Product

## Overview

VAOS will be switching to V2 appointments soon. The V0 API used by the mobile app will become deprecated at that time. Appointments and appointment requests created in the V2 API will be inaccessible by the V0 API, so the mobile app will need to be switched at the same time as the web app to ensure that users see the same data on both platforms.

## Current Mobile Appointments Functionality

### Index

Our V0 appointments index must be updated to use the V2 appointments service while maintaining the current schema for older versions of the client. [Changes needed are described below.](#backend-adapt-vaos-v2-appointments-to-v0-appointments-schema)

### Create

The create appointment endpoint only works for appointment requests at this time and already uses the V2 API. This endpoint will not be in use until after the switch to V2. No action is needed here.

### Cancel

The cancel endpoint is currently on V0 for both appointments and appointment requests. [This will need to be updated to V2.](#backend-v2-appointment-cancel)

## Web App V2 Appointments Index Functionality

The web app appointments V2 index makes three different requests, depending on which drop-down option the user selects:
  - Upcoming: requests booked, arrived, fulfilled, and cancelled appointments for date range of one month ago through 13 months from now.
    - This call is always made, even if the user bypasses the upcoming appointments and navigates directly to another appointment type.
    - Example (recorded on 2022-06-08):
      https://staging-api.va.gov/vaos/v2/appointments?_include=facilities,clinics&start=2022-05-09&end=2023-07-08&statuses[]=booked&statuses[]=arrived&statuses[]=fulfilled&statuses[]=cancelled
  - Past: requests booked, arrived, fulfilled, and cancelled appointments for the past three months until the current time.
    - Example (recorded on 2022-06-08):
	    https://staging-api.va.gov/vaos/v2/appointments?_include=facilities,clinics&start=2022-03-08T00:00:00-05:00&end=2022-06-08T16:47:08-04:00&statuses[]=booked&statuses[]=arrived&statuses[]=fulfilled&statuses[]=cancelled
  - Cancelled and Requested: requests cancelled and proposed appointments for the past four months through today.
    - When the user navigates to cancelled appointments on the web app, it only fetches the past four months of cancelled appointments. However, when the user navigates to cancelled, it always makes the "upcoming" fetch that includes cancelled appointments from one month ago to 13 months from now before fetching the past four months of cancelled appointments. This is true even if the user pastes in the url to navigate directly to cancelled appointments without going to any other appointments page first. Then it only seems to show cancelled appointments starting from one month ago. We should look at front end code to better understand why this is happening. We may not need to request cancelled appointments from more than one month ago if the web app doesn't show them.
    - Example (recorded on 2022-06-08):
    	https://staging-api.va.gov/vaos/v2/appointments?_include=facilities,clinics&start=2022-02-08&end=2022-06-08&statuses[]=proposed&statuses[]=cancelled

## Tickets Needed

### Backend: Adapt VAOS V2 Appointments to V0 Appointments Schema

This will involve:
- creating a feature flag that will determine how the data is fetched and serialized
- creating new adapters for each of the four appointment types: VA appointments, CC appointments, VA appointment requests, and CC appointment requests
- refactoring the appointments proxy. This service class already does too much. At the very least, we should extract all v2 functionality into a new service class.
- using the new VAOS V2 service classes to fetch the data.
- Because the mobile app does not separate appointments by type like the web app does and instead interleaves them into a single list, we will need to make all of [these](#web-app-index-functionality) requests up-front with slight modifications. We will need to request:
  - booked, arrived, fulfilled, and cancelled appointments for the date range of the beginning of last year through one year from now. That is the date range we currently use for V0. We use the beginning of last year because the mobile app has an option to see all records for last year so we prime the app with all of those records. It may be wise to mimic the web app and break this into two smaller requests rather than request more than two years of data in a single request, which may result in timeouts.
  - proposed appointments for the past four months.

### Backend: V2 Appointment Cancel

We can use the same feature flag to toggle between V0 and V2. VAOS has written a V2 update endpoint that handles cancel functionality. The web app appears to use that endpoint for cancelling both appointments and appointment requests. We should be able to do the same.

### Backend: Coordinate Deploy

- Coordinate with VAOS team to determine when this is happening.
- Turn on feature flag in production when V2 goes live.
- Test on staging.
- Monitor Sentry and Datadog and respond to any errors or concerns that arise.
- Work with VAOS on any rollbacks that may arise.

### Backend: Cleanup

Once we've switched to V2, established that everything is stable, and confirmed that we will not need to roll back, we can get rid of some old code, including the existing appointments proxy, models, serializers, and adapters.

## Optional Future Work

As mentioned, we have to maintain the data schema of our existing appointments index in order to support existing mobile app versions. However, that means that we have to translate all four appointment types through adapters on the back end, then attempt to match front end web app functionality using data structures that do not match what the web app uses. This has made our appointments features bug-prone and more difficult to understand and communicate about. In order to more easily match the web app, it may be worth switching to the same data schema moving forward. The back end for this is relatively simple, but it will require a bit more work on the front end. The front end team will need to decide whether the effort of making this change outweighs the carrying cost of this tech debt.

### Backend: V2 Appointments Index

Required changes should be limited:
- create new V2 appointments index endpoint
- create new V2 appointments model. This is necessary in order to enable data caching with the new schema.
- create new V2 appointments serializer.
- the new service class created in the [above ticket](#backend-adapt-vaos-v2-appointments-to-v0-appointments-schema) will handle the data fetching. It may need some small changes to avoid using the data adapters and to use the new model.

### Frontend: Switch to V2 Appointments Index

This ticket will require:
- changing the front end to consume the new V2 mobile appointments endpoint
- changing the model attributes used in various views. This will be the complex part, as it will require going through each displayed field and matching the logic found in the web app code. While this will be somewhat involved, it may make development and maintenance easier in the future.

## Release Plan

The mobile team will need to coordinate closely with the VAOS team to coordinate the switch to V2. The mobile team switch can be handled via a feature flag.
