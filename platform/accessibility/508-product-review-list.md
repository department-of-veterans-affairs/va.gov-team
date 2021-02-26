# Product list for 508 testing

This list is the current record of 508 issues in the `va.gov-team` repo. It will be updated weekly for accuracy.

Please refer to the deprecated list for [previously closed issues](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-product-review-list.md).

## Table of Contents

- [Product list for 508 testing](#product-list-for-508-testing)
  - [Table of Contents](#table-of-contents)
  - [Helpful links](#helpful-links)
  - [Issues by Application](#issues-by-application)
    - [Design System](#design-system)
    - [Forms Library](#forms-library)
    - [Site-wide](#site-wide)
    - [Site-wide TTY Review](#site-wide-tty-review)
    - [Site-wide Content](#site-wide-content)
    - [VA Developer Portal](#va-developer-portal)
    - [Outreach and Events](#outreach-and-events)
      - [Open issues](#open-issues)
    - [VSA Authenticated Experience](#vsa-authenticated-experience)
      - [Profile Direct Deposit Feature](#profile-direct-deposit-feature)
      - [Address Validation](#address-validation)
      - [Profile Appointment Text Messages](#profile-appointment-text-messages)
      - [Benefits Recommendations](#benefits-recommendations)
    - [VSA Benefits and Memorials](#vsa-benefits-and-memorials)
      - [526v2 All Claims](#526v2-all-claims)
      - [996](#996)
      - [Discharge Wizard](#discharge-wizard)
      - [Benefits Delivery at Discharge](#benefits-delivery-at-discharge)
      - [2346](#2346)
      - [526 PTSD](#526-ptsd)
      - [Claim and Appeal Status](#claim-and-appeal-status)
      - [HCA Dashboard Notifications](#hca-dashboard-notifications)
      - [Apply for Pre-need Burial](#apply-for-pre-need-burial)
      - [VA Letters](#va-letters)
      - [Pensions](#pensions)
      - [Medical Device Ordering Tool](#medical-device-ordering-tool)
      - [Debt Letters MVP](#debt-letters-mvp)
      - [Debt Letters Iteration Two](#debt-letters-iteration-two)
      - [Higher Level Review](#higher-level-review)
    - [VSA Caregivers](#vsa-caregivers)
    - [VSA eBenefits](#vsa-ebenefits)
      - [Direct Deposit](#direct-deposit)
      - [Rated Disabilities](#rated-disabilities)
      - [686 Form](#686-form)
      - [Chapter 36](#chapter-36)
      - [View Payments](#view-payments)
    - [VFS Education](#vfs-education)
      - [Colmery Act Opt Out](#colmery-act-opt-out)
      - [Education Feedback Tool](#education-feedback-tool)
      - [Edu 1990](#edu-1990)
      - [Edu 1990e](#edu-1990e)
      - [Edu 1990n](#edu-1990n)
      - [Education 1995 STEM Update](#education-1995-stem-update)
      - [Edu 0993](#edu-0993)
      - [Edu 0994](#edu-0994)
      - [Edu 1995](#edu-1995)
      - [Edu 5495](#edu-5495)
      - [Apply Wizard](#apply-wizard)
      - [Edu 10203 STEM Benefit Form](#edu-10203-stem-benefit-form)
    - [VSA Facility Locator](#vsa-facility-locator)
      - [General Issues](#general-issues)
      - [Facility Locator Urgent Care MVP](#facility-locator-urgent-care-mvp)
      - [Left Nav](#left-nav)
      - [Map Enhancements](#map-enhancements)
    - [VSA Public Websites](#vsa-public-websites)
      - [Appeal Modernization Process (AMA)](#appeal-modernization-process-ama)
      - [Disability Calculator](#disability-calculator)
      - [Local Side Navigation](#local-side-navigation)
      - [Appeal Modernization Process (AMA) Phase 2](#appeal-modernization-process-ama-phase-2)
      - [Covid-19 Resources](#covid-links-and-resources-pdf)
      - [Find Forms MVP](#find-forms-mvp)
      - [Yellow Ribbon MVP](#yellow-ribbon-mvp)
      - [New Contact Us Page](#new-contact-us-page)
    - [VFS Health Care](#vfs-health-care)
      - [Health Care Application 1010-EZ](#health-care-application-1010-ez)
      - [Open issues](#open-issues-1)
    - [VFS GI Bill Comparison Tool](#vfs-gi-bill-comparison-tool)
      - [GI Bill Comparison Tool](#gi-bill-comparison-tool)
      - [GI Bill Comparison Tool VET TEC](#gi-bill-comparison-tool-vet-tec)
      - [GI Bill Comparison Tool Colmery 107 Feature](#gi-bill-comparison-tool-colmery-107-feature)
      - [GI Bill Comparison Tool Forever GI Bill Section 116](#gi-bill-comparison-tool-forever-gi-bill-section-116)
      - [GI Bill Comparison Tool Caution Flags](#gi-bill-comparison-tool-caution-flags)
      - [GI Bill Comparison Tool School Certifying Official Documentation](#gi-bill-comparison-tool-school-certifying-official-documentation)
      - [GI Bill Estimate Your Benefits](#gi-bill-estimate-your-benefits)
      - [GI Bill Section 103](#gi-bill-section-103)
      - [GI Bill STEM Standalone Form](#gi-bill-stem-standalone-form)
    - [VFS Veterans Affairs Online Scheduler (VAOS)](#vfs-veterans-affairs-online-scheduler-vaos)
      - [VAOS Express Care Appointments](#vaos-express-care-appointments)
    - [COVID-19 Resources (VSA Public Websites)](#covid-19-resources-vsa-public-websites)
    - [SSOe Single Sign On](#ssoe-single-sign-on)
    - [COVID-19 Chatbot](#covid-19-chatbot)
    - [Public and Automated PDF Technical Discovery](#public-and-automated-pdf-technical-discovery)
    - [COVID-19 Screener](#covid-19-screener)
    - [VA Medical Sites](#va-medical-sites)
    - [App Directory](#app-directory)
    - [COVID-19 Vaccine Prep Tool](#covid-19-vaccine-prep-tool)
    - [VSA Search and Discovery](#vsa-search-and-discovery)
      - [Search Typeahead](#search-typeahead)
    - [COVID-19 Vaccine Trial Registry](#covid-19-vaccine-trial-registry)
    - [VSA Content Localization](#vsa-content-localization)
      - [VSA Translations Spanish Corona](#vsa-translations-spanish-corona)
    - [New Project Name](#new-project-name)

## Helpful links

- [Create a 508 accessibility issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=508%2FAccessibility&template=508-issue.md&title=)
- [Review severity guidance for 508 accessibility issues](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md)

## Issues by Application

Each application or logical section of the site will have a heading and a detailed list of issues included. This is a transition from a data table approach, where rows will be removed from the table and added as list entries.

### Design System

**Maintainer:** VSP<br/>
**Audit Status:** _[Audit completed by VSP as of June 2020.](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8351)_<br/>
**[Filtered list of issues on vets-design-system-documentation](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues?q=is%3Aopen+is%3Aissue+label%3Aaccessibility)**<br/>

**Open Issues**

- [[SCREENREADER]: Inline error messages are announcing to screen readers on correction, not on subsequent errors - #314](https://github.com/department-of-veterans-affairs/va.gov-team/issues/314)<br/>
**Production** | **Opened:** June 18, 2020 | **Severity:** 508-defect-1 — **_Critical_**
- [Create research code samples for better accordion usability with screen readers, assistive technology - #4706](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4706)<br/>

Back to [Table of Contents](#table-of-contents)

---
### Forms Library

**Maintainer:** VSP<br/>
**Audit Status:** _Engineering review underway by VSP as of May 2020._<br/>
**[Filtered list of issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aopen+is%3Aissue+author%3A1Copenut+label%3Aforms)**<br/>

**Open Issues**
- [[COGNITION]: STEM Standalone - Heading levels SHOULD only increase by one - #12339](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12343)<br/>
**Production** | **Opened:** August 10, 2020 | **Severity:** 508-defect-2 - **_Serious_**
- [sitewide, forms - 508-defect-2 [KEYBOARD]: Profile 2.0 - Focus MUST be managed when users switch from the read-only to edit in place UI - #11965](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11965)<br/>
**Production** | **Opened:** August 10, 2020 | **Severity:** 508-defect-2 - **_Serious_**
- [[SCREENREADER]: Legends must be first child element of fieldesets for tabbing navigation - #767](https://github.com/department-of-veterans-affairs/va.gov-team/issues/767)<br/>
**Production** | **Opened:** August 20, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[SCREENREADER]: JAWS does not announce some sections of the multi-step forms when loaded - #317](https://github.com/department-of-veterans-affairs/va.gov-team/issues/317)<br/>
**Production** | **Opened:** June 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[SCREENREADER]: Inline error messages are announcing to IE11 + JAWS when error appears and when it disappears - #314](https://github.com/department-of-veterans-affairs/va.gov-team/issues/314)<br/>
**Production** | **Opened:** June 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[COGNITION]: STEM Standalone - Home phone number SHOULD be formatted like mobile number on the review form page - #12340](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12343)<br/>
**Production** | **Opened:** August 10, 2020 | **Severity:** 508-defect-3 - **_Minor_**
- [[SEMANTIC HTML]: Fieldsets SHOULD NOT be nested in another fieldset in forms library constructs - #12718](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1141)<br/>
**Production** | **Opened:** August 21, 2020 | **Severity:** 508-defect-3 - **_Minor_**
- [[SCREENREADER]: VET TEC - NVDA does not read the error if I forget to agree to the privacy policy - #1141](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1141)<br/>
**Production** | **Opened:** August 20, 2019 | **Severity:** 508-defect-3 - **_Minor_**
- [[SCREENREADER]: JAWS + Chrome enables focus mode when we focus breadcrumb UL on page load - #319](https://github.com/department-of-veterans-affairs/va.gov-team/issues/319)<br/>
**Production** | **Opened:** June 18, 2019 | **Severity:** 508-defect-3 - **_Minor_**
- [[IMPROVEMENT]: STEM Standalone - CONSIDER using a higher resolution image for the personal check in Step 5 - #12343](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12343)<br/>
**Production** | **Opened:** August 10, 2020 | **Severity:** 508-defect-4 - **_Trivial_**
- [[USABILITY]: Application saved message could be missed by assistive devices - #182](https://github.com/department-of-veterans-affairs/va.gov-team/issues/182)<br/>
**Production** | **Opened:** June 5, 2019 | **Severity:** 508-defect-4 - **_Trivial_**
- [[COGNITION]: CONSIDER revising content and adding aria-describedby to online form calls to action - #12723](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12723)<br/>
**Production** | **Opened:** August 21, 2020 | **Severity:** 508-defect-4 - **_Trivial_**
- [508-defect-4 [SEMANTIC HTML]: Multi-step form headers should not have extra ARIA attributes - #19953](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19953)<br/>
**Production** | **Opened:** February 12, 2021 | **Severity:** 508-defect-4 - **_Trivial_**

Back to [Table of Contents](#table-of-contents)

---
### Site-wide

**Maintainer:** VSP & VSA<br/>
**Audit Status:** _Not applicable. Issues should be completed as soon as possible._<br/>
**[Filtered list of issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aopen+is%3Aissue+label%3Asitewide+label%3A508%2FAccessibility)**<br/>

**Open Issues**
  
- [508-defect-2 [SEMANTIC MARKUP, COGNITION]: Groups of form elements MUST have group labels (e.g. <fieldset> and <legend>) - #16717](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16717)<br/>**Staging** | **Opened:** November 30, 2020 | **Severity:** 508-defect-2 — **_Serious_**
- [sitewide 508-defect-2 [COGNITION, SCREEN READER, MOBILE]: Mobile and screen reader users SHOULD know there is relevant info after the call-to-action button - #16731](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16731)<br/>**Staging** | **Opened:** December 1, 2020 | **Severity:** 508-defect-2 — **_Serious_**
- [sitewide, CMS - 508-defect-2 [FOCUS MGMT]: Ensure focus moves when same page links are activated (IE11) - #15244](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15244)<br/>
**Production** | **Opened:** October 23, 2020 | **Severity:** 508-defect-2 - **_Serious_**
- [[SCREENREADER]: Legends must be first child element of fieldesets for tabbing navigation - #767](https://github.com/department-of-veterans-affairs/va.gov-team/issues/767)<br/>
**Production** | **Opened:** July 31, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[SCREENREADER]: JAWS does not announce some sections of the multi-step forms when loaded - #317](https://github.com/department-of-veterans-affairs/va.gov-team/issues/317)<br/>
**Production** | **Opened:** June 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[SCREENREADER]: Text and inputs added dynamically should be announced by screen readers - #316](https://github.com/department-of-veterans-affairs/va.gov-team/issues/316)<br/>
**Production** | **Opened:** June 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [sitewide, design system, CMS [AXE-CORE]: Heading levels SHOULD increase by one - #7708](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7708)<br/>
**Production** | **Opened:** April 7, 2020 | **Severity:** _508-defect-2 - **_Serious_**
- [CMS, components, design system [KEYBOARD]: Landmarks MUST have a unique role or role/label/title (i.e. accessible name) combination; main nav and sidebar nav conflict - #7723](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7723)<br/>
**Production** | **Opened:** April 7, 2020 | **Severity:** _508-defect-2 - **_Serious_**
- [sitewide, design system, CMS [AXE-CORE]: Heading levels should increase by one - #7755](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7755)<br/>
**Production** | **Opened:** April 7, 2020 | **Severity:** _508-defect-2 - **_Serious_**
- [CMS, components, design system [SCREENREADER] Aside MUST not be contained in another landmark - #7844](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7844)<br/>
**Production** | **Opened:** April 10, 2020 | **Severity:** _508-defect-2 - **_Serious_**
- [sitewide, design system, CMS [AXE-CORE]: Heading levels SHOULD increase by one, On this page component - #7877](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7877)<br/>
**Production** | **Opened:** April 10, 2020 | **Severity:** _508-defect-2 - **_Serious_**
- [sitewide, design system - 508-defect-3 [COGNITION, MOBILE DESIGN]: Styling SHOULD support reading comprehension - #12680](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12680)<br/>
**Opened:** August 20, 2020 | **Severity:** 508-defect-3 - **_Minor_**
- [[SCREENREADER]: Decorative content MUST be implemented in a way it can be ignored by assistive technology - #9113](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9113)<br/>
**Opened:** May 14, 2020 | **Severity:** 508-defect-3 - **_Minor_**
- [[SCREENREADER]: Consider updating phone number documentation in design system, to include spacing in the aria-label - #9114](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9114)<br/>
**Opened:** May 14, 2020 | **Severity:** 508-defect-3 - **_Minor_**
- [[AXE-CORE]: Heading levels SHOULD increase by one - #9115](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9115)<br/>
**Opened:** May 14, 2020 | **Severity:** 508-defect-3 - **_Minor_**
- [sitewide, forms [FOCUS MANAGEMENT]: Focus outline SHOULD be removed from non-linked heading - #9116](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9116)<br/>
**Opened:** May 14, 2020 | **Severity:** 508-defect-3 - **_Minor_**
- [[SCREENREADER, SEMANTIC MARKUP]: aria-label SHOULD be removed when it is redundant - #9134](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9134)<br/>
**Opened:** May 14, 2020 | **Severity:** 508-defect-3 - **_Minor_**
- [sitewide, forms 508-defect-3 [SCREENREADER]: Decorative content MUST be implemented in a way it can be ignored by assistive technology - #9169](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9169)<br/>
**Opened:** May 15, 2020 | **Severity:** 508-defect-3 - **_Minor_**
- [sitewide 508-defect-3 [SCREENREADER]: Progress indicator SHOULD be consistent on the same page - #9226](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9226)<br/>
**Opened:** May 18, 2020 | **Severity:** 508-defect-3 - **_Minor_**
- [sitewide, forms 508-defect-3 [FOCUS MANAGEMENT]: Focus outline SHOULD be removed from non-linked heading - #9218](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9218)<br/>
**Opened:** May 18, 2020 | **Severity:** 508-defect-3 - **_Minor_**
- [[EXPLORATION]: Reconsider structure of multiple pages within a single "part" of a form - #1145](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1145)<br/>
**Opened:** August 20, 2019 | **Severity:** 508-defect-4 - **_Trivial_**
- [Implement utility class for removing gold outline during focus - #457](https://github.com/department-of-veterans-affairs/va.gov-team/issues/457)<br/>
**Production** | **Opened:** July 1, 2019 | **Severity:** 508-defect-4 - **_Trivial_**
- [[USABILITY]: Application saved message could be missed by assistive devices - #182](https://github.com/department-of-veterans-affairs/va.gov-team/issues/182)<br/>
**Production** | **Opened:** July 1, 2019 | **Severity:** 508-defect-4 - **_Trivial_**
- [[SCREENREADER]: VA is read phonetically instead of as the abbreviation - #4507](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4507)<br/>
**Production** | **Opened:** January 2, 2020 | **Severity:** 508-defect-4 - **_Trivial_**
- [[SCREENREADER]: JAWS + Chrome enables focus mode when we focus breadcrumb UL on page load - #319](https://github.com/department-of-veterans-affairs/va.gov-team/issues/319)<br/>
**Production** | **Opened:** June 18, 2019 | **Severity:** 508-defect-3 - **_Minor_**
- [[SCREENREADER]: Review sections with no header cause aria-label errors - #318](https://github.com/department-of-veterans-affairs/va.gov-team/issues/318)<br/>
**Production** | **Opened:** June 18, 2019 | **Severity:** 508-defect-3 - **_Minor_**
- [[SCREENREADER]: VET TEC - NVDA does not read the error if I forget to agree to the privacy policy - #1141](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1141)<br/>
**Production** | **Opened:** August 20, 2019 | **Severity:** 508-defect-3 - **_Minor_**
- [CMS [AXE-CORE]: All page content MUST be contained by landmarks - #7757](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7757)<br/>
**Production** | **Opened:** April 8, 2020 | **Severity:** _508-defect-4 - **_Trivial_**
- [CMS [AXE-CORE]: All page content MUST be contained by landmarks - div.veteran-banner - #7710](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7710)<br/>
**Production** | **Opened:** April 7, 2020 | **Severity:** _508-defect-4 - **_Trivial_**
- [design system, components, cms [SEMANTIC MARKUP] Download links SHOULD use the download attribute - #7840](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7840)<br/>
**Production** | **Opened:** April 9, 2020 | **Severity:** _508-defect-4 - **_Trivial_**
- [Consider displaying Veterans Crisis Line info in footer on screens 767px wide and smaller - #3459](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3459)<br/>
**Production** | **Opened:** November 13, 2019 | **_Enhancement_**

Back to [Table of Contents](#table-of-contents)

---
### Site-wide TTY Review

**Maintainer:** VSP & VSA<br/>
**Audit Status:** _Not applicable. Issues should be completed as soon as possible._<br/>

**Open Issues**
  
- [[EPIC]: Review TTY calls to action and links for consistent message and behavior - #19962](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19962)<br/>**Opened:** February 15, 2021
  
Back to [Table of Contents](#table-of-contents)

---
### Site-wide Content

**Maintainer:** VSP & VSA<br/>
**Audit Status:** _Not applicable. Issues should be completed as soon as possible._<br/>

**Open Issues**
  
- [[SCREENREADER]: Review example PDF for accessibility - #20134](https://github.com/department-of-veterans-affairs/va.gov-team/issues/20134)<br/>**Opened:** February 18, 2021
  
Back to [Table of Contents](#table-of-contents)

---

### VA Developer Portal

**Audit Status:** _Issues logged by VSP Product Support in Q1 2019 audit._<br/>
**[All issues logged in vets-contrib repo for VA dev portal](https://github.com/department-of-veterans-affairs/vets-contrib/issues?q=is%3Aopen+label%3A508%2FAccessibility+label%3ASparkleMotion)**

Back to [Table of Contents](#table-of-contents)

---

### Outreach and Events

**Maintainer:** VSA<br/>
**Audit Status:** _Audited January 2019._<br/>
**[Test application](https://staging.va.gov/outreach-and-events/)**

#### Open issues

- [[KEYBOARD]: Outreach materials - focus should be set on the number of results on pagination keypress or click - #981](https://github.com/department-of-veterans-affairs/va.gov-team/issues/981)<br/>
**Opened:** August 14, 2019 | **Severity:** 508-defect-3 - **_Minor_**
  
Back to [Table of Contents](#table-of-contents)

---
### VSA Authenticated Experience

#### Profile Direct Deposit Feature

**Audit Status:** _Audited by VSP Product Support Team August 2019. Request sent to VA 508 Office October 2019._<br/>
**No open issues**

Back to [Table of Contents](#table-of-contents)

---
#### Address Validation

**Audit status:** _Pre-launch 508 Review._

**Open issues**

- [[SCREENREADER, FOCUS MANAGEMENT] While on "Please confirm your address" screen, the content from "Edit mailing address" is read by screen reader](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5865)<br/>**Staging** | **Opened:** February 13, 2020 | **Severity:** 508-defect-1 — **_Critical_**

Back to [Table of Contents](#table-of-contents)

---

#### Profile Appointment Text Messages

**Audit status:** _First audit completed by VSP Product Support Team October 2019._<br/>

Back to [Table of Contents](#table-of-contents)

---

#### Benefits Recommendations

**Audit status:** _Request sent to VA 508 office March 2019._<br/>

**Open issues** identified by VSP Product Support

- [[SCREENREADER]: Recommendations - Update the new user modal dialog to better announce content - #1122](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1122)<br/>
**Opened:** August 19, 2019 | **Severity:** 508-defect-3 - **_Minor_**

Back to [Table of Contents](#table-of-contents)

---

### VSA Benefits and Memorials

#### 526v2 All Claims

**Audit status:** _Issues logged by Product Support during audit June 2019. Request sent to VA 508 office September 2019._

**Open issues** identified by VA 508 office

- [508-defect-1 ❗ Launchblocker [AXE-CORE, SCREENREADER]: IDs of active elements MUST be unique - #12674](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12674)<br/>
**Opened:** August 20, 2020 | **Severity:** 508-defect-1 — **_Critical_**
- [Sitewide - #314](https://github.com/department-of-veterans-affairs/va.gov-team/issues/314)<br/>
  **Opened:** June 18, 2019 | **Severity:** 508-defect-1 — **_Critical_**
- [508-defect-2 [AXECORE]: Page MUST contain a level-one heading - #12666](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12666)<br/>
**Opened:** August 20, 2020 | **Severity:** 508-defect-2 — **_Serious_**
- [508-defect-2 [AXE-CORE]: Heading levels SHOULD increase by one - #12663](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12663)<br/>
**Opened:** August 20, 2020 | **Severity:** 508-defect-2 — **_Serious_**
- [[USABILITY]: Application saved message could be missed by assistive devices - #182](https://github.com/department-of-veterans-affairs/va.gov-team/issues/182)<br/>**Opened:** June 5, 2019 | **Severity:** 508-defect-4 - **_Trivial_**

Back to [Table of Contents](#table-of-contents)

---
#### 996

**No open issues**

Back to [Table of Contents](#table-of-contents)

---
#### Discharge Wizard

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in discharge-wizard end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7347)<br/>**Production** | **Opened:** March 30, 2020 | **Severity:** 508-defect-3 — **_Minor_**

Back to [Table of Contents](#table-of-contents)

---
#### Benefits Delivery at Discharge
**Audit status:** _Full a11y audit started January 2021_<br/>
**Open issues**

- [508-defect-1 ❗ Launchblocker [SEMANTIC MARKUP, COGNITION]: Groups of form elements MUST have group labels (e.g. <fieldset> and <legend>) - #18569](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18569)<br/>**Production** | **Opened:** January 14, 2021 | **Severity:** 508-defect-1 — **_Severe_**
- [508-defect-1 ❗ Launchblocker [SEMANTIC MARKUP, COGNITION]: Error message MUST be semantically linked and persistent to the year input field - #18578](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18578)<br/>**Production** | **Opened:** January 14, 2021 | **Severity:** 508-defect-1 — **_Severe_**
- [sitewide 508-defect-2 [SCREEN READER]: Screen reader users SHOULD know there is relevant info after making a selection in the wizard - #18581](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18581)<br/>**Production** | **Opened:** January 14, 2021 | **Severity:** 508-defect-2 — **_Serious_**
- [508-defect-2 [SEMANTIC MARKUP, COGNITION]: Anticipated Separation: <legend> SHOULD be announced to screen readers when in form groupings - #19013](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19013)<br/>**Production** | **Opened:** January 26, 2021 | **Severity:** 508-defect-2 — **_Serious_**

Back to [Table of Contents](#table-of-contents)

---
#### 2346

**No open issues**

Back to [Table of Contents](#table-of-contents)

---
#### 526 PTSD

**Audit status:** _Audited January 2019._<br/>
**[781a PTSD form](https://staging.va.gov/disability-benefits/apply/form-526-all-claims/new-disabilities/ptsd-781a-additional-changes)**

**Open issues**

- [[SCREENREADER]: 526 V2 - Date fields are firing error messages too soon on unit assignment page - #5190](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5190)<br/>
**Opened:** August 19, 2019 | **Severity:** 508-defect-3 - **_Minor_**
  
Back to [Table of Contents](#table-of-contents)

---
#### Claim and Appeal Status

**Audit status:** _Audited by VA 508 Office February 2019._<br/>
**Open issues**

- [[AXE-CORE]: UL and OL must only directly contain LI, SCRIPT, or TEMPLATE elements - #1064](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1064)<br/>
  **Opened:** August 19, 2019 | **Severity:** 508-defect-2 - **_Serious_**

Back to [Table of Contents](#table-of-contents)

---
#### HCA Dashboard Notifications

**Audit status:** _First audit completed by Product Support June 2019. Sent to VA 508 team on June 27, 2019. Certified as having no 508 issues on July 2, 2019._

**No open issues**

Back to [Table of Contents](#table-of-contents)

---
#### Apply for Pre-need Burial

**Audit status:** _Audited by VA 508 Office September 2018._<br/>

**Open issues**

- [Sitewide Issue #314](https://github.com/department-of-veterans-affairs/va.gov-team/issues/314)<br/>
  **Opened:** June 18, 2019 | **Severity:** 508-defect-1 — **_Critical_**
- [Sitewide Issue #316](https://github.com/department-of-veterans-affairs/va.gov-team/issues/316)<br/>
  **Opened:** June 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[SCREENREADER]: Headings should be nested appropriately for ease of navigation - #1074](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1074)<br/>
  **Opened:** June 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [Sitewide Issue #318](https://github.com/department-of-veterans-affairs/va.gov-team/issues/318)<br/>
  **Opened:** June 18, 2019 | **Severity:** 508-defect-3 - **_Minor_**
- [[CI/CD]: Review coverage of accessibility checks in pre-need end-to-end tests - #7404](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7404)<br/>**Production** | **Opened:** March 27, 2020 | **Severity:** 508-defect-3 — **_Minor_**

Back to [Table of Contents](#table-of-contents)

---
#### VA Letters

**No open issues**

Back to [Table of Contents](#table-of-contents)

---
#### Pensions

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in pensions end-to-end tests - #7403](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7403)<br/>**Production** | **Opened:** March 27, 2020 | **Severity:** 508-defect-3 — **_Minor_**

Back to [Table of Contents](#table-of-contents)

---
#### Medical Device Ordering Tool

**Audit status:** _[Staging review completed by VSA, June 8, 2020](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9859)._<br/>

**Open issues**

* [#9115 sitewide, forms — 508-defect-2 [AXE-CORE]: Heading levels SHOULD increase by one](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9115)<br/>**Staging** | **Opened:** June 8, 2020 | **Severity:** _508-defect-2  - **Serious**_
* [#9936 508-defect-2 [SCREENREADER]: Subway list steps SHOULD announce the step number](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9936)<br/>**Staging** | **Opened:** June 8, 2020 | **Severity:** _508-defect-2  - **Serious**_
* [#9860 sitewide, forms — 508-defect-2 [AXE-CORE, SEMANTIC MARKUP]: Email inputs MUST be paired with labels](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9860)<br/>**Staging** | **Opened:** June 8, 2020 | **Severity:** _508-defect-2  - **Serious**_
* [#9113 sitewide, forms — 508-defect-3 [SCREENREADER]: Decorative content MUST be implemented in a way it can be ignored by assistive technology](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9113)<br/>**Staging** | **Opened:** June 8, 2020 | **Severity:** _508-defect-3 - **Minor**_ 
* [#9114 sitewide, forms — 508-defect-3 [SCREENREADER]: Consider updating phone number documentation in design system, to include spacing in the aria-label](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9114)<br/>**Staging** | **Opened:** June 8, 2020 | **Severity:** _508-defect-3 - **Minor**_ 
* [#9116 sitewide, forms — 508-defect-3 [FOCUS MANAGEMENT]: Focus outline SHOULD be removed from non-linked heading](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9116)<br/>**Staging** | **Opened:** June 8, 2020 | **Severity:** _508-defect-3 - **Minor**_ 

Back to [Table of Contents](#table-of-contents)

---
#### Debt Letters MVP

**Audit status:** _[VSA Staging Review completed on August 4, 2020](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12166)_<br/>
**Open issues**

- [508-defect-2 Fast Follow! [COGNITION]: Downloaded files SHOULD be consistent with what the user clicked to download - #12184](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12184)<br/>**Staging** | **Opened:** August 6, 2020 | **Severity:** _508-defect-2 Fast Follow - **Serious**_
  
Back to [Table of Contents](#table-of-contents)

---
#### Debt Letters Iteration Two

**Audit status:** _[VSP Staging Review completed on behalf of VSA December 1, 2020](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16720)_<br/>
**Open issues**

- [508-defect-2 [KEYBOARD]: BAM2 Debt Letters - The debt download table sorting function must be keyboard accessible - #17894](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17894)<br/>**Staging** | **Opened:** December 28, 2020 | **Severity:** _508-defect-2 - **Moderate**_
- [508-defect-4 [COGNITION]: BAM2 Debt Letters - Consider renaming "Details" breadcrumb on debt detail view - #16788](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16788)<br/>**Staging** | **Opened:** December 1, 2020 | **Severity:** _508-defect-4 - **Trivial**_
  
Back to [Table of Contents](#table-of-contents)

---
#### Higher Level Review

**Audit status:** _[VSA Staging Review first pass completed on December 30, 2020](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16047)_<br/>
**Open issues**

- [Work-in-progress 508-defect-1 [COGNITION, SEMANTIC MARKUP]: Form field instructions MUST be associated with inputs or buttons - #16261](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16261)<br/>**Staging** | **Opened:** November 13, 2020 | **Severity:** _508-defect-1 - **Critical**_
- [508-defect-2 [COGNITION, SCREEN READER, MOBILE]: Mobile and screen reader users SHOULD know there is relevant info after the call-to-action button - #16182](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16182)<br/>**Staging** | **Opened:** November 13, 2020 | **Severity:** _508-defect-2 - **Serious**_


Back to [Table of Contents](#table-of-contents)

---
### VSA Caregivers

**No open issues**

Back to [Table of Contents](#table-of-contents)

---

### VSA eBenefits

#### Direct Deposit

**Audit status:** Staging review started February 5, 2021<br/>
**Open issues**

- [508-defect-1 ❗ [COGNITION, SEMANTIC MARKUP]: Form field instructions MUST be associated with inputs and buttons - #19570](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19570)<br/>**Staging** | **Opened:** February 5, 2021 | **Severity:** 508-defect-1 — **_Severe_**
- [508-defect-2 [COGNITION]: H1 should match or be included in the page title - #19552](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19552)<br/>**Staging** | **Opened:** February 5, 2021 | **Severity:** 508-defect-2 — **_Serious_**
- [508-defect-3 [COGNITION]: Edit buttons SHOULD be styled as buttons - #19562](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19562)<br/>**Staging** | **Opened:** February 5, 2021 | **Severity:** 508-defect-3 — **_Minor_**

Back to [Table of Contents](#table-of-contents)

---

#### Rated Disabilities

**Audit Status:** _Pre-launch 508 audit completed._<br/>
**[Filtered list of issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4619)**<br/>

**Open issues**

- [[SCREENREADER, COGNITION]: Screenreader experience of reading service-connected or not disabilities isn't clear - 4784](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4784)<br/>
  **Opened:** January 13, 2020 | **Severity:** 508-defect-2 - **_Serious_**
- [[SCREENREADER] Individual disabilities currently in individual `<dl>` would be improved in a single `<dl>` - 4637](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4637)<br/>
**Opened:** January 7, 2020 | **Severity:** 508-defect-3 - **_Minor_**

Back to [Table of Contents](#table-of-contents)

---
#### 686 Form

**Audit status:** Staging review completed August 28, 2020<br/>
**Open issues**

- [[COGNITION]: Non-selected or opted-into situations SHOULD include confirmation or not appear on review pages - #12996](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12996)<br/>**Staging** | **Opened:** August 28, 2020 | **Severity:** 508-defect-2 — **_Serious_**
- [[COGNITION]: Remove buttons SHOULD have accessible labels when editing inline data on Review screen - #12999](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12999)<br/>**Staging** | **Opened:** August 28, 2020 | **Severity:** 508-defect-2 — **_Serious_**
- [[KEYBOARAD]: Focus SHOULD be restored to the Add Another button when users press Remove when editing in place - #13007](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13007)<br/>**Staging** | **Opened:** August 28, 2020 | **Severity:** 508-defect-2 — **_Serious_**
- [[DESIGN]: CONSIDER re-ordering the confirmation page to support assistive tech better - #13019](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13019)<br/>**Staging** | **Opened:** August 28, 2020 | **Severity:** 508-defect-4 — **_Trivial_**

Back to [Table of Contents](#table-of-contents)

---
#### Chapter 36

**Audit status:** _[Full a11y review started January 25, 2021](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15386)_<br/>
**Open issues**
Note: many of these were transferred from the original staging review

- [508-defect-2 [FOCUS MANAGEMENT, SCREENREADER]: Focus on page load SHOULD be consistent - #17004](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17004)<br/>**Staging** | **Opened:** December 7, 2020 | **Severity:** 508-defect-2 — **_Serious_**
- [508-defect-2 [COGNITION]: Checkbox selections MUST be clear to the user on the review information page - #16997](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16997)<br/>**Staging** | **Opened:** December 7, 2020 | **Severity:** 508-defect-2 — **_Serious_**
- [508-defect-2 [COGNITION]: Error message MUST be specific to the field - #16784](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16784)<br/>**Staging** | **Opened:** December 1, 2020 | **Severity:** 508-defect-2 — **_Serious_**
- [508-defect-2 [COGNITION, SCREEN READER]: Screen reader users SHOULD know there is relevant info after making a selection in the wizard - #16745](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16745)<br/>**Staging** | **Opened:** December 1, 2020 | **Severity:** 508-defect-2 — **_Serious_**
- [508-defect-2 [COGNITION]: Heading levels SHOULD increase by one - #16692](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16692)<br/>**Staging** | **Opened:** November 30, 2020 | **Severity:** 508-defect-2 — **_Serious_**
- [508-defect-2 [SEMANTIC MARKUP, COGNITION]: Groups of form elements MUST have group labels (e.g. <fieldset> and <legend>) - #16717](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16717)<br/>**Staging** | **Opened:** November 30, 2020 | **Severity:** 508-defect-2 — **_Serious_**
- [sitewide 508-defect-2 [COGNITION, SCREEN READER, MOBILE]: Mobile and screen reader users SHOULD know there is relevant info after the call-to-action button - #16731](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16731)<br/>**Staging** | **Opened:** December 1, 2020 | **Severity:** 508-defect-2 — **_Serious_**
- [508-defect-2 [COGNITION, SCREENREADER]: Changes to the length of the form SHOULD be announced to screen reader users - #16988](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16988)<br/>**Staging** | **Opened:** December 7, 2020 | **Severity:** 508-defect-2 — **_Serious_**
- [508-defect-2 [FOCUS MANAGEMENT, SCREENREADER]: Focus on page load SHOULD be consistent - #17004](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17004)<br/>**Staging** | **Opened:** December 7, 2020 | **Severity:** 508-defect-2 — **_Serious_**
- [508-defect-3 [COGNITION]: Buttons that have the same functionality MUST be identified consistently - #16711](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16711)<br/>**Staging** | **Opened:** November 30, 2020 | **Severity:** 508-defect-3 — **_Moderate_**
- [508-defect-3: [SCREENREADER]: Focus SHOULD go to H1 on the subway map page after the wizard - #16826](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16826)<br/>**Staging** | **Opened:** December 2, 2020 | **Severity:** 508-defect-3 — **_Moderate_**
- [508-defect-3 [COGNITION]: Links SHOULD be consistently styled as links - #19317](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19317)<br/>**Staging** | **Opened:** February 1, 2021 | **Severity:** 508-defect-3 — **_Moderate_**
- [508-defect-3 [COGNITION]: Text that is visually styled and intended as headings SHOULD be headings #19323](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19323)<br/>**Staging** | **Opened:** February 1, 2021 | **Severity:** 508-defect-3 — **_Moderate_**
- [sitewide 508-defect-4 [COGNITION, SCREENREADER]: CONSIDER announcing empty fields to SR users in the review accordion component - #16892](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16892)<br/>**Staging** | **Opened:** December 3, 2020 | **Severity:** 508-defect-4 — **_Minor_**

Back to [Table of Contents](#table-of-contents)

---
#### View Payments

**Audit status:** _[Staging review started December 7, 2020](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17007)_<br/>
**No open issues**

Back to [Table of Contents](#table-of-contents)

---

### VFS Education

#### Colmery Act Opt Out

**Audit status:** Request sent to VA 508 office September 2018. All issues but one resolved on 2/7/2019.<br/>

**Open issues**

- [Sitewide Issue #314](https://github.com/department-of-veterans-affairs/va.gov-team/issues/314)<br/>
**Opened:** June 18, 2019 | **Severity:** 508-defect-1 — **_Critical_**
  
Back to [Table of Contents](#table-of-contents)

---

#### Education Feedback Tool

**Audit status:** _Request sent to VA 508 office November 2018._<br/>

**Open issues**

- [[SCREENREADER]: Alert message for bad submit is not read out to assistive devices like JAWS or VoiceOver - #1081](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1081)<br/>
  **Opened:** August 19, 2019 | **Severity:** 508-defect-1 — **_Critical_**
- [[CI/CD]: Review coverage of accessibility checks in EDU feedback-tool end-to-end tests - #7349](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7349)<br/>**Production** | **Opened:** March 30, 2020 | **Severity:** 508-defect-3 — **_Minor_**

Back to [Table of Contents](#table-of-contents)

---

#### Edu 1990

**Audit status:** _Completed June 2017._<br/>

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in Education apps' end-to-end tests - #7348](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7348)<br/>**Production** | **Opened:** March 30, 2020 | **Severity:** 508-defect-3 — **_Minor_**

Back to [Table of Contents](#table-of-contents)

---

#### Edu 1990e

**Audit status:** _Completed June 2017._<br/>

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in Education apps' end-to-end tests - #7348](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7348)<br/>**Production** | **Opened:** March 30, 2020 | **Severity:** 508-defect-3 — **_Minor_**

Back to [Table of Contents](#table-of-contents)

---

#### Edu 1990n

**Audit status:** _Completed June 2017._<br/>

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in Education apps' end-to-end tests - #7348](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7348)<br/>**Production** | **Opened:** March 30, 2020 | **Severity:** 508-defect-3 — **_Minor_**

Back to [Table of Contents](#table-of-contents)

---

#### Education 1995 STEM Update

**Audit status:** Audited by VSP Product Support Team August 2019. Sent to VA 508 Office September 2019. Passed VA 508 audit.<br/>
**No open issues**<br/>
**[Test application](https://staging.va.gov/education/apply-for-education-benefits/application/1995/introduction/)**

Back to [Table of Contents](#table-of-contents)

---

#### Edu 0993

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in Education apps' end-to-end tests - #7348](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7348)<br/>**Production** | **Opened:** March 30, 2020 | **Severity:** 508-defect-3 — **_Minor_**

Back to [Table of Contents](#table-of-contents)

---

#### Edu 0994

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in Education apps' end-to-end tests - #7348](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7348)<br/>**Production** | **Opened:** March 30, 2020 | **Severity:** 508-defect-3 — **_Minor_**

Back to [Table of Contents](#table-of-contents)

---

#### Edu 1995

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in Education apps' end-to-end tests - #7348](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7348)<br/>**Production** | **Opened:** March 30, 2020 | **Severity:** 508-defect-3 — **_Minor_**

Back to [Table of Contents](#table-of-contents)

---

#### Edu 5495

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in Education apps' end-to-end tests - #7348](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7348)<br/>**Production** | **Opened:** March 30, 2020 | **Severity:** 508-defect-3 — **_Minor_**

Back to [Table of Contents](#table-of-contents)

---
#### Edu 10203 STEM Benefit Form

**Audit status:** Audited by VSP Product Support and VA 508 Office April 2020. VA 508 office found no issues.<br/>
**No open issues**

Back to [Table of Contents](#table-of-contents)

---

#### Apply Wizard

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in EDU apply-wizard end-to-end tests - #7350](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7350)<br/>**Production** | **Opened:** March 30, 2020 | **Severity:** 508-defect-3 — **_Minor_**

Back to [Table of Contents](#table-of-contents)

---

### VSA Facility Locator

#### General Issues

**Audit status:** _Issues logged by auditor in February 2020._

**Open issues**<br/>

- [[AXE-CORE]: The Leaflet container needs a role appropriate for interactive content](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6103)<br/>**Production** | **Opened:** February 26, 2020 | **Severity:** 508-defect-4 - **_Trivial_**

**Audit status:** _Issues logged by auditor in July 2019._<br/>
**Open issues**<br/>
- [[SCREENREADER]: The map is announcing a lot of extra data on focus and each droplet needs a usable name - #515](https://github.com/department-of-veterans-affairs/va.gov-team/issues/515)<br/>
  **Opened:** July 8, 2019 | **Severity:** 508-defect-2 - **_Serious_**
  
Back to [Table of Contents](#table-of-contents)

---

#### Facility Locator Urgent Care MVP

**Audit status:** _Staging Review completed by VSA March 26, 2020._

**Open issues**

- [[KEYBOARD, SCREENREADER]: Navigating by keyboard between the map and the search results MUST be intuitive with changes communicated](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6897)<br/>**Production** | **Opened:** March 16, 2020 | **Severity:** 508-defect-3 — **_Moderate_**

Back to [Table of Contents](#table-of-contents)

---

#### Map Enhancements

**Audit status:** _[Staging Review completed, December 2020.](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17403)_

**Open issues**

- [508-defect-2 [COGNITION, FOCUS MANAGEMENT]: Focus order should preserve meaning - #17448](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17448)<br/>**Opened:** December 14, 2020 | **Severity:** 508-defect-2 - **_Serious_**

Back to [Table of Contents](#table-of-contents)

---

### VSA Public Websites

#### Appeal Modernization Process (AMA)

**Audit status:** _Staging Review complete, March 9, 2020; Sent to VA 508 Office March 11, 2020._<br/>

**Open issues**

- [508-defect-2 [DOCUMENTS]: Documents MUST be 508 compliant - #9998](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9998)<br/>**Production** | **Opened:** June 9, 2020 | **Severity:** 508-defect-2 — **_Serious_**
- [508-defect-2 [AXE-CORE]: Heading levels SHOULD increase by one - within Learn more about the fiduciary program list item - #9987](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9987)<br/>**Production** | **Opened:** June 9, 2020 | **Severity:** 508-defect-2 — **_Serious_**
- [508-defect-2 [AXE-CORE]: Heading levels SHOULD increase by one - sidebar Message us, Call us, etc - #9981](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9981)<br/>**Production** | **Opened:** June 9, 2020 | **Severity:** 508-defect-2 — **_Serious_**
- [CMS [SCREENREADER, KEYBOARD]: Aside SHOULD not be contained in another landmark](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6379)<br/>**Production** | **Opened:** March 2, 2020 | **Severity:** 508-defect-2 — **_Serious_**
- [CMS [AXE-CORE, SCREENREADER]: Heading levels SHOULD increase by one - the alert box heading breaks order](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6375)<br/>**Production** | **Opened:** March 2, 2020 | **Severity:** 508-defect-2 — **_Serious_**
- [CMS [KEYBOARD]: Landmarks MUST have a unique role or role/label/title (i.e. accessible name) combination; main nav and sidebar nav conflict](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6368)<br/>**Production** | **Opened:** March 2, 2020 | **Severity:** 508-defect-2 — **_Serious_**
- [CMS [SCREENREADER, KEYBOARD, COGNITION]: Links SHOULD look like links](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6507)<br/>**Production** | **Opened:** March 9, 2020 | **Severity:** 508-defect-3 — **_Minor_**
- [CMS [AXE-CORE]: All page content MUST be contained by landmarks - div.veteran-banner](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6339)<br/>**Production** | **Opened:** February 28, 2020 | **Severity:** 508-defect-4 — **_Trivial_**

Back to [Table of Contents](#table-of-contents)

---

#### Disability Calculator

**Audit status:** _Issues logged by Product Support during audit June 2019. Request sent to VA 508 office September 2019._

**Open issues**

- [[COGNITION]: Disability Calculator - Can we mention the expected data format in on-page instructions? - #1045](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1045)<br/>
  **Opened:** August 16, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[CI/CD]: Review coverage of accessibility checks in disability-rating-calculator end-to-end tests - #7320](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7320)<br/>**Production** | **Opened:** March 27, 2020 | **Severity:** 508-defect-3 — **_Minor_**

Back to [Table of Contents](#table-of-contents)

---

#### Local Side Navigation

**Audit status:** _Completed June 2017._<br/>
**No open issues**

Back to [Table of Contents](#table-of-contents)

---

#### New Contact Us Page

**Audit status:** _[First staging review done December 2020](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17542). VSP [finished the review in production](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19401) in February 2021._

**Open issues**

- [508-defect-1 [SCREENREADER] FAQ needs to have aria-label to properly pronounce it - #20237](https://github.com/department-of-veterans-affairs/va.gov-team/issues/20237)<br/>
**Opened:** February 21, 2021 | **Severity:** 508-defect-1 — **_Critical_**
- [508-defect-2 [SCREENREADER] Hours column in "Call Us" table not announcing correctly - #20239](https://github.com/department-of-veterans-affairs/va.gov-team/issues/20239)<br/>
**Opened:** February 21, 2021 | **Severity:** 508-defect-2 — **_Serious_**
- [508-defect-2 [SCREENREADER] VA needs to have aria-label to properly pronounce it - #20238](https://github.com/department-of-veterans-affairs/va.gov-team/issues/20238)<br/>
**Opened:** February 21, 2021 | **Severity:** 508-defect-2 — **_Serious_**
- [508-defect-3 [AXE-CORE]: Aside must not be contained in another landmark - #20236](https://github.com/department-of-veterans-affairs/va.gov-team/issues/20236)<br/>
**Opened:** February 21, 2021 | **Severity:** 508-defect-2 — **_Serious_**

---

### VFS Health Care

#### Health Care Application 1010-EZ

**Audit status:** _Request sent to VA 508 office November 2018._<br/>

**Open issues**

- [Sitewide Issue #314](https://github.com/department-of-veterans-affairs/va.gov-team/issues/314)<br/>
**Opened:** June 18, 2019 | **Severity:** 508-defect-1 — **_Critical_**
  
Back to [Table of Contents](#table-of-contents)

---

### VFS GI Bill Comparison Tool

#### GI Bill Comparison Tool

**Audit status:** _Audited by VA 508 Office November 2018._<br/>

**Open issues**

- [[COGNITION]: GIBCT® - Standardize the search and filter behavior with a "Go" button click - #1276](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1276)<br/>
  **Opened:** August 23, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[COGNITION]: GIBCT - Know before you go video has a logo with nondescript alt text - #3920](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3920)<br/>
  **Opened:** December 3, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[COGNITION]: GIBCT - "Learn more" is used for modals and windows to new content - #1132](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1132)<br/>
  **Opened:** August 20, 2019 | **Severity:** 508-defect-3 - **_Minor_**
  
Back to [Table of Contents](#table-of-contents)

---

#### GI Bill Comparison Tool VET TEC

**Audit Status:** _Audited by VSP Product Support Team August 2019._

**No open issues**
  
Back to [Table of Contents](#table-of-contents)

---

#### GI Bill Comparison Tool Colmery 107 Feature

**Audit status:** _Audited by VSP Product Support Team September 2019. Request sent to VA 508 Office October 2019._<br/>
**No open issues**<br/>
**[Test application](https://staging.va.gov/gi-bill-comparison-tool/)**

Back to [Table of Contents](#table-of-contents)

---

#### GI Bill Comparison Tool Forever GI Bill Section 116

**Audit status:** _First audit completed by VSP Product Support Team November 2019. Request sent to VA 508 Office November 2019._

**Open issues**

- [[DOCUMENT]: GIBCT Section 116 - Excel document has merged cells that could cause accessibility issues - #3835](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3835)<br/>
**Opened:** November 28, 2019 | **Severity:** 508-defect-1 — **_Critical_**
- [[DOCUMENT]: GIBCT Section 116 - Excel document SHOULD NOT have merged cells - #8670](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8670)<br/>
**Opened:** May 1, 2020 | **Severity:** 508-defect-2 - **_Serious_**

Back to [Table of Contents](#table-of-contents)

---

#### GI Bill Comparison Tool Caution Flags

**Audit status:** _Approved by VA 508 office in May 2020. Final VSP audit underway in May 2020._

**Open Issues:**
- [[DOCUMENTS]: GIBCT - Section 702 PDF MUST be reviewed for accessibility - #7985](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7985)<br/>
**Opened:** April 14, 2020 | **Severity:** 508-defect-2 - **_Serious_**

Back to [Table of Contents](#table-of-contents)

---

#### GI Bill Comparison Tool School Certifying Official Documentation

**Audit Status:** _First audit completed by VSP Product Support Team November 2019. Request sent to VA 508 Office November 2019._<br/>

**Open issues**

- [[DOCUMENT] GIBCT SCO - Lists are not picked up correctly by screen readers in Section 305 PDF - #3869](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3869)<br/>
**Opened:** November 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[DOCUMENT]: GIBCT SCO - VA ONCE PDF is not navigable with keyboard or JAWS screen reader - #3917](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3917)<br/>
**Opened:** November 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[DOCUMENT]: GIBCT SCO - VA ONCE PDF logo needs alt text - #3919](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3919)<br/>
**Opened:** November 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[DOCUMENT] GIBCT SCO - Page headings SHOULD be tagged in Section 305 PDF - #8749](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8749)<br/>
**Opened:** May 5, 2020 | **Severity:** 508-defect-3 - **_Minor_**
- [[DOCUMENT]: GIBCT SCO - Page headings SHOULD be tagged in VA ONCE PDF - #8750](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8750)<br/>
**Opened:** May 5, 2020 | **Severity:** 508-defect-3 - **_Minor_**
- [[DOCUMENT]: GIBCT SCO - CONSIDER adding headers to the Dear SCO letter - #8765](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8765)<br/>
**Opened:** May 5, 2020 | **Severity:** 508-defect-3 - **_Minor_**

Back to [Table of Contents](#table-of-contents)

---

#### GI Bill Estimate Your Benefits

**Audit Status:** _Staging review completed. VSP post-launch audit finished as of October 5, 2020. Sent to to VA 508 office on October 13, 2020._<br/>

**No open issues**

Back to [Table of Contents](#table-of-contents)

---

#### GI Bill Section 103

**Audit Status:** _VSP staging review complete._<br/>
**No open issues**

Back to [Table of Contents](#table-of-contents)

---

### GI Bill STEM Standalone Form

**Audit status:** _VSP [Full accessibility and 508 audit completed](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13685) week of January 4, 2021_<br/>
**Open issues**

- [508-defect-1 ❗ Launchblocker [SCREENREADER]: STEM Standalone - Critical information is not available to the user with keyboard navigation - #18254](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18254)<br/>**Opened:** January 7, 2021 | **Severity:** 508-defect-1 - **_Critical_**
- [508-defect-1 ❗ Launchblocker [SCREENREADER]: STEM Standalone - Screen reader users are required to enter direct deposit details before informing them it is optional - #18256](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18256)<br/>**Opened:** January 7, 2021 | **Severity:** 508-defect-1 - **_Critical_**
- [508-defect-2 [COGNITION]: STEM Standalone - Social Security Number Alert should say "Social Security Number" instead of "SSN" - #18159](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18159)<br/>**Opened:** January 7, 2021 | **Severity:** 508-defect-2 - **_Serious_**
- [[KEYBOARD]: STEM Standalone - Focus MUST be returned to the Edit button when Update page is pressed or clicked - #12338](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12338) <br/>**Opened:** August 10, 2020 | **Severity:** _508-defect-2 - **Serious**_
- [[COGNITION]: STEM Standalone - CONSIDER revising the optional / required pattern for contacting a user in step 5 - #12341](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12341) <br/>**Opened:** August 10, 2020 | **Severity:** _508-defect-3 - **Moderate**_
- [508-defect-3 [SCREENREADER]: STEM Standalone - Links that open in new tab do not alert user that a new tab will be opened - #18247](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18247)<br/>**Opened:** January 7, 2021 | **Severity:** 508-defect-3 - **_Moderate_**
- [508-defect-3 [SCREENREADER]: STEM Standalone - <legend> element is not anncouncing for screen readers - #18250](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18250)<br/>**Opened:** January 7, 2021 | **Severity:** 508-defect-3 - **_Moderate_**
  
Back to [Table of Contents](#table-of-contents)

---

### VFS Veterans Affairs Online Scheduler (VAOS)

**Audit status:** _Staging review completed by VSP, February 2020. Request to review calendar widget sent to VA 508 office February 2020._<br/>

**Open issues**
- [[COGNITION]: VAOS Appointment Tabs - CONSIDER adding SR-only text to the visual tab labels - #11470](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11470)<br/>**Production** | **Opened:** June 15, 2020 | **Severity:** _508-defect-4 - **Trivial**_

Back to [Table of Contents](#table-of-contents)

---
#### VAOS Express Care Appointments

**Audit status:** _VSP full audit completed October 2020. Sent to VA 508 office November 2020._<br/>
**Audit epic:** [Full Accessibility & 508 Office Audit [Express Care] - #13272](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13272)


**Open issues**
- [[MOBILE]: Should buttons be full-width at mobile size for creating an Express Care appointment? - #15086](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15086)<br/>**Limited production** | **Opened:** October 20, 2020
- [[DESIGN]: Mobile breadcrumb looks indented a bit too much on the form views - #15083](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15083)<br/>**Limited production** | **Opened:** October 20, 2020
- [[DESIGN]: Should the Express Care radio button labels be bold, or regular weight like requesting an in-person appointment? - #15084](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15084)<br/>**Limited production** | **Opened:** October 20, 2020
  
Back to [Table of Contents](#table-of-contents)

---

### Appeal Modernization Process (AMA) Phase 2

**Audit status:** 

- _[Staging review completed by VSA, April 10, 2020](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7647)._

- _[Full accessibility audit completed by VSA, June 16, 2020](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8697)._

- _Sent to VA 508 Office for review, June 16, 2020._

**Open issues**

A number of issues were sitewide, design system, CMS, and are listed in the [sitewide list](#sitewide) section above. 

- [[SCREENREADER, COGNITION]: Bold text SHOULD be made headings, in this instance - #7770](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7770)<br/>
**Production** | **Opened:** April 8, 2020 | **Severity:** _508-defect-2 - **_Serious_**
- [[SCREENREADER, COGNITION]: State abbreviations SHOULD be coded as such - #7808](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7808)<br/>
**Production** | **Opened:** April 9, 2020 | **Severity:** _508-defect-3 - **_Minor_**
- [[SCREENREADER, COGNITION]: CONSIDER using semantic markup for screen reader users - #7834](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7834)<br/>
**Production** | **Opened:** April 9, 2020 | **Severity:** _508-defect-3 - **_Minor_**
- [[MOBILE] There SHOULD be sufficient space between interactive elements, to avoid errors - #7839](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7839)<br/>
**Production** | **Opened:** April 9, 2020 | **Severity:** _508-defect-3 - **_Minor_**

Back to [Table of Contents](#table-of-contents)

--- 
### COVID-19 Resources (VSA Public Websites)

**Audit status:** _Review TBD — content is launching without review due to emergency status._<br/>
**No open issues**

Back to [Table of Contents](#table-of-contents)

---
### Find Forms MVP

**Audit status:** _Full A11y Audit completed by VSA, November 9, 2020; Staging review completed by VSA, April 22, 2020._<br/>

**Open issues**

- [[#14432 508-defect-2 COGNITION]: The page MUST specify the language](https://github.com/department-of-veterans-affairs/va.gov-team/issues/14432)<br/>**Production** | **Opened:** October 5, 2020 | **Severity:** _508-defect-2 - **Serious**_
- [[#8248 components, design system [SCREENREADER] Aside MUST not be contained in another landmark](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8248)<br/>**Production** | **Opened:** April 21, 2020 | **Severity:** _508-defect-2 - **Serious**_ 
- [[#8250 sitewide [AXE-CORE]: Landmarks MUST have a unique role or role/label/title (i.e. accessible name) combination](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8250)<br/>**Production** | **Opened:** April 21, 2020 | **Severity:** _508-defect-2 - **Serious**_ 
- [[#8255 sitewide, design system, components [KEYBOARD]: Focused item MUST be contained by focus outline, pagination Next >](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8255)<br/>**Production** | **Opened:** April 21, 2020 | **Severity:** _508-defect-3 - **Minor**_ 
- [[#8279 [FOCUS MANAGEMENT]: Focus outline SHOULD be removed from non-linked heading](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8279)<br/>**Production** | **Opened:** April 22, 2020 | **Severity:** _508-defect-3 - **Minor**_ 

Back to [Table of Contents](#table-of-contents)

---
### Find a VA Form Post-Launch MVP

**Audit status:** _Staging review completed by VSA, January 13, 2020._<br/>

**Open issues**

- [508-defect-2 [COGNITION]: Links MUST NOT rely on color - #18442](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18442)<br/>**Production** | **Opened:** January 13, 2021 | **Severity:** _508-defect-2 - **Serious**_
- [508-defect-2 [COGNITION]: Find Form Results - Spanish content must include a lang="ES" attribute for proper pronunciation with assistive technology - #18434](https://github.com/department-of-veterans-affairs/va.gov-team/issues/14432)<br/>**Production** | **Opened:** January 13, 2021 | **Severity:** _508-defect-2 - **Serious**_
- [508-defect-2 [SCREENREADER]: Headings should be used semantically - 18429](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18429)<br/>**Production** | **Opened:** January 13, 2021 | **Severity:** _508-defect-2 - **Serious**_
- [508-defect-3 [COGNITION, SCREENREADER]: Lists SHOULD be announced as lists - 18415](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18415)<br/>**Production** | **Opened:** January 13, 2021 | **Severity:** _508-defect-2 - **Serious**_
- [sitewide 508-defect-2 [COGNITION, SCREENREADER]: Pagination SHOULD use meaningful landmarks and aria techniques - 18398](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18398)<br/>**Production** | **Opened:** January 13, 2021 | **Severity:** _508-defect-2 - **Serious**_
- [sitewide 508-defect-2 [COGNITION, SCREENREADER]: Heading should read as a single item - 18389](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18389)<br/>**Production** | **Opened:** January 13, 2021 | **Severity:** _508-defect-2 - **Serious**_
- [508-defect-3 [COGNITION]: Links SHOULD be styled as links - 18395](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18395)<br/>**Production** | **Opened:** January 13, 2021 | **Severity:** _508-defect-3 - **Minor**_ 
- [508-defect-4 [SCREENREADER]: Purely presentational content should not be announced to screen reader users - 18438](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18438)<br/>**Production** | **Opened:** January 13, 2021 | **Severity:** _508-defect-4 - **Minor**_ 

Back to [Table of Contents](#table-of-contents)

---
### SSOe Single Sign On

**Audit status:** _VSP staging review completed._<br/>

**Open issues**

- [[SCREENREADER]: Single sign-on modal - Keyboard and screen reader focus MUST be trapped in modal windows - #9229](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9229)<br/>**Staging** | **Opened:** May 18, 2020 | **Severity:** _508-defect-3 - **Minor**_
- [[KEYBOARD]: Single sign-on modal - Focus SHOULD go to the top of the page when modal is closed - #9227](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9227)<br/>**Staging** | **Opened:** May 18, 2020 | **Severity:** _508-defect-3 - **Minor**_
- [[COGNITION]: SSO login modal - CONSIDER reviewing language for "other sites" - #8670](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8670)<br/>**Staging** | **Opened:** May 1, 2020 | **Severity:** _508-defect-4 - **Trivial**_

Back to [Table of Contents](#table-of-contents)

---
### COVID-19 Chatbot

**Audit status:** _App in production. This application has some dependencies being adjusted, and will be queued for review as soon as possible._<br/>
**[All issues logged in department-of-veterans-affairs covid19-chatbot repo](https://github.com/department-of-veterans-affairs/covid19-chatbot/issues?q=is%3Aopen+is%3Aissue+label%3Aaccessibility)**

Back to [Table of Contents](#table-of-contents)

---
### Yellow Ribbon MVP

**Audit status:** _Staging review completed by VSA, May 7, 2020._<br/>

**Open issues**

* [508-defect-2 [SCREENREADER]: Bold, italic text and font-size MUST not be used to style P elements as a heading - #11966](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11966)<br/>**Staging** | **Opened:** August 3, 2020 | **Severity:** _508-defect-2 - **Serious**_
* [508-defect-2 [MOBILE DESIGN]: Relevant content provided on desktop MUST also be available on mobile - #11969](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11969)<br/>**Staging** | **Opened:** August 3, 2020 | **Severity:** _508-defect-2 - **Serious**_
* [508-defect-2 [SCREENREADER]: Screenreader SHOULD announce the accurate number of items - #12060](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12060)<br/>**Staging** | **Opened:** August 4, 2020 | **Severity:** _508-defect-2 - **Serious**_
* [508-defect-2 [SEMANTIC MARKUP, SCREENREADER]: Search form SHOULD use semantic markup - #12108](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12108)<br/>**Staging** | **Opened:** August 5, 2020 | **Severity:** _508-defect-2 - **Serious**_
* [#9374 508-defect-3 [FOCUS MANAGEMENT]: Focus order SHOULD flow in the logical reading order](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9374)<br/>**Staging** | **Opened:** May 20, 2020 | **Severity:** _508-defect-3 - **Minor**_
* [508-defect-3 [SCREENREADER]: The same terms SHOULD be used for non-sighted and sighted users - #12547](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12547)<br/>**Staging** | **Opened:** August 17, 2020 | **Severity:** _508-defect-3 - **Minor**_ 

Back to [Table of Contents](#table-of-contents)

---
### Left Nav

**Audit status:** _Staging review completed by VSA, May 12, 2020._<br/>
**Open issues**<br/>
* [508-defect-3 VAMC Left Nav focus is offset for IE-11 - #18269](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12547)<br/>**Production** | **Opened:** January 7, 2021 | **Severity:** _508-defect-3 - **Moderate**_

Back to [Table of Contents](#table-of-contents)

---
### Public and Automated PDF Technical Discovery

**Audit status:** _VSP and VSA, Q2 2020_<br/>
**Open issues**

[Technical Discovery - Public and Automated PDF Accessibility - #10907](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10907)<br/>
**Opened:** July 6, 2020<br/>
[Documentation - PDF Error - Associate table data with header rows - #15550](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15550)<br/>
**Opened:** October 28, 22020<br/>
[Documentation - PDF Error - Manual review required - #15548](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15548)<br/>
**Opened:** October 28, 22020<br/>
[Documentation - PDF Error - Invalid table structure - #15547](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15547)<br/>
**Opened:** October 28, 22020<br/>
[Documentation - PDF Error - Missing tooltip in form field - #15546](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15546)<br/>
**Opened:** October 28, 22020<br/>
[Documentation - PDF Error - Image invalid alt text - #15544](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15544)<br/>
**Opened:** October 28, 22020<br/>
  
Back to [Table of Contents](#table-of-contents)

---
### COVID-19 Screener

**Audit status:** _VSA audited in production, June 2020_<br/>
**Open issues**

- [[FOCUS MANAGEMENT]: Focus SHOULD move to the next question after selecting Yes or No - #9967](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9967)<br/>**Staging** | **Opened:** June 8, 2020 | **Severity:** _508-defect-2 - **Serious**_
- [A11y: Android - Bulleted list is not read by Talk Back - #10998](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10998)<br/>
**Opened:** July 8, 2020
- [A11y-Should: Semantic markup changes to form input - #9606](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9606)<br/>
**Opened:** May 28, 2020
  
Back to [Table of Contents](#table-of-contents)

---
### VA Medical Sites

**Audit status:** _VSA working with VAMC team_<br/>
**Open issues**

- [[SEMANTIC MARKUP]: Links SHOULD not have title attributes - #11157](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11157)<br/>**Staging** | **Opened:** July 13, 2020 | **Severity:** _508-defect-2 - **Serious**_
- [IN-PROGRESS 508-defect-3 [SCREENREADER]: Directions links SHOULD include sr-only text to indicate specific location - #11151](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11151)<br/>**Staging** | **Opened:** July 10, 2020 | **Severity:** _508-defect-2 - **Serious**_
  
Back to [Table of Contents](#table-of-contents)

---
### App Directory

**Audit status:** _[VSP Staging Review completed in production November 30, 2020](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16432)_<br/>
**Open issues**

- [508-defect-3 [KEYBOARD] App Directory - Back to top button must work consistently with Public Websites' implementation - #16713](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16713)<br/>**Production** | **Opened:** November 30, 2020 | **Severity:** _508-defect-3 -  **Moderate**_
  
Back to [Table of Contents](#table-of-contents)

---
### COVID-19 Vaccine Prep Tool

**Audit status:** _VSP [staging review underway](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16987) week of December 7, 2020_<br/>
**Open issues**<br/>

- [508-defect-2 [COGNITION]: COVID Vaccine - Users must be able to re-enter their email address on the logged out form - #16999](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16999)<br/>**Staging** | **Opened:** December 7, 2020 | **Severity:** _508-defect-2 - **Serious**_
- [508-defect-2 [COGNITION]: COVID Vaccine - Heading levels should only increase by one - #17156](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17156)<br/>**Staging** | **Opened:** December 9, 2020 | **Severity:** _508-defect-2 - **Serious**_
- [508-defect-3 [COGNITION]: COVID Vaccine - Zip Code question must not fire the error message as soon as the group receives keyboard focus - #17241](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17241)<br/>**Staging** | **Opened:** December 9, 2020 | **Severity:** _508-defect-3 - **Moderate**_

Back to [Table of Contents](#table-of-contents)

---

### VSA Search and Discovery
All VSA Search and Discovery team projects will be added here. Each project will have its own audit schedule and issue list.

Back to [Table of Contents](#table-of-contents)

#### Search Typeahead

**Audit status:** _[VSA staging review started December 2020](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17181)_<br/>
**No open issues**

Back to [Table of Contents](#table-of-contents)

---
### COVID-19 Vaccine Trial Registry

**Audit status:** _VSP [Full accessibility and 508 audit completed](https://github.com/department-of-veterans-affairs/va.gov-team/issues/14103) week of January 4, 2021_<br/>
**Open issues**

- [508-defect-3 [COGNITION]: COVID Vaccine Trials - None of the above and Prefer not to answer checkbox "uncheck all" behavior should be clear to users - #18271](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18271)<br/>**Opened:** January 7, 2021 | **Severity:** 508-defect-3 - **_Moderate_**
- [508-defect-4 [COGNITION]: COVID Vaccine Trials - 711 link aria-label repeats "TTY" for screen readers - #18274](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18274)<br/>**Opened:** January 7, 2021 | **Severity:** 508-defect-4 - **_Trivial_**
- [[DESIGN] COVID Vaccine Trials - MacOS Safari cuts off the focus halo when accordions are opened - #18275](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18275)<br/>**Opened:** January 7, 2021

Back to [Table of Contents](#table-of-contents)

---
### VSA Content Localization

#### VSA Translations Spanish Corona

**Audit Status:** _Staging review by VSA on January 18, 2021_<br/>
**Open issues**

- [508-defect-2 [SCREENREADER, KEYBOARD]: Complementary information should be contained in an aside - 18694](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18694)<br/>**Opened:** January 18, 2021 | **Severity:** 508-defect-2 - **_Serious_**
- [508-defect-2 [COGNITION, SEMANTIC MARKUP] The link text MUST make sense in context, and should make sense when taken out of context - 18696](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18696)<br/>**Opened:** January 18, 2021 | **Severity:** 508-defect-2 - **_Serious_**
  

Back to [Table of Contents](#table-of-contents)

---
### New Project Name

**Audit status:** _Audit status, team, and date_<br/>
Add another link to the [Table of Contents](#table-of-contents). This is an important step to make applications easier to find as the list gets longer.

**Open issues**

- _Create a link from the issue title and issue number. Use the format `Issue Title - # Issue Number`_ <br/>
  **Opened:** _Date issue ticket was written_ | **Severity:** _Issue severity based on the [accessibility defect rubric](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md)_
