# Health conditions: Domain brief

Last updated: February 6, 2023 | [Change Log](#change-log)

## Table of Contents
- [Description of domain](#description-of-domain)
- [Use cases](#use-cases)
- [Requirements](#requirements)
- [Research to date](#research-to-date)
- [Relevant links](#relevant-links)
- [Questions to answer](#questions-to-answer)

Appendix
- [Detailed analysis of data fields](#detailed-analysis-of-data-fields)

## Description of domain
This domain provides Veterans with a summary of the current and past health conditions documented in their official VA health record. 

## Use Cases

**Common Use Cases**
- A Veteran who prefers keeping a digital copy of his health information wants to download it as a PDF to save on a personal hard drive.
- A Veteran who is planning to have surgery at a non-VA facility wants to email her health information to the new provider so the provider is informed about all of her current health conditions.
- A Veteran wants include evidence of their health conditions and the date of their onset in a disability claim.

**Edge Cases**
- A Veteran who is afraid her online data may someday disappear wants to print out a copy of her conditions to have on hand for future reference.
- A Veteran concerned with needing emergency medical care in the future wants to keep a printed copy so that his spouse can provide it to emergency medical personnel in the event he is unconcious.
- A Veteran who is seeing a new provider wants to download his health information as an XML file so that he can give it to the new provider on a thumb drive to be imported into their health care system.

## Requirements

### Title
Health conditions

### Information architecture
Home > My Health > Health history > Health conditions

### List view
  - At the top of the page, a user should be able to quickly learn about the availability of notes. For more info, see https://myhealth.va.gov/mhv-portal-web/blue-button-availability
  - Users should be able to view a list of their health issues from across all VA facilities
  - Each entry should include
    - issue/problem title
    - date/time it was entered
    - status of the issue (e.g. active/inactive)
  - A user should be able to sort their health conditions
    - Chronologically based on initially entered date
    - Alphabetically by issue
    - By status

### Details view
  - From the top of the page, a user should be able to print and download the entire list so that they can share and communicate their health issues with their health care team
  - Each health issue entry should include:
    - Issue/problem title
    - Date/time entered
    - Status
    - Location where the issue was entered
    - Provider's name
    - Comments

### Not for first iteration, requires future usability research
- During user interviews, several participants expressed the desire to be able to select only specific health records based on a specific health issue, such as a shoulder injury, for the purposes of filing a disability claim.

### Sketch file
https://www.sketch.com/s/0803544d-e78c-423a-a70e-7db01a9a31c7/v/7kbypw/p/348539BA-4DD8-42DA-BDC4-EA4ADF28A54F/canvas?posX=-6458.6065971122&posY=-1066.1735886908618&zoom=0.07352695614099503

## Research to date
The card sort did not cover specifics about Health Conditions.

### Desk research
1. In the exisitng MyHealtheVet site, this data is not currently provided on an actual MyHealth*e*Vet web page, but rather can be included in one of two different types of reports that can be generated from MyHealth*e*Vet.  Once a report has been generated, it can be viewed as a PDF or TXT (Blue Button only) within an iframe, downloaded as a PDF, or downloaded as an XML (VA Health Summary only) or TXT (Blue Button report only) file.
2. Information and disclaimers about the problem list within a Blue Button report can be found on the [problem list landing page](https://www.myhealth.va.gov/mhv-portal-web/va-problem-list) on MyHeath*e*Vet (requires logging in with a test account).
3. The Problem List within the Blue Button report is displayed in a tablular format with each condition in its own table.  See page 4 of [downloaded Blue Button PDF example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/health-issues/bb-problem-list-example.pdf)
4. The ability to download a Problem List requires users to upgrade to a Premium Account. 
5. There is a 36-hour waiting period before a new problem is included in the Problem list.
6. The VA Health Summary (a separate view/download option from Blue Button) also contains a problem list, which is displayed in a tabluar format.   [Screen shot of on-screen view](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/health-issues/problem-list-view-example.png) | [Downloaded VA Health Summary PDF example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/health-issues/va-health-summary-example.pdf)
7. The Problem list in the VA Health Summary incudes data from the user's date of birth until the date the report is generated.
8. The VA Health Summary page supplies information about sending health information to CCD Direct Participating providers. [Screen shot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/health-issues/health-summary-ccda-info.png)


## Relevant links

- [Intiative Decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/decision-log.md)
- [Health Issues Decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/health-issues/decision-log.md)
- [Use cases and user flows](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1670275244338/a7ecd52750cd539d1fceea40b1879336b8a339d2?invited=true&sender=u7de68ed54bc434b67b630908)
- [Medical Records Comparative Analysis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1659473055858/08b0e54ba40761f0893fc1c13454882a645e47ff?wid=0-1663621688531&sender=u7de68ed54bc434b67b630908)
- [Medical Records Discovery Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1661955319813/0edab3b186f83ecf243781fd24de5fc683a52266?sender=u7de68ed54bc434b67b630908)
- [Medical Records Generative Research Findings Readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-10_Generative-research/2022-11-medical-records-readout.md)
- [Meaningful use standards documents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/meaningful-use-standards) - provided by Patty Henry between 1/12/2023 - 1/17/2023.  These standards originated during the Obama administration. MyHealtheVet used to get measured against these standards, and while they no longer do, these standards are still considered best practice and pertain to viewing, downloading, and transmitting.

## Questions to answer

- There are two different types of report available on MyHealtheVet that contain a list of health conditions  -- Blue Button reports and VA Health Summary reports.  Which should we use? Up to this point, we have anchored on the BB report list.
- What data source should be used to display the Health Conditions list on a web page?  The Blue Button data source or the VA Health Summary data source? 
- The Health Problems section should be visible to any logged in user with health benefits and a health record with the VA, and has navigated to the page where Health Problems information is located.  In MyHealth*e*Vet, users must also have a Premium account, but at the time of this writing, it is believed that the notion of Premium accounts is slated to be depricated. Is it still the case that Premium accounts will be depreciated before the new Health Portal launches? If so, what is the ETA for that? Otherwise, there will need to be copy that explains that a user must upgrade to access their health conditions list.

## Change Log

|  Date           | Changed By       | Description of Change                                                                                               |
| ----------------| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
|2023/02/06 |Coulton Bunney                  |     Combined requirements and brief                                                                                                                |
|                 |                  |                                                                                                                     |
|                 |                  |                                                                                                                     |

# Appendix

## Detailed analysis of data fields
(Refer to [Medical Records Domains, Fields, Capabilities](https://docs.google.com/spreadsheets/d/13KE1WhN9c_uG_m-RDEeL3xT0Q50txcBJ_IMt8BxU5II/edit#gid=1602824280) for more detail on data fields.) 

**Data field title:** Health conditions

**Data fields:**

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
