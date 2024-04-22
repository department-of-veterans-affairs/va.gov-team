# Appointment Cancellation Rules
This file details the rules and logic that apply to Appointment cancellation requests to determine whether those requests can be processed by MAP services.

## Cancellation Request structural requirements
This section lists the required HTTP request structure for a valid cancellation

* The cancellation request must contain a patient ICN and an appointment ID as path parameters 
* The request body must contain a "status: cancelled" value

## Cancellation pre-requisites
Checks that are conducted using the cancellation request parameters to determine if the cancellation shouldbe evaluated
* An appointment response must be received from `mobile-appointment-service` for the patient ICN and appointment ID
    * /patients/{icn}/appointments/{id}
* The appointment response received from MAS must satisfy ALL of the following conditions:
   * `cancellable` must be `true`
   * `status` must be one of `booked` or `proposed`

