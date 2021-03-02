# Request a VA appointment flow

Type of care page, types are defined in VATS, but are also hardcoded on front end
![type_of_care](request-flow/type_of_care.png)

Type of care page with missing address alert, shown when VA Profile has no residential address, or a PO Box
![type_of_care_alert](request-flow/type_of_care_alert.png)

Type of eye care page
![type_of_eye_care](request-flow/type_of_eye_care.png)

Type of sleep care page
![type_of_sleep_care](request-flow/type_of_sleep_care.png)

Type of facility page, shown if user and type of care are Community Care eligible
![type_of_facility](request-flow/type_of_facility.png)

VA facility page, with facilities from registered sites that support the chosen type of care, sorted by distance from VA Profile address
![facility](request-flow/facility.png)

VA facility page, facilities sorted by distance from current location
![facility_by_current_location](request-flow/facility_by_current_location.png)

VA facility page, alert shown if browser blocks location services
![facility_current_location_blocked](request-flow/facility_current_location_blocked.png)

VA facility page, alert shown if user has open requests excceding the configured limit (1 or 2)
![facility_request_limit](request-flow/facility_request_limit.png)

VA facility page, alert shown if user doesn't have a recent enough visit to the facility for the chosen type of care. This is configured in VATS, and doesn't apply to primary care
![facility_recent_appt](request-flow/facility_recent_appt.png)

VA facility page, alert shown if facility supports direct scheduling, but user doesn't meet recent appointment requirement, and the facility has requests turned off. A pretty rare edge case.

![facility_no_requests](request-flow/facility_no_requests.png)

VA facility page, dropdown show when a user is registered at facilities within 100 miles that don't support online scheduling
![facility_nearby_not_online](request-flow/facility_nearby_not_online.png)

Calendar page
![calendar](request-flow/calendar.png)

Calendar page, too many preferred times chosen
![calendar_too_many_times](request-flow/calendar_too_many_times.png)

Calendar page, no time selected
![calendar_required](request-flow/calendar_required.png)

Reason for appointment page
![reason](request-flow/reason.png)

Reason for appointment page with additional info expanded
![reason_expanded](request-flow/reason_expanded.png)

Type of appointment page
![type_appt](request-flow/type_appt.png)

Contact info page, phone and email pulled from VA Profile
![contact_info](request-flow/contact_info.png)

Review page
![review](request-flow/review.png)

Review page with server error after submit
![review_server_error](request-flow/review_server_error.png)

Review page with VistA configuration issue after submit
![review_config_error](request-flow/review_config_error.png)

Confirmation page
![confirmation](request-flow/confirmation.png)

Confirmation page with show more expanded
![confirmation_expanded](request-flow/confirmation_expanded.png)

Email when appointment is scheduled by scheduler
![resolved_email](request-flow/resolved_email.png)
