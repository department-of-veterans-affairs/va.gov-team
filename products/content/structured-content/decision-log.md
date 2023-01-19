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

### 12/21/22 Workshop
Danielle, Dave Conlon, Dave Pickett, Daniel Sasser, Wes

Document under discussion: [Excel from August](https://dvagov-my.sharepoint.com/:x:/r/personal/danielle_thierry_va_gov/Documents/Benefits%20for%20content%20modeling%20work.xlsx?d=wb36115531f894fdc87f64ba53d27576e&csf=1&web=1&e=dPAc0R), **see tab "Modeled version (DJC)"**

MVP
- For sub-benefit About pages, which are also eligibility pages, are we going to render the whole page from the CM for MVP, or just the Eligibility section? (8/19)
  - Eventually we’ll want to do the whole page
- Migration experience at high level – is editor UX added to the Benefit Detail edit screen, or are there new screens for entering Benefits and Eligibility info?
  - No decision
- Benefit category/Hub will be a one-to-many – i.e., a benefit can be associated with multiple categories/Hubs
- "Pre-requisite benefit name" (col B in excel) is not MVP.
  - Rationale: complicated, not broadly applicable, and unlikely to be leveraged by MVP consumers of the content model.
- "Main benefit recipient(s)" - this field should re-use an audiences (or similar) taxonomy, e.g., Veterans, Family members, Caregivers

Next steps:
- Transfer the excel info into Airtable, which has more database-like capabilities that are helpful to testing model
  - [Github issue for Airtable-ing](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/12058)


### Gap; had trouble prioritizing this work

### 8/22/22 mvp meeting
Danielle, Steve Wirt, PW
- We are unlikely to do any automated migration from old Hub content into content model
- Next steps:
  - Use a spreadsheet as a "draft content model" – we can iterate there, ensure content and model fit real benefits
  - Danielle has begun an [Excel listing all benefits (sharepoint)](https://dvagov-my.sharepoint.com/:x:/r/personal/danielle_thierry_va_gov/Documents/Benefits%20for%20content%20modeling%20work.xlsx?d=wb36115531f894fdc87f64ba53d27576e&csf=1&web=1&e=dPAc0R) – Wes and Florence to modify columns to relfect MVP content model hypothesis and return it to Danielle to attempt entering all ~48 benfits into the spreadsheet

### 8/17/22 Deep dive on Pattern Guide for benefit hubs
(Wes, Florence)
[Pattern guide](https://design.va.gov/patterns/benefit-applications#eligibility-hierarchy) used by Sitewide Content team to manage benefit hubs.

- Gathered examples of "blue box" eligibility content in [Mural](https://app.mural.co/invitation/mural/vagov6717/1660845137501?sender=u907f83e01e35bb04de6f8139&key=96ac157c-b924-483d-96c7-8831613a101b)

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

MVP thoughts:
- Eligibility might be the first type of page in DT's content model (link above) that we take on
  - Some benefits, especially the 9 main ones, tend to have dedicated eligibility pages
  - In others, eligibility is a blue "blobby" area with all the details
  - The eligibility content itself is not going to be hardened – it would be a blob in the CMS

Next steps:
- Build [Mural](https://app.mural.co/invitation/mural/vagov6717/1660845137501?sender=u907f83e01e35bb04de6f8139&key=96ac157c-b924-483d-96c7-8831613a101b) to look at patterns in existing Hub content
- Github issue https://github.com/department-of-veterans-affairs/va.gov-cms/issues/10242


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

Key documents that Danielle provided to get us started:
- [Core benefit content page templates](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/structured-content/core-benefit-content-page-templates.md)
- [Content structure](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/structured-content/core-benefit-content-structure.md)

