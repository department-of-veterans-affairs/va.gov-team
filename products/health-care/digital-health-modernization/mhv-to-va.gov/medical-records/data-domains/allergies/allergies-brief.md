# Allergies: Domain brief
Last updated: Feb 6, 2023 | [Change Log](#change-log)

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

Allergies reflects allergies that relate to medications. Should be linked with the medications section of Health Portal. 

## Use Cases

**Common Use Cases**
- A Veteran who prefers keeping a digital copy of his health information wants to download it as a PDF to save on a personal hard drive.
- A Veteran who is planning to visit a non-VA facility wants to email her health information to the new provider so the provider is informed about all of her current allergies.
- A Veteran wants to inform a provider of their allergies when prescribed new medicines or when deciding to take new OTC medications.

**Edge Cases**
- A Veteran who is afraid her online data may someday disappear wants to print out a copy of her allergies to have on hand for future reference.
- A Veteran concerned with needing emergency medical care in the future wants to keep a printed copy so that his spouse can provide it to emergency medical personnel in the event he is unconcious.
- A Veteran who is seeing a new provider wants to download his health information as an XML file so that he can give it to the new provider on a thumb drive to be imported into their health care system.

## Requirements

### Title
Allergies

### Information architecture
Home > My Health > Health history > Allergies
Can also be found on pages within Medications portion of MHV, though details are still TBD.

### List view
- A user should be able to see a list of all of their allergies, ordered chronologically by date entered.
- A user should be able to click into each entry to learn more details.
- A user should be able to print or download (PDF or TXT) of the complete allergies list. 
- Each entry should include:
  - Allergy name
  - Date entered
  - Severity

**Details view**
  - The H1 of the details view should be title of the allergy
  - From the top of the page, a user should be able to print or download the details so that they can share and communicate their health issues with their health care team
  - Each allergy details page should include:
    - Allergy name
    - Date entered
    - Severity
    - Allergy type
    - VA drug class
    - Reaction
    - Observed/Historical
    - Location
    - Comments

### Not for first iteration, requires future usability research
- A user should be able to sort the list alphabetically by allergen/reactant name, severity, and chronologically based on initially entered date.

### Sketch file
https://www.sketch.com/s/0803544d-e78c-423a-a70e-7db01a9a31c7/v/yWydAK/p/1DD06026-FFB2-4128-BC7E-DCE50520DAD4/canvas?posX=-2658.13063544824&posY=-1090.4249590613172&zoom=0.21489810943603516

## Research to date

**Findings from card sort**
- An "About me/ Personal information" category was often created by participants, though the contents of this category differed. Some included demographic information, ongoing monitoring information like vitals, allergies and immunizations, and a "shapshot" of current health, issues, and treatments. Others contained only some of this information. This category varied the most across interviews and explanations often seemed contradictory and incoherent, however, this category still existed in the majority (n=10) of interviews.


## Relevant links

- [Decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/decision-log.md)
- [Use cases and user flows](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1670275244338/a7ecd52750cd539d1fceea40b1879336b8a339d2?invited=true&sender=u7de68ed54bc434b67b630908)
- [Medical Records Competitive Analysis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1659473055858/08b0e54ba40761f0893fc1c13454882a645e47ff?wid=0-1663621688531&sender=u7de68ed54bc434b67b630908)
- [Medical Records Discovery Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1661955319813/0edab3b186f83ecf243781fd24de5fc683a52266?sender=u7de68ed54bc434b67b630908)
- [Medical Records Generative Research Findings Readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-10_Generative-research/2022-11-medical-records-readout.md)
- [Meaningful use standards documents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/meaningful-use-standards) - provided by Patty Henry between 1/12/2023 - 1/17/2023.  These standards originated during the Obama administration. MyHealtheVet used to get measured against these standards, and while they no longer do, these standards are still considered best practice and pertain to viewing, downloading, and transmitting.

## Questions to answer
- Severity is a field that we believe is part of the VA Health Summary, but not Blue Button reports. We have included it as part of our designs. Can we actually access that field? Is it reliable? If the answer is no to either of those questions, remove that field from designs.


## Change Log

|  Date           | Changed By       | Description of Change                                                                                               |
| ----------------| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| 2023/02/06  |Coulton Bunney|Combined requirements and brief|
|                 |                  |                                                                                                                     |
|                 |                  |                                                                                                                     |

# Appendix

## Detailed analysis of data fields
(Refer to [Medical Records Domains, Fields, Capabilities](https://docs.google.com/spreadsheets/d/13KE1WhN9c_uG_m-RDEeL3xT0Q50txcBJ_IMt8BxU5II/edit#gid=1602824280) for more detail on data fields.) 

**Data field title:** Allergies

**Data fields to include:**
- Allergy name
- Date entered
- Allergy Type
- Location
- Reaction
- VA drug class
- Observed/Historical
- Comments
- Severity

<img width="880" alt="image" src="https://user-images.githubusercontent.com/100814257/214925357-569bcb22-a45e-459d-ab8e-152175b7c6ce.png">
