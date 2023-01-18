# Labs/ Tests: Data fields and UX considerations

Last updated: December 29, 2022

## Purpose
To serve as a source of truth around data field requirements and specifications, UX considerations, and to document a plan for feedback from SMEs or coordination with other teams (e.g., Mobile). 

## Description of domain
Labs and Tests represent health information that may be categorized as lab work results, blood chemistry/hematology results, radiology reports, pathology reports, electrocardiogram (EKG) reports, and self-reported test results, such as blood sugar. 

## Relevant links
- [Medical Records decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/decision-log.md)
- [Overall project decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/decision-log.md)

## Use cases and user flows
- [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1670275244338/a7ecd52750cd539d1fceea40b1879336b8a339d2?invited=true&sender=u7de68ed54bc434b67b630908)
- [Use cases in GitHub](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/labs-and-tests/uses-cases.md)

[Medical Records Comparative Analysis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1659473055858/08b0e54ba40761f0893fc1c13454882a645e47ff?wid=0-1663621688531&sender=u7de68ed54bc434b67b630908)

[Medical Records Discovery Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1661955319813/0edab3b186f83ecf243781fd24de5fc683a52266?sender=u7de68ed54bc434b67b630908)

[Medical Records Generative Research Findings Readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-10_Generative-research/2022-11-medical-records-readout.md)


## Labs and Tests Data Hierarchy
1. Data Type<br>
  1.1 - 1.n Lab Type<br>
    1.1.1 - 1.1.n Lab Test

## Data Details
- [Example Blue Button report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/labs-and-tests/fully-populated-blue-button-report.pdf) that is fully populated (PDF).

(Refer to [Medical Records Domains, Fields, Capabilities](https://docs.google.com/spreadsheets/d/13KE1WhN9c_uG_m-RDEeL3xT0Q50txcBJ_IMt8BxU5II/edit#gid=1602824280) for more detail on data fields.) 

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
- **Interpretation**  *Note: these can be quite lengthy.  Typical example: DESIRABLE VALUE: <200 BORDERLINE VALUE: 201-239 ELEVATED VALUE: >240. Lengthy example: See page 19 of the [fully populated blue button example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/labs-and-tests/example-blue-button-report.pdf)*
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
- **Results** *Note that this field can be an entire report in and of itself. See page 40 of the [fully populated blue button example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/labs-and-tests/example-blue-button-report.pdf)*

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
- **Surgical Pathology Report** *Example: See pages 86-88 of the [fully populated blue button example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/labs-and-tests/example-blue-button-report.pdf)*

#### Lab Type: Cytology
##### Data Source(s): Blue Button
##### Fields:
- **Type of Report** *Example:Cytology*
- **Specimen** *Example:BRONCHIAL W DESCRIPTION: The specimen consists of 17 ml sanguinous fluid. Two slides and one cell block are prepared.*
- **Date Obtained** *Example:12 Sep 2012*
- **Performing Location** *Example:Portland OR VAMC PO BOX 1034 PORTLAND 97207*
- **Date Completed ***Example: 12 Sep 2012*
- **Cytology Report** *Examplesel: See pages 91 and 92 of the [fully populated blue button example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/labs-and-tests/example-blue-button-report.pdf)*

#### Lab Type: Electron Microscopy
##### Data Source(s): Blue Button
##### Fields
*UNABLE TO FIND A TEST ACCOUNT THAT CONTAINS THIS TYPE OF LAB*

<hr>

### Data Type: - VA Medical Images (for actual images) and Reports 
- *Note: images do not appear in Blue Button report, but can be requested for display in the web application if available. [Example screen shot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/labs-and-tests/example-mri-image.pdf).*  
- To see actual labs and test page on existing MHV site, log in with test user MHVVISN20 and go to https://www.myhealth.va.gov/mhv-portal-web/va-medical-images-and-reports
- Includes radiography (x-ray), digital radiography, MRI, CT.  
- There is an option to download a report, and some tests will have the option to download an image.  [Example image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/labs-and-tests/fully-populated-blue-button-report.pdf) as displayed on the page in the legacy MHV site.

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
- **Report** *Examples: See page 95/96 and 97/98 of the [fully populated blue button example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/labs-and-tests/example-blue-button-report.pdf) for short and long examples.*


### Data Type: VA Electrocardiogram (EKG) Reports
- Note: These are no longer being updated, but historical records are available
##### Data Source(s)
- Blue Button
##### Fields
- **Procedure/Test Name** *Example:*
- **Date/Time Exam Performed** *Example:*
- **Ordering Location** *Example:*





## UX considerations

### When to show Labs/Tests section
Labs and tests should be visible to any user who has logged in and has VA health records.

**Where do Labs/ Tests fit within IA?**
TBD


### How to show Labs/ Tests section
- The landing page for Labs and Tests should list each category (aka Data Type) of test the user has available, possible as a header, with each corresponding list of Lab Types listed under a heading or on its own distinct page.


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
- Is there a business or technical reason we cannot show blood sugar, cholesterol (lipid panel) and blood clotting times with Labs and Tests instead of with Vitals?
- Is there a business or technical reason why Labs and Tests cannot include Microbiology, Electrocardiogram, Pathology Reports?
    

**Who do we need to get feedback from?**
 - Business - Patty Henry
 - Technical - TBD
 - Main POCs: Michael Icardi (Pathologist) & Thomas Haugen (Chief, Pathology & Laboratory Medicine)
 - POC for How Labs Display in the Portal: Leanne Walls & Theresa (Terry) Webber
 - “Lab Enforcer” Group audits VA facilities including MHV. We don’t have a POC name, but will need to make sure that anything dealing with labs goes through this group
 - VHA Pathology and Lab Office regarding the display of any lab or pathology test data or wording and VA policies, Lab accreditation requirements. MHV POCs: We worked with a team put together by Lahl, Dennis dennis.lahl@va.gov; Vantu, Quynh Quynh.Vantu@va.gov and the Director, Wang-rodriguez, Jessica Jessica.Wang-Rodriguez@va.gov


## Lessons learned


## Backlog of potential features/ Ideas Parking Lot
- Connect lab results with a specific visit or encounter
- Connect pathology results with a specific procedure
- Generate files that are compatible with common PHR systems so that they can be uploaded to another provider's system

## Additional notes
