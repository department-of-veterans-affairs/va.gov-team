# Release Plan: 0781 Redirect  

## Purpose
The purpose of this release plan is to document and align the delivery teams and stakeholders on what will be delivered and when. 

## Feature description
For Veterans who have started their claim process since the new online paper sync for 0781 was released and who want to apply for benefits or services related to PTSD (post traumatic stress disorder) or mental health issues, this feature will notify the user that there is a new PDF paper form that is more current than the online version. Unlike today in the production where the newest version of the PDF is available, this feature will let the user know that the new version of the form includes questions related to mental health that the online version does not have and encourage them to download it.

## Project goals
- Notify the user that there is new version of the PDF that is more current than the online version
- Increase the number of claims with file uploads vs. online for PTSD 

## Success criteria
Using the number of new claims vs. claims that were in progress before the release, the number of uploaed 0781 forms vs. online entry for PTSD goes up. 
Post submission validation (becasuse clicks on pages or buttons in our flow may not be accurate enough because the summary page allows the user to change their mind). 

### Current stats
As of January 2024, we are averaging 3.2k 0781/a successful uploads per month vs. x.xk online form entries. 

## Resource materials
- [Design specs](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=7355-119960&t=qKSlGlTXqNCK0gRW-4)
- [Flow diagram](https://lucid.app/lucidchart/3c8b77ee-d557-4e3c-aa71-72b91a19f8f9/edit?invitationId=inv_2aad0e84-4c60-48b5-88ba-32ccb30dc5d3&page=Aty-zM1V_zGj#)
- [Datadog log](https://vagov.ddog-gov.com/logs?query=%40application%3Avets-api-worker%20%40environment%3Aproduction%20%40named_tags.class%3A%22EVSS%3A%3ADisabilityCompensationForm%3A%3ASubmitForm0781%22%20%40payload.status%3Asuccess%20&agg_m=count&agg_m_source=base&agg_t=count&cols=%40payload.error_message%2C%40payload.submission_id%2C%40payload.saved_claim_id%2C%40payload.job_id&fromUser=true&messageDisplay=inline&refresh_mode=paused&step=2592000000&storage=online_archives&stream_sort=time%2Casc&view=spans&viz=timeseries&from_ts=1704085200000&to_ts=1725249540000&live=false)
- Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing) (pre-production)
- Product Guide
- Collboration Cycle Plan

## New capabilities and changes
- 0781 Flipper https://github.com/department-of-veterans-affairs/va.gov-team/issues/92013 - canary rollout and production validation

- Limit the new feature to only new claims https://github.com/department-of-veterans-affairs/va.gov-team/issues/92199 - these are claims started after the release date, claims that were in progress before the release would not see the new feature. 

- Instead of asking the user two seprate choices for which form they would like to upload (example, onece for each of these): 
  - walkthrough-781-choice page
  - walkthrough-781a-choice page
    
  We'll ask once on one page.
  - NEW 0781 Choice page https://github.com/department-of-veterans-affairs/va.gov-team/issues/91930 - new content and link to the paper form

- Instead of asking the user to upload their form on two seprate pages(example, one for each of these): 
  - ptsd-781-upload page
  - ptsd-781a-upload page
 
  We'll ask once on one page.     
  - NEW 0781 upload page https://github.com/department-of-veterans-affairs/va.gov-team/issues/91998 - new content and link to the paper form

## Production release plan
Canary rollout using 1% of new claims, if no issues rollout to 100%. 

Release date: 

Team members: 

Length of time: 

Percentage of Users (and roughly how many users do you expect this to be): 1% of users, ~xxx submissions



## Risks

## Production issues recovery plan
DBEX team Carbs and OCTO PO will monitor analytics. If something goes wrong, the engineering teams will be on standby to disable the flippers which would prevent any user starting a new form from entering the path for the new 0781 redirect flow and instead direct them through the original flow for entering or uploading their 0781 and 0781a form/data. 


