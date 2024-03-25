VA NON-DISABILITY BENEFITS · Burial benefits MVP redesign

# Burial benefits 21P-530EZ review page issues

Designer: [Fiorella](https://github.com/fiorella-io)

Existing accessibility tickets to consider: [61549](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61549)

## Bug
The "Benefits selection" title gets deleted

#### Steps to replicate
- On step 4, only select "Transportation" as a benefit
- Get to the Review page
- Expand the "Benefits selection" section
- Select either Burial allowance or Plot allowance and click "Update page"
- Resolve the error(s) triggered by adding all required information on the new section(s) that appeared
- Click "Update page"
- Remove the new benefits that were added
- Click "Update page"
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/91498500/11b6831f-1a14-463d-9998-2f0b8fb57685" width="80%">
<br><br>



## Issue 1 - Severe
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/91498500/bc5bf2b8-dcf4-44db-a707-a7ed8ef7ebae" width="35%" align="right">

A claimant can submit blank required information


#### Steps to replicate
- On step 2, get to the "Previous name" section, and select "No" to the "Did the Veteran serve under another name?" question
- Get to the Review page
- Expand the "Military history" section
- Click "Edit" on the "Previous name" section, and select "Yes" to the "Did the Veteran serve under another name?" question
- Click "Submit application" at the bottom of the form
- You can also choose to click "Update page" and then click "Submit application"

#### Possible Solution
1) Automatically trigger an error when "Yes" is selected to the "Did the Veteran serve under another name?" question. [Designs for this solution](https://www.sketch.com/s/de782a35-e147-4c32-a2a8-ba53071ec8e7/a/mP0x9bg) OR
2) Trigger errors when "Submit application" is clicked
<br><br><br><br><br>



## Issue 2 - Severe
A claimant cannot upload files on the review page blocking submission
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/91498500/1337590f-85ad-471e-87a2-c93e09f1df07" align="right" width="35%">


#### Steps to replicate
- On step 4, only select "Transportation" as a benefit
- Get to the Review page
- Expand the "Benefits selection" section
- Select either Burial allowance or Plot allowance and click "Update page"
- Resolve the error(s) triggered by adding all required information on the new section(s) that appeared and click "Update page"

- Expand the "Additional information" section and click "Edit"
- Add any required information
- Click "Submit application"
You can't upload the required file to fix this error blocking you from submitting the form

#### Possible Solution
1) Add an "upload file" button and allow upload files on the Review page. Designs for this solution: [Expanded](https://www.sketch.com/s/de782a35-e147-4c32-a2a8-ba53071ec8e7/a/zyZLKGM)| [Editable](https://www.sketch.com/s/de782a35-e147-4c32-a2a8-ba53071ec8e7/a/ZVRPny3) OR
2) Add an "upload file" button and return the claimant to Step 5 to upload the file there
<br><br>

## Issue 3 - Severe
<img width="35%" align="right" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/91498500/b343a225-000f-4e27-a598-d9e924d78af9">
Section errors that get triggered due to adding additional benefits stay persistent, even after removing those benefits, blocking claimants from submitting the form

#### Steps to replicate
- On step 4, only select "Transportation" as a benefit
- Get to the Review page
- Expand the "Benefits selection" section
- Select either Burial allowance or Plot allowance and click "Update page"
- Resolve the error(s) triggered by adding all required information on the new section(s) that appeared
- Click "Update page". This will trigger errors in the "Additional information" section
- Remove the new benefits that were added
- Click "Update page". This should remove the errors in the "Additional information" section, but the section errors stay persistent

#### Possible Solution
1) Removing benefits in the "Benefits selection" section, should also remove any triggered errors in other interconnected sections
<br>

## ~Issue 4~ 
When updating the "Date of death" and "Date of burial" of the deceased Veteran, the claimant does not get informed if these dates are more than 2 years from our current date.

#### Steps to replicate
- On step 2, enter any day in 2023 for the "Date of death" and "Date of burial" of the deceased Veteran
- Get to the review page
- Expand the "Veteran information"
- Change the year to 2019 or less
- No warning note gets triggered here as it does in Step 2
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/91498500/8bb88a1d-44a1-4846-9143-93e2b0df6a1d" width="60%">

#### Possible Solution
Based on the feedback we got during our midpoint review, we will remove this alert and add it as additional instructions to this page.


## Issue 5
<img width="20%" align="right" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/91498500/80d7d2ed-6daf-4c9c-ba5d-ce585173b011">
A claimant can add multiple blank previous names the deceased Veteran served under without having to enter a name first. This behavior is different than the same section in Step 3. On Step 3 you are not allowed to add additional names unless you add a name first.

#### Steps to replicate
- On step 2, get to the "Previous name" section, and select "No" to the "Did the Veteran serve under another name?" question
- Get to the Review page
- Expand the "Military history" section
- Click "Edit" on the "Previous name" section, and select "Yes" to the "Did the Veteran serve under another name?" question
- Click "Add another name" multiple times
As mentioned in Issue 1, the claimant is allowed to submit this application with multiple empty previous names

#### Possible Solution
1) Once "Yes" is selected for the "Did the Veteran serve under another name?" question and new fields appear, delete the "Add another name" until "Update" has been clicked. Designs for this solution: [Editable](https://www.sketch.com/s/de782a35-e147-4c32-a2a8-ba53071ec8e7/a/mP0x9bg) | [Updated/Saved](https://www.sketch.com/s/de782a35-e147-4c32-a2a8-ba53071ec8e7/a/j4D2yVW) OR
2) Once "Add another name" is clicked, trigger inline errors

<br><br>

## Issue 6
The claimant does not know what additional actions should be taken to resolve errors triggered

#### Steps to replicate example 1
- On step 4, only select "Transportation" as a benefit
- Get to the Review page
- Expand the "Benefits selection" section
- Select either Burial allowance or Plot allowance and click "Update page"
This triggers errors on a new section that appears. The claimant is not informed that they need to add all required information
<img width="30%" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/91498500/f3512af6-32a9-463c-8ad6-117c69694de2">

#### Possible Solution
1) Adding content to let the claimant know there is additional required information that needs to be entered, and highlighting the blank sections with missing information. [Designs for this solution](https://www.sketch.com/s/de782a35-e147-4c32-a2a8-ba53071ec8e7/a/bLZ2xm0)

 
#### Steps to replicate example 2
- On step 4, only select "Transportation" as a benefit
- Get to the Review page
- Expand the "Benefits selection" section
- Select either Burial allowance or Plot allowance and click "Update page"
- Resolve the error(s) triggered by adding all required information on the new section(s) that appeared
- Click "Update page". This will trigger errors in the "Additional information" section.
- Expand the "Additional information" section.
The claimant here is not informed that they need to upload a new file that is required
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/91498500/80066328-aa4c-4f15-b008-4028afef2d59" width="30%">
<br>

#### Possible Solution
1) Adding content to let the claimant know that they need to upload a file. [Designs for this solution](https://www.sketch.com/s/de782a35-e147-4c32-a2a8-ba53071ec8e7/v/QQrV9x/a/zyZLKGM)

## Issue 7
<img width="35%" align="right" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/91498500/74587196-f203-418b-8b55-fdf453788f6e">

The global error alert at the bottom of the page is too generic, and the claimant is not informed of the sections that need to be fixed.

#### Steps to replicate
- On step 4, only select "Transportation" as a benefit
- Get to the Review page
- Expand the "Benefits selection" section
- Select either Burial allowance or Plot allowance and click "Update page"
- Resolve the error(s) triggered by adding all required information on the new section(s) that appeared
- Click "Update page" and then "Submit application"

#### Possible Solution
1) Add more information on the error alert, and list impacted sections as links that when clicked expand the right section. [Related ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/56934) | [Design for this solution](https://www.sketch.com/s/de782a35-e147-4c32-a2a8-ba53071ec8e7/a/Wdljmnn)




  


