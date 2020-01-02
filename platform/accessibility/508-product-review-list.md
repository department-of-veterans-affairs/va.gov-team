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

## Helpful links
* [Create a 508 accessibility issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=508%2FAccessibility&template=508-issue.md&title=)
* [Review severity guidance for 508 accessibility issues](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/GUIDANCE-severity-rubric.md)

## Issues by Application
Each application or logical section of the site will have a heading and a detailed list of issues included. This is a transition from a data table approach, where rows will be removed from the table and added as list entries.

### Site-wide

**Maintainer:** VSP & VSA<br/>
**Audit Status:** Not applicable. Issues should be completed as soon as possible<br/>
**[Filtered list of issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aopen+is%3Aissue+label%3Asitewide+label%3A508%2FAccessibility)**<br/>

#### Open Issues

* [[SCREENREADER]: Inline error messages are announcing to screen readers on correction, not on subsequent errors - #314](https://github.com/department-of-veterans-affairs/va.gov-team/issues/314)<br/>
**Opened:** June 18, 2019 | **Severity:** 508-defect-1
* [[SCREENREADER]: Legends must be first child element of fieldesets for tabbing navigation - #767](https://github.com/department-of-veterans-affairs/va.gov-team/issues/767)<br/>
**Opened:** July 31, 2019 | **Severity:** 508-defect-2
* [[SCREENREADER]: JAWS does not announce some sections of the multi-step forms when loaded - #317](https://github.com/department-of-veterans-affairs/va.gov-team/issues/317)<br/>
**Opened:** June 18, 2019 | **Severity:** 508-defect-2
* [[SCREENREADER]: Text and inputs added dynamically should be announced by screen readers - #316](https://github.com/department-of-veterans-affairs/va.gov-team/issues/316)<br/>
**Opened:** June 18, 2019 | **Severity:** 508-defect-2
* [[KEYBOARD]: main nav accessibility -- tabbing in small screens - #1144](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1144)<br/>
**Opened:** August 20, 2019 | **Severity:** 508-defect-2
* [[SCREENREADER]: JAWS + Chrome enables focus mode when we focus breadcrumb UL on page load - #319](https://github.com/department-of-veterans-affairs/va.gov-team/issues/319)<br/>
**Opened:** June 18, 2019 | **Severity:** 508-defect-3
* [[SCREENREADER]: Review sections with no header cause aria-label errors - #318](https://github.com/department-of-veterans-affairs/va.gov-team/issues/318)<br/>
**Opened:** June 18, 2019 | **Severity:** 508-defect-3
* [[SCREENREADER]: VET TEC - NVDA does not read the error if I forget to agree to the privacy policy - #1141](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1141)<br/>
**Opened:** August 20, 2019 | **Severity:** 508-defect-3
* [[EXPLORATION]: Turn on jsx-a11y ESLint rules - #1139](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1139)<br/>
**Opened:** August 20, 2019 | **Severity:** 508-defect-4
* [[EXPLORATION]: Disable known buggy axe rules individually - #1140](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1140)<br/>
**Opened:** August 20, 2019 | **Severity:** 508-defect-4
* [[EXPLORATION]: Reconsider structure of multiple pages within a single "part" of a form - #1145](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1145)<br/>
**Opened:** August 20, 2019 | **Severity:** 508-defect-4
* [Implement utility class for removing gold outline during focus - #457](https://github.com/department-of-veterans-affairs/va.gov-team/issues/457)<br/>
**Opened:** July 1, 2019 | **Severity:** 508-defect-4
* [[USABILITY]: Application saved message could be missed by assistive devices - #182](https://github.com/department-of-veterans-affairs/va.gov-team/issues/182)<br/>
**Opened:** July 1, 2019 | **Severity:** 508-defect-4

---

### Facility Locator

**Maintainer:** VSA<br/>
**Audit Status:** Issues logged by auditor in July 2019<br/>
**[Closed Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3A508%2FAccessibility+label%3A%22facility+locator%22+is%3Aclosed)**

#### Open Issues

* [Change Community Care service field labels and typeahead - #3049](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3049)<br/>
**Opened:** July 8, 2019 | **Severity:** 508-defect-1
* [[KEYBOARD]: Map needs explicit instructions and keyboard controls that don't interfere with assistive devices - #514](https://github.com/department-of-veterans-affairs/va.gov-team/issues/514)<br/>
**Opened:** July 8, 2019 | **Severity:** 508-defect-1
* [[KEYBOARD]: Community Care Service Type does not warn users when field is reset because search did not match a term - #489](https://github.com/department-of-veterans-affairs/va.gov-team/issues/489)<br/>
**Opened:** July 8, 2019 | **Severity:** 508-defect-1
* [[SCREENREADER]: Facility locator is not announcing the current page when there are more than one page of results - #713](https://github.com/department-of-veterans-affairs/va.gov-team/issues/713)<br/>
**Opened:** July 26, 2019 | **Severity:** 508-defect-2
* [[SCREENREADER]: Search for dropdown text is read aloud each time a letter is entered into Search city... input - #529](https://github.com/department-of-veterans-affairs/va.gov-team/issues/529)<br/>
**Opened:** July 10, 2019 | **Severity:** 508-defect-2
* [[SCREENREADER]: The map is announcing a lot of extra data on focus and each droplet needs a usable name - #515](https://github.com/department-of-veterans-affairs/va.gov-team/issues/515)<br/>
**Opened:** July 8, 2019 | **Severity:** 508-defect-2
* [[AXE-CORE]: Facility Locator - Provider Detail page has an UL that needs to be nested properly - #360](https://github.com/department-of-veterans-affairs/va.gov-team/issues/360)<br/>
**Opened:** June 21, 2019 | **Severity:** 508-defect-3

---

### Disability Calculator

**Maintainer:** VSA<br/>
**Audit Status:** Issues logged by Product Support during audit June 2019. Request sent to VA 508 office September 2019.<br/>
**[Closed Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Avsa-public-websites+is%3Aclosed+Disability+Calculator)**

#### Open Issues

* [[COGNITION]: Disability Calculator - Can we mention the expected data format in on-page instructions? - #1045](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3049)<br/>
**Opened:** August 16, 2019 | **Severity:** 508-defect-2

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
**Opened:** June 18, 2019 | **Severity:** 508-defect-1
* [[USABILITY]: Application saved message could be missed by assistive devices - #182](https://github.com/department-of-veterans-affairs/va.gov-team/issues/182)<br/>
**Opened:** June 5, 2019 | **Severity:** 508-defect-4

#### Open issues identified by VSP Product Support

* [[USABILITY]: 526 v2 - Street address field should allow more than 20 characters - #1046](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1046)<br/>
**Opened:** August 16, 2019 | **Severity:** 508-defect-3
* [[SCREENREADER]: Recommend reviewing language for error messages to improve descriptiveness - #1711](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1711)<br/>
**Opened:** September 11, 2019 | **Severity:** 508-defect-3

---

### HCA Dashboard Notifications

**Maintainer:** VSA<br/>
**Audit Status:** First audit completed by Product Support June 2019. Sent to VA 508 team on June 27, 2019. Certified as having no 508 issues on July 2, 2019.<br/>

#### Open issues identified by VSP Product Support

* [[COGNITION]: HCA - Heading levels could be adjusted for proper nesting - #3219](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3219)<br/>
**Opened:** November 7, 2019 | **Severity:** 508-defect-3

---

### VA Benefits Recommendations

**Maintainer:** VSA<br/>
**Audit Status:** Request sent to VA 508 office March 2019.<br/>

#### Open issues identified by VSP Product Support

* [[SCREENREADER]: Recommendations - Update the new user modal dialog to better announce content - #1122](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1122)<br/>
**Opened:** August 19, 2019 | **Severity:** 508-defect-3

---

### Health Care Application 1010-EZ

**Maintainer:** VSA<br/>
**Audit Status:** Request sent to VA 508 office November 2018<br/>

#### Open issues

* [Sitewide Issue #314](https://github.com/department-of-veterans-affairs/va.gov-team/issues/314)<br/>
**Opened:** June 18, 2019 | **Severity:** 508-defect-1

---

### Education Feedback Tool

**Maintainer:** VSA<br/>
**Audit Status:** Request sent to VA 508 office November 2018<br/>

#### Open issues

* [[SCREENREADER]: Alert message for bad submit is not read out to assistive devices like JAWS or VoiceOver - #1081](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1081)<br/>
**Opened:** August 19, 2019 | **Severity:** 508-defect-1
* [[COLOR CONTRAST]: Subway map numbers do not meet 4.5:1 ratio for contrast - #1079](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1079)<br/>
**Opened:** August 19, 2019 | **Severity:** 508-defect-2

---

### Colmery Act Opt Out

**Maintainer:** VSA<br/>
**Audit Status:** Request sent to VA 508 office September 2018. All issues but one resolved on 2/7/2019.<br/>

#### Open issues

* [Sitewide Issue #314](https://github.com/department-of-veterans-affairs/va.gov-team/issues/314)<br/>
**Opened:** June 18, 2019 | **Severity:** 508-defect-1

---

### GI Bill Comparison Tool

**Maintainer:** VSP<br/>
**Audit Status:** Audited by VA 508 Office November 2018<br/>

#### Open issues

* [[SCREENREADER]: JAWS is reading from the top of the screen on GIBCT after selecting a school - #1062](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1062)<br/>
**Opened:** August 19, 2019 | **Severity:** 508-defect-2
* [[COGNITION]: GIBCT® - Standardize the search and filter behavior with a "Go" button click - #1276](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1276)<br/>
**Opened:** August 23, 2019 | **Severity:** 508-defect-2
* [[COGNITION]: GIBCT - Know before you go video has a logo with nondescript alt text - #3920](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3920)<br/>
**Opened:** December 3, 2019 | **Severity:** 508-defect-2
* [[COGNITION]: GIBCT - "Learn more" is used for modals and windows to new content - #1132](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1132)<br/>
**Opened:** August 20, 2019 | **Severity:** 508-defect-3
* [[KEYBOARD]: GIBCT Learn more modals scroll down the page, change focus, when I press TAB - #1133](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1133)<br/>
**Opened:** August 20, 2019 | **Severity:** 508-defect-3
* [[COGNITION]: GIBCT® - Consider making the tuition and housing breakdowns into definition lists - #1277](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1133)<br/>
**Opened:** August 23, 2019 | **Severity:** 508-defect-3
* [[DESIGN]: GIBCT® - Consider revising See Results button placement at mobile size - #1278](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1278)<br/>
**Opened:** August 23, 2019 | **Severity:** 508-defect-3
* [[COGNITION]: GIBCT® - Consider adding full state names to States filter menu for better context - #1259](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1278)<br/>
**Opened:** August 23, 2019 | **Severity:** 508-defect-4

---

### Claim and Appeal Status

**Maintainer:** VSA<br/>
**Audit Status:** Audited by VA 508 Office February 2019<br/>

#### Open issues

* [[AXE-CORE]: UL and OL must only directly contain LI, SCRIPT, or TEMPLATE elements - #1064](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1064)<br/>
**Opened:** August 19, 2019 | **Severity:** 508-defect-2

---

### Apply for Pre-need Burial

**Maintainer:** VSA<br/>
**Audit Status:** Audited by VA 508 Office September 2018<br/>

#### Open issues

* [Sitewide Issue #314](https://github.com/department-of-veterans-affairs/va.gov-team/issues/314)<br/>
**Opened:** June 18, 2019 | **Severity:** 508-defect-1
* [Sitewide Issue #316](https://github.com/department-of-veterans-affairs/va.gov-team/issues/316)<br/>
**Opened:** June 18, 2019 | **Severity:** 508-defect-2
* [[SCREENREADER]: Headings should be nested appropriately for ease of navigation - #1074](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1074)<br/>
**Opened:** June 18, 2019 | **Severity:** 508-defect-2
* [Sitewide Issue #318](https://github.com/department-of-veterans-affairs/va.gov-team/issues/318)<br/>
**Opened:** June 18, 2019 | **Severity:** 508-defect-3

---


| TOOL        | MAINTAINER | AUDIT STATUS          | OUTCOME  |
| ------------- | ---|-------------| -----|
| GI Bill Comparison Tool® VET TEC | VSP | https://staging.va.gov/gi-bill-comparison-tool/<br/>Audited by VSP Product Support Team August 2019 | **Open issues:**<br/>[#1251](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1251)<br/><br/>**Closed issues:**<br/>[#1256](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1256), [#1257](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1257), [#1253](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1253), [#1252](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1252) |
| Local side nav | Completed June 2017 | VSA | No issues! || Local side nav | Complete 6/2017 | No issues! |
| Edu 1990 | VSA | Completed June 2017 | No issues! |
| Edu 1990e | VSA | Completed June 2017 | No issues! |
| Edu 1990n | VSA | Completed June 2017 | No issues! |
|526 PTSD | VSA | https://staging.va.gov/disability-benefits/apply/form-526-all-claims/new-disabilities/ptsd-781a-additional-changes | **Open issues:**<br/>[#1086](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1086)<br/><br/>**Closed issues:**<br/>[#1087](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1087) |
| Outreach &amp; Events | VSA | https://staging.va.gov/outreach-and-events/<br/>Audited by VSP Product Support Team August 2019 | **Open issues:**<br/> [#981](https://github.com/department-of-veterans-affairs/va.gov-team/issues/981)<br/><br/>**Closed issues:**<br/>[#991](https://github.com/department-of-veterans-affairs/va.gov-team/issues/991), [#984](https://github.com/department-of-veterans-affairs/va.gov-team/issues/984) |
| Education 1995 STEM Update | VSP | https://staging.va.gov/education/apply-for-education-benefits/application/1995/introduction<br/><br/>Audited by VSP Product Support Team August 2019<br/><br/>Sent to VA 508 Office September 2019. | **Passed VA 508 audit!**<br/><br/>**Closed issues:**<br/> [#762](https://github.com/department-of-veterans-affairs/va.gov-team/issues/762), [#764](https://github.com/department-of-veterans-affairs/va.gov-team/issues/764), [#768](https://github.com/department-of-veterans-affairs/va.gov-team/issues/768), [#830](https://github.com/department-of-veterans-affairs/va.gov-team/issues/830) |
| Profile: Direct Deposit Feature | VSA | **Logged in user profile**<br/>Audited by VSP Product Support Team August 2019<br/><br/>Request sent to VA 508 Office October 2019 | **Open issues:**<br/><br/><br/>**Closed issues:**<br/>[#2808](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2808), [#2809](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2809), [#1433](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1433), [#1330](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1330), [#1335](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1335), [#1332](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1332), [#1437](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1437)<br/><br/>**Being redesigned:**<br/>[#1331](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1331) |
| GI Bill Comparison Tool® Colmery 107 Feature | VSP | https://staging.va.gov/gi-bill-comparison-tool/<br/>Audited by VSP Product Support Team September 2019<br/><br/>Request sent to VA 508 Office October 2019 | **Closed issues:**<br/>[#2386](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2386), [#1646](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1646), [#1640](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1640), [#1651](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1651), [#1658](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1658), [#1647](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1647), [#1649](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1649), [#1655](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1655), [#2381](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2381), [#2387](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2387) |
| Profile Appointment Text Messages | VSP | First audit completed by VSP Product Support Team October 2019 | **Closed issues:**<br/>[#2428](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2428), [#2433](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2433), [#2442](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2442) <br/><br/>**Account and profile merge issues:**<br/>[#2427](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2427), [#2429](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2429), [#2430](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2430), [#2435](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2435), [#2440](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2440) |
| Pittsburgh Side Navigation (CMS) | VSA | First audit completed by VSA November 2019 | **Open issues:**<br/> [#3413](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/3413), [#3426](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/3426), [#3441](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/3441), [#3445](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/3445), [#3448](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/3448), [#3552](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/3552), [#3557](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/3557), [#3560](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/3560)
| GI Bill Comparison Tool® School Certifying Official Documentation | VSP | First audit completed by VSP Product Support Team November 2019<br/><br/>Request sent to VA 508 Office November 2019 | **Open issues:**<br/> [#3869](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3869), [#3917](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3917), [#3918](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3918), [#3919](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3919) |
| GI Bill Comparison Tool® Forever GI Bill Section 116 | VSP | First audit completed by VSP Product Support Team November 2019<br/><br/>Request sent to VA 508 Office November 2019 | **Design discussion:**<br/> [#3536](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3536)<br/><br/>**Open issues:**<br/> [#3538](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3538), [#3756](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3756), [#3758](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3758), [#3835](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3835) <br/><br/>**Closed issues:**<br/>[#3537](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3540), [#3540](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3540), [#3571](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3571), [#3542](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3542) |
| _Project name_ | _VSA or VSP_ | _Audit status, team, and date_ | **Open issues:**<br/>_Linked by number_|
