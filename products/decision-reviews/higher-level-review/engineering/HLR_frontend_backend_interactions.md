# List of Higher-Level Review Frontend/Backend Interactions

## Prefill Veteran Contact Information

  Prefill a list of Veteran contact information from the VA profile

  `/v0/user` - data integrated into main endpoint ([simulate an error in VAP contact info](https://github.com/department-of-veterans-affairs/va.gov-team/issues/67648#issuecomment-1830718716))

| External System(s)   | # of occurrences    | Responses  | Outcome / Message
| -------------------- | ------------------ | ---------- | ---------
| Vet360               | -                  | 200        | Shows Veteran contact information <details><summary>Screenshot</summary><img width="300" alt="veteran contact info showing home and mobile phone, email and mailing address" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/b5c88c19-8008-4dd3-bf7a-b2d0f8dba26d" /></details>
|                      |                    | Any other  | Shows introduction page, but stuck loading saved version of application <details><summary>Screenshot</summary><img width="450" alt="intro page showing loading indicator and 'checking to see if you have a saved version of this application' message" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/f1d4c4df-3cf1-49a2-8bc2-2001d99e6004" /> <div>If Vet360 is down, the Veteran can start the form, but will get stuck on the contact info page <img width="500" alt="contact info page with mobile phone, email and mailing address all blank with an edit button" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/6d372fd6-fa6f-4008-8a27-0af2d5c5bc8c" /><br/>Note: this is a screenshot from Supplemental Claims contact info page</div></details>

## Prefill Veteran Information

  Prefill a list of Veteran account details

  `/v0/in_progress_forms/20-0996` - prefill data only from first in progress call

| External System(s)   | # of occurrences    | Responses  | Outcome / Message
| -------------------- | ------------------ | ---------- | ---------
| BGS                  | -                  | 200        | Starts form. Shows Veteran details <details><summary>Screenshot</summary><img alt="veteran info showing SSN, VA file number, date of birth and gender" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/111457818/bc348c63-6670-4a26-bca8-0efd77cdb7b3" /></details>
|                      |                    | Any other  | Starts form. Shows Veteran details without SSN or VA file number <details><summary>Screenshot</summary><img alt="veteran info showing date of birth and gender" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/111457818/366f09ee-8121-43c6-a017-5d2a23d13317" /></details>

## Save In Progress

  Saving of a users progress through the form

  `/v0/in_progress_forms/20-0996` - get in progress data upon return, and save in progress data when form data changes

| External System(s)   | # of occurrences           | Responses                    | Outcome / Message
| -------------------- | ------------------------- | ---------------------------- | ---------
| N/A (only vets-api)  | Many per submission       | 200                          | Slim success alert. <br> We've saved your application. We saved it on `Date`, at `time`. Your application ID number is `ID number` <details><summary>Screenshot</summary><img alt="We've saved your application slim alert below the back and continue form navigation buttons" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/51c9fc49-d9d6-4501-bb63-a7adb8d4dc3d" /></details>
|                      |                           | 400, 504, 403, 404, 401      | Slim error alert. <br> We're sorry, but we're having some issues and are working to fix them. You can continue filling out the request, but it will not be automatically saved as you fill it out. <details><summary>Screenshot</summary><img alt="We're sorry, but we're having some issues error alert" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/96728b04-33be-498a-b0ff-963b5de11598" /></details>
|                      |                           | Any other                    | Slim error alert. <br> We're sorry. We're unable to connect to VA.gov. Please check that you're connected to the Internet, so we can save your application in progress. <details><summary>Screenshot</summary><img alt="We're sorry. We're unable to connect error alert" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/8d6fef2d-1054-45b3-80e0-47e59cd02caf" /></details>

## Get Contestable Issues

  Gets a list of contestable issues the veteran can choose from for this claim

  `/v1/higher_level_reviews/contestable_issues/compensation`

| External System(s)   | # of occurrences    | Responses  | Outcome / Message
| -------------------- | ------------------ | ---------- | ---------
| Lighthouse           | 1 per submission   | 200        | Shows list of contestable issues <details><summary>Screenshot</summary><img width="500" alt="contestable issues page showing hypertension card" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/f7e66708-6021-438f-a8b6-e86c099293ab" /></details>
|                      |                    | Any other  | Error alert. <br> Header: We can't load your issues right now <br> Body: You can come back later, or if you'd like to add your issue manually, you can select "Add a new issue" to get started. <details><summary>Screenshot</summary><img alt="we can't load your issues right now alert at the top of the contestable issues page" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/35f47366-3a43-46f2-bd00-7a5cb7473e45" /></details>

## Overall Higher Level Review Submission

  The overall submission of the request

  `/v1/higher_level_reviews`

| External System(s)   | # of occurrences           | Responses     | Outcome / Message
| -------------------- | ------------------------- | --------------| ---------
| Lighthouse           | 1 per submission          | 200           | Redirect to confirmation page. <br> Success alert. <br> Header: We've received your Higher-Level Review<br> Body: When we've completed our review, we'll mail you a decision packet with the details of our decision. <details><summary>Screenshot</summary><img alt="confirmation page showing that the submission was successful" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/1d30b755-780f-4b25-82df-46e746495ad1" /></details>
|                      |                           | 403 Forbidden | Error alert. <br> Header: We're sorry. We can't submit your request right now.<br> Body: We're working to fix the problem. Please make sure you're connected to the internet, and then try saving your request again.<br> Save your request (link)<br> If you're still doesn't work please call us at 800-698-2411. If you have hearing loss, call TTY:711. <details><summary>Screenshot</summary><img alt="error alert on review & submit page informing them that the request didn't go through there is also a save in progress error window" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/6d2360cd-1eeb-49c4-8240-50f4438c40f2" /></details>
|                      |                           | Any other     | Error alert. <br> Header: We're sorry, there was an error connecting to VA.gov. <br> Body: Please check your internet connection and try again. <details><summary>Screenshot</summary><img alt="error alert on review & submit page informing them that there was an error connecting to va.gov" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/136959/43a2a246-6690-4a0e-8901-592433105204" /></details>
