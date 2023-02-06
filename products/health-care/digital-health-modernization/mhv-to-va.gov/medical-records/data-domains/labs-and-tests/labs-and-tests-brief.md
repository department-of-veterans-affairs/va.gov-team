# Lab and test results: Domain brief

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
Labs and Tests represent health information that may be categorized as lab work results, blood chemistry/hematology results, radiology reports, pathology reports, electrocardiogram (EKG) reports.

## Use cases
User is not logged in
 - User will need to log in with one of the accepted methods. Once logged in, they can select the naviation option for labs and tests, and will be presented with a landing page.

User is logged in
- When a a user is logged in and selects the naviation option for labs and tests, they will be presented with a landing page.
- User needs a lab or test result as evidence when applying for disability benefits
- User wants to view a recent blood test result
- User views recent blood test and sees that a value is far outside normal range, and they need to know what their next steps should be
- User wants to view an EKG report
- User wants to view an MRI and its intepretation from a past visit
- User wants to see the results of a urinalysis
- User needs to share all of their blood chemistry results with a specialist
- User wants to print a lab result to take to a non-VA surgeon
- User wants to save a local file containing all of their historic lab results
- User wants to email a lab result to a non-VA doctor

## Requirements
### Title
Lab and test results

### Includes 
- Laboratory results
  - Chemistry/Hematology
  - Microbiology 
- Pathology reports
  - Surgical
  - Cytology
  - Microscopy
- Radiology images and reports 
- Cardiology images and reports (know as Electrocardiogram (EKG) history)

### Information architecture
Home > My Health > Lab and test results

### List view
- At the top of the page, a user should be able to quickly learn about the availability of lab and test results. For more info, see https://mhv-syst.myhealth.va.gov/mhv-portal-web/blue-button-availability
- A user should be able to see a list of all of their lab and test results, ordered chronologically by date collected. 
- Each should include:
  - Category (e.g. Pathology, Microbiology, etc)
  - Title of the lab result or report (if available)
  - Date collected
  - Ordering provider
- A user should be able to click into each entry to get more details.
  
### Details view
- The H1 of the details view should be the lab or test type
- Where possible and clinically permissable, transform text to make a note easier to read
- From the top of the page, a user should be able to print a note, or download it as either a PDF or TXT file
- A user should be able to print or download a result/report as either a PDF or TXT file.
- When a lab results includes multiple tests, such as a CMP, the tests should be presented as accordions, with one test result per accordion.
- If a result does no include mutliple tests, the results should be laid out flat on the page.
- When there is reference range included, a user should be able to easily see when their lab result falls above or below the normal range.

**Data fields**
- Radiology reports
  - Procedure/test name
  - Date/time exam performed
  - Ordering location 
  - Requesting provider
  - Reason for study
  - Performing location 
  - Clinical history 
  - Radiologist 
  - Report
- Chemistry, Hematology
  - Lab type (chemistry/hematology)
  - Lab test (aka name, not always present)
  - Date/time collected
  - Tests
    - Test name
    - Results
    - Units
    - Reference range
    - Status
    - Performing location
    - Interpretation
  - Specimen
  - Ordering provider
  - Ordering location
  - Collected location
  - Comments
  - Perfomring Location
- Microbiology
  - Lab type
  - Lab test (aka name, not always present)
  - Date collected
  - Date completed (not always present)
  - Results
  - Site/specimen (not always present)
  - Ordering provider
  - Ordering location
  - Collected location
- Pathology reports (surgical pathology) 
  - Type of report (surgical pathology/cytology) 
  - Specimen 
  - Date obtained
  - Performing location
  - Date completed 
  - Report 
- EKG (historical exam dates) *BB no longer updates EKG, needs to figure out where we can find the full report
  - Procedure/test name 
  - Date/time performed
  - Ordering location

### Not for first iteration, requires future usability research
- A user should be able to sort their results in different ways
  - Chronologically
  - By location, chronologically
  - By ordering phyiscian, chronologically
  - By type, alphabetically
- A user should be able filter to find what they are looking for.
  - A user should be able to filter by result metadata, such as  title, location, ordering physician, or type
- Connect lab results with a specific visit or encounter
- Connect pathology results with a specific procedure

## Research to date

### Findings from card sort

_Cards included:_ 
  - Labs/ test cards: Antibody test, Blood sugar tests, Blood test, COVID-19 test result, Lab/ test results, Pathology results
  - Imaging cards: Dental x-rays, MRI results, Radiology results and images, Ultrasound results
  - Vitals cards: Blood pressure, Height/weight, Vitals

_Findings:_
- Labs/ test category was the most common category, and roughly 52% of all cards were grouped in that category across the 13 participants
- Imaging cards were combined with labs/ test cards approximately 48% of the time (25 out of 52). 
- Vitals card were grouped under "About me/ Personal information" most often (25 out of 39, or 64% of the time), and were only grouped with Labs/ Tests 6 out of 39 times (15%).  (click below for larger image)

<img width="50" alt="image" src="https://user-images.githubusercontent.com/100814257/209881121-cf7dca80-8ea5-43fb-9398-c318764c6d21.png" target="blank">


**Participants had a range of interpretations for some medical terminology, like "pathology results", indicating misunderstanding of some health terms found in current medical records.** 

It is possible that the technical language in the labs/ tests section may be confusing for some Veterans and Caregivers. For example: 

_Pathology results:_ Responses were not consistent. Amongst those asked (n=11), most understood to be relating to fluids in the body, such as blood, that were drawn out to search for indicators of an illness, cancer, infection, etc. Two participants stated they did not know what pathology results were, while two others included things like x-rays or toxins like drugs or alcohol in their definitions. 

<img width="401" alt="image" src="https://user-images.githubusercontent.com/100814257/204381386-275ee103-5738-4bf7-bc74-175583fd03b8.png">

### Desk research

Q: Do users expect to find blood sugar, cholesterol (lipid panel) and blood clotting times in their vitals or in lab and tests?
- A: After additional research and finding test accounts that displayed the full gamut of tests, Blue Button reports already include blood sugar and cholesterol tests as part of labs and tests.

Q: Do users expect to find imaging (X-rays, MRI, CT scan) in labs and tests?
- A: After additional research and finding test accounts that displayed the full gamut of tests, Blue Button reports already include imaging as part of labs and tests.


## Relevant links
- [Medical Records decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/decision-log.md)
- [MHV to VA.gov overall project decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/decision-log.md)
- [Meaningful use standards documents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/meaningful-use-standards) - provided by Patty Henry between 1/12/2023 - 1/17/2023.  These standards originated during the Obama administration. MyHealtheVet used to get measured against these standards, and while they no longer do, these standards are still considered best practice and pertain to viewing, downloading, and transmitting.
- [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1670275244338/a7ecd52750cd539d1fceea40b1879336b8a339d2?invited=true&sender=u7de68ed54bc434b67b630908)
- [Medical Records Comparative Analysis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1659473055858/08b0e54ba40761f0893fc1c13454882a645e47ff?wid=0-1663621688531&sender=u7de68ed54bc434b67b630908)
- [Medical Records Discovery Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1661955319813/0edab3b186f83ecf243781fd24de5fc683a52266?sender=u7de68ed54bc434b67b630908)
- [Medical Records Generative Research Findings Readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-10_Generative-research/2022-11-medical-records-readout.md)

## Questions to answer

- Is there a technical reason why the imaging studies are not listed in the labs and tests section on the existing site? Or is the technical limitation that the images are not included in the Blue Button report due to the size of the images?
- Should we show blood sugar, cholesterol (lipid panel) and blood clotting times with labs and test results instead of with vitals?
- Is there a business or technical reason that would not allow us to include microbiology, electrocardiogram, pathology reports in lab and test results?
- Who do we need to get feedback from on the clinical side before going live?

## Change Log

|  Date           | Changed By       | Description of Change                                                                                               |
| ----------------| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| 2023/02/03      | Marci McGuire    | Updated data sources for Cardiology reports and added screen shot of relevant email thread                          |
| 2023/02/06      |Coulton Bunney    |Combined requirements and brief                                                                                      |
|                 |                  |                                                                                                                     |
|                 |                  |                                                                                                                     |

# Appendix

## Detailed analysis of data fields

[Example Blue Button report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/labs-and-tests/fully-populated-blue-button-report.pdf) that is fully populated (PDF).

### Data Type: VA Laboratory Results
#### Lab Type: Chemistry/Hematology
##### Data Source(s): Blue Button Report data source
##### Fields:
- **Lab Test** *Example: Respiratory Pathogens Panel w SARS-CoV-2*
- **Lab Type** *Example: Chemistry/Hematology*
- **Specimen** *Note - this may refer to a body structure (e.g., nasopharyngeal structure) or a substance (e.g., serum)*
- **Date/Time Collected** *Example: 03 Dec 2020 @ 1350*
- **Ordering Provider** *Example: SEGURA, JENNIFER*
- **Ordering Location** *Example: PORTLAND VA MEDICAL CENTER*
- **Collected Location** *Example (may be different from Ordering Location): PORTLAND VA MEDICAL CENTER* <br>
**Note: Below fields through Performing Location may be repeated, depending on the various values the test measures** <br>
- **Test Name** *Example: MYCOPLASMA PNEUMONIAE, PCR*
- **Result** *Example: NOT DETECTED*
- **Flag** *Example: TBD; this is to be added*
      - Example flags - high/low on different tests, specifically Chemistry/ Hematology tests (test panels/ blood work). No panels for Pathology, Microbiology, Radiology, so no flags. Flags represent a way of addressing accessibility issues - coloring or numbers are insufficient, ergo, flags. (Discussed 12/28/2022, input provided by Bobby Bailey.) 
- **Units ***Unit of measure used in test.  Example mg/dL.  Can also be left empty.*
- **Reference** Range *Example: (1-240)*
- **Status** *Example: Final*
- **Performing Location** *Example: PORTLAND VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964*
- **Interpretation**  *Note: these can be quite lengthy.  Typical example: DESIRABLE VALUE: <200 BORDERLINE VALUE: 201-239 ELEVATED VALUE: >240. Lengthy example: See page 19 of the [fully populated blue button example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/labs-and-tests/fully-populated-blue-button-report.pdf)*
- **Comments** *Example: MHV transition to VDIF Hold Period Validation*
- **Performing Location Name/Address** ** Note: There could be multiple performing locations for one panel.**


#### Lab Type: Microbiology
##### Data Source(s):  Blue Button
##### Fields:
- **Lab Test** *In examples I saw, this was not populated for Microbiology tests*
- **Lab Type** *Example: Microbiology*
- **Ordering Provider** *Example: STOLBURG, STEVEN*
- **Site/Specimen** *May reference a structure; e.g., FOOT or a substance; e.g., BLOOD VENOUS*
- **Collection Sample** *Examples: URINE or SWAB*
- **Date/Time Collected** *Example: 08 Jul 2016 @ 1200*
- **Date/Time Completed** *Example: 08 Jul 2016 @ 1200 -or- Date not available*
- **Ordering Location** *Example: VA Roseburg Health Care System*  
- **Performing Location**  *Example: VA Roseburg Health Care System*  
- **Collected Location** *Example: VA Roseburg Health Care System*  
- **Results** *Note that this field can be an entire report in and of itself. See page 40 of the [fully populated blue button example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/labs-and-tests/fully-populated-blue-button-report.pdf)*

<br>

### Data Type: VA Pathology Reports: Surgical Pathology/Cytology/Electron Microscopy
#### Lab Type: Surgical Pathology
##### Data Source(s): Blue Button Report data source
##### Fields: 
- **Type of Report** *Example:Surgical Pathology*
- **Specimen** *Example: NOSE*
- **Date Obtained** *Example:12 Sep 2012*
- **Performing Location** *Example:Portland OR VAMC PO BOX 1034 PORTLAND 97207 *
- **Date Completed** *Example: 12 Sep 2012*
- **Surgical Pathology Report** *Example: See pages 86-88 of the [fully populated blue button example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/labs-and-tests/fully-populated-blue-button-report.pdf)*


#### Lab Type: Cytology
##### Data Source(s): Blue Button
##### Fields:
- **Type of Report** *Example: Cytology*
- **Specimen** *Example: BRONCHIAL W DESCRIPTION: The specimen consists of 17 ml sanguinous fluid. Two slides and one cell block are prepared.*
- **Date Obtained** *Example:12 Sep 2012*
- **Performing Location** *Example: Portland OR VAMC PO BOX 1034 PORTLAND 97207*
- **Date Completed** *Example: 12 Sep 2012*
- **Cytology Report** *Examples: See pages 91 and 92 of the [fully populated blue button example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/labs-and-tests/fully-populated-blue-button-report.pdf)*


#### Lab Type: Electron Microscopy
##### Data Source(s): Blue Button
##### Fields
*UNABLE TO FIND A TEST ACCOUNT THAT CONTAINS THIS TYPE OF LAB*

<hr>

### Data Type: - VA Medical Images (for actual images) and Reports 
- *Note: images do not appear in Blue Button report, but can be requested for display in the web application if available. [Example screen shot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/labs-and-tests/example-mri-image.pdf).*  
- To see actual labs and test page on existing MHV site, log in with test user MHVVISN20 and go to https://www.myhealth.va.gov/mhv-portal-web/va-medical-images-and-reports
- Includes radiography (x-ray), digital radiography, MRI, CT.  
- There is an option to download a report, and some tests will have the option to download an image.  [Example image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/labs-and-tests/example-mri-image.pdf) as displayed on the page in the legacy MHV site.

#### Lab Type: VA Radiology Reports (includes x-ray, MRI, CT mammogram, ultrasound)
##### Data Source(s): Blue Button
##### Fields
- **Procedure/Test Name** *Example: MRI BRAIN W/O CONTRAST*
- **Date/Time Exam Performed** *Example: 21 Nov 2016 @ 0851*
- **Ordering Location** *Example: Portland OR VAMC*
- **Requesting Provider** *Example: DOUGLAS,DAVID M*
- **Reason for Study** *Example: *
- **Performing Location** *Example: Portland OR VAMC PO BOX 1034, PORTLAND 97207*
- **Clinical History** *Example: *
- **Radiologist** *Example: DUNCAN,TIMOTHY D*
- **Report** *Examples: See page 95/96 and 97/98 of the [fully populated blue button example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/labs-and-tests/fully-populated-blue-button-report.pdf)*
 for short and long examples.*


### Data Type: Cardiology [VA Electrocardiogram (EKG) Reports]
*Note: Based on notice within the Blue Button report and documentation on MHV, these are no longer being updated, but historical records are available*

##### Data Source(s):

2/3/2023 Updated based on a Jan 2023 email thread

"Cardiology images such as EKGs and echocardiograms are going to be in VistA Imaging. I believe there is an API that I know allows for importing images into VistA Imaging, but may also allow for pulling images from VistA Imaging. Shane may know more about this particular API’s functionality.
 
"As for cardiology reports, these would be available via standard CPRS RPCs, for example “ORWP REPORTS TEXT” (https://vivian.worldvista.org/dox/Remote_Procedure_ORWRP_REPORT_TEXT.html)
 
"AVS pulls reports data via the aforementioned RPC."

##### Fields
- **Procedure/Test Name** *Example:*
- **Date/Time Exam Performed** *Example:*
- **Ordering Location** *Example:*

