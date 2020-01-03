```diff
- This folder should be probably be removed since EBN is going away. @jason-gcio will delete shortly.
```

# Product Outline: eBenefits
- GitHub Label: vsa-ebenefits
- Slack channel: vsa-ebenefits
- VA.gov link: n/a
- Demo video link: n/a
- Product POCs: Steve Kovacs (steve-gov) & Jason Wolf (jason-gcio)
- [Team Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/ebenefits)
- [Charter and Roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/charter.md)

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
- **Features**  
  - [View Rated Disabilities](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/rated-disabilities)  
This is the tool page that will describe a Veterans overall total combined disability rating which informs how much compensation they would recieve. 
  - [View and Modify Dependents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/ebenefits/features/view-update-dependents)  
  This is the tool page that shows what dependents a Veteran has assigned to a claim or benefit as well the tool page(s) that will get them through that process using the 21-686c form.  Other forms will be associated with this form like the 674 and the 509.

# Implementation Information
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [How to Access and Test](#how-to-access-and-test)
- [Error Handling](#error-handling)
- [Service Level Objective](#service-level-objective)
- [API Calls and Dependent Systems](#api-calls-and-dependent-systems)
- [Resources and Documentation](#resources-and-documentation)
- [Keywords](#Keywords)
- [Team](#team)
- [Screenshots](#screenshots)

---

# Executive Summary

## User Problem Statement
As a Veteran, I want to find, and apply for, as many benefits available to me so that I can leverage more of the VA's resources.

## Solution Goals
Help Veterans, their dependents and caregivers get the benefits they've earned by transforming, migrating and optimizing critical features and functions from eBenefits to the VA.gov central location.

### User Goals
With resources better presented to the user, they should be able to find and apply to more benefits with better efficacy.

### Business Goals
Ensure that as many resources produced by the VA are being leveraged to as many Veterans possible.

## Assumptions
There are several different stacks, departments and procedures around migration of features from eBenefits to VA.gov.

## Requirements and Constraints
Onboarding, access and domain knowledge has some upfront challenges.

## Discovery Takeaways
The key to implementing what has been learned is at least two-fold: stay organized and communicate as much as possible.  Notes are useless if they cannot be easily access and talking things through with your team allows for shared understanding, team cohesion and improved culture. 

## Solution Approach
Begin migration process with documentation of simpler **view** tasks to learn the stacks and process and perfect the process with repeatability in mind and continue with **view** tasks as priorities permit.  Next might be more complicated "**submit** tasks and having the **view** task foundation will be tremendously helpful.

## Value Propositions
Probably the largest is the placement of resources closer to the user and their anticiapted increased usage.

#### User Value
Not having to dig and deal with any confusion as to where a benefit can be found.

#### Business Value
Money spent on programs at the VA will be better utilized.

## KPIs
Once a feature is moved, comparing its exposure and usage will be insightful from its old location to its new location.

---

# Implementation Info

## Status
In progress

## Solution Narrative
- **September 2019**: Began discovery of eBenefits in general, chose "View my rated disabilities" as the first feature to migrate
- **October 2019**: Finalizing "View my rated disabilities" and started discovery of "View and update my dependents"

## How to Access and Test
- Link: Access PINT2: https://pint.ebenefits.va.gov/ebenefits-portal/pint2 OR https://pint.ebenefits.va.gov/ (if you need to try both, you'll need to have a new session open with a cleared cache to enter the other site.
- Password protection info:
- User authentication info: Update passwords [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/accessing-ebenefits.md).

## Error Handling
...

## Service Level Objective
...

## API Calls and Dependent Systems
...

## Resources and Documentation

- Discovery and Research
- Technical Documentation
- Product specs
- Design
- Roadmap
- ATO documentation

## Keywords
eBenefits, rated disabilities, dependents, 21-686c, 686c, 686

## Team
- DSVA Product Manager: Steve Kovacs
- Team Product Manager: Jason Wolf
- VA Call Center Partner(s): TBD
- UX Designer: Aricka Lewis
- Designer/Reseearcher: James Adams
- Front-end Engineer: Micah Chiang
- Back-end Engineer: Kathleen Crawford

### Screenshots
#### Before
![EBN](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/images/home-ebenefits.png)
#### After
...
