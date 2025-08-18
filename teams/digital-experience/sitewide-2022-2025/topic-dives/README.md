# Topic Dives

## Purpose/background
The VA CMS and Sitewide program live in a vast system with many moving part. These topic dives are meant to be shorter presentations on a specific topic within that ecosystem, that simplifies onboarding or work in a specific area. If there is a topic you want covered, ask about it! Someone else is probably curious too. Candidates for Topic Dives include: CMS / Drupal engineering topics, environmental information, process workflows, Front-end ecosystem topics / data handling, or intricate UX topics.

## How to sign up to present
Add your preferred date and topic to the Topic Dives list below. This acts as both agenda for upcoming sessions, as well as an archive of previous sessions.

## Requested future topics
Please add any potential future topics you would like covered below:
- Overview of the CMS Dashboard for Vet Center editors (and - if possible - the research for how the cards and tasks were determined)
- How does the help desk work?
- content api / accelerated publishing (when it is available)
- How do CMS teams use Task files?
- Sections: How do they work for subsections? How to they interact with roles? ([Slack convo as basis](https://dsva.slack.com/archives/CT4GZBM8F/p1723505580525429))
- Cypress

## Topic Dives

### 1/21/25 - Drupal client-side validation

[Drupal client-side validation Recording](https://dsva.slack.com/archives/C03LFSPGV16/p1743543719989679?thread_ts=1743543352.911129&cid=C03LFSPGV16) in DSVA Slack

The client-side validation module in Drupal has some quirks. Sitewide implemented a new part of the module interface (submitted upstream to the module maintainer) to address an issue where a JQuery bug in the library used by the module causes client-side validation to stop working after it encounters validation errors on any date/time field. 

Recording from Sitewide demo explains the change, why it was made, and some additional context about where client-side validation was broken and is now working again.

Related to https://github.com/department-of-veterans-affairs/va.gov-cms/issues/17896

### 3/20/25 - Outreach Events
Covers: 
* Event listings
* Events
* Drupal differences
* How Events present on Outreach Events page, vs on VAMCs
* Summary of upcoming work probably needed to add Events to VBA and Vet Centers

https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/sitewide-2022-2025/topic-dives/videos/events_topic_dive.m4a

### 1/16/25 - VAMC Topic dive
VAMC topic dive recording: https://dsva.slack.com/archives/C03LFSPGV16/p1743543819263229?thread_ts=1743543352.911129&cid=C03LFSPGV16

Covers: 
* VA Services & how they tie to Systems & Facilities
* VAMC Systems
* VAMC Facilities (medical centers & clinics)
* Operating Statuses
* Banners w Situation Updates
* Special snowflake VAMC Systems:
  * Lovell
  * VA Manila
 

### 12/23/24 - Facility locator application
[Sitewide Topic Dive - Facility Locator.pdf](https://github.com/user-attachments/files/18233560/sitewide-topic-dive--facility-locator.pdf)
* Recording:https://dsva.slack.com/archives/C03LFSPGV16/p1743543489131379?thread_ts=1743543352.911129&cid=C03LFSPGV16

### 7/10/24 - Find a Form
https://dsva.slack.com/archives/C03LFSPGV16/p1743543526066549?thread_ts=1743543352.911129&cid=C03LFSPGV16

Soup to nuts, how Find a Form works, including: 
* Nature of upstream data housed in Forms DB 
  * Ownership of Forms DB
  * Ownership of the business processes within each administration to create / manage forms and PDFs
  * Forms contacts
  * [VA Forms Contacts docs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-a-va-form#va-forms-contacts)
* Migration of Forms data to Drupal
  * [Migration docs](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/READMES/migrations-forms.md))
  * [Migration in Drupal](https://prod.cms.va.gov/admin/structure/migrate/manage/forms/migrations/va_node_form) 
* How we manage VA Form nodes in Drupal
  * Flagging mechanisms
  * Metadata changes we watch for and why
  * Publishing VA Form nodes: CAIA's job and how that works
  * [VA Forms admin queues/views](https://prod.cms.va.gov/admin/content/va-forms)
* Lighthouse Forms API & how we use it / how they use the CMS
  * [Lighthouse contacts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-a-va-form#lighthouse-api-team)
  * [LH / Forms data flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/engineering/engineering.md#end-to-end-flow-to-lh-forms-api)
* Form download flow: from form Search page vs. from Forms detail page ([Mural artifact of technical flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/vagov6717/1660150431569/27c80eaeeaedfd88c80322ae177b68c503345ba9?sender=u0b235d03cbd64f7f93673243))
* Troubleshooting
  * Typical problems
  * Interaction with Forms managers for data fixes
  * [Troubleshooting docs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/engineering/troubleshooting.md)
* Monitoring
  * [Public Websites datadog dashboard](https://vagov.ddog-gov.com/dashboard/szu-xny-9fu/public-websites-dashboard)
  * [Forms APM monitors in Datadog](https://vagov.ddog-gov.com/apm/services/find-a-form/operations/rack.request/resources)

### 6/17/24 - Flippers & Feature Toggles
  - Jill Adams
  - Describes the very high level use case / context for both Drupal feature toggles, and Flippers used in the VA.gov Frontend (driven by vets-api & vets-website)
  - [Video](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/sitewide/topic-dives/videos/feature-toggles-flippers.mp4) - MP4 you'll need to download

### 3/5/24 - ECA module / use for Aging content notifications 
   - Daniel Sasser
   - Primarily Drupal: Use of ECA module, how we are configuring it on Public Websites for use to send aging content notifications for Full Width Banners. This was a team-internal primer / demo before the feature shipped. Future topic dive may go into greater detail.
   - Video: https://dsva.slack.com/archives/C03LFSPGV16/p1743543469946949?thread_ts=1743543352.911129&cid=C03LFSPGV16

### 10/30/23 - How to make your Content Model Documentation ride with your code.
   - Steve Wirt
   - This is primarily for developers.  Prior to now, Content Model Documents had to be created on prod **AFTER** the code adding a new field/paragraph/content-type/taxon made it to prod.  This is to cover a new process to have it ride with the code.
   - Video: https://dsva.slack.com/archives/C03LFSPGV16/p1743543418453659?thread_ts=1743543352.911129&cid=C03LFSPGV16
   - [Documentation of process](https://prod.cms.va.gov/admin/structure/cm_document/process/127/importing-site-documentation)

### 10/23/23 - VA Service Taxonomy
- Dave Pickett
- The [VA Service Taxonomy](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/va-service-taxonomy) is a confusing part of the Facilities product portfolio. It is simultaneuously the simplest of our products (very little dedicated code, mostly powered by out of the box Drupal functionality, content updates are infrequent, no dedicated front end to maintain, etc.) and the most complex (source of truth for fields on lots of other content types, governance spans all our stakeholders, small changes can have large downstream impacts, etc.). Tune in to learn about how the VA Service Taxonomy works and how it is key to the long-term vision of the Facilities team.
- [Slides](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/va-service-taxonomy/VA-Service-Taxonomy-presentation.pdf)
- [Short and sweet slides](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/va-service-taxonomy/VA-Service-Taxonomy-presentation-short.pdf)
- Video: https://dsva.slack.com/archives/C03LFSPGV16/p1743543951477729?thread_ts=1743543352.911129&cid=C03LFSPGV16

### 10/16/23 - Datadog!
- Chris Kim & Eli Selkin
- Datadog is a monitoring tool now available to VFS teams. Recently, Chris & Eli configured monitors and synthetic tests for Public Websites and Facilities use cases, and will share learnings.
- Video: https://dsva.slack.com/archives/C03LFSPGV16/p1743543446528809?thread_ts=1743543352.911129&cid=C03LFSPGV16

### 6/12/23 - Cerner/KISS
- Ryan Koch
- Cerner: VA health systems are undergoing a years-long transition of their Electronic Health Records systems, moving away from VistA in favor of Cerner. The Public Websites team has been tasked with managing the piece of that puzzle that involves linking an authenticated veteran to the appropriate system based on whether that veteran's health care facility has transitioned or not. KISS (Keep It Simply Static): We have a system in place to generate arbitrary static data files from CMS data. The Cerner/EHR data points making their way from Drupal to the browser is one example of this system being used.
- Cerner/KISS Video: https://dsva.slack.com/archives/C03LFSPGV16/p1743543406454599?thread_ts=1743543352.911129&cid=C03LFSPGV16
- [Slides](https://docs.google.com/presentation/d/1ONE28eBTbIOyKfl1NvrmMji5r8CbrC9VJExhemO4fik)
- [Historic coverage of solutions that KISS can improve](https://docs.google.com/presentation/d/1h5BKiVCvw_K6vWH8xn4crjHnLV7ax0L1bVLWI8EWTdg) (the time references are about a year out of date)

### 6/5/23 - Foundational accessibility testing
- Laura Flannery
- [Foundational accessibility testing video](https://youtu.be/cTOXiOW4oE4)
- [Slides](https://docs.google.com/presentation/d/1QGgCFZgwOQ8KiixNhvJ1Z4xi8OwN6FZ6UoKhYal9Rp0)

### 5/22/23 - Github / pull request basics for non-engineers
- Jill Adams
- [Github/Pull Request Basics video](https://drive.google.com/file/d/1sM4gD6BYeXgRobRhCI6oTXgCOvmOWHXs/view)
- [Github/Version Control Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1683580605953/e136d3c6247df126dab4e8d317cbe49b6b057e69?sender=u25440eff886a526ece257322)

### 5/15/23 - CMS User Permission Model (Roles, Permissions, Workflows & Sections)
- Dave Pickett
- [CMS User Permission Model video](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/sitewide/topic-dives/CMS%20User%20Permission%20-%20Dave%20P%20-%205.15.2023.mp4)
- [CMS User Permission Model slides](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/content-governance/CMS-user-permission-model.pdf)

### 4/17/2023 - Diagrams in Github / Markdown with Mermaid
- Steve Wirt
- [Diagrams in Github video](https://drive.google.com/file/d/1Rjcjk_ZRoadOFf8eXJfmwsdLX1Zr7GBH/view)
- Examples in use already
  - [Facility Migration](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/READMES/migrations-facility.md#data-flow)
  - [Forms Migration](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/READMES/migrations-forms.md#data-flow)
  - [Engineer workflow](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/READMES/workflow.md#module-removal--uninstall)
  - [Quarterly planning](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/13286)

### 2/6/23 - Drupal and internationalization
- Tim Cosgrove
- [Drupal and internalization video](https://drive.google.com/file/d/1pdnSGqbVopl92ORVFIxuQE5yKexM4n4Z/view)

### 11/21/2022 - VBA Veteran Research Readout
- Dave Pickett
- [VBA Veteran Research Readout video](https://drive.google.com/file/d/1pxqhoKk0o6qZ_K3bvvsznuNoE4bvpxC5/view)
- [VBA Veteran Research slides (PDF)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/regional-offices/research/2022-8-veteran-facing/research-readout.pdf)
- [VBA Veteran Research slides (PPT)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/regional-offices/research/2022-8-veteran-facing/VBA_research_readout.pptx)

### 10/31/2022 - Spec Tool 2.0
- Jill Adams and Daniel Sasser
- [Spec Tool 2.0 video](https://drive.google.com/file/d/1nQZqZPIxIsVn-x0zeNwELJTGDP-ByFyJ/view)

### 8/29/2022 - Next-build technical overview
- Tim Cosgrove
- [Next-build technical overview video](https://drive.google.com/file/d/1gAVAsgTfvcp7XxvD_bax-2qlELNUKn-U/view)
- [Next-build technical overview slides (note: still in progress, do not export)](https://docs.google.com/presentation/d/16QUzUmsdksWHQql9VnjpaBp1ewFAdrszv4TAsCxHBhU)
 
### 8/22/2022 - Next-build overview and roadmap
- Tim Cosgrove
- [Next-build overview and roadmap video](https://drive.google.com/file/d/18RxKVLKSWoWLH9KcaHF3PcL00huHkaHx/view)
- [Next-build overview and roadmap slides](https://docs.google.com/presentation/d/1QslO0qdxQm2QFczE0dxKrwCMFjqlRh-_z2xnc5eK83U)

### 07/28/22 - CMS Content Model
- Lynn Stahl
- [CMS Content Model video](https://youtu.be/4-EJazw8J_M)

### 6/27/2022 - Mailhog [testing emails locally and on tugboat]
- Tanner Heffner
- [Mailhog video](https://youtu.be/cYZgQDf5kdQ)

### 6/13/2022 - Anatomy of a hook_update_n (deploying non-config changes programmatically)
- Steve Wirt
- Anatomy of a hook_update_n video: https://dsva.slack.com/archives/C03LFSPGV16/p1743544086356029?thread_ts=1743543352.911129&cid=C03LFSPGV16
- [Anatomy of a hook_update_n slides](https://docs.google.com/presentation/d/1TRRr5diCno_5HPZ6kBJvsKcg92orbS3jL3c-KOG4wws)

### 4/8/2022 - Spec Tool 1.0
- Lynn Stahl
- [Spec Tool 1.0 video](https://youtu.be/keAtfGm8a8U)

### 1/27/2022 - Auto compiling theme assets
- Tanner Heffner
- [Auto compling theme assets video](https://youtu.be/n8YtE7eWPzI)

### 1/20/2022 - Grafana/Datadog/Sentry
- Neil Hastings
- [Grafana/Datadog/Sentry video](https://youtu.be/Co_jieBKsZ0)

### 1/6/2022 - Preview button, content release and FE page links
- Steve Wirt
- [CMS Content Workflow Readme](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/READMES/cms-content-workflow.md)

### 1/4/2022 - Sections taxonomy and governance
- Kevin Walsh
- [Sections taxonomy and governance video](https://youtu.be/dMZm0aeWOp0)

### 10/5/22 - Sections: technical detail for managing
- Steve Wirt
- [Sections: technical detail for managing video](https://youtu.be/dMZm0aeWOp0)

### 12/21/21 - VA Forms Content Flow
- Steve Wirt
- [VA Forms Content Flow video](https://youtu.be/CuPI8DB7aR0)

### 12/16/21 - Facility API Push Pull
- Steve Wirt
- [Facility API Push Pull video](https://youtu.be/3PNbOqQXh9s)

### 12/14/21 - Flow of CMS release and deploy
- Eric Oliver
- [Flow of CMS release and deploy video](https://youtu.be/274NSfbva8o)

### 12/9/21 - CMS SiteAlerts (shields/notifications)
- Steve Wirt
- [CMS SiteAlerts video](https://youtu.be/XBIVcBAl6MY)

### 12/7/21 - User Perms Service
- Ethan Teague
- [User Perms Service video](https://youtu.be/CFQM2dSKAvI)

### 12/2/2021 - Centralized Content
- Steve Wirt
- [Centralized Content video](https://www.youtube.com/watch?v=uLUXpbc1DhM)

### 11/30/21 - Broken Links
- Steve Wirt
- [Broken Links video](https://youtu.be/JmlCGlQxRtE)
  
