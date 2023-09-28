# Ongoing backup-backup 526 submission reprocessing work

## Purpose
Document remaining backup-backup resubmission work for context sharing and transparency

## Context
[This work follow this discovery and knowledge transfer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/526_failure_batching_and_triage_handoff.md).  The initial batch of ~40k submissions is down to about 500 at the time of writting this document.  These submissions are blocked by known EVSS validation errors.  As these failures are address, the resubmission and testing of these fixes will be documented here.

## Existing EVSS failures
- 377 occurrences of - java.lang.NullPointerException
- 44 occurrences of form526.veteran.currentMailingAddress.militaryPostOfficeTypeCode.IsNotValid (edited) 
- 2 occurrences of form526.serviceInformation.reservesNationalGuardService.obligationTermOfServiceFromDate.IsNotValid
- 118 occurrences of form526.submit.establishClaim.serviceError
- 3 occurrences of gov.va.wss.partner,veteranrecord.ws.client.VeteranRecordWsClientException
- 2 occurrences of form526.veteran.changeOfAddress,endingDate.IsNotValid

## WIP

### Error: militaryPostOfficeTypeCode error
TODO - exact text?

### Status:
Fixed in Staging, needs testing

### Reusable test code:

First, find an example in production

```
subs = Form526Submission.where(submitted_claim_id: nil).where(backup_submitted_claim_id: nil); nil
fails = subs.select { |sub| sub.form526_job_statuses.any? { |stat| stat['error_message']&.match?(/militaryPostOfficeTypeCode/) } }; nil
```

Once you have an example, get the form data and strip out all pii to generate a testable json payload for the next step

```
prod_example = JSON.parse(fails.first.form)
```

use your payload to test against the endpoint

```
# create a testable payload
json = <whatever json payload you came up with>
submission = Form526Submission.last
submission.form_json = json.to_json
submission.save!

# run the adhoc task that tests this endpoint
processor = Sidekiq::Form526BackupSubmissionProcess::Processor.new(submission.id, get_upload_location_on_instantiation: false, ignore_expiration: true)
processor.gather_docs!

# confirm the doc was upload to S3
processor.docs # get filepath
Reports::Uploader.get_s3_link(file_path) # get S3 link
```


### Affected submissions: 142
```
789188,757290,758526,755016,754921,752668,752586,750970,750840,749898,746941,611809,610137,606940,180309,176012,176010,175999,175990,175987,143312,143295,134070,130003,130002,119931,119930,119929,113968,113967,113964,112464,109045,108933,108930,108115,107921,107810,107763,107762,104054,104053,104052,97919,97918,97878,86439,85774,85771,85769,85767,85762,85761,85750,74089,70096,70027,70025,70007,70002,68675,68674,68673,68671,68670,68669,68668,64631,62963,62939,62208,60930,60922,60912,60906,59940,59817,56943,56938,56933,56932,56922,56921,56918,55934,55931,55766,55664,55660,55656,53177,53176,53175,52309,52297,52075,52074,52072,52071,53197,50040,50035,49667,29774,29522,29508,773766,773762,771682,771681,771677,771815,767450,767446,767420,757377,757087,754586,754579,752573,752565,752739,749910,749163,748787,747344,747054,741572,735836,737552,728742,719175,719168,623740,610153,608364,579843,547718,547717,537236,534517,529312
```

### Context
- encountered during initial rebatching work
