# VA Medical Device Tool
Product Outline

## Communications
- Implementation Team: Veteran-facing Services Apps, Benefits and Memorials 2 (BAM2)
- GitHub Label: 
- Slack channel: #vsa-bam-2
- Product POCs:
  - Matthew Self, DEPO Lead
  - Nick Wygoink, BAM2 Product Manager

- Stakeholders:
  - Pat Booth – Chief, Veteran Services Division (VSD)
  - Jeff Robillard – Supervisor, Customer Service Section (VSD)
  - Jim Richardson – Senior Developer
  - Shane Elliot, Associate Director, Loma Linda VA Healthcare System
  - Paras Shah, VEText Project Manager


### table of Contects


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

# Executive Summary

### User Problem Statement
As a Veteran, I find wish there was a way to order all my Prosthetic socks and /or hearing aid items online.  


## Solution Goals
Improve the overall reordering experience for Veterans by increasing the number of medical items DLC offered on their online channel.

### User Goals
Streamline the Veterans ordering process by:
-	*First-* Be able to complete a full order through the online ordering system. 
-	*Secondly-* Modernizes their ordering process to reduce efforts 
-	_Currently eBenefits only offers reordering Hearing aids batteries and prosthetic socks. 

### Business Goals
DLC
-	Migration of orders from other offered channels to the online channel. 
-	Success defined by a 24,000 online orders per quarter
VA
-	Migrate Medical device ordering tool from eBenefits to Va.gov

Providers
-	TBD

## Assumptions
There are several different services, resources, specifics, and unique stories surrounding each VA Medical Center. 

## Requirements and Constraints
Requirements- 
-	Access to Vets API
-	Development environment compatible with VA standards
-	
Constraints- 
-	Lack of access to DLC’s applet. 
-	DLC will have to build their own API for VA connect to. 

## Discovery Takeaways
--Interviews are still being conducted

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
-	Stream line the ordering process and improve reordering experience 

#### Business Value
Increase customer satisfaction
-	By fulling Veterans desire to reorder medical supplies online
-	Reducing number of mail-in and Call Center calls 
-	The opportunity to increasing focus on a Veterans needs because the volume of cued calls has reduced.

## KPIs
*Objective:* Reduce ordering complexity and streamline the process.
..*Reduction in mailed in orders
..*Reduction of Call Center orders
..*Reduction of online errors
..*Reduction of total time to order items
..*Reduction of steps on the online ordering process
..*Reducing the authentication steps for reordering
..*Keywords in Top 10 Search Engine Results
*Objective:* Increase volume of online orders by migrating existing user to the online ordering channel.
..*Determine the online orders percentages have increased
..*See a reduction of orders from all other DLC ordering Channels
..*Compare online activity on GA with completion of orders from the DLC
*Objective:* Determine if Lager Catalogue is out of scope.
..*How many products will create success.
..*Define what are the top ordered items
..*Define what top items have top ancillary items
*Objective:* Confirming (KPI) that new Medical tool will migrate orders to DLC VA.gov channel.
..*Reduction in mailed in orders
..*Reduction of Call Center orders
..*Increase in online orders
*Objective:* Build and create a modernized easy to use clearer catalogue with the DLC and house it in VA.gov

---

# Implementation Info
-TBD

## Status
In progress

## Solution Narrative


## How to Access and Test
- Currently: AccessVA, eBenfits, and ROES
- Future: AccessVA, Va.gov, ROES

### Content
- [GH Page] (https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/medical-device-tool)

## Error Handling
...TBD

## Service Level Objective
...TBD

## API Calls and Dependent Systems
...TBD

## Resources and Documentation
- Discovery and Research
  + [Research documents] (https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/medical-device-tool/research)

- 
  + [Technical] (https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/research/WebSequenceDiagram.pdf)

- Product specs
  + TBD

- Design update
  + TBD

- [Roadmap] https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/Road-map%202small.PNG


## Keywords
- Prosthetic Socks, Hearing Aids

## Team
- DSVA Product Manager: 
- DSVA Supporting Product Manager: Matt Self
- Team Product Manager: Nicolaus Wygonik
- VA Regional PAO(s): TBD
- VA local site PAO(s): TBD
- Managing Editor: Louis Carlozo
- Business Analysts:  + TBD
- Content Writers:  + TBD
- Front-end Engineer: Amen Ra, Mahariel Rosario
- Back-end Engineer: TBD
- Designers: Rebecca Walsh, Riley Orr
- Design Lead: Shawna Hein
- Eng Lead: Joe Costa


### Screenshots

#### Before
Mural board [LINK] (https://app.mural.co/t/vsa8243/m/vsa8243/1574363101745/48437699b80471a20330c14fbaedca02b040e9ff)

### After

