# Research Findings for ARF Team, Accredited Representative Portal, County VSO Representatives, NACVSO Intercept Studies, 05/2024

**Office of the CTO - Digital Experience (OCTO-DE), Accredited Representative Platform, Benefits Accredited Representative Facing Team**

Date: 05/2024

[Findings report](https://dvagov.sharepoint.com/:b:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/052024%20NACVSO%20Intercept%20Testing/052024_NACVSOIntercepts_Report.pdf?csf=1&web=1&e=jKE5nz) | [Presentation](https://dvagov.sharepoint.com/:p:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/032024%20VSOR%20User%20Testing/User%20Testing_NACVSO_%20Presentation.pptx?d=w7014bd1a98fd4269bc1b743097b4172c&csf=1&web=1&e=Mxg5dW) | [Recording](https://dvagov.sharepoint.com/:v:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/032024%20VSOR%20User%20Testing/20240611-Shareout_Recording.mp4?csf=1&web=1&e=f1gRxK&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)

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

Jump To:
- [Background](#background)
- [Research Goals](#research-goals)
- [Methodology](#methodology)
- [Key Findings](#key-findings)
- [Details of Key Findings](#details-of-key-findings)
- [Intercept findings](#intercept-findings)
- [Additional Insights and Outcomes](#additional-insights-and-outcomes)
- [Recommendations for ARP Pilot](#recommendations-for-arp-pilot)
- [Next Steps](#next-steps)
- [Further Research Needed](#further-research-needed)
- [Appendix](#appendix)

## Background
The Accredited Representative Facing Team is seeking to re-envision the Accredited Representative experience so that they can more seamlessly and accurately help Veterans with their VA interactions, including helping Veterans apply for, manage, and update their VA benefits. Our initial focus is on the process of accepting the power of attorney (POA) given in Form 21-22 which appoints a Veterans Service Organization (VSO) as a Veteran’s representative, giving them POA.

We attended the [National Association of County Veterans Service Officers](https://www.nacvso.org/) (NACVSO) annual conference to engage with county accredited Veterans Service Organization Representatives (CVSORs).

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

### Key finding 1
**What we know about county Veterans Service Organization Representatives.**

We asked participants about their current role, work context and case load in an effort to update our persona to reflect nuances within VSOR subgroups (See [updated persona](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709236473099/7a69ce07dbe58af30f1954470bebbe59b7bf1160?sender=u8cf3f08a008c2b61ad621433)).  

County VSO Representatives we spoke to:
- Are accredited, at minimum, through their state’s Department of Veterans Services **or** NACVSO (See [Accreditation and cross-accreditation](#1-accreditation-and-cross-accreditation)).
- Support a large Veteran population. (See [Veterans’ experiences and CVSO contexts](#4-veterans-experiences-and-cvso-contexts))
- Assist Veterans with more than just VA disability compensation claims, such as housing and education benefits, as well as other wraparound services offered through the VA, state or county.
- May be limited to which Veterans they can support (See [Key finding 2](#key-finding-2)).
- Have a variety of work contexts; while most CVSORs we spoke to work in-office, they may also work out in the field, including at Regional Offices, VA hospitals and Vet Centers, claims clinics, hospices, and in-home care.

### Key finding 2
**The county-to-state relationship influences a CVSOR’s workflows and geographic service area.**

After speaking with over a hundred CVSORs, there is no singular workflow or model for county Veteran Services and support. 
- All of the CVSORs we spoke to support substantially larger Veteran populations than other VSOR sub-groups we’ve interacted with. 
  - CVSORs cited a ratio of 1 CVSOR to 5-10k Veterans, and dozens to hundreds of appointments and claims weekly

The way a state centralizes their Veterans Services has a substantial impact on how county VSOs operate and permissions they have when supporting Veterans. 
- In states with a centralized Department of Veterans Services, such as Tennessee, CVSOs may be required to forward all POA and claims to the state for final approval and submission.
- Some counties restrict their VSORs to supporting Veterans within that county only. 
  - A CVSOR from Michigan we spoke with said he provides “counseling” to Veterans in other counties, even if he is not allowed to provide in-office support or represent those Veterans with the VA. 
- In some states, such as Colorado, POA is granted at the state-level, where any VSO Representative in the state can support the Veteran. 
- In other instances, CVSOR may be tasked with supporting a larger geographic area. 
  - We spoke to a CVSOR from the 4-corners area of New Mexico who supports Veterans from the other three states.
- Quote
  - “In Tennessee, our CVSOs have restricted access. Things are managed at the state level. The CVSOs get access to VetraSpec where they submit forms but they then go to the state for approval from their quality control team. This includes POAs. Only the state can approve POA requests.”

### Key finding 3
**Some third-party CMS tools provide quick establishment of POA already.**

In our analysis of [representative-facing tools](https://dvagov.sharepoint.com/:x:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/Current%20State/Comparative%20Analysis.xlsx?d=wb03e2748544544e09f5bad8c57dbdf02&csf=1&web=1&e=CcdbJ1) and [prior research](#secondary-research), we heard from representatives that many tools, including third-party tools, are unreliable and do not provide a fast or efficient way to submit the 21-22 or claims. 

At NACVSO, we heard from many CVSOR who use third-party tools (see [CSVO tool and technology usage](#3-cvso-tools-and-technology-usage)). 
- For some, VetraSpec allows a quick POA process using Direct Submit (fast) or D2D (instantaneous). 
- VetPro already offers a fast POA process, and is planning to pilot auto-establishment this summer.
Fast POA submission and e-Folder access has been flagged as a pervasive pain point for representatives, and our prior research into representative-facing tools had not surfaced any comparable functionality in third-party tools. For example, in [prior research](#secondary-research), representatives told us that D2D is either unreliable or nonfunctional for submissions, and has required VSORs from at least one organization to resort to using QuickSubmit.
- As a follow up, we asked Lighthouse for data on usage of the Benefits Claims API power of attorney services. 
  - Tyler Tech is using the API and POA submissions and in May 2024, POA submissions through ETK Veterans' Benefits was 1439 and through VetraSpec was 256. 
  - Looking at data from the last year, submissions were 1300-1500 per month or nearly 17,000 annually, which is comparable to eBenefits submissions though much less than QuickSubmit which receives approximately 30,000 submissions annually.
- Quote
  - “I use VetraSpec to submit and accept POAs and immediately get access.”

### Key finding 4
**CVSO Representatives want familiar search functionality, including the ability to search by the last 4 digits of the Veteran’s Social Security number.**

- During [preference testing](#intercept-3--concept-and-preference-testing), many participants said they'd need to search by SSN (or at least the last 4 digits). They confirmed that this is currently what they searched for, and would expect in a new tool.
  - CVSORs use VBMS daily, and expanded search fields match that experience.
- Representatives want links to relevant tools, forms and valuable resources linked within ARP. Suggestions included:
  - The related [21-0845 form](https://www.va.gov/find-forms/about-form-21-0845/) to authorize disclosure of personal information to an individual or organization.
  - [Code of Federal Regulations (CFR) - Title 38](https://www.ecfr.gov/current/title-38)
  - [M21-1 Adjudication Procedures Manual](https://www.knowva.ebenefits.va.gov/system/templates/selfservice/va_ssnew/help/customer/locale/en-US/portal/554400000001018/topic/554400000004049/M21-1-Adjudication-Procedures-Manual)
  - Defense Personnel Records Image Retrieval System (DPRIS)
- The tool needs to be easy to use and understand, especially for CVSORs who are less tech savvy. 
- Quote:
  - “When Vets come in, I search by the last 4 of the SSN pretty much exclusively. In VetPro and in VBMS, that's all you search by.”

### Key finding 5
**While CVSOs are eager to adopt digital tools and improve efficiencies with the VA, Veterans’ preferred interactions could affect ARP adoption.**

Most CSVORs we spoke with at NACVSO support older Veteran populations. These Veterans’ needs have an impact on how CVSOs work and how they use digital tools.
- Many Veterans don’t have or want a VA.gov account or ID.me login. This is consistent with feedback from [other VSOR subgroups](#supporting-studies) we’ve spoken with.
  - In some instances, CVSORs will help Veterans make a VA.gov account in order to more efficiently support them. One participant explained that they turn their monitor towards the Veteran and ask them for their information to create an account on their behalf.
  - ID.me is hard for older Veterans to set up and use.
- Veterans may prefer a paper process and physical copies of forms over using digital tools.
When preparing and submitting 21-22s digitally, CVSORs want an option for Veterans to validate their identity that does not require a computer or an account to log in. 
- Quotes
  - “Fewer than 1% of Veterans have a VA.gov account.”
  - “For the Veteran who can't do VA.gov, is incapable or too old, would there be a way to use phones to validate identity without creating an account?”

## Intercept Findings
The following findings are synthesized from participants’ responses to our intercepts. Researchers submitted data to a Google Form at the time of interaction, which resulted in 105 rows of data. We then used affinity mapping to visualize responses and group the data into themes in a [Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1713979562420/698d59b035888d2c8ffd1248276f0f132f9db3d1?sender=u503219bf4e47eab9c75d3838).

### Intercept 1 / Open-ended interviews
Researchers drafted interview prompts prior to the conference, but allowed conversations to be led by the CVSOR. The raw data, analyzed and grouped by themes, is presented below. We have included implications for the ARP tool at the end of each theme.

#### 1. Accreditation and cross-accreditation
Most county VSOR we spoke to are cross-accredited with their state, NACVSO, and at least one national non-profit Veterans Service Organization.
- Some states have relationships with national Veterans Service Organizations for statewide cross-accreditation. 
  - For example, Ohio has Memorandums of Understanding (MOUs) with the American Legion and Veterans of Foreign Wars (VFW). 
  - All CVSORs are accredited through these organizations, and may be provided licenses to software as a result of those affiliations.
- There are barriers to obtaining and maintaining cross-accreditations.
  - CVSORs we spoke to said that some national VSOs require extensive training (American Legion), or the requirement to be a Veteran yourself (DAV).
- CVSORs tend to focus on supporting the Veteran regardless of whether the POA is with their county or one of several organizations through whom they are accredited.
- Implications for ARP
  - CVSORs were curious how accreditation could be managed for CVSOs through the Portal.
  - Some participants were interested in seeing a dynamic header on the POA requests page that would reflect when they switch contexts between VSOs through whom they are accredited.
- Quote
  - “We are person-centric, not org-centric. Most cases are done through NACVSO or VFW, occasionally American Legion.” 

#### 2. Authentication and accounts
Most CVSORs we spoke to use PIV for logging into systems, as is common with other VSOR subgroups we’ve spoken to in the past. 
- Representatives have hesitations around requiring PIV for login due to time, cost, and the “PIV cliff,” a date by which older PIV cards will become inactive and many PIV users will need to obtain new cards.
- CVSORs have challenges with setting up ID.me for themselves and for the Veterans they support. Concerns around privacy and ID.me are consistent with other research we have conducted.

#### 3. CVSO tools and technology usage
Consistent with our prior research, CVSOs use a variety of tools to support their Veteran- and VA-facing work. 
- Licenses for tools and software may be provided by the state. In other situations, technology and licenses are granted on a county-by-county basis.
  - State-provided:
    - Ohio has a custom CMS used by _most_ counties (eVet)
    - Oregon, Tennessee and Indiana counties all use [VetraSpec](https://www.tylertech.com/solutions/health-human-services/disability-benefits/veterans-benefits)
    - Michigan and California state offer counties customized versions of [VetPro](https://vetpro.us/)
  - County-procured: 
    - For example, some counties in Illinois, Iowa, reported that they use [VetraSpec](https://www.tylertech.com/solutions/health-human-services/disability-benefits/veterans-benefits)
- Feedback on third party tools surfaced some inconsistencies with our current understanding of the representative-facing ecosystem.

| Tool | Benefits | Pain Points |
| ---- | ---- |---- |
| [VetPro](https://vetpro.us/) | <ul><li>Offers a quick POA submission process.</li><li>Has an efficient “fuzzy” search feature that accounts for close spelling.*</li><li>Supports county-level social services. | <ul><li>High cost per seat for licenses ($550 per user, per year).</li><li>Limitations on file size when uploading/submitting claims.</li></ul>  |
| eVet | <ul><li>Offers custom state and county solutions.</li><li>Supports non-VA facing services.</li></ul> | <ul><li>POA submission process is allegedly slower than VetraSpec or VetPro.</li></ul> |
| [VetraSpec](https://www.tylertech.com/solutions/health-human-services/disability-benefits/veterans-benefits) | <ul><li>Offers quick or near-instantaneous POA submission through Direct Submit or D2D.</li><li>Supports county-level social services.</li><li>Allows users to search for Veterans and track their communications history.</li></ul> | <ul><li>In prior studies, we have heard users say that D2D submission times can lag up to 48 hours.</li><li>High cost ($550-600 per person, per year).</li><li>Limitations on file size when uploading/submitting claims.</li></ul> | 

_*This feature has been requested by users in [other ARF studies](#secondary-research). For more detail on representative-facing tools, see the [Appendix](#appendix)._

- CVSORs spoke about their experiences using VA representative-facing tools, their current pain points, and what is working well for them.
  - **SEP** is only used by a handful of the CVSORs we spoke with. Those who do use the tool find it useful for dependency claims, since it is more efficient to file in SEP than in other tools. However, the ability to update contact information and other functionality in SEP remains a pain point.
  - **VBMS** was used by all the CVSORs we spoke with. It is useful for tasks such as checking if the Veteran already has a POA established with their VSO, and if the VA has their information. However, VBMS does not provide access to a Veteran’s records prior to establishing POA.
    - VBMS search functionality is a common and recognized pattern that CVSOR, by and large, are familiar with using. As noted in preference testing, they are interested in other VA tools that have similar design or functionality.
    - VBMS can be challenging to use, especially for older CVSORs and those dealing with claims that get “stuck in the system.”
  - Many CVSORs who use third party tools noted there are restrictions to file size when they submit claims through their CMS. They noted that QuickSubmit is a good workaround when submitting large or complex files to the VA.
- Despite the far-reaching use of client management tools and VA applications, we heard from CVSOR who still track their cases using spreadsheets and paper.
- Quote
  - “Each individual rep has a spreadsheet where they track cases.”

#### 4. Veterans’ experiences and CVSO contexts
- Veterans do not understand the letters and updates they receive about their claims, which results in increased communication to their VSOR. 
  - One participant said that they regularly have to respond to calls about a letter being uploaded to a Veteran’s file that has nothing to do with an action taken on their claim.
- Many Veterans turn to Reddit and other online Veterans communities for support and advice. 
  - One CVSOR who is a Veteran said that he has started using a [claims tracker browser extension](https://www.reddit.com/r/VeteransBenefits/comments/17qr058/va_claim_tracker_chrome_extension/), despite potential privacy concerns, because it works better than any VA-provided claims tracking, for both Veterans and CVSOR. 
- Some Veterans don't receive the rating they deserve because service connectedness is questioned when they volunteer details about their current job/life. This results in Veterans being less likely to share critical information that could help with their eligibility. 
- Some VSOs have poor reputations among some Veteran communities, making Veterans less likely to seek out their services.
- There are challenges when a Veteran passes away. 
  - It’s unclear how and when death notifications are communicated across systems, and timing can impact when benefits end. Survivor benefit claims can take many months to process, leading to delays in compensation for survivors and financial hardships.
  - Previous research has also indicated challenges when POA needs to be re-established after the death of a Veteran - one participant suggested there could be an opportunity for the VA to do living wills, as this could help with the cessation of POA and allow the VSOR to continue assisting the widow with VA and non-VA benefits.

#### 5. Current state of 21-22/POA process
CVSORs, as with other VSOR subgroups we’ve spoken to in the past, have many processes for submitting POAs, ITFs, and claims. 
- CVSORs tend to set expectations with the Veterans they support at the time they establish POA. 
  - Consistent with [prior research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/research/2024-03%20Single%20Accredited%20Testing/research-plan.md), this process may include handouts that outline the responsibilities and types of support a VSOR can provide, or an agreement the Veteran signs.
- Knowing whether a Veteran has existing cases or POA through another representative prior to establishing POA is critical, especially if a Veteran has open claims or an appeal in process.
- Some CVSORs we spoke to will always submit an ITF with the 21-22, while others do not. Some variations we encountered include:
  - When bundled with a pension claim, the 21-22 may take longer to establish than filing on its own. 
- We noted several variations in policies around declining representation
  - Some CVSORs might never decline a POA request because they don’t have permissions or authority to do so; in these cases, POAs are only declined by more senior members of the organization, or the state Veterans Service organization. 
  - In rare instances, where POA is revoked, the reasoning might not be documented or made available to future VSORs who need to re-establish POA and work with the Veteran. 

#### 6. Submitting and tracking claims
CVSORs provided more context to pain points around the claims submission and tracking process.
- VSORs are not allowed to sign the first claim, which is particularly a pain point when a Veteran is incapacitated or in hospice.
- The suspense date (the next time the VA will work on a claim) is sometimes inaccurate in VBMS, resulting in claims taking longer to review than expected. It can be challenging for CVSORs to communicate these inconsistencies to their Veterans.
- Matching anecdotal data we’ve heard in [prior research](#secondary-research), claims can get “stuck” in the VA system for long periods of time.
  - One CVSOR shared that a claim they were working on had been stuck in the VA system for 6 months, and despite repeated calls and communication to VA, they couldn’t get the issue resolved.
- Contract examiners (third-party medical professionals who provide Compensation and Pension, or C&P exams) can be a challenge.
- Community care appointments take too long.

### Intercept 2 / Talk-back boards
On the first day, we placed the talk-back board at our booth in the conference exhibit hall and encouraged passersby to contribute. At the end of that day, and on the second and third days, we put talk-back boards in a high-traffic area to collect asynchronous feedback. Participants were able to submit their responses on sticky notes, “vote” on others’ responses with stickers, or provide additional comments/context. The prompt on the talk-back boards was changed each day. 

Below are responses that received at least one up-vote or more than one sticky note response, in order of relevance.

#### Prompt 1: What are your biggest challenges supporting Veterans?

#### **Prompt 1: What are your biggest challenges supporting Veterans?**

| **Challenge** | **Sticky note(s)** | **What it means** |
| --- | --- | --- |
| **QuickSubmit is not quick**<br>1 sticky note, 1 upvote | “QuickSubmit is not quick” | Auto-establishment of POA as well as a more streamlined claims submission process could improve efficiencies and address concerns around the slowness of the claims submission process. |
| **Survivor benefits**<br>1 sticky note, 3 upvotes | “More efficient and timely process for surviving spouse benefits" | There are opportunities to improve efficiencies related to benefits for surviving spouses. | 
| **Summary of benefit letters**<br>1 sticky note, 2 upvotes | “Access to summary of benefit letters” | CVSORs told us they currently call the VA and have them create and email the VSO a letter. This letter is available to Veterans on VA.gov already, so there is an opportunity to make it digitally available to VSORs. | 
| **Content in generated letters**<br>2 sticky notes, 2 upvotes | “The robot”<ul><li>“Generated letter in 2 weeks”</li><li>“Wording is note Veteran friendly”</li><li>“Misleading”</li><li>“Scary”</li><li>“AI generated letters”</li></ul>| There is an opportunity to improve the clarity, usefulness, and “humanness” of content in letters. |
| **Contract examiners**<br>2 sticky notes, 1 upvote | “Contract examiners” | VA should explore what the challenges are related to contract examiners, which are third-party medical professionals who provide C&P exams for Veterans seeking disability benefits. |

#### Prompt 2: What would make the 21-22 (power of attorney form) process easier?

| **Challenge** | **Sticky note(s)** | **What it means** |
| --- | --- | --- |
| **Instant access to VBMS**<br>1 sticky note, 10 upvotes | “Instant access to VBMS” | Delay in accessing the Veteran’s e-Folder in VBMS is one of the most common challenges in the POA process right now. Previous research has also pointed to this, and is one of the reasons we are prioritizing near-instant access to VBMS as part of ARP’s functionality. |
| **Clarity around organization vs. individual**<br>2 sticky notes | “POA is not for individual but for organization i.e.: NACVSO, DAV, AL”<br>“Have your staff understand that my name on a 21-22 with my organization allows ALL in that organization to be able to contact VA on vet’s behalf. Not just the person listed.” | Some people, including VA employees, don’t realize that the 21-22 gives POA to an organization rather than an individual representative. There is an opportunity to make this more clear in public-facing web content as well as in training for VA employees. | 

The final talk-back board with the prompt “Tell us how you feel about…” only had three responses and they were unrelated to the prompt, so those have been incorporated into the open-ended interview findings above.

### Intercept 3 / Concept and preference testing
We showed paper mockups of different ARP design elements to participants. The mockups were set up on easels at our booth in the exhibit hall, to allow participants to pick up and closely inspect them. In some instances, we taped multiple screens to the same easel to imitate the flow between pages. A different element of the UI was displayed on the easels each day.

#### 1. Unauthenticated ARP homepage
On the first day, we presented three designs for the unauthenticated ARP homepage. 20 participants gave feedback on the designs, and Homepage 1 and 2 had the most positive feedback. 

| **Mock** | **[Homepage 1](https://www.figma.com/design/Cj48OstdxhxbnMoEb4pQmv/ARF---NACVSO-Assets?node-id=56-26317&t=GgE0LX3xENrrjTv0-1)** | **[Homepage 2](https://www.figma.com/design/Cj48OstdxhxbnMoEb4pQmv/ARF---NACVSO-Assets?node-id=56-26429&t=GgE0LX3xENrrjTv0-1)** | **[Homepage 3](https://www.figma.com/design/Cj48OstdxhxbnMoEb4pQmv/ARF---NACVSO-Assets?node-id=56-26478&t=GgE0LX3xENrrjTv0-1)** |
| --- | --- | --- | --- |
| Votes | 9 | 10 | 1 |
| Likes | Clear and simple, VA branding, useful content, visually pleasing | Hero banner is visually pleasing, distinct and clean, useful, and the gray content blocks are distinct | Clean |
| Dislikes | Too dark, harder to read. The blue-on-blue doesn’t have enough contrast for visually impaired users | None | Content in the blue content blocks blend together |

- Given the close votes between Homepages 1 and 2, and the feedback from a visually impaired participant about the lack of contrast in H1, we created a fresh design that incorporated the hero banner from H2, and the content blocks from H2. We shared [Homepage 4](https://www.figma.com/design/Cj48OstdxhxbnMoEb4pQmv/ARF---NACVSO-Assets?node-id=169-203070&t=GgE0LX3xENrrjTv0-1) with a handful of CVSORs on the next day. Feedback was only collected from a few participants, but was generally positive.
- When shown the homepage without much prior context, some CVSORs didn’t understand that ARP was for VSORs and not for Veterans. This was consistent with [prior research](#supporting-studies) we conducted, though it represented a very small percentage of users we spoke with at NACVSO.

#### 2. POA requests page
Participants were presented with three options of the POA requests page with different presentations of the POA requests list, search criteria, and filters. 27 participants gave feedback, and version A2 had the most positive reception by far. 

| **Mock** | **[A2](https://www.figma.com/design/Cj48OstdxhxbnMoEb4pQmv/ARF---NACVSO-Assets?node-id=58-72051&t=GgE0LX3xENrrjTv0-1)** | **[E1](https://www.figma.com/design/Cj48OstdxhxbnMoEb4pQmv/ARF---NACVSO-Assets?node-id=58-90007&t=GgE0LX3xENrrjTv0-1)** | **[E2](https://www.figma.com/design/Cj48OstdxhxbnMoEb4pQmv/ARF---NACVSO-Assets?node-id=58-107611&t=GgE0LX3xENrrjTv0-1)** |
| --- | --- | --- | --- |
| List type | Table | Cards | Cards |
| Filter location | Left side | Top of page | Top of page |
| Feedback | Simply and clear how to search, matches existing tools like VBMS | It's cleaner than A2 | None |

- When giving feedback on the POA request list, we asked participants how they wanted the list presented. 
  - One participant expressed that the table was a more familiar design, and that sorting it would be easier due to its Excel-like display
  - Several participants commented that there was “more information” in the table layout, despite comparing the datum across the designs and seeing that each design contained the same information.
- We also asked participants what additional search criteria they would need to find Veteran and non-Veteran claimants within ARP.
  - Many participants noted they’d need to search by Social Security number, or at least the last 4 digits. They expected this would be available in each of the designs. They confirmed that this is currently what they use to search in commonly-used tools, such as VBMS and VetPro, and would expect the same search options in a new tool.
  - Because CVSORs have complex geographic service areas they support, participants asked for the ability to filter by multiple zip codes at a time, not just one. This aligns with [prior feedback](#supporting-studies) in user interviews, as well as with a hypothesis from our user testing with singly accredited VSORs.
- Other feedback on the POA requests page focused on the ability to view history of POA request activity. Specifically, CVSORs want to be able to view and filter all of the POAs that they have previously accepted.
- We were able to validate some of our theories into ARP’s design:
  - **Hypothesis confirmed:** Users want additional Veteran/claimant information, (such as file/claim/Social Security number or birthdate) to distinguish between Veterans with common last names or first/last name combinations.
  - **Hypothesis somewhat confirmed:** Users overwhelmingly prefer search and filter functionality on the left side of the POA requests list, but their reasons are not because the requests list appears higher on the page. Their preference is due to functionality, visibility, and familiarity.
  - **Hypothesis disproved:** Users did not prefer simplified filtering patterns presented (E1/E2) over all filter fields displayed at once (A2). We theorize this follows users’ desire to reduce clicks to complete high-traffic workflows, and matches their mental model – built off of other tools like VBMS – of how a system should appear.

#### 3. POA request detail page and decline messaging
Participants were presented two options for communication with a Veteran when declining a POA request: a free-form text box for writing their own message, and a drop-down menu with standardized responses to common decline cases, such as barring access to health records or address changes. 5 users gave feedback on the options.

| **Mock** | **[Free-form](https://www.figma.com/design/Cj48OstdxhxbnMoEb4pQmv/ARF---NACVSO-Assets?node-id=58-125853&t=Gt7Y4eLMnvCtkyh1-1)** | **[Drop-down](https://www.figma.com/design/Cj48OstdxhxbnMoEb4pQmv/ARF---NACVSO-Assets?node-id=59-127195&t=Gt7Y4eLMnvCtkyh1-1)** |
| --- | --- | --- | 
| Votes | 2 | 3 |
| Likes | Ability to add context and contact information, and customize details for the specific Veteran and the reason for declining could save time. Would be really useful. | Simpler, easier, cleaner. Better from a data collection standpoint. |
| Dislikes | None | Should at least let me customize my contact information in the message to the Veteran, or have a “not accepting new clients” or “Other” option that tells the Veteran to contact me. |

#### 4. ARP global navigation and header/footer
Participants were shown the authenticated [Homepage 4](https://www.figma.com/design/Cj48OstdxhxbnMoEb4pQmv/ARF---NACVSO-Assets?node-id=169-203070&t=GgE0LX3xENrrjTv0-1) mockup and asked for their impressions on how they’d expect to navigate around the site. 
- Navigation
  - Participants found the navigation content titles to be helpful and clear, in particular, the Accreditation and Profile titles.
  - When asked what links they expected to find in the Resources navigation drop-down, suggestions aligned with prior rounds of [VSOR feedback](#supporting-studies), with several key additions:
    - Form [21-0845](https://www.va.gov/find-forms/about-form-21-0845/) 
    - [M21-1 Adjudication Procedures Manual](https://www.knowva.ebenefits.va.gov/system/templates/selfservice/va_ssnew/help/customer/locale/en-US/portal/554400000001018/topic/554400000004049/M21-1-Adjudication-Procedures-Manual)
    - Defense Personnel Records Image Retrieval System (DPRIS)
- Header/footer
  - Many participants expressed that they do not rely on the footer for navigation, with one participant saying that “nothing valuable” should go in the footer.
  - There was a single exception to this footer feedback: one participant said she uses the “VA forms” hyperlink in the VA.gov footer, because it’s the easiest way to find forms.

### Intercept 4 / Mobile ARP feedback
While we intended to test ARP on mobile with participants, we found that users were wary of accepting a mobile device from the team to look at our prototype. We wondered if this had to do with the small screen on the iPhone SEs we brought with us for testing. 

With a tablet available, we modified our mobile mockup for testing on a tablet. No participants were interested in mobile testing, and none we asked about mobile testing could name an instance where having a mobile-friendly version of a representative-facing tool would be needed.

As a result, we were unable to confirm our hypothesis that users prefer space-saving and scroll-saving POA request list designs in mobile. 

### Intercept 5 / Claims clinic observation
Due to constraints within the conference exhibit hall, we were only allowed to briefly look into the claims clinic, but not observe any VSO Representative-Veteran interactions. A narrative writeup of the claims clinic, written by an ARF team member who was able to attend the debrief at the end of the conference, is included in the [Appendix](#appendix).

### Intercept 6 / Find a Representative feedback
When the opportunity arose, we mentioned the new [Find a Representative](https://www.va.gov/get-help-from-accredited-representative/find-rep/) tool created by our collaborators on the Accredited Representation Management team. We asked participants if they had heard of the tool or used it. In some cases, we brought up the site on a laptop and asked participants for their feedback, how they would imagine using it, and if they could perform a realistic search for their information. 

- Overall feedback
  - While Find a Rep is useful and some VSORs are directing Veterans to it or getting referrals through the tool, one participant was concerned about the findability of it within VA.gov. This participant wondered how Veterans will know where to go on VA.gov to locate such a valuable resource. 
  - One participant was skeptical that the terms “accreditation” and “accredited representative” are meaningful to Veterans. Previous research by ARM corroborates this skepticism. 
- Find a representative interface
  - Name search was not clear to participants. Some expected to be able to search by representative name without location, or thought name was a required field.
  - One formerly accredited attorney who now works for VA pointed out that many Veterans see value in the ability to filter search results by expertise and focus area. 
    - While [prior research by ARM](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/research) confirms this is a desired feature by Veterans, our research with representatives has shown that not all VSOs allow their representatives to specialize in specific areas such as claim-type or appeals, rather requiring their representatives to be restricted to geographic location or Veteran sub-group (e.g., transitioning service members versus the Veteran general population).

## Additional Insights and Outcomes

### Insights
#### 1. For accredited attorneys, fee agreements are a critical part of the 21-22 process.
While this is not new information, we had the opportunity to speak with a formerly accredited attorney who stressed the importance of understanding fee agreements as part of the 21-22 process. ARF will need to consider this as part of future work for this user group. 

#### 1. OGC data is often outdated, but some CVSOs take on the task of keeping OGC information up-to-date.
While unreliability of OGC data is a known pain point, we were able to speak to a CVSOR who is responsible for updating information with OGC on behalf of their office. We now understand that there is at least one point of contact per VSO responsible for interfacing with OGC to update information. Who they contact and how that process works remains an open question, to be addressed in future research.

### Outcomes
#### 1. Participant panel recruitment
We recruited 94 new accredited representatives to our participant panel, including 93 CVSORs and one former accredited attorney. Additionally, we were able to make contact with multiple teams in VBA who are interested in the ARF team’s work with 21-22, as well as points of contact with VetPro and Tyler Technologies. 

Our participant panel now includes 123 VSORs total, from 33 states and territories. Top 5 states represented:
- Ohio (24)
- Texas (14)
- Michigan (11)
- Iowa (6)
- Pennsylvania (6)

#### 2. Enthusiasm for and awareness of our work
CVSO Representatives expressed excitement for our work. In particular, some called POA auto-establishment a “game changer” and one said, “shut the front door.” This indicates there is great potential for ARP to support CVSORs. 

While we didn’t identify specific individuals or organizations to pilot with, given enthusiasm about the project and number of sign-ups to our participant panel, we will be easily able to tap into the CVSO population for the pilot.

## Recommendations for ARP pilot

### 1. Adjust the unauthenticated homepage to align with user feedback.
We recommend proceeding with [Homepage 4](https://www.figma.com/design/Cj48OstdxhxbnMoEb4pQmv/ARF---NACVSO-Assets?node-id=169-203070&t=GgE0LX3xENrrjTv0-1), with key changes:
- Shift headings to black text (as used in [H2](https://www.figma.com/design/Cj48OstdxhxbnMoEb4pQmv/ARF---NACVSO-Assets?node-id=56-26429&t=GgE0LX3xENrrjTv0-1)) to improve readability.
- Reconcile and avoid poor color contrast
- Improve content strategy to make it more clear who the portal is for and that it is not intended for Veterans.
- Maintain VA branding and continue with clean, simple design that representatives prefer.

### 2. Refine the POA request list and search/filter UI.
Despite overwhelming preference for the [A2](https://www.figma.com/design/Cj48OstdxhxbnMoEb4pQmv/ARF---NACVSO-Assets?node-id=58-72051&t=GgE0LX3xENrrjTv0-1) list table, the amount of information about POA requestees will not scale well in a table format. We recommend the following design, which incorporates information needs of users along with their search/filter preferences:
- Proceed with [A2](https://www.figma.com/design/Cj48OstdxhxbnMoEb4pQmv/ARF---NACVSO-Assets?node-id=58-72051&t=GgE0LX3xENrrjTv0-1) left sidebar search/filter fields, expanded and displayed, but with the presentation of POA requests in cards from [E1](https://www.figma.com/design/Cj48OstdxhxbnMoEb4pQmv/ARF---NACVSO-Assets?node-id=58-90007&t=GgE0LX3xENrrjTv0-1). Additional user validation will be necessary.
- With ARF Engineering, explore the feasibility of adding SSN search functionality, or at least last 4 SSN search functionality, as well as the ability to show the last 4 of SSN in the POA list view and/or POA details page.

### 3. Continue to explore instant-access to VBMS.
With [10 upvotes on talk-back boards](#prompt-2-what-would-make-the-21-22-power-of-attorney-form-process-easier), instant access to VBMS remains a high priority for users in a future tool. 
- Participant feedback at NACVSO suggested that “instant” in VA tools isn’t necessary as fast as we think, and that users’ expectations are already tempered. However, ARF Design needs to think through how to indicate when results are ready, and where the accepted POA notification takes VSORs when they click to VBMS.

### 4. Proceed with standardized drop-down decline functionality.
- Explore a version of the drop-down that allows standardized decline messages, while also allowing the VSOR to customize the content when needed/wanted.
- Update specific aspects of the standardized messaging:
  - Add a standard message to the list of options: “Not accepting new clients.”
  - We recommend modifying the standardized messaging to remove negative language around declining and instead direct Veterans to contact the VSO to find out what steps they need to take to get their POA approved.

### 5. Give users the ability to find and refer back to their POA activity.
- With ARF Engineering, explore the feasibility of viewing previously accepted and declined POA requests.

### 6. Improve global navigation and information architecture around users’ needs.
- In the global navigation, continue with drops-down labels and menu content as they are. 
  - Once we have content on these pages, ARF Design will test that the content matches what users expect to find on these pages.
- Continue to explore what resources should go under the “External Resources” link.

## Next Steps
1. Document ARP Pilot design in Product Decision Review (PDR).
1. Update mockups for Midpoint Review.
1. Update the VSO Representative persona to reflect new insights.
1. Plan usability testing with VSO Representatives on updated mockups and to address open research questions and unresolved hypotheses.

## Further Research Needed
In future rounds of usability testing, include:
1. **ARP homepage**
   - Updated written content that outlines who the portal is for and that it’s not intended for Veterans.
   - Completed pages available from global navigation.
2. **POA requests page**
   - Search fields expanded and displayed on the left, with the ability to search requests by last 4 of SSN
   - Cards for displaying results.
   - Consider A/B testing POA information in cards versus a table.
   - Ability to view previously accepted and declined POA requests.
3. **POA request detail page**
   - Ability to view the last four of SSN in the requester's information.
   - Additional standardized decline message copy.
4. **Mobile ARP**
   - There is still insufficient data to support the need for a mobile version of ARP. While we are building ARP mobile-first, it remains to be seen whether mobile usability testing should be undertaken. 
   - We recommend including questions around potential mobile use cases in future testing with cross-accredited VSORs, who we theorize are more likely to work in the field and need mobile-first tools.

In future rounds of testing, the following hypotheses that could not be proven or disproven in intercept testing should be addressed:
1. Users will want to customize elements of the decline message, such as contact information, rather than select from a list of pre-populated decline messages.
1. Users will feel the POA request card UI improves readability of search results over table list UI.
1. When asked to find a POA request for a non-Veteran claimant, such as a Dependency and Indemnity Compensation (DIC) case, users will search for the Veteran name or information, rather than the claimant’s name or information.
1. On mobile, users will prefer designs that save space and prevent scrolling (E1).
1. Users will prefer “Results per page” below the list of POA requests, rather than above.

Additional research questions surfaced in this study:
1. Is the ability to filter by multiple zip codes a common use case?
1. What is the current process for revoking POA, and is this something to put on the ARP roadmap for future development?
1. Should we learn more about the 21-0845 form and make it available through ARP?
1. How can we support digital submission of the 21-22 for Veterans who don’t have (nor want) a VA.gov account?
1. How do VSOs maintain accreditation for their representatives? Who does this at a VSO, and what is the process like? How can ARP support those users?
1. How are VSOs updating their information with OGC?

## Appendix
- [Research plan](https://dvagov.sharepoint.com/:b:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/052024%20NACVSO%20Intercept%20Testing/Intercept%20Testing_%20Research%20Plan.pdf?csf=1&web=1&e=7iF0Bb) (Sharepoint)
- [Conversation guide](https://dvagov.sharepoint.com/:b:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/052024%20NACVSO%20Intercept%20Testing/052024_NACVSO%20Conversation%20Guide.pdf?csf=1&web=1&e=zphvgx) (Sharepoint)

### Tools used for synthesis
- [Raw data from intercepts](https://dvagov.sharepoint.com/:x:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/052024%20NACVSO%20Intercept%20Testing/Raw%20data/NACVSO%20Intercept%20Data%20Entry%20(Responses).xlsx?d=wbb4fd1ce16b14ba0806312f2170d2587&csf=1&web=1&e=WZpGCh) (Sharepoint)
- [Raw data from talk-back boards](https://dvagov.sharepoint.com/:x:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/052024%20NACVSO%20Intercept%20Testing/Raw%20data/NACVSO%20Talk-Back%20Board%20Data.xlsx?d=w58478add4f8049139c70e6cb38f0c2b9&csf=1&web=1&e=FBkEFc) (Sharepoint)
- [Visualizing findings and affinity mapping](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1713979562420/698d59b035888d2c8ffd1248276f0f132f9db3d1?sender=u8cf3f08a008c2b61ad621433) (Mural)
- [Claims Clinic notes](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/052024%20NACVSO%20Intercept%20Testing/Recordings%20and%20notes/Claims%20Clinics%20Insights.docx?d=wb2d1bf7af2264435ac4f05a2d602892c&csf=1&web=1&e=XkaYyr) and [debrief recording](https://dvagov.sharepoint.com/:v:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/052024%20NACVSO%20Intercept%20Testing/Recordings%20and%20notes/NACVSO_claimsclinic_debrief_recording.mp4?csf=1&web=1&e=wPYCcU) (Sharepoint)

### Pages and applications used
Homepage prototypes (Figma)
H1
H2
H3
H4 
Navigation/IA
ARP Header
ARP global menu drop downs
POA request page prototypes (Figma)
A2
E1
E2
Decline message prototypes (Figma)
Free-form
Drop-down
Mobile testing (Figma)
A2 (mobile)
E1 (mobile)
E2 (mobile + tablet)
Photos of talk-back boards (Sharepoint)
What are your biggest challenges supporting Veterans?
What would make the 21-22 (power of attorney) process easier?
Tell us how you feel about…
Find a Representative (VA.gov)

### Other supporting documents created
The following artifacts were updated to reflect the findings presented in this report:
- [Veterans Service Officer persona](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709236473099/7a69ce07dbe58af30f1954470bebbe59b7bf1160?sender=u503219bf4e47eab9c75d3838) (Mural)
- [Current state map](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1701101229797/15c7e1a5a9d426a998eb634408ff1dd3f4f9bdd1) (Mural)
- [ARP Information Architecture](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1710857598969/32219746df15eb2602a01b1b3b1b3ccf9fa8760d?sender=u503219bf4e47eab9c75d3838) (Mural)
- [Comparative analysis](https://dvagov.sharepoint.com/:x:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/Current%20State/Comparative%20Analysis.xlsx?d=wb03e2748544544e09f5bad8c57dbdf02&csf=1&web=1&e=CcdbJ1) (Sharepoint)

Notes taken at NACVSO sessions (Sharepoint):
- [QuickSubmit enhancements](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/052024%20NACVSO%20Intercept%20Testing/Recordings%20and%20notes/QuickSubmit%20Enhancements.docx?d=w69f846b93f01438c817a4569628fa8fd&csf=1&web=1&e=WM8IVH)
- [VBA update with Joshua Jacobs](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/052024%20NACVSO%20Intercept%20Testing/Recordings%20and%20notes/VBA%20update%20with%20Joshua%20Jacobs_.docx?d=w16b42fa734d044d1bafcf8e7deb6bf6c&csf=1&web=1&e=euePa2)
- [VA Office of Automated Benefits Delivery](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/052024%20NACVSO%20Intercept%20Testing/Recordings%20and%20notes/VA%20Office%20of%20Automated%20Benefits%20Delivery.docx?d=wa7b00ad9482142c086e62b2d773a0671&csf=1&web=1&e=vuL25i)

### Secondary research

#### Supporting studies
- [09/2023 Secondary Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/research/2023-09-secondary-research/2023-09-secondary-research-accredited-representation-management.md) (GitHub)
- [11/2023 Find a Representative User Test](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/research/2023-11-ARM-findarep-nav-usertest) (GitHub)
- [03/2024 Find a Representative LIVE User Test](https://github.com/department-of-veterans-affairs/va.gov-team/tree/45e6ae651cb6ba417e17ce63204069fb53fe0618/products/accredited-representation-management/research/2024-03-ARM-findarep-live-usertest) (GitHub)
- [01/2024 VSO Listening Session](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/research/01-23-24-listening-session.md) (GitHub)
- [02/2024 VSO User Interviews](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing/research/2024-02%20User%20Interviews) (GitHub)
- [04/2024 Veteran and Caregiver Representative Experience Interviews](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/research/2024-04-ARM-veteran-representative-experience-interviews) (GitHub)

### Tools used by VSOs
- [Comparative analysis spreadsheet](https://dvagov.sharepoint.com/:x:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/Current%20State/Comparative%20Analysis.xlsx?d=wb03e2748544544e09f5bad8c57dbdf02&csf=1&web=1&e=CcdbJ1), which includes these and more tools. 
- VA tools (may require special permissions to access from the VA network):
  - [eBenefits](https://www.ebenefits.va.gov/ebenefits/homepage)
  - [Stakeholder Enterprise Portal (SEP)](https://www.sep.va.gov/sep/web/guest/sep)
  - [QuickSubmit](https://eauth.va.gov/accessva/?cspSelectFor=quicksubmit)
    - Notes about [QuickSubmit presentation](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/052024%20NACVSO%20Intercept%20Testing/Recordings%20and%20notes/QuickSubmit%20Enhancements.docx?d=w69f846b93f01438c817a4569628fa8fd&csf=1&web=1&e=WM8IVH) from NACVSO (Sharepoint)
  - Direct Submit (no link available) 
  - [Digits 2 Digits](https://www.data.va.gov/dataset/Digits-to-Digits-D2D-/ewx6-sb25/about_data) (D2D)
- Third party CMS tools:
  - [VetraSpec](https://www.tylertech.com/solutions/health-human-services/disability-benefits/veterans-benefits), created by Tyler Technologies
  - [VetPro](https://vetpro.us/) 
    - Notes from [meeting with VetPro](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representative%20Facing/Research/052024%20NACVSO%20Intercept%20Testing/Recordings%20and%20notes/Notes%20about%20VetPro.docx?d=w43164ce8f4504ccb811d3945ed498620&csf=1&web=1&e=9YiWAN) at NACVSO (Sharepoint)
  - eVet (used by Ohio; no link available)

### Who we talked to
Our audience was county accredited Veterans Service Organization Representatives either currently accredited with the National Association of County Veterans Service Officers (NACVSO), or in the process of obtaining accreditation and membership to NACVSO. We spoke to over 100 CVSORs from:
- California
- Colorado
- Delaware
- Iowa
- Illinois
- Indiana
- Michigan
- Minnesota
- Mississippi
- Nebraska
- New Mexico
- North Carolina
- North Dakota
- Ohio
- Oregon
- Pennsylvania
- South Carolina
- Tennessee
- Texas
- Wisconsin

### Groups we haven’t talked to
This research does not include perspectives from the following groups:
- Singly-accredited VSO Representatives
- Non-county cross-accredited VSO Representatives
- Tribal VSO Representatives
- County VSO Representatives not accredited with NACVSO 
