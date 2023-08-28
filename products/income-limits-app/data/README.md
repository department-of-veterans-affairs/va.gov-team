# Income Limits Data Sources

The (Income Limits application)[https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/income_limits] reads data from PostgreSQL (part of the vets-api stack). To get data imported into the database, a cron-like script runner for Ruby on Rails, Sidekiq, (executes import scripts)[https://github.com/department-of-veterans-affairs/vets-api/tree/master/app/workers/income_limits] on a schedule (currently at midnight every 3 months). The scripts pull data from CSV data files in order to populate the PostgreSQL database.

## VES
The data that the Income Limits application uses is sourced from the (Veterans Enrollment System database)[https://dev.ves.va.gov/esr/]. This data is housed in Oracle databases within the VA infrastructure.

During development of the Income Limits application, the VES database was not accessible via vets-api. In that interim, we opted to export the VES data to CSVs and host them on S3 in a public folder, a location that vets-api can always pull from. Once we establish connectivity directly to the VES Oracle database, we can move away from this manual data shuffling.

### Zip -> County Data
In the VES database, the std_zipcode table houses a large dataset which contains a mapping of every U.S. county to their respective zip codes. This data is sourced from a VA Standard Data Services team, who distribute updates to the VES DB team.

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

### Exporting XLSX to CSV
In order to export the Excel .XLSX worksheet to CSV, perform the below instructions. 

#### Export to CSV from Excel
1. Click the File menu
2. In the sidebar, click Export
3. In the Export window, click the Change File Type option
4. In the Change File Type area, click the CSV (Comma delimited) file type
5. Click Save As
6. In the dialog that opens, name your new file and change the file location if necessary.
7. Click the Save button

![Screenshot 2023-05-03 at 8 42 35 AM](https://user-images.githubusercontent.com/221539/235968938-13d5dcc8-7e0e-4f12-b5de-2c343b9978a5.png)

![Screenshot 2023-05-03 at 8 42 54 AM](https://user-images.githubusercontent.com/221539/235968976-a998efea-b67c-4cf2-aa9c-6d33e7063349.png)

See also https://support.microsoft.com/en-us/office/save-a-workbook-to-text-format-txt-or-csv-3e9a9d6c-70da-4255-aa28-fcacf1f081e6

#### Export to CSV from Google Sheets
1. Click the File menu
2. Select the Download option
3. Select the Comma Separated Values (.csv) option

![Screenshot 2023-05-03 at 8 53 45 AM](https://user-images.githubusercontent.com/221539/235971084-5944a072-b327-4b31-bded-62a6ac70c876.png)