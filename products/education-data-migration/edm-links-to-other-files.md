# Links to EDM GitHub files
This page houses the links to the GitHub files that do not live in the EDM GitHub folder to allow for easier acccess.

## Statement of Benefits
- Closed March 2025 [Collaboration Cycle for Education Data Migration, Statement of Benefits #87676](https://github.com/department-of-veterans-affairs/va.gov-team/issues/87676) SOB was live on VA.gov and did not need to go through the Collaboartion Cycle 
- Closed December 2024 [Content and IA updates for Post-9/11 GI Bill Statement of Benefits tool #96163](https://github.com/department-of-veterans-affairs/va.gov-team/issues/96163#issuecomment-2465793582)

## Yellow Ribbon Tool
- [Collaboration Cycle for Education Data Migration, Yellow Ribbon Tool #90888](https://github.com/department-of-veterans-affairs/va.gov-team/issues/90888)
- [CAIA Intake for Yellow Ribbon Tool #92367](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92367)
### Design Intent Feedback
- Closed January 2025 [Design Intent - IA Feedback #96852](https://github.com/department-of-veterans-affairs/va.gov-team/issues/96852#event-15254368406) 
- Closed January 2025 [Design Intent - Accessibility Feedback #96915](https://github.com/department-of-veterans-affairs/va.gov-team/issues/96915#event-15270298759) 
### Midpoint Review Feedback
- Closed January 2025 [Midpoint Review - Accessibility Feedback - Education Data Migration, Yellow Ribbon Tool #99571](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99571#event-15736459684) 
- Closed January 2025 [Midpoint Review - Content Feedback - Education Data Migration, Yellow Ribbon Tool #99563](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99563)
- Closed January 2025 [Midpoint Review - IA Feedback - Education Data Migration, Yellow Ribbon Tool #99953](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99953#event-15810387277) 
### Research Submission Feedback
- [2025-01 Yellow Ribbon Program info in CT #764](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/764)
### Staging Review Feedback 
- **LAUNCH BLOCKING ISSUE** [QA Standards - Education Data Migration - Yellow Ribbon Tool #103549](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103549#event-16390815495)
- **LAUNCH BLOCKING ISSUE** [Staging Review finding: "On this page" links move viewport but don't move keyboard focus #103578](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103578#event-16405016469)
- [Staging Review finding: Add header to cards #103579](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103579#event-16405016903) Not making the change: Reviewed this ticket with you during Staging Review and I called out that these cards cannot be unique because there can be more than one with the same college or professional school. We agreed to leave it as is.
- [Staging Review finding: Additional info component contains definition of degree levels but only appears after filters are applied #103581](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103581#event-16405017776) Not making the change: Reviewed this with you during staging review and I called out that the additional info component will display synchronously with the cards. We found from usability studies that users skipped the definitions with the way they were placed originally so this was our solution. We are leaving the component as is.
- [Staging Review finding: No capitalization after colons #103582](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103582#event-16405018216)
- [Staging Review finding: Acronym or Initialization without context #103583](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103583#event-16405018622)
- [Staging Review finding: Use of "the" before "VA"  #103580](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103580#event-16405017312)
- [Staging Review finding: Order of options on Degree Level dropdown doesn't match expected sequence #103577](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103577#event-16405015903)

## WEAMS Public 
- [Collaboration Cycle for Education Data Migration, WEAMS Public #90889](https://github.com/department-of-veterans-affairs/va.gov-team/issues/90889)
- [CAIA Intake for WEAMS Public #92369](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92369)
  Updated on 1/3 with the following information:
  <details>
  <summary>Toggle information provided by Sam Walker</summary>
  Adding my recommendations here, for record-keeping, on the question of how to name institutions sub-pages:
  I discussed with Sneha and Jen, and then also discussed in OCTO slack with Ariana.
  Two options:
  Adjust the breadcrumbs to include the institution name, rather than the current tool behavior of listing "Institution details" in the breadcrumb for each institution. Doing this means that the H1 of any sub-pages of the institution page should generally have lengths that are within the character limit.
  The opportunities here are:
    a) gives the tool breadcrumbs that are consistent with users' experiences across va.gov
    b) brings the tool into alignment with VADS guidance on aligning H1s and breadcrumbs and how breadcrumbs
    c) solves the H1 length issue in most cases.
  The risks here are:
    a) requires development time
    b) if there are a few sub-pages with very long titles, the team would need to either define a pattern for shortening these or create one-off manual solutions for shortening those strings.
  Retain the current breadcrumb structure, using "Institution details" for all institution pages, in which case institution sub-page H1s would likely list both the institution name and the title of the sub-page, to help the user stay oriented in the tool.
  The opportunities here are:
    a) provides solution #1 queued up in the backlog for a future team to pick up and implement as part of future work in the tool,
    b) short-term solution that allows the team to not re-work the breadcrumbs as part of current scope.
  Risks here are:
    a) the tool's breadcrumbs, which are currently out of alignment with VADS breadcrumb guidance, would stay out of alignment.
    b) H1s would also be out of alignment with VADS character counts guidance
  The character limit for these pages is technically 52 characters.
  I think option 1 would be the way to alleviate the issue, and that's what I advise. And also, I know that a lot of variables - including go-live timelines and engineering capacity - means that it's not always possible to do everything. Which is why, as part of option 2, I'd advise adding these changes to a future backlog if this isn't the time to implement them. My recommendation is check these two options with decision-makers so that Design has clear guidance on whether the scope can include adjusting the breadcrumb structure (which should solve most of the H1 length issue), or sticking with the current not-aligned approach for now and moving this change to the backlog.
</details>

### Design Intent Feedback
- Closed February 2025 [Design Intent - IA Feedback - Education Data Migration, WEAMS Public #98839](https://github.com/department-of-veterans-affairs/va.gov-team/issues/98839#event-15607359715)
- Closed February 2025 [Design Intent - Accessibility Feedback - Education Data Migration, WEAMS Public #98857](https://github.com/department-of-veterans-affairs/va.gov-team/issues/98857#event-15611083835)

### Midpoint Review Feedback
- Closed February 2025 [Midpoint Review - Design Feedback - Education Data Migration, WEAMS Public #101444](https://github.com/department-of-veterans-affairs/va.gov-team/issues/101444#event-16030284079) 
- Closed February 2025 [Midpoint Review - IA Feedback - Education Data Migration, WEAMS Public #101584](https://github.com/department-of-veterans-affairs/va.gov-team/issues/101584#event-16035612020) 
- Closed February 2025 [Midpoint Review - Accessibility Feedback - Education Data Migration, WEAMS Public #101873](https://github.com/department-of-veterans-affairs/va.gov-team/issues/101873#event-16084759168) 

## CT Homepage
- [Collaboration Cycle EDM and VEBT team, GI Bill Comparison Tool homepage #98557](https://github.com/department-of-veterans-affairs/va.gov-team/issues/98557)
- [CAIA Intake EDM & VEBT: Publishing a GI Bill Comparison Tool homepage #99990](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99990)

### Design Intent Feedback
- Closed March 2025 [Design Intent - IA Feedback - EDM and VEBT team, GI Bill Comparison Tool homepage #99464](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99464#event-15708767113)
- Closed March 2025 [Design Intent - Design Feedback - EDM and VEBT team, GI Bill Comparison Tool homepage #99543](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99543#event-15733018527)
- Closed March 2025 [Design Intent - Accessibility Feedback - EDM and VEBT team, GI Bill Comparison Tool homepage #99573](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99573#event-15736614996)
### Midpoint Review Feedback 
- Closed March 2025 [Midpoint Review - IA Feedback - EDM and VEBT team, GI Bill Comparison Tool homepage #102021](https://github.com/department-of-veterans-affairs/va.gov-team/issues/102021#event-16110612222)
- Closed March 2025 [Midpoint Review - Design Feedback - EDM and VEBT team, GI Bill Comparison Tool homepage #101934](https://github.com/department-of-veterans-affairs/va.gov-team/issues/101934#event-16096543265)
- Closed March 2025 [Midpoint Review - Accessibility Feedback - EDM and VEBT team, GI Bill Comparison Tool homepage #102227](https://github.com/department-of-veterans-affairs/va.gov-team/issues/102227#event-16133713720)
