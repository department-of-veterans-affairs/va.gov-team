# Recommendations MVP Outline
- GitHub Label: recommendations
- Slack channel: #recommendations for this product; #dragons-team for the team
- Product POC: Mina Farzad (as of December 2018); Ben Barone (pre-December 2018)
- Design POC: Samara Strauss

---

## User Problem Statement

Veterans have trouble navigating the VA to discover the full scope of services and benefits that might be available to them because of a lack of proactive education, low discoverability of resources, the sheer volume of information in the VA universe, and complicated benefits materials that are not written in plain language. This can result in veterans going without benefits they need, want, and deserve for months, years, or indefinitely. 

Furthermore, even when veterans know about a particular benefit, they have trouble determining their own eligibility and may (incorrectly) assume they are ineligible for something for which they are actually eligible.


### User Goals

- To have greater insight into what benefits are available at the VA
- To be able to easily understand benefit details
- To see transparent expirations or deadline dates that may affect applying for/using a benefit
- To easily be able to determine eligibility

### Business Goals

- Increase discoverability of benefits among veterans
- Reduce time it takes to determine eligibility for a benefit before applying 
- Increase usage of benefits for eligible people who thought they were ineligible
- Increase knowledge and usage of time-sensitive benefits

## Assumptions

- Users want to see a list of benefits for which they are eligible without having to enter any information about themselves (eg. ExploreVA style).
- Users will trust us — and not be skeptical — when we tell them they are eligible for something.
- Showing users benefits they are eligible for will lead to a higher rate of applications for a benefit.
- Pre-determing benefit eligibility will reduce how often benefit applications are rejected.

## Requirements and Constraints

## Discovery Approach

- Synthesized existing research findings on benefits discovery [#10383](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/10383)
- Conducted stakeholder research with Explore VA team around their Veteran research and analytics [#10386](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/10386) 
- [Comparative analysis](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Identity/Personalization/Recommendations/Discovery/Comparative%20Analysis) of personalized recommendation experiences [#10384](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/10384) 
- Formative research with Veterans on benefit discovery & recommendations [#10385](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/10385) 
- Discussed which benefits would benefit most from recommendations? [#11049](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/11049)
- Technical discovery (4 ways we could personalize recommendations):
   - Interest [#11748](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/11748)
   - Enrollment [#11713](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/11713)
   - Eligibility Technical discovery [#11462](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/11462)
   - Expiration [#11751](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/11751)
- Define MVP scope [#10604](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/10604)
- Share output with dragons and larger USDS/Ad Hoc teams

## Discovery Takeaways

### [Internal Research Synthesis](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/Internal%20research%20synthesis.md)

### [Recommendations Catalog](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/Benefits%20List_2018.xlsx)

_Requirements Catalog derived from:_ 
- [LogicForAllBenefits](https://github.com/department-of-veterans-affairs/vets.gov-team/files/1890876/LogicForAllBenefits.docx)

- [BenefitsNavigatorPagesAndQuestions](https://github.com/department-of-veterans-affairs/vets.gov-team/files/1890877/BenefitsNavigatorPagesAndQuestions.docx)

- [U.S. Veteran Eligibility Trends and Statistics 2016 report](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/U.S.%20Veteran%20Eligibility%20Trends%20and%20Statistics%202016%20report.JPG)

### Additional Existing Research
- Benefits Usage Chart: [U.S. Veteran Eligibility Trends and Statistics 2016 report](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/U.S.%20Veteran%20Eligibility%20Trends%20and%20Statistics%202016%20report.JPG)

- Explore Va: [Materials](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Identity/Personalization/Recommendations/Discovery/ExploreVA%20Materials)

- VA Benefits Navigator: [Start Page](https://explore.va.gov/benefits-navigator), [Results Page](https://explore.va.gov/benefits-navigator-results/Ar6IU0mXknjEm0Fmp)

### [Which benefits categories need recommendations the most?](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/Which%20benefits%20need%20recommendations%3F.md)

### [Recommendations User Research Summary](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/User%20Research/Research%20Summary.md)

### ["What are you interested in?" Research Results Summary](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/User%20Research/August%202018%20DDS%20research/Results%20Summary.md)

### Benefit criteria we can determine(?) on the backend:
   - [Eligibility](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/11462#issuecomment-405635425)
      - We have partial eligibility information for some benefits. We do not have enough information to make elligibility determinations for any particular benefit, but we could supplement this info with user input if we decide to go this route.
   - [Enrollment](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/11713)
      - We are still exploring iHub integration as appropriate for Vets.gov generally. Once completed, we could integrate with iHub for healthcare enrollment data. iHub does not to our knowledge have enrollment data about any other benefits.
   - [Expiration](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/11751)
      - We do not have access to information regarding the expiration of benefits as it pertains to an individual user

## Solution Approach

### Overview

In order to elevate benefit recommendations to users, we will simply ask them what benefits they are interested in and elevate information based on those results. The flow will work like this:

1. We ask people what benefits they are interested in learning about.
2. Based on their response, we will elevate information on their user dashboard that will help guide them through the application process.
3. As users see fit, they can update their preferences on which benefits they'd like to see featured on their dashboard.

### Which benefits to include in recommendations MVP 

We will include all major benefit categories:

* Disability 
* Education & Training
* Employment Services
* Healthcare
* Home Loans
* Life Insurance
* Memorial Benefits
* Pension
* Family & Caregiver benefits

 ### Logic for recommending each benefit/ data requirements

* We will ask people the question "What benefits are you interested in?" (exact copy TBD) and elevate information on how to apply for benefits based on their answer. We will use existing Vets.gov content to create these guides.
* We need to allow users to update their interests or hide dashboard modules for benefits they're no longer interested in.

At this time, we will not be elevating eligibility or enrollment data in the recommendation process because of technical constraints. However, we should continue to pursue avenues for getting this information into Vets.gov/VA.gov so we can provide more specific guidance around benefit recommendations. 

### Where benefit recommendations will be surfaced

We plan to elevate recommendation information on the Vets.gov dashboard. We will potentially elevate dashboard preferences in Account Settings, but that is still TBD as of the beginning of this project.

### Define target audience/personas

We will cater to the following people for the MVP:

* Logged in users regardless of LOA.
* Existing veterans.
* Service members that will soon be veterans.

Family/Dependents/Caregivers can view benefit information if they log into Vets.gov, but since we don't have different user types right now on Vets.gov, we can't tailor this flow to this audience. 

### Document out-of-scope / end-state explorations for post-MVP

Out of scope:

* Incorporating eligibility information.
* Incorporating enrollment information.
* Tailoring to families/dependents/caregivers.
 
## Value Propositions
[Prioritization spreadsheet](...)

#### User Value

#### Business Value

## KPIs

We should gather end to end metrics including:

* Number of people who interact with the "Find VA Benefits" selection page.
* Number of people who interact with the "Find VA Benefits" section on the dashboard. This will be determined by how many people click links/initiate applications within that section.
* Number of links clicked in the "Find VA Benefits" section on the dashboard.
* Number of applications initiated from the "Find VA Benefits" section on the dashboard.
* Number of applications completed that were initiated from the "Find VA Benefits" section on the dashboard.
* Average number of times people visited an application that was initiated from the "Find VA Benefits" section on the dashboard.
* Average amount of time it took someone to complete an application that was initiated from the "Find VA Benefits" section on the dashboard.

---

# Implementation Info

## Status

## Solution Narrative
- **8.3.18**: After determining that we do not have sufficient backend data to power a personalized recommendations product, we are moving forward with a research around a user input driven solution, which is currently focused on asking users to indicate which benefits they are interested in. We have begun developing a Postgresql table on Vets.gov to store prefences to accomplish this goal, as [outlined in this ticket](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/11875). Steve has confirmed that we do not need PRA for this work, as preferences and settings are exempt.

- **Date**: summary of any big changes and why

## Team

- **VA Digital Strategist(s)**: Steve Kovacs; Matt Self
- **Product Manager** `*`: Ben Barone; Mina Farzad
- **Design Lead**: Samara Strauss
- **Content Writer(s)**: Danielle Thierry
- **Front-end Engineer(s)**: Ben Shyong; Nick Sullivan, Claire Hsu, Erik Hanson
- **Back-end Engineer(s)**: Ryan Baker; Harry Levine; Emerson


## Resources and Documentation

- [Discovery and Research](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Identity/Personalization/Recommendations/Discovery)
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
