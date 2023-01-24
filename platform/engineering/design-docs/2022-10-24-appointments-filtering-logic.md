# V2 Appointments Filtering Logic

**Author(s):** Kris Pethtel
**Last Updated:** October 24,2022
**Status:** **Draft**

## Overview

The VA has been moving toward a V2 appointments api. The VA web app has established a pattern of making multiple requests for different statuses and date ranges. They do not filter on the vets-api back end and instead pass all results received from upstream to the web client, which transforms and filters those results before presenting them to the user.

The mobile app can't work that way because it has to support older versions of the client, which were written before the V2 appointments api existed. The mobile app was written to fetch all appointment statuses together over a broader date range. The only distinction the mobile app makes on the front end is between past and upcoming. Because of this, the mobile app must handle data transformations and filters on the backend.

The mobile team has been attempting to match the web results exactly but QA has found a number of differences between appointments on the mobile app and the web app. Rather than continue to fix each disparity as it's found, the mobile team performed an audit of the web app's front end code to better understand the transformation and filtering logic. This captures the results of that audit.

## Appointment Type Definitions

The web app contains four types of appointments:
- CC Appointment: has a "kind" attribute of "cc" and has a start date.
- CC Appointment Request: has a "kind" attribute of "cc" and has requested period data.
- VA Appointment Request: "kind" attribute is not "cc" and has requested period data.
- VA Appointment: all other appointments

## Date Handling

Appointments and appointment requests handle dates differently. Appointments have a start date but no created date. All requests for appointments are based around start date. Appointment requests do not have a start date. They have a created date and all requests are based around created date.

In other words, if a user requests all appointments for 2022, they would receive all appointments with start dates in 2022. If the user requests all appointment requests for 2022, they would receive all appointment requests with created dates in 2022.

The appointments and appointment requests are also ordered according to these dates. Because the two resources are being mixed into a single index, they're ordered by either start date or created date.

## When Upcoming Appointments Are Considered Past

Upcoming appointments are considered past based on the estimated end time of the appointment. This estimate is made based upon the appointment location's time zone. If no location timezone can be found, it falls back to the user's device's timezone.

The estimated appointment length is dependent upon the appointment's "kind". When kind is "telehealth", the appointment length is assumed to be 240 minutes. For all other kinds, the appointment length is assumed to be 60 minutes. So if the appointment is teleheath and the appointment started more than 3 hours ago in the location's timezone, it is considered past. If the appointment is not telehealth, it is considered past an hour after the appointment's start time in the location's timezone.

## Upcoming Appointments

Data fetching:
Fetches appointments where status is booked, arrived, fulfilled, or cancelled from 30 days ago until 395 days from now. It also fetches proposed and cancelled appointment requests from 120 days ago until today.

Filters:
- is a [VA appointment or CC appointment](#appointment-type-definitions)
- has a valid start time
- start time is today or after
- start time is in next 395 days
- is [not past](#when-appointments-are-considered-past)

## Past Appointments

Data fetching:
Fetches appointments where status is booked, arrived, fulfilled, or cancelled. Date options are based on the drop-down selected by the user:
- past three months
- the previous three months
- the previous three months
- the previous three months
- the beginning of this year through today
- all of last year

Filters:
- is a [VA appointment or CC appointment](#appointment-type-definitions)
- status is not cancelled
- has a valid start time (this is done in the reducer)

## Cancelled Appointments

Data fetching:
Fetches appointments where status is booked, arrived, fulfilled, or cancelled from 30 days ago until 395 days from now. It also fetches proposed and cancelled appointment requests from 120 days ago until today.

Filters:
- is a [VA appointment or CC appointment](#appointment-type-definitions)
- status is cancelled
- start time is valid
- start time is after 30 days ago
- start time is in next 395 days

## Pending Appointments

Data fetching:
Fetches appointments where status is proposed or cancelled and date is between 120 days ago through tomorrow. It then filters out any appointments that aren't appointment requests before storing in redux.

Filters:
- status is proposed or cancelled