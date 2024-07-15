# Release Plan Template

<!-- So! You're thinking about how you want to launch your product. You know you'll perform usability testing and you'll QA the heck out of it in staging, which are both very critical components of product development. But they don't tell you how people will naturally use your product when you're not there to guide them to it, how any submitted data will get to VA, whether that data will be easy or difficult for VA to process, whether people will be likely to submit duplicates, abandon partway through, or encounter bugs unique to the production environment. All of which could be very detrimental to users, which is the antithesis of what we're here to do. 

So: **how might we craft a release plan to test our product "in the wild" at a smaller scale, and learn how it'll actually be used, and what problems it actually might have or create, and then fix/adjust prior to going live to millions of VA.gov users?**

That's what this Release Plan Template is for! And note - there are feature toggles and beta banners at your disposal that you can use as a part of your plan.-->

## WIP Plan

### high-level:
- A phased rollout:
  - Phase 1: Basic auth, distributed to Forms Working Group
  - Phase 2: Remove auth, update Top Recommendations (Best Bets) on VA.gov's on-site search
  - Phase 3: Update footer `Find a VA form` link + implement redirects from `/vaforms` [See ticket #5163](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5163) for list of forms search redirects. 
### "Exit velocity" - what will it take to move to the next phase?
- **Top task conversion rate** One value proposition for the new Find VA Forms experience is we make it easier for Veterans and others to find the things that are most relevant. The existing experience is a basic list of form search results without any preferential treatment for the most often sought after services. The new experience changes that.

---
Analytics:
[Baseline `\vaforms` Pageviews](https://analytics.google.com/analytics/web/?authuser=1#/report/content-pages/a50123418w177519031p176188361/_u.date00=20200301&_u.date01=20200331&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.pagePath%22,%22PT%22,%22~2Fvaforms~2Fsearch_action.asp%3FFormNo=%22,0%5D%5D&explorer-table.rowStart=0&explorer-table.rowCount=100/)

[`/find-forms` Landing Page behavior](https://analytics.google.com/analytics/web/?authuser=1#/report/content-landing-pages/a50123418w177519031p176188361/_u.date00=20200301&_u.date01=20200413&explorer-table.filter=~2Ffind-forms&explorer-table.plotKeys=%5B%5D&_.gSectionId=summary&_r.tabId=explorer/)

## Phase I: :white_check_mark:
Moderated production testing (also known as User Acceptance Testing, or UAT) 

### Planning:
- **Desired date range or test duration:** since March 6th, min. 2 weeks
- **Desired number of users:** Members of the Form Working Group have a chance to "kick the tires"
- **How you'll recruit the right production test users:** VA's Forms contacts
- **How you'll conduct the testing:** Share the production link with identified testers
- **How you'll give the test users access to the product in production w/o making it live on VA.gov:** Credentials provided to those testing

### Results:
- **Number of users:** x
- **Number of bugs identified / fixed:** x/x
- **Was the data submitted (if any) easy for VA to process?:** yes/no, lorem ipsum
- **Types of errors logged:** Needed to correct links out to content pages rather than to apply pages from `/find-forms`
- **Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?** yes 
- **If yes, what:** 
  - Adjusted designs to make them more mobile-friendly/accessibile 
  - Drupal content updates
  - Make 'download PDF form' links in the modern forms search initiate download

## Phase II: :cyclone:
Unmoderated production testing

### Planning:
- **Desired date range:** 6/08 - 6/12
- **Desired number of unique users:** 300 (based on number of unique users navigating to /vaforms from a query for "forms" on VA.gov's on-site search
- **How you'll make the product available in production while limiting the # of users who can find/access it:** 
  - Live in production no longer behind auth
  - Top Recommendations (Best Bets) updated on VA.gov on-site search to reflect new form experience (live on 6/11)
  - **Not** included: redirects, footer updates
- **"Success" criteria (by the numbers):** 
  - Conversions present to "Frequently used VA forms"
  - Conversions present to "Manage your VA and other information online"
  - Conversions present to "More information"

### Results:
- **Number of unique users:** x
- **Actual results (per your "success criteria"):**
- **Was the data submitted (if any) easy for VA to process?:** yes/no, lorem ipsum
- **Types of errors logged:** lorem ipsum
- **Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?:** yes/no 
- **If yes, what:** lorem ipsum

More phases? Sure! If it makes sense for your product! Plan them out with the same structure as above.

## Go Live! :o:

- No credentials required
- Top Recommendations (Best Bets) reflect new Forms experience via on-site search
- "Find a VA form" footer link updated
- Redirect from `/vaforms` to `/find-forms` implemented [Ticket #5163](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5163)
- Remove 'no-index' so that it becomes searchable

### Planning:
- **Desired date:** Week of 5/4
- **Post-launch KPI 1:** xx% conversion to Top tasks
- **Post-launch KPI 2:** xx% conversion to Manage your VA and other information online
- **Post-launch KPI 3:** xx% conversion to More information

### 1-week results:
- **Number of unique users:** x
- **Post-launch KPI 1 actual:** xx lorem ipsum
- **Post-launch KPI 2 actual:** xx lorem ipsum
- **Post-launch KPI 3 actual:** xx lorem ipsum
- **Any issues with VA handling/processing?:** yes/no, lorem ipsum
- **Types of errors logged:** lorem ipsum
- **Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?:** yes/no 
  - **If yes, what:** lorem ipsum

### 1-month results:
- **Number of unique users:** x
- **Post-launch KPI 1 actual:** xx lorem ipsum
- **Post-launch KPI 2 actual:** xx lorem ipsum
- **Post-launch KPI 3 actual:** xx lorem ipsum
- **Any issues with VA handling/processing?:** yes/no, lorem ipsum
- **Types of errors logged:** lorem ipsum
- **Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?:** yes/no 
- **If yes, what:** lorem ipsum

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders, if any?
1. Which of the assumptions you listed in your product outline were/were not validated? 
1. How might your product evolve now or in the future based on these results?
