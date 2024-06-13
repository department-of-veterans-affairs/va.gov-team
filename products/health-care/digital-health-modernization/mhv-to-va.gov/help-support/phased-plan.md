# Phased plan for help & support on My HealtheVet

## Background and problem statement
The My HealtheVet to VA.gov migration will occur across a series of planned phases, which incrementally send more and more users to VA.gov. Alongside this migration effort, the My HealtheVet helpdesk will also continue to support the health portal and its users, but surfacing this helpdesk and its adjacent phone numbers and/or other support tools on MyHealtheVet pages has not yet been addressed. 

We believe My HealtheVet users will struggle to find the "right" phone number on VA.gov, where the landscape is complex. We can no longer simply put a simple My HealtheVet phone number in the footer of the website.  Veterans expect to find fast, accurate help "in context" with where they encounter a problem. For the health portal, this might mean the landing page, or more deeply on tool pages. The problem of identifying the "right" help or phone number will be exacerbated when Cerner/Oracle Health is integrated, which will introduce additional phone numbers and another helpdesk, meaning we will need to iterate on any solution at that point. We believe the sooner we can start iterating on a solution and learning about Veteran needs and expectations for help around the health portal, the better suited we will be to handle this in later phases, at and beyond the Cerner integration work.

The cartography team identified this risk in Fall 2023 and began prioritizing this work in Sprint 27 (April 1, 2024). Our initial goals are to build on earlier discovery work and identify solution(s) that can begin to aid users in getting help when and where they need it, in the clearest way possible. We will aim to launch a low-risk MVP solution first, and move toward research to validate more complex concepts with Veterans before moving forward with those ideas. 

## Current My HealtheVet helpdesk support

**What help topics does the MHV Call Center receive questions about now?** 

MyHealtheVet helpdesk call center data comes in through VSignals, with about 30,000 datapoints per month. Kophie Mathis is responsible for combing through this data, and he reports out trends in the My HealtheVet Feedback dashboard. A fifteen-month breakdown of call topics (January 1, 2023-April 9, 2024) is included in the table below (_There are overlaps in the data – this is due to the program they use not having a well-curated taxonomy, and the fact that operators are categorizing calls on the fly_).
 
**Area**|**Interactions**|**% of total interactions**
:-----:|:-----:|:-----:
Login|84944|28.32
Non-MHV|51612|17.21
Appointments|20846|6.95
SM-Patients|14829|4.94
Prescription|11849|3.95
General Questions|11671|3.89
Registration|9877|3.29
Blue Button|9580|3.19
Account Status|9573|3.19
Account Deactivation|8541|2.85
New VA Sign in Page|8156|2.72
Medication|7447|2.48
Technical Issues|6761|2.25
Other|5848|1.95
My VA Health|5706|1.90
User ID/Password|4864|1.62
Account Login|4019|1.34
Rx Refill|3767|1.26
VA Appointments|3286|1.10
Secure Messaging|2111|0.70
Online Auth|1857|0.62
VA Prescription (Rx) Refill|1794|0.60
Mission Act|1365|0.46
Registration/Upgrade My Account|1262|0.42
Single Sign-on|861|0.29
PACT Act|827|0.28
VA Medical Images & Reports|674|0.22
Forgotten User ID / Password|610|0.20
VA Health Summary|560|0.19
SM-Clinicians|545|0.18
Connect Your Email|461|0.15
VA Facility Locater|457|0.15
VA Medical Imaging (BBMI)|427|0.14
VHIC|420|0.14
Chem/Labs|398|0.13
Privacy/Security Breach|264|0.09
Feedback|260|0.09
VA Blue Button|232|0.08
MPI/MVI|195|0.07
Online Bill Pay|168|0.06
Complaint|152|0.05
VA OpenNotes|144|0.05
Virtual Care Mng|115|0.04
Immunizations|98|0.03
Admin Portal|88|0.03
SM-Administrators|64|0.02
 |49|0.02
CARES Act|46|0.02
PGHD-Patient|27|0.01
Suggestion|26|0.01
PGHD-Clinician|23|0.01
Afford Care|22|0.01
Centralized Scheduling Solution|22|0.01
CPAP Recall|20|0.01
Crisis Call|16|0.01
Future Functionality|15|0.01

**What topics did My HealtheVet National Portal cover that will no longer be coverered on VA.gov?**
* Patient-entered data
* Health tracking devices
* Blog post content (unknown)

**What topics are new, that My HealtheVet on VA.gov will need to be able to cover?**
* Medical supplies and devices (hearing aid battery and CPAP supply re-order)
* 10-10EZR
* Payments and medical co-pays
* Travel reimbursement (BTSSS)
* ID.me and/or Login.gov questions

## Discovery & desk research
### Cartography team research
* [Cartography team - research about MHV helpdesk from Summer 2023](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/metrics-performance-monitoring/MHV-Helpdesk-data.md)
* [MURAL with discovery research, competitive analysis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1710792685965/130af5ff20096b650079e36b00db1187172c857f?sender=uf94a77a19aaf687331c09367)
* [Notes from conversations (Google doc)](https://docs.google.com/document/d/1sPnIlOeUcEjoeY8oYCsonAbYFtETNUEeWXvPcP1Xz0M/edit)

### VA analytics
* MHV National Portal feedback dashboard
* MHV National Portal analytics dashboard
* My HealtheVet Medallia feedback

### Other VA research
* [Call center user journey research - 2022](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/contact-center/research/Q2-2022/VA_Caller/Research%20Readout-VACallerUserJourney-99222022.pdf)
* [VHA Chatbot research findings - 2022](https://github.com/department-of-veterans-affairs/va.gov-research-repository/blob/master/research-proposals/MCT%20Omnichannel%20Experience/VHA%20Virtual%20Agent/August%202022%20VHA%20Virtual%20Agent%20Research_2022-08-04.pdf)
* [VA Live Agent research - 2023](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/333), [Research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/live-agent/research/2023-07-Live%20Agent%20Chatbot_Interviews%20with%20Veterans/research-findings.md)

### Community research
* Digital.gov [customer experience toolkit](https://digital.gov/resources/customer-experience-toolkit/#digital-services-2)
* Department of Labor [CX Principles for online applications](https://www.dol.gov/agencies/eta/ui-modernization/customer-experience/improve-applications/cx-principles)
* Nielsen Norman Group - [Minimize the Need for Customer Service to Improve the Omnichannel UX](https://www.nngroup.com/articles/customer-service-omnichannel-ux/)
  * Make help easy to find / do not hide it 
* Nielsen Norman Group - ["Contact Us" page guidelines](https://www.nngroup.com/articles/contact-us-pages/)
  * Provide phone numbers at a minimum
  * Tell people if they'll interact with a real person or a bot (depending on type of help)
  * Offer "smart" help when possible 
* Nielsen Norman Group - [How to structure Customer Information on Websites](https://www.nngroup.com/articles/customer-service-model/)
  * Parent "Contact us" or "Customer Service" pages should work like a hub and spoke model, and connect to child "help" or "contact-us" pages. 
  * Ladder-up specific help to sitewide "Contact us" page in a hub/spoke model, connecting users to broader help if they need it.
    <img width="865" alt="Screenshot 2024-04-26 at 10 01 26 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/115033532/6530cd15-b30e-4a23-b9c0-5458ec907af6">
  * Provide the narrowest / most relevant help in-context on the page (text below from article)
    <img width="772" alt="Screenshot 2024-04-26 at 9 56 15 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/115033532/d85191ea-e8c4-48c8-9f3c-b4b25e60eede">


## Hypotheses around My HealtheVet preferences for help
* people want fast access to help (not to wait 3 days for an answer)
* people want to be able to find help + support when they need it (and we shouldn't hide it, or bury it at the bottom of a page)
* most people will recognize a need for help in the middle of tasks, within tools.
* people don't understand or want to spend time being routed to various helpdesks: they want us to give them the correct help/support upfront.
* people want a more connected experience where support/help services "know" their information

## VA.gov support landscape (current)
### Call Centers

A vast array of phone numbers cover topics included in the My HealtheVet on VA.gov portal, but are not consolidated onto a single page on VA.gov:

<img width="1149" alt="Screenshot 2024-04-09 at 9 53 28 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/115033532/519e369a-86ba-4e25-9aa9-c25368aea202">

### Contact-us page
This page is a really useful resource for authenticated & unauthenticated users, is discoverable by search engines, and is persistently visible in the global header. After reaching out to CAIA, we were told that we could suggest iterations or improvements to this page to meet our needs, so there is potential in this page for My HealtheVet. 

But currently, the page hierarchy will most likely present issues for My HealtheVet users, as they may be led to tools that are not set up to support them well. On mobile, it requires scrolling many viewport lengths to reach health-specific call center numbers. 

Page hierarchy: Help in the order it is offered to Veterans on this page: 
- Ask VA (does not currently cover all MyHealtheVet topics or route users to this helpdesk)
- Chatbot (doesn't cover all topics - has specific focus on prescriptions)
- Call a phone number (health numbers are at the bottom of the list)
- Contact local facility (requires more clicks)
- FAQs
- Other tools (probably very helpful for My HealtheVet users)

Numbers listed on `/contact-us` page
<img width="580" alt="Screenshot 2024-04-09 at 10 02 13 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/115033532/96b9bc79-b71d-4501-a6e2-f11a867b099b">

### Online tools
* **[AskVA](https://ask.va.gov/)**
  * [Spreadsheet with topics & routing logic](https://docs.google.com/spreadsheets/d/1qRpAwE-OmISFzYsg4w3n8VlBsxJxkBAFZL21AWDXFKc/edit#gid=1687719720 )(must be granted access)
  * [Figma files for OCTO redesign of tool](https://www.figma.com/file/lzWlcHlV1eELY8yQdyqw2p/Ask-VA-Prototype-R1?type=design&node-id=0-1&mode=design&t=NKMV3R6xwdw2Ll2z-0)
  * PO: Becky Phung
  * Speed of tool: up to 1 day (24 hours)
  * Notes:
    * AskVA is being redesigned by OCTO team and brought into VA.gov by a new team
    * The old AskVA did not historically cover all My HealtheVet topics because MyHealtheVet National Portal has its own contact form (with a 24-hour SLA turnaround time for responses). Whether or not the MHV form should come over to VA.gov is being discussed (seems like we likely will not move it over) since the functionality is already offered by AskVA. Could health topics get mapped and added into routing of the AskVA tool instead?
    * There are some notes around how Veterans have figured out that secure messages have a 3-day response turnaround time, but the contact form has a requirement of a 1-day turnaround. Instead of waiting on the phone for a call center for an hour or sending an SM, many people use the form and have determined that the form (which could theoretcially be replaced by AskVA) is the fastest route to a response.
   
* **[Chatbot](https://www.va.gov/contact-us/virtual-agent/) / Live Agent Escalation** 
  * PO: Luciana Alexander Morais (VES)
  * Speed of tool: instant feedback, but you aren't chatting with a person, so its very canned answers & doesn't cover all topics
  * Notes:
    * VES team has worked out a Seamless CX strategy ([see here](https://dvagov.sharepoint.com/:w:/r/sites/OmnichannelEcosystem/_layouts/15/Doc.aspx?sourcedoc=%7BBAD20739-1BF3-48CC-9C66-C15C3EF97A24%7D&file=Seamless%20CX%20Strategy%20Summary.docx&action=default&mobileredirect=true) - must be on Network) with many articulated design principles around what Veterans want with regard to online support.
    * Chante Lantos-Swett communicated that while Live Agent support is a known preference, at scale it is very far off into the future, and is not a foreseeable solution in the near term.
   
#### VES Seamless CX Principles
* As a Veteran, I am known to the VA. The VA knows who I was as an active servicemember and who I am now as a Veteran, including my personal details (e.g., my demographics and my channel preferences) and what VA services I use.
* As a Veteran, I have a smooth, consistent, personalized experience, no matter how I get in touch with the VA, or who or what I interact with about my question/problem/request. I won’t have to restart the conversation or provide duplicate information when I move from channel to channel, or within the same channel.
* The VA helps me achieve the outcome I was looking for, in a way that exceeds my expectations.

## Competitive Analysis


## Design Strategy

Our team decided to move forward with an MVP solution that could be a first step toward a potentially multi-phased approach to help and support. 

### Establishing trust with users
An important goal in building help + support for the My HealtheVet portal is working to build trust with our authenticated users, about whom we have a lot of highly personal information. To think about this, we have drawn on the UX [pyramid of trust](https://www.nngroup.com/articles/commitment-levels/). 

<img width="943" alt="Screenshot 2024-04-26 at 10 07 32 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/115033532/5d32b9b7-3ef4-4d84-b4a0-16685108fd1e">

We anticipate that as more and more users opt into "try me" phases, and VA.gov product teams get to work to integrate Oracle/Cerner data into the portal, that the help landscape will continue to grow in complexity. Beginning to surface help in low-risk ways and learn about the needs for help + support now is beneficial for Veterans and health tool teams alike. 

### Our phased approach

Our multi-phased plan (below) has its roots in desk research, previous VA.gov research by call center and support tool teams, competitive analysis, and based on working knowledge of the My HealtheVet helpdesk call volume, topic coverages, and landscape for support on VA.gov. 

We acknowledge that little is known at this point about Veteran expectations or needs around help and support for the health portal as it migrates to VA.gov, and recommend that we conduct research with Veterans before moving to solutions beyond phases 1-2. 

We have aligned our approach in a pyramid model, with the most basic types of help + support at the bottom. The goal is that each phase builds on the previous one, creating the next level of support until a robust chain of help exists for both authenticated and unauthenticated users who may be seeking answers to questions about managing their healthcare. We posit that akin to the pyramid of trust, these layered help + support options might also contribute to building trust with our Veterans as they navigate a complex, multichannel customer experience landscape in their journey with the VA. 

<img width="832" alt="Screenshot 2024-04-09 at 10 51 57 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/115033532/393f0329-2b9c-4e66-be87-58767c1f994e">

### Phase 1: Help section on My HealtheVet Landing Page (MVP)

For phase 1, we plan to leverage the existing [Need help?](https://design.va.gov/components/form/need-help) component from the VA Design System on the My HealtheVet landing page with the HRC helpdesk number. 

### Phase 2: Roll-out "smart" help section to tool pages across My HealtheVet

For phase 2, after monitoring the impact of a help section on the My HealtheVet landing page, we propose scaling this solution to all tools and apps within the health portal, and taking on user research to better understand user expectations and needs around help and support for managing their healthcare. 

The "smart" solution here could be two-fold, depending on technical feasibility:
* surface specific phone numbers or VA.gov support tools that are best suited for the page the user is on
  * i.e. showing a specific contact number for medical supplies when users are on those pages; or when on payments/co-pays pages 
* surface specific phone numbers based on the user's personal information/data
  * i.e. including the facility's phone number on an upcoming appointment details page; pulling in the specific pharmacy number on the details page for a prescription
 
 Further design work is needed.

### Phase 3: Create My HealtheVet help + support page

Considering some of the draw-backs to the global `/contact-us` page for My HealtheVet users specifically, there could be benefit to introducing a specific help + support page within the `/my-health` portal. This would allow us to direct users to:
* specific help/resources based on the type of question they have about My HealtheVet on VA.gov
* layout the page page based on users mental models around managing their healthcare specifically (for authenticated users)
* consider what support unauthenticated users might look for with a quick google search and surface that on the unauth My HealtheVet landing page.
* track and measure usage and clicks into this page from various areas in the health portal (track which pages users are looking for help on)

Further design work is needed.

### Phase 4: Improve the global /contact-us page 

Make some changes to the page to lay out phone numbers in a more intuitive way, and expose clearer content around tools (i.e. chatbot and AskVA) as to what types of benefits those resources cover. As Resources & Support content migrates or is built out to support the migration effort of My HealtheVet on Va.gov, those sources might also be added or cross-linked. 

Further design work is needed.

### Potential future ideas, pending further research
* User onboarding for My HealtheVet on VA.gov
