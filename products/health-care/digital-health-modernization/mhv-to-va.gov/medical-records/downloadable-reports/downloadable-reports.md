# Downloadable Reports: Data fields and UX considerations

Last updated: February 2, 2023

## Purpose
To serve as a source of truth around data field requirements and specifications, UX considerations, and to document a plan for feedback from SMEs or coordination with other teams. This brief describes a page from which users can download a Blue Button report (name subject to change) or a VA Health Summary report.

## Description of pages
This document describes pages in the new health portal on VA.gov that will give users the ability to generate and download two different types of health record reports -- a *VA Health Summary* -- a summarized health record report that follows a pre-defined format, and what is currently referred to as a *VA Blue Button Report*, a more detailed and extensive medical report that can be customized to include or exclude certain pieces of health information.

### 1. Downloadable Reports Landing Page
This page provides the ability for the user to select which report they wish to generate.   It also provides a brief overview of each.  In the current MHV site, the description of the Blue Button Report on the landing page fails to point out that the report is highly customizable.  It is not until the user accesses the report generation page that they see the options.  

#### How this page and navigation differs from the MyHealth*e*Vet Download My Data landing page
MyHealtheVet provides four primary links in the left navigation:
- VA Blue Button Report
- VA Health Summary
- VA Medical Images and Reports 
- Electronic Record Sharing Options

The information archicture strategy for downloadable reports at the time of this writing is to make VA Medical Images and Reports a subset of Labs and Tests rather than a subset of downloadable reports (referred to as Download My Data on MyHealth*e*Vet).  This approach is supported by card sorting exercises and user interviews where users indicated that they expected to find imaging results and reports with their lab and test results.

Electronic Record Sharing Options is a way to opt in or out of sharing one's electronic health record through the Veterans Health Information Exchange.   At the time of this writing, the information architecture strategy is to integrate this preference into the VA.gov Profile preferences, similar to Secure Messaging preferences, so that we can work toward encapsulating all user preferences in one place on VA.gov.

In summary, a downloadable reports landing page need only provide links to VA Blue Button Report and VA Health Summary report pages.

### 2. Blue Button Report generation page
This page provides the user with options to control the information that is included in their generated report.  Below details the selections and sub-selections presented, along with the form controls used on MyHealth*e*Vet.

#### `H1` Download My Selected Data

- `[info icon]` `[linked text]` VA Blue Button User Guide `link href: https://www.myhealth.va.gov/mhv-portal-web/documents/314545/444506/BlueButtonUserGuide-OzNR1OlR.pdf`
- `[info icon]` `[linked text]` Learn More `link href: (https://www.myhealth.va.gov/mhv-portal-web/learn-more-bb)`
- `[info icon]` `[linked text]` Protecting Your Personal Health Information `link href: https://www.myhealth.va.gov/mhv-portal-web/protecting-your-personal-health-information`

#### 2.0. `[Step 1 indicator]` `[heading]` Select Date Range | [screen shot from MHV](https://user-images.githubusercontent.com/69174644/216336735-fa4d9156-d123-46ec-84e3-1b627aa2eb42.png)

- 2.0.0 `[heading]` Date Range
  - `[radio]` 3 Months *Note - Selecting this option currently changes the Start and End dates (2.0.1 and 2.0.2) to reflect 3 months from current date.*
  - `[radio]` 6 Months *Note - Selecting this option currently changes the Start and End dates (2.0.1 and 2.0.2) to reflect 6 months from current date.*
  - `[radio]` 1 Year *Note - Selecting this option currently changes the Start and End dates (2.0.1 and 2.0.2) to reflect 3 months from current date.*
  - `[radio]` Custom *Note - Selecting this option means that the user needs to then manually select start and end dates (2.0.1 and 2.0.2), but there are no instructions to indicate this, such as "(Select desired start and end dates below)".*
- 2.0.1 `[date picker]` Start Date
- 2.0.2 `[date picker]` End Date

#### 2.1.`[Step 2 indicator]` `[heading]` Select Types of Information 
`[text]` Information that you have entered into My HealtheVet is labeled as 'Self-Reported'. Information from the VA Electronic Health Record is labeled as 'VA'.
- 2.1.0. `[radio]` Select types of information to include
- 2.1.1. `[radio]` All types of information *Note: if All Types of Information is selected, all of the below selections and sub-selections will display a checkmark in its relevant checkbox, and the user need not make any further selections before clicking Submit at the bottom of the page.*

##### 2.1.00. `[heading]` Appointments

- 2.1.00.0. `[checkbox`  Future VA Appointments (may include Telephone, Video, In-Person Appointments) *Note: This parenthetical links to a [help page](https://www.myhealth.va.gov/mhv-portal-web/telephone-video-in-person-appointments-help) on MHV*
- 2.1.00.1. Past VA Appointments (limited to past 2 years)
- 2.1.00.2. All of the Above
-
##### 2.1.01. `[heading]` Medications (Automatically includes Allergy information)

- 2.1.01.0. VA Medication History
- 2.1.01.1. Medication and Supplements, Self-Reported  *Note: Self-reported data will not be included in the MVP*
- 2.1.01.2. All of the Above

##### 2.1.02. `[heading]` Labs and Tests

- 2.1.02.0 VA Laboratory Results
- 2.1.02.1 VA Pathology Reports
- 2.1.02.2 VA Electrocardiogram (EKG) Historical Exam Dates (EKG dates are no longer updated. You may continue to view your historical EKG dates)
- 2.1.02.3

##### 2.1.03 `[heading]` VA Electronic Health Record History and Wellness Reminders

##### 2.1.04 `[heading]` Allergies

##### 2.1.05 `[heading]` Immunizations

##### 2.1.06 `[heading]` Vitals and Readings

##### 2.1.07 `[heading]` Self-Reported Health History *Note: Self-reported data will not be included in the MVP*

##### 2.1.08 `[heading]` Food and Activity Journals *Note: Self-reported data will not be included in the MVP*

##### 2.1.09 `[heading]` Goals

##### 2.1.10 `[heading]` Demographics and Health Insurance

##### 2.1.11 `[heading]` Department of Defense Information

### Form Controls
- `[button]` Submit
- `[button]` Reset
- `[button]` Cancel



### 1. VA My Health Summary generation page
This page provides the ability for the user to generate a My VA Health Summary Report consisting of pre-determined data.






## Relevant links
[Downloadable Reports decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/downloadable-reports/decision-log.md)

[Overall Initiative decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/decision-log.md)

[Use cases and user flows](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1670275244338/a7ecd52750cd539d1fceea40b1879336b8a339d2?invited=true&sender=u7de68ed54bc434b67b630908)

[Medical Records Competitive Analysis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1659473055858/08b0e54ba40761f0893fc1c13454882a645e47ff?wid=0-1663621688531&sender=u7de68ed54bc434b67b630908)

[Medical Records Discovery Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1661955319813/0edab3b186f83ecf243781fd24de5fc683a52266?sender=u7de68ed54bc434b67b630908)

[Medical Records Generative Research Findings Readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-10_Generative-research/2022-11-medical-records-readout.md)

[Meaningful use standards documents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/meaningful-use-standards) - provided by Patty Henry between 1/12/2023 - 1/17/2023.  These standards originated during the Obama administration. MyHealtheVet used to get measured against these standards, and while they no longer do, these standards are still considered best practice and pertain to viewing, downloading, and transmitting.



## Use Cases

Things to think about that inform use cases: 
- Vital sign data are produced regularly - it is important to show data points over time in the MVP version
- Veterans and Caregivers might think to conceptualize some vital signs as a lab/test rather than a vital sign

**Common Use Cases**

What do people want to use their downloadable reports for? 
- To view current and/or past vital signs - either to monitor current status or compare vital signs across time points
- To share past vital signs with HCPs to ensure HCP understands their health 

**Edge Cases**

Any edge cases for downloadable reports?

## UX considerations

### When to show the downloadable reports section


**Where do downloadable reports fit within IA?**



### How to show downloadable reports section
- What should the screen look like? What information should be seen? What should be hidden? 



**View vs. download considerations:**


### Accessibility considerations:

[MyHealtheVet Section 508 Audit Report, August 2022]

[MyHealth*e*Vet (MHV) Heuristic Accessibility Evaluation, November 2022](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/shared-support/accessibility/audits/2022-11-MHV/MHV-Heuristic-A11y-Audit_Evaluation-Summary.md)

### Research that relates to downloadable reports

**Findings from card sort**

_Cards included:_ 
  - Labs/ test cards: Antibody test, Blood sugar tests, Blood test, COVID-19 test result, Lab/ test results, Pathology results
  - Imaging cards: Dental x-rays, MRI results, Radiology results and images, Ultrasound results

_Findings:_
- Labs/ test category was the most common category, and roughly 52% of all cards were grouped in that category across the 13 participants
- Imaging cards were combined with labs/ test cards approximately 48% of the time (25 out of 52). 

<img width="582" alt="image" src="https://user-images.githubusercontent.com/100814257/209881121-cf7dca80-8ea5-43fb-9398-c318764c6d21.png">

**Findings from comparative analysis**
[Comparative analysis of popular patient portals](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1659473055858/08b0e54ba40761f0893fc1c13454882a645e47ff?sender=u71ad98f94f5263595f9a4390) including Cerner's patient portal, Kaiser Permanente, BlueCross BlueShield, MyHealth powered by Epic, One Medical, Aetna OneRecord, and Apple Health revealed that medical imaging and imaging reports are typically included in lab/test results.

## Questions to answer

**UX:** 
- Should a submit button be presented higher on the page so that the user doesn't have to scroll past all the selected options after select "All Types of Information"?
- How closely do uses associate the more comprehensive health report with the Blue Button name/brand? Is there a more descriptive name?
- Are uses able to easily discern any differences between a My VA Summary report vs. a VA Blue Button report?
- What information can we provide up front to help users quickly identify the type of report best fits their needs?  Examples - a comparison matrix showing which option can be customized, which has the option to download XML, which contains DoD information, etc.

**Business/ Engineering:** 
- What options are available for customizing the layout of each of these reports?
    

**Who do we need to get feedback from?**


## Lessons learned


## Backlog of potential features/ Ideas Parking Lot
- A comparison matrix showing which report can be customized, which has the option to download XML, which contains DoD info, etc.
- Self-paced webinar showing how to customize/download/view reports

## Additional notes

