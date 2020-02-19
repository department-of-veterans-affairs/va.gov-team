# VSP Collaboration Cycle

So you’re starting a new project — congratulations! This is a guide to required Veteran-facing Services Platform (VSP) collaboration points, written for all Veteran-facing Services (VFS) teams building on VA.gov. VSP’s mission is to provide a framework comprised of systems, tools, processes, documentation, and customer support, that helps VFS Teams create successful VA.gov products.

The VSP Collaboration Cycle was created for medium-to-large VFS work initiatives. Not sure if this process applies to your project? Not sure how your edge case fits in? Ask us in #vfs-platform-support and we’d be happy to help customize a plan! 


##### Table of contents
* [Project Kickoff](#project-kickoff)
* [Design Intent Collaboration](#design-intent-collaboration)
* [Usability Testing Prep](#usability-testing-prep)
* [Research Plan Review](#research-plan-review)
* [Information Architecture (IA) Request](#information-architecture-ia-request)
* [Analytics Request](#analytics-request)
* [Contact Center Review](#contact-center-review)
* [Privacy and Security Review](#privacy-and-security-review)
* [Staging Review](#staging-review)
* [Full Accessibility and 508 Office Audit](#full-accessibility-and-508-office-audit)
* [Post-launch Check-in](#post-launch-check-in)



# Project Kickoff
Start off by introducing your team and VSP to your new work initiative. Discuss existing solutions in the problem space, align team member expectations, and collaborate with VSP to identify any areas that may need additional support.

## Timing
- Development stage: **Define**
- When you understand the problem you’re trying to solve (you don’t yet need to know exactly how you’re going to solve it).

## Collaboration format: 30-minute meeting

### Request process
**VFS Product Manager** initiates scheduling by submitting ZenHub issue — use `Project Kickoff` issue template _(select in ZenHub dropdown or click [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=andreahewitt-odd%2C+meganhkelley&labels=product+support%2C+content-ia-team&template=project-kickoff.md&title=Project+Kickoff+%5BFeature-Name%5D) to open a ticket)_. VSP will schedule the meeting. Meeting is recorded.

### Meeting attendees
- VFS brings: 
  - Your Product Manager (required)
  - Your DEPO Product Lead (required)
  - Your entire VFS team (recommended)
  - Any other stakeholders you want to invite
- If VFS team is part of VSA contract, also include as optional: Accessibility (Jennifer), QA (Tze), Design (Shawna), Product (Mickin)
- VSP brings (all optional): 
  - Design (Crystabel & Emily)
  - Accessibility (Trevor)
  - Content (Peggy)
  - Information architecture (Mikki)
  - QA (Peter)
  - Product (Megan and/or Andrea)
  - Analytics (Joanne)
  - VSP’s DEPO co-leads (Kevin)

### Artifact inputs 
You bring: 
- A rough draft of your [product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/product-outline-template.md) (stored in appropriate GitHub `va.gov-team/products` folder)
- An explanation of the problem space
- Any other artifacts you have so far
- You **do not** need to prepare a presentation

### Outcomes and artifact outputs
We’ll work together to identify any areas of your project that need additional support or collaboration. Follow-ups and areas to expand upon should be called out in this meeting and scheduled after the fact. 

## For further support at this point
Reach out via Slack #vfs-platform-support with any questions, and you’ll be directed to the correct resource.

---

# Design Intent Collaboration
Present a draft of your ideas to VSP and other expert designers. Learn about existing design components and research findings relevant to the problem space. Discuss accessibility considerations with accessibility experts.

## Timing
- Development stage: **Define**
- When you are brainstorming and drafting your solution approach.

## Collaboration format: 30-minute meeting

### Request Process
**VFS Designer or Product Manager** initiates scheduling by submitting ZenHub issue — use `Design Intent Collaboration` template _(select in ZenHub dropdown or click [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=andreahewitt-odd%2C+meganhkelley%2C+crystabelreiter%2C+emilywaggoner&labels=product+support&template=design-intent-collaboration.md&title=Design+intent+Collaboration%5BFeature-Name%5D) to open a ticket)_. VSP will schedule the meeting. 

### Meeting attendees
- VFS brings: 
  - Designer(s) from your product team (required)
  - Product Manager (optional)
  - DEPO design lead (required as applicable)
- If VFS team is part of VSA contract, also include as optional: Accessibility (Jennifer), Design (Shawna)
- Design experts bring: 
  - VSP designers (Emily and/or Crystabel) - required
  - Accessibility (Trevor) - required
  - DEPO platform design expert (Kevin H) - optional

### Artifact inputs
You bring:
- Whiteboard sketch or other lo-fi prototypes or mockups
- A general idea of the toolset you intend to use in your designs

Design experts provide after the meeting:
- A list of relevant design components and patterns (with URLs)
- A list of existing applications or pages with similar execution or patterns with URLs in staging

### Outcomes and artifact outputs 
- Design and accessibility expert feedback (including relevant components, patterns, apps, test accounts, existing research, and notes on accessibility approach) is documented in ZenHub. 
- Product designers have a thorough understanding of other existing and in progress products, components, and patterns, to pull from in the VA.gov ecosystem. 

## For further support at this point
Reach out to design experts in Slack #design.

---

# Usability Testing Prep
Meet with VSP practice area reviewers to confirm that your prototypes or mockups are consistent with existing patterns and standards. Get feedback and ensure that your product is ready for successful usability testing. 

## Timing
- Development stage: **Discover**
- When you’ve determined your initial solution approach and you have prototypes or mockups ready for usability testing, before you begin scheduling testing

## Collaboration format: 30-minute meeting 

### Request Process
**VFS Product Manager** initiates scheduling by submitting ZenHub issue — use `Usability Testing Prep` template _(select in ZenHub dropdown or click [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=andreahewitt-odd%2C+meganhkelley&labels=product+support%2C+content-ia-team&template=usability-testing-prep.md&title=Pre-Usability+Review+%5BFeature-Name%5D) to open a ticket)_. VSP will schedule the meeting.

### Artifact inputs
You bring: 
- Link to product outline ([template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/product-outline-template.md))
- Link to or attach prototype or mockups
- Link to research plan ([template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-plan-template.md)) and script ([template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md))
- Link to regression test plan ([learn more](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/qa-artifacts.md#regression-test-plan)) (if there isn't already a regression test plan for this feature in TestRail) _for QA practice area review_
- Link to test cases/test plan in TestRail ([learn more](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/qa-artifacts.md#test-plan)) (even if just a draft) _for QA practice area review_
- **_Please provide these artifacts at least 2 days before the scheduled review meeting._**

VSP brings:
- Feedback on the artifacts you’ve provided from the following practice areas: design, accessibility, content, QA, and optional: information architecture (IA), product

### Outcomes and artifact outputs
- VSP’s feedback regarding the artifacts you provided is documented in ZenHub.
- We’ll use the 30-minute meeting to go over high-level feedback for each practice area, and identify areas that might need further support. 

### Meeting attendees
- VFS brings: 
  - Product manager (required)
  - DEPO product lead (required)
  - Anyone else from your team who significantly contributed to the artifacts provided (required)
- If VFS team is part of VSA contract, also include as optional: Accessibility (Jennifer), Design (Shawna), QA (Tze)
- VSP brings: 
  - Design (Crystabel & Emily) - required
  - Accessibility (Trevor) - required
  - Content (Peggy) - required
  - Information architecture (Mikki) - required
  - QA (Peter) - required
  - Product (Megan and/or Andrea) - required
  - VSP’s DEPO co-leads (Kevin) - optional
  - Analytics (Joanne) - optional

## For further support at this point
Reach out to Platform team in Slack #vfs-platform-support with any questions, and you’ll be directed to the correct resource.

---

# Research Plan Review
Get approval from DEPO’s research expert on your research plan and script. Begin recruitment of Veterans for research.

## Timing
- Development stage: **Discover**
- A week before you plan to conduct user research (during `Discover` or any other development stage)

## Collaboration format: asynchronous

### Request Process
**VFS Product Manager or Designer** message Lauren Alexanderson (@Lalexanderson) with your research plan and script

### Artifact inputs
You bring:
- Link to research plan ([template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-plan-template.md)) and script ([template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md))

### Outcomes and artifact outputs
- DEPO's research expert provides feedback on your research plan
- As applicable, approval is granted to begin recruiting participants via Perigean 

## For further support at this point
Message Lauren Alexanderson (@Lalexanderson) in Slack or reach out in the #design channel.

---


# Information Architecture (IA) Request
Collaborate with VSP’s Information Architect to finalize your URL and other key details before developing in staging. VSP’s Information Architect has a high-level view of the entire VA.gov experience and can help ensure that your new or updated content fits well in that ecosystem.

## Timing
- Development stage: **Discover**
- After usability testing, when you’re ready to begin building in staging

## Collaboration format: asynchronous

### Request process
**VFS Product Manager** initiates by completing `IA Request` template in ZenHub _(select in ZenHub dropdown or click [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=andreahewitt-odd%2C+meganhkelley%2C+mnorthuis&labels=product+support%2C+content-ia-team&template=ia-request.md&title=IA+Request+%5BFeature-Name%5D) to open a ticket)_. VSP Information Architect provides feedback and finalized information architecture asynchronously on the ZenHub ticket.

### Artifact inputs
You bring: 
- Link to product outline ([template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/product-outline-template.md))
- Link to or attach prototype or mockups
- Link to research readout/results ([learn more](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/synthesis/how-to-do-research_synthesis.md))
- Link to [reseach history masterlist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md) showing that you have added your research to the list as applicable
- Link to or attach final content including H1s (if separate from prototype/mockup)
- (Optional) completed information architecture worksheet (in ZenHub template)

### Outcomes and artifact outputs
VSP provides:
- Finalized information architecture attributes

## For further support at this point
Reach out to Information Architecture resources (@Mikki @Megan Kelley) in Slack #vfs-platform-support with any questions.

---

# Analytics Request
Begin setup of Google Tag Manager and ForeSee so we can understand how Veterans are using VA.gov.

## Timing
- Development stage: **Discover**
- After you have defined your KPIs and are determining which frontend events would be beneficial to track on your application before you build.

## Collaboration Format: 30-minute kickoff meeting for Google Tag Manager

### Request process
**VFS Product Manager** submits request using `Analytics Implementation and QA Request` template for Google Tag Manager implementation _(select in ZenHub dropdown or click [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=joanneesteban%2C+jonwehausen%2C+nedierecel&labels=analytics-insights%2C+analytics-request&template=analytics-implementation-and-qa-request-template.md&title=Analytics+Implementation+or+QA+Support+for+%5BProduct%5D) to open a ticket)_. Slack #vfs-analytics for ForeSee setup.

### Meeting attendees 

#### Google Tag Manager Implementation
- VFS brings: 
  - Product manager (required): **name**
  - DEPO product lead (required): **name**
  - Frontend engineering point of contact (required): **name**
- VSP brings: 
  - Google Tag Manager specialists

#### ForeSee Setup
No meeting required; asynchronous collaboration.

### Artifact inputs

#### Google Tag Manager
You bring:
- Link to product outline ([template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/product-outline-template.md))
- Objectives and definitions of success (e.g. a specific user interaction or final URL) for the product
- Authenticated user logins for testing, when applicable
- The URL(s) for your product including any unauthenticated landing pages that precede the start of the tool. _For example, if your product is a multi-step veteran-facing tool, please provide the full path of URLs along noting any conditional logic that would take users to a different branch of URLs for the tool_

VSP brings: 
- Examples of goal funnels and conversions
- Suggestions and feedback on event naming
- Google Tag Manager configuration services

#### ForeSee
You bring: 
- The final staging and production URLs for pages you want the survey to appear on
   
### Outcomes and artifact outputs
* VSP will configure Google Tag Manager so that it will translate the code into a readable format for Google Analytics reporting
* VSP will configure the surveys published on your VA.gov URLs
* VSP’s support for analyzing resulting data

## For further support at this point
Reach out to analytics experts on Slack via #vfs-platform-support

---

# Contact Center Review
Ensure that VA call center representatives are prepared to help Veterans troubleshoot VA.gov.

## Timing
- Development stage: **Build**
- At least 4 weeks prior to launch for a brand new service, or at least 2 weeks prior to launch for a new feature in an existing service. The build on staging should be as complete and ready to launch as possible, but the priority is to begin this review with the required lead time (4 or 2 weeks).

## Collaboration format: asynchronous

### Request process
**VFS Product Manager** follows instructions on the [Contact Center Review page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/call-center/request-contact-center-review.md) to request a Contact Center review.

### Artifact inputs
You bring (refer to [Contact Center Review page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/call-center/request-contact-center-review.md) for further instruction): 
- Product Guide
- Product Video

### Outcomes and artifact outputs
- Receive feedback on the artifacts you created for Contact Center trainings
- Ensure that VA Contact Centers are prepared to help Veterans troubleshoot your product

## For further support at this point
Reach out to call center leads in Slack via #vsp-contact-center-support or contact @chante or @joanne in Slack.

---

# Staging Review
Get feedback on your completed build before rolling out to users.

## Timing
- Development stage: **Build**
- Before you begin rollout, allowing enough time to implement feedback

## Collaboration format: 30-minute meeting

### Request Process
**VFS Product Manager** requests meeting using the `Staging Review` template _(select in ZenHub dropdown or click [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=andreahewitt-odd%2C+meganhkelley&labels=product+support%2C+content-ia-team&template=staging-review.md&title=Staging+Review+%5BFeature-Name%5D) to open a ticket)_. VSP will schedule the meeting.

### Artifact inputs
You bring: 
- Link to product outline ([template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/product-outline-template.md))
- Link to [release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md) with the "Planning" sections completed (in each section: Phase I, Phase II, Go Live)
- Access information for the tool or feature in staging _**do not put staging credentials in your `va.gov-team` ticket; store or reference them in a .md file in the `va.gov-team-sensitive` repository**_
- Link to your [test plan](https://dsvavsp.testrail.io/index.php?/suites/view/2&group_by=cases:section_id&group_order=asc) in TestRail with [test results](https://dsvavsp.testrail.io/index.php?/runs/view/7&group_by=cases:section_id&group_order=asc) _for QA practice area review_ 
- Link to your [Coverage for References](https://dsvavsp.testrail.io/index.php?/reports/view/12) and [Summary(Defects)](https://dsvavsp.testrail.io/index.php?/reports/view/14) reports in TestRail _for QA practice area review_
- Link to your accessibility-specific test cases/test plan in [TestRail with test execution logs](https://dsvavsp.testrail.io/index.php?/suites/view/14&group_by=cases:section_id&group_order=asc) or [Github with a team member certification](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md) _for accessibility practice area review_
- List of known issues (with links to tickets when applicable)
- **_Please provide these artifacts at least 2 days before the scheduled review meeting._**

VSP brings:
- Feedback on the artifacts you’ve provided from the following practice areas: design, accessibility, content, QA, and optional: product, analytics, engineering

### Outcomes and artifact outputs
- VSP’s feedback regarding the artifacts you provided is documented in ZenHub.
- We’ll use the 30-minute meeting to go over high-level feedback for each practice area, and identify areas that might need further support. 

### Meeting attendees
- VFS brings: 
  - Product manager (required)
  - DEPO product lead (required)
  - Anyone else from your team who significantly contributed to the artifacts provided (required)
- If VFS team is part of VSA contract, also include as optional: Accessibility (Jennifer), Design (Shawna), QA (Tze)
- VSP brings: 
  - Design (Crystabel & Emily) - required
  - Accessibility (Trevor) - required
  - Content (Peggy) - required
  - QA (Peter) - required
  - Product (Megan and/or Andrea) - required
  - VSP’s DEPO co-leads (Kevin) - optional
  - Analytics (Joanne) - optional

## For further support at this point
Reach out to Platform team in Slack #vfs-platform-support with any questions, and you’ll be directed to the correct resource.

---

# Privacy and Security Review
Ensure your feature meets VSP's privacy and security standards.

## Timing
- Development stage: **Build**
- Before you begin rollout, allowing enough time to implement feedback.

## Collaboration format: 60-minute meeting

### Request process
**VFS Lead Engineer or Product Manager** uses `Privacy and Security Review` template _(select in ZenHub dropdown or click [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=gunsch&labels=product+support&template=privacy-and-security-review.md&title=Privacy+and+Security+Review+%5BFeature-Name%5D) to open a ticket)_

### Artifact inputs
- An architecture diagram, showing involved systems + data flows
- Description of any new publicly-exposed endpoints (vets-api or otherwise)
- Description of any new interactions with dependent services (i.e. vets-api --> ???)
- Description of any other security hotspots you're concerned about / want extra attention on
- **_Please provide these artifacts at least 2 days before the scheduled review meeting._**

### Outcomes and artifact outputs
- VSP provides a list of concrete action items that need to be addressed, or approval to roll out

### Meeting attendees 
- VFS brings:
  - Lead engineer (required)
  - Product manager (required)
  - DEPO product lead (required)
  - Anyone else on your team whose presence is needed to speak to the technical architecture and security concerns (required)
- If VFS team is part of VSA contract, also include as optional: VSA Engineering Lead
- VSP brings: 
  - Engineering experts (Andrew, others as needed)

## For further support at this point
Reach out to Platform team in Slack #vfs-platform-support with any questions, and you’ll be directed to the correct resource.

---

# Full Accessibility and 508 Office Audit
Accessibility experts complete a full accessibility audit and coordinate with the VA’s 508 office for feedback and approval.

## Timing
- Development stage: **Validate**
- As soon as your product is in production (can happen during a phased rollout after the first phase). 

## Collaboration format: asynchronous

### Request Process
**VFS Product Manager** use `Full Accessibility & 508 Office Audit` template _(select in ZenHub dropdown or click [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=1Copenut%2C+jenstrickland&labels=508%2FAccessibility%2C+product+support&template=full-accessibility-and-508-office-audit.md&title=Full+Accessibility+%26+508+Office+Audit+%5BFeature-Name%5D) to open a ticket)_

### Artifact inputs
You bring:
- Access information for the tool or feature in production _**do not put staging credentials in your `va.gov-team` ticket; store or reference them in a .md file in the `va.gov-team-sensitive` repository**_
- Link to your accessibility-specific test cases/test plan in [TestRail with test execution logs](https://dsvavsp.testrail.io/index.php?/suites/view/14&group_by=cases:section_id&group_order=asc) or [Github with a team member certification](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md) 

### Outcomes and artifact outputs 
- Accessibility experts identify any outstanding accessibility concerns with your product
- VA's 508 office reviews and approves (as applicable) your product

## For further support at this point
Reach out to accessibility experts in #vetsgov-accessibility in Slack.

---

# Post-launch Check-in 
Now that you’ve released your product and gathered some initial KPI data, evaluate your success and begin your plan for iteration. 

## Timing
- Development stage: **Validate**
- One month after "Go Live" (as defined in Release Plan - [template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md))

## Collaboration format: asynchronous

### Request Process
**VFS Product Manager** link to your completed Release Plan in Slack #vfs-all-teams and tag @AndreaHewitt

### Artifact inputs
You bring: 
- Completed [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md) with results populated, including answers written to the `Post-launch Questions` at the bottom

### Outcomes and artifact outputs
Begin thinking about how your product should be evolving based on the results you've reported.

## For further support at this point
Reach out in #vfs-all-teams with questions

