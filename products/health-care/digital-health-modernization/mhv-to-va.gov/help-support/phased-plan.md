# Phased plan for help & support on My HealtheVet

## Background and problem statement
The My HealtheVet to VA.gov migration will occur across a series of planned phases, which incrementally send more and more users to VA.gov. Alongside this migration effort, the My HealtheVet helpdesk will also continue to support the health portal and its users, but surfacing this helpdesk and its adjacent phone numbers and/or other support tools on MyHealtheVet pages has not yet been addressed. 

We believe My HealtheVet users will struggle to find the "right" phone number on VA.gov, where the landscape is complex. We can no longer simply put a simple My HealtheVet phone number in the footer of the website.  Veterans expect to find fast, accurate help "in context" with where they encounter a problem. For the health portal, this might mean the landing page, or more deeply on tool pages. The problem of identifying the "right" help or phone number will be exacerbated when Cerner/Oracle Health is integrated, which will introduce additional phone numbers and another helpdesk, meaning we will need to iterate on any solution at that point. We believe the sooner we can start iterating on a solution and learning about Veteran needs and expectations for help around the health portal, the better suited we will be to handle this in later phases, at and beyond the Cerner integration work.

The cartography team identified this risk in Fall 2023 and began prioritizing this work in Sprint 27 (April 1, 2024). Our initial goals are to build on earlier discovery work and identify solution(s) that can begin to aid users in getting help when and where they need it, in the clearest way possible. We will aim to launch a low-risk MVP solution first, and move toward research to validate more complex concepts with Veterans before moving forward with those ideas. 

## VES Seamless CX Principles
* As a Veteran, I am known to the VA. The VA knows who I was as an active servicemember and who I am now as a Veteran, including my personal details (e.g., my demographics and my channel preferences) and what VA services I use.
* As a Veteran, I have a smooth, consistent, personalized experience, no matter how I get in touch with the VA, or who or what I interact with about my question/problem/request. I won’t have to restart the conversation or provide duplicate information when I move from channel to channel, or within the same channel.
* The VA helps me achieve the outcome I was looking for, in a way that exceeds my expectations.

## Hypotheses around My HealtheVet preferences for help
We expect that: 
* people want fast access to help (not to wait 3 days for an answer)
* people want to be able to find help + support when they need it (and we shouldn't hide it, or bury it at the bottom of a page)
* most people will recognize a need for help in the middle of tasks, within tools.
* people don't understand or want to spend time being routed to various helpdesks: they want us to give them the correct help/support upfront.
* people want a more connected experience where support/help services "know" their information
  * "smart help"
    * we know what page they're on (and deliver the most accurate help for that page/data)
    * we know something about them as a person (we know what facility they are going to for an appointment, when their next appointment is, what prescriptions are ready for refill)
    * they don't have to repeat themselves if they get transferred

## Current help and support landscape

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

**What help tools do we have on VA.gov today, and can we leverage those to support My HealtheVet users?**
* [AskVA](https://ask.va.gov/)
  * [Spreadsheet with topics & routing logic](https://docs.google.com/spreadsheets/d/1qRpAwE-OmISFzYsg4w3n8VlBsxJxkBAFZL21AWDXFKc/edit#gid=1687719720 )(must be granted access)
  * [Figma files for OCTO redesign of tool](https://www.figma.com/file/lzWlcHlV1eELY8yQdyqw2p/Ask-VA-Prototype-R1?type=design&node-id=0-1&mode=design&t=NKMV3R6xwdw2Ll2z-0)
  * PO: Becky Phung
  * Speed of tool: up to 1 day (24 hours)
  * Notes:
    * AskVA is being redesigned by OCTO team and brought into VA.gov by a new team
    * The old AskVA did not historically cover all My HealtheVet topics because MyHealtheVet National Portal has its own contact form (with a 24-hour SLA turnaround time for responses). Whether or not the MHV form should come over to VA.gov is being discussed (seems like we likely will not move it over) since the functionality is already offered by AskVA. Could health topics get mapped and added into routing of the AskVA tool instead?
    * There are some notes around how Veterans have figured out that secure messages have a 3-day response turnaround time, but the contact form has a requirement of a 1-day turnaround. Instead of waiting on the phone for a call center for an hour or sending an SM, many people use the form and have determined that the form (which could theoretcially be replaced by AskVA) is the fastest route to a response.
   
* [Chatbot](https://www.va.gov/contact-us/virtual-agent/) / Live Agent Escalation 
  * PO: Luciana Alexander Morais (VES)
  * Speed of tool: instant feedback, but you aren't chatting with a person, so its very canned answers & doesn't cover all topics
  * Notes:
    * VES team has worked out a Seamless CX strategy ([see here](https://dvagov.sharepoint.com/:w:/r/sites/OmnichannelEcosystem/_layouts/15/Doc.aspx?sourcedoc=%7BBAD20739-1BF3-48CC-9C66-C15C3EF97A24%7D&file=Seamless%20CX%20Strategy%20Summary.docx&action=default&mobileredirect=true) - must be on Network) with many articulated design principles around what Veterans want with regard to online support.
    * Chante Lantos-Swett communicated that while Live Agent support is a known preference, at scale it is very far off into the future, and is not a foreseeable solution in the near term.



## Discovery & desk research
* [Cartography team - research about MHV helpdesk from Summer 2023](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/metrics-performance-monitoring/MHV-Helpdesk-data.md)
* [MURAL with discovery research, competitive analysis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1710792685965/130af5ff20096b650079e36b00db1187172c857f?sender=uf94a77a19aaf687331c09367)
* [Notes from conversations (Google doc)](https://docs.google.com/document/d/1sPnIlOeUcEjoeY8oYCsonAbYFtETNUEeWXvPcP1Xz0M/edit)

### Analytics

### Other research
* [Call center user journey research - 2022](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/contact-center/research/Q2-2022/VA_Caller/Research%20Readout-VACallerUserJourney-99222022.pdf)
* [VHA Chatbot research findings - 2022](https://github.com/department-of-veterans-affairs/va.gov-research-repository/blob/master/research-proposals/MCT%20Omnichannel%20Experience/VHA%20Virtual%20Agent/August%202022%20VHA%20Virtual%20Agent%20Research_2022-08-04.pdf)
* [VA Live Agent research - 2023](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/333), [Research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/live-agent/research/2023-07-Live%20Agent%20Chatbot_Interviews%20with%20Veterans/research-findings.md) & 

### People

<b>HRC Helpdesk</b>
* Sylvia Palmer
* Kophie Mathis
* Theresa Palmer
* John Tano

### Call Centers

### Online tools

## Phase 1: Help section on My HealtheVet Landing Page (MVP)

For phase 1, we plan to leverage the existing [Need help?](https://design.va.gov/components/form/need-help) component from the VA Design System on the My HealtheVet landing page with the HRC helpdesk number. 

## Phase 2: Roll-out "smart" help section to tool pages across My HealtheVet

## Phase 3: Create My HealtheVet help + support page

## Phase 4: Improve the global /contact-us page 

## Potential future ideas, pending further research
* User onboarding for My HealtheVet on VA.gov
