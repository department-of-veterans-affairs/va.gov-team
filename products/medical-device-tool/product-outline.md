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


### table of Contects


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
As a Veteran, who is eligible to re-order hearing aid batteries and accesories from the Denver Logistics Center (DLC), I would like to be able to see what items I can reorder on line and the date I am eligible ro reorder on-line without having to call or email the support center. As the DLC, I would like to migrate more users to online self service reordering system to decrease call center volume, mail in cards and reduce costs.

### Solution Goals
Improve the overall reordering experience for Veterans by increasing the number of medical items offered through Denver Logistic Center's (DLC) online ordering system and makign the user experience easy and intuitive.

### Minimal Viable Product (MVP)
Medical Device Tool features: 
- Veteran's personal information - login and authenticate with Vet360 API
> Name, Address, Email is prepopulated in the personal information forms.
- Clear instructions on how to edit veterans personal information, if it is incorrect
- Pull in reorder data using Reorder API so vets can see what productsthey are aligible to to reorder and eligibility dates and quantaties.
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
> - Minimize need for Veteran data entry in online channel. Personal information adn reorder information is prefilled for the Vets. 
> - Maximize DLC processing of requests via online channel

-Secondary Objectives:
> - Include features to ensure correct delivery address for products being shipped. The Vet can edit deliviry address on-line. 

VA
-	Migrate DLC's medical device ordering tool from eBenefits to Va.gov

## Assumptions
- The low online orders are a result of Veterans finding it difficult to log into the eBenefits because of its additional authentication requirements. 
- Veterans use other channels to reorder their items because the online channel is difficult and confusing to use.

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
-	Streamline the ordering process and improve reordering experience on on-line channel, migrate users from higher cost fulfillment options such as contact center and mail in reorder cards.

#### Business Value
Increase customer satisfaction
-	By fulling Veterans desire to reorder medical supplies online instead of calling contact center or sending in reorder cards.
-	Reducing number of mail-in and Call Center calls to decrease operating costs for DLC
-	The opportunity to increasing focus on a Veterans needs because the volume of cued calls will be reduced.

## OKRs-KPIs

### KPIs
* Increase online orders by 5% QoQ
* Order abandon rate <10%

### Objectives and Key Results
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
  
  > Producsts: Hearing aid Batteries, Accessories
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

