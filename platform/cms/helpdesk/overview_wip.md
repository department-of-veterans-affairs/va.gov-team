Table of Contents
=================

- [Mission](#mission)
  * [Getting Started](#getting-started)
  * [How a User Contacts the Help Desk](#how-a-user-contacts-the-help-desk)
    + [Support Channels](#support-channels)
    + [Widget](#widget)
    + [Portal](#portal)
    + [Slack](#slack)
    + [Email](#email)
- [VA Help Desk Responsibilities](#va-cms-help-desk-responsibilities)
   * [Tier 1](#tier-1)
   * [Tier 2](#tier-2)
   * [Tier 3](#tier-3)
   * [The Help Desk Manager](#the-help-desk-manager)
   * [The Delivery Manager](#the-delivery-manager)
   * [Types of requests](#types-of-requests)
- [User How-To or User Error Tickets](#user-how-to-or-user-error-tickets)
   * [Defects](#defects)
   * [Content Questions](#content-questions)
   * [Ticket Classification](#ticket-classification)
   * [CMS Feature and Content Related Guides](#cms-feature-and-content-related-guides)
   * [For VA Medical Center Editors](#for-va-medical-center-editors)
   * [For Product Teams](#for-product-teams)
   * [Account Creation &amp; Training](#account-creation--training)
   * [Resources](#resources)
     + [Incidents and Defects](#incidents-and-defects)
     + [CMS Deployments](#cms-deployments)
     + [Broken links](#broken-links)
     + [Drupal CMS Orientation for VAMC editors](#drupal-cms-orientation-for-vamc-editors)
     + [Login and account](#login-and-account)
     + [Event &amp; Events List](#event--events-list)
     + [Story &amp; Stories List](#story--stories-list)
     + [News Release &amp; News Releases List](#news-release--news-releases-list)
     + [Health Services Content Types](#health-services-content-types)
     + [Health Services List](#health-services-list)
     + [VAMC System Health Service](#vamc-system-health-service)
     + [Locations Content Types](#locations-content-types)
     + [Alerts and Operating Statuses](#alerts-and-operating-statuses)
     + [Facilities &amp; Locations](#facilities--locations)
     + [About Us Pages](#about-us-pages)
     + [Detail Page](#detail-page)
     + [Staff Profile &amp; Leadership List](#staff-profile--leadership-list)
     + [VAMC Guides](#vamc-guides)
- [Performance and Reporting](#performance-and-reporting)
   * [Self-Service Training for Drupal CMS Access](#self-service-training-for-drupal-cms-access)
   * [Code Freeze](#code-freeze)
   * [Release Notes](#release-notes)
   * [VA.gov Product Directory](#vagov-product-directory)
   * [Issues that Prevent the Publishing of Content](#issues-that-prevent-the-publishing-of-content)
   * [Broken Links](#broken-links)
   * [Previous Issues](#previous-issues)
     +[If Edit Tab Does Not Appear](#if-edit-tab-does-not-appear)
       * [If a Page is Not Linking Well but Is Published Under Drupal CMS](#if-a-page-is-not-linking-well-but-is-published-under-drupal-cms)
       * [What Happens if Published in Error?](#what-happens-if-published-in-error)
       * [Does Data Migration from TeamSites Delete Data?](#does-data-migration-from-teamsites-delete-data)
       * [Benefits Hub Landing Page](#benefits-hub-landing-page)
       * [Editing Forms Results in Page Not Found](#editing-forms-results-in-page-not-found)
       * [How to Update Contact Info](#how-to-update-contact-info)
       * [Subject Matter Experts](#subject-matter-experts)
			+ [SW](#sw)
			+ [AR](#ar)
			+ [ZM](#zm)
			+ [KW](#kw)
			+ [JH](#jh)
			+ [HB](#hb)
- [Government Roles the Help Desk Provides Support to](#government-roles-the-cms-help-desk-provides-support-to)
	* [VISN to Facilities Index](#visn-to-facilities-index)
  	* [VISN 19:  Veterans Affairs and Veterans Health Administration](#visn-19--veterans-affairs-and-veterans-health-administration)

- [Governance](#governance)
   
# Help Desk Overview
## Mission
The Veterans Administration Content Management System Help Desk (VA CMS Help Desk, or Help Desk) provides user support to personnel within the Veterans Health Administration, Veterans Benefits Administration, and VA National Cemetery Administration that utilize the Drupal CMS features to publish important information for Veterans and their families regarding Veteran benefits.  

Information that is published is vital information about benefits afforded to Veterans made available through the VA's vast network.  Editors and Users (or just Users) throughout the VA benefits network will have technical and/or user error, or defect related issues that impede the publishing of information with the CMS and impede the success of the core mission of the VA which is to care for those “who shall have borne the battle” and for their families, caregivers and survivors.  

Issues that prevent the mission's success can be resolved with a Ticket for support from the Help Desk which can be raised via one of the Help Desk's Support Channels.  

Users may also have suggestions or feedback critical to improving the efficiency of the CMS by suggesting a new feature or information to improve a current one.  A Ticket with the Help Desk will begin an important exchange of information to allow engineers to analyze and then act on this information.  

This working document contains various procedures and links to policies, and training resources to provide an overview of how the Help Desk operates and the various internal needs of stakeholders as well as the external needs of the CMS User. 

## Getting Started

[What is a CMS?](https://prod.cms.va.gov/help/what-is-a-cms)

## How a User Contacts the Help Desk

### Support Channels

The Help Desk currently offers four methods for Users to create a Ticket and enter the Help Desk Support Queue to have their Issue resolved.

### Widget

A javascript widget is embedded on specific pages throughout the CMS that allows Users to create a Ticket with the Help Desk. Users can track their Ticket in the [Jira help desk portal](https://va-gov.atlassian.net/servicedesk/customer/portal/3). This is one of the help desk's preferred methods, as it helps populate our ticketing system effectively.

### Portal

Users can create a new Ticket with the VA.gov Help Desk (Help Desk) using the va.gov website using a form found in the [Jira help desk portal](https://va-gov.atlassian.net/servicedesk/customer/portal/3). JIRA Cases are created once the User submits the form. Slack sends immediate notifications to Tier 1 upon Ticket creation. Performance of the Portal is measured with metrics and reporting is available that is accurate and is delivered monthly by the Help Desk Manager. This is also one of the help desk's preferred methods, as it helps populate our ticketing system effectively.

### Slack

Contractors and VA staff who are already using the VA Digital Services Slack may also create a Ticket with the Help Desk using the **cms-support** Slack channel. Tier 1 currently is responsible for the timely and periodic review of this Channel, and enters all interactions from this channel manually into our ticketing system by copying and pasting relevant information into a new Ticket in JIRA. As there is currently no method that tracks which Slack messages are tickets in JIRA, there is currently no metric that measures performance, accurately, of messages involving Cases that flow through this channel. 

### Email

A distributed email list that is hosted by va.gov is checked by Tier 1 help desk staff. Tier 1 is responsible for reviewing the mailbox’s incoming e-mail for any new items every 30 minutes between 8 a.m. and 8 p.m. EST. All new tickets must be manually entered into the JIRA system often by copying and pasting the related content from the email to a new Ticket in JIRA. There currently is no performance metric that reliably and accurately reports this Support Channel. The Help Desk is not currently tracking where this email address is being published and shared with Users.

There is currently no real-time, automated notification system to alert Tier 1 when a new Ticket is created or a User sends an email to the address.

Once a Ticket enters the Support Channels and is received by Tier 1, Tier 1 is expected to follow the expectation for the Support Channel the Ticket came through and then follow-up with the User(s) related to the Ticket with an Initial Response.

Tier 1’s Initial Response is created by using the “Reply to Customer” feature found at the bottom of the Ticket.  Initial Responses should be sent no more than 30 minutes after receiving the User’s request.  Tier 1’s Initial Response will Acknowledge the User’s issue, explain to the User that an initial assessment has been made based on the current description of the issue, ask probing questions to fully understand and align to the urgency of the User's specific situation, and Assure the Help Desk is here to help.  

There is also an available email directly to our help desk ticketing system: support@va-gov.atlassian.net. This address, however, is not currently in use that we know of, although help desk staff would prefer it to the existing va.gov one.

## VA Help Desk Responsibilities
### Tier 1

[How to Cover Helpdesk](https://docs.google.com/document/d/1cFxxwZg1lsP3EwDWSbfLM9L8EXzZ7WvpfO7aruW1v54/edit?usp=sharing) **This link goes to a 404**

[Helpdesk Support Common Topics and Canned Responses](https://docs.google.com/document/d/1Y7TQ_OM1Zn6rfdOHXSGxUrhP4dK2DemXb5q--tLDw6M/edit?usp=sharing) **This link goes to a 404**


The Tier 1 Help Desk is responsible for any Issues related to content publishing or editing that involve How-to questions (how-to edit, manage, publish, or alter VA Medical Center’s pages) and questions about the use any of the CMS’ built-in features such as Password Reset, Governance, Permissions, and Account management.

Tier 1 also provides assistance to Training both internally and externally to various requests, and to the various Feature Owners and Product Managers and their various requests as it relates to the CMS. 

Tier 1 manages the incoming Support Channel (queue) by:

Ensure that User created Tickets receive a First Response within to any new Issue between 8:00 a.m. to 8:00 p.m. EST within 30 minutes of being created.

Any In Progress Issues are being actively worked on and resolved in accordance with the time constraints related to the Ticket's Priority.

Escalate any Issue not in scope by engaging the Slack channel #cms-product-triage by sharing with the Channel the related Ticket details and soliciting feedback from the Tier 2 on-duty, Product Owners, Managers, Developers, and Engineers of the CMS.

Warm Transfer Ownership after gaining agreement on the specific Tier 2 Product Owner, or Manager, Developer, or engineer taking Lead on the Ticket, notating ownership on the Ticket.

Respond appropriately to follow -up on any open tickets in the Tier 1 queue.  

Ensure that any Incidents are reported/escalated immediately, and serve as Incident Commander until/unless an appropriate team member takes over that role.

### Tier 2

[Tier 1 vs. Tier 2 Responsibilities](https://docs.google.com/document/d/1mbNhoY9vYsy3dK1NlfmV2vFpHVBWd-s_eL6Rf7ORRJs/edit?usp=sharing) **This link goes to a 404**

Tier 2 will:

Provide Tier 1 with technical information to aid in root cause analysis.

Take ownership of Issues that fall within the scope of Tier 2.

Respond immediately to any Incident reported through the Support Channels and serve as Incident Commander as needed.


### The Help Desk Manager

Review and revise processes and procedures.

Provide stakeholders with reports related to the Help Desk’s performance.

Serve as a relationship manager between Tier 1 and Tier 2 staff.

Ensure the Help Desk is properly staffed to support forecasted Queue performance needs.

### The Delivery Manager

Prioritizes Tier 2 backlog queue and holds accountable Tier 2 rotation staff.

### Types of requests

#### User How-To or User Error Tickets

Please refer to the new living document on common issues:
[Helpdesk Support Common Topics and Canned Responses](https://docs.google.com/document/d/1Y7TQ_OM1Zn6rfdOHXSGxUrhP4dK2DemXb5q--tLDw6M/edit?usp=sharing) **This link goes to a 404**


### Defects

Tier 1 will escalate all Critical and Non-Critical Defects to Tier 2.  

### Content Questions

Questions related to content and the activities around how to-post that content may require assistance from VA staff.  Tier 1 should engage VA Product Owners to ensure they are aware of content related tickets by adding the Product Owner as a Participant to the JIRA Ticket.

Participants are able to add to the Conversation by replying to Ticket emails they receive and are also provided an informative view into content related Tickets involving their Staff.

### Ticket Classification 

[Labels and Components of JIRA](https://docs.link-replaced.com/spreadsheets/d/1iBvqWLLLQ3ROlvGE0_T3WdNIx0j14szYYjEswqmmx5U/edit#gid=0) **This link goes to a 404**


### CMS Feature and Content Related Guides

[Writing content for VA.gov](https://prod.cms.va.gov/help/cms-basics/writing-content-for-vagov)

[Content release to VA.gov](https://prod.cms.va.gov/help/cms-basics/content-release-to-vagov)

[Finding content](https://prod.cms.va.gov/help/cms-basics/how-to-find-content-to-edit)

[Viewing revisions](https://prod.cms.va.gov/help/cms-basics/how-to-view-revisions)

See more guides on [CMS basics](https://prod.cms.va.gov/help/cms-basics)

### For VA Medical Center Editors
Support Channels are [VACMSSupport@va.gov](mailto:VACMSSupport@va.gov) and/or the "Contact Help Desk" button on the CMS.

[Overview of processes](https://docs.link-replaced.com/document/d/1piIkYdFjvcy0_OMlD3oWVj9o6sX3g5ykG0bopGMiHxI/edit#heading=h.113j7shbaqi2) **This link goes to a 404**

[Engaging the CMS Team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/working-with-cms-team.md)

[Helpdesk Service Level Agreement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/helpdesk/service_level_agreement.md)

[VAMC guides by content type](https://prod.cms.va.gov/help/vamc/vamc-guides)

[Veteran-centered design for VAMC editors](https://prod.cms.va.gov/help/vamc/about-veteran-centered-design-for-health-care-sites)

### For Product Teams

Primarily these are served via Slack in the **#cms-support** channel.

[Managing demo environments](https://prod.cms.va.gov/help/how-to-access-and-manage-demo-environments)

[Releasing content in the demo environment](https://prod.cms.va.gov/help/how-to-release-content-in-the-demo-environment)

### Account Creation & Training

[CMS User Administration](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/cms/user-administration)

[2022 Heldesk Access Request Decision Chart](https://docs.google.com/presentation/d/10bG3GxxwviZFd-KoTSVYFFkNXNgqKYerVxoX_4TrOro/edit?usp=sharing) **This link goes to a 404**

[Training Runbook](https://docs.link-replaced.com/spreadsheets/d/13jx1rhF5oRLXJNky0ff0zBfE0yR_NUTiAB3oS5T2TpQ/edit#gid=1427489097) **This link goes to a 404**

[VA Onboarding Checklist](https://docs.link-replaced.com/spreadsheets/d/1UTJaiB9Mwfnoiv26saXrC-OniadWSJxkEhSO5TA3WH4/edit#gid=0) **This link goes to a 404**

[New Account and Training Email Templates](https://docs.link-replaced.com/document/d/1WxQW7jD91PPviEFGUW4nUuBMApqn9kYiFlP8EJTCNT8/edit#heading=h.csl3ak7tjvj3) **This link goes to a 404**

### Resources

#### Incidents and Defects

[Incident Response Procedures](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/helpdesk/incident-response.md)

[Incident Response Contact Information](https://docs.link-replaced.com/spreadsheets/d/1RiqpHVipfQEjPmkOAhe1coy_wL__49MLLIF6b5Th2xI/edit#gid=0) **This link goes to a 404**

#### CMS Deployments

[Jenkins Status](http://jenkins.vfs.va.gov/job/deploys/job/vets-gov-autodeploy-vets-website/)

[Deployment](http://jenkins.vfs.va.gov/job/builds/job/vets-website-content-vagovprod/)

#### Broken links

[Broken Links Sync](https://docs.link-replaced.com/document/d/1KOqqIRVy4i4kNuxJABxLaPBtA6lmIxs0vbg4E3bX19g/edit?ts=6022f79b) **This link goes to a 404**
 

[Content Types](http://training.demo.ci.cms.va.gov/admin/content-models/content) **This tugboat instance no longer exists**

[Content Release How-to](https://prod.cms.va.gov/help/cms-basics/content-release-to-vagov)

[Canned Answers](https://github.com/department-of-veterans-affairs/va.gov-cms/tree/master/helpdesk-responses) **This link goes to a 404**

[Sprint Best Practices](https://docs.link-replaced.com/document/d/1wx0wpqEHkCDEAb4lu8EdZU4Tie0RIky-TTPrKXrNK0o/edit#heading=h.k3ui031qfw4l) **This link goes to a 404**

[CMS Onboarding Service Blueprint](https://app.mural.co/t/vagov6717/m/vagov6717/1605735264080/64a23a4e0bcff45cafebd576db9a787d54127dbc)

[GitHub Repository for public facing documents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/cms)

[Listening Session with VA](https://app.mural.co/t/vagov6717/m/vagov6717/1613420145908/8a8a1b99748bea534e06aca0ba041160341f1139)

[Campaign Landing Page](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates)

#### Drupal CMS Orientation for VAMC editors

- [Session 1: Getting started](https://prod.cms.va.gov/help/get-training/session-1-getting-started)
- [Session 2: Editing basics](https://prod.cms.va.gov/help/get-training/session-2-list-content-types)
- [Session 3: Health services](https://prod.cms.va.gov/help/get-training/session-3-services)
- [Session 4: Facilities](https://prod.cms.va.gov/help/get-training/session-4-facilities)
- [Session 5: Detail pages, menus, and revisions](https://prod.cms.va.gov/help/get-training/session-5-other-content-types)

Helpful references to have ready during training sessions. Use this link during CMS orientation to practice editing content in the CMS.

[CMS training environment](https://cms-training-pion6wlxie1t0mckcgwjl4kid1k1haqe.demo.cms.va.gov/) **This tugboat instance no longer exists**

#### Login and account

[Requesting an account](https://prod.cms.va.gov/help/cms-basics/how-to-request-a-cms-account)

[Roles and permissions](https://prod.cms.va.gov/help/cms-basics/about-cms-account-permissions)

[Logging in/out](https://prod.cms.va.gov/help/cms-basics/how-to-log-inout)

[About CMS sections](https://prod.cms.va.gov/help/cms-basics/sections) **This link goes to a 404**

Timely content types

#### Event & Events List

[About events content](https://prod.cms.va.gov/help/vamc/about-events-content-for-vamcs)

[How to edit an existing Event](https://prod.cms.va.gov/help/va-medical-centers-vamcs/about-events-content-for-vamcs/how-to-edit-an-existing-event) **This page was archived and is still referenced in multiple locations in the knowledge hub**

[How to edit or add a new Event](https://prod.cms.va.gov/help/cms-basics/how-to-edit-an-event)

[How to edit an Events List](https://prod.cms.va.gov/help/va-medical-centers-vamcs/about-events-content-for-vamcs/how-to-edit-an-events-list)

#### Story & Stories List

[About stories content](https://prod.cms.va.gov/help/product-guides/vamc/by-content-type/about-stories) **This page was archived and is still referenced in multiple locations in the knowledge hub**

[How to edit a Story](https://prod.cms.va.gov/help/va-medical-centers-vamcs/about-stories-content-for-vamcs/how-to-add-a-story)

[How to edit a Stories List](https://prod.cms.va.gov/help/va-medical-centers-vamcs/about-stories-content-for-vamcs/how-to-edit-a-stories-list)

#### News Release & News Releases List

[About news release content](https://prod.cms.va.gov/help/vamc/about-news-release-content-for-vamcs)

[How to add a News Release](https://prod.cms.va.gov/help/vamc/about-news-release-content-for-vamcs/how-to-add-a-news-release)

[How to edit a News Releases list](https://prod.cms.va.gov/help/vamc/about-news-release-content-for-vamcs/what-is-a-news-releases-list)

#### Health Services Content Types
<empty>

#### Health Services List

[How to edit a health services list](https://prod.cms.va.gov/help/va-medical-centers-vamcs/about-health-services/how-to-edit-a-health-services-list)

#### VAMC System Health Service

[How to edit an existing VAMC system health service](https://prod.cms.va.gov/help/edit-vamc-system-health-service) **This page was archived and is still referenced in multiple locations in the knowledge hub**

[How to add or edit an exisiting VAMC system health service](https://prod.cms.va.gov/help/vamc/how-to-add-or-edit-a-vamc-system-health-service) **This is the new link for this that combined add and edit together into one page**

#### Locations Content Types

[VAMC System Home Page](https://prod.cms.va.gov/help/vamc/how-to-edit-a-vamc-system-homepage)

#### Alerts and Operating Statuses

[About alerts and operating statuses](https://prod.cms.va.gov/help/vamc/about-locations-content-for-vamcs/about-alerts-and-operating-statuses)

[How to edit a Facility Operating Status](https://prod.cms.va.gov/help/vamc/about-locations-content-for-vamcs/about-alerts-and-operating-statuses/how-to-edit-a-vamc-facility-operating-status)

[How to edit a System Banner Alert](https://prod.cms.va.gov/help/vamc/about-locations-content-for-vamcs/about-alerts-and-operating-statuses/how-to-add-a-system-banner-alert)

#### Facilities & Locations

[About facilities and locations content](https://prod.cms.va.gov/help/vamc/about-locations-content-for-vamcs)

[How to edit a Locations List](https://prod.cms.va.gov/help/va-medical-centers-vamcs/about-locations-content-for-vamcs/how-to-edit-a-locations-list)

[How to edit a VAMC Facility](https://prod.cms.va.gov/help/va-medical-centers-vamcs/about-locations-content-for-vamcs/how-to-edit-a-vamc-facility)

[How to edit a facility map](https://prod.cms.va.gov/help/vamc/about-locations-content-for-vamcs/how-to-edit-a-facility-map)

#### About Us Pages
<empty>

#### Detail Page

[How to edit Detail Pages — for VAMCs](https://prod.cms.va.gov/help/vamc/how-to-edit-or-add-a-vamc-detail-page)

[How to edit VAMC system sub-menus](https://prod.cms.va.gov/help/product-guides/vamc/by-content-type/menus) **This page was archived and no longer something editors can do**

#### Staff Profile & Leadership List

[How to edit or add a Staff Profile](https://prod.cms.va.gov/help/vamc/how-to-edit-or-add-a-staff-profile)

[How to edit a Leadership List](https://prod.cms.va.gov/help/vamc/how-to-edit-a-leadership-list)

#### VAMC Guides

[About Veteran-centered design for health care sites](https://prod.cms.va.gov/help/vamc/about-veteran-centered-design-for-health-care-sites)

Learn about the new vision for VA health care sites and how you can support Veteran-centered content.

[VAMC guides by content type](https://prod.cms.va.gov/help/vamc/vamc-guides)

Find guides on editing VAMC information based on its content type in the CMS.

[Help Desk Share Drive](https://drive.link-replaced.com/drive/folders/1opC6DgZyBQ6uEVzIz3FWmISMLt-Y91ts) **This link goes to a 404**

[CMS Common Questions](https://docs.link-replaced.com/document/d/13uors76aPKpfKvFD-ta0dyXxo1Tp6UlLeChFUccDwv4/edit#heading=h.l8h1knzfmhu9) **This link goes to a 404**

#### CMS Environments

CMS non-prod Environments (default password _______ ) 

[Staging](https://staging.cms.va.gov/)

[Training](https://cms-training-pion6wlxie1t0mckcgwjl4kid1k1haqe.demo.cms.va.gov/) **This tugboat instance no longer exists**

[Tugboat](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/master/READMES/tugboat.md)

[Prod](https://prod.cms.va.gov/)

[CMS Training](https://staging.cms.va.gov/help/access-training)

[CMS Roles and Responsibilities](https://prod.cms.va.gov/help/cms-basics/about-cms-account-permissions)

#### Performance and Reporting

[Help Desk Reporting Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/helpdesk/helpdesk_reporting_process.md)

[Pre-Built Reports in JIRA Service Desk](https://va-gov.atlassian.net/jira/servicedesk/projects/VAHELP/reports)

[CMS Features](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/VA-CMS-Product-Sheets.pdf)


## Self-Service Training for Drupal CMS Access
Drupal CMS orientation sessions contain both videos and activities that are required to be completed for access to the Drupal CMS production (live) environment.  User’s username for the production (live) environment will be created and emailed to their va.gov e-mail address when orientation activities are completed.

## Code Freeze
During Federal Holiday’s the Help Desk as well as the Product engineers, developers, and owners will implement a “Code Freeze” in which no new updates to the Code or Publishing will occur.  This Freeze process may be altered with the implementation of an immediate publishing framework. 

## Release Notes
The Sprint Demo (often part of the Sprint Review ceremony in Agile/Scrum methodology) is a critical step in completing a sprint, an opportunity to excite stakeholders, and a chance for developers to show off their work.  The Help Desk staff will attend Sprint Demo’s and document the various product changes and then publish those changes via Release Notes on the va.gov website (page to be determined)  and Github.

## VA.gov Product Directory
A spreadsheet that lists which team owns an issue.
[https://docs.link-replaced.com/spreadsheets/d/1hzz6whEGoQJQbiNvIggirhydYYdv57nfOZfLvFqZ1pQ/edit?ts=5d28958a#gid=1535759874] **This link goes to a 404**


## Issues that Prevent the Publishing of Content

### Broken Links**
Link-checking is part of the website's compilation or build process.  If there is a broken link, content-only deploys cannot occur.  This is because various components of the build process.  Broken Links do not block CMS deployment, broken links blocks content releases. 

## Previous Issues
### If Edit Tab Does Not Appear
Ensure that the User is added to “Public Websites” Section, editing the appropriate access to the node. 

### If a Page is Not Linking Well but Is Published Under Drupal CMS
Verify if the Node ID is correct

### What Happens if Published in Error?
Change the state of the page to “Archived”.

### Does Data Migration from TeamSites Delete Data?
The Migration doesn’t delete notes only adds or updates.

### Benefits Hub Landing Page
Go to the Main Content page and filter by “Benefits hub landing page” in order to see and access and edit the page.

### Editing Forms Results in Page Not Found
Check user permissions.

### How to Update Contact Info
VAMC Facility centralized information must be changed in the VA’s National Database.  Instructions can be accessed only while connected to the internal VA network at https://vaww.va.gov/WEBCOM/VAMCFacilityLocationUpdates.asp **This link goes to a 404**

## Subject Matter Experts
#### SW
	505 Website Error
	VA Forms
	Data issues with Contact Info
	“Undefined Caption in Table Field” Error in CSV
	Page performance issues
	Migration Issues
	Menus

#### AR
	graphQL
	CMS Export

#### ZM
	FE Engineer

#### KW
	Service Locations
	Facilities Status
	Search and find all Pages/Links to a URL or Node ID
	Dashboard

#### JH
	Sitemap.xml
	Search
	
#### HB
	Benefits Hub page
	
### Government Roles the Help Desk provides Support to:
	#### Public Affairs Specialist 
	#### Director of Public Affairs
	#### Public Affairs Staff

## VISN to Facilities Index
#### VISN 19:  Veterans Affairs and Veterans Health Administration
<more to add later if value exists for the data>
	
## Governance
	Pages throughout the CMS are built dynamically by the "Front End" code.  Defects or changes to the code can affect how pages are built and any change request or defect should be communicated through Slack using the appropriate governance for the page affected:
	#cms-product-triage
	#vsa-public-websites
	#vsa-facilities
