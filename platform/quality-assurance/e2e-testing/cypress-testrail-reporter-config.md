# Cypress to TestRail Reporter Plugin Configuration

In order to begin writing your execution records from your Cypress e2e teests into related test cases in TestRail you will need the following configurations --
* [TestRail API Key](##testrail-api-key)
* [Corresponding Project, Test Suite, and Test Cases in TestRail](##corresponding-testrail-objects)
* [Environment Variables Set](##environment-variables-set)
* [Invoke Cypress with Reporter Options from Environment Variables](##invoke-cypress-with-custom-reporter-options)

## TestRail API Key
1. Log in to TestRail
1. In the upper right of the interface find your name and click it to spawn a menu
1. Select 'My Settings'
1. Select the 'API KEYS' tab
1. Click 'Add Key' link
1. Use 'Add API Key' dialog to name the key something relevant like 'Cypress Integration'
1. Click 'Generate Key'
1. Copy the displayed key out and save it somewhere secure
1. Click 'Add Key'
1. Verify that key was added to list of API Keys
1. Click 'Save Settings' **THIS IS VERY IMPORTANT. DON'T FORGET THIS STEP!**

## Corresponding TestRail Objects
1. Navigate to project dashboard
1. Verify `projectID` in URL
1. Navigate to 'Test Cases' tab
1. Verify `suiteID` in URL
1. Tag test cases in your Cypress test file by using the unique identifier of the test case in the test title

## Environment Variables Set
```
export TR_USER=<your-testrail-email-here> TR_API_KEY=<your-API-key> TR_PROJECTID=<your-projectid> TR_SUITEID=<your-suiteid>
```

## Invoke Cypress with Custom Reporter Options
```
yarn cy:testrail-run --spec src/applications/<your app>/tests/e2e/<your test file>
```
