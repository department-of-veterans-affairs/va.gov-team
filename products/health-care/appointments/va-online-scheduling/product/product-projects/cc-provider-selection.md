## High Level User Need / Problem:
As a veteran, I would like the VAOSR app to automatically find and display eligible community care providers closest to my residential address when booking a community care appointment. I also want my selected community care provider's information to auto populate any required fields into VAOS so I don't have to manually enter or copy-paste this information.

## High Level Technical Problem
Existing source for data - Provider Profile Management System (contains the community care providers (PPMS) - has some limitations based on how it's structured and how it performs.

## Primary hurdles with PPMS:
1. Data reliability & performance - verifying metrics with Facility Locator team based on their experience
2. Duplication of care type results - due to...
3. Mapping of type of care between PPMS and Health Service Taxonomy (no consisting mapping)

## Technical options for using PPMS for data needs to
- Go to PPMS directly
- Repurpose vets-api
  - vets.gov/va.gov has been making use of PPMS endpoints to pull community care provider information into the facility locator for ~2 years
  - this FL experience has illuminated performance/latency issues with PPMS (some endpoint have been throwing 500s when under heavy loads)
  - currently vets-api contains logic for deduping results (ex. returning multiple results for podiatry) 
- MAS endpoint for PPMS data - https://veteran.apps.va.gov/ppms/v1/
  - proxies requests on to PPMS
  - If VAOS does not need to distinguish between provider vs group names this service would work
  - dedup issue would potentially still persist (though could be solved is request made to BE team)

## Recap of discovery with FL team:
- PPMS data  is submitted by all CCN providers
- PPMS is dependent on if individual provider or group provider (sometimes individual provider can also be group provider)
- Facility locator team - in early Nov will be will be getting single call for provider (right now they have to make separate calls for single and group)
- Right now Facility Locator team uses Mapbox directly
- Based on the way the data is structured, Facility Locator team has to perform a depulication of providers 
  - Example - there can be multiple entries for one provider (example is podiatry) 
  - Logic for this is in vets-api
- PPMS serves different purposes - its core focus is not on veteran-facing applications

## Open question:
- Does VAOSR need to factor in DoD and IHS (Indian Health Service) for CC?
- We need to determine the right service (of the 3 options above) for what we need for community care provider selection
   - current VAMF iteration - strictly serves more so as a pass-through; does have concept of single provider
   - VAMF also doesn't dedup
- What are the metrics around latency/performance - FL team is pulling some data that we should be able to use
- Confrm that HSRM does not/ will not have this data
   - Answer: HSRM sources the CC Provider data from PPMS based on user action (they do not store any of the CC provider data)
- For potential snapshot/caching - how up to date would this need to be (on what timeframe?)?
- For potential snapshot/caching - how much data would be need to cache? Do we know?

## Proposed next steps:
1. Get latest performance metrics from Facility Locator team
2. Draft technical proposal where we potentially get a snapshot of PPMS stored in VAMF / EAS architecture via CCSP (Community Care Service Provicer)
    - Pro: allows us to minimize dependencies and have some control for what we need
    - Pro: given the strategy for VAMF/EAS (specifically CCSP in EAS) which is focusing on community care data - makes sense this would live within that framework and also repurpose FHIR spec
    - Pro: by taking the VAMF/EAS approach, we could (theoretically) improve multiple systems across the VA (VAOS, HSRM, Facility Locator)
    - Con: This approach is definitely long term which doesn't give us immediate option for solving for this user/org problem today
3. Design mockup of 'desired' experience to supplement point about needing proper data to enable implementation



