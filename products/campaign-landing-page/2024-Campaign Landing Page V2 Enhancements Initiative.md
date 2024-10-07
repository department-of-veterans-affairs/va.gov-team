# Campaign Landing Page V2 Enhancements Initiative (WIP)
#### Overview

The Campaign Landing Page MVP was launched in 2021, and a review needs to be conducted to determine whether the MVP was successful, and if not not, what next steps if any should be prioritized.
 
---

## Outcome Summary
The opportunity is to validate or disprove effectivness of the MVP Campaign Landing Page, which will provide insight into possible improvements or enhancements in order to provide the best possible experience for both our Veterans (their caregivers and other users), as well as Content Editors the best experience possible.

**Related/Associated product(s)**
- [Campaign landing page template - product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/campaign-landing-page#campaign-landing-page-template---product-outline)

## Problem
> *Describe the challenge / pain point you seek to address* 

The CLP template does not meeting all the original KPIs - especially:
- the capabilities of the CLP template (the various content components) meet the minimum needs of the business stakeholders
- the CMS functionality of the template builder is bug-free and user/author-friendly

### Evidence
* the template is underutilized - 21 CLPs have been created since 9/2021
  * 4 are still in draft, having never been published 
  * 5 have been archived
* expressed editor frustration about the inflexibility of the template
* some CLPs have been created but did not meet stakeholder requirements and were never published 
* a few highly visible CLPs have recently been delayed at the time of launch because of bugs, unexpected behavior, and/or confusion editorial UX

## Measuring Success
### Original baseline KPI Values [(from product outline)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/campaign-landing-page#baseline-kpi-values) 
ensure that all campaigns that VA creates have these minimum values for DEPO:
- the CLP is driving users to benefit pages or tools - _true_, based on data available in DOMO for 7 CLPs
  - caveat: data is not available for all CLPs and some data is aggregated as a link, rather than specific to the link
  - [data is available here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/campaign-landing-page/analytics.md)
- the CLP is forces a primary CTA (e.g., campaign KPI that's other than 'page visits' which is what most VA engagement pages/subdomains measure) - _true_
- the CLP is instrumented so that every interaction on the page is tracked whether it is the optional secondary CTA, or downloads, video plays, or clicks to more info/deeper content. -_true_

## Discovery to inform iteration 
### Use of optional segments across 11 recent CLPs
- 1 CLP incorporated the optional events segment
- 2 contained video segments but others linked to videos from other segments, such as stories
- 5 used spotlights
- 5 used stories
- 8 used FAQs
- 3 used Downloadable resources
- 5 used Connect with us

<details>
<summary> table with details </summary>

| CLP| Published date | Section | Optional features | 
| --- | --- | --- | ---|
| VA Health Connect provides the right care, right now	| intended for 9/25 | VHA Campaign Landing Pages | Video, Spotlight, Stories, FAQs | 
| VA resources for survivors of suicide loss | 09/23/2024 | VHA Campaign Landing Pages | Spotlight, Downloadable resources, Connect with us | 
| Protecting Veterans from fraud | 	09/11/2024 | VEO Campaign Landing Pages	| Stories, Downloadable resources, FAQ, Connect with us | 
| Prepare for VA’s secure sign-in changes | 08/30/2024 | Campaign Landing Pages | FAQ, Connect with us | 
| Veterans Experience Action Center (VEAC)| 	08/30/2024 | VEO Campaign Landing Pages |  Stories, FAQ |
| Veteran Trust in VA | 08/13/2024 | VEO Campaign Landing Pages | Stories, Downloadable resources, FAQ, Connect with us | 		
| Flu and COVID-19: one visit, two vaccines | 12/08/2023 | VHA Campaign Landing Pages | Connect with us | 
| End-of-Life Benefits | 12/08/2023 | VBA Campaign Landing Pages | Spotlight, FAQ |
| How Veterans Can Register to Vote | 12/08/2023 | OPIA Campaign Landing Pages	| Spotlight, Stories| 
| Sign in securely with Login.gov | 12/08/2023 | Campaign Landing Pages | Stories, FAQ | 
| Emergency room, 911, or urgent care?	| 07/13/2023 | VHA Campaign Landing Pages | Video, Spotlight, Downloadable resources, FAQ |

</details>

### Stakeholder feedback

**Hero banner panel**
- intro needs expanded character count 
- use of at least 1 CLP was not been approved by stakeholders because the segment is limited to a single CTA
- stakeholders question the need for any CTA in this segment (although [original template requirements](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/campaign-landing-page#the-template-requirements-are) are rigid with locations for primary and secondary CTAs)

**Why this matters**
- needs expanded character count to fully provide context 
- title can be perceived as insulting or presumptive - stakeholders recommend a change in title, a consideration for making it editable, or allowing editors to choose among group of titles
- feels duplicative to have both `Why this matters` and `What you can do` - editors and stakeholders would like to be able to choose to use one of the two and allow these two segments to be reordered
- Selection of audiences should not be required, should allow selection of more than 3, and list of choices needs to be expanded

**What you can do**
- "promo" name is misleading and confusing to editors
- editors need more than 3 promo boxes or the ability to add more than one of these segments
- editors need the ability to reorder segments and/or to add more than one of a given segment type 

**Connect with us panel**
- only includes four administrations (VBA, VHA, NCA or "VACO")

**Editorial workflow**
- editors need to be able to preview as they create content (possibly for an individual segment)
- editors need a way to navigate the page and move from segment to segment 
- nesting of forms within forms is confusing 
- link teasers should not always be required

**Other feedback**
- need to be able to point to PDF via CTA
- criteria for creation isn't clear and/or needs to be expanded for great use cases
- should be "VA.gov" rather than "VACO"
- access should be available at VISN level or lower
- would be good to get report of outcomes/metrics
- forcing a CTA so earlier may be a disservice - sometimes more context/content is needed before a call to action is appropriate
- may need to be less restrictive on PDFs - or make it easier to create a collection of resources (outreach hub?) and then point to it 

### Questions
- should CLPs be used to promote long-lasting/permanent content? Are they an entry point for content which is ultimately moved elsewhere (i.e., Resources and Support)?
- do CLPs trigger outdated content notifications?
- do we need two different templates for different purposes/uses/editor types?
- what is the definition of a campaign?
- could we make these auto-expire?


## Launch Planning

### Collaboration Cycle
Milestone | Date | Link to issue |
---| :---: | :---: |
| Collaboration cycle kickoff request | | |
| PO Sync | | |
| Design Intent | | |
| CMS Request| | |
| Research review| | |
| Midpoint Review| | |
| Analytics request| | |
| Contact center review| | |
| Staging review| | |
| Privacy, security, infrastructure readiness review| | |
| Architecture Intent| | |

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before

### After

---

