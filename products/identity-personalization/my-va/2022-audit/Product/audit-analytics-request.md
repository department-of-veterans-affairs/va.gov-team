## My VA Audit Analytics Request

### Updated on December 12, 2022

## Events to be tracked

### Claims and appeals

| Link/Text on My VA | URL | GA Event | New to My VA| Does this need a new tag from Analytics team?| Notes |
| ---- | ---- | ---- | ---- | ---- | ---- |
| Learn how to file a claim | https://va.gov/disability/how-to-file-claim/ | This is a new link being added to My VA | | | Can see this with test user 10, I see `profile-navigation - view link - view learn how to file a claim` being tracked in Staging, we would prefer to use "Dashboard" not "Profile" if possible |
| Manage all claims and appeals | https://www.va.gov/claim-or-appeal-status/ | This link was renamed - `profile - navigation - view link - view manage claims and appeals` |  | | I see this event in Staging, can we validate this will be the new event? the old one was: `Navigation - Link List - Claims and Appeals - Check your claim or appeal status` can test with user 14. Is is possible to keep the old event so we can have consistent historical tracking? |

<details>
  <summary>No Claims or Appeals (New version):</summary>
  <br>
  
<img width="626" alt="Screen Shot 2022-12-01 at 09 46 21" src="https://user-images.githubusercontent.com/97113607/205082638-19f957b8-682c-4ac0-9703-e9c290e99e40.png">
  
  </details>

### Health care

| **Link** | **URL** | **GA Event** | **Notes** |
| ---- | ---- | ---- | ---- |
| Apply for VA health care | https://www.va.gov/health-care/apply/application/introduction | This is a new link on My VA | I see `Navigation - Link List - Health care - Apply for VA Health care` being tracked in staging, can we confirm this is the right event? Can be checked with User 272|
| Schedule and manage your appointments | https://va.gov/health-care/schedule-view-va-appointments/appointments | `Navigation - Link List - Heatlh care - Schedule and manage your appointments` | Can we confirm this is the new event? This link previously existed but was renamed. Can be cheked with user 15 |
| Review your messages | https://mhv-syst.myhealth.va.gov/mhv-portal-web/secure-messaging | `Navigation - Link List - Health care - Review your messages` | Can we confirm this is the new event? This link previously existed but was renamed. Can be checked with user 41. |


<details>
  <summary>No Healthcare (New version):</summary>
  <br>
  
<img width="638" alt="Screen Shot 2022-12-01 at 10 40 25" src="https://user-images.githubusercontent.com/97113607/205095672-20189d4c-9793-4b63-b904-0b5888f1e76e.png">
  
  </details>
  
### Education and training
- This is a new section to My VA, here are the new links to track: **No action is needed from the analytics team on this section.**

| **Link** | **URL** | **GA Event** | **Notes** |
| ---- | ---- | ---- | ---- |
| Learn how to apply for VA educational benefits | https://www.va.gov/education/how-to-apply/ | `Navigation - Link List - Education and training - Learn how to apply for VA educational benefits` | This section was accidentally live for a few days in Prod so we already see GA activity for this. Can be checked with user 272. |
| Compare GI Bill benefits by school | https://va.gov/education/gi-bill-comparison-tool | `Navigation - Link List - Education and training - Compare GI Bill benefits by school` | This section was accidentally live for a few days in Prod so we already see GA activity for it. Can be checked with user 272.  |
| Check your BI Bill Statement of Benefits | https://va.gov/education/gi-bill/post-9-11/ch-33-benefit/ | `Navigation - Link List - Education and training - Check your GI Bill Statement of Benefits` | I see this event being tracked in Staging, this section was also live in Prod accidentally for a few days so we can already see activity from it. Can be checked with user 272.  |

<details>
  <summary>New Education and Training Section:</summary>
  <br>
  
<img width="591" alt="Screen Shot 2022-12-01 at 11 32 13" src="https://user-images.githubusercontent.com/97113607/205107835-cb009bb5-2a2e-40b7-9aa5-d598a6735f52.png">
  
  </details>
  
  ### LOA1 User 
  
  | **Link** | **URL** | **GA Event** | **Notes** |
  | ---- | ---- | ---- | ---- |
  | Learn how to verify your identity on Va.gov | https://www.va.gov/resources/verifying-your-identity-on-vagov/ | Unsure | This link previously existed however it was renamed and I cannot find any old or new events being tracked for this link. We may need to create one. I have a Staging LOA1 account and can provide details to sign in if needed (Erica Sauve) |
  
  <details>
  <summary>New LOA1 Design:</summary>
  <br>
  
<img width="520" alt="Screen Shot 2022-12-01 at 11 58 54" src="https://user-images.githubusercontent.com/97113607/205113785-a9874cbe-6e4d-411c-bf44-a26a4baea71b.png">
  
  </details>
