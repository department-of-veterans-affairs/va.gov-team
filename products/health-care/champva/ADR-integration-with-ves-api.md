# Architecture Decision Record (ADR)

## Integration between IVC CHAMPVA forms backend (vets-api) and VES API

**Date:** 4/16/2025
**Status:** Accepted

### Context

The IVC CHAMPVA team and the Veteran Enrollment System (VES) are collaborating to integrate the 
online (VA.gov) version of the CHAMPVA application (form 10-10d) with a newly developed VES API
that can ingest CHAMPVA applications.

Currently, a submission of the online CHAMPVA application form produces a populated PDF which is
sent to the Delivery Operations Claims Management Platform (DOCMP), where it is processed.

The new VES API will allow for the storage (and later retrieval, processing, etc.) of the structured
data that makes up a particular form submission.

As a result of this integration, CHAMPVA applications submitted on VA.gov will now need to be sent
to two downstream systems instead of one. With this change come several decisions that must be 
made to determine implementation and next steps.

#### What decisions need to be made?
1. How should VES-specific data be stored/handled? (e.g., separate from existing submission data? Or combined in some way?)
2. When and how should VES submissions occur during the existing form submission lifecycle?
3. How should submission errors be handled now that two independent systems will be receiving submissions?
    - Is there a need for automated, async retries of failed submissions?

### Decisions

After evaluating the requirements and considering the available avenues, the engineering team has
decided to address the above questions in the following ways:

#### VES-specific data will be stored alongside the existing submission data in the `IvcChampvaForm` database table. 
The following new columns will be added:
- `ves_request_data`: an encrypted column that holds all form data entered by the user. This can be used to resubmit the form at a later date in the event of a service outage or some other non data-related issue.
- `application_uuid`: a unique identifier used to designate an individual submission
- `ves_response`: the HTTP response code + any relevant messages returned after submitting to VES
#### VES submissions should occur immediately following a successful submission to DOCMP
1. The VES data is validated within vets-api using a custom validator that aligns with the API specification.
2. The generated PDF is sent to DOCMP. If successful, the user receives a success message on the front end.
3. If the initial VES validation step succeeded and the PDF successfully reached DOCMP, the form data is sent to the VES API
#### Depending on which part of the process a failure occurs in, the following actions are taken
1. If a failure occurs during the initial VES validation step (run within vets-api, prior to sending PDF to DOCMP or the form data to VES), an error is returned to the user and form submission is halted.
2. If a failure occurs during the submission of the PDF to DOCMP an error is returned to the user and form submission is halted.
3. If a failure occurs during the submission to VES (after successful data validation and subsequent PDF submission to DOCMP), no error is returned to the user.
    - In this event, the submission is retried asyncronously via a once-every-hour sidekiq job for up to five hours.
    - If a subsequent retry is successful, the success is recorded in the `ves_response` field and retries are ceased.
    - If, after five retries, the submission still fails to reach VES, a `StatsD` counter `ivc_champva.ves_submission_failures` is incremented and an alert is sent to the IVC team slack channel `#ivc-forms-datadog`
  
### Rationale

_User experience_: Performing a VES data validation up-front in vets-api before attempting any submissions to 
either consuming service (DOCMP/VES) allow us to quickly identify when a form will not be processable. 
This saves user time by quickly identifying failures, and helps provide a higher degree of confidence in
a successful submission to VES if the validations do pass.

_Ease of Integration_: The decisions above were made with an eye toward simple integration with our existing
backend processes. By integrating the VES submission into the existing backend workflow and spinning off a 
sidekiq job to handle async retries, we were able to simultaneously minimize logic changes to existing submission
workflows, and keep our concerns separate between the VES and DOCMP submission steps. Additionally, by using the
existing database table to store VES submission data we avoided the need for additional complexity in the database setup.

### Consequences

Clearly delineated areas of responsibility: The VES submission logic, while injected in the normal submission flow,
is very clearly separated from the DOCMP submission logic, lending itself to simpler maintenance in future.

Quick responses: By validating data up front we will be able to provide fast feedback to users in the
event of failures.
