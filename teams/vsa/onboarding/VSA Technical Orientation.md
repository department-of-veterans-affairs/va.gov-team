# VSA Technical Orientation
Technical orientation from the VSA Technical Lead ([pshort@governmentcio.com](mailto:pshort@governmentcio.com)/[paul.short@va.gov](mailto:paul.short@va.gov)) as of 03/17/2020. Primary audience are VSA front end and back end developers, but other VSA team members may find some of the links here useful. There is a lot of decent documentation available; however, some of it is changing, redundant, outdated, or requires more context in order to navigate. This is an attempt to capture the most important links in a structured order for a new developer.

## What We Do
We are currently working on: https://va.gov (public). 
*   VSA: [Veteran-facing Services Applications (VSA)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa#veteran-facing-services-applications-vsa); our team (applications).
*   VSP: [Veteran-facing Services Platform](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/README.md#veteran-facing-services-platform-vsp); the platform team.
*   VFS: Veteran Facing Services (consumers of VSP, including VSA).

### Overview
* Important public announcements and published articles, in reverse-chronological order (vets.gov now redirects to va.gov):

Date | Topic | Link
:--- | :---  | :---
2019_November | More Vets Are Taking Advantage of Digital Services Through New VA<span/>.gov | https://www.nextgov.com/it-modernization/2019/11/more-vets-are-taking-advantage-digital-services-through-new-vagov/161190
2019_February | VA celebrates early success metrics from the VA<span/>.gov relaunch | https://www.fedscoop.com/va-celebrates-early-success-metrics-va-gov-relaunch
2018_November | YouTube Video: Secretary Robert Wilkie introduces the new VA<span/>.gov website | https://www.youtube.com/watch?v=DEfRlL63nCg
2018_October  | VA<span/>.gov relaunches as front door to benefits, services | https://fcw.com/articles/2018/10/02/redesigned-va-site-sammie.aspx
2018_August   | The Importance of Product Management in Government | https://medium.com/the-u-s-digital-service/the-importance-of-product-management-in-government-b59933d01874
2017_Fall     | Simplifying Veteran-facing Services through Vets<span/>.gov | https://www.usds.gov/report-to-congress/2017/fall/vets-dot-gov
2017_June     | Vets<span/>.gov: A Modern Software Development Environment in Government | https://medium.com/the-u-s-digital-service/vets-gov-a-modern-software-development-environment-in-government-2a0ec8f0623a
2017_June     | Building Forms Faster on Vets<span/>.gov | https://medium.com/the-u-s-digital-service/building-forms-faster-on-vets-gov-d8619f4e9db

* Improvements: https://www.va.gov/scorecard
* Playbook: https://www.va.gov/playbook

## Main Repositories
Our work is conducted primarily over public GitHub repositories:
*   Docs: https://github.com/department-of-veterans-affairs/va.gov-team
*   Backend source: https://github.com/department-of-veterans-affairs/vets-api
*   Frontend source: https://github.com/department-of-veterans-affairs/vets-website

## Our Stack
We have a React/Redux/Node front end with a Ruby-on-Rails back end, plus static site generation (build) to pull content from Drupal CMS and Markdown.

### Frontend
*   React
*   Redux
*   Node.js (*only for npm and build?; S3/CDN for production? Check into this* ....)
*   Key Libraries:
    *   VA<span/>.gov Forms System (VAFS) based on RJSF (react-jsonschema-form)
    *   SASS: Formation (npm @department-of-veterans-affairs/formation)

### Content
*   Drupal CMS
*   Markdown (.md)
*   TeamSite OpenText CMS (for older web pages; migrating to Drupal CMS)

### Content Integration
(Build to extract Drupal and Markdown into static HTML):
*   GraphQL: queries to extract data from Drupal
*   Liquid: templates to expand data to HTML
*   Metalsmith Static Site Generator: the content integration build; runs on Node.js
*   TeamSite Integration (legacy): NGIX Web Server, AWS S3 (shared content), PERL

### Backend
*   Ruby On Rails
    *   Single, monolithic rails app. Some of the Lighthouse API parts use a "Modular Monolith" (Rails "engines").
    *   Rails MVC for REST APIs,
    *   Sidekiq for scheduled jobs
    *   Gems?
*   PostgreSQL (for some persistence, local app state; but most of the back end talks to other REST services rather than heavy local entity CRUD). Vets-api schema file.
*   PostGIS (GIS/spatial)
*   Redis (in memory; for sidekiq, persist user objects)
*   PDF tk (PDF generation)

## Slack
Slack is preferred over emails; however, you may be getting meeting requests via email that you’ll need to accept and add to your calendar.
*   Federal DSVA Workspace URL: https://dsva.slack.com
*   Guidance: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/onboarding/vsa-slack-guidance.md
*   DSVA Channels:

Channel                    | Description                           
:---                       | :---
#general                   |                                        
#random                    |                                        
#vfs-all-teams             |                                         
#vfs-backend               | Backend Developers, Technical               
#vfs-engineers             | Jenkins deploy, VSP announcements
#vfs-frontend	            | Frontend Developers, Technical 
#vfs-platform-support	   | VSP Platform Support (Help)
#vsa	                     | VSA all teams and practice areas
#vsa-authd-exp             | Team: Authenticated Experience
#vsa-bam-2     	         | Team: Benefits And Memorial #2
#vsa-benefits-memorial     | Team: Benefits And Memorial #1
#vsa-caregiver	            | Team: Caregiver
#vsa-caregiver-engineering | Team: Caregiver (just devs)
#vsa-ebenefits	            | Team: eBenefits
#vsa-engineering	         | VSA Frontend and Backend Engineers
#vsa-facilities	         | Team: Facilities
#vsa-product	            | VSA Product Collaboration (PMs, etc)
#vsa-public-websites	      | Team: Public Websites
#vsa-vamc-upgrade	         | Team: Medical Center

* If you still have questions about getting started or where to find certain resources (after having internally checked within your team and lead), the #vfs-platform-support channel is a good place to get some visibility to your question. It is the best way for team members to engage with the VSP Platform Support Team.
* **Bots**: ***/wtf*** looks up VA Acronyms (source/data: https://github.com/department-of-veterans-affairs/acronyms)
* **Apps**: Allow the “Google Calendar” Slack app to access your work account so that it can remind you of meetings and automatically set your status to “In a meeting”
* **Status**: In addition to setting your vacation time in the shared Google Calendar for PTO, remember to set your status for sick, commute (if within working hours), or vacation.

## Zoom Meetings
*   [https://zoom.us/](https://zoom.us/)
*   Sign in using your company’s Google email account (e.g., [pshort@governmentcio.com](mailto:pshort@governmentcio.com)).
*   Using free for now (40 minute limit for meetings over 3 people):
*   Create a meeting in Zoom first, then export to email.
*   After the meeting is visible in Google email/calendar, add attendees (from Google, not Zoom).

## Google Drive: VSA Team
We prefer most documents to be on GitHub, but sometimes they start off here.
https://drive.google.com/drive/folders/0ACZ1e6Rs_6sDUk9PVA

## Google Calendar (Shared): PTO
https://www.google.com/calendar/render?cid=governmentcio.com_rae2ref7gb5p67nmcuj2l7ege0@group.calendar.google.com
PTO Calendar: put your days off (approved vacation, sick, etc.) on our shared Google PTO Calendar.

## Google Calendar: Work Account
*   Since we have contractors with different email domains, you’ll need to “Share with Specific People” so that at least your free vs busy times are available. This will help teammates schedule meetings.
*   In addition to putting time away on the PTO Calendar, you can also block off OOO times and appointments as events on your work calendar, but don’t send them off as meeting invites.
*   If you have recurring short events that may take you away from Slack (lunch break, driving, etc), communicate those with your team, but also put them on your work calendar.

## GitHub
*   **GitHub: VA<span/>.gov | Public Repo | CONTENT (Markdown)** \
https://github.com/department-of-veterans-affairs/vagov-content \
The VA<span/>.gov content repository (aka VA<span/>.gov Interim CMS) in Markdown (.md) format.

*  **GitHub: VA<span/>.gov | Public Repo | CMS Integration** \
https://github.com/department-of-veterans-affairs/va.gov-cms \
Metalsmith, GraphQL, Drupal, Liquid Templates => build static HTML.

*   **GitHub: VA<span/>.gov | Public Repo | VETS-API** \
https://github.com/department-of-veterans-affairs/vets-api](https://github.com/department-of-veterans-affairs/vets-api \
Backend Source Code: Ruby/Rails (mostly REST APIs)

*   **GitHub: VA<span/>.gov | Public Repo | VETS-WEBSITE** \
https://github.com/department-of-veterans-affairs/vets-website \
Frontend Source Code: React.js, HTML/CSS

*   **GitHub: VA<span/>.gov | Public Repo | TEAM Non-Code Docs (VSP, VSA/VSFs)** \
https://github.com/department-of-veterans-affairs/va.gov-team \
Non-code documentation for VSP, VSA, and VSFs teams. \
Note that this repo (va.gov-team) supersedes the “[vets.gov-team](https://github.com/department-of-veterans-affairs/vets.gov-team)” repo. That older repo was made private on January 2020, but most of the content was migrated to this repo.

*   **GitHub: VA<span/>.gov | Private Repo | TEAM SENSITIVE** \
https://github.com/department-of-veterans-affairs/va.gov-team-sensitive

*   **GitHub: VA<span/>.gov | Private Repo | DEVOPS** \
https://github.com/department-of-veterans-affairs/devops

*   **GitHub: VA<span/>.gov | Client App Doc | Main** \
https://department-of-veterans-affairs.github.io/veteran-facing-services-tools

*   **GitHub: VA<span/>.gov | Client App Doc | Set up Locally** \
https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started \
Start here to learn how to set up your local VETS-WEBSITE and VETS-API development environments.

*   **GitHub: VA<span/>.gov | Client App Doc | Run Locally** \
https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/run-build \
Continue here to run them locally.

*   **GitHub: VA<span/>.gov | Client App Doc | Forms System** \
https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/forms \
VA<span/>.gov Forms System (VAFS). Uses RJSF (react-jsonschema-form).

*   **[GitHub: VA<span/>.gov | Client App Doc | Visual Design** \
https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design) \
VA<span/>.gov is built on top of VA's design system (VADS). VADS is based on the [US Web Design System](https://designsystem.digital.gov/). This site covers Formation Components and formation-react.

*   **GitHub: VA<span/>.gov | Client App Doc | Platform** \
https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform \
Overview of the platform: MetalSmith, React, Redux, Drupal CMS, TeamSite. Pay attention to the menu/links on the left panel, because it has things such as [content management integration](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/architecture/cms), [front end standards](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/front-end-standards/react), [unit testing](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/unit-testing) (tools/conventions), [build/deploy flow](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/architecture/build-deploy-flows), [Feature Flags](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-flags) (React, Drupal/Metalsmith, Node, Liquid; Release Toggles, Flipper UI) and a history of [documented platform decisions](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/front-end-standards/documented-decisions/summary) (why/when).

*   **GitHub: VA<span/>.gov | Client App Doc | Documentation Guide** \
https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/documentation-guide \
Meta: technical details on how to update content on the VA<span/>.gov Client Application Documentation site.

*   **GitHub: VA<span/>.gov | VSP | Main** \
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/working-with-vsp

*   **GitHub: VA<span/>.gov | VSP | Orientation** \
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/working-with-vsp/orientation

*   **GitHub: VA<span/>.gov | VSP | Request Access to Internal Tools** \
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/request-access-to-tools.md \
The "[additional orientation steps for developers](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/request-access-to-tools.md#additional-orientation-steps-for-developers)" section walks you though the request and setup for SOCKS access to Jenkins, Sentry, Prometheus, and Grafana. These DevOps services are hosted on private domains but can be accessed your web browser using an SSH script with the SwitchyOmega Chrome plugin to route web requests from your browser to the SOCKS5 proxy. If you have your PIV background check approved (eQIP adjudication), you may also request access to AWS Console for "troubleshooting, log file review, and to apply changes to the running instances and services" on AWS GovCloud.

*   **GitHub: VA<span/>.gov | VSP | Deployment Process** \
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/deployment.md

*   **GitHub: VA<span/>.gov | VSP | Review Instances** \
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/backend/review-instances.md#full-application-reviews

*   **GitHub: VA<span/>.gov | VSP | Platform Code Review Guidelines** \
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/code_review_guidelines.md \
Pull Request (PR) guidelines (required in order to merge to master).

*   **GitHub: VA<span/>.gov | VSP | Product Development Request Checklist** \
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/Product%20Development%20Checklist.md \
"All items here must be completed and signed off on by VSP before a new application can launch, and you should start convos about each item early - so you can work on them incrementally and iterate from day one."

*   **GitHub: VA<span/>.gov | VSP | Request For Change (RFC)** \
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/request-for-change \
Many of the RFCs do a good job explaining why things are the way they are. How to propose changes: create a RFC, then submit a PR so that it the RFC can be commented on and discussed; after consensus, merge/close.

*   **GitHub: VA<span/>.gov | VSA | Main** \
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa

*   **GitHub: VA<span/>.gov | VSA | Engineering** \
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/engineering

*   **GitHub: VA<span/>.gov | VSA | Engineering | QA Process** \
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/engineering/qa/vsa-qa-process.md

*   **GitHub: VA<span/>.gov | VSA | Engineering | Pull Request (PR) Process** \
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/engineering/pull-request-process.md

*   **[GitHub: VA<span/>.gov | VSA | Engineering | Triage and On-Call Process** \
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/engineering/devops/Triage-Process.md

*   **GitHub: VA<span/>.gov | VSA | Orientation** \
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/orientation

*   **GitHub: VA<span/>.gov | VSA | Onboarding | Slack Guidance** \
[https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/onboarding/vsa-slack-guidance.md

*   **GitHub: VA<span/>.gov | CMS | Create Drupal Account** \
https://github.com/department-of-veterans-affairs/va.gov-cms/blob/master/READMES/cms-login.md \
Depending on the work that you do, you may need access to the Drupal CMS. To gain access to Drupal, a VA email address and access to the VA network (via CAG or a GFE) is required. Users can log on via CAG with a username and password or a PIV.  If you have a VA email and VA network access, follow these instructions to create a Drupal CMS account.

*  **GitHub: VA<span/>.gov | Private | DevOps | Config** \
https://github.com/department-of-veterans-affairs/devops/tree/master/ansible/deployment/config/vets-api

*   **GitHub: VA<span/>.gov | Private | Team Sensitive | Accessing Staging** \
https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/accessing-staging.md

*   **GitHub: VA<span/>.gov | Private | Team Sensitive | VA Systems** \
https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/VA-Systems \
Backend developer integration to VA services.

## Development System
Although we do not dictate whether developers should use Windows vs Linux vs Mac, almost everyone uses a Macbook Pro, so that’s the path of least resistance. If you choose to use Windows or Linux instead, you should be ok, but there may be some configuration details you’ll have to take up on your own (not as much support if you run into issues).
*   Macbook Pro issued by US Resources to GovernmentCIO employees:
    *   You’ll have to call US Resources to get the password (account is not integrated into Active Directory)
    *   The good news is that I was already set up as admin. If you are not admin, let US Resources know immediately, because you need to be.
    *   If you upgrade to Catalina (recommended) you may need to acknowledge a few additional security prompts. I believe this came up with video and DisplayLink drivers though (dual monitor support), not the development software itself.
*   Most tools are open source.
*   We don’t have Visio; I had to use the online version (Office 365).
*   Software required for developers:

Software            | URL                           | Description
:---                | :---                          | :---
Homebrew            | https://brew.sh               | Package manager for macOS, this package is used via the terminal to install node.js, ruby and all the other software needed. Must be updated regularly in order to keep the repositories up to date. Software allows MAC users to install yarn, node.js and NVM.
GitHub Desktop      | https://desktop.github.com    | Adds support for Git command line and allows us to work with the VA repositories.
Visual Studio Code. | https://code.visualstudio.com | IDE to modify and debug code.
Docker	           | https://www.docker.com        | Needed to run Ruby, Postgres and all the necessary tools to execute the VA APIs.
Yarn	              | https://yarnpkg.com           | Dependency manager used on the VA frontend.
Node.js	           | https://nodejs.org            | Needed to execute the website frontend.
Postman             | https://www.getpostman.com    | Needed to test and develop REST APIs.
pgadmin	           | https://www.pgadmin.org       | PostgreSQL Tools.

#### Local Build Instructions
* **Front End:** https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/run-build
* **VETS API:** https://github.com/department-of-veterans-affairs/vets-api

## Internal Sites (SOCKS access)
Prerequisites (set up SOCKS5 Proxy access):
* https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/request-access-to-tools.md
* https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md
* Example GitHub "Environment Access Request" Issue (Request for SOCKS): https://github.com/department-of-veterans-affairs/va.gov-team/issues/5120

Important sites reachable only through SOCKS proxy:
* **Jenkins** (Builds): http://jenkins.vfs.va.gov
* **Sentry**: http://sentry.vfs.va.gov (production errors: http://sentry.vfs.va.gov/vets-gov/platform-api-production)
* **Grafana**: http://grafana.vfs.va.gov

### Tips
*   Use the ProxySwitchOmega Chrome Extension to access jenkins/sentry/grafana on vfs.va.gov.
    *   Set ProxySwitchOmega to auto switch.
    *   If you can’t reach the *.vfs.va.gov sites from Chrome, remember to first run <strong><code>ssh socks -D 2001 -N &</code></strong> from the command line. (If you are running from within the VA, use <strong><code>ssh socks-va -D 2001 -N &</code></strong> instead.)
    *   If you are getting 2001 port in-use related errors, be sure to close previous command line (terminal) sessions.
*   REF: https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/internal-tools 

## Citrix Access Gateway (CAG)
You may be required to use a VA email address and/or access internal VA sites for certain integration activities (such as backend service integration or discovery of sample data). As an alternative to lugging around Government Furnished Equipment (GFE), you can check your VA email and access internal VA web sites from virtual machines via Citrix Access Gateway (CAG) and your VA-issued Personal Identity Verification (PIV) card.

### Tips:
*   Bookmark the VA CAG site: https://citrixaccesspiv.va.gov
*   The instructions for VA email and CAG should come to you via email. If you haven’t gotten yours, check with our onboarding coordinator, Julie Ramirez ([Julie.Ramirez2@va.gov](mailto:Julie.Ramirez2@va.gov))
*   Julie will also issue you a PIV card reader if you ask.
    *   That’s the best route if you don’t have one already.
    *   If you want to use your own, it needs to be TAA-compliant (https://www.amtgov.com/what-is-taa-compliance.html). The list changes, but countries that are currently NOT TAA-compliant include China, India, Indonesia, Iran, Malaysia, Pakistan, Russia, and Sri Lanka.
*   On Mac, only Safari is supported for CAG (DO NOT use Chrome).
*   I have found that on my system, in Safari, clicking on a Desktop in the Citrix StoreFront just downloads an “.ica” file (does not automatically run it); however, if you also click the downloaded file, that will launch the Citrix session.

*   **GitHub: VA<span/>.gov | VSP | Accessing VA Network Without a VA Laptop** \
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/accessing-va-network-without-va-laptop.md \
The actual POCs do not apply (it’s outdated and/or applies to Ad-Hoc); however, some of the troubleshooting notes and steps here are helpful.

*   **VA Service Desk (855-NSD-HELP)** \
Helpdesk support for PIV and CAG on Macs are limited, but they can walk you through screens and resolve any confusion you may have with installation and the the CAG web sites.
    *   The technician I called said it’s about 50/50 chance for a CAG to work due to PIV reader issues.
    *   They can give you a two-week exemption to use username/password rather than PIV card.
    *   If you continue to have problems, we can ask our COR to request a long-term exemption for you. Instead of a PIV, you’ll use MobilePass instead, which is 2FA using your phone/mobile device.

*   **What is a Personal Identity Verification (PIV) Card?**
    *   https://www.oit.va.gov/programs/piv
    *   https://www.cac.mil/common-access-card
    *   https://en.wikipedia.org/wiki/Common_Access_Card
    *   https://en.wikipedia.org/wiki/FIPS_201

*   **MilitaryCAC<span/>.com** \
VA PIVs are essentially the same (hardware and driver-wise) as the DOD Common Access Cards (CACs), so I’ve found https://militarycac.com to be helpful if you have to get down to device/driver troubleshooting details. The site isn’t officially endorsed by the DOD or the VA, but is a community-recognized, grass-roots effort to fill in the gaps left by government help desks. Some of the context is Army/DOD-specific, but if you are technical enough or have the time to sort through those differences, the advice can be applied to VA PIV readers as well.
    *   https://militarycac.com/macnotes.htm#Mac_friendly
    *   https://militarycac.com/usbreaders.htm

## VA Service Desk
The VA National Service Desk (NSD) (aka VA Enterprise Service Desk) number is 855-NSD-HELP (855-673-4357). For this project you might use it for issues with VA Citrix Access Gateway (CAG), VA email, VA Talent Management System (TMS), or outages/downtime associated with VA Enterprise Services.
