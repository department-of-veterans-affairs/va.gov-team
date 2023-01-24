Architecture diagram
=================

Overview
--------

This document provides detailed information on the architecture for generating the 1095-B form via data from the Enrollment System.

**Enrollment System -> S3 Bucket -> Database -> API -> PDF Generation -> React App**

![image](https://user-images.githubusercontent.com/93789249/183091671-144230b0-073b-4936-b48d-51cd2701cfd0.png)

[Visitor link to source image in Mural](https://app.mural.co/t/innovationboards1199/m/innovationboards1199/1643907581165/b80fb9dbbef9a6beb4af59cbcfba076830226051?sender=u257b57923703399236fc7616)

Enrollment system
-----------------

This is where we get the 1095-B Veteran data from.

**Steps**

1.  Batch job runs twice a week creating new flat file listing all Veterans and dependents who called in to update their data
2.  Flat file is sent to print vendor and is simultaneously sent to our S3 bucket via batch script


S3 bucket
---------

This is where the initial flat file is stored before it is parsed. The name of the production S3 bucket is: dsva-vagov-prod-1095b-form-uploads

**Steps**

1.  A scheduled job runs to check for new files in the S3 bucket
2.  For each new file, the script triggers a process to read the file, identify new data points, store in to database


Injest Job
----------

A [scheduled rails task](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/workers/form1095/new1095_bs_job.rb) that reads in the flat file from S3, and stores the 1095-B records in the vets-api database.


Vets API database
-------------

Veterans 1095-B form data gets stored in the vets-api database. The form data is encrypted when stored into the database.

**Veteran data stored in database**
- veteran icn
- name
- last 4 of social
- address (street, city, state, zip, country)
- birth data
- months in which they had health care coverage through the VA


API (vets-api)
--------------

To get data from the database in a secure, reliable, fast way

**Steps**

1.  User makes call for their PDF
2.  Triggers an API call to query the database
3.  Data is received
4.  Controller makes call to generate the 1095-B PDF or text file with data


PDF/text file generation
--------------

We have a script that fills in the 1095-B PDF/text file form with data

**Steps**

1.  PDF or text file generation function is called from vets-api
2.  Uses the pdf_fill library to run the mapping and filling functions for the PDF
3.  PDF/text file is generated and sent back via controller

We use the  [pdf-fill library](https://github.com/department-of-veterans-affairs/vets-api/tree/72f3dcb6f6096eb68be18a94416c9c8630a23382/lib/pdf_fill) which is already part of the VA.gov codebase. 

React app
---------

What the user sees on the website and where the PDF will be ultimately shown. We have a React widget on a Drupal page. 

**Steps**

1.  User visits the VA.gov 1095-B page
2.  React app makes the call to API
3.  API returns PDF which is displayed to user

