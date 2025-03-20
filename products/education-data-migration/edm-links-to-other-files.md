# Links to EDM GitHub files
This page houses the links to the GitHub files that do not live in the EDM GitHub folder to allow for easier acccess.

## Statement of Benefits (Closed)
- Closed March 2025 [Collaboration Cycle for Education Data Migration, Statement of Benefits #87676](https://github.com/department-of-veterans-affairs/va.gov-team/issues/87676) SOB was live on VA.gov and did not need to go through the Collaboartion Cycle 
- Closed December 2024 [Content and IA updates for Post-9/11 GI Bill Statement of Benefits tool #96163](https://github.com/department-of-veterans-affairs/va.gov-team/issues/96163#issuecomment-2465793582)

## Yellow Ribbon Tool
- [Collaboration Cycle for Education Data Migration, Yellow Ribbon Tool #90888](https://github.com/department-of-veterans-affairs/va.gov-team/issues/90888)
- [CAIA Intake for Yellow Ribbon Tool #92367](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92367)

### Design Intent Feedback (Closed)
- Closed January 2025 [Design Intent - IA Feedback #96852](https://github.com/department-of-veterans-affairs/va.gov-team/issues/96852#event-15254368406) 
- Closed January 2025 [Design Intent - Accessibility Feedback #96915](https://github.com/department-of-veterans-affairs/va.gov-team/issues/96915#event-15270298759) 

### Midpoint Review Feedback (Closed)
- Closed January 2025 [Midpoint Review - Accessibility Feedback - Education Data Migration, Yellow Ribbon Tool #99571](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99571#event-15736459684) 
- Closed January 2025 [Midpoint Review - Content Feedback - Education Data Migration, Yellow Ribbon Tool #99563](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99563)
- Closed January 2025 [Midpoint Review - IA Feedback - Education Data Migration, Yellow Ribbon Tool #99953](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99953#event-15810387277) 

### Research Submission Feedback (Closed)
- [2025-01 Yellow Ribbon Program info in CT #764](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/764)

### Staging Review Feedback (Closed)
- Closed March 2025 **LAUNCH BLOCKING ISSUE** [QA Standards - Education Data Migration - Yellow Ribbon Tool #103549](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103549#event-16390815495)
- Closed March 2025 **LAUNCH BLOCKING ISSUE** [Staging Review finding: "On this page" links move viewport but don't move keyboard focus #103578](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103578#event-16405016469)
- Closed March 2025 [Staging Review finding: Add header to cards #103579](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103579#event-16405016903) Not making the change: Reviewed this ticket with you during Staging Review and I called out that these cards cannot be unique because there can be more than one with the same college or professional school. We agreed to leave it as is.
- Closed March 2025 [Staging Review finding: Additional info component contains definition of degree levels but only appears after filters are applied #103581](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103581#event-16405017776) Not making the change: Reviewed this with you during staging review and I called out that the additional info component will display synchronously with the cards. We found from usability studies that users skipped the definitions with the way they were placed originally so this was our solution. We are leaving the component as is.
- Closed March 2025 [Staging Review finding: No capitalization after colons #103582](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103582#event-16405018216)
- Closed March 2025 [Staging Review finding: Acronym or Initialization without context #103583](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103583#event-16405018622)
- Closed March 2025 [Staging Review finding: Use of "the" before "VA"  #103580](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103580#event-16405017312)
- Closed March 2025 [Staging Review finding: Order of options on Degree Level dropdown doesn't match expected sequence #103577](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103577#event-16405015903)

### Launch Prep
- [Readiness Review [Education Data Migration, Yellow Ribbon Tool] #2269](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/2269) 
- [YRT Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-data-migration/edm-yellow-ribbon-program-information-in-comparison-tool-release-plan.md)

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

### Design Intent Feedback (Closed)
- Closed February 2025 [Design Intent - IA Feedback - Education Data Migration, WEAMS Public #98839](https://github.com/department-of-veterans-affairs/va.gov-team/issues/98839#event-15607359715)
- Closed February 2025 [Design Intent - Accessibility Feedback - Education Data Migration, WEAMS Public #98857](https://github.com/department-of-veterans-affairs/va.gov-team/issues/98857#event-15611083835)

### Midpoint Review Feedback (Closed)
- Closed February 2025 [Midpoint Review - Design Feedback - Education Data Migration, WEAMS Public #101444](https://github.com/department-of-veterans-affairs/va.gov-team/issues/101444#event-16030284079) 
- Closed February 2025 [Midpoint Review - IA Feedback - Education Data Migration, WEAMS Public #101584](https://github.com/department-of-veterans-affairs/va.gov-team/issues/101584#event-16035612020) 
- Closed February 2025 [Midpoint Review - Accessibility Feedback - Education Data Migration, WEAMS Public #101873](https://github.com/department-of-veterans-affairs/va.gov-team/issues/101873#event-16084759168)

### Staging Review Feedback
- LAUNCH BLOCKING [QA Standards - Education Data Migration - WEAMS Public #105636](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105636#event-16881428829)
- LAUNCH BLOCKING [Staging Review finding: Unexpected keyboard focus behavior #105695](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105695#event-16914796554)
- LAUNCH BLOCKING [Staging Review finding: Form inputs not programmatically associated with labeling element #105696](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105696#event-16914797319)
- LAUNCH BLOCKING [Staging Review finding: Invalid URLs for Licenses and National Exams details #105704](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105704#event-16914802090)
- Should be a priority [Staging Review finding: Improper use of role="application" #105694](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105694#event-16914795852)
- Should be a priority (may be changed to a launch blocker) [Staging Review finding: Expanded/collapsed state not announced to screen readers for filter accordion #105697](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105697#event-16914797927)
- [Staging Review finding: Update the filter and search results UI #105685](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105685#event-16914790161)
- [Staging Review finding: Reset filters seems to be broken #105686](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105686)
- [Staging Review finding: Alert on school profile page doesn't follow link text guidance #105687](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105687#event-16914791289)
- [Staging Review finding: No path to update search text string on L&C search results page #105689](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105689#event-16914792453)
- [Staging Review finding: Alert on school profile page doesn't follow link text guidance #105687](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105687)
- [Staging Review finding: Title tags, h1s, current breadcrumbs must use same text #105688](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105688#event-16914791900)
- [Staging Review finding: All caps for institution names #105690](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105690#event-16914793004)
- [Staging Review finding: va-search-input imposter component #105693](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105693#event-16914795217)
- [Staging Review finding: va-select imposter componets #105691](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105691#event-16914793660)
- [Staging Review finding: va-text-input imposter component  #105692](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105692#event-16914794616)
- 
- 
- [Staging Review finding: Heading structure doesn't match content #105698](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105698#event-16914798436)
- [Staging Review finding: Tables must have a table-title #105699](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105699#event-16914799002)
- [Staging Review finding: Vague header for "programs" on school details page #105701](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105701#event-16914800261)
- [Staging Review finding: Alert contains instructions to "click" #105700](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105700#event-16914799640)
- [Staging Review finding: Strange search results on National Exams page #105703](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105703#event-16914801278)
- [Staging Review finding: Potentially outdated link in footer to search VSOs #105702](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105702#event-16914800787)
- [Staging Review finding: Breadcrumbs on Institution details and programs page should be more specific #105705](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105705#event-16914817115)
- [Staging Review finding: Complex language in FAQs  #105707](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105707#event-16914818242)
- [Staging Review finding: Links contain language that assumes ability and user experience #105706](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105706#event-16914817741)
- [Staging Review finding: Incorrect link text for downloading government forms #105708](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105708#event-16914818729)

## CT Homepage
- [Collaboration Cycle EDM and VEBT team, GI Bill Comparison Tool homepage #98557](https://github.com/department-of-veterans-affairs/va.gov-team/issues/98557)
- [CAIA Intake EDM & VEBT: Publishing a GI Bill Comparison Tool homepage #99990](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99990)

### Design Intent Feedback (Closed)
- Closed March 2025 [Design Intent - IA Feedback - EDM and VEBT team, GI Bill Comparison Tool homepage #99464](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99464#event-15708767113)
- Closed March 2025 [Design Intent - Design Feedback - EDM and VEBT team, GI Bill Comparison Tool homepage #99543](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99543#event-15733018527)
- Closed March 2025 [Design Intent - Accessibility Feedback - EDM and VEBT team, GI Bill Comparison Tool homepage #99573](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99573#event-15736614996)

### Midpoint Review Feedback (Closed)
- Closed March 2025 [Midpoint Review - IA Feedback - EDM and VEBT team, GI Bill Comparison Tool homepage #102021](https://github.com/department-of-veterans-affairs/va.gov-team/issues/102021#event-16110612222)
- Closed March 2025 [Midpoint Review - Design Feedback - EDM and VEBT team, GI Bill Comparison Tool homepage #101934](https://github.com/department-of-veterans-affairs/va.gov-team/issues/101934#event-16096543265)
- Closed March 2025 [Midpoint Review - Accessibility Feedback - EDM and VEBT team, GI Bill Comparison Tool homepage #102227](https://github.com/department-of-veterans-affairs/va.gov-team/issues/102227#event-16133713720)

### Staging Review Feedback
