# Public Websites Portfolio

## PW Contact
Last Updated 11/14/2025: Public Websites products are currently maintained by the [Sitewide Public Websites team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/sitewide/public-websites). 
(Previously by [VSA Public Websites](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/public-websites).)

VA Product Owner = Randi Hecht 

### Intake
If you need help with a product listed below, file a [Public websites intake ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=jilladams%2CFranECross&labels=Public+Websites%2CNeeds+refining&projects=&template=public-websites-intake.yml&title=PW+intake%3A+%3CType+of+Request%3E+from+%3CTeam%3E) and post the link to the team's slack channel, listed below. 

All requests will be refined and planned according to other team priorities, so please make us aware of your timing requirements as soon as you're able, for urgent requests.

### Slack
- [#sitewide-public-websites](https://dsva.slack.com/channels/sitewide-public-websites)

### Github / work tracking
- [va.gov-cms Sprint board](https://github.com/orgs/department-of-veterans-affairs/projects/1442/views/1) (in Github Projects, VA.gov Public Websites and Facilities Product team must be added (in the right panel, under Projects).
- Team labels: `Public Websites`. `sitewide`

### Monitoring
[Public Websites Datadog monitoring dashboard](https://vagov.ddog-gov.com/dashboard/szu-xny-9fu/public-websites-dashboard?refresh_mode=sliding&from_ts=1698247139212&to_ts=1698250739212&live=true)
Monitors for each product are described within product folders. e.g. 
* [Find a Form](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/engineering/monitoring.md)
* [Injected Header/Footer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/header-footer/engineering/monitoring.md)
* [VA.gov homepage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/engineering/monitoring.md)
* [VA.gov search](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/engineering/monitoring.md)

# Products we support

[Sitewide Public Websites purview mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/vagov6717/1646745279937/9a5570c420939d84e875e8334fd73073e3a3971b?wid=34-1727133718954)

## 

| [CMS content / functionality](#cms-content--functionality) | [Non-CMS content / products](#non-cms-content--products) | [Previous PW Projects](#previous-pw-projects) / No longer supported |
| ------------- | ------------- | ------------- |
| [Benefits Hub Landing Page](#benefits-hub-landing-page) | [Discharge upgrade wizard](#discharge-upgrade-wizard) | [Appeal Modernization Process](#appeal-modernization-process) |
| [Benefits Detail Page](#benefits-detail-page) |  [Header / footer injection](#header--footer-injection) | [Disability rating calculator](#disability-rating-calculator) |
| [Campaign Landing Pages](#campaign-landing-pages-clp) | [Income limits web application](#income-limits-web-application) | [Downtime messaging](#downtime-messaging) |
| [Events](#events) | [Sitewide Content Redirects](#sitewide-content-redirects) | [Harassment Reporting Tool](#harassment-reporting-tool) |
| [FAQ Page](#faq-page) | [PACT Act Wizard](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/pact-act-wizard) (Never released/only on Staging) | [“How to apply” wizards](#how-to-apply--benefit-wizards)  |
| [Find a form / VA Forms (+ Forms DB import)](#find-a-form--va-forms) | [Translation React widgets](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/README.md#translation-react-widgets) | [React widgets use within CMS](#react-widgets-use-within-cms) |
| [Full-width Alert](#full-width-alert) |[Translation React widgets](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/README.md#translation-react-widgets)  | [BTSSS react widget](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/travel-reimbursement-btsss) |
| [VA.gov Homepage](#vagov-homepage) | . | [Promo Banner](#promo-banner) | 
| [Outreach Materials Library (Publication listing & page)](#outreach-materials-library-publication-listing-page--publications) | . | . |
| [Resources & Support](#resources-and-support) |  . | . |
| [Reusable Q&A](#reusable-qa) | . | .  |
| [Support Services](#resources-and-support) | . | .  |
| [VA Benefits taxonomy](#va-benefits-taxonomy) | | 
| - | - | On-site Search |
| - | - | Global Header and footer |
| - | - | [Event - Currently published Events](https://prod.cms.va.gov/admin/content??title=&type=event&moderation_state=published&owner=All) |
| - | - | [Events listings](https://www.va.gov/outreach-and-events/events) |


The Public Websites team also supports most of the portfolio of the previous Decision Tools and Search & Discovery Team products, which may include products not listed here that we are not yet aware of. 

### COPY/PASTABLE product list
<details><summary>List in accordion. Please update with any product ownership changes</summary>
    
### P1 Products
- [ ] VA.gov homepage
- [ ] Header / footer injection - https://benefits.va.gov
- [ ] Find a Form - https://www.va.gov/find-forms/
- [ ] Form detail page - e.g. https://www.va.gov/find-forms/about-form-21p-534/
- [ ] Breadcrumbs on PW products

### CMS / Content driven products: 
- [ ] Benefits Detail Page - e.g. https://www.va.gov/health-care/
- [ ] Benefits Hub Landing Page - e.g. https://www.va.gov/health-care/about-va-health-benefits/
- [ ] Campaign Landing Page - Currently published CLPs: https://prod.cms.va.gov/admin/content?title=&type=campaign_landing_page&moderation_state=published&owner=All
- Resources & Support content types
    - [ ] FAQ page - CMS examples: https://prod.cms.va.gov/admin/content?title=&type=faq_multiple_q_a&moderation_state=published&owner=All
    - [ ] Resources and Support Detail Page - CMS examples: https://prod.cms.va.gov/admin/content?title=&type=support_resources_detail_page&moderation_state=published&owner=All
    - [ ] Reusable Q&A - CMS examples: https://prod.cms.va.gov/admin/content?title=&type=q_a&moderation_state=published&owner=All
    - [ ] Checklist
    - [ ] Video list
    - [ ] Image list
    - [ ] Step-by-step
    - [ ] Checklist
    - [ ] Support Services
- [ ] Full width alert - [Currently published examples](https://prod.cms.va.gov/admin/content?title=&type=banner&moderation_state=published&owner=All)
- [ ] Promo banner - [Currently published examples](https://prod.cms.va.gov/admin/content?title=&type=promo_banner&moderation_state=published&owner=All)
- [ ] News block - (Currently published example: https://www.va.gov/ (the VA News block half-way down the page)
- [ ] Outreach Hub (Until deprecation) - https://www.va.gov/outreach-and-events/outreach-materials/
- [ ] Translations widget - e.g. https://www.va.gov/family-member-benefits/comprehensive-assistance-for-family-caregivers-esp/
- [ ] VA Benefits taxonomy - (Drupal only) - https://prod.cms.va.gov/admin/structure/taxonomy/manage/va_benefits_taxonomy/overview

### React Applications: 
- [ ] Discharge upgrade wizard - https://www.va.gov/discharge-upgrade-instructions/
- [ ] Income Limits app - https://www.va.gov/health-care/income-limits/introduction
- [ ] PACT Act app - Not released to Prod - mothballed (12/24): https://staging.va.gov/pact-act-eligibility/introduction
  
</details>

## Changelog
* 8/15/2025: Responsibility for On-site search is moving to the Unifed Search team (Megan Siddle - PM current as of 2025-11-14)
* 5/15/2025: The Promo banner has been deprecated from the design system because of accessibility defects and low use: see [#4142](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4142)
* 1/14/2025: Identity team now owns the central vets-website cta-widget application. The MHV Cartography team may have a stake in the content / behavior of the  6 CTA widget invocations that are present on VAMC pages.
* 09/23/2024: Design System Team now owns the global Header and footer markup: https://dsva.slack.com/archives/C52CL1PKQ/p1727120068414909
* 07/2024: Design System team now owns the Veterans Crisis Line modal as a component: https://dsva.slack.com/archives/C06V7AAFVH7/p1721850350022329?thread_ts=1720203529.734199&cid=C06V7AAFVH7
* [Transition of Decision Tools Products to Search & Discovery Team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/5e0f4d3c470ed2f32290ff1a6e2cc7c2c97f7847/teams/vsa/teams/decision-tools/transition.md) - previous doc of tools that were moved from Decision Tools > Search & Discovery and are now under Public Websites purview
* 11/2023: [Breadcrumbs](#breadcrumbs) - Transitioned to CMS team as of Q4 2024, as a result of Accelerated Publishing work to manage Breadcrumbs for CMS-related content fully within the CMS
* 11/2023: [Shadow / dark launches of content](#shadow--dark-launches-of-content) - Transitioned to CMS team for long term ownership. Docs will be removed from this page, TBD a new future home for CMS product docs.
* 11/2023: [Yellow-ribbon tool](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-yellow-ribbon-school/README.md) moved to new IIR team. 


---

# CMS content / functionality

## Benefits Hub Landing Page

**What is:**

Veterans are eligible for a variety of Benefits, e.g. healthcare, education, pension, burial, etc.  This Drupal content type holds overview content for each benefit, and links to drill down into specifics for applying for / managing that benefit.
* **Product docs:** [products/content/benefit-hubs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/benefit-hubs)
* **Primary stakeholder(s):** Sitewide Content team owns the content and drives feature priorities.

**Example content:**
* URL: https://www.va.gov/health-care/
* CMS: https://staging.cms.va.gov/health-care

Benefits hubs / detail pages in the VA.gov header (aka the “mega-menu”)
![Picture1](https://user-images.githubusercontent.com/85581471/186540988-fc46119c-5510-4817-8a45-92147803d535.png)

**More info:**
* [VFS Product Directory: Benefits Hubs](https://depo-platform-documentation.scrollhelp.site/getting-started/benefits-hubs)


## Benefits Detail Page 

**What is:**

Page that contains detail about each Benefit, linked primarily from Benefit Hubs, e.g. how to apply, managing your benefit, or benefit-specific details. 

The content model is flexible to accommodate various types of content, using Drupal’s “paragraph” functionality, which allows insertion of accordion groups, link lists, alerts, process lists, Q&A (separate from Q&A node concept), images, etc. 
* **Product docs:** [products/content/benefit-hubs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/benefit-hubs)
* **Primary stakeholder(s):** Sitewide Content team owns the content and drives feature priorities.

**Example content:**
* URL: [https://www.va.gov/health-care/about-va-health-benefits/](https://www.va.gov/health-care/about-va-health-benefits/) 
* CMS: [https://staging.cms.va.gov/health-care/about-va-health-benefits](https://staging.cms.va.gov/health-care/about-va-health-benefits) 

**More info:**

* **Q3 2022 project:** to harden the content model: [https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9628](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9628) 


## Campaign Landing Pages (CLP)

**What is:**

[Product brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/campaign-landing-page)

The Campaign Landing Page (CLP) is a flexible Drupal content type which enables VA businesses to create, launch and manage modern, mobile-responsive, accessibility-optimized campaign landing pages to promote marketing or engagement content.

Campaign Landing Pages are intended to prevent creation of standalone marketing sites, and to create a rich experience for topics that are not otherwise Veterans benefit / facility related content.

* **Product docs:** [products/campaign-landing-page](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/campaign-landing-page)
* **Primary stakeholder(s):** Leadership from any VA administration may have need to create CLPs to advertise important programs, including:
  * VEO
  * Sitewide Content team
  * VHA
* [Runbook to create a clp](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/campaign-landing-page#runbook-for-clp-creation)

**Example content:**
* URL: [https://www.va.gov/initiatives/vote/](https://www.va.gov/initiatives/vote/) 
* CMS: [https://staging.cms.va.gov/initiatives/vote](https://staging.cms.va.gov/initiatives/vote) 
* Example issue: [[Campaign Landing Page] - VA VOTE #37773](https://github.com/department-of-veterans-affairs/va.gov-team/issues/37773) 

**Governance / Editor guidance:**
* Governance: [VA.gov.Campaign.Landing.Page_Governance_Product_Guide_01Mar2022.pptx](https://docs.google.com/presentation/d/1y7FnBuaOrbfR_Bap0zAhMceVO8jlEeX9/edit#slide=id.p1) 
* Primary editors: Team that originates the request, with authorization from PO and URL guidance from Sitewide Content
* Related KBs:
    * [Editor guidance: How to edit and maintain a Campaign Landing Page](https://prod.cms.va.gov/help/campaign-landing-pages/how-to-manage-campaign-landing-pages) 


**More info:**
* [Product launch docs: tier 2 content IA & Design > Campaign Landing Page Templates - Github](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates/VA.gov.Campaign.Landing.Page_Governance_Product_Guide_11302021.pptx) 
* [VFS Product Directory: Campaign Landing Page](https://depo-platform-documentation.scrollhelp.site/getting-started/campaign-landing-page)


## Events 

**What is:**

VA facilities and Outreach teams host a variety of events that Veterans and Caregivers can attend. The Events product manages that event information, including recurring events, and registration and location information. Events in VA.gov do not include functionality for managing sign-ups, but can contain links or contact information so that local event hosts manage the actual participant registration. 

Every VAMC System on VA.gov has an Events page for events hosted by / at facilities in that system, and the VEO office manages the [Outreach Events](https://www.va.gov/outreach-and-events/events/) calendar.

**More info:**
* **Product docs:** [products/outreach-events](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/outreach-events)
* [SUPEREPIC: Events maintenance & support #9438](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9438) 
* [VFS Product Directory: Outreach Events Hub & Calendar](https://depo-platform-documentation.scrollhelp.site/getting-started/outreach-events-hub-and-calendar)

### Event Listings

Events Listings provide the main Events page per VAMC System and for Outreach Events. Event Listings display a chronological list of Events published to that listing. Events filters are available on Event Listings, to filter by past, future, or specific date(s). 

In Drupal, every VAMC has an Event listing, and VEO has the Outreach event listing. Events / lists may only be managed by editors with permissions for that specific VAMC facility or office (aka “Section").

### Event Detail page

Event detail pages are created in Drupal, associated with an Events list where they will appear on VA.gov. 

Events may be single or recurring, and are either: 
* At a VA facility
* At a non-VA location
* Online


### Example content 

**Outreach & Events hub** - The national VEO outreach events calendar. (VAMC editors may publish local events to this calendar via a checkbox on the Event form.)
* Event listing: [https://www.va.gov/outreach-and-events/events/](https://www.va.gov/outreach-and-events/events/)
* Event listing CMS: [https://staging.cms.va.gov/outreach-and-events/events](https://staging.cms.va.gov/outreach-and-events/events) 
* Event detail page: [https://www.va.gov/outreach-and-events/events/48074/](https://www.va.gov/outreach-and-events/events/48074/)
* Event detail page CMS: [https://staging.cms.va.gov/outreach-and-events/events/48074](https://staging.cms.va.gov/outreach-and-events/events/48074) 
* Primary editors: VEO (Veteran Experience Office) editors

**VAMC Events** - Every VAMC System has an Events page
* Event listing: [https://www.va.gov/minneapolis-health-care/events/](https://www.va.gov/minneapolis-health-care/events/) 
* Event listing CMS: [https://staging.cms.va.gov/minneapolis-health-care/events](https://staging.cms.va.gov/minneapolis-health-care/events) 
* Event detail page: [https://www.va.gov/minneapolis-health-care/events/47981/](https://www.va.gov/minneapolis-health-care/events/47981/) (recurring)
* Event detail page CMS: [https://staging.cms.va.gov/minneapolis-health-care/events/47981](https://staging.cms.va.gov/minneapolis-health-care/events/47981)
* Primary editors:  Editors with Section permissions to that VAMC System can create / maintain events

**Related KBs**
* [How to edit an Events list](https://prod.cms.va.gov/help/va-medical-centers-vamcs/about-events-content-for-vamcs/how-to-edit-an-events-list)
* [How to edit an event](https://prod.cms.va.gov/help/cms-basics/how-to-edit-an-event)
* [About Events content - for VAMCs](https://prod.cms.va.gov/help/vamc/about-events-content-for-vamcs)

**More info:**
* [Engineering documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/outreach-events/engineering)


## Find a form / VA Forms

**What is:**

Forms are a critical part of the Veteran experience for applying for benefits & services. A Forms database is managed outside the context of Public Websites team or the Drupal CMS, and is the source of truth for Form data and PDFs. We import data from the Forms DB, and store data about each form as a node.

Forms are then findable from the “[Find a form](https://www.va.gov/find-forms/)” interface – a search / listing of VA Forms results.

* **Product & engineering docs:** [products/find-a-va-form](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-a-va-form)
* [Topic Dive overview of the Forms product](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/sitewide/topic-dives/README.md#71024---find-a-form), end to end

**Example content:**
* Find a Form: [https://www.va.gov/find-forms/](https://www.va.gov/find-forms/) 
* Example Form URL: [https://va.gov/find-forms/about-form-10-0388-4](https://va.gov/find-forms/about-form-10-0388-4)   
* CMS VA Form node: [https://staging.cms.va.gov/node/6150/edit](https://staging.cms.va.gov/node/6150/edit)

**More info:**
* [Triage runbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/README.md#troubleshooting) for errors / defects
* [Engineering information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-a-va-form/engineering) including data diagrams, architecture information


## Announcement Framework

**What is:**

Announcements are reusable components that give a common way to make full page announcements on VA.gov.  They are designed to be configurable site-wide without messing with the source code of other applications or digging into Metalsmith layout files to conditionally render.

<img width="1167" alt="image" src="https://user-images.githubusercontent.com/61624970/218570338-9e1728ce-db6b-4639-aa4c-926225f4db42.png">

Using a shared format and config file, developers are able to quickly create new announcements and easily implement rules for when and on what pages they should be displayed.  The config file is located in vets-website at `src/platform/site-wide/announcements/config/index.js` and an example config looks like this:

```
announcements: [
  {
    name: 'new-homepage',
    // Homepage only
    paths: /^\/$/,
    component: HomepageRedesignModal,
    disabled: false,
    show: AnnouncementBehavior.SHOW_ONCE_PER_SESSION,
    returnFocusDivContent: 'Current Homepage',
  },
],
```

New announcement components should be built in the announcements components directory (`src/platform/site-wide/announcements/components`), although the announcement framework allows any React component in vets-website to be used.

The `announcement` property in the rendered component will contain the announcement as stored in the config, so in this case `announcement.name` will render `New Education Feature`.

The `show` property can be set to one of 3 values defined in the AnnouncementBehavior enum constant, which are SHOW_ONCE, SHOW_EVERY_TIME and SHOW_ONCE_PER_SESSION. The SHOW_ONCE option persists to `localStorage`, the SHOW_ONCE_PER_SESSION persists to the `sessionStorage` and the SHOW_EVERY_TIME does not persist dismissal at all.

**Architecture:**

The Announcement entry point uses React to bind to an element inside an announcement-root div at the top of the page body.  It renders an empty div in its place when there is no announcement to show.  Placing the Announcement div at the top of the html body allows focus to be directed to the skip-link element of the page on modal close, allowing for an accessible user experience.


## Full-width Alert

**What is:**

Full-width alerts are banners that appear just below the header on VA.gov. They're used for high visibility safety, weather, or program purposes. 

* **Product documentation**: [products/full-width-alert/](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/full-width-alert/)

**Example content:**
* [CMS](https://prod.cms.va.gov/admin/content?title=&type=banner&moderation_state=All&owner=All)

**Governance / Editor guidance:**
* Primary editors: Sitewide Content team

**Related KBs**
* [How to create a Full-width Alert Banner](https://prod.cms.va.gov/node/34828)

**More info:**
* [Banner component](https://design.va.gov/components/banner) : va.gov design system - describes usage / positioning
* Content team history for banners: [products/content/banners/banner-alerts.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/banners/banner-alerts.md)
* [Bigger picture of all possible things called banner or alert](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/banners/README.md)


## Promo Banner

**What is:**

A promo banner is fixed content at the bottom of the viewport used for dismissible announcements such as new tools, news, etc.

Currently, www.va.gov supports three types of promo banners:
1. **Benefit announcements**, which relate to content focused on benefits: a new tool, a new online benefit application, etc.
2. **Email signups**, which relate to email signups for various VA updates / alerts / communications.
3. **News stories**, which relate to newly received or noteworthy information about the VA.

You can read more about these promo types in the [VA Design System](https://design.va.gov/components/banner/promo) or read more about Promo Banners in the [Promo Banners Knowledge Base](https://prod.cms.va.gov/node/39828).

**Example content:**
* [CMS](https://prod.cms.va.gov/admin/content?title=&type=promo_banner&moderation_state=All&owner=All)

**Governance / Editor guidance:**
* Primary editors: Sitewide Content team

**More info:**
* [Promo banner component](https://design.va.gov/components/banner/promo): va.gov design system
* [Bigger picture of all possible things called banner or alert](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/banners/README.md)


## Outreach Materials (Publication Listing Page) / Publications

**What is:**

Currently there is one Publication Listing Page, [Outreach Materials](https://www.va.gov/outreach-and-events/outreach-materials/), where all Publications appear.
Not modified since launch in ~2018.

As of Aug 2023, there is intent to deprecate Outreach Materials: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/14835. A new product is being built by OPIA / VEO platform (tentative name: Discover). When that product launches, O&M Library might be removed.

**Example content:**
* URL: [https://www.va.gov/outreach-and-events/outreach-materials/](https://www.va.gov/outreach-and-events/outreach-materials/) 
* CMS: [https://staging.cms.va.gov/node/412/edit](https://staging.cms.va.gov/node/412/edit) 

**Governance / Editor guidance:**
* Primary editors: Sitewide Content team

## Resources and support
Resources & Support is a broad category of content managed by the Sitewide Content team. R&S content on VA.gov all appear within the https://www.va.gov/resources/ area of the site, and use the `/resources` path. However, within Drupal, content in this area can be created using multiple different content types, including (in order of usage): 
* FAQ
* Resources & Support Detail pages
* Reusable Q&A
* Support service
* Checklist - 12/24: 2 published in production
* Image list - 12/24: none published in production
* Media list - 12/24: none published in production

**Product documentaiton**
* [Resources & Support Product Brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/resources-and-support)

Sitewide Content has a goal / charter to "Create Once, Publish Everywhere" (aka COPE), to make it easier to maintain single-source-of-truth content. Any product changes made to Sitewide Content products should be mindful of COPE goals. This means that as frequently as possible, Sitewide supports Content efforts to use a single piece of content in multiple places throughout Drupal or the front-end. You can see evidence of efforts like this where a Single Q&A can be used on an FAQ page, or have its own page, or be associated with other content types. 
* [COPE CMS FAQ library](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/cope-cms-faq-library/product-outline.md) product outline that drove FAQ adaptation for COPE goals
* COPE effort to make Q&A reusable on [Resources & Support](#resources-and-support-detail-page) = [https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8630](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8630) 

**Governance / Editor guidance:**
* Primary editors: Sitewide Content team, for all of those listed content types
  * Sitewide Content has a goal to open up R&S content creation to more types of Editors, long-term. [Sitewide content Problem brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/resources-and-support-author-pilot/problem-brief.md), [Public Websites initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support/initiatives/2022-01-outside-submissions/initiative-brief.md)

### FAQ page

**What is:**

A Drupal content type that is used to aggregate [Q&A nodes](#qa---single). 

**Example content:**
* URL: [https://va.gov/resources/signing-in-to-vagov](https://va.gov/resources/signing-in-to-vagov) 
* CMS: [https://staging.cms.va.gov/resources/signing-in-to-vagov](https://staging.cms.va.gov/resources/signing-in-to-vagov) 

### Resources and support Detail Page

**What is:**

A page that contains in-depth information about a single resource available to Veterans or other beneficiaries. Formerly called Learning Centers.

**Example content:**
* URL: [https://va.gov/resources/choosing-between-urgent-and-emergency-care](https://va.gov/resources/choosing-between-urgent-and-emergency-care) 
* CMS: [https://staging.cms.va.gov/node/37196/edit](https://staging.cms.va.gov/node/37196/edit) 

**Governance / Editor guidance:**
* Primary editors: Sitewide Content team, for now. 

**More info:**
* [Resources and Support product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support)
  * [Original learnning center product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/product-outline.md)
* [2022 Sitewide Content research project](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/resources-and-support-author-pilot) around clarity of this content and how Editors in other areas might have challenges / need support
* [VFS Product Directory: Resources & Support](https://depo-platform-documentation.scrollhelp.site/getting-started/resources-support)

### Reusable Q&A

**What is:**

A Question / Answer node type. Prior to the creation of this node type, Q&A data could be / was entered in Drupal “paragraphs”, but was not reusable (with edge case exceptions). Q&A nodes, on the other hand, can be referenced on additional node types such as Resources & Support or FAQ pages, making them reusable.

Q&As may be used as an entity reference on:
* Campaign Landing Pages
* Benefits Detail Pages
* FAQ page
* Resources & Support pages

They may also have a standalone Resources and Support page under `/resources/`. (Not typical.)

**Example content:**
* URL: [https://www.va.gov/resources/gi-bill-and-other-va-education-benefit-payments-faqs/#:~:text=When%20will%20I%20get%20my,way%20to%20receive%20your%20payment](https://www.va.gov/resources/gi-bill-and-other-va-education-benefit-payments-faqs/#:~:text=When%20will%20I%20get%20my,way%20to%20receive%20your%20payment) – Q&A appears on FAQ page
* CMS: 
  * Q&A node: [https://staging.cms.va.gov/resources/when-will-i-get-my-first-gi-bill-payment](https://staging.cms.va.gov/resources/when-will-i-get-my-first-gi-bill-payment) 
  * FAQ where Q&A is added as entity reference, under Q&A groups: [https://staging.cms.va.gov/node/15640/edit](https://staging.cms.va.gov/node/15640/edit) 


**More info:**
* **Q3 2022 project**: adding reusable Q&As to Resources & Support content type: [https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8630](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8630) 

### Support Service
**What is:**

Support services in Drupal are a mechanism to create contact phone numbers. Each support service contains: 
* Name
* Office
* Link
* Phone number

These Support Service nodes are then used on Benefit Hub Landing Pages, in the Right Rail, to provide "Call us" contact information. 

<details><Summary>Screenshots of Suport service connection to BHLP</Summary>

![Screenshot 2024-12-30 at 12 10 40 PM](https://github.com/user-attachments/assets/3ee7f951-e500-4a88-9bc5-e4fdb33262ea)

![Screenshot 2024-12-30 at 12 12 01 PM](https://github.com/user-attachments/assets/c40b1742-c6a1-4af3-8a34-c852335eeaa1)

</details>

## Translation React widgets

**What is:**

Q4 2023: Full site translations are not yet available. Drupal functionality has been scoped and is owned by CMS team for future delivery. 
Meantime: Some site content must be translated. When this is required, the Sitewide Content team determines which pages need to be translated, and provides the translations as separate CMS nodes per translated page (e.g. English, Spanish, Tagalog).  Public Websites then implements a React widget on each of those pages, that acts as an in-page navigation / switcher. 

Public Websites team: 
* Maintains currently translated pages
* Supports new translation widgets for any pages that require it 

**Example translated content:**
* URL: [https://www.va.gov/health-care/covid-19-vaccine/](https://www.va.gov/health-care/covid-19-vaccine/)
* CMS: 
  * En: [https://staging.cms.va.gov/node/11463/edit](https://staging.cms.va.gov/node/11463/edit)
  * Es: [https://staging.cms.va.gov/node/16359/edit](https://staging.cms.va.gov/node/16359/edit)
  * Tl: [https://staging.cms.va.gov/node/16413/edit](https://staging.cms.va.gov/node/16413/edit)
* EN: https://www.va.gov/health-care/how-to-apply/
    * ES: https://www.va.gov/health-care/how-to-apply-esp/
* EN: https://www.va.gov/health-care/after-you-apply/
    * ES: https://www.va.gov/health-care/after-you-apply-esp/
* EN: https://www.va.gov/health-care/eligibility/
    * ES: https://www.va.gov/health-care/eligibility-esp/
* EN: https://www.va.gov/disability/eligibility/
    * ES: https://www.va.gov/disability/eligibility-esp/
* EN: https://www.va.gov/disability/how-to-file-claim/
    * ES: https://www.va.gov/disability/how-to-file-claim-esp/
* EN: https://www.va.gov/disability/after-you-file-claim/
    * ES: https://www.va.gov/disability/after-you-file-claim-esp/

### Sitewide Content's Requirements: 
Documentation for translation widgets / requirements: [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content-localization/README.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content-localization/README.md) 

**More info:**
* [VFS Product Directory: Translated Pages](https://depo-platform-documentation.scrollhelp.site/getting-started/translated-pages)
* Drupal translations were explored in a Discovery project: [Translation support #9622](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9622)


# VA Benefits Taxonomy
Much like the VA Services taxonomy, the VA Benefits taxonomy is intended to be a single-source-of-truth mechanism to manage data about Benefits offered by VA. The taxonomy term data can be integrated with other templates and content types in Drupal and on the VA.gov front-end. 
 
The Benefits taxonomy launched in 2023. Sitewide Content is piloting its use for managing benefits information, with intent to expand its use / association with other Benefits content coming from the Drupal CMS. VA Benefits taxonomy information is not yet integrated elsewhere in Drupal or front-end templating, and is not yet visible anywhere on VA.gov (12/24). 

**Product Docs:** [products/content/structured-content/va-benefits-taxonomy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/structured-content/va-benefits-taxonomy/README.md)

**Taxonomy in Drupal:** https://prod.cms.va.gov/admin/structure/taxonomy/manage/va_benefits_taxonomy/overview

**Governance / Primary editors:**
* Sitewide Content team 

---

# Non-CMS content / products

## BTSSS React widget

**What is:**

https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/travel-reimbursement-btsss


## CTA React widget

**What is:**

https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/cta-widget

This product was formerly owned by Public Websites. 
As of 1/14/2025, Identity team owns the centralized cta-widget vets-website application. 
There are 6 instances of this widget that appear on VAMC pages, and are loaded into VAMC pages via Drupal. If any changes are required for these widgets, the MHV Cartography team (part of Health Apps) may need to coordinate with the Facilities team for support.


## Discharge upgrade wizard
The Discharge Upgrade Wizard is a tool Veterans may use to understand whether they are eligible to apply for a change to their discharge status. 

**Wizard:** https://www.va.gov/discharge-upgrade-instructions

**Product docs:** [/products/veteran-military-records/discharge-upgrade-wizard](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/veteran-military-records/discharge-upgrade-wizard)

**More info:**
* Q4 2024, the DUW was upgraded to use the sub-task pattern: [initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/veteran-military-records/discharge-upgrade-wizard/initiatives/2024-discharge-upgrade-wizard-subtask)
* Public Websites owns this product as of 2022, because PW absorbed both the Decision Tools and Search & Discovery team portfolios. [Transition of Decision Tools Products to Search & Discovery Team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/5e0f4d3c470ed2f32290ff1a6e2cc7c2c97f7847/teams/vsa/teams/decision-tools/transition.md)

## Shadow / dark launches of content
Docs below will move to Platform content site via https://github.com/department-of-veterans-affairs/va.gov-team/issues/93032. When that is published, content will be removed from this README.

### Ownership: CMS team
**CMS Dark launches are owned by the CMS team as of 10/31/2023.**  

Sometimes content generated by the Sitewide Content team, other teams, or just portions of a page may need to “dark launch” or incrementally launch, meaning: not be available to all site users in production. We have options for how to manage dark launches: 
### Usage

### It is **not** currently possible to
* Hide a specific CMS node from robots.txt & the sitemap. Not ticketed, and would/will require custom code.
* Display a CMS-generated page to a % of users for incremental launch.

### It IS currently possible to

#### 1. Use Tugboat to preview CMS + content-build + vets-website changes together.
* In the `/admin/content/deploy` Release Content interface on Tugboat, you can specify a content-build and/or a vets-website branch, to get a full feature preview in Tugboat frontend.

**Not working as of May 2024**: Tugboat is not picking up vets-website changes from branches other than `main`. Ticketed pending CMS ability to prioritize a fix: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/18208

#### 2. Use vets-api “Flipper” feature toggles to show / hide page sections or react widgets (vets-website changes) to authenticated users

- https://api.va.gov/flipper/features – to login: you must have a verified ID.me account using your VA.gov email address (as primary or secondary email) 
- https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles 
- https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide 

Flippers cannot control visibility of an entire page to unauthenticated users or prevent it from being accessed. Once a page exists in production, Flipper can control visibility of the element it's wrapped around. Flipper controls can show/hide:

- boolean style (on/off) for the wrapped element
- visibility to % of logged in users. Used for slow rollouts e.g. to 25%, 50%, 100% of page visitors
- visibility % time, which we believe means page serves, e.g. 25% of times the page is loaded, whatever is behind the flipper will be displayed. 
- Logged-in Actors, specified by email address, who will / won't see the content (can also specify a % of Actors)

A good summary of how to flipper: https://github.com/department-of-veterans-affairs/va.gov-team/issues/8853#issuecomment-625426153 

Flippers are typically using javascript, and do not require a code deploy to enable / change settings.

**NOTE** It seems to be possible to display FE changes to a % of users, using the `cookie_id` and % of time setting in Flipper.

#### 3. Write custom vets-website code to control traffic to unauthenticated element / widget
A react hook exists that can allow displaying a feature to a % of unauthenticated traffic:  `useStaggeredFeatureRelease`
https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/utilities/react-hooks.js#L34

This does not work for CMS-generated content. 

#### 4. Publish a CMS page only to Staging (using EntityQueue) in order to stage CMS + content-build + vets-website for viewing off of VA network
Typically, when a CMS page is published, it publishes to production. 
However: as of Sept 2022, a CMS node may be published to staging.va.gov _only_ by using EntityQueue. This is useful to allow previewing a new CMS page that includes a React widget (aka vets-website code) for user acceptance testing (by off-network users) or stakeholder approval, before it reaches production. CMS team does not want to get in the habit of having staged nodes that will not publish, so this method should only be used for business cases that warrant it, at CMS PO's discretion.

**How to stage:** 
* (Requesting team) cut a [Dark launch request ticket](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/new/choose) to CMS team to request support
  * Specify Node / prod CMS link to the node 
* (Requesting team) When CMS has prioritized the work, merge React widget code to main & confirm deploy in vets-website. App code will not appear on prod, **if no live page is calling the app**.
* (CMS) Add the Node ID to the [Staged Content entity subqueue](https://prod.cms.va.gov/admin/structure/entityqueue/staged_content/staged_content?destination=/admin/structure/entityqueue)
* (CMS) Request approval from requesting team to publish the node to staging, then publish it.
* (CMS/Deployment) 
  * The nightly CMS build must run which pushes prod mirror to the staging site, or CMS must request an out of band deployment. 
  * Content-release must then run. Page will be live on Staging after the first content-release after nightly CMS build.

**How to launch**
* (Requesting team) Greenlight to launch
* (CMS) Remove the node ID from the [Staged Content entity subqueue](https://prod.cms.va.gov/admin/structure/entityqueue/staged_content/staged_content?destination=/admin/structure/entityqueue)
* (CMS/Deployment) 
  * The nightly CMS build must run or CMS must run an out of band deployment. 
  * Content-release must then run. Page will be live on Prod after the first content-release after nightly CMS build.

NOTES: 
1. It is _not_ possible to use this mechanism to test updates / additions to an existing live/published CMS page. The dark launch mechanism says: for this node ID, include it in the Staging build, and do _not_ include it in the Production build. So testing an existing node in this way would effectively unpublish it from Production.
2. For reference, the staging CMS database is not implicated in this process / these changes. The front-end of staging.va.gov is populated by a database mirror of Prod, and is rewritten everytime code is merged to prod. The staging CMS, staging.cms.va.gov, has no front-end -- no front-end is updated when the Staging CMS db is modified.

**Entityqueue implementation:**
- Spike: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/10327
- FE: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/10374
- BE: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/10375


#### 5. Use CMS feature flags to show / hide fields or portions of templates in content-build
- CMS docs https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/READMES/interfaces.md#featureflags 
- Front-end usage docs: https://github.com/department-of-veterans-affairs/vspwiki/blob/master/frontend/pages/platform/tools/feature-toggles.md#testing-cms-feature-toggles 

CMS Feature flags can control visibility from the template layer, but cannot control query content / behavior.
CMS feature toggles take effect at the content-build level, and are not dynamically controlled with javascript, so do require a content release to take effect in prod.

For example, if a new feature is launching, that calls new fields / exposes new layout of a template, we may use CMS feature flags to wrap the new markup in order to show / hide the changes for testing or to simplify rollback. 

We try to avoid page-specific templates, so for example, we would not advocate controlling launch of content for a single page using this method. This is a content-type-level option.


#### 6. Use content-build environment checks to publish a static page only to staging
This only applies to static pages, not CMS content. In content-build, we can exclude a static page from production builds.

PW team has done this twice: 
1. Published a static page for Harassment Reporting Tool, [#35161 [FE] Build static landing page in Staging environment](https://github.com/department-of-veterans-affairs/va.gov-team/issues/35161)
2. Published a homepage prototype for UA testing, /homepage-test: [#8340 Iterate VA.gov homepage changes for demo/testing in publicly accessible environment](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8340); [PR](https://github.com/department-of-veterans-affairs/content-build/pull/1081/files#diff-9d481a9d1d5399befb7b3d6424a262b6e38796b248c017c0f6bacddd4bd54814) 

**Gotcha:** this method creates tech debt, and can cause unexpected behavior in future, when we test in Staging and end up with different behavior in Production. E.g. Feature A tests well in staging, but when we reach Prod, behavior is different due to a forgotten environment check in old / untouched code.

Some nuances: https://dsva.slack.com/archives/CT4GZBM8F/p1660937436605269 



## Global header / footer (aka Mega-menu)

**What is:**

The header and footer of VA.gov, including the benefits megamenu. On-site search, the Veterans Crisis Line modal, and the authentication / login modal and menu are considered separate products with separate ownership, but they are built and shipped within the Header.

**Product docs**: [products/header-footer](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/header-footer)

**OWNERSHIP:** ([Slack thread](https://dsva.slack.com/archives/C52CL1PKQ/p1727120068414909)) As of 9/23/24, Design System team owns the markup of the VA.gov header / footer and Injected header. Sitewide may still be involved in the following areas:  
* Assistance with Drupal data feeding into the header / footer, unless / until DST gets Drupal access.
* Design / Research for any major revisions to the header


### Header / footer injection

**What is:**

The VA.gov modernization project will take years to bring alllllllll VA content into the main site. In the meantime, VA offices / orgs that use TeamSite (old CMS) may want to adopt the VA.gov header/ footer. This can be achieved by “injecting” it, using a set of Javascript / stylesheets, and a cookie.

**Product docs**: [products/header-footer/injected-header](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/header-footer/injected-header)

**More information:**
* [Proxy-rewrite application](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/proxy-rewrite/README.md) is the Javascript app that enables injection. Documentation includes testing details



## Income limits web application

**What is:**

The income limits web app is a tool that helps veterans understand if their income will be a factor in benefits eligibility. Veterans are eligible for benefits based on a complex matrix of factors including: income, number of children, location, location of service, known exposure to toxic chemicals, etc. Income limit is one factor. 

Income Limits are set and managed by another team, and provided via an Oracle Database called VES. The Income limits application automatically pulls VES data to establish annual income limits.

Annual refresh of VES income limits data is automated, as is the text change from year to year on each page (more information below).

**App:** https://www.va.gov/health-care/income-limits/introduction

**Product docs:** [products/income-limits-app](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/income-limits-app)

**More info:**
* Modernized app was shipped in 2023. [Income limits web app: Discovery, Design, prototype, user research #9626](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9626)
* Annual refresh of VES income limits data for the application is automated ([#16511](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/16511)), HOWEVER, creation of an FE alert to let Veterans know that limits have been updated is NOT ([#20008](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/20008)).


## On-site search (using search.gov)

**What is:**

VA.gov uses search.gov as its engine. Public Websites owns that integration, and display of search results within the site. 

**Product docs:** [products/on-site-search](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/on-site-search)

**Example content:**
* URL: [https://www.va.gov/search/?query=test&t=false](https://www.va.gov/search/?query=test&t=false)  

**Note on API keys**
* API keys for search and search-typeahead are different keys generated by api.data.gov.  At the time this was written, keys are maintained by platform devops, and the keys belong to the universal devops user.  Should the email tied to these keys be lost, new ones will need to be generated

**More info:**
* [Getting Search.gov access](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/search-playbook.md#getting-access)
* Design system: [Search input](https://design.va.gov/components/search-input)
* Search.gov indexing documentation: https://search.gov/indexing/indexing-with-searchgov.html 
* [VFS Product Directory: Search](https://depo-platform-documentation.scrollhelp.site/getting-started/search)


## Sitewide Content Redirects & Vanity URLs

**What is:**

Anytime content is moved or new tools are launched to replace old ones, VA.gov URLs should be redirected using a 301 redirect, to prevent Veterans from encountering 404s. When Sitewide Content team is making changes that require redirects, Public Websites team handles those redirects for the Content team. 

Sometimes, VA content may require a vanity URL used for marketing purposes that will redirect to the proper URL for that content. PW also handles Vanity URL redirects for Sitewide Content team. 

**Workflow:**
* [Design System guidance for Redirects)(https://design.va.gov/components/url-standards/redirects) - describes request mechanism, approvals, overall guidance
* [Redirect Implementation strategy](https://depo-platform-documentation.scrollhelp.site/developer-docs/redirect-implementation-strategies) describes the different varieties of redirect, and when / how to implement each kind. 

**More info:**
* [Redirect request issue template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=redirect-request.md)
* Example requests: 
   * [9971](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9971)
   * [9515](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9515) 
   * [9066](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9066) 
   * [9813](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9813) 


## PACT Act Wizard
**What is:**

The PACT Act was passed in 2022, and expanded Veteran eligibility to benefits, based on years and locations of service. The PACT Act Wizard is a React application using the sub-task design system pattern that allows Veterans to enter their service data and get an explanation of whether they may qualify for additional benefits nder the PACT Act, and should apply.

**Product docs:** [products/pact-act-wizard/](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pact-act-wizard/)

**Product**
https://staging.va.gov/pact-act-eligibility/introduction -- 12/24: launch is blocked on stakeholder approvals, Danielle Thierry (Sitewide Content) is point of contact for updates

## VA.gov Homepage

**What is:**

The [VA.gov homepage](https://www.va.gov/) is a template that displays a variety of site content and React applications. A redesign was launched during Q3 2023, that is comprised of several Drupal menus and blocks, as well as a React application for email signup to GovDelivery.

**Product documentation**: [products/home-page](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/home-page)

**Primary editors / stakeholders:**
* OPIA:
  * Homepage News block
  * Homepage Benefit Promo block
* Sitewide Content
  * Homepage Benefit Promo block
  * Top pages link text
  * Create account block
  * Benefit hub menu and text

**More info:**
* [VFS Product Directory: VA.gov Homepage](https://depo-platform-documentation.scrollhelp.site/getting-started/va-gov-homepage)
* [Template / data information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/home-page/engineering#homepage-build)


---

# Previous PW Projects

Projects the previous PW team worked on, that are in maintenance mode to date. 


## Appeal Modernization Process

https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/AMA-follow-up/AMA%20Follow%20Up%20Product%20Outline.md

* Affected pages: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/7521#issuecomment-611102928](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7521#issuecomment-611102928) 
* 508 defects: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/7647](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7647) 


## Disability rating calculator

* Product: https://www.va.gov/disability/about-disability-ratings/
* Docs: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/ratings-calculator/README.md (tl;dr: they're empty as of 12/2023)

## Downtime messaging

When sites or apps go down, there are 2 ways to handle downtime: 
1. Using formal downtime notifications that can be set up in PagerDuty, if your app has an external API dependency.
2. Using a full-width banner (CMS content type) that can publish to specific pages in VA.gov.

When using a full-width banner, Public Websites maintains the content type itself. If you are simply publishing a new banner for a downtime, activity should be managed with Sitewide Content, Accessibility, and IA who govern content for individual banners. 

**Platform docs:**
* https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/scheduled-downtime-process.md 
* https://depo-platform-documentation.scrollhelp.site/developer-docs/downtime-notifications

Governance / guidance: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/banners/banner-alerts.md

Design system "Banner - Maintenance" component: https://design.va.gov/storybook/?path=/docs/components-banners-maintenancebanner--before-maintenance

UX review issue: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/6366](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6366) 

## Harassment Reporting Tool

* [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/harassment-reporting/product-outline.md)
* [Harassment Reporting Research--Landing page and poster (Mar 2022)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/harassment-reporting/research/static-landing-page)
* [Harassment Reporting Tool Research (incomplete)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/harassment-reporting/research/usability)
* [HRT Collab cycle](https://github.com/department-of-veterans-affairs/va.gov-team/issues/29178) -- includes context, diagrams, etc.


## “How to apply” / Benefit wizards

There are currently 3 urls where in-content "How to Apply" wizards exist, none of which are owned by Public Websites any more:

Education: owned by EDU team
* https://www.va.gov/education/eligibility
  * React component (vets-website): `src/applications/edu-benefits/component/createEducationApplicationStatus.jsx`
* https://www.va.gov/education/how-to-apply
  * React component (vets-website): `src/applications/edu-benefits/component/createEducationApplicationStatus.jsx`

Higher-level review: [owned by Benefits team](https://depo-platform-documentation.scrollhelp.site/getting-started/higher-level-review)
* This url (https://www.va.gov/decision-reviews/higher-level-review/) links to url with actual 1-question, wizard here: https://www.va.gov/decision-reviews/higher-level-review/request-higher-level-review-form-20-0996/start
* Product docs: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews/higher-level-review

More info:
* [https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/how-to-apply-wizards](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/how-to-apply-wizards) 


## React widgets use within CMS

Product teams may want to integrate a vets-website React widget into CMS pages. When that's required, product teams work with CAIA regarding content, and integration into content pages. 
Public Websites helps support the mechanism that allows React widget integration into the CMS pages. (This should probably move to the CMS team someday.)

Sitewide content team documentation: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/sitewide-content/processes/dynamic-content-process.md

[Epic](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/2919)

E.g. add widgets to specific pages: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/17388](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17388)


## Other

Transformers for specific CMS fields / templates: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/16440#issuecomment-744686658](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16440#issuecomment-744686658) 


## Old epics of opportunistic work
* Site improvements: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/2589](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2589) 
* CLP leftovers from launch: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/4621](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4621)
* Downtime notifications - [https://github.com/department-of-veterans-affairs/va.gov-team/issues/4799](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4799)
* Appeals modernization 508 defects (2-4): [https://github.com/department-of-veterans-affairs/va.gov-team/issues/7647](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7647)
* Legacy Rates > CSV export: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/7942](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7942) 
* How to apply wizards: 508 defect: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/12211](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12211)
* [Mobile Inconsistency: Resources & Support Search](https://github.com/department-of-veterans-affairs/va.gov-team/issues/22868) va.gov-team #22868
* CLP 508 - [https://github.com/department-of-veterans-affairs/va.gov-team/issues/21020](https://github.com/department-of-veterans-affairs/va.gov-team/issues/21020)
* [Custom urls for media (especially PDFs and documents)](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/1398) #139* 8

## Deprecated products

## Higher-Level Review CTA widget

[https://github.com/department-of-veterans-affairs/va.gov-team/issues/4139](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4139) 

Static CMS page with a React widget. 

The widget was no longer used as of 3/22/2022, so was deprecated in 2024: https://dsva.slack.com/archives/C52CL1PKQ/p1733496776695149 
