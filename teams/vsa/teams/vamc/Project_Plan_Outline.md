[Migrating_to:](https://github.com/department-of-veterans-affairs/va.gov-team/tree/6050ba09fa99135cac4c801e4b19ff60fe6706cb/products/facilities/medical-centers)

# Product Plan Outline: vamc-upgrade
- GitHub Label: vamc-upgrade
- Slack channel: vsa-vamc-upgrade
- VA.gov link: n/a
- Demo video link: n/a
- Product POCs: Jenny Heiland-luedtke (Jenny-gov) & Stan Gardner (stan-gcio)

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
As a Veteran, I find the VA Medical Center (VAMC) websites are confusing to navigate, have outdated or missing information, and does not match my VA healthcare journey.  

## Solution Goals
Provide to Veterans accessing the VAMC websites a user experience that provides solutions to key touch points in the end-to-end Veteran healthcare journey. Utilizing the Pilot website as a basis on which to improve and foster a better user experience for each of the VAMC websites.

### User Goals
Provide a straight to the point navigation that will allow the Veteran to quickly find and complete their journey on the VAMC website and utilized the website as their reference site to satisfy all their online goals.

### Business Goals
Streamlining total site pages, word count, and simplifying the journey of the Veteran from the initial splash page to the end resource will ensure efficiencies, improved user experience, and local information regarding the VAMC are being leveraged to as many Veterans possible.

## Assumptions
There are several different services, resources, specifics, and unique stories surrounding each VA Medical Center. 

## Requirements and Constraints
Onboarding (va.gov-CMS), access, exiting knowledge, and lessons learned from the pilot project at Pittsburg, PA VAMC website. 

## Discovery Takeaways
Still in Discovery - Onboarding, reviewing documentation, and the next steps in deploying across VISN 4

## Solution Approach
Breaking down each of the VAMC websites into archetypes to categorize the pages and content by:<br>
- <b>Global Content</b> - Template based, or unchanging language across all VISN (va.gov)
- <b>Application Program Interface (API)</b> - Content generalized from API that can be chosen, but still needs editing for local medical center
- <b>Archive-Press-Historical</b> - All local content that is historical, press releases, or will not be changed when migrated to new site.
- <b>Local Content</b> - All content that is based on specific or regional Medical Center and must be edited to meet new template.
- <b>Drop-or-Delete</b> - All content that is peripheral or is not required and will be dropped from migration to new template.

## Value Propositions
Team will utilize shared resources to include, but not limited to: Front End engineer, Editors, content review, IA, 508, and local PAO input.

#### User Value
Not having to travel from webpage to webpage causing confusion and frustration as to where they can access their regional or local services. 

#### Business Value
Money spent on programs at the VA will be better utilized.

## KPIs

### Quality
- Number of total page sites: Reduce the number of total site pages that will in turn increase search-engine optimization.
- Improve the customer experience through clear, standardized, and prioritized site pages and jump links, reducing overall page searches and jumps.
- Word Count: Reduce overall site word count to streamline content into more precise, efficient and plain language content getting the Veteran to where they want to go in a more clear and precise manner. 

### Speed/Velocity/Launch/etc.
- Time to launch page component across VISN...

- Using the Archetypes, determine the parts of the legacy web pages that can quickly be scalable across the VISNs.


- (Note: KPIs have not yet been finalized)

---

# Implementation Info

## Status
In progress

## Solution Narrative
- **November 2019**: Discovery of VISN 4 VAMC websites and how the legacy websites can be categorized into the key archetypes to better plan and design for the legacy website upgrade to the new Drupal experience. Review the dissection of these pages and begin content road map to re-write pages and then determine design of the web site from the example of the Pittsburgh, PA Pilot site.
- **December 2019**: Creating the Drupal pre-production template for the second migration in VISN 4, (e.g. Lebanon, PA), and finalize content create and review process.

## How to Access and Test
- New pre-production - "TBD" - Drupal experience created in pre-production first and tested.
- 508 compliance and accessibility checked after content in created.
- Password protection info:
- User authentication info: Update passwords both 
[Not available yet!]() and 
[Not available yet!]()

## Error Handling
...TBD

## Service Level Objective
...TBD

## API Calls and Dependent Systems
...TBD

## Resources and Documentation

- Discovery and Research
  + Site Breakdown/Mapping
- Technical Documentation
  + Pre-production content review
- Product specs
  + Archetypes
- Design update
- Roadmap (Now, Next, Future)

## Keywords
- vamc, Medical Centers, VISN 4, vamc-upgrade,

## Team
- DSVA Product Manager: Jenny Heiland-luedtke
- DSVA Supporting Product Manager: Andy Lewandowski
- Team Product Manager: Stan Gardner
- VA Regional PAO(s): TBD
- VA local site PAO(s): TBD
- Managing Editor: Louis Carlozo
- Business Analysts: 
  + Chanelle Blakely<br>
  + Lisa Trombley
- Content Writers: 
  + Larry West
  + Kim Mueller
- Front-end Engineer: TBD
- Drupal "Back-end" Engineer: Sundar Kumarasamy

### Screenshots
#### Before
...
#### After
...
