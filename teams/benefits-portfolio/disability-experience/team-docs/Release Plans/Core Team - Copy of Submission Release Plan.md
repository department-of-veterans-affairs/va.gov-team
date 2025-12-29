_Template copied from: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md_

---

## Step 1: Development

You'll need to create a feature toggle (or two) for any moderately or significantly changing feature. Follow the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles).

List the features toggles here.

| Toggle name | Description |
| ----------- | ----------- |
| disability_526_show_confirmation_review | Enables showing the submission review accordion section on the 526 confirmation page |

## Step 2: Validation

Since we use a [continuous delivery](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-process) model, once code is in the `main` branch, it will be deployed that day. 

Before enabling your feature toggle in production, you'll need to:

- [ ] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [ ] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [ ] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production rollout

### Do I need a staged rollout? => YES

### Define the Rollback process

If error rate spike or major regression is detected:
- Engineering lead to immediately disable toggle production
- PM to notify stakeholders and document incident
- Debug and patch before attempting re-release

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- We are not doing moderated production testing.

### Phase II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range: Exact dates TBD, ideally rollout will start within one week of the shutdown release freeze being lifted. 
Then rollout incrementally 1% for a few days with no issues → 25% for a few days with no issues → then 100%.
- How will you make the product available in production while limiting the number of users who can find/access it: 
  - Access limitation method: Flipper flags toggled on incrementally.
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: \[use your KPIs to help guide this. It could be things like *abandonment rate < 20%*, *reported contact center calls < 2 calls*, *error rate < 5%*, etc.\]
  - GA interaction with accordion events has increased
  - Error tracking on frontend with Datadog RUM
- Links to the dashboard(s) showing "success criteria" metrics: 
  - GA Dashboard: https://analytics.google.com/analytics/web/#/analysis/a50123418p419143770/edit/Q8pGsZFFSlyHtJTEvUyBPw
    - Average engagement time per active user on confirmation page [report](https://analytics.google.com/analytics/web/#/a50123418p419143770/reports/explorer?params=_u..nav%3Dmaui%26_r.explorerCard..filterTerm%3D%252Fdisability%252Ffile-disability-claim-form-21-526ez%252Fconfirmation%26_r.explorerCard..startRow%3D0&ruid=D4F7103F-DEA1-4A09-B066-EE554BF6F5F0&collectionId=8429185582&r=all-pages-and-screens)
    - Actions people take on the confirmation page [report](https://analytics.google.com/analytics/web/#/a50123418p419143770/reports/explorer?params=_u..nav%3Dmaui%26_r.explorerCard..seldim%3D%5B%22eventName%22,%22unifiedPagePathScreen%22%5D%26_r.explorerCard..filterTerm%3D%252Fdisability%252Ffile-disability-claim-form-21-526ez%252Fconfirmation%26_r.explorerCard..startRow%3D0%26_r..dataFilters%3D%5B%5D&r=top-events&ruid=D5BB15C6-755E-4252-9BAF-C1529F91E2AC&collectionId=8429185582)
    - Confirmation page [exploration view](https://analytics.google.com/analytics/web/#/analysis/a50123418p419143770/edit/Q8pGsZFFSlyHtJTEvUyBPw)
    - 526 Overall Form Abandonment [exploration view](https://analytics.google.com/analytics/web/#/analysis/a50123418p419143770/edit/KHKBycWYRfqDVxVPWNwZyA)
  - DataDog  
    - [Confirmation page new error alert](https://vagov.ddog-gov.com/monitors/485476)
    - [Frontend 526 overall "new error" alert ](https://vagov.ddog-gov.com/monitors/474722)
    - [Error Boundary triggered on confirmation page alert](https://vagov.ddog-gov.com/monitors/489345)
    - ~[Confirmation page "total failure" high priority alert ](https://vagov.ddog-gov.com/monitors/476386)~  Edit: no longer needed, replaced with error boundary alert
    - [Confirmation page error dashboard](https://vagov.ddog-gov.com/rum/sessions?query=%40type%3Aerror%20%40application.id%3Ac7eb541a-30d2-4a00-aba0-04965e8a2668%20%40session.type%3Auser%20env%3Aproduction%20%40view.name%3A%22%2Fdisability%2F%3F%2Fconfirmation%22&agg_m=count&agg_m_source=base&agg_t=count&cols=&fromUser=false&viz=stream&from_ts=1763574565087&to_ts=1763660965087&live=true)
    - [Sessions which user ended on confirmation page](https://vagov.ddog-gov.com/rum/sessions?query=%40type%3Asession%20%40application.id%3Ac7eb541a-30d2-4a00-aba0-04965e8a2668%20%40session.last_view.url_path%3A%22%2Fdisability%2Ffile-disability-claim-form-21-526ez%2Fconfirmation%22&agg_m=count&agg_m_source=base&agg_t=count&cols=&from_ts=1762777030834&to_ts=1763381830834&live=true)

- Who is monitoring the dashboard(s)?: PM, Engineering lead, core team engineers

*The KPIs and numbers are example values recommended by VSP but can be customized to your team's needs.*

### Stage A: Canary - 1% of users

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

The recommended progression is 1% → 25% → 100%. However, VFS teams have flexibility to add more increments to mitigate risk.

#### Planning

- Length of time: Ongoing (*minimum 2 hours*)
- Percentage of Users (and roughly how many users do you expect this to be): 1% of users

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage B: 25% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: ongoing
- Percentage of Users (and roughly how many users do you expect this to be): 25%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage C: 50% of users (optional)

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: Ongoing
- Percentage of Users (and roughly how many users do you expect this to be): 50%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage D: 75% of users (optional)

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: Ongoing (*minimum 2 hours*)
- Percentage of Users (and roughly how many users do you expect this to be): 75%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage E: 100% of users

#### Planning

- Length of time: Ongoing
- Percentage of Users (and roughly how many users do you expect this to be): 100%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

## Post Launch metrics

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.

### 1-week results

- Number of unique users: [FILL_IN]
- Post-launch KPI 1 actual: [FILL_IN]
- Post-launch KPI 2 actual: [FILL_IN]
- Post-launch KPI 3 actual: [FILL_IN]
- Any issues with VA handling/processing?:  [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]

### 1-month results

- Number of unique users: [FILL_IN]
- Post-launch KPI 1 actual: [FILL_IN]
- Post-launch KPI 2 actual: [FILL_IN]
- Post-launch KPI 3 actual: [FILL_IN]
- Any issues with VA handling/processing?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any UX changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]

## Post-launch Questions

*To be completed once you have gathered your initial set of data, as outlined above.*

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders?
1. Which assumptions you listed in your product outline were/were not validated?
1. How might your product evolve now or in the future based on these results?
1. What technical tasks are needed to clean up (i.e., removal of feature toggles)?
