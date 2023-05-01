# MHV to VA.gov Product Onboarding Quick Start Guide
Last Update: May 1, 2023

## MHV Onboarding vs. VA.gov Access
To clarify, there are multiple parts to gaining access to everything you'll need to work within VA.gov.  The first part is the **MHV Onboarding** which includes required employment training, security/background checks, fingerprinting, PIV card (government ID), VA.gov email address, and GFE (Government Furnished Equipment - ie your Government laptop).  Depending on your role and team assignment within MyHealtheVet (MHV), you may be asked to gain **VA.gov access** and onboard to VA.gov. The VA.gov platform team has a dedicated site for the official [VA.gov onboarding process](https://depo-platform-documentation.scrollhelp.site/getting-started/).  The below guide is not a substitute for that process, however it is a quick overview of the key steps.  Always defer to the VA Platform documentation for the most complete and current information.  


## Important Info to Gather
Before you get started with onboarding, you will need a few key pieces of information which you can gather from your Manager:
1. Name of your Program Manager
2. Name of your OCTO-DE Product Owner
3. Name of your VA Business Owner
4. Your GitHub user ID (if you do not have one, see GitHub section below)
5. Name of the contract you're on
6. Name of the COR (Contracting Officer's Representative) on your contract and their email address
7. Name of the VOR (Vendor Onboarding Representative) on your contract and their email address
8. VFS Team name
9. Your start date
10. Team Slack channel 


## Platform Orientation Sessions (Zoom)
**All team members** working on a VA.gov project should schedule and attend general and practice-specific orientation sessions. Orientation session descriptions will recommend team members for which the session is pertinent for their role.  This can be done while you are gaining other access described in this guide.

[Orientation Sessions](https://depo-platform-documentation.scrollhelp.site/getting-started/calendly-orientation-sessions) - Schedule your own orientation sessions using Calendly.  Each session suggests team members who will benefit most.


## GitHub
GitHub is used to track all work relating to VA.gov processes and embedded teams as well as managing code branches and deployments.  Most VA.gov repositories are public facing, please remember to not share sensitive information.  [Platform GitHub Repo Guidelines](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/repo-guidelines.md) (privacy info, folder and file naming conventions, etc.)

1. All users interacting with VA.gov will need to have a GitHub UserID with their VA.gov email address associated with it.  [GitHub](https://www.github.com)
2. Once you have access to GitHub, create a [ZenHub account](https://www.zenhub.com/) and then connect your GitHub account to it. (https://www.zenhub.com/).  ZenHub runs in the browser on top of GitHub, or you can install a plug in on Chrome or Firefox. To link the accounts, access the ZenHub site, click Log In and enter your GitHub credentials.


## Communication/Slack
Most day-to-day communications between VA.gov product team members happens in Slack (no PII or PHI is allowed).  In general, email is used infrequently and largely for communicating with VA personnel or outside vendors.

### Slack Setup
1. Create a Slack Account with your VA.gov email address: [Slack](https://www.slack.com)
2. Ask your Manager to invite you to the Digital Services on VA workspace (DSVA)
3. Once you are successfully logged into the DSVA workspace, join your team channel (ask your Manager for the name) along with other relevant channels.  Some options are below:

#### Slack Channels: All team members should join these
- [#vfs-all-teams](https://dsva.slack.com/archives/CE4304QPK) - Channel containing info relevant to all VA.gov teams and team members, such as surveys and weekly Team of Teams meeting slides
- [#vfs-change-announcements](https://dsva.slack.com/archives/C03R5SBELQM) - Channel announcing upcoming platform system, policy, and process changes
- [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) - Channel for initiating platform-related support requests. Use the `/help` or `/support` command here to start that process.
- [#platform-design-system](https://dsva.slack.com/archives/C01DBGX4P45) - Channel for talking about the design system.  Questions or bugs should be reported using #vfs-platform-support.
- [#general](https://dsva.slack.com/archives/C03FECE9K) - Catch-all channel where people post generalized questions or are trying to determine where best to direct a question
- WTF bot - Useful bot for learning acronyms used by the VA and VFS teams.  Use the `/wtf` command followed by the acronym you are inquiring about
- [#platform-qa-standards](https://dsva.slack.com/archives/C01CHAY3ULR) - Channel for contacting the QA Standards team if you need access to a testing tool or an automated test fails.
- [#victories](https://dsva.slack.com/archives/C0186C3LDNU) - Place for announcing launches, wins, and celebrating with other teams the impact their work has on our Veterans
- [Slackbot](https://dsva.slack.com/archives/D039TFZT7BR) - A bot that is useful for creating one-time and recurring reminders for yourself and your team.  You can also hover on a post in any channel, click the three dots that appear, and select *Remind me about this* to receive a reminder about the post later.
- [VA Mural Account] - Request through Kevin Hoffman (needs to be verified)

#### Slack Channels: Product Managers should join these
- [#product](https://dsva.slack.com/archives/C0186C3LDNU) - Forum for resources and discussions around explanding product management and product thinking at VA and in government
- [#vsp-identity](https://dsva.slack.com/archives/CSFV4QTKN) - Discussions and announcements related to logging into VA.gov, including ID.me, Login.gov, MyHealtheVet and DS Logon and questions or issues related to test user accounts
- [#oncall](https://dsva.slack.com/archives/C30LCU8S3) - Good starting point to check on critical system issues reported and being worked on.  Only for critical VA Platform related issues.  

#### Slack Channels: Designers & Researchers should join these
- [#design](https://dsva.slack.com/archives/C0NGDDXME) - Share designs, learn from other designers, discuss improvements to the VA Design System
- [#feedback-backchannel](https://dsva.slack.com/archives/C40B45NJK) - Moderator and observers talking to each other during user research sessions.
- [#inclusive-research](https://dsva.slack.com/archives/C033ZS9E7EW) - A place to advance inclusive research at the VA
- [#sitewide-content-ia](https://dsva.slack.com/archives/C01K37HRUAH) - Supporting teams building on VA.gov with their IA and content needs. Ask the sitewide content and IA team questions about our VA.gov content strategy, IA, voice, style, and plain language standards. We can also provide insights into benefit- and product-specific language nuances and sensitivities.

#### Slack Channels: Engineers should join these
- [#vfs-engineers](https://dsva.slack.com/archives/C01UB5A823V) - A channel for engineers working on VA.gov to collaborate
- [#devops-deploys](https://dsva.slack.com/archives/C37M86Y8G) - Jenkins deployment success and failure notifications
- [#devops-alerts](https://dsva.slack.com/archives/C24RH0W11) - Alerts from various system monitoring tools
- [#vsp-identity](https://dsva.slack.com/archives/CSFV4QTKN) - Discussions and announcements related to logging into VA.gov, including ID.me, Login.gov, MyHealtheVet and DS Logon and questions or issues related to test user accounts
- [#oncall](https://dsva.slack.com/archives/C30LCU8S3) - Good starting point to check on critical system issues reported and being worked on.  Only for critical VA Platform related issues.  
- [#lighthouse-api-publishing](https://dsva.slack.com/archives/C021UM3QTCY) - Ask questions about publishing an API to Lighthouse. Questions about consuming an API should be submitted at https://developer.va.gov/support/contact-us


## Getting Access to the VA.gov Platform
As mentioned earlier, VA.gov repositories are public and can be accessed and reviewed prior to many steps during the onboarding process.  However, in order to gain access to be able to work within VA.gov and commit any code, users will have to complete two steps (both of which are dependent on them gaining access to a VA.gov email address).

1) **Gain access to the VA Organization in GitHub** - Have your Manager submit a [Add User to VA Organization Ticket](https://github.com/department-of-veterans-affairs/github-user-requests/issues/new/choose)
2) **Gain write access to the VA.gov Repositories** - Once you are in the VA Organization, the new team member must request a [Platform Orientation Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=governance-team%2C+analytics-insights%2C+analytics-request&template=orientation-epic.md&title=Platform+Orientation+Template+%5BYour+name+here%5D) for themself - This request kicks off processes for granting you access to the VA GitHub repos. Be sure to complete all fields in the request and *be on the lookout for an email from an admin via GitHub. If you don't respond within a few days, your request will be archived.*


## Getting Access to Tools
The VA Platform site has detailed instructions on the [tools you will need](https://depo-platform-documentation.scrollhelp.site/getting-started/platform-tools) and [how to request access to each](https://depo-platform-documentation.scrollhelp.site/getting-started/request-access-to-tools).  In many cases it's best to discuss your environment setup with your associated Lead.  In many cases you will also need access to AWS to tunnel to MHV APIs, which can be done with an [AWS Access Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Coperations%2Cops-access-request&template=aws-access-request.yml&title=AWS+access+for+%5Bindividual%5D).


## VA Platform Collaboration Cycle
As products and new features are developed for VA.gov, they go through a process called the Collaboration Cycle, where teams get feedback and guidance on their work to ensure it meets VA.gov experience standards.  Each member of the team should become familiar with the process and understand their responsbilities, Platform expectations, and the timing and required artifacts at each touchpoint.
[VA Platform Collaboration cycle website](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/)


## Role Specific Information
Below lists some of the role specifi information depending on your assignment:

### Product-Specific Info 
  - [VA.gov Design System](https://design.va.gov/)
  - [QA and Accessibility Testing](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing)

### Engineering-Specific Info
Please note that set up instructions may differ if your laptop/desktop is GFE (Government-Furnished Equipment).  Please work with your engineering lead on any GFE-related issues you encounter.
- [Setting Up VA.gov Locally](https://depo-platform-documentation.scrollhelp.site/getting-started/setting-up-va-gov-locally)
  - [Set up frontend](https://depo-platform-documentation.scrollhelp.site/developer-docs/setting-up-your-local-frontend-environment)
  - [Set up backend](https://github.com/department-of-veterans-affairs/vets-api#base-setup)
  - [Accessing VA.gov in staging](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/accessing-staging.md)
  - [VA.gov Design System](https://design.va.gov/)
  - [QA and Accessibility Testing](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing)

### Research and Design-Specific Info
- [VA Platform Research and Design site](https://depo-platform-documentation.scrollhelp.site/research-design/)
- [VA.gov design principles](https://design.va.gov/about/principles)
- [Design system website](https://design.va.gov/)


## Offboarding
If a member of the team leaves the contract, they should submit an [offboarding request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=analytics-insights%2C+Offboarding%2C+operations&template=offboarding-request.md&title=Offboarding+of+%5Bindividual%5D).  If they have already left, their HR manager, Product Manager, Product Owner, or Program Director can submit one on their behalf.
