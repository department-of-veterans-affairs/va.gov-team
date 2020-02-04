# VSP Collaboration Cycle

So you’re starting a new project — congratulations! This is a guide to required VSP collaboration points, written for VFS teams building on VA.gov. VSP is here to support VFS teams to ensure that you are able to deliver reliable digital services that are continuously improving and work for people. 

##### Table of contents
* [Project Kickoff](#project-kickoff)
* [Design Intent Collaboration](#design-intent-collaboration)
* [Usability Testing Prep](#usability-testing-prep)
* [Research Plan Review](#research-plan-review)
* [Information Architecture (IA) Request](#information-architecture-ia-request)
* [Analytics Request](#analytics-request)
* [Contact Center Review](#contact-center-review)
* [Privacy and Security Review](#privacy-and-security-review)
* [Full Accessibility and 508 Office Audit](#full-accessibility-and-508-office-audit)



## Project Kickoff
Help VSP support you more efficiently and effectively throughout the collaboration cycle by connecting in the early stages of your project. Introduce your work initiative in this meeting so we can identify any areas that may need additional support. 

### Timing
Development stage: **Define**

When you understand the problem you’re trying to solve (you don’t yet need to know exactly how you’re going to solve it).

### Collaboration format: 30-minute meeting
VFS Product Manager initiates scheduling by submitting ZenHub issue — use Project Kickoff issue template. VSP will schedule the meeting. Meeting is recorded.

#### Meeting attendees
- VFS brings: Product Manager and anyone else you want to invite. If your team is part of the VSA contract, shared VSA resources such as accessibility and QA should also be invited. 
- VSP brings: design, accessibility, content, information architecture, and QA practice area reviewers. VSP’s DEPO co-leads are included as optional.

#### Artifact inputs 
You bring: an explanation of the problem space, a drafted product outline (stored in GitHub), and any other artifacts you have so far (such as lo-fi prototypes). You do not need to prepare a formal presentation. 

#### Outcomes and artifact outputs
We’ll work together to identify any areas of your project that need additional support or collaboration. Follow-ups and areas to expand upon should be called out in this meeting and scheduled after the fact. 

### For further support at this point
Reach out via Slack #vfs-platform-support with any questions, and you’ll be directed to the correct resource.

---

## Design Intent Collaboration
Present a draft of your ideas to designers. Learn about existing design components and research findings relevant to the problem space. Discuss accessibility considerations with accessibility experts.


### Timing
Development stage: **Define**

When you are brainstorming and drafting your solution approach.

### Collaboration format: 30-minute meeting

VFS Designer or Product Manager initiates scheduling by submitting ZenHub issue — use Design Intent Collaboration template. VSP will schedule the meeting 

#### Meeting attendees
- You bring: designer(s) from your product team. 
- Design experts bring: DEPO design expert (optional); VSP design (and accessibility optional) reviewers. If VSA, VSA design and accessibility also included experts. VSP information architect to be included as needed.

#### Artifact inputs
- You bring: whiteboard sketch or other lo-fi prototypes or mockups, a general idea of the toolset you intend to use in your designs
- Design experts bring: a list of relevant design components and patterns (with URLs); a list of existing applications or pages with similar execution or patterns with URLs in staging; a list of relevant test user accounts for auth apps.

#### Outcomes and artifact outputs 
- Design and accessibility expert feedback (including relevant components, patterns, apps, test accounts, existing research, and notes on accessibility approach) is documented in ZenHub. 
- Product designers have a thorough understanding of other existing and in progress products, components, and patterns, to pull from in the VA.gov ecosystem. 

## For further support at this point
Reach out to design experts in Slack #design.

---

## Usability Testing Prep
Meet with VSP practice area reviewers to catch anything in your prototypes or mockups that may detract from usability testing.  Get feedback on your test plan.

### Timing
Development stage: **Discover**

When you’ve determined your initial solution approach and you have prototypes or mockups ready for user testing.

### Collaboration format: 30-minute meeting 
VFS Product Manager initiates scheduling by submitting ZenHub issue — use Usability Testing Prep template. VSP will schedule the meeting.  (Suggested scheduling: during VSP reviewer office hours)

#### Artifact inputs
- You bring: prototypes or mockups prepped for user testing, your complete research plan, and a draft of your test cases and/or test plan. Please provide these artifacts at least 2 days before the scheduled review meeting.
- VSP brings: feedback on the artifacts you’ve provided.

#### Outcomes and artifact outputs
VSP’s feedback regarding the artifacts you provided is documented in ZenHub.
We’ll use the 30-minute meeting to go over high-level feedback for each practice area, and identify areas that might need further support. 

#### Meeting attendees
- You bring: your Product Manager and anyone else you want to invite (suggested: designer and/or content writer). If your team is part of the VSA contract, shared VSA resources such as accessibility and QA should also be invited. 
- VSP brings: design, accessibility, content, information architecture, and QA practice area reviewers.

### For further support at this point
Reach out to Platform team in Slack #vfs-platform-support with any questions, and you’ll be directed to the correct resource.

---
## Research Plan Review
Get feedback from DEPO's research expert on your research plan and script. 

### Timing
Timing: A week before you plan to conduct research

### Collaboration format: asynchronous
Message Lauren Alexanderson (@Lalexanderson) your research plan and script


### Artifact input/output

### For further support at this point
Message Lauren Alexanderson (@Lalexanderson)

---


## Information Architecture (IA) Request
Collaborate with VSP’s Information Architect to finalize your URL and other key details before developing in staging. VSP’s Information Architect has a high-level view of the entire VA.gov experience and can help ensure that your new or updated content fits well in that ecosystem.

### Timing
Development stage: **Discover**

When does this happen? After usability testing when you’re ready to build in staging

### Collaboration format: asynchronous
VFS Product Manager initiates by completing IA Request template in ZenHub. VSP Information Architect provides feedback and finalized information architecture asynchronously on the ZenHub ticket.

#### Artifact inputs
You bring: a completed information architecture worksheet (in ZenHub template)

#### Outcomes and artifact outputs
VSP provides: finalized information architecture attributes

### For further support at this point
Reach out to Information Architecture resources (@Mikki @Megan Kelley) in Slack #vfs-platform-support with any questions.

---

## Analytics Request
Begin setup of Google Tag Manager and ForeSee so we can understand how Veterans are using VA.gov.

### Timing
Development stage: **Discover**
After you have defined your KPIs and are determining which frontend events would be beneficial to track on your application before you build.

### Collaboration Format: 30-minute kickoff meeting
VFS Product Manager submits request using Analytics Implementation and QA Request template for Google Tag Manager implementation. Slack #vfs-analytics for ForeSee setup.

#### Meeting attendees 
You Bring: 
* Google Tag Manager CheckPoint: Your Product Manager and POC for Front End engineering
* ForeSee CheckPoint: Your Product Manager or Product Owner

VSP Brings: 
* Google Tag Manager Checkpoint: Google Tag Manager specialists
* ForeSee CheckPoint: Analytics Product Manager

#### Artifact inputs
You bring: 
* Google Tag Manager 
   * Objectives and definitions of success (e.g. a specific user interaction or final URL) that is deemed as success for the product)
   * Authenticated user logins for testing, when applicable
   * The URL(s) for your product including any unauthenticated landing pages that precede the start of the tool; for example, if your product is a multi-step veteran-facing tool, please provide the full path of URLs along noting any conditional logic that would take users to a different branch of URLs for the tool 
ForeSee: The final staging and production URLs for pages you want the survey to appear on
* VSP brings: 
   * Examples of goal funnels and conversions
   * Suggestions and feedback on event naming
   * Google Tag Manager configuration services
   
#### Outcomes and artifact outputs
* VSP will configure Google Tag Manager so that it will translate the code into a readable format for Google Analytics reporting
* VSP will configure the surveys published on your VA.gov URLs
* VSP’s support for analyzing resulting data

### For further support at this point
Reach out to analytics experts on Slack via #vfs-platform-support

---

## Contact Center Review
Ensure that VA call center representatives are prepared to help Veterans troubleshoot VA.gov.

### Timing
Development stage: **Build**
When the complete and final build is on staging and you are confident it's ready to launch. At least 4 weeks prior to launch for a brand new service, or at least 2 weeks prior to launch for a new feature in an existing service.

### Collaboration format: asynchronous
VFS Product Manager follows instructions on the [Contact Center Review page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/call-center/request-contact-center-review.md) to request a Call Center review.

### For further support at this point
Reach out to call center leads on Slack via #vsp-contact-center-support

---
## Privacy and Security Review
Ensure your feature meets VSP's privacy and security standards.

### Timing
Development stage: **Build**

###Collaboration format: 60-minute meeting
Request process:  VFS Lead Engineer or Product Manager uses Privacy and Security Review template

### For further support at this point
---

## Full Accessibility and 508 Office Audit
Accessibility experts complete a full accessibility audit and coordinate with the VA’s 508 office for feedback and approval.

### Timing
Development stage: **Validate**
As soon as your product is in production (can happen during a phased rollout after the first phase). 

### Collaboration format: asynchronous
VFS Product Manager use Full Accessibility & 508 Office Audit template

#### Artifact inputs
You bring: access instructions for your product in staging and a link to your test cases/test plan in TestRail with test execution logs.   

#### Outcomes and artifact outputs 
Zenhub tickets attached to the meeting request 

### For further support at this point
Reach out to accessibility experts in #vetsgov-accessibility in Slack.






