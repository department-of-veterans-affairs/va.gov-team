# V2 Appointments Filtering Logic

**Author(s):** Kris Pethtel
**Last Updated:** October 24,2022
**Status:** **Draft**

## Overview

The VA has been moving toward a V2 appointments api. The VA web app has established a pattern of fetching all appointments during a certain date range and of certain statuses (i.e., booked, cancelled, et al). They do not filter on the vets-api back end and instead pass all results received from upstream to the web client, which transforms and filters those results before presenting them to the user.

The mobile app can't work that because it has to support older versions of the client, which were written before the V2 appointments api existed. Because of this, the back end must handle data transformations and filters on the vets-api backend.

The mobile team has been attempting to match the web results exactly but QA has found a number of differences between appointments on the mobile app and the web app. Rather than continue to fix each disparity as its found, the mobile team performed an audit of the web app's front end code to better understand the transformation and filtering logic.

## Definition of appointment types

The web app contains four types of appointments:
- CC Appointment: has a "kind" attribute of "cc" and have a start date.
- CC Request: has a "kind" attribute of "cc" and has requested period data.
- Request: "kind" attribute is not "cc" and has requested period data.
- VA Appointment: all other appointments