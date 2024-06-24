# 526 Disability Claims "uploads"
"Upload" is used a lot when referring to the work for the disability claims. This is partly because the API endpoints include "upload" in the naming. To reduce confusion we gave more specific names to the uploads and what they are related to. 

## Upload names
- _526 Submission_ - refers to the 526e primary data only
- _BDD Instructions_ - refers to the cover sheet that accompanies the 526 submission to EVSS or Lighthouse
- _PTSD Ancillary_ - refers to the 0781 and 0781a data for PTSD claims
- _4142 supplemental_ - refers to the form data for authorization to disclose medical information
- _Veteran evidence documents_ - refers to the files Veterans upload for evidence for their disability claim 

## API Endpoint names 
- _Form submission endpoint_ - is just for 526 data upload to Lighthouse 
- _Document upload endpoint_ - is for all the remaining uploads related to 526
                               (Veteran Evidence, 0781 and 0781a, and 4142, BDD) to EVSS or Lighthouse 

### How it works
(1) Form 526 is the data entered on the website to EVSS- main submission form
	
   (1.1) The "upload" here is just the data
 
    (1.2) After the data is received, EVSS (future LH) will create the PDF that goes to the eFolder 
          (eFolder is the last place where the "documents" are stored for the adjucators)

(2) Ancillary jobs are kicked-off after the 526 submission
  
   (2.2) Check for any Veteran uploaded evidence documents
   
   	(2.2.1) If any, these are sent to EVSS - includes the submission ID for Form 526e
   
   (2.3) PTSD 0781 form - a new auto generated PDF is created and submitted with the Submission ID for Form 526e to EVSS
   
   (2.4) PTSD 0781a form - a new auto generated PDF is created and submitted with the Submission ID for Form 526e to EVSS
   
   (2.5) Form 4142 - a new auto generated PDF is created and submitted with the Submission ID for Form 526 to Lighthouse Benefits Intake 
   
   (2.6) BDD instructions - this is for internal (adjudicator) fact sheet to EVSS (cover sheet per 526)
   
   (2.7) Additional jobs (but not related to documents)

## Project work related to "uploads"
- Team 1 - 526 Submission migration to Lighthouse (form submission endpoint)

- Team 2 - Polling information (getting a status on the uploads after sent to LH to confirm if they make it to the eFolder) (this is before we migrate to LH) - maybe includes alerts/monitoring #[75804](https://github.com/department-of-veterans-affairs/va.gov-team/issues/75804)
	- Veteran evidence documents
	- PTSD 0781
	- PTSD 0781a
	- BDD instructions 

- Team 2 - Document upload migration to Lighthouse (document upload endpoint) https://github.com/department-of-veterans-affairs/va.gov-team/issues/83837
	- Veteran evidence documents
	- PTSD 0781
	- PTSD 0781a
	- BDD instructions 

- Team 2 - Silent Veteran evidence document fails going to EVSS (short term solution) https://github.com/department-of-veterans-affairs/va.gov-team/issues/81612
	- Email notifying the Veteran (i.e., options for other ways to get the evidence documents to VA)
	- Provides a list of all the Veteran upload evidence documents

- Team 2  - Veteran email notification when https://github.com/department-of-veterans-affairs/va.gov-team/issues/85467
	- 0781 fails to upload to EVSS (future LH)
	- 0781a fails to upload to EVSS (future LH) 
	- Send Veteran mailer if 4142 fails to upload to central mail

- Team ? - Historical Veteran evidence document upload silent failures - New! [86714](https://github.com/department-of-veterans-affairs/va.gov-team/issues/86714)
