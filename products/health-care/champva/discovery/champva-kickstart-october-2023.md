# CHAMPVA Kickstart - October 2023

#proj-vfmap-champva (A6 Slack channel to use until team is fully staffed!)

## Relevant terms / acronyms

  /wtf Bot exists in DSVA Slack!!

  
| Acronyms       | |              Term                                                           | | Description/ Definition                                                                   | 
| -------------- | | ----------------------------------------------------------------------------| | ----------------------------------------------------------------------------------------- |
| VA             | | Department of Veterans Affairs                                              | |                                                                                           |
| OCTO           | | Office of the Chief Technology Officer at the VA                            | |                                                                                           |
| CHAMPVA        | | Civilian Health and Medical Program of the Department of Veterans Affairs   | |                                                                                           |
| VFMP           | | Veteran Foreign Medical Programs                                            | |                                                                                           |
| PWS            | | Performance Work Statement                                                  | | describing the work to be done in this contract this is standard in a government contract |
| VSR            | | Veteran Service Representative                                              | |                                                                                           |
| DE             | | Digital Experience                                                          | |                                                                                           |
| DAPER          | |                                                                             | |                                                                                           |
| DEPO           | | Digital Experience Product Office                                           | |                                                                                           |





## Links to relevant documents / systems

[PWS A6 - New CHAMPVA Team - Google Drive](https://drive.google.com/drive/folders/1qVO3VMEZWTmAUpOuL49S_5l4SlyH0zBY)


[Product Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/integrated-health/README.md) 


[Find-a-Form Tool](https://www.va.gov/find-forms/)


[VA Design System](https://design.va.gov/)


[VA.gov Platform Forms Library](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-overview)


[21st Century IDEA](https://digital.gov/resources/21st-century-integrated-digital-experience-act/)


[Onboarding to VFS Platform](https://depo-platform-documentation.scrollhelp.site/getting-started/welcome)


[OMB M-23-22 memo, Delivering a Digital-First Public Experience published 9/22/23 Delivering a Digital-First Public Experience | OMB | The White House
Delivering a Digital-First Public Experience OMB  The White House](https://www.whitehouse.gov/omb/management/ofcio/delivering-a-digital-first-public-experience/)


## GITHUB/ZENHUB

[Team Zenhub Board](https://app.zenhub.com/workspaces/champva-vfmp-forms-652da2d3f0ae4c0016bfb109/board) 


[Github Repo - create champva-vfmp-forms subfolder](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications) 


[Templates for each step of Digitization process from Veteran Facing Forms team](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/tree/main/.github/ISSUE_TEMPLATE)

[Veteran Facing Forms team repo-access required- ask Megan Siddle](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/tree/main)

[CAIA Workflow](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Product/CAIA%20Workflow.md)

[Form digitization development guide](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Engineering/Form%20Digitization%20development%20guide.md)


## Problem
The current eligibility application and claims submission processes for Civilian Health and Medical Program of the Department of Veterans Affairs (CHAMPVA), the Foreign Medical Program, and the Camp Lejeune Family Member Program are high-contact and rely on paper applications that are faxed or mailed to VA. 


The processes currently do NOT include any option for electronic application processing, instead relying heavily on fax and physical mail. Legacy products were built around expecting physical mail, requiring scanning and processing of barcodes and “bubble sheets”. With eligibility being managed in standalone systems, applications must be “swivel-chaired” from their scanned and reviewed visual form to the benefits record in the legacy system.
The teams under this effort will work specifically on forms related to CHAMPVA, Camp Lejeune Family Member Program, and Foreign Medical Program which currently include the forms below, but the list may evolve as more research is performed and forms are prioritized (the first 5 forms listed below are the 5 prioritized initially for this effort, however, should there be capacity for additional forms, the remaining items will be digitized and are listed in priority order:
1. CHAMPVA Application Form – VA Form 1010D
2. CHAMPVA Beneficiary Claims Submission – VA Form 10-7959A
3. OHI Form – VA Form 10-7959C
4. FMP Registration Form – VA Form 10-7959-1
5. Foreign Medical Program Claim Cover Sheet – VA Form 10-7959f-2





## Proposed Actionable Items:


### Discovery
- UX (Steve): Can we get our heads around any foundational UX research that can be leveraged to better understand the user needs informing this effort? 
- Do we have access to personae, journey maps, any other artifacts or resources that might be helpful? If not, what might be useful to the team to better understand user needs?
- Steve to meet/interview VA Digital Forms Team members (Heather to connect Steve to existing team members)?
- Attend applicable Platform Orientation sessions (may be live or recordings)
- Melissa S. could help narrow down research (she starts on 10/16)
- [Research at the VA](https://depo-platform-documentation.scrollhelp.site/research-design/research-at-va) 
- [Design at the VA](https://depo-platform-documentation.scrollhelp.site/research-design/design-at-va) 
- Check with A6 HCD CoP for advice


Can we build a stakeholder map of the various stakeholders in each effort and their interests? Robbie -may be able to assist with creation of stakeholder map for CHAMPVA - Where do we fit in? 



### Engineering (Don): 
- Can we learn more about the nuts and bolts of how and where we integrate with other teams technically? Are there existing repos. APIs, navigation structures, patterns, etc. that we should be using?
- Shadow VRO engineers
- Shadow A6 VA Engineers (Tom to send connections!)
- Shadow vets-api engineers

#### Set up Dev Environment
Engineers to read: https://depo-platform-documentation.scrollhelp.site/developer-docs/ https://github.com/department-of-veterans-affairs/vets-api 

### Attend Platform orientations https://depo-platform-documentation.scrollhelp.site/getting-started/calendly-orientation-sessions 
- Upcoming Platform Orientations
- Design Systems: 10/13 at 12pm PT
- Front End: 10/24 at 11am PT


## Onboarding
Work with OCTO to identify and/or set up a code repo for these efforts


Based on discovery above, start assembling some guidance and basic infrastructure and tooling that the team might find useful. 
For engineers, perhaps a docker image or set of images with some libraries or other resources, an initial developer setup doc that can be used as a starting point? Perhaps there are some similar things we can do on the UX side as far as tooling and setup?


## Outstanding Questions
- Are we responsible for building landing/marketing pages on other pages of VA? (ie.Benefits page, etc.)
- What portfolio are we in?
- Who owns change mgmt process (when the form is digitized?) 
- Are we using box.com? If not,what are we using for document storage?
- Who are our stakeholders/business owners for each of the first 5 forms we will digitize


## Action items
- Heather to determine what VA portfolio we are in - asked Premal/Eunice
- Jeff to then create ZH board, epics, stories (need assistance from Lauren A.)
- Heather to ask questions noted above 
- Tom to make a list of connections for A6 VA Engineers for Don to reach out to
- Heather to schedule follow up meeting next Tuesday, 10/17

## 10/17/23 Meeting Notes

- Welcome Melissa!
- Premal update (He will be officially joining us 10/30/23)
- Google Drive 
- Lauren created: va.gov-team/products/health-care/integrated-health/README.md at master · department-of-veterans-affairs/va.gov-team (github.com)
- New ZH Board!
- Who can access it? (only Jeff, Heather)
- va.gov-team/products/health-care/champva/1010D at master · department-of-veterans-affairs/va.gov-team (github.com) - newly created 1010D folder!




## Action items

Heather to ask questions noted above (in DSVA Slack)
Next team meeting on Friday, 10/20 
Heather/Steven to reach out to #veteran-facing-forms team for intros, template for stories/epics


10/20/23 Meeting Topics
 Staffing update
- Michael & Rachael joining on Monday, 10/23
- Jeff Wang, joining on Monday, 10/30
- Jamie & Bo joining on Monday, 11/6
- Devi joining on Monday, 11/13
- Actively hiring 4 remaining roles

Onboarding
- New Team member Onboarding checklist 
- Heather to created onboarding ticket and assist with tasks
- Reminder: Front End Orientation: Tuesday, 10/24 at 11am PT (Don)

New Google team calendar 

Sprint Schedule

- Revised Sprint Schedule
- Sprint Review - proposed date of 10/30 at 3:30pm ET
- Review new GH folder - Jeff
- ZH board - Steven now has access
- Collab w Veteran Facing Forms Team
-- Meet next week w/Tricia
- Matt D to provide research Bryan Ivie completed
- Next meeting?
- Anything else?

## Action items

- Tom to make a list of connections for A6 VA Engineers for Don to reach out to
-- Seth Darr to meet with Don today
- Heather to schedule meetings with Tricia Baker
- Heather to ask Tricia if we can listen in on VFF team’s Midpoint Review on Monday, 10/23 at 12:30pmPT (yes!)
-- Send invite to Steve & Don







