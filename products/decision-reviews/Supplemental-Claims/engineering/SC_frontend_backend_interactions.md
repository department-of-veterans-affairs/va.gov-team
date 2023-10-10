# List of Frontend/Backend Interactions

## Prefill Info 

<details>
  
  ### Description
  Get info for the veteran to pre-populate information on the form 
  ### External System(s)
  Vet360 (mailing address)
  BGS (file number last 4) 
  ### Number of Occurences per Submission 
  Always 1 per submission 
  ### Possible Responses and action from frontend upon response
  XXXXX
    
</details>


## Intent to File (check) 

<details>
  
  ### Description
  Check Intent to File for veteran
  ### External System(s)
  EVSS -> Lighthouse
  ### Number of Occurences per Submission 
  Always 1 per submission 
  ### Possible Responses and action from frontend upon response
  XXXXX
    
</details>

## Intent to File (create)

<details>
  
  ### Description
  File an Intent to File for veteran
  ### External System(s)
  EVSS -> Lighthouse
  ### Number of Occurences per Submission 
  0-1 per submission 
  ### Possible Responses and action from frontend upon response
  XXXXX

</details>
  
## Evidence Upload (before submission) 

<details>
  
  ### Description
  Putting user uploaded file into S3
  ### External System(s)
  AWS S3
  ### Number of Occurences per Submission 
  Any number per submission, including 0 (optional)
  ### Possible Responses and action from frontend upon response
  XXXXX
  
</details>

## Get Contestable Issues

<details>

  ### Description
  Gets a list of contestable issues the veteran can choose from for this claim
  ### External System(s)
  Lighthouse
  ### Number of Occurences per Submission 
  1 per submission
  ### Possible Responses and action from frontend upon response
  XXXXX
</details>

## Overall Supplemental Claim Submission

<details>
  
  ### Description
  The overall submission over the claim
  ### External System(s)
  Lighthouse
  ### Number of Occurences per Submission 
  1 per submission
  ### Possible Responses and action from frontend upon response
  XXXXX
  
</details>

## Save In Progress

<details>
  
  ### Description
  Saving of a users progress through the form
  ### External System(s)
  N/A (only vets-api)
  ### Number of Occurences per Submission 
  Many per submission
  ### Possible Responses and action from frontend upon response
  XXXXX
  
</details>


