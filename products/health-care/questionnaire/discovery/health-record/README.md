# Questions we have

## Applies to Medications, Allergies, and Immunizations
- What currently is available in Lighthouse?
- Are we missing any past user research that we should review?
  - I found research on Medications.
- Can we get any updates on the analytics on these current features from MyHealtheVet?

## Medications
- Are we connecting to sure scripts list (BPMH) or just VA med list?
  - In EHR, name, dose and timing are separate items, in sure scripts it is one piece of data
- If we don’t have renewing medications in a questionnaire, how do we stop Veterans from asking about that?
- What if we think of this as something has changed and not just a meds list?
- What special can we do, since this is a payer/provider system?

## Allergies
- What does the VA want to do about educational information? still link to Medline Plus? Do they have APIs, so we could link each allergy directly to the Medline Plus page on that particular allergy?

## Immunizations
- Does the VA want to do anything special for COVID? If people are entering COVID information, do they want anything special?

# Knowns
## Medications
- [Past Rx Refill research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/prescription-refills/vets-prescriptions)
- Feature ideas from [past user research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/prescription-refills/mhv-api/2016-06-03-technical-validation.md)/ [previous data asks](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/prescription-refills/mhv-api/missing-data-that-we-need.md)/ shown in old wireframes [set 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/prescription-refills/mhv-api/doc-images/detail.png) and [set 2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/prescription-refills/vets-prescriptions/research/mhv-prototype/redesign-prototype-pharmacy-1.pdf)/ our team's ideas:
  - photos of the pills
  - self-entered data
  - medication instructions
  - facility details (locations and phone number)
  - start/stop dates (could it be shown as a timeline)
  - side effects
  - warnings
  - drug interactions
  - trade name (there was a note that they were looking into if they really needed this)
  - dose/frequency
  - pharmacy phone
  - provider
  - contact my pharmacy/provider (they planned a connect to secure messaging here. There is also a VA app "Ask a Pharmacist")
  - doctor/ specialist who prescribed each medication
  - refill information (status - active, expired, discontinued, number remaining and refillable date)
  - medication type (such as VA prescription)
  - What diagnosis is this addressing or helping with? Why am I taking this? Review by condition?
  - Connection to formulary
- All the ways that a Veteran can [refill their prescription as of 8/9/2017](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/prescription-refills/vets-prescriptions/research/ways-to-refill-rx-at-va.md). 
   - This might help us think through all the medication touchpoints that currently exist and see if there is any impact on our feature. Will need updated.
  - They were envisioning pictures of medications.
- [Personas identified for Rx refills](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/prescription-refills/vets-prescriptions/research/high-level-userflow.md) (could these be applied to updating med list in questionnaire)
- Some MHV analytics ([from 2016 report though](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/prescription-refills/vets-prescriptions/research/rx-refills-discovery-final-deck.pptx))
  - Within Prescriptions, the Refill Prescription page accounts for nearly 80% of traffic. The remaining traffic goes to prescription tracking (2.1%), prescription history (11%) and Meds, OTCs, Herbs & Supplements (0.3%)
- [Old design inspirations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/prescription-refills/vets-prescriptions/research/inspiration.md) (from around 2016)

## Allergies
- Current features/data displayed in MyHealtheVet (as noted by navigating across the site)
  - Allergy Name (required)
  - Date (required. is the date the onset of the allergy? label isn't super descriptive)
  - severity
  - diagnosed (there is a dropdown with option)
  - reaction
  - comments
  - ability to add a new allergy
  - links to educational material on the allergies (currently links to Medline Plus)

## Immunizations
- Current features/data displayed in MyHealtheVet (as noted by navigating across the site)
  - Immunization name
  - date received
  - reaction (currently checkboxes with options
  - method (injection, inhalant, by mouth)
  - other sign/symptom (currently dropdown list)
  - comments
  - ability to add a new immunization
  - link to VA page on recommended screenings and immunizations for an adult
  - link to CDC traveler's health page

# VA groups we would like to talk to
- Lighthouse
- Emily Mann (to understand what she found in her overall health care research)
- MyHealtheVet?
- Clinicians - what pain points are they experiencing with these topics? if a Vet gets a COVID vaccine at CVS, what do they want entered into the VA system?

# Questions for Veterans
- Understand current pain points.
