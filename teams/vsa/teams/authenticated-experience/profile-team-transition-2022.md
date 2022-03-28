# Authenticated Experience - Profile product transition doc

**Team transition document | March 2022**

 The purpose of this transition document is to outline the current state of Authenticated Experience - Profile product development. It serves as a "front door" to documentation and resources collected during the course of product design and development. Included are links to more specific transition hubs where you can find direct links to resources and references used during design and development.

## Table of Contents
[Product context](#product-context)

[Contact Center Info](#contact-center-info)

[Slack and Git Hub Info](#slack-and-git-hub-info)

[Product portfolio](#product-portfolio)

[Product approach](#product-approach)

[Auth Experience - Profile Team](#authenticated-experience---profile-team)

[Now/Next/Later Roadmap](#nownextlater-roadmap)

## Product context 
 - Problem Statement: Veteran data is a mess at the VA. It’s kept in hundreds of databases, and any given department or medical center may have access to different pieces of information. This makes it hard to understand the full picture of what the VA knows about any given Veteran/person.
 - [VA Profile vs. VA.gov Profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#is-va-profile-the-same-thing-as-the-vagov-profile)

## Contact Center Info
 - [Product Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/product/product-guides.md)
 - [Product Guide Archive](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Call%20Center)

## Slack and GitHub Information
- Slack Team Channel: [#vsa-authd-exp](https://dsva.slack.com/archives/C909ZG2BB) (note, Auth Profile and Auth Exp both share the same channel)
- Slack Alerts Channel: [#vsa-authd-exp-alerts](https://dsva.slack.com/archives/C02SYJGH8FJ) - Grafana alerts
- [GitHub Board](https://github.com/department-of-veterans-affairs/va.gov-team#workspaces/vft-59c95ae5fda7577a9b3184f8/board?labels=vsa-authenticated-exp,profile&notFullScreen=false&repos=133843125&showReleases=false&showReviewers=false)
- Git Hub Tags
  - `vsa-authenticated-exp` + `profile` (vsa-authenticated-exp without profile is the Vets Dashboard team)
  - Personal Information Revision project: `personal-information`
  - Address Change Messaging: `address-chg-msg`
  - Bad Address Indicator: `bad-address-indicator`
- Auth Profile Issue Template
  - There is a template called *Authorized Experience Profile New Issue Template* which is available in the template drop-down when creating a new issue or from the [Issue template list](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new/choose).  It follows the standard issue outline, but already has the team name in the title and automatically adds some of the tags.
  - [Template .md file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.github/ISSUE_TEMPLATE/auth_profile_issue.md) - Edit this file if changes to *Authorized Experience Profile New Issue Template* are needed.

## Product portfolio
The Authenticated Experience - Profile portfolio consists of products that store profile-related information about VA.gov users.  These products include:
### Personal Information
Contains information such as date of birth, preferred name, gender identity
- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information)
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/README.md)
- [Analytics dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/3Z1vT6SlQqevdav1s72QwA/a50123418w177519031p176188361/) 
- [Staging users and usecases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/QA/test-accounts-and-test-cases.md)


### Contact Information
Contains information including mailing address, home address, phone numbers, email address
- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information)
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/README.md)
- Analytics dashboards
   - [GA dashboard for contact information](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/3Z1vT6SlQqevdav1s72QwA/a50123418w177519031p176188361/)
   - [GA dashboard for address validation](https://analytics.google.com/analytics/web/#/dashboard/pq_-PrkvQleUdCBbV7eq7Q/a50123418w177519031p176188361/)
- [Staging users and usecases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/README.md#how-to-access-and-testhttps://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/README.md#how-to-access-and-testhttps://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/README.md#how-to-access-and-test)

### Military Information (Est. to start in April)
Contains military information 
- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/military-information)
- [Ideas for Improvements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/improvement-ideas.md)
- [VA.gov Military Personal Info Intake notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/meeting-notes/va-profile-intake-meeting-2022-03-10.md)


### Direct Deposit Information
Contains information for adding direct deposit for compensation and pension benefits, as well as education benefits.
- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit)
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/direct-deposit/README.md)
- Google Analytics
  - [Direct deposit for EDU ](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/naG_-UneTxy50WvvIH0GGQ/a50123418w177519031p176188361/)
  - [Direct deposit for Comp & Pen](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/compensation-pension-project-outline.md)
- [Staging users and usecases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-direct-deposit.md)

### Notification Settings
Gives users the ability to request text notifications or turn them off.
- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/notification-preferences)
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/README.md)
- Analytics dashboard
   - [Notification Settings GA Dashboard](https://analytics.google.com/analytics/web/#/dashboard/LcYXUwF2Q8SQ59WQX6OTsw/a50123418w177519031p184624291/)
   - [Top Events: Notification Settings page](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20211103&_u.date01=20211103&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.secSegmentId=analytics.pagePath&explorer-table.advFilter=%5B%5B0,%22analytics.pagePath%22,%22PT%22,%22notifications%22,0%5D%5D&explorer-table.rowCount=50/)
- [Staging users and use cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/README.md#how-to-access-and-test)
- [Technical diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/technical-diagrams/notification-preferences-architectural-diagram.md)

### Account Security (Managed by Identity Team)
Provides information about the user's verification status and whether they have enabled 2-factor authentication
- [Staging users and usecases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/account-settings-V1#how-to-access)

### Connected Apps (Manageed by Lighthouse Team)
Provides links to third-party websites and applications that can be connected to the VA.gov Profile.  Also shows any apps that the user has connected.
- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/connected-apps-data)
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/account-settings-V1/README.md)
- [Staging users and usecases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/README.md#how-to-access-and-test)

<hr>

## Now/Next/Later Roadmap

### Now 
- [Sprint Objectives](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/authenticated-experience/sprint-objectives/profile)
- [Project Status Sheet](https://salientcrgt.sharepoint.com/:x:/s/VSATeam/EQjbP_WerihBlDg3ArIrlR8Bk4aSfdsmJJw4NFCm9vGjFQ?e=112oGl)
- Work in Progress
    - [Personal Information Revision](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/personal-information/personal-information-revision)
      - [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/README.md)
      - [Design](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/personal-information/personal-information-revision/design)
      - [Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/personal-information/personal-information-revision/research)
      -  [Front-end documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/personal-information/personal-information-revision/frontend)
      - [Use Cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/QA/test-accounts-and-test-cases.md)
    - [Address Change Messaging](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information/address-change-messaging)
       - [Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-change-messaging/initiative-brief.md)
       - [Design](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information/address-change-messaging/design)
       - [Front-end documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/personal-information/personal-information-revision/frontend)
    - [Bad Address Indicator](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information/bad-address-indicator)
      - [Project Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/README.md)
    - [MyHealtheVet Profile Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/mhv-profile-research)
      - [Project Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/mhv-profile-research/README.md)
    
### Next 
   - [Profile team priorities Q1-Q2 2022](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/roadmap/team-priorities-profile-Q1-Q2-2022.md)
  
### Later 
 - [Product Roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/roadmap/profile-roadmap.md)
 - [Ideas for Profile Improvements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/future-improvements.md)

## Other Team Intiatives that Affect VA.gov Profile
- EVSS Service Migration
  - [Project Slack Channel](https://dsva.slack.com/archives/C02CQP3RFFX)
  - [Auth Profile Project Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/evss-migration)

## Product approach 

### Artifacts
- [Team charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/charter.md)
- [Authenticated Experience Overview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/README.md)
- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/product-outline.md)

### Research and design
- [Personal Information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/personal-information)
- [Contact Information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information)
- [Military Information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/military-information)
- [Direct Deposit Information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit)
- [Notification Settings](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications)
- [Account Security](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/account-settings-V1)
- [Connected Apps](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/connected-apps-data)
- [MyHealtheVet Profile Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/mhv-profile-research)

### Engineering
- [Environment Mapping](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/va-profile-environment-mapping.md#how-va-profile-environments-map-to-vagov)


## Authenticated Experience - Profile Team

- [Team Charter - Contacts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/authenticated-experience#team)


### Meetings

- [Team Charter - Workflow + Cadence](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/charter.md#workflow--cadence)

<br>

---

