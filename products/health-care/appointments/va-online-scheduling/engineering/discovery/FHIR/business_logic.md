# Business logic

Business logic is hard to define, but this attempts to detail the appointment policy-related logic that the VAOS-R front end team is aware of. I'm excluding logic that is "presentational" and does not constrict a user's choices in any way.

## Front end

### New appointment flow

#### VA appointments/requests

- Users can only choose VistA sites where they are registered
  - va.gov profile parses registered sites from MVI
  - FE queries var-resources based on sites
  - var-resources prevents scheduling into of non-registered sites (maybe?)
- Users are only presented with facilities within a site that can are enabled for direct scheduling or requests for the type of care chosen
  - var-resources service exposes flags from VATS
- Users are not allowed to request an appointment if they are over the site-configured request limit
  - var-resources provides service that contains limit and current request count
- Users are not allowed to request or direct schedule an appointment if they do not have a previous visit to the facility in the site-configured time range
  - Separate settings in VATS for direct and request
  - var-resources provides service that returns time range and boolean yes/no flag
- Users are not allowed to direct schedule an appointment if there are no VistA clinics available for their type of care
  - For primary care, VistA clinics are filtered by a user's PACT
  - var-resources provides service that returns only clinics that are available and match stop codes associated with type of care
- Users are not allowed to direct schedule an appointment without an active PACT
  - var-resources provides service that returns PACT members
  - var-resources provided clinic service filters clinics by PACT association when type of care is primary care
- Users are not allowed to direct schedule if they have not visited any of the available clinics in the past 24 months
  - New in VAOS-R, logic entirely on FE
- Users must submit their ideal preferred appointment date in addition to their chosen time slot
  - Not clear if this is required by backend
- Users can only choose dates for appointment requests that are at least 4 days in the future and no more than 120 days in the future
  - Enforced by var-resources appointment request service
- Users can only choose dates for direct scheduling that are no more than 395 days in the future
  - Enforced by MAS api (I think)
- Users are required to enter the following information for an appointment:
  - Type of care
  - VistA clinic (direct schedule only)
  - Email
  - Phone
  - Preferred time to call
  - Appointment method (requests only)
  - Appointment reason
  - VistA facility
  - Request dates or time slot

#### Community Care
- Users are presented with a choice of Community Care of VA facilities if
   1. They are eligible for CC (logic in CCE api)
   2. They are registered at a VistA site that supports CC (logic in FE, based on supported facilities list)
- Only certain types of care are eligible for CC 
  - List maintained in FE
- If a user is registered at multiple CC supported sites, they must choose one
  
### Appointment list

- Any appointment with a future date is shown, except for ones with "no-show" status
- Any requests in Submitted status are shown
- Cancelled requests are shown until all of the requested date options are in the past
- Video appointments have an active link to VVC 30 minutes prior to the appointment and up to 4 hours after
  - Date logic in front end
- Video appointments can not be cancelled online
  - Prevented by MAS cancellation service, not checkable up front (as far as we know)
- Community Care appointments can not be cancelled online
- VistA appointments can be cancelled online
- The full address and contact info for a facility is shown or referenced for each non-video appointment
- VistA appointments show booking notes if the appointment was self-scheduled
  - Front end determines if text in booking notes field matches data VAOS would send
- Video appointments show instructions included from VVC
  - This is not implemented in legacy or new VAOS, but is a requirement

## Backend

There is likely additional business logic in var-resources that is not captured above, but the front end team does not have visibility into this. 

Someone on the backend team needs to determine the deltas between these services and the EAS/VSP services.

Below are the services the front end uses from var-resources/VAMF:

- `/cdw/v2/facilities/{system_id}/clinics`
- `/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/site/{system_id}/patient/ICN/#{user.icn}/{schedule_type}-eligibility/visited-in-past-months`
- `/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/site/{facility_id}/patient/ICN/{user.icn}/cancel-reasons-list`
- `/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/patient/ICN/{user.icn}/request-limit`
- `/var/VeteranAppointmentRequestService/v4/rest/clinical-services/patient/ICN/{user.icn}/clinics`
- `/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/parent-sites`
- `/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/institutions`
- `/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/site/{facility_id}/patient/ICN/{user.icn}/available-appointment-slots`
- `/var/VeteranAppointmentRequestService/v4/rest/patient/ICN/{user.icn}/preference`
- `/var/VeteranAppointmentRequestService/v4/rest/appointment-service/patient/ICN/{user.icn}/appointment-requests/system/var/id/{request_id}/messages`
- `/var/VeteranAppointmentRequestService/v4/rest/facility-service/supported-facilities`
- `/cce/v1/patients/{user.icn}/eligibility/{service_type}`
- `/appointments/v1/patients/{user.icn}/appointments`
- `/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/patient/ICN/{user.icn}/booked-cc-appointments`
- `/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/site/{site}/patient/ICN/{user.icn}/booked-appointments`
- `/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/site/{site}/patient/ICN/{user.icn}/cancel-appointment`
- `/var/VeteranAppointmentRequestService/v4/rest/appointment-service/patient/ICN/{user.icn}/appointments`
- `/var/VeteranAppointmentRequestService/v4/rest/appointment-service/patient/ICN/{user.icn}/appointments/system/var/id/{id}`
- `/users/v2/session`
