# Release Plan: Pension and Burial Form Deactivation
---
## Components
- New form review pages for users with in-progress pension and burial claims
- Deactivation and redirection of entry points (ulrs) for pension and burial forms (CAIA assisting)
- Email to users with in-progress forms notifying them of temporary deactivation

## Phase I: UAT

### Planning:
- **Date range or test duration** Estimated: 9/11 - 9/15
- **Desired number of users:** TBD (include users with in-progress claims and users without)
- **How you'll recruit the right production test users:** TBD
- **How you'll conduct the testing:** TBD
- **How you'll give the test users access to the product in production w/o making it live on VA.gov:** We will have the new profile launched to production but hidden behind a feature flag. We'll give participants access to this feature by adding their email addresses to a list of users who can see the new profile. 
  - (We need to make sure to include users who have in-progress pension or burial forms)

[UAT Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/79d2a7cef66e87523f2433e585f4c55236e3f002/products/pension/UAT%20Plan-527EZ%20abd%20530%20Temp%20Deactivation.md)

### Additional notes on UAT


#### Design UAT notes
- ??? will put together the formal research plan and script for UAT.
- ??? will also conduct these session.

#### Frontend UAT notes
- ??? will be responsible for launching the new profile to production behind a feature flag and giving participants access to the feature.
- They will have the option to attend UAT and be responsible for any frontend bugs/fixes.

#### Backend UAT notes
- The new pension and burial form review page did not require any backend work, as it was primarily a frontend redesign. However, should any backend issues come up, we will be available to fix them before we move into a phased launch.

### Results:
- **Bugs identified / fixed:**
[Pension and Burial Deactivation UAT Findings Spreadsheet]()

## Issues

1.    

## Phase II: Rollout

### The Plan

**Desired date range:** 9/15/23

**How will you make the product available in production while limiting the number of users who can access it?** 

We will launch the deativation behind a feature flags for burial and pension and and control what % of users see it using Flipper. 

- Launch review pages behind a feature flag. Test with team. (1 day)
- If things go well, we'll launch to 100% of users with in-progress forms. (1 day)
- CAIA releases updates to "how to apply" page
- CAIA deactivates form entry points and implements redirects to "how to apply page"
- Email notification to users with in-progerss forms is triggered

**What metrics-based criteria will you look at before advancing rollout to the next stage?:** 

- Opened emails
- Email click-throughs
- Form PDF downloads
- Page visits
- Error counts

## Go Live!

### Planning:
- Desired date: September 15, 2023
- Actual date: 

### 1-week results:


### 1-month results:


## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"? 

2. What qualitative feedback have you gathered from users or other stakeholders, if any? 

3. Which of the assumptions you listed in your product outline were/were not validated? 
   
4. How might your product evolve now or in the future based on these results?

# Go-to-market Strategy

**How are Veterans and others using this product going to know it exists?**

Users with in-progress pension or burial applications will receive an email letting them know that the digital form is no longer available and they will need to submit their claim using the paper version of the form.

**What marketing, outreach, or communications are necessary for this product to be successful?**

See above.
