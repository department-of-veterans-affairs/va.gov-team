__Please note: some links in this document point to the vets.gov-team repo.__

# Product list for 508 testing
This list is the current record of 508 issues in the `va.gov-team` repo. It will be updated weekly for accuracy.

Please refer to the deprecated list for [previously closed issues](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-product-review-list.md).

## Table of Contents
* [Product list for 508 testing](#product-list-for-508-testing)
  * [Helpful Links](#helpful-links)
  * [Issues by Application](#issues-by-application)
    * [Site-wide](#site-wide)
    * [Facility Locator](#facility-locator)
    * [Disability Calculator](#disability-calculator)
    * [VA Developer Portal](#va-developer-portal)
    * [526v2 All Claims](#526v2-all-claims)
    * [HCA Dashboard Notifications](#hca-dashboard-notifications)
    * [VA Benefits Recommendations](#va-benefits-recommendations)
    * [Health Care Application 1010-EZ](#health-care-application-1010-ez)
    * [Education Feedback Tool](#education-feedback-tool)
    * [Colmery Act Opt Out](#colmery-act-opt-out)
    * [GI Bill Comparison Tool](#gi-bill-comparison-tool)
    * [Claim and Appeal Status](#claim-and-appeal-status)
    * [Apply for Pre-need Burial](#apply-for-pre-need-burial)
    * [GI Bill Comparison Tool VET TEC](#gi-bill-comparison-tool-vet-tec)
    * [Local Side Navigation](#local-side-navigation)
    * [Edu 1990](#edu-1990)
    * [Edu 1990e](#edu-1990e)
    * [Edu 1990n](#edu-1990n)
    * [526 PTSD](#526-ptsd)
    * [Outreach and Events](#outreach-and-events)
    * [Education 1995 STEM Update](#education-1995-stem-update)
    * [Profile Direct Deposit Feature](#profile-direct-deposit-feature)
    * [GI Bill Comparison Tool Colmery 107 Feature](#gi-bill-comparison-tool-colmery-107-feature)
    * [Profile Appointment Text Messages](#profile-appointment-text-messages)
    * [Pittsburgh Side Navigation (CMS)](#pittsburgh-side-navigation-cms)
    * [GI Bill Comparison Tool School Certifying Official Documentation](#gi-bill-comparison-tool-school-certifying-official-documentation)
    * [GI Bill Comparison Tool Forever GI Bill Section 116](#gi-bill-comparison-tool-forever-gi-bill-section-116)
    * [eBenefits Rated Disabilities](#ebenefits-rated-disabilities)
    * [GI Bill Comparison Tool Caution Flags](#gi-bill-comparison-tool-caution-flags)
    * [Authenticated Experience Address Validation](#authenticated-experience-address-validation)
    * [VA Online Scheduler (VAOS)](#va-online-scheduler-vaos)
    * [Appeal Modernization Process (AMA)](#appeal-modernization-process-ama)
    * [New Project Name](#new-project-name)

## Helpful links
* [Create a 508 accessibility issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=508%2FAccessibility&template=508-issue.md&title=)
* [Review severity guidance for 508 accessibility issues](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md)

## Issues by Application
Each application or logical section of the site will have a heading and a detailed list of issues included. This is a transition from a data table approach, where rows will be removed from the table and added as list entries.

### Site-wide

**Maintainer:** VSP & VSA<br/>
**Audit Status:** Not applicable. Issues should be completed as soon as possible<br/>
**[Filtered list of issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aopen+is%3Aissue+label%3Asitewide+label%3A508%2FAccessibility)**<br/>

#### Open Issues

* [[SCREENREADER]: Inline error messages are announcing to screen readers on correction, not on subsequent errors - #314](https://github.com/department-of-veterans-affairs/va.gov-team/issues/314)<br/>
**Production** | **Opened:** June 18, 2019 | **Severity:** 508-defect-1 — **_Critical_**
* [[COGNITION]: Multiple ambiguities with linked text in content block - #3556](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3556)<br/>
**Production** | **Opened:** November 19, 2019 | **Severity:** 508-defect-2 - **_Serious_**
* [[SCREENREADER]: Legends must be first child element of fieldesets for tabbing navigation - #767](https://github.com/department-of-veterans-affairs/va.gov-team/issues/767)<br/>
**Production** | **Opened:** July 31, 2019 | **Severity:** 508-defect-2 - **_Serious_**
* [[SCREENREADER]: JAWS does not announce some sections of the multi-step forms when loaded - #317](https://github.com/department-of-veterans-affairs/va.gov-team/issues/317)<br/>
**Production** | **Opened:** June 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
* [[SCREENREADER]: Text and inputs added dynamically should be announced by screen readers - #316](https://github.com/department-of-veterans-affairs/va.gov-team/issues/316)<br/>
**Production** | **Opened:** June 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
* [[KEYBOARD]: main nav accessibility -- tabbing in small screens - #1144](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1144)<br/>
**Production** | **Opened:** August 20, 2019 | **Severity:** 508-defect-2 - **_Serious_**
* [[SCREENREADER]: JAWS + Chrome enables focus mode when we focus breadcrumb UL on page load - #319](https://github.com/department-of-veterans-affairs/va.gov-team/issues/319)<br/>
**Production** | **Opened:** June 18, 2019 | **Severity:** 508-defect-3 - **_Minor_**
* [[SCREENREADER]: Review sections with no header cause aria-label errors - #318](https://github.com/department-of-veterans-affairs/va.gov-team/issues/318)<br/>
**Production** | **Opened:** June 18, 2019 | **Severity:** 508-defect-3 - **_Minor_**
* [[SCREENREADER]: VET TEC - NVDA does not read the error if I forget to agree to the privacy policy - #1141](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1141)<br/>
**Production** | **Opened:** August 20, 2019 | **Severity:** 508-defect-3 - **_Minor_**
* [[EXPLORATION]: Turn on jsx-a11y ESLint rules - #1139](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1139)<br/>
**Opened:** August 20, 2019 | **Severity:** 508-defect-4 - **_Trivial_**
* [[EXPLORATION]: Disable known buggy axe rules individually - #1140](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1140)<br/>
**Opened:** August 20, 2019 | **Severity:** 508-defect-4 - **_Trivial_**
* [[EXPLORATION]: Reconsider structure of multiple pages within a single "part" of a form - #1145](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1145)<br/>
**Opened:** August 20, 2019 | **Severity:** 508-defect-4 - **_Trivial_**
* [Implement utility class for removing gold outline during focus - #457](https://github.com/department-of-veterans-affairs/va.gov-team/issues/457)<br/>
**Production** | **Opened:** July 1, 2019 | **Severity:** 508-defect-4 - **_Trivial_**
* [[USABILITY]: Application saved message could be missed by assistive devices - #182](https://github.com/department-of-veterans-affairs/va.gov-team/issues/182)<br/>
**Production** | **Opened:** July 1, 2019 | **Severity:** 508-defect-4 - **_Trivial_**
* [[SCREENREADER]: VA is read phonetically instead of as the abbreviation - #4507](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4507)<br/>
**Production** | **Opened:** January 2, 2020 | **Severity:** 508-defect-4 - **_Trivial_**
* [Consider displaying Veterans Crisis Line info in footer on screens 767px wide and smaller - #3459](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3459)<br/>
**Production** | **Opened:** November 13, 2019 | **_Enhancement_**

---

### Facility Locator

**Maintainer:** VSA<br/>
**[Closed Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3A508%2FAccessibility+label%3A%22facility+locator%22+is%3Aclosed)**

#### Open Issues

**Audit Status:** Issues logged by auditor in February 2020<br/>
* [[AXE-CORE]: Zoom In / Zoom Out controls MUST have their visible text as part of their accessible name](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6104)<br/>**Production** | **Opened:** February 26, 2020 | **Severity:** 508-defect-0 - **_Showstopper_** 
* [[SCREENREADER]: Links in map attribution should open in new tab to aid in error recovery](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6158)<br/>**Production** | **Opened:** February 26, 2020 | **Severity:** 508-defect-2 - **_Serious_** 
* [[MOBILE, ZOOM]: At 400%, content does not fit in screen view responsively](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6184)<br/>**Production** | **Opened:** February 26, 2020 | **Severity:** 508-defect-2 - **_Serious_** 
* [[AXE-CORE]: The Leaflet container needs a role appropriate for interactive content](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6103)<br/>**Production** | **Opened:** February 26, 2020 | **Severity:** 508-defect-4 - **_Trivial_** 

**Audit Status:** Issues logged by auditor in July 2019<br/>
* [[SCREENREADER]: Search for dropdown text is read aloud each time a letter is entered into Search city... input - #529](https://github.com/department-of-veterans-affairs/va.gov-team/issues/529)<br/>
**Opened:** July 10, 2019 | **Severity:** 508-defect-2 - **_Serious_**
* [[SCREENREADER]: The map is announcing a lot of extra data on focus and each droplet needs a usable name - #515](https://github.com/department-of-veterans-affairs/va.gov-team/issues/515)<br/>
**Opened:** July 8, 2019 | **Severity:** 508-defect-2 - **_Serious_**
* [[AXE-CORE]: Facility Locator - Provider Detail page has an UL that needs to be nested properly - #360](https://github.com/department-of-veterans-affairs/va.gov-team/issues/360)<br/>
**Opened:** June 21, 2019 | **Severity:** 508-defect-3 - **_Minor_**

---

### Disability Calculator

**Maintainer:** VSA<br/>
**Audit Status:** Issues logged by Product Support during audit June 2019. Request sent to VA 508 office September 2019.<br/>
**[Closed Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Avsa-public-websites+is%3Aclosed+Disability+Calculator)**

#### Open Issues

* [[COGNITION]: Disability Calculator - Can we mention the expected data format in on-page instructions? - #1045](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1045)<br/>
**Opened:** August 16, 2019 | **Severity:** 508-defect-2 - **_Serious_**

---

### VA Developer Portal

**Maintainer:** VSP<br/>
**Audit Status:** Issues logged by VSP Product Support in Q1 2019 audit<br/>
**[All issues logged in vets-contrib repo for VA dev portal](https://github.com/department-of-veterans-affairs/vets-contrib/issues?q=is%3Aopen+label%3A508%2FAccessibility+label%3ASparkleMotion)**

---

### 526v2 All Claims

**Maintainer:** VSA<br/>
**Audit Status:** Issues logged by Product Support during audit June 2019. Request sent to VA 508 office September 2019.<br/>
**[Closed Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3A526+label%3A508%2FAccessibility+is%3Aclosed)**

#### Open issues identified by VA 508 office

* [Sitewide - #314](https://github.com/department-of-veterans-affairs/va.gov-team/issues/314)<br/>
**Opened:** June 18, 2019 | **Severity:** 508-defect-1 — **_Critical_**
* [[USABILITY]: Application saved message could be missed by assistive devices - #182](https://github.com/department-of-veterans-affairs/va.gov-team/issues/182)<br/>
**Opened:** June 5, 2019 | **Severity:** 508-defect-4 - **_Trivial_**

---

### HCA Dashboard Notifications

**Maintainer:** VSA<br/>
**Audit Status:** First audit completed by Product Support June 2019. Sent to VA 508 team on June 27, 2019. Certified as having no 508 issues on July 2, 2019.<br/>
**[Closed Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?utf8=%E2%9C%93&q=label%3Avsa-authenticated-exp+label%3A508%2FAccessibility+is%3Aclosed+HCA)**

---

### VA Benefits Recommendations

**Maintainer:** VSA<br/>
**Audit Status:** Request sent to VA 508 office March 2019.<br/>

#### Open issues identified by VSP Product Support

* [[SCREENREADER]: Recommendations - Update the new user modal dialog to better announce content - #1122](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1122)<br/>
**Opened:** August 19, 2019 | **Severity:** 508-defect-3 - **_Minor_**

---

### Health Care Application 1010-EZ

**Maintainer:** VSA<br/>
**Audit Status:** Request sent to VA 508 office November 2018<br/>

#### Open issues

* [Sitewide Issue #314](https://github.com/department-of-veterans-affairs/va.gov-team/issues/314)<br/>
**Opened:** June 18, 2019 | **Severity:** 508-defect-1 — **_Critical_**

---

### Education Feedback Tool

**Maintainer:** VSA<br/>
**Audit Status:** Request sent to VA 508 office November 2018<br/>

#### Open issues

* [[SCREENREADER]: Alert message for bad submit is not read out to assistive devices like JAWS or VoiceOver - #1081](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1081)<br/>
**Opened:** August 19, 2019 | **Severity:** 508-defect-1 — **_Critical_**
* [[COLOR CONTRAST]: Subway map numbers do not meet 4.5:1 ratio for contrast - #1079](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1079)<br/>
**Opened:** August 19, 2019 | **Severity:** 508-defect-2 - **_Serious_**

---

### Colmery Act Opt Out

**Maintainer:** VSA<br/>
**Audit Status:** Request sent to VA 508 office September 2018. All issues but one resolved on 2/7/2019.<br/>

#### Open issues

* [Sitewide Issue #314](https://github.com/department-of-veterans-affairs/va.gov-team/issues/314)<br/>
**Opened:** June 18, 2019 | **Severity:** 508-defect-1 — **_Critical_**

---

### GI Bill Comparison Tool

**Maintainer:** VSP<br/>
**Audit Status:** Audited by VA 508 Office November 2018<br/>

#### Open issues

* [[COGNITION]: GIBCT® - Standardize the search and filter behavior with a "Go" button click - #1276](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1276)<br/>
**Opened:** August 23, 2019 | **Severity:** 508-defect-2 - **_Serious_**
* [[COGNITION]: GIBCT - Know before you go video has a logo with nondescript alt text - #3920](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3920)<br/>
**Opened:** December 3, 2019 | **Severity:** 508-defect-2 - **_Serious_**
* [[COGNITION]: GIBCT - "Learn more" is used for modals and windows to new content - #1132](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1132)<br/>
**Opened:** August 20, 2019 | **Severity:** 508-defect-3 - **_Minor_**
* [[KEYBOARD]: GIBCT Learn more modals scroll down the page, change focus, when I press TAB - #1133](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1133)<br/>
**Opened:** August 20, 2019 | **Severity:** 508-defect-3 - **_Minor_**
* [[COGNITION]: GIBCT® - Consider making the tuition and housing breakdowns into definition lists - #1277](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1133)<br/>
**Opened:** August 23, 2019 | **Severity:** 508-defect-3 - **_Minor_**

---

### Claim and Appeal Status

**Maintainer:** VSA<br/>
**Audit Status:** Audited by VA 508 Office February 2019<br/>

#### Open issues

* [[AXE-CORE]: UL and OL must only directly contain LI, SCRIPT, or TEMPLATE elements - #1064](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1064)<br/>
**Opened:** August 19, 2019 | **Severity:** 508-defect-2 - **_Serious_**

---

### Apply for Pre-need Burial

**Maintainer:** VSA<br/>
**Audit Status:** Audited by VA 508 Office September 2018<br/>

#### Open issues

* [Sitewide Issue #314](https://github.com/department-of-veterans-affairs/va.gov-team/issues/314)<br/>
**Opened:** June 18, 2019 | **Severity:** 508-defect-1 — **_Critical_**
* [Sitewide Issue #316](https://github.com/department-of-veterans-affairs/va.gov-team/issues/316)<br/>
**Opened:** June 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
* [[SCREENREADER]: Headings should be nested appropriately for ease of navigation - #1074](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1074)<br/>
**Opened:** June 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
* [Sitewide Issue #318](https://github.com/department-of-veterans-affairs/va.gov-team/issues/318)<br/>
**Opened:** June 18, 2019 | **Severity:** 508-defect-3 - **_Minor_**

---

### GI Bill Comparison Tool VET TEC

**Maintainer:** VSP<br/>
**Audit Status:** Audited by VSP Product Support Team August 2019<br/>
**[Closed issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3Abah-comparisontool+label%3A508%2FAccessibility+is%3Aclosed)**

#### Open issues

* [[SCREENREADER]: GIBCT® VETTEC - Can we move the Learn more buttons out of the label tags? - #1251](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1251)<br/>
**Opened:** August 22, 2019 | **Severity:** 508-defect-2 - **_Serious_**

---

### Local Side Navigation

**Maintainer:** VSA<br/>
**Audit Status:** Completed June 2017<br/>
**No open issues**

---

### Edu 1990

**Maintainer:** VSA<br/>
**Audit Status:** Completed June 2017<br/>
**No open issues**

---

### Edu 1990e

**Maintainer:** VSA<br/>
**Audit Status:** Completed June 2017<br/>
**No open issues**

---

### Edu 1990n

**Maintainer:** VSA<br/>
**Audit Status:** Completed June 2017<br/>
**No open issues**

---

### 526 PTSD

**Maintainer:** VSA<br/>
**Audit Status:** Audited January 2019<br/>
**[781a PTSD form](https://staging.va.gov/disability-benefits/apply/form-526-all-claims/new-disabilities/ptsd-781a-additional-changes)**

#### Open issues

* [[SCREENREADER]: 526 V2 - Date fields are firing error messages too soon on unit assignment page - #5190](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5190)<br/>
**Opened:** August 19, 2019 | **Severity:** 508-defect-3 - **_Minor_**

---

### Outreach and Events

**Maintainer:** VSA<br/>
**Audit Status:** Audited January 2019<br/>
**[Test application](https://staging.va.gov/outreach-and-events/)**<br/>
**[Closed issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3A%22outreach+%26+events%22+label%3A508%2FAccessibility+is%3Aclosed)**

#### Open issues

* [[KEYBOARD]: Outreach materials - focus should be set on the number of results on pagination keypress or click - #981](https://github.com/department-of-veterans-affairs/va.gov-team/issues/981)<br/>
**Opened:** August 14, 2019 | **Severity:** 508-defect-3 - **_Minor_**

---

### Education 1995 STEM Update

**Maintainer:** VSA<br/>
**Audit Status:** Audited by VSP Product Support Team August 2019. Sent to VA 508 Office September 2019. Passed VA 508 audit.<br/>
**No open issues**<br/>
**[Test application](https://staging.va.gov/education/apply-for-education-benefits/application/1995/introduction/)**<br/>
**[Closed issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3Aeducation+is%3Aclosed+label%3A508%2FAccessibility)**

---

### Profile Direct Deposit Feature

**Maintainer:** VSA<br/>
**Audit Status:** Audited by VSP Product Support Team August 2019. Request sent to VA 508 Office October 2019.<br/>
**[Closed issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3A%22direct+deposit%22+label%3A508%2FAccessibility+is%3Aclosed)**

#### Open issues

* [[COGNITION]: Direct Deposit - Consider revising the Call to Action UI for entering data - #1331](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1331)<br/>
**Opened:** August 27, 2019 | **Severity:** 508-defect-3 - **_Minor_**

---

### GI Bill Comparison Tool Colmery 107 Feature

**Maintainer:** VSP<br/>
**Audit Status:** Audited by VSP Product Support Team September 2019. Request sent to VA 508 Office October 2019.<br/>
**No open issues**<br/>
**[Test application](https://staging.va.gov/gi-bill-comparison-tool/)**<br/>
**[Closed issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3Abah-ct-107+is%3Aclosed+label%3A508%2FAccessibility)**

---

### Profile Appointment Text Messages

**Maintainer:** VSA<br/>
**Audit Status:** First audit completed by VSP Product Support Team October 2019<br/>
**[Closed issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?utf8=%E2%9C%93&q=label%3Avsa-authenticated-exp+label%3A508%2FAccessibility+Text+Appointments+is%3Aclosed+)**

---

### Pittsburgh Side Navigation (CMS)

**Maintainer:** VSA<br/>
**Audit Status:** First audit completed by VSA November 2019<br/>
**[Closed Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=label%3Avsa-facilities+label%3A508%2FAccessibility+Sidenav+is%3Aclosed)**

#### Open issues

* [[KEYBOARD]: Ensure content structure may be navigated by tab order - #3552](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3552)<br/>
**Opened:** November 18, 2019 | **Severity:** 508-defect-1 — **_Critical_**
* [[COLOR]: Pittsburgh Facility - side navigation hover style contrast is too low - #3413](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3413)<br/>
**Opened:** November 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
* [[SCREENREADER]: Pittsburgh Sidenav - Sidenav headings lack semantic structure - #3441](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3441)<br/>
**Opened:** November 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
* [[SCREENREADER, KEYBOARD]: The sidenav headings are read as buttons but cannot be activated - #3557](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3557)<br/>
**Opened:** November 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
* [[COGNITION]: Pittsburgh Sidenav - The links with accordions have two different tab stops and two different links/actions - #3445](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3445)<br/>
**Opened:** November 18, 2019 | **Severity:** 508-defect-3 - **_Minor_**
* [[COGNITION]: Once opened, the "accordion" repeats the label, adds a horizontal rule separating related content - #3448](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3448)<br/>
**Opened:** November 18, 2019 | **Severity:** 508-defect-3 - **_Minor_**
* [[COGNITION]: In mobile view or zoomed to 400%, the repetition of the sidenav accordion label takes up vertical space making it difficult to read the content in context - #3560](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3560)<br/>
**Opened:** November 18, 2019 | **Severity:** 508-defect-3 - **_Minor_**

---

### GI Bill Comparison Tool School Certifying Official Documentation

**Maintainer:** VSP<br/>
**Audit Status:** First audit completed by VSP Product Support Team November 2019. Request sent to VA 508 Office November 2019.<br/>

#### Open issues

* [[DOCUMENT] GIBCT SCO - Lists are not picked up correctly by screen readers in Section 305 PDF - #3869](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3869)<br/>
**Opened:** November 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
* [[DOCUMENT]: GIBCT SCO - VA ONCE PDF is not navigable with keyboard or JAWS screen reader - #3917](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3917)<br/>
**Opened:** November 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
* [[DOCUMENT]: GIBCT SCO - Dear SCO letter images need alt text - #3918](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3918)<br/>
**Opened:** November 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
* [[DOCUMENT]: GIBCT SCO - VA ONCE PDF logo needs alt text - #3919](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3919)<br/>
**Opened:** November 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**

---

### GI Bill Comparison Tool Forever GI Bill Section 116

**Maintainer:** VSP<br/>
**Audit Status:** First audit completed by VSP Product Support Team November 2019. Request sent to VA 508 Office November 2019.<br/>
**[Closed issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3Abah-ct-116+label%3A508%2FAccessibility+is%3Aclosed)**

#### Open issues

* [[DOCUMENT]: GIBCT Section 116 - Excel document has merged cells that could cause accessibility issues - #3835](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3835)<br/>
**Opened:** November 28, 2019 | **Severity:** 508-defect-1 — **_Critical_**
* [[COGNITION]: GIBCT Section 116 - Estimated benefits should be calculated on button press, not form control change - #3536](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3536)<br/>
**Opened:** November 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
* [[DOCUMENT]: GIBCT Section 116 - Excel document uses color as the only means to convey intent - #3756](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3756)<br/>
**Opened:** November 26, 2019 | **Severity:** 508-defect-2 - **_Serious_**
* [[DOCUMENT]: GIBCT Section 116 - Excel document has color contrast issues that could be improved - #3758](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3758)<br/>
**Opened:** November 26, 2019 | **Severity:** 508-defect-2 - **_Serious_**
* [[COGNITION]: GIBCT Section 116 - VoiceOver is spelling out some all caps text instead of reading it - #3538](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3538)<br/>
**Opened:** November 18, 2019 | **Severity:** 508-defect-4 - **_Trivial_**

---

### eBenefits Rated Disabilities

**Maintainer:** VSA<br/>
**Audit Status:** Pre-launch 508 audit completed<br/>
**[Filtered list of issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4619)**<br/>

#### Open Issues
* [[SCREENREADER, COGNITION]: Screenreader experience of reading service-connected or not disabilities isn't clear - 4784](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4784)<br/>
   **Opened:** January 13, 2020  | **Severity:** 508-defect-2 - **_Serious_**
* [[SCREENREADER] Individual disabilities currently in individual `<dl>` would be improved in a single `<dl>` - 4637](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4637)<br/>
   **Opened:** January 7, 2020 | **Severity:** 508-defect-3 - **_Minor_**

---

### GI Bill Comparison Tool Caution Flags

**Maintainer:** VSP<br/>
**Audit Status:** Design review phase<br/>
**No Open Issues**<br/>
**[Closed Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=label%3Abah-comparisontool+is%3Aclosed+label%3A508%2FAccessibility)**

---

### Authenticated Experience Address Validation

**Maintainer:** VSA <br/>
**Audit Status:** Pre-launch 508 Review<br/>
**[Closed Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=label%3Avsa-authenticated-exp+label%3A508%2FAccessibility+is%3Aclosed)**

#### Open Issues
* [[SCREENREADER, FOCUS MANAGEMENT] While on "Please confirm your address" screen, the content from "Edit mailing address" is read by screen reader(https://github.com/department-of-veterans-affairs/va.gov-team/issues/5865)<br/>**Staging** | **Opened:** February 13, 2020 | **Severity:** 508-defect-1 — **_Critical_**
* [[COGNITION, SCREENREADER, KEYBOARD] Hiding 112 characters in a 40 character show/hide introduces screenreader and keyboard extra effort](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5861)<br/>**Staging** | **Opened:** February 13, 2020 | **Severity:** 508-defect-4 — **_Trivial_**

---

### VA Online Scheduler (VAOS)

**Maintainer:** _VSP_<br/>
**Audit Status:** _Staging review completed by VSP, February 2020. Request to review calendar widget sent to VA 508 office February 2020_<br/>
**[Closed Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aopen+is%3Aissue+author%3A1Copenut+label%3Avaos+label%3A508%2FAccessibility+-label%3AEpic)**

#### Open issues

* [[SCREENREADER]: Adjust the calendar header markup for better IE11 + JAWS usability](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6186)<br/>**Staging** | **Opened:** February 25, 2020 | **Severity:** 508-defect-1 — **_Critical_**
* [[COGNITION]: Add aria-describedby and SR-only instructions to the calendar widget for better semantic meaning](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6100)<br/>**Staging** | **Opened:** February 21, 2020 | **Severity:** 508-defect-1 — **_Critical_**
* [[KEYBOARD]: Let's make the Schedule an appointment just a button and not wrap it in a link](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6250)<br/>**Staging** | **Opened:** February 26, 2020 | **Severity:** 508-defect-2 — **_Serious_**
* [[COGNITION]: Consider moving the urgent medical need alert box above the action buttons](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6237)<br/>**Staging** | **Opened:** February 26, 2020 | **Severity:** 508-defect-2 — **_Serious_**
* [[COGNITION]: Update the scheduling cards for better semantic meaning](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6106)<br/>**Staging** | **Opened:** February 21, 2020 | **Severity:** 508-defect-2 — **_Serious_**
* [[SCREENREADER] Calendar Widget - Fieldset needs to be a sibling to the button trigger for screen reader usability](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2709)<br/>**Staging** | **Opened:** February 21, 2020 | **Severity:** 508-defect-2 — **_Serious_**
* [[COGNITION]: Can we review the language for Community Care appointment review times?](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6279)<br/>**Staging** | **Opened:** February 27, 2020 | **Severity:** 508-defect-3 — **_Minor_**
* [[COGNITION]: Let's consider moving the Edit links on the review page after their text blocks](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6241)<br/>**Staging** | **Opened:** February 26, 2020 | **Severity:** 508-defect-3 — **_Minor_**
* [[COGNITION]: Let's add aria-hidden attributes to the check icons on our confirmation page](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6243)<br/>**Staging** | **Opened:** February 26, 2020 | **Severity:** 508-defect-4 — **_Trivial_**
* [[COGNITION]: Can we make the HR rule lines into borders or hide them from screen readers on review page?](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6242)<br/>**Staging** | **Opened:** February 26, 2020 | **Severity:** 508-defect-4 — **_Trivial_**

---

### Appeal Modernization Process (AMA)


**Maintainer:** VSA <br/>
**Audit Status:** Staging Review complete, March 9, 2020; Sent to VA 508 Office March 11, 2020<br/>
**Closed Issues:** 

#### Open issues

* [[SCREENREADER]: Clock icons MUST have text that describes the info represented by them](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6697)<br/>**Production** | **Opened:** March 9, 2020 | **Severity:** 508-defect-1 — **_Critical_**

* [CMS [ZOOM]: Content SHOULD not be cut off when zoomed to 400%](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6399)<br/>**Production** | **Opened:** March 9, 2020 | **Severity:** 508-defect-2 — **_Serious_**

* [CMS [SCREENREADER, KEYBOARD]: Aside SHOULD not be contained in another landmark](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6379)<br/>**Production** | **Opened:** March 2, 2020 | **Severity:** 508-defect-2 — **_Serious_**

* [CMS [AXE-CORE, SCREENREADER]: Heading levels SHOULD increase by one - the alert box heading breaks order](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6375)<br/>**Production** | **Opened:** March 2, 2020 | **Severity:** 508-defect-2 — **_Serious_**

* [CMS [KEYBOARD]: Landmarks MUST have a unique role or role/label/title (i.e. accessible name) combination; main nav and sidebar nav conflict](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6368)<br/>**Production** | **Opened:** March 2, 2020 | **Severity:** 508-defect-2 — **_Serious_**

* [CMS [AXE-CORE Medium]: Heading levels SHOULD increase by one – "On this page" component header issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6338)<br/>**Production** | **Opened:** February 28, 2020 | **Severity:** 508-defect-2 — **_Serious_**

* [[COGNITION]: Content SHOULD not be cut off; IE11 accordion content is not flowing into columns](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6672)<br/>**Production** | **Opened:** March 9, 2020 | **Severity:** 508-defect-3 — **_Minor_**

* [CMS [SCREENREADER, KEYBOARD, COGNITION]: Links SHOULD look like links](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6507)<br/>**Production** | **Opened:** March 9, 2020 | **Severity:** 508-defect-3 — **_Minor_**

* [[AXE-CORE]: Headings MUST not be empty](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6371)<br/>**Production** | **Opened:** March 2, 2020 | **Severity:** 508-defect-4 — **_Trivial_**

* [CMS [AXE-CORE]: All page content MUST be contained by landmarks - div.veteran-banner](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6339)<br/>**Production** | **Opened:** February 28, 2020 | **Severity:** 508-defect-4 — **_Trivial_**


---  [Table of Contents](#table-of-contents)

### New Project Name

**Maintainer:** _VSA or VSP_<br/>
**Audit Status:** _Audit status, team, and date_<br/>
**Closed Issues:** _Create a reusable search link by filtering va.gov-team issues:_

 1. Click the [Issues tab](https://github.com/department-of-veterans-affairs/va.gov-team/issues) on the va.gov-team repository
 1. Click the `<NUMBER> Closed` link to switch to closed issues
 1. Click the `Label` dropdown. Select the `Your Application` label, and the `508/Accessibility` label.
 1. Change the **Closed issues** text into a link. [Learn how to create links in Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links). This link will give you a current, filtered list of closed accessibility issues for your application.
 
 Add another link to the [Table of Contents](#table-of-contents). This is an important step to make applications easier to find as the list gets longer.

#### Open issues

* _Create a link from the issue title and issue number. Use the format `Issue Title - # Issue Number`_ <br/>
**Opened:** _Date issue ticket was written_ | **Severity:** _Issue severity based on the [accessibility defect rubric](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md)_


--- [Table of Contents](#table-of-contents)

