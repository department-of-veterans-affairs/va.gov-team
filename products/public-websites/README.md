# Public Websites

## PW Contact
April 2022: Public Websites products are currently maintained by the [Sitewide Public Websites team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/sitewide/public-websites). 
(Previously by [VSA Public Websites](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/public-websites).)

VA Product Owner = Dave Conlon (@davidconlon)

### Intake
If you need help with a product listed below, file a [Public websites intake ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=jilladams%2CFranECross&labels=Public+Websites%2CNeeds+refining&projects=&template=public-websites-intake.yml&title=PW+intake%3A+%3CType+of+Request%3E+from+%3CTeam%3E) and post the link to the team's slack channel, listed below. 

All requests will be refined and planned according to other team priorities, so please make us aware of your timing requirements as soon as you're able, for urgent requests.

### Slack
- [#sitewide-public-websites](https://dsva.slack.com/channels/sitewide-public-websites)

### Github / work tracking
- [va.gov-cms Sprint board](https://github.com/department-of-veterans-affairs/va.gov-cms/#workspaces/public-websites-6171bf4bf43742001af18cc5/board)  (install Zenhub browser plugin)
- Team label: `Public Websites`

### Monitoring
[Public Websites Datadog monitoring dashboard](https://vagov.ddog-gov.com/dashboard/szu-xny-9fu/public-websites-dashboard?refresh_mode=sliding&from_ts=1698247139212&to_ts=1698250739212&live=true)
Monitors for each product are described within product folders. e.g. 
* [Find a Form monitoring](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/engineering/monitoring.md)
* [VA.gov homepage monitoring](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/home-page/engineering)
* Header (incl megamenu) and Footer, and
* [Injected Header/Footer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/header-footer/engineering/monitoring.md)
* [VA.gov search](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/engineering/monitoring.md)

# Products we support

[Sitewide Public Websites purview mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/vagov6717/1646745279937/9a5570c420939d84e875e8334fd73073e3a3971b?fromVisitorModal=true&sender=u0b235d03cbd64f7f93673243)

## 

| [CMS content / functionality](#cms-content--functionality) | [Non-CMS content / products](#non-cms-content--products) | [Previous PW Projects](#previous-pw-projects) |
| ------------- | ------------- | ------------- |
| [Benefits Hub Landing Page](#benefits-hub-landing-page) | [Discharge upgrade wizard](#discharge-upgrade-wizard) | [Appeal Modernization Process](#appeal-modernization-process) |
| [Benefits Detail Page](#benefits-detail-page) | [Global header / footer (aka Mega-menu)](#global-header--footer-aka-mega-menu) | [Disability rating calculator](#disability-rating-calculator) |
| [Campaign Landing Pages](#campaign-landing-pages-clp) | [Header / footer injection](#header--footer-injection) | [Downtime messaging](#downtime-messaging) |
| [Events List](#events-list) | [Income limits web application](#income-limits-web-application) | [Harassment Reporting Tool](#harassment-reporting-tool) |
| [Event](#event-detail-page) | [Non-facility Redirects](#non-facility-redirects) | [Higher-Level Review static landing page](#higher-level-review-static-landing-page) |
| [FAQ Page](#faq-page) | [PACT Act Wizard](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/pact-act-wizard) | [“How to apply” wizards](#how-to-apply--benefit-wizards) |
| [Find a form / VA Forms (+ Forms DB import)](#find-a-form--va-forms) | [On-site search (using search.gov)](#on-site-search-using-searchgov) | [React widgets use within CMS](#react-widgets-use-within-cms) |
| [Full-width Alert](#full-width-alert) | [Translation React widgets](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/README.md#translation-react-widgets)  | . |
| [VA.gov Homepage](#vagov-homepage) | [Unauthed React healthcare widgets](#unauthed-react-widgets) | . |
| [Promo Banner](#promo-banner) | [Veterans Crisis Line modal](#veterans-crisis-line-modal) |  .  |
| [Outreach Materials Library (Publication listing & page)](#outreach-materials-library-publication-listing-page--publications) | . | . |
| [Resources & Support detail page](#resources-and-support-detail-page) |  . | . |
| [Reusable Q&A](#reusable-qa) | . | .  |
| [VA Benefits taxonomy](#va-benefits-taxonomy)

The Public Websites team also supports most of the portfolio of the previous Decision Tools and Search & Discovery Team products, which may include products not listed here that we are not yet aware of. 

### COPY/PASTABLE product list
<details><summary>List in accordion. Please update with any product ownership changes</summary>
### P1 Products
- [ ] VA.gov homepage
- [ ] Veterans Crisis Line modal
- [ ] Global header / footer
- [ ] Header / footer injection - https://benefits.va.gov
- [ ] Search / results form in header
- [ ] Search results page - https://www.va.gov/search/?query=benefits&t=false
- [ ] Find a Form - https://www.va.gov/find-forms/
- [ ] Form detail page - e.g. https://www.va.gov/find-forms/about-form-21p-534/
- [ ] Breadcrumbs

### CMS / Content driven products: 
- [ ] Benefits Detail Page - e.g. https://www.va.gov/health-care/
- [ ] Benefits Hub Landing Page - e.g. https://www.va.gov/health-care/about-va-health-benefits/
- [ ] Campaign Landing Page - Currently published CLPs: https://prod.cms.va.gov/admin/content?title=&type=campaign_landing_page&moderation_state=published&owner=All
- [ ] Events Listing - https://www.va.gov/outreach-and-events/events
- [ ] Event - Currently published Events (check several): https://prod.cms.va.gov/admin/content??title=&type=event&moderation_state=published&owner=All
- R&S content types
    - [ ] FAQ page - CMS examples: https://prod.cms.va.gov/admin/content?title=&type=faq_multiple_q_a&moderation_state=published&owner=All
    - [ ] Resources and Support Detail Page - CMS examples: https://prod.cms.va.gov/admin/content?title=&type=support_resources_detail_page&moderation_state=published&owner=All
    - [ ] Reusable Q&A - CMS examples: https://prod.cms.va.gov/admin/content?title=&type=q_a&moderation_state=published&owner=All
    - [ ] Checklist
    - [ ] Video list
    - [ ] Image list
- [ ] Full width alert - Currently published examples: https://prod.cms.va.gov/admin/content?title=&type=banner&moderation_state=published&owner=All
- [ ] Promo banner - Currently published examples: https://prod.cms.va.gov/admin/content?title=&type=promo_banner&moderation_state=published&owner=All
- [ ] Outreach Hub (Until deprecation) - https://www.va.gov/outreach-and-events/outreach-materials/
- [ ] Translations widget - e.g. https://www.va.gov/family-member-benefits/comprehensive-assistance-for-family-caregivers-esp/
- [ ] VA Benefits taxonomy - (backend only) https://prod.cms.va.gov/admin/structure/taxonomy/manage/va_benefits_taxonomy/overview

### React Applications: 
- [ ] CTA widgets
    - [ ] Get medical records - https://www.va.gov/health-care/get-medical-records/
    - [ ] Make appointment - https://www.va.gov/health-care/schedule-view-va-appointments/
    - [ ] Refill/track prescriptions - https://www.va.gov/health-care/refill-track-prescriptions/
    - [ ] Send secure message - https://www.va.gov/health-care/secure-messaging/
    - [ ] View test and lab results page - https://www.va.gov/health-care/view-test-and-lab-results/
- [ ] Discharge upgrade wizard - https://www.va.gov/discharge-upgrade-instructions/questions
- [ ] Income Limits app - https://www.va.gov/health-care/income-limits/introduction
- [ ] PACT Act app - Not yet shipped: https://staging.va.gov/pact-act-eligibility/introduction
  
</details>

## Changelog
* [Transition of Decision Tools Products to Search & Discovery Team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/5e0f4d3c470ed2f32290ff1a6e2cc7c2c97f7847/teams/vsa/teams/decision-tools/transition.md) - previous doc of tools that were moved from Decision Tools > Search & Discovery and are now under Public Websites purview
* 11/2023: [Breadcrumbs](#breadcrumbs) - Transitioned to CMS team as of Q4 2024, as a result of Accelerated Publishing work to manage Breadcrumbs for CMS-related content fully within the CMS
* 11/2023: [Shadow / dark launches of content](#shadow--dark-launches-of-content) - Transitioned to CMS team for long term ownership. Docs will be removed from this page, TBD a new future home for CMS product docs.
* 11/2023: [Yellow-ribbon tool](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-yellow-ribbon-school/README.md) moved to new IIR team. 

---

# CMS content / functionality


## Benefits Hub Landing Page

**What is:**

Veterans are eligible for a variety of Benefits, e.g. healthcare, education, pension, burial, etc. This Drupal content type holds overview content for each benefit, and links to drill down into specifics for applying for / managing that benefit.

**Example content:**
* URL: [https://www.va.gov/health-care/](https://www.va.gov/health-care/) 
* CMS: [https://staging.cms.va.gov/health-care](https://staging.cms.va.gov/health-care) 

**Governance / Editor guidance:**
* Primary editors: Sitewide Content team

Benefits hubs / detail pages feature strongly in the VA.gov header (aka the “mega-menu”)
![Picture1](https://user-images.githubusercontent.com/85581471/186540988-fc46119c-5510-4817-8a45-92147803d535.png)


**More info:**
* A6 program GDrive folder:[ Benefits Hubs](https://drive.google.com/drive/u/1/folders/1nvQwXSxHGqHdN6qgEUte5z2fXyJvRJxH)
* [2018-2019 Benefit hub optimization effort](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/benefit-hubs) (github)
* [VFS Product Directory: Benefits Hubs](https://depo-platform-documentation.scrollhelp.site/getting-started/benefits-hubs)


## Benefits Detail Page 

**What is:**

Page that contains detail about each Benefit, linked primarily from Benefit Hubs, e.g. how to apply, managing your benefit, or benefit-specific details. 

The content model is flexible to accommodate various types of content, using Drupal’s “paragraph” functionality, which allows insertion of accordion groups, link lists, alerts, process lists, Q&A (separate from Q&A node concept), images, etc. 

**Example content:**
* URL: [https://www.va.gov/health-care/about-va-health-benefits/](https://www.va.gov/health-care/about-va-health-benefits/) 
* CMS: [https://staging.cms.va.gov/health-care/about-va-health-benefits](https://staging.cms.va.gov/health-care/about-va-health-benefits) 

**Governance / Editor guidance:**
* Primary editors: Sitewide Content team

**More info:**

* **Q3 2022 project:** to harden the content model: [https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9628](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9628) 


## Campaign Landing Pages (CLP)

**What is:**
[Product brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/campaign-landing-page)
The Campaign Landing Page (CLP) is a page builder in the VA.gov Drupal CMS which enables VA businesses to create, launch and manage modern, mobile-responsive, accessibility-optimized campaign landing pages to promote marketing or engagement content.

Campaign Landing Pages are intended to prevent creation of standalone marketing sites, and to create a rich experience for topics that are not otherwise Veterans benefit / facility related content.

[Runbook to create](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/campaign-landing-page#runbook-for-clp-creation)

**Example content:**
* URL: [https://www.va.gov/initiatives/vote/](https://www.va.gov/initiatives/vote/) 
* CMS: [https://staging.cms.va.gov/initiatives/vote](https://staging.cms.va.gov/initiatives/vote) 
* Example issue: [[Campaign Landing Page] - VA VOTE #37773](https://github.com/department-of-veterans-affairs/va.gov-team/issues/37773) 

**Governance / Editor guidance:**
* Governance: [VA.gov.Campaign.Landing.Page_Governance_Product_Guide_01Mar2022.pptx](https://docs.google.com/presentation/d/1y7FnBuaOrbfR_Bap0zAhMceVO8jlEeX9/edit#slide=id.p1) 
* Primary editors: Team that originates the request, with authorization from PO and URL guidance from Sitewide Content
* [Editor guidance: How to manage a CLP](https://prod.cms.va.gov/help/campaign-landing-pages/how-to-manage-campaign-landing-pages) 


**More info:**
* A6 program GDrive folder:[ Campaign Landing Page](https://drive.google.com/drive/u/1/folders/1pyvDhf6ZdvBehFs3lFzyAF2kMeGkazX6)
* [Product launch docs: tier 2 content IA & Design > Campaign Landing Page Templates - Github](https://github.com/department-of-veterans-affairs/va.gov-team/tree/69833737d9fe22b8990bb987e7c50de13205c5d5/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates) 
* [VFS Product Directory: Campaign Landing Page](https://depo-platform-documentation.scrollhelp.site/getting-started/campaign-landing-page)


## Events List

**What is:**

Template that displays chronological list of Events published to that list. There are two types of events lists: those that are associated with National VA (Outreach & Events hub) and those associated with specific VA Medical Center (VAMC) facilities.

Events / lists may only be managed by editors with permissions for that specific VAMC facility or office (aka “Section").

Events filters are available on Lists, to filter by past, future, or specific date(s). (Filters may also be referred to as “V2 filters”.)  Most common events lists:

**Outreach & Events hub** - typically online events, not location specific 
* URL: [https://www.va.gov/outreach-and-events/events/](https://www.va.gov/outreach-and-events/events/)
* CMS: [https://staging.cms.va.gov/outreach-and-events/events](https://staging.cms.va.gov/outreach-and-events/events) 
* Primary editors: VEO (Veteran Experience Office) editors

**VAMC Events** - example location: 
* URL: [https://www.va.gov/minneapolis-health-care/events/](https://www.va.gov/minneapolis-health-care/events/) 
* CMS: [https://staging.cms.va.gov/minneapolis-health-care/events](https://staging.cms.va.gov/minneapolis-health-care/events) 
* Primary editors:  VAMC editors have permissions to edit Events within their VAMC pages

**More info:**
* A6 program GDrive folder: [Events](https://drive.google.com/drive/u/1/folders/1wGqhMBGs-baLOFarU2Jgii8Pz2IFIas6)
* [Events maintenance & support epic #9438](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9438) 
* Filters were added Q2 2022, [https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9435](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9435) 
* [VFS Product Directory: Outreach Events Hub & Calendar](https://depo-platform-documentation.scrollhelp.site/getting-started/outreach-events-hub-and-calendar)


## Event (detail page)

**What is:**
The event detail page, which is created via Drupal content type for online or in-person events like support groups, outreach events, public lectures, pickleball games and more.

Events must be associated with an Events list, which governs permissions for editing and presentation in the front-end for veterans. 

Events may be single or recurring, and are either: 
* At a VA facility
* At a non-VA location
* Online

**Outreach & Events event** - typically online events, not location specific 
* URL: [https://www.va.gov/outreach-and-events/events/48074/](https://www.va.gov/outreach-and-events/events/48074/) 
* CMS: [https://staging.cms.va.gov/outreach-and-events/events/48074](https://staging.cms.va.gov/outreach-and-events/events/48074) 
* Primary editors: VAMC editors have permissions to edit Events within their VAMC pages

**VAMC Events -**
* URL: [https://www.va.gov/minneapolis-health-care/events/47981/](https://www.va.gov/minneapolis-health-care/events/47981/) (recurring)
* CMS: [https://staging.cms.va.gov/minneapolis-health-care/events/47981](https://staging.cms.va.gov/minneapolis-health-care/events/47981) 
* Primary editors:  VEO editors

**More info:**
* A6 program GDrive folder: [Events](https://drive.google.com/drive/u/1/folders/1wGqhMBGs-baLOFarU2Jgii8Pz2IFIas6)
* Recurring events failed to launch twice in 2021, and launched successfully in Q2 2022: [https://github.com/department-of-veterans-affairs/va.gov-cms/issues/1956](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/1956) 
   * Event recurrences are tricky to manage in terms of listing / filtering logic, and Q3 2022, PW team is working to close out backlog of related bugs.


## FAQ page

**What is:**

A Drupal content type that is used to aggregate [Q&A nodes](#qa---single). Often published with a URL path in /resources/, indistinguishable to front-end users from other [Resources & Support](#resources-and-support-detail-page) content.

**Example content:**
* URL: [https://va.gov/resources/signing-in-to-vagov](https://va.gov/resources/signing-in-to-vagov) 
* CMS: [https://staging.cms.va.gov/resources/signing-in-to-vagov](https://staging.cms.va.gov/resources/signing-in-to-vagov) 

**Governance / Editor guidance:**
* Primary editors: Sitewide Content team

**More info:**
* COPE effort to make Q&A reusable on [Resources & Support](#resources-and-support-detail-page) = [https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8630](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8630) 


## Find a form / VA Forms

**What is:**

Forms are a critical part of the Veteran experience for applying for benefits & services. A Forms database is managed outside the context of Public Websites team or the Drupal CMS, and is the source of truth for Form data and PDFs. We import data from the Forms DB, and store data about each form as a node.

Forms are then findable from the “[Find a form](https://www.va.gov/find-forms/)” interface – a search / listing of VA Forms results.

We own:
* the Find a Form interface
* the Form page interface
* the data migration that pulls in the Forms DB csv export into the CMS
* Lighthouse then pulls our CMS data into LH, so we own supporting them if they have trouble
* the vets-api code that's used to tap Lighthouse (for the data they got from the CMS)

We do not own:
* The form PDFs themselves. They're hosted on the Forms DB servers.
* The metadata about forms. That's pulled from the Forms DB

### Forms DB import

The import uses Row ID as the unique identifier to map importing content to Drupal nodes. Some fields in Drupal may be customized from within Drupal after import, visible on each node within “Forms DB data” expander.
* [VA Forms Content Flow Topic Dive](https://www.youtube.com/watch?v=CuPI8DB7aR0) - describes the import process in more detail
* [VA Forms - Flagged content dashboard](https://prod.cms.va.gov/admin/content/flagged?type=va_form&workbench_access_section__section=All) - CMS dashboard of imported/updated Forms content, intended to be used for Editors to update / modify after import as necessary. Not recently used.

The Forms DB system has some recurring flaws: 
* After migration, forms in CMS may receive incorrect metadata (e.g. row ID is not reliable tie to form metadata, unknown cause)
* Veterans may report that PDF links from a Form node page are broken. PDFs are hosted on a server outside our purview, owned by the Forms DB team.
* An existing form may be duplicated with a new row ID, as a result of Forms DB deleting / recreating, rather than editing, a Form.

**Example content:**
* Find a Form: [https://www.va.gov/find-forms/](https://www.va.gov/find-forms/) 
* Example Form URL: [https://va.gov/find-forms/about-form-10-0388-4](https://va.gov/find-forms/about-form-10-0388-4)   
* CMS: [https://staging.cms.va.gov/node/6150/edit](https://staging.cms.va.gov/node/6150/edit) 
  * “Forms DB Data” on a Form node indicates what data has been imported, vs. what can be edited in Drupal
  * Drupal Admins may update data within “Forms DB Data” on a node, but updates will be overwritten by next migration.

**Governance / Editor guidance:**
* Primary editors:  Forms managers update Form data outside the context of the CMS, in the “Forms database”. That content is migrated into Drupal and can be finessed in the CMS.

**More info:**
* [Forms Product outline & historical docs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-a-va-form)
* [Triage runbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/README.md#troubleshooting) for errors / defects
* [Engineering information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-a-va-form/engineering) including data diagrams, architecture information

***Q3 2022 project:** to understand more about the Forms DB infrastructure, in an effort to help stabilize / reduce risk of downstream issues: [https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9724](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9724) 
* [VA Forms Library Overview ](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-overview)(Platform docs) - IS NOT RELATED. This pertains, instead, to making usable online forms within VA.gov 

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

Architecture:

The Announcement entry point uses React to bind to an element inside an announcement-root div at the top of the page body.  It renders an empty div in its place when there is no announcement to show.  Placing the Announcement div at the top of the html body allows focus to be directed to the skip-link element of the page on modal close, allowing for an accessible user experience.


## Full-width Alert

aka: Banner, in the CMS

**More info:**
* Product documentation: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/full-width-alert/
* A6 program GDrive folder: [Banners](https://drive.google.com/drive/u/1/folders/1DAT-Pr_xEwNcnpqClgXFrvycF8MpS5Z4)
* [Banner](https://design.va.gov/components/banner) : va.gov design system - describes usage / positioning
* [Knowledge Base](https://staging.cms.va.gov/node/34828)
* Previous docs/ initiatives: 
   * Q42021 notes re: character count / governance, name change to full-width alert: [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/global/banners/promobanners/CMS-PW-notes-2021-11-24.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/global/banners/promobanners/CMS-PW-notes-2021-11-24.md) 
   * Homepage-only banner needed for OPIA (Q1 2021) [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page-banner/product-outline.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page-banner/product-outline.md) 
   * Design considerations / use cases (Q2 2020) [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/banners/banner-alerts.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/banners/banner-alerts.md) 
   * Initial build (Q2 2020): [https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/full-width-alert](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/full-width-alert) 


## Promo Banner

**What is:**

A promo banner is fixed content at the bottom of the viewport used for dismissible announcements such as new tools, news, etc.

Currently, www.va.gov supports three types of promo banners:
1. **Benefit announcements**, which relate to content focused on benefits: a new tool, a new online benefit application, etc.
2. **Email signups**, which relate to email signups for various VA updates / alerts / communications.
3. **News stories**, which relate to newly received or noteworthy information about the VA.

You can read more about these promo types in the [VA Design System](https://design.va.gov/components/banner/promo) or read more about Promo Banners in the [Knowledge Base](https://prod.cms.va.gov/node/39828).

**Example content:**
* CMS: [https://staging.cms.va.gov/node/48052/edit](https://staging.cms.va.gov/node/48052/edit) 

**Governance / Editor guidance:**
* Primary editors: Sitewide Content team

**More info:**
* [Promo banner](https://design.va.gov/components/banner/promo): va.gov design system


## Outreach Materials Library (Publication Listing Page) / Publications

**What is:**
Currently there is one Publication Listing Page, the Outreach Library, where all Publications appear.
Not modified since launch.

As of Aug 2023, there is intent to deprecate the Outreach Materials Library: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/14835. A new product is being built by OPIA / VEO platform (tentative name: Discover). When that product launches, O&M Library will be removed.

**Example content:**
* URL: [https://www.va.gov/outreach-and-events/outreach-materials/](https://www.va.gov/outreach-and-events/outreach-materials/) 
* CMS: [https://staging.cms.va.gov/node/412/edit](https://staging.cms.va.gov/node/412/edit) 

**Governance / Editor guidance:**
* Primary editors: Sitewide Content team


## Resources and support Detail Page

**What is:**

A page that contains in-depth information about a single resource available to Veterans or other beneficiaries. Formerly called Learning Centers.

**Example content:**
* URL: [https://va.gov/resources/choosing-between-urgent-and-emergency-care](https://va.gov/resources/choosing-between-urgent-and-emergency-care) 
* CMS: [https://staging.cms.va.gov/node/37196/edit](https://staging.cms.va.gov/node/37196/edit) 

**Governance / Editor guidance:**
* Primary editors: Sitewide Content team, for now. Goal: to expand to Editors in other areas.

**More info:**
* A6 program GDrive folder: [Resources and Support](https://drive.google.com/drive/u/1/folders/1uqKHA1Wq91yPB91TdWBWGz0CV7gE8kaM)
* [Resources and Support product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/product-outline.md)
* 2022 Sitewide Content research project around clarity of this content and how Editors in other areas might have challenges / need support: [https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/resources-and-support-author-pilot](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/resources-and-support-author-pilot) 
* [VFS Product Directory: Resources & Support](https://depo-platform-documentation.scrollhelp.site/getting-started/resources-support)

## Reusable Q&A

**What is:**

A Question / Answer node type. Prior to the creation of this node type, Q&A data could be / was entered in Drupal “paragraphs”, but was not reusable (with edge case exceptions). Q&A nodes, on the other hand, can be referenced on additional node types such as Resources & Support or FAQ pages, making them reusable.

Q&As may be used as an entity reference on:
* Campaign Landing Pages
* Benefits Detail Pages
* FAQ page
* Resources & Support pages

They may also have a standalone Resources and Support page (/resources/). (Not typical.)

**Example content:**
* URL: [https://www.va.gov/resources/gi-bill-and-other-va-education-benefit-payments-faqs/#:~:text=When%20will%20I%20get%20my,way%20to%20receive%20your%20payment](https://www.va.gov/resources/gi-bill-and-other-va-education-benefit-payments-faqs/#:~:text=When%20will%20I%20get%20my,way%20to%20receive%20your%20payment) – Q&A appears on FAQ page
* CMS: 
  * Q&A node: [https://staging.cms.va.gov/resources/when-will-i-get-my-first-gi-bill-payment](https://staging.cms.va.gov/resources/when-will-i-get-my-first-gi-bill-payment) 
  * FAQ where Q&A is added as entity reference, under Q&A groups: [https://staging.cms.va.gov/node/15640/edit](https://staging.cms.va.gov/node/15640/edit) 


**Governance / Editor guidance:**
* Primary editors: Sitewide Content team

**More info:**
* **Q3 2022 project**: adding reusable Q&As to Resources & Support content type: [https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8630](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8630) 


## Translation React widgets

**What is:**

Q4 2023: Full site translations are not yet available. Drupal functionality has been scoped and is owned by CMS team for future delivery. 
Meantime: Some site content must be translated. When this is required, typically Sitewide CAIA (Content, Accessibility, IA) determine which pages and provide the translations as separate CMS nodes per translated page (e.g. English, Spanish, Tagalog).  Public Websites then implements a React widget on each of those pages, that acts as an in-page navigation / switcher. 

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

### CAIA's Requirements: 
CAIA documentation for translation widgets / requirements: [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content-localization/README.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content-localization/README.md) 


**More info:**
* A6 program GDrive folder: [Translations & i18n](https://drive.google.com/drive/u/1/folders/13eRn2gM759p5NM1p90bnWBZYzQxZ3MGd)
* [Translation support #9622](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9622) - epic describing CMS team work / research for Drupal translations
* Q3 2022 project: Translation effort from Sitewide Content: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/45053](https://github.com/department-of-veterans-affairs/va.gov-team/issues/45053) 
* [VFS Product Directory: Translated Pages](https://depo-platform-documentation.scrollhelp.site/getting-started/translated-pages)


# VA Benefits Taxonomy
https://prod.cms.va.gov/admin/structure/taxonomy/manage/va_benefits_taxonomy/overview
Single source of truth for VA Benefits meta information, used by the Sitewide Content team through VA.gov benefits. 

Docs: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/structured-content/va-benefits-taxonomy/README.md

Taxonomy launched in 2023, in pilot use by CAIA for managing benefits information with intent to expand its use / association with other Benefits content coming from the Drupal CMS. Not yet incorporated in VA.gov frontend. 

---

# Non-CMS content / products

## Discharge upgrade wizard
https://www.va.gov/discharge-upgrade-instructions

The discharge upgrade wizard was written by the Decision Tools team. That team transitioned responsibility to the Search & Discovery Team, which has since become Public Websites purview as of 2022. 

Q1 2024 will include an [initiative to rebuild the tool using the DS sub-task pattern](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/veteran-military-records/discharge-upgrade-wizard/initiatives/2024-discharge-upgrade-wizard-subtask), and to modernize content.

**More info:**
* [Discharge Upgrade wizard product documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/veteran-military-records/discharge-upgrade-wizard)
* [Transition of Decision Tools Products to Search & Discovery Team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/5e0f4d3c470ed2f32290ff1a6e2cc7c2c97f7847/teams/vsa/teams/decision-tools/transition.md)

## Shadow / dark launches of content

### Ownership: CMS team
**Dark launches are owned by the CMS team as of 10/31/2023.**  
Docs will move to a new location, pending outcomes from https://github.com/department-of-veterans-affairs/va.gov-cms/issues/15932

### Usage
Sometimes content generated by the Sitewide Content team, other teams, or just portions of a page may need to “dark launch” meaning: not be available to all site users in production. We have options for how to manage dark launches: 

### It is **not** currently possible to
* Hide a specific CMS node from robots.txt & the sitemap. Not ticketed, and would/will require custom code.
* Display a CMS-generated page to a % of users for incremental launch.

### It IS currently possible to

#### 1. Use Tugboat to preview CMS + content-build + vets-website changes together.
* In the `/admin/content/deploy` Release Content interface on Tugboat, you can specify a content-build and/or a vets-website branch, to get a full feature preview in Tugboat frontend.

#### 2. Use vets-api “Flipper” feature toggles to show / hide page sections or react widgets (vets-website changes)

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

#### 3. Write custom vets-website code to control traffic to unauthenticated element / widget
With the release of chatbot, custom code was written to allow % traffic gating for unauthenticated visitors to the chatbot  React widget.
* Add contact chatbot CTA widget[#20280](https://github.com/department-of-veterans-affairs/vets-website/pull/20280), [PR](https://github.com/department-of-veterans-affairs/vets-website/commit/aeedb0e664c7e265ae8b0ffc9533d5d3108635ad)
* Render the content to a % of users: [#21363](https://github.com/department-of-veterans-affairs/va.gov-team/issues/21363); [PR](https://github.com/department-of-veterans-affairs/vets-website/pull/20378)

#### 4. Publish a CMS page only to Staging (using EntityQueue) in order to stage CMS + content-build + vets-website for viewing off of VA network
Typically, when a CMS page is published, it publishes to production. 
However: as of Sept 2022, a CMS node may be published to staging.va.gov _only_ by using EntityQueue. This is useful to allow previewing a new CMS page that includes a React widget (aka vets-website code), before it reaches production for user acceptance testing (by off-network users) or stakeholder approval. CMS team does not want to get in the habit of having staged nodes that will not publish, so this method should only be used for business cases that warrant it, at Public Websites PO's discretion.

**How to stage:** 
* (Requesting team) cut a [Dark launch request ticket](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/new?assignees=jilladams%2C+wesrowe&labels=Drupal+engineering%2C+Needs+refining%2C+%E2%AD%90%EF%B8%8F+Public+Websites%2C+VA.gov+frontend&template=pw-dark-launch.md&title=CMS%2FReact+content+dark+launch+request%3A+%3Ccontent+info%3E) to Public Websites to request support
  * Specify Node / prod CMS link to the node 
* (Requesting team) When PW has prioritized the work, merge React widget code to main & confirm deploy in vets-website. App code will not appear on prod, **if no live page is calling the app**. 
* (PW) Add the Node ID to the [Staged Content entity subqueue](https://prod.cms.va.gov/admin/structure/entityqueue/staged_content/staged_content?destination=/admin/structure/entityqueue)
* (PW) Request approval from requesting team to publish the node to staging, then publish it.
* (PW/Deployment) 
  * The nightly CMS build must run which pushes prod mirror to the staging site, or PW must request an out of band deployment. 
  * Content-release must then run. Page will be live on Staging after the first content-release after nightly CMS build.

**How to launch**
* (Requesting team) Greenlight to launch
* (PW) Remove the node ID from the [Staged Content entity subqueue](https://prod.cms.va.gov/admin/structure/entityqueue/staged_content/staged_content?destination=/admin/structure/entityqueue)
* (PW/Deployment) 
  * The nightly CMS build must run or PW must request an out of band deployment. 
  * Content-release must then run. Page will be live on Prod after the first content-release after nightly CMS build.

NOTES: 
1. It is _not_ possible to use this mechanism to test updates / additions to an existing live/published CMS page. The dark launch mechanism says: for this node ID, include it in the Staging build, and do _not_ include it in the Production build. So testing an existing node in this way would effectively unpublish it from Production.
2. For reference, the staging CMS database is not implicated in this process / these changes. The front-end of staging.va.gov is populated by a database mirror of Prod, and is rewritten everytime code is merged to prod. The staging CMS, staging.cms.va.gov, has no front-end -- no front-end is updated when the Staging db is modified.

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

We try to avoid page-specific templates, so for example, we would not advocate controlling launch of content for a single page using this method. This is more a content type level option.


#### 6. Use content-build environment checks to publish a static page only to staging
This only applies to static pages, not CMS content. In content-build, we can exclude a static page from production builds.

PW team has done this twice: 
1. Published a static page for Harassment Reporting Tool, [#35161 [FE] Build static landing page in Staging environment](https://github.com/department-of-veterans-affairs/va.gov-team/issues/35161)
2. Published a homepage prototype for UA testing, /homepage-test: [#8340 Iterate VA.gov homepage changes for demo/testing in publicly accessible environment](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8340); [PR](https://github.com/department-of-veterans-affairs/content-build/pull/1081/files#diff-9d481a9d1d5399befb7b3d6424a262b6e38796b248c017c0f6bacddd4bd54814) 

**Gotcha:** this method creates tech debt, and can cause unexpected behavior in future, when we test in Staging and end up with different behavior in Production. E.g. Feature A tests well in staging, but when we reach Prod, behavior is different due to a forgotten environment check in old / untouched code.


Some nuances: https://dsva.slack.com/archives/CT4GZBM8F/p1660937436605269 



## Global header / footer (aka Mega-menu)

**What is:**

Product brief: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/header-footer
Engineering notes: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/header-footer/engineering

VA.gov header and footer, within VA.gov context, including presentation of banners / alerts, and the Veterans Crisis Line modal.

**Example content:**
* URL: [https://www.va.gov/](https://www.va.gov/) 

**More info:**
* Mobile authed header: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/30626](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30626)
* Mobile unauthed header: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/30623](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30623) 



## Header / footer injection

**What is:**

Details: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/header-footer/injected-header

The VA.gov modernization project will take years to bring alllllllll VA content into the main site. In the meantime, VA offices / orgs that use TeamSite (old CMS) may want to adopt the new header/ footer. This can be achieved by “injecting” it, using a set of Javascript / stylesheets, and a cookie.


**More information:**
* https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/header-footer/injected-header
* [Proxy-rewrite README](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/proxy-rewrite/README.md) with implementation & testing details



## Income limits web application

**What is:**

The income limits web app will be a tool that helps veterans understand if their income will be a factor in benefits eligibility. Discovery / design = Q3 2022 goal.

Veterans are eligible for benefits based on a complex matrix of factors including: income, number of children, location, location of service, known exposure to toxic chemicals, etc. Income limit is one factor. 

**Example content:**
* Current income limits information (that will be handled by the new web app): [https://www.va.gov/healthbenefits/apps/explorer/AnnualIncomeLimits/HealthBenefits](https://www.va.gov/healthbenefits/apps/explorer/AnnualIncomeLimits/HealthBenefits)

**More info:**
* [Income Limits App product documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/income-limits-app) in Github
* A6 program GDrive folder: [Income limits](https://drive.google.com/drive/u/1/folders/1uwHUEe8UBHST-didMR68Xfaud-BaI0iJ)
* **Q3 2022 project:** [Income limits web app: Discovery, Design, prototype, user research #9626](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9626)  


## On-site search (using search.gov)

**What is:**

VA.gov uses search.gov as its engine. Public Websites owns that integration, and display of search results within the site. 

**Example content:**
* URL: [https://www.va.gov/search/?query=test&t=false](https://www.va.gov/search/?query=test&t=false)  
* Example issue: TODO

**Note on API keys**
* API keys for search and search-typeahead are different keys generated by api.data.gov.  At the time this was written, keys are maintained by platform devops, and the keys belong to the universal devops user.  Should the email tied to these keys be lost, new ones will need to be generated

**More info:**
* [Getting Search.gov access](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/search-playbook.md#getting-access)
* A6 program GDrive folder: [Search](https://drive.google.com/drive/u/1/folders/1ePwRE6YPBk1VE6zAKzX2SxgtMdYwsV0r)
* [On Site Search - product docs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/on-site-search)
* Design system: [Search input](https://design.va.gov/components/search-input)
* Search.gov indexing documentation: https://search.gov/indexing/indexing-with-searchgov.html 
* 2021: consistent UI styling for search implementations: [https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/on-site-search/initiatives/search-ui-consistency](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/on-site-search/initiatives/search-ui-consistency) 
* [VFS Product Directory: Search](https://depo-platform-documentation.scrollhelp.site/getting-started/search)


## Non-facility Redirects

**What is:**

Request to change a URL and/or implement a redirect for a URL. Also for vanity URL requests. 

Facilities team can handle redirects for Facility URLs / content. 

**Workflow:**
[Redirects IA Context & Workflow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/process/redirects.md)
* Another team requests a URL redirect
* Sitewide Content team vets the request – IA will approve the requested URLs (Process: [Platform IA Redirects](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/process/redirects.md))
* Sitewide Content team assigns the issue to Public Websites via va.gov-team issue
* Public Websites moves the issue to va.gov-cms repo, assigns in sprint, completes work, merges
* If server-side redirect: Revproxy build job must deploy the code: http://jenkins.vfs.va.gov/job/deploys/job/revproxy-vagov-prod/ -- this job runs automatically at ~10a ET Mon-Thurs. (Job is owned by the Platform team. ) 
* If client-side redirect: vets-website deploys the code. 
* PW verifies in prod, before closing the ticket

### If you need an **Out of Band deployment** (off cycle deploy):
  * open a #vfs-platform-support request, "Off-out-band deployment." Example: https://dsva.slack.com/archives/CBU0KDSB1/p1664314493443639
  * Open an [OOB Github](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=frontend%2C+operations%2C+platform-tech-team-support&projects=&template=OOB-Deploy-Request.md&title=OOB+Deploy+Request) request, and link to the Platform support thread.
  * Plan to write a [post-mortem](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/1c1242cafc9f1d614abd933db5c92d13e1a2a19a/Postmortems/README.md) to describe why OOB was required.


**Example:**
* Issue template: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=Sitewide+IA&template=redirect-request.md&title=Redirect+Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=Sitewide+IA&template=redirect-request.md&title=Redirect+Request)
* Example requests: 
   * [https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9971](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9971)
   * [https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9515](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9515) 
   * [https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9066](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9066) 
   * [https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9813](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9813) 

**More info:**
* [Platform Redirect Implementation strategy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/redirect-implementation-strategy.md) - context, describes various types of redirects, and mechanisms for carrying them out, including server-side vs. client-side.
  * [Redirects(sensitive repo)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsa/teams/public-websites/redirects.md) - this doc will be merged into the above Implementation Strategy doc 
* [Redirects IA Context & Workflow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/process/redirects.md)
* [RevProxy deploy job info](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/infrastructure/reverse_proxy.md)
* [Proxy-rewrite info](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/proxy-rewrite/README.md) - relevant for client-side redirects from TeamSite pages

## Unauthed React Healthcare widgets

**What is:**

Public Websites manages a React application for a CTA widget that appears on 5 Health care tool landing pages: 
* refill prescriptions
* make appointment
* get VA medical records
* send secure message
* view lab or test results

Calls to action on these widgets point users to the Electronic Healthcare Records (EHR) system used by their primary healthcare facility. Three flavors of EHR: 
* MyHealtheVet - Digital platform of the VistA healthcare provider. CTAs that point to MHV, once a user logs in, will take users out to MHV's platform.
* Oracle Health (formerly Cerner) - New EHR provider as of 2020, used at some VAMC systems/facilities. Systems were migrating to Cerner (at the time) through 2022; migrations on pause as of July 2022. For Veterans who have patient records at an Oracle Health facility, CTAs that point to Oracle Health will also appear and take those users out to Oracle Health's digital platform.
* MyHealtheVet on VA.gov - An in-house digital platform built by the VA. CTAs that point to MHV on VA.gov will take users to a VA.gov dashboard, where both MHV and Oracle Health data is pulled in via APIs.

As Health care tool teams are updating landing pages or CTA actions to point to MyHealtheVet on VA.gov, Public Websites may be called up on as code reviewers to review changes and ensure that the unauthed experience for these 5 widgets behaves as expected. 

**Other unauthed react widgets**
* BTSSS - Epic where it was created: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9157
* Travel Pay -

Beneficiary travel has its own product team now that should be coordinated with for changes: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/README.md

**Governance / Content:**

* [Documentation re: ownership of the health care tools](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/healthcare-widget-support/readme.md)
* Epic tracking the plan to transition ownership of the CTA React widget from Public Websites to Health Tools teams: department-of-veterans-affairs/va.gov-cms#16547
* Content is provided by Sitewide Content team
* Oracle Health cutover information is publicized in DSVA slack: #vagov-oracle-launch-coordination

**More info:**
* [Healthcare system cutover to Cerner (now Oracle health): runbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/healthcare-widget-support/how_to_set_up_vamc_cerner_within_va_health_care_portals.md)
* [React widget flows](https://app.mural.co/t/vagov6717/m/vagov6717/1651166973924/bc8bc44cab4e4ae7b84819d22ba89b11aa70e5e1?invited=true) (Mural)
* [CMS source of truth documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/public-websites/healthcare-widget-support/cms-source-of-truth) (github) - to determine which healthcare records management system is used by a VA medical center system 
* Oracle Health / Cerner cutovers were paused in 2022 and may resume in 2024.


## VA.gov Homepage

**What is:**

Site landing page. Incorporates some CMS content, and is granted exceptions from the design system. 

The homepage includes links to key traffic areas of the site. These links are referred to as “Top Tasks.”

2022: a special team led by Michelle Middaugh is managing product management and user research for changes to the homepage. Public Websites is responsible for technical changes/build only.

**Example content:**
* URL: [https://www.va.gov/](https://www.va.gov/) 

**More info:**
* Product documentation: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/home-page
* A6 program GDrive folder:[Homepage](https://drive.google.com/drive/u/1/folders/1a-dg6-nWuqNTxO9lds4iqWHo5DxYj_z8)
* [2022 Homepage redesign iteration:](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/initiatives/2022-home-page-redesign-initiative/README.md#home-page-redesign-iteration) design refresh 
   * [[Epic] VA.gov Home page redesign #40845](https://github.com/department-of-veterans-affairs/va.gov-team/issues/40845) 
* 2022 Top Tasks unmoderated research/info: [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/public-websites/research/Veteran-tasks/unmoderated/research-findings.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/public-websites/research/Veteran-tasks/unmoderated/research-findings.md) 
* 2022 Top Tasks moderated research/info: [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/public-websites/research/Veteran-tasks/moderated/research-findings.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/public-websites/research/Veteran-tasks/moderated/research-findings.md)
* [VFS Product Directory: VA.gov Homepage](https://depo-platform-documentation.scrollhelp.site/getting-started/va-gov-homepage)


## Veterans Crisis Line modal

The Veterans Crisis Line is a critical feature of VA.gov. Public Websites supports it via the modal included in the global header. Most defects related to this modal functioning correctly (open, close, clickable CTAs, etc) are urgent priority.

![3](https://user-images.githubusercontent.com/85581471/186541162-283bd768-1af2-420c-b6ae-ac80047500a3.png)

---

# Previous PW Projects

Projects the previous PW team worked on, that are in maintenance mode to date. 


## Appeal Modernization Process

https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/AMA-follow-up/AMA%20Follow%20Up%20Product%20Outline.md

* Affected pages: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/7521#issuecomment-611102928](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7521#issuecomment-611102928) 
* 508 defects: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/7647](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7647) 


## Disability rating calculator

Product: https://www.va.gov/disability/about-disability-ratings/
Docs: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/ratings-calculator/README.md (tl;dr: they're empty as of 12/2023)

## Downtime messaging

When sites or apps go down, there are 2 ways to handle downtime: 
1. Using formal downtime notifications that can be set up in PagerDuty, if your app has an external API dependency.
2. Using a full-width banner (CMS content type) that can publish to specific pages in VA.gov.

When using a full-width banner, Public Websites maintains the content type itself. If you are simply publishing a new banner for a downtime, activity should be managed with Sitewide Content, Accessibility, and IA who govern content for individual banners. 

Platform docs: 
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


## Higher-Level Review static landing page

[https://github.com/department-of-veterans-affairs/va.gov-team/issues/4139](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4139) 

Static CMS page 


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
