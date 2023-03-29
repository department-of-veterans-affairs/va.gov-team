## Summary of Attempt at gathering recent 6 months data
There were over 4,000 Failed 526 Submissions in the past 6 months. We were able to pull data from of them 565. Of those 565 submissions, there were 1282 errors and warnings (oftentimes, more than one error/warning was attached to a submission). They consisted of 853 Errors and 422 Warnings. Errors cause the submission to fail - warnings do not.

### Error Results

| Key | Text | Amount |
| --- | --- | --- |
| form526.disabilities[].ratedDisability.isInvalid | The rated disability being claimed for increase was not found for Disability | 751 |
| form526.serviceInformation.separationLocationCode.isInvalidValue | The separation location code for the claimant is not a valid value | 30 |
| form526.serviceInformation.reservesNationalGuardService.title10Activation.anticipatedSeparationDate Future | title10Activation.anticipatedSeparationDate.Future | 28 |
| form526.disabilities.Size | size must be between 1 and 150 | 14 |
| form526.veteran.homelessness.currentlyHomeless.otherLivingSituation.Size | size must be between 1 and 500 | 11 |
| form526.serviceInformation.reservesNationalGuardService.title10Activation.anticipatedSeparationDate IsNotValid"| a few examples: "Invalid value: 2023-02-29", "Invalid value: 2013-06-31", "Invalid value: 2005-02-29 | 7 |
| form526.directDeposit.accountNumber.Size | size must be between 4 and 17 | 6 |
| form526.disabilities[].serviceRelevance.Size | size must be between 1 and 500 | 2 |
| form526.serviceInformation.ActiveDutyEndDateMoreThan180Days | Service members cannot submit a claim until they are within 180 days of their separation date | 1 |
| form526.serviceInformation.servicePeriods[].activeDutyBeginDate | The active duty start date cannot be prior to the claimants 13th birthday | 1 |
| form526.serviceInformation.Title10PastActiveDutyDate | The Title 10 Activation Date for a claimant currently activated in the Reserves or National Guard is a future date | 1 |
| form526.disabilities.classificationCode.refdataservice.errorResponse | The Reference Data Service was unable to verify the classification code for the disability returned an error response | 1 |

### Warn Results

| Key | Text | Amount |
| --- | --- | --- |
| form526.treatments[].endDateIsNull | Treatment end date is null | 255
| form526.directDeposit.isNull | Direct deposit information was not provided | 146    
| form526.treatments[].startDateIsNull | Treatment start date is null | 14
| form526.disabilities[].isDuplicate | Claimant has added a duplicate disability | 7


### Further context from Kyle Sosskin on `form526.disabilities[].ratedDisability.isInvalid` error

As previously posted in [Slack](https://dsva.slack.com/archives/C04KW0B46N5/p1680098885816749):
The one that looks like it occurs most frequently...
Deals with cases where the veteran starts a claim for increase (or a claim that includes a claim for increase).
This issue happens because we query and store the result, of the veterans rated disabilities, and then never re-check or requery that before submitting, This CURRENTLY causes an error in auto-establishment submission AND the backup paper submission. HOWEVER soon (in a few sprints) this will not cause an error in the backup paper submission path.

**Example situation that causes this error:**
01/20/2023 - Vet starts filing 526 claims
01/20/2023 - During that filling out of the form, we query for rated disabilities for them to select, they select "Leg Pain"
01/20/2023 - We save the in-progress form for the vet so they can come back later to fill it out if they dont go the whole way to submission in this session, including the rated disability, "Leg Pain"
01/20/2023 - Vet abandons form half way
06/01/2023 - Vet comes back to complete the form, previously saved in-progress values populate so they can pickup where they left-off
06/01/2023 - Vet completes form and presses "Submit", the value for the rated disabilty string is "Leg Pain", however, in the time from when they started (01/20/2023), to now (06/01/2023), their rated disability was changed from "Leg Pain" to "Lower Leg Pain", IN THE VA's system, so it gives that error


### Script for gathering recent 6 months research
```
id = "<redacted id from 6 months ago, id is indexed, created_at is not, so this is faster>"
errors = []
count = 0
Form526Submission.where("id >= #{id}").where('submitted_claim_id IS NULL').pluck(:id).each do |id|
  puts "#{Time.now} - #{id}"
  claim = Form526Submission.find(id)
  begin
    EVSS::DisabilityCompensationForm::NonBreakeredService.new(claim.auth_headers)
      .validate_form526(JSON.parse(claim.form_json)['form526'].to_json)
  rescue => e
    errors << e
  end
end
```

## Results of Kyle's Initial Data Pull (5 Year Span)
