# Confirmation Cards
The following documents all of the different variations of confirmation cards we display on the VAOS confirmation page. 

## Data Source
As the user enters the appointment form, the data are stored in the react redux store. The data are collected then displayed in the confirmation page

## Scheduled Confirmation Appointments
Schedule confirmation cards are available through VA appointment and COVID-19 vaccine appointments. Scheduled cards have a green check and "Confirmed" marked on the card

### Scheduled Appointments
Direct schedule offers only in-person appointments at the present time.


**VA Appointments**

VA Sheduled appointments display one of four reason for appointment:
* New issue
* Follow-up/Routine 
*  Medication concern
* My reason isn't listed

![confirmed-va](confirmation-cards/confirmation-scheduled-va.png)

<hr />

**COVID-19 Vaccine Appointments**

It displays facility details

![confirmed-expresscare](confirmation-cards/confirmation-scheduled-express-care.png)

<hr />

## Requested Confirmation Appointments
Requested confirmation cards are available through VA request, Community Care request and Express Care request. It displays up to three preferred request dates. Request appointments are differienated with a yellow horizonal bar above the card, a caution icon and "Pending" text

VA requests have three visit types:
 * Office visit
 * Phone call
 * Telehealth (through VA video Connect)

<hr />

### VA Request ###

**Office visit**

Displays as VA APPOINTMENT

![requested-va](confirmation-cards/confirmation-request-va-office-visit.png)

To view additional information about the request confirmation, click on the "Show more" link to reveal reason for visit and contact details.

VA request displays reason for appointment:
* New issue
* Follow-up/Routine 
*  Medication concern
* My reason isn't listed

![requested-va-show-more](confirmation-cards/confirmation-request-va-office-visit-show-more.png)

<hr />

**Phone call**

Dispite being a phone call request, it displays as VA APPOINTMENT

![requested-va-phone](confirmation-cards/confirmation-request-va-phone-call.png)

<hr />

**Telehealth**

Displays as VA VIDEO CONNECT

![requested-va-telehealth](confirmation-cards/confirmation-request-va-telehealth.png)

<hr />

### Community Care Request ###

Community care request have the option of having user select from chose of providers or none at all. In either case, the user selects a preferred language spoken. 

**Provider Selected**

![requested-cc-provider](confirmation-cards/confirmation-request-cc-selected-provider.png)

<hr />

**No Provider Selected**

![requested-cc-no-provider](confirmation-cards/confirmation-request-cc-no-provider.png)
