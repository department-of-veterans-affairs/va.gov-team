# Slot Service

* [APIs Covered](#apis-covered)
* [Functions](#functions)
* [Feature Flag](#feature-flag)

<a name="apis-covered"></a>
## APIs Covered

- VAR
  - `/vaos/v0/facilities/${facilityId}/available_appointments?type_of_care_id=${typeOfCareId}&clinic_ids[]=${clinicId}&start_date=${startDate}&end_date=${endDate}`
- VSP
  - `/Slot`

<a name="functions"></a>
## Functions

<dl>
<dt><a href="#getSlots">getSlots()</a> ⇒ <code>Array</code></dt>
<dd><p>Fetch appointment slots based on start/end date times based on a VistA sites
availability for a particular type of care</p>
</dd>
</dl>

<a name="getSlots"></a>

### getSlots(slotsRequest) ⇒ <code>Array</code>
Fetch appointment slots based on start/end date times based on a VistA sites
availability for a particular type of care

**Returns**: <code>Array</code> - A FHIR searchset of Slot resources  

| Param | Type | Description |
| --- | --- | --- |
| slotsRequest | <code>Object</code> | An object containing the parameters necessary to retrive appointment slots |
| slotsRequest.siteId | <code>string</code> | 3 digit facility ID |
| slotsRequest.typeOfCareId | <code>string</code> | 3 digit type of care id |
| slotsRequest.clinicId | <code>string</code> | clinic id |
| slotsRequest.startDate | <code>string</code> | start date to search for appointments lots formatted as YYYY-MM-DD |
| slotsRequest.endDate | <code>string</code> | end date to search for appointments lots formatted as YYYY-MM-DD |
<a name="feature-flag"></a>
## Feature Flag
If `vaOnlineSchedulingVspAppointmentNew` is true, this service will use the new VSP FHIR endpoints rather than the legacy VAR endpoints.
