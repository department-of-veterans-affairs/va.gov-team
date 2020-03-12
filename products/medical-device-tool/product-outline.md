# VA Medical Device Tool
Product Outline

## Communications
- Implementation Team: Veteran-facing Services Apps, Benefits and Memorials 2 (BAM2)
- GitHub Label: vsa-benefits2
- Slack channel: #vsa-bam-2
- Product POCs:
  - Matthew Self, DEPO Lead
  - Leah Keeler, BAM2 Product Manager

- Stakeholders:
  - Pat Booth – Chief, Veteran Services Division (VSD)
  - Jeff Robillard – Supervisor, Customer Service Section (VSD)
  - Jim Richardson – Senior Developer
  - Shane Elliot, Associate Director, Loma Linda VA Healthcare System
  - Paras Shah, VEText Project Manager


### Table of Contents


# Executive Summary 
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Assumptions](#assumptions)
- [Requirements and Constraints](#requirements-and-constraints)
- [Discovery Takeaways](#discovery-takeaways)
- [Solution Approach](#solution-approach)
- [Value Propositions](#value-propositions)
- [OKRs & KPIs](#okrs-kpis)

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
As an eligible Veteran, I would like to be able to receive hearing aid battery and/or accessory resupply online so I don't need to contact the Denver Logistics Center (DLC) to place an order.

### Solution Goals
Provide Veterans eligible for hearing aid battery and/or accessory resupply a user experience that allow them to order available items through an end-to-end online ordering process. 

### Minimal Viable Product (MVP)
Medical Device Tool features: 
- Veteran's personal information - login and authenticate with Vet360 API
> Name, Address, Email is prepopulated in the personal information forms.
- Clear instructions on how to edit veterans personal information, if it is incorrect
- Pull in reorder data using Reorder API so Veterans can see products eligible for resupply, reorder eligibility dates, and item quantities.
> Hearing aid batteries
> Hearing aid accessories
- Review submission page
> Display the Veteran's contact information & items ordered
- Status of order

### User Goals
Implement a modernized ordering process using the VA.gov form's system that will allow the Veteran to quickly select the items available for resupply and submit an order. 

### Business Goals
DLC
-	Migration of orders from other offered channels to the online channel. 
-	Currently the online channel is used by 7,000 Veterans per month. The other ordering channels are IvR, direct email, contact center and reorder forms account for 180,000 per month.
-The business goal is to migrate Veterans from channels that have a high cost per order to online self service channel. 
-A QoQ migration of 5% to online channel would be considered a huge win.

-Primary Objectives:
> - Transition hearing aid battery resupply ordering from eBenefits to VA.gov
> - Add online resupply request capability for common hearing aid accessories
> - Minimize need for Veteran data entry in online channel. Personal information adn reorder information is prefilled for the Veteran. 
> - Maximize DLC processing of requests via online channel

-Secondary Objectives:
> - Include features to ensure correct delivery address for products being shipped. The Vet can edit delivery address online. 

VA
-	Migrate DLC's medical device ordering tool from eBenefits to Va.gov

## Assumptions
- The low number of online orders is a result of Veterans finding it difficult to log into eBenefits because of additional authentication requirements. 
- Veterans use other channels to reorder their items because the online channel is both difficult and confusing to use.
- Veterans who are able to log into eBenefits do not place orders online due to being unable to order hearing aid accessories. 

## Requirements and Constraints
### Requirements- 
-	Access to Vets API for user authentication, personal information
- DLC to develop API to provide catalog information, reorder eligibility and reorder dates.
-	Development environment compatible with VA standards

### Constraints- 
-	Lack of access to DLC’s data. 
-	DLC resources and time to update their system. Currently the DLC will have to build their own API.

## Discovery Takeaways
- [Discovery readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/research/discovery-readout-presentation.pdf)

## Solution Approach
- [Thumbnail Mapping](https://app.mural.co/t/vsa8243/m/vsa8243/1578519389467/11a5327c66e1fb78cac3871889239f23e1f62998)

## Value Propositions
Team will utilize shared resources to include, but not limited to: Front End engineer, Editors, content review, IA, 508, and local PAO input.

#### User Value
Being able to order all available hearing aid battery and accessory items through an online ordering system instead of experiencing potential wait times while placing an order through the DLC's contact center or wondering if a sent mail-in order card has been processed.

#### Business Value
Increase customer satisfaction
-	By fulling Veterans desire to reorder medical supplies online instead of calling contact center or sending mail-in order cards.
-	Reducing number of both mail-in order cards and contact center calls to decrease the DLC's operating costs.
-	The opportunity to increase focus on a Veteran's needs because the volume of contact center calls will be reduced.

## OKRs-KPIs

### KPIs
* Increase online orders by 5% QoQ
* Order abandon rate <10%

### Objectives and Key Results
*Objective:* Reduce ordering complexity and streamline the process.
* Reduction in mailed in orders
* Reduction of Contact Center orders
* Reduction of online errors
* Reduction of total time to order items
* Reduction of steps on the online ordering process
* Reducing the authentication steps for reordering
* Keywords in Top 10 Search Engine Results  

*Objective:* Increase volume of online orders by migrating existing user to the online ordering channel.  
* Determine the online orders percentages have increased
* See a reduction of orders from all other DLC ordering Channels
* Compare online activity on GA with completion of orders from the DLC   


*Objective:* Confirming (KPI) that new Medical tool will migrate orders to DLC VA.gov channel.  
* Reduction in mailed in orders
* Reduction of Contact Center orders
* Increase in online orders  

*Objective:* Build and create a modernized easy to use clearer catalogue with the DLC and house it in VA.gov

---

# Implementation Info
-TBD

## Target Launch Date
- *May 15
- *One month post launch and then QoQ

## Status
In progress

## Solution Narrative
- TBD

## How to Access and Test
- Currently: AccessVA, eBenfits, and ROES
- Future: AccessVA, Va.gov, ROES

### Content
- [GH Page](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/medical-device-tool)

## Error Handling
...TBD

## Service Level Objective
...TBD

## API Calls and Dependent Systems
...TBD

## Resources and Documentation
- Discovery and Research
  + [Research documents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/medical-device-tool/research)

- 
  + [Technical](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/research/WebSequenceDiagram.pdf)

- Product specs
  
   - Products: Hearing aid batteries, hearing aid accessories
   - Order history: eligible items ordered within the last 2 years
   - Product: Make
   - Product: Name  
   - Next reorder date
   - Most recent order date
   - Veteran's shipping address
   - Confirmation email

- Design update
  + TBD

- [Roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/Road-map%202small.PNG)


## Keywords
- Prosthetic Socks, Hearing Aids, Hearing aid batteries, Hearing aid accessories

## Team
- DSVA Product Manager: 
- DSVA Supporting Product Manager: Matt Self
- Team Product Manager: Leah Keeler
- VA Regional PAO(s): TBD
- VA local site PAO(s): TBD
- Managing Editor: Louis Carlozo
- Business Analysts:  + TBD
- Content Writers:  + TBD
- Front-end Engineer: Amen Ra, Mahariel Rosario
- Back-end Engineer: Cameron Testerman
- Designers: Rebecca Walsh, Riley Orr
- Design Lead: Shawna Hein
- Eng Lead: Joe Costa


### Screenshots

#### Before
[Mural board](https://app.mural.co/t/vsa8243/m/vsa8243/1574363101745/48437699b80471a20330c14fbaedca02b040e9ff)

### After

