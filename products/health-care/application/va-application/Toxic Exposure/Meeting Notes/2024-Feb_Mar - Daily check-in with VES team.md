# Daily Check-in with VES Sustainment team on TERA progress 
- These are ongoing notes from each daily session up to March 8, 2024
- Launch date is March 5, 2024


---
### Feb 26, 2024 | 1010/VES - Daily Check-in for PACT Act 103
#### Notes
- 10-10 Backend conflict has been resolved
- 10-10 Frontend is pending final review to merge into Staging environment
     - We have a Review Instance up that we can test with internally
- VES/Enrollment system SSOi issue
     - The team has logged a Service Now* ticket, with high priority
     - Joshua Faulkner is also involved with this

#### Action items
- [ ] 10-10 team to update VES when all code is in staging
- [ ] VES team to update 10-10 team when ES is back up


---
### Feb 23, 2024 | 1010/VES - Daily Check-in for PACT Act 103
#### Notes
- Status
     - Automated testing Frontend
          - Anticipate deployment this afternoon (3pm daily deploy)
     - Backend testing happening now - Lihan & Ramya working together



---
### Feb 22, 2024 | 1010/VES - Daily Check-in for PACT Act 103
#### Notes
- Once deployed to production, Will the enrollment system be able to accept a mix of submissions with the TERA fields and without the TERA fields?
     - Meena confirmed this is acceptable
- Lihan sent a test submission in the SQA environment with all the new TERA questions included, can you confirm if it was processed correctly?
     - Meena is checking on it this morning

#### Action items
- [x] Meena & Team to confirm test submission - success or fail, any other details

---
### Feb 21, 2024 | 1010/VES - Daily Check-in for PACT Act 103
#### Notes
- Testing coordination
     - VES Dev ready timing - will be ready by tomorrow 2/22
     - Will conduct internal testing until Monday, when 1010 team is ready
     - 1010 team ready timing - will be ready by Monday 2/26
     - No concerns from either team with the Monday and Tuesday integration testing timeline
- Request for VES team to share/demo how things work with enrollment system
     - Ramya agreed and believes we may be able to do this during integration testing
- Note: 1010EZR will not be delivered on 3/5/2024 date
     - 1010 team will discuss priorities with HEC stakeholders and keep this audience informed of that update

#### Action items
- [x] Heather & Ramya will share the respective test scenarios
     - Shared on 2/23/2024 via SLACK 

---
### Feb 20, 2024 | 1010/VES - Daily Check-in for PACT Act 103

#### Notes
- There were 3 additional exposure items that were missed
     - SHAD
     - Camp Lejuene
     - Mustard Gas
- VES team not adding Question A (Radiation) or Question D (Agent Orange) on VES
     - The Date range fields for Agent Orange will be added in June 2024
- EZonline will have these questions on UI but will map to existing check boxes
     - EZonline will not display the Date range fields for Agent Orange question until June 2024, when VES is ready
- 100 character limit agreed upon for freeform text box
     - Confirmed again this is to be alphanumeric only
- Update: Chapley is no longer on the team, Lihan will continue the work

#### Action items
- [x] Meena adding 3 missing exposure items, send updated schema
     - Meena provided the document, uploaded to [Engineering docs folder](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Toxic%20Exposure/Engineering%20docs/eeSummary_02202024.xsd) 
- [x] Meena will provide sample response to 1010 team
     - Meena provided sample request XML, uploaded to [Engineering docs folder ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Toxic%20Exposure/Engineering%20docs/voa_tera_sample_request_with_toxic_exposure.xml)
- [x] Meena will update REGEX for freeform text field
     -  (FROM MEENA 2/20/2024) Here is the REGEX that we are using to validate the otherText:
TOXIC_EXPOSURE_OTHER_TEXT_ALLOWED_CHARACTERS = "^[a-zA-Z0-9 ]{1,100}$"
     - Heather provided this info to Lihan and Matt via team dev slack


--- 
### Feb 16, 2024 | 1010/VES - Daily Check-in for PACT Act 103

#### Notes
- Confirmed free form text box will be included
- Confirmed Alphanumeric will be acceptable
- Received updated XSD for review

---
### Feb 15, 2024 | 1010/VES - Daily Check-in for PACT Act 103

#### Notes
- First check-in with the teams
- Meena provided draft schema





