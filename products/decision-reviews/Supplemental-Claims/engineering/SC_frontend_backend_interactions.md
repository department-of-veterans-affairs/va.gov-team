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
  
  #### Message shown for 200 response with no active ITFs
  ![Message shown for 200 response with no active ITFs](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/ea3f1a3d-7e1f-4d1d-aa1a-2b01d1d87568)

  
  #### Message shown for 200 response with existing active ITF
  ![Message shown for 200 response with existing active ITF](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/d9a1953d-5cef-4d02-bd3c-1b4143976880)

  
  #### Error shown for responses other than 200 
  ![Error shown for responses other than 200](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/ba037938-7092-4e84-8722-001aebaf069d)

    
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

  #### Message shown for 200 response 
  ![Message shown for 200 response](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/a71a5e88-d5a9-44b5-b3fb-5709e752bd8f)

  #### Error shown for responses other than 200 
  ![Error shown for responses other than 200](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/ba037938-7092-4e84-8722-001aebaf069d)


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

  #### 200 Response (success) - Prompt for Document Type
  ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/e7ab26df-9bf2-47d7-8727-f00c5667e99c)

  #### Locked PDF w/Incorrect Password (422)
  ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/af4371a1-9b09-4865-96c2-da453646e613)

  ### Any other response 
  ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/1dd28c24-eddb-49a4-86ae-36ced237047c)

  
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


