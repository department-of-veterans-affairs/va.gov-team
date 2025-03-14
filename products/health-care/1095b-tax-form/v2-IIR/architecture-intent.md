# 1095-B Architecture Intent

- Product description
    - Brief overview of motivation for the change from an engineering & security point of view
        - We want to expose the ability for users to download their 1095-B forms for the most recent tax year. This ability was created by another team a couple of years ago but was never exposed to users. We want to update the user interface and deploy it to users.
    - Link to Collaboration Cycle Request issue
        - https://github.com/department-of-veterans-affairs/va.gov-team/issues/100167
- UX design description
    - For user-facing changes, link to UX prototype or wireframes if available
        - https://www.figma.com/design/cP7JJ9ExBtn2jNax9cfinA/1095-B?node-id=143-6763&p=f&t=EnYbLYihR1tfVyDf-0
    - Call out any engineering challenges; UX is reviewed in the Design Intent meeting
        - None. The work for this is mostly done because a previous team already built this.
- Frontend changes
    - Identify any significant code changes
        - The vets-website 1095-B download page(src/applications/static-pages/download-1095b/components/App/index.js) will likely need to be moved out of static-pages because we don't intend for it to be treated as a static page. We will need to find an appropriate place for that code to be placed in order for us to expose it in the va.gov interface.
    - Identify any new design system components needed or changes to current components
        - None expected.
    - Describe any product analytics being gathered
        - We will most likely keep analytics on how often the form is downloaded as well how often downloading fails. We may also want metrics on how often users who do not have downloadable 1095-B forms navigate to the download page. These analytics may be captured on the back end.
- Backend changes
    - Does the project introduce any new or unusual infrastructure dependencies?
        - No.
    - Do you need to poll any APIs for status?
        - When a user navigates to the 1095-B download page, the front end will need to ping the endpoint `/v0/form1095_bs/available_forms` to determine which forms are available. No services upstream of the vets-api will need to be contacted for this.
    - Are you handling all failure and error cases while in custody of your users's data?
        - Yes.
- Internal API changes
    - List new or modified APIs in vets-api
        - All endpoints for this feature already exist. Small modifications may be necessary.
            - /v0/form1095_bs/available_forms
            -  /v0/form1095_bs/download_pdf/:tax_year
            - /v0/form1095_bs/download_txt/:tax_year
    - Are you deprecating or removing any APIs?
        - No
    - Do you have API documentation?
        - Not that I'm aware of.
    - Describe expected call patterns
        - User requests available_forms. If that returns an available form for the most recent tax year, they can call the download_pdf endpoint. We do not intend to use the download_txt endpoint at this time but do have future plans to use it.
- External API changes
    - List new or modified APIs for upstream or external systems
        - None.
    - Describe expected call patterns
        - None. These endpoints do not currently consume upstream endpoints. Data is transferred from the enrollment system via files placed in an S3 bucket that are processed by a cron job on the vets-api.
    - What PII or PHI will be transmitted to/from the external systems?
        - None.
- Background jobs
    - List any required background processing
        - Job already exists and has been running for over a year: app/sidekiq/form1095/new1095_bs_job.rb Architecture and data flow for how this job gets its data can be found [here](../research/tech/Data%20Flow%20Diagram.md).
    - Describe error and dead letter handling
        - When errors are encountered in the data ingestion script, it logs descriptive errors and does not delete the file from the s3 bucket. No dead letter handling is necessary because this job runs daily on a cron.
- Data storage
    - Describe new or modified databases, tables or columns
        - None. Form1095B table and model already exists. No changes will be made.
    - Describe indexes and constraints
        - The form1095_bs table has an index of `t.index ["veteran_icn", "tax_year"], name: "index_form1095_bs_on_veteran_icn_and_tax_year", unique: true`.
    - Identify PII and PHI and where and how it will be stored, processed, expired and deleted
        - No new PII. The Form1095B record does contain the veteran icn, which is necessary for linking veterans and their forms.
- Libraries and dependencies
    - List new or updated dependences
        - None.
- Metrics, logging, observability, alerting
    - Identify key areas to monitor
        - We will want to monitor the three endpoints that currently exist for this as well as the background job used for ingesting data from S3.
- Infrastructure and network changes
    - List any changes or additions
        - None.
- Test strategy
    - Describe automated, manual and user acceptance test strategy
        - No automated testing is planned. There are two parts of this process that can be tested:
             1) Testing the process for ingesting the data placed in the S3 bucket can be done by requesting the HEC team to place a file of test data in the bucket. Then you can confirm from logging that the ingestion worked. Additionally, you can confirm via the command line that the Form1095b records were created correctly.
             2) Once the download page is added to the vets-website interface, manual testing can be done by logging in as a test user who has a 1095-B form in the vets-api database and downloading the form.
    - Describe required test data and test user accounts
        - Test data is being provided by the Enrollment system via S3 buckets.
- Rollout plan
    - List scope of any feature flags
        - A feature flag already exists on the vets-website and is turned on in staging. However, the download page is not exposed in the web interface.
    - Identify other teams to coordinate with
        - This project's rollout will not require coordination. It can be rolled out and rolled back without any other teams' involvement.
    - Describe rollback plan
        - Turn off feature flag for users.
- Internal administration tasks
    - What maintenance or administration tasks do you anticipate will need to be performed periodically?
        - Each year, the 1095-B template for the current tax year will need to be added to the vets-api repo.
    - Describe how you intend for these tasks to be performed (e.g., through an internal web page, through terminal access, etc.).
        - It's a very simple process of copying the file from the IRS website and adding it to the vets-api repo.
    - What questions do you have regarding items on the security checklist?
        - None. We will not be introducing any security concerns.
    - Are there any other security concerns about your project that you want to discuss?
        - No.
    - What threat modeling have you done, and how did the results influence your planned architecture?
        - This project doesn't introduce any new threats. It will be protected by
        the standard vets-website authentication process and no PII will be at risk.
