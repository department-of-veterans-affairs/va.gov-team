> _Draft: Will be updated soon!_ 

# Release Plan Template

So! You're thinking about how you want to launch your product. You know you'll perform usability testing and you'll QA the heck out of it in staging, which are both very critical components of product development. But they don't tell you how people will naturally use your product when you're not there to guide them to it, how any submitted data will get to VA, whether that data will be easy or difficult for VA to process, whether people will be likely to submit duplicates, abandon partway through, or encounter bugs unique to the production environment. All of which could be very detrimental to users, which is the antithesis of what we're here to do. 

So: **how might we craft a release plan to test our product "in the wild" at a smaller scale, and learn how it'll actually be used, and what problems it actually might have or create, and then fix/adjust prior to going live to millions of VA.gov users?**

That's what this Release Plan Template is for!

---

## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

### Planning:
- Desired date range or test duration:  completed in QA
- Desired number of users: n/a
- How you'll recruit the right production test users: random sample/QA
- How you'll conduct the testing: via canary test
- How you'll give the test users access to the product in production w/o making it live on VA.gov: N/A

### Results:
- Number of users: x
- Number of bugs identified / fixed: x/x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

## Phase II: Staged Rollout (also known as unmoderated production testing)

### Do I need a staged rollout?

**Yes**, a staged rollout is required unless you can confidently answer "yes" to all of the following:

* This change does not add substantial new functionality to VA.gov
* This change does not impact user flows through tasks
* This change does not affect traffic to backend services

*Example*: a change to a page's text content **could skip** staged rollout

*Example*: a minor visual redesign to a page that doesn't affect user flows **could skip** staged rollout

*Example*: adding a new field to an existing form **could skip** staged rollout

*Example*: a new feature on an existing application that creates new backend traffic **needs staged rollout**

*Example*: a significant change to how users navigate an existing form **needs staged rollout**

*Example*: a feature that will route significantly more users (and therefore more backend traffic) to an existing application **needs staged rollout**

#### Exceptions

Right now, [feature toggles](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-toggles/) are the primary tool VSP provides for facilitating staged rollout. If feature toggles don't work for your use case, you can request an exception from staged rollout in Staging Review.

| Feature type | Possible with feature toggles? |
| --- | --- |
| New feature in existing application | Yes |
| New application | Yes |
| Static content changes | Doable but tricky |
| URL redirects | No |

Other exceptions to this requirement can be approved by DEPO VSP leads.

### Planning

- Desired date range:  8/21/23 - 8/30/23
- How will you make the product available in production while limiting the number of users who can find/access it: Use of Feature toggles.
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: Successful submissions, *reported contact center calls < 2 calls*
- Link to the dashboard(s) showing "success criteria" metrics:
- https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20221201&amp;_u.date01=20230221&amp;explorer-segmentExplorer.segmentId=analytics.eventLabel&amp;explorer-table.plotKeys=%5B%5D&amp;explorer-table.filter=fsr-5655&amp;explorer-table.secSegmentId=analytics.eventAction&amp;explorer-table.advFilter=%5B%5B0,%22analytics.eventLabel%22,%22RE%22,%22fsr-5655%22,0%5D%5D&amp;_r.drilldown=analytics.eventCategory:Transactions
- Who is monitoring the dashboard(s)?: BE Developer (Scott James) and PM (Tom Davis), DM (Heather Rienks)

_The stages and number of users below are provided as example values recommended by VSP, but can be customized to your team's needs._

### Stage A: Canary

_Test a small population of users to make sure any obvious bugs / edge cases are caught._

#### Planning

- Length of time: 2 days (8/21- 8/22)
- Percentage of Users (and roughly how many users do you expect this to be): 10% 

#### Results:
- Number of unique users: ~30
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: Yes, Huron
- Types of errors logged: BackendServiceException: {:status=>500, :detail=>nil, :code=>"VA900", :source=>nil}
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? BackendServiceException: {:status=>500, :detail=>nil, :code=>"VA900", :source=>nil}

### Stage B: 25% of users

_Test a larger population of users to make sure there are no issues exposed by larger usage patterns._

#### Planning

- Length of time: 2 days (8/23-8/24)
- Percentage of Users (and roughly how many users do you expect this to be): 25%

#### Results:
- Number of unique users: ~55
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: Yes, VBS/Huron file transfer
- Types of errors logged: BackendServiceException: {:status=>500, :detail=>nil, :code=>"VA900", :source=>nil}
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? Yes, Revert nil change

### Stage C: 50% of users

#### Planning

- Length of time: 4 days (8/25- 8/29)
- Percentage of Users (and roughly how many users do you expect this to be): 50%

#### Results

- Number of unique users: ~233
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: No
- Types of errors logged:
--BackendServiceException: {:status=>500, :detail=>nil, :code=>"VA900", :source=>nil}
--No such file or directory @ rb_sysopen - tmp/pdfs/5655_b119e499-8e61-41ec-8000-69353043cb64_final.pdf
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? None

### Stage D: 100% of users (8/30)

#### Planning

- Length of time: N/A
- Percentage of Users (and roughly how many users do you expect this to be): 100%

#### Results

- Number of unique users: ~899
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: Yes
- Types of errors logged: BackendServiceException: {:status=>500, :detail=>nil, :code=>"VA900", :source=>nil}
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? No

### Planning:
- Desired date: mm/dd/yy
- Post-launch KPI 1: xx lorem ipsum
- Post-launch KPI 2: xx lorem ipsum
- Post-launch KPI 3: xx lorem ipsum
- etc
- Go / No Go: (ready / not ready)[https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/go-no-go-meeting-template.md]

### 1-week results:
- Number of unique users: ~899
- Any issues with VA handling/processing?:  Yes
- Types of errors logged: BackendServiceException: {:status=>500, :detail=>nil, :code=>"VA900", :source=>nil}
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? No
- If yes, what: N/A

### 1-month results:
- Number of unique users: ~3800
- Any issues with VA handling/processing?: Yes
- Types of errors logged: BackendServiceException: {:status=>500, :detail=>nil, :code=>"VA900", :source=>nil} - BackendServiceException: {:source=>"VaNotify::Service", :code=>"VANOTIFY_400"}
- Any UX changes necessary based on the logs, feedback on user challenges, or VA challenges? No
- If yes, what: N/A

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders, if any?
1. Which of the assumptions you listed in your product outline were/were not validated? 
1. How might your product evolve now or in the future based on these results?

