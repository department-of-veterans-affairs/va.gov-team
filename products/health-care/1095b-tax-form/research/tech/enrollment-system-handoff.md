
# Enrollment System Handoff Document

*This document serves to document requirements and open questions for the MOVE tech team collaboration with the Enrollment System team so that the 1095-B tax forms can be served smoothly in a digital format to veterans and continue to function in the future.* 

## Handoff Requirements / Assumptions from Enrollment System (ES)

* ES will send 1 new flat file approximately 2 times each week
* Flat file will maintain format specified in PDF doc 
* ES will provide dump of *all* 1095B data for initial population of database
* ES is responsible for maintaining batch script that sends flat files
* ES will provide any necessary security credentials needed for S3 bucket to receive flat files

## Checklist of Items to Resolve

* Credentials needed so S3 bucket has permissions to receive flat files from Enrollment System
    * Credentials for all environments (development, staging, production)
* Need a way populate the database the first time (as opposed to simply running updates) with all 100 million+ veteran data
* Batch script set up that sends data from enrollment system to S3 bucket twice a week
    * Align on what times/days the data is sent
    * Align what happens if there is no new data (empty file, no file?)
* System in place to detect/fix batch script if anything goes wrong 
    * Who owns operations? IE. if enrollment system changes format 
* How to communicate errors back to enrollment system (corrupted data during injestion, etc)
* How does Enrollment System split up the text files? 
	* IE veteran vs beneficary, are they seperate files?
	* Or are they in the same file? 
	* Are multiple veterans/beneficiaries in 1 file? 
	* We know there is a correction indicator, veteran indicator, tax year
		* seperate files for original, corrections, replacements? 
		* we want to grab corrected files and log that they are corrected in the DB with timestamp 

	
