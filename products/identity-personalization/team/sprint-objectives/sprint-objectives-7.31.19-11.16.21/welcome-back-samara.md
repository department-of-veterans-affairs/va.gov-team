# Welcome back Samara debrief
Goal: Debrief Samara on the latest team happenings. This will likely be the first of more specific, deep dive conversations on the status of various initiatves so let's think of this session as a "100-level" course to get us started.


## My VA 
### Current status
- Approaching a full quarter of being live!
- Stats are looking great - measuring way ahead of our targets
- Waiting for response from 508 office on audit
- Working on KPI dashboard ticket

### Strategy
- Strategic convos about making My VA _the_ homepage for VA.gov
- Once we get an MVP in place for alerts/action items we should move to make My VA the homepage
 
## Alerts (Action Items)

### Current status
- Completed [research synthesis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/research/alerts-discovery-research-summary.md) readout last sprint
- Executing on [next steps](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/research/alerts-discovery-research-summary.md#next-steps) this sprint

### Strategy
For discussion/possible forward path
- Alert "history" a separate interface for Veterans to see all of their alerts
- Only prominent/"un-read" alerts appear on My VA
- Consider alerts that other teams are working on/looking to add to AE

## Notification Preferences (VA Notify, VA Profile, and other integration updates)

### Current status
- 99% dev complete - one last piece of functionality that's in progress
- QA likely to start this sprint
- Staging and privacy review materials prep underway. _Planning to request staging review for end of next sprint to allow for time to address any QA findings_
- UAT materials prep underway

### Strategy


## Direct Deposit (hack and response)
- The team assisted in responding to an incident with Direct Deposit the week of 8/9 (reported incidents of fraud)
- Temporarily disabled the feature on production for all users for a few days
- The Identity team determined that the issue was occurring in Veterans' accounts who access DD via MHV or DD log-in, but _not_ ID.me
- The team reenabled the feature to be accessed only via verified ID.me users. If they log in with DD or MHV they have limited view only.

## Additional projects/features

### Preferred Facilities
- Currently on hold based on usability testing findings
- More details on the findings are available [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/may-2021-facilities-personalization-research/research-findings.md) and [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/may-2021-facilities-personalization-research/preferred-health-facilities-research-report.pdf)

### External team requests
In general the team has been thinking about what the best way could be to receive and prioritize requests from other teams/contracts that range from asking us make minor enhancements to existing features within the auth experience on VA.gov to external teams looking to build on the auth experience themselves. Some examples/groups that came in over the summer include:

- Digitial GI Bill Team to build a new section within My VA for Education; latest request secure inbox for education [design intent ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/29842#issuecomment-922013798) (flagged for us this morning). Additional context around this request: builds off of this larger initiative: [DGIB - My Education Benefits](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26556)
- Health care apartment team looking to expand the health care section on My VA
- Caseflow team to integrate their "virtual hearing opt-in" feature with My VA and/or action items
- Request from VA Profile business to add prompts to address update fields on Profile to encourage Veterans to ensure their home and mailing addresses are up to date
- Request from Mobile team to expand military branch logos in the name tag region (soon to be renamed the 'my information' region for a11y reasons) on VA.gov
- EERS on VA.gov profile
