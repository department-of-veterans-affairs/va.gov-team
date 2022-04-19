# RFC: Switch VA Mobile app to VAOS V2 appointments

- Date: 2022-01-13
- Related Issue: https://github.com/department-of-veterans-affairs/va-mobile-app/issues/2227

## Background
The VA mobile app fetches veterans' VA appointment histories from the VAOS V0 appointments endpoint and their Community Care (CC) clinic appointment history from the community care appointments endpoint. VAOS recently developed a V2 appointments endpoint that includes both VA and CC appointments. We would like to switch to using the new endpoint before the old one is deprecated.

## Motivation
The VAOS V0 appointments endpoint is being deprecated.

## Design

The current mobile appointment data comes from two sources: the VAOS V0 appointments endpoint and Community Cares endpoints. The appointments controller uses the appointments proxy to gather appointments from both sources, normalize the data via adapters, and interleaves the results.

The VA appointments endpoint only includes the facility ID without its name and other relevant information, so the proxy also makes a request to gather facility data, which is used to complete the appointments data. The Community Care appointments endpoint includes facility data.

The V2 appointments endpoint includes both VA and CC appointments, so we should no longer need to fetch CC appointments separately. The current mock data for CC appointments is not complete and does not include embedded clinic information like the current endpoint does. That information may later be added, but if it isn't, we may need to make a secondary request for that information via the VAOS clinic endpoint.

This effort will require:
- small changes to the proxy
- rewriting the VA appointments adapter
- removing or rewriting the CC appointments adapter
- changes to the mobile appointments service to use the new url
- possibly adding a new service for fetching clinic data
- substantial effort to ensure that the data normalization process is correct and matches the current data sent to the mobile app. See the mapping sections below for an initial attempt to map incoming data to the existing mobile appointment payload.

### VA Appointments Mapping:

id: id
appointment_type:
  v0 adapter - the options are 'VA' and 3 video types.
  v2 - probably derived from kind. only kinds in sample data are clinic, cc, phone, and telehealth.
cancel_id:
  v0 adapter - base64 encoded string derived from multiple data points if it's a VA office appointment. otherwise, nil.
  v2 - this should still work
comment:
  v0 adapter - currently either booking_note or instructions_title.
  v2 - has a comment attribute, does nto have booking note or instructions
facility_id: facility_id
sta6aid: not in v2
healthcare_provider: nil, only used by CC appointments
healthcare_service:
  v0 adapter - for va appointments, uses clinic name. for video appointments, uses provider info.
  v2 - clinic name can be gotten from the clinic index. sample data does not have examples of video appointments.
location:
  id: facility_id
  name:
    v0 adapter - derived from a hard-coded list based on id or defaults to nil
    v2 - this approach should still work
  address: all facility address data aside from items listed is derived from the facilities endpoint
minutes_duration:
  v0 adapter - VA and appointments use appointment_length. other appointment types use duration.
  v2 - booked VA and telehealth appointments (but not cancelled) have minutesDuration. phone appointments do not seem to have this, nor do non-booked appointments
phone_only:
  v0 adapter - defaults to true. some records had a phone_only attribute.
  v2 - this attribute does not exist in sample data. phone_only may be equivalent to an appointment of `"kind": "phone"`
start_date_local:
  v0 adapter - uses start_date adjusted to time zone based on a hard-coded hash of facility data
  v2 - incoming version has a start tim for booked and cancelled appointments. same approach should work for appointments that have that value.
start_date_utc: same as start_date_local but without localization
status:
  v0 adapter - this is derived from the status included in the response body. if appointment is past and status is one of several hard-coded options, show HIDDEN. if it's in the future and one of a few hard-coded options, show HIDDEN. There are also a number of statuses that lead to showing CANCELLED. Otherwise, show BOOKED.
  v2 - the V2 sample data only has a status field but the only statuses used are: booked, fulfilled, cancelled, and proposed.
status_detail:
  v0 adapter - this is the original status from the response body. there seem to be numerous options that are probably not included in v2.
  v2 - this probably isn't relevant in v2, because it seems the statuses v2 provides are already simplified
time_zone: based on hard-coded data and facilty id; this will still work moving forward,
vetext_id:
  v0 adapter - this is simply "#{appointment_hash[:clinic_id]};#{start_date_local.strftime('%Y%m%d.%H%S%M')}".
  v2 - the same approach will work when we have a start time, but non-booked appointments do not include a start time.
reason:
  v0 adapter - booking_note
  v2 - unclear what this would be
is_covid_vaccine:
  v0 adapter - response[:char4] == 'CDQC'. based on VCR, it seems that char4 is only included for covid vaccines.
  v2 - no examples of this in v2 sample data. There are covid appointments in the web UI, so it may simply be unavailable in v2

### CC Appointments Mapping:

id: id
appointment_type:
  v0 adapter - hard-coded to COMMUNITY_CARE
  v2 - same, but it would be determined by `"kind": "cc"`
cancel_id: nil
comment:
  v0 adapter - instructions_to_veteran
  v2 - some appointments have patientInstruction, but many also have a comment field.
facility_id:
  v0 adapter - nil
  v2 - CC appointments have facility ids, presumably because clinics are under a facility umbrella
sta6aid:
  v0 adapter - nil
  v2 - not in payload, just leave nil
healthcare_provider:
  v0 adapter - nil
  v2 - in the test data, no CC appointments have practitioner data but booked CC and telehealth appointments have this information and it's likely booked CC appointments would as well
healthcare_service:
  v0 adapter - provider_pratice (I believe this is the clinic name)
  v2 - some appointments have a practiceName and the VAOS clinic index endpoint has a serviceName that may be equivalent
location:
  id: nil
  name:
    v0 adapter - same as healthcare_service
    v2 - perhaps derive from VAOS clinic index
  address:
    v0 adapter - all facility address fields are derived from the CC appointments response
    v2 - unclear if this will be included or will need to requested from the clients endpoint
minutes_duration:
  v0 adapter - hard-coded to 60
  v2 - unclear if it'll be available because all sample appointments are "proposed" which don't include this
phone_only: hard-coded to false, not sure what it means
start_date_local:
  v0 adapter - derived from appointemnt time, tim zone, and clinic address
  v2 - unclear if it'll be available because all sample appointments are "proposed" which don't include this
start_date_utc:
  v0 adapter - previously derived from appointemnt time and time zone
  v2 - unclear if it'll be available because all sample appointments are "proposed" which don't include this
status:
  v0 adapter - always "booked"
  v2 - includes status. do we only care about booked CC appointments?
status_detail:
  v0 adapter - nil
  v1 - in VA appointments, this is the status that we receive from V0, which we normalize into "status". perhaps not relevant to CC.
time_zone: unclear if that will be available in booked appointments,
vetext_id: hard-coded to nil, probably no reason it can't be formatted the same as in the VA adapter.
reason:
  v0 adapter - nil
  v2 - cancelled VA appointments have a cancellationReason. unclear if cancelled CC appointments do.
is_covid_vaccine: false. Probably not relevant to CC appointments.
## Risks
At this time, the V2 appointments endpoint is not complete and is blocked by upstream requirements. The VAOS team can't give a timeline because they don't know when the upstream changes will be ready.

There are substantial differences between the responses from the VAOS V0 appointments endpoint and the new V2 endpoint, and the mocked data being provided by the staging V2 appointments endpoint does not cover all cases. The adapter currently being used for VA appointments involves some complex logic to adapt the V0 response. This leaves a lot ambiguity and room for error in trying to map the new incoming data to the payload expected in the mobile app.

## Alternatives
None. The endpoint is being deprecated and this is the only alternative we're aware of. We will eventually need to switch to v2 appointments.
