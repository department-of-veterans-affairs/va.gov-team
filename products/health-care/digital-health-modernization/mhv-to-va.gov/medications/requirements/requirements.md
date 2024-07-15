# Requirements: Medications on VA.gov v1.0

## Change Log

| Date           | Changed By       | Description of Change                                                                                               |
|----------------| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| 4/26/23        | Coulton Bunney   |Created document                                                                                                     |
| 4/27/23        | Coulton Bunney   |Added initial draft of overview and use cases                                                                        |
| 4/28/23        | Coulton Bunney   |Added initial draft of requirements                                                                                  |
| 7/20/23        | Kay Lawyer       |Updated to match design and logic      
| 11/28/23        | Coulton Bunney     |Added NDC |
| 12/29/23        | Coulton Bunney     |Updated to reflect actual Phase 0 requirements and added post-phase 0 improvements previously discussed|
| 1/8/24        | Coulton Bunney     |Updated with more information about list view sort options|
|1/11/24|Coutlon Bunney|Updated content document link|

## Table of Contents  

- [Overview](#overview)
- [Phase 0](#phase-0)

## Overview 

This document lays out the requirements for Medications on VA.gov. It is broken out by the phases. We expect additional functionality to be iteratively added to the tool over time during the phased rollout. 

* [Initial discovery report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/Discovery/Finding%20%26%20recommendations/Full%20report.md)

## Phase 0  

### Use cases
<details>
<summary> <strong></strong>List of use cases</strong>  </summary>
<br>
   
1. As a user, I can learn about the medications tool, what is included, and how to complete certain actions.
2. As a user, I can see a list of all the medications I have on file with the VA. This includes both active medications and inactive/historical medications, and non-VA medications captured by VA staff. \
    * For Phase 0 and 1, this does not include medications that are only on file at Cerner-based VA facilities.
    * This tool will not include self-entered prescritpions information.
5. As a user, I understand which of my VA prescriptions are fillable, refillable, which need renewed, and which cannot be renewed. 
6. As a user, I can submit fill/refill requests for VA prescriptions that are currently active and have refills left.
7. As a user, I can track the process of a prescription being filled or refilled.
8. As a user, I know when recently dispensed VA prescriptions have been shipped by CMOP or local VA facility, and I can track their shipment progress and any changes that may occur with the shipment.
9. As a user, I understand what actions I need to take to renew active VA prescriptions that have no refills left. 
10. As a user, I understand what actions I need to take to get a new prescription for inactive medications. 
11. As a user, I am notified when a submitted fill or refill request is unable to filled or refilled, and undestand how to resolve the issue. 
12. As a user, I can view key data about a medication, some of which is outlined in VHA Directive 1164. 
11. As a user, I can see a timeline of past fills/refills/renewals for each prescription.
12. Use of pagination to show all past medications- not separate space to show meds. 
</details>

### List view

This page provides the user with a list of their medications on file at the VA.

<details>
<summary>Requirements</summary>

#### IA
URL: `.../my-health/medications`  
Breadcrumbs: No

#### Content 

> [!WARNING]  
> Update content document link once moved to central folder

Shipped product should reflect [Phase 0 content document](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medications/Content%20documents/Medications_working%20content%20document.docx?d=wfad4256ed90144b2a26cb534f30c8c3a&csf=1&web=1&e=PZ0qKy&nav=eyJoIjoiODg5ODk3MDI4In0).

* H1 for this page should be Medications
* For each medication in list, include the following information
  * Name, dosage, form of medication
  * If VA prescription, show last filled date (actual dispense, not estimated)
  * If non-VA prescription, show documented date
  * If active VA medication, show number of refills left
  * Last shipped date
    * Should be available for up to 15 days after a prescription has shipped
  * Current MHV status
  * Information about the status - see phase 0 content document

#### Functionality 
* List should be paginated, with ~20 medications per page
* Ability to download a full list of medications as a PDF
  * PDF should include detailed information about each medication and the most recent fill information 
* Ability to print the currently in view list of medications
* Ability to sort list
   * Last filled first
      * Primary sort: Last filled date, newest to oldest (for Non-VA meds, we use Date entered since there won't be a last filled date)
      * Secondary sort: Alphabetical by name (A to Z)
   * Alphabetical by status
      * Primary sort: Status, sorted A to Z
      * Secondary sort: Alphabetical by name, sorted A to Z
      * Tertiary sort: Last filled date, newest to oldest
   * Alphabetical by name
      * Primary sort: Name, sorted A to Z
      * Secondary sort: Last filled date, sorted newest to oldest
* For each medication, a user should be able to click on the first line of the card (name, strength, and form) to view detailed information about that medication
* For each prescription with status active in the list with no original fill
  * Ability to fill this prescription by pressing a single button
  * When pressed, provide immediate loading indicator inline
  * If successful, provide inline success alert and update card information
  * If unsuccessful, provide inline error alert
* For each prescription in the list with status active and with refills left
  * Ability to refill this prescription by pressing a single button
  * When pressed, provide immediate loading indicator inline
  * If successful, provide inline success alert and update card information
  * If unsuccessful, provide inline error alert
* For each medication in the list that needs renewed (active with no refills or inactive)
  * Provide link to information about how to renew a medication
</details> 

### Details view

This page provides the user with details for a single medication on file with the VA.

<details>
<summary>Requirements</summary>

#### IA
URL: `.../my-health/medications\prescription_id`  
Breadcrumbs: Yes, `Medications > <Med name, strength, form>`

#### Content 
Shipped product should reflect [Phase 0 content document](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medications/Content%20documents/Medications_working%20content%20document.docx?d=wfad4256ed90144b2a26cb534f30c8c3a&csf=1&web=1&e=yzjKrV&nav=eyJoIjoiMjEzMDc5OTAwNiJ9).

* H1 for this page should be the name, strength, and form of the medication
* VA prescriptions should include the following details
   * Last filled date
   * If applicable, shipping tracking information for 15 days after shipment
      * Tracking number
      * Shipped on date
      * Delivery service (e.g. Fedex)
      * Prescriptions in this package
   * Information about the current status - see phase 0 content document
   * Current status
   * Definition of current status
   * Refills left
   * Prescription expiration date
   * Rx number
   * Date originally prescribed
   * Provider who originally prescribed
   * Facility at which originally prescribed
   * Pharmacy phone number to call to get additional information
   * Instructions
   * Reason for use (indication)
   * Quantity for each fill/refill
   * Refill history, where each entry includes
     * Refill number, or if original fill, it should say original fill
     * Filled date (dispened, not estimated)
     * Shipped date, if shipped
     * Medication image
* Non-VA prescriptions should include the following details
  * Date documented
  * Instructions
  * Reason for use
  * Status: Non-VA
  * Definition of statusWhen you started taking this medication
  * Documented by
  * Documented at this facility
  * Provider notes 

#### Functionality 
* Ability to download details of current medication as a PDF
* Ability to print the currently in view details of medication
* For 15 days after shipment, a user should be able to click on a shipment tracking number which opens up tracking information on the respective delivery service's website
* If prescription has status active with no original fill
  * Ability to fill this prescription by pressing a single button
  * When pressed, provide immediate loading indicator inline
  * If successful, provide inline success alert and update details information
  * If unsuccessful, provide inline error alert
* If prescription has status active with refills left
  * Ability to refill this prescription by pressing a single button
  * When pressed, provide immediate loading indicator inline
  * If successful, provide inline success alert and update card information
  * If unsuccessful, provide inline error alert
* If prescription needs renewed (active with no refills or inactive)
  * Provide link to information about how to renew a medication
</details>

### About medications

This page provides the user with information about the medications tool as well as how to renew a med.

<details>
<summary>Requirements</summary>

#### IA
URL: `.../my-health/medications/about-medications`  
Breadcrumbs: Yes, `Medications > About medications`

#### Content
Shipped product should reflect [Phase 0 content document](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medications/Content%20documents/Medications_working%20content%20document.docx?d=wfad4256ed90144b2a26cb534f30c8c3a&csf=1&web=1&e=iycmaX&nav=eyJoIjoiMTkwODMzNDExNyJ9).

* H1 for this page should be About medications
* There should be four main sections
   * Go to your medications now
      * This section includes a link to view your medications list
   * What to know as you try out this tool
      * This section includes content about how to give feedback on the tool or return to the classic version of MHV
   * Questions about this tool
      * This section includes content about the tool, such as what medications are included
   * More ways to manage your medications
      * This section includes information about how to renew a medication or update your information
* For full content, review [Phase 0 content document](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medications/Content%20documents/Medications_working%20content%20document.docx?d=wfad4256ed90144b2a26cb534f30c8c3a&csf=1&web=1&e=iycmaX&nav=eyJoIjoiMTkwODMzNDExNyJ9)

#### Functionality 
* Ability to quickly navigate to medications list
* Content in each section should be housed in accordions that can be expanded and collapsed, multiple at a time
</details> 

### Assets
* [Phase 0 content document](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medications/Content%20documents/Medications_working%20content%20document.docx?d=wfad4256ed90144b2a26cb534f30c8c3a&csf=1&web=1&e=Y27dDH)
* [Figma designs](https://www.figma.com/file/UGHasFKuKENvKz8AgSmxtI/Medications?type=design&node-id=1-7&mode=design&t=ywArxhr9nceeUWbZ-0)
* [Usability testing report, round 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/2023-07-medications-usability-testing-round1/Rx_Findings_Readout.pdf)
* [Usability testing report, round 2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/2023-11-medications-usability-testing-round2-AT/rx-round2-findings.pdf)

### Key design decisions
<details>
<summary>List of key design decisions</summary>
</br>
   
| Decision       | Reasoning     |
|----------------| ---------------- |
|For phase 0 MVP, users will only be able to fill prescriptions one at a time. |Individual refills are a must have fuctionality and are considered MVP. Bulk refilling improves efficiency but is not required for users. |
|Meds on VA.gov will not include self-entered medications.|Research showed that self-entered meds aren't ever seen by doctors, only by patients. This creates confusion where a patient thinks their doctor is aware of self-entered meds. Closing this gap requires much more investment and research. Therefore, self-entered medications is considered a separate initiative and will be made available through means other than VA.gov, such as via pre-visit questionnaires.|
|For phase 0 MVP, users will only be able to sort medications. There will be no filter or search capability.|Filtering and searching are not must-haves. However, sorting was thought to be must-have due to the potential of the list view to include hundreds of meds and there needed to be some way to organize it to find what you are looking for. Phase 0 feedback will provide the proper evidnece needed to decide how to invest in filtering and searching.|
|The list view will provide just enough information to identify which med you are looking for, and nothing more. This includes name, strength, dose, last filled date, and status.|The combination of these fields will enable user recognition and create unique cards. Rx # is not easily recognized and instructions are too verbose and likely not unique to a particular prescription.|
|Cards in the list view will include status and a brief plain langauge explainer of that status where needed.| Including statues on the cards allows for sorting alphabetically by status and in the future can be used for easier understanding of filters. However, research showed that statuses were difficult for users to define and so we also included a plain language description to make sure users took the right actions in response. Statuses cannot be easily updated due to PBM Directive 1164.|
|The about medications page will stay around post-phase 0. It will be housed as a child of medications IA-wise.|It includes important information about what is and is not included in the medications tool, which is information that is required to be included within the tool to comply with VA directive 1164.|
|Users must call the automated pharmacy renewal phone number or send a SM to renew an Rx.|Building a push-button renewal functionality would take a lot of work and time, and is not a must have. Relying on phone or SM is at parity with the current tool.|
|All medications, historical, documented, and active will be provided to users in a single list. |  |

</details>


### Post phase 0 possible improvements
<details>
<summary>List of possible improvements</summary>
</br>

None of the following improvements are required, but were discussed during the design of Phase 0 MVP and shelved for future consideration.

* As a user, I can refill multiple prescriptions at once using a refill all button.
* As a user, I can search for and find a prescription by name or reason for use.
* As a user, I can filter my list of meds by status.
* As a user, I can view a description of my filled medication based on NDC.
* As a user, I can view additional information about my prescription based on NDC. This could leverage the Veterans Health Library or Krames.
* As a user, I can initiate a pre-filled secure message to the ordering provider's triage group to renew a medication.
</details>


## Phase 1

## Phase 2
