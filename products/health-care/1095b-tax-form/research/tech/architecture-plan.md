Architecture Plan
=================

Overview
--------

This document provides detailed information on the architecture for generating the 1095B form via data from the Enrollment System.

**Enrollment System -> S3 Bucket -> Database -> API -> PDF Generation -> React App**

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/1095b-tax-form/research/tech/Screen%20Shot%202022-02-03%20at%205.04.33%20PM.png)

[Link to Mural](https://app.mural.co/t/innovationboards1199/m/innovationboards1199/1643907581165/b80fb9dbbef9a6beb4af59cbcfba076830226051?sender=u257b57923703399236fc7616)

Enrollment System
-----------------

Where we get the data from

**Steps**

1.  Batch job runs twice a week creating new flat file (text delimited ) listing all rows of veterans who called in to update their data
2.  Flat file is sent to print vendor and simultaneously can be sent to an S3 bucket via batch script

**Requirements**
- Follow up with Josh/POCs that they have everything they need from us to set up the script
- Make sure what we need is communicated clearly and in writing for easy confirmation 

**Questions**

- How to validate that batch script is operational, deal with any potential downtime/etc?
- If no data has been updated since the last batch, will we receive an empty file? 


S3 Bucket
---------

Where the initial flat file is stored before it is converted

**Steps**

1.  Script listens for new files being added to the bucket
2.  If script finds a new file, triggers a process to read the file, identify new data points, send to database

**Requirements**

- Setting up S3 bucket

- Writing script/lambda function from #2

**Questions**

- What are the VA conventions for setting up an S3 bucket?
- Can we have a lambda function listening for new files to hit the bucket?
- How long do we want to store files in the bucket? Do we want to keep both versions, pre and post conversion for database?
- Who do we need to talk to in order to get AWS access? Or do we run aterraform script to create a new bucket?



Database (Aurora PGSQL)
-----------------------

Where all the data will be stored where its easy to sort/query/filter

**Steps**

1.  Initially populated with data sent to print vendor from S3 bucket
2.  Process to update rows of data that have been changed per reading from S3 Bucket
3.  Data queries passed through API

**Requirements**

- Setting up database

- Write ingest script to populate + update data

**Questions**

- What are the VA conventions for setting up an Aurora PGSQL database?
- Do we need an AWS account to create the database? If so, who can get us access? How long will getting access take? 

API (vets-api)
--------------

To get data from the database in a secure, reliable, fast way

**Steps**

1.  User makes call for their PDF
2.  Triggers an API call to query the database
3.  Data is received
4.  Controller makes call to generate the PDF with data

**Requirements**

- Create the API for querying database

- Create the controller for making the call to generate a PDF

- Writing tests to validate API

- Error handling

**Questions**

- Where in vets-api should the new API live?
- What are the testing/ QA requirements? 

PDF Generation
--------------

We need a script to fill the PDF form with data

**Steps**

1.  PDF generation function is called from vets-api
2.  Uses pdf_fill to run the mapping and filling functions
3.  PDF is generated and sent back via controller

**Requirements**

- Creating a new ruby script for mapping the PDF

- Uploading 1095B PDF to appropriate pdf_fill folder

- Testing to make sure PDF is filled and sends back to controller

- Make sure PDF is deleted after generation

**Questions**

- If the PDF ever changes, how will this code be updated?

React App
---------

What the user sees on the website and where the PDF will be ultimately shown **Steps**

1.  User visits the vets.gov 1095B page
2.  React app makes the call to API
3.  API returns PDF which is displayed to user

**Requirements**

- A page for authenticated users needs to be created in React on vets-website, following design team lead

- Test the entire flow, confirming that PDF is rendered correctly

- Make sure page is 508 accessible

**Questions**

- None currently
