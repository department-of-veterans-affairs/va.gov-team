# Requirements: Medical Records on VA.gov v1.0

## Change Log

| Date           | Changed By       | Description of Change |
|----------------| ---------------- | ----------------------|
| 1/2/23       | Marci Mcguire  |Created document as an update to [old requirements document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/8293da406b1fd0beedd23db81823012a2415831f/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/requirements/requirements-archive.md)    |
|1/2/23        | Coulton Bunney   | Set up structure |


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

### Allergies and reactions 

<details>
<summary>List view requirements</summary>

---
#### IA
URL: `/my-health/medical-records/allergies`

#### Content

#### Functionality
---
</details>

<details>
<summary>Details view requirements</summary>
 
---
#### IA
URL: `/my-health/medical-records/allergies/allergy_id`

#### Content

#### Functionality
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
</details>

* [Phase 0 launch Sketch file](https://www.sketch.com/s/a7c188da-3716-494d-a11b-8b570ce78e8a)
* [Subject matter expert review details](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/SME%20Reviews/Primary%20care/Primary%20Care%20Information%20on%20VA.gov.docx?d=w36e12bce2ee347eead9d9bd109f32a5d&csf=1&web=1&e=nPAS0M&nav=eyJoIjoiMjExMTI5NTc3MiJ9)
  
### Vaccines

<details>
<summary>List view requirements</summary>
 
---
#### IA
URL: `/my-health/medical-records/vaccines`

#### Content

#### Functionality
---
</details>

<details>
<summary>Details view requirements</summary>
 
---
#### IA
URL: `/my-health/medical-records/vaccines/vaccine_id`

#### Content

#### Functionality
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


### Health conditions

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

