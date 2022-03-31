# Content Management System

**Editor-centered management for Veteran-centered content**

The CMS team's mission is to empower VA content editors with the tools they need to create Veteran-centered content. We work to build a content management system that is easy to use, scalable, and facilitates Veteran-centered experiences on VA.gov and beyond.

The CMS has two teams, a Platform CMS Team and a Sitewide CMS Team. Our work includes:

| Platform CMS Team | Sitewide CMS Team |
| --- | --- |
| Content API Performance & Scalability | Onboarding of new Products |
| DevOps / Infrastructure / Demo Environments | Data Migration for Product teams |
| CMS Application Architecture & Quality Control | CMS Training |
| Accelerated Publishing Effort | Content Ops: Editorial Workflows & Tools |
| | Product Strategy & Launch Runbooks |
| | User Account & Permissions Governance |
| | Content Strategy / Modeling / Governance |
| | UX Design & Research |
| | Drupal Engineering for Product teams |
| | CMS Design System |
| | [CMS Helpdesk](helpdesk) |

## CMS-supported products at VA.gov

A product is defined as a set of related features that drive specific outcomes with vets or other audiences. They typically are built with a cluster of content types.  

[CMS Product Sheets](VA-CMS-Product-Sheets.pdf) (PDF) provides an overview of all products managed in the CMS. 

Products owned by Facilities team
1. **VAMC system** (eg www.va.gov/pittsburgh-health-care). Eventually housing 1200+ VHA facilities across 150 VAMC systems. 
1. **Facility status** for VBA facilities, NCA facilities, and Vet Centers (each of these represent stubs of future products)
2. **Vet Center**

Products owned by Public Websites 
1. **VA.gov megamenu** (and possibly in the future, footer)
1. **VA.gov homepage** 
1. **Benefits hubs** (www.va.gov/health-care and 10 other benefits hubs)
1. The Benefits **Outreach hub** at https://www.va.gov/outreach-and-events/
1. **Resources and support** www.va.gov/resources
1. **Campaign Landing Page** 

Products owned by Decisions Tools team
1. **VA forms** www.va.gov/find-forms (formerly owned by Public Websites) 

Content libraries that are shared across products
1. **Banners and alerts** (owned primarily by Public Websites, but other products can create alert blocks)
1. **Media library** (videos, images, PDFs)

Products in the queue
1. **Cemetery**
1. **Regional Office**


## A guide to CMS Documentation 

Documentation about the CMS lives in various places
* The CMS itself houses [CMS Knowledge Base](https://prod.cms.va.gov/help) (VA network access required, and CMS login required, for now). 
* The [va.gov-cms repo](https://github.com/department-of-veterans-affairs/va.gov-cms) contains docs for developers working on the CMS codebase.
* Strategy, process, and artifacts from UX/design work is indexed in an [Airtable](https://airtable.com/appmAWA5qxKq9qxFX/tblXGSLtR4rTyAiY4/viwcPaYsqSwaHCCGW?blocks=hide)
* [The directory containing this README](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/cms) contains documentation needed by other VA.gov teams, such as Platform (VSP) or product (VSA) teams. Read more about [using the va.gov-team repo](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/repo-guidelines.md#naming-guidelines).
* [Confluence](https://va-gov.atlassian.net/wiki/spaces/VAGOV/pages/179765342/2020-2021) houses private documentation used by the team, including our scrum notes, demos, team calendars, and ship reports. It also contains archived documentation from 2018/2019.
* [Shared Drive in Google](https://drive.google.com/drive/folders/0ADx85_gnl3Y4Uk9PVA) is used for WIP documentation and deliverables (such as Research Plan), and other collaboratively authored docs. Also, our defacto home for spreadsheets. Google products are not available on the VA network and not available to VA employees.
* [va.gov-team-sensitive](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive) houses sensitive documentation that should be accessible to certain VA teams, but not made public. This includes [incident reports/post-mortems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Postmortems) for all teams, and [information specific to the CMS application](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/platform/cms) such as login/SSO or other sensitive topics. 

### Documentation resources not currently in use. 

* [va.gov-cms-team](https://github.com/department-of-veterans-affairs/va.gov-cms-team) may house private team documentation. It may replace the CMS team's current use of Confluence.


## How to Reach Us

### Platform CMS Team
- Jess Alexander, Product Manager - Slack `@Jess Alexander`
- Elizabeth Neal, Delivery Manager - Slack `@Elizabeth Neal`
- Eric Oliver, DevOps Lead - Slack `@Eric Oliver`
- Tim Cosgrove, Tech Lead - Slack `@Tim Cosgrove`

### Sitewide CMS Team
- Kevin Walsh, Product Manager - Slack `@Kevin Walsh`
- Clarence Maeng, Delivery Manager - Slack `@Clarence Maeng`
- Steve Wirt, Tech Lead - Slack `@Steve Wirt`
- Wes Rowe, Offices Team Product Manager - Slack `@Wes Rowe`
- Ryan Koch, Offices Team Tech Lead - Slack `@Ryan Koch`

### CMS Program management
- Clarence Maeng, Program Manager - Slack `@Clarence Maeng`

Full team roster can be found in Confluence [here](https://va-gov.atlassian.net/wiki/spaces/VAGOV/pages/811171875/Both+Teams+Scrum+Notes+May+26+2021+-).

Slack channels:
- [#cms-support](https://dsva.slack.com/channels/cms-support) 
- [#cms-team](https://dsva.slack.com/channels/cms-team)


## Table of contents

**CMS Knowledge Base**
- <https://prod.cms.va.gov/help>

**How to Work with CMS team**
- [Working with the CMS team (Rules of Engagement)](working-with-cms-team.md) (work in progress)

**Getting Started**
- [Before you begin, set up HTTPS](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/READMES/https.md)
- [Getting access to the CMS](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/READMES/access.md)
- [Setting up your local environment](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/READMES/getting-started.md)
- [Developer Workflow](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/READMES/workflow.md)
