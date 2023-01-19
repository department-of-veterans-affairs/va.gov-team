# Decision Log – Benefit Content Model

## Purpose of document: 

Record what considerations have contributed to the evolution of a "hardened" Benefit Content Model. This will enable via a COPE model (create once publish everywhere) centralized benefit content to be made available to a growing array of presentation layers – VA.gov website, virtual agent, mobile app, etc.

## Background

### Need for a hardened benefit content model (BCM)

As Veteran-facing presentation layers grow, keeping content in sync across more places has become difficult. The Drupal CMS is intended to provide that source of truth for Veteran-facing content. However, content must be structured to enable apps to pull the content they need. The current state, which does not serve this purpose, has the Benefit Hub pages themselves being the source of truth for benefits. Applications can't pull any particular aspect of that content for specific purposes.

Applications for structured content
- Virgual agent (chatbot)
- Facilities pages on VA.gov, which tell Veterans what services (benefits) they can receive at a given facility
- Mobile app
- Benefit hubs on VA.gov

## Decision log



### 8/12/22 Workshop

Docs shared:
- Danielle’s [content model outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/structured-content/core-benefit-content-structure.md)

Sub-categories among the 9 benefit areas
- Benefit Hubs are actually categories – ”a benefit” is a smaller molecule
- Use case: chatbot tells Vet list of benefits under health care
- Use case: (far future) we personalize that list for the specific Vet based on their service, parameters
- Education is a good example of complexity/categories
  - Main “about” page focuses on GI Bill, but links out to sub-pages about other benefits


"Core benefits" = the 9 with Hub Landing Pages


### 8/4/22 – deeper dive with Content
Danielle T, Dave C

- Editor group will continue to be very small, just the SWContent team
- DC: chatbot and ourselves (PW/Benefit Hubs) are first customers (fast publishing, content API)
- Node count: Target Zero impact or improvement to speed of publishing (?)
  - (Current speed is node-count dependent)
- DC quite interested/concerned about permissions, who will need to be able to make changes to each atomic piece/field

### 7/28/22 Tech background meeting with Steve Wirt (CMS team)

Focused on Facilities team's experience with hardening content model.

Every Fac page had a map page, a top task page (eg benefits description)
- Created specific content type for common page types
- Bulk generated those pages for every system, left in draft mode
- It would auto-archive old version when the new one was published
- Major challenge: broken links – links in content were to node ID, which didn’t get auto-fixed. **Watch for cross-links.**
  - If old content migrated from junk drawer node to hardened node, references to the old page broke. 
  - VAMC editor pages vs. Sitewide Content pages - may be less frequent with SWC content
- Why Fac made a new content type vs. restructuring existing:  took 4 pieces of recurring content & made them into their own types – DaveC and Kev Walsh decided that
  - Can be a Data driven decision around fields


### 7/25/22 Kickoff
Danielle Thierry (DT) + Public Websites team members (PM: Wes Rowe)

We have 2 content types: Resources & Support, and Benefit Detail pages. They are very similar. We need to understand the differences that matter between them.

Benefit Detail pages are used to manage 4 types of Benefit eligibility content right now, listed here: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/structured-content/core-benefit-content-page-templates.md 

Sitewide Content wants to codify capturing the data for those 4 types of pages, in addition to making chunks of that content reusable across various places in the site. We need to more deeply understand which chunks should be reusable and where, in order to understand if they need to be smaller component content types ( like Q&A) or what. 
 
Our team needs to also understand / decide / propose whether the Benefit Detail content type can be updated to manage the 4 page types, or whether we need separate freestanding content types to manage the 4 flavors. We should factor FE, Backend, data effort & maintenance into that thinking.
One content type = more conditional logic in the front end to manage
Multiple content types = more templates to manage / more Drupal definitions / configs to manage



