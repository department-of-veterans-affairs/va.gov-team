## New VA.gov Mobile Header

Since the launch of VA.gov in late 2018, the site has featured one responsive Global header element that was **not optimized for Mobile view.**  
As a result, for our growing base of Mobile users, issues with the current header include:

- It consumes too much space, pushing down the most important element on the page (based on usage): the top tasks links.
- Some of the exposed navigational elements cause user confusion -- e.g. the Crisis Line logo was mistaken for a hamburger menu on mobile per user research
- Too many chevrons in the top right corner with all acting differently, causing confusion

## The Problem to be Solved

**How might we make the Mobile version of VA.gov easier to scan and use, while preserving important links in an intuitive way?**

## Proposed Solution(s)


![image (4)](https://user-images.githubusercontent.com/63107147/126556098-9f79475a-4514-4b40-b033-38782bab2325.png)


## Hypothesis or Bet

**If** we implement a mobile optimized sitewide header **then** we will increase usage of Top Task links on the Home Page without significantly impacting discoverability/usage of Search from that navigational component.


## What We Know

- A snapshot of VA.gov click-through analytics and user research conducted in May 2021 indicates there is relatively modest engagement of the navigational elements in the global header by mobile users, **with the exception of the VA Benefits and Health Care menu item and to a lesser extent Search**.

<img width="1130" alt="Screen Shot 2021-07-23 at 8 45 53 AM" src="https://user-images.githubusercontent.com/63107147/126784095-b9009ffc-33d8-4436-bb6c-a51eee153b6e.png">

<img width="1247" alt="Screen Shot 2021-07-23 at 8 46 35 AM" src="https://user-images.githubusercontent.com/63107147/126784074-177cf028-54b1-4870-90a0-9276a85cd91e.png">

- For Search, year-to-date data shows about a 70/30 split between the search engagement on Desktop vs. Mobile (source: [DOMO Dashboard/Google Analytics](https://va-gov.domo.com/page/1964748112))

<img width="432" alt="Screen Shot 2021-07-23 at 9 01 34 AM" src="https://user-images.githubusercontent.com/63107147/126785444-4cc0286f-3782-470c-818b-fc9a00ec2b53.png">

<img width="348" alt="Screen Shot 2021-07-23 at 9 01 24 AM" src="https://user-images.githubusercontent.com/63107147/126785457-b457518b-6099-49c7-b6bd-940a6b1c7d82.png">


## What Needs to Be Done

- [ ] Need Analytics to determine baseline performance of the current header, including % of mobile users that click on:
      - Search (the little mganification icon) (8/3 - Ticket created for Analytics - https://github.com/department-of-veterans-affairs/va.gov-team/issues/28225)
      - Menu
      - Veteran Crisis Line
      - Contact us
      - Sign in
      - Back to home (VA logo/Home menu item in the current nav)
- [ ] Create a version of the proposed new Mobile-optimized header for a live, in-production "sample size" test of 1–5% via GA tracking
- [ ] Metrics that will determine "success" (e.g. same or higher usage of Search and Top Tasks), using the same tasks as listed above
- [ ] Created a Technical discovery ticket to review technical aspects/risks for implimentation - https://github.com/department-of-veterans-affairs/va.gov-team/issues/28288


*Take into consideration Accessibility/QA needs as well as Product, Technical, and Design requirements.*

## Relevant Links

[Design Sketch Files](https://www.sketch.com/s/63193c20-04fc-4d4f-8b54-abf698c48636/a/Vr8Zzrw) 


## Status 
Some questions to answer as we gain analytics insight and determine best path forward:

- Q: How are we planning to mitigate any organizational constraints/concerns that arise from minimizing or changing logos? Who needs to know?
- A: Ryan has been discussing with Chris. Dave C. to follow up and validate with applicable stakeholders.
- Q: The proposed changes to the unauth/auth states still have Health care as the only visible Top 4 Box (albeit not as pushed down). Given the Hypothesis, what impact are we actually hoping to see re:usage of Top Task links?
- A: Analytics/KPIs - this was my big focus as well. Two thoughts here:

We need specifics: What specifically are we trying to improve/keep the same
Baselines - we have a ticket open with analytics team that should be treated as a blocker to ensure we have enough data for comparison as related to Specifics.
Analytics comparison of Mobile to Desktop.
- What are the common tasks across each device that should be the same?
- What are the "top tasks" that lend themselves more to desktop (e.g. filling out a form)?
- What are those that lend themselves more to mobile?

Q: It sounds like we'd like to improve mobile search usage. But, the proposed changes have the Search CTA moving a level deeper. What impact do we expect that to have/not have?


*Take into consideration Accessibility/QA needs as well as Product, Technical, and Design requirements.*

## How to configure this issue
- [ ] **Labeled with Team** (`product support`, `analytics-insights`, `operations`, `tools-be`, `tools-fe`,`content-ia`, `service-design`, `vsa-*`)
- [ ] **Labeled with Practice Area** (`backend`, `frontend`, `devops`, `design`, `research`, `product`, `ia`, `qa`, `analytics`, `contact center`, `research`, `accessibility`, `content`)
