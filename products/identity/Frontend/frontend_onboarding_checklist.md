# Identity Frontend Onboarding Checklist

## **Internal Identity Team**

### **Meet the Identity team**

*Set up **15–20 minute informal 1:1s** with your teammates during your first couple of weeks*. Keep them light and conversational — you don’t need to talk about work unless you want to. Feel free to ask about projects they’re working on, how they collaborate across roles, or even just chat about interests outside of work. You will be working closely with the following people:

- [ ] Afia Caruso (Frontend Engineer)  
- [ ] Ian Magenta (Frontend Engineer)  
- [ ] Clayton Zook (UX Researcher \- UX lead)  
- [ ] Charley Tran (UX researcher)  
- [ ] Megan Driscoll (Content Manager)  
- [ ] Jon Knotts (Project Manager)  
- [ ] Jack Bates (Project Manager)

### **Team Ceremonies**

*Make sure the following meetings are on your calendar*. If you’re missing any invites, reach out to **Product Managers (Joelle or Lainey)** or **Project Manager (Jon)**.

- [ ] Weekly Frontend Sync (Monday)  
- [ ] FE/UX Stand-Up (Tuesday and Thursday)  
- [ ] Monthly 1:1 with Team Lead  
- [ ] Sprint Review (Demo)  
- [ ] Retrospective  
- [ ] Sprint Planning  
- [ ] Backlog Refinement

## **Tool & Resource Access**

*Ensure you have access to all [required tools](https://depo-platform-documentation.scrollhelp.site/getting-started/platform-tools)* for working on Platform and collaborating across VA. Complete this checklist, then review the [platform documentation](https://depo-platform-documentation.scrollhelp.site/getting-started/request-access-to-tools#Requestaccesstotools-GettingaccesstotheVAGitHuborganization) for more in-depth information about accessing these tools.

### **Slack**

#### **Set up your Slack**

- [ ] Gain access to Slack OCTO workspace  
1. On the [DOTS Service Desk](https://jira.devops.va.gov/servicedesk/customer/portal/1) landing page, click **Tools Support**.  
2. Click **Request Tool Access**.  
3. In the **Summary** field, enter “Request for Slack access.”  
4. Select **Slack** from the **DOTS Tools List** dropdown menu.  
5. Click **Create** to submit the request.  
- [ ] Update slack profile to meet [Platform Standards](https://depo-platform-documentation.scrollhelp.site/getting-started/slack-profile)  
  - [ ] Profile Image  
  - [ ] Full Preferred Name  
  - [ ] TimeZone  
  - [ ] Title `Crew/Team - Role [Company]`  
  - [ ] TimeZone  
  - [ ] Pronouns  
  - [ ] GitHub handle

#### **Join Team Slack Channels**

To ensure you’re looped into all key discussions, *make sure you’re added to the following Slack channels in the OCTO workspace* (see **Trevor, Joe, your CoP lead, or your PM** if you need to be added). These channels provide important updates, team discussions, and quick access to resources and support.

- [ ] [`#identity-surge`](https://dsva.slack.com/archives/C04MM3WJN1E)   
- [ ] [`#identity-team`](https://dsva.slack.com/archives/C07H32GHX8B)  
- [ ] [`#identity-support`](https://dsva.slack.com/archives/CSFV4QTKN)  
- [ ] [`#identity-internal-engineers`](https://dsva.slack.com/archives/C06JLV08D32)  
- [ ] [`#va-identity-alerts`](https://dsva.slack.com/archives/C02SBFQ22RL)

#### **Tips for using Slack effectively:**

* Use threads to keep conversations organized.  
* Tag teammates when you need their attention.  
* Post in the appropriate channels (think internal vs external).  
* Post status updates to communicate availability.  
* Post questions publicly whenever possible. Avoid DMs unless necessary.  
* Review pinned messages and canvas for context. They are updated frequently

### **Github**

- [ ] Get access to the VA GitHub Organization (Ask your Program Manager to submit an [Add User to the VA Organization ticket](https://github.com/department-of-veterans-affairs/github-user-requests/issues/new/choose))  
- [ ] Clone the following repositories and follow instructions in `READme`  
  - [ ] [`Vets-website`](https://github.com/department-of-veterans-affairs/vets-website)  
  - [ ] [`Vets-api`](https://github.com/department-of-veterans-affairs/vets-api)  
  - [ ] [`Content-build`](https://github.com/department-of-veterans-affairs/content-build)  
  - [ ] [`Vets-api-mock-data`](https://github.com/department-of-veterans-affairs/vets-api-mock-data)  
- [ ] Get added to [`octo-idenity`](https://github.com/orgs/department-of-veterans-affairs/teams/octo-identity) team on GitHub  
- [ ] Get added to [VA Identity GitHub Project](https://github.com/orgs/department-of-veterans-affairs/projects/1646) board  
- [ ] Bookmark the [Sprint Review](https://github.com/orgs/department-of-veterans-affairs/projects/1646/views/12) view

### **Google Analytics**

- [ ] If you need access to Google Analytics, [follow these instructions](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/analytics-customer-support-guide#Analyticscustomersupportguide-1.RequestaccesstoGoogleAnalytics).   
- [ ] Once access is granted, log in at [https://analytics.google.com](https://analytics.google.com/) to view more detailed breakdowns of site traffic.

### **SOCKS/AWS**

- [ ] Create a [new issue using this link](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Coperations%2Cops-access-request&template=Environment-Access-Request-Template.yml&title=Access+for+%5Bindividual%5D) and follow the steps. You can see an [example here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16924)  
  - [ ] SSH key is required for SOCKS. If you don't have a SSH Key or know how to find it [click here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#create-ssh-public-key) for instructions  
  - [ ] AWS is optional and should be requested when needed

## **Monitoring & Support**

The Identity team manages incidents, outages, and support requests through continuous monitoring and an on-call rotation. *Complete the following checklist to ensure you’re fully prepared to monitor and support our products*

### **Access and Tools**

- [ ] Request Datadog write access. ([Instructional documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/get-access-to-datadog))  
- [ ] Open a support ticket at [https://yourit.va.gov/](https://yourit.va.gov/) for Pagerduty Account  
- [ ] Review [Datadog Terminology](https://docs.google.com/document/d/1F91AOQznB4XaDpuVSX7th_sqIL56GKJcd29hHULDoUY/edit?tab=t.0#heading=h.6tz0bi48kj6o) documentation  
- [ ] Walk through [main Datadog dashboard](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false) with Team Lead

### **Incident Response**

- [ ] Review platform [Incident Response Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Incident%20Response)  
- [ ] Configure Pagerduty notifications   
- [ ] Subscribe to pagerduty calendar: [https://ecc.pagerduty.com/private/c16b3d6f7a713407866a5136575bae93714f4b5b1b6a01d6/feed/PDQDBPZ](https://ecc.pagerduty.com/private/c16b3d6f7a713407866a5136575bae93714f4b5b1b6a01d6/feed/PDQDBPZ)

### **Team Processes**

- [ ] Review internal [Incident Response Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Incident%20Response) with Team Lead  
- [ ] Review [Identity Support Process](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Support%20Process) documentation  
- [ ] Confirm that you’ve been added to on-call rotation in Pagerduty  
- [ ] Confirm that you’ve been added to on-call sprint rotation in Slack

## **Recommended Platform Education**

### **General education tasks**
   - [ ] Watch the [General orientation](https://depo-platform-documentation.scrollhelp.site/getting-started/orientation-sessions#Orientationsessions-GeneralOrientation) recording  
   - [ ] Watch [VA.gov overview video](https://depo-platform-documentation.scrollhelp.site/getting-started/platform-orientation#PlatformOrientation-Welcome) for an overview of [http://VA.gov](http://va.gov/)  
   - [ ] Watch [VFS Orientation for Platform Website video](https://depo-platform-documentation.scrollhelp.site/getting-started/orientation-sessions#Orientationsessions-PlatformWebsiteOrientation)  
   - [ ] Watch the [Platform Support overview video](https://www.youtube.com/watch?v=V3o_oiwrpA4)  
   - [ ] Review the [Getting help from the Platform in Slack guidance](https://depo-platform-documentation.scrollhelp.site/support/getting-help-from-the-platform-in-slack)  
   - [ ] Review [Welcome](https://depo-platform-documentation.scrollhelp.site/getting-started/Welcome.1255276574.html) documentation  
   - [ ] Review [Support Overview](https://depo-platform-documentation.scrollhelp.site/support/Support-overview.604012552.html) documentation  
   - [ ] Review the guidance on [Submitting a feature request](https://depo-platform-documentation.scrollhelp.site/support/Submitting-a-feature-request.1938915400.html)  
   - [ ] Review guidance on [How to Submit Feedback about Platform Products & Services](https://depo-platform-documentation.scrollhelp.site/support/give-feedback-about-platform-products-or-services)  
   - [ ] Review guidance on the [Platform Satisfaction Survey](https://depo-platform-documentation.scrollhelp.site/support/platform-satisfaction-survey)  
   - [ ] Review the [Platform Principles](https://depo-platform-documentation.scrollhelp.site/getting-started/platform-crew-principles)  
   - [ ] Review the [GitHub Markdown Cheatsheet](https://help.github.com/en/categories/writing-on-github) to learn the syntax for formatting documents in GitHub  
   - [ ] Review the [Digital Modernization Strategy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-gov-relaunch-2018/va-gov-strategy/digitalmodernizationstrategy.pdf)  
   - [ ] Review the [Web Brand Consolidation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-gov-relaunch-2018/va-gov-strategy/the-new-va.gov-briefing-2019-07.pdf) documentation  
   - [ ] Review the [Collaboration Cycle](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/index.html) documentation on Platform Website  
   - [ ] Review [process for when a teammate leaves](https://depo-platform-documentation.scrollhelp.site/getting-started/offboarding)

### **Frontend specific education task**
  - [ ] Review [frontend developer documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/Frontend-developer-documentation.687931428.html) on Platform Website  
  - [ ] Watch the [Front-end orientation](https://depo-platform-documentation.scrollhelp.site/getting-started/orientation-sessions#Orientationsessions-Front-endOrientation) recording  
  - [ ] Watch the [Analytics orientation](https://depo-platform-documentation.scrollhelp.site/getting-started/orientation-sessions#Orientationsessions-AnalyticsOrientation) recording  
  - [ ] Watch the [Accessibility orientation](https://depo-platform-documentation.scrollhelp.site/getting-started/orientation-sessions#Orientationsessions-AccessibilityOrientation) recording  
  - [ ] Watch the [QA orientation](https://depo-platform-documentation.scrollhelp.site/getting-started/orientation-sessions#Orientationsessions-QAOrientation) recording  
  - [ ] Watch the [Design System/Forms Library orientation](https://depo-platform-documentation.scrollhelp.site/getting-started/orientation-sessions#Orientationsessions-DesignSystem/FormsLibraryOrientation) recording
