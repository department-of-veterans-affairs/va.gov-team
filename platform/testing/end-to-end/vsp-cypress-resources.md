# Cypress Resources Reference Guide

This guide is a comprehensive guide of Cypress related resources currently active within VSP.

The following helpers and mocks are currently used within Cypress tests on `vets-frontend`. In addition to their directories, the purpose, an import method, and a reference of the function is supplied.

# Table of Contents

1. [Cypress & VAOS Helpers](#cypress-vaos-helpers)
   1. [initApplicationMock](#init-application-mock)
   2. [initMockProfile](#init-mock-profile)
   3. [initAppointmentListMock](#init-appointment-list-mock)
   4. [createPastVAAppointments](#create-past-va-appointments)
   5. [initCommunityCareMock](#init-community-care-mock)
   6. [initExpressCareMocks](#init-express-care-mocks)
   7. [initVAAppointmentMock](#init-va-appointment-mock)
2. [Appointment Helpers](#appointment-helpers)
   1. [chooseTypeOfCareTest](#choose-type-of-care-test)
   2. [chooseVAFacilityTest](#choose-va-facility-test)
   3. [chooseClinicTest](#choose-clinic-test)
   4. [choosePreferredDateTest](#choose-preferred-date-test)
   5. [selectTimeSlotTest](#select-time-slot-test)
   6. [reasonForAppointmentTest](#reason-for-appointment-test)
   7. [contactInfoTest](#contact-info-test)
   8. [reviewTest](#review-test)
   9. [confirmationPageTest](#confirmation-page-test)
3. [Mocks](#mocks)
   1. [confirmedVA](#confirmed-va)
   2. [confirmedCC](#confirmed-cc)
   3. [requests](#requests)
   4. [cancelResons](#cancel-reasons)
   5. [supportedSites](#supported-sites)
   6. [facilities](#facilities)
   7. [facilities983](#facilities-983)
   8. [clinicList983](#clinic-list-983)
   9. [slots](#slots)
   10. [getVAAppointmentMock](#get-va-appointment-mock)
   11. [getExpressCareRequestCriteriaMock](#get-express-care-request-criteria-mock)
   12. [getParentSiteMock](#get-parent-site-mock)

# Cypress & VAOS Helpers <a name="cypress-vaos-helpers"></a>

Custom helpers are reusable components for commonly needed test situations, like loading custom data, profiles, or appointments. Below is a list of helpers currently written along with import methods, purpose, and a reference guide.

Consider writing a reusable helper when an action is needed to perform certain tests. They are located in `src/applications/gi/tests/e2e/cypress-helpers.js` and `src/applications/vaos/tests/e2e/vaos-cypress-helpers.js`.

#### initApplicationMock <a name="init-application-mock"></a>

Import: `import { initApplicationMock } from './cypress-helpers'`

Purpose: Sets up search results and a profile. Calling this also loads calculator_constants.

Reference:

```javascript
export const initApplicationMock = (
  profile = institutionProfile,
  results = searchResults
) => {
  cy.route('GET', '/v0/gi/institutions/autocomplete**', autocomplete).as(
    'defaultAutocomplete'
  );
  cy.route('GET', '/v0/gi/institutions/search**', results).as('defaultSearch');

  initMockProfile(profile);
};
```

#### initMockProfile <a name="init-mock-profile"></a>

Import: `import { initMockProfile } from './cypress-helpers';`

Purpose: Mocks the call for the profile.

Reference:

```javascript
export const initMockProfile = (profile) => {
  const facilityCode = profile.data.attributes.facility_code;
  cy.route('GET', `/v0/gi/institutions/${facilityCode}`, profile).as(
    `profile${facilityCode}`
  );
};
```

#### initAppointmentListMock <a name="init-appointment-list-mock"></a>

Import: `import { initAppointmentListMock, createPastVAAppointments, } from './vaos-cypress-helpers'`

Purpose: Sets up appointments with confirmed VA & CC dates, a cancellation, and appointment request message.

Reference:

```javascript
export function initAppointmentListMock() {
  cy.server();
  cy.login();
  mockFeatureToggles();
  mockSupportedSites();

  cy.route({
    method: 'GET',
    url: '/vaos/v0/appointment_requests*',
    response: updateRequestDates(requests),
  });

  cy.route({
    method: 'GET',
    url: /.*\/v0\/appointments.*type=va$/,
    response: updateConfirmedVADates(confirmedVA),
  });

  cy.route({
    method: 'GET',
    url: /.*\/v0\/appointments.*type=cc$/,
    response: updateConfirmedCCDates(confirmedCC),
  });

  cy.route({
    method: 'GET',
    url: '/vaos/v0/facilities/983/cancel_reasons',
    response: cancelReasons,
  });

  cy.route({
    method: 'PUT',
    url: '/vaos/v0/appointments/cancel',
    response: '',
  });

  cy.route({
    method: 'GET',
    url:
      '/vaos/v0/appointment_requests/8a48912a6cab0202016cb4fcaa8b0038/messages',
    response: {
      data: [
        {
          id: '8a48912a6cab0202016cb4fcaa8b0038',
          type: 'messages',
          attributes: {
            surrogateIdentifier: {},
            messageText: 'Request 2 Message 1 Text',
            messageDateTime: '11/11/2019 12:26:13',
            senderId: '1012845331V153043',
            appointmentRequestId: '8a48912a6cab0202016cb4fcaa8b0038',
            date: '2019-11-11T12:26:13.931+0000',
            assigningAuthority: 'ICN',
            systemId: 'var',
          },
        },
      ],
    },
  });
}
```

#### createPastVAAppointments <a name="create-past-va-appointments"></a>

Import: `import { initAppointmentListMock, createPastVAAppointments, } from './vaos-cypress-helpers'`

Purpose: Creates two appointments, one three days ago and another four months ago.

Reference:

```javascript
export function createPastVAAppointments() {
  const appointments = [];
  let appointment = getVAAppointmentMock();
  appointment.attributes = {
    ...appointment.attributes,
    startDate: moment().add(-3, 'days').format(),
    clinicFriendlyName: 'Three day clinic name',
    facilityId: '983',
    sta6aid: '983GC',
  };
  appointment.attributes.vdsAppointments[0].currentStatus = 'CHECKED OUT';
  appointments.push(appointment);

  appointment = getVAAppointmentMock();
  appointment.attributes = {
    ...appointment.attributes,
    startDate: moment().add(-4, 'months').format(),
    clinicFriendlyName: 'Four month clinic name',
    facilityId: '983',
    sta6aid: '983GC',
  };
  appointment.attributes.vdsAppointments[0].currentStatus = 'CHECKED OUT';
  appointments.push(appointment);

  return {
    data: appointments,
  };
}
```

#### initCommunityCareMock <a name="init-community-care-mock"></a>

Import: `import { initCommunityCareMock } from './vaos-cypress-helpers';`

Purpose: Load scheduling mocks, pull up confirmed appointment dates, make sample POST requests for appointments and associated messages.

Reference:

```javascript
export function initCommunityCareMock() {
  setupSchedulingMocks();

  cy.route({
    method: 'GET',
    url: '/vaos/v0/appointments?start_date=*&end_date=*&type=va',
    response: updateConfirmedVADates(confirmedVA),
  });

  cy.route({
    method: 'POST',
    url: '/vaos/v0/appointment_requests?type=*',
    response: {
      data: {
        id: 'testing',
        attributes: {},
      },
    },
  });

  cy.route({
    method: 'POST',
    url: '/vaos/v0/appointment_requests/testing/messages',
    response: [],
  });
}
```

#### initExpressCareMocks <a name="init-express-care-mocks"></a>

Import: `import { initExpressCareMocks } from './vaos-cypress-helpers';`

Purpose: Submits a request with datetime info to a VA facility for an appointment.

Reference:

```javascript
export function initExpressCareMocks() {
  const today = moment();
  initAppointmentListMock();

  cy.route({
    method: 'GET',
    url: '/vaos/v0/request_eligibility_criteria*',
    response: {
      data: getExpressCareRequestCriteriaMock('983', [
        {
          day: today.clone().tz('America/Denver').format('dddd').toUpperCase(),
          canSchedule: true,
          startTime: today
            .clone()
            .subtract('2', 'minutes')
            .tz('America/Denver')
            .format('HH:mm'),
          endTime: today
            .clone()
            .add('2', 'minutes')
            .tz('America/Denver')
            .format('HH:mm'),
        },
      ]),
    },
  }).as('getRequestEligibilityCriteria');

  mockRequestLimits();

  cy.route({
    method: 'GET',
    url: '/vaos/v0/facilities?facility_codes[]=983',
    response: {
      data: [
        {
          id: '983',
          attributes: {
            ...getParentSiteMock().attributes,
            institutionCode: '983',
            authoritativeName: 'Some VA facility',
            rootStationCode: '983',
            parentStationCode: '983',
          },
        },
      ],
    },
  });

  cy.route({
    method: 'POST',
    url: '/vaos/v0/appointment_requests?type=va',
    response: {
      data: {
        id: 'testing',
        attributes: {
          typeOfCareId: 'CR1',
          email: 'test@va.gov',
          phoneNumber: '5555555555',
          reasonForVisit: 'Cough',
          additionalInformation: 'Whatever',
          status: 'Submitted',
        },
      },
    },
  });
}
```

#### initVAAppointmentMock <a name="init-va-appointment-mock"></a>

Import: `import { initVAAppointmentMock } from './vaos-cypress-helpers';`

Purpose: A full-fledged helper to mock primary care eligibility, facilities, clinics; request limiting; duration of visits; appointment slots; and subumitting an appointment.

Reference:

```javascript
export function initVAAppointmentMock() {
  setupSchedulingMocks();
  mockRequestLimits();
  mockVisits();
  mockDirectScheduleSlots();
  mockSubmitVAAppointment();
}
```

## Appointment Helpers <a name="appointment-helpers"></a>

Imports: Appointment helpers are typically imported altogether as the parent package using `import * as newApptTests from './vaos-cypress-schedule-appointment-helpers';` then invoked according to the function name, i.e. `newApptTests.chooseTypeOfCareTest(param);`.

#### chooseTypeOfCareTest <a name="choose-type-of-care-test"></a>

Purpose: Sets a type of care test via passing a param, i.e. 'Primary care', 'Sleep medicine', 'Eye care'.

Reference:

```javascript
export function chooseTypeOfCareTest(label) {
  cy.url().should('include', '/new-appointment');
  cy.axeCheck();
  cy.findByLabelText(label).click();
  cy.findByText(/Continue/).click();
}
```

#### chooseVAFacilityTest <a name="choose-va-facility-test"></a>

Purpose: Sets a VA facility by default to Cheyenne, WY.

Reference:

```javascript
export function chooseVAFacilityTest() {
  cy.url().should('include', '/va-facility');
  cy.axeCheck();
  cy.findByLabelText(/CHYSHR/).click();
  cy.findByLabelText(
    'CHYSHR-Cheyenne VA Medical Center (Cheyenne, WY)'
  ).click();
  cy.findByText(/Continue/).click();
}
```

#### chooseClinicTest <a name="choose-clinic-test"></a>

Purpose: Sets a clinic to 'CHY PC CASSIDY'

Reference:

```javascript
export function chooseClinicTest() {
  cy.url().should('include', '/clinics');
  cy.axeCheck();
  cy.findByLabelText('CHY PC CASSIDY').click();
  cy.findByText(/Continue/).click();
}
```

#### choosePreferredDateTest <a name="choose-preferred-date-test"></a>

Purpose: Sets a preferred date to 4 days from now.

Reference:

```javascript
export function choosePreferredDateTest() {
  cy.url().should('include', '/preferred-date');
  cy.axeCheck();

  const preferredDate = today.add(4, 'days');

  cy.findByLabelText('Month').select(preferredDate.format('MMM'));
  cy.findByLabelText('Day').select(preferredDate.format('D'));
  cy.findByLabelText('Year').type(preferredDate.format('YYYY'));
  cy.findByText(/Continue/).click();
}
```

#### selectTimeSlotTest <a name="select-time-slot-test"></a>

Purpose: Selects a timeslot from calendar component.

Reference:

```javascript
export function selectTimeSlotTest() {
  cy.url().should('include', '/select-date');
  cy.get(
    '.vaos-calendar__calendars button[id^="date-cell"]:not([disabled])'
  ).click();
  cy.get(
    '.vaos-calendar__day--current .vaos-calendar__options input[id$="_0"]'
  ).click();
  cy.axeCheck();
  cy.findByText(/Continue/).click();
}
```

#### reasonForAppointmentTest <a name="reason-for-appointment-test"></a>

Purpose: Chooses a reason for an appointment, using 'Routine or follow-up visit'.

Reference:

```javascript
export function reasonForAppointmentTest(l) {
  cy.url().should('include', '/reason-appointment');
  cy.axeCheck();
  cy.findByLabelText('Routine or follow-up visit').click();
  cy.findByLabelText(/Please provide any additional details/).type(l);
  cy.findByText(/Continue/).click();
}
```

#### contactInfoTest <a name="contact-info-test></a>

Purpose: Sets preferred contact to morning.

Reference:

```javascript
export function contactInfoTest() {
  cy.url().should('include', '/contact-info');
  cy.axeCheck();
  cy.findByLabelText(/Morning/).click();
  cy.findByText(/Continue/).click();
}
```

#### reviewTest <a name="review-test"></a>

Purpose: Checks to confirm appointment.

Reference:

```javascript
export function reviewTest() {
  cy.url().should('include', '/review');
  cy.axeCheck();
  cy.findByText('Confirm appointment').click();
}
```

#### confirmationPageTest <a name="confirmation-page-test"></a>

Purpose: Confirms proper appointment scheduling response.

Reference:

```javascript
export function confirmationPageTest(additionalInfo) {
  cy.findByText('Your appointment has been scheduled');
  cy.findByText('VA Appointment');
  cy.findByText('Follow-up/Routine');
  cy.findByText(additionalInfo);
}
```

# Mocks <a name="mocks"></a>

Many Cypress test and helpers are dependent on JSON data located within the `/services/mocks` directory. The following provides context to mocks used in various Cypress testing.

#### ConfirmedVA <a name="confirmed-va"></a>

Returns a data array filled with objects of the following attributes:

```javascript
{
"id": "20abc6741c00ac67b6cbf6b972d084c1",
"type": "va_appointments",
"attributes": {
"startDate": "2020-09-19T16:00:00Z",
"clinicId": "308",
"clinicFriendlyName": "Neighborhood Clinic",
"facilityId": "983",
"sta6aid": "983GC",
"communityCare": true,
"vdsAppointments": [
{
"bookingNote": "CC vista appt",
"appointmentLength": "60",
"appointmentTime": "2020-09-19T16:00:00Z",
"clinic": {
"name": "CHY OPT VAR1",
"askForCheckIn": false,
"facilityCode": "983"
},
"type": "REGULAR",
"currentStatus": "NO ACTION TAKEN/TODAY"
}
],
"vvsAppointments": []
}
}

```

#### confirmedCC <a name="#confirmed-cc"></a>

Returns a data array filled with objects of the following attributes:

```javascript
    {
      "id": "8a4812b77035101201703a2086750033",
      "type": "cc_appointments",
      "attributes": {
        "appointmentRequestId": "8a4812b77035101201703a2086750033",
        "distanceEligibleConfirmed": true,
        "name": { "firstName": "Dr", "lastName": "Hyde" },
        "providerPractice": "Jeckle and Hyde",
        "providerPhone": "(407) 555-1212",
        "address": {
          "street": "123 Main Street",
          "city": "Orlando",
          "state": "FL",
          "zipCode": "32826"
        },
        "instructionsToVeteran": "Date test",
        "appointmentTime": "06/18/2021 20:00:00",
        "timeZone": "-06:00 MDT"
      }
    }
```

#### requests <a name="requests"></a>

Returns a data array filled with objects of the following attributes:

```javascript

```

#### cancelReasons<a name="cancel-reasons"></a>

Returns a data array filled with objects of the following attributes:

```javascript
    {
      "id": "1",
      "type": "cancel_reason",
      "attributes": {
        "number": "1",
        "text": "WEATHER",
        "type": "B",
        "inactive": false
      }
    }
```

#### supportedSites <a name="supported-sites"></a>

Returns a data array filled with objects of the following attributes:

```javascript
    {
      "id": "984",
      "type": "object_type",
      "attributes": {
        "name": "Dayton",
        "timezone": "US/Eastern"
      }
    }
```

#### facilities <a name="facilities"></a>

Returns a data array filled with objects of the following attributes:

```javascript
    {
      "id": "983",
      "type": "facility",
      "attributes": {
        "institutionCode": "983",
        "city": "Cheyenne",
        "stateAbbrev": "WY",
        "authoritativeName": "CHYSHR-Cheyenne VA Medical Center",
        "rootStationCode": "983",
        "adminParent": true,
        "parentStationCode": "983"
      }
    }
```

#### facilities983 <a name="facilities-983"></a>

Returns a data array filled with objects of the following attributes:

```javascript
    {
      "id": "983",
      "type": "direct_scheduling_facility",
      "attributes": {
        "institutionCode": "983",
        "city": "Cheyenne",
        "stateAbbrev": "WY",
        "authoritativeName": "CHYSHR-Cheyenne VA Medical Center",
        "rootStationCode": "983",
        "adminParent": true,
        "parentStationCode": "983",
        "requestSupported": true,
        "directSchedulingSupported": true,
        "expressTimes": null,
        "institutionTimezone": "America/Denver"
      }
    }
```

#### clinicList983 <a name="clinic-list-983"></a>

Returns a data array filled with objects of the following attributes:

```javascript
    {
      "id": "983",
      "type": "clinic",
      "attributes": {
        "siteCode": "983",
        "clinicId": "308",
        "clinicName": "CHY PC KILPATRICK",
        "clinicFriendlyLocationName": "Green Team Clinic1",
        "primaryStopCode": "323",
        "secondaryStopCode": "",
        "directSchedulingFlag": "Y",
        "displayToPatientFlag": "Y",
        "institutionName": "CHYSHR-Cheyenne VA Medical Center",
        "institutionCode": "983",
        "objectType": "CdwClinic",
        "link": []
      }
    },
```

#### slots <a name="slots"></a>

Returns a data array filled with objects of the following attributes:

```javascript
    {
      "id": "308",
      "type": "availability",
      "attributes": {
        "clinicId": "308",
        "clinicName": "CHY PC KILPATRICK",
        "appointmentLength": 20,
        "clinicDisplayStartTime": "9",
        "displayIncrements": "3",
        "stopCode": "296",
        "askForCheckIn": false,
        "maxOverbooksPerDay": 3,
        "hasUserAccessToClinic": true,
        "primaryStopCode": "323",
        "secondaryStopCode": "",
        "listSize": 92,
        "empty": false,
        "appointmentTimeSlot": [
          {
            "startDateTime": "2020-02-06T14:00:00.000+00:00",
            "endDateTime": "2020-02-06T14:20:00.000+00:00",
            "bookingStatus": "1",
            "remainingAllowedOverBookings": "3",
            "availability": true
          }
          ...
        ]
      }
    }
```

#### getVAAppointmentMock <a name="get-va-appointment-mock"></a>

Returns a mock appointment object with the following properties:

```javascript
return {
  id: '21cdc6741c00ac67b6cbf6b972d084c1',
  type: 'va_appointments',
  attributes: {
    clinicFriendlyName: 'Fake',
    clinicId: 'fake',
    facilityId: 'fake',
    sta6aid: 'fake',
    communityCare: false,
    vdsAppointments: [
      {
        bookingNote: null,
        appointmentLength: '60',
        appointmentTime: 'fake',
        clinic: {
          name: 'fake',
          askForCheckIn: false,
          facilityCode: 'fake',
        },
        type: 'REGULAR',
        currentStatus: 'fake',
      },
    ],
    vvsAppointments: [],
  },
};
```

#### getExpressCareRequestCriteriaMock <a name="get-express-care-request-criteria-mock"></a>

Requires params for id and schedulingDays. Returns a request eligibility criteria object with the following properties:

```javascript
return [
  {
    id,
    type: 'request_eligibility_criteria',
    attributes: {
      id,
      requestSettings: [],
      customRequestSettings: [
        {
          id: 'CR1',
          typeOfCare: 'Express Care',
          submittedRequestLimit: 2,
          enterpriseSubmittedRequestLimit: 2,
          supported: !!schedulingDays,
          schedulingDays: schedulingDays || [],
        },
      ],
    },
  },
];
```

#### getParentSiteMock <a name="get-parent-site-mock"></a>

Returns a fake facility object with the following properties:

```javascript
return {
  id: 'fake',
  type: 'facility',
  attributes: {
    institutionCode: 'fake',
    city: 'fake',
    stateAbbrev: 'FK',
    authoritativeName: 'fake',
    rootStationCode: 'fake',
    adminParent: true,
    parentStationCode: 'fake',
  },
};
```
