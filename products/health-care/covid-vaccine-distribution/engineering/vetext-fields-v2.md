current data that is sent to VetExt:
first_name,
last_name,
patient_ssn,
date_of_birth,
patient_icn,
phone,
email,
zip_code,
time_at_zip,
zip_lat,
zip_lon,
sta3n,
sta6a,
authenticated
vaccine_interest

New Fields that will be sent in addition to the original set:
* applicantType - enum[veteran, spouse, caregiverOfVeteran, CHAMPVA]
* privacyAgreementAccepted - boolean
* smsAcknowledgement - boolean
* street address - string concatenated from 3 address fields
* city - string
* state - enum [state 2 digit code]
* birthSex - string
* lastBranchOfService - string
* serviceDateRange - ?
* characterOfService - string

Notes and Questions on specific fields:
* sta3n (and sta6a?) - these fields will be populated with the station number that the new enrollee has been enrolled at. vets-api will perform an MPI lookup prior to sending to vetExt to ensure the user has been registered. For KMI v1 submissions the data should be populated in the same way as it currently is. 
* authenticated - though both KMI v1 and v2 are now unauthenticated forms, it does not stop a user from accessing them in an authenticated state. I am not currently able to authenticate locally to test this.  I plan to populate the authenticated field for KMI v2 in the same way it is done for KMI v1. 
* vaccine_interest will default to true for v2 submissions
* We should be able to populate ICN for all new enrollees 
* Do we need a specific field for ‘enhanced eligibility’ or is the population of applicantType sufficient?  Or should we assign KMI v1 submissions with applicant_type:veteran?  
