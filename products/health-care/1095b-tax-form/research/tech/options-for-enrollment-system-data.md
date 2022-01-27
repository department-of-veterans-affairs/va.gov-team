# Data Discovery

## Goals of this data discovery
- Learn where we need to pull data from to be able to allow veterans to download the 1095-B tax form


## Context
To enable veterans to download for the 1095-B form, we need to serve data from vets.gov to an authenticated veteran user. The specific data we need to present comes from the Enrollment System. There is not an existing vets-api endpoint that provides this data [to be confirmed], so we need a way to make that data available to vets.gov via the vets-api.

## Options for Enrollment System Data
Below are our current potential options for accessing and serving enrollment system data to vets.gov via the vets-API. 

- [Option 1: Live API](#option-1-live-api)

- [Option 2A: Batch Data Export to DB (S3 -> Database)](option-2a-batch-data-export-to-DB-(S3-->-Database))

- [Option 2B: Batch Data Export to Flat File (S3 only)](option-2b-batch-data-export-to-flat-file-(s3-only))

- [Option 3: Manual Export to S3](option-3-manual-export-to-s3)


### Baseline Risks and Assumptions For All Options
- **Assumptions**:
  - Vets.gov React-based frontend apps will get data from vets-api via modern REST API endpoints.
  - The app will be able to know the authentication status as well as core veteran profile information for the authenticated user.

- **Risks:**
  - Poor data quality will result in slowdown due to needing extra data validation/cleanup process.

## Option 1: Live API

- **Description:**
  - Vets-API gets enrollment data via live API calls to the Enrollment System.

- **Pros:**
  - Data is current.
  - No data is stored in the VETS-API layer.

- **Cons:**
  - Could be brittle. Availability/connectivity to the Enrollment System will determine availability of the feature.

- **Key Assumptions:**
  - There is a reasonable process to gain API access to the Enrollment System.
  - There is a reasonable sandbox/testing environment.
  - **Access can be granted in the timeframe required.**
  - **We can quickly get access to the technical POCs to confirm the above.**

- **Key Risks:**
  - Being blocked/slowed down because of API access issues
  - Poor quality API or poor documentation 
  - Problems with or lack of testing or sandbox environment

## Option 2A: Batch Data Export to DB (S3 -> Database)
- **Description:**
  - A batch job runs within the Enrollment System to put the needed enrollment data into a flat file in AWS S3, then a script inserts that data into a database table (i.e. AWS Aurora PGSQL). The VETS-API controller required can be built on a standard ‘CRUD’ model/controller in Rails.

- **Pros:**
  - Data is somewhat current (depending on frequency of batch job, but presumably within 24 hours)
  - Having a database will allow for faster and easier parsing/fetching of data 

- **Cons:**
  - **Requires development of a few moving parts (batch script, ingest script, database table, API) on a short timeframe.**
  - Requires monitoring of jobs to validate success and operational support to deal with batch failures.

- **Key Assumptions:**
  - The Enrollment System team has the capacity to create the script on our timeline.
  - The data quality is such that the ingest script won’t be error prone.

- **Key Risks:**
  - Might need additional permissions for adding to vets-api repo.
  - Delaying timeline to build out all the moving parts.

## Option 2B: Batch Data Export to Flat File (S3 only)
- **Description:**
  - Same as 2A but store data in S3 flat file. VETS-API makes use of AWS S3 SQL query capability instead of traditional database.

- **Pros:**
  - Fewer moving parts than 2A, simpler solution
  - Data is somewhat current (depending on frequency of batch job, but presumably within 24 hours)
  - No need for a script to pass data to a database.

- **Cons:**
  - Requires flat file quality to be adequate.
  - **Parsing/fetching data will be slower without a database/API **

- **Key Assumptions:**  
  - Data quality is adequate.

## Option 3: Manual Export to S3
- **Description:**
  - Same as Options 2A/B, but the export from Enrollment System is done as a manual export – i.e. an individual on the VA network uploading a file to S3 via web interface or equivalent.

- **Pros:**
  - Fewer barriers to getting the solution built.
  - Possible good interim step to meet deadline to launch MVP, then build out more robust data update process.

- **Cons:**
  - Data will not be as up to date.
  - Data validation required with each manual update.

- **Key Assumptions:**
  - Infrequently updated data is acceptable from a functionality perspective.
  - Manual S3 upload access is feasible.

 - **Key Risks:**
  - Relying on an individual to upload file to S3.



