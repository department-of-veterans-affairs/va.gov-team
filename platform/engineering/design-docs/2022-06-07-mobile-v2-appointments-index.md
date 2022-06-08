# Mobile V2 Appointments Index

**Author(s):** Kris Pethtel
**Last Updated:** April 13,2022
**Status:** **Draft**
**Approvers:** FE, BE, Product, Design

## Overview

VAOS will be switching entirely to V2 appointments soon. The V0 api used by the mobile app will be deprecated at that time. Appointments and appointment requests created in the V2 api will be inaccessible by the V0 api, so the mobile app will need to be switched at the same time as the web app to ensure that users see the same data on both platforms.

## Other Appointments Functionality

Aside from index, the mobile app also has appointments cancel and create endpoints.

The create endpoint only works for appointment requests at this time and already uses the V2 api. Work is planned to add creation for appointments and it will be done using V2.

The cancel endpoint is currently on V0. We will need to add functionality for cancelling both appointments and appointment requests using V2.

## Maintaining V0

Because we must maintain older versions of the mobile app, we must maintain the V0 endpoint with its current data schema. We will need to develop an adapter that converts data from the VAOS V2 api to the same data schema we have now.

## Tickets Needed

### Backend: Adapt VAOS V2 Appointments to V0 Appointments Schema

Because we need to maintain older versions of the mobile client, we must maintain the V0 appointments index with the current schema while switching the source of data from V0 to V2. We can do this by using a feature flag to switch the source of truth. We will also have to create new adapters because the incoming data schema will be different from what we currently use. This will be the most complex part because we will need to keep the data as consistent as possible between versions.

### Backend: V2 Appointments Index

This will include both appointments and appointment requests because the V2 api mixes the two into a single endpoint. We will need to create a V2 appointments endpoint that uses the VAOS V2 service. We should also change our data schema to match what the web app uses. This will require front end changes but will make it much easier to make the web app and mobile app match. This change will make bugs less likely and the code more maintainable.

### Backend: V2 Appointment Cancel

Does this also handle requests?

### Frontend: Switch to V2 Appointments Index

Older versions of the mobile client will continue to work after the switch to V2 because we'll create backend data adapters to maintain the schema. However, this is not an ideal approach moving forward.

## Release Plan

The mobile team will need to coordinate closely with the VAOS team to coordinate the switch to V2. The switch can be handled via a feature flag.