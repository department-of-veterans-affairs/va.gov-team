# Overview of Cerner Integration Resources

## Cerner FHIR APIs
Cerner provides standard FHIR API's that allow developers to integrate Cerner's EHR systems. These APIs can be used to extract data from Cerner systems, such as patient demographics, medications, lab results, and can also be used to update information in Cerner systems, such as creating new patient encounters or updating patient demographics.

- Cerner FHIR documentation: https://fhir.cerner.com/millennium/overview/
- Public Google Group for Cerner FHIR developers: https://groups.google.com/u/1/g/cerner-fhir-developers

## Cerner Bulk APIs
Bulk APIs enable the exchange records for multiple patients at once. APIs provide clinical data extracts at the population level, and provides access to large volumes of clinical data. Bulk APIs are new to Cerner as of late 2022.

- Cerner Bulk API: [Bulk API Illuminations Sept 2022](https://dvagov.sharepoint.com/:b:/r/sites/CDSProgramTeam/Shared%20Documents/General/Resources/Cerner%20Integration/Bulk%20API%20Illumination_Sept%202022.pdf?csf=1&web=1&e=3kZxln)
- HL7 FHIR Bulk Data: https://hl7.org/fhir/uv/bulkdata/

## Cerner's HealtheIntent Platform
>Cerner's HealtheIntent open development services allow access to population health concepts using RESTful APIs. These APIs are meant to be used by other systems and applications in a business to business (B2B) context. As such, user-level authorization and filtering are not applied; Cerner expects that the systems and applications interacting with these APIs apply the appropriate authorization controls for users.

- Cerner documentation of HealtheIntent Services: https://docs.healtheintent.com/#services
>Note that because the patient record in HealtheIntent is automatically constructed from many independent data sources, no HealtheIntent APIs allow you to write directly to the core clinical resources like the Cerner Millennium FHIR APIs do; however, some of the HealtheIntent intelligence resources do support write actions. Furthermore, because HealtheIntent is not an electronic health record (EHR) platform, no HealtheIntent APIs trigger discrete activities that occur strictly in the context of the legal medical record, such as ordering, scheduling, or billing. The most powerful applications combine both HealtheIntent APIs and FHIR APIs, leveraging the broad data set and automated intelligence exposed by HealtheIntent APIs to drive discrete actions in the EHR using FHIR APIs.

## HL7 Messaging Interface
Cerner uses HL7 Messaging Standard Version 2.5.1 
- Documentation from HL7.org: https://www.hl7.org/implement/standards/product_brief.cfm?product_id=144

## Millennium Objects
MillenniumObjects is an older Cerner proprietary service, comprised of XML web service APIs that interface to Cerner Millennium. Due to Cerner's focus on FHIR standard APIs, Cerner has deprecated some of the APIs and has limited support of these services. Some Cerner clients still use this platform for integration, which typically requires separate licensing. 

- Overview Architecture: [Overview of Millennium Web Services](https://dvagov.sharepoint.com/:b:/r/sites/CDSProgramTeam/Shared%20Documents/General/Resources/Cerner%20Integration/Overview%20of%20Millennium%20Web%20Services.pdf?csf=1&web=1&e=V2qKYT) and [Millennium Objects and Millennium Web Services](https://dvagov.sharepoint.com/:b:/r/sites/CDSProgramTeam/Shared%20Documents/General/Resources/Cerner%20Integration/Millennium%20Objects%20and%20Millennium%20Web%20Services%20-%20uCern.pdf?csf=1&web=1&e=hPIjru)
- List of MillenniumObjects APIs (list exported Dec 2022): [Millennium APIs](https://dvagov.sharepoint.com/:b:/r/sites/CDSProgramTeam/Shared%20Documents/General/Resources/Cerner%20Integration/MillenniumObjects%20APIs.pdf?csf=1&web=1&e=ZaomgQ)


## Additional Resources on VA.gov Github 
Additional GH links that have information about Cerner integration compiled by other teams

- Public Websites: [/products/public-websites/Cerner-Support](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/public-websites/Cerner-Support)
- Digital Health Modernization Engineering: [/products/health-care/digital-health-modernization/engineering/cerner-research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/engineering/cerner-research)

## Data Domains Resources

|Data Domain|Links|
|---|---|
|Scheduling| - [Implementing Scheduling for FHIR](https://dvagov.sharepoint.com/:b:/r/sites/CDSProgramTeam/Shared%20Documents/General/Resources/Cerner%20Integration/Implement%20Scheduling%20for%20FHIR-v114-20221208_100235.pdf?csf=1&web=1&e=InVlzJ) (Cerner Reference Page) |
