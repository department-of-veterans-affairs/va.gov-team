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
id = "<Check execution history table for last used id.>" 
pattern = Regexp.new(/\[\d+\]/).freeze
id = 1676600
ids = []
ids = Form526Submission.where("id >= #{id}").where('submitted_claim_id IS NULL').pluck(:id)
errors = Hash.new(0)
ids.each do |id|
    puts "#{Time.now} - #{id}"
    claim = Form526Submission.find(id)
    begin
      EVSS::DisabilityCompensationForm::NonBreakeredService.new(claim.auth_headers)
        .validate_form526(JSON.parse(claim.form_json)['form526'].to_json)
    rescue => e
        if e.respond_to?(:messages)
            e.messages.each do |message|
                message_str = message.to_s
                if pattern.match?(message_str)
                    message_str [pattern] = "[]"
                end
                errors[message_str] += 1 
            end
        else
            errors[e.message] += 1 
        end
    end
end
```

## Execution Details
| Run Date | Starting ID | Ending ID | Approximate Time Range |
| --- | --- | --- | --- |
| 2023-07-14 | 1676600 | 2055980 | 6 months (2023-02-13 to 2023-07-14) |

<details>
  <summary>2023-07-14: 6 month check</summary>

  | Key | Text | Amount |
  | --- | --- | --- |
  |form526.disabilities[].ratedDisability.isInvalid|The rated disability being claimed for increase was not found for Disability|2005|
  |form526.treatments[].endDateIsNull|Treatment end date is null|1296|
  |form526.directDeposit.isNull|Direct deposit information was not provided|274|
  |form526.serviceInformation.reservesNationalGuardService.title10Activation.anticipatedSeparationDate.Future|must be in the future|97|
  |form526.serviceInformation.Title10PastActiveDutyDate|The Title 10 Activation Date for a claimant currently activated in the Reserves or National Guard is a future date|33|
  |form526.disabilities.Size|size must be between 1 and 150|129|
  |form526.directDeposit.accountNumber.Size|size must be between 4 and 17|26|
  |form526.veteran.homelessness.homelessnessRisk.otherLivingSituation.Size|size must be between 1 and 500|14|
  |form526.disabilities[].isDuplicate|Claimant has added a duplicate disability| 44|
  |java.lang.NullPointerException|An exception occurred on the server.  The request cannot be fulfilled. [java.lang.NullPointerException]. null|7|
  |form526.serviceInformation.reservesNationalGuardService.title10Activation.anticipatedSeparationDate.IsNotValid|Invalid value: 2005-02-29|2|
  |form526.serviceInformation.separationLocationCode.isInvalidValue|The separation location code for the claimant is not a valid value|2|
  |form526.treatments[].startDateIsNull|Treatment start date is null|60|
  |form526.serviceInformation.servicePeriods[].activeDutyBeginDate|The active duty start date cannot be prior to the claimants 13th birthday|4|
  |form526.validate.load.currentDisabilities.serviceError|Error calling external service to load claimants current disabilities during Validate|1|
  |form526.disabilities[].serviceRelevance.Size|size must be between 1 and 500| 1|
  |form526.serviceInformation.ActiveDutyEndDateMoreThan180Days|Service members cannot submit a claim until they are within 180 days of their separation date|20|
  |form526.serviceInformation.ConfinementPeriodOverlap|Begin and end dates for a period of confinement overlap with the dates for another period of confinement|2|
  |form526.serviceInformation.reservesNationalGuardService.title10Activation.anticipatedSeparationDate.IsNotValid|Invalid value: 2023-11-31|2|
  |form526.serviceInformation.reservesNationalGuardService.title10Activation.anticipatedSeparationDate.IsNotValid|Invalid value: 2023-09-31|1|
  |form526.disabilities[].name|must match ([a-zA-Z0-9\\\\-'.,/\\\\(\\\\)]([a-zA-Z0-9\\\\-',. ])?)+$|25|
  |form526.serviceInformation.reservesNationalGuardService.title10Activation.anticipatedSeparationDate.IsNotValid|Invalid value: 2023-02-29|2|
  |ServiceUnavailableException|EVSS::DisabilityCompensationForm::ServiceUnavailableException|1|
</details>


<details>
  <summary>Results of Kyle's Initial Data Pull (5 Year Span)</summary>
  
  | Key | Text | Amount |
  | --- | --- | --- |
  | form.disabilities[].ratedDisability.isInvalid | The rated disability being claimed for increase was not found for Disability | 10555 |
  | form.serviceInformation.reservesNationalGuardService.titleActivation.anticipatedSeparationDate.Future | must be in the future   | 1941 |
  | form.veteran.preferredVbmsName.firstName.Pattern | "must match ""([a-zA-Z0-9-/']+( ?))+$"""   | 1930 |
  | form.veteran.currentMailingAddress.NotNull | may not be null   | 459 |
  | header.va_eauth_birthdate.isNull | Date of Birth is missing | 143 | 
  | form.treatments[].startDate.year.Pattern | "must match ""^[1-9]\d{3}$"""   | 118 |
  | form.serviceInformation.TitlePastActiveDutyDate | The Title 10 Activation Date for a claimant currently activated in the Reserves or National Guard is a future date   | 117 |
  | form.disabilities.Size | size must be between 1 and 150   | 62 |
  | form.serviceInformation.servicePeriods[].activeDutyBeginDate | The active duty start date cannot be prior to the claimants 13th birthday   | 59 |
  | form.disabilities[].disabilityActionTypeNONE.ratedDisability.isInvalid | An attempt was made to add a secondary disability to an existing rated Disability. The rated Disability could not be found   | 57 |
  | form.serviceInformation.alternateNames.AlternateNameDuplicate | Names that you served under cannot be entered more than once   | 46 |
  | form.serviceInformation.separationLocationCode.isInvalidValue | The separation location code for the claimant is not a valid value   | 46 |
  | form.standardClaim.NotNull | may not be null   | 36 |
  | form.veteran.homelessness.homelessnessRisk.otherLivingSituation.Size | size must be between 1 and 500   | 30 |
  | form.disabilities[].serviceRelevance.Size | size must be between 1 and 500   | 29 |
  | form.disabilities[].name.isInvalidSize | must be between 1 and 255 characters   | 28 |
  | form.directDeposit.accountNumber.Size | size must be between 4 and 17   | 27 |
  | form.veteran.currentMailingAddress.militaryPostOfficeTypeCode.IsNotValid | Invalid value: APO    | 24 |
  | form.veteran.currentMailingAddress.militaryPostOfficeTypeCode.IsNotValid | Invalid value: apo   | 23 |
  | form.treatments[].center.name.Pattern | "must match ""([a-zA-Z0-9""/&()\-'.,# ]([a-zA-Z0-9()\-'.,# ])?)+$"""   | 21 |
  | form.veteran.changeOfAddress.ChangeOfAddressBeginningDate | The Beginning Date can not be in the past for a temporary address   | 16 |
  | header.va_eauth_birlsfilenumber.Invalid | Size must be between 8 and 9 | 14 | 
  | form.disabilities[].specialIssues.IsNotValid | Invalid value: specialIssues   | 11 |
  | form.treatments[].TreatmentPastActiveDutyDate | The start date for a treatment record cannot be prior to the earliest period of service   | 11 |
  | form.veteran.currentMailingAddress.militaryPostOfficeTypeCode.IsNotValid | Invalid value: Apo   | 11 |
  | form.serviceInformation.ActiveDutyEndDateMoreThanDays | Service members cannot submit a claim until they are within 180 days of their separation date   | 10 |
  | form.serviceInformation.reservesNationalGuardService.titleActivation.anticipatedSeparationDate.IsNotValid | Invalid value: 2022-02-29   | 9 |
  | form.veteran.currentMailingAddress.militaryPostOfficeTypeCode.IsNotValid | Invalid value: fpo   | 9 |
  | form.veteran.currentMailingAddress.militaryPostOfficeTypeCode.IsNotValid | Invalid value: FPO    | 8 |
  | header.va_eauth_birlsfilenumber.isNull | File Number is missing | 8 | 
  | form.veteran.homelessness.pointOfContact.pointOfContactName.Pattern | "must match ""([a-zA-Z0-9-/']+( ?))*$"""   | 8 |
  | form.serviceInformation.reservesNationalGuardService.titleActivation.anticipatedSeparationDate.IsNotValid | Invalid value: 2023-02-29   | 7 |
  | form.veteran.currentlyVAEmployee.NotNull | may not be null   | 7 |
  | form.serviceInformation.ConfinementWithInServicePeriod | Your period of confinement must be within a single period of service   | 7 |
  | form.disabilities[].classificationCode.isInvalidValue | The classification code for a claimants primary disability is not a valid value   | 6 |
  | form.serviceInformation.reservesNationalGuardService.obligationTermOfServiceFromDate.IsNotValid | Invalid value: 0000-01-01   | 4 |
  | form.veteran.preferredVbmsName.lastName.Pattern | "must match ""([a-zA-Z0-9-/']+( ?))+$"""   | 4 |
  | form.serviceInformation.reservesNationalGuardService.titleActivation.anticipatedSeparationDate.IsNotValid | Invalid value: 2023-02-31   | 4 |
  | form.treatments[].StartEndDate | The startDate must be before the endDate   | 4 |
  | form.serviceInformation.reservesNationalGuardService.titleActivation.anticipatedSeparationDate.IsNotValid | Invalid value: 2001-11-31   | 3 |
  | form.disabilities[].name | "must match ([a-zA-Z0-9\-'.,/\(\)]([a-zA-Z0-9\-',. ])?)+$"   | 3 |
  | form.veteran.changeOfAddress.endingDate.IsNotValid | Invalid value: 2020-XX-01   | 2 |
  | form.veteran.currentMailingAddress.militaryPostOfficeTypeCode.IsNotValid | Invalid value: APo   | 2 |
  | form.serviceInformation.reservesNationalGuardService.titleActivation.anticipatedSeparationDate.IsNotValid | Invalid value: 2021-09-31   | 2 |
  | form.veteran.currentMailingAddress.militaryPostOfficeTypeCode.IsNotValid | Invalid value: fpo    | 2 |
  | form.serviceInformation.reservesNationalGuardService.titleActivation.anticipatedSeparationDate.IsNotValid | Invalid value: 2013-06-31   | 2 |
  | form.serviceInformation.reservesNationalGuardService.titleActivation.anticipatedSeparationDate.IsNotValid | Invalid value: 2022-04-31   | 2 |
  | form.serviceInformation.reservesNationalGuardService.titleActivation.anticipatedSeparationDate.IsNotValid | Invalid value: 2022-09-31   | 2 |
  | form.serviceInformation.servicePeriods[].activeDutyBeginDate.Past | must be in the past   | 2 |
  | form.serviceInformation.reservesNationalGuardService.titleActivation.anticipatedSeparationDate.IsNotValid | Invalid value: 2022-02-30   | 2 |
  | form.veteran.currentMailingAddress.militaryPostOfficeTypeCode.IsNotValid | Invalid value: Apo    | 2 |
  | form.veteran.homelessness.currentlyHomeless.otherLivingSituation.Size | size must be between 1 and 500   | 2 |
  | form.directDeposit.routingNumber.Pattern | "must match ""\d{9}"""   | 2 |
  | form.disabilities[].diagnosticCode.isNull | The diagnostic code for a disability being claimed for increase is missing   | 1 |
  | form.veteran.preferredVbmsName.middleName.Pattern | "must match ""([a-zA-Z0-9-/']+( ?))*$"""   | 1 |
  | form.veteran.changeOfAddress.endingDate.IsNotValid | Invalid value: 2024-XX-XX   | 1 |
</details>
