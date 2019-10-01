# VSA: Facility Locator Outline: WIP

GitHub Label: department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator

Slack channel: DSVA/vsa-facilities

Product POCs: 
- VA.gov Lead: Chris Johnston (Christopher.Johnston2@va.gov)
- Product Owner: David Conlon (David.Conlon@va.gov)
- Supporting Product Owner: Andy Lewandowski (Andrew.Lewandowski2@va.gov)
- Facility API Product Owner: David Mazik (David.Mazik@va.gov)
- Product Manager: Michelle Middaugh (Michelle.middaugh@adhocteam.us)
# Table of Contents
- Executive Summary
- User Problem Statement
- Solution Goals
  - User Goals
  - Product Goals 
- Assumptions
- Requirements and Constraints
- Discovery Takeaways
- Solution Approach
- Value Propositions
  - User Value
  - Business Value
- KPIs
- Team
- Implementation Information
  - Status
  - Solution Narrative
  - How to Access and Test
# Executive Summary
## User Problem Statement
As a Veteran, I'm unable to easily and quickly find information about facility locations and services.
# Solution Goals
## User Goals
- Veterans want to easily find information about facility locations and available services.
- Veterans need the facility information to be complete, accurate and easy to understand. 
- Veterans want to schedule appointments at certain facilities.
- Veterans want to see patient satisfaction ratings for health facilities.
- Veterans want to interact with one tool for all facility/services needs. 
- Veterans want to get directions to a facility. 
- Veterans want to find the mental health number for a facility. 
## Product Goals
- Eliminate bugs
- Improve performance
- Reach parity with all legacy Facility Locator tools
  - Sunset old systems to reduce the cost of maintaining multiple facility locators
- Complete consolidation of functionality 
  - Integrate urgent care facility and urgent care pharmacy facilities
  - Integrate legacy health care benefit pages (Community Care) into existing architecture/design and clarify each for user
  - Incorporate Mission Act-required facility drive time functionality
  - Incorporate Veteran-benefit eligibility information
- Improve data trasnparency and organization
  - Data-driven design to organize information
  - Integrate Facility API
  - Integrate services and facilities into UX
  - Implement VAMC facility page design
  - Implement Unified Services Taxonomy
# Assumptions
# Requirements 
## In Scope
## Out of Scope
## Constraints
- Naming conventions are localized, rather than uniform
- Multi-disciplinary services
- Scattered data held in disparate systems
- Maintenance plan
- Reliability with GeoBISL
- Dependency on a separate VA business unit which owns the data
- Visibility of roadmap/timelines needed to coordinate around dependencies
# Discovery Takeaways
## Veteran Demographics
- 50% of Veterans are 65+ years of age
- Veterans have a lack of understanding about what is available. 
- This project is an opportunity to reconsider how and when the VA reaches out to veterans. Most receptive time might be a few months after “out-processing”. 
- Behavioral health support barriers
## Facility Locator 
- Wait times were the most important
- Would use Google as their starting place to find a VA phone number or facility
- Veteran confusion regarding Community Partners, Urgent Care
- Was not clear that Satisfaction Data came from Veterans
- Multiple Facility Locators exist and experience is inconsistent and/or incomplete
- UI/UX is not intuitive for Veterans
# Value Propositions
## User Value
- Enable faster access to care and more timely delivery of services
- By having an easy to use facility locator, Veterans can find facility information quicker and easier.
- Being able to search by service allows Veterans to quickly know what facilities can provide them care.
- Once scheduling is integrated, they will be able to quickly find a health facility and schedule an appointment.
- Improve the experience our users have when interacting with the VA.
  - There are over 45 different legacy facility locators across the VA. The new Facility Locator will improve the experience and allow the Veteran to search for all facilities on one map.
## Business Value
- Increase the use of VA’s self-service tools
- Have one tool that allows Veterans to find facilities, search for facilities by services and improve interaction with health facilities through scheduling and data transparency this project will increase the use of VA's self-service tools.
- Reduce cost of maintaining multiple locators across VA.
# KPIs
- TBD
# Implementation Information
## Status
- Initial MVP tool launched 2016
- V2 launched: November 11th, 2016
- V3(June 2017): addition of wait time data and vet centers
- Community Care work
## Solution Narrative
- Technical Decisions
- Product Decisions
## How to Access
- Live: https://www.va.gov/find-locations/
- Staging: https://staging.va.gov/find-locations/
- Front-end: https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/facility-locator
- Backend: https://github.com/department-of-veterans-affairs/vets-api/tree/master/app/controllers/v0/facilities
- https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/facilities
# Resources and Documentation 
- Discovery and Resarch
- Technical Documentation
- Product Specs
- Design
- Roadmap
# Team
- VA.gov Lead: Chris Johnston
- Product Owner: David Conlon
- Supporting Product Owner: Andy Lewandowski
- Facility API Product Owner: David Mazik
- VSSC Analyst/Engineer: Chad Holmes 
- Michael Villeneuve: GEOBISL
- Product Manager: Michelle Middaugh
- VA UI Design Lead: Ryan
- UX/Design: Aricka Lewis
- Back End Engineer: Justin Ellis
= Front End Engineer: Gilbran Rodriguez
- VA Researcher(s)
