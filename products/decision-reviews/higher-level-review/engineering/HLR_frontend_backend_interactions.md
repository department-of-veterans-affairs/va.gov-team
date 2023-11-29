# List of Frontend/Backend Interactions

## Start Higher Level Review Form

Start HLR form

| External System(s)   | # of occurences    | Responses  | Outcome / Message
| -------------------- | ------------------ | ---------- | --------- 
| -                    | -                  | -          | Starts form. Shows Veteran information
|                      |                    | Any other  | -

## Get Veteran Prefill Information

Get info for the veteran to pre-populate information on the form	

| External System(s)   | # of occurences    | Responses  | Outcome / Message
| -------------------- | ------------------ | ---------- | --------- 
| Vet360 (mailing address), <br> BGS (file number last 4) | 1 per submission   | -        | Shows Veteran information
|                      |                    | Any other  | User cannot begin the form

## Get Veteran Contact Information

  Gets a list of Veteran contact information from the VA profile

| External System(s)   | # of occurences    | Responses  | Outcome / Message
| -------------------- | ------------------ | ---------- | --------- 
| -                    | -                  | 200        | Shows Veteran contact information
|                      |                    | Any other  | -

## Get Contestable Issues

  Gets a list of contestable issues the veteran can choose from for this claim

| External System(s)   | # of occurences    | Responses  | Outcome / Message
| -------------------- | ------------------ | ---------- | --------- 
| Lighthouse           | 1 per submission   | 200        | Shows list of contestable issues
|                      |                    | Any other  | Error alert. <br> Header: We can't load your issues right now <br> Body: You can come back later, or if you'd like to add your issue manually, you can select "Add a new issue" to get started. [Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/cf41503b-68a3-40e9-8096-fb15f24f4b32)


## Overall Higher Level Review Submission

  The overall submission over the claim

| External System(s)   | # of occurences           | Responses     | Outcome / Message
| -------------------- | ------------------------- | --------------| --------- 
| Lighthouse           | 1 per submission          | 200           | Redirect to confirmation page. <br> Success alert. <br> Header: Thank you for filing a Higher Level Review<br> Body: When we've completed our review, we'll mail you a decision packet with the details of our decision. 
|                      |                           | 403 Forbidden | Error alert. <br> Header: Your decision review request didn't go through <br> Body: We're sorry. We're working to fix the problem, but it may take us a while. Please try again tomorrow. <br> If you're still having trouble submitting your request, call us at 800-698-2411 (TTY:711). We're here 24/7. Your in-progress ID is `ID number`. [Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/00945ee3-7a2d-4919-9403-5dfa3fa15859)
|                      |                           | Any other     | Error alert. <br> Header: We're sorry, there was an error connecting to VA.gov. <br> Body: Please check your internet connection and try again. [Screnshot](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/2fec9183-8f91-4497-bf27-eeb598b96bad)

## Save In Progress

  Saving of a users progress through the form

| External System(s)   | # of occurences           | Responses                    | Outcome / Message
| -------------------- | ------------------------- | ---------------------------- | --------- 
| N/A (only vets-api)  | Many per submission       | 200                          | Slim success alert. <br> We've saved your application. We saved it on `Date`, at `time`. Your application ID number is `ID number` [Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/7f56ad4e-27f2-42f0-a4b3-ed6824125380)
|                      |                           | Any other                    | Slim error alert. <br> We're sorry. We're unable to connect to VA.gov. Please check that you're connected to the Internet, so we can save your application in progress. [Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/2f1003f9-f390-4d80-bb4d-e3e7a2911407)
