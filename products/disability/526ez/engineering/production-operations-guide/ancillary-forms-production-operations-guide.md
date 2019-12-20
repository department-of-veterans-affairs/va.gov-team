# 526 Ancillary Forms - Production Operations Guide


Table of Contents
=================

[Ancillary Forms Processing](#Ancillary-Forms-Processing)

> [Summary](#summary)

> [Submission Process](#Submission-Process)

> [PDF Generation](#PDF-Generation)

> [4142 Process Flow](#4142-Process-Flow)

> [ICMHS Flow](#ICMHS-Flow)

> [781/781a Process Flow](#781/781a-Process-Flow)

[Monitoring and Triage for Ancillary Forms](#monitoring-and-triage-for-Ancillary-Forms)

> [Monitoring and Triage Overview](#Monitoring-and-Triage-Overview)

> [Reporting and Tracking Tables](#reporting-and-tracking-tables)

[Error Scenarios](#error-scenarios)

[526 / 4142 Submission Process - Details](#526-/-4142-Submission-Process---Details)

[Steps during Submission Process](#steps-during-submission-process)

> [Scenario 1: Both 526 and 4142 submissions are successful](#scenario-1-both-526-and-4142-submissions-are-successful)

> [Scenario 2: 526 submission successful, but 4142 fails](#scenario-2-526-submission-successful-but-4142-fails)

> [Scenario 3: 526 submission fails, 4142 submit isn't attempted](#scenario-3-526-submission-fails-4142-submit-isnt-attempted)

[Appendix](#appendix)

[JSON Implementation Details](#json-implementation-details)

Ancillary Forms Processing
==========================

Summary
-------

The 526 All Claims flow includes ancillary forms to support the claims submission process.
This document provides details for monitoring and triage of ancillary forms.  The ancillary forms that are currently available include the "Release for Medical Provider Information" (21-4142), the "Statement in Support of Claim for Service Connection for Post-Traumatic Stress Disorder (PTSD)" (21-0781), and the "Statement in Support of Claim for Service Connection for Post-Traumatic Stress Disorder (PTSD) Secondary to Personal Assault" (21-0781a).

These ancillary forms have been integrated with the 526 claims submission processing. The forms share some common reporting and monitoring capabilities as well as some form specific operational monitoring. 

Processing of the ancillary forms leverages the same reporting tables as the 526 form processing.  
Form processing for the ancillary forms have two paths for form submission:

-   Submission of forms via EVSS DocumentsServices API
    - Completed forms uploaded via vets-website (781, 781a, 4142)
    - Supporting evidence uploaded
    - PDFs generated via data collected in vets-website through the interview process
-   Submission of forms via ICMHS (4142)

All forms are uploaded to the VBMS eFolder except the 4142 when the veteran uses the website interview process.

If the veteran chooses the interview process the form data is collected in vets-website.  Form data is saved in the in_progress table which allows the veteran to return to the site at a later time to continue entering the form data.  After the veteran has completed all the data entry they are presented with a summary page.  On the summary page the veteran is allowed to change any of the data that was completed during the interview process.

Submission Process
------------------

At the end of the website flow the Veteran will click to submit the benefits claim.  After submitting from the website the following actions occur in the vets-api tier.
- The 526 form is submitted via EVSS Claims Service
    - This starts a background job to submit the claim.  This leverages Sidekiq and will retry submission if a failure occurs
    - Status is reported in the disability_compensation_job_statuses table
- After successful submission of a 526, the ancillary forms and supporting evidence artifacts are submitted to EVSS for upload to VBMS

PDF Generation
--------------

The PDF creation for all ancillary forms will leverage the platform capability including the application
of a digital signature to the document. The front end website will not allow the veteran to continue until 
certifying the data.  This has been determined sufficient for applying a digital signature to the PDF. All ancillary forms include overflow pages if necessary.  Overflow pages are leveraged if the data would exceed limits on the paper version of the form.  All PDFs are stamped when they are submitted.

4142 Process Flow
-----------------
The diagram below depicts the process flow for 4142 data and the
integration with the 526 flow.


The 526 Async process will receive JSON content that contains both the
526 and 4142/4142a data. The process will extract the 526 data and
submit to EVSS for processing. Upon successful processing
(acknowledgement from EVSS), the 526 async process will invoke the 4142
async process with the extracted 4142 data and veteran profile data. The
526 async process will need to translate the extract JSON to a format
for the 4142 process.  The 4142 async process will invoke the PDF generation, apply header and footer stamps to the 
PDF and submit to ICMHS via the Benefits Intake API.  The API documentation can be found [here](./ICMHS_vets.gov_API_v2.docx)

![](images/526-4142-Processing.png)


ICMHS Flow
----------

The following diagram depicts the flow for PMR request through the Benefits Intake API

![](images/VA_API_to_Benefits_Intake_API_WorkFlow_FINAL_20180629.png)

<br>
<br>
The following diagram shows the process for handling request for PMRs

![](images/PMR-Routing-Process.png)


781/781a Process Flow
-----------------

![](images/526-781-Processing.png)


Monitoring and Triage for Ancillary Forms
========================================


Monitoring and Triage Overview
------------------------------

-   Ancillary forms can be completed and submitted in the 526 all claims
    interview process.

-   Ancillary forms as of the current MVP scope are 21-4142, 21-4142A,
    21-0781 and 21-0781A.

-   Form 21-4142: Authorization to Disclose Information to The
    Department of Veterans Affairs for the private medical records.

-   Form 21-4142A: General Release for Medical Provider Information to
    the Department of Veterans Affair.

-   Both forms 21-4142 and 21-4142A are generated as a single PDF
    document and submitted via ICMHS Benefits Intake API for further
    processing.

-   21-0781 and 21-0781A forms are PTSD and PTSD secondary to personal
    assault statements respectively.

-   Forms 21-0781 and 21-0781A are generated as separate PDF documents
    and submitted to VBMS eFolder using the EVSS document services
    submission process.

-   On va.gov side, data related to the form submissions is securely
    stored in PostgreSQL DB tables.

-   In the Vets API app, asynchronous background jobs are executed using
    Sidekiq library for 526 and ancillary forms submission.

-   Monitoring and metrics information is provided via internal tools
    available to the va.gov team. To access these internal tools such as
    the Jenkins dashboard, Prometheus, Sentry Etc., you need to set up a
    local SOCKS proxy. This process is documented here
    - <https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md>.
    It's useful for things like investigating a pull request that isn't
    passing Jenkins build step, finding the server host name where the
    instance is deployed.

**Staging Environment**

- Integration testing will be conducted in the staging environment.  The staging URL is <https://staging.va.gov/disability-benefits/apply/form-526-all-claims/introduction> 

- Test users can be found here: 
<https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/mvi-staging-users.csv>

**DEPRECATED: **
*All form submissions update the [disability_compensation_job_statuses](#disability_compensation_job_statuses) table. This should be verified with each form submission or form upload.  Additional form specific testing is documented below.*

Use [Redux Dev Tools](#Redux-Dev-Tools) to view form values and state in vets-website.  Form values stored in "form->submission->data->disabilities"

Reporting and Tracking Tables
---------------------------

Vets API application stores data into PostgreSQL database tables,
tables are listed in this section. To query the tables on dev, staging
and prod, one needs access to rails console. Details for rails console are documented here [Rails Console](#rails-console)

Locally, you can connect and query the DB using pgAdmin tool. Update
docker-compose.yml to add ports section, example shown below:

```
postgres:

image: mdillon/postgis:9.6-alpine

environment:

POSTGRES_PASSWORD: "${POSTGRES_PASSWORD:-password}"

POSTGRES_USER: "${POSTGRES_USER:-postgres}"

volumes:

- ./data:/var/lib/postgresql/data:cached

ports:

- "5433:5432"
```


**Database Tables to support triage of ancillary forms**

| **Postgress Table**         | **Ruby Model**             | **Notes**            | **Columns** |
|----------------------- | ----------------------- | ----------------------- | ----------------------- |
| disability_compensation_job_statuses (*DEPRECATED*) | DisabilityCompensationJobStatus | Updated via Sidekiq jobs | |
| in_progress_forms | InProgressForm | During the claim UI interview process, in progress forms controller creates a record in the table storing the encrypted form data. | created_at, updated_at, guid, encrypted_file_data encrypted_file_data_iv, type and id (pkey) |
| saved_claims | SavedClaim | After 526 submission, the disability controller creates a record in the table storing encrypted submitted form(claim) data in JSON format. | created_at, updated _at, encrypted_form, encrypted_form_iv, form_id, guid, type and id (pkey) |
| form_attachments | FormAttachment | For form uploads, a record is created in the table storing encrypted form attachments data. | created_at, updated_at, guid, encrypted_file_data, encrypted_file_data_iv, type and id (pkey) |
| form526_submissions | Form526Submission | After 526 submission, the disability controller creates a record in this table storing encrypted form data. During processing, the table is updated for the "workflow_complete" and "updated_at" columns.| user_uuid, saved_claim_id, submitted_claim_id, encrypted_auth_headers_json, encrypted_auth_headers_json_iv, encrypted_form_json, encrypted_form_json_iv, workflow_complete, created_at, updated_at and id (pkey) |
| form526_job_statuses | Form526JobStatus | During 526 job processing, a record is inserted/updated in the table to capture the job status and related information. | form526_submission_id, job_id, job_class, status, error_class, error_message, updated_at and id (pkey) |

Error Scenarios
---------------

Below are some error scenarios for 526/4142 and some additional triage
and reporting techniques. These are in addition to existing tools such
as Sentry for log files.


| **Scenario**          | **Notes**             | **Triage**            |
|----------------------- | ----------------------- | ----------------------- |
| 526 and 4142 Successful | 526 is successfully submitted via EVSS. 4142 is successfully submitted through ICMHS | Statistics can be found in DB table disability\_compensation\_job\_statuses |
| 526 Successful, 4142 failed | 526 is successfully submitted via EVSS. 4142 fails at call to ICMHS API | Statistics can be found in DB table disability\_compensation\_job\_statuses <br> Failed job will be in Sidekiq Dead Job Queue |
| 526 Successful, 4142 successful via ICMHS but fails in downstream system | 526 is successfully submitted via EVSS. 4142 is successfully submitted through ICMHS API. 4142 encounters error in downstream processing | Statistics can be found in DB table disability\_compensation\_job\_statuses <br> ICMHS can be polled to determine status <br> -   curl -v -F token=\$CENTRALMAILTOKEN -F uuid=\'\<FROM disability\_compensation\_job\_statuses \' \<ICMHS status URL\> |
| 526 failed, 4142 not attempted | 526 fails via EVSS. 4142 is not attempted. | Statistics can be found in DB table disability\_compensation\_job\_statuses <br> Failed job will be in Sidekiq Dead Job Queue |
| Supporting Evidence uploads | User can upload supporting evidence documents. The uploads leverage the EVSS DocumentsService API. | Statistics can be found in DB table disability\_compensation\_job\_statuses |


Sidekiq Queue
-----------------

    The sidekiq queue in staging can be accessed here: <https://staging-api.vets.gov/sidekiq/retries>


Prometheus
----------

Prometheus pulls metrics from several exposed metrics endpoints. The
Prometheus alert manager is responsible for firing alerts based on alarm
rules that query the Prometheus engine. It provides a functional
expression language that lets the user select and aggregate time series
data in real time. The result of an expression can either be shown as a
graph or viewed as tabular data in Prometheus's expression browser.

### 21-4142 Job Metrics

Stats Key Prefix for 4142 job in prometheus identified as
***worker_evss_submit_form4142***. So, the job keys are listed below:

-   *worker_evss_submit_form4142_success*

-   *worker_evss_submit_form4142_try*

-   *worker_evss_submit_form4142_exhausted*

-   *worker_evss_submit_form4142_retryable*

-   *worker_evss_submit_form4142_non_retryable*

Below are the URLs with filtered expression for the stats key of 4142
job success (*worker_evss_submit_form4142_success*)

Dev:
<http://prometheus-dev.vetsgov-internal:9090/prometheus/graph?g0.range_input=1h&g0.expr=worker_evss_submit_form4142_success&g0.tab=0>

Staging:
<http://prometheus-staging.vetsgov-internal:9090/prometheus/graph?g0.range_input=1h&g0.expr=worker_evss_submit_form4142_success&g0.tab=1>

Production:
<http://prometheus-prod.vetsgov-internal:9090/prometheus/graph?g0.range_input=1h&g0.expr=worker_evss_submit_form4142_success&g0.tab=1>

### 

### 21-0781 Job Metrics

Stats Key Prefix for 0781/781A job in prometheus identified as
***worker_evss_submit_form0781***. So, the job keys would be as
below:

-   *worker_evss_submit_form0781_success*

-   *worker_evss_submit_form0781_try*

-   *worker_evss_submit_form0781_exhausted*

-   *worker_evss_submit_form0781_retryable*

-   *worker_evss_submit_form0781_non_retryable*

Below are the URLs with filtered expression for the stats key of 0781
job success (*worker_evss_submit_form0781_success*)

Dev:
<http://prometheus-dev.vetsgov-internal:9090/prometheus/graph?g0.range_input=1h&g0.expr=worker_evss_submit_form0781_success&g0.tab=0>

Staging:
<http://prometheus-staging.vetsgov-internal:9090/prometheus/graph?g0.range_input=1h&g0.expr=worker_evss_submit_form0781_success&g0.tab=1>

Production:
<http://prometheus-prod.vetsgov-internal:9090/prometheus/graph?g0.range_input=1h&g0.expr=worker_evss_submit_form0781_success&g0.tab=1>

Rails Console
-------------

The rails console can be leveraged to view form submission statistics.
The console command lets you interact with your Rails application from
the command line. This is useful for querying the database tables via
Ruby model objects. The form submissions update several tables and these
can be queried to determine the status of form submissions and the async
processes.

The steps to run the rails console on the staging server include the
following:

-   Get the IP address of a staging server

    -   The server IP addresses change each time a build is deployed. A
        script has been developed to determine the IP addresses. The
        instructions are located in GitHub at
        <https://github.com/department-of-veterans-affairs/devops/blob/master/utilities/aws_hosts.rb>

    -   This requires aws credentials which can be requested via a
        GitHub issue at
        <https://github.com/department-of-veterans-affairs/devops/issues/new>

    -   Run the script with the staging parameter and collect the IP
        address of one of the servers. (ruby aws_hosts.rb staging |
        grep vets-api-server)

    -   Sample output --
        "ip-172-30-23-204.us-gov-west-1.compute.internal dsva-vetsgov-staging-deployment-staging-vets-api-server-20181130-182909-asg
        1b"

    -   Server from above output is
        ip-172-30-23-204.us-gov-west-1.compute.internal

-   Connect to the staging server via ssh

    -   ssh -i ~/.ssh/(your rsa credentials)
        ip-172-30-23-204.us-gov-west-1.compute.internal

-   Sudo and run rails console

    -   sudo su

    -   cd /srv/vets-api/src

    -   bundle exec rails c

-   From the console you can execute queries against the database. Some
    example commands are below

    -   DisabilityCompensationJobStatus.all

    -   DisabilityCompensationJobStatus.all.count

    -   DisabilityCompensationJobStatus.find_by_xxx

    -   DisabilityCompensationJobStatus.where(job_class:
        "SubmitForm4142Job")

    -   DisabilityCompensationJobStatus.where(job_class:
        "SubmitForm526")

    -   DisabilityCompensationJobStatus.where(job_class:
        "SubmitForm526IncreaseOnly")

    -   DisabilityCompensationJobStatus.where(job_class:
        "SubmitForm4142Job").last

    -   DisabilityCompensationJobStatus.where(job_class:
        "SubmitForm4142Job").first

    -   DisabilityCompensationJobStatus.where(job_class:
        "SubmitForm4142Job").limit(2)

    -   DisabilityCompensationJobStatus.where(job_id:
        "733ce6e19fae7e89746c9e38")

    -   InProgressForm

    -   InProgressForm.where(id: "1")

    -   InProgressForm.where(user_uuid:
        "6400bbf301eb4e6e95ccea7693eced6f")

    -   CentralMailSubmission

    -   FormAttachment
        - FormAttachment.where(id: "21927")
        - FormAttachment.where(guid: "2cf4b473-72c6-4924-8918-c7e92322b25b") (guid maps to form->data->ptsd781->0->confirmationCode)
    -   Format Attachment Web Data
        - 4142 form->data->ptsd781->0->attachmentId
            - L107 for 4142
            - L827 4142a
            - L228 781
            - L229 781a



-   4142 ICMHS status
    -----------------

    -   Run the getStatus command to received status on submitted 4142s
    -   Grab the uuid from the status table column "job_id" in both saved claims table and status table


    -   curl -v -F token=<token> -F
        uuid='5B1C383C-C015-443F-A9F0-D3DDA3BFF7C4'
        https://icmhsgc-test.csrarad.com/VADocument/getStatus
    
    - Sample output

    - Token for test environment available at <https://github.com/department-of-veterans-affairs/vets-contrib/blob/master/docs/External%20Services/Central%20Mail/Environment%20Info.md>



526 / 4142 Submission Process - Details
=======================================

The section documents several conditions, system behavior, track and
reporting status during 526 and 4142 submission process.

Steps during Submission Process
-------------------------------

1.  Veteran submits 526 application with the included private medical
    records (PMR) form 4142 data

2.  526 controller \[*V0::DisabilityCompensationFormController*\] submit
    method parses the entire form as JSON object

3.  If form4142 is present in 526 form, then the class
    \[*EVSS::DisabilityCompensationForm::Form4142*\] translates it to
    the expected JSON format for 4142 background sidekiq job to process
    it

4.  Form 526 data translation is completed by the class
    \[*EVSS::DisabilityCompensationForm::DataTranslation*\]

5.  526 controller then asynchronously invokes submit form 526
    background job \[*EVSS::DisabilityCompensationForm::SubmitForm526*\]
    passing multiple parameters, including the translated form 4142

6.  526 background job then submits form526 to an upstream submission
    service (currently EVSS) and sets Claim ID in response

7.  526 background job then asynchronously invokes 4142 background job
    \[*CentralMail::SubmitForm4142Job*\]

8.  4142 background job generates, stamps 4142/4142A PDF document. Job
    then uploads the document to Central Mail using Benefits Intake API
    (ICMHS)

9.  526 background job then asynchronously invokes 526 clean up
    background job
    (*EVSS::DisabilityCompensationForm::SubmitForm526Cleanup*\] for
    cleaning up 21-526EZ form data from InProgress table and REDIS cache

10. If uploads are available, 526 background job then asynchronously
    invokes background batch job
    \[*EVSS::DisabilityCompensationForm::SubmitUploads*\] to upload
    evidence attachments into VBMS via EVSS document service

During submit application, listed below are the expected possibilities:

1.  Both 526 and 4142 submissions are successful

2.  526 submission successful, but 4142 fails

3.  526 submission fails, and hence the process doesn't attempt to
    submit 4142

Scenario 1: Both 526 and 4142 submissions are successful
--------------------------------------------------------

-   In this scenario, it can be concluded that Steps 6 and 8 were
    successfully completed



Scenario 2: 526 submission successful, but 4142 fails
-----------------------------------------------------

-   For this scenario, it can be concluded that Steps 6 was successful,
    however there were failures during Step 8

-   For 4142 PDF upload, ICMHS API call will immediately return one of
    the following codes to vets.gov

  | Error Code |  Description |
  | ------------ | ------------------------------------------------------------------------- |
  | 200         | Success -- ICMHS received successfully, but not processed and at VBMS |
  | 400         | Duplicate -- document already uploaded with that uuid |
  | 401         | Unauthorized -- missing or incorrect token |
  | 409         | Conflict - mismatched attachments and numbers |
  | 412         | Precondition Failed -- for meta data failures |
  | 415         | Unsupported File type |
  | 422         | Unprocessable Request-- no file, or issue with PDF, missing attachments |
  | 500         | Server Error |

-   4142 background job will retry submissions for all the conditions
    listed below

    -   ICMHS returns error code in the range of 201-600

    -   ICMHS connection times out (Error of type
        "*Common::Exceptions::GatewayTimeout"*)

    -   Any other standard error (Error of type "StandardError") raised
        during processing


-   Rails application log with the entries as shown below for the
    successful 526 submission, but failed 4142

> 2018-10-04 17:35:14.718440 D \[13:43130340\] Rails \-- \[upsert\]
>
> Selector: {\"job\_id\"=\>\"eaef3997b1b4adbaafd60ead\"}
>
> Setter: {\"disability\_compensation\_submission\_id\"=\>1,
> \"job\_class\"=\>\"SubmitForm526\",
> \"job\_id\"=\>\"eaef3997b1b4adbaafd60ead\", \"status\"=\>\"success\",
> \"updated\_at\"=\>2018-10-04 17:35:14 UTC}
>
> 2018-10-04 17:35:14.767671 I \[13:43130340\] Rails \-- Form526
> Submission \-- { \"saved\_claim\_id\" =\> 1, \"submission\_id\" =\> 1,
> \"job\_id\" =\> \"eaef3997b1b4adbaafd60ead\", \"event\" =\>
> \"success\" }
>
> 2018-10-04 17:35:14.767760 I \[13:43130340\] Rails \-- Form526
> Submission \-- { \"saved\_claim\_id\" =\> 1, \"submission\_id\" =\> 1,
> \"job\_id\" =\> \"eaef3997b1b4adbaafd60ead\", \"event\" =\> \"try\" }
>
> 2018-10-04 17:35:24.266094 E \[13:43127280
> submit\_form4142\_job.rb:144\] Rails \-- { \"Error Message\" =\>
> \"BackendServiceException: {:status=\>412, :detail=\>\\\"Metadata
> Field Error - Missing zipCode \[uuid: d99c97ca5cff03b13fd828e9\] \\\",
> :code=\>\\\"VA900\\\",
> :source=\>\\\"CentralMail::SubmitForm4142Job\\\"}\" }
>
> 2018-10-04 17:35:24.266266 E \[13:43127280 sentry\_logging.rb:42\]
> Rails \-- BackendServiceException: {:status=\>412,
> :detail=\>\"Metadata Field Error - Missing zipCode \[uuid:
> d99c97ca5cff03b13fd828e9\] \", :code=\>\"VA900\",
> :source=\>\"CentralMail::SubmitForm4142Job\"}.
>
> 2018-10-04 17:35:24.276371 D \[13:43127280\] Rails \-- \[upsert\]
>
> Selector: {\"job\_id\"=\>\"d99c97ca5cff03b13fd828e9\"}
>
> Setter: {\"disability\_compensation\_submission\_id\"=\>1,
> \"error\_message\"=\>\"BackendServiceException: {:status=\>412,
> :detail=\>\\\"Metadata Field Error - Missing zipCode \[uuid:
> d99c97ca5cff03b13fd828e9\] \\\", :code=\>\\\"VA900\\\",
> :source=\>\\\"CentralMail::SubmitForm4142Job\\\"}\",
> \"job\_class\"=\>\"SubmitForm4142Job\",
> \"job\_id\"=\>\"d99c97ca5cff03b13fd828e9\", \"status\"=\>\"error\",
> \"updated\_at\"=\>2018-10-04 17:35:24 UTC}
>
> 2018-10-04 17:35:24.282209 E \[13:43127280 job\_status.rb:53\] Rails
> \-- Form4142 Submission \-- { \"saved\_claim\_id\" =\> 1,
> \"submission\_id\" =\> 1, \"job\_id\" =\>
> \"d99c97ca5cff03b13fd828e9\", \"event\" =\> \"error\",
> \"error\_message\" =\> \"BackendServiceException: {:status=\>412,
> :detail=\>\\\"Metadata Field Error - Missing zipCode \[uuid:
> d99c97ca5cff03b13fd828e9\] \\\", :code=\>\\\"VA900\\\",
> :source=\>\\\"CentralMail::SubmitForm4142Job\\\"}\" }
>
> 2018-10-04 17:35:24.282476 I \[13:43127280\] Rails \-- Form4142
> Submission \-- { \"saved\_claim\_id\" =\> 1, \"submission\_id\" =\> 1,
> \"job\_id\" =\> \"d99c97ca5cff03b13fd828e9\", \"event\" =\> \"try\" }

-   As seen from the Rails logs, submit of 4142 failed with error code
    412 is returned from ICMHS. Error details are logged and recorded in
    the "disability\_compensation\_job\_statuses" table

-   For 4142 background job, a maximum retries of 10 is configured which
    will likely result in a runtime of \~8 hours

-   **For 526 or 4142 submissions, there will LESS likely be a scenario
    where 526 form and 4142 PDF will be submitted with some missing data
    that went un-caught during schema validation. However, for this less
    likely scenario the ONLY way submissions can later be re-tried if
    the following ACTIONS are POSSIBLE ([Ad Hoc and DevOps to confirm
    the feasibility of the below actions]{.underline})**

    -   **Job is available to be retried. For job to be retries, it has
        to be in the Dead or Retries Queue**

    -   **Arguments passed to the job (form, headers, user info etc.)
        can be fixed if required for certain cases before manual /
        configured retry happens in sidekiq. **

Scenario 3: 526 submission fails, 4142 submit isn't attempted
-------------------------------------------------------------

-   For this scenario, it can be concluded that Step 6 was failed and
    hence Step 8 didn't execute

-   526 submission to EVSS can fail for various reasons of application
    error, backend EVSS system error and timeouts

-   For 526 background job, a maximum retry of 13 is configured which
    will likely result in a runtime of \~25 hours (This is as per the
    comment in EVSS::DisabilityCompensationForm::SubmitForm526 )

-   526 Background job follows the below conditions for retries

    -   EVSS timeout errors are **re-tried** for submissions

    -   Any other service exceptions or standard errors are logged into
        sentry, but **NOT** **retried**

-   For timeout errors, if 526 is submitted successfully within the
    window of 13 retries, then 4142 will be attempted and follow the
    path mentioned in Scenario 2

-   For any other service or standard errors, the errors and details
    will be logged into sentry and no retries will be attempted. In this
    case, manual intervention is needed. **UNCLEAR about this process
    yet, need a discussion with AdHoc and DevOps**. The only identified
    option for now is getting on a box, then via rails console use the
    sidekiq api to fix the data. UNCLEAR to me yet if this process even
    works or has been tried before.

-   4142 submission will be complete **[ONLY]{.underline}** when 526
    submission job is available for retry and is completed without
    errors.

