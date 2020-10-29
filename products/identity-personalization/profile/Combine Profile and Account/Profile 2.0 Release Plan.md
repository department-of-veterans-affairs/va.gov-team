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

- Launch behind a feature flag. Test with team. (1 day)
- If things go well, we'll launch to 25% of traffic. (1 week)
- If things go well, we'll launch to 50% of users. (1 week)
- If everything looks good, we'll then launch to 100% of users. Launched to 100% on Oct 1, 2020

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

Links to dashboards showing "success criteria" metrics: [Profile 2.0 KR Domo dashboard](https://va-gov.domo.com/page/492918243)

## Go Live!

### Planning:
- Desired date: Oct 1st, 2020.
- Go / No Go: [template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/go-no-go-meeting-template.md)

### 1-week results:
[DOMO Dashboard](https://va-gov.domo.com/page/492918243?userId=1719046699)

### 1-month results:
[DOMO Dashboard](https://va-gov.domo.com/page/492918243?userId=1719046699)

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"? 
- Customer satisfaction (Foresee score) went from 2.8 --> 4.0
- Searches for "direct deposit" decreased
- Searches from the profile decreased
- Avg time spent on profile decreased

2. What qualitative feedback have you gathered from users or other stakeholders, if any? 
- Only positive feedback so far as of 10/16
3. Which of the assumptions you listed in your product outline were/were not validated? 
Validated:
Users were able to find information/tasks easier: Less searches from the profile, less avg time on profile
Users liked the new UX: Foresee score 2.8-->4.0
   
1. How might your product evolve now or in the future based on these results?
The new design allows for much better scalability. We may add more features to the profile in the future.


# Go-to-market Strategy
- *How are Veterans and others using this product going to know it exists?*
  - The profile on VA.gov is an already existing feature. 
- *What marketing, outreach, or communications are necessary for this product to be successful?*
  - We would like to include a banner to spread awareness of the changes on the profile, during launch

