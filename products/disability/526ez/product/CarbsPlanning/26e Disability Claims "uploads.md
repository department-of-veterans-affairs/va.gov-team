# 526e Disability Claims "uploads"
"Upload" is used a lot when referring to the work for the disability claims. This is partly because the API endpoints include "upload" in the naming. To reduce confusion we gave more specific names to the uploads and what they are related to. 

## Upload names
- _526 Submission_ - refers to the 526e primary data only
- _BDD Instructions_ - refers to the cover sheet that accompanies the 526 submission to EVSS or Lighthouse
- _PTSD Ancillary _- refers to the 0781 and 0781a data for PTSD claims
- _4142 supplemental_ - refers to the form data for authorization to disclose medical information
- _Veteran evidence documents_ - refers to the files Veterans upload for evidence for their disability claim 

## API Endpoint names 
- _Form submission endpoint_ - is just for 526 data upload to Lighthouse 
- _Document upload endpoint_ - is for all the remaining uploads related to 526
                               (Veteran Evidence, 0781 and 0781a, and 4142, BDD) to EVSS or Lighthouse 

### How it works
(1) Form 526 is the data entered on the website to EVSS- main submission form
	
   (1.1) The "upload" here is just the data
 
    (1.2) After the data is received, EVSS _(future LH)_ will create the PDF that goes to the eFolder 
          (eFolder is the last place where the "documents" are stored for the adjucators)

(2) Ancillary jobs are kicked-off after the 526 submission
  
   (2.2) Check for any Veteran uploaded evidence documents
   	
     (2.2.1) If any, these are sent to EVSS - includes the submission ID for Form 526e
   
   (2.3) PTSD 0781 form - a new auto generated PDF is created and submitted with the Submission ID for Form 526e to EVSS
   
   (2.4) PTSD 0781a form - a new auto generated PDF is created and submitted with the Submission ID for Form 526e to EVSS
   
   (2.5) Form 4142 - a new auto generated PDF is created and submitted with the Submission ID for Form 526 to central mail
   
   (2.6) BDD instructions - this is for internal (adjudicator) fact sheet to EVSS (cover sheet per 526)
   
   (2.7) Additional jobs (but not related to documents)

