# Research Findings for ARF Team, Accredited Representative Portal, County VSO Representatives, NACVSO Intercept Studies, 05/2024
**Office of the CTO - Digital Experience (OCTO-DE), Accredited Representative Platform, Benefits Accredited Representative Facing Team
**

Date: 05/2024

Lead researchers:
- Rebecca Blakiston, rebecca.blakiston@adhocteam.us
- Kristen Faiferlick, kristen.faiferlick@adhocteam.us 
- Renata Keck, renata.keck@agile6.com 
Collaborators/contributors:
- Courtney Stubbert, Designer, courtney.stubbert@adhocteam.us 
- Mike Marinos, Product Manager, mike@agile6.com 
- William Phelps, Engineer, will@coa.solutions 
- Lesley Ropp, OCTO Design/Research Lead - Benefits Portfolio, lesley.ropp@va.gov 
- Gabriel Zurita, Engineer, gabe@coa.solutions

[Findings report](https://dvagov.sharepoint.com/:b:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/052024%20NACVSO%20Intercept%20Testing/052024_NACVSOIntercepts_Report.pdf?csf=1&web=1&e=jKE5nz), deck, and recording of share out

Jump To:
- [Background](#background)
- [Research Goals](#research-goals)
- [Methodology](#methodology)
- [Intercept Prompts Used](#intercept-prompts-used)
- [Key Findings](#key-findings)
- [Details of Key Findings](#details-of-key-findings)
- [Intercepts & Conclusions](#intercepts-conclusions)
- [Additional Insights](#additional-insights)
- [Recommendations](#recommendations)
- [Next Steps](#next-steps)
- [Further Research Needed](#further-research-needed)
- [Appendix](#appendix)

## Background
The Accredited Representative Facing Team is seeking to re-envision the Accredited Representative experience so that they can more seamlessly and accurately help Veterans with their VA interactions, including helping Veterans apply for, manage, and update their VA benefits. Our initial focus is on the process of accepting the power of attorney (POA) given in Form 21-22 which appoints a Veterans Service Organization (VSO) as a Veteran’s representative, giving them POA.
We attended the National Association of County Veterans Service Officers (NACVSO) annual conference to engage with county accredited Veterans Service Organization Representatives (CVSORs).

### OCTO priorities
**Objective 1: Our digital experiences are the best way to access VA health care and benefits.**
- **Key Result 2:** Number of transactions processed during our products have increased by 25%.
- **Key Result 3:** All new products have a faster transaction time than those they replaced.
- **Key Result 4:** No transactions accepted by our products have a fatal error.
After years of focusing exclusively on Veterans who want to interact directly with VA, we will build tools for Veterans who want to work with accredited representatives, and the reps who support those Veterans. In doing so, we will redirect to VA.gov traffic currently going through [eBenefits](https://www.ebenefits.va.gov/ebenefits/homepage) and [Stakeholder Enterprise Portal](https://www.sep.va.gov/sep/web/guest/sep) (SEP).
Full list of [OCTO-DE priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202024.md).

### Veteran Journey
Any/all points when a Veteran needs support filing and accessing their benefits.

## Research Goals
- Build awareness of our work and establish rapport and trust with our users
- Better understand the specific needs, behaviors, workflows and permissions of county and cross-accredited VSORs
- Evaluate ARP accept/decline functionality and UI elements that may be impacted by county or cross-accredited representative-specific use cases
- Shadow county VSORs conducting claims clinics with Veterans and non-Veteran claimants to understand the representation process fully
- Information about current POA process and caseload will help determine improvements to the authenticated landing page and POA views to decrease cognitive load and facilitate smoother decision making

### Outcome
- Expand our participant panel to include a diversity of accredited Veterans Service Organization Representatives (county organizations, cross-accredited, different experience levels, Veteran/non-Veteran, bulk accept users, admins, etc.)
- Identify representatives who are current SEP users who are interested in participating in the ARP Pilot (late summer)
- Observational activities and interview questions will allow us to refine our persona, improve our current state map, update user stories and validate ARP Pilot and ARP MVP functionality with under-represented user groups
- Interview questions, observational activities and preference testing will determine how cross-accreditation workflows will impact authenticated and unauthenticated ARP UI elements, navigation, accept/decline permissions, and content strategy

### Research questions
**CVSO Representatives**
- Is there anything about our current understanding of how accredited CVSORs work that’s wrong? Anything that’s missing?
- How common is it for county/cross-accredited representatives to switch accreditation?
- One mental model we have heard for county and cross-accredited representatives is that they see themselves as employed by a primary/host organization, and their other accreditations are auxiliary. Is this the prevailing mental model for this user group?

**Current POA/tools usage**
- What percentage of CVSORs are SEP users who have permission to accept/decline POAs on behalf of multiple organizations? Are there any permission types we have not already covered in other rounds of research?
- Do county/cross-accredited representatives have system- and task-specific differences?
- How do county/cross-accredited representatives work across multiple VSOrgs throughout the day?
- Do county VSORs bulk accept/decline pending POA requests?

**ARP UI and functionality**
- Is the purpose and audience for the unauthenticated ARP landing page clear? Is the content valuable or is anything missing?
- Are post-authentication navigation categories clear?
- What style of search and filter for POA requests do users prefer?
- What style of POA results list do users prefer?
- Do CVSORs prefer to select a reason for declining a POA request from a dropdown, or type it into a text box?

**Claims process**
- Do representatives ever conduct 21-22 or claims-related work from a mobile device or tablet? Do they see value in a mobile-ready version of ARP?
- What gear do CVSORs bring with them to a claims clinic?
- Are CVSORs using paper forms or PDF with sign and scan?
- How are CVSORs submitting the 21-22 and any other forms at the time of sitting with the Veteran in a claims clinic?
- How do CVSORs set expectations for the representation and claims process with Veterans?
- What questions or issues are Veterans/Caregivers bringing to claims clinics?
- What questions, outside of form fields, do CVSORs ask the Veteran while completing the Form 21-22?

### Hypotheses
**ARP UI Functionality**
- Users will prefer filters on the side of the POA requests results so that the result list is higher on the page.
- Users will want additional Veteran/claimant information (such as file number/social number or birthdate) to distinguish Veterans with common last names or last/first name combinations.
- Users will want to customize the decline message, rather than select from a list of pre-populated decline messages.
- Users will feel the card list UI improves readability of search results over table list UI.
- Users will search for a Veteran or claimant name when given a task to search for a DIC case
- On mobile, users will prefer designs that save space and prevent scrolling (E1)
- Users will prefer “Results per page” below the list of POA requests, rather than above.
- Users will prefer simplified filtering patterns (E1/E2) over all filter fields displayed at once (A2).

## Methodology
**Semi-structured interviews** / Researchers ask representatives for general feedback about representative facing tools and the ARP tool mockups. We also ask questions from our conversation guide to better understand aspects of CVSORs’ workflow, current workload and pain points, and experiences. 
**Preference testing** / Researchers provide different mocks of desktop and mobile ARP designs to gather feedback on clarity of messaging and visual design, navigation, and POA request list presentation. 
**Talk-back boards** / Researchers write a prompt on a board for participants to respond to. 
**Mobile usability testing** / Researchers provide iPhone SEs with different mobile mockups of the ARP tool. Prompts and observational data determines whether a table or cards approach to displaying POA requests in both mobile and desktop versions of the tool, and will validate the level of information needed in the table or card display for high-level decision making and request-specific identification.

### Intercept prompts used
See [Conversation Guide](https://dvagov.sharepoint.com/:b:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/052024%20NACVSO%20Intercept%20Testing/052024_NACVSO%20Conversation%20Guide.pdf?csf=1&web=1&e=zphvgx). The script for each study was followed loosely, especially with the interviews, which were less structured by nature. 
Research on each of the 4 days focused on a different preference test and offered a different talk-back board prompt. Unstructured interviews and mobile testing attempts occurred daily.

## Key Findings
1. What we know about county VSO Representatives.
1. The county-to-state relationship influences a CVSOR’s workflows and geographic service area. 
1. Some third-party CMS tools provide quick establishment of POA already.
1. CVSO Representatives are excited for POA auto-establishment and repeatedly called it a “game changer.”
1. While CVSOs are eager to adopt digital tools and improve efficiencies with the VA, Veterans’ preferred interactions could affect ARP adoption.

## Details of Key Findings

