# Summary of Release Plan Steps - Campaign Landing Page MVP 1.0

__Summary of release plan steps:__
Per product sync today - We'll launch in phases to VA businesses as planed approach below: 

**I. CLP MVP 1.0 March 2021 beta launch release: ~ March 17(ish) prod (Sprint 43/44)**

1. MVP Phases of Launch:  FE Build --> Security Review --> Internal UAT --> QA Testing --> 508/Ally Testing --> Fix Identified Issues --> Stakeholder UAT --> Fix Identified Issues --> Validate CLP 1 Year Governance Strategy --> Validate user request flow and on-boarding activities for requestors --> VSP Staging Review --> Validate and Launch.    

2. QA and internally validate in [demo environment]: ~ QA Ticket [#19554] submitted and is happening ASYNC with Internal and Stakeholder UAT [#18756]  

3. Fix any reported bugs in staging environment. [#18756] 

4. Stakeholder UAT with 2x VA Business Offices:  Scheduled for Thursday, February 25 and Wedensday, March 3, 2021. 

5. Beta launch on prod: March 17(ish) pending staging review feedback and Stakeholder UAT.   

5. Test CLP Panel component. (Test phase by Stakeholders to validate funcationality of built panels.  Content will not be published live 'Prod until MVP 1.1 is launched)

7. Follow on with post-launch page updates/BUGs: Incorporate into MVP 1.1 as observed fixes/updates to MVP 1.0 environment. 


## Campaign Landing Page - Year 1 Governance Strategy
Only VACO Digital Media teams will be allowed access to the CLP page builder with editing and publishing rights. Those teams and leads are:
VHA (Leads: Jennifer Heiland-Luedtke and Jeffrey Grandon)
VBA (Lead: Sandy Tadeo)
VEO (Lead: Tim Hudak)
NCA (Lead: James LaPaglia) 
OPIA (Leads: Gary Hicks and Josh Tuscher)

These Digital Media teams will need to be provided ample training (“certification”) on how to use the CLP as part of on-boarding.

For Year 1,  program offices that want to create a CLP must work through these Digital Media teams – and the leads will be responsible to ensuring the CLPs adhere to our release standards (acceptance criteria).

There will be both an upfront “light” Collab Review (to ensure the CLP is the right fit) and pre-launch staging Collab review (to ensure the CLP meets acceptance criteria).  For VA.gov the review team will be Public Website PO and the Analytics, IA and Content SMEs.
It is anticipated that some CLPs will be built in stages – for example, the launch phase might incorporate a “starter set” of content panels with additional panels (e.g. video, FAQs) added post-launch.  Reviews will not be required in this follow-on phases.

Jen’s position: URLs will be set by the H1 and rigid (e.g., does not change even if the H1 does).
Users can not re-use a CLP for a different campaign

## Campaign Landing Page - Start to Finish Process Flow:
1. Assess
2. Request CLP (Via online form)
3. Auto Reply (watch an on-boarding video, CLP 101 with timeline)
4. Meeting setup via PW team: Review Goals, URL, Analytics
5. CLP Approval --> Create
6. Build (VA Stakeholder Build)
7. Review (PW, Product, IA, Content)
8. Launch --> Manage/Monitor
9. Measure and monitor (weekly Campaing report)
10. Campaing Sunset (Based on predetermined DTG)

---

## Phase I: Unmoderated internal production testing (also known as User Acceptance Testing, or UAT)

### Planning - 1.0 October/Nov beta launch release**:

- **Date range:**
  - Starting ~Feb 25 - Mar 3, 2021 
- **Test duration:**
  - 5 business days (Testing will be fluid based on VA Stakeholder availability)
- **Desired number of users:** 
  - 2x VA Business Stakholders 
- **How you'll recruit the right production test users:** 
  - PW team, OCTO-DE PO, VA stakeholders (Invested)
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
