# Requirements: Medical Records on VA.gov v1.0

## Change Log

| Date           | Changed By       | Description of Change |
|----------------| ---------------- | ----------------------|
| 1/2/24       | Marci Mcguire  |Created document as an update to [old requirements document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/8293da406b1fd0beedd23db81823012a2415831f/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/requirements/requirements-archive.md)    |
|1/2/24        | Coulton Bunney   | Set up structure |
|1/3/24        | Coulton Bunney   | Updated allergies and vaccines information |
|1/4/24 | Coulton Bunney | Added key research and data documents|
|1/9/24 | Coulton Bunney | Added conditions information, Added lab results information|
|1/11/24 | Coulton Bunney | Added download all medical reocrds, landing page, and medical records settings|
|2/23/24 | Kaitlin Fink | Added care summaries and notes|



## Table of Contents  

- [Overview](#overview)
- [Phase 0](#phase-0)

## Overview 

This document lays out the requirements for medical records on VA.gov. It is broken out by data domains and phases. We expect additional functionality to be iteratively added to the tool over time during the phased rollout. 

Medical records v1.0 consists of 6 data domains, as well as a way to download all records and opt into or out of sharing your health data to the Veterans Health Information Exchange. 
* Allergies and reactions
* Vaccines
* Health conditions
* Vitals
* Care summaries and notes
  * Progress notes
  * Discharge summaries
* Lab and test results
  * Lab results (Chem/Hem)
  * Pathology reports
  * Microbiology reports
  * Radiology reports
* Download all records (fka Blue Button)
* Medical records settings
 
**Key documents**
* [VistA -> PHR/MHV mapping document](https://dvagov.sharepoint.com/:x:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/data%20mapping/MHV%20Documentation/MHV_PHR_API_to_FHIR_mapping.xlsx?d=w076667839ced465ca2506582e76618fb&csf=1&web=1&e=DFvMpe)
* [PHR FHIR mapping IG](https://dvagov.sharepoint.com/:x:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/data%20mapping/MHV%20Documentation/MHV_PHR_API_to_FHIR_mapping.xlsx?d=w076667839ced465ca2506582e76618fb&csf=1&web=1&e=iL2Zld)

## Phase 0

### Medical records general

<details>
<summary>Landing page requirements</summary>

---
#### IA
URL: `/my-health/medical-records`  
Breadcrumb: No  
Back button: No

#### Content
Shipped product should reflect [Phase 0 content document](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/Content%20documents/Phase%200%20all%20domains%20except%20lab%20results,%20no%20blue%20button,%20no%20settings%20page.docx?d=wc94f788df7fc4279b0b49a7baa311219&csf=1&web=1&e=6Iwfdn&nav=eyJoIjoiMTc4NzA2MTAwOSJ9).

#### Functionality
* Provide a link to each of the subsections of medical records

---

</details>

<details>
<summary>Design decisions</summary>

| Decision | Reasoning |
|-----------------------------------------------------------------------------------------------|-----------------| 
| The product will have a left navigation bar |  The introduction of a second domain necessitates secondary navigation  |
| There will be three primary pages: A landing page, a list of entries, details about each entry |       |
| We will initially launch the product with only one domain, allergies. |     |
| The landing page will be at the URL …/my-health/medical-records/ | | 
| The landing page will list all available domains, give a short descriptive blurb about each, and provide a link to the list view for each | We had considered retiring this page post phase 0, but research showed that is is quite useful to help Veterans understand where to find their informaiton. It should not be removed.  |
| Any printed or downloaded page will include two patient identifiers - name and date of birth |    |
| For Phase 0, we will only make downloads available as PDF. Downloading a TXT version will be a fast follow once all domains are in Phase 0. | Given the web version is fully 508 compliant, it will be the view that we recommend for all users to primarily access, including those who would need a TXT download rather than a PDF download  |\
| A user will be presented information on the consequences of downloading on a public computer |Many users may download their information on a public computer, and therefore, they should understand the PHI implications of this action.|
| Health summary, aka CCD, will not be included in the first version of medical records on VA.gov | Research showed that there was a lot of confusion between Blue Button and the Health Summary. There is also signficant overlap between the two documetnation outputs - essentially, Health summary is just a Blue Button report limited to the past 180 days (this needs fact checked) put into the CCD format. To simplify, we received approval from Bresha Lipscomb on March 28, 2023 to not include the ability to download the CCD health summary on the first version of MR on VA.gov. Before health summary is incorporated into MHV, it should be clearly called a continuity of care document, and it should be clearly outlined how and when to use this document compared to downloading all records. This should be considered before moving to Phase 4.| 

</details>

* [Initial discovery sprint report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-09-informational-interviews/research-findings.md)
* [Generative research report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-10_Generative-research/2022-11-medical-records-readout.md)
* [Usability testing report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2023-05-usability-testing-round-1/research-findings.md)

### Allergies and reactions 
<details>
<summary>List view requirements</summary>

---
#### IA
URL: `/my-health/medical-records/allergies`  
Breadcrumb: No  
Back button: Yes, `< Back to medical records`

#### Content
Shipped product should reflect [Phase 0 content document](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/Content%20documents/Phase%200%20all%20domains%20except%20lab%20results,%20no%20blue%20button,%20no%20settings%20page.docx?d=wc94f788df7fc4279b0b49a7baa311219&csf=1&web=1&e=6Iwfdn&nav=eyJoIjoiMTc4NzA2MTAwOSJ9).

* H1 for this page should be `Allergies and reactions`
* Intro text at top of page that explains what you will find in this section of the medical record
* Intro text that informs a patient what to do if their information is incorrect
* Additional info that explains information about printing and downloading allergies information
* For each allergy in list, include the following information
  * Allergy or reaction name
  * Date entered into the record

#### Functionality
* List should be paginated, with 10 allergies per page
* For each allergy, a user should be able to click on the first line of the card (Allergy name) to view detailed information about that allergy
* Ability to download a full list of allergies as a PDF
   * PDF should include detailed information about each allergy
* Ability to print all allergies
   * Print out should include detailed information about each allergy
---
</details>

<details>
<summary>Details view requirements</summary>
 
---
 
#### IA
URL: `/my-health/medical-records/allergies/allergy_id`  
Breadcrumb: No  
Back button: Yes, `< Back to allergies`

#### Content
Shipped product should reflect [Phase 0 content document](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/Content%20documents/Phase%200%20all%20domains%20except%20lab%20results,%20no%20blue%20button,%20no%20settings%20page.docx?d=wc94f788df7fc4279b0b49a7baa311219&csf=1&web=1&e=1WrhZc&nav=eyJoIjoiMjY5MDA1OTg2In0%3D).

* H1 for this page should be name of the allergy or reaction
* For each allergy, include the following information
  * Allergy or reaction name
  * Date entered into the record
  * Signs and symptoms (previously called Reaction)
  * Type of allergy
  * Location that the allergy was entered into the record
  * Whether the allergy is observed or historical
  * Notes entered by the provider

#### Functionality
* Ability to download details of current allergy as a PDF
* Ability to print the currently in view details of allergy
 
 ---
</details>

<details>
<summary>Design decisions</summary>

| Decision | Reasoning |
|-----------------------------------------------------------------------------------------------|-----------------| 
| The Allergies domain name was updated to Allergies and reactions. | This was a recommendation based on SME feedback. Allergies and reactions captures the full breadth of the data entered into this section of information. Reactions refers to information such as an adverse drug reaction. |
| The list view will present each allergy in a card format. That card will include both the allergy logged and the date it was entered into the EHR by a provider. | Allergies may not be deduplicated across VistA sites. In order to make sure each card in the list view is unique and therefore accessible, we must include a second identifier. We chose date entered as that second identifier.    |
| The field formerly called reaction was updated to be called Signs and symptoms. | This was based on feedback from SMEs. Signs and symptoms is the terminology for this field used in the After Visit Summary. It also differentiates this field from the title of this entire section - Allergies and reactions |
| We will not include a link to send a SM if allergies info is incorrect. Instead, we will just tell a patient to inform their provider at their next appointment. | Based on feedback from Dr. Josephs, updating allergies information can wait until a patient's next appointment. This is also thought to decrease unecessary SMs.|
</details>

* [Phase 0 launch Figma file](https://www.figma.com/file/mGZRdLypKGaFsHo5xp2kaZ/Medical-Records?type=design&node-id=65-17315&mode=design&t=jZJVIL5EphhcLSCf-0)
* [Subject matter expert review details](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/SME%20Reviews/Primary%20care/Primary%20Care%20Information%20on%20VA.gov.docx?d=w36e12bce2ee347eead9d9bd109f32a5d&csf=1&web=1&e=nPAS0M&nav=eyJoIjoiMjExMTI5NTc3MiJ9)
  
### Vaccines

<details>
<summary>List view requirements</summary>
 
---

#### IA
URL: `/my-health/medical-records/vaccines`  
Breadcrumb: No  
Back button: Yes, `< Back to medical records`

#### Content
Shipped product should reflect [Phase 0 content document](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/Content%20documents/Phase%200%20all%20domains%20except%20lab%20results,%20no%20blue%20button,%20no%20settings%20page.docx?d=wc94f788df7fc4279b0b49a7baa311219&csf=1&web=1&e=oF9m6d&nav=eyJoIjoiMjk4MzYxNTUyIn0%3D).

* H1 for this page should be `Vaccines`
* Intro text at top of page that explains what you will find in this section of the medical record
* Intro text that informs a patient that reactions to vaccines can be found in the allergies section
* Additional info that explains what to know about printing and downloading vaccines information
* For each vaccine in list, include the following information
  * Vaccine name
  * Date patient received the vaccine

#### Functionality
* List should be paginated, with 10 vaccines per page
* For each vaccine, a user should be able to click on the first line of the card (vaccine name) to view detailed information about that vaccine
* Ability to download a full list of vaccines as a PDF
   * PDF should include detailed information about each vaccine
* Ability to print all vaccines
   * Print out should include detailed information about each vaccine
---
</details>

<details>
<summary>Details view requirements</summary>
 
---

 
#### IA
URL: `/my-health/medical-records/vaccines/vaccine_id`  
Breadcrumb: No  
Back button: Yes, `< Back to vaccines`

#### Content
Shipped product should reflect [Phase 0 content document](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/Content%20documents/Phase%200%20all%20domains%20except%20lab%20results,%20no%20blue%20button,%20no%20settings%20page.docx?d=wc94f788df7fc4279b0b49a7baa311219&csf=1&web=1&e=21aUvp&nav=eyJoIjoiMjEyMzk5MzE5NyJ9).

* H1 for this page should be name of the vaccine
* For each vaccine, include the following information
  * Vaccine name
  * Date patient received vaccine
  * Location patient received vaccine
  * Notes entered by the provider

#### Functionality
* Ability to download details of current vaccine as a PDF
* Ability to print the currently in view details of vaccine
 

---
</details>

<details>
<summary>Design decisions</summary>
  
| Decision | Reasoning |
|-----------------------------------------------------------------------------------------------|-----------------| 
| The field for reactions will not be displayed as part of the vaccine data in production.                                  | After significant research and review of data, it was determined that CPRS 32b, which removed the reaction field from vaccines, was released Sep 29, 2022 and all sites (except those on Cerner) should have installed it by Dec 16, 2022.  This change made recording reactions as part of the vaccines record obsolete, and as a result, Dr. Josephs recommended that we not display it.  
| The domain name was will be Vaccines, not Immunizations| This was approved by SMEs. Vaccines is more recongizable and plain language than immunizations. |
| The vaccines list view will incldue a link to allergies. | Based on SME input, reactions and allergies to vaccines are typically documented in the allergies list.|
| The list view will present each vaccine in a card format. That card will include both the vaccine logged and the date it was received as entered into the EHR by a provider. | A user may get the same vaccine yearly, and therefore we need a second identifier to differenitate. Given a user cannot receive the same vaccine on the same day, date received fits the bill. |
| The following data can be shown to users once verified by KBS and if they are available. They do not need to be included at launch into phase 0: Vaccine series information, Manufacturer, Site (such as left arm), Vaccine status (such as completed) and Lot number. | These are important pieces of data for patients, but have not been shown in MHV in the past. Therefore, we must first verify their accuracy with KBS.|
| The following field should not be shown to users: CPT code, who administered the code | After discussion, the SMEs determined they were not needed for patient view and may cause confusion. A user would still be able to get this information by asking their provider directly or submitting a full records request.|
</details>

* [Phase 0 launch Figma file](https://www.figma.com/file/mGZRdLypKGaFsHo5xp2kaZ/Medical-Records?type=design&node-id=65-17315&mode=design&t=jZJVIL5EphhcLSCf-0)
* [Subject matter expert review details](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/SME%20Reviews/Primary%20care/Primary%20Care%20Information%20on%20VA.gov.docx?d=w36e12bce2ee347eead9d9bd109f32a5d&csf=1&web=1&e=okyHLO&nav=eyJoIjoiMTEyNDQyMDU5MSJ9)

### Health conditions

<details>
<summary>List view requirements</summary>

---

#### IA
URL: `/my-health/medical-records/conditions`  
Breadcrumb: No  
Back button: Yes, `< Back to medical records`

#### Content
Shipped product should reflect [Phase 0 content document](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/Content%20documents/Phase%200%20all%20domains%20except%20lab%20results,%20no%20blue%20button,%20no%20settings%20page.docx?d=wc94f788df7fc4279b0b49a7baa311219&csf=1&web=1&e=pYhfj6&nav=eyJoIjoiMTgwNjM2MTY5MiJ9).

* H1 for this page should be `Health conditions`
* Intro text at top of page that explains what you will find in this section of the medical record, including 36 hour hold
* Additional info that explains what to know about printing and downloading health conditions information
* For each health condition in list, include the following information
  * Condition name
  * Date entered into the record

#### Functionality
* List should be paginated, with 10 health conditions per page
* For each condition, a user should be able to click on the first line of the card (condition name) to view detailed information about that condition
* Ability to download a full list of conditions as a PDF
   * PDF should include detailed information about each conditions
* Ability to print all conditions
   * Print out should include detailed information about each condition
---

</details>

<details>
<summary>Details view requirements</summary>
 
---
#### IA
URL: `/my-health/medical-records/conditions/condition_id`  
Breadcrumb: No  
Back button: Yes, `< Back to conditions`

#### Content
Shipped product should reflect [Phase 0 content document](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/Content%20documents/Phase%200%20all%20domains%20except%20lab%20results,%20no%20blue%20button,%20no%20settings%20page.docx?d=wc94f788df7fc4279b0b49a7baa311219&csf=1&web=1&e=OKyEnB&nav=eyJoIjoiNDIzNzY4MTE0In0%3D).

* H1 for this page should be name of the condition
* For each condition, include the following information
  * Condition name
  * Date condition entered into record
  * Provider who entered condition into record
  * Location where condition entered into record
  * Comments entered by the provider

#### Functionality
* Ability to download details of current condition as a PDF
* Ability to print the currently in view details of condition
 
---
</details>

<details>
<summary>Design decisions</summary>
</br>
  
| Decision | Reasoning |
|-----------------------------------------------------------------------------------------------|-----------------|
|We will call this section of the record health conditions. |This section has been referred to as problem list in the past, but framing as problems is thought to be negative and also not incredibly plain language, as many things could be considered problems, but not all of them are actually health issues that would be logged|
|We will only show health conditions that have a status of Active. | Health conditions have not always been logged by providers in a consistent manner. Some providers have used health conditions to keep track of possible issues a patient is facing, but are not confirmed. These have been deemed inactive. Seeing these in the list as inactive gives the impression that a patient may have once had this issue when they never did - it was just suspected. Therefore, including inactive could be confusing. Therefore, just like MHV classic, we will only ever show active conditions.|
|In the list view, each card will show enough information about a health condition to consider that entry unique. We believe name and date entered suffices. | Health conditions may not be deduplicated across VistA sites. Therefore, just name may not be unique.|
|The following fields will not be shown to users: Clinical status, Date and time condition started, ICD type + code, Verification Status, Date and time condition abated | SMEs gave input that these fields are not necessary to show to patients and may not be reliable.|
|The following fields will not be shown to users at first, but may be if verified: Verification Status| SMEs gave input that this field may be helpful, but since it is not shown in MHV today, needs to be verified.|

</details>

* [Phase 0 launch Figma file](https://www.figma.com/file/mGZRdLypKGaFsHo5xp2kaZ/Medical-Records?type=design&node-id=65-17315&mode=design&t=jZJVIL5EphhcLSCf-0)
* [Subject matter expert review details](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/SME%20Reviews/Primary%20care/Primary%20Care%20Information%20on%20VA.gov.docx?d=w36e12bce2ee347eead9d9bd109f32a5d&csf=1&web=1&e=F548Gc&nav=eyJoIjoiODE5OTM2Njc4In0)


### Vitals

> [!NOTE]
> To be completed by Kaitlin Fink

<details>
<summary>List view requirements</summary>
 
---
#### IA

#### Content

#### Functionality
---
</details>

<details>
<summary>Details view requirements</summary>
 
---
#### IA

#### Content

#### Functionality
---
</details>

<details>
<summary>Design decisions</summary>
</br>
  
| Decision | Reasoning |
|-----------------------------------------------------------------------------------------------|-----------------|
| | |
</details>

### Care summaries and notes
Launched to Phase 0 on 2/26/24

<details>
<summary>List view requirements</summary>
  
---
#### IA
URL: `/my-health/medical-records/summaries-and-notes`  
Breadcrumb: No  
Back button: Yes, `< Back to medical records`

#### Content
Shipped product should reflect [Phase 0 content document](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/Content%20documents/Phase%200%20all%20domains%20except%20lab%20results,%20no%20blue%20button,%20no%20settings%20page.docx?d=wc94f788df7fc4279b0b49a7baa311219&csf=1&web=1&e=pYhfj6&nav=eyJoIjoiMTgwNjM2MTY5MiJ9).

* H1 for this page should be `Care summaries and notes`
* Intro text at top of page that explains what you will find in this section of the medical record, including 36 hour hold
* For each progress note and consultation note in list, include the following information
  * Note name
  * Date entered into the record
  * Location name
  * Signed by
* For each admission and discharge summaries in list, include the following information
  * Note name
  * Admitted on date
  * Location name
  * Discharged by

#### Functionality
---
* List should be paginated, with 10 notes per page in reverse chronological order
* For each note, a user should be able to click on the first line of the card (note name) to view complete note
 ---

</details>

<details>
<summary>Details view requirements</summary>

#### IA
URL: `/my-health/medical-records/summaries-and-notes/note_id`  
Breadcrumb: No  
Back button: Yes, `< Back to Care summaries and notes`

#### Content
Shipped product should reflect [Phase 0 content document](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/Content%20documents/Phase%200%20all%20domains%20except%20lab%20results,%20no%20blue%20button,%20no%20settings%20page.docx?d=wc94f788df7fc4279b0b49a7baa311219&csf=1&web=1&e=OKyEnB&nav=eyJoIjoiNDIzNzY4MTE0In0%3D).
* Progress and consult notes 
 * H1 for this page should be note name
 * Below should include entered on date 
 * H2 should be details including the following
   * Location
   * Signed by
   * Cosigned by
   * Date signed
 * H2 for note with unstrutured note data below
* Admission and discharge summaries notes
 * H1 for this page should be note name
 * Below should include admission date and details about the summary of this page
 * H2 should be details including the following
   * Location
   * Discharged date 
   * Discharged by
 * H2 for summary with unstrutured note data below

#### Functionality
* Ability to download currently in view details of note as a PDF or TXT
* Ability to print the currently in view details of note
---
</details>

<details>
<summary>Design decisions</summary>
</br>

| Decision | Reasoning |
|-----------------------------------------------------------------------------------------------|-----------------|
|We will call this section of the record care summaries and notes. |This section has been referred to as VA Admission and Discharges and VA Notes in Blue Button download on MHV.  This section will include progress notes, admission and discharge summaries and consultation notes. In the future if other note types are determined valuable we will reevalutate if they should be included here.|
|Notes and admission and discharge summaries can have multiple addenda. Addenda will be presented as part of the original note to which they were added.|We discussed addenda with the SMEs and agreed that they should be treated as they are today in MHV.  When a provider writes an addendum today they are related to the context of the note. The unstructured text of the original progress note includes an alert at the top that says, “This note has addenda” and then the addendum is added to the note.|
|The following fields will not be shown to users at first on notes, but may be if verified: Status| SMEs gave input that this field may be helpful, if this includes additional values besides completed. But if completed is the only status then it will not be valuable.|
|The following fields will not be shown to users at first on admission and discharge summaries, but may be if verified: Date signed, Status, Attending physcian | SMEs gave input that status may be helpful, if this includes additional values besides completed. But if completed is the only status then it will not be valuable. Attending physcian will replace “person who discharged the patient” if available, if not we will keep as is.|

</details>

* [Phase 0 launch Figma file](https://www.figma.com/file/mGZRdLypKGaFsHo5xp2kaZ/Medical-Records?type=design&node-id=65-17315&mode=design&t=jZJVIL5EphhcLSCf-0)
* [Subject matter expert review - Progress and consultation notes](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/SME%20Reviews/Primary%20care/Primary%20Care%20Information%20on%20VA.gov.docx?d=w36e12bce2ee347eead9d9bd109f32a5d&csf=1&web=1&e=0oCrbC&nav=eyJoIjoiMTAzNzUwNzk3NSJ9)
* [Subject matter expert review - Admission and discharge summaries](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/SME%20Reviews/Primary%20care/Primary%20Care%20Information%20on%20VA.gov.docx?d=w36e12bce2ee347eead9d9bd109f32a5d&csf=1&web=1&e=JmbRri&nav=eyJoIjoiNTY4MDE0NDc0In0%3D)


### Lab and test results


<details>
<summary>List view requirements</summary>
 
---
#### IA
URL: `/my-health/medical-records/labs-and-tests`  
Breadcrumb: No  
Back button: Yes, `< Back to medical records`

#### Content

> **NOTE**
> Content document not yet available. When available, update the content in this section. Content document should be considered a source of truth for content, not this requirement document.

* H1 for this page should be `Lab and test results`
* Intro text at top of page that explains what you will find in this section of the medical record, including 36 hour hold on lab results and 14 day delay for pathology results (pathology results simply take longer to come back)
* Additional info that explains what to know about printing and downloading lab and test information
* For each result in list, include the following information
  * Test name
     *  If specific test name not available, use test category such as Microbiology
  * Date
     * Chem/Hem, Microbiology, Pathology: Date specimen was collected
     * Imaging: Date imaging test was performed
  * Test category
     * Chemistry and hematology
     * Pathology (if not used as test name)
     * Microbiology (if not used as test name)
     * X-ray and imaging results (Radiology)
  * Provider who ordered the lab or test

#### Functionality
* List should be paginated, with 10 results per page
* For each result, a user should be able to click on the first line of the card (result name) to view detailed information about that result

---
</details>

<details>
<summary>Chem/Hem results - Details view requirements</summary>
 
---
#### IA
URL: `/my-health/medical-records/labs-and-tests/result_id`  
Breadcrumb: No  
Back button: Yes, `< Back to lab and test results`

#### Content
> **NOTE**  
>  Content document not yet available. When available, update the content in this section. Content document should be considered a source of truth for content, not this requirement document.

> **NOTE:** These results may consist of two parts. 
> 1. Each lab test has “top-level” information that describes the metadata for the test. These are called Cosmic (VistA) or Orderable (OH) tests.
> 1. Each Cosmic or Orderable test can have one or more structured results, called atomic tests (VistA) or discrete task assays (OH).

* H1 for this page should be the name of the orderable or cosmic test.
* At the Cosmic/Orderable level, include the following information
   * Name of test _(used as H1)_
   * Type of test - Chemistry and hematology
   * Date and time that the specimen for this test was collected
   * The location at which the specimen was collected
   * The provider who ordered the test
   * The location of the provider who ordered the test
   * Site or sample tested
   * Comments entered by the lab
* Information about understanding your results, presented within an additional info component
* At the Atomic/Discrete level, include the following information for each result, presented in a card
   * Test name
   * Result measurement
   * Units - _include as part of result measurement_
   * Flag - _include as part of result measurement_
   * Reference range
   * Status
   * Performing lab location - where the sample was tested/evaluated

#### Functionality
* Ability to download details of current result as a PDF
* Ability to print the currently in view details of results
---
</details>

<details>
<summary>Microbiology results - Details view requirements</summary>
 
---
#### IA
URL: `/my-health/medical-records/labs-and-tests/result_id`  
Breadcrumb: No  
Back button: Yes, `< Back to lab and test results`

#### Content
> **NOTE**  
>  Content document not yet available. When available, update the content in this section. Content document should be considered a source of truth for content, not this requirement document.

* H1 for this page should be the name of the microbiology lab test that was run. If name not available, use type of test.
* For each microbiology result, include the following information
   * Name of test _(used as H1)_
   * Type of test - e.g. Surgical pathology _(backup for H1)_
   * Date and time that the specimen for this test was collected
   * The location at which the specimen was collected
   * The provider who ordered the test
   * The location of the provider who ordered the test
   * Site or sample tested
   * Collection sample - e.g. swab
   * Performing lab location - where the sample was tested/evaluated
   * Date and time that the sample evaluation was completed
   * The actual resulting microbiology report - presented in monospaced font to preserve spacing
   * Information about understanding your results, presented within an additional info component


#### Functionality
* Ability to download details of current result as a PDF
* Ability to print the currently in view details of results
---
</details>

<details>
<summary>Pathology results - Details view requirements</summary>
 
---
#### IA
URL: `/my-health/medical-records/labs-and-tests/result_id`  
Breadcrumb: No  
Back button: Yes, `< Back to lab and test results`

#### Content
> **NOTE**  
>  Content document not yet available. When available, update the content in this section. Content document should be considered a source of truth for content, not this requirement document.
> 
> In MHV classic, there is significantly less structured data available for pathology reports. For example, ordering provider and location are not available. As work is done on this category, exploration should be done to understand whether we can get the same set of standardized data fields as chem/hem result and if so, take them to SMEs for approval to include. 

* H1 for this page should be the name of the pathology lab test that was run. If name not available, use type of test.
* For each pathology result, include the following information
   * Name of test _(used as H1)_
   * Type of test - e.g. Surgical pathology _(backup for H1)_
   * Date and time that the specimen for this test was collected
   * Performing lab location - where the sample was tested/evaluated
   * Date and time that the sample evaluation was completed
   * The actual resulting pathology report - presented in monospaced font to preserve spacing
   * Information about understanding your results, presented within an additional info component


#### Functionality
* Ability to download details of current result as a PDF
* Ability to print the currently in view details of results
---
</details>

<details>
<summary>Imaging results - Details view requirements</summary>
 
---
#### IA
URL: `/my-health/medical-records/labs-and-tests/result_id`  
Breadcrumb: No  
Back button: Yes, `< Back to lab and test results`

#### Content
> **NOTE**  
>  Content document not yet available. When available, update the content in this section. Content document should be considered a source of truth for content, not this requirement document.

* H1 for this page should be the name of the imaging test that was run. If name not available, use type of test.
* For each imaging result, include the following information
   * Name of test _(used as H1)_
   * Type of test - e.g. X-Ray _(backup for H1)_
   * Date and time of the imaging procedure
   * Performing location - where the images were taken
   * Ordering/requesting provider
   * Reason for study
   * Clinical history
   * Radiologist who performed study
   * The actual resulting imaging report - presented in monospaced font to preserve spacing

#### Functionality
* Ability to download details of current result as a PDF
* Ability to print the currently in view details of results
* Link to MHV Classic to view associated radiology images

---
</details>

<details>
<summary>Design decisions</summary>
</br>
  
| Decision | Reasoning |
|-----------------------------------------------------------------------------------------------|-----------------|
|We will combine imaging and lab results into one section. |In [early tree testing studies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/overall-content-IA/2023-01-my-health-ia-tree-test/my-health-tree-test-findings.md#details-of-findings), combining these categories worked well.|
|In the list view, each card will show enough information about a lab result to consider that entry unique. We believe name and date speciment collected suffice.| The same lab or imaging test may be run multiple times.|
|The following imaging results fields will not be shown to users: ordering location | SMEs felt that the ordering location was not important data and could create confusion alongside performing location.|
|Lab and test result reports should be shown in monospaced fonts.| SMEs informed us that reports are written up in lab systems in monospaced fonts, and spacing is an important consideration. Therefore, that spacing should be retained when presenting to patients.|
|For phase 0, we do not need to show radiology images.|Radiology images are stored differently from other medical records data and can be quite large in size. This work is requires separate work than making the other MR data available. Due to the heavier lift, as well as the notion that images are less useful for patients than the report, Dr. J mentioned in PI 10 that this work to move over to VA.gov could be deprioritzed, though needs to be done eventually before Phase 4.|
</details>

* [Subject matter expert review - Lab results](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/SME%20Reviews/Lab%20results/Lab%20results%20information%20on%20VA.gov.docx?d=wfedc587c450b4d79afeda296ac1cc29a&csf=1&web=1&e=PwDTCE)
* [Subject matter expert review - Imaging results](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/SME%20Reviews/Imaging%20results/Imaging%20results%20information%20on%20VA.gov.docx?d=w0887da3bbedb4994b48d7f90c9d93461&csf=1&web=1&e=e2JHoM)

### Download all medical records (Blue Button Reports)
<details>
<summary>Requirements</summary>

---
#### IA
URL: `/my-health/medical-records/download-all`  
Breadcrumb: No  
Back button: Yes, `< Back to medical records`

#### Content
> **NOTE**  
>  Content document not yet available. When available, update the content in this section. Content document should be considered a source of truth for content, not this requirement document.

* H1 for this page should be Download all medical records
* Intro text at top of page that this is where a user can download all medical record information avialble on MHV on VA.gov in one place. It should also reference that the way this is done is by using VA Blue Button. 
* Content should explain
 * Exactly what you is part of the download
 * What do know before downloading, including how to protect your PHI
 * What to do if you can't find all of your record

#### Functionality 
* Ability to download all records available on MHV as a single PDF
* Ability to download all records available on MHV as a single text file
* Historical PGHD will be included in the downloaded medical records report. 

---
</details>

<details>
<summary>Design decisions</summary>
</br>
  
| Decision | Reasoning |
|-----------------------------------------------------------------------------------------------|-----------------|
|This section will be called Download all medical records, not Blue Button|Research showed that very few popeople recongize and understand exactly what Blue Button is. Therefore, we wanted to make it clear what this part of the application allows you to do. Instead of making Blue Button the H1, refer to Blue Button as the mechanism by which you can download all records. This allows us to clarify for Veterans while also connecting to MHV classic terminology. We also did research, and there are no requirements for using the Blue Button branding other than making sure it is labeled as registered, and it should be a way to download medical data. |
|At first, only allow for full record downloads.|Classic MHV allows users to select categories and time frames as parameters for downloading your data. To download a specifc category of data, a user should navigate to that section of MHV on VA.gov. THerefore, category selection doesn't make much sense in this new app. However, time frame does, but to limit scope, and because downloading all is required in all versions of the tool, we decided to start there. Consider adding time frame selection in future versions of the app.|
</details>

* [Phase 0 launch design file](https://www.figma.com/file/mGZRdLypKGaFsHo5xp2kaZ/Medical-Records?type=design&node-id=65-17315&mode=design&t=jZJVIL5EphhcLSCf-0)

### Medical record settings
> [!NOTE]
> The content for opting into and out of VHIE is still undergoing review by the VHIE office as of Jan 11, 2024. Laura Willwerth is leading this effort. 

<details>
<summary>Requirements</summary>

---
#### IA
URL: `/my-health/medical-records/settings`  
Breadcrumb: No  
Back button: Yes, `< Back to medical records`

#### Content
Shipped product should reflect [Phase 0 content document](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/Content%20documents/MR%20sharing%20settings%20content%20(VHIE).docx?d=wac25c016d3b24e649e0c607ff8cc33f9&csf=1&web=1&e=nfXSFv).

* H1 for this page should be Medical record settings
* Intro text at top of page that explains what a user can do on this page - opt into and out of medical record sharing, and also link to notification settings
* There should be two sections
 * Manage your electronic sharing settings
  * Content that explains what it means to share your electronic medical record
  * Content that explains what you will be opting into sharing
  * Your current setting
 * Manage your notification settings
   * Content that explains what settings are
   * Content that directs you to the VA Profile to update settings

#### Functionality 
* Ability to opt into or out of sharing with VHIE
* Link to VA profile to update notification settings

---
</details>

<details>
<summary>Design decisions</summary>
</br>
  
| Decision | Reasoning |
|-----------------------------------------------------------------------------------------------|-----------------|
|Medical records settings will be its own page and will primarily be about opting into and out of VHIE|There was a lot of struggle for where to locate this VHIE functionality. There was an attempt to pair it with downloading medical records, but that proved confusing for both IA reasons (what do you call the combined things in a nav option) and even once navigated to, it was unclear why these two things were bundled. Additonally, research showed that callign this page something like "Share your medical records" did not afford nor align with the actual actions taken. Therefore, we landed on settings as the best option.|

</details>

* [Phase 0 launch design file](https://www.figma.com/file/mGZRdLypKGaFsHo5xp2kaZ/Medical-Records?type=design&node-id=65-17315&mode=design&t=jZJVIL5EphhcLSCf-0)
* [Phase 0 content document](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/Content%20documents/MR%20sharing%20settings%20content%20(VHIE).docx?d=wac25c016d3b24e649e0c607ff8cc33f9&csf=1&web=1&e=nfXSFv)


## Phase 1

## Phase 2

