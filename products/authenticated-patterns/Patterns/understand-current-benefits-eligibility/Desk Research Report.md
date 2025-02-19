# Desk Research Report 


## Pattern - Help users to manage benefits and tools 

#### AKA Service List


### Authenticated Experience Design Patterns Team - February, 2025

Christine Steiffer - Design Lead

Kristen Faiferlick - Senior UX Designer

Lynn Stahl - Product Manager


## Table of Contents

- [About the pattern](#About-the-pattern)
- [Pattern components](#Pattern-components)
- [Conducting the research](#Conducting-the-research)
- [Supportive findings](#Supportive-findings)
- [Theme 1](#Theme-1) 
- [Theme 2](#Theme-2) 
- [Theme 3](#Theme-3) 
- [A note from the researcher](#A-note-from-the-researcher)


### About the pattern

Throughout VA.gov, there are many instances where Veterans can see lists of benefits they either currently have or are eligible to receive (such as in the Claims Status Tool, prescriptions, and appointments among others). Those lists often vary in style and components used, but there is a common thread among them. This pattern gives unified guidance to teams whose products include lists of benefits and tools. It aims to reduce cognitive load for Veterans, by providing a consistent experience. This aids us in our overall portfolio goal to create products and services that are trauma-informed and to make the process of interacting with VA.gov as seamless and positive as possible for Veterans.

The idea for this pattern was presented to the portfolio during the [Blue Sky presentation](https://dsva.slack.com/archives/C07SD9P7XB9/p1734111940363469?thread_ts=1734108245.226369&cid=C07SD9P7XB9) series by Ryan Thurlwell in January 2025. 


### Pattern components

![An annotated Service list item, calling out the header, critical information, status, details, and link.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/understand-current-benefits-eligibility/Annotated%20Service%20List.png)

The Service List pattern consists of a few components and UI elements, including:

* A dividing line at the top of the component
* A required header and chevron that feature a link that takes the user to a page with more benefit details, along with space for an optional icon
* A critical information component (not yet in the library)
* A required status tag
* A required section that includes at least one and up to five pairs of Label: Value sets
* An optional link at the bottom that leads the user somewhere other than their detailed benefit view 


### Conducting the research


#### Polling the network

We started by [reaching out](https://dsva.slack.com/archives/C0NGDDXME/p1737562184398659) to the greater VADS design community in the #design slack channel and requested support in locating relevant research resources on the topic of benefits lists. We heard back from several teams including:
* My HealtheVet
* Appointments
* Benefits Tools


#### Relevant labels in GitHub

We reviewed the research they pointed out, searching for relevant insights related to each of the components we include in our pattern. In addition to this outreach, we also reviewed the [research repository in GitHub](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues?q=is%3Aissue) for studies tagged with the following labels:
* [DSC: Card](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels/DSC%3A%20Card) (16 linked studies)
* [DSC: Label](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels/DSC%3A%20Label) (3 linked studies)
* [DSC: Link - Action](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels/DSC%3A%20Link%20-%20Action) (13 linked studies)


##### Suggested future research

There were a few labels for components in the research repository that did not have any studies attached to them. If your team is conducting a study that includes any of the following components, we recommend you ask questions about them and add their label to your study for future review:
* [‘DSC: Icon’](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues?q=is%3Aopen+label%3A%22DSC%3A+Icon%22+)
* [‘DSC: Links’](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues?q=is%3Aopen%20label%3A%22DSC%3A%20Links%22%20)
* [‘DSC: Tag’](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues?q=is%3Aopen%20label%3A%22DSC%3A%20Tag%22%20)


#### Quotes in EnjoyHQ

We also searched EnjoyHQ for relevant insights. While GitHub makes it easy to search for content by relevant label and see a summary of findings when you open the ticket, EnjoyHQ was better for keyword searches that looked at key phrases users have said related to this pattern. Some of the things we searched for in EHQ included:
* “Benefits in one place”
* “In one place”
* “List of benefits”
* “One stop shop”
* “Change in status”


### Supportive findings

Through a detailed review of relevant studies, we found some interesting insights related to lists across a variety of products in our portfolio. The insights fell into a few key themes detailed below. 

#### Theme 1
##### Veterans liked seeing lists of relevant information in one place.

There are many examples of lists used throughout VA.gov, such as those for appointments, prescriptions, payments, claims, and debts, among others. Across some of the studies reviewed for these products, we heard Veterans discuss their desire to see all of their important information in one central location[^1]. 

Our research database contains many examples of positive feedback from Veterans who were happy that VA.gov was becoming the central source of information for all of their needs. Some referred to the merger of MyHealtheVet and VA.gov products[^2], while others mentioned it in relation to the mobile application[^3].


###### “It’s like one stop shopping… you can use it for your medical, but you can use it for all the other things that you might have… that you don’t even know that you’re eligible for.” [- P10](https://app.enjoyhq.com/projects/QwXlGYvnK/inbox/documents?documentId=4f5f599f-5f38-4b87-ba5c-39cd70c93238&highlightId=&page=0&query=KGZ1bGxfY29udGVudCUzQSUyMm9uZSUyMHN0b3AlMjBzaG9wcGluZyUyMik%253D&sortBy=original_created_at&stats=eyJ0eXBlIjoiIiwicHJvcGVydHkiOiIiLCJuZXN0ZWRQcm9wZXJ0eSI6IiIsImJyZWFrZG93biI6IiIsImNoYXJ0IjoiIiwic2l6ZSI6IjEwIiwic2VyaWVzIjpudWxsLCJyZXBvcnRJZCI6bnVsbH0%253D&statsEnabled=false) [^4] 

However, centralizing data in a list does come with the risk of confusing users with too much information[^5]. Our pattern recommends that service lists should have only 1 card per benefit to ensure Veterans won’t experience visual overwhelm when interacting with this pattern.

For lists of tools, such as the appointments list, where teams tested a version with items in an unbordered list (in contrast to a card with four borders), we saw a positive response from Veterans that could clearly understand the difference between list items[^6]. We also saw multiple studies that showed Veterans were confident in navigating from the list view to the detailed view and back again[^7].

All of these studies help to provide use cases where a pattern like ours will be a helpful addition to the design library. Moving away from a bordered card style, providing a header link that allows the Veteran to navigate to a detailed view and back to the list again, as well as the overall concept of providing a singular source of information on the current Veteran benefits are all features that are validated by the research referenced in this finding. 


##### Suggested future research
* Wayfinding tools used in lists  (such as filter, sorting, toggle, and the dot/unread notification components) need further exploration with how they interact with the service list pattern 
* The order of the items in the service list pattern should be studied to ensure they match Veteran expectations and mental models[^8]


#### Theme 2 
##### Statuses were helpful for comprehension, but could cause confusion if Veterans did not understand their meaning.

Many different products use the status tag component to communicate different messages to Veterans, and it is generally well-understood from the research we reviewed[^9]. Sometimes statuses were accompanied by color, and other times they used the dot component (not yet in VADS) that is often used to communicate if messages are unread. 

While some statuses were only one word (such as “paused”, “declined”, “past”, “requested”), others had more complex detail specific to the benefit shown. It was not always clear to Veterans what their status meant and how to determine its relevance to their benefit[^10]. 


###### “What would make this [status] clearer is… it should list the actual determination of each contention or issue. It would be good to see if it's deferred or approved rather than just ‘gathering evidence’.” [- P14](https://app.enjoyhq.com/projects/8w4Y7aPRa/inbox/documents?documentId=ce4e3a04-b0ff-4f1a-bbb0-ba850cbe5903&highlightId=&page=0&query=&sortBy=original_created_at&stats=eyJ0eXBlIjoiIiwicHJvcGVydHkiOiIiLCJuZXN0ZWRQcm9wZXJ0eSI6IiIsImJyZWFrZG93biI6IiIsImNoYXJ0IjoiIiwic2l6ZSI6IjEwIiwic2VyaWVzIjpudWxsLCJyZXBvcnRJZCI6bnVsbH0%253D&statsEnabled=false)

Providing an informative status within a UI component that is visually striking makes a difference in whether that status is seen and understood. By including the status in a tag component inside of the service list component, we will help Veterans to understand important information about their benefit.


##### Suggested future research
* The recommended status content should be investigated to ensure it matches Veteran mental models. 
    * We should also try to understand if short, succinct statuses are better or worse than longer, descriptive statuses.
* Additional insight is needed around the use of colors in status tags and their effectiveness in communicating the status meaning. There is currently an [experimental design for colored tags](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/2993) that can be used to explore this.


#### Theme 3 
##### Veterans were easily able to understand when a list item needed action and how to resolve it.

A few lists we reviewed featured some kind of call to action (CTA) link within their list item that tested well with Veterans[^11]. For example, Veterans were easily able to begin the process of scheduling an appointment within the appointment list item during the Community care self-scheduling research study[^12].


###### “I should be able to go to ‘Schedule Your Appointment’ [the CTA] and schedule my appointment from there.” [- P3](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/community-care-direct-scheduling/research/2024-06%20Community%20Care%20Self-Scheduling%20-%20Usability%20and%20Concept%20Testing/transcripts/P3.md)

While this feature tested well overall, as the CTA component gets formally codified as the Critical information component, the team working on those efforts will want to ensure they create clear content that helps the Veteran know exactly what next steps are needed to complete the required action. Some studies saw confusion if the language used in that type of link did not provide clear enough instruction on how to proceed.


###### “I would want to see if there was something else I needed to do, or if everything I’ve submitted is sufficient for them to make a decision. Am I waiting on something specific, or is there something else I need to send?” [- P14](https://app.enjoyhq.com/projects/8w4Y7aPRa/inbox/documents?documentId=ce4e3a04-b0ff-4f1a-bbb0-ba850cbe5903&highlightId=&page=0&query=&sortBy=original_created_at&stats=eyJ0eXBlIjoiIiwicHJvcGVydHkiOiIiLCJuZXN0ZWRQcm9wZXJ0eSI6IiIsImJyZWFrZG93biI6IiIsImNoYXJ0IjoiIiwic2l6ZSI6IjEwIiwic2VyaWVzIjpudWxsLCJyZXBvcnRJZCI6bnVsbH0%253D&statsEnabled=false)[^13]


##### Suggested future research
* The team who creates the new Critical information component should ensure that the content of the component addresses the following elements to ensure the Veteran is clear on the steps they need to take:
        * Who needs to act
        * What action is needed
        * By when the action is required


### A note from the researcher

After reviewing many studies that apply to a variety of VA products, one major takeaway this team took from the desk research is how thoughtful, caring and dedicated this work force is to supporting Veterans and their families. Many studies incorporated trauma-informed research principals and tested them with users of assistive technology. It is an honor and privilege to get to work with this incredibly talented and passionate group of technologists in the service of Veterans across the country. The hard work this organization does is deeply valued by the Veterans we serve every day, and it was a joy to get to learn so much about all this great work done across the portfolio. 


<!-- Footnotes themselves at the bottom. -->
## Notes

[^1]:
     [Discovery for MVP AMA Forms Veteran facing tool](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/research/ama-vft-discovery1-research-readout.pdf) - Jul 2019 - Decision Reviews team

[^2]:
     [MHV and VAOS Appointments list discovery research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2022-01-mhv-and-vaos-appts-list-discovery/research-findings.md) - Jan 2022 - Appointments team

[^3]:
     [IA & Navigation: Evaluative research - usability study findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/research/ux/navigation/new%20navigation%20usability/usability-findings.md) - Sept 2022 - VA Mobile App team

[^4]:
     [Sign-in transition research study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-08%20Sign%20in%20transition/2024-08%20Research%20Findings.md) - Aug 2024 - Identity Experience team

[^5]:
     [Claims Status Tool initial decisions research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2023-03-Initial-Decisions-CST/research-findings.md) - April 2023 - VA Benefits Team 1

[^6]:
     [VAOS Appointments list usability study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2021-01-appts-list-test/research-findings.md) - Jan 2021 - Appointments team

[^7]:
     [VAOS Appointments list usability study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2021-01-appts-list-test/research-findings.md) - Jan 2021 - Appointments team, [IA & Navigation: Evaluative research - usability study findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/research/ux/navigation/new%20navigation%20usability/usability-findings.md) - Sept 2022; [Appointments list screen reader usability research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2023-02-appt-list-usability-screenreader/research-findings.md) - May 2023 - Appointments team

[^8]:

     [Decision letter download: research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2022-08-Decision-Letter-Download/research-findings.md) - Sept 2022 - VA Benefits Team 1

[^9]:
     [Claims Status Tool initial decisions research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2023-03-Initial-Decisions-CST/research-findings.md) - April 2023 - VA Benefits Team 1; [Evidence submission usability testing research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2023-05-Evidence-Submission/research-findings.md) - June 2023 - VA Benefits Team 1 

[^10]:
     [VAOS Appointments list usability study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2021-01-appts-list-test/research-findings.md) - Jan 2021 - Appointments team

[^11]:
     [Evidence submission usability testing research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2023-05-Evidence-Submission/research-findings.md) - June 2023 - VA Benefits Team 1

[^12]:
     [Community care self-scheduling research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/community-care-direct-scheduling/research/2024-06%20Community%20Care%20Self-Scheduling%20-%20Usability%20and%20Concept%20Testing/research-findings.md#finding-5) - June 2024 - Appointments team

[^13]:
     [Claims Status Tool initial decisions research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2023-03-Initial-Decisions-CST/research-findings.md) - April 2023 - VA Benefits Team 1
