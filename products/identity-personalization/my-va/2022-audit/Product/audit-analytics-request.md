## My VA Audit Analytics Request

### Updated on December 7, 2022

## Events to be tracked

### Claims and appeals

| Link | URL | GA Event | Notes |
| ---- | ---- | ---- | ---- |
| Learn how to file a claim | https://va.gov/disability/how-to-file-claim/ | Needs new GA event | Can see this with test user 10, I see `profile-navigation - view link - view learn how to file a claim` being tracked in Staging, but this is a new link, we also want to use "Dashboard" not "Profile" |
| Manage all claims and appeals | https://www.va.gov/claim-or-appeal-status/ | `profile - navigation - view link - view manage claims and appeals` | I see this event in Staging, can we validate this will be the new event? the old one was: `Navigation - Link List - Claims and Appeals - Check your claim or appeal status` can test with user 14 |

<details>
  <summary>No Claims or Appeals (New version):</summary>
  <br>
  
<img width="626" alt="Screen Shot 2022-12-01 at 09 46 21" src="https://user-images.githubusercontent.com/97113607/205082638-19f957b8-682c-4ac0-9703-e9c290e99e40.png">
  
  </details>

### Health care

| **Link** | **URL** | **GA Event** | **Notes** |
| ---- | ---- | ---- | ---- |
| Apply for VA health care | https://www.va.gov/health-care/apply/application/introduction | Needs new GA event | I see `Navigation - Link List - Health care - Apply for VA Health care` being tracked in staging  |


<details>
  <summary>No Healthcare (New version):</summary>
  <br>
  
<img width="638" alt="Screen Shot 2022-12-01 at 10 40 25" src="https://user-images.githubusercontent.com/97113607/205095672-20189d4c-9793-4b63-b904-0b5888f1e76e.png">
  
  </details>
  
### Education and training
- This is a new section to My VA, here are the new links to track:

| **Link** | **URL** | **GA Event** | **Notes** |
| ---- | ---- | ---- | 
| Learn how to apply for VA educational benefits | https://www.va.gov/education/how-to-apply/ | `Navigation - Link List - Education and training - Learn how to apply for VA educational benefits` | This section was accidentally live for a few days in Prod so we already see GA activity for this |
| Compare GI Bill benefits by school | https://va.gov/education/gi-bill-comparison-tool | `Navigation - Link List - Education and training - Compare GI Bill benefits by school` | This section was accidentally live for a few days in Prod so we already see GA activity for it. |
| Check your BI Bill Statement of Benefits | https://va.gov/education/gi-bill/post-9-11/ch-33-benefit/ | `Navigation - Link List - Education and training - Check your GI Bill Statement of Benefits` | I see this event being tracked in Staging, this section was also live in Prod accidentally for a few days so we can already see activity from it |

<details>
  <summary>New Education and Training Section:</summary>
  <br>
  
<img width="591" alt="Screen Shot 2022-12-01 at 11 32 13" src="https://user-images.githubusercontent.com/97113607/205107835-cb009bb5-2a2e-40b7-9aa5-d598a6735f52.png">
  
  </details>
