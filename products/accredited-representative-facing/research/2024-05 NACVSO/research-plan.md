# Research Plan for ARF Team, Accredited Representative Portal, NACVSO Intercept Testing, 05/2024<a id="research-plan-for-arf-team-accredited-representative-portal-nacvso-intercept-testing-052024"></a>

## Background<a id="background"></a>

The Accredited Representative Facing Team is seeking to re-envision the Accredited Representative experience so that they can more seamlessly and accurately help Veterans with their VA interactions, including helping Veterans apply for, manage, and update their VA benefits. Our initial focus is on the process of accepting the power of attorney (POA) given in Form 21-22 which appoints a Veterans Service Organization (VSO) as a Veteran’s representative, giving them POA.

We will be collaborating with leadership from the [National Association of County Veterans Service Officers](https://www.nacvso.org/) (NACVSO) to engage with county accredited Veterans Service Organization Representatives (CVSORs)


### OCTO Priorities<a id="octo-priorities"></a>

**Grow digital submissions** / Focus on the needs of accredited representatives, and the Veterans who work with them: After years of focusing exclusively on Veterans who want to interact directly with VA, we will build tools for Veterans who want to work with accredited representatives, and the reps who support those Veterans. In doing so, we will redirect to VA.gov traffic currently going through eBenefits and Stakeholder Enterprise Portal (SEP).

Full list of [OCTO priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202023.md).


### Veteran Journey<a id="veteran-journey"></a>

Any/all points when a Veteran needs support filing and accessing their benefits.


## Research Goals<a id="research-goals"></a>

- Build awareness of our work and establish rapport and trust with our users

- Better understand the specific needs, behaviors, workflows and permissions of county and cross-accredited VSORs

- Evaluate ARP accept/decline functionality and UI elements that may be impacted by county or cross-accredited representative-specific use cases

- Shadow county VSORs conducting claims clinics with Veterans and non-Veteran claimants to understand the representation process fully

- Information about current POA process and caseload will help determine improvements to the authenticated landing page and POA views to decrease cognitive load and facilitate smoother decision making


### Outcome<a id="outcome"></a>

- Expand our participant panel to include a diversity of accredited Veterans Service Organization Representatives (county organizations, cross-accredited, different experience levels, Veteran/non-Veteran, bulk accept users, admins, etc.)

- Identify representatives who are current SEP users who are interested in participating in the ARP Pilot (late summer)

- Observational activities and interview questions will allow us to refine our persona, improve our current state map, update user stories and validate ARP Pilot and ARP MVP functionality with under-represented user groups

- Interview questions, observational activities and preference testing will determine how cross-accreditation workflows will impact authenticated and unauthenticated ARP UI elements, navigation, accept/decline permissions, and content strategy


### Research questions<a id="research-questions"></a>

**CVSO Representatives**

- Is there anything about our current understanding of how accredited CVSORs work that’s wrong? Anything that’s missing?

- How common is it for county/cross-accredited representatives to switch accreditation?

- One mental model we have heard for county and cross-accredited representatives is that they see themselves as employed by a primary/host organization, and their other accreditations are auxiliary. Is this the prevailing mental model for this user group?

**Current POA/tools usage**

- What percentage of CVSORs are SEP users who have permission to accept/decline POAs on behalf of multiple organizations? Are there any permission types we have not already covered in other rounds of research?

- Do county/cross-accredited representatives have system- and task-specific differences?

- How do county/cross-accredited representatives work across multiple VSOrgs throughout the day?

- Do county VSORs bulk accept/decline pending POA requests?

**ARP UI and Functionality**

- Is the purpose and audience for the unauthenticated ARP landing page clear? Is the content valuable or is anything missing?

- Are post-authentication navigation categories clear?

- What style of search and filter for POA requests do users prefer?

- What style of POA results list do users prefer?

**Claims process**

- Do representatives ever conduct 21-22 or claims-related work from a mobile device or tablet? Do they see value in a mobile-ready version of ARP?

  - What gear do CVSORs bring with them to a claims clinic?

  - Are CVSORs using paper forms or PDF with sign and scan?

  - How are CVSORs submitting the 21-22 and any other forms at the time of sitting with the Veteran in a claims clinic?

- How do CVSORs set expectations for the representation and claims process with Veterans?

  - What questions or issues are Veterans/Caregivers bringing to claims clinics?

- What questions, outside of form fields, do CVSORs ask the Veteran while completing the Form 21-22?


### Hypotheses<a id="hypotheses"></a>

**ARP UI Functionality**

- Users will prefer filters on the side of the POA requests results so that the result list is higher on the page.

- Users will want additional Veteran/claimant information (such as file number/social number or birthdate) to distinguish Veterans with common last names or last/first name combinations.

- Users will want to customize the decline message, rather than select from a list of pre-populated decline messages.

- Users will feel the card list UI improves readability of search results over table list UI.

- Users will search for a Veteran or claimant name when given a task to search for a DIC case

- On mobile, users will prefer designs that save space and prevent scrolling (E1)

- Users will prefer “Results per page” below the list of POA requests, rather than above.

- Users will prefer simplified filtering patterns (E1/E2) over all filter fields displayed at once (A2).


## Methodology<a id="methodology"></a>

**Semi-structured interviews** / Researchers will ask representatives for general feedback about representative facing tools and the ARP tool mockups. We will also ask questions from our conversation guide to better understand aspects of CVSORs’ workflow, current workload and pain points, and experiences. 

**Preference testing** / Researchers will provide different mocks of desktop and mobile ARP designs to gather feedback on clarity of messaging and visual design, navigation, and POA request list presentation. 

**In-person mobile usability testing /** Researchers will provide iPhone SEs with different mobile mockups of the ARP tool. Prompts and observational data will determine whether a table or cards approach to displaying POA requests in both mobile and desktop versions of the tool and will validate the level of information needed in the table or card display for high-level decision making and request-specific identification.

**Field observation** / Researchers will observe accredited Veterans Service Organization representatives meeting with Veterans and their families to assist with filing claims. Observational data provide a more accurate view of CVSORs’ processes, especially at claims clinics, which are an undiscovered area in representatives’ workflow, as well as observing representative-claimant interactions and tool workarounds.


### Location<a id="location"></a>

In person, at the NACVSO annual conference in Denver, CO between 5/13/2024 and 5/17/2024. 6 team members will be present.

**Research materials**

Link to [conversation guide](https://docs.google.com/document/d/1PyxeUbPlO2pQaXTwEqqm7bdlUH3SFLmBg0ucYa6A06I/edit)

Mobile testing wireframes

- Link to[ A2 mock](https://www.figma.com/proto/C3sdnDf8anVqXVdmiCWwq8/%F0%9F%9A%A7-Accredited-Rep-Facing?page-id=1349%3A25714\&type=design\&node-id=1893-42837\&viewport=274%2C303%2C0.11\&t=uH4DjbeaHI5xq6Mr-8\&scaling=min-zoom\&starting-point-node-id=1893%3A42837\&disable-default-keyboard-nav=1\&hide-ui=1) - displays the search criteria as a full list of ever-present fields

- Link to [E1 mock](https://www.figma.com/proto/C3sdnDf8anVqXVdmiCWwq8/%F0%9F%9A%A7-Accredited-Rep-Facing?page-id=1349%3A25714\&type=design\&node-id=1902-149191\&viewport=234%2C-344%2C0.16\&t=XgD7hUDRFxBlW7xE-8\&scaling=min-zoom\&starting-point-node-id=1902%3A149191\&hotspot-hints=0\&hide-ui=1) - displays a single dropdown list of criteria to choose from, with applied criteria as cards beneath the search field

- Link to [E2 mock](https://www.figma.com/proto/C3sdnDf8anVqXVdmiCWwq8/%F0%9F%9A%A7-Accredited-Rep-Facing?page-id=1349%3A25714\&type=design\&node-id=1902-166724\&viewport=244%2C-1066%2C0.16\&t=SW7yOaMYddTIE5Zx-8\&scaling=min-zoom\&starting-point-node-id=1902%3A166724\&hotspot-hints=0\&hide-ui=1) - displays a single dropdown list of criteria to choose from, with applied criteria appearing beneath the top dropdown field

Homepage mocks for preference testing

- Link to [Homepage 1](https://www.figma.com/design/Cj48OstdxhxbnMoEb4pQmv/NACVSO-printed-assets?node-id=56-26317\&t=hgrRwXthnDu721fS-4) - blue splash illustration

- Link to [Homepage 2](https://www.figma.com/design/Cj48OstdxhxbnMoEb4pQmv/NACVSO-printed-assets?node-id=56-26429\&t=hgrRwXthnDu721fS-4) - photo splash

- Link to [Homepage 3](https://www.figma.com/design/Cj48OstdxhxbnMoEb4pQmv/NACVSO-printed-assets?node-id=56-26478\&t=hgrRwXthnDu721fS-4) - white splash illustration

ARP navigation/IA mocks

- Link to [open menus](https://www.figma.com/design/Cj48OstdxhxbnMoEb4pQmv/NACVSO-printed-assets?node-id=57-61381\&t=hgrRwXthnDu721fS-4)

Decline message mocks

- Link to [freeform message 1](https://www.figma.com/design/Cj48OstdxhxbnMoEb4pQmv/NACVSO-printed-assets?node-id=58-125853\&t=hgrRwXthnDu721fS-4)

- Link to [freeform message 2](https://www.figma.com/design/Cj48OstdxhxbnMoEb4pQmv/NACVSO-printed-assets?node-id=58-125300\&t=hgrRwXthnDu721fS-4)

- Link to [standard message](https://www.figma.com/design/Cj48OstdxhxbnMoEb4pQmv/NACVSO-printed-assets?node-id=59-127195\&t=hgrRwXthnDu721fS-4)


## Recruitment<a id="recruitment"></a>

N/A


## Timeline<a id="timeline"></a>

- [x] ~~05/06 Research plan and conversation guide prepared ~~

- [x] ~~05/09 Pilot session completed, training provided to team members on how to moderate intercepts, record observations, and securely transmit data~~

- [ ] 05/13 - 05/16 ARF team in Denver at NACVSO

- [ ] 05/17 - 05/23 Data analysis

- [ ] 05/21 - 05/28 Reporting

- [ ] 05/31 Final presentation


## Team Roles<a id="team-roles"></a>

Research conversation guide writing and task development: Renata Keck (<renata.keck@agile6.com>); Rebecca Blakiston (<rebecca.blakiston@adhocteam.us>)

Project point of contact: Renata Keck (renata.keck\@agile6.com)

Note-takers/Observers: Renata Keck (<renata.keck@agile6.com>), Rebecca Blakiston (<rebecca.blakiston@adhocteam.us>), Kristen Faiferlick (<kristen.faiferlick@adhocteam.us>), Mike Marinos (<mike.marinos@agile6.com>), William Phelps (<will@coa.solutions>), Gabriel Zurita (<gabe@coa.solutions>)

Pilot participant(s): n/a
