~Migrating [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products)~

# Product Outline: eBenefits
- GitHub Label: vsa-ebenefits
- Slack channel: vsa-ebenefits
- VA.gov link: n/a
- Demo video link: n/a
- Product POCs: Steve Kovacs (steve-gov) & Jason Wolf (jason-gcio)

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
  - [Rated Disabilities, titled as "View your VA combined disability ratings"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/rated-disabilities/README.md)
  This is a simple view task where the relevant information is pulled from CorpDB via the `vets-api` via EVSS.
  - [View and Modify Dependents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/ebenefits/features/view-update-dependents)
  This is a more complicated task (Form 21-686c) that includes both a view and submit task for declaring dependents as they are moved on and off a Veterans awards.
  - [My Payment History](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-payment-history/feature-outline.md)
   A simple view task that displays the payment and return history between a Veteran and the VA.
  _Features found in the product folder (as opposed to the eBenefits Team folder) are further along in the developemnt and approval process.)

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
Help Veterans, their dependents and caregivers get the benefits they've earned by transforming, migrating and optimizing critical features and functions from eBenefits to the VA.gov central location.  As such, eBenfits will be sunsetted.

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
This team aims to drastically increase the conversion rate of 686c form submissions and significantly reduce the amount of overhead that is spent by the Veteran in filling this form out.

## KPIs
Once a feature is moved, comparing its exposure and usage will be insightful from its old location to its new location.  Also, looking into how RBPS is impacted will be a large metric as well.
**Objective 1:** Migrate all features out of eBenefits and into VA.gov
- Key result #1: `100%` of the functionality is addressed in VA.gov by `Feb 2022`
- Key result #2: `100%`  (or more) of the traffic present in EBN is shown in VA.gov by `Feb 2022`

**Objective 2:** Improve the Veteran experience for these features
- - Key result #1: Error handling covers `100%` of known issues
- - Key result #2: Language used is friendly and informative over `100%` of features managed by this team
- - Key result #3: A clear path forward for gaining additional information is present over `100%` of features managed by this team

---

# Implementation Info

## Status
In progress

## Solution Narrative
- **September 2019**: Began discovery of eBenefits in general, chose "View my rated disabilities" as the first feature to migrate
- **October 2019**: Finalizing "View my rated disabilities" and started discovery of "View and update my dependents"
- **November 2019**: Continued discovery on rainbows wrok and new View Dependent functionality
- **December 2019**: View Dependents screen finaliazed, began reconciling invalidated and broken schema from previous team.
- **January 2020**: Schema largely corrected for Modify Dependents, new functionality to reduce cognitive load and increase form accuracy for conversion proof of concept.  Seeking design and stakeholder reivews.

## How to Access and Test
...

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
- VA Contact Center Partner(s): TBD
- UX Designer: Aricka Lewis
- Designer/Reseearcher: James Adams
- Front-end Engineer: Micah Chiang
- Back-end Engineer: Kathleen Crawford

### Screenshots
#### Before
![EBN](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/images/home-ebenefits.png)
#### After
...
