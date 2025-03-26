# Decision Reviews Transition Hub

**Updated 3/21/2025**

**Note:** These Transition Docs are "point in time" documents, and may not reflect current progress, deployments or upcoming efforts.

<br>

>**Team transition document**
>
> The purpose of this transition document is to outline the current state of Decision Reviews development. It serves as a "front door" to documentation and resources collected during the course of product design and development. Included are links to more specific hubs where you can find direct links to resources and references used during design and development.
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
- [Product(s) outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews)
- Product Guide/Contact Center Guide
  - [SC](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews/Supplemental-Claims/product-guides)
  - [HLR](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews/higher-level-review/product-guide)
  - [NOD](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews/Notice-of-Disagreement/product-guide)
- [Staging users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)
- [Decision Reviews Sharepoint](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/Forms/AllItems.aspx?FolderCTID=0x01200073ECFC0A16DB51439C06C6FDC0E92947&id=%2Fsites%2Fvaabdvro%2FShared%20Documents%2FDecision%20Reviews&viewid=3fa7a9bb%2D3d4e%2D44c2%2Db93f%2D629268a08e72)
- [Decision Reviews Sprint Board](https://github.com/orgs/department-of-veterans-affairs/projects/1434/views/3) 


### Product artifacts
- Page/User flow
  - [SC](https://www.figma.com/design/2LGebZcUuu5Iqh4QLPII6A/Supplemental-Claims-(VA-0995)?node-id=0-1&p=f&t=U7MHBB8Ns7JpvYCh-0)
  - [HLR](https://www.figma.com/design/OxukHeNtSkCDbdmLxD5k9A/Higher-Level-Review-(VA-0996)?node-id=0-1&p=f&t=yACv2Dpvi8j4xYxV-0)
  - [NOD](https://www.figma.com/design/BplQkEDZzD8NPPNmLrhvXv/Request-a-Board-Appeal-%2F-Notice-of-Disagreement-(VA-10182)?node-id=0-1&p=f&t=fw6AyZJPYqjFBiKf-0)
- [Decision Reviews Mural](https://app.mural.co/t/departmentofveteransaffairs9999/r/1613770853903?folderUuid=0583ef8a-a5f7-408c-a7c1-5f14311a73cf)
  



**Analytics**
- Analytics dashboard: 
     - [Domo](https://va-gov.domo.com/page/447193050). Can filter for DR forms
     - [Google Analytics: Decision Review Search](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/xIW7ShjIT_Sibfti0qGIBw)
     - [Google Analytics: Decision Review Pageviews](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/MIZEyp6aTHOWE_d124MGqg)
- [Backend DataDog Dashboards](https://github.com/orgs/department-of-veterans-affairs/projects/1434/views/3?pane=issue&itemId=100169647&issue=department-of-veterans-affairs%7Cva.gov-team%7C104242)
- Real User Monitoring (RUM) Dashboards. Useful for watching recordings of Veterans interacting with the form or pages to determine points of frustration. All PII is masked.
  - [Supplemental Claim](https://vagov.ddog-gov.com/rum/replay/search?query=%40application.id%3A2779ccc3-be87-4b2d-a757-9ff54b58761b&replay_tab=all&from_ts=1741808233730&to_ts=1742413033730&live=true)
  - [Notice of Disagreement](https://vagov.ddog-gov.com/rum/replay/search?query=%40application.id%3Acabce133-7a68-46ba-ac9b-68c57e8375eb&replay_tab=all&from_ts=1741808233730&to_ts=1742413033730&live=true)
  - [Higher-Level Review](https://vagov.ddog-gov.com/rum/replay/search?query=%40application.id%3A321995f8-5fed-4b4f-907b-e3f5ec34c28f&replay_tab=all&from_ts=1741808233730&to_ts=1742413033730&live=true)
  - [Decision Review static pages](https://vagov.ddog-gov.com/rum/replay/search?query=%40application.id%3A133801ec-0b13-4a6f-9689-bd937a1ddf27&replay_tab=all&from_ts=1741808233730&to_ts=1742413033730&live=true). Initially started to try and track Veteran interaction with static Decision Review static pages to get insight on the types of information Veterans are looking for to inform the enhanced onramp initiative, but it’s currently tracking unrelated VA.gov static pages, rendering it useless for our initial purpose.

**Engineering**

- [SC notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/engineering)
- [NOD notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Notice-of-Disagreement/engineering)
- [HLR notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/engineering)

**Design and Research**

- [Content source of truth - Figma All forms](https://www.figma.com/files/team/1278375444205744118/project/176170255?fuid=1240762209512275545)
- [Decision Reviews Mural boards](https://app.mural.co/t/departmentofveteransaffairs9999/r/1613770853903?folderUuid=0583ef8a-a5f7-408c-a7c1-5f14311a73cf)
- Research folders
  - [SC](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews/Supplemental-Claims/Research)
  - [HLR](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews/higher-level-review/research)
  - [NOD](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews/Notice-of-Disagreement/Research)
- **Latest Research:** [Decision Reviews Onramp research folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews/research/decision-reviews-onramp-2025)

**DR Team resources**

- [SC flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/supplemental-claims-flow.md)
- [NOD flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Notice-of-Disagreement/NOD_flow.md)
- [HLR flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/HLR_flow.md)
- [Accessibility documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/accessibility/readme.md)
- [Accessibility project board](https://github.com/orgs/department-of-veterans-affairs/projects/1255/views/1)


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

