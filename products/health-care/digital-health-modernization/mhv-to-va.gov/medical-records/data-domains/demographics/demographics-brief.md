# Demographics: Data fields and UX considerations

Last updated: February 14, 2023 | [Change Log](#change-log)

## Purpose

To serve as a source of truth around data field requirements and specifications, UX considerations, and to document a plan for feedback from SMEs or coordination with other teams. 

## Description of domain
This domain contains VA demographic information about the Veteran.  At the time of this writing (2/13/2023) it is unclear whether including this information within the confines of the new MyHealtheVet portal on VA.gov is needed, as it likely overlaps or duplicates data already available on VA.gov.   There are also self-entered demographics that will not be addressed in the MVP. 

## Relevant links

[Decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/decision-log.md)

[Use cases and user flows](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1670275244338/a7ecd52750cd539d1fceea40b1879336b8a339d2?invited=true&sender=u7de68ed54bc434b67b630908)

[Medical Records Competitive Analysis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1659473055858/08b0e54ba40761f0893fc1c13454882a645e47ff?wid=0-1663621688531&sender=u7de68ed54bc434b67b630908)

[Medical Records Discovery Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1661955319813/0edab3b186f83ecf243781fd24de5fc683a52266?sender=u7de68ed54bc434b67b630908)

[Medical Records Generative Research Findings Readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-10_Generative-research/2022-11-medical-records-readout.md)

[Meaningful use standards documents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/meaningful-use-standards) - provided by Patty Henry between 1/12/2023 - 1/17/2023.  These standards originated during the Obama administration. MyHealtheVet used to get measured against these standards, and while they no longer do, these standards are still considered best practice and pertain to viewing, downloading, and transmitting.


## Demographics data fields
(Refer to [Medical Records Domains, Fields, Capabilities](https://docs.google.com/spreadsheets/d/13KE1WhN9c_uG_m-RDEeL3xT0Q50txcBJ_IMt8BxU5II/edit#gid=1602824280) for more detail on data fields.) 
 
**Documentation information
- At the time of this writing (2/13/2023) we were advised in [a Slack thread](https://dsva.slack.com/archives/C03Q2UQL1AS/p1676051871330869?thread_ts=1676041981.081089&cid=C03Q2UQL1AS) that the original doumentation for Blue Button reports on MHV (where the demographics information was provided) was lost over the years, so we have no concrete information as to why certain data was included or any business rules or user interviews to support the decisions to include it.

**Data field title:** VA Demographics

**VA Demographic data fields:**
The start of the VA demographics section of the Blue Button report contains three fields:
- Source
- Last Updated
- Sorted By

These three fields are followed by the following disclaimer:

*Your information in My HealtheVet is not transferred to your VA Health Record. Also, VA Demographic information is not updated between VA treating facilities. If you have any questions or updates, please contact your VA health care team.*

Following the disclaimer is a set of fields that is repleated for each VA Treating Facility at which the Veteran has been treated, <br>| Screen shots: [pg1](https://user-images.githubusercontent.com/69174644/218781998-9519ba7c-2d79-4526-9b83-39a40dd3d40b.png) |[pg2](https://user-images.githubusercontent.com/69174644/218782236-1b218607-9a8d-4a25-a5f9-47c4d9b632d1.png) | [pg3](https://user-images.githubusercontent.com/69174644/218782282-346bc5f4-2cae-47d1-9ca7-a22ef68b3a5d.png) | [pg4](https://user-images.githubusercontent.com/69174644/218782581-533347bd-442f-4d0d-81d3-5581cc24552c.png) | [pg5](https://user-images.githubusercontent.com/69174644/218782697-d3f4de07-8664-4545-8a95-5761a9e18926.png) | [pg6](https://user-images.githubusercontent.com/69174644/218783215-0cc38f2f-7ac5-4d76-b9b3-693c0d7160b0.png)

- VA Treating Facility
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

- Permanent Address and Contact Information
  - Street Address
  - Street Address 2
  - City
  - State
  - County
  - Country
  - Home Phone Number
  - Work Phone Number
  - Cell Phone Number
  - Email Address

- Eligibility
 - Service Connected Percentage
 - Means Test Status
 - Primary Eligibility Code

- Employment
 - Occupation
 - Employment Status
 - Employer Name
 
- Primary Next-of-Kin
  - Name
  - Street Address
  - City
  - State
  - Zip Code
  - Home Phone Number
  - Work Phone Number
 
- Emergency Contact
  - Name
  - Street Address
  - City
  - State
  - Zip Code
  - Home Phone Number
  - Work Phone Number

- VA Guardian
  - Name
  - Street Address
  - City
  - State
  - Zip Code
  - Home Phone Number
  - Work Phone Number

- Civil Guardian
  - Name
  - Street Address
  - City
  - State
  - Zip Code
  - Home Phone Number
  - Work Phone Number

- Active Insurance
  - Insurance Company
  - Effective Date
  - Expiration Date
  - Group Name
  - Group Number
  - Subscriber ID
  - Subscriber Name
  - Subscriber Relationship
  - VA Treating Facility
  - First 
- Social History
- Functional status
- Advance Directive
<img width="957" alt="image" src="https://user-images.githubusercontent.com/100814257/214926426-4b0b37aa-a155-4713-8e71-62d33f3f75b6.png">
<img width="958" alt="image" src="https://user-images.githubusercontent.com/100814257/214926668-00bf8929-a337-48b2-8f2e-730c8bdad2a9.png">


**Additional breakdown of fields found in [this markdown file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/meetings/demographic-fields.md) created by Leila Rassi and Jasmine Yohannan.** See [this slack conversation](https://dsva.slack.com/archives/C03Q2UQL1AS/p1672850011320109) for more details. 


**VA Profile API notes** -> most likely fields marked TBD in VAProfile-demographics.xlsx (below) are NOT in VA Profile, but need to confirm. Original message from Stephen Barrs [here](https://dsva.slack.com/archives/C04GDQSHD1R/p1674826074389269?thread_ts=1673552090.497579&cid=C04GDQSHD1R). 

TBD fields include: 
- VA Treatment Facility
- First Name
- Middle Name
- Last Name
- Date of Birth
- Age
- Gender
- Language(s)
- Place of Birth
- Social History
- Functional Status
- Advance Directive
- Eligibility
- Employment
- VA Guardian
- Civil Guardian
- Active Insurance


See Excel sheet below. 

[VAProfile-demographics.xlsx](https://github.com/department-of-veterans-affairs/va.gov-team/files/10521706/VAProfile-demographics.xlsx)



## Use Cases

**Common Use Cases**
- TBD; research with users needed

**Edge Cases**
- TBD; research with users needed


## UX considerations

### When to show Demographics section
- TBD

**Where do Demographics fit within IA?**
- TBD


### How to show Demographics section
- What should the screen look like? What information should be seen? What should be hidden? 
  - TBD


**View vs. share vs. download considerations:**
- Carnetta Scruggs advised via email on 2/13/2023:
   "I think that the VA Demographic data should be printable and downloadable, so that, Veterans can take the print out with them to the VA. Then have them correct the out-dated information in their VA Health record at other VAMCs.  The demo data on VA.gov profile is electronically sync’d with all VAMCs that has their medical record and should be presented as “Current” or something.

### Research that relates to Demographics

**An "About me/ Personal information" category was often created by participants, though the contents of this category differed.** 

Some versions of this category included demographic information, ongoing monitoring information like vitals, allergies and immunizations, and a "shapshot" of current health, issues, and treatments. Others contained only some of this information. 

<img width="921" alt="image" src="https://user-images.githubusercontent.com/100814257/202789539-f350fbd1-1a4b-482c-81c5-6c23dc70877e.png">

The purpose of this category varied. Some participants framed the category as providing key information to doctors about a patient. 

   - _"[Personal information group is] anything about yourself - age, height, weight. Any information that a doctor needs to know before prescribing medication."_ Female Caregiver, age 39, no MHV account

Others wanted the most pressing or current information to be centrally located - in this way, this category simultaneously functioned similar to a "to do list". 

This category varied the most across interviews and explanations often seemed contradictory and incoherent; however, this category still existed in the majority (n=10) of interviews. It is possible that a different interview guide would have led to participants distinguish more consistently between demographic information, current health status, and most pressing issues. This will be explored in concept testing. 


## Questions to answer

**UX:** 


**Business/ Engineering:** 
Does it make sense to display demographic information on-screen within the confines of the new health portal on VA.gov, or is it preferrable to provide a link to that information if it already exists elsewhere on VA.gov? This is probably a good research question. 
    

**Who do we need to get feedback from?**
- End users (what uses cases exist for accessing this information within the health portal vs. elsewhere on VA.gov?
- VA personnel who have the ability to correct outdated information in a VA Health Record (specifically whether the incorrect information is needed in  the context of medical information in order to correct a record)

## Lessons learned


## Backlog of potential features/ Ideas Parking Lot


## Additional notes

## Change Log

|  Date           | Changed By       | Description of Change                                                                                               |
| ----------------| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
|2/13/2023        |Marci McGuire     |Added questions to answer, and information about challenges in getting test data and documentation.                                                                                                                     |
|2/14/2023        |Marci McGuire     |Added demographics fields based on Carnetta's PDF example emailed 2/13/2023                                                                                                                     |
|                 |                  |                                                                                                                     |

