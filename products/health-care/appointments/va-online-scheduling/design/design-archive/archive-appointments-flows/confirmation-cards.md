# Confirmation Cards
The following documents all of the different variations of confirmation cards we display on the VAOS confirmation page. 

## Data Source
As the user enters the appointment form, the data are stored in the react redux store. The data are collected then displayed in the confirmation page

## Scheduled Confirmation Appointments
Schedule confirmation cards are available through VA appointment and COVID-19 vaccine appointments. Scheduled cards have a green check and "Confirmed" marked on the card. Direct schedule offers only in-person appointments at the present time.

### VA Appointments

User will see facility detail and one of four reason for appointment:

* New issue
* Follow-up/Routine 
* Medication concern
* My reason isn't listed

The confirmation card does not show the type of care the user has scheduled for. The example below is for Primary care

![confirmed-va](confirmation-cards/confirmation-scheduled-va.png)

<hr />

### COVID-19 Vaccine Appointments

Covid vaccine displays facility details

![confirmed-expresscare](confirmation-cards/confirmation-scheduled-express-care.png)

<hr />

## Requested Confirmation Appointments
Requested confirmation cards are available through VA request, Community Care request and Express Care request. It displays up to three preferred request dates. Request appointments are differienated with a yellow horizonal bar above the card, a caution icon and "Pending" text

### VA Request ###

VA requests have three visit types:
 * Office visit
 * Phone call
 * Telehealth (through VA video Connect)

<hr />

**Office visit**

The example below is for Office visit and displays as VA APPOINTMENT. User has also selected 3 preferred dates

![requested-va](confirmation-cards/confirmation-request-va-office-visit.png)

Click on the "Show more" link to reveal additional information about the request. It toggles from "Show more" to "Show less". Once expanded, it will display reason for visit and contact details.

It displays best time be contacted under contact details:

* Morning
* Afternoon
* Evening

If all three times are selected, it shows "Anytime during the day"

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

Community care request have the option of user selecting from a list of providers or choosing none at all  

**Provider Selected**

The example below shows provider detail. 

![requested-cc-provider](confirmation-cards/confirmation-request-cc-selected-provider.png)

<hr />

**No Provider Selected**

![requested-cc-no-provider](confirmation-cards/confirmation-request-cc-no-provider.png)
