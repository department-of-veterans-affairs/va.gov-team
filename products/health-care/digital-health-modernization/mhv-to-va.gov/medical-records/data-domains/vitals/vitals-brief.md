# Vitals: Domain brief 
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

Vital signs typically represent measurement of the body's main functions and are useful for detecting medical problems. The most common vital signs include: body temperature, heart/pulse rate, respiration rate, blood oxygen rates, and blood pressure. Sometimes additional data that are collected regularly, such as height, weight, and cholesterol, can be reported as "vitals". 

Vital signs are collected at every medical encounter and some vital signs can be collected and reported as patient-generated data. Vitals are reported more often than data in other domains. 

## Use Cases

Things to think about that inform use cases: 
- Vital sign data are produced regularly - it is important to show data points over time in the MVP version
- Veterans and Caregivers might think to conceptualize some vital signs as a lab/test rather than a vital sign

**Common Use Cases**

What do people want to use their vital signs for? 
- To view current and/or past vital signs - either to monitor current status or compare vital signs across time points
- To share past vital signs with HCPs to ensure HCP understands their health 

## Requirements

### Title
Vitals - this name proved confusing in the Jan 2023 IA tree testing. Therefore, this title may need to be updated. However, a new name has not been decided. 

### Information architecture
Home > My Health > Health history > Vitals

### Includes
  - Blood pressure
  - Blood sugar
  - Heart rate
  - Cholesterol
  - Body Weight
  - Height
  - Pulse Oximetry
  - Body Temperature
  - International Normalized Ratio (INR)
  - Pain

### List view

- A user should be able to see a list of vital sign categories, listed alphabetically. 
- A user should be able to click into each category to see a historical list of readings
- Each entry should include
  - Category name
  - Latest reading
  - Date of latest reading
  - Location of latest reading
  
### Details view
  - The H1 of the details view should be the category name 
  - From the details view, a user should be able to see a historical list of readings for that category (chronological order)
  - From the top of the page, a user should be able to print a category of readings, or download it as either a PDF or TXT file. 
  - Each entry in that list should include
    - Reading
    - Date of entry
    - Location of entry 
    - Comments

### Not for first iteration, requires future usability research
- The ability to view a graph of a particular category of vitals data over time (aka view trends)

### Sketch file
https://www.sketch.com/s/0803544d-e78c-423a-a70e-7db01a9a31c7/v/pWAK2A/p/078F7C93-6A8B-4937-9BD5-95F13F7E5965/canvas?posX=-1075.105674508015&posY=-1838.3009838665876&zoom=0.686612606048584

## Research to date
**Findings from card sort**

_Cards included:_ 
  - Labs/ test cards: Antibody test, Blood sugar tests, Blood test, COVID-19 test result, Lab/ test results, Pathology results
  - Imaging cards: Dental x-rays, MRI results, Radiology results and images, Ultrasound results
  - Vitals cards: Blood pressure, Height/weight, Vitals

_Findings:_
- Labs/ test category was the most common category, and roughly 52% of all cards were grouped in that category across the 13 participants
- Imaging cards were combined with labs/ test cards approximately 48% of the time (25 out of 52). 
- Vitals card were grouped under "About me/ Personal information" most often (25 out of 39, or 64% of the time), and were only grouped with Labs/ Tests 6 out of 39 times (15%). 

<img width="582" alt="image" src="https://user-images.githubusercontent.com/100814257/209881121-cf7dca80-8ea5-43fb-9398-c318764c6d21.png">

## Relevant links
- [Decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/decision-log.md)
- [Use cases and user flows](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1670275244338/a7ecd52750cd539d1fceea40b1879336b8a339d2?invited=true&sender=u7de68ed54bc434b67b630908)
- [Medical Records Competitive Analysis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1659473055858/08b0e54ba40761f0893fc1c13454882a645e47ff?wid=0-1663621688531&sender=u7de68ed54bc434b67b630908)
- [Medical Records Discovery Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1661955319813/0edab3b186f83ecf243781fd24de5fc683a52266?sender=u7de68ed54bc434b67b630908)
- [Medical Records Generative Research Findings Readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-10_Generative-research/2022-11-medical-records-readout.md)
- [Meaningful use standards documents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/meaningful-use-standards) - provided by Patty Henry between 1/12/2023 - 1/17/2023.  These standards originated during the Obama administration. MyHealtheVet used to get measured against these standards, and while they no longer do, these standards are still considered best practice and pertain to viewing, downloading, and transmitting.


## Questions to answer

**UX:** 
- What type of information do users look for in Vitals versus Labs/ tests? 
- Are there opportunities in a post-MVP to do creative data visualization strategies with vital signs? 
- Would "flags" be a good feature for vitals as well? (Similar to Labs/ tests)

**Business/ Engineering:** 

    

**Who do we need to get feedback from?**


## Change Log

|  Date           | Changed By       | Description of Change                                                                                               |
| ----------------| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
|                 |                  |                                                                                                                     |
|                 |                  |                                                                                                                     |
|                 |                  |                                                                                                                     |

# Appendix

## Detailed analysis of data fields
(Refer to [Medical Records Domains, Fields, Capabilities](https://docs.google.com/spreadsheets/d/13KE1WhN9c_uG_m-RDEeL3xT0Q50txcBJ_IMt8BxU5II/edit#gid=1602824280) for more detail on data fields.) 

**Data field title:** Vitals

**Data fields to include:**
- Vital sign
- Measurement
- Comments
- Location
- Date/Time collected

<img width="961" alt="image" src="https://user-images.githubusercontent.com/100814257/215164242-35288075-c782-4d41-859c-0d28686eeca5.png">
