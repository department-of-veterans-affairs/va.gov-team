# VA Medical Device Tool
Product Outline

## Communications
- Implementation Team: Veteran-facing Services Apps, Benefits and Memorials 2 (BAM2)
- GitHub Label: 
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
As a Veteran, who is eligible to re-order hearing aid batteries and accesories from the Denver Logistics Center, I would like to be able to see what items I can reorder on line and the date I am eligible on-line without having to call or email the support center. As the DLC, I would like to migrate more users to online self service reordering system to decrease call center volume and reduce costs.

### Solution Goals
Improve the overall reordering experience for Veterans by increasing the number of medical items offered through Denver Logistic Center's (DLC) online ordering system and makign the user experience easy adn intuitive.

### Minimal Viable Product (MVP)
Medical Device Tool features: 
- Veteran's personal information
> Name, Address, Email
- Edit veterans personal information
- Products to order
> Hearing aid batteries
> Hearing aid accessories
- Confirmation page
> list out veteran contact information & items ordered
- Status of order

### User Goals
Streamline the Veterans ordering process by:
1. Be able to complete a full order through the online ordering system. 
2. Modernizes their ordering process to reduce efforts 
-	_Currently eBenefits only offers reordering Hearing aids batteries and prosthetic socks._

### Business Goals
DLC
-	Migration of orders from other offered channels to the online channel. 
-	Currently the online channel is used by 7,000 veterans per month. Other channels are IvR, direct email, call center and reorder forms account for 180,000 per month.
-The business goal is to migrate veterals from channels that have a high cost per order to online self service channel. 
-A QoQ migration of 5% to online channel would be considered a huge win.

-Primary Objectives:
> - Transition hearing aid battery resupply ordering from eBenefits to VA.gov
> - Add online resupply request capability for common hearing aid accessories
> - Minimize need for Veteran data entry in online channel
> - Maximize DLC processing of requests via automated methods

-Secondary Objectives:
> - Include features to ensure correct delivery address for products being shipped
> - Include features to augment communication to Veterans regarding status of their requests

VA
-	Migrate DLC's medical device ordering tool from eBenefits to Va.gov
Providers
-	TBD

## Assumptions
- The low online orders are a result of Veterans finding it difficult to log into the eBenefits because of its additional authentication requirements. 
- Veterans use other avenues to reorder their items because the online services only provides 2 items.

## Requirements and Constraints
### Requirements- 
-	Access to Vets API
-	Development environment compatible with VA standards

### Constraints- 
-	Lack of access to DLC’s applet. 
-	DLC resources and time to update their system. Currently the DLC will have to build their own API.

## Discovery Takeaways
- [Discovery readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/research/discovery-readout-presentation.pdf)

## Solution Approach
- [Thumbnail Mapping](https://app.mural.co/t/vsa8243/m/vsa8243/1578519389467/11a5327c66e1fb78cac3871889239f23e1f62998)

## Value Propositions
Team will utilize shared resources to include, but not limited to: Front End engineer, Editors, content review, IA, 508, and local PAO input.

#### User Value
-	Streamline the ordering process and improve reordering experience.

#### Business Value
Increase customer satisfaction
-	By fulling Veterans desire to reorder medical supplies online
-	Reducing number of mail-in and Call Center calls 
-	The opportunity to increasing focus on a Veterans needs because the volume of cued calls will be reduced.

## KPIs
*Objective:* Reduce ordering complexity and streamline the process.
* Reduction in mailed in orders
* Reduction of Call Center orders
* Reduction of online errors
* Reduction of total time to order items
* Reduction of steps on the online ordering process
* Reducing the authentication steps for reordering
* Keywords in Top 10 Search Engine Results  

*Objective:* Increase volume of online orders by migrating existing user to the online ordering channel.  
* Determine the online orders percentages have increased
* See a reduction of orders from all other DLC ordering Channels
* Compare online activity on GA with completion of orders from the DLC   

*Objective:* Determine if Lager Catalogue is out of scope.  
* How many products will create success.
* Define what are the top ordered items
* Define what top items have top ancillary items  

*Objective:* Confirming (KPI) that new Medical tool will migrate orders to DLC VA.gov channel.  
* Reduction in mailed in orders
* Reduction of Call Center orders
* Increase in online orders  

*Objective:* Build and create a modernized easy to use clearer catalogue with the DLC and house it in VA.gov

---

# Implementation Info
-TBD

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
  -wip- 
  > Producsts: Hearing aid Batteries, Accessories, Prosthetic Socks
  > Order history of last 2 years of items
  > Product: Make
  > Product: Name 
  > Product: Serical NUmber 
  > Next Reorder date
  > Veterians address
  > Confirmation email

- Design update
  + TBD

- [Roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/Road-map%202small.PNG)


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
[Mural board](https://app.mural.co/t/vsa8243/m/vsa8243/1574363101745/48437699b80471a20330c14fbaedca02b040e9ff)

### After

