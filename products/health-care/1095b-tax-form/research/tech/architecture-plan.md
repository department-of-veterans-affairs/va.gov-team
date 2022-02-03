

<h1>Architecture Plan</h1>


<h2>Overview</h2>


<p>
This document provides detailed information on the architecture for generating the 1095B form via data from the Enrollment System. 
</p>
<p>
<strong>Enrollment System -> S3 Bucket -> Database -> API -> PDF Generation -> React App </strong>
</p>
<p>
&lt;embed visual here> 
</p>
<p>
&lt;embed link to mural here> 
</p>
<h2>Enrollment System</h2>


<p>
Where we get the data from 
</p>
<p>
<strong>Steps</strong>
</p>
<ol>

<li>Batch job runs twice a week creating new flat file (text delimited ) listing all rows of veterans who called in to update their data 

<li>Flat file is sent to print vendor and simultaneously can be sent to an S3 bucket via batch script 
</li>
</ol>
<p>
<strong>Questions</strong>
</p>
<p>

    How to validate that batch script is operational, deal with any potential downtime/etc?
</p>
<h2>S3 Bucket</h2>


<p>
Where the initial flat file is stored before it is converted
</p>
<p>
<strong>Steps</strong>
</p>
<ol>

<li>Script listens for new files being added to the bucket

<li>If script finds a new file, triggers a process to read the file, identify new data points, send to database
</li>
</ol>
<p>
<strong>Requirements</strong>
</p>
<p>
Setting up S3 bucket
</p>
<p>
Writing script  from #2
</p>
<p>
<strong>Questions </strong>
</p>
<p>
	What are the VA conventions for setting up an S3 bucket? 
</p>
<h2>Database (Aurora PGSQL)</h2>


<p>
Where all the data will be stored where its easy to sort/query/filter 
</p>
<p>
<strong>Steps</strong>
</p>
<ol>

<li>Initially populated with data sent to print vendor from S3 bucket

<li>Process to update rows of data that have been changed per reading from S3 Bucket

<li>Data queries passed through API 
</li>
</ol>
<p>
<strong>Requirements</strong>
</p>
<p>
	Setting up database 
</p>
<p>
	Write ingest script to populate + update data 
</p>
<p>
<strong>Questions</strong> 
</p>
<p>
	What are the VA conventions for setting up an Aurora PGSQL database? 
</p>
<h2>API (vets-api)</h2>


<p>
To get data from the database in a secure, reliable way 
</p>
<p>
<strong>	</strong>
</p>
<p>
<strong>Steps </strong>
</p>
<ol>

<li>User makes call for their PDF

<li>Triggers an API call to query the database 

<li>Data is received

<li>Controller makes call to generate the PDF with data
</li>
</ol>
<p>
<strong>Requirements</strong>
</p>
<p>
	Create the API for querying database
</p>
<p>
	Create the controller for making the call to generate a PDF
</p>
<p>

    Writing tests to validate API 
</p>
<p>

    Error handling
</p>
<p>
<strong>Questions </strong>
</p>
<p>
Where in vets-api should the new API live? 
</p>
<h2>PDF Generation </h2>


<p>
We need a script to fill the PDF form with data
</p>
<p>
<strong>Steps </strong>
</p>
<ol>

<li>PDF generation function is called from vets-api

<li>Uses pdf_fill to run the mapping and filling functions 

<li>PDF is generated and sent back via controller
</li>
</ol>
<p>
<strong>Requirements </strong>
</p>
<p>
	Creating a new ruby script for mapping the PDF
</p>
<p>
	Uploading 1095B PDF to appropriate pdf_fill folder
</p>
<p>
	Testing to make sure PDF is filled and sends back to controller
</p>
<p>
	Make sure PDF is deleted after generation
</p>
<p>
<strong>Questions</strong>
</p>
<p>
If the PDF ever changes, how will this code be updated? 
</p>
<p>
<strong> 	</strong>
</p>
<h2>React App</h2>


<h2>What the user sees on the website and where the PDF will be ultimately shown </h2>


<h2><strong>Steps </strong> </h2>


<ol>

<li>User visits the vets.gov 1095B page

<li>React app makes the call to API 

<li>API returns PDF which is displayed to user
</li>
</ol>
<p>
<strong>Requirements  </strong>
</p>
<p>
A page for authenticated users needs to be created in React on vets-website, following design team lead
</p>
<p>
	Test the entire flow, confirming that PDF is rendered correctly
</p>
<p>
	Make sure page is 508 accessible 
</p>
<p>
<strong>Questions </strong>
</p>
<p>
<strong>	</strong>N/A
</p>
