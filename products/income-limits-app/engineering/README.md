# Income Limits engineering information

## Business logic documentation

Business logic includes:
- Which tables contain what data
- How the BE uses those tables to derive the data the FE needs

Where it's documented:
- This [Mural](https://app.mural.co/invitation/mural/departmentofveteransaffairs9999/1683232214853?sender=uebde62ceb342c6477fb09406&key=71389d5d-cc99-471d-bcaf-2bcc34aaaedb) in the VA Mural account (Public Websites Room > Income Limits folder) has 
  - How to calculate fields
  - Which fields map to the values the front-end displays
- A PDF of the above mural (downloaded 8/4/23) is available in this github folder [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/income-limits-app/engineering/Income%20Limits%20API%20logic%20and%20data_2023-08-04%20(MVP).pdf).

Full details regarding Income Limits data / data sources can be found at [/products/income-limits-app/data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/income-limits-app/data/README.md).

## Overview
- Income is one aspect that determine's a Veteran's eligibility for benefits from VA. An existing application allows Veterans, their caregivers, family members, and others to look up the financial thresholds based on location and number of dependents.
- Please [click here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/income-limits-app) for a comprehensive explanation.

### Slack Channels
- [#sitewide-public-websites](https://dsva.slack.com/archives/C52CL1PKQ)

### Code Documentation
- Swagger documentation can be viewed as JSON locally by running the vets-api application server, and then visiting http://localhost:3000/income_limits/v1/apidocs in a browser window. Swagger UI can be accessed via https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/ and then searching for https://dev-api.va.gov/income_limits/v1/apidocs in the search bar at the top of the page.

### Local Configuration
- The Income Limits module is configured using the config gem in the `vets-api` repository.

#### Importing Content
Sidekiq is used to import content into the database. There are five Sidekiq scripts that accomplish this. Steps to run them are:

- Start Sidekiq: `bundle exec sidekiq`
- Open a rails console: `bin/rails console`
- Run each script below in any order

StdIncomeThresholdImport.new.perform

GmtThresholdsImport.new.perform

StdCountyImport.new.perform

StdStateImport.new.perform

StdZipcodeImport.new.perform


### The Check-In Module Endpoints
- /income_limits/v1/limitsByZipCode/
- /income_limits/v1/validateZipCode/

### Data active_support_cache_store

- The Income Limits application in vets-api will read data from PostgreSQL (part of the vets-api stack). To get data imported into the database, a cron-like script runner for Ruby on Rails, Sidekiq, will execute a script on a schedule. The script will pull data from one of two sources (CSV, or VES DB) in order to populate the PostgreSQL database.
- While the upstream data will eventually be coming directly from the VES Oracle database, it is not natively accessible by vets-api. So while we work with ESECC and VES to establish a networking connection between vets-api private clouds and the VES private cloud, an alternative is needed.
- The alternative upstream data source will be CSV files hosted on a public S3 bucket.
