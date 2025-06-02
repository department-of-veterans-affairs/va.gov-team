
# Oracle Health Scheduling Test Plan


## Test users

- judy.morrison@idme - general testing

## Scheduling scenarios

## Access Scenarios

- User is logged in and registered at VA locations: allow access to scheduling flow  

## Page: What type of care do you need?

- Fetch address on file `residentialAddress` API call `GET /v0/user`:  
  - User does not have a home address on file: display alert “To use some of the tool’s features, you need a home address on file”  
  - User does have a home address on file: display page without alert  
- User selects Nutrition and Food (supported MVP care type): continue to next check (past appointment history)  


Note: may need to add community care and sub-types of care here

## Page: Which VA location would you like to go to?

- System attempts to fetch facility registrations and configurations.
  - Fetch fails: Display 500 error   
- User selects a facility that supports direct scheduling for selected care type: continue to provider selection  
- User selects a facility that supports requests only: direct user to request flow
   - Note: this will change once we sort out requesting with a specific provider
- User is directed to the request flow but has hit limit of allowed requests: show message “Please call to schedule”  
- User selects a facility that supports neither direct schedule nor requests: show message “Please call to schedule”  
- User has never had an appointment for selected care type at facility: : show message “Please call to schedule”  
- User selects “current location” from drop-down and has blocked browser location: display alert
- If user hasn't been seen at a facility in the last 36 months, facility doesn't display in list
- Appointment for care type at facility is outside allowed timeframe: block with Dead End: You can't schedule this appointment online 
- User is not registered at any OH facility: display error
- If the patient has only been seen for telehealth appts, don't show facility

## Page: Which provider do you want to schedule with?

- If the Veteran has had an appointment with a provider at this facility for this type of care in the past 36 months: include that provider in the list  

- If at least one of the user’s registered or recent facilities has direct scheduling enabled and availability for this type of care:  
  - Show all providers the Veteran has seen in the past 36 months, including request-only providers  
  - If a provider’s request limit is reached: show “Call to schedule” under that provider  

- Direct scheduling and appointment requests can appear together in the list  
- Direct scheduling and “Call to schedule” can appear together if requests are disabled due to request limits  
- Provider relationship exists but at a different facility: do not show provider  
- Requests are enabled: display information with link to request at the bottom of the provider list  
- Requests are not enabled (due to request limit reached): display info with facility phone number at the bottom of the provider list

## Patient Indicated Date Page

- User enters preferred date that is not same-day: accept input and continue to next page  
- User enters same-day date: show warning they can’t schedule today + instructions for immediate medical help  
- User leaves preferred date blank: show validation error  

## Page: What date and time do you want for this appointment?

- Appointment time available: display calendar with appointment slots of selected provider  
- API call to fetch slots fails, requests are enabled: display alert with request option  
- API call to fetch slots fails, requests are not enabled: display alert with “Call to schedule”  

## Page: What’s the reason for this appointment?

- Reason provided: continue  
- Field left blank: block with validation error  

## Contact Info Confirmation

- Contact info confirmed or edited: proceed  
- Contact info empty: block with validation error  

## Final Review and Confirmation

- Show all appointment data: user selects confirm: allow confirmation  

## Request Flow Specifics

- Facility has requests enabled, direct scheduling is not: continue to request path  
- Direct scheduling enabled but no time slots available: fallback to request path  
- User wants different provider: allow request if enabled  
- Request submitted: confirmation message displayed  
- Request fails due to limit or error: show failure message  

## System Errors, etc.

- System returns no eligible facilities: block, show fallback messaging  
- User tries to go back and change care type: preserve data and flow  
- Unexpected errors during scheduling: display general error fallback  

## Cancelation scenarios

Note: waiting on Spike on cancelation logic to write up testing plan
