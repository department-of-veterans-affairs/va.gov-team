# Medications Initiative Outline

> _The purpose of this document is for designers, PMs, and engineers to track and maintain the various use cases that exist for a given product to align early on use cases and edge cases and and is best maintained alongside the product outline. Each user story, feature desciption, and design docs will be reviewed by the team before sprint grooming to brainstorm all use cases/edge cases early on._

## Product Outline and Reference Links
* [Questionnaires Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/product-outline.md#healthcare-experience---questionnaires-product-outline)
* [Health Record Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/health-record.md)

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
- Status:
- Actions for the Veteran - Taking as prescribed - Yes- As directed, No - Not taking as directed, No- stopped or didn't take (need ability to describe why not taking)
- Patient education - Medline Plus
- Warnings/Side effects
- If no write back for Meds how are we posting to Lighhouse in PGD
- Are we integrating with Surescripts or only Vista

Not typical features we should consider/challenges today
- Condition/Diagnosis prescribed for
- renew /request workflows
- Costs based on insurance - ie. know what locations have good pricing
- can we push/highlight meds that we think have changed or would have stopped or new condidtion to ask if any meds are being taken for it.  
- List of Vitamens and Suppliments -as these may not be documented in EHR
- Pictures of the Medication
- timeline for how long been on the med
- patient side effects (patient generated)



* Instructions to access in Staging
_Note: credentials should be stored in sensitive repos only_



---
| Issue #                                             | Design     | User Testing | Accessability  | QA - Test Case  | Launch    | Notes 
| --------------------------------------------------- | -------------   | ---------    | ---------      | ---------       | --------- | ----- | 
| Link to Epic Issue #                                |                 |              |                |                 |           | 
| Feature Name-Issue #                                |                 |              |                |                 |           | 
| Feature Name-Issue #                                |                 |              |                |                 |           | 
| Feature Name-Issue #                                |                 |              |                |                 |           | 
