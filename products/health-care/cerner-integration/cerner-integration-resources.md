# Overview of Cerner Integration Resources

## Cerner FHIR API's
Cerner provides standard FHIR API's that allow developers to integrate Cerner's EHR systems. These APIs can be used to extract data from Cerner systems, such as patient demographics, medications, lab results, and can also be used to update information in Cerner systems, such as creating new patient encounters or updating patient demographics.

- Cerner FHIR documentation: https://fhir.cerner.com/millennium/overview/
- Public Google Group for Cerner FHIR developers: https://groups.google.com/u/1/g/cerner-fhir-developers

## Cerner's HealtheIntent Platform
>Cerner's HealtheIntent open development services allow access to population health concepts using RESTful APIs. These APIs are meant to be used by other systems and applications in a business to business (B2B) context. As such, user-level authorization and filtering are not applied; Cerner expects that the systems and applications interacting with these APIs apply the appropriate authorization controls for users.

- Cerner documentation of HealtheIntent Services: https://docs.healtheintent.com/#services
>Note that because the patient record in HealtheIntent is automatically constructed from many independent data sources, no HealtheIntent APIs allow you to write directly to the core clinical resources like the Cerner Millennium FHIR APIs do; however, some of the HealtheIntent intelligence resources do support write actions. Furthermore, because HealtheIntent is not an electronic health record (EHR) platform, no HealtheIntent APIs trigger discrete activities that occur strictly in the context of the legal medical record, such as ordering, scheduling, or billing. The most powerful applications combine both HealtheIntent APIs and FHIR APIs, leveraging the broad data set and automated intelligence exposed by HealtheIntent APIs to drive discrete actions in the EHR using FHIR APIs.

## HL7 Messaging Interface
Cerner uses HL7 Messaging Standard Version 2.5.1 
- Documentation from HL7.org: https://www.hl7.org/implement/standards/product_brief.cfm?product_id=144

## Data Domains Resources

|Data Domain|Links|
|---|---|
|Scheduling| - [Implementing Scheduling for FHIR](https://dvagov.sharepoint.com/:b:/r/sites/CDSProgramTeam/Shared%20Documents/General/Resources/Cerner%20Integration/Implement%20Scheduling%20for%20FHIR-v114-20221208_100235.pdf?csf=1&web=1&e=InVlzJ) (Cerner Reference Page) |
