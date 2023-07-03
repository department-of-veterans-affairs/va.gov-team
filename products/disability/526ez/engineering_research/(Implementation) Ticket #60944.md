# WIP Notes for 60944
[Ticket](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/60944)

"Add logging around evidence upload"

## Purpose
Document work, problems, decisions encountered while implementing logging around our 526 Evidence upload flow

## Scope
IN: braindump, track progress, remember stuff
OUT: 100% visibility or refinement.  

## Notes: 
- What pages fall under the category of “evidence upload”?
  - /disability/file-disability-claim-form-21-526ez/supporting-evidence/orientation
  -  disability/file-disability-claim-form-21-526ez/supporting-evidence/service-treatment-records
  - disability-claim-form-21-526ez/supporting-evidence/service-treatment-records-upload
  - disability/file-disability-claim-form-21-526ez/supporting-evidence/evidence-types-bdd
  - disability/file-disability-claim-form-21-526ez/supporting-evidence/private-medical-records
  - disability/file-disability-claim-form-21-526ez/supporting-evidence/private-medical-records-upload
  - /disability/file-disability-claim-form-21-526ez/supporting-evidence/private-medical-records-release
    - This is probably handled by another ticket..?
  - disability/file-disability-claim-form-21-526ez/supporting-evidence/additional-evidence
  - /disability/file-disability-claim-form-21-526ez/supporting-evidence/summary
- Seems to be step 3 of 5 [(per the flow doc)](https://app.mural.co/t/coforma8350/m/coforma8350/1686317911061/2ff3d4b4c2d9d84eaa61e9eda95a533041f137da?sender=uf9a509d178428eccea215628)
- Odd… i made it all the way past document upload (step 3) without hitting my api??
  - Possible this is a dev env config?
  -  Or is the front end really just shooting straight to… somewhere?
-  Route hit for deletion of file
    - http://localhost:3000/v0/disability_compensation_in_progress_forms/21-526EZ
    - Not reflected in api server logs?? Wtf why
      - Logging was successful, so probably a foreman log level config
- Form Attachments are polymorphic, but in a weird way… class names are hardcoded : /  wonder why?
  - Not worth getting derailed over
- The SentryLogging module is effectively breaking our logging.  It prevents records from going to DataDog : (
  - We should get rid of it.
- Should we be logging?
  - The controller action being called?
    - Is anything request specific valuable?  Doesn’t really seem like it…
  - The model upload action
    - Def, lots of valuable context here like user id w
    - Maybe upload duration with Benchmark
## Implementation
We are going to add logging around the controller Create action with request information, and some lower level logging around the actual upload, aka CarrierWave .store!

### Things to log
- User_uuid
  - Action being performed (Form ID or action description)
  - Up or Downstream system involved
  - If a retry-able action
  - Attempt counter
  - If will be retried or if it is the final attempt
  - Success or failure status
  - Http status from up/downstream service
  - Http response body if NOT a 200 (successful) response
  - Any ID that is the result of a creation, update or delete (IDs returned from third-party services, internal VA.gov DB record IDs)
  - Exception message/stack-trace, if fails outside/before/after external call
  - Duration










