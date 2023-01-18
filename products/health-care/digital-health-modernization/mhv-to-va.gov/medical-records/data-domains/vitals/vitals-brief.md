# Vitals: Data fields and UX considerations

Last updated: December 29, 2022

## Purpose

To serve as a source of truth around data field requirements and specifications, UX considerations, and to document a plan for feedback from SMEs or coordination with other teams. 

## Description of domain

Vital signs typically represent measurement of the body's main functions and are useful for detecting medical problems. The most common vital signs include: body temperature, heart/pulse rate, respiration rate, blood oxygen rates, and blood pressure. Sometimes additional data that are collected regularly, such as height, weight, and cholesterol, can be reported as "vitals". 

Vital signs are collected at every medical encounter and some vital signs can be collected and reported as patient-generated data. Vitals are reported more often than data in other domains. 

## Relevant links

[Decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/decision-log.md)

[Use cases and user flows](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1670275244338/a7ecd52750cd539d1fceea40b1879336b8a339d2?invited=true&sender=u7de68ed54bc434b67b630908)

[Medical Records Competitive Analysis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1659473055858/08b0e54ba40761f0893fc1c13454882a645e47ff?wid=0-1663621688531&sender=u7de68ed54bc434b67b630908)

[Medical Records Discovery Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1661955319813/0edab3b186f83ecf243781fd24de5fc683a52266?sender=u7de68ed54bc434b67b630908)

[Medical Records Generative Research Findings Readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-10_Generative-research/2022-11-medical-records-readout.md)

## Vitals data fields
(Refer to [Medical Records Domains, Fields, Capabilities](https://docs.google.com/spreadsheets/d/13KE1WhN9c_uG_m-RDEeL3xT0Q50txcBJ_IMt8BxU5II/edit#gid=1602824280) for more detail on data fields.) 

**Data field title:** Vitals

**Data fields to include:**
- Vital sign
- Measurement
- Comments
- Location
- Date/Time collected


## Use Cases

Things to think about that inform use cases: 
- Vital sign data are produced regularly - there is an opportunity to show data points over time in a post-MVP version
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


