# Vet Center Release Plan (WIP)

Limiting the nuumber of Veterans based on profile or user type is not possible because Vet Center pages are part of the **unauthenticated** VA.gov experience. Phases will instead be defined by the number of Vet Centers that are creating and publishing content to new pages on VA.gov. Veteran volume will be naturally restrained by the limited nmber of available pages and the geographic relevance to a subset of potential visitors. 


## Phase I: MVP

### Planning:
- Desired date range or test duration: Targeting a soft launch for mid-May
- Desired number of Vet Center locations - 10 
- Selection of pilot locations
  - Originally, 5 locations were chosen - reresenting each of the 5 Vet Center regions. An additional 5 locations were chosen to ensure a diverse group of sites, representing possible variations in facilities, staffing and external factors.
  - Criteria is documented in the [MVP Participants section of the product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/vet-centers/product-brief.md#mvp-participants)
- Product access without making it live on VA.gov
  - Content will be entered during training by an Outreach specialist at each of the pilot locations, based on a content deck which was prepared and seeded by Dave Conlon and Michelle Middaugh.
  - Outreach specialists will not have publishing permissions due to the risk of creating broken links by publishing one page without the others.

### Results:
- Number of users: 10 + 3 national editors (and backups)
- Number of bugs identified / fixed: x/x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

## Phase II: Staged Rollout 

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

- Desired date range: _\[mm/dd/yy - mm/dd/yy\]_
- How will you make the product available in production while limiting the number of users who can find/access it: \[_lorem ipsum_\]
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: \[use your KPIs to help guide this. It could be things like _abandonment rate < 20%_, _reported contact center calls < 2 calls_, _error rate < 5%_, etc.\]
- Links to dashboard(s) showing "success criteria" metrics: _\[link here\]_

_The stages and number of users below are provided as example values recommended by VSP, but can be customized to your team's needs._

### Stage A: Canary

_Test a small population of users to make sure any obvious bugs / edge cases are caught._

#### Planning

- Length of time: x (_minimum 2 hours_)
- Percentage of Users (and roughly how many users do you expect this to be): x% (500 users) (_Recommendation: select a percentage that targets ~500 users, or at most 10%_)

#### Results:
- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

### Stage B: moderate

_Test a larger population of users to make sure there are no issues exposed by larger usage patterns._

#### Planning

- Length of time: x (_minimum 1 day_)
- Percentage of Users (and roughly how many users do you expect this to be): 25% (x users)

#### Results:
- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

_More stages? Sure! If it makes sense for your product! Plan them out with the same structure as above._

## Go Live!

### Planning:
- Desired date: mm/dd/yy
- Post-launch KPI 1: xx lorem ipsum
- Post-launch KPI 2: xx lorem ipsum
- Post-launch KPI 3: xx lorem ipsum
- etc
- Go / No Go: (ready / not ready)[https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/go-no-go-meeting-template.md]

### 1-week results:
- Number of unique users: x
- Post-launch KPI 1 actual: xx lorem ipsum
- Post-launch KPI 2 actual: xx lorem ipsum
- Post-launch KPI 3 actual: xx lorem ipsum
- Any issues with VA handling/processing?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

### 1-month results:
- Number of unique users: x
- Post-launch KPI 1 actual: xx lorem ipsum
- Post-launch KPI 2 actual: xx lorem ipsum
- Post-launch KPI 3 actual: xx lorem ipsum
- Any issues with VA handling/processing?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders, if any?
1. Which of the assumptions you listed in your product outline were/were not validated? 
1. How might your product evolve now or in the future based on these result
