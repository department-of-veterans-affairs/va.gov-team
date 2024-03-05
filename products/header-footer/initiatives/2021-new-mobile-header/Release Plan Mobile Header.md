# New Mobile Header Release Plan 
---

## Phase I: UAT (Not in scope for this initiative)

### Planning:
No planned UAT.  Plan is to launch to 5% of users and compare and contrast (A/B Test) user behaviors in relation to new mobile header usage.  An [analtyics baseline](https://github.com/department-of-veterans-affairs/va.gov-team/issues/28225) has been created in support. 


## Phase II: Staged Rollout

### The Plan

**Desired date range:** 11/23/21 - 11/30/21 (VSP Code Freeze set for 11/25-11/28/21)

**How will you make the product available in production while limiting the number of users who can access it?** 

We will launch the new profile behind a feature flag and and control what % of users see it using Flipper. 

- Launch behind a feature flag. Test with team. (1 day) 11/22
- If things go well, we'll launch to 5% of traffic. (1 month) 11/23
- If things go well, we'll launch to 25% of users. (1 week) 11/30
- If things go well, we'll launch to 50% of users. (1 week) 12/7
- If everything looks good, we'll then launch to 100% of users. 

**What metrics-based criteria will you look at before advancing rollout to the next stage?:** 

We will monitor the following metrics to ensure there are no issues:

- Mobile users are able to complete tasks quicker through streamlined interaface.
- Sign-ins increase via Mobile
- Search usage increase via Mobile

KPI "success criteria" BETs: 
- BET: Elevating VA.gov Mobile header through cleaner interface will decrease confusion and allow for a greater view and usage of top tasks links on mobile. Some tasks present more of a mobile friendly experience (i.e. Menu, Sign-in, search, find a VA location) and others more to Desktop experience (I.e. form completion, direct deposit, dependent change, footer elements). We anticipate that by increasing visiability on "mobile" freindly tasks could result in an increase in both usage and confidence for mobile users.
- BET: Improving UX via bringing the sign-in element to a more visible location for mobile users functionality and findability should increase sign-ins on mobile making a more efficient funnel to Tier 1 benefit actions for mobile users.

## Go Live!

### Planning:
- Desired date: Nov 23, 2021
- Actual date: TBD
- Go / No Go: [Results](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Profile%202.0%20Launch%20go%20no-go.md)

### 1-week results:

- [DOMO Dashboard]
- [Section pageview dashboard [Date Range]]
- [Contact information dashboard [Date Range]]
- [Address validation dashboard [Date Range]]
- [Direct deposit dashboard [Date Range]]

### 1-month results:

- [DOMO Dashboard]
- [Section pageview dashboard [Date Range]]
- [Contact information dashboard [Date Range]]
- [Address validation dashboard [Date Range]]
- [Direct deposit dashboard [Date Range]]

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"? 

- Findability: Increase top task link clicks by 10% that lend to mobile usage (See Bet for details) (Currently 2.3% of all unique clicks from top tasks) with an overal top task stretch goal of 15% increase over a six month usage benchmark.
      - BET: Elevating VA.gov Mobile header through cleaner interface will decrease confusion and allow for a greater view and usage of top tasks links on mobile. Some tasks present more of a mobile friendly experience (i.e. Menu, Sign-in, search, find a VA location) and others more to Desktop experience (I.e. form completion, direct deposit, dependent change, footer elements). We anticipate that by increasing visiability on "mobile" freindly tasks could result in an increase in both usage and confidence for mobile users.
- Service Completion: Increase mobile sign-ins by 10% (Currently 4.3% of all sign-ins are mobile) with an overal top task stretch goal of 15% increase over a six month usage benchmark.
      - BET: Improving UX via bringing the sign-in element to a more visible location for mobile users functionality and findability should increase sign-ins on mobile making a more efficient funnel to Tier 1 benefit actions for mobile users.

2. What qualitative feedback have you gathered from users or other stakeholders, if any? 

- DEPO stakeholders are really excited about this work, especially how it has made this section much more scalable, and was tied to the two major VA northstar initiatives: 
   - VA North Star: Increase the usage and throughput of VA services
   - VA North Star: Increase the quality and reliability of VA services.

3. Which of the assumptions you listed in your product outline were/were not validated? 

None of our assumptions were validated, unfortunately, but I don't think that means this was a failed design or something is fundamentally wrong with the product. The new profile performed really well with veterans, and the KPIs not meeting our expectations is likely a result of not picking the right KPIs to measure success and consistent MPI errors since launch.
   
4. How might your product evolve now or in the future based on these results?

The new design allows for much better scalability, and plan to relook at the mobile header designs as part of the new VA.gov homepage redesign components as part of 2022 road map functions. 

# Go-to-market Strategy

**How are Veterans and others using this product going to know it exists?**

Since the VA.gov mobile header already existed and we only did a visual redesign, we did not do any additional push for the mobile header after launch. We may do additional pushes as features get added or as we drive toward a new VA.gov desktop redesign in 2022.

**What marketing, outreach, or communications are necessary for this product to be successful?**

We determined none after meeting with the comms team pre-launch.
