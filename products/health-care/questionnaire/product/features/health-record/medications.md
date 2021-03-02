# Medications Initiative Outline

> _The purpose of this document is for designers, PMs, and engineers to track and maintain the various use cases that exist for a given product to align early on use cases and edge cases and and is best maintained alongside the product outline. Each user story, feature desciption, and design docs will be reviewed by the team before sprint grooming to brainstorm all use cases/edge cases early on._

## Product Outline and Reference Links
* [Questionnaires Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/product-outline.md#healthcare-experience---questionnaires-product-outline)
* [Health Record Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/health-record.md)

* [Medications VA Landscape Map](https://www.sketch.com/s/f84952b4-9e8b-457d-b25e-5015c92e3913/a/g00Vbvq)

## Epic User Story 
User Story 

* Use Case 
<img src="https://lh3.googleusercontent.com/wXd_OoH1wTBtmSUdoXtdnz26UPp8bYLxp2ty3if0jLFtCoL8xeaAW01_w6XTZm3KE_0ohfq8uhVVOTe1Q5pZS1zl376S-TCMI6NkbAH5LpqF0mczUeE2yKsXaxbjvJDYJqKg5Ah-" width="700">

* Description
- Medication Name
 - NOTE: it's in the name as "note": "Hydrochlorothiazide 6.25 MG"
 - examples - fluticasone nasal (Flonase 50 mcg/inh nasal spray)
 - consider taper does as they will only list the mediation name and the dose/instructions will be in the description field

- Dose
- Route (ie. oral, injection, liquid)
- Frequency
- Prescribing Physician
- Prescribing Physician location/source system
- Date
- Instructions/Directions (this is typically from EHR for the Pharmacist) we need the patient dose instructions if we are showing from retail pharmacy. 
 - 2 spray(s). nostril(s) qD, 16g, O Refills
- Status
 - Active, expired, discontinued - 
- Tracking medication adherence - actions the Veterans can take
  - Currently statuses/solution for this shown in the above image - Taking as prescribed - Yes- As directed, No - Not taking as directed, No- stopped or didn't take (need ability to describe why not taking)
- Patient education - Medline Plus
  - [Storyboard](https://www.sketch.com/s/f84952b4-9e8b-457d-b25e-5015c92e3913/a/Omebkkw) (Shown more as a plain Health Record feature compared to in a Questionnaire.)
- Warnings/Side effects/Interactions
- If no write back for Meds how are we posting to Lighhouse in PGD 
  - Are we allowing self-entered data?
  - Without this, how can we capture non-prescription medications (herbals, OTCs, vitamins) that aren't in the system?
- Medication type
  - As seen in current MyHealtheVet, an example of data in this field was "VA prescription")
- Are we integrating with Surescripts or only Vista

Not typical features we should consider/challenges today
- Condition/Diagnosis prescribed for
- renew /request workflows
- Costs based on insurance - ie. know what locations have good pricing
- Formulary information - tiers of medications at the VA - related to cost
- Can we push/highlight meds that we think have changed or would have stopped or if there new condition to ask if any meds are being taken for it?  
- List of Vitamins and Suppliments -as these may not be documented in EHR
- Photos or illustrations of the medication (show inhaler versus a pill, what color and shape)
- timeline for how long been on the med 
  - another variation of this is display of start/stop dates
- patient side effects (patient generated)
- VA pharmacy or other pharmacy info (name, location, phone number, contact with questions
  - This gets into preferred pharmacy information.
  - Contacting for more information could connect to the VA's app, secure messaging, both?
- Notification reminders
  - Do refill reminders exist today?
  - When next pill is supposed to be taken reminders
  - Other notifications
- Cost summary - how much have I spent on medications
- Identify pills - I don't know what this pill is. Identify by markings, colors, or shapes
- timeline of when patient is supposed to take medication (morning versus evening, every other week, once a month)

---
## User Story A

### Reviewing and adding a medication

[Storyboard](https://www.sketch.com/s/f84952b4-9e8b-457d-b25e-5015c92e3913/a/eKlrJJ0)

* Description

* Feature Capabilities

## User Story B

### Editing a medication

[Storyboard](https://www.sketch.com/s/f84952b4-9e8b-457d-b25e-5015c92e3913/a/GmoOGGL)

* Description

* Feature Capabilities

---

* Instructions to access in Staging
_Note: credentials should be stored in sensitive repos only_



---
| Issue #                                             | Design     | User Testing | Accessability  | QA - Test Case  | Launch    | Notes 
| --------------------------------------------------- | -------------   | ---------    | ---------      | ---------       | --------- | ----- | 
| Link to Epic Issue #                                |                 |              |                |                 |           | 
| Feature Name-Issue #                                |                 |              |                |                 |           | 
| Feature Name-Issue #                                |                 |              |                |                 |           | 
| Feature Name-Issue #                                |                 |              |                |                 |           | 
