# Appointment Type

## Date

10/29/2020 @ 4pm EST. 

## Attendees

- Mark Dewey
- Dillo Raju
- Stephen Barrs
- Ming Ligh
- Marcy ????

## Subject

The team had [questions around appointment types](../appointment-data/appointent-types.md) which prompted this informal Q&A with Macy a SME of that information.

## Questions That got answered

> In the data for appointment types, where does the ID come from?

That is the Stop Code. This is detailed below.

> In the return structure of an appointment, the type is now "REGULAR". That is no where in the predefined types.  Where did that come from and where did the type go?

Those are not related. That appointment type is for organizational purposes, not medical purpose. 

## Notes

- Stop code is probably a safe bet to determine appointment type
- Stop codes are assigned to a clinics type
  - for example, all Womans Health Clinics have the same Stop Code
- All clinics of the same type have the same stop code, regardless of Facility. 
- There 500+ stop codes
- We would only care about the 10 or so that VOAS has,
- Updated on a cadence of at least once a year.
  - Manual Process to update the stop codes
  - Not all codes are updated every year
- In theory, a required piece of information.
  - Stephen tried to call some APIs to see that information and that information was not present

## Summary

The team should be able to use the StopCode to determine the appointment type. If we show the type in the UI, we can only care about a handful and then default a to generic message if we do have a mapping for the label. 

Using the MAP/MAS endpoints, the clinic information is not always returned with the appointment, but there is a [clinic endpoint](https://veteran.apps.va.gov/cdw/v3/facilities/516/clinics?pageSize=0) that we can to get that stop code if the information is not there. 

>I have asked the MAS devs to have MAS make the call into CDW Service and populate this data.  They asked us to provide a list of any data fields we would like to see and they will analyze (due Monday - we can look at the MAS Swagger VDSSchedulingClinic structure). Until then we should be able to pull the clinicName from the current appointment response and query CDW to get the primary stop code.  For example, in the response from the URL above, searching for PHR PACT 5 will return data for a specific clinic based on clinic name.
>> From Stephen

## Questions

- How do we know when new stop codes are released?

## Action Items

- [ ] Meet with team to digest this information. 
- [ ] Create list a data fields we would like to see in the appointments for the MAS team.
- [ ] Create tickets after meeting.