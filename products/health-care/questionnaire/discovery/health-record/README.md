# Questions we have

## Applies to Medications, Allergies, and Immunizations
- What currently is available in Lighthouse?
- Are we missing any past user research that we should review?
  - I found research on Medications.
  - Here it says that there were [other studies completed by the VA Human Factors Engineering Team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/prescription-refills/vets-prescriptions/research/design-and-research-approach.md). Can we dig up those reports? Does the customer experience team have any research?
- Can we get any updates on the analytics on these current features from MyHealtheVet?

## Medications
- Are we connecting to surescripts list (BPMH) or just VA med list?
  - In EHR, name, dose and timing are separate items, in sure scripts it is one piece of data
- If we don’t have renewing medications in a questionnaire, how do we stop Veterans from asking about that?
- What if we think of this as something has changed and not just a meds list?
- What special can we do, since this is a payer/provider system?
- Do any notifications currently exist? I think there are refill reminders.

## Allergies
- What does the VA want to do about educational information? still link to Medline Plus? Do they have APIs, so we could link each allergy directly to the Medline Plus page on that particular allergy?

## Immunizations
- Does the VA want to do anything special for COVID? If people are entering COVID information, do they want anything special compared to other immunizations? For example, name of the company who made the vaccine.
- Surescript has immunization registry information as well. What does its COVID registry look like? 

# Knowns
## Medications
- [Past Rx Refill research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/prescription-refills)
  - It seems like three studies were run. Two at two different VAMC and one remote study. They mostly tested in the context of Rx Refills, but they did test a [medication details page as well as the Medication History](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/prescription-refills/vets-prescriptions/research/vets.gov-prototype/v2/script.md). Can't see certain prototypes (done in Marvel and don't have access).
  - Applicable findings from past research:
    - [Look](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/prescription-refills/vets-prescriptions/research/vets.gov-prototype/rx-7.8.16-findingssummary.md) into including additional data: specific medication use & storage instructions, medicine brand names in addition to chemical names, and how much supply is included in refills.
    - Work on the order of information on the medicine detail page; Rx # is less important than instructions, and warnings could look more like warnings.
    - Investigate ways to select which portions of prescription history can be printed, such as currently active medicines or those from the past year.
- Feature ideas from [past user research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/prescription-refills/mhv-api/2016-06-03-technical-validation.md)/ [previous data asks](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/prescription-refills/mhv-api/missing-data-that-we-need.md)/ shown in old wireframes [set 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/prescription-refills/mhv-api/doc-images/detail.png) and [set 2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/prescription-refills/vets-prescriptions/research/mhv-prototype/redesign-prototype-pharmacy-1.pdf)/ our team's ideas/other inspiration sites:
  - photos/other illustration of the medication (inhaler versus pill, what color and shape) - previous VA prototype included photos
  - self-entered data
  - medication instructions
  - facility details (locations and phone number)
  - start/stop dates (could it be shown as a timeline)
  - side effects
  - warnings
  - drug interactions (additional interactions, such as alcohol or grapefruit juice)
  - trade name (there was a note in previous research that they were looking into if they really needed this)
  - dose/frequency
  - pharmacy phone
  - provider
  - contact my pharmacy/provider (they planned a connect to secure messaging here. There is also a VA app "Ask a Pharmacist")
  - doctor/ specialist who prescribed each medication
  - refill information (status - active, expired, discontinued, number remaining and refillable date)
  - medication type (such as VA prescription)
  - What diagnosis is this addressing or helping with? Why am I taking this? Review by condition?
  - Connection to formulary
  - Idea for mobile: notification reminder on when next pill is due to be taken, tracking medication adherence
- All the ways that a Veteran can [refill their prescription as of 8/9/2017](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/prescription-refills/vets-prescriptions/research/ways-to-refill-rx-at-va.md). 
  - This might help us think through all the medication touchpoints that currently exist and see if there is any impact on our feature. Will need updated. This list doesn't include Walgreens collaboration. The "Ask a Pharmacist" app is also live now.
  - VA has there own pharmacies to refill prescriptions. They also have a special collaboration with [Walgreens](https://www.va.gov/opa/pressrel/pressrelease.cfm?id=5095).
    -  "VA providers will be able to see the entire medication and immunization history of VA-enrolled patients who receive their prescription and immunization needs at Walgreens."
- [Personas identified for Rx refills](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/prescription-refills/vets-prescriptions/research/high-level-userflow.md) (could these be applied to updating med list in questionnaire)
- Some MHV analytics ([from 2016 report though](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/prescription-refills/vets-prescriptions/research/rx-refills-discovery-final-deck.pptx))
  - Within Prescriptions, the Refill Prescription page accounts for nearly 80% of traffic. The remaining traffic goes to prescription tracking (2.1%), prescription history (11%) and Meds, OTCs, Herbs & Supplements (0.3%)
- Other Medication UI Examples
  - [MyHealtheVet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/health-record/myhealthevet/Medications.png)
  - [Medisafe](https://www.medisafeapp.com/)
  - [From 2016 explorations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/prescription-refills/vets-prescriptions/research/inspiration.md)
- [Society for Hospital Medicine's Best Possible Medication History (BPMH) Quick Tips](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/health-record/references/MARQUIS%20BPMH%20Tri%20Fold%20Pocket%20Guide_0_0.pdf)

## Allergies
- Current features/data displayed in MyHealtheVet (as noted by navigating across the site) and some other inspiration sites
  - Allergy Name (required)
  - Date (required. is the date the onset of the allergy? label isn't super descriptive)
  - severity
  - diagnosed (there is a dropdown with options)
  - reaction (could note when it was clinically observed - if it was clinically observed)
  - comments
  - clinical risk (low risk, etc)
  - reported by (doctor's name or patient)
  - ability to add a new allergy (patient reported data)
  - links to educational material on the allergies (currently links to Medline Plus)

## Immunizations
- Current features/data displayed in MyHealtheVet (as noted by navigating across the site) and some other inspiration sites
  - Immunization name
  - date received (think about how to show immunizations that Veterans receive multiple times like Influenza)
  - reaction (currently MyHealtheVet has checkboxes with options)
  - method (injection, inhalant, by mouth) - Apple Health calls this the route
  - where on the body the injection was received (left deltoid)
  - other sign/symptom (currently dropdown list)
  - comments
  - ability to add a new immunization (patient reported data)
  - Company who made COVID vaccine?
  - link to VA page on recommended screenings and immunizations for an adult
  - link to CDC traveler's health page


# Questions for Veterans (possible user testing plan)
- Research questions
  - How importance are different pieces of data and features to Veterans?
  - What are some current user pain points?

Three separate tests (one each for Medications, Allergies, and Immunizations)
- Importance ranking on possible data we can display via Optional Workshop.
  - Medication ranking can include some of our future/challenge ideas.
  - This will help to see which terms needed extra clarification from the users. Be willing to provide extra clarification during test. Just keep track of which ones needed clarification.
- Participatory design activity in Mural, where the Veteran builds an interface for a home page and a details page
  - Cut the future/challenge medication ideas for this part.
- Follow-up questions about if these ideas help solve any pain points that they experience when communicating with their VA providers. Ask if there is anything they have experienced that wasn't covered by what they saw?
