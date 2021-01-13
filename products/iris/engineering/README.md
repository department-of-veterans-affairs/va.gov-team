
This repository contains architecture decision records (ADRs) to capture documentation and diagrams for the Veteran-facing side of IRIS, however this team's work transitioned over to the Microsoft Dynamics 365 Omnichannel Portal in January 2021. 

We implemented the new Ask a Question form on VA.gov, adhering to the VA.gov [modernization efforts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-gov-relaunch-2018/va-gov-strategy/digitalmodernizationstrategy.pdf). We leverage the existing [Form Library ](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/forms/form-tutorial-basic/)on the existing platform. The code lives in the following repositories:

-   [vets-website](https://github.com/department-of-veterans-affairs/vets-website): frontend, code is in React and uses the VA design system

-   [vets-api](https://github.com/department-of-veterans-affairs/vets-api): backend, Ruby on Rails

-   [vets-json-schema](https://github.com/department-of-veterans-affairs/vets-json-schema): form data used as a contract between frontend and backend

Naming: our code in VA.gov repositories uses either "contact-us" or "ask-a-question" as labels.

Dropdown values
---------------

Status: static values of topic, implementation is not finalized

-   On-going discussion with business to discover any additional requirements

-   Reference default VA.gov and existing Oracle IRIS  implementation of static values

File Attachments 
-----------------

Epic: [Document Upload to Inquiry Form](https://github.com/department-of-veterans-affairs/orchid#workspaces/orchidiris-5f29c3a0250c8f001f1397ac/board?epics=285091133_166&filterLogic=any&repos=285091133)

Status: Spiked, not yet implemented

-   File attachments are an optional field for certain topics.

-   We explored the work involved to add file attachments to the form. In general, on VA.gov, when a user uploads a document the file goes through an antivirus scan, then is uploaded to an AWS S3 bucket (provisioned per app/form) as an interim storage solution. The file can then be sent to another backend system (in this case PATS-R).

-   PII/PHI should not be shared, and should be encrypted. On VA.gov the S3 buckets use AES-256 encryption and files are set to be deleted after some number of days.

Conditional Authentication by topic
-----------------------------------

Epic:  [Enable Authentication on Contact Us/Ask a question/IRIS inquiry form](https://github.com/department-of-veterans-affairs/orchid#workspaces/orchidiris-5f29c3a0250c8f001f1397ac/board?epics=285091133_39&filterLogic=any&repos=285091133)

Status: Spiked, not yet implemented

-   It is a business requirement that certain topics require authentication. Authentication requirements can be based on a level one, level two, or level three topic (labeled on the new form as category, topic, and subtopic). However, for other topics there should be an option to submit the form without login.

-   We added the three topic fields to the form introduction page, and forced login if certain topics were selected.

-   On VA.gov, data is lost when a user chooses to sign in during a form flow. To preserve the user's choices, we explored storing topics in URL parameters. There are other fields on the form that contain PII/PHI, and if those also needed to be preserved a different solution would be required.

-   Beyond topic-based authentication, some fields are hidden or required based on which topic is selected. Overall, there is quite a bit of topic-based logic in the form so it's important to find a clean, maintainable way to represent it.

-   ADR: [use VA.gov authentication](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/iris/engineering/doc/architecture/decisions/0007-authentication.md)

Leveraging secure messaging and email notifications
---------------------------------------------------

Epic: [Email Notifications and Secure Messaging Explorations](https://github.com/department-of-veterans-affairs/orchid#workspaces/orchidiris-5f29c3a0250c8f001f1397ac/board?epics=285091133_117,285091133_179&filterLogic=any&repos=285091133)

Status: Spiked, not yet implemented

-   Currently, GI Bill requires account to be created (within the Oracle Service Cloud product) before the user can submit an inquiry; for the use case of attending a school for a period of time, to submit additional documentation to capture there is a requirement for identity the user's history of the account

-   We started working on implementing a new, simple, secure messaging page on VA.gov, and sketched out an API.

-   For email notifications, we would most likely use VANotify. The 526 Form on VA.gov already users VANotify to send confirmation emails when users submit a form.

Integration with CRM
--------------------

Status: not yet implemented

-   CRM integration with PATS-R: 

-   Most of the work we've done towards integration with the backend CRM is captured in diagrams and an [OpenAPI specification](https://github.com/department-of-veterans-affairs/orchid/pull/177).

CRM integration with the existing Oracle Service Cloud, via Robotic Process Automation (RPA): 

![](https://lh3.googleusercontent.com/maKiLpS1RC1a8E5llYUPws4v6QA7EGI6o-nDEgMhLyzEReEKJGAJv9FCJlIx6xwvOm3Ham2lDHJhOCNiUF6TYIfbbFn7yuo04XM_9bmynOiLPdl3WqqV8l_bwApeSV37bo09Tnyk)For a phased roll out, we want to integrate the new form with both the existing Oracle backend and the new PATS-R instance. The Oracle tech support team has rejected the idea of exposing an API to integrate with, therefore, when the user submits the new form on va.gov, we need either to:

1.  Replicate the network calls made by the existing IRIS form

2.  Use RPA to automatically fill out the existing IRIS form connected to Oracle

3.  Send users directly to existing IRIS form

4.  New IRIS form will not be connected to Oracle at all

-   For option 1, we inspected the network calls and the form sends certain tokens that we do not have access to. 

-   For option 2, we played several spikes and were able to have a working demo using Selenium and Watir that took the form data submitted with the new IRIS form and entered the same values in the existing IRIS form and returned a confirmation number.

-   Given the amount of work required, we decided to deprioritize RPA work and come back to it if time permits. There was still quite a bit of work that needed to be done, for example, testing performance impact on va.gov, error handling, handling of discrepancies between the new and the existing IRIS form.

Exception handling and System Observability
-------------------------------------------

Status: Not yet implemented

Considerations for vets-api and integration with PATS-R via HTTP requests

-   Circuit Breaker pattern is already observed for integrating with external services in vets-api, but has not been implemented

-   Use Sidekiq, retry timeouts configurations, async calls

-   Having an incremental health check endpoint from an external API service

-   System observation dashboard - logs, dashboard, alerts

-   Don't log any PI, PII, PHI

-   Any exception error messages displayed to the Veteran will need to be reviewed in content, tone, and style by the Content/IA team

Go-live Strategy
----------------

-   Based on [VSP Collaboration Cycle template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle-visual.pdf), and the [VSP Product Development checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/Product%20Development%20Checklist.md)

-   [Timeline ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/iris/engineering/doc/architecture/diagrams/GoLiveStrategy/timeline2021.png)

-   [Product backlog](https://github.com/department-of-veterans-affairs/orchid/issues/174)

Post-MVP
========

Lighthouse Framework + API integration
--------------------------------------

-   Goal is to expose an API built on the Lighthouse API framework to encourage any external service/team to leverage and Ask a Question. 

-   Example use case would be - native mobile app development to have an API to integrate with

Admin Portal
------------

-   Currently, the conditional authentication flow and business logic to display the Veteran facing content is pretty complex

-   Any maintenance of changing the logic or the static content will require the VFS operational deployment cycle, which may take few days

-   Do consider an approach of having a power-user admin portal that could allow configurable way of maintaining the content

Maintenance and Operations Support 
-----------------------------------

-   All codebase within the VA.gov will have visibility and operational support of the VFS (Veteran Facing Services) team

Data migration
--------------

-   Data migration work was out of scope of TW

-   There is an audit requirement of retaining inquiry history for the last seven years

-   It would be helpful to maintain the inquiry history for the Contact Center agents to paint a full picture of each case, after the Oracle deprecation