Architecture Plan
=================

Overview
--------

This document provides detailed information on the architecture for generating the 1095B form via data from the Enrollment System.

**Enrollment System -> S3 Bucket -> Database -> API -> PDF Generation -> React App**

<img width="839" alt="image" src="https://user-images.githubusercontent.com/93789249/183092036-6e3815a6-0370-4b50-91f2-ea9e58301d5d.png">




![image](https://user-images.githubusercontent.com/93789249/183091671-144230b0-073b-4936-b48d-51cd2701cfd0.png)



[Visitor Link to Mural](https://app.mural.co/t/innovationboards1199/m/innovationboards1199/1643907581165/b80fb9dbbef9a6beb4af59cbcfba076830226051?sender=u257b57923703399236fc7616)

Enrollment System
-----------------

Where we get the 1095B veteran data from

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
- What if file is corrupt? How will we process QA? We know there are some QA steps on the Enrollment System side.


Vets API Database
-------------

Veterans 1095-B form data gets stored in the vets-api database. The form data is encrypted when stored into the database.


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

**Relevant Links**
- [download PDF controller example](https://github.com/department-of-veterans-affairs/vets-api/blob/18017483af797b77736fa61a572f6d08cbb9365b/app/controllers/v0/caregivers_assistance_claims_controller.rb#L29)

**Questions**

- Where in vets-api should the new API live?
- What are the testing/ QA requirements? 

PDF/Text file Generation
--------------

We need a script to fill the PDF/Text file form with data

**Steps**

1.  PDF generation function is called from vets-api
2.  Uses pdf_fill to run the mapping and filling functions
3.  PDF is generated and sent back via controller

**Requirements**

- Creating a new ruby script for mapping the PDF using pdf_fill library in vets-api

- Uploading 1095B PDF to appropriate pdf_fill folder

- Testing to make sure PDF is filled and sends back to controller

- Make sure PDF is deleted after generation

**Relevant Links**
- [pdf-fill library](https://github.com/department-of-veterans-affairs/vets-api/tree/72f3dcb6f6096eb68be18a94416c9c8630a23382/lib/pdf_fill)

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

**Relevant Links**
- [Letters App - renders a list of PDF's veterans can download](https://github.com/department-of-veterans-affairs/vets-website/tree/21260300681f449c564f53596d0a8302dd684e7b/src/applications/letters)

**Questions**

- None currently
