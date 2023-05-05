# Requirements: Medications on VA.gov v1.0

## Change Log

| Date           | Changed By       | Description of Change                                                                                               |
|----------------| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| 4/26/23        | Coulton Bunney   |Created document                                                                                                     |
| 4/27/23        | Coulton Bunney   |Added initial draft of overview and use cases                                                                        |
| 4/28/23        | Coulton Bunney   |Added initial draft of requirements                                                                        |

## Table of Contents
- [Overview](#overview)
- [Use cases](#mvp-use-cases)
- [Requirements](#requirements)

## Overview
This document lays out the requirements for the MVP version of Medications on VA.gov we plan to ship to Phase 0. We expect additional functionality to be iteratively added to the tool over time during the phased rollout. 

## MVP Use cases
1. As a user, I can see a list of all the medications I have on file with the VA. This includes both active medications and inactive/historical medications, and non-VA medications captured by VA staff. For the MVP, this does not include medications that are only on file at Cerner-based VA facilities OR medications self-entered by the Veteran.  
2. As a user, I understand which of my VA prescriptions are fillable, refillable, which need renewed, and which cannot be renewed. 
3. As a user, I can submit fill/refill requests for VA prescriptions that are currently active and understand where the refill is in the process: parked (and therefore have fills left), understand whether they are in the process of being filled, and when the medication has been dispensed. 
4. As a user, I can submit refill requests for VA prescriptions that are currently active and have refills left, understand whether they are in the process of being refilled, and when the medication has been dispensed. 
5. As a user, I know when recently dispensed VA prescriptions have been shipped by CMOP or local VA facility, and I can track their shipment progress and any changes that may occur with the shipment.
6. As a user, I understand what actions I need to take to renew active VA prescriptions that have no refills left. 
7. As a user, I understand what actions I need to take to get a new prescription for inactive medications. 
8. As a user, I am notified when a submitted fill or refill request is unable to filled or refilled, and undestand how to resolve the issue. 
9. As a user, I can view key data about a medication, some of which is outlined in VHA Directive 1164. 
   * Name of drug
   * Strength/dosage of drug
   * Instructions/directions for use (referred to as Indications and SIG)
   * Source of medication information (VA, Non-VA, Remote)
   * Non-1164 requirements
     * Date prescription was ordered
     * Who ordered the prescription, and their facility
     * RX #
     * Number of refills left and quantity for each fill
     * Date prescription will expire
10. As a user, I can see a timeline of past fills/refills/renewals for each prescription.
    * For each past fill 
      * Date and time of fill request
      * Date and time requested medication was dispensed
      * Date and time dispensed medication was shipped
      * Assosciated tracking number
      * Any errors
    * For each past refill 
      * Date and time of refill request
      * Date and time requested medication was dispensed
      * Date and time dispensed medication was shipped
      * Assosciated tracking number
      * Any errors
    * For each past renewals
      * Date and time of renewal
      * Person who renewed


## Requirements

There should be two primary page patterns for medications
- List view of all medications on file at the VA
- Details view for each medication in list 

---

### Page: List view

#### H1
Medications

#### Content
* Inform user what is included in the list of medications 
* Inform user what is not included in the list of medications 
* Link to glossary of status and date definitions 
* For each medication in list 
  * name and dosage of medication
  * Rx #
  * Status
  * Refills left
  * Last dispensed date
  * Tracking number if available
    * Should be available for up to 15 days after a prescription has shipped
    * After 15 days, do not show the tracking number

#### Possible alerts
* Tell patient to go to Cerner to manage prescriptions
* Tell patient if a med was unable to be filled due to issue. This should be a dismissable alert.

#### Functionality 
* Print medication list + allergy list
* Download medication history + allergy list as PDF
* Download medication history + allergy list as TXT
* Filter list by status
* Link to allergies list
* For each medication in the list
  * Ability to refill (when applicable)
  * Ability to renew  (when applicable)
  * Ability to review more details
* List should be paginated, with 20 medications per page
* Learn more about a status in context

---
### Page: Details view
#### H1
< Name and dosage of medication >

#### Content 
Details should include 
* Rx #
* Instructions 
* Quantity 
* Refills left
* Status
* Ordered on date
* Expiration date
* Timeline of past fills, refills renewals
    * For each past fill 
      * Rx #
      * Date and time of fill request
      * Date and time requested medication was dispensed
      * Date and time dispensed medication was shipped
      * Image
      * Any errors
    * For each past refill 
      * Rx #
      * Date and time of refill request
      * Date and time requested medication was dispensed
      * Date and time dispensed medication was shipped
      * Image
      * Any errors
    * For each past renewals
      * Date and time of renewal
      * Person who renewed

#### Possible alerts

Tracking alert that shows
* For each package in shipment
  * Tracking number and link 
  * Date shipped
  * Delivery service
  * Other prescriptions in package 
* This alert should go away 15 days after most recent shipped date

Fill or refill error alert
* Tell patient if a med was unable to be filled due to issue. \
* This should be a dismissable alert


#### Functionality 
* Print page + allergy list
* Download this medication record + allergy list as PDF
* Download this  medication record + allergy list as TXT
* Link to allergies list
* Ability to refill this prescription (when applicable)
* Ability to renew this prescription (when applicable)
* Learn more about a status in context
---
### Refilling a medication
* When a med is active, a refill is not in process, and there are refills left, a user should be able to request a refill by pressing a button. 
* For the first version of this tool, a user must click refill on each individual meds. There is no bulk med refill functionality. 
* When a prescription refill is in process, remove the ability to refill and provide a pithy explainer that the refill is in process. The button should be replaced by the estimated fill date. 
* Once a med has been dispensed, start the process over again.

### Renewing a medication
For MVP:
* 15 days before X date (need to decide which one), alert user that a VA prescription has **no** refills left and what actions a user should take to get a VA prescription renewed. 

Post MVP:
* When a med is active, a refill is not in process, and there **no** refills left, a user should be able to request a renewal by pressing an action link. 
* When pressing the action link, initiate a pre-filled secure message to the ordering provider's triage group. In this screen, also provide a number to call AudioCare. A user should be able to edit the triage group name and also add a note. 



