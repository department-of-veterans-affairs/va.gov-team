# EducationBenefits

The Education Benefits Claims apps are a series of React forms and a Rails backend that provide the 22-1990, 22-1990E, 22-1990N, 22-1995, 22-5490 and 22-5495 forms. Currently all the forms except for the 1990 are written in RJSF

### Communication Channels
- Github Label: ed benefits
- Slack Channel: #vetsgov-edu_benefits
- Google Analytics: [here](https://analytics.google.com/analytics/web/?authuser=1#/report/conversions-goals-overview/a50123418w177519031p184334251/_u.date00=20190301&_u.date01=20190331&_.goalOption=ALL/)
- Keywords: 1990, 1990n, 1990e, 1995, 5490, 5495, Spool File

### Points of Contact
- VA Business Stakeholders
  - Main SME: Shay Norton shay.norton@va.gov
  - TIMS Engineer (Edu Backend): Matt Speirs Matthew.Speirs@va.gov
  - SFTP Contact: Chris Marino Christopher.Marino2@va.gov
- DSVA Product Owner: Matt Self matthew.self2@va.gov
- Ad Hoc Product Manager: Ryan Luu ryan.luu@adhocteam.us
- Engineering POCs:
  - Frontend: Jeff Balboni jeff@adhocteam.us
  - Backend: Lihan Li lihan@adhocteam.us

### Narrative
The Edu forms were one of the first applications to launch on Vets.gov and as of 4/24/19 remain some of the most important applications on the VA.gov platform. They are navigated to via an education wizard found on [here](https://www.va.gov/education/how-to-apply/). The forms are currently in a V1 state without any significant rearchitecting to their primary functionality since the original launch.

---

### Problem Statement
Veterans want to further their education with the education benefits they are entitled to from their service, but it is difficult for users to determine which form is the appropriate to apply with and submitting through VONAPP (**V**eteran **ON**-Line **APP**lication) or paper forms is cumbersome. About 90% of education benefit applications are received through VONAPP, but the tool is not responsive or built with accessibility in mind and the codebase is impossible to substantially update. 

### Value propositions 
- Requirement for Va.gov overall problement statement: single VA site for Veterans
- Edu wizard helps user navigate to the appropriate edu form
- Allows significantly better UI for users, and better up-time
- Accessible to Veterans regardless of disability
- Help generate trust of Va.gov tools
- Good exposure to the Veteran community

### Core user goals
- Navigate to the appropriate education form easily (e.g. avoid mistaken 1990N submissions)
- Save forms in progress to allow users to complete applications across multiple sessions
- Submit education forms to the appropriate regional office

### Requirements, constraints: what are the bounds we’re working within?
- Need to have task parity with original VONAPP application
- Have to distribute forms to the appropriate regional offices
- Synchronous submissions - if the service we send applications to is down, the submission fails and the user has to resubmit but does not lose data

### Assumptions
- People have difficulty identifying the appropriate education for to apply with
- People will find it and access it (thus we’ll be able to acquire users)
- If people apply for Education Benefits, they’ll continue to use Va.gov for all their needs

### MVP = smallest possible experiment to validate the assumption
Build a tool that helps Veterans navigate to the appropriate education form and submit that form to the correct Regional Office based on the Veteran’s address. Build narrative and strategy for marketing, and validate that the new tool increases usership (Google Analytics) and that users prefer the modern UI to VONAPP.

---

## Data Flow
Submission of an Education Claim happens in 2 steps:
- *For engineering information about the data submission process checkout the [data-submission-process.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/application/data-submission-process.md) file.

### 1. Synchronous Submission
1. A User hits submit on the React form, and a JSON serialization is sent to the backend.
1. The backend validates the JSON data against a JSON-Schema found in vets-json-schema. If it fails, an error is returned and logged.
1. The claim is saved in the EducationBenefitsClaim table
1. A Confirmation Number is returned to the user

### 2. Nightly Batch Processing
Two processes occur overnight which are part of processing the claims;

1. At 3AM EST all the EducationBenefitsClaim with nil `processed_at` timestamps are collected by the EducationForm::CreateDailySpoolFiles job.
1. The CreateDailySpoolFiles job iterates over each claim and converts the JSON into a textual representation of the claim by using templates found in `vets-api/app/workers/education_form/templates` after instantiating a subclass of EducationForm::Forms::Base to provide some per-form differentiation. If any claims are unable to be formatted, they are left out of the batch and a Sentry exception is logged.
1. The claims are broken up in 3 groups representing the geographic area that they will be processed on, based on logic in `EducationForm::EducationFacility` that was run at the time of form submission. Each regions claims are concatenated into a single large string.
1. A connection is made to an SFTP server and the files are written. If this step fails, an error is logged and the entire job is retried automatically.

1. An hour later, the `EducationForm::CreateDailyYearToDateReport` job runs and creates a CSV that is uploaded to S3, and linked to in an email, providing a report of both the day and years activities broken down by form and region. The list of users who receive that email is in the `YearToDateReportMailer` mailer.

After we SFTP the 3 files over (filenames begin with the RPO number), they are picked up by a process called TIMSC which converts them to TIFF files and stores them for the RPOs to process. It's important that the nightly job _be_ a nightly job so that no new files come in during work hours, as the business process is to collect and distribute them at the start of the day. Because it's a manual process, the job does not run on weekends or federal holidays when nobody would be in the office.

## Monitoring
* There is no health check for the SFTP connectivity.
* Check for Sentry errors relating to the `CreateDailySpoolFiles` job for nightly runs, and `EducationBenefitsClaimsController` for submission failures relating to the json-schema.

## On Call Remediation
* If the `CreateDailySpoolFiles` fails, any unprocessed claims will remain unprocessed until the next successful job is able to be run. If there are authentication errors, reach out to Chris Marino to see if the account somehow got locked.
* For json-schema failures, keep trying to recreate them locally until you hit pay dirt.
* We'll occasionally get a support request come in with a confirmation number asking us to find the claim. In a production console, you can have devops run `rake edu:print[THE-CONFIRMATION-NUMBER]` to get the textual representation of the claim. If there isn't a confirmation number, only some searchable data, you'll need a production console and some time to iterate over the fields, matching them like `EducationBenefitsClaim.where(form_type: '1990').select {|x| x.open_struct_form.veteranFullName.first == 'Doug' }` (or any other param) until you find the right claim.
* Claims are kept for 2 months, and then cleared by a nightly `EducationForm::DeleteOldApplications` job. After 2 months, they're gone except for in the database backups.

## Cheatsheet

* React code for EDU is at [vets-website/src/js/ed-benefits/*](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/js/edu-benefits)
* Controller for EDU is [vets-api/app/controllers/v0/education_benefits_claims_controller](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/education_benefits_claims_controller.rb)
* The Nightly Spool File/Batch code is in [vets-api/app/workers/education_form](https://github.com/department-of-veterans-affairs/vets-api/tree/master/app/workers/education_form)


## Glossary
|Abbr| Full Term | Description |
|----|-----------|-------------|
| SPL | Spool File | A ASCII-only text file containing multiple Education claims, grouped by RPO. Each claim in a spool file has a header and body; the header is newline delimited list of fields, the body is freetext ASCII limited to 78 char width. |
| RPO | Regional Processing Office | One of 3 facilities that process education claims. When a call comes in it may fall to the RPO to determine if a claim has been received and what the status is |
| TIMSC | The Image Management System (Centralized) | Is a program that collects spool files from the SFTP server, parses the headers from each claim, and transforms and stores the claim itself for processing |
| VONAPP | Legacy tool that originally provided an online path to fill out Education, Compensation and Pension, and Burial benefit forms. Was sunset after those functions moved to VA.gov |
