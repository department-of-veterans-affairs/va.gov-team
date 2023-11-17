# List of Frontend/Backend Interactions

## Prefill Veteran Information

  Prefill a list of Veteran account details

| External System(s)   | # of occurences    | Responses  | Outcome / Message
| -------------------- | ------------------ | ---------- | --------- 
| BGS                  | -                  | 200        | Starts form. Shows Veteran details [Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/assets/111457818/bc348c63-6670-4a26-bca8-0efd77cdb7b3)
|                      |                    | Any other  | Starts form. Shows Veteran details without SSN or VA file number [Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/assets/111457818/366f09ee-8121-43c6-a017-5d2a23d13317)


## Prefill Veteran Contact Information

  Prefill a list of Veteran contact information from the VA profile

| External System(s)   | # of occurences    | Responses  | Outcome / Message
| -------------------- | ------------------ | ---------- | --------- 
| Vet360               | -                  | 200        | Shows Veteran contact information
|                      |                    | Any other  | -

## Get Contestable Issues

  Gets a list of contestable issues the veteran can choose from for this claim

| External System(s)   | # of occurences    | Responses  | Outcome / Message
| -------------------- | ------------------ | ---------- | --------- 
| Lighthouse           | 1 per submission   | 200        | Shows list of contestable issues
|                      |                    | 404, 502, 403, 504, Any other | Error alert. <br> Header: We can't load your issues right now <br> Body: You can come back later, or if you'd like to add your issue manually, you can select "Add a new issue" to get started. [Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/assets/111457818/51d7d945-f75a-4305-a4ad-8e6eca06abf8)


## Evidence Upload (before submission) 

  Putting user uploaded file into S3

| External System(s)   | # of occurences                            | Responses                        | Outcome / Message
| -------------------- | -------------------------------------------| -------------------------------- | --------- 
| AWS S3               | 0-Many per submssion (optional)            | 200                              | Prompt for document type [Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/e7ab26df-9bf2-47d7-8727-f00c5667e99c)
|                      |                                            | 422 Locked PDF w/ wrong password | Inline error. <br> We can't unlock your PDF. Save your file without a password and try uploading it again. [Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/af4371a1-9b09-4865-96c2-da453646e613)
|                      |                                            | Any other                        | Inline error. <br> We're sorry. We had a connection problem. Please try again. [Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/1dd28c24-eddb-49a4-86ae-36ced237047c)

## Overall Board Appeal Submission

  The overall submission over the claim

| External System(s)   | # of occurences           | Responses     | Outcome / Message
| -------------------- | ------------------------- | --------------| --------- 
| Lighthouse           | 1 per submission          | 200           | Redirect to confirmation page. <br> No alert. <br> Header: Your request has been submitted <br> Body: We may contact you for more information or documents.
|                      |                           | 403 Forbidden | Error alert. <br> Header: Your decision review request didn't go through <br> Body: We're sorry. We're working to fix the problem, but it may take us a while. Please try again tomorrow. <br> If you're still having trouble submitting your request, call us at 800-698-2411 (TTY:711). We're here 24/7. Your in-progress ID is `ID number`. [Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/00945ee3-7a2d-4919-9403-5dfa3fa15859)
|                      |                           | Any other     | Error alert. <br> Header: We're sorry, there was an error connecting to VA.gov. <br> Body: Please check your internet connection and try again. [Screnshot](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/2fec9183-8f91-4497-bf27-eeb598b96bad)

## Evidence Uploads (after submission)
  
  Files provided by the user to support their claim	

| External System(s)   | # of occurences           | Responses                    | Outcome / Message
| -------------------- | ------------------------- | ---------------------------- | --------- 
| Lighthouse           | 0-Many per submission     | 200                          | Happens via queued job after submission, user is not aware if this succeeds.
|                      |                           | Any other                    | Happens via queued job, user is not aware if this fails. Uploaded evidence does not get to the VA, while the user thinks that it did.

## Save In Progress

  Saving of a users progress through the form

| External System(s)   | # of occurences           | Responses                    | Outcome / Message
| -------------------- | ------------------------- | ---------------------------- | --------- 
| N/A (only vets-api)  | Many per submission       | 200                          | Slim success alert. <br> We've saved your application. We saved it on `Date`, at `time`. Your application ID number is `ID number` [Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/7f56ad4e-27f2-42f0-a4b3-ed6824125380)
|                      |                           | Any other                    | Slim error alert. <br> We're sorry. We're unable to connect to VA.gov. Please check that you're connected to the Internet, so we can save your application in progress. [Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/2f1003f9-f390-4d80-bb4d-e3e7a2911407)
|                      |                           | 400, 504, 403, 404, 401      | Slim error alert. <br> We're sorry, but we're having some issues and are working to fix them. You can continue filling out the request, but it will not be automatically saved as you fill it out. [Screenshot](https://user-images.githubusercontent.com/14334046/282623512-85b993f5-9983-471f-9c10-7e803c0f1021.png)
