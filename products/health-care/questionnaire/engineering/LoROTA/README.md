# LoROTA Integration

How can we utiliize LoROTA for the questionnaire

## Problem

- Users are having friction logging in
  
## Proposed Solution

Use [LoROTA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/e5f34c707cf26461253e22199a8a3d21e84fcde3/products/health-care/checkin/engineering/lorota/readMe.md) to mitigate that factor

## What would need to go into LoROTA

- Patient
  - ICN
  - (maybe) what data to validate the user
- Appt Id
- Questionnaire Id

## Questions

### Macro Questions

- What will push data to LoROTA?
- Can VetText query a data source before sending a text?
- How do we know when an appointment needs a questionnaire?
- Do we care about losing the built in SiP feature?
  - We could try to use FHIR QR as a SiP Feature
- Can we get patient by ICN? ( I think we can, but this is determines what we need to store in LoROTA)
- If I complete my form as LoROTA'd, can I see it when I am fully logged in?

### Mirco Questions

- What happens if I try to fill out the form twice
  
## Changes that would have to happen

### VeText

- be able to get a dynamic link per person

### Vets Web

- New page with validation
  - This new page would redirect to the form
- Error state/flow for validation
- Allow the form to be filled out unauthenticated
- Pass the LoROTA token

### Vets API

- new endpoint to validate LoROTA UUID
- New endpoint to validate patient information
- Update Authentication/Authorization requirements on all existing endpoints to allow a LoROTA token
- Update the POST for QR to be able to handle LoROTA'd Authed Request
- Update the Print for QR to be able to handle LoROTA'd Authed Request or a Authenticated request

## Random Thoughts

- The url in VetTExt would have to be dynamic
- To complete the form, we need:  (These can all be called from the client, with appropriate endpoints)
  - patient
    - If we "just" pass the LoROTA token, Does the client actually need the patient?
  - appointment
  - organization
  - location
  - questionnaire
  - QuestionnaireResponse
    - For the logic around what to display to the user
- Minimal data for LoROTA
  - patient data ( enough to verify)
  - appointment Id
    - we can load the location and organization
  - questionnaire id
- Verification happens on the server
- No more Save In progress forms
  - Only saves if the user is logged in
    - I think thats fine
- Effects on the manager
  - becomes more historic than active
  - Can't show in progress.
- Printing
  - needs QR Id
