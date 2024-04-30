The debt Team's primary reason for existing is to maintain the digital counterpart to  [form 5655](5655.pdf) also known as the Financial Status Report (FSR). Veterans submit an FSR in order to apply for relief from a given set of debts and/or medical copays.

# Basics
To see the FSR in action, navigate to [the debt portal](https://staging.va.gov/manage-va-debt/request-debt-help-form-5655/introduction) (talk to team members for help with login) and try filling one out. Compare the form you're filling out to [this pdf](5655.pdf).  
### FSR Variants
The FSR has a couple variants you should be aware of. Veterans submitting an FSR for debts are submitting the form to VBA(Veterans Benefits Admin). Vets submitting a FSR for copays is submitting to the VHA(Veterans Health Admin). From the user's perspective on the frontend they're only filling out a single form, but the backend may be making multiple submissions on their behalf. The backend submits a single VBA FSR for all debts, but needs to bundle copays into  FSRs based on their station.
>***Scenario:*** *A veteran with 2 debts and 3 copays (2 copays from hospital X and 1 copay from hospital Y) would end up submitting 3 distinct FSRs. One VBA FSR for the debts, one VHA for the Hospital X copays and one VHA for the Hospital Y copays.*
#### Streamlined FSR
When filling out an FSR form for only copays, veterans that meet certain financial criteria will get an expedited experience with fewer questions. Basically, if a veteran is poor enough we don't want or need to waste their time asking if they have any jewels or expensive works of art. This shorter version of the FSR is called 'streamlined' and we have a bunch of logic on both the front & back ends to accommodate it.
#### The InProgressForm Model
All VA forms, including this one, persist their data via the [InProgressForm](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/in_progress_form.rb) model. If you were to get on a Rails console for the environment you're using you could see your form data getting persisted with this ActiveRecord Query- ```
```
InProgressForm.where(form_id: '5655', user_uuid: *your user uuid*).last.form_data
```
There should be *exactly one* InProgressForm per user/form_id pair. A given user cannot have multiple 5655 forms in progress at a time. InProgressForms have a TTL and 5655s will expire after 60 days regardless of user activity. Submitting an FSR will also delete the related InProgressForm.

### Submitting an FSR
When you submit your FSR form on the front end you're sending a packet of data to the vets-api endpoint `/v0/financial_status_reports`,  hitting [this controller method](https://github.com/department-of-veterans-affairs/vets-api/blob/22d0fd99c237f3c0fbe51e23715779533cb149d0/modules/debts_api/app/controllers/debts_api/v0/financial_status_reports_controller.rb#L14).  A good example of the data we send to this endpoint can be found in [this fixture](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/debts_api/spec/fixtures/pre_submission_fsr/fsr_maximal_calculations_form.json). A high level flowchart of how an FSR moves through the BE submission process can be found [here](obsidian://open?vault=Kevin%20Exit%20Notes&file=high%20level%20fsr%20submission%20graph.png) and [here](obsidian://open?vault=Kevin%20Exit%20Notes&file=FSR%20submission%20dependency%20graph.png) but I encourage you to follow the code flow from the controller for yourself. Ultimately the BE is taking form data from the FE, applying business logic to that data to populate a set of 5655 submission objects and then submitting those objects to the corresponding administrations.
#### The Form5655Submission model
For every attempt to submit an FSR (All three FSRs in the above scenario) the BE creates a Form5655Submission. This model does a couple thing- 
It keeps track of submission state, ie if an error is thrown before we can get the FSR to its destination that error is persisted on the corresponding Form5655Submission.
It also holds the metadata related to the FSR and to the InProgressForm that was used to create the submission. This metadata is particularly useful when troubleshooting a submission.

