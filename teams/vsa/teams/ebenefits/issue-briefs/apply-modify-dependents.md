__Please note: some links in this document point to the vets.gov-team repo.__

Discovery and Design work in progress: https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Disability/Declare%20Dependent%20686

| Field | Description |
|---|---|
Feature Name	| Apply for or Modify Dependency Benefits
Feature Description	| Users with a >30% service-connected ability rating are able to add and remove dependents from their award, or to submit additional information if their child is school-aged. 
Feature Nickname	| 21-686c/674
Form Number	| VA 21-686c, VA 21-674, VA 21-674b
Enabling Capability	| Apply - Benefits
VA or DoD Product	| VA Disability Compensation and Pension
Universal Capabilities / Architectural Components	| Document Virus Scanning, Email / SMTP, Message Center, PDF, Generation Account Activity History, Reporting, Message Encryption, Service Orchestration, Transaction Management
Users Supported	| Veterans
Business Line	| Compensation
Feature Type	| Custom Built, EVSS-Hosted Capability
Platform	| eBenefits
Minimum Access Level	| LOA 3 (eBenefits Premium)
TYPE OF INTG	| SOAP-Based Web Services
Application Developer	| EVSS
Partner / Service Provider	| BGS, RBPS
System of Record	| VBA Corp
Document Repository	| VVA
Sensitive Data	| Dependent name, DOB, Gender, SSN (partially masked)
Other Data	| Relationship, Dependent education information
Direct Path	| /ebenefits/vdc?target=%2Fwssweb%2FVDC686%2Fdependent.do
References (Service/Operation)	| BGS Web Services: RatingWebService.findRatingData VetRecordWebService.findVeteranByFileNumber AwardWebService.findStationOfJurisdiction RORoutingService.getRegionalOfficeByZipCode VnpPersonService ShareStandardDataWebService.findStationAddress VnpPtcpntSe
EVSS REST Endpoints | Supporting Feature	
2016 Usage Metrics	| 146047 avg monthly visits
Frank to EVSS landscape	| Add/remove a dependent, Apply for disability compensation
Status	| To move - low LOE
Status Notes	| Migrate this feature to VA.gov. This feature is already on VA.gov as part of an existing product (disability compensation). This feature needs to be built out as it's own product (post-MVP feature) to allow users access to manage their dependent information
Action	| New product, Profile, Claim/appeal status
PRA	| 2900-0049,2900-0043
Notes	| VA 21-674 and VA 21-674b are covered under OMB control number 2900-0049.
Attachments| 	
Jeff, Chris, and Matt Notes	| We have our sights on this. Dragons.
Roadmap	| NEAR TERM

## Screenshot

