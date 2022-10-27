# V2 Appointments Filtering Logic

**Author(s):** Kris Pethtel
**Last Updated:** October 24,2022
**Status:** **Draft**

## Overview

The VA has been moving toward a V2 appointments api. The VA web app has established a pattern of fetching all appointments during a certain date range and of certain statuses (i.e., booked, cancelled, et al). They do not filter on the vets-api back end and instead pass all results received from upstream to the web client, which transforms and filters those results before presenting them to the user.

The mobile app can't work that because it has to support older versions of the client, which were written before the V2 appointments api existed. Because of this, the back end must handle data transformations and filters on the vets-api backend.

The mobile team has been attempting to match the web results exactly but QA has found a number of differences between appointments on the mobile app and the web app. Rather than continue to fix each disparity as its found, the mobile team performed an audit of the web app's front end code to better understand the transformation and filtering logic.

## Definition of Appointment Types

The web app contains four types of appointments:
- CC Appointment: has a "kind" attribute of "cc" and have a start date.
- CC Appointment Request: has a "kind" attribute of "cc" and has requested period data.
- VA Appointment Request: "kind" attribute is not "cc" and has requested period data.
- VA Appointment: all other appointments

## Definition of when appointments are considered "past"

The way that past and upcoming appointments are differentiated is more complex than "start date after now".

These calculations are made based upon the appointment's location's time zone. If no location timezone can be found, it falls back to the user's phone's timezone (I think).

Also, how "past" is calculated differs based on what "kind" of appointment it is. When "kind" is "telehealth", the appointment length is assumed to be 240 minutes. For all other kinds, the appointment length is assumed to be 60 minutes.

So if the appointment is teleheath and the appointment started more than 3 hours ago in the location's timezone, it is considered past.

If the appointment is not telehealth, it is considered past an hour after the appointment's start time in the location's timezone.

## Definition of Upcoming Appointments

- is a VA appointment or CC appointment
- is not hidden # not sure this is relevant to us
- has a valid start time
- start time is today or after

## Definition of Past Appointments

- is a VA appointment or CC appointment
- is not cancelled
- has a valid start time
- start time has past

## Definition of Cancelled Appointments

- is a VA appointment or CC appointment
- status is cancelled
- start time is valid
- start time is after 30 days ago


## Definition of Pending Appointments

It's worth noting that appointments are requested based on created date, not start date.

- is a VA appointment request or CC appointment request
- status is pending, proposed or cancelled
- date range is 120 days ago through tomorrow. I believe these date ranges are based on creation date.