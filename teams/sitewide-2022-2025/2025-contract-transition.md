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

## Projects in flight

Project | Portfolio | Epic | Documentation | Collab Cycle, if any | Status
--- | --- | --- | --- | --- | ---
VBA Events | Facilities | [17665](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/17665) |  |  | Stories in draft
Vet Center Events | Facilities | [12926](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/12926) |  |  | Stories in draft
Mapbox Cost Savings | Facilities | [20277](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/20277) |  |  | Discovery
Banners for Vet Centers | Facilities | [19891](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/19891) |  |   | Discovery
Vet Center Outstation Locations | Facilities | [Epic](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/17693)  | [Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/vet-centers/initiatives/2024-vet-centers-2.0/initiative-brief.md) | N/A | The FE has been completed using mock data. Still need to hook up to CMS data (ticket #21049)  
Home Page News Promo Block Automation | Public Websites | [Epic](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/20292) | N/A | N/A | Daniel has expanded the implementation to use the new WP field for teasers. Today / tomorrow he will research using ECA workflow to run the nightly migration. If that does not work, the next step will be to hook up nightly migration from WP via a Jenkins action. 
Resources & Support: Tagging & Searching | Public Websites | [UX Epic](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/19495); [Main Epic](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/19492) | [Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/resources-and-support/initiatives/2024-search-experience-enhancements-Phase-1) | [Collab Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/95014) | Research conducted; readout and synthesis completed; implementation on hold until a search.gov alternative is identified. 
Contact Us Template | Facilities | [Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/initiatives/2020-fe-templates/vamc-hardening/contact-us-initiative.md) |[Epic](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/13900) | N/A | Initiative created 
 |  |  |  |   |
 |  |  |  |   |


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
