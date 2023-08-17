# WIP notes for EVSS -> LH Document Service Migration 

## Purpose

  Document findings and next steps related to DBX-2 (Team Carbs)'s itteration on the migration for from EVSS to Lighthouse relative to the DocumentService switch over

## Context
  To date, the itterations on this work are as follows
  1. Abstraction of work handled by DBX-1.
     a. (Top Level Discovery Ticket)[https://github.com/department-of-veterans-affairs/va.gov-team/issues/57231]
     b. (Output - Zenhub Ticket)[https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/57231]
     c. (Output - Github Issue)[https://github.com/department-of-veterans-affairs/va.gov-team/issues/57231]
  2. Implementation of Lighthouse Document Service in our Rails API, handled by ??? (POC - Andrew Herzberg)
     a. (Ticket)[https://github.com/department-of-veterans-affairs/va-mobile-app/issues/6119]
     b. (PR 1)[https://github.com/department-of-veterans-affairs/vets-api/pull/13090]
     c. PR 2 is forthcomming.  (Slack thread that roughly outlines why)[https://dsva.slack.com/archives/C04KHCT3ZMY/p1692294169089089]
  3. Implement change over - WIP
     a. (Ticket)[https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/63417]

## Open Questions
  - There is some complexity around the difference between how EVSS received documents and how LH does.  Via Andrew Herzberg: ("just to give an idea of the changes, the document parameter as well as the file have to be uploaded as files in the request body while EVSS has the document parameters as query params.")[https://dsva.slack.com/archives/C04KHCT3ZMY/p1692294706475599?thread_ts=1692294169.089089&cid=C04KHCT3ZMY]
  - PR-1 from step two creates two 'sets' of objects.  Roughly speaking, they are the `LighthouseDocuments` objects and the `BenefitsDocuments` objecs.  (See this git diff for context)[https://github.com/department-of-veterans-affairs/vets-api/pull/13090/files].  The first, `LighthouseDocuments` seems like a very clear successor to it's EVSS counterpart, `EvssClaimDocument`s.  File for file, and object for object, it seems like a the new `LighthouseDocument`s object group will be replacing the `Evss::ClaimDocument`s.  So what are `BenefitsDocuments` for?  Are they a part of this switch over?
  - I'm 90% sure that we have a LH staging endpoint to test against.  


## Observiations
### Existing Flippers!
  Someone put a whole bunch of potentially useful guiderails in place for this work.  They look like this
          ```
          if Flipper.enabled?(:disability_compensation_lighthouse_document_service_provider)
            # TODO: create client from lighthouse document service
          else
            client = EVSS::DocumentsService.new(submission.auth_headers)
          end
          client.upload(file_body, document_data)
          ```
  There is a non-zero chance that this work, at least as far as coding goes, is going to be as simple as finding all these old `EVSS::DocumentsService` calls within  flippers and adding the new service stuff.  This will need to be validated in testing.

### Testing will be the work
  Flipper permissions need to be requested by filling out (this ticket)[https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Cplatform-tech-team-support%2Cops-access-request%2Cflipper-access-request&projects=&template=vetsapi-flipper-ui-access.yaml&title=Flipper+UI+access+for+%5Bindividual%5D]
  More context on that in (this Slack announcement)[https://dsva.slack.com/archives/C03R5SBELQM/p1691616340610669]

  Most of the work here is going to be (I think) actually handling the flipper based roll out of this. 

     
     
