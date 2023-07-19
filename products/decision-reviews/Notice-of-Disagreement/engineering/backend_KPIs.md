**

VA.gov Notice of Disagreement Claims KPIs
=========================================

  

### Objective 

Identify all backend actions and items a Notice of Disagreement submission on va.gov can trigger. From that determine all metrics around those that need to be captured, monitored, logged, and alerted on. 

  

### List of possible Discrete Submission Actions

Action | Description | [Up/Down]stream System | Transfer Description | Frequency
-- | -- | -- | -- | --
Prefill Info | Get info for the veteran to pre-populate information on the form | Vet360 (mailing address),BGS (file number last 4) | An http call to external service | Always 1 per submission
Get Contestable Issues | Gets a list of contestable issues the veteran can choose from for this claim | Lighthouse | An http call to external service | Always 1 per submission
Overall NOD Claim Submission | The overall submission over the claim | Lighthouse | An http call to external service | Always 1 per submission
Evidence Upload (before submission) | Putting S3 file in S3 | AWS S3 | An http call to external service | Any number per submission, including 0 (optional)
Evidence Upload Retrieval | Pulling down the evidence files to submit | AWS S3 | An http call to external service | Any number per submission, including 0 (optional)
Evidence Uploads | Files provided by the user to support their claim | Lighthouse | An http call to external service | Any number per submission, including 0 (optional)
  

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
*   Overall Retries (for any queued jobs)
*   Failed Retried (for any queued jobs)
*   Final Retries Failed (exhausted) (for any queued jobs)
    

##### Measures

*   duration
    

  
**
