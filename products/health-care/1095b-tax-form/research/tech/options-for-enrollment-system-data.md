# Enrollment System Integration Options


## Purpose
- Propose various different options for accessing and serving data from the Enrollment System. This document has been updated in light of technical discovery. To see all original options, view Git history. 

## Context
To enable veterans to download for the 1095-B form, we need to serve data from vets.gov to an authenticated veteran user. The specific data we need to present comes from the Enrollment System. 

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


## Option 1: Live API | NO LONGER AN OPTION 


- **Description:**
  - <strike>Vets-API gets enrollment data via [live API calls](https://blog.axway.com/amplify-products/api-management/whats-api-call) to the Enrollment System.</strike>
  - While there is a live API that would fetch data from the Enrollment System, we need the data from a specific point in time (when it is sent to the print vendor) and if we were to use the live API there would be a discrepancy between the paper form and the digital form. Because of this, **using the live API is no longer an option.** 
<strike>
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
  - How good is the connectivity to the API (if it does exist) 
  - Are there any existing teams/codebases/systems/repos that are integrating vets-api with the Enrollment System?* </strike>
  
## Option 2A: Batch Data Export to DB
- **Description:**
  - A [batch job](https://www.techopedia.com/definition/28727/batch-job-sap) runs within the Enrollment System to put the needed enrollment data into a flat file (csv or similar) in [AWS S3](https://aws.amazon.com/s3/), then a script inserts that data into a database table (i.e. [AWS Aurora PGSQL](https://aws.amazon.com/rds/aurora/?aurora-whats-new.sort-by=item.additionalFields.postDateTime&aurora-whats-new.sort-order=desc)). The VETS-API controller required can be built on a standard [‘CRUD’](https://www.sumologic.com/glossary/crud/) model/controller in [Rails](https://www.sitepoint.com/model-view-controller-mvc-architecture-rails/).
  - S3 -> Database

- **Pros:**
  - Having a database will allow for faster and easier parsing/fetching of data 
  - There are existing batch scripts to transfer flat files to an S3 bucket, making that step trivial
  - Data will be current because of frequency of batch job (receiving new flat files)

- **Cons:**
  - **Requires development of a few moving parts (batch script, ingest script, database table, API) on a short timeframe.**
  - Requires monitoring of jobs to validate success and operational support to deal with batch failures.
  - Batch job has to run every day

- **Key Assumptions:**
  - The Enrollment System team has the capacity to create the script on our timeline.
  - The data quality is such that the ingest script won’t be error prone.

- **Key Risks:**
  - Might need additional permissions for adding to vets-api repo.
  - Delaying timeline to build out all the moving parts.



## Option 2B: Batch Data Export to Flat File
- **Description:**
  - Same as 2A but store data in S3 flat file. VETS-API makes use of [AWS S3 SQL](https://towardsdatascience.com/ditch-the-database-20a5a0a1fb72) query capability instead of traditional database. 
  - S3 only

- **Pros:**
  - Fewer moving parts than 2A, simpler solution
  - Data is current (batch scripts run every day) 
  - No need for a script to pass data to a database.
  - There are no barriers to using S3 and creating a batch script to export to S3 is trivial
  - Flat file quality appears to be adequate 
  - Data does not have to be converted to flat file (text delimited doc) 

- **Cons:**
  - **Parsing/fetching data will be slower without a database**

- **Key Assumptions:**  
  - Data quality is adequate.



## Option 3: Manual Export to S3 | NO LONGER AN OPTION

- **Description:**
  - <strike>Same as Options 2A/B, but the export from Enrollment System is done as a manual export – i.e. an individual on the VA network uploading a file to S3 via web interface or equivalent.</strike>
  - Since there are already batch scripts to export to S3, manual export doesn't make sense plus we would not have a VA resource/individual. 

<strike>

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
</strike>

## Option 4: Taking PDF's Directly from the Enrollment System

- **Description:**
  - PDF's are stored in a binary format in the enrollment system. We would have to take the binary format, convert it to PDF, store the converted PDFs (100M+) and setup a method to query for PDF based on ICN (we would have the ICN info). 

- **Pros:**
  - Removes having to deal with batch scripts
  - No need to deal with filling out PDF's programatically

- **Cons:**
  - Storing 100 Million PDFS will be expensive, and take up a huge amount of storage on the cloud 
  - Converting from binary adds another step and will have to be done every time a veteran updates their information
  - It takes 10 days for the print vendor to send back the PDFs
  - 
<strike>

- **Key Assumptions:**
  - The PDF's that the print vendor sends back are sent back in a short enough timeframe to be suitable to show to Veterans.
  - There is a way to query the Enrollment System to fetch the PDF's directly.
 

- **Key Risks:**
  - If the PDF's take a long time to send back or are sent back at unpredictable times, Veterans might not be able to see the PDF when they need it.
  - If there is no way to directly query the Enrollment System for PDF's, we would still need a batch script to upload the PDF's to an S3 bucket or something of the sort.
   </strike>


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
