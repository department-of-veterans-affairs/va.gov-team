# Decision Reviews Transition Hub

**Updated 3/19/2025**

**Note:** These Transition Docs are "point in time" documents, and may not reflect current progress, deployments or upcoming efforts.

<br>

>**Team transition document | TBD**
>
> The purpose of this transition document is to outline the current state of Decision Reviews development. It serves as a "front door" to documentation and resources collected during the course of product design and development. Included are links to more specific transition hubs where you can find direct links to resources and references used during design and development.
> 

<br>

## Table of Contents
[Product context, portfolio, and artifacts](#product-context)

[Roadmap](#roadmap)

[Features and initiatives we worked on](#Features-and-initiatives-we-worked-on)



<br>

## Product context 

The Decision Reviews forms on VA.gov serve as the avenue for Veterans to formally disagree with a VA benefit or claim decision. Veterans can choose between 3 decision review options, (Supplemental Claims, Higher-level Review, or Board Appeal). If for any reason a Veteran is not satisfied with the results of the first option they choose, they can try another one of the options. 
<br>

### Product portfolio
**VA.gov Decision Reviews**
- [Staging link](https://staging.va.gov/decision-reviews/)
- [Product folder]
- [Product outline]
- [Product Guide/Contact Center Guide]
- [Things to know]
- [Stakeholder Meeting Notes]
- [PM Resources folder]


<br>

### Product artifacts
- [Content source of truth]
- [Page/User flow]
- [Figma file]
- [Staging users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)
- [Other form info]

**Analytics**
- Analytics dashboard: 
     - [Domo] 
     - [Google Analytics]
- [Backend DataDog Dashboards](https://github.com/orgs/department-of-veterans-affairs/projects/1434/views/3?pane=issue&itemId=100169647&issue=department-of-veterans-affairs%7Cva.gov-team%7C104242)
- Real User Monitoring (RUM) Dashboards. Useful for watching recordings of Veterans interacting with the form or pages to determine points of frustration. All PII is masked.
  - [Supplemental Claim](https://vagov.ddog-gov.com/rum/replay/search?query=%40application.id%3A2779ccc3-be87-4b2d-a757-9ff54b58761b&replay_tab=all&from_ts=1741808233730&to_ts=1742413033730&live=true)
  - [Notice of Disagreement](https://vagov.ddog-gov.com/rum/replay/search?query=%40application.id%3Acabce133-7a68-46ba-ac9b-68c57e8375eb&replay_tab=all&from_ts=1741808233730&to_ts=1742413033730&live=true)
  - [Higher-Level Review](https://vagov.ddog-gov.com/rum/replay/search?query=%40application.id%3A321995f8-5fed-4b4f-907b-e3f5ec34c28f&replay_tab=all&from_ts=1741808233730&to_ts=1742413033730&live=true)
  - [Decision Review static pages](https://vagov.ddog-gov.com/rum/replay/search?query=%40application.id%3A133801ec-0b13-4a6f-9689-bd937a1ddf27&replay_tab=all&from_ts=1741808233730&to_ts=1742413033730&live=true).

**Engineering**

- [SC notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/engineering)
- [NOD notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Notice-of-Disagreement/engineering)
- [HLR notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/engineering)

**Latest discovery research**

**DR Team resources**

- [SC flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/supplemental-claims-flow.md)
- [NOD flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Notice-of-Disagreement/NOD_flow.md)
- [HLR flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/HLR_flow.md)


# Roadmap

**Now**
- Update Supplemental Claim form with new fields to match paper form, and update some fields.
  
**Next**
- Improve Veterans' clarity on decision review pathways with enhanced DR onramp
- Provide Veterans with post submission status on MyVA Dashboard or CST
- Upload failure emails to Veteran eFolders
  
**Future**
- Digital support for new CUE decision review form
- Downloadable copy of submission
- Display Veteran information on previously contested claims
- SC/HLR expansion beyond disability compensation
 


## Features and initiatives we worked on
- INsert here

| Feature/Enhancement (Github link)| Status |
| :--- | :--- |
| [Customized confirmation page](https://github.com/orgs/department-of-veterans-affairs/projects/1434/views/5?filterQuery=confirmation+page)| Design/Dev completed and Implemented on all forms |
| [Rails Engine implementation](https://github.com/orgs/department-of-veterans-affairs/projects/1434/views/5?filterQuery=engine) | 95% completed |
| [Tracking of VA notifications](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94148) | Dev completed and Implemented|
| [Tracking of form submissions (including 4142) for ZSF](https://github.com/department-of-veterans-affairs/va.gov-team/issues/95001)| Dev completed and Implemented|
| [Failure notifications to Veterans](https://github.com/orgs/department-of-veterans-affairs/projects/1434/views/5?filterQuery=failure+email&pane=issue&itemId=82258636&issue=department-of-veterans-affairs%7Cva.gov-team%7C84372) | Design/Dev completed and Implemented |
| [In progress form redirect](https://github.com/department-of-veterans-affairs/va.gov-team/issues/101571) | Design/Dev completed and Implemented|
| [Enhanced DR onramp](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Enhanced-DR-Onramp-Initiative%20Brief.md) | In design of 1st prioritized solution |
| Failure emails in e-Folders | Investigation underway |
| [VA Notify Callback Integration](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105199) |Investigation underway|


## Our team 2025 roster

- Maurice DeBeary | maurice.debeary@va.gov / maurice@coforma.io - Product manager
- Shaun Burdick | shaun.burdick@va.gov / shaun.burdick@coforma.io - Tech Lead
- Robin Garrison | robin.garrison@va.gov / robin.garrison@adhocteam.us - Front End Engineer
- Molly Trombley-McCann | molly.trombley-mccann@va.gov / molly.trombley-mccann@coforma.io - Back End Engineer
- Derek Fong | derek.fong@va.gov / derek.fong@adhocteam.us - Back End Engineer
- David Kennedy | david.kennedy7@va.gov / david.kennedy@adhocteam.us - Accessibility Lead
- Skyler Scain | skyler.schain@va.gov / skyler@coforma.io - Design Lead
- Eileen Chi | eileen.chi@va.gov / eileen.chi@coforma.io - Sr. UX Designer
- Silke Dannemann | silke.dannemann@va.gov / silke.dannemann@coforma.io - Delivery Lead

## VA enablement team

- Amy Lai | amy.lai2@va.gov - Product Owner
- Julie Strothman | julie.strothman@va.gov - Design & Research Lead
- Cory Sohrakoff | cory.sohrakoff@va.gov - Engineering Lead

<br>

### Recurring stakeholder meetings
- Product Huddle biweekly Thursdays 2:30pm Est
- Sprint review biweekly Wednesdays 3pm Est
- DR/LH sync weekly Tuesdays 4pm Est

### Contract End
Current DR (Benefits Tools crew) contract ends 3/31

<br>

---

