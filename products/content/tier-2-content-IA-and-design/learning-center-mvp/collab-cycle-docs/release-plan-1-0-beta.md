# Summary of Release Plan Steps - 1.0 Learning Center Beta Launch

__Summary of release plan steps:__
Per product sync today - We will launch batches per steps: 

**I. 1.0 October/Nov beta launch release: ~ Nov. 4 prod (Sprint 33/34)**

1. [See MVP phases to launch](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/mvp-phases-to-launch)   

2. QA and internally validate in [demo environment](http://learningcenter.demo.ci.cms.va.gov/): ~Oct 28 - Nov 3

3. Fix any reported bugs in production environment. 

4. Beta launch on prod: Nov. 4. 

5. Implement search.gov index of LC pages in Prod on Nov. 4 once in Prod.

6. Test LC search component. (There's no way to test product search in demo environment or in staging because search.gov needs to index learning center directory on live 'Prod' site.)

7. Follow on with post-launch page updates/BUGs: Incorporate into MVP 1.1 as observed fixes/updates to MVP 1.0 environment. 


**II. 1.1 December release: ~Dec 21 - 30** 

4. [See MVP phases to launch](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/mvp-phases-to-launch)   

5. Internally validate 1.1 prod articles in [demo environment](http://learningcenter.demo.ci.cms.va.gov/).

6. Fix identified bugs (if any) ensure any MVP 1.0 bugs/updates are implimented prior to next step.

7. Publish on prod. 

8. Validate on prod.   

9. Redirect and retire legacy content. 

---

## Phase I: Unmoderated internal production testing (also known as User Acceptance Testing, or UAT)

### Planning - 1.0 October/Nov beta launch release**:

- **Date range:**
  - Starting ~Oct 28 - Nov. 3 
- **Test duration:**
  - 5 business days
- **Desired number of users:** 
  - 25
- **How you'll recruit the right production test users:** 
  - PW team, DEPO volunteers, and forms stakeholders
- **How you'll conduct the testing:** 
  - Provide testers with a list of key word search options as related to available LC content. 
  - Collected stakeholder UAT bug/comments in this SharePoint folder: https://dvagov.sharepoint.com/sites/VA-forms-managers-and-SMEs/Shared%20Documents/Forms/AllItems.aspx 
- **How you'll give the test users access to the product in production w/o making it findable on VA.gov:** 
  - This is a CMS content product. In order to test full functionality (such as form download behavior) we have to publish on va.gov. We will not be able to test form downloads in demo/staging/preview. 
- **How will you make the product available in production while limiting the number of users who can find/access it:** 
  - We will do a 'hidden' launch, with only those participating in the UAT will have access to 'prod' url in order to test in prod. environment and validate bets and assumptions. 

- **What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:** 
  - We will invite VA stakeholders and business SMEs to visit LC detail page and test funcationality and style components. 
  - We will check error rate after we hit 25 users or 5 business days. We want < 5% error rate.
  
  We will track errors for:
  - Tags component
  - Related information component
  - VA benefits component
  - Need more help? component
  
  We will not track errors for:
   -  Functionality drop for 1.0 rolling to MVP 1.1: How do you rate your experience on this page? <--We updated this design and text to meet Medallia requirements, but we learned late that Medallia is not ready for implimentation and Foresee will not support our design concepts. 
  
### Results:

- Number of users: 
- Number of bugs identified / fixed: x/x
- ~Was the data submitted (if any) easy for VA to process?~ There is nothing to submit.
- Types of errors logged: x/x
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: x/x
- Links to dashboard(s) showing "success criteria" metrics: TBD

## Go Live! - Open launch 

- No redirect Implimentations: Not using basic/auth removal based on lack of availability. 

- Take into consideration Accessibility/QA needs as well as Product, Technical, and Design requirements.

### Planning:

- Desired date: 11/4/20
- Post-launch KPI 1: Decrease in Contact Center calls coded for Account/Profile issues (MyVA311)
- Post-launch KPI 2: Majority of feedback responses are positive (3/5+ or primarily ‘good’)
- Post-launch KPI 3: Increase traffic to benefit hubs
- etc
- Go / No Go: (ready / not ready)[https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/go-no-go-meeting-template.md]

### 1-week results:

- Number of unique users: 25
- Post-launch KPI 1 actual: Decrease in Contact Center calls coded for Account/Profile issues (MyVA311)
- Post-launch KPI 2 actual: Majority of feedback responses are positive (3/5+ or primarily ‘good’)
- Post-launch KPI 3 actual: Increase traffic to benefit hubs
- Any issues with VA handling/processing?: yes/no, (follow up)
- Types of errors logged: 
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

### 1-month results:

- Number of unique users: x
- Post-launch KPI 1 actual: Decrease in Contact Center calls coded for Account/Profile issues (MyVA311)
- Post-launch KPI 2 actual: Majority of feedback responses are positive (3/5+ or primarily ‘good’)
- Post-launch KPI 3 actual: Increase traffic to benefit hubs
- Any issues with VA handling/processing?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

## Post-launch Questions 

Post-launch iterations/metrics
- Validate success of [OKR's](https://docs.google.com/document/d/1aigEaAp43e59Y5_Ow10q04OfZUuhR-Jxd-9uEpdYezg/edit) through GA Dashboard and DOMO results. 


## Background

<details>
  
So! You're thinking about how you want to launch your product. You know you'll perform usability testing and you'll QA the heck out of it in staging, which are both very critical components of product development. But they don't tell you how people will naturally use your product when you're not there to guide them to it, how any submitted data will get to VA, whether that data will be easy or difficult for VA to process, whether people will be likely to submit duplicates, abandon partway through, or encounter bugs unique to the production environment. All of which could be very detrimental to users, which is the antithesis of what we're here to do. 

So: **how might we craft a release plan to test our product "in the wild" at a smaller scale, and learn how it'll actually be used, and what problems it actually might have or create, and then fix/adjust prior to going live to millions of VA.gov users?**

That's what this Release Plan Template is for!

</details>
