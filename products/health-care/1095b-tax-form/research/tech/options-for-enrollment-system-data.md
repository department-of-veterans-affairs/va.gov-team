# Enrollment System Integration Options

## Purpose
- Propose various different options for accessing and serving data from the Enrollment System.

## Context
To enable veterans to download for the 1095-B form, we need to serve data from vets.gov to an authenticated veteran user. The specific data we need to present comes from the Enrollment System. There is not an existing vets-api endpoint that provides this data [to be confirmed], so we need a way to make that data available to vets.gov via the vets-api.

## Overview of Enrollment System Integration Options
Below are our current potential options for accessing and serving enrollment system data to vets.gov via the vets-API. 

- [Option 1: Live API](#option-1-live-api)

- [Option 2A: Batch Data Export to DB](#option-2a-batch-data-export-to-db)

- [Option 2B: Batch Data Export to Flat File](#option-2b-batch-data-export-to-flat-file)

- [Option 3: Manual Export to S3](#option-3-manual-export-to-s3)

- [Option 4: Taking PDF's Directly from the Enrollment System](#option-4-taking-pdfs-directly-from-the-enrollment-system)


### Baseline Risks and Assumptions For All Options
- **Assumptions**:
  - Vets.gov React-based frontend apps will get data from vets-api via modern [REST API](https://www.freelancinggig.com/blog/2018/11/02/what-is-the-difference-between-api-and-rest-api/) endpoints.
  - The app will be able to know the authentication status as well as core veteran profile information for the authenticated user.

- **Risks:**
  - Poor data quality will result in slowdown due to needing extra data validation/cleanup process.

## Option 1: Live API

- **Description:**
  - Vets-API gets enrollment data via [live API calls](https://blog.axway.com/amplify-products/api-management/whats-api-call) to the Enrollment System.

- **Pros:**
  - Data is current.
  - No data is stored in the VETS-API layer.

- **Cons:**
  - Could be brittle. Availability/connectivity to the Enrollment System will determine availability of the feature.

- **Key Assumptions:**
  - There is a **reasonable process to gain API access** to the Enrollment System.
  - There is a reasonable sandbox/testing environment.
  - **Access can be granted in the timeframe required.**
  - **We can quickly get access to the technical POCs to confirm the above.**

- **Key Risks:**
  - Being blocked/slowed down because of API access issues
  - Poor quality API or poor documentation 
  - Problems with or lack of testing or sandbox environment

- **Open Questions:**
  - Does an API or API endpoint exist for Enrollment System data?
    - If yes, can we get access?
    - What is the process and timeframe for gaining access?

## Option 2A: Batch Data Export to DB
- **Description:**
  - A [batch job](https://www.techopedia.com/definition/28727/batch-job-sap) runs within the Enrollment System to put the needed enrollment data into a flat file (csv or similar) in [AWS S3](https://aws.amazon.com/s3/), then a script inserts that data into a database table (i.e. [AWS Aurora PGSQL](https://aws.amazon.com/rds/aurora/?aurora-whats-new.sort-by=item.additionalFields.postDateTime&aurora-whats-new.sort-order=desc)). The VETS-API controller required can be built on a standard [‘CRUD’](https://www.sumologic.com/glossary/crud/) model/controller in [Rails](https://www.sitepoint.com/model-view-controller-mvc-architecture-rails/).
  - S3 -> Database

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

- **Open Questions:**
  - Is S3 a viable option? 
     - If yes, are there security risks associated with using S3?
     - Does the VA have any reservations or restrictions regarding using S3?

## Option 2B: Batch Data Export to Flat File
- **Description:**
  - Same as 2A but store data in S3 flat file. VETS-API makes use of [AWS S3 SQL](https://towardsdatascience.com/ditch-the-database-20a5a0a1fb72) query capability instead of traditional database.
  - S3 only

- **Pros:**
  - Fewer moving parts than 2A, simpler solution
  - Data is somewhat current (depending on frequency of batch job, but presumably within 24 hours)
  - No need for a script to pass data to a database.

- **Cons:**
  - Requires flat file quality to be adequate.
  - **Parsing/fetching data will be slower without a database/API**

- **Key Assumptions:**  
  - Data quality is adequate.

- **Open Questions:**
  - Is using a flat file in S3 a viable option? 
     - If yes, what are the security risks associated with this option?
     - Does the VA have any reservations or restrictions regarding using flat files in S3?

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

- **Open Questions:**
  - Is there an individual or position outside of our team that can manually upload flat files to S3 on a regular or semi-regular basis?


## Option 4: Taking PDF's Directly from the Enrollment System
- **Description:**
  - If PDF's stored in Enrollment System already are suitable, we could simply display the correct PDF to the user on the front end and bypass dealing with the raw data altogether

- **Pros:**
  - Fastest way for the short time frame.
  - No need to deal with filling PDF's or data

- **Cons:**
  - We cannot really change or validate data thats already merged into a PDF.

- **Key Assumptions:**
  - The PDF's that the print vendor sends back are sent back in a short enough timeframe to be suitable to show to Veterans.
  - There is a way to query the Enrollment System to fetch the PDF's directly.

- **Key Risks:**
  - If the PDF's take a long time to send back or are sent back at unpredictable times, Veterans might not be able to see the PDF when they need it.
  - If there is no way to directly query the Enrollment System for PDF's, we would still need a batch script to upload the PDF's to an S3 bucket or something of the sort.

- **Open Questions:**
  - Can we query the Enrollment System for a specific PDF based on a unique Veteran ID?
  - How long does it take to receive PDF's from the print vendor and store in the Enrollment System?
    - Is this length of time short enough that we can use those generated PDF's in time for tax season so Veterans can access the form in a timely manner?


## Next Steps
- Conduct research on VA's internal PDF generation process (link to research below) 
  -  [Breakdown of the current VA PDF generation process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/1095b-tax-form/research/tech/va-pdf-generation-process.md)
- Conduct analogous research into possible PDF software solutions or services
- Find out what the print vendor uses for PDF functionality and identify overlap
- Talk to the following POC's:
  - Informatics Department
    - POC: George Tidwell and Angela Brown
    - Purpose: Learn about data quality and request samples of data (can be dummy data, just need to learn the structure)
  - OI&T
    - POC: Joshua Faulkner
    - Purpose: Technical questions regarding enrollment data, API access, sending data, and batch processes (if any)
