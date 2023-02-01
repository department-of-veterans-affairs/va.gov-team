# Downloadable Reports: Data fields and UX considerations

Last updated: February 1, 2023

## Purpose

To serve as a source of truth around data field requirements and specifications, UX considerations, and to document a plan for feedback from SMEs or coordination with other teams. This brief describes a page from which users can download a Blue Button report (name subject to change) or a VA Health Summary report.

## Description of page
This document describes a page in the new health portal on VA.gov that will give users the ability to generate and download two different types of health record reports -- a VA Health Summary -- a summarized and what is currently referred to as a Blue Button Report, a more detailed and extensive medical report.

## Relevant links
[Downloadable Reports decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/downloadable-reports/decision-log.md)

[Overall Initiative decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/decision-log.md)

[Use cases and user flows](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1670275244338/a7ecd52750cd539d1fceea40b1879336b8a339d2?invited=true&sender=u7de68ed54bc434b67b630908)

[Medical Records Competitive Analysis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1659473055858/08b0e54ba40761f0893fc1c13454882a645e47ff?wid=0-1663621688531&sender=u7de68ed54bc434b67b630908)

[Medical Records Discovery Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1661955319813/0edab3b186f83ecf243781fd24de5fc683a52266?sender=u7de68ed54bc434b67b630908)

[Medical Records Generative Research Findings Readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-10_Generative-research/2022-11-medical-records-readout.md)

[Meaningful use standards documents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/meaningful-use-standards) - provided by Patty Henry between 1/12/2023 - 1/17/2023.  These standards originated during the Obama administration. MyHealtheVet used to get measured against these standards, and while they no longer do, these standards are still considered best practice and pertain to viewing, downloading, and transmitting.


## Vitals data fields
(Refer to [Medical Records Domains, Fields, Capabilities](https://docs.google.com/spreadsheets/d/13KE1WhN9c_uG_m-RDEeL3xT0Q50txcBJ_IMt8BxU5II/edit#gid=1602824280) for more detail on data fields.) 

**Data field title:** Vitals

**Data fields to include:**
- Vital sign
- Measurement
- Comments
- Location
- Date/Time collected

<img width="961" alt="image" src="https://user-images.githubusercontent.com/100814257/215164242-35288075-c782-4d41-859c-0d28686eeca5.png">

## Use Cases

Things to think about that inform use cases: 
- Vital sign data are produced regularly - it is important to show data points over time in the MVP version
- Veterans and Caregivers might think to conceptualize some vital signs as a lab/test rather than a vital sign

**Common Use Cases**

What do people want to use their vital signs for? 
- To view current and/or past vital signs - either to monitor current status or compare vital signs across time points
- To share past vital signs with HCPs to ensure HCP understands their health 

**Edge Cases**

Any edge cases for Vitals? 

## UX considerations

### When to show Vitals section


**Where do Vitals fit within IA?**



### How to show Vitals section
- What should the screen look like? What information should be seen? What should be hidden? 



**View vs. share vs. download considerations:**


### Accessibility considerations:

_Accessibility considerations specific to Vitals:_
- None identified so far

### Research that relates to Vitals

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


## Questions to answer

**UX:** 
- What type of information do users look for in Vitals versus Labs/ tests? 
- Are there opportunities in a post-MVP to do creative data visualization strategies with vital signs? 
- Would "flags" be a good feature for vitals as well? (Similar to Labs/ tests)

**Business/ Engineering:** 

    

**Who do we need to get feedback from?**


## Lessons learned


## Backlog of potential features/ Ideas Parking Lot


## Additional notes

