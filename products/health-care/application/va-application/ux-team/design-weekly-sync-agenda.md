# Design Weekly Sync Agenda

## 2025-03-19
Attendees: Jessica S, Renata, Hieu, Jessica W, Heather, Luis, Jina, Amanda

EZR - 
- Hieu presented Mural of EZR timeline and history
- https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1684943221068/4b11f2d1902d05f12f53468263a561c2d5a460a9

PATTERN - 
- Went over pattern for confirmation page and download PDF functionality
- Discussed the pros and cons - the main con being how large the open accordion would be with all the information that could potentially be entered into the EZ. 

Need to do secondary research to learn:
1. Can the accordion portion be omitted? See it can be closed on default, and understand accessibility benefits, but the EZ can be very lengthy in amount of information …
2. What is the longest form currently using this pattern?
3. Is there any other options for grouping/hierarchy within the open accordion? Open by step for example?

- [EZ Figma page](https://www.figma.com/design/UljiHam46o5DItC5iDgmPd/10-10EZ?node-id=8542-43880&p=f&t=auRAQz2MW8xf4Bda-0)
- [CG Figma page](https://www.figma.com/design/TxXD5bGUOhbHHWLb85GPjK/10-10CG?node-id=4160-7966&p=f&t=BgfBSEZ84ck4PGkJ-0)


VES STATUS DISPLAY + FLOWS - 

Went over discovery board and problems to solve:
1. How can we let Veterans know more about the status of their health care application post submission? Other than enrolled, can we let Veterans know when they have an action to take so the VA can complete the eligibility review (financials)? 
2. How to let Veteran’s know they have an action to take on a submitted health care application (EZ) and give them an easy path to do so - only completing what they need and not starting a new form over. 

Next steps:
- Content iterations for the financials and pendingOther statuses. 
- More discovery on VA profile display options
- The flow and short form/choose adventure is the more complicated tech explortation needed




## 2025-03-12
Attendees: Jessica, Renata, Kat, Alex, Heather, Mitch, Jina, Amanda

- Intros
  -   Keep Jina copied on CAIA tickets and other day-to-day work for visibility and tracking of team issues

- VES statuses and Veteran journeys through EZ/R forms [(Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1740496801265/ef0c6474076d8229d200bc4fc080d6e4873a75ca)
  - Design question: Right now there's high call volume campaigns requesting that Veterans provide financial information (it's voluntary in EZ, but it's needed to determine eligibility)
Right now approaching the pending action issues. That's because the Veteran has to complete a task in order to complete their application How is forms status communicated to the Veteran for pending or action items?
  - Path 1: Is there a way to hook up to VANotify when they're in PendingMT status? How would that flow work? If a Veteran is in pending financial status, could they fill out the EZR instead of the EZ? How could we make that journey work? (Right now we don't let Veterans access the EZR if they're in pending). Maybe make the EZR fields optional except financial information. 
  - Path 2: Veteran does not upload dd214 when submitting EZ
  - Oustanding questions:
    - We don't know how many Veterans have encountered unverified status
    - How does registration work? Would they use the EZR to update information, or EZ to apply to ENROLL?
    - Will registration continue with Oracle Health, is this an issue tied into each region having their own CPRS? (Yes, it will persist)

- Roadmap source of truth and research priority shifts [(Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1741036478284/cf85ff75ac061c0cb4edb8c246bbb0c4db453b8e?wid=0-1741715387786)
  - Contextual inquiry moved back to prioritize other efforts. We'll aim for early summer (can start working on that research plan sooner if Kat/Renata have capacity). Will keep Jessica in the loop so that that research plan is mutually beneficial to both the EZ and the EZR
  - v2 confirmation flow usability test moved before contextual inquiry, since that's going to potentially block design/devs for subsequent sections of the EZR.

- Action items:
  - Ask Josh F or HEC for stats on how many Veterans encounter either of these paths when submitting the EZ
  - Continue to work with auth exp team
  - EZR team may need to do backend discovery (may be blocked by MHV auth wall)
  - Heather to ask Travis about VES having pending statuses already

## 2024-12-30 Monday
Attendees: Angela, Hieu, Jessica, Lois, and Renata

- The team discussed data analysis (provided by Heather) of user paths through a registration process for VA healthcare, including challenges with presenting options and consequences.
- Renata presented findings on design patterns like summary cards, wizards, and comparison tables that could potentially improve the registration process.
- The team debated the pros and cons of using a wizard-style interface versus providing more upfront information.
- The team continues to discussed research questions around whether "registration" should be a distinct choice or part of a more conversational eligibility process.
- There was consideration of how VA staff currently handle registration at different sites and whether that should inform the online process.
- The team is preparing for an upcoming meeting on Thursday to discuss these findings and potential design directions.
- The team briefly touched on related topics like embedded forms in other VA applications and recent caregiver legislation.

## 2024-12-18 Wednesday
Attendees: Angela, Hieu, Jessica, Lois, and Renata

### Caregiver Feedback
- Not doing the follow up workshop yet
- Stakeholder was against auto-suggestion
- Friday update: now that we have your feedback, we can shape next steps.

### PO SYNC
- Registration is just a VA term, what are the Veterans really trying to do? Getting an appointment. 
- Patrick does not want to drag HEC back through the term.
- Kristen: is there any additional requirement for to see appointments.

### Confirmation Flow
- Drop off at Financial: Mix Method. 
- We have tested authenticated
- For Type A (Comparison): leaning towards A, the rockstar team to experiment a new path. 
- Write a research plan, TYPE A question is too broad. Get that they are growing at the same time. 
- Need more discovery and refinement with mock before crafting a research.

### Action Items
- Renata: Competitive analysis for Spouse Financial (Patrick request) 
- Renata: Find some Financial Approach
- UX to propose frequent touchbase with Engineering for the Household work.


## 2024-12-16 Monday
Attendees: Special Guest - Jina Ryu (looking at data for the apply pod)

### Registration Content Working Meeting 1 (Mural)
- Lois thinks this is a good approach
- We’ll have the feedback from Danielle and start exploring the questions. 
- Work through the HOW and WHY of the research questions. 

### Staging Review for CG
- Nothing was a surprise, the team already started the changes based on the research.

### Bluesky Vision
- Lois thinks the way we do notification is so janky so the Presentation would be helpful.
- Angela was on the authenticated experience team and worked on notifications. There was a technical limitation - with the current VA design system. They did look into the event bus. Did not hear the technical update during the presentation, there is no ‘how to’. 
- There are no good components. It will not be VA Notify, it may have to be Event Bus. 
- Lois wants us to consider what type of notification we have to work with. And influence some of the vision. 
- If we have the VA Dashboard, what type of things do we want it to show?

## 2024-12-09
Attendees: Alex, Angela, Emily, Heather, Hieu, Lois, and Renata

### Upcoming Content Research Mtg with Danielle
- We have a scheduled working session on Thursday this week, more to come on next steps after that meeting and whether we will need a regular meeting cadence with CAIA
- EZ/CG: Eligibility wizard and potential content testing (Jessica's [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1731600312853/b3f7b42171fc661e8c0fbb2eabb4329bd5c21e12))
- EZR: Static page content testing
- ACTION ITEM: Update EZR research planning with desk research and a table with the Social Listening finding, the related content, and the ideas/research associated with that that we want to research

### DC trip in early February
- ACTION ITEM: Emily to schedule a sync with PO/PMs/DM to discuss what we'll be doing in-person

### EZR Household Financial Information V2 research planning ([Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717026977599/1bfae008bd2a077800a265b87ab9f0e62ebbbb8d))
- Lois would like more information about whether user testing prior to launch is the best approach, since we may not be testing with live data in a test environment.
- Lois question: do we know the path Veterans take to the EZR? What's the business driver for this research? We know the old version is better than the new version, so do we need comparative testing?
- ACTION ITEM: Hieu to work on providing additional context to research planning Mural, identifing the applicable method to be used, and whether there is a need to test before building.

### DOMO Dashboard with Luis
- Lois requests successful submission metrics by year (EZ/CG) and by month (EZR) from the PMs. There are some issues with getting data prior to 2022 in DD, per Heather.
- ACTION ITEM: Lois remembers there being a huge dropoff in EZ or EZR when asking for a mailing address. Luis to confirm.

### CG Research Presentation at the OCTO Design Sync
- The deck read well with CG stakeholders last week, good job! Use that deck format for the OCTO read-out.
- ACTION ITEM: Angela/Jessica to circle back with CG stakeholders about next steps

### Blue Sky Authenticated Experience Presentation
- Lois got the team invites, it's also in the team calendar for anyone who'd like to join
- Lois would like the team to share Social Listening findings with that team soon
- Will ask to see if the presentation can be recorded

### Varia
- ACTION ITEM: Renata to update Social Listening findings deck
- ACTION ITEM: Heather to upload EZR means testing/financial information reporting letters from HEC to GH

## 2024-12-02
Attendees: Angela, Hieu, Jessica, Lois, Renata, Alex, and Heather

#### Ideation Work
- Renata goes over the Ideation Workshop and the next steps.
- Lois and Danielle in dialogue. Danielle wants to lead the approach by looking at A vs B testing. 
- The team does not recall any current process to notify the Veteran to update EZR. Maybe only to update the means test.
- EZR: Notification may be too large at the moment so the static content testing may be the best bang for the buck. But need to confirm with Danielle and consider bite size. 
- ACTION ITEM: We need to meet with Danielle for Research Planning. 
#### Registration
- Jessica goes over the Mural Board. 
- Where and How in the form flow do we add the ‘wizard’
- What do we need to know, what do we need to learn. 
- Lois had her head more around this than the EZR portion. 
- Danielle has a toxic exposure (originally planned to be on VA.gov)  wizard that has not gone live. 
- Heather reminded the team not to pigeon-hole into just service-connected in the wizard.
- Jessica notes that the Copay static page has the same list as the registration.  (https://staging.va.gov/health-care/copay-rates)
- Heather looked at the metrics on Friday. It looks similar to the month of October. 

#### Confirmation Flow (Household Financial Info V2)
- Need a high-level research plan (like Jessica)



## 2024-11-25
Attendees: Angela, Hieu, Jessica, Lois, & Renata.

#### OCTO Bluesky
- Ryan presented this during the OCTO offline.
- Lois feels like it is a status we can show on the MyVA.

#### Priority Group
- Recap of Ideation, and discuss the next steps. 
- When should we bring the HEC stakeholders in?
- The team discusses how to tackle Priority Group (what kind of research, how much does the Veterans need to know about the Priority Group language)
- How do we trigger people to come back to update? 
- Lois suggested that we would use a mural board similar to Jessica's. Thinking to be visible for others to look at. 

#### Registration
- Jessica discussed the possibility of using the A/B eligibility wizard. Similar to TERA birthday logic, show only relevant questions to the Veterans. 
- Lois suggests maybe a bit of discovery around Eligibility. Maybe just a Content testing? 
- Action Item: Consider content testing for Priority Group, Registration, and Eligibility. Lois supports this research and exploration. 
- Jessica notes that the authenticated path is potentially easier. We already know certain information like disability ratings. 
- Jessica goes through Mural:
  - Lois wonders if the team needs to talk to VSO. Consider unconventional research. 
  - Early ideas: Registration choice, mini-wizard. 
  - Next steps? 
    - When and where we should show HEC? 
    - Next steps: HEC appetite for Priority Group. (How transparent should we be? Is there any business or history we need to consider? Is there an appetite for people to know more? How much content testing have we done in the past?
  - Lois wants presearch before talking to HEC. Cartography Team. - Lois wants "presearch" prior to talking to HEC regarding Registration, Priority, and Eligibility. (IE: talking to the Cartography Team)
- Consider content testing for Registration, Priority, and Eligibility. Lois is on board with the exploration and research. 
- HEC: what is their appetite? How transparent should we be? Is there any business or history we need to consider? Is there an appetite for the Veterans to know more? How much content testing have we done in the past?
#### CG Facility 
- Lois wants the Platform to do what the team needs. Jessica notes that the model is actually already custom since the Platform does not do what the team needs.

#### Main takeaway (also in slack)
- Lois wants presearch prior to talking to HEC regarding Registration, Priority, and Eligibility. (IE: talking to the Cartography Team)
- Consider content testing for Registration, Priority, and Eligibility. Lois is on board with the exploration and research.
- HEC: what is their appetite? How transparent should we be? Is there any business or history we need to consider? Is there an appetite for the Veterans to know more? How much content testing have we done in the past?
- More info and thoughts on the 'wizard' concept:
   - The deprecated wizard pattern - but this is specific to questions before starting a form online
      - Vs. what we are thinking for registration/enrollment wizard is more geared toward specific questions based on Priority Group placement then short paths based on those answers
      - see the business logic based old registration flows here
- There is the income limits tool - which helps those who don't have other eligibility factors see if they qualify to enroll based on income only


## 2024-11-12
Attendees: Angela, Hieu, Jessica, Lois, & Renata.

#### Social Listening
- Ideation workshop, work goes beyond us but we take it to our teams. 
- We have a VA System section that is beyond our product
- OCTO Sync, we’ll try to get our their schedule soon. Lois notes ‘in-progress’ presentation is good. 

#### Caregiver Research
- Lois wants us to consider the fiction for Recommendation 1 (Revisit content and resource link on the introduction and static page). 
- Eligibility process, if 73% of the applicants fail, we should not send people through this if they don’t qualify.
- Recommendation 2, exploring how to clarifying information about secondary caregiver and their benefits. 
   - If content is better than VA.gov and it is not on there, it should be. Jessica notes the Caregiver sub-domain does. 
   - Lois is not comfortable with linking off to another site (don’t want to be dependent on a site that may go away).
- Recommendation 3, update to facility search. Make it clear they need to select a facility. 
- Recommendation 4, some people are hesitant to go to their closest facility (Auto-recommendation). Explore 

## 2024-11-04
Attendees: Angela, Hieu, Jessica, Lois, & Renata.

#### EZR updates
- Social Listening Presentation Deck is almost done, needs review/polish.
- Zero Silent Failure is being deployed.
- Next of Kin is in the process
- Ideation workshop for the Social Listening work coming soon.

#### CG Synthesis
- Team discuss findings and refinements to the the findings.


## 2024-10-28
Attendees: Angela, Hieu, Jessica, & Lois.

#### CG Synthesis
- Next time, researchers to standardize tagging and definition before work sessions.
- Lois mentioned she used Optimal Workshop - Reformer for synthesis. As well as OneNote for tagging (but it only allows for one tag).
- Next Step: manual process of theme grouping

#### TERA branching
- Discussion on success metric, such as decrease application competition time and increase in customer satisfaction score (CSAT)
- Lois thinks the number of competitions of TERA updates (before vs after) would be a good indicator.

## 2024-10-21
Attendees: Angela, Jessica, Lois, Luis, and Renata

#### UGC
- social listening report - great job from Lois! 
- how might we’s and exploring those in a workshop
- time to workshop those as a team, post workshop and tickets/roadmap
- Lois interim step before stakeholders, PMs/PO (middle ground)
- Go over internally 


#### EC/NOK
- Hieu working with engineers and limitations with UI and backend
- EC side then match on NOK
- NOK HEC questions remaining - content specific 
- align with PDF form questions and consistency - 1 vs 2 EC/NOKs allowed
- Research talking with terminology - Next of Kin (advanced directed medical decisions) in VA vs outside (estate planning) - research needed content concern
- No research planning, just seeing if scope validates research later
- Renata talking about possible future benchmarking research 
- Lois - research relevant and actionable


- Approach for social listening, and open text fields and analysis of ga analytic 

#### Doc Upload Component
- document uploads and changing file types - Lois watch out list
- upload issue… keep a look out


#### EnjoyHQ
- Lois to play around with upload a research study
- Recent research to upload
- Tracking trends - where Enjoy can come in
- things we find and not providing well - how to reach out to others/Platform
- More formal but easy

#### CG research update
- rescheduled session to this week, was supposed to be completed last Friday 10/18
- full on synthesis work this week
- Lois mentions synthesis checkpoints - reviewing research report, track back to the data in Mural, validate for myself
- invite Lois as optional, team working session
- Lois wants to observe process, pass along to other teams

#### Data reporting with Luis
- Question how many number of submissions (successful) 2023 to 2024 compare
- broad health care apply study
- Lois question - how do these transfer to benefits
- numbers Luis ran, source the numbers from DataDog to find successful submissions (spreadsheet tracking Google sheet)
- why DataDog better than GA? Number for submission is closer to actual truth, specific metric at code level when submission process. GA is tangental, tag manager pixel action
- old GA numbers were sampled
- numbers include EZ and EZR forms
- Spikes in August + September 2023 during PACT communication blasts and efforts
- DataDog retention is a month-ish; kept in spreadsheet for historical data
- intro page vs Veteran info first page to factor in submission rates


#### Content testing
- what are other teams doing? guidance?




## 2024-10-08
Attendees: Angela, Jessica, Lois, Luis, and Renata

Upcoming PTO: Lois is doing a half day on Friday.
Next meeting: Monday is a Federal Holiday, so we will be moving our next 10-10 Design Sync

**CG Research**
* 9 sessions completed, all caregivers/partners.
* Next week will be predominantly Veterans/Cohort 2, with the possibility of some caregiver rescheduled sessions.
* The signup form is getting difficult to manage and hard for observers to sign up because so many participants have rescheduled or been replaced.
* **Action item:** Angela/Jessica to reorder the sign up sheet in chronological order.

**Autofill error**
* Angela/Jessica noticed an error when participants were using browser autofill with the CG form in staging ([thread](https://dsva.slack.com/archives/C05Q6411HPF/p1728074968030069))
* Jessica found that the way to troubleshoot the error with the participant in the session is to have the user tap a different form field and then go back to filling in the fields as usual. 
* Angela spoke with the devs and this is a problem that could occur anywhere. Heather is opening a ticket to look into and resolve this issue.
* Jessica wonders if this is a more global autofill UX issue, it could affect all forms teams. She has experienced this issue with autofill as well. Discovery should be interesting.
* **Next steps:** Lois would like to know, even if this is a broader issue, how to support users experiencing this problem. Jessica agrees this could be more of a content design concern for better supporting users who use browser autofill.

**EZR Social Listening updates**
* Research plan is drafted, findings report is still in progress.
* Lois is excited we're aligning our research goals with RQs and hypotheses in the findings section.
* Note that in future, we should avoid using percentages with small sample sizes, but percentages in this study are sufficient (large n)
* **Action item:** Renata to share the research plan Canvas in the design channel. Will also share the findings report when the draft is completed.

**OCTO Design Sync**
* Lois wants to know more about how the team who presented this week worked with Perigean to do dynamic recruitment of AT users.

**10-10EZ Save in Progress investigation**
* Luis captured quite a few metrics in GA4, but we're limited in a lookback perspective. We can only really go back to May in terms of historical data, since that's when we made the switch.
* There's a slight fluctuation in SIP form start over (saving a form in progress, having an error, needing to start the form over from the beginning). Luis is more concerned with SIP form reload and the reload fails. Specifically calling out September, there's a May-August upward trend in errors, but it's very prominent in September. 
    * **Next steps:** Luis is going through session replays to see if he can find any commonality with users coming in mid-form and experiencing a reload error. There's a big potential for an abandonment issue here. Should have updates on this by end of the week.
    * **Action item:** Luis to share session replays in the Design channel so Lois/team can view.
* Lois notes that this work goes beyond Zero Silent Failures. Luis agrees, this is an error that's not contingent on completing and submitting the form. It happens before that.
* Lois would like to see a report or written narrative about this work in the future to demonstrate continuous improvements using data analytics. 

**Actionable Research**
* Lois would like to see "recommendation roadmap" in reports or slide decks. There are gaps between research recommendations in a findings report, and actionable work post-research study. There are a lot of "whats" but not many "hows" and Lois wants to be involved in the ideation post-research. Are there workshops or ways to involve Lois and the larger team in making research actionable?
    * Jessica has done a scrappy SWOT analysis of prior research and potential areas of research with the CG team.
    * Renata has done feature evaluation workshops.
* **Action item:** Jessica and Renata to share a template or examlpes of SWOT/feature evaluation workshops in a Mural with Lois.

## 2024-09-30
Attendees: Angela, Jessica, Hieu, Lois, and Renata.

**CG Research**
- The team discussed several stakeholders signing up to be observers and how Jessica or Angela would send out the individual links. 

**EZR Social Listening next steps**
- Linking back to Priority Group, it is clear and definitive that most Veterans do not know what Priority Group is and how it impacts their benefits. 
- Renata notes that the User Generated Content is across the board on the Veteran Journey while the Medalia that Luis is working on is during mid-form. Both types would help us identify gaps.
- Lois wants to emphasize getting back to the research plan, wondering how much more should we do on social listening and what will be helpful to us.
- Hieu notes there are two ideas around this work: 1 - how does this help our team with our work/research? 2 - Can other teams utilize this work? So the intent is to share this work with others as well.
- Lois agrees with sharing the work and notes that Kristen M. would be interested in the appointment portion of the work.
- One idea: Priority Group is care based on your disability group + financial situation?
 
**Experience Maps**
- Talked through the concept of creating a living journey map/persona docs where we can gather all the research data and insights (social listening, research studies, VoC, GA + Datadog data, desk research etc).
- Want to talk through what is easy to maintain and the audience of such an artifact
- How can this benefit others?
- Maybe for now, focus on how this can be used and benefit our team? UX roadmapping + prioritization workJessica explains that it would be a low lift, a source of truth (and living docs) of everything we have learned so far, including our research.
- Lois brought up it would be like the Map of Maps. 
- Idea: just links in Mural to keep it low lift? 

**Registration**
- Concerns Registration explanation is not clear for MVP, will watch during first month
- Need to think about research questions and/or next steps

**OCTO Presentation/ Monday Design Sync**
- Lois brought up this concept similar to the PM ToT slack summary
- The one from today would be Prefill and Trauma. What from that meeting to directly impacts us and our work?

**Email,Silent Failure**
- Renata explains what happens when the EZ/EZR application is not successfully submitted through the VES. The Confirmation Page message is around successful submission while the VES would be the one that sends out the application is successfully received. If it is not received by the system, this silent failure will trigger. 
- The silent failure email, EZR does not have a failed to submit email, workin on this and the content is going through CAIA review
- EZ does have an email implemented, but it never went through CAIA review, going through review at same time as EZR

**Saved in progress** 
- Lois brought up the conversation around how Veterans would be confused on the sign-in location after they have an in-progress application. 
- We think EZ shows up as Save-in-Progress on MyVA (Dashboard and in Claims). Angela can confirm that with the Developers. 
- In Slack, Heather asked the MyVA team if that is not longer the case. 
- The status also shows up in the Intro page (Save-in-Progress) for the 10-10EZ application. 
- Nuance: What does not show in MyVA because not all status shows up in MyVA.


## 2024-09-23
Attendees: 

Summary:
[part overlap with research session]
Analytics working session with Lois & Luis


## 2024-09-16
Attendees: 

Summary:

- Would like to chat through the county field updates on the CG form - [Figma link](https://www.figma.com/design/TxXD5bGUOhbHHWLb85GPjK/10-10CG?t=kjelMus8DMVBLq1t-0)
[Design] 10-10CG - Explore design and content options for County field #92754

- From Heather in Slack: 
RE County - Matt says it would not be a quick fix to put it on its own page, so we would need to determine if that is going to be a permanent change (thinking yes, but we can chat about it).  Also, a quick fix would be to add that US/USA/United States validation restriction.
9:08
RE data flows, there is that Visio, but we don't maintain that. We do have some high level diagrams in our folders
[EZ architecture diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/engineering/architecture-diagram.md) (GovDelivery is now VA Notify, has not yet been updated)
[CG architectural overview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/eng-docs/10-10%20Architectural%20Overview.pdf) - font is a bit tiny, but it does include the Mulesoft middleware

- Lois asked if her TERA overview questions were accurate. Angela updated the questions since it is closer to VBA’s question now.

## 2024-09-9
Attendees: 

Summary:
CG 
Research review / working session

EZR
- AEDP Team Prefill Research
- Emergency Contact

## 2024-09-03
Attendees: 

Summary:
- Registration updates with not sure radio option removed
- CG research check in



## 2024-08-26
Attendees: Angela, Jessica, Hieu, Lois, Renata and Luis

**Analytics chat**
Voc = Voice of the Customer, effort from CIO office
Team to gather data that exists; processing and presenting to CIO, Lois involved with that effort - separate from this team
What benefits team is doing; way of working + align with what they are doing
Monthly pull basis Medalia
More actionable insights
Tell the story with links back to data
CSAT score positive or negative — what happened? What we know?
Starting pinning to certain changes made on form
Concerns with data sources populating correctly
Need to do a clean up = landscape effort
Leaning more into GA4 and DataDog
Start reporting richer metrics
ACTION ITEM: Team next steps meeting, PM + PO focused with Luis and Lois


**Social listenting**
VA Mobile app; play store reviews ,Reddit mining
CHAMPVA fB groups; so much data in there, ethics to discuss
What other teams have done something like this
You tube Veteran influences - comments
ACTION ITEM: Renata to open a ticket and start social listening around Priority Groups


**Facilities updates**
Reviewed current CG facilities design around CG research
Noting all just Figma and v3 component updates
Reviewed EZ phased facilities designs and search
Noting will need to start thinking about research +
ACTION ITEM: Jessica schedule EZ/CG team meeting. Create a ticket for planning around EZ facilities research and metrics


**Notification on EZR**
Reviewed Mural
Worked on landscape of teams and their Figma files
Call outs on phone number and in-consistency
Back end systems where info goes
Leverage other teams for updatingTalked about status that would trigger a notification need
What Priority Groups / reasons are there for a notification trigger to complete the financial assessment
Phone numbers - watching out for inconsistencies,
ACTION ITEM: Hieu - Look into notification triggers / statuses




## 2024-08-12
Attendees: Angela, Jessica, Hieu, Lois, and Renata.

**Multiple responses pattern** 
- Went over the "custom" version used on the EZ/EZR today and the mocks using the 'forms library' version for EZ insurance and EZR EC/NOK
- We will create clear labels in the design source of truth files to make this really clear when we are using what version
- Will align styles to the form library version as much as possible but acknowledge there will be some visual differences (save-in-progress alerts and delete/remove icon button) with the custom version used
- Talked through state when a Veteran could see the custom and library versions of the pattern in the same go through the form, not ideal interim state but okay with it
- Goal: to help improve the pattern with the forms library and move all of our custom to the library version eventually

**Design notes + documentation** 
- The before/after side-by-side and the notes and callouts of what changed has been received well! Team notes engineers and content peeps have called this out. Plan on continuing with this pattern and what else is valuable to note and annotate in the future.

**Tickets template:** 
- Walked through slack thread of new areas to include in tickets but especially the dependencies feature is a nice add on

** Registration update**
- the sign in part was just to remove the link to save the form on those first couple of pages where the registration questions are presented.

**Action Items**
- Ask the engineers regarding the stacking button. If that is an automatic rollout or something needs to be done.
- UX team needs to go to the Forms design officer hours regarding the list & loop directions.
- UX team needs to indicate a badge for the custom list & loop vs no badge for the Form’s version. 



## 2024-07-29
Attendees: Angela, Jessica, Hieu, Lois. Luis, and Renata.

Team updates Lois on current projects and efforts:
- Registration path: Lois asked if there is enough interest in this path. Jessica notes that the MVP is only for service-connected Veterans with disabilities rating between 10-40%, but there are tons of other reasons for someone to apply through a Registration-only pathway (such as IVF, mental health, non-veterans, humanitarian, etc)
- Lois inquired about the team’s Accessibility process in staging. We currently have a QA person who does Accessibility as part of their test but UX and PM can jump in during the Collaboration process. 
- Lois needed help with the Google Analytics access. Luis notes that Lois’ access is GA3 and it will need to be GA4. Luis also recommends Datadog out-of-the-box analytics. 
- Team updates Lois on the CAIA process: all processes, no matter the size, should go through CAIA. 
- TERA: 
  - Lois is puzzled by VES’ Other Toxin character limitation which potentially forces another fill-in
  - Team updates Lois on the Special Character effort. VES indicated they could receive the change so the team pushed out the changes but the VES backend was not ready. 
  - For TERA branching logic, the team realized that the form is only asking for the Vetearn’s last branch of the service period. The team showed a few different options on how to ask for additional services. Lois likes the 3rd option: Description, Military service component, then the question to add more. 
  - The team later discussed simplifying the question into year-only.



## 2024-07-23
Attendees: Angela, Jessica, Hieu, and Lois.

Team updates Lois on current projects and efforts:

- MHV: EZR team met with Sara S. from MHV to talk about how EZR exists within the MHV landing page. Notes from the meeting:
  - Brief history; MyHealtheVet was a subdomain of VA.gov for a long time and now they’re shifting it to be a portal under VA.gov as a “health portal”.
  - The health portal focuses on “managing health”, it touches 9 other teams (10 if Profile is included). EZR and Travel reimbursement are under the health portal.
  - Phase Rollout mural - the health portal is currently going through phase 0 (the pilot phase). Once a component passes phase 1, the site has a ‘try me’ option for Veterans/users. 
  - Sara explains that the breadcrumb is vertical and the home/back/continue movement is horizontal. Back-link in the digitalized form brings the user back to the previous page while back-link in the MyHealtheVet space would likely bring them back to the previous task. 
  - Besides OCTO, there is OCC (Office of Connective Care) who are nurses, doctors, and other health professionals that review and approve changes. 
- NOK/EC: There is a larger effort to prioritize the editing capabilities. Profile and Health Enrollment have different backend systems and the next steps would be for the PM/DM to chat about the roadmap. EZR will proceed with having the NOK/EC incorporated into the existing form flow.
- TERA: Unlike email or phone numbers, the VES system does not collect individual responses for TERA so the team cannot prefill the answers. While we can display eligibility, it may not be worth the effort. The team recently learned some conflicting information from HEC regarding the TERA flags. 
- TERA special character error: It was indicated that the VES was ready to receive the special characters so the team went for a quick win with a quick turn around. It turns out the VES backend was not ready to receive that information so now the team has to do a Post-mortem. 
- CAIA refresher: UX enjoys working with Content but their smaller team means it is still a major roadblock in pushing out work. The team met to discuss the best course of action, with CAIA noting it is okay to move forward with small changes. There is a larger discussion happening between Danielle and OCTO. The team will regroup for an update.
- Facilities: Current discovery on how the Veteran can search for their local VA Facility. Today, it is a dropdown menu. 
- Katelyn’s backfill will be Renata. They’re currently working in the VA space and will formally join the team on August 1st. 


## 2024-07-01
Attendees: Angela, Jessica, Hieu, Lois and Katelyn

- Walked through the documentation folder on GitHub and the Mural = what is there so far, any feedback. Noted this is a living doc and anyone should feel free to add to it/corrections as needed. 
- Lois noted she really seeing some other documentation too, mentioned this is an evolution of an existing Mural and what was started in an onboarding presentation
- First “test” with new UX team member who will be joining
- A quick walkthrough of the EZ insurance step updates: the facilities and the insurance questions since Lois will be out the next couple of weeks.
- Mentioned not much update since we walked through this at the last ux sync on the facilities side, getting the insurance discovery ready for an internal team working meeting/chat scheduled for next week
- Showed Lois the 1010 roadmap mural and the tables at the bottom showing quarterly goals and future ideas


## 2024-06-24
Attendees: Angela, Jessica, Hieu, and Lois

**CG Updates:**
- Went over CG form updates and the background of the stakeholder issue with the other VA forms
- Talked through the concerns of this content being confusing and missing clarification.
- Next steps:
  - 1. desk research, Lois mentioned the VSO presentation during the Monday design sync today, look into what other teams know already
  - 2. Analytics: before / after July release what is the drop-off rate of the sign as a representative section, also time on pages within this step
  - 3. User research - more exploratory than usability. Focus on research questions first. Want to test hypothesis around mention of other VA 21 forms and the primary/secondary caregiver clarification. Note: Primary/secondary clarification was a nice to have CG content review feedback item from the stakeholders.

**EZ Facilities:**
- Shared Figma page with process/discovery so far
- Luis - will open a ticket to account for the data work
- Link to existing ticket - Jessica mentioned this got tabled for the past week but want to circle back

**EZR:**
- Reminder to coordinate the static page timing with form updates when it applies
- What worked well with doc upload process:
- CAIA  - call out things as being “launch blocking” and keep reminding of this throughout process, note what to pick up after mvp

**Secondary Nav:**
- Hieu talked through background, shared Figma links
- Mentioned that there was not a way to show MyHealtheVet selected in secondary nav so appointments is active in the mocks
- Will show on introduction page and confirmation page
- Looked at MHV Figma files to find latest version
- Talked through breadcrumb and secondary nav placement on what pages of the form.

**Design decisions:**
- Lois mentioned the IVC team has a template they have evolved
- Lois asked about SSN masking and changing that; for authenticated flows on the EZ we mentioned the SSN is not-editable.




## 2024-06-17
Attendees: Angela, Jessica, Hieu, and Lois


- Talked through upload docs on the EZR. Lois called out representative team research on the optional upload field and how that can present usability issues or Veteran not being aware it is even optional.
- Lois expressed opinion of the new v3 upload component not having visual hierarchy on the page. Has brought this up to design system team. They are also going to use that on the IVC forms so curious to why it is not ready yet.
- Decided that content updates for July is feasible but the overall experience for the representatives who have completed the other VA 21.. forms could use some UX improvements post-July. Think about holistically, and prioritize with other UX enhancements like list and loop pattern.
- Mentioned CAIA and meeting with Danielle tomorrow over TERA question alignment. Angela will take good notes since Lois can’t attend, Jessica will be out :)
- Lois showed the experience map in Mural she is working on for Toxic Exposure question alignment. She is coordinating with Danielle Thierry about the source of truth for all of this - also mentioned the outdated TERA Mural we have in our 1010 room. 



## 2024-06-03
Attendees: Angela, Jessica, Hieu, Katelyn, Lois, and Matt K.

**Figma Clean-up**
- team agrees to add Note at the bottom of mockup for misalligments and to-do. Anyone can add notes to any product.

**Decision Log** 
- Angela will attempt the UX’s first decision log.
- The formal Github log will include major decision decision with names of everyone involved. It will be like a table-of-table with high-level view with link tickets.
- Heather has a timeline of decisions including development and product.
- For making tables in github: https://tabletomarkdown.com/convert-spreadsheet-to-markdown/ 

**Analytics**
- Lois can provide MHV resources that from the broader team. 
- Lois asked about C-set and Medalia, consider if we need to store some of the information ourselves. 
- At a later meeting, Luis notes that the changed in URL may be why showing is impacted. Domo ingested mostly Google Data and Medalia data. The dashboard has VA KPI forms and has Medalia info at the bottom. And we only pull raw data every 3-4 months since since 1 month of data is hard to analyze. 
- Luis as no information on C-set, he will ask Platform Analytics team during their open office hours.

**EZR v2 Research Plan**
- Lois notes the need for a hypothesis, Hieu notes it is around validation the team’s decision with evidence to go with the Confirmation flow.
- Lois has Prototype matrix to share.
- Quality vs quantitive (how can we get a benchmark then a released product, can we get a large number of test users?)

**CG**
- CG stakeholder wants to change it to 1-to-1

**TERA questions**
- HEC allows for the division of the gulf war date (2 questions)




## 2024-05-13
Attendees: Angela, Jessica, Hieu, Katelyn, Luis, Kristen and Lois

- It was Kristen’s last time joining the UX sync 
- Jessica talked about the address order on the CG - what is in production, the new changes and CAIA wanted to confirm with VADS folks. Kristen recommended going to Office Hours over async in slack to explain the business reasons and needs surrounding the break in design system guidance.
- Hieu went over contact info on the EZR and how that could be impacted by the list-and-loop becoming an official form library component. Meeting with Forms Team designer to talk about the pattern, more to come.
- Jessica talked through the content process on the CG updates - native components, content making edits right in Figma and ideas around the most efficient way to go about this.
- Team chatted about some ideas: One idea was to unattach all components and have a working area, then have to essentially rebuild once content review done. Seeing if lessons learned on CG with editing native components helps alleviate some of the initial issues.
- Angela went over the start of the Mural board for the HEC workshops for the toxic exposure question next steps. Walked through organization of board and the three areas that we will focus on during the meeting.
- Had to call it right at 10 to make it to the OCTO presentation on time :)
- TBD - Want to discuss async of a new time for UX sync so it works better for everyone.




## 2024-05-06
Attendees: Angela, Hieu, Katelyn, and Lois.

- Angela consider TERA-related questions for HEC following the Research Readout this Wednesday (May 8). She wants the HEC’s opinion on the proposed changes and branching logic.
- Katelyn wants to ask HEC some Support Doc questions (HEC document review time).
- The team notes the confusion around the Gulf War question. A veteran mentioned there is a ‘second’ Gulf War (Iraq War) and the list of locations includes countries not from the 1990 Gulf War.
- Hieu informs Lois of the VES team’s idea around a Healthcare Hub.

## 2024-04-29
Attendees: Angela, Hieu, Katelyn, Jessica, Lois, Kristen, Mitch, and Matt K.

**Team Intro**
- Lois with USDS, integrated design team care, lots of design research for big companies.
- How Lois worked with other teams: Primary OCTO stakeholder for research and design, unblock VA barriers; consultant, and inform.
- Keep track of Apply team (Hub)
- Lois will join 30 minutes into the meeting

**Other Topic**
- VA Notify - integration to EZ/EZR is still in the discussion phase
- The team shows Lois the setup: Slack Channels, slack stand-up, EZ/CG and EZR roadmap, Mural, Github, Figma



## 2024-04-22
Attendees: Angela, Hieu, Katelyn, Jessica, Kristen, Alex (briefly), and Emily (briefly).

**OCTO**
- Lois Lewis will take over Kristen position as our main point-of-contact while Kristen takes additional OTCO responsibilities. 
- Lois will join us for UX Sync, the HEC calls, the PO sync.
- Emily wants to set up a demo for Lois.
- Kristen will post an intro and indicate which meeting Lois will join in.


**EZ TERA synthesis**
- All participants think that they’ve been exposed to toxic material but not sure what qualifies. 
  - Kristen notes that for the clinical reminder research (all the questions during a doctor visit), asbestos was brought up multiple times.
- Kristen advised putting more information within the “key finding” since that is how others would most likely be skimming information.
- ES cannot accept special characters in the text input but they’re aiming to roll that out during the summer 2024. Jessica to double check.
- Kristen noted there is already a Veteran outreach team, reaching out to veterans without healthcare and PACT-like, and wonders if there is a way to integrate this info with the larger effort.
- Kristen suggests talking to Danielle (Content) about VBA for overarching.
- Hieu notes that we can be more transparent in the TERA info: say info will help the VA denote potential, definition may expand in the future.
- Scrolling is a Form Library issue.
- Jessica notes that at least 2 participants had to Google to clarify their service location and period. Kristen recommends adding a bullet point to the finding. 
- Jessica/Kristen noted the slide deck used for the stakeholder is the same one with OCTO findings with certain slides turned off. Kristen recommends breaking the presentation into two parts and presenting with pictures.


## 2024-04-15
Attendees: Angela, Hieu, Katelyn, Jessica, & Kristen.

**EZR V2**
- Hieu presents the confirmation flow with the complexity breakdown

**EZR TERA Launch Recap**
- The team approaches the release with a content and code freeze implementation. It went okay as there was one launch blocker.
- Content misalignment with incremental layout, static page is owed by Content but requires Developers to set up/edit the widget.

**Registration**
- Talked about HEC meeting on 4/10/24 where the MVP user flows Mural and rough mocks were shown
- Received decision about priority of contacting for registrtion mvp: 1. call, 2. download/mail, 3. facility
- Have contacts for data gathering
- Will schedule internal meeting to go over next steps or review in Sprint Planning

**CG Updates**
- Next up priority to focus on (they are minor design and content updates needed)
- Needs to be live by June


**Looking Ahead**
- Kristen and Patrick are in dialogue for upcoming items such as documentation attachment, HEC Aduit, and Registration-only next steps, and Event Bus integration. 
- Jessica mentioned smart branching logic exploration per feedback from toxic exposure usability sessions




## 2024-04-08

Attendees: Angela, Hieu, Jessica, & Kristen.


- Went over high level take-aways from the toxic exposure research sessions last week - Veterans expressing wanting smart logic in the form flow. An example being, if a Veteran enters their DOB and military service dates, the tera questions they are seen should be relevant to them like skipping questions about Vietnam or Agent Orange if they did not serve in that time
- 
- Hieu went over the choose your own adventure flow and talking through the options and engineering chats around that so far. Part of this includes updates to using the multiple responses/card pattern. Kristen mentioned a confirmation flow could have the same Veteran experience impact with less engineering lift, to consider that route.

- Registration.... talked over the MVP Option 1 flow and the outstanding HEC questions that we want to talk through on Wednesday. Mostly around the data we want to get before and after this goes live to track the data for the service-connected 10-40% use case. Kristen mentioned that the Option B prototype testing (aka the digital solution for registration) is probably a lower priority of other items.

- EZ/CG priorities - know the CG updates is next up as we wrap up the EZ toxic exposure research. After that with the registration mvp, Kristen will initiate convos on the UX priorities with the other initiatives coming up


## 2024-04-01
Attendees: Angela, Hieu, Katelyn, Jessica, & Kristen.

**REGISTRATION:**
- Jessica presents the MVP options.
- Kristen suggests going with Option A (PDF) and seeing if Option B (Short Form, Registration VES status) is even worth it. 
- Angela suggested the possibility of calling in since it would be easier and faster for the Veterans. Kristen noted that we would have to touch base with HEC since it would be staff-impacted.
- Angela wants to clarify rolling the PDF before the Enrollment System is ready. Kristen confirms. 
- Decision: going with Option A, implementing ASAP but need to check with HEC first (need some wireframe). We’ll need to investigate Option B

**EZR V2**
- Hieu presents the two strongest possible Confirmation and CYOA options.
- Kristen asked if both flows could work in conjunction. Hieu notes that the CYOA does not add additional value since the Veteran still has to go back and review other sections so technically the Confirmation is a stronger choice.
- Kristen recommends looking into the UK.gov Task to further develop the CYOA flow.
- Katelyn wonders if there is a variation for CYOA Option A - Question, where there is a checkmark selection. This would be looking into a future where the Veteran does not have to review all sections/information.


## 2024-03-18
Attendees: Angela, Katelyn, Jessica, & Kristen.

**REGISTRATION:**
- Chatted about registration next steps
- Such a massive problem that it can be intimidating when diving into workflows
- The balancing act of wire framing out an ideal long-term state vs what could be realistic for MVP
- Kristen - think about one use case - if we can help that experience and learn from it start from there

**TERA RESEARCH (EZ end March/early April)**
- Goal 1 is what Kristen was looking for
- Think about recruit / methodologies - mentioned recent VBA observational study where maybe diverging from the traditional recruit method with Perigean might be worth looking into.
- Angela and Jessica to meet and go over methodologies and recruitment
- Will have Kristen review Research Plan and Convo Guide once ready to submit for approval
- Will do a kickoff call with Perigean

**ROADMAPS**
- Kristen to reach out to Alex about including iterations, improvements, research findings and working that into the roadmap plan

**DOCUMENT UPLOADING**
- Update is that EZR will not be “announced” until uploading documents feature added
- UX questioning the need - balancing the business side purpose with the Veterans’ experience and mental model



## 2024-03-11
Attendees: Angela, Hieu, Jessica, & Kristen.

- TERA Mural Board, consider splitting the exposure based on region.
- Jessica has started the mural board for TERA questions
- Registration-Only User Journey Mural
  - Reg vs Enrollment is still an issue
  - Kristen: consider new patients vs existing patients (only registered at certain sites, this would be extending to new locations) on the map
  - We’re the lead in understanding lead benefits, other teams are “after registration” such as the appointment section
  - How much info should show up on MHV landing page vs the Profile.
  - Ranking of the biggest impact of which concept (we only went on the biggest Reg Only reason).
  - Kristen wants to see an MVP proposal, ideal if it can incorporate multiple reasons. 


## 2024-03-04
Attendees: Angela, Hieu, Jessica, & Katelyn.

- Registration-Only workshop session (Angela): 
  - Workshop #3 went well with Samantha and Roosevelt (RJ) giving extensive answers. We did not get one question answered but there is a bi-weekly check-in we can use to ask.
  - The team talked about the unknown timeframe of the wireframe and the journey mapping. We will try to get feedback from the VES team, showing in-progress items.
- Confirmation Flow Design (Hieu)
  - A few things to consider: 
    - The primary focus of the EZR is to update the household financial information. 
    - The multiple response component we utilized in the EZR MVP is a major factor in keeping the flow as soon as possible. 
  - Comparison between the EZR  v2 and Confirmation flow screen count is not much different (24 vs 21 screens) when including Military Info, TERA, and EC/NOK. 
  - Angela notes that the multiple component is better because the Veteran can edit certain information when there are multiple cards.
  - Design consideration:
    - The information we surface needs to be a balance between recognized vs recalled. (example: show the Veteran street but not city, state and zip. We would need research to confirm our hypothesis.
    - Check-in with the Forms team on the Multiple Response component (Matt Dingy, Jeana Clark. The Claim Team may have similar components)
- Upcoming Research (Jessica):
  - We should group the TERA research with some outlier, secondary research questions. Things to consider: research on the TERA on EZ vs EZR. 
- Hint Text (Katelyn)
  - Katelyn notes multiple redundancy in the content/text (Work vs Job). 
  - Team talked through multiple possible arrangements, with an option to have only 1 additional information to keep the content to a minimum. 
  - Team wants to be more proactive with refining and updating the forms. 
- Ideal state - Explore the ideal state of healthcare enrollment, 
  - Consider in-person research (all UXers are relatively close to VA facilities).
  - Consider beyond the scope of form/application (holistic health care journey). 



## 2024-02-26
Attendees: Angela, Hieu, & Katelyn.

- Team discuss EZR v2 using mural - Top priority includes Confirmation Flow, Notification, Save-in-progress, Household Income reference, NOK/EC.
- Team discuss Content Component in Figma - consider creating a variable for the Desktop vs. mobile. 
- Hint Text - not discussed
- Team consider doing another sync midweek.

## 2024-02-20
Attendees: Angela, Hieu, Jessica, Katelyn, & Kristen.

- Hieu updated the EZR Audit works, need to reach UXers to test certain pages.
- Jessica notes the EZ/EZR FormContent, naming convention standards. We’ll have a main base for the content
- UX Ticket grooming session

## 2024-02-12
Attendees: Angela, Hieu, Jessica, Katelyn, Kristen, and Alex.

- TERA: The team wants HEC to confirm that TERA information may be passed along to their EHR Records (Clinical Records in VISTA).
  - Kristen notes that from the MSA side, there are so many 'flags' on the record.
- Hieu presents graphic screens and page counters for Military Info and TERA on EZR.
- Registration Only workshop: The team discusses the possible use of chat and calling on people to make the session more interactive.

## 2024-02-05
Attendees: TBD

- Update on our proposed approach for SiP sections on EZ and EZR:
    - Component we plan to use is on the [design system site](https://design.va.gov/components/card#claims-status) and is live to 100% of users in the claims status tool
    - Auth Exp is also looking to implement this component for their Claims and Appeals section
    - Do we want to consider implementing this solution without formal usability testing? We could still plan to get feedback on it when we do testing
    - The only caveat is that we'd be using it a little differently than it's used for claims since we're alerting the user to unfinished form content

## 2024-01-29
Attendees: TBD

- UX Grooming: can we review the UX work spreadsheet and clean it up? It's a bit messy with some icebox work, completed work, etc.

## 2024-01-22
Attendees: Angela, Hieu, Jessica, Katelyn, (Heather and Kristen for second half)

- Mini UX Refinement Session
- Opened UX Work Spreadsheet and reviewed items
- Also reviewed Figma spreadsheet with assignments by page

- When Kristen joined - pivoted to talking about Toxic Exposure questions
- She will be helping to connect our team with the 526 team
- Reviewed current status of the draft and flow of questions
- Outstanding SME questions, esp around short form
- Wondering how/when to end question flow - if answer yes to one, skip the remaining. Depends on how ES is going to be built, a yes/no boolean value or the details of each individual question?


## 2024-01-16
Attendees: Angela, Hieu, Jessica, Katelyn, Heather, and Kristen.

- Toxic Exposure
    - We already have the Mural and a PACT Act wizard (check eligible then apply for 10-10).
    - Kristen mentioned that the OCTO team had some recent related research with Nina synthesizing this week and Kristen will do a first path.
    - Step 1 is to gather all the information.
    - There are talks of adding this information to the 526. If that is the case, how can that information be captured so the Veteran does not have to fill out the same information in the 10-10. Is there another backend system that connects this information? Is the Enrollment System ready for this information?
    - "If the answer is YES for X, does it mean they don't have to answer the following question?" Map the workflow after the initial discovery step.
    - The veteran wants to be asked the questions again when the definition of Toxic exposure changes.
- OCTO Presentation
    - Print PDF to Kristen.
    - Re-word the text for HEC focused on wanting to stay true to the paperform.
    - Note that it is a new FORM, step 1 is MVP, with the following steps including Notification workflow.
- Registration-only Update
    - Jessica started a rough script, Angela will read it.


## 2024-01-08
Attendees: Angela, Hieu, Jessica, Katelyn, And Heather

- Error Matrix - The team decide that Github would only hold the link while the Mural would have the Source of Truth.

- Team discussed the use of the UX ticket spreadsheet has a place to organize and plan the tickets.

- EZR MVP UAT presentation for HEC
    - Angela presented the current slide deck.
    - Team discuss the possible Next Steps to present: EZR V2 including short-form (Recommendation 1), the Review/Sub-task flow (Recommendation 3), and the Post-MVP usability research (recommendation 2). Angela will talk to Alex in regards to the overall priorities, including NoK/EC. And we should include that all of these features will be incrementally released. 

- Team discuss the possibility of presenting the Registration Only work to the OCTO. There were two schools of thought; present sooner to show the struggle with a reluctant stakeholder or present later in hopes of capturing some progress through workshops. 

## 2023-12-18
Attendees: Angela, Hieu, Jessica, Katelyn, And Kristen

- Figma: The team notes that Multiple Component Card is not yet a Figma Component

- EZR MVP Veteran Testing: Heather is looking for Veterans to test the end-to-end form. We would be looking for lower Priority Group (Veterans that would be required to provide financial information).

- Registration: 
  - Team discussion potential next steps as we like the hub approach the VES team represented, it aligns with the Veterans’ mental model. 
  - The difficult part is how to tell that story to the HEC stakeholders. 
  - Katelyn notes the HEC likes to have visuals to share, perhaps we can create a Journey Map in PDF for them.
  - Jessica notes the importance of including the HEC folks in some of the process (Veteran’s journey map, study quotes).

- Updated Dependent Flow
  - Only updating copy in at the Education Expense if the user adds more than a zero in gross annual income.
  - Flow has to be simplified, no longer a technical burden.

- After the EZR MVP launch
  - Kristen brought up Facilities API. The drop-down is dated and does not connect with current data. Jessica notes that CareGiver’s facility has similar functionality we can utilize.


## 2023-12-11
Attendees: Angela, Hieu, Jessica, Katelyn, Kristen, and Alex

- EZR research - Katelyn to reach out to design Platform peeps to get the team on the schedule for end of January to present at the Monday VA design/research/content sync, Hieu to start work on a combo presentation deck (will need to open a ticket for this)
  
- EZR research - Alex, we want to present to HEC at some point in January too; future parking lot planning item to chat more

- Dependents verbiage/flow - the flow updates we are in agreement; will work with Aliyah this week to get the reported income content draft created. Noting here to tackle later - in the future see if the income questions on the form can be simplified down to what really impacts health care benefits.

- SIP - more looking into the other teams and what version they have; working on getting CodePen templates setup for testing

- Registration - Need to schedule a research readout for this week first, then a workshop session either next week or after the new year/Holidays. Workshop session  registration next steps and mapping.

- Kristen's comment:
    - Recommendation: does not have to be limited to the product/team, think of it as a holistic service.
    - For Registration, what would be the ideal workflow for the Veterans?


## 2023-12-04
Attendees: Angela, Hieu, Jessica, Katelyn, Kristen, and Alex


- EZR research - Katelyn to reach out to design Platform peeps to get the team on the schedule for end of January to present at the Monday VA design/research/content sync, Hieu to start work on a combo presentation deck (will need to open a ticket for this)

- EZR research - Alex, we want to present to HEC at some point in January too; future parking lot planning item to chat more

- Dependents verbiage/flow - the flow updates we are in agreement; will work with Aliyah this week to get the reported income content draft created. Noting here to tackle later - in the future see if the income questions on the form can be simplified down to what really impacts health care benefits.

- SIP - more looking into the other teams and what version they have; working on getting CodePen templates setup for testing

- Registration - Need to schedule a research readout for this week first, then a workshop session either next week or after the new year/Holidays. Workshop session - registration next steps and mapping


---


## 2023-12-04
Attendees: Angela, Hieu, Jessica, Katelyn, Kristen, and Alex

EZ/R issues discussed
- Research Synthesis
    - Findings were not launch blocking
    - Every participant had minor hiccups and things they would like to clarify but it is not consistent location where that occurs. 
- Status, PendingMT is Post MVP
    - Content has looked at the info.
    - For MVP, we will skip the financial information if they already done the Means Test.
- Education Expenses question verbiage
    - Team found that education expense verbiage is awkward.
    - Jessica notes that it is more about dependent age vs dependent income. Currently, the conditional is based on the depedent's age when it should be around the dependent's income.
    - The main question: how is this information impacting the veteran health care?
- EC/NOK
    - There is a max/min number of EC and NoK within the Enrollment System?
    - Alex notes that we're should start with only one EC/NoK
    - Question for dev: does it wipe the data of the previous one when you ending a new one?
- Save-in-progress
    - Update for Kristen; the team wants to appoarch this problem and solve it correctly the first time.
    - Note for Frontend stating that feature flag does not work here since the team does not have access to the the form data functions. We should consider CodePin.
    - Angela to clarify the feature flag with Matt Long.
    - Kristen ask if this can be tested with other feature of the EZR? The team notes that is the intention.
- EZ Intro Page
    - Flagged by platform because it has subway stepping component. There is a recommendation to go towards the current, shorter introduction page standard.
    - Current Alert is flagged because it is not in current form library. But this alert pushes the user to sign in to get current status.
    - Kristen: Did the 526 dropped the Alert from the top? Conceptually, the layout is the same the 10-10 team. Jessica will look into that.

Registration issues discussed
- Registration Tree Test
    - 35 test completed
    - Team starting to synthesis the study.
    - Not much succecss with where we hypothesize.
    - The testers wants an apointment schedule as part of the process.
    - VS is excited with the disability section.


## 2023-11-27
Attendees: Angela, Jessica, Hieu, Katelyn, Kristen, and Alex

EZR issues discussed
- Save-in-Progress
    - The main consideration is a visual alert, similar experimental design of the Platform System team.
    - Option 1: alert message within the multiple-response component card.
    - Option 2: alert above the card, with the name listed.
    - Kristen inquired if the component had been tested with the alert. Angela later confirmed that it had not been tested.
    - Team needs to discuss with Dev if it is possible to bring the user to the incompleted page.
    - The team has not discussed or mocked what this would look like on the Review Page.
- Mean Test Status, Alert (Pending vs Enrolled)
    - For the MVP, the team is thinking of several slim alerts. (Enrolled, Pending, and already filled out before the household financial section).
    - MVP consideration: Should we consider blocking access to EZR if they already have a Mean Test for the current year? Kristen notes that the main reason for EZR is to capture the Mean Test and we currently have Enrolled terminality, this will require a Content update.
    - Discuss if the "mean test" is something the Veteran would understand. Kristen notes that the VA is looking to deprecate that term.
    - Questions the team needs answering: what is the number of Veterans on the Pending List? Does enrollment change from Enrolled to Pending on Jan 1st?
- The team notes that the MVP bugs are on the Dev's hand
- Research Synthesis can be discussed on Tuesday since SIP and Mean Test alert is a priority.


## 2023-11-20
Attendees: Angela, Jessica, Hieu, Katelyn, Kristen, Heather and Alex

EZR issues discussed
- A need for an alert on the EZR intro page when a Veteran has a status of PendingMT or Pending other, we talked about if this could be in phase 2 and MVP would only be for those who are already fully enrolled.
- Thought of after the call… should the pendingMT alert on the EZ include a link to the EZR once it goes live?
- Will work on a draft, but has other implications and talking about v2. We won’t be able to get early content review until next week. 

Hieu - UX issues found during Friday’s research UAT session
- Review page when you try and edit Medicare Part A yes/no question and click Update Page run into an error - ticket #70261
    - Kristen notes that it is a Form Library issue, Review Page is heavily controlled by them.
- Save in progress link button resets yes/no on the Mailing Address page - ticket #70258

Insurance page 
- Agreed with the arrangement of moving additional info component into main content as short term solution
- Discussed pattern implications of current and future state with use cases including when prefilled and if that information would still be valuable

EZ Intro page topics
- Reviewed drafts. 
- Follow up with forms / design system team on if the heading “What to know… “ is locked in or if we could adjust that.
- Changed numbered headlines from stepper into h2s utilizing the newer page template
- Also follow up to see if other teams have template or if there are/will be form templates for intro pages when an authenticated user has interacted with a form previously and/or was approved/denied

Design will schedule a follow up meeting tomorrow on the save in progress pattern issue

## 2023-11-13

Attendees: Angela, Jessica, Hieu, Katelyn

- Team discussed the minor changes in the conversation guide of the EZR MVP UAT: added instruction to sign in to a backup account, moved the "beta version" blurb closer to the scenario, and added a blurb at the Review section.
- Coordination with Sara Sterkenburg on MHV team to update the link on the MHV Landing Page: we have looped her in a while back but will waiting for an exact launch date before pinging her team to the link.
- Jessica noted that most SHOULD feedback items on the STAGING REVIEW comment have been picked up or it is a Form's Library limitation/constraint.

## 2023-11-06

Attendees: Angela, Jessica, Hieu, Katelyn, Kristen, Alex, Heather, Emily

- Team discussed the submission dependent error (applies to all Mutilple Response components and how to approach it.
- Short-term approach for the Contradictory alerts and contents:
    - Staging is using the v1 Stepper Component that contains the “We’ll save your application on every change. Your application ID number is ####.” message.” This is part of the forms library, it cannot be changed.
    - The Sketch mockup uses v3, which does have the message. Once the form library is updated, dev can update the Stepper to v3.
    - The solution: remove the “Finish this application later” function for the Multiple Response section and add a warning stating they must complete the required field in this section.

- We discussed how discovery works needs to be done on the multiple components.
    - Why doesn’t pre-fill work on this component? 
    - If “query’ requires each page to have a unique URL, can we have multiple URLs? How does this work with multiple dependents? 
    - How are other teams approaching this? Tabs you can edit? Task-list, sub-task? 
- Can we incorporate a generative study? 
    - UAT, upcoming Nov 13-22: leave as is.
    - Usability Study in the middle of January: maybe
- We discuss how this work also revolves around EZR V2, Review & Confirm flow. And it would be good to jump-start it.

## 2023-10-30

Attendees: Jessica, Hieu, Katelyn, Kristen, Alex, Heather, Emily


- EZR MVP Research
    - Went over conversation guide:
    - How should the participant get to the static page? The team thinks it is a better scenario to have the Veteran update their Insurance.
    - UX should ask the developer for update, and staging links since we want to submit research ASAP.

- Midpoint Review
    - UX should have Assistive Tech user for Usability Research (in December)
    - A MUST-change (launch blocking) for the Review Page, wording on the Agreement. Team must confirm with HEC SME.
    - Design MUST: Reviewers wants the Additional Info to be shorter, more in line with the Guidelines. While lengthy, the content in the household is needed. The team feels the need to push back.

- Registration Tree-Test:
    - Waiting for HEC to respond.
    - Mural Presentation, we had (2) questions that needed answer.

- Team wants to hold Registration since EZR takes priority.


## 2023-10-23

Attendees: Jessica, Hieu, Kristen, Alex


- Went over registration presentation deck
- Talked about reframing the deck outline to be focused on the scenarios and remove the other slides
- Use examples and Sketch wireframes within the scenario examples instead of at the end of the presentation
- Talked about cohorts for registration tree test; focusing on most being unenrolled but a cohort or two of enrolled with disability ratings. 



## 2023-10-16

Attendees: Jessica, Katelyn, Hieu, Kristen


- Talked about EZ intro page for those who are already enrolled and the adjustments needed once the EZR goes live
  - Next steps: 
  - Consider changes to the content around updates to benefits, the two headline sections could be combined
  - Look at both primary and secondary action links in the design system
  - Consider the only call to action on the page to be the "update benefit" button.

- Talked about the Registration updates late last week and how to re-approach the problem
  - Next steps:
  - Working sessions for research questions and research goals
  - Once those are refined; begin thinking through research methods/logistics

## 2023-10-11

Attendees: Jessica, Katelyn, Hieu, Kristen


- Reviewed Registration Flow Exploration and Matrix comparrison work and discussed the pros/cons/differences between each of these
- Also talked about variations of the flows and what would make sense MVP term and ideal state, what mvp could build up/set the foundation for the ideal state
- Decided on a flow variation where on the intro page there is a Veteran and non-Veteran split/ action links, followed by a prioritization wizard.
  - Followed by a prioritization wizard
  - Consider the short-form as part of the MVP
- The business logic (unauthenticated) flow is the backup.
- Next steps to create wireflow of mvp direction and share back with team


## 2023-10-02

Attendees: DK, Katelyn, Jessica, Kristen

- EZR - insurance section to match ez regarding headlines (h3-ish). We won't introduce new field set legends for mvp.
- EZR Research Planning - started talking about research goals and who to recruit. Looking towards 2 cohorts with different disability ratings, those over 50% and those under 10%. Talked about starting the convo guide at VA.gov and not on the form intro page so we can learn more about the wayfinding side of it and if there is confusion between the static and intro pages
- Registration Research Synthesis - went over Mural board and first draft of key findings; going to add in more details and examples around some of the findings like the learning curve, burden of proof and the benefits overlap from the Veteran's perspective. More chats to come on recommendations and next steps


## 2023-09-18

Attendees: DK, Katelyn, Jessica, Hieu

Mostly a working session on EZR screens.

## 2023-09-11

Attendees: DK, Katelyn, Jessica, Hieu

Mostly a working session on EZR screens.

## 2023-09-05

Mostly a working session on EZR screens.

## 2023-08-28

Attendees: DK, Katelyn, Jessica, Hieu, Kristen

A few quick notes from the session, which was mostly about the EZR work:

- Decision: Show statuses on first page and every section.
- Need to check with engineers about save data to PDF form.
- In aggreenent to ditch the stepper if possible.
- [Post MVP Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1693945362104/f2d83704cf9de28206d5cb28e1b188a3f87b96e9?sender=ubf5503bf47b6eb1e92730053) to track future enhancements.

## 2023-08-21

Attendees: DK, Katelyn, Hieu, Kristen, Alex

A few quick notes from the session, which was mostly about the EZR work:

- We probably don't need the stepper on the form intro page. Check with Matt L. on nixing it.
- Work on next appointment language could be helpful. Check with that team.
- Check on application vs. form language with content.
- What happens when people with account go into form, but aren't enrolled and can't apply? We need an alert for this.
- Need a ticket for error messages. Look at the EZ for inspiration here.

## 2023-08-14

Attendees: DK, Katelyn, Hieu, Kristen, Emily, Alex

**EZR form wireframe**: Hieu

- Jessica's feedback in Sketch all straight forward and had no main questions or challenges.
- DK's feedback around one thing per page: Can we still combine fields that can't be changed? DK: Yes, it was a concern and possible feedback that Collab Cycle folks might have. But it can still be explored.
- Kristen to review the wireframes this week.

**Research synthesis**: Katelyn

- Katelyn to carve out slides/sections she wants to work on in HEC deck and Mural.
- Katelyn to make a working session for today to team can collaborate on synthesis more.

## 2023-08-07

Attendees:

**Research sync on current research + synthesis**: All

- Research is showing Profile would be the best location for EZR info. We'll need to have the conversation with PRA folks. Alex to set up a meeting with them, Kristen and Patrick when Patrick is back from vacation.
- One middle ground might be to link to a separate EZR form from the Profile, if we have to walk in both worlds of a separate form and putting it in a location where Veterans want it. Still working both angles: Profile and separate form flow.
- Designers will meet to walk through submitting for Household study.

**EZR wireframe**: Hieu

- Showed spreadsheet with field comparison. Will work on wireframe of separate form flow next.
- Look at Pre-checkin for confirm flow.
- Could be a technical limitation because of Check-in confirm flow not being in forms library. Chat with engineers about the possibilities there.

## 2023-08-01

Attendees:  DK, Jessica, Katelyn, Hieu, Kristen, Heather, Alex, Fletcher

**Research organization and planning**

Prototype study: Could tackle the PRA stuff if it's strongly Profile direction. If not, back to the drawing board.
Mobile app is looking into Priority Groups. Touch base with them on research.

- Add in video check at end.
- Priority Group: Didn't know. Could we relate to disbility rating.
- Disability rating and financial ratings: How to this interplay? How is it used by other benefits? Maybe check out financial hardship form.
- Deadline remains the same for EZR whether it's a form or in Profile.

**Registration only study feedback** 

- Leave the priority group questions in this research.
- Good idea to show print version of the current state form.
- Ask about changes to ideal state after seeing the print form or an example.
- Cohort 1: Does warmup question make sense for folks who didn't enroll? Maybe it's around care? Delete for question, but keep second one.
- Third topic, first question: Break this question up some.
- Cohort 2: Warmup, maybe follow up on what kind of activities they do.
- First topic: Maybe too many questions for 10 minutes?

**Household study**

- Overlap. Will we need to get the prototype ready?
- Go lighter on Household section.
- Focus on one thing vs. all three studies.

## 2023-07-24

Attendees:  DK, Jessica, Katelyn, Kristen, Heather

**Research organization and planning**

We talked through logistics for our upcoming studies. The goal is to have a primary lead for each research activity and a backup. Two people would take each study.

- Katelyn to lead synthesis on FD
- Hieu to lead prototype next steps
- Hieu/DK to take planning on prototype research
- Jessica/DK on Household study
- Registration-only: Jessica/Katelyn to take lead
- Katelyn in Hawaii for Labor Day
- Sign up for mod. sessions.

[Full planning available in the research planning Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1686254946051/07405f6e988a0541dc0983cc5e286ba6fe612cf8?wid=189-1652380184686).



**Registration-only stuff**

- Same disclosure depending on registration-only flow? Not different for paper form. Still have to agree.
- Still some questions around the priority of the flows.
- Kristen/Patrick: Where should it be in the C&P process?
- This is early work so more coming.

**Memorable date component**

- Version 3 has month picker by name vs. date number. Maybe easier cognitively. Hasn't been tested by Veterans.
- How many date fields on EZ? Three/four or more. CG is a better testing ground.
- Maybe tradeoffs for each one would be better to see it all.
- Katelyn to make a list of tradeoffs for each path and share.

## 2023-07-17

Attendees:  DK, Jessica, Hieu, Katelyn, Kristen

**EZR Research**

- Jessica with where we're at in getting research scheduled.

Action items:

- Send note to Robyn for research heads up. Waiting for AE feedback.

**HEC presentation for EZR work**

- DK to run through rough slides/presentation.

Action items:

- Add questions to slide deck.
- Ask about process in design

**Date Input vs. Memorable Date**

- Katelyn to review desk research on these components and lead discussion with designers about direction

Action items:

- Ask about forms design system and memorable date component
- Ask about launch date for component in design system
- Look into accessibility research

## 2023-07-10

Attendees: DK, Jessica, Hieu, Alex

**EZR related wireframes and meeting prep (Hieu)**

- We mostly talked through a strategy of how to pitch the EZR-related work in the Profile area of VA.gov.

**EZR related research (Jessica)**

- This mostly feels like it's in good shape after Jessica talked through it. No major feedback or changes.

## 2023-06-26

Attendees: DK, Jessica, Hieu, Katelyn, Kristen

**EZR discovery ticket (Hieu)**

- [Discovery for Veteran Information Editing](https://github.com/department-of-veterans-affairs/va.gov-team/issues/58542): This ticket feels too big since scope changed. Let's take that back to Heather and Alex and see what we can do with it.
- We still need to do some sythesis on the Pittsburgh and Martinsburg research calls.

**Priority Group/Financial Info research (Jessica)**

Some big takeaways from this discussion:

- Let's do some more desk research to see what other teams have insight that can help with our current research efforts. Jessica has [notes in her Mural board](https://app.mural.co/invitation/mural/departmentofveteransaffairs9999/1687381992402?sender=u773b824999f25f58b8e77486&key=2694912f-19c7-4254-8e86-ce74e6a4bdf0).

- Things to consider for Priority Group: unclear on what type of information can be shared with the Veterans. What is the tradeoff to showing that information? Should we be showing the overview definitions or the individualized PG?

## 2023-06-19

Attendees: DK, Jessica, Hieu, Katelyn, Kristen

**Progress bar/stepper (Hieu)**

Questions:

- What does our research say about the bar/stepper? Is it needed?
- Does this component still solve a problem Veteran has?
- What's the opportunity to interact with it? Maybe it becomes navigation in the future?

**CG business feedback (Katelyn)**

- Talked through a few potential copy changes. Katelyn to share those with content folks ahead of time off.

**Pittsburgh research call review (all)**

- Follow up on benefits packet to see the content.
- Cover roles in future call. Follow up on past call.
- Watch magic wand scenios for thoughts on tension between HEC center and employees at centers.

**Action items**

- Hieu to connect with forms design team and explore different options.

## 2023-06-12

Attendees: DK, Jessica, Hieu, Katelyn, Kristen, Alex

**VA 1010EZ Staff Research Questions**

We brainstormed questions for interviewing staff, done in these two Mural boards:

- [EZR discovery](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1684943221068/4b11f2d1902d05f12f53468263a561c2d5a460a9?wid=0-1684949791097)
- [EZ Registration-only path discovery](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1684348883203/49fc4ff1bf31f3cabe200663708c1002645b447f?wid=0-1686000958778)

## 2023-06-05

Attendees: DK, Jessica, Hieu, Katelyn, Kristen

**Registration-only (Jessica)**

- Jessica has a board with questions to answer via research.
- We talked through early reseach questions and what we're still missing as far as questions.

**EZR (Hieu)**

- Hieu walked us through the EZR Mural board and process flows he's created.
- We decided he's in a good place until we dig up more information through the scheduled meetings Alex is working on.

## 2023-05-29

- No meeting (holiday)

## 2023-05-22

Attendees: DK, Jessica, Hieu, Katelyn, Kristen

**Introduction**

Kristen McConnell introduced herself as part of OCTO, works with Patrick Bateman, and will be in all of the syncs. She is part of the health team, the design and research lead, and the appointment lead. She wants to encourage the team to think very broadly, beyond the scope of one project.

**Registration only path**
- Jessica showed off her early discovery efforts on the registration only path. It's early still and there are a lot of unanswered questions.
- Kristen: Think broadly with this research. Maybe onsite research? What setups in E&E offices would you need? We can provide a list of requirements for the sites.
- Kristen: Do we need triggers on other pages? What are the access points and should they be more strategic?


**Designer skills**

We came up with this rough list during the meeting:

Visual design
Interaction design
Discovery work
Research
  - Planning
  - Analyzing
  - Running it
Content
  - Plain language
  - Microcopy
  - UX writing
Design system
IA
Systems-level thinking
Journey mapping/Flows/Service design
Accessibility
  - Design reviews
  - Audits
QA work
Stakeholder management
Storytelling
Presentations
Running meetings
Workshops
Internal advocacy

### Action items

- DK: Create a skills spreadsheet, starting with what we've brainstormed here.

---

## 2023-05-15

Attendees: DK, Jessica, Hieu


**Headline and Radio label design discovery**
- Hieu walked through two examples for both radio buttons and h3s on the 1010EZ.
- Broadly, the group felt like the explorations would improve things for Veterans, but only incrementally. It avoids the real challenge, making the questions h1 elements and deemphasizing the progress bar.


**Misc Item (Tabled items; if time chat about next meeting)**
- Any onboarding related questions?
- Designer interests and experiences list
- Content process ideas
- Source of truth - what lives where - Sketch, Mural, Github

### Action items

- Hieu to update ticket and recommend we work on the bigger problem instead: h1 and progress bar.
- The team should think through how it can contribute to that work broadly.

--- 

## 2023-05-08

Attendees: DK, Jessica, Katelyn, Hieu, Matt K.

**Katelyn showing designs for an improved primary/secondary caregiver clarification experience.**

- Experimented with different versions of a table, featuring primary/secondary caregiver differences. Great for scanning. Could be a challenge on mobile. Check color contrast and design system contraints/experiemental patterns for table visual treatments. 
- Started with DK's copy, and it feels like a lot of copy no matter how you arrange it or what components you use.
- Introduction page updates so it uses design system intro patter/progress component
- Additional info component feels like a crutch here. Also, modals won't work well either. Maybe this is a good reason to explore altering the flow?

### Action items

- Katelyn to do some work on a next round of designs and bring it to our next meeting.
