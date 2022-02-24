
# Enrollment System Handoff Document

*This document serves to document requirements and open questions for the MOVE tech team collaboration with the Enrollment System team so that the 1095-B tax forms can be served smoothly in a digital format to veterans and continue to function in the future.* 

## Handoff Requirements / Assumptions from Enrollment System (ES)

* ES will send new flat file(s) approximately 2 times each week
* Flat file will maintain format specified in PDF doc 
* ES will provide dump of *all* 1095B data for initial population of database
* ES is responsible for maintaining batch script that sends flat files
* ES and MOVE will share any security credentials needed for S3 bucket to receive flat file(s)

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

## Answers from Josh Faulkner
1. Could you please confirm that the enrollment system could do the following:
  1. Enrollment System will send 1 new flat file approximately 2 times each week

- correct

  1. Flat file will maintain format specified in PDF doc that was sent to us (ACA-MEC\_ICD\_2.0.pdf)

- Correct, and will let you know if it changes (unlikely it will)

  1. Enrollment System will provide dump of all 1095-B data for initial population of database

- Can give you full pop for current TY only; we do not keep those files forever historically for past years

  1. Enrollment System is responsible for maintaining batch script that sends flat files

- correct

  1. Enrollment System will provide any necessary security credentials needed for S3 bucket to receive flat files

- That depends if the bucket is on your side or on our side; I would prefer we write to your bucket

1. Can you please send us the credentials needed so our S3 bucket has permissions to receive flat files from Enrollment System?
  1. Can you please also send credentials for all environments (development, staging, production)?

- Other way around, if we are putting to your bucket then you need to send to me the credential or setup cross-account access on it to allow from our aws account

1. Can you clarify on the batch script set up that sends data from the enrollment system to S3 bucket twice a week?
  1. What days and what times is the data sent?

- Sunday and Thursday starts at 12am, finish time depends on how big the file is

  1. What happens if there is no new data? For example, is it an empty file or no file sent?

- No empty file, just nothing happen

1. How would you suggest we populate our database the first time with all 100 million+ Veteran data (as opposed to running updates)?

- There will not be 100M; there will be approx. 9M as I can give you only current year files and then all new files going forward, no past year ones.

1. How does the Enrollment System split up the text files?
  1. For example, for Veteran vs Beneficiary, are they separate files or in the same file?

- Separate files; the vet files names have \ __V_\_ in the middle and bene&#39;s have \__ B_\_

  1. Are multiple Veterans or Beneficiaries in 1 file?

- Should not be duplicates; but you should handle it just in case it does happen

  1. We see there is a correction indicator, veteran indicator, tax year. Are there separate text files for original, corrections, and replacements? We want to be able to get the corrected files and log them in the database with a timestamp.

- Separate files for correction and they have \ __C_\_ in the filename in place of the \__ O_\_

1. What system is in place to detect and/or fix the batch script if anything goes wrong?
  1. Who owns operations? For example, if the enrollment system changes format

- I do

1. How should we communicate errors back to enrollment system (for example, corrupted data during ingestion)?

- Send to me; if I am out send to the distro in my OOO message

1. Would it be possible for us to get a redacted version of the form that was sent this year to see how it was filled out?

- Image above

1. For Part 2 and Part 3, do they contain the same information for all Veterans, so could we hard code this?

- Yes

1. Could you confirm if the ICN that&#39;s sent in the beneficiary flat file the same as the Veteran&#39;s flat file that the beneficiary is related to?

- No idea what you mean by this; beneficiaries are separate individuals from veterans, they have different ICN than their sponsor.

1. Could you confirm that the beneficiary data goes into Part 4?

- Yes it does, bene coverage months work just the same as the veteran coverage months
