# Cypress to TestRail Reporter Plugin Configuration

In order to begin writing your execution records from your Cypress e2e teests into related test cases in TestRail you will need the following configurations --
* [TestRail API Key](#testrail-api-key)
* [Corresponding Project, Test Suite, and Test Cases in TestRail](#corresponding-testrail-objects)
* [Environment Variables Set](#environment-variables-set)
* [Invoke Cypress with Reporter Options from Environment Variables](#invoke-cypress-with-custom-reporter-options)

## TestRail API Key
1. Log in to TestRail
2. In the upper right of the interface find your name and click it to spawn a menu

![Spawn Menu](spawnmenu.PNG)

3. Select 'My Settings'
4. Select the 'API KEYS' tab

![API Keys Tab](apikeystab.PNG)

5. Click 'Add Key' link
6. Use 'Add API Key' dialog to name the key something relevant like 'Cypress Integration'

![Generate Key](generatekey.PNG)

7. Click 'Generate Key'
8. Copy the displayed key out and save it somewhere secure

![Add key](addkey.png)

9. Click 'Add Key'
10. Verify that key was added to list of API Keys

![Verify key added](verifykeyadded.PNG)

11. Click 'Save Settings' **THIS IS VERY IMPORTANT. DON'T FORGET THIS STEP!**

## Corresponding TestRail Objects
1. Navigate to project dashboard
2. Verify `projectID` in URL

![Verify projectID](projectid.PNG)

3. Navigate to 'Test Cases' tab
4. Verify `suiteID` in URL

![Verify suiteID](suiteid.PNG)

5. Tag test cases in your Cypress test file by using the unique identifier of the test case in the test title

![Use test case IDs in test](testcaseid.PNG)


## Environment Variables Set
```
export TR_USER=<your-testrail-email-here> TR_API_KEY=<your-API-key> TR_PROJECTID=<your-projectid> TR_SUITEID=<your-suiteid> TR_RUN_NAME=<human readable name> TR_INCLUDE_ALL=<TRUE/FALSE> TR_GROUPID=<subset of test cases collected into group>
```

## Invoke Cypress with Custom Reporter Options
```
yarn cy:testrail-run --spec src/applications/<your app>/tests/e2e/<your test file>
```
