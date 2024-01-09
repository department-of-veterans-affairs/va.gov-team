# Requirements: Medical Records on VA.gov v1.0

## Change Log

| Date           | Changed By       | Description of Change |
|----------------| ---------------- | ----------------------|
| 1/2/24       | Marci Mcguire  |Created document as an update to [old requirements document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/8293da406b1fd0beedd23db81823012a2415831f/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/requirements/requirements-archive.md)    |
|1/2/24        | Coulton Bunney   | Set up structure |
|1/3/24        | Coulton Bunney   | Updated allergies and vaccines information |
|1/4/24 | Coulton Bunney | Added key research and data documents|
|1/9/24 | Coulton Bunney | Added conditions information|



## Table of Contents  

- [Overview](#overview)
- [Phase 0](#phase-0)

## Overview 

This document lays out the requirements for medical records on VA.gov. It is broken out by data domains and phases. We expect additional functionality to be iteratively added to the tool over time during the phased rollout. 

Medical records v1.0 consists of 6 data domains. 
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
 
**Key documents**
* [VistA -> PHR/MHV mapping document](https://dvagov.sharepoint.com/:x:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/data%20mapping/MHV%20Documentation/MHV_PHR_API_to_FHIR_mapping.xlsx?d=w076667839ced465ca2506582e76618fb&csf=1&web=1&e=DFvMpe)
* [PHR FHIR mapping IG](https://dvagov.sharepoint.com/:x:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/data%20mapping/MHV%20Documentation/MHV_PHR_API_to_FHIR_mapping.xlsx?d=w076667839ced465ca2506582e76618fb&csf=1&web=1&e=iL2Zld)

## Phase 0

### Medical records general

<details>
<summary>Design decisions</summary>

| Decision | Reasoning |
|-----------------------------------------------------------------------------------------------|-----------------| 
| The product will have a left navigation bar |  The introduction of a second domain necessitates secondary navigation  |
| A user can download either a PDF or a Text file |  Due to avaialble eng time, donwloading a text file was completed earlier than expected. A11y advised that text files are more easily used by folks who read Braille.  |
| There will be three primary pages: A landing page, a list of entries, details about each entry |       |
| We will initially launch the product with only one domain, allergies. |     |
| The product will not have a left navigation bar |  No need for left nav with only one domain available  |
| The landing page will be at the URL …/my-health/medical-records/ | | 
| The landing page will list all available domains, give a short descriptive blurb about each, and provide a link to the list view for each |   |
| Any printed or downloaded page will include two patient identifiers - name and date of birth |    |
| For Phase 0, we will only make downloads available as PDF. Downloading a TXT version will be a fast follow once all domains are in Phase 0. | Given the web version is fully 508 compliant, it will be the view that we recommend for all users to primarily access, including those who would need a TXT download rather than a PDF download  |
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
Shipped product should reflect [Phase 0 content document](https://dvagov-my.sharepoint.com/:w:/r/personal/laura_willwerth_va_gov/Documents/MHV%20medical%20records%20content%20(shared%20folder)/Phase%200%20allergies%20+%20vaccines.docx?d=w11445ce30c1340999fb04286cfc57477&csf=1&web=1&e=GCFvPm&nav=eyJoIjoiMTc4NzA2MTAwOSJ9).

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
Shipped product should reflect [Phase 0 content document](https://dvagov-my.sharepoint.com/:w:/r/personal/laura_willwerth_va_gov/Documents/MHV%20medical%20records%20content%20(shared%20folder)/Phase%200%20allergies%20+%20vaccines.docx?d=w11445ce30c1340999fb04286cfc57477&csf=1&web=1&e=1oQALv&nav=eyJoIjoiMjY5MDA1OTg2In0%3D).

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
| The list view page for allergies will be at the URL …/my-health/medical-records/allergies/ |   |
| A details page for allergies will be at the URL …/my-health/medical-records/allergies/allergy_ID/ |     |
| A user can print from the list view. When they do, they receive a print out of all of their allergies |     |
| A user can print from the details view. When they do, they receive a print out of the details for just that allergy |     |
| A user can download from the list view. When they do, they receive a PDF that includes a list of all of their allergies |   |
| A user can download from the details view. When they do, they receive a PDF that includes just the details of that allergy |      |
| A user will be presented information on the consequences of downloading a PDF on a public computer | |
| The list view will present each allergy in a card format. That card will include both the allergy logged and the date it was entered into the EHR by a provider. | Allergies may not be deduplicated across VistA sites. In order to make sure each card in the list view is unique and therefore accessible, we must include a second identifier. We chose date entered as that second identifier.    |
| The H1 of the details view will be the allergy name. Directly underneath the H1 will be date entered information | | 
| In the details view for an allergy, a user will be shown Allergy name, date entered, location entered, reaction, allergy type, whether it was observed or is historical, and any comments entered by the provider | |
| The field formerly called reaction was updated to be called Signs and symptoms. | This was based on feedback from SMEs. Signs and symptoms is the terminology for this field used in the After Visit Summary. It also differentiates this field from the title of this entire section - Allergies and reactions |
| We will not include a link to send a SM if allergies info is incorrect. Instead, we will just tell a patient to inform their provider at their next appointment. | Based on feedback from Dr. Josephs, updating allergies information can wait until a patient's next appointment. This is also thought to decrease unecessary SMs.|
</details>

> [!WARNING]
> This file needs updated once it is moved over to Figma.
> * [Phase 0 launch Sketch file](https://www.sketch.com/s/a7c188da-3716-494d-a11b-8b570ce78e8a)
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
Shipped product should reflect [Phase 0 content document](https://dvagov-my.sharepoint.com/:w:/r/personal/laura_willwerth_va_gov/Documents/MHV%20medical%20records%20content%20(shared%20folder)/Phase%200%20allergies%20+%20vaccines.docx?d=w11445ce30c1340999fb04286cfc57477&csf=1&web=1&e=wQXUDK&nav=eyJoIjoiMjk4MzYxNTUyIn0).

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
Shipped product should reflect [Phase 0 content document](https://dvagov-my.sharepoint.com/:w:/r/personal/laura_willwerth_va_gov/Documents/MHV%20medical%20records%20content%20(shared%20folder)/Phase%200%20allergies%20+%20vaccines.docx?d=w11445ce30c1340999fb04286cfc57477&csf=1&web=1&e=k2pooL&nav=eyJoIjoiMjEyMzk5MzE5NyJ9).

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
| The list view page for vaccines will be at the URL …/my-health/medical-records/vaccines/ |   |
| A details page for vaccines will be at the URL …/my-health/medical-records/vaccines/vaccine_ID |     |
| The vaccines list view will incldue a link to allergies. | Based on SME input, reactions and allergies to vaccines are typically documented in the allergies list.|
| A user can print from the list view. When they do, they receive a print out of all of their vaccines |     |
| A user can print from the details view. When they do, they receive a print out of the details for just that vaccine |     |
| A user can download from the list view. When they do, they receive either a PDF or text file that includes a list of all of their vaccines |   |
| A user can download from the details view. When they do, they receive either a PDF or text file that includes just the details of that vaccine |      |
| A user will be presented information on the consequences of downloading on a public computer | |
| The list view will present each vaccine in a card format. That card will include both the vaccine logged and the date it was received as entered into the EHR by a provider. | A user may get the same vaccine yearly, and therefore we need a second identifier to differenitate. Given a user cannot receive the same vaccine on the same day, date received fits the bill. |
| The H1 of the details view will be the vaccine name. Directly underneath the H1 will be date received information | | 
| In the details view for a vaccine, a user will be shown vaccine name, date received, location received, and provider notes | |
| The field reaction for vaccines will not be shown at launch. | This was based on feedback from SMEs. There are still many qustions about how the field is used in the field. We want to track down these reasons to properly explain this field to users. This must be resolved before moving MR to Phase 1 |
| The following data can be shown to users once verified by KBS and if they are available. They do not need to be included at launch into phase 0: Vaccine series information, Manufacturer, Site (such as left arm), Vaccine status (such as completed) and Lot number. | These are important pieces of data for patients, but ahve not been shown in MHV in the past. Therefore, we must first verify their accuracy with KBS.|
| The following field should not be shown to users: CPT code, who administered the code | After discussion, the SMEs determined they were not needed for patient view and may cause confusion. A user would still be able to get this information by asking their provider directly or submitting a full records request.|
</details>

> [!WARNING]
> This file needs updated once it is moved over to Figma.
> * [Phase 0 launch Sketch file](https://www.sketch.com/s/a3419c37-f716-4b09-8853-2c6c8284ed85)
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
| | |
</details>

> [!WARNING]
> This file needs added once it is cleaned up.
> * [Phase 0 launch design file](https://www.sketch.com/s/4c2728ff-649d-4212-98d2-04c9b3fff9d4/v/ll4M4o/p/C3D9FA2D-5311-4886-B25F-655123816797/canvas?posX=-2388.652777084397&posY=-14203.551973537104&zoom=0.0813358947634697)
* [Subject matter expert review details](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/SME%20Reviews/Primary%20care/Primary%20Care%20Information%20on%20VA.gov.docx?d=w36e12bce2ee347eead9d9bd109f32a5d&csf=1&web=1&e=F548Gc&nav=eyJoIjoiODE5OTM2Njc4In0)


### Vitals

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

### Lab and test results

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


## Phase 1

## Phase 2

