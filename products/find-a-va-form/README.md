# Product outline: Find a VA Form

All background, historical, discovery, and status/maintenance documentation for the Find a VA Form product. 

## Modern maintenance shortlinks
- [Incident Response](#incident-response)
   - [Team](#team)
- [VA Forms Contacts](#va-forms-contacts)
- [Troubleshooting](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/engineering/troubleshooting.md)
    - [Find Forms FAQ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/find-forms-faq.md)
- [Engineering (architecture / data)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/engineering/engineering.md)


## Product Brief information
- [KPIs](#kpis)
- [MVP Problem statement, Status, and Decisions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/mvp/README.md)
    - [Go To Market Strategy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/mvp/README.md#go-to-market-strategy)
- [Post-MVP Status and Decisions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/post-mvp-status-and-decisions.md)


----

## Incident Response
As of 8/1/23:

### Team
 - Team Name: Sitewide Public Websites
 - GitHub Label: [Public Websites](https://github.com/department-of-veterans-affairs/va.gov-team/labels/Public%20Websites)
 - Team Slack channel: [#sitewide-public-websites](https://dsva.slack.com/channels/sitewide-public-websites)
 - Forms Slack channel: [#va-forms](https://dsva.slack.com/channelss/va-forms)
 

### Sitewide Public Websites Team Members
|Name|Role|
|----|----|
|Dave Conlon	| Find a VA Form Product Owner|
|Wes Rowe   |Product Manager, Agile 6|
|Jill Adams |Delivery Manager, Agile 6|
|Daniel Sasser    |Backend engineer, Agile 6|
|Steve Wirt	| Facilities Team, Forms/Drupal subject matter expert, Civic Actions|

## VA Forms Contacts
__VA forms stakeholder working group includes:__

### Forms managers
|Name|Role re: Forms|
|----|----|
|Vaccaro-Palomaki, Missie <Missie.Vaccaro@va.gov>|Business owner of Forms managers (OPAL), VACO & NCA Forms manager|
|Bennett, Grant <Grant.Bennett@va.gov>  | VHA Forms manager|
|Kessinger, Nancy J. <nancy.kessinger@va.gov> | VBA Forms manager |
|Allmond, Yvette M. <yvette.allmond@va.gov> | VBA Forms manager|

#### Other forms related contacts of note
|Name|Role re: Forms|
|----|----|
|O'Donnell, Fran <frances.o'donnell@va.gov> | VHA Paperwork reduction act liaison to OMB |
|Swearinger-Smith, Gail T. <Gail.SwearingerSmith@va.gov>|VHA forms admin|

### Forms DB
Forms DB is in maintenance mode.
- Reid, Kevin <Kevin.Reid@va.gov> -- Owner

### Lighthouse API Team
Lighthouse teams owns the Sidekiq job that imports CMS Forms data to Lighthouse, for populating Find a Form search results.
|Name|Role|Email|
|----|----|----|
|Michael Hobson |michael.hobson@adhocteam.us / shaun.hobson@va.gov | Product Manager, Lighthouse VA Forms API | 
|Emily Goodrich |emily.goodrich@oddball.io | Delivery Manager, Lighthouse VA Forms API |
|Kristen Brown |kristen.brown@adhocteam.us / kristen.brown5@va.gov | Software Engineer, Lighthouse VA Forms API (AdHoc)|
|Matt Kelly |matt.kelly@adhocteam.us / matthew.kelly7@va.gov | Technical Lead, Lighthouse VA Forms API|
|Ryan Link	| | Customer Success Manager, Lighthouse APIs [Oddball]|

### Other Subject Matter Experts
|Name|Role|
|----|----|
|Marci McGuire	|Former Product Manager, iterations on Find a Form|
|Ryan Thurlwell	|Design Lead, MVP|
|Mark Greenburg	|VA APIs|
|Charley Stran	|Formerly supported Forms on Lighthouse API team|


### Other forms contacts
This list was provided during 2022 Public Websites contract transition. Unclear what these folks' role with forms has been.
- Huber, Diane <Diane.Huber@va.gov> - OIT / Development, Security & Operations
- Walker, Stephen <Stephen.Walker4@va.gov> - OIT, IT Specialist
- Ranes, Michelle M. <michelle.ranes@va.gov> - OIT, Senior IT Specialist/ Web Dev
- Tuscher, Joshua <joshua.tuscher@va.gov> - OPIA Media technologist
- VAVBAWAS/CO/PCO <PCO.VBACO@va.gov> - 

### Publications Control Officer (PCO)  Contacts by Business Line
**last updated 11/9/22 by Kayce White <Kayce.White@va.gov>**

Within VA, all administrations have an internal process to review & approve forms being published. When approved, forms publishing rolls up through the following list of contacts, per admin / program.

![contacts-by-business-line](https://user-images.githubusercontent.com/85581471/200931161-13fe43d6-b1de-4b41-8afe-30714c47b3ec.png)



---

## Find Forms Product Brief

### Overview

### Problem Statement
Search research indicates that the VA forms page consistently gets high organic search traffic. However it has almost no or very little conversion value. Because this page already gets high organic traffic and has high potential to provide better conversion:

- we want to redesign experience on this page to the new VA.gov look and feel.
- we want to create new content on this page to drive traffic to top tasks and to the top digital versions of form applications.
- we want to add analytics tracking to all links and downloads.


### Desired User Outcomes

### Undesired User Outcomes

---
## Measuring Success

### KPIs
**Metrics**:
- Standard Domo Dashboard - https://va-gov.domo.com/page/1964748112?userId=666442134 (filter by Find a VA Form)
- Custom Domo Dashboard - https://va-gov.domo.com/page/1785082329
**[Google Analytics Find a Form Dashboard 1.0](https://analytics.google.com/analytics/web/#/dashboard/MHSfv0WxQySyKRB5IYyw1Q/a50123418w177519031p176188361/)**
**Overarching goal**: improve form (potentially benefit) discoverability in order to get more people to an (the right?) application experience\
**Signal**: are people downloading form applications or starting a new benefit application\
- Custom Google Analytics Reports (open Google Analytics
   - Ensure that you're in the All VA.gov Website Data [Production] view and then import the below files into your profile.

*Find VA Forms - Search*
Search Relevancy
- % queries with no results
- % PDF downloads / successful queries
- % conversions to online benefit application experiences / successful queries
- % converions to logging-in following Find VA Form Search query (future, preferred)

Engagement
- % conversions to "Frequently used VA forms" / session
- % conversions to "Manage your VA and other information online" / session
- % conversions to "More information" / session

*Find VA Forms - Detail Landing Pages*

Acquisition
- Are people using Form Detail pages? - Ratio of traffic to Detail pages / Search query volume

Engagement
- % PDF downloads / queries
- % conversions to online benefit application experiences
- % converions to logging-in following Find VA Form Search query (future, preferred)

