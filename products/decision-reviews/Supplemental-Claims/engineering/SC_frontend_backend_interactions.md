# List of Frontend/Backend Interactions

## Get Contestable Issues

  Gets a list of contestable issues the veteran can choose from for this claim

| External System(s)   | # of occurences    | Responses  | Outcome / Message
| -------------------- | ------------------ | ---------- | --------- 
| Lighthouse           | 1 per submission   | 200        | Shows list of contestable issues
|                      |                    | Any other  | Error alert. <br> Header: We can't load your issues right now <br> Body: You can come back later, or if you'd like to add your issue manually, you can select "Add a new issue" to get started. [Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/cf41503b-68a3-40e9-8096-fb15f24f4b32)

## Intent to File (check) 

  Check Intent to File for veteran

| External System(s)   | # of occurences           | Responses                    | Outcome / Message
| -------------------- | ------------------------- | ---------------------------- | --------- 
| EVSS -> Lighthouse   | Always 1 per submission   | 200 with no active ITF       | Shows pending 'Submitting a new Intent to File...' [Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/ea3f1a3d-7e1f-4d1d-aa1a-2b01d1d87568)
|                      |                           | 200 with existing active ITF | Success alert. <br> Header: You already have an Intent to File <br>Body: Our records show that you already submitted an Intent to File for disability compensation. Your Intent to File will expire on `date`. You'll need to file your claim by this date to receive payments starting from your effective date. [Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/d9a1953d-5cef-4d02-bd3c-1b4143976880)
|                      |                           | Any other                    | Error alert. <br> Header: We're sorry. Something went wrong on our end. <br> Body: We're sorry. Your Intent to File request didn't go through because something went wrong on our end. For help creating an Intent to File a Claim for Compensation, please call Veterans Benefits Assistance at 800-827, Monday through Friday, 8:00 a.m. to 9:00 p.m. ET. Or, you can fill out a VA Form 21-0996 and submit to: Department of Veterans Affairs Claims Intake Center PO Box 4444 Janesville, WI 53547-4444 [Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/ba037938-7092-4e84-8722-001aebaf069d)
  
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



## Overall Supplemental Claim Submission

<details>
  
  ### Description
  The overall submission over the claim
  ### External System(s)
  Lighthouse
  ### Number of Occurences per Submission 
  1 per submission
  ### Possible Responses and action from frontend upon response
  
  #### 200 Success, Redirrect to confirmation page
  ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/6533bb0f-37ef-42d8-a493-d6eb6e200cd4)


  ### 403 Forbidden
  ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/00945ee3-7a2d-4919-9403-5dfa3fa15859)


  #### Any other response
  ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/2fec9183-8f91-4497-bf27-eeb598b96bad)

  
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


  #### 200 Success
  ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/7f56ad4e-27f2-42f0-a4b3-ed6824125380)

  #### Any other response
  ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/2f1003f9-f390-4d80-bb4d-e3e7a2911407)

</details>

