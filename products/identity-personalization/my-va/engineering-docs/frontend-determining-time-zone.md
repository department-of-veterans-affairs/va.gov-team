# how My VA determines a user's timezone

as of June 14, 2024

![Screenshot 2024-06-14 at 10 05 40 AM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/8542413/a6fe291e-d74d-478f-84b3-125b0b0b5c0d)


## Components of the Appointments card
### Monday, July 15, 2024

**Code** 
```
  <p className="vads-u-margin-bottom--1">
    {format(
      utcToZonedTime(localStartTime, timeZoneId),
      'eeee, MMMM d, yyyy',
    )}
  </p>
```

where 
```  
  const nextAppointment = appointments?.[0];
```  
```  
  const localStartTime = nextAppointment?.localStartTime;
```
and
`appointments` maps to state data, specifically `state.health?.appointments?.data`

which returns a response that looks like the following:
- an array of objects 
- each object contains data for `localStartTime`, `timeZoneId`, `locationName`, etc
  
```
  {
    id: 'eeaf20ccb26a2ef7669688c835d0e97ab1366f89701323390c63daa7fd83f640',
    kind: 'cc',
    status: 'booked',
    description: 'Cardiology Testing SEOC 1.6.6 PRCT REV',
    locationId: '984',
    start: '2024-08-09T12:20:00Z',
    created: '2022-06-22T23:41:03Z',
    localStartTime: '2024-08-09T08:20:00.000-04:00',
    location: {
      id: '984',
      type: 'appointments',
      attributes: {
        id: '984',
        vistaSite: '984',
        vastParent: '984',
        type: 'va_health_facility',
        name: 'Dayton VA Medical Center',
        classification: 'VA Medical Center (VAMC)',
        timezone: {
          timeZoneId: 'America/New_York'
        },
      }
    },
    isVideo: false,
    isUpcoming: true,
    startsAt: '2024-08-09T08:20:00-04:00',
    type: 'cc',
    timeZone: 'ET',
    facility: {
      id: '984',
      vistaSite: '984',
      vastParent: '984',
      type: 'va_health_facility',
      name: 'Dayton VA Medical Center',
      classification: 'VA Medical Center (VAMC)',
      timezone: {
        timeZoneId: 'America/New_York'
      },
    },
    providerName: 'Dayton VA Medical Center'
  },
```


### Time: 8:05 a.m. MT
**Code**
```
  <p className="vads-u-margin-bottom--1 vads-u-margin-top--1">
    {`Time: ${format(
      utcToZonedTime(localStartTime, timeZoneId),
      'h:mm aaaa',
    )} ${timeZone.abbreviation}`}
  </p>
```

### Cheyenne VA Medical Center
**Code**

```
  {locationName && <p className="vads-u-margin-top--1">{locationName}</p>}
```

### Schedule and manage your appointments 
**Code**

```
  <CTALink
    text="Schedule and manage your appointments"
    href="/my-health/appointments"
    showArrow
    className="vads-u-font-weight--bold"
    onClick={() =>
      recordEvent({
        event: 'nav-linkslist',
        'links-list-header': 'Schedule and manage your appointments',
        'links-list-section-header': 'Health care',
      })
    }
  />
```

## External functions used
- utcToZonedTime (from [date-fns-tz v1.1.1](https://github.com/marnusw/date-fns-tz))
- getAppointmentTimeZone ([from My VA date-formatting utils](https://github.com/department-of-veterans-affairs/vets-website/blob/My-VA/allison/81474/va-icon--udpate/src/applications/personalization/dashboard/utils/date-formatting/timezone.js#L106))
