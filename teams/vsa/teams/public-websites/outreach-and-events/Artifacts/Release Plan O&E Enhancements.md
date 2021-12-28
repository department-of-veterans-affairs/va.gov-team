# Outreach & Events Enhancements MVP Release Plan 
---

## Phase I: UAT

### Planning:
- **Date range or test duration** Estimated: Wednesday, 12/1 - Friday, 12/3
- **Desired number of users:** 10 users (to get 5 users)
- **How you'll recruit the right production test users:** We will recruit users via Perigean. 
  - (We need to make sure that we have the email the user uses to log into Va.gov ahead of time)
- **How you'll conduct the testing:** We will conduct UAT over Zoom to ensure the different features work correctly.
- **How you'll give the test users access to the product in production w/o making it live on VA.gov:** WE will be working off a UXPin prototype and plan to walk users through interaction points. 

[UAT Plan](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/public-websites/outreach-and-events/research)

## Phase II: Staged Rollout

### The Plan

**Desired date range:** 1/18/22 - 1/21/22 (Pending staging review on 1/14/22)  

**How will you make the product available in production while limiting the number of users who can access it?** 

We will launch the new Outreach and Event enhancements MVP to 100% (or) users  behind a feature flag and and control what % of users see it using Flipper. 

- Launch behind a feature flag. Test with team. (1 day) 1/17/22
- Roll out content and training updates to content editors on 1/12-14, 2022. 
- If everything looks good, we'll then launch to 100% of users. 

**What metrics-based criteria will you look at before advancing rollout to the next stage?:** 

We will monitor the following metrics to ensure there are no issues:

- Outreach & Event hub is working as intended with added filtering/recurring event features.
- Ensure events are rendering and filter capability is working as intended. 
- Ensure both desktop and mobile is rendering as indended.

KPI "success criteria" BETs: 
- Reduced bounce rate for the Outreach & Events page
- Improve service completion through increased event registration (via Outreach hub)
- Increase event engagement through added user experience through filtering events by DTG/Location.

Analytic Insights:
- Majority of traffic to Outreach pages is from email links (Targeted email campaigns)
- Google is a top referral source
- Most visits are from desktop computers (65%), mobile visits are significant (32%)
- Visitors who view the Events page do use the stepper and typically go just a few pages deep (Bad Experience, increasing bounce rate).
- Visit follow a cycle with traffic peaking Wednesday/Thursday, and dropping-off significantly over the weekend
- Visits have increased noticeably beginning in July 2021
- Users often return to Outreach pages

## Go Live!

### Planning:
- Desired date: 1/18/2022
- Actual date: 1/18/2022
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
