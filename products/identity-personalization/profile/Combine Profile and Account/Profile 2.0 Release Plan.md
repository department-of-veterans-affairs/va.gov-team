# Profile 2.0 Release Plan 
---

## Phase I: UAT

### Planning:
- **Date range or test duration** Estimated: Tuesday, 9/1 - Friday, 9/4
- **Desired number of users:** 10 users
- **How you'll recruit the right production test users:** We will recruit users via Perigean. 
  - (We need to make sure that we have the email the user uses to log into Va.gov ahead of time)
- **How you'll conduct the testing:** We will conduct UAT over Zoom to ensure the different features work correctly.
- **How you'll give the test users access to the product in production w/o making it live on VA.gov:** We will have the new profile launched to production but hidden behind a feature flag. We'll give participants access to this feature by adding their email addresses to a list of users who can see the new profile. 
  - (We need to make sure to include users who have Direct Deposit)

[UAT Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Research/UAT/profile-research-plan-UAT.md)

### Additional notes on UAT
 LOA 1 users
- 2 users
- Can be people from our team who have LOA1 prod accounts. We shouldn't use perigean to recruit for this.

LOA3 users
- 4 users who have direct deposit (receive comp & pen benefits)
- 4 who do not have direct deposit (do no receive comp & pen benefits)
Connected apps — We should see if the connected apps team has a prod account or can create a prod account that shows what it looks like to have at least one app connected. Perigean won't be able to recruit for this.

**Erik to teach Matt/Tressa/Sandra how to use the feature flag/flipper**
- Need to be added to list of people with flipper access
- Erik to enter instructions

#### Design UAT notes
- Tressa will put together the formal research plan and script for UAT.
- Tressa will also conduct these session.

#### Frontend UAT notes
- Erik and Sandra will be responsible for launching the new profile to production behind a feature flag and giving participants access to the feature.
- They will have the option to attend UAT and be responsible for any frontend bugs/fixes.
  - (Primarily Matt and Tressa in these sessions)

#### Backend UAT notes
- The new profile did not require any backend work, as it was primarily a frontend redesign. However, should any backend issues come up, Lihan will be available to fix them before we move into a phased launch.

### Results:
- **Bugs identified / fixed:**
[Profile 2.0 UAT Findings Spreadsheet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Research/UAT/Profile%202.0%20UAT%20(1).xlsx)

## Issues

1.    [Updating phone number had a weird delay and took 3 attempts](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9765)
2.    [No military branch showing up in military information section](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13222)
3.    [Need to create an Error alert when we can’t verify a person is a veteran/info is not available](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13224)
4.    [“Invalid date” on Military Information service dates](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13130)
5.    Connected apps API issue: the frontend is expecting an empty array if the user has no apps, but for some reason there is a “404” display to users who have never connected an app.There seems to be an ID issue . User is shown “there was an issue connecting to connected apps”. This shouldn’t be shown if they have never been connected to apps (Mark Greenberg to create ticket)
6.    Users unable to update phone number to fix Direct Deposit issues if they have an international phone number ((VA Profile doesn't accept international phone numbers, and that's not something they are addressing for at least 3 months))

## Phase II: Staged Rollout

### The Plan

**Desired date range:** 9/16/20 - 10/1/20 

**How will you make the product available in production while limiting the number of users who can access it?** 

We will launch the new profile behind a feature flag and and control what % of users see it using Flipper. 

- Launch behind a feature flag. Test with team. (1 day) **Done**
- If things go well, we'll launch to 25% of traffic. (1 week) **Done 9/16/20**
- If things go well, we'll launch to 50% of users. (1 week) **Done 9/23/20**
- If everything looks good, we'll then launch to 100% of users. **Done 9/30/20**

**What metrics-based criteria will you look at before advancing rollout to the next stage?:** 

We will monitor the following metrics to ensure there are no issues:

- Profile visits

For each section:

- Successful retrievals 
- Failed retrievals
- Form Submits
- Successful submissions
- Failed form submissions
- Error counts

KPI "success criteria" metrics: [Profile 2.0 KR Domo dashboard](https://va-gov.domo.com/page/492918243)

## Go Live!

### Planning:
- Desired date: Oct 1st, 2020
- Actual date: Sept 30th, 2020
- Go / No Go: [Results](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Profile%202.0%20Launch%20go%20no-go.md)

### 1-week results:

- [DOMO Dashboard](https://va-gov.domo.com/page/492918243?userId=1719046699)
- [Section pageview dashboard 9/30 - 10/6](https://analytics.google.com/analytics/web/#/report/content-drilldown/a50123418w177519031p184624291/_u.date00=20200930&_u.date01=20201006&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePathLevel1:~2Fprofile~2F/)
- [Contact information dashboard 9/30 - 10/6](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/3Z1vT6SlQqevdav1s72QwA/a50123418w177519031p176188361/_u.date00=20200930&_u.date01=20201006/)
- [Address validation dashboard 9/30 - 10/6](https://analytics.google.com/analytics/web/#/dashboard/pq_-PrkvQleUdCBbV7eq7Q/a50123418w177519031p176188361/_u.date00=20200930&_u.date01=20201006/)
- [Direct deposit dashboard 9/30 - 10/6](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/naG_-UneTxy50WvvIH0GGQ/a50123418w177519031p176188361/_u.date00=20200930&_u.date01=20201006/)

### 1-month results:

- [DOMO Dashboard](https://va-gov.domo.com/page/492918243?userId=1719046699)
- [Section pageview dashboard 9/30 - 10/30](https://analytics.google.com/analytics/web/#/report/content-drilldown/a50123418w177519031p184624291/_u.date00=20200930&_u.date01=20201030&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePathLevel1:~2Fprofile~2F/)
- [Contact information dashboard 9/30 - 10/30](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/3Z1vT6SlQqevdav1s72QwA/a50123418w177519031p176188361/_u.date00=20200930&_u.date01=20201030/)
- [Address validation dashboard 9/30 - 10/30](https://analytics.google.com/analytics/web/#/dashboard/pq_-PrkvQleUdCBbV7eq7Q/a50123418w177519031p176188361/_u.date00=20200930&_u.date01=20201030/)
- [Direct deposit dashboard 9/30 - 10/30](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/naG_-UneTxy50WvvIH0GGQ/a50123418w177519031p176188361/_u.date00=20200930&_u.date01=20201030/)

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"? 

We had four KPIs we were looking to meet:

- Improved customer satisfaction (Foresee score) from 2.4 --> 3.4
- Decreased searches for "direct deposit" 
- Decreased searches from the profile 
- Decreased avg time spent on profile

However, we haven't met any of them. I have a few thoughts on that:

- **Perhaps, these were poor KPIs to measure**: We thought adding a side nav would make the profile more scannable, so that we'd see overall searches for products in the profile and overall searches from the profile decrease. However, while the side nav is certainly an improvement, we didn't account for people searching for features that they expect to see in the profile but don't live in the profile (which would affect searches from the profile), and we didn't account for the fact that people who search for "direct deposit" from the profile likely aren't seeing the section at all (as opposed to people who have it enabled doing the searching). I think maybe we just missed the mark on how to best measure success.
- **Serious MPI errors**: There have been pretty consistent and serious MPI errors pretty much since we launched, which means that if MPI is problematic/down, people aren't seeing or able to access most of the sections of the profile. This could partially be why the satisfaction score hasn't improved and why we're actually seeing *more* searches from the profile.

2. What qualitative feedback have you gathered from users or other stakeholders, if any? 

- DEPO stakeholders are really excited about this work, especially how it has made this section much more scalable.

3. Which of the assumptions you listed in your product outline were/were not validated? 

None of our assumptions were validated, unfortunately, but I don't think that means this was a failed design or something is fundamentally wrong with the product. The new profile performed really well with veterans, and the KPIs not meeting our expectations is likely a result of not picking the right KPIs to measure success and consistent MPI errors since launch.
   
4. How might your product evolve now or in the future based on these results?

The new design allows for much better scalability, so we can (and already are!) adding more features to the profile that users need and expect to see there (eg. preferred medical facility and direct deposit for edu are currently in the works).

# Go-to-market Strategy

**How are Veterans and others using this product going to know it exists?**

Since the VA.gov profile already existed and we only did a visual redesign, we did not do any additional push for the profile after launch. We may do additional pushes as features get added to the profile.

**What marketing, outreach, or communications are necessary for this product to be successful?**

We determined none after meeting with the comms team pre-launch.
