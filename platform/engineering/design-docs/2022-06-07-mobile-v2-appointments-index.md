# Mobile V2 Appointments Index

**Author(s):** Kris Pethtel
**Last Updated:** June 7,2022
**Status:** **Draft**
**Approvers:** FE, BE, Product

## Overview

VAOS will be switching entirely to V2 appointments soon. The V0 api used by the mobile app will be deprecated at that time. Appointments and appointment requests created in the V2 api will be inaccessible by the V0 api, so the mobile app will need to be switched at the same time as the web app to ensure that users see the same data on both platforms.

## Other Appointments Functionality

Aside from index, the mobile app also has appointments cancel and create endpoints.

The create endpoint only works for appointment requests at this time and already uses the V2 api. Work is planned to add creation for appointments and it will be done using V2.

The cancel endpoint is currently on V0. We will need to add functionality for cancelling both appointments and appointment requests using V2.

## Maintaining V0 Appointments Index

Because we must maintain older versions of the mobile app, we will need to maintain the V0 appointments index endpoint with its current data schema. We will need to develop an adapter that converts data from the VAOS V2 api to the same data schema we have now.

## Tickets Needed

### Backend: Adapt VAOS V2 Appointments to V0 Appointments Schema

Because we need to maintain older versions of the mobile client, we must maintain the V0 appointments index with the current schema while switching the source of data from V0 to V2. We can do this by using a feature flag to switch the source of truth. We will also have to create new adapters because the incoming data schema will be different from what we currently use. This will be the most complex part because we will need to keep the data as consistent as possible between versions. We will have to create adapters for all four appointment types: VA appointments, CC appointments, VA appointment requests, and CC appointment requests.

Pagination...
Feature flag...

### Backend: V2 Appointments Index

This will include both appointments and appointment requests because the V2 api mixes the two into a single endpoint. We will need to create a V2 appointments endpoint that uses the VAOS V2 service. We should also change our data schema to match what the web app uses. This will require front end changes but will make it much easier to make the web app and mobile app match. This change will make bugs less likely and the code more maintainable.

### Backend: V2 Appointment Cancel

Does this also handle requests?

### Frontend: Switch to V2 Appointments Index

Older versions of the mobile client will continue to work after the switch to VAOS V2 because we'll create backend data adapters to maintain the schema. However, this data modification is creating confusion and making the feature difficult to understand and to communicate about. The web back end passes the data from the upstream service to the web front end without significant modification. The mobile back end accepts the data from the upstream service, modifies it to fit a different schema, and sends it in that schema to the front end. This makes it significantly more difficult for the mobile front end team to make the app appear and behave exactly like the web front end.

This ticket will require changing the front end to consume the new V2 mobile appointments endpoint and making any other changes necessary to accommodate the new schema.

## Schemas

### V0 Schema

### V2 Schema


## Release Plan

The mobile team will need to coordinate closely with the VAOS team to coordinate the switch to V2. The mobile team switch can be handled via a feature flag.