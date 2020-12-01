# Release Plan - Find VA Form (Detail Pages)

__Summary of release plan steps:__
Per product sync today - We will launch batches per steps: 

**I. Batch 1 release** :white_check_mark:

1. **Publish batch 1 form pages to prod with a basic auth gate.**   `Blocked until CMS breadcrumb fixed by [ticket #2270](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/2770)`

2. Invite users to UAT the top 41 forms. 

3. Fix any reported bugs if any. 


**II. Batch 2 release** :white_check_mark:

4. **Publish batch 2 forms - still behind basic auth gate.** 

5. Monitor until we hit 300 users or 5 business days with less than 5% error rate. (may have to move to after basic auth is lifted)

6. Fix bugs if any. 

7. Remove basic auth. and Add to sitemap - **October 7, 2020**


**III. After basic auth removed** :white_check_mark: 

8. Implement Batch 1 form pages redirects - 1:1 redirects

9. Implement Batch 2  form pages redirects - bulk redirects to search - **October 14, 2020**

**IV. Search page updates**

10. Follow on with [post-launch search page updates](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/10758): Related to field / Online tool CTA / form page connection / Misc page updates



---

## Phase I: Unmoderated internal production testing (also known as User Acceptance Testing, or UAT)

### Planning - Batch 1 form pages:

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
  - Collected stakeholder UAT bug/comments in this SharePoint folder: https://dvagov.sharepoint.com/sites/VA-forms-managers-and-SMEs/Shared%20Documents/Forms/AllItems.aspx 
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
- Links to dashboard(s) showing "success criteria" metrics: _\[link here\]_



### Planning - Batch 2 form pages: 

(Batch 2 - MVP non-top forms) [#12213](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12213)

- We will do a 'hidden' launch, no redirects of remaining legacy form detail pages. Second batch -   'non-top' MVP form detail pages (around 400 - this number changes based on the VA forms database). 
 - We will do a 'hidden' launch, with basic auth gate in front of the form page directory. 
 - We will remove basic auth after 300 users or 5 business days with less than 5% error rate.
 - We will not do redirects until post-UAT.

#### Planning

- **Length of time: **
  - 5 business days
- ~~Percentage of~~ **Users (and roughly how many users do you expect this to be):** 
  - We will check error rate after we hit 300 users or 5 business days. We want < 5% error rate.
  - Remove basic auth after ^. 

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


## Go Live! - Open launch (~remove noindex [#12242]~ & implement redirects [#5549](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5549))

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
