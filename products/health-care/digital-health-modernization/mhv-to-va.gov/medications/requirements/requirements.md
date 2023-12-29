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


## Table of Contents  

- [Overview](#overview)
- [Phase 0](#phase-0)

## Overview 

This document lays out the requirements for Medications on VA.gov. It is broken out by the phases. We expect additional functionality to be iteratively added to the tool over time during the phased rollout. 

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

### Requirements

<details>
<summary>List view of all medications</summary>
</br>

This page provides the user with a list of their medications on file at the VA.

#### Content
Shipped product should reflect [Phase 0 content document](https://dvagov-my.sharepoint.com/:w:/r/personal/laura_willwerth_va_gov/Documents/MHV%20medications%20(shared%20folder)/Medications_working%20content%20document.docx?d=waac96f3da7604bb294d785bdf2381597&csf=1&web=1&e=W3q0N5).

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
  * By last filled or documented date
  * Alphabetically by status
  * Alphabetically by name
* For each medication, a user should be able to click on the first line of the card (name, strength, and form) to view detailed information about that medication
* For each active prescription in the list with no original fill
  * Ability to fill this prescription by pressing a single button
  * When pressed, provide immediate loading indicator inline
  * If successful, provide inline success alert and update card information
  * If unsuccessful, provide inline error alert
* For each active prescription in the list with refills left
  * Ability to refill this prescription by pressing a single button
  * When pressed, provide immediate loading indicator inline
  * If successful, provide inline success alert and update card information
  * If unsuccessful, provide inline error alert
* For each medication in the list that needs renewed (active with no refills or inactive)
  * Provide link to information about how to renew a medication
</details> 

<details>
<summary>Details view for each medication</summary>
</br>

This page provides the user with details for a single medication on file with the VA.

#### Content 
Shipped product should reflect [Phase 0 content document](https://dvagov-my.sharepoint.com/:w:/r/personal/laura_willwerth_va_gov/Documents/MHV%20medications%20(shared%20folder)/Medications_working%20content%20document.docx?d=waac96f3da7604bb294d785bdf2381597&csf=1&web=1&e=W3q0N5).

* H1 for this page should be the name, strength, and form of the medication
* VA prescription details should include 
   * Last filled date
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
     * Medication description

##### Functionality 

* Link to allergies list
* Ability to refill this prescription (when applicable)
* Ability to renew this prescription (when applicable)
* Learn more about a status in context
* Tracking alert that shows
* For each package in shipment
  * Tracking number and link 
  * Date shipped
  * Delivery service
  * Other prescriptions in package 
* This alert should go away 15 days after most recent shipped date

Fill or refill error alert
* Tell patient if a med was unable to be filled due to issue. \
* This should be a dismissable alert
</details>

#### Refilling a medication
* When a med is active, a refill is not in process, and there are refills left, a user should be able to request a refill by pressing a button. 
* For the first version of this tool, a user must click refill on each individual meds. There is no bulk med refill functionality. 
* When a prescription refill is in process, remove the ability to refill and provide a pithy explainer that the refill is in process. The button should be replaced by the estimated fill date. 
* Once a med has been dispensed, start the process over again.

#### Renewing a medication
For MVP:
* 15 days before X date (need to decide which one), alert user that a VA prescription has **no** refills left and what actions a user should take to get a VA prescription renewed. 

</details>

### Phase 0 assets
* Shipped product should exactly align with the content written in [Phase 0 content document](https://dvagov-my.sharepoint.com/:w:/r/personal/laura_willwerth_va_gov/Documents/MHV%20medications%20(shared%20folder)/Medications_working%20content%20document.docx?d=waac96f3da7604bb294d785bdf2381597&csf=1&web=1&e=W3q0N5)

Post Phase 0:
* As a user, I can refill multiple prescriptions at once using a refill all button.
* When a med is active, a refill is not in process, and there **no** refills left, a user should be able to request a renewal by pressing an action link. 
* When pressing the action link, initiate a pre-filled secure message to the ordering provider's triage group. In this screen, also provide a number to call AudioCare. A user should be able to edit the triage group name and also add a note.
* Process form or something that shows where the prescription is in the process

## Phase 1

## Phase 2
