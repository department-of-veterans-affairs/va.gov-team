## List of data fields that will be sent to vetext from KMI

* first_name (required)
* last_name (required)
* patient_ssn (required for V2)
* date_of_birth (required)
* patient_icn (included for V1 if found, required for V2)
* phone (required)
* email (required for V1, not for V2)
* street address (required for V2, null for V1)
* city - (required for V2, null for V1)
* state - (required for V2, null for V1)
* zip_code (required)
* time_at_zip (required for V1, null for V2)
* zip_lat (optional for V1, null for V2)
* zip_lon (optional for V1, null for V2)
* sta3n (included for V1 if found, required for V2)
* sta6a (included for V1 if found, not sure for V2)
* authenticated (included for V1, set to false for V2)
* vaccine_interest (required for both, V2 will always be set to true)
* applicantType enum[enrolledVeteran, veteran, spouse, caregiverOfVeteran, CHAMPVA] (required. v1 will always be set to enrolledVeteran)
* privacyAgreementAccepted (false for V1, required for V2)
* smsAcknowledgement (false for V1, required for V2)
* birthSex (null for V1, required for V2)
* lastBranchOfService (null for V1, required for V2)
* serviceDateRange  (null for V1, required for V2)
* characterOfService (null for V1, required for V2)
* enhancedEligibility (false for V1, true for V2)


### current data that is sent to VetExt:
Determine what of the original data it still makes sense to send.  If KMI v1 remains in use then all of this data will remain valid. 

* first_name,
* last_name,
* patient_ssn,
* date_of_birth,
* patient_icn,
* phone,
* email,
* zip_code,
* time_at_zip,
* zip_lat,
* zip_lon,
* sta3n,
* sta6a,
* authenticated
* vaccine_interest

### New Fields that will be sent in addition to the original set:
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

## Notes and Questions on specific fields:
* sta3n (and sta6a?) - these fields will be populated with the station number that the new enrollee has been enrolled at. vets-api will perform an MPI lookup prior to sending to vetExt to ensure the user has been registered. For KMI v1 submissions the data should be populated in the same way as it currently is. 
* authenticated - though both KMI v1 and v2 are now unauthenticated forms, it does not stop a user from accessing them in an authenticated state. KMI v2 does not confimration of the data entered, even for authenticated users, and thus this field will be set to false for KMI v2 submissions.  
* vaccine_interest will default to true for v2 submissions
* We should be able to populate ICN for all new enrollees 
* Do we need a specific field for ‘enhanced eligibility’ or is the population of applicantType sufficient?  Or should we assign KMI v1 submissions with applicant_type:veteran?  
