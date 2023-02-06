# Department of Defense (DoD): Domain brief

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
DOD has 9 sections with several fields in each section that summarize a Veteran's service.

## Use Cases

**Common Use Cases**
- Veterans may refer to their DoD history to see if they qualify for a particular benefit based on the service dates.

**Edge Cases**
- Veterans may refer to their DoD history to see if they qualify for a particular benefit based on where they were stationed.

## Requirements

### Title
Department of defense information

### Information architecture
Unsure at this moment in time

### List view 
- DoD information should be displayed on a single page, broken up into sections that follow the pattern below.
- Regular Active Service
  - Service
  - Begin Date
  - End Date
  - Character of Service
  - Rank
- Reserve/Guard Association Periods
  - Service
  - Begin Date
  - End Date
  - Character of Service
  - Rank
- Reserve/Guard Activation Periods
  - Service
  - Begin Date
  - End Date
  - Activated Under (Title 10, 32, etc.)
- Deployment Periods
  - Service
  - Begin Date
  - End Date
  - Conflict
  - Location
- DoD MOS/Occupation Codes
  - Service
  - Begin Date
  - Enl/Off
  - Type
  - Service Occupation Code
  - DoD Occupation Code
- Military/Combat Pay Details
  - Service
  - Begin Date
  - End Date
  - Military Pay Type
  - Location
- Separation Pay Details
  - Service
  - Begin Date
  - End Date
  - Separation Pay Type
- Retirement Periods
  - Service
  - Begin Date
  - End Date
  - Retirement Type
  - Rank
- DoD Retirement Pay
  - Service
  - Begin Date
  - End Date
  - Disability Percent
  - Pay Stat
  - Termination Reason
  - Stop Pay Reason

## Research to date
In our research, we did not touch on Dept of Defense records much at all.

## Questions to answer
- Does DoD information even belong in My Health? Or is it better suited to put in a place like VA profile
- Is it possible to see a test account that has DoD information fully populated in a Blue Button report?
- Who do we need to get feedback from?

## Relevant links

- [DoD Info Decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/dod-info/dod-decision-log.md)
- [Decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/decision-log.md)
- [Use cases and user flows](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1670275244338/a7ecd52750cd539d1fceea40b1879336b8a339d2?invited=true&sender=u7de68ed54bc434b67b630908)
- [Medical Records Competitive Analysis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1659473055858/08b0e54ba40761f0893fc1c13454882a645e47ff?wid=0-1663621688531&sender=u7de68ed54bc434b67b630908)
- [Medical Records Discovery Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1661955319813/0edab3b186f83ecf243781fd24de5fc683a52266?sender=u7de68ed54bc434b67b630908)
- [Medical Records Generative Research Findings Readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-10_Generative-research/2022-11-medical-records-readout.md)
- [Meaningful use standards documents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/meaningful-use-standards) - provided by Patty Henry between 1/12/2023 - 1/17/2023.  These standards originated during the Obama administration. MyHealtheVet used to get measured against these standards, and while they no longer do, these standards are still considered best practice and pertain to viewing, downloading, and transmitting.


## Change Log

|  Date           | Changed By       | Description of Change                                                                                               |
| ----------------| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
|                 |                  |                                                                                                                     |
|                 |                  |                                                                                                                     |
|                 |                  |                                                                                                                     |

# Appendix

## Detailed analysis of data fields
(Refer to [Medical Records Domains, Fields, Capabilities](https://docs.google.com/spreadsheets/d/13KE1WhN9c_uG_m-RDEeL3xT0Q50txcBJ_IMt8BxU5II/edit#gid=1602824280) for more detail on data fields.) 

Data Source: DEERS

The three test accounts we have access to do not have DoD information in their data so that we can see an example of the data, even when searching 1895 to present. The following information was provided by MHV POCs.

DOD has 9 sections with several fields in each section. The 9 sections are bolded:

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
