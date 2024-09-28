## Yellow Ribbon & IIR Sync

3/4/2024 [Meeting notes](https://docs.google.com/document/d/19ovULcsSbQq05TXF4N-Hb8xrxnrrAuzHRhUw5WNdNZE/edit)


## Program Overview

The Yellow Ribbon Program can help veterans pay for higher out-of-state, private school, foreign school, or graduate school tuition and fees that the Post-9/11 GI Bill doesn’t cover. 

[Product Outline ](https://github.com/department-of-veterans-affairs/va-iir/blob/main/Documents/Initiative%20Brief%20%5BYellow%20Ribbon%202024%5D%20-%20Google%20Docs.pdf)

[Yellow Ribbon Repository](https://github.com/department-of-veterans-affairs/va-iir)

[Release Note including Yellow Ribbon](https://github.com/department-of-veterans-affairs/va-iir/blob/main/Release-Notes/release-notes.md)


## Overview of the Yellow Ribbon Products

1. [Content - Yellow Ribbon](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/201) - [Yellow Ribbon Program](https://www.va.gov/education/about-gi-bill-benefits/post-9-11/yellow-ribbon-program/)

   1. [Recommendations](https://www.figma.com/file/8OqbsVv02OlqQYktiVYsV8/Yellow-Ribbon-Content?type=design\&node-id=2-2551\&mode=design) for the content on the landing page have been shared with CAIA.  IIR was advised that the update and maintenance of content falls under the CAIA umbrella, and they will have the bandwidth to implement it near the end of 2024. 

- [Collab Cycle](https://github.com/department-of-veterans-affairs/va.gov-team/issues/72171)

- [CAIA Review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/73024)

2.  Find a Yellow Ribbon Tool -  [Find a Yellow Ribbon school](https://www.va.gov/education/yellow-ribbon-participating-schools/#content) 

   1. Multiple opportunities for improvement have been identified

- Suggestions from the [original](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-a-yellow-ribbon-school) team 

- Outcomes from IIR [discovery](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/71)

2. **EPIC**: [Collab Cycle recommended improvements - Yellow Ribbon](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/414)

3. Findings from [Yellow Ribbon card sort results \[UX\]](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/389)


## Accomplishments/Enhancements made by IIR team

- Minor change on the FE to familiarize ourselves with the codespace

  - [Use Title Case in Yellow Ribbon search results card \[FE\]](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/167)

- **EPIC**: [Autocomplete Search Implementation - Yellow Ribbon](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/337)

  - TL;DR: The use of autocomplete in search tools is typical and expected by most users (regardless of the website).  Implementing this feature within the Find a Yellow Ribbon School search tool enhances the Veteran experience by removing common human errors such as misspelling of the institution name. The GI Bill Comparison Tool utilizes this functionality.

  - [Update YellowRibbonProgramSerializer to allow more fields to be returned \[BE\]](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/287)

  - [\[SPIKE\] Yellow Ribbon Preliminary Research into Type-Ahead Functionality \[FE\]](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/355)

  - [\[SPIKE\] Yellow Ribbon Auto Complete design for School name \[UX\]](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/353)

  - [\[SPIKE\] Yellow Ribbon Preliminary Research into Type-Ahead Functionality \[FE\]](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/355)

- **EPIC**: [Data Intake Process - Yellow Ribbon](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/339)

  - TL;DR: The quality of the data used for the Find a Yellow Ribbon School search tool can be traced back to the entire data intake process from form to database.  

  - [Yellow Ribbon - data improvement proposal v2](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/417)

- **EPIC**: [Automated Date Update - Yellow Ribbon](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/338) - Completed

  - TL;DR: Currently, the Academic Year shown on the Find a Yellow Ribbon School search tool/results is a yearly manual update process by an employee of the VA (owner of the tool).  By automating the update, VA staff can focus on other tasks.

  - [Yellow Ribbon Automatic date update design \[UX\]](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/356)

  - [Yellow Ribbon Automatic date update \[BE\]](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/386)

  - [Yellow Ribbon Feature Flag for automated date on school search copy \[BE\]](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/381)

- **EPIC**: [Lighthouse Audit - Yellow Ribbon](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/351)

  - TL;DR: To ensure a quality user experience for the Veteran, IIR proceeded to run and evaluate the [Google Lighthouse report](https://googlechrome.github.io/lighthouse/viewer/?gist=1756fb899d1d896534d2f4ab60e0e26d) to identify any areas of concern regarding performance, accessibility, best practices, and SEO.

  - [\[SPIKE\] Yellow Ribbon School Search - Review results from Lighthouse Report \[FE\]](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/318)

- **EPIC**: [Improve UX using Filtering for Degree Type - Yellow Ribbon](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/336)

  - TL;DR: Information from the original team indicated that implementing a filter for Degree Type was intended for a future iteration.  IIR has proceeded with further research and has made the decision to implement a single-select filter.  It is recommended that the incumbent team consider the next iteration of the search tool to include a multi-select filter for Degree Type. 

  - [Yellow Ribbon School Search - Design for adding additional filters \[UX\]](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/309)

  - [Use Title Case in Yellow Ribbon search results card \[FE\]](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/167)

  - [Yellow Ribbon card sort results \[UX\]](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/389)

- **EPIC**: [Analytics and Measurement - Yellow Ribbon](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/335)

  - TL;DR: it is unknown if the changes made are having a positive impact on veterans’ experience while using the tool until data is gathered on current usage. While this is an important avenue to follow, the effort would not result in any change in user experience

  - [\[SPIKE\] Yellow Ribbon Search tool - identify data points available for measuring usage \[DATA\]](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/347)

  - [\[SPIKE\] Yellow Ribbon define metrics for reporting user experience \[DATA\]](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/346)

    1. TL:DR: The data captured in the report gives insight into what criteria  Veterans are using within the search tool, as well as the volume of traffic.  There may be an opportunity to dig deeper into Google Analytics (or other tool) for additional insight.


#### Enhancements to be completed by IIR

- Update SearchResult React component links  [\[FE\] #394](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/394)

- Automatic date copy update [\[FE\] #379](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/379)

- Reconfigure the use of the React app state to _include search criteria_ in the text atop the SearchResults Container [\[FE\] #393](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/393)

- Reconfigure the use of React app state to _include two filter criteria_ in the text atop the SearchResults container  [\[FE\]#440](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/440)

- [Review Yellow Ribbon School Search Google Analytics proof of concept \[DATA\]](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/424)


## GIDS Related Tickets For Yellow Ribbon Search - Filtering for Degree Type

Currently, Veterans are unable to enhance their search criteria on the [Find a Yellow Ribbon School](https://www.va.gov/education/yellow-ribbon-participating-schools/) search tool. Adding the degree type filter will allow Find a Yellow Ribbon school users to find education programs offering Yellow Ribbon benefits to Veterans in consideration of the degree aspirations of the Veteran.

The data structure does not currently support the type of query needed to filter for degree type.  To facilitate the development of this filter, the GIDS database will need additional tables added. 

We completed the following work: 

[\[SPIKE\] Research Yellow Ribbon Degree Type Filter Implementation Options \[BE\]](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/308) [#308](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/308)

- **Epic:** [Data Intake Process - Yellow Ribbon](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/339)

  - V2 Data Improvement Proposal work here [#417](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/417)

  - [Slide Deck](https://docs.google.com/presentation/d/1YYHPluoGGVQtWc3zeRce2-2izOiCNt9QLVHLBvjFDts/edit#slide=id.g2b97e6eb78f_0_0) Presentation of proposal

    - TL;DR: By working with the GIDS data team/IIR, there are areas for improvement that can be used to improve the YR Search tool. These include but are not limited to: increasing data consistency, repairing data quality, and improving overall performance. 

IIR has been granted approval for full access to the GIDS database.

- [Yellow Ribbon School Search - add Degree Type filters \[BE\]](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/418) [#418](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/418)

- [Yellow Ribbon School Search - add Degree type filter \[FE\]](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/275) [#275](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/275) 

- [Yellow Ribbon State field filter logic adjustment \[BE\]](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/354) [#354](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/354)


## Recommendations to the Steady State team

_Work identified below requires significant time/effort, multiple dependencies, and extensive research.  The_ [_work_](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-a-yellow-ribbon-school) _done by the original team was used as a starting point._

- **EPIC**: [Multi-select Filter for Degree Type - Yellow Ribbon](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/416)

  - TD; DR: Implementing this type of filter is more challenging than implementing a single-select option for a Degree Type filter. The data source in it’s current design will require manual mapping.  

- **EPIC**:  [Analytics and Measurement - Yellow Ribbon](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/335) #335

  - TL;DR: it is unknown if the changes made are having a positive impact on veterans using the tool until data is gathered on current usage. While this is an important avenue to follow, the effort would not result in any change in user experience

  - [Review Yellow Ribbon School Search Google Analytics proof of concept \[DATA\]](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/424) #424

    - TL:DR: Report included data from February 2024. The report provided gives insight into how users are searching on the page.

- **EPIC**: [Lighthouse Audit - Yellow Ribbon](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/351)

  - [\[SPIKE\] Yellow Ribbon School Search - Review results from Lighthouse Report \[FE\]](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/318) #318

    - TL;DR: The Google Lighthouse report, as detailed in its documentation, offers a comprehensive analysis of web pages, focusing on various aspects, including performance, accessibility, and SEO. The report is generated by running a series of audits against a web page in the browser. Given the reports are run in the browser, there can be significant variability in the performance results specifically, which is attributed to several factors. This spike documents those factors and provides an analysis of how we might manage them and suggestions for performance improvement.


## Ideas that were considered but not acted upon

- Epic: [Collab Cycle Recommendation Improvements ](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/414)#414

  - [Update CTA to Design System Action Link \[FE\]](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/168) [#168](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/168)

    - TL;DR: This work was canceled as currently, we can not apply design system components in Drupal Pages (IIR does not have the appropriate rights). 

* Epic: [Automated Date Update](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/338) #338

  - [Canceled: Yellow Ribbon create a trigger to render a warning on result cards \[FE](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/382)} #382

    - TL;DR: The decision was not to implement this work as it would mean over 50% of results shown to the Veteran would render a warning label. 

- Epic: [Autocomplete Search Implementation - Yellow Ribbon](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/337) #337

  - [CANCELED \[SPIKE\] Yellow Ribbon - Research Autocomplete Implementation Options \[BE\]](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/352) #352

    - TL;DR: Additional time is needed for FE and UX to research the viability of existing design elements and if they can be used within Yellow Ribbon search. otherwise, additional design work and usability testing will be needed to implement a process that does not currently exist or lend itself to how we want to improve the search functionality in this tool


## Artifacts

[Yellow Ribbon Search Tool Improvement Strategy v2](https://docs.google.com/presentation/d/19P3ZWkDvWDvDxEBD91E7xl0IcHvnGURnbuYvj7_UrTg/edit#slide=id.g2bf46f5dfbd_0_110)

[IIR design Enhancement Proposal](https://docs.google.com/presentation/d/1Sk-Q22Wm0svshD3-JZGyioLV1jGdXeI0qYHSmbBecjs/edit#slide=id.g2bd41f4d12a_1_29)
