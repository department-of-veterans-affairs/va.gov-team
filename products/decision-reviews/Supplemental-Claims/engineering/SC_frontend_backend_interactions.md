# List of Supplemental Claims Frontend/Backend Interactions

## Prefill Veteran Contact Information

  Prefill a list of Veteran contact information from the VA profile

  `/v0/user` - data integrated into main endpoint ([simulate an error in VAP contact info](https://github.com/department-of-veterans-affairs/va.gov-team/issues/67648#issuecomment-1830718716))

| External System(s)   | # of occurrences   | Responses  | Outcome / Message
| -------------------- | ------------------ | ---------- | ---------
| Vet360               | -                  | 200        | Shows Veteran contact information <details><summary>Screenshot</summary><img width="300" alt="veteran contact info showing home and mobile phone, email and mailing address" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/2736d268-5f31-4d56-aa38-59f3fa365901" /></details>
|                      |                    | Any other  | Shows introduction page, but stuck loading saved version of application <details><summary>Screenshot</summary><img width="450" alt="intro page showing loading indicator and 'checking to see if you have a saved version of this application' message" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/2468a1fd-de0c-4d10-a2b1-6369305678e9" /> <div>If Vet360 is down, the Veteran can start the form, but will get stuck on the contact info page <img width="500" alt="contact info page with home phone, mobile phone, email and mailing address all blank with an edit button" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/522666bc-821e-4d09-b27f-2b3696cf50c9" /></div></details>

## Prefill Veteran Information

  Prefill a list of Veteran account details

  `/v0/in_progress_forms/20-0995` - prefill data only from first in progress call

| External System(s)   | # of occurrences   | Responses  | Outcome / Message
| -------------------- | ------------------ | ---------- | ---------
| BGS                  | -                  | 200        | Starts form. Shows Veteran details <details><summary>Screenshot</summary><img alt="veteran info showing SSN, VA file number, date of birth and gender" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/111457818/bc348c63-6670-4a26-bca8-0efd77cdb7b3" /></details>
|                      |                    | Any other  | Starts form. Shows Veteran details without SSN or VA file number <details><summary>Screenshot</summary><img alt="veteran info showing date of birth and gender" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/111457818/366f09ee-8121-43c6-a017-5d2a23d13317" /></details>

## Save In Progress

  Saving of a users progress through the form

  `/v0/in_progress_forms/20-0995` - get in progress data upon return, and save in progress data when form data changes

| External System(s)   | # of occurrences          | Responses                    | Outcome / Message
| -------------------- | ------------------------- | ---------------------------- | ---------
| N/A (only vets-api)  | Many per submission       | 200                          | Slim success alert. <br> We've saved your application. We saved it on `Date`, at `time`. Your application ID number is `ID number` <details><summary>Screenshot</summary><img alt="We've saved your application slim alert below the back and continue form navigation buttons" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/51c9fc49-d9d6-4501-bb63-a7adb8d4dc3d" /></details>
|                      |                           | 400, 504, 403, 404, 401      | Slim error alert. <br> We're sorry, but we're having some issues and are working to fix them. You can continue filling out the request, but it will not be automatically saved as you fill it out. <details><summary>Screenshot</summary><img alt="We're sorry, but we're having some issues error alert" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/96728b04-33be-498a-b0ff-963b5de11598" /></details>
|                      |                           | Any other                    | Slim error alert. <br> We're sorry. We're unable to connect to VA.gov. Please check that you're connected to the Internet, so we can save your application in progress. <details><summary>Screenshot</summary><img alt="We're sorry. We're unable to connect error alert" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/8d6fef2d-1054-45b3-80e0-47e59cd02caf" /></details>

## Get Contestable Issues

  Gets a list of contestable issues the veteran can choose from for this claim

  `/v1/supplemental_claims/contestable_issues/compensation`

| External System(s)   | # of occurrences   | Responses  | Outcome / Message
| -------------------- | ------------------ | ---------- | ---------
| Lighthouse           | 1 per submission   | 200        | Shows list of contestable issues <details><summary>Screenshot</summary><img width="500" alt="contestable issues page showing hypertension card" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/f7e66708-6021-438f-a8b6-e86c099293ab" /></details>
|                      |                    | Any other  | Error alert. <br> Header: We can't load your issues right now <br> Body: You can come back later, or if you'd like to add your issue manually, you can select "Add a new issue" to get started. <details><summary>Screenshot</summary><img alt="we can't load your issues right now alert at the top of the contestable issues page" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/35f47366-3a43-46f2-bd00-7a5cb7473e45" /></details>

## Intent to File (check)

  Check if an Intent to File exists for the Veteran

  `/v0/intent_to_file`

| External System(s)   | # of occurrences          | Responses                    | Outcome / Message
| -------------------- | ------------------------- | ---------------------------- | ---------
| Lighthouse           | 1 per submission          | 200 with existing active ITF | Success alert. <br> Header: You already have an Intent to File <br>Body: Our records show that you already submitted an Intent to File for disability compensation. Your Intent to File will expire on `date`. You'll need to file your claim by this date to receive payments starting from your effective date. <details><summary>Screenshot</summary><img width="500" alt="success alert showing that an ITF already exists and when it'll expire" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/d9a1953d-5cef-4d02-bd3c-1b4143976880" /></details>
| Lighthouse           |                           | 200 with no active ITF       | Shows a loading indicator with 'Submitting a new Intent to File...' message, because the Veteran doesn't have an active ITF, so it's calling the ITF create endpoint (`/v0/intent_to_file/compensation`) <details><summary>Screenshot</summary><img width="500" alt="loading indicator with message, submitting a new Intent to File" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/ea3f1a3d-7e1f-4d1d-aa1a-2b01d1d87568" /></details>
|                      |                           | Any other                    | With any error, the front end will immediately call the ITF create endpoint (`/v0/intent_to_file/compensation`) and show loading indicator with 'Submitting a new Intent to File...' <details><summary>Screenshot</summary><img width="500" alt="loading indicator with message, submitting a new Intent to File" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/ea3f1a3d-7e1f-4d1d-aa1a-2b01d1d87568" /></details>

## Intent to File (create)

  File an Intent to File for veteran

  `/v0/intent_to_file/compensation`

| External System(s)   | # of occurrences          | Responses                    | Outcome / Message
| -------------------- | ------------------------- | ---------------------------- | ---------
| Lighthouse           | 0-1 per submission        | 200                          | Success alert. <br> Header: You submitted an Intent to File <br>Body: By starting this Supplemental Claim request, you automatically submitted an Intent to File. Your Intent to File will expire on `date`. <details><summary>Screenshot</summary><img alt="success alert showing that an ITF was created and it's expiration date" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/23d2ebff-fe92-48e2-b53a-c318c1e5a6e5" /></details>
|                      |                           | Any other                    | Error alert. <br> Header: We're sorry. Something went wrong on our end. <br> Body: We're sorry. Your Intent to File request didn't go through because something went wrong on our end. For help creating an Intent to File a Claim for Compensation, please call Veterans Benefits Assistance at 800-827, Monday through Friday, 8:00 a.m. to 9:00 p.m. ET. Or, you can fill out a VA Form 21-0996 and submit to: Department of Veterans Affairs Claims Intake Center PO Box 4444 Janesville, WI 53547-4444 <details><summary>Screenshot</summary><img alt="alert showing error message that something went wrong. A continue, testing only button is seen in the screenshot, but it is only available in staging" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/2fff455b-967a-40ba-b45c-92490d7dcfda" /></details>

## Evidence Upload (before submission)

  Putting user uploaded file into S3

  `/v0/decision_review_evidence`

| External System(s)   | # of occurrences                           | Responses                        | Outcome / Message
| -------------------- | -------------------------------------------| -------------------------------- | ---------
| AWS S3               | 0-Many per submission (optional)           | 200                              | Successful upload will then prompt for document type <details><summary>Screenshot</summary><img alt="you're adding this evidence file card with file name, size, a document type select and secondary delete file button" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/e7ab26df-9bf2-47d7-8727-f00c5667e99c" /></details>
|                      |                                            | 422 Locked PDF w/ wrong password | Inline error. <br> We can't unlock your PDF. Save your file without a password and try uploading it again. <details><summary>Screenshot</summary><img alt="error message below file name & size showing, we can't unlock your PDF. Save your file without a password and try uploading it again" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/1294da77-b2a0-4c48-b9e8-7e317f8f3d01" /></details>
|                      |                                            | 422 File dimensions too large    | Inline error. <br>Your file can’t have a width and height larger than 78 inches by 101 inches. Follow the instructions for your device on how to resize the file and try again. <details><summary>Screenshot</summary><img width="500" alt="error message below file name & size showing, a PDF file dimension error" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/e0527c44-8a9a-4732-949e-9cf5abd2e205" /></details>
|                      |                                            | Any other                        | Inline error. <br> Header: We're sorry. We had a connection problem. Please try again. <details><summary>Screenshot</summary><img alt="error message below the file name showing, we're sorry we had a connection problem message" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/1dd28c24-eddb-49a4-86ae-36ced237047c" /></details>

## Overall Supplemental Claim Submission

  The overall submission of the claim

  `/v1/supplemental_claims`

| External System(s)   | # of occurrences          | Responses     | Outcome / Message
| -------------------- | ------------------------- | --------------| ---------
| Lighthouse           | 1 per submission          | 200           | Redirect to confirmation page. <br> Success alert. <br> Header: Thank you for filing a Supplemental Claim <br> Body: When we've completed our review, we'll mail you a decision packet with the details of our decision. <details><summary>Screenshot</summary><img alt="confirmation page showing that the submission was successful" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/37049625/6533bb0f-37ef-42d8-a493-d6eb6e200cd4" /></details>
|                      |                           | 403 Forbidden | Error alert. <br> Header: Your decision review request didn't go through <br> Body: We're sorry. We're working to fix the problem, but it may take us a while. Please try again tomorrow. <br> If you're still having trouble submitting your request, call us at 800-698-2411 (TTY:711). We're here 24/7. Your in-progress ID is `ID number`. <details><summary>Screenshot</summary><img alt="error alert on review & submit page informing them that the request didn't go through" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/a2e8282d-3a3f-41e5-b562-e7edec880ad1" /></details>
|                      |                           | Any other     | Error alert. <br> Header: We're sorry, there was an error connecting to VA.gov. <br> Body: Please check your internet connection and try again. <details><summary>Screenshot</summary><img alt="error alert on review & submit page informing them that there was an error connecting to va.gov" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/43a2a246-6690-4a0e-8901-592433105204" /></details>

## Evidence Uploads (after submission)

  Files provided by the user to support their claim

| External System(s)   | # of occurrences                 | Responses                    | Outcome / Message
| -------------------- | -------------------------------- | ---------------------------- | ---------
| Lighthouse           | 0-Many per submission (optional) | 200                          | Happens via queued job after submission, user is not aware if this succeeds.
|                      |                                  | Any other                    | Happens via queued job, user is not aware if this fails. Uploaded evidence does not get to the VA, while the user thinks that it did.

## Form 4142(a) (after submission)

Authorization to Disclose Information to the Department of Veterans Affairs, usually medical records from private sources.

| External System(s)   | # of occurrences              | Responses                    | Outcome / Message
| -------------------- | ----------------------------- | ---------------------------- | ---------
| Central Mail         | 0-1 per submission (optional) | 200                          | Happens via queued job after submission, user is not aware if this succeeds.
|                      |                               | Any other                    | Happens via queued job, user is not aware if this fails. The 4142 just does not get to the VA, while the user thinks that it did
