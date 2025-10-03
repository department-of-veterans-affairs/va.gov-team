# Product Outline - Travel Pay
Last Updated: October 3, 2025 

## Overview
The legacy Beneficiary Travel Self-Service System (BTSSS) is a standalone web application that allows Veterans to submit and manage claims for reimbursement of mileage and other travel related expenses to and from health care appointments. 

The goal of this body of work is to improve the tool and accessibility of the beneficiary travel system and experience. As part of our mission to improve Veteran’s access to care, the existing claim submission system and processes need to be integrated more intentionally with VA.gov and the VA Health and Benefits (VAHB) mobile application. 

## Problem Statement
The legacy BTSSS system is siloed off from other systems & services. Veterans cannot easily discover, access, authenticate into and complete travel claims using the portal. Interviews done with Veterans for a homepage iteration project in 2022 identified the BTSSS system as a serious pain point.  The pain centered around two areas: 
1) having to log into BTSSS despite being logged into VA.gov, and 
2) the user experience of BTSSS itself. 

One of the Veterans interviewed shared that he stopped filing travel reimbursement claims altogether due to the overall poor experience.  (Supporting links to be provided.) 

Submitting travel reimbursement claims is a very common task for Veterans and Caregivers.  Depending on a Veteran’s specific medical needs and their proximity to their provider’s location there can be numerous claims submitted each month. The process should be as simple and seamless as possible.

UPDATE: As of late 2022 Veterans can access VA.gov and not have to log in again on BTSSS. So that resolved one issue. However, the poor user experience still needed to be addressed. 

## Desired User Outcomes
* A seamless and positive health-care travel related reimbursement claim creation, submission and management experience for Veterans and caregivers on the VA.gov website and the VAHB mobile app. 
* Ability to interact with travel claim functionality where it is needed by leveraging an API-first approach.
*	Enjoy a simple and intuitive experience that meets all VA accessibility, design and performance standards.
*	Increased number of claims filed successfully overall.
*	Positive feedback through Medallia 

## Undesired User Outcomes
*	Continued inefficiencies when moving between BTSSS and the new platforms
*	Confusion in the claim submission or reimbursement process in the new platforms
*	Continued frustration with the claims submission process through the new platforms.
*	Negative impact on VTP staff.

## Desired Business Outcomes
*	Increased number of claims filed successfully through new platform vs BTSSS.
*	Increased user satisfaction rating
*	Increased travel claims submission accuracy
*	Decrease the number of manually reviewed claims.
*	Positive user survey feedback received.
*	Increased claim auto-adjudication rate

## Undesired Business Outcomes
*	Reduced number of claims filed overall. 
* Increased complaints through the contact center
*	Creating additional work for VTP staff
*	Re-writing the BTSSS backend, business rules, or processing pipelines

## Measuring Success
**Key Performance Indicators (KPIs)**
*	Data was not available at the time the project was started so baseline values are not available. (Google Analytics loses the user as soon as they click the link to file a claim.)
*	Steady increase of overall claim submission quantity. (YoY)
*	Positive shift in claim submission volume from BTSSS to VA.go ecosystem (web + mobile).

    <img width="675" height="223" alt="image" src="https://github.com/user-attachments/assets/93195568-8b33-402b-827d-7f530a0b6b02" />

**Objectives and Key results (OKRs)** 
*	Replicate the functionality currently available within the legacy BTSSS portal. 
    * Key result: Full functional parity for Veterans = 100%
    * Key result: Full functional parity for Caregivers = 100%
    * Key result: Full functional parity for Donors = TBD
*	Improve the Veteran’s and Caregivers’s experience operating in VA.gov and on the VAHB mobile app. (DELETE LATER: usability) 
    * Key result: Increase CSAT score by X% / # of points
    * Key result: Increase number of users who file a claim through VA.gov by X%
*	Improve reporting of beneficiary travel claims digital tools usage
    * Key result: Can accurately track migration progress from BTSSS to VA.gov
    * Key result: Can establish baseline (MoM and YoY) metrics for the VA.gov experience
*	Decrease time to payment.
    * Key result: 90% of SMOCs submitted through VA.gov are auto adjudicated
    * Key result: 90% of claims are eligible for immediate approval and payment status

# Solution Approach
________________________________________
## Supporting Research
* Functionality available on the legacy BTSSS portal. (I will create and link a GH page for this document.)
*	Partner with other teams to integrate identified functionality on BTSSS into new platforms.
       OCTO                  VTP          VEO        Call Center        Travel Pay API (BHI)
 
## Strategic Initiatives
  * Simple, Mileage-Only Claims (SMOC) 			
  * Claims Status List
  * Additional Claim Details			
  * Complex Claims 
  * Community Care Appointments				
  * Challenging Mileage
  * Creating Missing Appointments

## [Launch Strategy, Dates & Features](https://github.com/orgs/department-of-veterans-affairs/projects/1713/views/2?sliceBy%5Bvalue%5D=%F0%9F%9A%97+Ursa+Minor+%28Travel%29)

