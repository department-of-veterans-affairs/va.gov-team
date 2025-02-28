#VBMS

## How to get VBMS Access
You will need to get access to VBMS in order to create claims and add/update them in Staging.
1. To get access reach out to your Product Manager, Andrew Gray or Amy Lai via slack
2. Once they get you access they will provide you with a username and a test station (this will be our login information for VBMS)

## How to log into VBMS
Once you have access you will log into Citrix and do the following:
1. Open up Chrome on Citrix
2. Go to the following link for [VBMS](https://www.uat.vbms.aide.oit.va.gov/vbmsp2/)
3. Click on VBMS
4. Click Signin with VA Piv Card
5. A popup will occur click ‘ok’ and then another pop up will occur asking for your pin, enter your pin
6. A page will appear asking for your Station ID and Test User ID, enter these and then Submit
7. You should now be logged into VBMS

## How to make a claim in Staging
1. Go to Mock Staging Users [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv) and select a user that you want to add the claim to.Grab that users SSN.
2. Log into [VBMS](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/engineering/onboarding/vbms.md#how-to-log-into-vbms)
3. Click the Search tab and paste in the SSN from Mock Staging Users, and click the Open Profile button
4. Click claims tab (wait for claims to load)
5. Click a claim - you’ll be directed to a new page
6. Click the button ‘New Claim’
7. Give EP/ Claim Label
8. Give Date of Claim
9. Give Segmented Lane: Core (National)
10. Click the ‘Submit’ button
11. You have now created a claim

## How to add a tracked item to a claim in Staging:
1. Go to Mock Staging Users [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv) and select a user that you want to add the claim to.Grab that users SSN.
2. Log into [VBMS](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/engineering/onboarding/vbms.md#how-to-log-into-vbms)
3. There are two options for adding a tracked item to a claim..
    1. Look for the claim based off of the users SSN
        1. Click the Search tab and paste in the SSN from Mock Staging Users, and click the Open Profile button
        2. Click claims tab (wait for claims to load)
        3. Click a claim - you’ll be directed to a new page for the claim
    2. Log into VBMS and Go to the Search tab
        1. Paste in the claim id and click Open Claim button - you’ll be directed to a new page for the claim
  4. Click to ‘Tracked Items’ arrow
  5. Click the ‘Add Tracked Item’ button
  6. Choose a Development Action and then click the ‘Add to list’ button
  7. This will add it to the list and then you need to click the ‘Add’ button under the list
  8. You have now created a tracked item on a claim

## How to add contentions to a claim:
1. Go to Mock Staging Users [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv) and select a user that you want to add the claim to.Grab that users SSN.
2. Log into [VBMS](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/engineering/onboarding/vbms.md#how-to-log-into-vbms)
3. Paste in the claim id and click Open Claim button
4. Click the ‘Contentions’ arrow
5. Click the ‘Add Contention’ button
6. Select a contention and
7. Select a classification
8. Click the ‘Save and Add’ button
9. You have now created a contention on a claim

## How to move a step in VBMS:
There are two ways…
### Option 1:
1. Go to a claim
2. Select ‘Go to work item’ link
3. Select ‘Actions’ -> ‘Assign to Me’ -> Save
4. Go back to the claim (should now see a ‘complete’ button)
5. Select the ‘Complete’ button and change the state
6. Pick READY_FOR_DECISION
7. Submit button
### Option 2:
1. Go to [this](https://www.uat.vbms.aide.oit.va.gov) link https://www.uat.vbms.aide.oit.va.gov
2. Click ‘Ratings’
3. Enter the file number and click ‘pull for rating’
4. Select a claim that you want to change the step of -> Select ‘Assign -> ‘Save’






