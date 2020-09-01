
## Get appointment details from MAP (date, facility, time, appt type, booking note, person)

This should presumably be the same as how VAOS works, but the health quest service has to build and be able to connect the same as VAOS does at least in the stagging so we need a key pair.

## View appointment details in questionnaire.

Questionnaire is PGD and appointment came from MAP through a different service. Some details need to be worked out on this

## Post questionnaire fields (Reason for Visit, Health concerns/goals, and questions (dynamic?) from MAP service to sandbox instance of PGD (Patient Generated Data ?)

Would like to just post anything into FHIR first. Not sure of record relationships or restrictions

PGD will need JWT, will that work with fhir client ?


---

- JWT 
- FHIR data 
- connect to sandbox
- connect to MAP appointment side
- use fhir client or not ?
- Are these fhir sandboxes basically smart fhir compliant ? 

