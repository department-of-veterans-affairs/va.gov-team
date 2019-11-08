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
  - Shane Elliot, Associate Director, Loma Linda VA Healthcare System
  - Paras Shah, VEText Project Manager
  - Robert Durkin, ?

## Background
DEPO, working in coordination with VBA, began an ambitious project to modernize the VA's digital benefits delivery process. Practically, this is taking the form of a migration of functionality from the current platform, eBenefits (http://www.ebenefits.va.gov), to the modern web platform of the future, VA.gov (http://www.va.gov).

For each feature on the eBenefits platform, an analysis is being done to determine the appropriate path forward for the feature; essentially, we will determine to move, redesign, or retire each of the eBenefits features until every feature on the platform has been accounted for.

BAM2 decided to pick a self-contained, low-hanging fruit from the list of eBenefits priorities(xxx), and use it as a low-risk way familiarize our team with VA.gov, the stack, and the way DEPO works, while also delivering actual value to users. With that in mind, with input from Steve Kovacs who is leading the eBenefits Modernization project, we decided on the online ordering service Veterans use to order hearing aid batteries and prosthetic socks.

We have heard anecdotally that this feature has an "extremely high" usage rate; this seems to make sense, as hearing loss is often irreversible, with hearing aids requiring a constant supply of batteries.

Alex Y., our former deputy-CTO, sent the following:

> Following up on hearing aids. It looks like the data is in VistA and that there is a Mumps package for accessing it.  Some folks at the Loma Linda VA medical center, who built VEText, are willing to build an API to it, if that would be valuable to VA.gov.  If it would be, let me know who the best point of contact would be and happy to either connect folks and get out of it, or stay involved and help facilitate (whichever is most helpful to the team)!

Github Project: https://github.com/department-of-veterans-affairs/va.gov-team/projects/7
Github Label: https://github.com/department-of-veterans-affairs/va.gov-team/labels/vsa-ebenefits
Slack Channel: #vsa-ebenefits

Discovery Goals
* TBD

## Discovery
 

### User Goals


### Business Goals


## Assumptions

## Questions
- Who "owns" the Medical device ordering "portfolio"?
- We've heard that hearing aid batteries and prosthetic socks are available, what else is offered? Data on the volume/timing of orders for each available product?
- How are orders processed? How long does processing take? How is the order fulfilled? Order received on paper vs. eBenefits?
- What issues do Veterans encounter trying to use the eBenefits ordering form?
- What is https://hearing.health.mil/For-Providers/DoD-VA-Hearing-Prosthetics-Ordering-System? How does it fit? Who uses it? Audiologists? Veterans? Both?
- The page above references Audiologists, but includes a link to https://www.va.gov/eauth/roes/, which seems to target Veterans; what's the difference between the pages/systems/processes?
- Heard there may be an API; what's the story there?
- Tell us about VEText; how does it fit in?
- How can we get access to a non-production instance of the tool on eBenefits?

## Requirements
#### In Scope 

#### Out of Scope

## Solution Approach

## Value Propositions

## KPIs

---

# Implementation Info

## Status

## Technical Decisions

## Product Decisions

## Team

- DEPO Digital Strategist(s): Matthew Self
- Product Manager: Nick Wygoink
- Design Lead: 
- Eng Lead: 
- Engineers:
- Designers: Rebecca Walsh, Riley Orr
   
## Screenshots

### Before

### After
