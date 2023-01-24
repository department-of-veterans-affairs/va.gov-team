# Appointment Cards
The following documents all of the different variations of appointment cards we display on the VAOS appointment lists.

## Data Source
Appointments are fetched from the backend and then transformed into FHIR format before being displayed.  Some examples of mock data we use for development can be found in.json files here:
* [Confirmed VA Appointments](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/vaos/services/mocks/var/confirmed_va.json)
* [Confirmed Community Care appointments](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/vaos/services/mocks/var/confirmed_cc.json)
* [Appointment Requests](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/vaos/services/mocks/var/requests.json)

## Future Appointments
The future appointments tabs contain a combination of confirmed appointments (stored in VistA) and pending appointments (appointment requests).

Each card future card also has a colored top border that corresponds to the following statuses:

* Green: confirmed
* Yellow: pending (needs to be confirmed by a scheduler)
* Red: canceled (either by user or scheduler)

### Confirmed Appointments

#### In-person 

**VA Appointments**

Facility details available, no note, or note does not start with one of the preset purposes (see next item)

![confirmed-va](appointments-cards/confirmed-va.png)

Facility details available and has booking note that starts with one of:

* Follow-up/Routine
* New issue
* Medication concern
* My reason isn't listed

![confirmed-va-note](appointments-cards/confirmed-va-note.png)

Facility details unavailable (fetching of info from facilities API failed)

![confirmed-va-no-facility](appointments-cards/confirmed-va-no-facility.png)

**Community Care**

Facility details available

![confirmed-va-no-facility](appointments-cards/confirmed-cc.png)

Facility details unavailable, has instructions for veteran

![image-20201210220019922](appointments-cards/confirmed-cc-no-facility.png)

Facility details unavailable, no instructions

![image-20201210220019922](appointments-cards/confirmed-cc-no-facility-note.png)

#### Phone

VA phone appointments allow a user to speak to a VA provider over the phone. The indicator text is to the right of the appointment type

![confirmed-va-phone](appointments-cards/confirmed-va-phone.png)

#### Video

Video visits allow a user to speak with a provider remotely.  There are several types of video appointments and they can be done either from home, a specified location, or through government furnished equipment (GFE).

VA Video Connect at home

* Button is disabled if > 30 minutes before start time, or 4 hours past start time

![image-20201210220019922](appointments-cards/confirmed-va-video-home.png)

VA Video Connect at home with active join button

![image-20201210220019922](appointments-cards/confirmed-va-video-home-active.png)

VA Video Connect at home "Prepare for video visit" expanded

![image-20201210220019922](appointments-cards/confirmed-va-video-home-instructions.png)

VA Video Connect at home "Prepare for video visit" expanded -  Medication review

![image-20201210220019922](appointments-cards/confirmed-va-video-home-instructions-medical.png)

VA Video Connect at a VA location

![image-20201210220019922](appointments-cards/confirmed-va-video-clinic.png)

VA Video Connect using a VA device (GFE)

![image-20201210220019922](appointments-cards/confirmed-va-video-device.png)

VA Video Connect at an ATLAS location

![confirmed-va-video-atlas](appointments-cards/confirmed-va-video-atlas.png)

### Pending Appointments

Pending VA

![pending-va](appointments-cards/pending-va.png)

Pending CC

![pending-cc](appointments-cards/pending-cc.png)

Pending Video

![pending-video](appointments-cards/pending-video.png)

### Canceled Appointments

Canceled VA

![canceled-va](appointments-cards/canceled-va.png)

Canceled VA Video

![canceled-va-video](appointments-cards/canceled-va-video.png)

## Past Appointments

Past VA appointment

![past-va](appointments-cards/past-va.png)

Past VA appointment

![past-va-video](appointments-cards/past-va-video.png)

Past CC appointment

![past-va](appointments-cards/past-cc.png)

## Express Care

Pending

![express-care-pending](appointments-cards/express-care-pending.png)

Completed

![express-care-completed](appointments-cards/express-care-completed.png)

Canceled

![express-care-canceled](appointments-cards/express-care-canceled.png)

Canceled: Couldn't reach vet

![express-care-canceled-unavailable](appointments-cards/express-care-canceled-unavailable.png)
