# EVSS -> LH Document Service Migration 

[WIP PR](https://github.com/department-of-veterans-affairs/vets-api/pull/13576)

## Purpose

Document findings and next steps related to DBX-2 (Team Carbs)'s itteration on the migration for from EVSS to Lighthouse relative to the DocumentService switch over

## Context
To date, the itterations on this work are as follows
- Abstraction of work handled by DBX-1
    -  [Top Level Discovery Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57231)
    - [Output - Zenhub Ticket](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/57231)
    - [Output - Github Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57231)
- Implementation of Lighthouse Document Service in our Rails API, handled by ??? (POC - Andrew Herzberg)
    - [Ticket](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/6119)
    - [PR 1](https://github.com/department-of-veterans-affairs/vets-api/pull/13090)
    - PR 2 is forthcomming.  [Slack thread that roughly outlines why](https://dsva.slack.com/archives/C04KHCT3ZMY/p1692294169089089)
- Implement change over WIP
    -[Ticket](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/63417)

## Open Questions
- There is some complexity around the difference between how EVSS received
  documents and how LH does.  Via Andrew Herzberg: ["just to give an idea of the
  changes, the document parameter as well as the file have to be uploaded as
  files in the request body while EVSS has the document parameters as query
  params."](https://dsva.slack.com/archives/C04KHCT3ZMY/p1692294706475599?thread_ts=1692294169.089089&cid=C04KHCT3ZMY)
      - This should be resolved by the provided objects.  However, something to keep in mind when testing

## Observations
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

This takes care of a large part of implementing our switching logic

### Inheritance Problem
[This slack thread lays it out](https://dsva.slack.com/archives/C04KHCT3ZMY/p1692812316346679?thread_ts=1692294169.089089&cid=C04KHCT3ZMY)

### Testing will be most of the work
- Flipper permissions need to be requested by filling out [this ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Cplatform-tech-team-support%2Cops-access-request%2Cflipper-access-request&projects=&template=vetsapi-flipper-ui-access.yaml&title=Flipper+UI+access+for+%5Bindividual%5D). [this Slack announcement](https://dsva.slack.com/archives/C03R5SBELQM/p1691616340610669)
- We will need a rollout plan

## How to Test Locally
1. make sure you have the npm package `pem-jwk` (docs)[https://www.npmjs.com/package/pem-jwk].  you will need this to generate credentials for lighthouse's api
    - `npm install -g pem-jwk`
2. (Follow the steps here to get temporary access to Lighthouses test API)[https://developer.va.gov/explore/api/benefits-documents/sandbox-access].  The following will generate a key and copy it to your clipboard, or just follow the docs
    - `openssl genrsa -out private.pem 2048 && openssl rsa -in private.pem -outform PEM -pubout -out public.pem && pem-jwk public.pem > public.jwk && cat public.jwk | pbcopy``
3. fill out the access request and paste in your temp creds
4. copy your temp OAuth ID key and paste it into... where?
5. Enable the appropriate flipper
    - `Flipper.enable(:disability_compensation_lighthouse_document_service_provider)`
6. TODO: run a the service locally
    - command line?
    - click through?

## Resources
- [Slack thread re Lighthouse Document Service objects in our vets-api Rails app](https://dsva.slack.com/archives/C04KHCT3ZMY/p1692294169089089)
- [Lighthouse docs](https://developer.va.gov/explore/api/benefits-documents/docs?version=current)
- [Instructions for working with the LH sandbox](https://developer.va.gov/explore/api/benefits-documents/client-credentials)
    - WARNING!!! Don't generate your keys from this step in the Repo ^^^ they should be protected like ssh keys

## Action Items
- Code updates : WIP
    - Put in place calls to new services in flippers
        - DONE
    - Resolve the Inheritance problem
        - Probably will require a copying the inheritance chain of objects with the new lighthouse object chain and putting them on a flipper.  Could be more complicated
    - Verify that  `evss_claim_id` on the `EVSSClaimDocument` model is logicially equivalent to `file_number` on the `LighhouseDocument` model.  ATM the code has a 1 to 1 swap out, and if they are used in the same way it would be great to keep it this way.  However this needs to be validated.
    - Review and resolve all comments marked with a `[wipn8923]`.  These park points of interest and potential questions or action items discovered while performing a naive first pass of the code.
    - Probably update specs that specifically reference EVSS classes, e.g.  `spec/requests/documents_spec.rb`
    - Migrate specs from existing EVSS objects to new LH objects
        - LighthouseDocumentUploaderBase (spec/uploaders/evss_claim_document_uploader_base_spec.rb)
        - LighthouseDocumentUploader (spec/uploaders/evss_claim_document_uploader_spec.rb)
        - LighthouseDocument (no existing specs to copy?)
        - Lighthouse::DocumentUpload (spec/jobs/evss/document_upload_spec.rb)
    - Copy the `wrap_with_logging` calls from evss to lighthouse
    
- test locally : TODO
    - Get a lighthouse API key
    - Test objects individually
    - Test for continuity through flow
        - E.G. Make sure that we are calling the correct document models, things like that
      
-  develop roll out plan : TODO
    - Test known EVSS failures against LH, see what may be a problem
    - Testrail seems relevant, since QA will be important.  [VA doc on that here](https://depo-platform-documentation.scrollhelp.site/developer-docs/create-a-project-in-testrail)
        - Mark built a test rail project for the broader migration, may be something in there we can use
    - Mark did this recently and has an example we can use:
        - [his existing roll out plan.  Square our intent with this](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/disability-experience/team-docs/Release%20Plans/DBEX%20Intent%20To%20File%20Endpoint%20Migration%20Release%20Plan.md]
  
