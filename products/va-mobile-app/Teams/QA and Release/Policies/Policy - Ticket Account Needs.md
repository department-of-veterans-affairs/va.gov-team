## Test Accounts 
QA and Release Team will need Flagship App Teams and External Teams need to proactively provide test accounts that have the proper data set-up in order to properly test their features before its released. Please collaborate and consult with QA on the needs in project planning vs waiting till its ready to be tested. 

Flagship App Teams and External Teams will also need to provide and lead the data prep on test accounts if, when needed. Those team's PMs will need to coordinate with QA on data needs. Based on historically engagements, VA Web Platform teams when asked require VA PMs to prioritize the work. 

### Few things to note: 
 - Mobile does not own or possess their own test accounts
 - Test accounts Mobile use may be used and modify by the VA without notification
 - Historically when asking for test accounts or data modification we are told a VA PO needs to prioritize the work 
 - Mobile does not own or possess any production test accounts
 - For login.gov auth code you need to log into the TUD to get it
 - Seen that VA teams need their PMs to prioritize and coordinate the work
 - Currently not a centralized team that can handle this across all of VA - work with VA OCTO POs involved
 - Given QA's focus on just testing and validation, they will not be responsible for leading  the search / coordination on test account and datab prep needs - Team PMs will own this and QA will consult on whats needed
 - Long-term QA will not be involved in getting test accounts or test data as they will only consult
   - Short Term QA is open to this being delegated to them as long as Team PMs start introductions with the right OCTO PO contact  

### Process
 - Attempt to pull test accounts from what Mobile has used in the past
 - Use VA Platform's [Test User Dashboard guide](https://depo-platform-documentation.scrollhelp.site/developer-docs/test-user-dashboard-guide)
 - Coordinate with Mobile PMs to reach out to their VA OCTO PMs for assistance
 - If Team PM delegates this work to their QA a few things:
    - Team PM to make introduction between QA and OCTO PMs until a relationship is established
    - Ticket is required for finding test accounts or getting data prepped which will be sized and counts towards QA's capacity for that team
    - Ticket to include test account infromation, findings, contacts and anything else learned during collaboration
    - Recommend this is done in step 2 vs waiting until things are ready to test    


## RACI for Test Accounts involving Mobile

| Task | Responsible | Accountable | Consult | Info |   
| ----- | --------- | ---------- | -------- | ------- |
| Test Account Management | Team PM  | Web Platform Team / OCTO VA  | Web Platform  | QA, UX, Eng, Content|
| Test Account Data Prep | Team PM |  Web Platform Team / OCTO VA  | Web Platform, QA, UX, Eng, Content  | |
| Test Account data prep process | Team PM |  Web Platform Team / OCTO VA  | Web Platform  | QA, UX, Eng, Content |
| Modify Test Account Data | Team PM |  Web Platform Team / OCTO VA  | QA, UX , ENG, Web Platform  | |

## Testing Links 
 - [VA Health and Benefits Beta Testing Insturction (Android)](https://docs.google.com/document/d/1vVRCqiIbunnfy_umwETlhXDmLyS5Cppo6bRde-082gQ/edit#heading=h.o1b49rfssykx)
 - [VA Health and Benefits Beta Testing Insturction (Apple)](https://docs.google.com/document/d/1SnNqpnCaKR46YqK9-CTnBakEmeusZbKXW8qYDm8PW14/edit#heading=h.bq7xff4j2scv)
 - [VA.gov Staging](https://staging.va.gov/)
 - [VA.gov Staging Users Github](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)
 - [Veterans Willing to help with UAT](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/team-veterans.md)

## Example Test Accounts

| Test Account | Feature | Other Info |
| ------------ | ------- | ------------- |
| Karsyn | RX | Email Bhavin Patel (bhavin.patel2@va.gov) and CC Raquel Robertson (raquel.robertson@va.gov) requesting 25-30 refills to be added to the test account | 
| judy.morrison | General use | Used for Google Play to perform testing on the app |
| +54 | Appeals | Has a Id.me login  | 
| +119 | Veteran Status Honorable discharge and multiple years of service | | 
| Health Products | [Test User Dashboard guide](https://depo-platform-documentation.scrollhelp.site/developer-docs/test-user-dashboard-guide) | Info shared by Janie Tankard-Carnock Secure Messaging OCTO PO 1/24/24 |
| Secure Messaging | [Test User Dashboard guide](https://depo-platform-documentation.scrollhelp.site/developer-docs/test-user-dashboard-guide) | Info shared by Kay Lawyer Health Products OCTO PO 1/24/24 | 
