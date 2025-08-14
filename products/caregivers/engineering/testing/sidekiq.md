# Testing Sidekiq Job
The 10-10CG form has two sidekiq jobs. These are some helpful tools to test them. 

## Form1010CG::SubmissionJob
This job is used to submit the form to mulesoft. It formats the form data, generates a filled out pdf version of the form, and submits both to the mulesoft api. 

### Testing the submission job failure logic:
These can be used from a rails console to trigger different types of job failures.


This can be used to generate a job that will fail. It passes an invalid id so that it does not find any saved claim, so it fails instantly. It is useful to test the retry logic without any additional info.
```
Form1010cg::SubmissionJob.perform_async('not a valid id')
```

This script can be used to generate a submission job for a claim that will throw an error, but contains an email so that the failure sends a failure notification email via VANotify. 

```
form = {:veteran=>{:email=>"my.email@va.gov"}}.to_json
cg = SavedClaim::CaregiversAssistanceClaim.new(form:)
cg.save(validate: false)
Form1010cg::SubmissionJob.perform_async(cg.id)
```

This script can be used to generate a job that fails, but does not send an email since the form does not have an email

```
form = {}.to_json
cg = SavedClaim::CaregiversAssistanceClaim.new(form:)
cg.save(validate: false)
Form1010cg::SubmissionJob.perform_async(cg.id)
```
