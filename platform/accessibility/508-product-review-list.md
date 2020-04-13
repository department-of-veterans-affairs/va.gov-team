# Product list for 508 testing

This list is the current record of 508 issues in the `va.gov-team` repo. It will be updated weekly for accuracy.

Please refer to the deprecated list for [previously closed issues](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-product-review-list.md).

## Table of Contents

- [Product list for 508 testing](#product-list-for-508-testing)
  - [Table of Contents](#table-of-contents)
  - [Helpful links](#helpful-links)
  - [Issues by Application](#issues-by-application)
    - [Site-wide](#site-wide)
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
      - [2346](#2346)
      - [526 PTSD](#526-ptsd)
      - [Claim and Appeal Status](#claim-and-appeal-status)
      - [HCA Dashboard Notifications](#hca-dashboard-notifications)
      - [Apply for Pre-need Burial](#apply-for-pre-need-burial)
      - [VA Letters](#va-letters)
      - [Pensions](#pensions)
    - [VSA Caregivers](#vsa-caregivers)
    - [VSA eBenefits](#vsa-ebenefits)
      - [Rated Disabilities](#rated-disabilities)
      - [686 Form](#686-form)
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
    - [VSA Facility Locator](#vsa-facility-locator)
      - [General Issues](#general-issues)
      - [Facility Locator Urgent Care MVP](#facility-locator-urgent-care-mvp)
    - [VSA Public Websites](#vsa-public-websites)
      - [Appeal Modernization Process (AMA)](#appeal-modernization-process-ama)
      - [Disability Calculator](#disability-calculator)
      - [Local Side Navigation](#local-side-navigation)
      - [Pittsburgh Side Navigation (CMS)](#pittsburgh-side-navigation-cms)
      - [Appeal Modernization Process (AMA) Phase 2](#appeal-modernization-process-ama-phase-2)
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
    - [VFS Veterans Affairs Online Scheduler (VAOS)](#vfs-veterans-affairs-online-scheduler-vaos)
      - [Open issues](#open-issues-2)
    - [New Project Name](#new-project-name)
      - [Open issues](#open-issues-3)

## Helpful links

- [Create a 508 accessibility issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=508%2FAccessibility&template=508-issue.md&title=)
- [Review severity guidance for 508 accessibility issues](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md)

## Issues by Application

Each application or logical section of the site will have a heading and a detailed list of issues included. This is a transition from a data table approach, where rows will be removed from the table and added as list entries.

### Site-wide

**Maintainer:** VSP & VSA<br/>
**Audit Status:** Not applicable. Issues should be completed as soon as possible<br/>
**[Filtered list of issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aopen+is%3Aissue+label%3Asitewide+label%3A508%2FAccessibility)**<br/>

**Open Issues**

- [[SCREENREADER]: Inline error messages are announcing to screen readers on correction, not on subsequent errors - #314](https://github.com/department-of-veterans-affairs/va.gov-team/issues/314)<br/>
  **Production** | **Opened:** June 18, 2019 | **Severity:** 508-defect-1 — **_Critical_**
  
- [[COGNITION]: Multiple ambiguities with linked text in content block - #3556](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3556)<br/>
  **Production** | **Opened:** November 19, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[SCREENREADER]: Legends must be first child element of fieldesets for tabbing navigation - #767](https://github.com/department-of-veterans-affairs/va.gov-team/issues/767)<br/>
  **Production** | **Opened:** July 31, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[SCREENREADER]: JAWS does not announce some sections of the multi-step forms when loaded - #317](https://github.com/department-of-veterans-affairs/va.gov-team/issues/317)<br/>
  **Production** | **Opened:** June 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[SCREENREADER]: Text and inputs added dynamically should be announced by screen readers - #316](https://github.com/department-of-veterans-affairs/va.gov-team/issues/316)<br/>
  **Production** | **Opened:** June 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[KEYBOARD]: main nav accessibility -- tabbing in small screens - #1144](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1144)<br/>
  **Production** | **Opened:** August 20, 2019 | **Severity:** 508-defect-2 - **_Serious_**
* [sitewide, design system, CMS [AXE-CORE]: Heading levels SHOULD increase by one - #7708](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7708)<br/>
  **Production** | **Opened:** April 7, 2020 | **Severity:** _508-defect-2 - **_Serious_**
* [CMS, components, design system [KEYBOARD]: Landmarks MUST have a unique role or role/label/title (i.e. accessible name) combination; main nav and sidebar nav conflict - #7723](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7723)<br/>
  **Production** | **Opened:** April 7, 2020 | **Severity:** _508-defect-2 - **_Serious_**
* [sitewide, design system, CMS [AXE-CORE]: Heading levels should increase by one - #7755](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7755)<br/>
  **Production** | **Opened:** April 7, 2020 | **Severity:** _508-defect-2 - **_Serious_**
* [CMS, components, design system [SCREENREADER] Aside MUST not be contained in another landmark - #7844](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7844)<br/>
  **Production** | **Opened:** April 10, 2020 | **Severity:** _508-defect-2 - **_Serious_**
* [sitewide, design system, CMS [AXE-CORE]: Heading levels SHOULD increase by one, On this page component - #7877](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7877)<br/>
  **Production** | **Opened:** April 10, 2020 | **Severity:** _508-defect-2 - **_Serious_**
- [[EXPLORATION]: Turn on jsx-a11y ESLint rules - #1139](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1139)<br/>
  **Opened:** August 20, 2019 | **Severity:** 508-defect-4 - **_Trivial_**
- [[EXPLORATION]: Disable known buggy axe rules individually - #1140](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1140)<br/>
  **Opened:** August 20, 2019 | **Severity:** 508-defect-4 - **_Trivial_**
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
  * [CMS [AXE-CORE]: All page content MUST be contained by landmarks - #7757](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7757)<br/>
  **Production** | **Opened:** April 8, 2020 | **Severity:** _508-defect-4 - **_Trivial_**
* [CMS [AXE-CORE]: All page content MUST be contained by landmarks - div.veteran-banner - #7710](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7710)<br/>
  **Production** | **Opened:** April 7, 2020 | **Severity:** _508-defect-4 - **_Trivial_**
* [design system, components, cms [SEMANTIC MARKUP] Download links SHOULD use the download attribute - #7840](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7840)<br/>
  **Production** | **Opened:** April 9, 2020 | **Severity:** _508-defect-4 - **_Trivial_**
- [Consider displaying Veterans Crisis Line info in footer on screens 767px wide and smaller - #3459](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3459)<br/>
  **Production** | **Opened:** November 13, 2019 | **_Enhancement_**

---

### VA Developer Portal

**Audit Status:** Issues logged by VSP Product Support in Q1 2019 audit<br/>
**[All issues logged in vets-contrib repo for VA dev portal](https://github.com/department-of-veterans-affairs/vets-contrib/issues?q=is%3Aopen+label%3A508%2FAccessibility+label%3ASparkleMotion)**

---

### Outreach and Events

**Maintainer:** VSA<br/>
**Audit Status:** Audited January 2019<br/>
**[Test application](https://staging.va.gov/outreach-and-events/)**<br/>
**[Closed issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3A%22outreach+%26+events%22+label%3A508%2FAccessibility+is%3Aclosed)**

#### Open issues

- [[KEYBOARD]: Outreach materials - focus should be set on the number of results on pagination keypress or click - #981](https://github.com/department-of-veterans-affairs/va.gov-team/issues/981)<br/>
  **Opened:** August 14, 2019 | **Severity:** 508-defect-3 - **_Minor_**

---

### VSA Authenticated Experience

#### Profile Direct Deposit Feature

**Audit Status:** Audited by VSP Product Support Team August 2019. Request sent to VA 508 Office October 2019.<br/>
**No open issues**<br/>
**[Closed issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3A%22direct+deposit%22+label%3A508%2FAccessibility+is%3Aclosed)**

---

#### Address Validation

**Audit status:** Pre-launch 508 Review<br/>
**[Closed issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=label%3Avsa-authenticated-exp+label%3A508%2FAccessibility+is%3Aclosed)**

**Open issues**

- [[SCREENREADER, FOCUS MANAGEMENT] While on "Please confirm your address" screen, the content from "Edit mailing address" is read by screen reader](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5865)<br/>**Staging** | **Opened:** February 13, 2020 | **Severity:** 508-defect-1 — **_Critical_**

- [[COGNITION, SCREENREADER, KEYBOARD] Hiding 112 characters in a 40 character show/hide introduces screenreader and keyboard extra effort](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5861)<br/>**Staging** | **Opened:** February 13, 2020 | **Severity:** 508-defect-4 — **_Trivial_**

---

#### Profile Appointment Text Messages

**Audit status:** First audit completed by VSP Product Support Team October 2019<br/>
**[Closed issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?utf8=%E2%9C%93&q=label%3Avsa-authenticated-exp+label%3A508%2FAccessibility+Text+Appointments+is%3Aclosed+)**

---

#### Benefits Recommendations

**Audit status:** Request sent to VA 508 office March 2019.<br/>

**Open issues** identified by VSP Product Support

- [[SCREENREADER]: Recommendations - Update the new user modal dialog to better announce content - #1122](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1122)<br/>
  **Opened:** August 19, 2019 | **Severity:** 508-defect-3 - **_Minor_**

---

### VSA Benefits and Memorials

#### 526v2 All Claims

**Audit status:** Issues logged by Product Support during audit June 2019. Request sent to VA 508 office September 2019.<br/>
**[Closed Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3A526+label%3A508%2FAccessibility+is%3Aclosed)**

**Open issues** identified by VA 508 office

- [Sitewide - #314](https://github.com/department-of-veterans-affairs/va.gov-team/issues/314)<br/>
  **Opened:** June 18, 2019 | **Severity:** 508-defect-1 — **_Critical_**
- [[CI/CD]: Review coverage of accessibility checks in all-claims end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7319)<br/>**Production** | **Opened:** March 27, 2020 | **Severity:** 508-defect-2 — **_Serious_**
- [[CI/CD]: Review coverage of accessibility checks in 526EZ end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7314)<br/>**Production** | **Opened:** March 27, 2020 | **Severity:** 508-defect-3 — **_Minor_**
- [[USABILITY]: Application saved message could be missed by assistive devices - #182](https://github.com/department-of-veterans-affairs/va.gov-team/issues/182)<br/>
  **Opened:** June 5, 2019 | **Severity:** 508-defect-4 - **_Trivial_**

---

#### 996

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in 996 end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7316)<br/>**Production** | **Opened:** March 27, 2020 | **Severity:** 508-defect-3 — **_Minor_**

#### Discharge Wizard

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in discharge-wizard end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7347)<br/>**Production** | **Opened:** March 30, 2020 | **Severity:** 508-defect-3 — **_Minor_**

#### 2346

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in 2346 end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7318)<br/>**Production** | **Opened:** March 27, 2020 | **Severity:** 508-defect-3 — **_Minor_**

---

#### 526 PTSD

**Audit status:** Audited January 2019<br/>
**[781a PTSD form](https://staging.va.gov/disability-benefits/apply/form-526-all-claims/new-disabilities/ptsd-781a-additional-changes)**

**Open issues**

- [[SCREENREADER]: 526 V2 - Date fields are firing error messages too soon on unit assignment page - #5190](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5190)<br/>
  **Opened:** August 19, 2019 | **Severity:** 508-defect-3 - **_Minor_**

---

#### Claim and Appeal Status

**Audit status:** Audited by VA 508 Office February 2019<br/>
**Open issues**

- [[AXE-CORE]: UL and OL must only directly contain LI, SCRIPT, or TEMPLATE elements - #1064](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1064)<br/>
  **Opened:** August 19, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[CI/CD]: Review coverage of accessibility checks in Claims Status end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7313)<br/>**Production** | **Opened:** March 27, 2020 | **Severity:** 508-defect-3 — **_Minor_**

---

#### HCA Dashboard Notifications

**Audit status:** First audit completed by Product Support June 2019. Sent to VA 508 team on June 27, 2019. Certified as having no 508 issues on July 2, 2019.<br/>
**[Closed issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?utf8=%E2%9C%93&q=label%3Avsa-authenticated-exp+label%3A508%2FAccessibility+is%3Aclosed+HCA)**

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in hca end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7384)<br/>**Production** | **Opened:** March 27, 2020 | **Severity:** 508-defect-3 — **_Minor_**

---

#### Apply for Pre-need Burial

**Audit status:** Audited by VA 508 Office September 2018<br/>

**Open issues**

- [Sitewide Issue #314](https://github.com/department-of-veterans-affairs/va.gov-team/issues/314)<br/>
  **Opened:** June 18, 2019 | **Severity:** 508-defect-1 — **_Critical_**
- [Sitewide Issue #316](https://github.com/department-of-veterans-affairs/va.gov-team/issues/316)<br/>
  **Opened:** June 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[SCREENREADER]: Headings should be nested appropriately for ease of navigation - #1074](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1074)<br/>
  **Opened:** June 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [Sitewide Issue #318](https://github.com/department-of-veterans-affairs/va.gov-team/issues/318)<br/>
  **Opened:** June 18, 2019 | **Severity:** 508-defect-3 - **_Minor_**
- [[CI/CD]: Review coverage of accessibility checks in pre-need end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7404)<br/>**Production** | **Opened:** March 27, 2020 | **Severity:** 508-defect-3 — **_Minor_**

---

#### VA Letters

**No open issues**

---

#### Pensions

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in pensions end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7403)<br/>**Production** | **Opened:** March 27, 2020 | **Severity:** 508-defect-3 — **_Minor_**

---

### VSA Caregivers

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in Caregivers end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7303)<br/>**Production** | **Opened:** March 27, 2020 | **Severity:** 508-defect-3 — **_Minor_**

---

### VSA eBenefits

#### Rated Disabilities

**Audit Status:** Pre-launch 508 audit completed<br/>
**[Filtered list of issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4619)**<br/>

**Open issues**

- [[SCREENREADER, COGNITION]: Screenreader experience of reading service-connected or not disabilities isn't clear - 4784](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4784)<br/>
  **Opened:** January 13, 2020 | **Severity:** 508-defect-2 - **_Serious_**
- [[SCREENREADER] Individual disabilities currently in individual `<dl>` would be improved in a single `<dl>` - 4637](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4637)<br/>
  **Opened:** January 7, 2020 | **Severity:** 508-defect-3 - **_Minor_**

---

#### 686 Form

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in 686/686c-674 end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7315)<br/>**Production** | **Opened:** March 27, 2020 | **Severity:** 508-defect-3 — **_Minor_**

---

### VFS Education

#### Colmery Act Opt Out

**Audit status:** Request sent to VA 508 office September 2018. All issues but one resolved on 2/7/2019.<br/>

**Open issues**

- [Sitewide Issue #314](https://github.com/department-of-veterans-affairs/va.gov-team/issues/314)<br/>
  **Opened:** June 18, 2019 | **Severity:** 508-defect-1 — **_Critical_**

---

#### Education Feedback Tool

**Audit status:** Request sent to VA 508 office November 2018<br/>

**Open issues**

- [[SCREENREADER]: Alert message for bad submit is not read out to assistive devices like JAWS or VoiceOver - #1081](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1081)<br/>
  **Opened:** August 19, 2019 | **Severity:** 508-defect-1 — **_Critical_**
- [[CI/CD]: Review coverage of accessibility checks in EDU feedback-tool end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7349)<br/>**Production** | **Opened:** March 30, 2020 | **Severity:** 508-defect-3 — **_Minor_**

---

#### Edu 1990

**Audit status:** Completed June 2017<br/>

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in Education apps' end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7348)<br/>**Production** | **Opened:** March 30, 2020 | **Severity:** 508-defect-3 — **_Minor_**

---

#### Edu 1990e

**Audit status:** Completed June 2017<br/>

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in Education apps' end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7348)<br/>**Production** | **Opened:** March 30, 2020 | **Severity:** 508-defect-3 — **_Minor_**

---

#### Edu 1990n

**Audit status:** Completed June 2017<br/>

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in Education apps' end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7348)<br/>**Production** | **Opened:** March 30, 2020 | **Severity:** 508-defect-3 — **_Minor_**

---

#### Education 1995 STEM Update

**Audit status:** Audited by VSP Product Support Team August 2019. Sent to VA 508 Office September 2019. Passed VA 508 audit.<br/>
**No open issues**<br/>
**[Test application](https://staging.va.gov/education/apply-for-education-benefits/application/1995/introduction/)**<br/>
**[Closed issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3Aeducation+is%3Aclosed+label%3A508%2FAccessibility)**

---

#### Edu 0993

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in Education apps' end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7348)<br/>**Production** | **Opened:** March 30, 2020 | **Severity:** 508-defect-3 — **_Minor_**

---

#### Edu 0994

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in Education apps' end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7348)<br/>**Production** | **Opened:** March 30, 2020 | **Severity:** 508-defect-3 — **_Minor_**

---

#### Edu 1995

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in Education apps' end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7348)<br/>**Production** | **Opened:** March 30, 2020 | **Severity:** 508-defect-3 — **_Minor_**

---

#### Edu 5495

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in Education apps' end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7348)<br/>**Production** | **Opened:** March 30, 2020 | **Severity:** 508-defect-3 — **_Minor_**

---

#### Apply Wizard

**Open issues**

- [[CI/CD]: Review coverage of accessibility checks in EDU apply-wizard end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7350)<br/>**Production** | **Opened:** March 30, 2020 | **Severity:** 508-defect-3 — **_Minor_**

---

### VSA Facility Locator

#### General Issues

**[Closed Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3A508%2FAccessibility+label%3A%22facility+locator%22+is%3Aclosed)**

**Audit status:** Issues logged by auditor in February 2020<br/>
**Open issues**<br/>

- [[AXE-CORE]: Zoom In / Zoom Out controls MUST have their visible text as part of their accessible name](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6104)<br/>**Production** | **Opened:** February 26, 2020 | **Severity:** 508-defect-1 :exclamation: Launchblocker - **_Critical_**
- [[SCREENREADER]: Links in map attribution should open in new tab to aid in error recovery](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6158)<br/>**Production** | **Opened:** February 26, 2020 | **Severity:** 508-defect-2 - **_Serious_**
- [[MOBILE, ZOOM]: At 400%, content does not fit in screen view responsively](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6184)<br/>**Production** | **Opened:** February 26, 2020 | **Severity:** 508-defect-2 - **_Serious_**
- [[CI/CD]: Review coverage of accessibility checks in facility-locator end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7358)<br/>**Production** | **Opened:** March 30, 2020 | **Severity:** 508-defect-3 — **_Minor_**
- [[AXE-CORE]: The Leaflet container needs a role appropriate for interactive content](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6103)<br/>**Production** | **Opened:** February 26, 2020 | **Severity:** 508-defect-4 - **_Trivial_**

**Audit status:** Issues logged by auditor in July 2019<br/>
**Open issues**<br/>
- [[SCREENREADER]: Search for dropdown text is read aloud each time a letter is entered into Search city... input - #529](https://github.com/department-of-veterans-affairs/va.gov-team/issues/529)<br/>
  **Opened:** July 10, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[SCREENREADER]: The map is announcing a lot of extra data on focus and each droplet needs a usable name - #515](https://github.com/department-of-veterans-affairs/va.gov-team/issues/515)<br/>
  **Opened:** July 8, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[AXE-CORE]: Facility Locator - Provider Detail page has an UL that needs to be nested properly - #360](https://github.com/department-of-veterans-affairs/va.gov-team/issues/360)<br/>
  **Opened:** June 21, 2019 | **Severity:** 508-defect-3 - **_Minor_**

---

#### Facility Locator Urgent Care MVP

**Audit status:** Staging Review completed by VSA March 26, 2020<br/>
**[Closed issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=label%3A508%2FAccessibility+%2C+Facility+Locator+Urgent+Care+MVP+is%3Aclosed)**

**Open issues**

- [[SCREENREADER, KEYBOARD]: All elements that can be operated by a mouse MUST able to be operable by keyboard](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6911)<br/>**Production** | **Opened:** March 16, 2020 | **Severity:** 508-defect-1 ❗️ — **_Launchblocker_**

- [[SCREENREADER]: Focus MUST move to notification of context change when new content is added](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7243)<br/>**Production** | **Opened:** March 26, 2020 | **Severity:** 508-defect-1 ❗️ — **_Launchblocker_**

- [[SCREENREADER]: aria-live="polite" MUST be removed from the search results container](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7288)<br/>**Production** | **Opened:** March 26, 2020 | **Severity:** 508-defect-1 ❗️ — **_Launchblocker_**

- [[KEYBOARD]: In Firefox Choose a VA facility type dropdown MUST be keyboard accessible](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7291)<br/>**Production** | **Opened:** March 26, 2020 | **Severity:** 508-defect-1 ❗️ — **_Launchblocker_**

- [[MOBILE, ZOOM]: Content SHOULD fit within the viewport when zoomed to 400%.](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6184)<br/>**Production** | **Opened:** February 25, 2020 | **Severity:** 508-defect-2 — **_Serious_**

- [[COGNITION]: Reading order SHOULD provide context between form and results](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7239)<br/>**Production** | **Opened:** March 26, 2020 | **Severity:** 508-defect-2 — **_Serious_**

- [Sitewide, design system [AXE-CORE]: Heading levels SHOULD increase by one](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7244)<br/>**Production** | **Opened:** March 26, 2020 | **Severity:** 508-defect-2 — **_Serious_**

- [[SCREENREADER]: Upon Submit, focus MUST move to the context change notification](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7240)<br/>**Production** | **Opened:** March 26, 2020 | **Severity:** 508-defect-2 — **_Serious_**

- [[KEYBOARD, SCREENREADER]: Navigating by keyboard between the map and the search results MUST be intuitive with changes communicated](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6897)<br/>**Production** | **Opened:** March 16, 2020 | **Severity:** 508-defect-3 — **_Minor_**

- [[SCREENREADER]: 'Directions' links SHOULD have accessible names](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6894)<br/>**Production** | **Opened:** March 16, 2020 | **Severity:** 508-defect-4 — **_Trivial_**

- [[COLOR, COGNITION]: CONSIDER changing background of map attribution](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6892)<br/>**Production** | **Opened:** March 16, 2020 | **Severity:** 508-defect-4 — **_Trivial_**

---

### VSA Public Websites

#### Appeal Modernization Process (AMA)

**Audit status:** Staging Review complete, March 9, 2020; Sent to VA 508 Office March 11, 2020<br/>

**Open issues**

- [[COGNITION]: Focus outline SHOULD be consistent throughout](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7295)<br/>**Production** | **Opened:** March 27, 2020 | **Severity:** 508-defect-2 — **_Serious_**

- [CMS [SCREENREADER, KEYBOARD]: Aside SHOULD not be contained in another landmark](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6379)<br/>**Production** | **Opened:** March 2, 2020 | **Severity:** 508-defect-2 — **_Serious_**

- [CMS [AXE-CORE, SCREENREADER]: Heading levels SHOULD increase by one - the alert box heading breaks order](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6375)<br/>**Production** | **Opened:** March 2, 2020 | **Severity:** 508-defect-2 — **_Serious_**

- [CMS [KEYBOARD]: Landmarks MUST have a unique role or role/label/title (i.e. accessible name) combination; main nav and sidebar nav conflict](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6368)<br/>**Production** | **Opened:** March 2, 2020 | **Severity:** 508-defect-2 — **_Serious_**

- [[COGNITION]: Content SHOULD not be cut off; IE11 accordion content is not flowing into columns](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6672)<br/>**Production** | **Opened:** March 9, 2020 | **Severity:** 508-defect-3 — **_Minor_**

- [CMS [SCREENREADER, KEYBOARD, COGNITION]: Links SHOULD look like links](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6507)<br/>**Production** | **Opened:** March 9, 2020 | **Severity:** 508-defect-3 — **_Minor_**

- [CMS [AXE-CORE]: All page content MUST be contained by landmarks - div.veteran-banner](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6339)<br/>**Production** | **Opened:** February 28, 2020 | **Severity:** 508-defect-4 — **_Trivial_**

---

#### Disability Calculator

**Audit status:** Issues logged by Product Support during audit June 2019. Request sent to VA 508 office September 2019.<br/>
**[Closed issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Avsa-public-websites+is%3Aclosed+Disability+Calculator)**

**Open issues**

- [[COGNITION]: Disability Calculator - Can we mention the expected data format in on-page instructions? - #1045](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1045)<br/>
  **Opened:** August 16, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[CI/CD]: Review coverage of accessibility checks in disability-rating-calculator end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7320)<br/>**Production** | **Opened:** March 27, 2020 | **Severity:** 508-defect-3 — **_Minor_**

---

#### Local Side Navigation

**Audit status:** Completed June 2017<br/>
**No open issues**

---

#### Pittsburgh Side Navigation (CMS)

**Audit status:** First audit completed by VSA November 2019<br/>
**[Closed issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=label%3Avsa-facilities+label%3A508%2FAccessibility+Sidenav+is%3Aclosed)**

**Open issues**

- [[KEYBOARD]: Ensure content structure may be navigated by tab order - #3552](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3552)<br/>
  **Opened:** November 18, 2019 | **Severity:** 508-defect-1 — **_Critical_**
- [[COLOR]: Pittsburgh Facility - side navigation hover style contrast is too low - #3413](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3413)<br/>
  **Opened:** November 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[SCREENREADER]: Pittsburgh Sidenav - Sidenav headings lack semantic structure - #3441](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3441)<br/>
  **Opened:** November 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[SCREENREADER, KEYBOARD]: The sidenav headings are read as buttons but cannot be activated - #3557](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3557)<br/>
  **Opened:** November 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[COGNITION]: Pittsburgh Sidenav - The links with accordions have two different tab stops and two different links/actions - #3445](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3445)<br/>
  **Opened:** November 18, 2019 | **Severity:** 508-defect-3 - **_Minor_**
- [[COGNITION]: Once opened, the "accordion" repeats the label, adds a horizontal rule separating related content - #3448](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3448)<br/>
  **Opened:** November 18, 2019 | **Severity:** 508-defect-3 - **_Minor_**

---

### VFS Health Care

#### Health Care Application 1010-EZ

**Audit status:** Request sent to VA 508 office November 2018<br/>

**Open issues**

- [Sitewide Issue #314](https://github.com/department-of-veterans-affairs/va.gov-team/issues/314)<br/>
  **Opened:** June 18, 2019 | **Severity:** 508-defect-1 — **_Critical_**

---

### VFS GI Bill Comparison Tool

#### GI Bill Comparison Tool

**Audit status:** Audited by VA 508 Office November 2018<br/>

**Open issues**

- [[COGNITION]: GIBCT® - Standardize the search and filter behavior with a "Go" button click - #1276](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1276)<br/>
  **Opened:** August 23, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[COGNITION]: GIBCT - Know before you go video has a logo with nondescript alt text - #3920](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3920)<br/>
  **Opened:** December 3, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[COGNITION]: GIBCT - "Learn more" is used for modals and windows to new content - #1132](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1132)<br/>
  **Opened:** August 20, 2019 | **Severity:** 508-defect-3 - **_Minor_**
- [[KEYBOARD]: GIBCT Learn more modals scroll down the page, change focus, when I press TAB - #1133](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1133)<br/>
  **Opened:** August 20, 2019 | **Severity:** 508-defect-3 - **_Minor_**
- [[COGNITION]: GIBCT® - Consider making the tuition and housing breakdowns into definition lists - #1277](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1133)<br/>
  **Opened:** August 23, 2019 | **Severity:** 508-defect-3 - **_Minor_**
- [[CI/CD]: Review coverage of accessibility checks in GIBCT feedback-tool end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7373)<br/>**Production** | **Opened:** March 30, 2020 | **Severity:** 508-defect-3 — **_Minor_**

---

#### GI Bill Comparison Tool VET TEC

**Audit Status:** Audited by VSP Product Support Team August 2019<br/>
**[Closed issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3Abah-comparisontool+label%3A508%2FAccessibility+is%3Aclosed)**

**Open issues**

- [[SCREENREADER]: GIBCT® VETTEC - Can we move the Learn more buttons out of the label tags? - #1251](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1251)<br/>
  **Opened:** August 22, 2019 | **Severity:** 508-defect-2 - **_Serious_**

---

#### GI Bill Comparison Tool Colmery 107 Feature

**Audit status:** Audited by VSP Product Support Team September 2019. Request sent to VA 508 Office October 2019.<br/>
**No open issues**<br/>
**[Test application](https://staging.va.gov/gi-bill-comparison-tool/)**<br/>
**[Closed issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3Abah-ct-107+is%3Aclosed+label%3A508%2FAccessibility)**

---

#### GI Bill Comparison Tool Forever GI Bill Section 116

**Audit status:** First audit completed by VSP Product Support Team November 2019. Request sent to VA 508 Office November 2019.<br/>
**[Closed issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3Abah-ct-116+label%3A508%2FAccessibility+is%3Aclosed)**

**Open issues**

- [[DOCUMENT]: GIBCT Section 116 - Excel document has merged cells that could cause accessibility issues - #3835](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3835)<br/>
  **Opened:** November 28, 2019 | **Severity:** 508-defect-1 — **_Critical_**
- [[COGNITION]: GIBCT Section 116 - Estimated benefits should be calculated on button press, not form control change - #3536](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3536)<br/>
  **Opened:** November 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[DOCUMENT]: GIBCT Section 116 - Excel document uses color as the only means to convey intent - #3756](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3756)<br/>
  **Opened:** November 26, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[DOCUMENT]: GIBCT Section 116 - Excel document has color contrast issues that could be improved - #3758](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3758)<br/>
  **Opened:** November 26, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[COGNITION]: GIBCT Section 116 - VoiceOver is spelling out some all caps text instead of reading it - #3538](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3538)<br/>
  **Opened:** November 18, 2019 | **Severity:** 508-defect-4 - **_Trivial_**

---

#### GI Bill Comparison Tool Caution Flags

**Audit status:** Design review phase<br/>
**No open issues**<br/>
**[Closed issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=label%3Abah-comparisontool+is%3Aclosed+label%3A508%2FAccessibility)**

---

#### GI Bill Comparison Tool School Certifying Official Documentation

**Audit Status:** First audit completed by VSP Product Support Team November 2019. Request sent to VA 508 Office November 2019.<br/>

**Open issues**

- [[DOCUMENT] GIBCT SCO - Lists are not picked up correctly by screen readers in Section 305 PDF - #3869](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3869)<br/>
  **Opened:** November 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[DOCUMENT]: GIBCT SCO - VA ONCE PDF is not navigable with keyboard or JAWS screen reader - #3917](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3917)<br/>
  **Opened:** November 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[DOCUMENT]: GIBCT SCO - Dear SCO letter images need alt text - #3918](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3918)<br/>
  **Opened:** November 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**
- [[DOCUMENT]: GIBCT SCO - VA ONCE PDF logo needs alt text - #3919](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3919)<br/>
  **Opened:** November 18, 2019 | **Severity:** 508-defect-2 - **_Serious_**

---

### VFS Veterans Affairs Online Scheduler (VAOS)

**Audit status:** _Staging review completed by VSP, February 2020. Request to review calendar widget sent to VA 508 office February 2020_<br/>
**[Closed Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aopen+is%3Aissue+author%3A1Copenut+label%3Avaos+label%3A508%2FAccessibility+-label%3AEpic)**<br/>
**No open issues**

---

### Appeal Modernization Process (AMA) Phase 2

**Audit status:** _Staging review completed by VSA, April 10, 2020._<br/>
**Closed issues:** _https://github.com/department-of-veterans-affairs/va.gov-team/issues/7647_ (Can't create a link with the process documented, as VSA teams are not using labels for their projects)

#### Open issues

A number of issues were sitewide, design system, CMS, and are listed in the [sitewide list](#sitewide) section above. 

* [[SCREENREADER, COGNITION]: Bold text SHOULD be made headings, in this instance - #7770](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7770)<br/>
  **Production** | **Opened:** April 8, 2020 | **Severity:** _508-defect-2 - **_Serious_**
* [[COGNITION]: SHOULD use a list for a list of options - #7803](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7803)<br/>
  **Production** | **Opened:** April 9, 2020 | **Severity:** _508-defect-2 - **_Serious_**
* [[SCREENREADER, COGNITION]: State abbreviations SHOULD be coded as such - #7808](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7808)<br/>
  **Production** | **Opened:** April 9, 2020 | **Severity:** _508-defect-3 - **_Minor_**
* [[SCREENREADER, COGNITION]: CONSIDER using semantic markup for screen reader users - #7834](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7834)<br/>
  **Production** | **Opened:** April 9, 2020 | **Severity:** _508-defect-3 - **_Minor_**
* [[MOBILE] There SHOULD be sufficient space between interactive elements, to avoid errors - #7839](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7839)<br/>
  **Production** | **Opened:** April 9, 2020 | **Severity:** _508-defect-3 - **_Minor_**
* [[COGNITION] CONSIDER adding a heading before "Longer than 1 year" - #7847](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7847)<br/>
  **Production** | **Opened:** April 10, 2020 | **Severity:** _508-defect-4 - **_Trivial_**

--- 

### New Project Name

**Audit status:** _Audit status, team, and date_<br/>
**Closed issues:** _Create a reusable search link by filtering va.gov-team issues:_

1.  Click the [Issues tab](https://github.com/department-of-veterans-affairs/va.gov-team/issues) on the va.gov-team repository
1.  Click the `<NUMBER> Closed` link to switch to closed issues
1.  Click the `Label` dropdown. Select the `Your Application` label, and the `508/Accessibility` label.
1.  Change the **Closed issues** text into a link. [Learn how to create links in Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links). This link will give you a current, filtered list of closed accessibility issues for your application.

Add another link to the [Table of Contents](#table-of-contents). This is an important step to make applications easier to find as the list gets longer.

#### Open issues

- _Create a link from the issue title and issue number. Use the format `Issue Title - # Issue Number`_ <br/>
  **Opened:** _Date issue ticket was written_ | **Severity:** _Issue severity based on the [accessibility defect rubric](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md)_
