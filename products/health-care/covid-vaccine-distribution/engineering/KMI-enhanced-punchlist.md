# front end checklist for launch

## general
- [ ] better namespace for app, e.g. coronavirus-vaccination-expansion; should align with KMI, which is coronavirus-vaccination
- [ ] need page titles
- [ ] root for application should be /health-care/covid-19-vaccine/sign-up assuming it is OK with @Mikki
- [ ] if @Martha Wilkes agrees, i think we need a few more pixels of whitespace above the H1
- [ ] Need to add a new conditional page (/veteran-information) for spouses and caregivers that allows entry of DOB and SSN of veteran they are associated with
- [ ] lots of work to do work on privacy / disclosures page, since we don’t have anything there yet. meeting with the privacy folks at 1030a tomorrow to try and nail down what we need to do there.

## introduction
- [ ] need an error message on if no radio button is selected and user clicks continue
- [ ] weird behavior with back button from /verify-eligibility page to /introduction where you have to click a couple of times to get a radio button to stick @Stephen Barrs i think you were working on this, just making sure it is documented
/
## verify-eligibility
- [ ] further weird behavior with back button from /verify-eligibility to /introduction where you get a “are you sure you want to leave changes not saved?” message if you have clicked one of the radios and then hit browser back [this one is low priority]
- [ ] any accessibility issues the “what counts?” accordions on /verify-eligibility @Josh @Martha Wilkes? i love them, just want to make sure they make sense for everyone
- [ ] @Danielle Thierry do we need an explainer accordion for CHAMPVA?

## compliance-agreement
- [ ] change route to /attestation
- [ ] certify these this statements
- [ ] any way to improve the placement of (*Required) on the statement? it is sort of floating below the attestation language on desktop
- [ ] weird behavior: if you click statement of truth box, click continue, then click back and uncheck box and click continue again, state does not seem to change (no error message when hitting continue again) [this one is low priority]

## military-history
- [ ] change route to /service-information
- [ ] Need complete list of service branches
- [ ] Need to add month start/end to service history, so user is reporting month and year of start and m/y of end
- [ ] Need to add character of service types and likely helper text to character of service
- [ ] Need on-page validation to ensure start and end dates are sequential
- [ ] need validation of service year: four digits, maybe >1900

## personal-information
- [ ] change route to /recipient-information
- [ ] change H2 to “My information” or “Vaccination recipient information” (need some @Danielle Thierry thoughts here)
- [ ] “Spouse’s suffix” box needs to go
- [ ] Middle name appears on applicant info, but not in rough schema; we can collect but should not be required and needs to be included in schema; thinking some people go by their middle name so maybe we should collect it?
- [ ] Error messaging needs to be cleaned up (currently displays “does not match pattern regex”)
- [ ] default to US in country box if possible [this one is low priority]
- [ ] should we make email required?
- [ ] help text around social and DOB needs to be updated to more accurately reflect what we need it for
- [ ] street address should be required
- [ ] email address validation needed
- [ ] do we need to repeat email address? we don’t on KMI
- [ ] mobile phone can’t be required. need at least one phone number, preference is mobile. should state that — if you give us your mobile and give us permission to text you, we might do that. @Martha Wilkes need some design ideas here
- [ ] need to add a field for birth sex. the field should be required, but i’d like there to be an option for “prefer not to disclose” or something along those lines.

## confirmation page
- [ ] add content

## privacy stuff
- [ ] Add link and modal to Introduction page
- [ ] Add checkbox and link on reveiw page
- [ ] what needs to happen for SMS disclosure 

## schema stuff
- [ ] add schema to vets-json-schema and PR
- [ ] modify app to use vets-json-schema with required unit tests
- [ ] confirm `require` is correct for all fields

## testing
- [ ] e2e Cypress test for happy path flow
