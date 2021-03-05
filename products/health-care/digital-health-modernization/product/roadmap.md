# DRAFT Digital Health Modernization Product Roadmap
This is a rough draft of a Digital Health Modernization roadmap. It has not yet been validated by all teams who would be affected. It is largely inspired by [Product Strategy B](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/product/README.md#b-use-ubiquitious-single-sign-on-and-user-centered-notifications-to-create-user-flows-across-products-without-necessarily-moving-them) from our previous work on potential approaches to digital health modernization.

## Vision
VA.gov is the front door for digital health at the VA. 

## Mission
- Support, guide and catalyze product teams in the health space to pursue the vision
- Own the roadmap
- Maintain alignment, or call out lack thereof, between Office of Connected Care (OCC), Office of the CTO (OCTO), Veterans Health Administration (VHA) leadership, My HealtheVet (MHV), Identity and Access Management (IAM) and others as needed
- Identity and nurture product leadership to carry this vision forward and adapt it as the world changes
- Learn lessons from the Flagship Mobile App team

### Potential additions
- Resourcing? 
- Cross-team prioritization? 
- User research standards? 
- IA standards? 

## Goals
- End users who visit VA.gov can find the health tool or task they need without leaving the site
- End users who sign into VA.gov can access other health platforms (ex., My HealtheVet; My VA Health) without signing in again
- End esers do not need to know which electronic health record platform their facility uses in order to get care, refill prescriptions, exchange messages or download records
- End users with the VA flagship mobile app and / or VA.gov access can get key information about tasks they need to perform (ex., submit travel reimbursement), and tasks that have been performed for them (ex., your lab results are ready) — with clear, atomic next steps inline
- The resulting product, or product ecosystem, has clear ownership and is reasonably well-organized

## Anti-goals
- Rebuilding tools as an end in iteself (this is fine if it's a means to an end with user value)
- Consolidating functionality onto VA.gov as an end in itself (this is fine if it's a means to an end with user value)
- Creating a system staffed indefinitely by term-limited personnel and / or other high-turnover situations

## Roadmap
### Now (1H 2021)

#### Improve discoverability of health tools and tasks on VA.gov

- Details here (ex., content changes to scheduling page)

#### Mitigate single sign-on friction between My HealtheVet, VA.gov and My VA Health 

- Details here (ex., root cause analysis)

#### Create alignment on steering / priorities between VHA leadership, OCC and OCTO

- Details (ex., council)

### Next (2H 2021 - 1H 2022)

#### Begin to migrate My HealtheVet credential users into Login.gov and / or ID.me

#### Integrate MHV transactional notifications with VA.gov centralized services (ex., VA Notify)

#### Surface key, timely health information on and calls to action on MyVA

#### Create centralized notifications on VA.gov (ex., MyVA and / or somethign on public website header)

#### Shift VAOS into MHV

### Later (2H 2022 and Beyond)
- Integrate with Cerner / My VA Health APIs to surface analogous information and calls to action in VA products
- When we have certainty on whether or not Cerner will continue developing a patient portal, make the decision on whether to use VA.gov as a router to two more fully featured health portals, or whether to consolidate somewhere

## Why
- Most work proposed above is valuable whether or not Cerner / My VA Health attains widespread rollout
- Most work proposed above is valuable to Veterans and other end users
- This strategy pushes some responsibility for platform maintenance onto mature organizations (ex., MHV) so that VA.gov is free-er to innovate
- Creating flow across products is less expensive than moving them, and closer to the root problem (design for Conway's Law rather than design for user journies)
- No strategy can factor out the inevitable complexity which results from the number and idiosyncracy of VistA implementations. It would be ill-advised to take this problem from MHV and difficult to ship significant, meaningful front-end innovations using MHV's back-end given the need for backwards compatibility with that stack. This makes replatforming very expensive with limited upside, and puts the digital modernization strategy (single, high-quality version of every tool) at odds with OCTO's ability to do the most good for the most people.  
