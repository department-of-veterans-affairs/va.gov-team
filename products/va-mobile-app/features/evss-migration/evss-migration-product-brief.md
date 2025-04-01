<!-- Please fill out all of the relevant sections of this template. Please do not delete any areas of this template. The tickets can be updated as the sections are finished and any section that doesn't need to have info should be labeled as NA -->

## Problem Statement

### Current Experience ###

* Many of our Benefits-related services route through the EVSS backend.  With EVSS going away and that functionality moving to the Lighthouse API platform, we will need to update our backend services to pull from LH instead of EVSS.

### Desired Outcomes ###

* App users should have no impact to functionality within the app due to these backend changes.  All functionality should continue to work as expected, potentially more reliably if the LH are more stable (as is hoped).

## Assumptions and Level of Confidence

1. We assume all Lighthouse APIs will be ready in time for us to consume them before the Aug 23 deadline.
2. We assume the LH APIs will provide the same functionality

## Risks

1. We share backend functionality with the VA.gov Benefits teams.  This could cause confusion on who is migrating what functionality at the vets-api layer.
    1.  We will be coordinating witht the Benefits Team 1 to cover all migrations in reusable ways.

## Business Goals
* VA needs to turn off EVSS, migrating to new APIs will allow that.
* Which OCTO and Program goals does this tie to?

## Roadmap

**V1**

* Migrating away from all EVSS services while keeping functionality the same. 

**V2 and beyond**

* As LH evolves and improves the new APIs, we can utilize new functionality.

## Technical Approach

*	Meeting with Benefits Team 1 to discuss backend migration coordinatiion on 2/8/23

## Measuring success 

*	No functionality breaks when moving to new LH APIs

## Stakeholders

* Who within VA do we need to ensure we work with?  Who has ‘veto’ power?

## Open Questions

2/8/23 dicussion with BAC:

which services has the BCAS team already moved to LH?
 - Working on Claims Status, mostly done - hitting Sandbox already
   - there are data changes, Jerek to provide overview of the changes

which services are on the BCAS team's roadmap for integration?
 - Are there any integrations that still need attention to be done before the August deadline? - Not yet
- They are working on Letters next.
   - separate endpoint for the letter content, Mobile team may have to build the integration as BCAS doesn't plan to use it
 - Documents Service after that
 - Rated Disabilities after that
 - Unsure about Payments, 

what steps are needed for us to utilize these?
  - We are using the evss synchronous service now for Claims Status which is the one being migrated by the BCAS team
  - We may need our own LH credentials, preference is to have separate credentials
    - vets-api layer will need to be able to handle multiple credentials


How do we want to keep in touch about this effort going forward?
 - Async in Slack and 1-off meetings as needed [#vfs-evss-service-migration](https://dsva.slack.com/archives/C02CQP3RFFX)


## Important Links



## Background:

The EVSS Data team has modernized the EVSS Data Reference Service to better support the teams and tools using it.

What are the changes?
The EVSS Data Reference Service is now the Benefits Reference Data API on the VA Lighthouse APIs developer platform.

Its key functionality remains the same. Consumers that relied on the EVSS Data Reference Service can continue to meet their needs with the new Benefits Reference Data API, which lets consumers look up the following data for benefits claims: 
·      Contention types 
·      Countries 
·      Disabilities 
·      Intake sites 
·      Military pay types
·      Service branches 
·      Special circumstances
·      States
·      VA medical treatment facilities

There are some differences between this API and the service it replaces such as: 
·      The new API requires an API key.
·      There are some stylistic and naming changes, such as to data types and camelCase.
·      Responses are in JSON instead of HTML.
·      Improvements were made to HTTPS response codes.
·      A 2-character state is now required for the treatment center endpoint.
·      Production and sandbox URLs are now updated.
·      Optional pagination is supported for certain endpoints.

Due to the changes above we will need to migrate to the new Benefits Reference Data API to continue using its data.  We currently rely on the service to obtain data for **claims, disability rating, letters, and payment information**


Reference Material:

Benefits Reference Data API
https://developer.va.gov/explore/benefits/docs/benefits_reference_data?version=current

LightHouse Onboarding Request
https://developer.va.gov/onboarding

### Discovery task (i.e. conversation with another team, review of past research, collaboration with engineering, etc)
<!-- (i.e. conversation with another team, review of past research, collaboration with engineering, etc) --> 

- TBD

### Key Takeaways
<!--What is the work? What did you find in discovery? What information do you now have that should drive Acceptability Criteria  --> 

- Migrate to the new Benefits Reference Data API
- Coordinate with EVSS 
-  Understand/influence ETA as to when the legacy service will be turned off and impacts

### Staging test accounts used to do discovery research
<!-- indicate the accounts you used to get the data we need for design, engineering and QA -->

### Blockers 
<!--Is there anything that keeps us from finishing this feature? Lack of staging accounts? Are there ACs we can't define? Why? -->
