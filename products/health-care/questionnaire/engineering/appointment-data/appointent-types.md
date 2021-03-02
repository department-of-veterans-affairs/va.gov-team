# Appointment Data Breakdown

- [Appointment Data Breakdown](#appointment-data-breakdown)
  - [Appointment Type](#appointment-type)
    - [Questions](#questions)
  - [Answers](#answers)
      - [Appointment Types used in VOAS](#appointment-types-used-in-voas)
      - [Appointment Datastruture from MAP](#appointment-datastruture-from-map)

## Appointment Type

There is a type on the appointment object. But there are some questions around it.

### Questions

1. In the data for appointmenet types, where does the ID come from?
2. In the return structure of an appointment, the type is now "REGULAR". That is no where in the predefined types.  Where did that come from and where did the type go?

## Answers

[Answered here](../meetings/2020-10-29-appointment-type.md)

#### Appointment Types used in VOAS

``` js
export const TYPES_OF_CARE = [
  {
    id: '323',
    name: 'Primary care',
    group: 'primary',
    ccId: 'CCPRMYRTNE',
    cceType: 'PrimaryCare',
  },
  {
    id: '160',
    name: 'Pharmacy',
    group: 'primary',
  },
  {
    id: '502',
    name: 'Mental health',
    group: 'mentalHealth',
  },
  {
    id: '125',
    name: 'Social work',
    group: 'mentalHealth',
  },
  {
    id: '211',
    name: 'Amputation care',
    group: 'specialty',
  },
  {
    id: '203',
    name: 'Audiology and speech',
    label: 'Audiology and speech (including hearing aid support)',
    group: 'specialty',
    ccId: ['CCAUDHEAR', 'CCAUDRTNE'],
    cceType: 'Audiology',
  },
  {
    id: '372',
    name: 'MOVE! weight management program',
    group: 'specialty',
  },
  {
    id: '123',
    name: 'Nutrition and food',
    group: 'specialty',
    ccId: 'CCNUTRN',
    cceType: 'Nutrition',
  },
  {
    id: PODIATRY_ID,
    name: 'Podiatry',
    label: 'Podiatry (only available online for Community Care appointments)',
    ccId: 'CCPOD',
    group: 'specialty',
    cceType: 'Podiatry',
  },
  {
    id: 'SLEEP',
    name: 'Sleep medicine',
    group: 'specialty',
  },
  {
    id: 'EYE',
    name: 'Eye care',
    group: 'specialty',
  },
];

```

#### Appointment Datastruture from MAP

``` json
{
 "data": {
  "id": "195bc02c0518870fc6b1e302cfc326b0",
  "type": "va_appointments",
  "attributes": {
   "start_date": "2020-08-26T15:00:00Z",
   "sta6aid": "983",
   "clinic_id": "848",
   "clinic_friendly_name": "CHY PC VAR2",
   "facility_id": "983",
   "community_care": false,
   "patient_icn": "1013124304V115761",
   "vds_appointments": [{
    "booking_notes": "Follow-up/Routine: testing reason for visit field availability",
    "appointment_length": "20",
    "id": "848;20200826.090000",
    "appointment_time": "2020-08-26T15:00:00Z",
    "clinic": {
     "name": "CHY PC VAR2",
     "ask_for_check_in": false,
     "facility_code": "983",
     "facility": {
      "display_name": "VDS Facility Display Name"
     }
    },
    "type": "REGULAR",
    "current_status": "NO ACTION TAKEN/TODAY"
   }],
   "vvs_appointments": []
  }
 },
 "meta": {
  "pagination": {
   "current_page": 0,
   "per_page": 0,
   "total_pages": 0,
   "total_entries": 0
  }
 }
}
```
