VA.gov Higher Level Review (Board Appeal) KPIs
==============================================

  

### Objective 

Identify all backend actions and items a Higher Level Review submission on va.gov can trigger. From that determine all metrics around those that need to be captured, monitored, logged, and alerted on. 

  

### List of possible Discrete Submission Actions
Action | Description | [Up/Down]stream System | Transfer Description | Frequency | Consequence of Failure
-- | -- | -- | -- | -- | -- 
Prefill Info | Get info for the veteran to pre-populate information on the form | Vet360 (mailing address),BGS (file number last 4) | An http call to external service | Always 1 per submission | User cannot begin the form
Get Contestable Issues | Gets a list of contestable issues the veteran can choose from for this claim | Lighthouse | An http call to external service | Always 1 per submission | User is allowed to continue, must enter in their own contentions. May cause confusion if user does not know it, or delay claim if they enter something different that what they requested before.
Overall HLR Claim Submission | The overall submission over the claim | Lighthouse | An http call to external service | Always 1 per submission | User sees an error message on the webpage. Save in progress data is retained. They may attempt later.
  


  
  

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
    
