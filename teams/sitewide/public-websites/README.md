# Sitewide Public Websites

Public Websites team supports the modernized, unauthenticated veteran experience on VA.gov.

**Slack**: [#sitewide-public-websites](https://dsva.slack.com/channels/sitewide-public-websites)

**Github / work tracking**
- [va.gov-cms Sprint board](https://github.com/department-of-veterans-affairs/va.gov-cms/#workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/board?labels=%E2%AD%90%EF%B8%8F%20public%20websites)  (install Zenhub browser plugin)
- Team label: `⭐️ Public Websites`

### Points of Contact 
- Product Owner: Dave Conlon (@davidconlon)
- Program Management: Clarence Maeng (@cmaeng)
- Product Management: Wes Rowe (@wesrowe)
- Delivery Management: Jill Adams (@jilladams)
- Design: Florence McCafferty (@fmccaf1)
- FE Engineering: Ryan Koch (@ryguyk), Allison Lu (@allisonlu), Josh Mills (@jtmst)
- Drupal Engineering: Daniel Sasser (@dsasser), Christia Troyer (@chri5tia)


### Key Documents

- Team Charter - TBD
- Roadmap - TBD
- [Product overview Mural](https://app.mural.co/t/vagov6717/m/vagov6717/1658961045082/cedcb1c5c42489e47be37733c73890ef890070ae?sender=u252e7152800e3981889d1910)


---

# Products we support

[Sitewide Public Websites purview mural](https://app.mural.co/t/vagov6717/m/vagov6717/1658961045082/cedcb1c5c42489e47be37733c73890ef890070ae?sender=u252e7152800e3981889d1910)

Additional inforrmation: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/public-websites

| [CMS content / functionality](#cms-content--functionality) | [Non-CMS content / products](#non-cms-content--products) | [Previous PW Projects](#previous-pw-projects) |
| ------------- | ------------- | ------------- |
| [Benefits Hub Landing Page](#benefits-hub-landing-page) | [Breadcrumbs](#breadcrumbs) |  [Appeal Modernization Process](#appeal-modernization-process) |
| [Benefits Detail Page](#benefits-detail-page) | [Shadow / dark launches of content](#shadow--dark-launches-of-content) | [Disability rating calculator](#disability-rating-calculator) |
| [Campaign Landing Pages](#campaign-landing-pages-clp) |[Global header / footer (aka Mega-menu)](#global-header--footer-aka-mega-menu) | [Downtime messaging](#downtime-messaging) |
| [Events List](#events-list) | [Header / footer injection](#header--footer-injection) | [Harassment Reporting Tool](#harassment-reporting-tool) |
| [Event](#event) | [Income limits web application](#income-limits-web-application) | [Higher-Level Review static landing page](#higher-level-review-static-landing-page) |
| [FAQ Page](#faq-page) | [Offices](#offices) | [“How to apply” wizards](#how-to-apply-wizards) |
| [Find a form / VA Forms (+ Forms DB import)](#find-a-form--va-forms) |  | [React widgets governance](#react-widgets-governance)|
| [Full-width Alert](#full-width-alert) | [Non-facility Redirects](#non-facility-redirects) | [Yellow-ribbon tool](#yellow-ribbon-tool) |
| [Promo Banner](#promo-banner) | [Unauthed React widgets](#unauthed-react-widgets) | . |
| [Outreach Materials Library (Publication listing & page)](#outreach-materials-library-publication-listing-page--publications) | [VA.gov Homepage](#vagov-homepage) | .  |
| [Q&A - single](#qa---single) | [VA site search (using search.gov)](#va-site-search-using-searchgov) |  . |
| [Resources & Support detail page](#resources-and-support-detail-page) | [Veterans Crisis Line modal](#veterans-crisis-line-modal) | .  |
| [Translations](#resources-and-support-detail-page) | [General VA.gov unauth UI](#general-vagov-unauth-ui) | .  |

---

# CMS content / functionality


### Benefits Hub Landing Page

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
* [2018-2019 Benefit hub optimization effort](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/public-websites/Benefit%20Hub) (github)


### Benefits Detail Page 

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


### Campaign Landing Pages (CLP)

**What is:**

A Drupal content type that can be used for short-lived marketing campaigns. Intended to prevent marketing teams from creating freestanding websites, and keep content centrally managed. Campaign must be signed off by PO before implementing, and URL paths are governed by Sitewide Content team.

**Example content:**
* URL: [https://www.va.gov/initiatives/vote/](https://www.va.gov/initiatives/vote/) 
* CMS: [https://staging.cms.va.gov/initiatives/vote](https://staging.cms.va.gov/initiatives/vote) 
* Example issue: [[Campaign Landing Page] - VA VOTE #37773](https://github.com/department-of-veterans-affairs/va.gov-team/issues/37773) 

**Governance / Editor guidance:**
* Governance: [VA.gov.Campaign.Landing.Page_Governance_Product_Guide_01Mar2022.pptx](https://docs.google.com/presentation/d/1y7FnBuaOrbfR_Bap0zAhMceVO8jlEeX9/edit#slide=id.p1) 
* Primary editors: Team that originates the request, with authorization from PO and URL guidance from Sitewide Content
* [Editor guidance: How to manage a CLP](https://prod.cms.va.gov/help/campaign-landing-pages/how-to-manage-campaign-landing-pages) 

**Workflow:**
1. Teams will request a CLP via ticket
2. Sitewide Content team approves the concept / requested URL
3. Public Websites creates the Drupal node as draft
4. Public Websites handles redirects for any vanity URLs that don’t fit the automatic structure
5. Requesting team populates content, publishes, and deprecates

**More info:**
* A6 program GDrive folder:[ Campaign Landing Page](https://drive.google.com/drive/u/1/folders/1pyvDhf6ZdvBehFs3lFzyAF2kMeGkazX6)
* [campaign-landing-page-templates & Docs - Github](https://github.com/department-of-veterans-affairs/va.gov-team/tree/69833737d9fe22b8990bb987e7c50de13205c5d5/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates) 
* [CLP runbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsa/teams/public-websites/campaign-landing-pages.md) - team runbook for managing CLP requests


### Events List

**What is:**

Template that displays chronological list of Events published to that list. There are two types of events lists: those that are associated with National VA (Outreach & Events hub) and those associated with specific VA Medical Center (VAMC) facilities.

Events / lists may only be managed by editors with permissions for that specific VAMC facility or office (aka “Section).

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


### Event

**What is:**

Drupal content type for online or in-person events like support groups, outreach events, public lectures, pickleball games and more.

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


### FAQ page

**What is:**

A Drupal content type that is used to aggregate [Q&A nodes](tbd url) (jumplink). Often published with a URL path in /resources/, indistinguishable to front-end users from other [Resources & Support ](tbd url)(jumplink) content.

**Example content:**
* URL: [https://va.gov/resources/signing-in-to-vagov](https://va.gov/resources/signing-in-to-vagov) 
* CMS: [https://staging.cms.va.gov/resources/signing-in-to-vagov](https://staging.cms.va.gov/resources/signing-in-to-vagov) 

**Governance / Editor guidance:**
* Primary editors: Sitewide Content team

**More info:**
* COPE effort to make Q&A resuable on [Resources & Support ](tbd url)(jumplink)  = [https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8630](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8630) 


### Find a form / VA Forms

**What is:**

Forms are a critical part of the Veteran experience for applying for benefits & services. A Forms database is managed outside the context of Public Websites team or the Drupal CMS, and is the source of truth for Form data and PDFs. We import data from the Forms DB, and store data about each form as a node.

Forms are then findable from the “[Find a form](https://www.va.gov/find-forms/)” interface – a search / listing of VA Forms results.


#### Forms DB import

The import uses Row ID as the unique identifier to map importing content to Drupal nodes. Some fields in Drupal may be customized from within Drupal after import, visible on each node within “Forms DB data” expander.
* [VA Forms Content Flow Topic Dive](https://www.youtube.com/watch?v=CuPI8DB7aR0) - describes the import process in more detail
* [VA Forms - Flagged content dashboard](https://prod.cms.va.gov/admin/content/flagged?type=va_form&workbench_access_section__section=All) - CMS dashboard of imported/updated Forms content, intended to be used for Editors to update / modify after import as necessary. Not recently used.

The Forms DB system has some recurring flaws: 
* After migration, forms in CMS may receive incorrect metadata (e.g. row ID is not reliable tie to form metadata, unknown cause)
* Veterans may report that PDF links from a Form node page are broken. PDFs are hosted on a server outside our purview, owned by the Forms DB team.
* An existing form may be duplicated with a new row ID, as a result of Forms DB deleting / recreating, rather than editing, a Form.

**Example content:**
* A6 program GDrive folder: [Find a VA Form](https://drive.google.com/drive/u/1/folders/18IaP0SDKdq5Zi9Cp29Od7gwSdg_keoAV)
* Forms landing / search: [https://www.va.gov/find-forms/](https://www.va.gov/find-forms/) 
* Form URL: [https://va.gov/find-forms/about-form-10-0388-4](https://va.gov/find-forms/about-form-10-0388-4)   
* CMS: [https://staging.cms.va.gov/node/6150/edit](https://staging.cms.va.gov/node/6150/edit) 
  * “Forms DB Data” on a Form node indicates what data has been imported, vs. what can be edited in Drupal
  * Drupal Admins may update data within “Forms DB Data” on a node, but updates will be overwritten by next migration.


**Governance / Editor guidance:**
* Primary editors:  Forms managers update Form data outside the context of the CMS, in the “Forms database”. That content is migrated into Drupal and can be finessed in the CMS.

**More info:**
* [Triage runbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/README.md#troubleshooting) for errors / defects
***Q3 2022 project:** to understand more about the Forms DB infrastructure, in an effort to help stabilize / reduce risk of downstream issues: [https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9724](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9724) 
* [VA Forms Library Overview ](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-overview)(Platform docs) - IS NOT RELATED. This pertains, instead, to making usable online forms within VA.gov 


### Full-width Alert

aka : Banner

**What is:**
Banners are fixed content at the top of the page used for dismissible announcements such as new tools, news, etc. 

Publishing/updating a full width banner alert triggers a content release.

Use case: OPIA could get a call at any time day or night and need to be able to update information to be prominently displayed. So: OPIA owns 1 node (of 2) of this content type, and can update or remove as needed, and save/publish to trigger a content release.

Currently, www.va.gov supports two types of Full Width Alerts:
1. **Informational alerts,** which are used to provide helpful information to a user or something that warrants attention. Not used for negative consequences.
2. **Warning alerts,** which are used to warn a user, such as when there are negative consequences, but necessary when something has gone wrong.

You can read more about these alert types in the [VA Design System](https://design.va.gov/components/alertboxes) or read more about Full Width Alerts in the (opens in a new window).

**Example content:**
* CMS: 
  * [https://staging.cms.va.gov/banner/covid-19-vaccines-at-va](https://staging.cms.va.gov/banner/covid-19-vaccines-at-va)  
  * OPIA standing banner: [https://staging.cms.va.gov/node/33217/edit](https://staging.cms.va.gov/node/33217/edit) 


**Governance / Editor guidance:**
* Primary editors: Sitewide Content team
* **Governance:** [https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/global/banners](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/global/banners) 
* Old info, some useful references: [https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/3c243ef4aeb3e68f14993f8f429764f98a5cfddd/VA.gov-homepage-banner-texts-preapproved-v5-020919.pdf](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/3c243ef4aeb3e68f14993f8f429764f98a5cfddd/VA.gov-homepage-banner-texts-preapproved-v5-020919.pdf) 

**More info:**
* A6 program GDrive folder: [Banners](https://drive.google.com/drive/u/1/folders/1DAT-Pr_xEwNcnpqClgXFrvycF8MpS5Z4)
* [Banner](https://design.va.gov/components/banner) : va.gov design system - describes usage / positioning
* [Knowledge Base](https://staging.cms.va.gov/node/34828)
* Previous docs/ initiatives: 
   * Q42021 notes re: character count / governance, name change to full-width alert: [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/global/banners/promobanners/CMS-PW-notes-2021-11-24.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/global/banners/promobanners/CMS-PW-notes-2021-11-24.md) 
   * Homepage-only banner needed for OPIA (Q1 2021) [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/home-page-banner/product-outline.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/home-page-banner/product-outline.md) 
   * Design considerations / use cases (Q2 2020) [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/banners/banner-alerts.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/banners/banner-alerts.md) 
   * Initial build (Q2 2020): [https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/public-websites/emergency-banner](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/public-websites/emergency-banner) 


### Promo Banner

**What is:**

A promo banner is fixed content at the bottom of the viewport used for dismissible announcements such as new tools, news, etc.

Currently, www.va.gov supports three types of promo banners:
1. **Benefit announcements**, which relate to content focused on benefits: a new tool, a new online benefit application, etc.
2. **Email signups**, which relate to email signups for various VA updates / alerts / communications.
3. **News stories**, which relate to newly received or noteworthy information about the VA.

You can read more about these promo types in the [VA Design System](https://design.va.gov/components/promo-banners) or read more about Promo Banners in the [Knowledge Base](https://prod.cms.va.gov/node/39828) (opens in a new window).

**Example content:**
* CMS: [https://staging.cms.va.gov/node/48052/edit](https://staging.cms.va.gov/node/48052/edit) 

**Governance / Editor guidance:**
* Primary editors: Sitewide Content team

**More info:**
* [Promo banner](https://design.va.gov/components/promo-banners): va.gov design system


### Outreach Materials Library (Publication Listing Page) / Publications

**What is:**
Currently there is one Publication Listing Page, the Outreach Library, where all Publications appear.
Not modified since launch

**Example content:**
* URL: [https://www.va.gov/outreach-and-events/outreach-materials/](https://www.va.gov/outreach-and-events/outreach-materials/) 
* CMS: [https://staging.cms.va.gov/node/412/edit](https://staging.cms.va.gov/node/412/edit) 

**Governance / Editor guidance:**
* Primary editors: Sitewide Content team


### Q&A - single

**What is:**

A Question / Answer node type. Prior to the creation of this node type, Q&A data could be / was entered in Drupal “paragraphs”, but was not reusable (with edge case exceptions). Q&A nodes, on the other hand, can be referenced on additional node types such as Resources & Support or FAQ pages, making them reusable.

Q&As may be used on Resources & Support pages, or FAQ pages, as an entity reference. They may also have a standalone Resources and support page. (Not typical.)

**Example content:**
* URL: [https://www.va.gov/resources/gi-bill-and-other-va-education-benefit-payments-faqs/#:~:text=When%20will%20I%20get%20my,way%20to%20receive%20your%20payment](https://www.va.gov/resources/gi-bill-and-other-va-education-benefit-payments-faqs/#:~:text=When%20will%20I%20get%20my,way%20to%20receive%20your%20payment) – Q&A appears on FAQ page
* CMS: 
  * Q&A node: [https://staging.cms.va.gov/resources/when-will-i-get-my-first-gi-bill-payment/edit](https://staging.cms.va.gov/resources/when-will-i-get-my-first-gi-bill-payment/edit) 
  * FAQ where Q&A is added as entity reference, under Q&A groups: [https://staging.cms.va.gov/node/15640/edit](https://staging.cms.va.gov/node/15640/edit) 


**Governance / Editor guidance:**
* Primary editors: Sitewide Content team

**More info:**
* **Q3 2022 project:**: adding reusable Q&As to Resources & Support content type: [https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8630](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8630) 


### Resources and support Detail Page

**What is:**

A page that contains in-depth information about a single resource available to Veterans or other beneficiaries.

**Example content:**
* URL: [https://va.gov/resources/choosing-between-urgent-and-emergency-care](https://va.gov/resources/choosing-between-urgent-and-emergency-care) 
* CMS: [https://staging.cms.va.gov/node/37196/edit](https://staging.cms.va.gov/node/37196/edit) 

**Governance / Editor guidance:**
* Primary editors: Sitewide Content team, for now. Goal: to expand to Editors in other areas.

**More info:**
* A6 program GDrive folder: [Resources and Support](https://drive.google.com/drive/u/1/folders/1uqKHA1Wq91yPB91TdWBWGz0CV7gE8kaM)
* 2022 Sitewide Content research project around clarity of this content and how Editors in other areas might have challenges / need support: [https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/resources-and-support-author-pilot](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/resources-and-support-author-pilot) 


### Translations

**What is:**

Q3 2022, only a set of COVID- and PACT-act-related pages on VA.gov are translated, to Spanish and Tagalog. The decoupled Drupal site creates challenges for translation, as we cannot easily use Drupal’s native capabilities for serving translated pages. Public Websites team is involved in: 
* Maintaining currently translated pages
* Supporting new translation of any pages that require it 
* Q3 2022 are researching options for a more robust translation/localization solution

**Example translated content:**
* URL: [https://www.va.gov/health-care/covid-19-vaccine/](https://www.va.gov/health-care/covid-19-vaccine/)
* CMS: 
  * En: [https://staging.cms.va.gov/node/11463/edit](https://staging.cms.va.gov/node/11463/edit)
  * Es: [https://staging.cms.va.gov/node/16359/edit](https://staging.cms.va.gov/node/16359/edit)
  * Tl: [https://staging.cms.va.gov/node/16413/edit](https://staging.cms.va.gov/node/16413/edit) 


**More info:**
* A6 program GDrive folder: [Translations & i18n](https://drive.google.com/drive/u/1/folders/13eRn2gM759p5NM1p90bnWBZYzQxZ3MGd)
* How current translations work: [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content-localization/README.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content-localization/README.md) 
* [Translation support #9622](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9622) - epic describing upcoming work / research for translations (Q3 2022) 
* **Q3 2022 project:** Upcoming translation effort from Sitewide Content: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/45053](https://github.com/department-of-veterans-affairs/va.gov-team/issues/45053) 

---

# Non-CMS content / products

### Breadcrumbs

[https://github.com/department-of-veterans-affairs/va.gov-cms/issues/10308](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/10308) 


### Shadow / dark launches of content

Sometimes content generated by the Sitewide Content team, other teams, or just portions of a page may need to “dark launch” meaning: not be available to all site users in production. We have options for how to manage dark launches: 

### It is **not** currently possible to
* Publish a page only to Staging via CMS.  (Adding NodeQueue would enable that.) The staging database is a mirror of Prod, rewritten everytime code is merged to prod, and no front-end is updated when the Staging db is modified directly. 
* stage CMS + content-build + vets-website changes for viewing off of VA network
* stage CMS + content-build + vets-website changes on Tugboat. Tugboat only supports CMS + content-build: #6434   is an open Platform CMS ask to enable this.
* hide a specific CMS node from robots.txt & the sitemap. Not ticketed, and would/will require custom code. Notes in Option 2 above.

### It IS currently possible to
#### 1. Use vets-api “Flipper” feature toggles to show / hide page sections or react widgets (vets-website changes)

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

#### 2. Write custom vets-website code to control traffic to unauthenticated element / widget
With the release of chatbot, custom code was written to allow % traffic gating for unauthenticated visitors to the chatbot  React widget.
* Add contact chatbot CTA widget[#20280](https://github.com/department-of-veterans-affairs/vets-website/pull/20280), [PR](https://github.com/department-of-veterans-affairs/vets-website/commit/aeedb0e664c7e265ae8b0ffc9533d5d3108635ad)
* Render the content to a % of users: [#21363](https://github.com/department-of-veterans-affairs/va.gov-team/issues/21363); [PR](https://github.com/department-of-veterans-affairs/vets-website/pull/20378)

#### 3. Use CMS feature flags to show / hide fields or portions of templates in content-build
- CMS docs https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/READMES/interfaces.md#featureflags 
- Front-end usage docs: https://github.com/department-of-veterans-affairs/vspwiki/blob/master/frontend/pages/platform/tools/feature-toggles.md#testing-cms-feature-toggles 

CMS Feature flags can control visibility from the template layer, but cannot control query content / behavior.
CMS feature toggles take effect at the content-build level, and are not dynamically controlled with javascript, so do require a content release to take effect in prod.

For example, if a new feature is launching, that calls new fields / exposes new layout of a template, we may use CMS feature flags to wrap the new markup in order to show / hide the changes for testing or to simplify rollback. 

We try to avoid page-specific templates, so for example, we would not advocate controlling launch of content for a single page using this method. This is more a content type level option.


#### 4. Use content-build environment checks to publish a static page only to staging
This only applies to static pages, not CMS content. In content-build, we can exclude a static page from production builds.

PW team has done this twice: 
1. Published a static page for Harassment Reporting Tool, [#35161 [FE] Build static landing page in Staging environment](https://github.com/department-of-veterans-affairs/va.gov-team/issues/35161)
2. Published a homepage prototype for UA testing, /homepage-test: [#8340 Iterate VA.gov homepage changes for demo/testing in publicly accessible environment](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8340); [PR](https://github.com/department-of-veterans-affairs/content-build/pull/1081/files#diff-9d481a9d1d5399befb7b3d6424a262b6e38796b248c017c0f6bacddd4bd54814) 

**Gotcha:** this method creates tech debt, and can cause unexpected behavior in future, when we test in Staging and end up with different behavior in Production. E.g. Feature A tests well in staging, but when we reach Prod, behavior is different due to a forgotten environment check in old / untouched code.


Some nuances: https://dsva.slack.com/archives/CT4GZBM8F/p1660937436605269 



### Global header / footer (aka Mega-menu)

**What is:**

VA.gov header and footer, within VA.gov context, including presentation of banners / alerts, and the Veterans Crisis Line modal.

**Example content:**
* URL: [https://www.va.gov/](https://www.va.gov/) 

**More info:**
* 2019 research for launch: [https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/global/header-footer-and-navigation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/global/header-footer-and-navigation)
* Mobile authed header: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/30626](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30626)
* Mobile unauthed header: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/30623](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30623) 


### Header / footer injection

**What is:**

The VA.gov modernization project will take years to bring alllllllll VA content into the main site. In the meantime, VA offices / orgs that use TeamSite (old CMS) may want to adopt the new header/ footer. This can be achieved by “injecting” it, using a set of Javascript / stylesheets, and a cookie.

This will only work for standard TeamSites. 

[DEPO teamsite overview](https://depo-platform-documentation.scrollhelp.site/developer-docs/teamsite-overview) - explains the cookie mechanisms, and has notes on testing. 

**Workflow:**
1. **Requesting team: domains -** Team should provide the domain or list of domains where the users will land and see the header/footer injected. Once provided, our team can create tickets and schedule our work. \

2. **Requesting team: JS/CSS -** Add the listed set of scripts to TeamSite’s &lt;head> tag, described here: [https://depo-platform-documentation.scrollhelp.site/developer-docs/teamsite-overview#TeamSiteoverview-ScriptsandTeamSiteAdministration](https://depo-platform-documentation.scrollhelp.site/developer-docs/teamsite-overview#TeamSiteoverview-ScriptsandTeamSiteAdministration) 
    1. Do _not_ include settings.js - that file is deprecated but docs are out of date \

3. **PW: allowlists -**Our team will add the domains to several allowlists. This change will allow your team to test the injected header/footer. We'll let you know when our updates are deployed and your testing can begin. \

4. **Requesting team: Testing & style fixes -** Your team will test by setting a cookie in your browser. The main issues you may see are styling related, where styles from your site may affect the presentation of the header/footer. Those issues can/should be fixed by updating the CSS of your site / app (rather than by modifying styles for the header / footer globally). This is the bulk of your work, and if no style issues occur, it could potentially be a no-op \
 
To test:
  1. Load the provided domain
  2. Open developer tools, Console
  3. Type `document.cookie = "proxyRewrite=true;"`, and hit Enter. This creates a cookie that you will then find under Application cookies in dev tools until you clear cookies.
  4. Refresh the page, and injected header should load. \

5. **PW: Production update -**When your testing / changes are complete & you're ready to launch: notify us. We'll make an additional code update to permanently set the cookie that controls injection. When that code change deploys, the header/footer will be live on your site.

**Example content:**
* URL: [https://ea.oit.va.gov/](https://ea.oit.va.gov/) - uses injected header/footer
* Example issue: 
  * [Issue: (PW) Injected Header/Footer - prep for testing](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/new?assignees=jilladams&labels=%E2%AD%90%EF%B8%8F+Public+Websites%2C+VA.gov+frontend%2C+Injected+header%2C+Needs+refining&template=injected-header.md&title=Injected+header%2Ffooter%3A+%3Cdomain%28s%29%3E) - template
  * [Issue: (PW) Injected Header/Footer - publish to prod ](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/new?assignees=jilladams&labels=%E2%AD%90%EF%B8%8F+Public+Websites%2C+VA.gov+frontend%2C+Injected+header%2C+Needs+refining&template=injected-header-publish.md&title=Injected+header%2Ffooter%3A+Publish+to+prod%3A+%3Cdomain%28s%29%3E)- template


**More information:**
* 2019 audit of sites not using the global header megamenu: [va.gov-team#1877](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1877), [va.gov-team#2394](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2394#issuecomment-543775751)
* 2019 product brief on [header injection](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/64e5b99f39fad7551b08d5b4da7141b56128e0f4/VA.gov%20Relaunch%202018/Teamsite/ProductOutline.md)
* [Veteran-facing legacy benefit pages on TeamSite: Retirement FAQs](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/3c243ef4aeb3e68f14993f8f429764f98a5cfddd/Legacy-benefit-pages-retirement-FAQs-061919.pdf) 


### Income limits web application

**What is:**

The income limits web app will be a tool that helps veterans understand if their income will be a factor in benefits eligibility. Discovery / design = Q3 2022 goal.

Veterans are eligible for benefits based on a complex matrix of factors including: income, number of children, location, location of service, known exposure to toxic chemicals, etc. Income limit is one factor. 

**Example content:**
* Current income limits information (that will be handled by the new web app): [https://www.va.gov/healthbenefits/apps/explorer/AnnualIncomeLimits/HealthBenefits](https://www.va.gov/healthbenefits/apps/explorer/AnnualIncomeLimits/HealthBenefits)

**More info:**
* A6 program GDrive folder: [Benefits Eligibility Tool](https://drive.google.com/drive/u/1/folders/1FvuprvP7-6tpn8jrctRrms8MTOqPvuAL)
* A6 program GDrive folder: [Income limits](https://drive.google.com/drive/u/1/folders/1uwHUEe8UBHST-didMR68Xfaud-BaI0iJ)
* **Q3 2022 project:** [Income limits web app: Discovery, Design, prototype, user research #9626](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9626)  


### Offices

**What is:**

The VA is comprised of multiple administrative offices, e.g. VHA, VEO, NCA, VBA, etc. ([diagram](https://app.mural.co/t/vagov6717/m/vagov6717/1643724063628/1654203c1a0d6c763bbd5c969febf94ec476df79?sender=kevinwalsh8610)) Each of these offices contributes their own content to the Veteran-facing pages of the modernized VA.gov CMS. However, information _about_ the offices themselves is not necessarily a Veteran priority, e.g. organization of, administrative officials, etc. The Public Websites team intends to build a product that organizes information about these Offices, synced from Salesforce, and displays that content within VA.gov somewhere. 

**Example content:**
* TBD

**More info:**
* This project was launched in ~Feb 2022, but is blocked by Salesforce &lt;>Lighthouse integration. 
* Epic: [https://github.com/department-of-veterans-affairs/va.gov-cms/issues/7587](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/7587) 


### Non-facility Redirects

**What is:**

Request to change a URL and/or implement a redirect for a URL. Also for vanity URL requests. 

Facilities team can handle redirects for Facility URLs / content. 

**Workflow:**

* Another team requests a URL redirect
* Sitewide Content team vets the request – IA will approve the requested URLs
* Sitewide Content team assigns the issue to Public Websites via va.gov-team issue
* Public Websites moves the issue to va.gov-cms repo, assigns in sprint, completes work, and verifies in prod


**Example:**
* Issue template: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=Sitewide+IA&template=redirect-request.md&title=Redirect+Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=Sitewide+IA&template=redirect-request.md&title=Redirect+Request)
* Example requests: 
   * [https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9971](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9971)
   * [https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9515](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9515) 
   * [https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9066](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9066) 
   * [https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9813](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9813) 

**More info:**
* [https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsa/teams/public-websites/redirects.md](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsa/teams/public-websites/redirects.md) 


### Unauthed React widgets

**What is:**

Public Websites manages 5 React widgets related to Veteran benefits:

* refill prescription
* make appointment
* get VA medical records
* send secure message
* view lab or test results

Calls to action on these widgets point users to the Electronic Healthcare Records (EHR) system used by their primary healthcare facility. The VA historically has used an EHR provider called VistA. In 2020, the VA began migrating facilities to a new EHR provider called Cerner. As each facility migrates, calls to action must point to locations within the Cerner system, rather than the VistA system. 

**Governance / Content:**

* Content is provided by Sitewide Content team
* Cerner cutover information is publicized in DSVA slack: #vagov-cerner-launch-coordination

**More info:**
* A6 program GDrive folder:[ React Widgets](https://drive.google.com/drive/u/1/folders/1BnLFus_BECGARlCfoSKKexaGe7KiLqzo)
* [Healthcare system cutover to Cerner: runbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/Cerner-Support/how_to_set_up_vamc_cerner_within_va_health_care_portals.md)
* [React widget flows](https://app.mural.co/t/vagov6717/m/vagov6717/1651166973924/bc8bc44cab4e4ae7b84819d22ba89b11aa70e5e1?invited=true) (Mural)
* **Q2/Q3 2022 project:** Active effort to replace old hard coded data file with Drupal as source of truth for which healthcare records management system is used by a VA medical center system. 
   * [CMS source of truth documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/public-websites/Cerner-Support/cms-source-of-truth) (github)
* Cerner cutovers have been complex and not additional facilities will move to Cerner in 2022. Cerner cutovers should resume in 2023.


### VA.gov Homepage

**What is:**

Site landing page. Incorporates some CMS content, and is granted exceptions from the design system. 

The homepage includes links to key traffic areas of the site. These links are referred to as “Top Tasks.”

2022: a special team led by Michelle Middaugh is managing product management and user research for changes to the homepage. Public Websites is responsible for technical changes/build only.

**Example content:**
* URL: [https://www.va.gov/](https://www.va.gov/) 

**More info:**
* A6 program GDrive folder:[ Homepage](https://drive.google.com/drive/u/1/folders/1a-dg6-nWuqNTxO9lds4iqWHo5DxYj_z8)
* **Q2/Q3 2022 project:**[Homepage redesign iteration:](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/home-page/home-page-redesign-initiative/README.md#home-page-redesign-iteration) design refresh underway, prototype in staging.  Q3 user testing & will lead to design / build iteration for further testing. 
   * [[Epic] VA.gov Home page redesign #40845](https://github.com/department-of-veterans-affairs/va.gov-team/issues/40845) 
* 2021 Top Tasks research/info: [https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/global/home-page](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/global/home-page) 


### VA site search (using search.gov)

**What is:**

VA.gov uses search.gov as its engine. Public Websites owns that integration, and display of search results within the site. 

**Example content:**
* URL: [https://www.va.gov/search/?query=test&t=false](https://www.va.gov/search/?query=test&t=false)  
* Example issue: 

**More info:**
* A6 program GDrive folder: [Search](https://drive.google.com/drive/u/1/folders/1ePwRE6YPBk1VE6zAKzX2SxgtMdYwsV0r)
* Design system: [Search input](https://design.va.gov/components/search-input)
* 2020: bring more sites under search banner: [https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/global/search](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/global/search) 
* 2021: consistent UI styling for search implementations: [https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/public-websites/search-ui-consistency](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/public-websites/search-ui-consistency) 


### Veterans Crisis Line modal

The Veterans Crisis Line is a critical feature of VA.gov. Public Websites supports it via the modal included in the global header. Most defects related to this modal functioning correctly (open, close, clickable CTAs, etc) are urgent priority.

![3](https://user-images.githubusercontent.com/85581471/186541162-283bd768-1af2-420c-b6ae-ac80047500a3.png)



### General VA.gov unauth UI

**What is:**

Catch-all for anything else within VA.gov that unauthenticated Veterans / caregivers can access / experience. 


### Yellow-ribbon tool

**What is:**

Listing of schools that participate in the Yellow Ribbon program. Data previously stored in CSV is now stored in GIDS

[https://github.com/department-of-veterans-affairs/va.gov-team/issues/4349#issuecomment-570250583](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4349#issuecomment-570250583) 

**Example translated content:**
* URL: [https://www.va.gov/education/yellow-ribbon-participating-schools/](https://www.va.gov/education/yellow-ribbon-participating-schools/) 

**More info:**
* Original epic: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/3703](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3703) 
* CMS work: [https://va-gov.atlassian.net/browse/VAGOV-5974](https://va-gov.atlassian.net/browse/VAGOV-5974) 
* Use of vets-api to connect to GIDS endpoint for data: 
   * [https://github.com/department-of-veterans-affairs/va.gov-team/issues/5599](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5599)
   * [https://github.com/department-of-veterans-affairs/va.gov-team/issues/5608](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5608) 

---

# Previous PW Projects

Projects the previous PW team worked on, but no work remaining for our team (so far). 


### Appeal Modernization Process

[https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/public-websites/AMA%20Follow%20Up](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/public-websites/AMA%20Follow%20Up) 



* Affected pages: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/7521#issuecomment-611102928](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7521#issuecomment-611102928) 
* 508 defects: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/7647](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7647) 


### Disability rating calculator

[https://github.com/department-of-veterans-affairs/va.gov-team/tree/69833737d9fe22b8990bb987e7c50de13205c5d5/products/disability/rated-disabilities](https://github.com/department-of-veterans-affairs/va.gov-team/tree/69833737d9fe22b8990bb987e7c50de13205c5d5/products/disability/rated-disabilities) 


### Downtime messaging

[https://github.com/department-of-veterans-affairs/va.gov-team/issues/6366](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6366) 


### Harassment Reporting Tool



* [Harassment Reporting Research--Landing page and poster (Mar 2022)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/harassment-reporting/research/static-landing-page)
* [Harassment Reporting Tool Research (incomplete)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/harassment-reporting/research/usability)


### Higher-Level Review static landing page

[https://github.com/department-of-veterans-affairs/va.gov-team/issues/4139](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4139) 

Static CMS page 


### “How to apply” wizards



* [https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/public-websites/how-to-apply-wizards](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/public-websites/how-to-apply-wizards) 
* [https://github.com/department-of-veterans-affairs/va.gov-team/issues/14104](https://github.com/department-of-veterans-affairs/va.gov-team/issues/14104)


### React widgets governance

[Epic](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/2919)

E.g. add widgets to specific pages: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/17388](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17388)


### Other

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
* [Custom urls for media (especially PDFs and documents)](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/1398) #1398
