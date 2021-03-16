# Immunizations Initiative Outline

> _The purpose of this document is for designers, PMs, and engineers to track and maintain the various use cases that exist for a given product to align early on use cases and edge cases and and is best maintained alongside the product outline. Each user story, feature desciption, and design docs will be reviewed by the team before sprint grooming to brainstorm all use cases/edge cases early on._

## Product Outline and Reference Links
* [Questionnaires Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/product-outline.md#healthcare-experience---questionnaires-product-outline)
* [Health Record Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/health-care/questionnaire/product/initiatives/health_record.md)
* [Draft Wireframes](https://www.sketch.com/s/f84952b4-9e8b-457d-b25e-5015c92e3913)
* [My HealtheVet Immunizations Image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/health-record/myhealthevet/Immunizations.png)
* [My HealtheVet Immunizations Signs & Symptoms Image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/health-record/myhealthevet/Immunization%20Signs:Symptoms.png)
* [My HealtheVet Immunizations Reactions Image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/health-record/myhealthevet/Immunization%20Signs:Symptoms.png) 

## Epic User Story 
- Use case: Veterans and VA providers want/need to know about changes to Veteran immunizations, including:
  - Are the immunizations within the VA’s medical record up-to-date?
    - In particular, is COVID-19 information up-to-date?
  - Does the Veteran have any new immunizations that they received outside the VA from other providers, their local pharmacy, etc.?
  - Did the Veteran have any new reaction types to immunizations already documented in the VA’s system? 

## Product Features/User Stories

### Option 1: All Immunizations

#### Display immunizations listed within the Veteran’s VA medical records
- [High-level storyboard](https://www.sketch.com/s/f84952b4-9e8b-457d-b25e-5015c92e3913/a/yggvK2K)
- To be determined, what exact data points will be displayed. Review [Veteran priority results](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/research/health-record/research-findings.md). Run a [VA provider research study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/research/clinician-healthRecord-discovery/conversation-guide.md) to determine provider priority. Review [technical feasibility evaluation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/health-record/DataAnalysis-AvailabilityIn-Lighthouse-VetsAPI-MHV.xlsx) (which may need to be updated depending upon when this topic is picked back up again), so additional data can be requested to be added to Lighthouse.
- List of possible data points and features listed at the bottom of this feature document.

#### Provide a way for a Veteran to add a self-reported immunizations
- [High-level storyboard](https://www.sketch.com/s/f84952b4-9e8b-457d-b25e-5015c92e3913/a/yggvK2K)
- What data needs to be captured when entering a new immunizations? Does it vary based upon immunization, such as Shingles requires two doses? Therefore, we might need to know if it is dose 1 versus 2. What about [COVID](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/health-record/references/CDC%20COVID%20Card.png) versus other immunizations? 

#### Display self-report immunizations
- Similar to VA medical record immunizations, determine what exact data points to display. Are there any difference between VA medical record immunizations and self-reported immunizations? 
  - Are their differences based upon the immunizations, such as Shingles requires two doses? Therefore, we may need to know if it is dose 1 versus 2. What about COVID versus other immunizations?
- List of possible data points and features listed at the bottom of this feature document.

#### Display a description explaining
- Why the Veteran should review and update this information

#### Ability for Veterans to edit their immunizations
- [High-level storyboard](https://www.sketch.com/s/f84952b4-9e8b-457d-b25e-5015c92e3913/a/ELLD3Rv)
- What should be editable for a Veteran-reported immunization? Can we make the fields easily understandable to the Veterans? What should be editable (if anything — possibly reactions?) for a provider-entered immunization from the medical record?

#### Provider a way to access patient education information, so the Veteran can learn more about their immunizations
- [High-level storyboard](https://www.sketch.com/s/f84952b4-9e8b-457d-b25e-5015c92e3913/a/ZOVn55p)
- Verify that this is a need within in a questionnaire. Is it more needed in a health record section?
- Determine a patient education strategy. Current My HealtheVet links to Medline Plus for additional information, but it is just a link to Medline Plus’s main page. Is there an API, so we can connect certain immunizations to a patient education page on that immunization?

### Option 2 COVID Only
#### Ask the Veteran is they have received the COVID vaccine.
- If they already received the vaccine from the VA, ask no additional questions.
- If they already received the vaccine outside the VA, ask them to enter information about their COVID vaccine.
  - Confirm with SMEs that we are interested in all information on the [CDC card](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/health-record/references/CDC%20COVID%20Card.png) and nothing more or less.
  - Think through the following workflows: 
    - if a Veteran has only received one of the doses. 
    - if a Veteran previously entered the first dose and now within their next questionnaire has to only enter their second dose.
    - if a Veteran has to enter both their first and second dose information.
- If they haven’t received their vaccine yet, then look into what information we can/should provide related to scheduling, etc.

## Outstanding questions or decisions to be made

### Product and UX Strategy Questions
- Numerous questions are listed in the above “Product Feature/User Stories” section.
- Do we need any type of verification from the Veteran that their immunization list looks up-to-date? What do we need them to enter if they don’t have any changes?
- What are provider pain points, current workflows, prioritization of data? Review [clinician conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/research/clinician-healthRecord-discovery/conversation-guide.md) for study that was never executed.
- Should we display immunizations that we know the Veteran is due for? 

### Interaction Design Questions
- Sort order: most recent listed first?
- Determine the hierarchy of the display.
  - Should all immunizations types be grouped together, so that Influenza would only be displayed once?
    - Should all the dates of all the immunizations be listed within a summary view? Should only the last received date be displayed?
  - Should all immunizations be listed separately, so that Influenza would be listed multiple times in the list?
- What is the VA officially calling immunizations? Is it immunization, vaccination, or vaccines? What have they utilized within COVID work? Talk to content.
- If we go with Option 1 and the Veteran doesn’t have COVID listed as something they received, do we need to have a COVID-specific note/information area?
- Can a Veteran “request removal” of an immunization that is already provider-confirmed and listed in their medical record?
- **At March 15, 2021 meeting on list loops, it was suggested for all teams to test out a list loop pattern that shows only one decision point at a time. Then, submit the designs to the DSVA #design channel for the team to comment on. Revisit list loop patterns as the convention might have been decided on/changed.**
  - I created a [sequential prototype example for allergies](https://www.sketch.com/s/f84952b4-9e8b-457d-b25e-5015c92e3913/a/ZOWdAla/play)
- During user research, it was determined that each Veteran has a unique cadence for how often they would like to update their health records (medications, allergies, and immunizations), so incorporate a way for them to quickly navigate across the sections. Really think about Veterans can quickly skip around. Really evaluate how many questions they have to answer in each section.

### Technical Questions
- How do we eliminate duplicates in our list once a provider adds a self-reported immunization to the Veteran’s official medical record?

## Possible data points and features to display
- Immunization name
- date received (think about how to show immunizations that Veterans receive multiple times like Influenza)
- reaction (currently MyHealtheVet has checkboxes with options)
- method (injection, inhalant, by mouth) - Apple Health calls this the route
- where on the body the injection was received (left deltoid)
- other sign/symptom (currently dropdown list) - Look into what this is different then reactions. They look like just two different lists of reactions with this list being much longer.
- comments
- ability to add a new immunization (patient reported data)
- What is currently listed on the COVID-19 Vaccination Record Card
  - Product Name/Manufacturer (such as Moderna)
  - Lot number
  - Date
  - Healthcare professional or Clinic site (do we care about this for other immunizations)
  - 1st Dose and 2nd Dose (do we need this for other immunizations, like Shingles)
- link to VA page on recommended screenings and immunizations for an adult
- immunizations recommendations based upon the Veteran's medical record (we know they are due for a flu shot)
- link to CDC traveler's health page
- link to VAOS to [schedule immunization appointment](https://www.sketch.com/s/f84952b4-9e8b-457d-b25e-5015c92e3913/a/xrr8Km5)
- [Viewing educational material about an immunization](https://www.sketch.com/s/f84952b4-9e8b-457d-b25e-5015c92e3913/a/ZOVn55p)
- [Viewing and printing an official immunization record](https://www.sketch.com/s/f84952b4-9e8b-457d-b25e-5015c92e3913/a/qeel3mk)

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
