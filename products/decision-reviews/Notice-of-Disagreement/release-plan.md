## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

### Planning:
- Desired date range or test duration: 1 week
- Desired number of users: 5
- How you'll recruit the right production test users: Perigean
- How you'll conduct the testing: online
- How you'll give the test users access to the product in production w/o making it live on VA.gov: zoom call walkthrough

### Results:
- Number of users: x
- Number of bugs identified / fixed: x/x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

## Phase II: Staged Rollout (also known as unmoderated production testing)

### Do I need a staged rollout?

**No.**



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

- Desired date range: _\[06/02/21 - 06/08/21\]_
- How will you make the product available in production while limiting the number of users who can find/access it: \[_lorem ipsum_\]
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: error rate < 5%.
- Links to dashboard(s) showing "success criteria" metrics: _\[link here\]_

_The stages and number of users below are provided as example values recommended by VSP, but can be customized to your team's needs._

### Stage A: Canary

_Test a small population of users to make sure any obvious bugs / edge cases are caught._

#### Planning

- Length of time: N/A
- Percentage of Users (and roughly how many users do you expect this to be): 10% (

#### Results:
- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

### Stage B: N/A

_Test a larger population of users to make sure there are no issues exposed by larger usage patterns._

#### Rollout Plan

1. Notify Public Websites team - site is ready to go live
2. Turn off feature toggles
3. Landing page live
4. Monitor Google Analytics and Grafana/Sentry for errors

#### Rollback Plan

1. Ask Public Websites to unpublish 
2. Turn off feature flags

#### Marketing Plan

1. Develop a brochure
2. Meet with VSOs and Board to socialize
3. Engage "find a form" team (open ticket)
4. Engage search team
5. Banners?


#### Results:
- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

_More stages? Sure! If it makes sense for your product! Plan them out with the same structure as above._

## Go Live!

### Planning:
- Desired date: 06/10/21
- Post-launch KPI 1 actual: Number of NOD submissions
- Post-launch KPI 2 actual: 20% of claims completed online in first month with 5% MoM inclease
- Post-launch KPI 3 actual: Where do Veterans abandon the form
- Post-launch KPI 4 actual: Successful vs. Unsuccessful submissions
- Go / No Go: (ready / not ready)[https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/go-no-go-meeting-template.md]

### 1-week results:
- Number of unique users: x
- Post-launch KPI 1 actual: Number of NOD submissions
- Post-launch KPI 2 actual: 20% of claims completed online in first month with 5% MoM inclease
- Post-launch KPI 3 actual: Where do Veterans abandon the form
- Post-launch KPI 4 actual: Successful vs. Unsuccessful submissions
- Any issues with VA handling/processing?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

### 1-month results:
- Number of unique users: x
- Post-launch KPI 1 actual: Number of NOD submissions
- Post-launch KPI 2 actual: 20% of claims completed online in first month with 5% MoM inclease
- Post-launch KPI 3 actual: Where do Veterans abandon the form
- Post-launch KPI 4 actual: Successful vs. Unsuccessful submissions
- Any issues with VA handling/processing?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders, if any?
1. Which of the assumptions you listed in your product outline were/were not validated? 
1. How might your product evolve now or in the future based on these results?
