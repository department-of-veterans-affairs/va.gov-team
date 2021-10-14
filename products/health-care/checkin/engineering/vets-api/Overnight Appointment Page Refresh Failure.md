# VA Appointment Page Overnight Refresh Issue

## 1. Background

Check-In experience team as part of Veterans Health Care organization launched a software product for veterans to check-in their hospital visit using their mobile device.  On a high level, goal is to manage the veterans pre-appointment actions online and save time for the veterans to avoid queues in hospital facility to check-in for their appointment.

End-to-end workflow is, when a veteran sends the text **check in** to the displayed number from the poster in the clinic, a check-in link will be sent to their mobile device.  If veteran identified by the mobile number and have appointments for that day, a url for checking in for the appointment will be sent to the mobile device.  Tapping on the URL, veteran will be presented with an authentication page to enter last name and last 4 SSN to view their appointments to check in.

Once veteran gets authenticated with valid last name and last 4 SSN, veteran will be able to see the list of the appointments for the day in their phone.  And if the current time is within 30 mins before appointment start time or 5 mins after appointment start time, veteran can check-in by clicking on Check In button in the browser.

## 2. Problem Statement

As part of check-in experience, phase 4 product launch for supporting multiple appointments in veteran’s check-in page, back-end team implemented vets-api with refresh functionality to enable the veteran to view up-to date appointment information anytime during the day.

This led to an edge case scenario of veteran refreshing the already opened multiple appointment page the next day and seeing an error message “Something went wrong on our end.  Check in staff member”.  Error page leads to increase in frustration for the veterans in reusing the product and adds more overhead for Medical Support Assistant (MSA) to check-in the veteran for the appointment.

### **PatientController Log in Sentry:**

[http://sentry.vfs.va.gov/share/issue/b7441628393b4bf1b50a4d2e0c7ed1d7/](http://sentry.vfs.va.gov/share/issue/b7441628393b4bf1b50a4d2e0c7ed1d7/)

Error Snapshot from Sentry,

> Unmapped VA900 (Backend Response: { status: 500, message: Error while updating data in LoROTA: TypeError: Cannot read property 'StartTime' of undefined) }
> 

### vets-website Error Message

Snapshot of the error page displayed to veteran,

![Screen Shot 2021-10-13 at 4.12.22 PM.png](VA%20Appointment%20Page%20Overnight%20Refresh%20Issue%20db20ba28174e460c8ea0864373b5730b/Screen_Shot_2021-10-13_at_4.12.22_PM.png)

## 3. Existing Architecture for Appointments Refresh

Check-in experience software system built with four major back-end services.

1. VisTA → Source of truth for patient appointment data usually accessing via CHeck-in experience Integration Point (CHIP)
2. CHIP → Service for accessing patient appointment information in VisTA and LoROTA
3. LoROTA → Low Risk One Time Authentication system for storing patient minimal data required for appointment check-in
4. vets-api → Immediate back-end service integrated with front end.  Maintains veterans session for a day and integrated with CHIP & LoROTA for getting appointment data to display in the front end.

In current implementation, vets-api service calls CHIP service to get the latest appointment information. CHIP service in turn calls LoROTA/PATCH API with data from VisTA to save new set of appointment data in DynamoDB.  Once CHIP returns 200 back to vets-api after successful LoROTA/PATCH call, vets-api makes GET request to LoROTA to get list of appointments for veteran to check-in. 

On another note, LoROTA has an automated task to delete expired appointment data associated with an UUID for cleaning up unwanted data in DynamoDB.  When vets-website page gets refreshed for a deleted UUID, LoROTA returns 404 status code to CHIP indicating item not found.

For all failure status code and error returned from LoROTA, CHIP always send 500 status code to upstream for indicating appointment refresh failure.  vets-api sends CHIP status code with response message to vets-website to indicate the failure.  This eventually causes veteran to see "Something went wrong" failure page as vets-website will be rendering error message for 500 Internal Server Error Status Code. 

### vets-api Current Appointment Refresh Sequence Diagram

![MultipleAppointmentRefreshProposal-ExistingArchitecture.png](VA%20Appointment%20Page%20Overnight%20Refresh%20Issue%20db20ba28174e460c8ea0864373b5730b/MultipleAppointmentRefreshProposal-ExistingArchitecture.png)

### CHIP Error Log Snapshot

```
START RequestId: d8f8d1d6-5f3f-48c6-b3aa-dd443feb0d64 Version: $LATEST
{
    "level": 30,
    "time": 1633613997167,
    "pid": 8,
    "hostname": "169.254.49.45",
    "msg": "refresh appointments started"
}

{
    "level": 30,
    "time": 1633613997938,
    "pid": 8,
    "hostname": "169.254.49.45",
    "msg": "Calling VistA API:https://staging.api.vetext.va.gov/vista-api/api/v1/sdes/appts-by-patient/500/407/T/T+1"
}

2021-10-07T13:39:58.145Z	d8f8d1d6-5f3f-48c6-b3aa-dd443feb0d64	INFO	basicScoedInfoList:  []
2021-10-07T13:39:58.145Z	d8f8d1d6-5f3f-48c6-b3aa-dd443feb0d64	INFO	fullScopedInfoList:  []
{
    "level": 50,
    "time": 1633613999562,
    "pid": 8,
    "hostname": "169.254.49.45",
    "msg": "Error while updating data in LoROTA: TypeError: Cannot read property 'StartTime' of undefined"
}

2021-10-07T13:39:59.562Z	d8f8d1d6-5f3f-48c6-b3aa-dd443feb0d64	WARN	TypeError: Cannot read property 'StartTime' of undefined
    at getValidStartTime (/opt/nodejs/node_modules/lorotaService.js:50:53)
    at LorotaService.generateOptions (/opt/nodejs/node_modules/lorotaService.js:177:19)
    at Runtime.exports.handler (/var/task/index.js:135:52)
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
END RequestId: d8f8d1d6-5f3f-48c6-b3aa-dd443feb0d64
REPORT RequestId: d8f8d1d6-5f3f-48c6-b3aa-dd443feb0d64	Duration: 2398.58 ms	Billed Duration: 2399 ms	Memory Size: 1024 MB	Max Memory Used: 90 MB	Init Duration: 645.60 ms
```

### Possible INTERNAL_SERVER_ERROR from LoROTA

LoROTA/patch operation throws INTERNAL_SERVER_ERROR from three different code path,

1. [Failure during DynamoDB.get() call](https://github.com/department-of-veterans-affairs/lorota/blob/ebcee0dc731c4251bd3c3b159af92405fa8f086f/src/lambdas/project-LoROTA-patch/index.js#L29)
2. [Failure while adding newPayload with existing appointment data](https://github.com/department-of-veterans-affairs/lorota/blob/ebcee0dc731c4251bd3c3b159af92405fa8f086f/src/lambdas/project-LoROTA-patch/index.js#L61-L61)
3. [Failure during DynamoDB.update() call](https://github.com/department-of-veterans-affairs/lorota/blob/ebcee0dc731c4251bd3c3b159af92405fa8f086f/src/lambdas/project-LoROTA-patch/index.js#L71-L71)

## 4. Design Options

Section describes possible design options for resolving the issue explained in [Section 2]().

### Option 1 (Recommended)

One of the reasons for veteran seeing failure while refreshing previous day browser is, LoROTA not having appointment data for previously generated UUID.  LoROTA cleanup automated task deletes the expired appointment data on a daily basis. And CHIP fails with LoROTA/PATCH operation failure to update new appointment information and returns status code 500 to vets-api.

Instead of vets-api immediately calling CHIP for refreshing appointments, vets-api can query LoROTA for the given UUID with relevant read scope to confirm UUID validity and move forward with refreshing appointments.  

Requesting LoROTA for GET endpoint with below set of status codes, vets-api/vets-website can differentiate the failure types and eventually can provide relevant error message to Veteran for sending new check-in message.

1. HTTP Status Code 200 (Successful) for appointment data within/outside check-in time threshold for current date
2. HTTP StatusCode 404 (Not Found) for UUID not available in LoROTA
3. HTTP StatusCode 401 (Unauthorized) for valid UUID with invalid token
4. HTTP Status Code 403 (Forbidden) for appointment data inaccessible with current time
5. HTTP Status Code 410 (Gone) for expired data
6. HTTP Status Code 500 for UnKnown error

### vets-api Appointment Refresh Sequence Diagram

![MultipleAppointmentRefreshProposal-NewProposal.png](VA%20Appointment%20Page%20Overnight%20Refresh%20Issue%20db20ba28174e460c8ea0864373b5730b/MultipleAppointmentRefreshProposal-NewProposal.png)

vets-api/patient_check_ins_controller/GET responses to vets-website (Front End) can be,

1. HTTP Status Code 200 (Successful) with appointment data 
2. HTTP Status Code 401 (Unauthorized) if no LoROTA token in Redis
3. HTTP StatusCode 404 (Not Found) for UUID not available in LoROTA
4. HTTP Status Code 403 (Forbidden) for appointment data inaccessible with current time 
5. HTTP Status Code 410 (Gone) for expired data
6. HTTP Status Code 424 for Dependency Failure (for failure with CHIP or LoROTA)

With specific status code like 401/404/403/410 returned to front end, veteran can be displayed with relevant message like,

> "Your previous appointment session has expired. Please text check in to the phone number mentioned in poster to check-in for new appointments”
> 

Above message would help veteran to move forward with check-in instead of reaching out to staff member.

### Option 1 Pros

1. With new GET endpoint from LoROTA, vets-api will always have a way to pre-validate UUID in the request before processing.
2. CHIP and VisTA calls can be avoided in case of requests received with invalid UUID

### Option 1 Cons

1. vets-api will be making additional LoROTA/GET call for happy path scenarios

### Option 2

With current implementation, CHIP sends HTTP Status Code 500 for all [update failures](https://github.com/department-of-veterans-affairs/chip/blob/9e582bc6766d830d5cf1b43a7fe4db0f1311ec45/src/refreshAppointments/index.js#L148-L151) from LoROTA. And vets-api returns the status code code 500 as received from CHIP to vets-website.  Veteran always see "We're sorry.  Something went wrong on our end.  Check in with staff member or Call us".

Instead of sending 500 status code from CHIP, returning 404 status code for [GET failure](https://github.com/department-of-veterans-affairs/lorota/blob/ebcee0dc731c4251bd3c3b159af92405fa8f086f/src/lambdas/project-LoROTA-patch/index.js#L37-L38) from Lorota and vets-api sending 404 back to vets-website, veteran can be shown a specific message like,

> "Your previous appointment session has expired. Please text check in to the phone number mentioned in poster to check-in for new appointments”
> 

### Option 2 Pros

1. Minimal changes only in CHIP service layer

### Option 2 Cons

1. Staff facing side services need to be validated for changes in CHIP side for returning new HTTP status code 404
