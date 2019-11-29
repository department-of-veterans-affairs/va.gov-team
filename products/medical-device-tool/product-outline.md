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
  - [ ] - Pat Booth – Chief, Veteran Services Division (VSD)
  - [ ] - Jeff Robillard – Supervisor, Customer Service Section (one of two sections within VSD)
  - [ ] - Jim Richardson – Senior Developer
  - [ ] - Shane Elliot, Associate Director, Loma Linda VA Healthcare System
  - [ ] - Paras Shah, VEText Project Manager

## Background
DEPO, working in coordination with VBA, began an ambitious project to modernize the VA's digital benefits delivery process. Practically, this is taking the form of a migration of functionality from the current platform, eBenefits (http://www.ebenefits.va.gov), to the modern web platform of the future, VA.gov (http://www.va.gov).

For each feature on the eBenefits platform, an analysis is being done to determine the appropriate path forward for the feature; essentially, we will determine to move, redesign, or retire each of the eBenefits features until every feature on the platform has been accounted for.

BAM2 decided to pick a self-contained, low-hanging fruit from the list of eBenefits priorities(xxx), and use it as a low-risk way familiarize our team with VA.gov, the stack, and the way DEPO works, while also delivering actual value to users. With that in mind, with input from Steve Kovacs who is leading the eBenefits Modernization project, we decided on the online ordering service Veterans use to order hearing aid batteries and prosthetic socks.

We have heard anecdotally that this feature has an "extremely high" usage rate; this seems to make sense, as hearing loss is often irreversible, with hearing aids requiring a constant supply of batteries.

Alex Y., our former deputy-CTO, sent the following:

> Following up on hearing aids. It looks like the data is in VistA and that there is a Mumps package for accessing it.  Some folks at the Loma Linda VA medical center, who built VEText, are willing to build an API to it, if that would be valuable to VA.gov.  If it would be, let me know who the best point of contact would be and happy to either connect folks and get out of it, or stay involved and help facilitate (whichever is most helpful to the team)!



## The Problem
Millions of Veterans depend upon the VA for disability-related medical devices and their accessories. Today, Veterans are able to order **prosthetic socks** and **hearing aid batteries**, the two most commonly-ordered medical device accessories, through their respective VA forms (Form 2345 & 2346). There are a number of ways to request these medical devices today, through several different mediums and platforms, providing a disparate experience for Veterans. With the expected sunsetting of eBenefits, BAM2 seeks to match and expand the functionality of the platform on the VA.gov website.

### User Problem Statement
As a Veteran, I want to be able to easily order the medical devices I need for my disability. 
- [ ] _As a Veteran, I want one place to easily order the medical needs._ 

## Discovery

### User Goals (Assumed)
- Veterans:
  - Recieve **hearing aid batteries** or **prosthetic socks** from the VA _Denver Logistic Company_
  - Automate their orders. 
  - [ ] - _Veteran's would like to reduce the effert needed when ordering medical needs_ 
  

- VHA Providers:
  - Submit a request for an order of **hearing aid batteries** or **prosthetic socks** on behalf of their Veteran patients
  - [ ] - _To migrate orders from Veterans to the online channel and away from the other channels proved (Automated phone service, Call center services, Mail in leaflet, and email)_
 - [ ] - _To allow veterans to order the DLC's full catalogue through the online ordering channel_

- DLC Employees:
  - Enter in orders from Vets via phone: call center & automatided, mail, or email

- Manufacturing Company:
   - TBD  

- VA/DLC Managers
  - TBD
  
### Veteran's Pain Points (Assumed)
- Veterans:
  - They are required to manually order the same item many times
  - There are too many methods to ordering devices
  - [ ] _Have all the reoccurring items that are needed to be ordered in one location, i.e. pharmaceutical needs as well as medical device needs_
  - [ ] - __

### Business Goals (Assumed)
- Fiscal 2020 our team is looking at focusing on migrating eBenefits medical tool to VA.gov 
- Increase volume of online orders by migrating existing user to the online ordering channel.
- To reduce the number of order-related errors

## Assumptions


## Questions
- Who "owns" the Medical device ordering "portfolio"?
  - **DLC has their own IT division that handles all of the systems and data**
- We've heard that hearing aid batteries and prosthetic socks are available, what else is offered? 
  - **Many other items are available through DLC, but not by direct order from Veterans due to their complexity. An upcoming product that may benefit from a similar resupply treatment is apnea machines.**
- Data on the volume/timing of orders for each available product?
- How are orders processed? How long does processing take? How is the order fulfilled? Order received on paper vs. eBenefits?
  - **For regular orders (including all eBenefits orders), processing typically takes one business day. Urgent orders are often processed same-day.**
  - **Orders are shipped via UPS Worldship**
- What issues do Veterans encounter trying to use the eBenefits ordering form?
- What is https://hearing.health.mil/For-Providers/DoD-VA-Hearing-Prosthetics-Ordering-System? How does it fit? Who uses it? Audiologists? Veterans? Both?
  - **ROES is an application owned by the DLC, used by clinicians to place orders for their Veteran patients. Veterans have access to a separate application that sits on top of ROES, called VOES, which can be seen via iframe on eBenefits.**
- Heard there may be an API; what's the story there?
- Tell us about VEText; how does it fit in?
- How can we get access to a non-production instance of the tool on eBenefits?

## Requirements
#### In Scope
- [ ] Migrating current Medical Device tool from eBenefits to Va.gov

#### Out of Scope
- [ ] TBD- Incorporating the larger DLC catalogue items to VA.gov
## Solution Approach

## Value Propositions

## KPIs

[KPI Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/product-outline.md)

---

# Implementation Info

## Status
Discovery in-progress

## Technical Decisions

## Product Decisions

## Team

- DEPO Digital Strategist(s): Matthew Self
- Product Manager: Nick Wygoink
- Design Lead: Shawna Hein
- Eng Lead: Joe Costa
- Engineers: Amen Ra (FE), Mahariel Rosario (FE), Joseph Brothers (BE)
- Designers: Rebecca Walsh, Riley Orr
   
## Screenshots
Mural board [LINK] (https://app.mural.co/t/vsa8243/m/vsa8243/1574363101745/48437699b80471a20330c14fbaedca02b040e9ff)
### Before

### After
