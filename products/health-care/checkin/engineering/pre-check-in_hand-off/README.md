# Pre-check-in to day-of check-in hand-off

# **Background**

Veterans use the pre-check-in application to answer the questionnaire specific to their upcoming appointment.  And, day-of check-in application is used to notify the medical staff on the day of the appointment.

VEText, one of the software components in the check-in experience software system is responsible for sending text messages to veterans.  It initiates pre-check-in based on configured number of days prior to the appointment, gets pre-check-in link & send it to veteran. Also, for the day-of check-in application link, when veteran sends “check in” text to a designated number, VEText gets day-of check-in link and sends it to the veteran.  Veterans receive both links from the same number.

While investigating failure scenarios in production, the research team observed a few veterans using pre-check-in links to check in for the day of the appointment.  And, when the veterans click on pre-check-in link on the day of appointment, they are shown pre-check-in is no longer available error message as below.

![Screen Shot 2023-02-10 at 9.03.04 AM.png](Pre-check-in%20to%20day-of%20check-in%20hand-off%203545933ab7b3469d981ef1ac73a440d9/Screen_Shot_2023-02-10_at_9.03.04_AM.png)

The team decided to mitigate the problem and provide a seamless experience for veterans by redirecting to the day-of check-in when the pre-check-in link gets clicked accidentally on the day of the appointment.

# **Current Pre-check-in workflow**

Each pre-check-in workflow will have the appointments information for single day stored in LoROTA.  Every time new appointment gets scheduled on different day, system will kick-off new pre-check-in workflow.

![ExistingPrecheckinWorkflow.png](Pre-check-in%20to%20day-of%20check-in%20hand-off%203545933ab7b3469d981ef1ac73a440d9/ExistingPrecheckinWorkflow.png)

# Assumptions

- Hand-off pre-check-in/day-of check-in will only solve the problem when the veteran tries to click the link on the day of the appointment within check-in window.  It doesn’t solve if the veteran clicks past appointment pre-check-in link or current day appointment outside the check-in window timeframe.

# Design Proposal from PCI-API Team

PCI-API team recommends veteran-facing services call `CHIP/refresh-appointments` endpoint to refresh the pre-check-in data in LoROTA with demographics data & insurance verification.  Once pre-check-in data gets updated, the `CHIP/initiate-check-in` endpoint will validate the patient’s appointment/insurance data to confirm the eligibility on the day-of check-in.

PCI-API team modifying,

- `CHIP/refresh-appointments` to accept optional parameters (yet to be confirmed) necessary for refreshing pre-check-in data in LoROTA with current day appointment information
- `CHIP/initiate-check-in` to accept only `uuid` for pre-check-in workflow to validate the appointment/insurance

![HandoffPrecheckinDesignProposal.png](Pre-check-in%20to%20day-of%20check-in%20hand-off%203545933ab7b3469d981ef1ac73a440d9/HandoffPrecheckinDesignProposal.png)

### CHIP/refresh-appointment Endpoint Sequence Diagram

![refresh_appointment.png](Pre-check-in%20to%20day-of%20check-in%20hand-off%203545933ab7b3469d981ef1ac73a440d9/refresh_appointment.png)

### CHIP/initiate-check-in Endpoint Sequence Diagram

![chip_initiate_check_in.png](Pre-check-in%20to%20day-of%20check-in%20hand-off%203545933ab7b3469d981ef1ac73a440d9/chip_initiate_check_in.png)

### PCI-API Team Open Items

- `CHIP/refresh-appointment` - Request payload optional parameters yet to be confirmed at the time of implementation
- `CHIP/initiate-check-in` - Response payload for success and failure scenarios

# Veteran Facing Service Design Options

Veteran-facing service will explore the pre-check-in data payload for the appointment date and decide if the pre-check-in link was clicked for the day-of appointment or for the upcoming appointment. A few set of options considered for deciding the service either vets-website or vets-api to own the decision on examining pre-check-in data. 

### Design Option 1 [Decided]

### vets-website managing hand-off with query parameter in PatientCheckIns GET

![vets-website_hand-off.png](Pre-check-in%20to%20day-of%20check-in%20hand-off%203545933ab7b3469d981ef1ac73a440d9/vets-website_hand-off.png)

### Design Option 2

### vets-api managing hand-off

![vets-api_hand-off_option1.png](Pre-check-in%20to%20day-of%20check-in%20hand-off%203545933ab7b3469d981ef1ac73a440d9/vets-api_hand-off_option1.png)

When vets-api calls `Lorota/data` GET endpoint to get appointment data, vets-api will examine the appointment data and decides if pre-check-in link was clicked on the day-of appointment.  As pre-check-in link will be sent for all appointments booked for single day, looking at the first appointment `startTime` would be good enough for the hand-off decision.

Currently, vets-api uses `V2::Lorota::Service.check-in-data` to fetch patient data for both day-of check-in and pre-check-in. As part of implementing hand-off logic, day-of check-in and pre-check-in logic from `V2::Lorota::Service.check-in-data` will be separated out and handled in separate methods. Day-of check-in workflow will use `V2::Lorota::Service.check-in-data` for fetching patient data and pre-check-in workflow will use newly implemented method `V2::Lorota::Service.pre-check-in-data` for supporting hand-off logic.

### **vets-api Detailed Implementation View**

![pre-check-in-data.png](Pre-check-in%20to%20day-of%20check-in%20hand-off%203545933ab7b3469d981ef1ac73a440d9/pre-check-in-data.png)

**Questions to Front End team?**

- Do we need to display redirecting text to veterans in front end? - Need discussion with UX
- Does the front end have a specific error page if a veteran cancelled an appointment after generating pre-check-in link?  Do we display any specific error message when there is no appointment information found in the pre-check-in data?

Open Items

- HTTP status code for refresh-appointments or initiate-check-in endpoints call failure - [422 - Unprocessable Entity](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422)??
- Front-end needs UUID in the payload

### **vets-api Hand-off Responses**

| Topic | Option 1:  Redirect  | Option 2: Pre-check-in Data |
| --- | --- | --- |
| Description | Response having 301 (:moved_permanently) status code with redirect URL in location header | Response having pre-check-in data with check_in_type (check_in/pre_check_in) in payload |
| Successful Hand-off | • HTTP Response: <html><body>You are being <a href="http://localhost:3000/check_in/v2/patient_check_ins/45ed404e-3da8-4ecd-b316-7e7efb906991">redirected</a>.</body></html>
• HTTP Status: 301
• HTTP Header: Location http://localhost:3000/check_in/v2/patient_check_ins/45ed404e-3da8-4ecd-b316-7e7efb906991{uuid} | • HTTP Response: {”payload”: {”check_in_type”: “pre_check_in”}, {”demographics”:{}, “appointments”:{}}
• HTTP Status: 200
 |
| Failure during refresh-appointments call | • HTTP Response: { error: true, message: "error message", status: 422 }
• HTTP Status: 422 | • HTTP Response: { error: true, message: "error message", status: 422 }
• HTTP Status: 422 |
| Failure during initiate-checkin call | • HTTP Response: { error: true, message: "error message", status: 422 }
• HTTP Status: 422 | • HTTP Response: { error: true, message: "error message", status: 422 }
• HTTP Status: 422 |
| Pros | • Browser automatically redirects to vets-api PatientCheckinsController
• Easier for vets-website to identify redirect with status code | • Avoid multiple calls to Lorota/data endpoint to get patient’s appointment data & faster redirect to day-of check-in application |
| Cons | • Lorota/data endpoint is called multiple times to get patient’s appointment data in PreCheckInsController & PatientCheckinsController | • Redirect relies on the check_in_type boolean flag & not in comply with HTTP response status code norms |

**vets-api managing hand-off Option  Pros**

- Lesser hops among services with Pre-check-in handoff managed within the backend system

**vets-api managing hand-off Option Cons**

- PreCheckIn GET endpoint will return pre-check-in only for upcoming appointments.  In case of calling on the day of appointment, it redirects the call to PatientCheckIn GET endpoint to return the current day appointment data

### Design Option 3

### vets-website managing hand-off with new endpoints

![vets-website_hand-off_option2.png](Pre-check-in%20to%20day-of%20check-in%20hand-off%203545933ab7b3469d981ef1ac73a440d9/vets-website_hand-off_option2.png)

**Option 2 Pros**

- vets-api PreCheckIn Controller GET sticking to the norm to retrieve pre-check-in data

**Option 2 Cons**

- Increased latency with API calls
- vets-api should spin up 2 new endpoints

### Design Option 4 [Not Recommended]

One other approach is to redirect the call to the day-of check-in application when pre-check-in website is launched on the day-of appointment.  As part of spiking around the idea, team went ahead and created an appointment in staging for pre-check-in and tried passing the UUID to day-of checkin application.   But vets-api, the backend server threw an exception while fetching patient check-in data.

Investigating failure in [vets-api](https://vagov.ddog-gov.com/logs?query=3d7a365f-4e86-4bcb-8e35-4e9bfa3552eb&cols=host%2Cservice&event=AgAAAYWYZMe6bcxqogAAAAAAAAAYAAAAAEFZV1laTm5OQUFBUDYtWjJvT1JpUWdBRAAAACQAAAAAMDE4NTk4NjQtZWMxMS00MjU3LTllMDUtMjA0MDRiYzJjZDJj&index=&messageDisplay=inline&stream_sort=time%2Cdesc&viz=stream&from_ts=1673298269016&to_ts=1673299169016&live=true) with `nil:NilClass` exception in [address_helper.rb](https://github.com/department-of-veterans-affairs/vets-api/blob/c12f33547b4a67f4e525ef6bce33b19f81481fa6/modules/check_in/app/serializers/check_in/v2/appointment_data_serializer.rb#L65-L65), exception was thrown from empty demographics JSON object from CHIP endpoint.

[CHIP/initiatePreCheckin endpoint](https://github.com/department-of-veterans-affairs/chip/blob/25684401b572e88e181c0ba7cc5e8dc3d152ec82/src/initiatePreCheckin/index.js#L291) called from VEText to generate text message link saves only appointment data in Lorota (Code reference: [saveAppointments](https://github.com/department-of-veterans-affairs/chip/blob/25684401b572e88e181c0ba7cc5e8dc3d152ec82/src/initiatePreCheckin/index.js#L342)) and demographics data not available until veteran launches pre-check-in application. 

Option of redirecting directly to day-of check-in application ruled out with lack of demographics data.
