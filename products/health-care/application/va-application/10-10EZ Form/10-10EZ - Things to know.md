# Things to know about the 10-10EZ
This document contains tidbits, odds & ends, and information about the 10-10EZ form, development, testing and anything else that isn't captured in other documents.

### Abbreviations
- ES = Enrollment System/Service
- EE/E&E = Eligibility and Enrollment
- HEC = Heathcare Enrollment Services
- HCA - Health Care Application (AKA 10-10EZ)
- VOA - Veteran Online Application (AKA 10-10EZ)
- VistA - Legacy health record source, in process of deprecating - Enrollment Systen will be the main source of data

Systems used by Application Processing teams
- VIS - Veteran Information Solution 
     - Provides consolidated view of comprehensive eligibility from VBA and DoD.  Used to locate combat dates, activation peried, South West Asia (SWA), active duty military service, service-connected disability, pension, amount, etc
- HINQ - Hospital Inquiry System
     - Provides verificatoin information to include active duty periods, active duty for training only, and service-connected disabilities
- SHARE - 
     - Automatically creates claim data in the Benefit Delivery Network and VBA corporate database to support case managment of Compensation & Pension claims
- VBMS - Veterans Benefit Management System
     - Should only be used on a need-to-know basis.
     - e-folder contains every document the Veteran has ever sent to the Veterans Benefits Administration (VBA) in addition to determiniations.  Thie info may include DD-214/215 and Award Letters.
- DPRIS - Defense Personnel Records Information Retrieval System
     - Used to obtain documents such as DD-214 and DD-215

### Development
- 7/29/22 - The Place of Birth state dropdown must only include 50 states, DC and Other. ES will not accept any other values at this time.
- 11/12/22 - The Certificate CN being sent to ES for SSL (Security layers) is "es-prod.va.gov"  
     - If this changes, we need to be sure to communicate to Joshua Faulkner and ES team.  If Joshua is not available, update the Project Lead to pass on the communications.
- 1/31/23 - Here is the [10-10EZ Schema](https://github.com/department-of-veterans-affairs/vets-json-schema/blob/eccf2e8f98967e2d8841331935e8f8ce8a36e74d/dist/10-10EZ-schema.json)
- 7/27/23 - Confirmation regarding how ES handles non-english characters (in the event we translate the EZ into another language)
     - **Heather (Question)**: Question regarding non-english language characters in ES.  Can/Does ES handle characters with accents, such as in the Spanish language?
     - **Joshua Faulkner (Answer)**:There has been feedback on other systems that the character with an accent on it is registering as two characters, so while data input appears on the front end to stay within field character limits, it is failing on the backend as exceeding limits due to the character now counting as two.





New


Joshua Faulkner
  11:35 AM
i think you're talking about database constraints; ES will support non english characters but they take up more than one byte in a varchar column, which is why you don't set the constraints to be the same as the input field length constraints if your database is using ISO charset. i.e. last name field can be 30 chars including extended character sets but the DB column is 100 bytes to allow for conversions. Haven't had any issues with it aside from some foreign addresses that were in German, couple years ago we had to extend the column to accommodate some of those.



### Testing
- 8/5/22 When testing end2end in **Preprod** environment, the testing team uses Boston for the Facility locator, which is one of 4 acceptable locations for ES
- 8/5/22 When testing end2end in **SQA** environment, the testing team uses Spokane for the Facility locator
- 8/5/22 our Staging environment points to the Enrollment System SQA environment (not pre-prod)
- 5/10/23 User 11 will prefill military data, but will not prefill Discharge Character due to receiving an "Other" response.  This response is due to either an "Other than Honorable" character or the data showing "NIL".  See ticket #57992 for details and solution.
- 5/10/23 User 150 has an "Honorable" discharge character that will prefill (used in testing the Discharge Character bug #57992


### Miscellaneous
- Military History - Prefilled data
     - Military history is prefilled for authenticated Veterans.
     - This information is pulled from the VA.gov Profile
     - The VA.gov Profile pulls this information from the VA Profile (different team/system)
     - The VA Profile pulls the information from the DoD DEERS and VADIR repository
     - Technical specs and details can be found in this [VA.gov Profile Backend document](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/military_info/backend_documentation.md)

- 1/18/2023 Tarsha Tremble has moved to another position and is no longer the POC Project manager for 10-10EZ.
     - Jennifer Mdoe is the new contact
 
- WSDL file for Enrollment System from Joshua Faulkner
     - [EE Summary WSDL](https://ves.va.gov/esr-ws/spring-ws/getEESummary/eeSummary.wsdl)
     - MUST be on VA Network to access this file
 


