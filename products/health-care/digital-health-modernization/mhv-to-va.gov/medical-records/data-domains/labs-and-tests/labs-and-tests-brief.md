# Labs/ Tests: Data fields and UX considerations

Last updated: December 28, 2022

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
- [Example Blue Button report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/labs-and-tests/fully-populated-blue-button-report.pdf) that is fully populated (PDF).

(Refer to [Medical Records Domains, Fields, Capabilities](https://docs.google.com/spreadsheets/d/13KE1WhN9c_uG_m-RDEeL3xT0Q50txcBJ_IMt8BxU5II/edit#gid=1602824280) for more detail on data fields.) 


### Labs and Tests 
#### VA Labaratory Results | Includes Chemistry, Hematology, Microbiology | Data source: Blue Button Report source
##### Tests and Fields
- Chemistry/Hematology
  - Date/Time collected
  - Specimen **Note - this can be a body structure or a sample
  - Location
  - LabTest **Example: Respiratory Pathogens Panel w SARS-CoV-2
  - LabType **Example: Chemistry/Hematology
  - Specimen **Example: Nasal mucus (substance)**
  - Date/TimeCollected **Example: 03 Dec 2020 @ 1350**
  - OrderingProvider **Example: SEGURA, JENNIFER**
  - OrderingLocation. **Example: PORTLAND VA MEDICAL CENTER**
  - CollectedLocation **Example (may be different from Ordering Location): PORTLAND VA MEDICAL CENTER**
 **Note: Below fields through Performing Location may be repeated, depending on the various values the test measures**
    - TestName **Example: MYCOPLASMA PNEUMONIAE, PCR**
    - Result **Example: NOT DETECTED**
    - Flag **Example: TBD; this is to be added**
          - Example flags - high/low on different tests, specifically Chemistry/ Hematology tests (test panels/ blood work). No panels for Pathology, Microbiology, Radiology, so no flags. Flags represent a way of addressing accessibility issues - coloring or numbers are insufficient, ergo, flags. (Discussed 12/28/2022, input provided by Bobby Bailey.) 
    - Units **Example mg/dL**
    - Reference Range **Example: (1-240)**
    - Status **Example: Final**
    - Performing Location. **Example: PORTLAND VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964**
    - Interpretation  **Note these can be quite lengthyExample: DESIRABLE VALUE: <200 BORDERLINE VALUE: 201-239 ELEVATED VALUE: >240**
    - Comments **Example: MHV transition to VDIF Hold Period Validation**
    - PerformingLocationName/Address ** Note: There could be multiple performing locations for one panel.**

- Microbiology
  - Lab Test: 
  - Lab Type
  - Ordering Provider
  - Site/Specimine
  - Collection Sample
  - Date/Time Collected
  - Date/Time Completed
  - Ordering Location
  - Performing Location
  - Collected Location
  - Results **Note that this can be an entire report in and of itself.  See page 40 of the [fully populated blue button example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/labs-and-tests/example-blue-button-report.pdf)
##### Data Source(s)
- Blue Button
##### Fields
    
#### VA Pathology Reports
##### Examples
- Surgical Pathology
- Cytology
- Electron Microscopy
##### Data Source(s) 
- Blue Button
##### Fields
#### VA Radiology Reports
##### Examples
##### Data Source(s)
- Blue Button
- VA Medical Images and Reports
##### Fields
### VA Electrocardiogram History | Blue Button
##### Examples
##### Data Source(s)
##### Fields

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
    - CollectedLocation  **Below fields may be repeated depending on the various values the test measures**
    - TestName (examples: 
    - Result
    - Flag
    - Units
    - Status
    - PerformingLocation
    - Interpretation
    - Comments
    - PerformingLocationName/Address - there could be multiple performing locations for one panel.

- VA Pathology Reports


- VA Medical Images and Reports (includes radiography (x-ray), digital radiography, MRI, CT.  There is an option to download a report, and some tests will have the option to download an image.  [Example image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/labs-and-tests/fully-populated-blue-button-report.pdf) as displayed on the page in the legacy MHV site.
    - 

-  VA Electrocardiogram (EKG) History - Note these are no longer updated, but historic records are available.
    - Procedure/Test Name
    - Date/Time Exam Performed
    - Ordering Location

## UX considerations

### When to show Labs/ Tests section
Labs and tests should be visible to any user who has logged in and has VA health records.

**Where do Labs/ Tests fit within IA?**
TBD


### How to show Labs/ Tests section
- The landing page for Labs and Tests should list each category of test the user has available 


**View vs. share vs. download considerations:**
- When download is offered, we must provide the option to download an accessible document along with PDF
- View means the user can open and view a document on their screen once it has been generated
- The size of some health records are prohibitive to displaying them quickly on-screen


### Accessibility considerations:

- Need to create Accessibility brief/ document -> link here

_Accessibility considerations specific to Labs/ Tests:_
- Need to add "Flags" to Chemistry/ Hematology section. See notes above. 


### Research that relates to Labs/ Tests

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


**Participants had a range of interpretations for some medical terminology, like "pathology results", indicating misunderstanding of some health terms found in current medical records.** 

It is possible that the technical language in the labs/ tests section may be confusing for some Veterans and Caregivers. For example: 

_Pathology results:_ Responses were not consistent. Amongst those asked (n=11), most understood to be relating to fluids in the body, such as blood, that were drawn out to search for indicators of an illness, cancer, infection, etc. Two participants stated they did not know what pathology results were, while two others included things like x-rays or toxins like drugs or alcohol in their definitions. 

<img width="401" alt="image" src="https://user-images.githubusercontent.com/100814257/204381386-275ee103-5738-4bf7-bc74-175583fd03b8.png">


## Questions to answer

**UX:** 
Q: Do users expect to find blood sugar, cholesterol (lipid panel) and blood clotting times in their vitals or in their labs and tests?
- A: After additional research and finding test accounts that displayed the full gamut of tests, Blue Button reports already include blood sugar and cholesterol tests as part of labs and tests.

Q: Do users expect to find imaging (X-rays, MRI, CT scan) in labs and tests?
- A: After additional research and finding test accounts that displayed the full gamut of tests, Blue Button reports already include imaging as part of labs and tests.

Q: Is there a technical reason why the imaging studies are not listed in the labs and tests section on the existing site? Or is the technical limitation that the images are not included in the Blue Button report due to the size of the images?

Q: What is the expected timing for adding in self-entered test data?  

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
