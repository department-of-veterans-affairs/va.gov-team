# VSA Technical Orientation

The purpose of this document is meant to serve as a technical outline for VSA developers, but other VSA team members may find the links here useful. The [VA Platform documentation](https://depo-platform-documentation.scrollhelp.site/index.html) and the [DEPO Platform Documentation](https://department-of-veterans-affairs.github.io/va.gov-team) both provide a lot of useful information and best practices; however, some of it is changing, redundant, outdated, or requires more context in order to navigate. This is an attempt to capture the most important links in a structured order for onboarding new developers.

## Table of Contents

- [VSA Technical Orientation](#vsa-technical-orientation)
  - [Table of Contents](#table-of-contents)
  - [What We Do](#what-we-do)
    - [Overview](#overview)
  - [Main Repositories](#main-repositories)
  - [Our Stack](#our-stack)
    - [Frontend](#frontend)
    - [Content](#content)
    - [Content Integration](#content-integration)
    - [Backend](#backend)
  - [Slack](#slack)
  - [Zoom Meetings](#zoom-meetings)
  - [SharePoint: VSA Team](#sharepoint-vsa-team)
  - [SharePoint Calendar: PTO](#sharepoint-calendar-pto)
  - [Outlook Calendar: Work Account](#outlook-calendar-work-account)
  - [GitHub Repositories](#github-repositories)
  - [Links](#links)
  - [Confluence Links](#confluence-links)
  - [Development System](#development-system)
    - [Software List](#software-list)
    - [VS Code Extensions (optional)](#vs-code-extensions-optional)
      - [Local Build Instructions](#local-build-instructions)
  - [Internal Sites (SOCKS access)](#internal-sites-socks-access)
    - [Tips](#tips)
  - [Citrix Access Gateway (CAG)](#citrix-access-gateway-cag)
    - [Tips:](#tips-1)
  - [VA Service Desk](#va-service-desk)
  - [Platform Newsletter](#platform-newsletter)
  - [Onboarding FAQs](#onboarding-faqs)
  - [After I install everything, where do I start?](#after-i-install-everything-where-do-i-start)
  - [I want create a new new pull request, where do I start?](#i-want-create-a-new-new-pull-request-where-do-i-start)
  - [Where do I go with my initial technical questions about the site?](#where-do-i-go-with-my-initial-technical-questions-about-the-site)
  - [What does the development process look like from start to finish?](#what-does-the-development-process-look-like-from-start-to-finish)
  - [Where can find mock data?](#where-can-find-mock-data)
  - [Do we have a style guide?](#do-we-have-a-style-guide)

## What We Do

We are actively working on https://va.gov, the user-centered, public-facing website where veterans and their caregivers can find, apply for, track, and manage their benefits in one place.

- DEPO: The VA Digital Experience Product Office. VSP and VSA fall under DEPO.
- VSA: [Veteran-facing Services Applications (VSA)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa#veteran-facing-services-applications-vsa); our team (applications).
- VSP: [Veteran-facing Services Platform](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/README.md#veteran-facing-services-platform-vsp); the platform team, which includes framework and DevOps.
- VFS: Veteran Facing Services (consumers of VSP, including VSA).
### Overview
For a timeline of important VA decisions and changes, check out the following [document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/onboarding/VSA_Timeline)

## Main Repositories

Our work is conducted primarily over public GitHub repositories:

- Docs: https://github.com/department-of-veterans-affairs/va.gov-team
- Backend source: https://github.com/department-of-veterans-affairs/vets-api
- Frontend source: https://github.com/department-of-veterans-affairs/vets-website

## Our Stack

We have a React/Redux/Node front end with a Ruby-on-Rails back end, plus static site generation using [Metalsmith](https://metalsmith.io/) to pull content from Drupal CMS and Markdown. All libraries are open source, including VA-specific components and forks.

### Frontend

- React
- Redux
- Node.js (_mostly for scripting and building_)
- Yarn (_for package management_)
- Metalsmith (for static content generation)
- Key Libraries:
  - The [VA<span/>.gov Forms System (VAFS)](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/forms) built on top of the [VA's fork of RJSF (react-jsonschema-form)](https://github.com/department-of-veterans-affairs/react-jsonschema-form).
  - Formation: SASS styles and assets for the VA design system ([npm @department-of-veterans-affairs/formation](https://www.npmjs.com/package/@department-of-veterans-affairs/formation)).

### Content

- Drupal CMS
- Markdown (.md)
- TeamSite OpenText CMS (for older web pages; migrating to Drupal CMS)

### Content Integration

(Build to extract Drupal and Markdown into static HTML):

- GraphQL: queries to extract data from Drupal. This is legacy and is in the process of being replaced by a Tome Sync + CMS Transformer solution.
- Tome Sync: Drupal Static Site Generator. Data from Drupal models are dumped server-side to a json.tar file continously after content in drupal is edited/saved.
- CMS Transformer: an in-house Node.js solution to map and extract data models from Tome Sync json.tar files to HTML through Liquid templates.
- Liquid: templates to expand data to HTML. Liquid is an open-source template language created by Shopify and written in Ruby. 
- Metalsmith Static Site Generator: the content integration build; runs on Node.js
- TeamSite Integration (legacy): NGIX Web Server, AWS S3 (shared content), PERL

### Backend

- Ruby On Rails
  - Single, monolithic rails app. Some of the Lighthouse API parts use a "Modular Monolith" (Rails "engines").
  - Rails MVC for REST APIs,
  - Sidekiq for scheduled jobs
  - Gems?
- PostgreSQL (for some persistence, local app state; but most of the back end talks to other REST services rather than heavy local entity CRUD). Vets-api schema file.
- PostGIS (GIS/spatial)
- Redis (in memory; for sidekiq, persist user objects)
- PDF tk (PDF generation)

## Slack

Slack is preferred over emails; however, you will get meeting requests via email that you’ll need to accept and add to your calendar, so you should still check your company email a few times a day. You are also required to check your VA email weekly via Citrix Access Gateway (CAG) to keep it active (daily if your job requires it). You are expected to have Slack running and constantly monitored during working hours. Use the installed (desktop) version of Slack on your development system rather than just running Slack from your browser (you may have limits on features such as video, sharing, and notifications if you don't).

If you still have questions about getting started or where to find certain resources (after having internally checked within your team and lead), the [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support) channel is a good place to get some visibility to your question. It is the best way for team members to engage with the VSP Platform Support Team.

- Federal DSVA Workspace URL: https://dsva.slack.com
- Guidance: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/onboarding/vsa-slack-guidance.md
- **Bots**: Type: **_/wtf_** on any DSVA slack channel to look up VA Acronyms (source/data: https://github.com/department-of-veterans-affairs/acronyms)
- **Apps**: Allow the "Outlook Calendar” Slack app to access your work account so that it can remind you of meetings and automatically set your status to “In a meeting”
- **Status**: In addition to setting your vacation time in the SharePoint Calendar for PTO, remember to set your status for sick, commute (if within working hours), or vacation.

DSVA Channels:
| Channel                    | Description                                 |
| :------------------------- | :------------------------------------------ |
| [#general](https://dsva.slack.com/channels/general)                         | This channel is for team-wide communication and announcements. All team members are in this channel. |
| [#va-onboarding-help](https://dsva.slack.com/channels/va-onboarding-help)   | VA-specific onboarding help for CAG, GFE, ePAS, and VA email |
| [#vfs-all-teams](https://dsva.slack.com/channels/vfs-all-teams)             | Weekly Team of Teams slides are here |
| [#vfs-backend](https://dsva.slack.com/channels/vfs-backend)               | Backend Developers, Technical               |
| [#vfs-engineers](https://dsva.slack.com/channels/vfs-engineers)             | Jenkins deploy, VSP announcements           |
| [#vfs-frontend](https://dsva.slack.com/channels/vfs-frontend)              | Frontend Developers, Technical              |
| [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support)      | VSP Platform Support (Help). Developers spend a lot of time here.|
| [#vsa](https://dsva.slack.com/channels/vsa)                       | VSA all teams and practice areas            |
| [#vsa-engineering](https://dsva.slack.com/channels/vsa-engineering)           | VSA Frontend and Backend Engineers          |

## Zoom Meetings
Note: The Zoom Basic plan has a 40-minute time limit on meetings with 3 or more participants.
- [https://zoom.us/](https://zoom.us/)
- Sign in using your company’s email account.
- Create a meeting in Zoom first, then export to email.
- After the meeting is visible in Outlook email/calendar, add attendees (from Outlook, not Zoom).

## SharePoint: VSA Team

We prefer most documents to be on GitHub, but sometimes they start off here.
https://salientcrgt.sharepoint.com/sites/VSATeam/SitePages/Home.aspx

## SharePoint Calendar: PTO

https://salientcrgt.sharepoint.com/sites/VSATeam/Lists/PTO/calendar.aspx \
PTO Calendar: after approval from your PM and lead, put your days off (approved vacation, sick, etc.) on our shared PTO Calendar. Usage tips:
- Please do not send meeting invitations to let people know you will be out of office. Those clutter our calendars so most people will decline or delete/ignore. Just add your PTO/OOO to this calendar.
- When creating meetings remember to check this calendar to see who is out, but don't send invitations to this calendar.

## Outlook Calendar: Work Account

https://outlook.office.com/calendar
- Since we have contractors with different email domains, you’ll need to “Share with Specific People” so that at least your free vs busy times are available. This will help teammates schedule meetings.
- In addition to putting time away on the PTO Calendar, you can also block off OOO times and appointments as events on your work calendar, but don’t send them off as meeting invites.
- If you have recurring short events that may take you away from Slack (lunch break, driving, etc), communicate those with your team, but also put them on your work calendar.

## GitHub Repositories

- **GitHub: VA<span/>.gov | Public Repo | vets-website** \
  https://github.com/department-of-veterans-affairs/vets-website \
  Frontend Source Code: React.js, HTML

- **GitHub: VA<span/>.gov | Public Repo | vets-api** \
  https://github.com/department-of-veterans-affairs/vets-api \
  Backend Source Code: Ruby/Rails (mostly REST APIs)

- **GitHub: VA<span/>.gov | Public Repo | TEAM Non-Code Docs (VSP, VSA/VSFs)** \
  https://github.com/department-of-veterans-affairs/va.gov-team \
  Non-code documentation for VSP, VSA, and VSFs teams. \
  Note that this repo (va.gov-team) supersedes the “[vets.gov-team](https://github.com/department-of-veterans-affairs/vets.gov-team)” repo. That older repo was made private on January 2020, but most of the content was migrated to this repo.

- **GitHub: VA<span/>.gov | Public Repo | CONTENT (Markdown)** \
  https://github.com/department-of-veterans-affairs/vagov-content \
  The VA<span/>.gov content repository (aka VA<span/>.gov Interim CMS) in Markdown (.md) format.

- **GitHub: VA<span/>.gov | Public Repo | CMS Integration** \
  https://github.com/department-of-veterans-affairs/va.gov-cms \
  Metalsmith, GraphQL, Drupal, Liquid Templates => build static HTML.

- **GitHub: VA<span/>.gov | Private Repo | TEAM SENSITIVE** \
  https://github.com/department-of-veterans-affairs/va.gov-team-sensitive

- **GitHub: VA<span/>.gov | Private Repo | DEVOPS** \
  https://github.com/department-of-veterans-affairs/devops

## Links

- **GitHub: VA<span/>.gov | Documentation Directory** \
  https://department-of-veterans-affairs.github.io/veteran-facing-services-tools

- **Setting up your local env** \
  https://depo-platform-documentation.scrollhelp.site/developer-docs/Setting-up-your-local-frontend-environment.1844215878.html
  Start here to learn how to set up your local vets-website and vets-api development environments.

- **Running VA.gov locally** \
  https://depo-platform-documentation.scrollhelp.site/developer-docs/Running-VA.gov-locally.1844248620.html
  Continue here to run them locally.

- **GitHub: VA<span/>.gov | Client App Doc | Forms System** \
  https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/forms \
  VA<span/>.gov Forms System (VAFS). Uses RJSF (react-jsonschema-form).

- **VA Design System** \
  https://design.va.gov/
  VA<span/>.gov is built on top of VA's design system (VADS). VADS is based on the [US Web Design System](https://designsystem.digital.gov/). This site covers Formation Components and formation-react.

- **GitHub: VA<span/>.gov | Client App Doc | Platform** \
  https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform \
  Overview of the platform: MetalSmith, React, Redux, Drupal CMS, TeamSite. Pay attention to the menu/links on the left panel, because it has things such as [content management integration](https://depo-platform-documentation.scrollhelp.site/developer-docs/VA.gov-content-management-system-overview.1854832733.html), [front end standards](https://depo-platform-documentation.scrollhelp.site/developer-docs/Best-practices.1824489781.html), [unit testing](https://depo-platform-documentation.scrollhelp.site/developer-docs/Unit-tests.1836187655.html) (tools/conventions), [build/deploy flow](https://depo-platform-documentation.scrollhelp.site/developer-docs/Build-and-deploy-process-flows.1844346924.html), [Feature Flags](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-toggles) (React, Drupal/Metalsmith, Node, Liquid; Release Toggles, Flipper UI) and a history of [documented platform decisions](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/front-end-standards/documented-decisions/summary) (why/when).

- **Platform Orientation** \
  https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/Welcome%20to%20VSP.md

- **GitHub: VA<span/>.gov | VSP | How To Update Documentation** \
  https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/how-to-collaborate-on-documents.md \
  If you find issues with VSP documentation, propose corrections using the pull request (PR) process.

- **GitHub: VA<span/>.gov | VSP | Request Access to Internal Tools** \
  https://depo-platform-documentation.scrollhelp.site/getting-started/Request-access-to-tools.969605215.html \
  The additional orientation steps for developers section walks you though the request and setup for SOCKS access to Jenkins, Sentry, Prometheus, and Grafana. These DevOps services are hosted on private domains but can be accessed your web browser using an SSH script with the SwitchyOmega Chrome plugin to route web requests from your browser to the SOCKS5 proxy. If you have your PIV background check approved (eQIP adjudication), you may also request access to AWS Console for "troubleshooting, log file review, and to apply changes to the running instances and services" on AWS GovCloud.

- **GitHub: VA<span/>.gov | VSP | Review Instances** \
  https://depo-platform-documentation.scrollhelp.site/developer-docs/Using-review-instances-to-preview-changes.590774288.html

- **GitHub: VA<span/>.gov | VSP | Platform Code Review Guidelines** \
  https://depo-platform-documentation.scrollhelp.site/developer-docs/Submitting-pull-requests-for-approval.655032351.html \
  Pull Request (PR) guidelines (required in order to merge to master).

- **GitHub: VA<span/>.gov | VSP | Product Development Request Checklist** \
  https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/Product%20Development%20Checklist.md \
  "All items here must be completed and signed off on by VSP before a new application can launch, and you should start convos about each item early - so you can work on them incrementally and iterate from day one."

- **GitHub: VA<span/>.gov | VSP | Quality Assurance** \
  https://depo-platform-documentation.scrollhelp.site/developer-docs/Quality-assurance-(QA)-testing.1241579982.html \
  ([Enzyme](https://enzymejs.github.io/enzyme/) integration tests for React components, runs on the unit testing stacks; [e2e Testing](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/quality-assurance/e2e-testing): [Cypress](https://depo-platform-documentation.scrollhelp.site/developer-docs/End-to-end-testing.1738965071.html) following [best practices](https://depo-platform-documentation.scrollhelp.site/developer-docs/Cypress-Best-Practices-on-VA.gov-Platform.1870430211.html#CypressBestPracticesonVA.govPlatform-ExpandAccordions:cy.expandAccordions()), [Redux Dev Tools Chrome extension](https://github.com/zalmoxisus/redux-devtools-extension). [Load Testing](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/quality-assurance/load-testing): Locust and wrk2. [TestRail](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/quality-assurance/testrail) is the test managment software used for recording evidence of both manual and automated tests (mostly manual for now).

- **GitHub: VA<span/>.gov | VSA | Main** \
  https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa

- **GitHub: VA<span/>.gov | VSA | Engineering** \
  https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/engineering

- **GitHub: VA<span/>.gov | VSA | Engineering | QA Process** \
  https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/engineering/qa/vsa-qa-process.md

- **GitHub: VA<span/>.gov | VSA | Engineering | Pull Request (PR) Process** \
  https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/engineering/pull-request-process.md

- **GitHub: VA<span/>.gov | VSA | Engineering | Triage and On-Call Process** \
  https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/engineering/devops/Triage-Process.md

- **GitHub: VA<span/>.gov | VSA | Orientation** \
  https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/orientation

- **GitHub: VA<span/>.gov | VSA | Onboarding | Slack Guidance** \
  https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/onboarding/vsa-slack-guidance.md

- **GitHub: VA<span/>.gov | Accessibility** \
  https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#automated-accessibility508-testing \
  The [Cypress e2e tests will run axe scans](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#build-pipeline-requirements) to enforce Section 508, WCAG2 A and WCAG2 AA compliance; however, to avoid unnecessary churn, developers are expected to procatively run [local scans](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#getting-started-with-automation) using the [axe](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd) Chrome extension to identify and resolve [ruleset violations](https://dequeuniversity.com/rules/axe) early on, during coding. (Staging Review requests will be denied if axe scan detects any issues not already disclosed/waived/mitigated in the Known Issues section of the request ticket.) For further guidance, consult the [Post-Launch Audit](https://depo-platform-documentation.scrollhelp.site/developer-docs/How-to-prepare-for-an-accessibility-post-launch-audit.1909063817.html) accessibility pages.

- **GitHub: VA<span/>.gov | CMS | Create Drupal Account** \
  https://github.com/department-of-veterans-affairs/va.gov-cms/blob/master/READMES/cms-login.md \
  Depending on the work that you do, you may need access to the Drupal CMS. To gain access to Drupal, a VA email address and access to the VA network (via CAG or a GFE) is required. Users can log on via CAG with a username and password or a PIV. If you have a VA email and VA network access, follow these instructions to create a Drupal CMS account.

- **GitHub: VA<span/>.gov | Private | DevOps | Config** \
  https://github.com/department-of-veterans-affairs/devops/tree/master/ansible/deployment/config/vets-api

- **GitHub: VA<span/>.gov | Private | DevOps | External Service Integrations** \
  https://github.com/department-of-veterans-affairs/devops/tree/master/docs/External%20Service%20Integrations
  Pages in this area describe integrations between va.gov and external services, including services within the VA and services managed by third parties. These pages are intended for VSP on-call support but are somewhat useful as general summaries for back-end developers and systems integrators as well. Each page contains a general description of a service, how it integrates with va.gov, environment specific details (such as endpoints), required configuration, and--for incident management purposes--troubleshooting steps, escalation procedures, and contact information. The information in these pages are considered system security sensitive, so you'll need access to the VA's private DevOps GitHub repository in order to see them.

- **GitHub: VA<span/>.gov | Private | Team Sensitive | Accessing Staging** \
  https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/accessing-staging.md

- **GitHub: VA<span/>.gov | Private | Team Sensitive | VA Systems** \
  https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/VA-Systems \
  Backend developer integration to VA services.
  
## Confluence Links
The platform team (VSP) is in the process of migrating their documentation away from GitHub over to Atlassian Confluence.
https://vfs.atlassian.net/wiki/spaces/VP/overview

## Development System

Although we do not dictate whether developers should use Windows vs Linux vs Mac, almost everyone on VSA uses a Macbook Pro, so that’s the path of least resistance. If you choose to use Windows or Linux instead, you might be ok with additional setup, but you won't get any support if you run into issues. Developers have noticed issues particularly with the Rails setup on non-mac systems, and there is a chance some scripts may not work outside of macOS and zshell, so you'd be responsible for additional configuration details or modifications to these if you run into these issues.

- Macbook Pro issued by US Resources to GovernmentCIO employees:
  - You’ll have to call US Resources to get the password (account is not integrated into Active Directory)
  - If you are not admin, let US Resources know immediately, because you need to be.
- Most tools are open source.
- You can only get so far with words, so we encourage developers to use diagrams to communicate architecture, design, and business/data flow. We recommend [diagrams.net](https://app.diagrams.net/) (previously known as Draw.io) because it's free and open source. It's a well-known Progressive Web App (PWA) based on MxGraph that comes in both online or offline versions. Alternatives include Lucidchart and Visio; however, neither of those are free. 

### Software List

In order to dogfood VSP's install instructions, VSA developers are expected to have admin access to their own development systems and bring up their own local environment according to the [VA.gov Client Platform "Getting Started" Guide](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/):

| Software                                         | URL                                                                                                                                                            | Description                                                                                                                                                                                                                                                                                                                                                                              |
| :----------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slack                                            | https://slack.com/downloads                                                                                                                                    | Slack isn't directly used for builds, but it is our main team collaboration/messaging hub (preferred over email), so you'll need it installed first in order to reach out to people for help. On your development system, please use the installed/desktop version to get all the features (the web version isn't enough.)                                                               |
| Homebrew                                         | https://brew.sh                                                                                                                                                | Package manager for macOS. Used via the terminal to install node.js, nvm, ruby, yarn and all the other software needed. Must be updated regularly in order to keep the repositories up to date.                                                                                                                                                                                          |
| Yarn                                             | https://yarnpkg.com                                                                                                                                            | Dependency manager used on the VA frontend. Install using the [VA.gov Client Platform "Getting Started" Guide](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/)                                                                                                                                                                          |
| NVM                                              | https://github.com/nvm-sh/nvm ([install guide](https://github.com/nvm-sh/nvm#installing-and-updating)) | Version manager for Node.js. We use node version `14.15.0`. Recommended to set that as default using the command `nvm install 14.15.0` and then `nvm alias default 14.15.0`. If you are using Homebrew(you should) on a Mac, you will also have to add a line this line (`[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh # This loads NVM`) to your `.bash_profile`, `.zshrc`, or `.profile file.` |
| Node.js                                          | https://nodejs.org                                                                                                                                             | Needed to execute the website frontend. Install using the [VA.gov Client Platform "Getting Started" Guide](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/)                                                                                                                                                                              |
| GitHub Desktop                                   | https://desktop.github.com                                                                                                                                     | Desktop Git client that allows us to work with the GitHub-hosted VA repositories. It addition to a UI, it also installs the Git command-line client.                                                                                                                                                                                                                                     |
| Visual Studio Code                               | https://code.visualstudio.com                                                                                                                                  | IDE to modify and debug code, especially front-end React, but also back-end Ruby/Rails. Sticking to this popular IDE makes it easier to recommend and standardize code-assist/quality extensions (plug-ins).                                                                                                                                                                             |
| Docker                                           | https://www.docker.com                                                                                                                                         | Needed to run Ruby, Postgres and all the necessary tools to execute the VA APIs.                                                                                                                                                                                                                                                                                                         |
| Postman                                          | https://www.getpostman.com                                                                                                                                     | Needed to test and develop REST APIs.                                                                                                                                                                                                                                                                                                                                                    |
| Postgres                                         | [https://www.postgresql.org/download/](https://www.postgresql.org/download/)                                                                                   | Database engine used for the API                                                                                                                                                                                                                                                                                                                                                         |
| pgadmin                                          | https://www.pgadmin.org                                                                                                                                        | PostgreSQL Tools.                                                                                                                                                                                                                                                                                                                                                                        |
| Chrome                                           | https://www.google.com/chrome                                                                                                                                  | Needed for front-end development plug-ins.                                                                                                                                                                                                                                                                                                                                               |
| Chrome&nbsp;Extension: _React Developer Tools_   | [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)                                      | Strongly recommended for React debugging.                                                                                                                                                                                                                                                                                                                                                |
| Chrome&nbsp;Extension: _Redux DevTools_          | [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)                                                    | Used by developers writing [e2e tests](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/e2e-testing/README.md), to record information entered on forms.                                                                                                                                                                              |
| Chrome&nbsp;Extension: _ZenHub_                  | [ZenHub for GitHub](https://chrome.google.com/webstore/detail/zenhub-for-github/ogcgkffhplmphkaahpmffcafajaocjbd)                                              | Required for ZenHub to work. GitHub Issues are not enough. Without it, you will not see a lot of the integrated ZenHub options and extensions.                                                                                                                                                                                                                                           |
| Chrome&nbsp;Extension: _Proxy&nbsp;SwitchyOmega_ | [Proxy SwitchyOmega](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif)                                            | Needed to access internal DevOps web sites sites--[such as Jenkins, Sentry, Prometheus, Grafana](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md)--over SOCKS5 proxy.                                                                                                                                                   |
| Chrome&nbsp;Extension: _axe_                     | [axe&nbsp;-&nbsp;Web&nbsp;Accessibility Testing](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd)         | [508 accessibility scanning](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#getting-started-with-automation): _required_. Catch accessibility issues during development _before_ they are flagged by the build.                                                                                    |
| Chrome&nbsp;Extension: _axe-coconut_             | [axe-coconut&nbsp;-&nbsp;Web&nbsp;Accessibility Testing](https://chrome.google.com/webstore/detail/axe-coconut-web-accessibi/iobddmbdndbbbfjopjdgadphaoihpojp) | [508 accessibility scanning](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#getting-started-with-automation): _required for new development_. Catch WCAG 2.1 accessibility issues during development _before_ they are flagged by the build.                                                       |
| Chrome&nbsp;Extension: _Lighthouse_              | [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)                                                            | [508 accessibility scanning](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#getting-started-with-automation): _recommended_. Audits for web performance, accessibility, progressive web apps, SEO and more.                                                                                        |

### VS Code Extensions (optional)

Every developer likes to have their environment set up a certain way, but these extensions will help with the development process.

_NOTE: These are only front-end focused extensions, need to add backend focused extensions._

| Name                                          | what it does                                             | package id                            |
| :-------------------------------------------- | :------------------------------------------------------- | :------------------------------------ |
| Rainbow brackets                              | Highlights nested brackets with meaningful colors        | 2gua.rainbow-brackets                 |
| ESLint                                        | Integrates eslint with VS Code. Handy for auto linting   | dbaeumer.vscode-eslint                |
| ES7 React/Redux/GraphQL/React-Native snippets | Snippers for React/Redux code                            | dsznajder.es7-react-js-snippets       |
| Prettier - Code formatter                     | Integrates prettier with VS Code. Handy for auto helping | esbenp.prettier-vscode                |
| Docker                                        | Docker Integration, syntax highlighting                  | ms-azuretools.vscode-docker           |
| Code Spell Checker                            | Spell checks your code.                                  | streetsidesoftware.code-spell-checker |
| Visual Studio IntelliCode                     | Using AI, you get better intellisense                    | VisualStudioExptTeam.vscodeinte       |

Use the following commands to install the above packages. _Note: this requires that code be part of the [PATH variable](https://code.visualstudio.com/docs/setup/mac)._

```sh
code --install-extension 2gua.rainbow-brackets
code --install-extension dbaeumer.vscode-eslint
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension esbenp.prettier-vscode
code --install-extension ms-azuretools.vscode-docker
code --install-extension streetsidesoftware.code-spell-checker
code --install-extension visualstudioexptteam.vscodeintellicode
```

#### Local Build Instructions

- **Front End:** https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/run-build
- **VETS API:** https://github.com/department-of-veterans-affairs/vets-api

## Internal Sites (SOCKS access)

Important build and DevOps sites reachable only through SOCKS proxy:

- **Jenkins** (Builds): http://jenkins.vfs.va.gov
- **Sentry**: http://sentry.vfs.va.gov (production errors: http://sentry.vfs.va.gov/vets-gov/platform-api-production)
- **Grafana**: http://grafana.vfs.va.gov

Prerequisites (set up SOCKS5 Proxy access):

- https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/request-access-to-tools.md
- https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md
- Example GitHub "Environment Access Request" Issue (Request for SOCKS): https://github.com/department-of-veterans-affairs/va.gov-team/issues/5120

### Tips

- Use the ProxySwitchOmega Chrome Extension to access jenkins/sentry/grafana on vfs.va.gov.
  - Set ProxySwitchOmega to auto switch.
  - If you can’t reach the \*.vfs.va.gov sites from Chrome, remember to first run <strong><code>ssh socks -D 2001 -N &</code></strong> from the command line. (If you are running from within the VA, use <strong><code>ssh socks-va -D 2001 -N &</code></strong> instead.)
  - If you are getting 2001 port in-use related errors, be sure to close previous command line (terminal) sessions.
- REF: https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/internal-tools

## Citrix Access Gateway (CAG)

All members of the VSA team are required to maintain a VA email account regardless of their role. You may also be required to use a VA email address and/or access internal VA sites for certain integration activities such as backend service integration or discovery of sample data. As an alternative to lugging around Government Furnished Equipment (GFE), you can check your VA email and access internal VA web sites from virtual machines via Citrix Access Gateway (CAG) and your VA-issued Personal Identity Verification (PIV) card.

Once you have received your VA login credentials, it is imperative that you log into your VA account within 24 hours via CAG (Citrix Access Gateway). Additionally, you are required to access your VA account every 90 days in order to avoid having your account disabled. Re-enabling a disabled account is a security event that requires an explanation from the VA Contracing Office Representative (COR), so it's something not to be taken lightly. For that reason--and to stay up to date with any communication sent by the VA to your email--we require you to access your email on a frequent basis to keep the account active: weekly if you are not using VA email regularly, daily if your job requires it.

### Tips:

- Bookmark the VA Citrix Remote Access login site: https://citrixaccess.va.gov/
- VA Remote Access Help: https://www.oit.va.gov/resources/remote-access/
- VA CAG Remote Access Connectivity Video Walkthrough: https://www.youtube.com/watch?v=073hayTIiwA
- Initial setup instructions for VA email and CAG access should come to you via email. If you haven’t gotten yours, check with our onboarding coordinators, Victoria Akitobi ([vakitobi@governmentcio.com](mailto:vakitobi@governmentcio.com)) and Kimberly West ([Kimberly.West2@va.gov>](mailto:Kimberly.West2@va.gov>))
- Victoria or Kim may issue you a PIV card reader if you ask.
  - That’s the best route if you don’t have one already.
  - If you want to use your own, it needs to be TAA-compliant (https://www.amtgov.com/what-is-taa-compliance.html). The list changes, but countries that are currently NOT TAA-compliant include China, India, Indonesia, Iran, Malaysia, Pakistan, Russia, and Sri Lanka.
- On Mac, only Safari is supported for CAG (DO NOT use Chrome).
- I have found that on my system, in Safari, clicking on a Desktop in the Citrix StoreFront just downloads an “.ica” file (does not automatically run it); however, if you also click the downloaded file, that will launch the Citrix session.

- **GitHub: VA<span/>.gov | VSP | Accessing VA Network Without a VA Laptop** \
  https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/accessing-va-network-without-va-laptop.md \
  The actual POCs do not apply (it’s outdated and/or applies to Ad-Hoc); however, some of the troubleshooting notes and steps here are helpful.

- **VA Service Desk (855-NSD-HELP)** \
  Helpdesk support for PIV and CAG on Macs are limited, but they can walk you through screens and resolve any confusion you may have with installation and the the CAG web sites.
  _ The technician I called said it’s about 50/50 chance for a CAG to work due to PIV reader issues.
  _ They can give you a two-week exemption to use username/password rather than PIV card. \* If you continue to have problems, we can ask our COR to request a long-term exemption for you. Instead of a PIV, you’ll use MobilePass instead, which is 2FA using your phone/mobile device.

- **What is a Personal Identity Verification (PIV) Card?**

  - https://www.oit.va.gov/programs/piv
  - https://www.cac.mil/common-access-card
  - https://en.wikipedia.org/wiki/Common_Access_Card
  - https://en.wikipedia.org/wiki/FIPS_201

- **MilitaryCAC<span/>.com** \
  VA PIVs are essentially the same (hardware and driver-wise) as the DOD Common Access Cards (CACs), so I’ve found https://militarycac.com to be helpful if you have to get down to device/driver troubleshooting details. The site isn’t officially endorsed by the DOD or the VA, but is a community-recognized, grass-roots effort to fill in the gaps left by government help desks. Some of the context is Army/DOD-specific, but if you are technical enough or have the time to sort through those differences, the advice can be applied to VA PIV readers as well.
  _ https://militarycac.com/macnotes.htm#Mac_friendly
  _ https://militarycac.com/usbreaders.htm

## VA Service Desk

The VA National Service Desk (NSD) (aka VA Enterprise Service Desk) number is 855-NSD-HELP (855-673-4357). For this project you might use it for issues with VA Citrix Access Gateway (CAG), VA email, VA Talent Management System (TMS), or outages/downtime associated with VA Enterprise Services.

## Platform Newsletter

- Subscribe to the monthly VSP newsletter: https://mailchi.mp/d59e37e19d1a/vagov-platform-newsletter-landing-page
- Archives: https://us19.campaign-archive.com/home/?u=6e3ab59c527a3cc8ef560eeb5&id=f87a8d4ff3

## Onboarding FAQs

<details>
  <summary>After I install everything, where do I start?</summary>

  ## After I install everything, where do I start?
  If you are a front-end developer, clone this [website](https://github.com/department-of-veterans-affairs/vets-website) and follow these [set up directions](https://github.com/department-of-veterans-affairs/vets-website/blob/main/README.md). I would try to get the command `yarn build --buildtype=vagovdev` to work. This will run the app locally and use a dev server as the API. As a bonus, you should try to get the [API](https://github.com/department-of-veterans-affairs/vets-api) set up as well.

  If you are a back-end developer, clone this [API](https://github.com/department-of-veterans-affairs/vets-api) and get things set up without docker. You might also want to try to get the [website](https://github.com/department-of-veterans-affairs/vets-website) set up as well.
</details>

<details>
  <summary>I want create a new new pull request, where do I start?</summary>

  ## I want create a new new pull request, where do I start?
  Checkout out the getting started [site](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/). There are two sections on the left, `VA.gov workflow` and `Common tasks`. read through those two sections and try to implement some ideas in a branch.
</details>

<details>
  <summary>Where do I go with my initial technical questions about the site?</summary>

  ## Where do I go with my initial technical questions about the site?
  First, go to your onboarding buddies, then post your question to one of the appropriate [slack channels](#slack).
</details>

<details>
  <summary>What does the development process look like from start to finish?</summary>

  ## What does the development process look like from start to finish?
  Refer to the [Frontend Workflow](https://depo-platform-documentation.scrollhelp.site/developer-docs/Frontend-workflow.1846083611.html) and the [VA.gov Continuous Integration Process](https://depo-platform-documentation.scrollhelp.site/developer-docs/VA.gov-Continuous-Integration-Process.1887600641.html).
</details>

<details>
  <summary>Where can find mock data?</summary>

  ## Where can find mock data?
  Refer to the [mock data for the API](https://github.com/department-of-veterans-affairs/vets-api-mockdata) and [staging test accounts](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/3a1b22e261185ef42f3f7f849024b759bcfa9dad/Administrative/vagov-users/staging-test-accounts.md) documentation.
</details>

<details>
  <summary>Do we have a style guide?</summary>

  ## Do we have a style guide?
  We use prettier and eslint to enforce the Airbnb style guide. Your editor should be configured to automatically apply the correct stylings.
</details>

---

If you've found something in this guide that was wrong, missing or could use an improvement? Add it and send a pull request! 🤓
