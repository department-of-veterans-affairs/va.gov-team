# Release Plan - WIP - 1.0 Learning Center Beta Launch

__Summary of release plan steps:__
Per product sync today - We will launch batches per steps: 

**I. 1.0 October/Nov beta launch release: ~Oct 29 - Nov. 5 prod**

1. [See MVP phases to launch](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/mvp-phases-to-launch)   

2. QA and internally validate in [demo environment](http://learningcenter.demo.ci.cms.va.gov/): ~Oct 23 -28

3. Fix any reported bugs in prod. 

4. Beta launch on prod: Oct 29 - Nov. 5 

5. Implement search.gov index of lc pages.

6. Test lc search. (There's no way to test product search in demo environment or in staging because search.gov needs to index learning center directory on live site.)


**II. 1.1 December release: ~Dec 21 - 30** 

4. [See MVP phases to launch](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/mvp-phases-to-launch)   

5. Internally validate 1.1 prod articles in [demo environment](http://learningcenter.demo.ci.cms.va.gov/).

6. Fix bugs if any.

7. Publish on prod. 

8. Validate on prod. 

9. Redirect and retire legacy content. 



---

## Phase I: Unmoderated Q/A demo testing

### Planning - 1.0 October/Nov beta launch release**:

- **QA and internal demo validation date range:**
  - Starting ~Oct 23 - 28
- **QA and internal demo validation duration:**
  - 5 business days
  
- **Prod validation date range:**
  - Starting Oct 29 - Nov. 5 
- **Prod validation duration:**
  - 3 business days
- **How you'll recruit the right production test users:** 
  - PW team
- **How you'll conduct the testing:** 
  - Provide people a list of URL links to test
  - Collected UAT bug/comments in this SharePoint folder: <link to sharepoint doc here>


- **What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:** 
  - We will check error rate after we hit 25 users or 7 business days. We want < 5% error rate.
  
  We will track errors for:

  - invalid/broken links
  - CTA buttons
  - tags
  - category landing pages

### Results:

- Number of users: 
- Number of bugs identified / fixed: x/x
- ~Was the data submitted (if any) easy for VA to process?~ There is nothing to submit.
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum
- Links to dashboard(s) showing "success criteria" metrics: _\[link here\]_



_More stages? Sure! If it makes sense for your product! Plan them out with the same structure as above._


## Go Live! - Open launch (~remove noindex [#12242]~ & implement redirects [#5549](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5549))

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
