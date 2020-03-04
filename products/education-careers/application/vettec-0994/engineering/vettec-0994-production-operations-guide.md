# 0994 VetTec - Production Operations Guide


Table of Contents
=================

[0994 VetTec Form Processing](#0994-VetTec-Form-Processing)

> [Summary](#summary)

> [Submission Process](#Submission-Process)

> [Process Flow](#Process-Flow)

[Local Environment Testing](#Local-Environment-Testing)

[Staging Environment Testing](#Staging-Environment-Testing)

0994 VetTec Form Processing
==========================

Summary
-------

The 0994 VetTec Education form will leverage the software developed in implementing the other education forms such as the 1990.  One difference is that the VetTec form will require authentication.

Since the from requires authentication the application will leverage the pre-fill capabilities to pre-populate veteran profile data.


Submission Process
------------------

Veterans will log into the VA.gov website to start the processing of the 0994.  Their profile data will be pre-populated.  Some of this is editable, but any edits made will not propagate to any backend systems.  The fields definitions can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/application/vettec-0994/engineering/0994.field.validations-limits-errors.xlsx).  The form data is saved via the in_progress table allowing the veteran to return at a later time to completed the submission.  At the end of the flow is a review and submit page.  On this page the veteran can make changes to any of the elements of the form prior to submission.

On submission the vets-api is invoked and the form data is saved to the saved_claims table.  Records are also created in two education tables (EducationBenefitsClaim and EducationBenefitsSubmission) to track creation of the daily spool file.  A daily job is run that creates the spool file based on data stored in the database tables.  The spool file is then SFTP'ed to a server for forwarding to the regional offices.  The spool files are pre-fixed with a number corresponding to the regional office required for processing the data.

At the completion of the 0994 the veteran is forwarded to the 1990 form if they have not completed one previously.  This is based on a question in the workflow.


Process Flow
------------

The following diagram depicts the processing for 0994 forms:

https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/application/vettec-0994/engineering/vettec-architecture.png

<br>


Local Environment Testing
==========================

Testing of some of the form processing can be executed locally via the native setup or the Docker setup.  An overview of that testing is documented below.

**rspec testing**
- Get API local environment running in native mode
- Instruction for native setup [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/native.md)
- Change cache_dir value in config/settings/development.yml for the native mode configuration based on comments in the file
- Install and run natively
    - checkout branch
    - bundle install
    - bundle exec rake db:setup
    - bundle exec rails server (skip when running rspec tests)


Spool File Testing
- Remove any spool files from vets-api/tmp/spool_files
- Modify file create_daily_spool_files_spec.rb and comment out below lines
    - FileUtils.remove_dir('tmp/spool_files')
    - FileUtils.rm_rf(Dir.glob(spool_files))
    - File.delete(file_path)
    - rspec spec/jobs/education_form/create_daily_spool_files_spec.rb 
	    - compare data in 307_09162016_070000_vetsgov.spl with what is in JSON vets-api/spec/fixtures/education_benefits_claims/0994/kitchen_sink.json
	    - 307 = Buffalo

**Local Testing with Docker**

Testing locally does not include SFTP for the spool files or emailing of the daily reports.  An alternative to verify SFTP is documented later in this section.

In the local Docker based environment the database tables can be inspected to check the processing for the 0994.  This can be accomplished using PGAdmin or the Rails Console.  Both techniques are documented below.

Vets API application stores data into PostgreSQL database tables,
tables are listed in this section. To query the tables on dev, staging
and prod, one needs access to rails console. Details for rails console are documented here [Rails Console](#rails-console)

Local Testing URL: http://localhost:3001/education/apply-for-education-benefits/application/0994/introduction


**PGAdmin**

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

There are three tables that are leveraged in processing for the education forms.  They are summarized below.  The database columns are highlighted in the Ruby Models section
- saved_claim
    - contains the encrypted form data
- education_benefits_claim
    - tracks processing of education forms 
- education_benefits_submission
    - tracks submission status and reporting attributes

**Ruby Models**
The database can also be queried using the rails console.  To run the console connect to the running vets-api instance and run 'rails c'.  Below are the three models corresponding to the database tables and some example queries.

EducationBenefitsClaim
- id
- submitted_at
- processed_at
- created_at
- updated_at
- encrypted_form
- encrypted_form_iv
- regional_processing_office
- form_type
- saved_claim_id


EducationBenefitsSubmission
- id
- region
- created_at
- updated_at
- chapter33
- chapter30
- chapter1606
- chapter32
- status
- education_benefits_claim_id
- form_type
- chapter35
- transfer_of_entitlement
- chapter1607


**Sample Rails Console Queries**

- SavedClaim.last
- EducationBenefitsClaim.count
- EducationBenefitsClaim.last
- EducationBenefitsClaim.where(processed_at: nil) - Find records not sent to spool file
- EducationBenefitsClaim.where(processed_at: nil).all.to_a - Shows all records,not truncated result set
- EducationBenefitsClaim.order("created_at DESC")
- EducationBenefitsClaim.where("created_at >= ?", Date.today.to_date) 
- EducationBenefitsClaim.where("created_at >= ?", "2019-02-08".to_date)
- EducationBenefitsClaim.where("created_at >= ? AND created_at < ?", "2019-02-09".to_date, "2019-02-10".to_date)
- EducationBenefitsClaim.where("id = ? AND form_type = ?", "336", "1990")
- EducationBenefitsClaim.where(id: "215")
- EducationBenefitsClaim.where(form_type: "1990")
- EducationBenefitsClaim.where(form_type: "0994")

- EducationBenefitsSubmission.count
- EducationBenefitsSubmission.last.status
- EducationBenefitsSubmission.where("status = ? AND form_type = ?",  "submitted", "0994")
- EducationBenefitsSubmission.where("status like ?", "%subm%")
- EducationBenefitsSubmission.where(status: "processed")
- EducationBenefitsSubmission.where("created_at >= ? AND created_at < ?", "2019-02-07".to_date, "2019-02-08".to_date)


created_at >= :start_date AND created_at <= :end_date",
  {:start_date => params[:start_date], :end_date => params[:end_date]})

- Create Spool File
    - Run this job in console to create spool files
        - EducationForm::CreateDailySpoolFiles.new.perform
        - Status changes from submitted to processed in EducationBenefitsSubmission
        - process_at is updated after spool file creation in EducationBenefitsClaim
    - Ruby code for creating the spool file app/workers/education_form/create_daily_spool_files.rb

- Run daily report 
    - EducationForm::CreateDailyYearToDateReport.new.perform 
    - Mailer file -> app/mailers/year_to_date_report_mailer.rb

**Loading Data to Database to support testing**
Bulk records can be loaded into the database to support regression testing. The queries are documented below but this need to run as a transaction so this is still a Work in Progress...

**Inserting Records - WIP**

This requires putting both education inserts in a transaction with saved_claims insert

EducationBenefitsClaim.create!(id: 4, submitted_at: nil, processed_at: nil, created_at: "2019-01-27 15:01:49.577801", updated_at: "2019-01-27 20:25:24.490162", encrypted_form: nil, encrypted_form_iv: nil, regional_processing_office: "eastern", form_type: "1990", saved_claim_id: 1)

EducationBenefitsSubmission.create!(id: 6, region: "eastern", created_at: "2019-01-27 15:01:49.577801", updated_at: "2019-01-27 20:25:24.490162", chapter33: true, chapter30: true, chapter1606: true, chapter32: true, status: "submitted", education_benefits_claim_id: 4, form_type: 1990, chapter35: false, transfer_of_entitlement: false, chapter1607: false)

**Deleting Records**

EducationBenefitsClaim.where(:id=>4).first.delete
EducationBenefitsSubmission.where(:id=>4).first.delete


**Pre-fill**
- Pre-fill can be tested by running website locally (vets-website) and logging in as a test  user
- To test go to this endpoint (http://localhost:3000/v0/in_progress_forms/22-0994)

**Configure SFTP Docker Image**
SFTP can be leveraged in the local Docker environment using a SFTP image.  Instructions for creating and configuring are below.
- Download zip file containing SFTP server docker files [here](https://confluence.boozallencsn.com/display/VACM/SFTP+Setup)
- Build the docker image by running 'docker build -t vettec-dev-sftp-server .'
- Add the following lines to the vets-api docker-compose.yml file.  DO NOT check this into repo
    - Add under "services"
```
  sftp:
    image: vettec-dev-sftp-server:latest
    ports:
      - "22:22"
```
- Update "depends_on" and "links" 

```  
    depends_on:
      - postgres
      - redis
      - sftp
    links:
      - postgres
      - redis
      - sftp
```

To support SFTP in development environment changes are required to several files:
- factory.rb
    - Change SFTPWriter::Local to SFTPWriter::Remote
- remote.rb
    - comment out ##DRHmkdir_safe(path)


- Rebuild and start the docker environment


Staging Environment Testing
===========================



**Staging Environment Testing Summary**

- Integration testing will be conducted in the staging environment.  The staging URL is <https://staging.va.gov/education/apply-for-education-benefits/application/0994/introduction> 

- Test users can be found here: 
<https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/mvi-staging-users.csv>


The Staging environment is integrated with a SFTP server and a mail server so complete end to end testing can be executed in Staging.  Access to the SFTP server is managed by Chris Marino (Christopher.Marino2@va.gov).  Email addresses are configured in the mailers files located in "app/mailers/".

It will be important to test SFTP failures.  Records are marked as completed once the have been submitted.  If records are not transmitted they will retried.  The application uses a date and time for the filename so if I record is retried during that same interval the same file name would be used and the previous file would overwritten.  This should be considered when running frequent tests in the staging environment.

Access the database via PGAdmin is not supported in staging.  The Rails Console can be leveraged in the Staging environment to query the database as documented above in the local testing section.  This requires getting the IP address of one of the staging servers and ssh'ing to that instance.

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


Another alternative for executing the daily jobs is through the sidekiq console.  The console can be access via this link https://staging-api.vets.gov/sidekiq/recurring-jobs

The schedule is configured via "config/sidekiq_scheduler.yml".  Sample schedule below:

```
	CreateDailySpoolFiles:
	cron: "0 3 * * MON-FRI America/New_York"
	class: EducationForm::CreateDailySpoolFiles
	description: "Generate a daily set of spool files and transmit them over SFTP to a backend system"
	EducationForm::CreateDailyFiscalYearToDateReport:
	cron: "0 4 * * * America/New_York"
	description: "Send the daily report to VA stakeholders about Education Benefits submissions"
	EducationForm::CreateSpoolSubmissionsReport:
	cron: "15 4 * * MON-FRI America/New_York"
	description: "Send the daily report to the contact center about spool file submissions"
```


**Staging Environment Testing Approach**

Staging test cases and data will be tracked in Confluence.  Data will be stored [here](https://confluence.boozallencsn.com/display/VACM/VetTec+Testing).  For each test case the following steps should be followed.

- Collect form submission data using the Redux tool
- Collect submission response via the Chrome devtools
- Files should be named using the following naming convention
    - USER-CONFIRMATION_NUMBER-BROWSER-MMDD-HHMM-FILE_TYPE.json for example:
    - "Webb-V-EBC-1-0207-1146-Redux.json" for Redux file
    - "Webb-V-EBC-1-0207-1146-devtools.json" for Chrome Devtools response
- If an error is encountered the Confirmation number should be "ERROR"
- If an error is encountered the error result should be captured via the Chrome devtools response object





Monitoring and Reporting Tools
------------------------------


-   Monitoring and metrics information is provided via internal tools
    available to the va.gov team. To access these internal tools such as
    the Jenkins dashboard, Prometheus, Sentry Etc., you need to set up a
    local SOCKS proxy. This process is documented here
    - <https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md>.
    

Sentry provides access to server logs and can be leveraged to search for errors from the application.

- Sentry (http://sentry.vetsgov-internal/vets-gov/platform-api-staging/)

Prometheus pulls metrics from several exposed metrics endpoints. 

- Prometheus -http://prometheus-staging.vetsgov-internal:9090/prometheus
