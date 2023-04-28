# Income Limits Data Sources

The Income Limits application in vets-api will read data from PostgreSQL (part of the vets-api stack). To get data imported into the database, a cron-like script runner for Ruby on Rails, Sidekiq, will execute a script on a schedule. The script will pull data from one of two sources (CSV, or VES DB) in order to populate the PostgreSQL database.

While the upstream data will eventually be coming directly from the VES Oracle database, it is not natively accessible by vets-api. So while we work with ESECC and VES to establish a networking connection between vets-api private clouds and the VES private cloud, an alternative is needed.

The alternative upstream data source will be CSV files hosted on a public S3 bucket.

## CSV
There are 5 data files (created from VES Oracle db tables). Each of the files will need to live in a public S3 bucket so that they are reachable by any environment that needs to use them. There is no sensitivity to the data so making them public removes a need for authenticating to S3 to retrieve the files.

### CSV URLs
The CSV files will be accessible at the following URLs:
- https://sitewide-public-websites-income-limits-data.s3-us-gov-west-1.amazonaws.com/std_zipcode.csv
- https://sitewide-public-websites-income-limits-data.s3-us-gov-west-1.amazonaws.com/std_state.csv
- https://sitewide-public-websites-income-limits-data.s3-us-gov-west-1.amazonaws.com/std_incomethreshold.csv
- https://sitewide-public-websites-income-limits-data.s3-us-gov-west-1.amazonaws.com/std_gmtthresholds.csv
- https://sitewide-public-websites-income-limits-data.s3-us-gov-west-1.amazonaws.com/std_county.csv

### VES Export to Excel Files

When the data is exported from Oracle, Excel .xsls files are generated. While it is possible to use an .xlsx file as a source for the vets-api import process, we have opted to convert them to CSV files in order to make the processing script leaner and contain less technical debt.

### Converting XLSX to CSV

Follow these guidelines to convert the Excel .xlsx files to .csv:
1) Obtain .xlsx documents from VES (POC: Joshua Faulkner)
2) Create a new worksheet in each document with is a copy of the primary sheet (to avoid munging the exported data)
3) Format the columns as described below
4) Upload the files to the S3

Due to the nature of the formatting applied to some columns of the Excel files, directly exporting them to CSV will generate data that does not conform to the data schemas. Therefore, some columns need to be formatted prior to cutting the CSV. Below lists the formatting changes for columns in each file.

std_county.xlsx -> std_county.csv
- ID: number
- COUNTYNUMBER: 3 digit number (with leading zeros)
- STATE_ID: number

std_gmtthresholds.xlsx -> std_gmtthresholds.csv
- ID: number
- EFFECTIVEYEAR: number
- FIPS: number
- TRHD1: number
- TRHD2: number
- TRHD3: number
- TRHD4: number
- TRHD5: number
- TRHD6: number
- TRHD7: number
- TRHD8: number
- MSA: number

std_incomethresdhold.xlsx -> std_incomethresdhold
- ID: number
- INCOME_THRESHOLD_YEAR: number
- EXEMPT_AMOUNT: number
- CHILD_INCOME_EXCLUSION: number
- DEPENDENT: number
- ADD_DEPENDENT_THRESHOLD: number
- PROPERTY_THRESHOLD: number
- PENSION_THRESHOLD: number
- PENSION_1_DEPENDENT: number
- ADD_DEPENDENT_PENSION: number
- THRESHOLD_EFFECTIVE_DATE: number
- AID_AND_ATTENDANCE_THRESHOLD: number

std_state.xlsx -> std_state.csv
- ID: number
- FIPSCODE: 2 digit number (with leading zeros)
- COUNTRY_ID: number

std_zipcode.xlsx -> std_zipcode.csv
- ID: number
- ZIPCODE: 5 digit number (with leading zeros)
- ZIPCLASSIFICATION_ID: number
- PREFERREDZIPPLACE_ID: number
- STATE_ID: number
- COUNTYNUMBER: 3 digit number (with leading zeros)
