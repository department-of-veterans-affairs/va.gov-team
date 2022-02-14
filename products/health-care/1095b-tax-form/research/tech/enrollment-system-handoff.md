# Requirements for Enrollment System Handoff 


*This document serves to align the MOVE tech team with the Enrollment System team on requirements so that the 1095-B tax forms can be served smoothly in a digital format to veterans and continue to function in the future.*

. 



* Credentials needed so S3 bucket has permissions to receive flat files from Enrollment System
    * Credentials for all environments (development, staging, production)
* Need a way populate the database the first time (as opposed to simply running updates) with all 100 million+ veteran data
* Batch script set up that sends data from enrollment system to S3 bucket twice a week
    * Align on what times/days the data is sent
    * Align what happens if there is no new data (empty file, no file?)
* System in place to detect/fix batch script if anything goes wrong 
    * Who owns operations? IE. if enrollment system changes format 
* How to communicate errors back to enrollment system (corrupted data during injestion, etc)

	
