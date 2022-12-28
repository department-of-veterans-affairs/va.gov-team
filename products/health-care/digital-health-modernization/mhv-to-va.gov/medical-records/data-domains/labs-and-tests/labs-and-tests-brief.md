# Labs/ Tests: Data fields and UX considerations

Last updated: December 20, 2022

## Purpose
To serve as a source of truth around data field requirements and specifications, UX considerations, and to document a plan for feedback from SMEs or coordination with other teams (e.g., Mobile). 

## Description of domain
Labs and Tests represent health information that may be categorized as lab work results, blood chemistry/hematology results, radiology reports, pathology reports, electrocardiogram (EKG) reports, and self-reported test results, such as blood sugar. 

## Relevant links
[Decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/decision-log.md)

## Use cases and user flows
- [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1670275244338/a7ecd52750cd539d1fceea40b1879336b8a339d2?invited=true&sender=u7de68ed54bc434b67b630908)
- [Use cases in GitHub](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/labs-and-tests/uses-cases.md)

[Medical Records Comparative Analysis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1659473055858/08b0e54ba40761f0893fc1c13454882a645e47ff?wid=0-1663621688531&sender=u7de68ed54bc434b67b630908)

[Medical Records Discovery Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1661955319813/0edab3b186f83ecf243781fd24de5fc683a52266?sender=u7de68ed54bc434b67b630908)

[Medical Records Generative Research Findings Readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-10_Generative-research/2022-11-medical-records-readout.md)

## Labs and Tests categories and data fields
(Refer to [Medical Records Domains, Fields, Capabilities](https://docs.google.com/spreadsheets/d/13KE1WhN9c_uG_m-RDEeL3xT0Q50txcBJ_IMt8BxU5II/edit#gid=1602824280) for more detail on data fields.) 

### Labs and Tests categories | data sources
- VA Labaratory Results | Includes Chemistry, Hematology, Microbiology | Data source: Blue Button Report source
- VA Pathology Reports | Includes Surgical Pathology, Cytology, Electron Microscopy | Data source: Blue Button 
- VA Radiology Reports | Blue Button
- VA Electrocardiogram History | Blue Button




VA Laboratory Results: Chemistry/Hematology/Microbiology
VA Pathology Reports: Surgical Pathology/Cytology/Electron Microscop

### Result Types and Corresponding Fields:
- VA Chemistry/Hematology
  - Date/Time collected
  - Specimen
  - Location

- VA Laboratory Results
    - LabTest
    - LabType
    - Specimen
    - Date/TimeCollected
    - OrderingProvider
    - OrderingLocation
    - CollectedLocation
    // Below fields may be repeated depending on the various values the test measures
    - TestName (examples: 
    - Result
    - Units
    - Status
    - PerformingLocation
    - Interpretation
    - Comments
    - PerformingLocationName/Address

- VA Pathology Reports


- VA Medical Images and Reports (includes radiography (x-ray), digital radiography, MRI, CT.  There is an option to download a report, and some tests will have the option to download an image.
    - 

-  VA Electrocardiogram (EKG) History - Note these are no longer updated, but historic records are available.
    - Procedure/Test Name
    - Date/Time Exam Performed
    - Ordering Location



## Use Cases


**Common Use Cases**


**Edge Cases**



## UX considerations

### When to show Labs/ Tests section
Labs and tests should be visible to any user who has logged in and has VA health records.

**Where do Labs/ Tests fit within IA?**
TBD


### How to show Labs/ Tests section
- The landing page for Labs and Tests should list  


**View vs. share vs. download considerations:**
- When download is offered, we must provide the option to download an accessible document along with PDF
- View means the user can open and view a document on their screen once it has been generated
- The size of some health records are prohibitive to displaying them quickly on-screen


### Accessibility considerations:

- Need to create Accessibility brief/ document -> link here

_Accessibility considerations specific to Labs/ Tests:_


### Research that relates to Labs/ Tests



## Questions to answer

**UX:** 
- Do users expect to find blood sugar, cholesteral (lipid panel) and blood clotting times in their vitals or in their labs and tests?
- Do users expect to find imaging (X-rays, MRI, CT scan) in labs and tests?


**Business/ Engineering:** 
- Is there a business or technical reason we cannot show blood sugar, cholesteral (lipid panel) and blood clotting times with Labs and Tests instead of with Vitals?
- Is there a business or technical reason why Labs and Tests cannot include Microbiology, Electrocardiogram, Pathology Reports
    

**Who do we need to get feedback from?**
 - Business - Patty Henry
 - Technical - TBD


## Lessons learned


## Backlog of potential features/ Ideas Parking Lot
- Connect lab results with a specific visit or encounter
- Connect pathology results with a specific procedure
- Generate files that are compatible with common PHR systems so that they can be uploaded to another provider's system

## Additional notes
