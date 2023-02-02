# Department of Defense (DoD) Info: Data fields and UX considerations

Last updated: January 31, 2023

## Purpose

To serve as a source of truth around data field requirements and specifications, UX considerations, and to document a plan for feedback from SMEs or coordination with other teams. 

## Description of domain

- Data Source: DEERS

- The three test accounts we have access to do not have DoD information in their data so that we can see an example of the data, even when searching 1895 to present.  We will work to obtain this data through a different source.

- Bobby Bailey dropped this list of DoD sections and fields from Lichelle Bain:

-From 
@Lichelle Bain

DOD has 9 sections with several fields in each section.  The 9 sections are bolded:

**Regular Active Service**
- Service
- Begin Date
- End Date
- Character of Service
- Rank

**Reserve/Guard Association Periods**
- Service
- Begin Date
- End Date
- Character of Service
- Rank


**Reserve/Guard Activation Periods**
- Service
- Begin Date
- End Date
- Activated Under (Title 10, 32, etc.)

**Deployment Periods**
- Service
- Begin Date
- End Date
- Conflict
- Location

**DoD MOS/Occupation Codes**
- Service
- Begin Date
- Enl/Off
- Type
- Service Occupation Code
- DoD Occupation Code

**Military/Combat Pay Details**
- Service
- Begin Date
- End Date
- Military Pay Type
- Location

**Separation Pay Details**
- Service
- Begin Date
- End Date
- Separation Pay Type

**Retirement Periods**
- Service
- Begin Date
- End Date
- Retirement Type
- Rank

**DoD Retirement Pay**
- Service
- Begin Date
- End Date
- Disability Percent
- Pay Stat
- Termination Reason
- Stop Pay Reason

## Relevant links

[DoD Info Decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/dod-info/dod-decision-log.md)

[Decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/decision-log.md)

[Use cases and user flows](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1670275244338/a7ecd52750cd539d1fceea40b1879336b8a339d2?invited=true&sender=u7de68ed54bc434b67b630908)

[Medical Records Competitive Analysis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1659473055858/08b0e54ba40761f0893fc1c13454882a645e47ff?wid=0-1663621688531&sender=u7de68ed54bc434b67b630908)

[Medical Records Discovery Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1661955319813/0edab3b186f83ecf243781fd24de5fc683a52266?sender=u7de68ed54bc434b67b630908)

[Medical Records Generative Research Findings Readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-10_Generative-research/2022-11-medical-records-readout.md)

[Meaningful use standards documents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/meaningful-use-standards) - provided by Patty Henry between 1/12/2023 - 1/17/2023.  These standards originated during the Obama administration. MyHealtheVet used to get measured against these standards, and while they no longer do, these standards are still considered best practice and pertain to viewing, downloading, and transmitting.


## DoD data fields
(Refer to [Medical Records Domains, Fields, Capabilities](https://docs.google.com/spreadsheets/d/13KE1WhN9c_uG_m-RDEeL3xT0Q50txcBJ_IMt8BxU5II/edit#gid=1602824280) for more detail on data fields.) 

**Data field title:** Department of Defence Information

**Data fields to include:**
- Last Updated
- Service Date
- Deployment Period
- Military Occupation
- Specialty/Occupation Code
- Pay Details
- Retirement Period

## Use Cases

Things to think about that inform use cases: 


**Common Use Cases**
- Veterans may refer to their DoD history to see if they qualify for a particular benefit based on the service dates.



**Edge Cases**
- Veterans may refer to their DoD history to see if they qualify for a particular benefit based on where they were stationed.

## UX considerations

### When to show DoD Info section


**Where does DoD Info fit within IA?**



### How to show DoD Info section
- What should the screen look like? What information should be seen? What should be hidden? 



**View vs. share vs. download considerations:**


### Accessibility considerations:

_Accessibility considerations specific to DoD Info:_
- None identified so far

### Research that relates to DoD Info

**Findings from card sort**


## Questions to answer

**UX:** 


**Business/ Engineering:** 
- Q: Is it possible to see a test account that has DoD information fully populated in a Blue Button report?
    

**Who do we need to get feedback from?**


## Lessons learned


## Backlog of potential features/ Ideas Parking Lot


## Additional notes


