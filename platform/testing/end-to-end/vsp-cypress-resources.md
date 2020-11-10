# Cypress Overview & Guide

The following guide is a comprehensive guide of Cypress related resources currently active within VSP.

# Table of Contents

1. [Cypress & VAOS Helpers](#cypress-vaos-helpers)
   1. [initApplicationMock](#init-application-mock)
   2. [hasFocusableCount](#has-focusable-count)
   3. [hasTabbableCount](#has-tabbable-count)
   4. [initMockProfile](#init-mock-profile)
   5. [initAppointmentListMock](#init-appointment-list-mock)
   6. [createPastVAAppointments](#create-past-va-appointments)
   7. [initCommunityCareMock](#init-community-care-mock)
   8. [initExpressCareMocks](#init-express-care-mocks)
   9. [initVAAppointmentMock](#init-va-appointment-mock)
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
3. [Mocks - TBD](#mocks)

# Cypress & VAOS Helperss <a name="cypress-vaos-helpers"></a>

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
  cy.route("GET", "/v0/gi/institutions/autocomplete**", autocomplete).as(
    "defaultAutocomplete"
  );
  cy.route("GET", "/v0/gi/institutions/search**", results).as("defaultSearch");

  initMockProfile(profile);
};
```

#### hasFocusableCount <a name="has-focusable-count"></a>

Import: `import { hasFocusableCount } from './cypress-helpers'`

Purpose: Checks if count of focusable elements is correct. Focusable elements are those in the normal tab order (native focusable elements or those with tabIndex 0). The count logic will break on tabindexes > 0 because we do not want to override the browser's base tab order.

Reference:

```javascript
export const hasFocusableCount = (selector, count) => {
  const focusableElements = [
    "a[href]",
    "button",
    "details",
    'input[type="text"]',
    'input[type="email"]',
    'input[type="password"]',
    'input[type="search"]',
    'input[type="tel"]',
    'input[type="url"]',
    'input[type="radio"]',
    'input[type="checkbox"]',
    "select",
    "textarea",
    '[tabindex="0"]',
    '[tabindex="-1"]',
  ];
  const msg = `Page does not contain ${count} focusable elements.`;
  elementsWithinCount(focusableElements, selector, count, msg);
};
```

#### hasTabbableCount <a name="has-tabbable-count"></a>

Import: `import { hasFocusableCount } from './cypress-helpers'`

Purpose: Checks if the count of tabbable elements is correct. Tabbable elements are those in the normal tab order (native focusable elements or those with tabIndex >= 0).

Reference:

```javascript
export const hasTabbableCount = (selector, count) => {
  const tabbableElements = [
    "a[href]",
    "button",
    "details",
    'input[type="text"]',
    'input[type="email"]',
    'input[type="password"]',
    'input[type="search"]',
    'input[type="tel"]',
    'input[type="url"]',
    'input[type="radio"]:checked',
    'input[type="checkbox"]',
    "select",
    "textarea",
    '[tabindex]:not([tabindex="-1"])',
  ];

  const msg = `Page does not contain ${count} tabbable elements.`;
  elementsWithinCount(tabbableElements, selector, count, msg);
};
```

#### initMockProfile <a name="init-mock-profile"></a>

Import: `import { initMockProfile } from './cypress-helpers';`

Purpose: Mocks the call for the profile.

Reference:

```javascript
export const initMockProfile = (profile) => {
  const facilityCode = profile.data.attributes.facility_code;
  cy.route("GET", `/v0/gi/institutions/${facilityCode}`, profile).as(
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
    method: "GET",
    url: "/vaos/v0/appointment_requests*",
    response: updateRequestDates(requests),
  });

  cy.route({
    method: "GET",
    url: /.*\/v0\/appointments.*type=va$/,
    response: updateConfirmedVADates(confirmedVA),
  });

  cy.route({
    method: "GET",
    url: /.*\/v0\/appointments.*type=cc$/,
    response: updateConfirmedCCDates(confirmedCC),
  });

  cy.route({
    method: "GET",
    url: "/vaos/v0/facilities/983/cancel_reasons",
    response: cancelReasons,
  });

  cy.route({
    method: "PUT",
    url: "/vaos/v0/appointments/cancel",
    response: "",
  });

  cy.route({
    method: "GET",
    url:
      "/vaos/v0/appointment_requests/8a48912a6cab0202016cb4fcaa8b0038/messages",
    response: {
      data: [
        {
          id: "8a48912a6cab0202016cb4fcaa8b0038",
          type: "messages",
          attributes: {
            surrogateIdentifier: {},
            messageText: "Request 2 Message 1 Text",
            messageDateTime: "11/11/2019 12:26:13",
            senderId: "1012845331V153043",
            appointmentRequestId: "8a48912a6cab0202016cb4fcaa8b0038",
            date: "2019-11-11T12:26:13.931+0000",
            assigningAuthority: "ICN",
            systemId: "var",
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
    startDate: moment().add(-3, "days").format(),
    clinicFriendlyName: "Three day clinic name",
    facilityId: "983",
    sta6aid: "983GC",
  };
  appointment.attributes.vdsAppointments[0].currentStatus = "CHECKED OUT";
  appointments.push(appointment);

  appointment = getVAAppointmentMock();
  appointment.attributes = {
    ...appointment.attributes,
    startDate: moment().add(-4, "months").format(),
    clinicFriendlyName: "Four month clinic name",
    facilityId: "983",
    sta6aid: "983GC",
  };
  appointment.attributes.vdsAppointments[0].currentStatus = "CHECKED OUT";
  appointments.push(appointment);

  return {
    data: appointments,
  };
}
```

#### initCommunityCareMock <a name="init-community-care-mock"></a>

Import: `import { initCommunityCareMock } from './vaos-cypress-helpers';`

Purpose:

Reference:

```javascript
export function initCommunityCareMock() {
  setupSchedulingMocks();

  cy.route({
    method: "GET",
    url: "/vaos/v0/appointments?start_date=*&end_date=*&type=va",
    response: updateConfirmedVADates(confirmedVA),
  });

  cy.route({
    method: "POST",
    url: "/vaos/v0/appointment_requests?type=*",
    response: {
      data: {
        id: "testing",
        attributes: {},
      },
    },
  });

  cy.route({
    method: "POST",
    url: "/vaos/v0/appointment_requests/testing/messages",
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
    method: "GET",
    url: "/vaos/v0/request_eligibility_criteria*",
    response: {
      data: getExpressCareRequestCriteriaMock("983", [
        {
          day: today.clone().tz("America/Denver").format("dddd").toUpperCase(),
          canSchedule: true,
          startTime: today
            .clone()
            .subtract("2", "minutes")
            .tz("America/Denver")
            .format("HH:mm"),
          endTime: today
            .clone()
            .add("2", "minutes")
            .tz("America/Denver")
            .format("HH:mm"),
        },
      ]),
    },
  }).as("getRequestEligibilityCriteria");

  mockRequestLimits();

  cy.route({
    method: "GET",
    url: "/vaos/v0/facilities?facility_codes[]=983",
    response: {
      data: [
        {
          id: "983",
          attributes: {
            ...getParentSiteMock().attributes,
            institutionCode: "983",
            authoritativeName: "Some VA facility",
            rootStationCode: "983",
            parentStationCode: "983",
          },
        },
      ],
    },
  });

  cy.route({
    method: "POST",
    url: "/vaos/v0/appointment_requests?type=va",
    response: {
      data: {
        id: "testing",
        attributes: {
          typeOfCareId: "CR1",
          email: "test@va.gov",
          phoneNumber: "5555555555",
          reasonForVisit: "Cough",
          additionalInformation: "Whatever",
          status: "Submitted",
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

#### chooseTypeOfCareTest

Purpose: Sets a type of care test via passing a param, i.e. 'Primary care', 'Sleep medicine', 'Eye care'.

Reference:

```javascript
export function chooseTypeOfCareTest(label) {
  cy.url().should("include", "/new-appointment");
  cy.axeCheck();
  cy.findByLabelText(label).click();
  cy.findByText(/Continue/).click();
}
```

#### chooseVAFacilityTest

Purpose: Sets a VA facility by default to Cheyenne, WY.

Reference:

```javascript
export function chooseVAFacilityTest() {
  cy.url().should("include", "/va-facility");
  cy.axeCheck();
  cy.findByLabelText(/CHYSHR/).click();
  cy.findByLabelText(
    "CHYSHR-Cheyenne VA Medical Center (Cheyenne, WY)"
  ).click();
  cy.findByText(/Continue/).click();
}
```

#### chooseClinicTest <a name="choose-clinic-test"></a>

Purpose: Sets a clinic to 'CHY PC CASSIDY'

Reference:

```javascript
export function chooseClinicTest() {
  cy.url().should("include", "/clinics");
  cy.axeCheck();
  cy.findByLabelText("CHY PC CASSIDY").click();
  cy.findByText(/Continue/).click();
}
```

#### choosePreferredDateTest <a name="choose-preferred-date-test"></a>

Purpose: Sets a preferred date to 4 days from now.

Reference:

```javascript
export function choosePreferredDateTest() {
  cy.url().should("include", "/preferred-date");
  cy.axeCheck();

  const preferredDate = today.add(4, "days");

  cy.findByLabelText("Month").select(preferredDate.format("MMM"));
  cy.findByLabelText("Day").select(preferredDate.format("D"));
  cy.findByLabelText("Year").type(preferredDate.format("YYYY"));
  cy.findByText(/Continue/).click();
}
```

#### selectTimeSlotTest <a name="select-time-slot-test"></a>

Purpose: Selects a timeslot from calendar component.

Reference:

```javascript
export function selectTimeSlotTest() {
  cy.url().should("include", "/select-date");
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
  cy.url().should("include", "/reason-appointment");
  cy.axeCheck();
  cy.findByLabelText("Routine or follow-up visit").click();
  cy.findByLabelText(/Please provide any additional details/).type(l);
  cy.findByText(/Continue/).click();
}
```

#### contactInfoTest <a name="contact-info-test></a>

Purpose: Sets preferred contact to morning.

Reference:

```javascript
export function contactInfoTest() {
  cy.url().should("include", "/contact-info");
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
  cy.url().should("include", "/review");
  cy.axeCheck();
  cy.findByText("Confirm appointment").click();
}
```

#### confirmationPageTest <a name="confirmation-page-test"></a>

Purpose: Confirms proper appointment scheduling response.

Reference:

```javascript
export function confirmationPageTest(additionalInfo) {
  cy.findByText("Your appointment has been scheduled");
  cy.findByText("VA Appointment");
  cy.findByText("Follow-up/Routine");
  cy.findByText(additionalInfo);
}
```

# Mocks <a name="mocks"></a>
