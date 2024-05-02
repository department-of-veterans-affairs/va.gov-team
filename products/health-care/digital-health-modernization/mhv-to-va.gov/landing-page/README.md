# MHV on VA.gov Landing Page Product Outline 

## Communications
- Team GitHub Label: my-health-CTO-HEALTH-TEAM 
- Product GitHub Label: my-health-INTEGRATION
- Slack channel: [#mhv-on-vagov-portal-home](https://dsva.slack.com/archives/C04GDQSHD1R)
- Product POCs: 
  - Lauren Alexanderson - OCTO Sponsor
  - Patrick Bateman - OCTO Product Owner
  - Kaitlin Fink - OCTO UX Lead
 
- Stakeholders: 
   - Theresa Hancock
   - Patricia Henry
   - Bresha Lipscomb
   - Carnetta Scruggs


## The Problem
To get the health care they need, Veterans must find, register for, and learn to use a number of different websites and software products. Our generative research from 2018, repeated in late 2020, shows that Veterans find it extremely difficult to navigate commonplace interactions with VA health care. The VA ecosystem is so complex that Veterans feel discouraged to apply for, manage, and maximize their benefits.

Consider booking a doctor’s appointment: One system locates nearby facilities. Another schedules appointments. Another handles follow-ups like messages and prescriptions. And another reimburses travel expenses. That’s a lot for Veterans to learn. It’s also difficult for VA staff to support so many siloed systems.


### User Goals
- Ability to easily and quickly navigate to information about qualifying and signing up for health benefits
- Ability to easily register for a qualified authentication account in order to access MyHealtheVet tools and content
- Ability to sign on one time when moving from VA.gov to MyHealtheVet tools, or from MyHealtheVet to VA.gov, regardless of whether a tool is still housed on MyHealteVet or has been integrated into VA.gov moving from MyHealtheVet to tools that have been integrated into VA.gov


### Business Goals
- Create a landing page that will serve as a seamless bridge between VA.gov and MyHealtheVet (MHV) and evolve transparently while MHV applications are being integrated into VA.gov
- Provide a single sign-on authenticated experience between VA.gov and MHV
- Offer an intuitive and accessible front door to health benefits and information 


## Assumptions
- The new MyHeatheVet on VA.gov landing page will initially launch with links to existing applications and content on MyHealtheVet
- As applications are integrated into VA.gov and reach the appropriate rollout stage, links will be updated to point to the new experience 
- The navigation and content on the landing page may change between initial rollout and full release based on the outcome of user feedback 

## Questions
- Will users find it easier or more difficult to access their health information from the new landing page?
- Will users be confused to see this new page instead of MyHealtheVet's landing page?
- Will changes to labels and navigation to make the page more intuitive than MHV to new users cause confusion for existing users?


## Requirements
#### In Scope 
- A new landing page that initially links to existing health applications and content on MHV and VA.gov
- Usability testing to determine what improvements may be needed 
- Incremental enhancements to the landing page navigation and content based on user feedback 
- Updating links as MHV applications are migrated into VA.gov 
- Analytics to evaluate user behavior and measure success 


#### Out of Scope
- Content management in the landing page MVP release 


## Solution Approach
The MyHealtheVet on VA.gov will utilize a single sign-on approach to allow users logged into VA.gov to seamlessly move to MyHealtheVet without having to log in a second time.  It will be the first component of the new MyHealtheVet in VA.gov experience to go live. Content on the page will explain why users are seeing this new page, and will provide a link to Resources and Support content.

While MHV applications are in the process of being integrated into VA.gov, links on the landing page will point to existing applications and content.  Once an application reaches Phase 2 of its rollout, the relevant landing page links will be updated to point to the new experience.

## Value Propositions

## KPIs
(Analytics Playbook)[https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/analytics-playbook]

---

# Implementation Info

## Status
The application was initially launched in Production behind a feature flag on March 8. 2023. During Phase 0 of the landing page rollout, a handful of trusted users were given access via an allow list.

On March 27, 2023, after the initial smoke testing was completed by the trusted user group, access was changed to allow access to a random 5% of daily MyHealtheVet users who log in via Login.gov or ID.me, have health benefits, have a VAMC associated with their profile, and have never received care at a Cerner VA Medical Center.

On April 26, 2023, the rollout moved to Phase 2, and access was expanded to 10% of users meeting the same criteria used for Phase 1.


## Technical Decisions
- Please refer to the [decision log](/products/health-care/digital-health-modernization/mhv-to-va.gov/landing-page/decision-log.md)

## Product Decisions
- Please refer to the [decision log](/products/health-care/digital-health-modernization/mhv-to-va.gov/landing-page/decision-log.md)

## Team

- OCTO PO: Patrick Bateman
- Delivery Manager: Lynne Johnson (Agile Six)
- Product Manager: Wes Rowe (Agile Six)
- UX Design: Jonathan Nelson (Ad Hoc)
- UX Design: Florence McCafferty (Agile Six)
- Research: Kat Brinkley (Agile Six)
- Technical Architect: Carlos Felix (Agile Six)
- Information Architect: Sara Sterkenburg (Ad Hoc)
- Engineer: Daniel Cloud (Ad Hoc)
- Engineer: Jim Zaccardo (Ad Hoc)
- Engineer: Richard Davis (Ad Hoc)
- QA Engineer: Allan To (Ad Hoc)
   
## Screenshots

### Before
<img width="820" alt="image" src="https://user-images.githubusercontent.com/69174644/221226800-35b20612-2df4-43ab-a591-f7a5413df3d9.png">


### After
<img width="551" alt="image" src="https://user-images.githubusercontent.com/69174644/223727400-c71c0629-61c6-4f03-a029-431c67fedd5f.png">
