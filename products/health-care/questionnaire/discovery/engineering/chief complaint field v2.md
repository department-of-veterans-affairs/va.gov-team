# Putting Chief Complaint field into PGD

- The Chief Complaint Field is a designated text blob or PDF that is to be entered into PGD
- Previous research into putting this field into VistA/CPRS concluded that PGD was the best place instead 
- Lighthouse is planning to implement an API to work with PGD, however the project is fairly far out in time so this probably won't be an option.
- the current best solution is to use smart-fhir-pgd through VAMF, much of the other items here document the details we went through to arrive at this.
[Current best solution]()

#### VAMF services into PGD
- VAMF exposes various services, but they are not intended for external applications.

#### GetCare APP

- There is a GetCare app that also works with PGD through VAMF
- GetCare is mobile app used for all encompassing VHA appointments. It is used for senior appointments showing pre visit agenda, entering family history, senior prescriptions
- GetCare is a resource for investigation to how it accesses PGD and to consider avoiding duplication if that applies. GetCare writes Questionnaire and QuestionnaireResponse text to VAMF (not as FHIR based records). It would appear that in this case, if VAMF writes that to PGD as a FHIR based Questionnaire, then it handles those details.

Questionanaire writes through VAMF from GetCare are of this form. 
```
POST /patients/{patient-icn}/appointments/{appointment-id}/pre-visit-agendas header: {JWT} body: { firstName, lastName, status, start, practitionerId, question [{ text, answer } ], encounterId, questionnaireResponseId }

PUT /patients/{patient-icn}/appointments/{appointment-id}/pre-visit-agendas/{agenda-id} header: {JWT} body: { firstName, lastName, status, start, practitionerId, question [{ text, answer } ], encounterId, questionnaireResponseId }
```

GetCare however is an internal VAMF application and the services that it uses are not intended for external applications


#### Using smart-fhir-pgd directly

- VAMF uses an interface to PGD refered to as smart-pgd-fhir
- According to Stephen Barrs, we are able to write to the PGD directly in this manner.
- We would need to meet with the VAMF team and provide a design document.
- FHIR has a Questionnaire and QuestionnaireResponse resources. These are complex records but they are standardized through fhir.
- We would like to understand how Questionnaire records are related a patient record. VAMF services handles that detail. It's not clear if that is part of the fhir spec or if we somehow handle the association ourselves
- Any user Questionnaire data that came from when the user was not authenticated would be put into the PGD when the user logs in.

#### Authenticated and Unathenticated data

 The forms library documentation explains the best approach regarding authenticated and unathenticated data. Unauthenticated data can be saved locally, when the user logs in, if that data does not exist on the system then it can be populated into the system or save in progress form at that time.

[Authenticated and Unathenticated data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/engineering/forms.md#what-was-built)


## Screen shots

- [RFV-Chief Complaint Whiteboard](https://drive.google.com/file/d/1wgXiIbyiUzT4vJmzobL6o3z7buRs2hwJ/view?usp=sharing)


