# Release Plan - Find VA Form (Detail Pages)

---

## Phase I: Unmoderated internal production testing (also known as User Acceptance Testing, or UAT)

### Planning:

- **Date range:**
  - Starting ~08/31/2020-09/09/2020
- **Test duration:**
  - 5 business days
- **Desired number of users:** 
  - 25
- **How you'll recruit the right production test users:** 
  - PW team, DEPO volunteers, and forms stakeholders
- **How you'll conduct the testing:** 
  - Provide people a list of form page links to test
- **How you'll give the test users access to the product in production w/o making it findable on VA.gov:** 
  - This is a CMS content product. In order to test full functionality (such as form download behavior) we have to publish on va.gov. We will not be able to test form downloads in demo/staging/preview. 
- **How will you make the product available in production while limiting the number of users who can find/access it:** 
  - We will do a 'hidden' launch, with basic auth gate in front of the form page directory. 
  - We will not do redirects until post-UAT.
  - We will UAT launch the first batch - (the top mvp top form pages)[#11155](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11155)

- **What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:** 
  - We will invite VA forms and business SMEs to visit their form detail page and test form download and links are working for them. 
  - We will check error rate after we hit 25 users or 7 business days. We want < 5% error rate.
  
  We will track errors for:

  - Form download links
  - Online tool links on the form detail page
  - Related forms links, if any, on the form detail page

### Results:

- Number of users: 
- Number of bugs identified / fixed: x/x
- ~Was the data submitted (if any) easy for VA to process?~ There is nothing to submit.
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

~## Phase II: Staged Rollout (also known as unmoderated production testing)~

~### Do I need a staged rollout? No~

~<details>~

~**Yes**, a staged rollout is required unless you can confidently answer "yes" to all of the following:~

* This change does not add substantial new functionality to VA.gov: *Yes*
* This change does not impact user flows through tasks: *Yes*
* This change does not affect traffic to backend services: *Yes*

~<details>~

-  ~~*Example*: a change to a page's text content **could skip** staged rollout~~ 
-  ~*Example*: a minor visual redesign to a page that doesn't affect user flows **could skip** staged rollout~
-  ~*Example*: adding a new field to an existing form **could skip** staged rollout~  

-  ~~*Example*: a new feature on an existing application that creates new backend traffic **needs staged rollout**~~ 
-  ~~*Example*: a significant change to how users navigate an existing form **needs staged rollout**~~ 
-  ~~*Example*: a feature that will route significantly more users (and therefore more backend traffic) to an existing application **needs staged rollout**~~ 

#### ~~Exceptions~~

~~Right now, [feature toggles](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-toggles/) are the primary tool VSP provides for facilitating staged rollout. If feature toggles don't work for your use case, you can request an exception from staged rollout in Staging Review.~~

| ~~Feature type~~                        | ~~Possible with feature toggles?~~ |
| --------------------------------------- | ---------------------------------- |
| ~~New feature in existing application~~ | ~~Yes~~                            |
| ~~New application~~                     | ~~Yes~~                            |
| ~~Static content changes~~              | ~~Doable but tricky~~              |
| ~~URL redirects~~                       | ~~No~~                             |

~~Other exceptions to this requirement can be approved by DEPO VSP leads.~~

~</details>~

~</details>~

~This product does not need a staged rollout, per above criteria, but we have decided to take a staged approach due to several factors:~ 
- ~~number of new nodes~
- ~new CMS template~
- ~interconnectedness with forms search and Lighthouse API, and~ 
- ~dependency on Transformer/node capacity.~


- Links to dashboard(s) showing "success criteria" metrics: _\[link here\]_

~_The stages and number of users below are provided as example values recommended by VSP, but can be customized to your team's needs._~

~### Stage A: Canary (Batch 1 - mvp top form pages) [#11155](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11155)~

_Test a small population of users to make sure any obvious bugs / edge cases are caught._

~#### Planning~

~- **Length of time:~ **
  - ~7 business days~
- ~~Percentage of~~ **~Users (and roughly how many users do you expect this to be):~ **
  - ~Around 25 invited users plus users who click to the page from modernized forms search experience.~ 


#### Results:

- Number of unique users: x
- Metrics at this stage (per your "success criteria"): 
- ~~Was the data submitted (if any) easy for VA to process?~~  There's nothing to submit.
- Types of errors logged: 
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

### Stage B: moderate (Batch 2 - MVP non-top forms) [#12213](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12213)

~~_Test a larger population of users to make sure there are no issues exposed by larger usage patterns._~~ 

We will do a 'hidden' launch, no-index and no redirects of remaining legacy form detail pages. Second batch -   'non-top' MVP form detail pages (around 400 - this number changes based on the VA forms database). 

#### Planning

- **Length of time: **
  - 7 business days
- ~~Percentage of~~ **Users (and roughly how many users do you expect this to be):** 
  - We will check error rate after we hit 300 users or 7 business days. We want < 5% error rate.

We will track errors for:

- Form download links
- Online tool links on the form detail page
- Related forms links, if any, on the form detail page

#### Results:

- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- ~~Was the data submitted (if any) easy for VA to process?~~ There's nothing to submit.
- Types of errors logged: 
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

_More stages? Sure! If it makes sense for your product! Plan them out with the same structure as above._


## Go Live! - Open launch (remove noindex [#12242](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12242) & implement redirects [#5549](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5549))

Remove no-index from modern form detail pages. 

Implement the 2 types of redirects:

- 1:1 redirects of top trafficked/high value forms (about 70)
- Bulk redirect to the modernized search page



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

Post-launch iterations/metrics
- We will track CTRs from the forms search to the corresponding form detail page 
    - :arrow_right: *Note: CTR cannot be calculated until we've iterated the search results to provide a link to form detail pages* [#11453](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11453)


_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
2. What qualitative feedback have you gathered from users or other stakeholders, if any?
3. Which of the assumptions you listed in your product outline were/were not validated? 
4. How might your product evolve now or in the future based on these results?



## Background

<details>
  
So! You're thinking about how you want to launch your product. You know you'll perform usability testing and you'll QA the heck out of it in staging, which are both very critical components of product development. But they don't tell you how people will naturally use your product when you're not there to guide them to it, how any submitted data will get to VA, whether that data will be easy or difficult for VA to process, whether people will be likely to submit duplicates, abandon partway through, or encounter bugs unique to the production environment. All of which could be very detrimental to users, which is the antithesis of what we're here to do. 

So: **how might we craft a release plan to test our product "in the wild" at a smaller scale, and learn how it'll actually be used, and what problems it actually might have or create, and then fix/adjust prior to going live to millions of VA.gov users?**

That's what this Release Plan Template is for!

</details>
