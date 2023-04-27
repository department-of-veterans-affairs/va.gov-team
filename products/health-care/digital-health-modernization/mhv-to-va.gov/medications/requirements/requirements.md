# Requirements: Medications on VA.gov v1.0

## Change Log

| Date           | Changed By       | Description of Change                                                                                               |
|----------------| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| 4/26/23        | Coulton Bunney   |Created document                                                                                                     |
|                |                  |                                                                                                                     |

## Overview
This document lays out the requirements for the MVP version of Medications on VA.gov we plan to ship to Phase 0. We expect additional functionality to be iteratively added to the tool over time during the phased rollout. 

## Use cases
1. As a user, I can see a list of all the medications I have on file with the VA. This includes both active medications, and inactive/historical medications. 
2. As a user, I understand which of my medications are fillable, refillable, which need renewed, and which cannot be renewed. 
3. As a user, I can submit fill requests for medications that are currently active: parked (and therefore have fills left), understand whether they are in the process of being filled, and when the medication has been dispensed. 
4. As a user, I can submit refill requests for medications that are currently active and have refills left, understand whether they are in the process of being refilled, and when the medication has been dispensed. 
5. As a user, I know when recently dispensed medications have been shipped by CMOP or locally, and I can track their shipment progress.
6. As a user, I understand what actions I need to take to renew active medications that have no refills left. 
7. As a user, I understand what actions I need to take to get a new prescription for inactive medications. 
8. As a user, I am notified when a submitted fill or refill request is unable to filled or refilled, and undestand how to resolve the issue. 
9. As a user, I can view key data about a prescription, some of which is outlined in VHA Directive 1164. 
   * Name of drug
   * Strength/dosage of drug
   * Instructions/directions for use
   * Source of medication information (VA, Non-VA, Remote)
   * Non-1164 requirements
     * Date prescription was ordered
     * Who ordered the prescription, and their facility
     * RX #
     * Number of refills left and quantity for each fill
     * Date prescription will expire
11. As a user, I can see a timeline of actions for each prescription.
    * Date and time for each fill request
    * Date and time for each refill request
    * Date and time for each time a fill or refill has been dispensed
    * Date and time each time a prescription has been shipped or picked up


## Requirements
