# Sitewide Facilities & Public Websites - March 2025 contract transition

The Facilities & Public Websites product portfolios are comprised of a variety of products with a vast array a tech stacks for each product. This is a wayfinding document to help a new team understand what products you own, how to maintain them & keep up operations, and the roadmap of current priorities and projects in flight. 

## Table of contents
1. [Team channels](#team-channels)
2. [Strategic Priorities / Roadmap](#strategic-priorities-now-next-later)
3. [Projects in flight](d#projects-in-flight) 
4. [Product porfolio](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/sitewide/2025-contract-transition.md#product-porfolio--maintenance-documentation) & maintenance documentation, including:
    * [Facilities portfolio](#facilities-portfolio)
    * [Public Websites portfolio](#public-websites-portfolio)
    * [Monitoring docs](#monitoring)
5. [Partner team information](#partner-team-information)

## Team channels
* [#sitewide-program](https://app.slack.com/client/T03FECE8V/C03LFSPGV16) - cross-team channel that includes many members of partner teams
* [#sitewide-facilities](https://app.slack.com/client/T03FECE8V/C0FQSS30V) - comms specific to Facilities portfolio
* [#sitewide-public-websites](https://app.slack.com/client/T03FECE8V/C52CL1PKQ) - comms specific to Public Websites portfolio

Additional channels for communication with partner teams are listed below in [Partner team information](#partner-team-information).

[Team onboarding information (Sharepoint)](https://dvagov.sharepoint.com/:w:/r/sites/SitewideContract/_layouts/15/Doc.aspx?sourcedoc=%7B33C442DA-4735-4F5B-9568-93B6C05BC97E%7D&file=Sitewide%20Onboarding%20TEMPLATE.docx&action=default&mobileredirect=true) includes information on how to gain access to systems needed for contributing to Drupal, etc.

## Strategic priorities (Now, Next, Later)
Now, Next, Later roadmap by quarter is in a DSVA Slack list: [Sitewide Strategic Priorities](https://dsva.slack.com/lists/T03FECE8V/F07JG0HFHBP?view_id=View085PKFEB18)

### Projects in flight
**Q1 2025**
Project | Portfolio | Epic | Documentation | Collab Cycle, if any | Status
--- | --- | --- | --- | --- | ---
| Regional benefit office facility pages | Facilities | | [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/regional-offices/README.md) | Complete | Engineering and UX work done for MVP - still completing roll-out| 
| Facility Locator: Autosuggest Services & Progressive disclosure | Facilities | [#20276](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/20276) | [Initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/initiatives/2023-2025-search-improvements) | [#61610](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61610) | • Progressive disclosure is launched in prod<br/>• Autosuggest services is enabled in Staging; disabled behind a feature toggle in Prod.<br/>• [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/initiatives/2023-2025-search-improvements/research/services-and-progressive-disclosure) is prepped for desktop usability study<br/>• Collab cycle touchpoints for Research kickoff and Staging Review of autosuggest services will be necessary
Facility Locator Mobile map | Facilities | Epic: [#16001](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/16001)<br/>Research: [#14518](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/14518) | Same initiative brief as above | [#101492](https://github.com/department-of-veterans-affairs/va.gov-team/issues/101492) | • Mobile map is enabled in prod as of 3/31/25<br/>• 5 of 9 Mobile research sessions were conducted, [interview notes here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/initiatives/2023-2025-search-improvements/research/mobile-map)<br/>• Unit test coverage of Facility Locator needs to hit 80%, progress is documented in [#20995](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/20995)
Vet Center Outstation Locations | Facilities | [#17693](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/17693)  | [Initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/vet-centers/initiatives/2024-vet-centers-2.0/initiative-brief.md) | N/A | Initiative will convert Vet Center Outstations from being data on a Vet Center main page, to having pages of their own on VA.gov.<br/>• Drupal: changes in Prod behind a CMS feature toggle<br/>• FE: next-build template built using using mock data, in next-build PR (#[20706](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/20706)). Still need to hook up to Drupal data queries (ticket #[21049](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/21049)). Also, KB article updates/new on needs to happen; ticket [here](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/21010#issuecomment-2759314057).
Home Page News Promo Block Automation | Public Websites | [#20292](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/20292) | N/A | N/A | Updating VA.gov Hompage news section to be auto-populated by imported content from news.va.gov into Drupal.<br/>• Wordpress migration is built, using ECA in Drupal to map WP fields to Drupal homepage news promo block fields.<br/>• ECA workflow has been built to run the nightly migration. (_update: This work has been merged and is live._) 
Resources & Support: Tagging & Searching | Public Websites | UX Epic: [#19495](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/19495)<br/>Main Epic: [#19492](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/19492) | [Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/resources-and-support/initiatives/2024-search-experience-enhancements-Phase-1) | [Collab Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/95014) | • [Research readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support/research/2024-search-filters/research-report.md) <br/>• Design iteration needed based on key findings <br/>Technical build: blocked on decisions around search service to power faceting and filtering, whether Search.gov or an alternate solution (Acquia, Solr, etc)
Mapbox Cost Savings | Facilities | [#20277](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/20277) |  | N/A | One ticket remaining to stop calling Mapbox for thumbnail images on each page load, and instead develop a method to cache images in Drupal, or identify other solutions to save cost.
Content-build to Next-build template migrations | Cross-portfolio | [Board](https://github.com/orgs/department-of-veterans-affairs/projects/1464/views/1) |  [Next-build canvas](https://dsva.slack.com/docs/T03FECE8V/F07UG7EAWTE) | N/A | [Details in Strategic priority slack list](https://dsva.slack.com/archives/C07JG0HFHBP/p1743450305024439?thread_ts=1726246504.821119&cid=C07JG0HFHBP)
Duplicate GA Events Audit | Both FAC & PW | [21066](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/21066) | Audit [spreadsheet](https://dvagov.sharepoint.com/:x:/r/sites/SitewidePublicWebsites/Shared%20Documents/Analytics/Duplicate%20Events%20Audit%20-%20PW%20%26%20Facilities%20Products.xlsx?d=w14e04f67f6f147d6a774e9f774cfc153&csf=1&web=1&e=B1aQiV) | N/A | Incomplete
Google Maps Improvements | Facilities | [20934](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/20934) | | | Tickets have been created and refined


**Q2 2025**
Project | Portfolio | Epic | Documentation | Collab Cycle, if any | Status
--- | --- | --- | --- | --- | ---
VBA Events | Facilities | [#17665](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/17665) | [Initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/outreach-events/initiatives/2025-VBA-Events) (blank) |  | Will extend Outreach Events to allow VBA editors to create Events and to display Events on VBA regional benefit office pages. Stories created & ready to refine.
Vet Center Events | Facilities | [#12926](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/12926) |  |  | Will extend Outreach Events to allow Vet Center & Outstation editors to create Events and to display Events on Vet Center pages. Stories created & ready to refine.
Banners for Vet Centers | Facilities | [#19891](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/19891) |  |   | Will add Banner Alert fields to Vet Centers. Scoped & ready for story mapping
Contact Us Template | Facilities |[#13900](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/13900) | [Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/initiatives/2025-contact-us-hardening/README.md) | N/A | Will convert Contact Us VAMC pages to become a structured content type in Drupal. Initiative created. Need to incorporation findings from these two documents into the Initiative/Epic: (1) [research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/veteran%20support%20crew/Contact%20us%20page/User%20research/09-2024%20Find%20help%20on%20Contact%20us/Findings.md) from the recent "Find help on Contact us" study, and (2) [Additional Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/veteran%20support%20crew/Contact%20us%20page/User%20research/09-2024%20Find%20help%20on%20Contact%20us/Additional%20findings.md) document from the same research. Ready for UX story mapping.

## Product porfolio & maintenance documentation

Michelle Middaugh (suzanne.middaugh@va.gov) has admin access to provide additional access to the MS Teams that govern SharePoint access: 
1. [Sitewide Contract Sharepoint documents](https://dvagov.sharepoint.com/sites/SitewideContract/Shared%20Documents/Forms/AllItems.aspx)
2. [Facilities Sharepoint documents](https://dvagov.sharepoint.com/sites/SitewidePublicWebsites/Shared%20Documents/Forms/AllItems.aspx)
3. [Public Websites Sharepoint documents](https://dvagov.sharepoint.com/sites/SitewideFacilitiesTeam/Shared%20Documents/Forms/AllItems.aspx)

[Sitewide tech stacks (VA Sharepoint)](https://dvagov.sharepoint.com/:x:/r/sites/SitewideContract/Shared%20Documents/Sitewide%20product%20portfolio%20tech%20stack.xlsx?d=w32777179456a4ad1b2b8082d244fe51e&csf=1&web=1&e=VTP8Nh) - summarizes the tech stack and applications in play for each product in the combined portfolio

[CMS Product ownership (VA Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/vagov6717/1646745279937/9a5570c420939d84e875e8334fd73073e3a3971b?wid=0-1727133718954) provides a high level overview of product ownership for Facilities / PW products in relationship to the Drupal CMS.

### Facilities portfolio
[Facilities portfolio docs (Github va.gov-team/products)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities )

Broadly, this portfolio is comprised of: 
* The facility locator (https://va.gov/find-locations) - an API-driven React application
* VA Services taxonomy - A drupal-driven technical product that describes services available at VA facilities and is integrated with the Facility locator and facility pages
* Modernized facility pages for:
    * Veterans Healthcare Administration (VHA) - VA Medical Centers, VA clinics, and Mobile Clinics
        *  Largest Drupal editor base
    * Rehabilitation Counseling Services (RCS) - Vet Centers, Vet Center Satellite locations, Vet Center outstations
    * Veterans Benefit Administration (VBA) - Regional benefit offices
* Legacy "Facility locator detail pages" for facilities that do not yet offer modernized pages, such as: National Cemetery Association (NCA) cemetery locations, and VBA Regional Offices that have not yet completed content entry / publishing for modernized pages

### Public Websites portfolio 
[Public Websites portfolio docs (Github va.gov-team/products)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/public-websites) 
Broadly, Public Websites is the software development team supporting the VA's Content/IA team, who drive portfolio priorities in partnership with our PO. Products include: 
* VA.gov homepage (P1)
* Form finder (https://va.gov/find-forms) -  (P1)
* On-site search in the header -  (P1)
* Benefits content
* Resources & Support content
* VA.gov header & footer Design support and injection into TeamSites via proxy-rewrite React application
* A variety of other smaller tools, widgets, wizards, and content resourecs, described in the link above.

P1 products in this portfolio will receive attention from the DSVA watch officer in case of outages, and require timely response to any operational issues.

### Monitoring
Each portfolio doc linked above includes monitoring documentation within the `[product]/engineering/monitoring.md` path for the product. 

[DSVA Slack #sitewide-program channel canvas](https://dsva.slack.com/canvas/C03LFSPGV16) contains topline on monitoring channels, Datadog information, and escalation response 


## Partner team information
Sitewide products span several repositories where we are contributors and not owners. 
The [Repo relationship map (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1723134921510/3622bf7305d3e10698094aa13525f36617c472d7?sender=u0b235d03cbd64f7f93673243) includes high level information about how these systems connect, and interact in Prod & lower environments. Sitewide is uniquely positioned to build & test features that span Drupal, vets-api, content-build, and vets-website, and VA's lower environment & test infrastructure has gaps that complicate this expanse of testing -- the Mural will help you know what is and isn't possible.

### Drupal CMS
Owners: CMS Platform team, [#sitewide-cms-platform](https://app.slack.com/client/T03FECE8V/CT4GZBM8F)

VA PO: Erika Washburn

PM: Grace Kretschmer Tran

#### CMS Helpdesk
Helpdesk staff on the CMS contract/team interface directly with Editors who create and manage content for modernized Facility pages where the technical product is owned by the Facilities team. 
[#facilities-support](https://app.slack.com/client/T03FECE8V/C02730UEZPS) - use `@cms-helpdesk` alias to reach all Helpdesk staff

The Facilities Team is responsible for ensuring that VA.gov presents the latest correct data available about a Facility. 
The Drupal CMS Helpdesk is responsible for communicating with Editors about changed Facilities, where relevant.

The [Flagged Facilities process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/flagged-facilities.md) is a joint agreement of how to manage this process between the two teams.

### Lighthouse
Lighthouse is VA's external-facing enterprise-stable API solution. 

We work with 2 separate Lighthouse API teams, both of whom are transitioning contracts as of 3/31/2025 as well. VA POs will need to establish comms with the incoming contract teams: 

**Lighthouse Facilities API**
- [#cms-lighthouse](https://app.slack.com/client/T03FECE8V/C02BTJTDFTN) - Communication channel with Lighthouse Facilities API team

**Lighthouse Forms API**
- [#va-forms](https://app.slack.com/client/T03FECE8V/CUB5X5MGF) - Communication channel with Lighthouse Forms API team

### Content-build / Next-build
Also owned by the CMS team. Points of contact = Laura Flannery (acting project manager), and Chris Valarida (Technical POC).

These systems provide the templating layer for Drupal content, aka "the backend of the front-end."

Content-build is the legacy system slowly being replaced by next-build. 

### Vets-website
Repository that manages React applications on VA.gov, which includes several Public Websites / Facilities apps, and includes deploy and CI/CD process. 

Owners: Platform FE, [#platform-cop-frontend](https://app.slack.com/client/T03FECE8V/C04868KS69L)

Daily deploy will be disabled in Q2 2025 in favor of CI/CD. Apps owned by Sitewide (articulated in [Sitewide tech stacks (VA Sharepoint)](https://dvagov.sharepoint.com/:x:/r/sites/SitewideContract/Shared%20Documents/Sitewide%20product%20portfolio%20tech%20stack.xlsx?d=w32777179456a4ad1b2b8082d244fe51e&csf=1&web=1&e=VTP8Nh)) will require a technical approver to sign off on production deploys. Message Curt Bonade on the FE Platform team to have your reviewers added to the [fe-deployment-approval-team](https://github.com/orgs/department-of-veterans-affairs/teams/fe-deployment-approval-team/members), to help manage deploys. Deploy notices are posted to [#status-vets-website](https://app.slack.com/client/T03FECE8V/C02V265VCGH)

### Vets-api
Repository / deploy and CI/CD process for the Ruby on rails vets-api, which includes API services that power several products in our portfolio including the Facility locator, On-site search, Find forms, among others. 

Owners: Platform BE, [#platform-cop-backend](https://app.slack.com/client/T03FECE8V/C0460N83Y9G)

### Redirects
We own ensuring no dead links to content in our portfolios, which means creating redirects for content at times, in partnership with the Content/IA team. 

[Redirect implementation strategies](https://depo-platform-documentation.scrollhelp.site/developer-docs/redirect-implementation-strategies) provides more context on the variety of types of redirect you may be asked to manage.

IA owners: Content/IA, Mikki Northuis is primary IA POC, [#content-ia-centralized-team](https://app.slack.com/client/T03FECE8V/C01K37HRUAH)

Technical Owners of revproxy 301 server-side redirects: Platform Devops, [#platform-cop-devops](https://app.slack.com/client/T03FECE8V/C04CYC4LMU6)

Technical Owners of [Injected header](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/header-footer/injected-header) / proxy-rewrite client-side redirects: Public Websites (us!) 
