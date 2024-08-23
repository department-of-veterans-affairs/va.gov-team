# Income Limits API Data Source and Migrations

## Overview 
The [Income Limits](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/income_limits) API utilizes data from VHAs Veterans Enrollment System (VES) database.

This document describes how this data is accessed and imported into the vets-api postgres database.

## Data Source
The data that the Income Limits API uses is sourced from the [Veterans Enrollment System database](https://dev.ves.va.gov/esr/). This is an **Oracle** database which holds, among other things, income thresholds, zip codes, states, and county information. We obtained access to this database by working with VES so that we could pull the data into vets-api.

While the data is available to some systems, there are some limitations that caused us to build a decoupled migration process.

## Network Access Limitation
The VES database is an internal VA asset that isn't accessible from most systems even with the VA network. We worked with VA IT to create a working network pathway from all vets-api environments, but even then we cannot access the database from our local systems using SOCKS.

The VES Oracle database resides in the VA network but within a different AWS region and Virtual Private Cloud. Thanks to VA IT, they were able to create a network policy to allow connectivity from any vets-api environment. We leverage this connection to import data into vets-api database.

### Oracle + Ruby + Apple Silicon CPU Limitation
To query an Oracle database from Ruby requires the [`ruby-oci8`](https://github.com/kubo/ruby-oci8) gem which itself needs the Oracle Instant Client library installed. As previously mentioned, the library isn't compatible with Apple Silicon (M1, M2, etc) CPUs, preventing us from bundling it into the vets-api codebase as a dependency. As a result, we opted to create a data migration process that moves the data into the vets-api database (Postgres) using a two step process:

1. Migrate from VES DB to CSV files stored on S3.
2. Migrate from S3 CSVs to Postgres

## Data Migrations

### Migrating from VES to S3
Data moves from the VES Oracle database into CSV files stored on S3 using a [Github Action](https://github.com/department-of-veterans-affairs/vets-api/blob/master/.github/workflows/income-limits-data-sync.yml). The GHA executes the action using a [self-hosted runner](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners). It is imperative that the GHA runs on a self-hosted runner so that the action has access to the internal VA network, which is a prerequisite for accessing the VES database.

The action runs on the 28th of each month at 12:35 AM.

When the GHA executes, it sets up a standalone Ruby environment (GHAs do not have access to the vets-api Rails environment) in the container, [queries the VES database](https://github.com/department-of-veterans-affairs/vets-api/blob/master/.github/scripts/income-limits-data-sync.rb), and exports the results to CSV files. The files are then moved to a [public S3 bucket](https://github.com/department-of-veterans-affairs/vets-api/blob/master/.github/workflows/income-limits-data-sync.yml#L103) that vets-api can always reach.

#### Migrating from S3 to Postgres
A scheduled [series of Sidekiq jobs](https://github.com/department-of-veterans-affairs/vets-api/blob/bbc93d8245e47a4f103608f54a925714d7b9a7c0/lib/periodic_jobs.rb#L55-L64) execute migration scripts which pull from S3.

eg:
```ruby
  mgr.register('0 0 1 */3 *', 'IncomeLimits::GmtThresholdsImport')
  # Import income limit data CSVs from S3
  mgr.register('0 0 1 */3 *', 'IncomeLimits::StdCountyImport')
  # Import income limit data CSVs from S3
  mgr.register('0 0 1 */3 *', 'IncomeLimits::StdIncomeThresholdImport')
  # Import income limit data CSVs from S3
  mgr.register('0 0 1 */3 *', 'IncomeLimits::StdStateImport')
  # Import income limit data CSVs from S3
  mgr.register('0 0 1 */3 *', 'IncomeLimits::StdZipcodeImport')
  # Import income limit data CSVs from S3
```

Each of these scripts pull the related CSV from the public S3 bucket and run [ActiveRecord transactions](https://api.rubyonrails.org/classes/ActiveRecord/Transactions/ClassMethods.html) to persist the data to Postgres.

At this time the scripts are scheduled to run every 3rd month at midnight.

## Public CSV Files
The CSV files will be accessible at the following URLs:
- https://sitewide-public-websites-income-limits-data.s3-us-gov-west-1.amazonaws.com/std_zipcode.csv
- https://sitewide-public-websites-income-limits-data.s3-us-gov-west-1.amazonaws.com/std_state.csv
- https://sitewide-public-websites-income-limits-data.s3-us-gov-west-1.amazonaws.com/std_incomethreshold.csv
- https://sitewide-public-websites-income-limits-data.s3-us-gov-west-1.amazonaws.com/std_gmtthresholds.csv
- https://sitewide-public-websites-income-limits-data.s3-us-gov-west-1.amazonaws.com/std_county.csv
