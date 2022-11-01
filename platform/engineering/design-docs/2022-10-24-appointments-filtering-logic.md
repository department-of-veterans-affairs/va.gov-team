# V2 Appointments Filtering Logic

**Author(s):** Kris Pethtel
**Last Updated:** October 24,2022
**Status:** **Draft**

## Overview

The VA has been moving toward a V2 appointments api. The VA web app has established a pattern of fetching all appointments during a certain date range and of certain statuses (i.e., booked, cancelled, et al). They do not filter on the vets-api back end and instead pass all results received from upstream to the web client, which transforms and filters those results before presenting them to the user.

The mobile app can't work that because it has to support older versions of the client, which were written before the V2 appointments api existed. Because of this, the back end must handle data transformations and filters on the vets-api backend.

The mobile team has been attempting to match the web results exactly but QA has found a number of differences between appointments on the mobile app and the web app. Rather than continue to fix each disparity as its found, the mobile team performed an audit of the web app's front end code to better understand the transformation and filtering logic.

## Appointment Type Definitions

The web app contains four types of appointments:
- CC Appointment: has a "kind" attribute of "cc" and have a start date.
- CC Appointment Request: has a "kind" attribute of "cc" and has requested period data.
- VA Appointment Request: "kind" attribute is not "cc" and has requested period data.
- VA Appointment: all other appointments

## Date Ordering

Appointments and appointment requests are ordered differently. Appointments are ordered by start date while appointment requests are ordered by created date. That is how we order them within our system, and it's also how they're requested from the upstream server. In other words, when we request appointments for the year 2022, we receive appointments with start dates in 2022. When we request appointement requests for the year 2022, we receive appointments with created dates in 2022.

## When appointments are considered "past"

The way that past and upcoming appointments are differentiated is determined by the estimated end-time of the appointment. This estimate is made based upon the appointment location's time zone. If no location timezone can be found, it falls back to the user's device's timezone.

The estimated appointment length is dependent upon the appointment's "kind". When kind is "telehealth", the appointment length is assumed to be 240 minutes. For all other kinds, the appointment length is assumed to be 60 minutes. So if the appointment is teleheath and the appointment started more than 3 hours ago in the location's timezone, it is considered past. If the appointment is not telehealth, it is considered past an hour after the appointment's start time in the location's timezone.

## Upcoming Appointments

Fetches appointments from 30 days ago until 395 days from now. If vaOnlineSchedulingStatusImprovement feature flag is on, it also fetches appointment requests from 120 days ago until today.

Filters:
- is a VA appointment or CC appointment
- has a valid start time
- start time is today or after
- start time is in next 395 days

## Past Appointments

Fetches appointments based on the drop-down selected by the user. Options are:
- past three months
- the previous three months
- the previous three months
- the previous three months
- the beginning of this year through today
- all of last year

Filters:
- is a VA appointment or CC appointment
- status is not cancelled
- has a valid start time (this is enforced in the reducer)

## Cancelled Appointments

Fetches appointments from 30 days ago until 395 days from now and fetches appointment requests from 120 days ago until today.

Filters:
- is a VA appointment or CC appointment
- status is cancelled
- start time is valid
- start time is after 30 days ago
- start time is in next 395 days

## Pending Appointments

Fetches appointment requests where created at date is 120 days ago through either 1) tomorrow if featureVAOSServiceRequests feature flag is true or 2) through today if the feature flag is not on.

Filters:
- status is pending, proposed or cancelled