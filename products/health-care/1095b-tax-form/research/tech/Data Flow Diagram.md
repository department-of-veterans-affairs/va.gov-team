Data flow diagram
=================

Overview
--------

This document provides detailed information on the data flow for generating the 1095-B form via data from the Enrollment System.

**Enrollment System -> S3 Bucket -> Database -> API -> PDF Generation -> React App**

<img width="853" alt="image" src="https://user-images.githubusercontent.com/636752/185666824-844b478f-d598-44c0-84b7-2ef7146c9719.png">


[Visitor link to source image in Mural](https://app.mural.co/t/innovationboards1199/m/innovationboards1199/1643907581165/b80fb9dbbef9a6beb4af59cbcfba076830226051?sender=u257b57923703399236fc7616)


We get all the data we need from the Enrollment System for the 1095-B form. All red arrows in our diagram flow the same data elements which are: 

- Veteran ICN
- Name
- Last 4 of social
- Address (street, city, state, zip, country)
- Birth data
- Months in which they had health care coverage through the VA

That's what's stored in the text file in the S3 bucket (encrypted), and in the vets-api database (also encrypted).  With the exception of the ICN, that's what's displayed on the 1095-B form (text, PDF). 


Enrollment services runs a batch job twice a week to update the print flat files for 1095-B. This job can also be run manually when necessary. The script that checks for files and loads them into our S3 bucket runs everyday at 5pm ET. Most of the time, we expect to receive files only twice a week.

