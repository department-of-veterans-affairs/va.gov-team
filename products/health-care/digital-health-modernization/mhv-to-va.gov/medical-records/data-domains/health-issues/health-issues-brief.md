# Health Conditions Brief: Data fields and UX considerations

Last updated: February 3, 2023 | [Change Log](#change-log)

## Purpose

To serve as a source of truth around data field requirements and specifications, UX considerations, and to document a plan for feedback from SMEs or coordination with other teams. 

## Description of domain

This domain provides Veterans with a summary of the active health concerns contained in their official VA health record. 

## Relevant links

[Intiative Decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/decision-log.md)

[Health Issues Decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/health-issues/decision-log.md)

[Use cases and user flows](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1670275244338/a7ecd52750cd539d1fceea40b1879336b8a339d2?invited=true&sender=u7de68ed54bc434b67b630908)

[Medical Records Comparative Analysis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1659473055858/08b0e54ba40761f0893fc1c13454882a645e47ff?wid=0-1663621688531&sender=u7de68ed54bc434b67b630908)

[Medical Records Discovery Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1661955319813/0edab3b186f83ecf243781fd24de5fc683a52266?sender=u7de68ed54bc434b67b630908)

[Medical Records Generative Research Findings Readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-10_Generative-research/2022-11-medical-records-readout.md)

[Meaningful use standards documents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/meaningful-use-standards) - provided by Patty Henry between 1/12/2023 - 1/17/2023.  These standards originated during the Obama administration. MyHealtheVet used to get measured against these standards, and while they no longer do, these standards are still considered best practice and pertain to viewing, downloading, and transmitting.


## Problem List in Context of Existing MyHealth*e*Vet Site
1. In the exisitng MyHealtheVet site, this data is not currently provided on an actual MyHealth*e*Vet web page, but rather can be included in one of two different types of reports that can be generated from MyHealth*e*Vet.  Once a report has been generated, it can be viewed as a PDF or TXT (Blue Button only) within an iframe, downloaded as a PDF, or downloaded as an XML (VA Health Summary only) or TXT (Blue Button report only) file.
2. Information and disclaimers about the problem list within a Blue Button report can be found on the [problem list landing page](https://www.myhealth.va.gov/mhv-portal-web/va-problem-list) on MyHeath*e*Vet (requires logging in with a test account).
3. The Problem List within the Blue Button report is displayed in a tablular format with each condition in its own table.  See page 4 of [downloaded Blue Button PDF example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/health-issues/bb-problem-list-example.pdf)
4. The ability to download a Problem List requires users to upgrade to a Premium Account. 
5. There is a 36-hour waiting period before a new problem is included in the Problem list.
6. The VA Health Summary (a separate view/download option from Blue Button) also contains a problem list, which is displayed in a tabluar format.   [Screen shot of on-screen view](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/health-issues/problem-list-view-example.png) | [Downloaded VA Health Summary PDF example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/health-issues/va-health-summary-example.pdf)
7. VA Health Summary data is currently updated once a day and may be viewed in the browser, downloaded as a PDF, XML file or sent securely to a health provider via Direct Message.  
8. Users may also set up Email notifications to subscribe to Health Summary delivery notifications.
9. Generating a VA Health Summary is a lengthy process due to the background process that must be run to collect the data.  The browser shows a status and will display links to view, download PDF, Download XML or Send the health summary once the report has been generated. 
10. The Problem list in the VA Health Summary incudes data from the user's date of birth until the date the report is generated.

## Health conditions data fields
(Refer to [Medical Records Domains, Fields, Capabilities](https://docs.google.com/spreadsheets/d/13KE1WhN9c_uG_m-RDEeL3xT0Q50txcBJ_IMt8BxU5II/edit#gid=1602824280) for more detail on data fields.) 

**Data field title:** Health conditions

**Data fields to include:**
There are two different types of report available on MyHealtheVet that contain a list of health conditions  -- Blue Button reports and VA Health Summary reports. VA Health Summary reports are derived from the patient's e-Vault.  

Below shows the list of Problem List fields available within each report.  The decision as to which data set is most appropriate to be displayed on a page should be made by the stakeholders, including Bresha Lipscomb.

- Blue Button Report
    - Problem
    - Provider
    - Location
    - Status
    - Date/Time Entered
    - Comments
    
- VA Health Summary
    - Problem
    - Status
    - Problem Code
    - Date on Onset
    - Date of Resolution
    - Provider
    - Source

## Use Cases

**Common Use Cases**
- A Veteran who prefers keeping a digital copy of his health information wants to download it as a PDF to save on a personal hard drive.

- A Veteran who is planning to have surgery at a non-VA facility wants to email her health information to the new provider so the provider is informed about all of her current health conditions.

- A Veteran who is seeing a new provider wants to download his health information as an XML file so that he can give it to the new provider on a thumb drive to be imported into their health care system.

- A Veteran who has been treated multiple times in the past for the same service-related injury wants to include that information in a disability claim.


**Edge Cases**
- A Veteran who is afraid her online data may someday disappear wants to print out a copy of her conditions to have on hand for future reference.

- A Veteran concerned with needing emergency medical care in the future wants to keep a printed copy so that his spouse can provide it to emergency medical personnel in the event he is unconcious.

## UX considerations

### When to show Health Conditions section
The Health Problems section should be visible to any logged in user with health benefits and a health record with the VA, and has navigated to the page where Health Problems information is located.  In MyHealth*e*Vet, users must also have a Premium account, but at the time of this writing, it is believed that the notion of Premium accounts is slated to be depricated.

**Where do Health Conditions fit within IA?**
Health conditions will be part of the Health history section


### How to show Health Conditions section
- What should the screen look like? What information should be seen? What should be hidden? 


**View vs. share vs. download considerations:**
- Once a Blue Button report containing a problem list is generated, it can be viewed within an iframe as a PDF or TXT file, or downloaded as a PDF or TXT file.  The current download page is confusing in that the View link doesn't specify whether it's to view a PDF or TXT, where the Download links do specify. This needs to be made clear in the new interface.  Similarly, the View link on the VA Health Summary download page does not distinguish between PDF, or XML.
- The VA Health Summary page supplies information about sending health information to CCD Direct Participating providers. [Screen shot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/health-issues/health-summary-ccda-info.png)

### Research that relates to Health Problems

**Findings from card sort**
- The card sort did not cover specifics about Health Conditions.

## Questions to answer

**UX:** 


**Business/ Engineering:** 
1. What data source should be used to display the Health Conditions list on a web page?  The Blue Button data source or the VA Health Summary data source? 
2. Is it still the case that Premium accounts will be depreciated before the new Health Portal launches? If so, what is the ETA for that?

**Who do we need to get feedback from?**
Bresha Lipscomb

## Lessons learned


## Backlog of potential features/ Ideas Parking Lot
- During user interviews, several participants expressed the desire to be able to select only specific health records based on a specific health issue, such as a shoulder injury, for the purposes of filing a disability claim.

## Additional notes


## Change Log

|  Date           | Changed By       | Description of Change                                                                                               |
| ----------------| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
|                 |                  |                                                                                                                     |
|                 |                  |                                                                                                                     |
|                 |                  |                                                                                                                     |
