# Claims Status

## Links
- Production: www.va.gov/track-claims or www.va.gov/track-claims/your-claims
- Staging: staging.va.gov/track-claims (redirects to staging.va.gov/track-claims/your-claims)

## Testing
- [How to log into staging](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/mvi-staging-users.csv)

## Important Keywords
claims, claims status, compensation claim, claims and appeals, claim for compensation, claims list, check claims

---
## Product Overview
Veterans can file a Disability Claim if they believe they have an injury or medical condition that's a result of their time in service. Once they file that claim, VA will process it, decide whether they think the claimed condition(s) is(are) indeed service-connected, and if so will give the Veteran a disability rating. This rating dictates what monthly award (i.e. payment) the Veteran may get, as well as what other benefits they might have access to.

Once the Veteran submits their claim to VA, they need a way to understand where it is in VA's processing/rating journey. Claim Status is a tool that allows them to track this progress. It exists in eBenefits, and was transformed onto Vets.gov as well.

It's one of the highest trafficked tools (the highest?) of VA, and it's also the thing that contact center gets the most calls about - people wanting to verify or get clarity on the status of their claim.

If a Veteran isn't pleased with their rating decision from VA, they can ask for a higher level of review, file an appeal, or file a supplemental claim. Appeals status, and supplemental claims status are tracked in this tool as well.

- Demo Video V1: https://youtu.be/74u3L23uX4M
- Demo Video V2: https://youtu.be/4_iGavrnj_k
- Hopes and dreams beyond MVP: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/claims-status/track-claim-status/design/version2.md

---
## Points of Contact (POCs)
### VA:
_See [Project Charter](./ClaimStatusIt2_Charter_Signed.pdf) for more information_  
VBA Product Owner: Lucas Tickner / Office of Disability Assistance (20P), VBA
Business Subject Matter Experts (SMEs)
  - Comp Service: Laurine Carson, Mel Garrett
  - Pension and Fiduciary Service: Kevin Friel, Kristina Messenger
  - Vocation Rehabilitation & Employment (VR&E): Jack Kammerer
### DSVA: 
- Andrea Schneider
### Ad Hoc:
- Sprint Team: Apps Team 1 / Unicorns - [#unicorns-team](https://dsva.slack.com/archives/C5AGLBNRK)

---

## Background, Narrative, and Important Decisions:
_See [Project Charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/claims-status/claimstatusit2-charter-signed.pdf) for more information_

### Context
- Comp Services is the main stakeholder
- Background: Comp services didn't want to emphasize appealing a claim within claim status, they didn't want Veterans to be encouraged to appeal
- Note: Legislation has passed and veterans will need to choose themselves different points of their path post-claim decision. Higher level of review, appeal, supplemental claim. Program called RAMP related to this

### How is Appeals Status service related to Claims Status, and what decisions were made about how to organize them?
- Claims and appeals right now are totally separate in the back-end
- Appeals Status is on V2 at the time of this writing (04/2019)
- One claims status app but two or three different services
- Claims and appeals are mixed together in claims list and we make 2 separate API calls for them, they're combined and sorted together in the claims list, and the box types for each look slightly different.
- Appeals Status right now is simple and read-only
- For Appeals Status, there's a single endoint that spits back everything

### What kind of delay is there between claim submission and visibility in status?
- Sometimes there is for doc upload, but not for visibility of submission of a claim (like a 526 or 686c through eBenefits)
- Any updates in the backend that affect the status should reflect immediately
- "Delays" are usually just because of incorrect info on the EP so it's not showing up right
- This is less true for Appeals, for example a Notice of Disagreement can take a couple of months before anything shows (pull from VACOLS)
- There may be an EP to process the notice of disagreement, but until they do that processing it doesn't get input into VACOLS, so we don't show it

### Were there past UX studies around the URLs we currently use to serve claims status and appeals status
- Don't think so
- Originally, housed under Disability, but then when we expanded to more claim types, we put it in its own track-claims directory
- There may be places where we link to old version, so keep an eye out and clean it if we see it.
- A couple of issues were out there at one point, maybe they're still there
- `disability/claims` still exists as a URL but redirects are up so it'll always point to `/track-claims`

### Has there been any past user research about sending notifications to users when there is a change to the status of a claim or appeal
- Notifications discovery went as far as understanding whether feasible, when found out no, then discovery stopped
- Potential is there with polling to send notifications on status change but that might not be a good solution (BGS does do that for MVI, though)
- eBenefits doesn't send notifications for claims status (only for submission of applications, and maybe for consolidation of claims)
- But it was a tight timeline, and MVP, so wasn't possible to be in scope at the time
- Usability sessions probably do have some info from users mentioning it woud be nice if there was a notification, but it was never an intentional part of the research to ask about notifications.
- Anxiety about claims moving forward, so notifications of some kind are something we should explore
- FROG might have notes about this too... feedback that it might be worthwhile to have notifications when status changes

### Domino's Pizza Tracker—why not?
- Challenge: process isn't linear, so the team chose a display that shows additive status
- A "tracker" type of thing does exists in VA.gov, consolidated from the 8 eBen steps to 5 in VA.gov, because research showed that seeing their status go "backwards" caused anger for users. So those loop-ish phases were consolidated.
- Also note that claims take about 127 days vs Appeals that take 5 years

### Where does the estimated completion date that appears for users in the claim status tool come from?
This is an algorithm owned by the PA&I team who does the calculation on their side, then EVSS retrieves the date from the BGS claims service.

### Where does the content come from?
- Content recieved from EVSS wasn't user-friendly (based on info from physical letters being mailed out)
- Special character issues because trying to generate in HTML etc.
- Info isn't plain language
- Info isn't easily changeable for us, so we have a workaround but weren't able to get it in in MVP: path where each tracked item has a number/indicator, EVSS does now include that data in the service, so we can adjust/map the content to display for each request. (There's a table for what header and content to show for each). Over 700 tracked items.

## Current Status

### Features
- Asynchronous claim fetching
- One consolidated, paginated Claims list for all of a veteran's claims
- Claims list features cards that have status info with date of last , current status, and link to details
- Claim details pages including tabs for:
    - Status History
    - Files uploaded (with option to [upload other files](./track-claim-status/technical/document_upload)
    - Claim details

### Feature parity with eBenefits
- eBenefits allows opening up docs from eFolder, Claims Status tool on va.gov only shows doc names

### Screenshots
[Claims List](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/claim-appeal-status/claims-status/screenshots)  
[Claim Details - Status Tab](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/claims-status/screenshots/claim-details-status.png)  
[Claim Details - Files Tab](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/claims-status/screenshots/claim-details-files.png)  
[Claim Details - Details Tab](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/claims-status/screenshots/claim-details-details.png)  

## Error Handling
- EVSS -> vets-api: [List of error codes that vets-api receives from EVSS and upstream services](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/claims-status/track-claim-status/technical/error.codes.and.explanations.pdf)
- vets-api -> vets-website: [List of error codes, descriptions, and UIs](./Error%20Handling.md)

## Service Level Objectives
The general site-wide availability and latency objectives that are monitored in Prometheus apply to Claim Status as well. See [here](https://github.com/department-of-veterans-affairs/devops/blob/55354cd6cc325bb4a9672576006cbda14c0a7488/ansible/deployment/config/prometheus/rules/site.rules) for details. 

Additionally, there are a few monitored SLOs specifically applicable to the Claim Status application:

**Availability:**
5xx responses should not exceed 5% of total responses for more than 5 consecutive minutes
[Link](https://github.com/department-of-veterans-affairs/devops/blob/55354cd6cc325bb4a9672576006cbda14c0a7488/ansible/deployment/config/prometheus/rules/application.rules#L6)

**Latency:**
- Uploads: Percent of requests served in under 10 seconds should not drop to or below 95% of total requests for more than 5 consecutive minutes
[Link](https://github.com/department-of-veterans-affairs/devops/blob/55354cd6cc325bb4a9672576006cbda14c0a7488/ansible/deployment/config/prometheus/rules/application.rules#L24)
- Claims: Percent of requests served in under 2 seconds should not drop to or below 95% of total requests for more than 5 consecutive minutes
[Link](https://github.com/department-of-veterans-affairs/devops/blob/55354cd6cc325bb4a9672576006cbda14c0a7488/ansible/deployment/config/prometheus/rules/application.rules#L15)

**Incident Response:**
Any availability / latency incident should be acknowledged within 15 minutes of initial alert.
[Link](https://github.com/department-of-veterans-affairs/devops/blob/2913da3512a65a8cb988ad189235794ed1067299/terraform/modules/pagerduty_team/main.tf#L21)

## APIs / Dependent Systems

### Front End API dependencies
The Claims Status product on va.gov makes use of two `vets-api` calls:
- `v0/evss_claims_async` (returns a list of all claims for a veteran)
- `v0/evss_claims_async/{claim_id}` (returns detail for a single claim)

These `vets-api` endpoints are a pass-through for connecting to the evss async claims service. `vets-api` documentation for various EVSS services can be found in the [EVSS section of the vets-api readme](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/VA-Systems/eBenefits-EVSS)

EVSS connects to BGS to retrieve the requested data. BGS has known uptime issues stemming from planned and unplanned maintenance, especially over the weekends. Please see related information on the BGS system in the [vets-api database documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/VA-Systems/BGS)

Optionally, veterans can [upload additional files to open claims](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/claims-status/track-claim-status/technical/document-upload.md), which uses vets-api's EVSS document upload endpoint, `/v0/evss_claims/${claimId}/documents`

## Known issues
Known issues and product backlog is being tracked via the claim status label on our zenhub boards.

