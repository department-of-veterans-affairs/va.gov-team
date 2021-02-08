# Snapshot PDF

## Use Cases

- As a veteran, I want to print the answers of my questionnaire
- As a veteran, I should be able to print the answers after I submit the answers
- As a veteran, I should be able to print the answers of all my completed questionnaires
- As a veteran, When I print a questionnaire, the answers

## Tech Architecture - v1

In order to allow a veteran to see their data that was submitted, we need to store the submitted data as a snapshot of what was submitted. Since we are not storing appointment or demographics with the answers.

In order to do this, we must store a copy of the data when the user submits the Questionnaire to PGD.

This copy will be created when the questionnaire is submitted. After a successful submission to PGD, the vets api will store a copy of the answers, demographics and appointment details in the Postgres database. This data will be encryted and stored in its own database table with the following structure:

```
TODO: Fill this in
```

To retrieve the information, the front end will make a call to the back via a GET request that will look like

```
GET /api/health_quest/v0/questionnaire_response?id=[questionnaire-id]
```

This call can be a long call, so a `generating PDF` message will show to the user. This API endpoint will return the PDF data ([API code sample](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/caregivers_assistance_claims_controller.rb#L29)). This call will return the a stream of data of the PDF

On the front end, once the data is received, then a `download link` will be shown. Once a user clicks that link a new window will open in the browser with the PDF available to be seen or downloaded.

## Outstanding Questions

- What does that table structure look like?
- What kind of encryption are we using?
- Is this okay from a legal perspective?

## Tech Architecture - v2

Long term we want to store the PDFs PGD. In the FHIR specification there is a resource type called [DocumentReference](https://www.hl7.org/fhir/documentreference.html). , we can store the PDF in the `content.attachment` field of a `document reference` as a base64 encoded string.

We will move to using Lighthouse to store PDFs when the functionality is complete.

## Migration from v1 to v2

Migration shouldn't be that complex. A one-time run batch job to move the data to PGD would have to be run
