Sample Product Outline: https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Disability/Disability%20526EZ/README.md

---

GIBs Widget Outline
- GitHub Label: dragons, UX, dashboard
- Vets.gov link: n/a
- Demo video link: n/a

---

### Table of Contents

# Executive Summary 
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Assumptions](#assumptions)
- [Requirements and Constraints](#requirements-and-constraints)
- [Discovery Takeaways](#discovery-takeaways)
- [Solution Approach](#solution-approach)
- [Value Propositions](#value-propositions)
- [KPIs](#kpis)

# Implementation Information
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [Team](#team)
- [Resources and Documentation](#resources-and-documentation)
- [Screenshots](#screenshots)

---

# Executive Summary

## User Problem Statement
The GIBs is the number one viewed page after logging in and landing on the dashboard.
As a user, I'd like to view important metrics for my Post-911 GI Bill benefit. I also need to easily find and print these metrics out so I can confirm my benefits with institutions.


## Solution Goals

### User Goals
- View how much of my benefit I’ve used
- View how much of my benefit is remaining
- Print a legible version of the page

### Business Goals
- Reduced burden on user to navigate to the GIBs page
- Increasing traffic to related content from the dashboard
- Build trust with Veterans

## Assumptions
- We will be able to display cached data when the service is unavailable (service is available (Sunday through Friday, 6:00 a.m. to 10:00 p.m. (ET), and Saturday 6:00 a.m. to 7:00 p.m. (ET)
- This is pending the completion of a ticket (#4612) that was passed onto Rainbows for completion when they have the bandwidth
- The information under "Your Benefits" is the information that Veterans are interested in
- Many Veterans are coming here to print

## Requirements and Constraints
- Because we retrieve the payment information for Post-911 GI Bill data status through the BDN backend and it’s unavailable at certain times, we need to account for service downtime through the design/copy

## Outstanding Questions
- What level of verification (LOA1, LOA3, etc) do you need to view the widget?
- I noticed that when you try to view the GIBs page when unauthenticated, you receive a generic message that the “tool isn’t available.” Could we modify this message so it’s specific to that scenario, so something like “you need to login in order to view your GI Bill benefits” instead?
- Will we be able to show previous cached data when the tool is down? (Rainbows team was passed ticket #4612 to discovery for this as their schedule permits).
- What happens when the GIB benefits expire? What should we show for this scenario?
- What should we show if someone is not currently using the benefit/has not applied for it?


## Discovery Takeaways
- Veterans want to know how much of their education benefit is remaining
- Veterans revisit the GIBs page when there is a disruption in their plan
- Most veterans know they’re eligible for this benefit
- Veterans come to the GIBs page when someone asks them to show their current eligibility
- Veterans must verify their benefit each time they enroll in a new training or program and often use the GIBs page to do so

## Solution Approach

## Value Propositions

#### User Value

#### Business Value

## KPI
- Reduced visits to the more detailed GIBs page
- Increased time spent on the dashboard


---

# Implementation Info

## Status

## Solution Narrative
- **Date**: summary of any big changes and why
- **Date**: summary of any big changes and why

## Team

- VA Executive Sponsor `*`: 
- VA Policy Expert(s):
- VA Digital Strategist(s) `*`:
- Product Manager `*`:
- Design Lead: Katelyn Caillouet
- Eng Lead:
- VA Web Comms Partner: 
- VA Call Center Partner(s): 
- Production Testing Partner(s):
- Designer(s):
- Content Writer(s):
- Front-end Engineer(s):
- Back-end Engineer(s):

`*` = approval required for launch

## Resources and Documentation

- Discovery and Research
- Technical Documentation
- Product specs
- Design
- Roadmap
- ATO documentation

### How to access in staging
- Link:
- Password protection info:
- User authentication info:

### Screenshots
#### Before
#### After
