# EVSS to Lighthouse Migration Delivery Plan for 526ez

## Goals
EVSS is a legacy set of services that is being sunset and those services are being migrated into various Lighthouse APIs. Lighthouse is a VA in-house infrastructure program that develops, manages and supports APIs and other VA related technical infrastructure.

The goal of this initiative is to migrate any EVSS API endpoints the 526ez product uses, to use the new Lighthouse API endpoints, without disrupting the Veteran experience on the 526ez.

## Scope
Endpoints the 526ez uses that need to be migrated:
- Intent to File    
- Rated Disabilities    
- Submit     
- Benefits Claims Service     
- GetPDF     
- PPIU (Direct Deposit)    
- PCIU (Prefill)    
- Document Service    
- Benefits Reference Data   


Out of Scope: 
- Validate - is not used today so migration is not required (update June 2024 - Team 2 is migrating this endpoint for testing purposes)
- Common API - removed from scope because Veteran Verification API is available as alternate

Delivery deadline: Original sunset date for EVSS August 2023 - new date TBD

## Relevant Links
[Release plans](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/disability-experience/team-docs/Release%20Plans)    
[Lighthouse Migration Status Page](https://confluence.devops.va.gov/pages/viewpage.action?spaceKey=VAExternal&title=VA.gov+Consumer+API+Integration+to+Lighthouse+API+Status+Tracking+-+EVSS+Modernization)     
[Discovery Notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez/evss-to-lighthouse-migration)     
[EVSS: Va.gov Consumer Playbook - Lighthouse](https://github.com/department-of-veterans-affairs/lighthouse-ux/blob/master/Benefits%20and%20Appeals%20Research/2023-05-EVSS-Playbooks-Draft/Draft%20EVSS%20Playbook%20Template.md)     

## Risks / Impediments
External dependency: Lightouse endpoint availability in Lighthouse staging & production environments

## Delivery Status of 526ez Endpoints
|Endpoint|Description for use|Lighthouse Update               | DBEX Update|Notes|
|--------|--------------------------------|--------------------------------|------------|-----|
|Intent to file ||In production|100% in production| Endpoint remains stable. |
|Submit || In production, resolving bugs. |In development| Endpoint is needed to complete release of the 2022 version of the 526ez. Previous version not synchronous, new endpoint version will provide a synchronous response except for 526 PDF upload. |
|Benefits claims service|| In production|100% in production| Rolled back April 2024 for Employee Experience release; resumed May 2024. |
|Generate PDF||In production|In development| Team 2 |
|Rated Disabilities|| Bug fix re-release to LH staging and production 5/20/24|On hold, ready to resume release||
|PPIU (Direct Deposit) ||In production|100% in production| Endpoint remains stable. |
|PCIU (Prefill) ||Original notes were to migrate to VA Profile, not to LH. However, there are some 526-specific calls that VA Profile does not support so migration still needed. |Development complete, release paused.|| Address error rate too high to proceed with confidence, on hold.|
|Document Service||In development| In development| Team 2 |
|Benefits Reference Data(BRD) API||In production|On hold, ready to resume release| Validation of monitoring and canary launch next |


## Delivery Plan for Remaining Work
Timeline: Exact dates TBD based on priorities.

Recommended approach:
### Now  (May - July 2024) 
- Submit Migration (Team 1)
  - Release Plan
  - DataDog Dashboard Setup
  - Logic updates needed to the synchronous response version of the endpoint / updates to transformation service
  - Canary Launch
  - Staggered release monitoring 
- Generate PDF Migration (Team 2)
  - Scope TBD
- Resume Benefits Claims Service (turned off April 2024 for Employee Experience team release)
  - Update monitoring in DataDog

### Next (July - September 2024) 
- Rated Disabilities
  - Validate Lighthouse bug fix
  - Staggered release monitoring
- Benefits Reference Data (BRD)
  - Increase monitoring in DataDog
  - Canary launch
  - Staggered release monitoring
- PCIU (Prefill)
  - Coordinate with VA Profile on address errors
  - Resume staggered release
- Document Service (Team 2)
  - Shared Lighthouse Service for document upload jobs
  - BDD Instructions submit to EVSS job migrated to Lighthouse
  - Veteran Uploaded Documents submit to EVSS job migrated to Lighthouse
  - Form 0781 and Form 0781a submit to EVSS job migrated to Lighthouse
  - Datadog Dashboard setup
  - Staggered Release Monitoring (all jobs will be migrated separately and rolled out separately)
### Later (September 2024+ )
- Decommission migrated endpoints
  - Intent to File
  - Benefits Claims Service
  - PPIU (Direct Deposit)
  - Submit
  - GeneratePDF
  - Rated Disabilities
  - BRD
  - Document Service
