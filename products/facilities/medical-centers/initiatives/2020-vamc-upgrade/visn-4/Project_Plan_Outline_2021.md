# Product Plan Outline: vamc-upgrade
- GitHub Label: vamc-upgrade
- Slack channel: [#vsa-vamc-upgrade](https://dsva.slack.com/channels/vsa-vamc-upgrade)
- VA.gov link: n/a
- Demo video link: n/a
- Product POCs: David Conlon (Dave-gov) & Stan Gardner (stan-gcio)

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
Full team access to va.gov and CMS (Drupal) and lessons learned from the pilot project at Pittsburg, PA VAMC website. 

## Discovery Takeaways
Still partially in Discovery - Total of 37 required Web pages and over an addition 55 posible web pages per site depending on system.  To include upto 90 individially detailed Health Services. 

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
#_Following the overall Goal of the story to streamline the Veteran's journey the following KPIs were developped:_
- Reduce the total number of web pages from legacy (Not including the Required web page count)
- Reduce the total word count per page from legacy to new.
- Reduce the total number of links per page from Legacy to new. - and - 
- Reduce the total click-through count (Thus reducing time to get to end of Veteran's journey on the site.)
#Additionally:
- Increase the percentage of plain language scoring to improve comprehension of the page intent.
- Reduce the # of code rewrites to improve on reuse and scalability of the code and content.

---

# Implementation Info

## Status
In progress

## Solution Narrative
- **November 2019**: Discovery of VISN 4 VAMC websites and how the legacy websites can be categorized into the key archetypes to better plan and design for the legacy website upgrade to the new Drupal experience. Review the dissection of these pages and begin content road map to re-write pages and then determine design of the web site from the example of the Pittsburgh, PA Pilot site.
- **December 2019**: Mapping of web pages by archetype will begin.  Content stories will begin to create the baseline of content approval process flow.  Mapping out criteria for Health Service Content will begin and will feed the content stories.
- **January 2020**: Content will begin flowing through content approval process and begin being loaded into narrative/content files in Drupal.

## How to Access and Test
- New pre-production - [DEVSHOP_Development site instances](http://devshop.cms.va.gov/projects)
- All preliminary testing, Internal, Staging review can be complete here
- **Dual-State** (Non-customer facing)
- 508 compliance and accessibility checks to be complete in Dual-State.
- All final testing can be completed in Dual state
- Analytics and reporting to begin in Dual state
-User authentication info: Editorial = Drupal PIV access (See CMS Procedures) 


### Content
- Content approval process document [https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/facilities/medical-centers/]
## Error Handling
...N/A - This is not a new application, content and data input only.
Error handling is managed by CMS-support.

## Service Level Objective
...N/A

## API Calls and Dependent Systems
- As per va.gov/pittsburgh-health-care, Facilities information pulls from API Lighthouse
* Facility Address
* Facility Hours of Operation
* Facility Main phone (if available)

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
- DSVHA Digital Product Owner: Jenny Heiland-luedtke
- DSVHA Digital Supporting Product Owner: Jeff Grandon
- DSVHA Digital Supporting Product Owner: Steve Trokar
- DSVA Product Owner: David Conlon
- Team Product Manager: Stan Gardner


...
