# Appointment Service

* [APIs Covered](#apis-covered)
* [Functions](#functions)
* [Feature Flag](#feature-flag)

<a name="apis-covered"></a>
## APIs Covered

- VAR
  - `/vaos/v0/appointments`
- VSP
  - `/Appointment`

<a name="functions"></a>
## Functions

<dl>
<dt><a href="#getBookedAppointments">getBookedAppointments(startDate, endDate)</a> ⇒ <code>Object</code></dt>
<dd><p>Fetch the logged in user&#39;s confirmed appointments that fall between a startDate and endDate</p>
</dd>
<dt><a href="#getVARFacilityId">getVARFacilityId(appointment)</a> ⇒ <code>String</code></dt>
<dd><p>Gets legacy VAR facility id from HealthcareService reference</p>
</dd>
<dt><a href="#getVARClinicId">getVARClinicId(appointment)</a> ⇒ <code>String</code></dt>
<dd><p>Gets legacy var clinic id from HealthcareService reference</p>
</dd>
<dt><a href="#getVideoAppointmentLocation">getVideoAppointmentLocation(appointment)</a> ⇒ <code>String</code></dt></dt>
<dd><p>Returns the lcoation of a video appointment</p>
</dd>
</dl>
<a name="getBookedAppointments"></a>

### getBookedAppointments(startDate, endDate) ⇒ <code>Object</code>
Fetch the logged in user's confirmed appointments that fall between a startDate and endDate


**Returns**: <code>Array</code> - A FHIR searchset of Appointment resources  

| Param     | Type                | Description               |
| --------- | ------------------- | ------------------------- |
| startDate | <code>String</code> | Date in YYYY-MM-DD format |
| endDate   | <code>String</code> | Date in YYYY-MM-DD format |

<a name="getVARFacilityId"></a>

### getVARFacilityId(appointment) ⇒ <code>String</code>
Gets legacy VAR facility id from HealthcareService reference


**Returns**: <code>String</code> - Legacy VAR facility id  

| Param       | Type                | Description                    |
| ----------- | ------------------- | ------------------------------ |
| appointment | <code>Object</code> | VAR Appointment in FHIR schema |

<a name="getVARClinicId"></a>

### getVARClinicId(appointment) ⇒ <code>String</code>
Gets legacy var clinic id from HealthcareService reference


**Returns**: <code>String</code> - Legacy VAR clinic id  

| Param       | Type                | Description                    |
| ----------- | ------------------- | ------------------------------ |
| appointment | <code>Object</code> | VAR Appointment in FHIR schema |

<a name="getVideoAppointmentLocation"></a>

### getVideoAppointmentLocation(appointment) ⇒ <code>String</code>
Returns the lcoation of a video appointment


**Returns**: The location id where the video appointment is located  

| Param       | Type                | Description                 |
| ----------- | ------------------- | --------------------------- |
| appointment | <code>Object</code> | A FHIR appointment resource |

<a name="feature-flag"></a>
## Feature Flag
