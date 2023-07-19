VA.gov Supplemental Claims KPIs
===============================

  

### Objective 

Identify all backend actions and items a Supplemental Claim submission on va.gov can trigger. From that determine all metrics around those that need to be captured, monitored, logged, and alerted on. 

  

### List of possible Discrete Submission Actions
Action | Description | [Up/Down]stream System | Transfer Description | Frequency
-- | -- | -- | -- | --
Prefill Info | Get info for the veteran to pre-populate information on the form | Vet360 (mailing address)BGS (file number last 4) | An http call to external service | Always 1 per submission
Intent to File (check) | Intent to File for veteran | EVSS(Lighthouse soon?) | An http call to external service | Always 1 per submission
Intent to File (create) | Intent to File for veteran | EVSS(Lighthouse soon?) | An http call to external service | Optional based on check result
Evidence Upload (before submission) | Putting S3 file in S3 | AWS S3 | An http call to external service | Any number per submission, including 0 (optional)
Get Contestable Issues | Gets a list of contestable issues the veteran can choose from for this claim | Lighthouse | An http call to external service | Always 1 per submission
Overall Supplemental Claim Submission | The overall submission over the claim | Lighthouse | An http call to external service | Always 1 per submission
Evidence Upload Retrieval | Pulling down the evidence files to submit | AWS S3 | An http call to external service | Any number per submission, including 0 (optional)
Evidence Uploads | Files provided by the user to support their claim | Lighthouse | An http call to external service | Any number per submission, including 0 (optional)
Form 4142(a) Generation | Generating of form4142 on the filesystem | n/a | Call to pdftk command on server | Optional based on provided info
Form 4142(a) | Authorization to Disclose Information to the Department of Veterans Affairs, usually medical records from private sources. | Central Mail | An http call to external service | Optional based on provided info
  


  
  
  

### List of Metrics/Data for each action

#### Logged data

*   User\_uuid
    
*   Action being performed (Form ID or action description)
    
*   Up or Downstream system involved
    
*   Success or failure status
    
*   Http status from up/downstream service
    
*   Http response body if not a 200 (successful) response 
    
*   Any ids available at time of log message (in progress form id, saved claim id, central mail id, lighthouse id)
    
*   Local file path (if generating file)
    
*   Remote file/s3 path (if uploading/downloading file)
    

  

#### Metrics

##### Incremental

*   Success
    
*   Failure
    
*   Total 
    
*   (Or any 2 of the 3 that allow you to arrive at the 3rd)
    

##### Measures

*   Duration
    

  
