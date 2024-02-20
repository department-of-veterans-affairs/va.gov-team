# Daily Check-in with VES Sustainment team on TERA progress 
- These are ongoing notes from each daily session up to March 8, 2024
- Launch date is March 5, 2024

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
     - Meena provided the document, uploaded to [Engineerng docs folder](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Toxic%20Exposure/Engineering%20docs/eeSummary_02202024.xsd) 
- [ ] Meena will provide sample response to 1010 team
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





