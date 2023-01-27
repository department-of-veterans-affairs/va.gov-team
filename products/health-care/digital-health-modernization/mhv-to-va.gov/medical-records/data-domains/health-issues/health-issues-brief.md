# Health Issues Brief: Data fields and UX considerations

Last updated: January 27, 2023

## Purpose

To serve as a source of truth around data field requirements and specifications, UX considerations, and to document a plan for feedback from SMEs or coordination with other teams. 

## Description of domain

This domain provides Veterans with a summary of the active health concerns contained in their official VA health record.  It is important to note that this data is not currently provided within the MyHealth*e*Vet information architecture itself, but rather is contained in one of two different types of reports that can be generated from MyHealth*e*Vet.  

The two types of reports that may contain a list of health issues are Blue Button reports and VA Health Summary Reports.  It is worth nothing that the data that populate these two reports are derived from different data sources, and therefore may not match.  The VA Health Summary Report is derived from CCDA (Consolidated Clinical Document Architecture) data.  The Blue Button report is derived from the patient's eVault data, which originates from VistA.  Below shows the list of Problem List fields available within each report.

- VA Health Summary
    - Problem
    - Provider
    - Location
    - Status
    - Date/Time Entered
    - Comments

- Blue Button Report
    - Problem
    - Status
    - Problem Code
    - Date on Onset
    - Date of Resolution
    - Provider
    - Source

## Problem List Within Existing MyHealth*e*Vet Site
1. Information and disclaimers about the problem list can be found on the [problem list landing page](https://www.myhealth.va.gov/mhv-portal-web/va-problem-list) on MyHeath*e*Vet (requires logging in with a test account).
2. The ability to download a Problem List requires users to upgrade to a Premium Account. To view the problem list online, you will need to use a test user account that is set up as Premium.
3. There is a 36-hour waiting period before a new problem is included in the Problem list.
5. The problem list within the VA Health Summary is displayed in a tabluar format.   Screen shot of on-screen view | PDF example
6. VA Health Summary data is currently updated once a day and may be viewed in the browser, downloaded as a PDF, XML file or sent securely to a health provider via Direct Message.  
7. Users may also set up Email notifications to subscribe to Health Summary delivery notifications.
8. Generating a VA Health Summary is a lengthy process due to the background process that must be run to collect the data.  The browser shows a status and will display links to view, download PDF, Download XML or Send the health summary once the report has been generated. 
9. The Problem list in the VA Health Summary incudes data from the user's date of birth until the date the report is generated.


## Relevant links

[Intiative Decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/decision-log.md)

[Health Issues Decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/health-issues/decision-log.md)

[Use cases and user flows](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1670275244338/a7ecd52750cd539d1fceea40b1879336b8a339d2?invited=true&sender=u7de68ed54bc434b67b630908)

[Medical Records Comparative Analysis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1659473055858/08b0e54ba40761f0893fc1c13454882a645e47ff?wid=0-1663621688531&sender=u7de68ed54bc434b67b630908)

[Medical Records Discovery Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1661955319813/0edab3b186f83ecf243781fd24de5fc683a52266?sender=u7de68ed54bc434b67b630908)

[Medical Records Generative Research Findings Readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-10_Generative-research/2022-11-medical-records-readout.md)

[Meaningful use standards documents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/meaningful-use-standards) - provided by Patty Henry between 1/12/2023 - 1/17/2023.  These standards originated during the Obama administration. MyHealtheVet used to get measured against these standards, and while they no longer do, these standards are still considered best practice and pertain to viewing, downloading, and transmitting.


## Demographics data fields
(Refer to [Medical Records Domains, Fields, Capabilities](https://docs.google.com/spreadsheets/d/13KE1WhN9c_uG_m-RDEeL3xT0Q50txcBJ_IMt8BxU5II/edit#gid=1602824280) for more detail on data fields.) 

**Data field title:** Demographics

**Data fields to include:**
- VA Treatment Facility
- First Name
- Middle Name
- Last Name
- Date of Birth
- Age
- Gender
- Ethnicity
- Race
- Language
- Preferred Language
- Religion
- Place of Birth
- Marital Status
- Social History
- Functional status
- Advance Directive
- Permanent Address and Contact Information
- Eligibility
- Employment
- Primary Next-of-Kin
- Emergency Contact
- VA Guardian
- Civil Guardian
- Active Insurance

<img width="957" alt="image" src="https://user-images.githubusercontent.com/100814257/214926426-4b0b37aa-a155-4713-8e71-62d33f3f75b6.png">
<img width="958" alt="image" src="https://user-images.githubusercontent.com/100814257/214926668-00bf8929-a337-48b2-8f2e-730c8bdad2a9.png">


## Use Cases

**Common Use Cases**

**Edge Cases**



## UX considerations

### When to show Health Problems section


**Where do Health Problems fit within IA?**



### How to show Health Problems section
- What should the screen look like? What information should be seen? What should be hidden? 



**View vs. share vs. download considerations:**


### Research that relates to Health Problems

**Findings from card sort**


## Questions to answer

**UX:** 


**Business/ Engineering:** 

    

**Who do we need to get feedback from?**


## Lessons learned


## Backlog of potential features/ Ideas Parking Lot


## Additional notes
