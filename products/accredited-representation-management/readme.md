# Accredited Representation Management (ARM) - Read Me

_Formerlly known as Find a Representative (FAR)_

The Accredited Representation Management (ARM) team is part of the Accredited Reps Crew in the OCTO Benefits Portfolio.

**Mission**: Create a high-quality, accessible suite of services within VA.gov to serve Veterans in managing their representation, and to support the deprecation of legacy systems (eBenefits, OGC) currently being used for these actions.

## Product Resources

#### In Production
1. **Find a Representative**: [Find a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/find-rep).
2. **Appoint a Representative**: [Request help from a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/appoint-rep/introduction)
3. **Representative Status** 
   1. Dedicated Representative Status subpage in Profile: [Accredited representative or VSO information](https://www.va.gov/profile/accredited-representative)
   2. The Representative Status widget is present in Find a Representative, Appoint a Representative (Intro page), and the supporting landing page
5. **Landing page** supporting content: [Get help from a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/)
6. **FAQ page** supporting content: [VA accredited representative FAQs](https://www.va.gov/resources/va-accredited-representative-faqs/)

#### Demo Videos
1. [Find a Representative Demo](https://dvagov.sharepoint.com/:v:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representation%20Management/Product%20Information/Product%20Demo%20Recordings/Find%20a%20Representative%20Demo.mov?csf=1&web=1&e=AaVq9f)
2. [Appoint a Representative - PDF Generation Demo](https://dvagov.sharepoint.com/:v:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representation%20Management/Product%20Information/Product%20Demo%20Recordings/Appoint%20a%20Representative%20-%20PDF%20Generation%20Demo.mp4?csf=1&web=1&e=Z6NxVn)
3. [Appoint a Representative - Online Submission Demo](https://dvagov.sharepoint.com/:v:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representation%20Management/Product%20Information/Product%20Demo%20Recordings/Appoint%20a%20Representative%20-%20Online%20Submission%20Demo.mp4?csf=1&web=1&e=6fZuue)
4. [Representative Status Widget Demo](https://dvagov.sharepoint.com/:v:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representation%20Management/Product%20Information/Product%20Demo%20Recordings/Representative%20Status%20Widget%20Demo.mp4?csf=1&web=1&e=nMo14H)
5. [Representative Status in Profile/MyVA Demo](https://dvagov.sharepoint.com/:v:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representation%20Management/Product%20Information/Product%20Demo%20Recordings/Representative%20Status%20in%20Profile_MyVA%20Demo.mp4?csf=1&web=1&e=KrCRpw)

### Metrics
**Datadog Dashboards**
1. [ARM: Find a Representative](https://vagov.ddog-gov.com/dashboard/55d-sc2-bxi/arm-find-a-representative?fromUser=false&refresh_mode=sliding&from_ts=1736986754401&to_ts=1739578754401&live=true)
2. [ARM: Representative Status (Sitewide)](https://vagov.ddog-gov.com/dashboard/ttj-p2z-9gh?fromUser=true&refresh_mode=sliding&from_ts=1734903344987&to_ts=1737581744987&live=true)
   1. [Authenticated Experience: Profile](https://vagov.ddog-gov.com/dashboard/86m-u8e-z5x/authenticated-experience-profile?fromUser=false&refresh_mode=sliding&from_ts=1753376169468&to_ts=1753980969468&live=true) - the Accredited Representative Status section reflects reporting of Representative Status in Profile
4. [ARM: Appoint a Representative](https://vagov.ddog-gov.com/dashboard/iiz-nnm-2em/arm-appoint-a-representative?fromUser=false&offset=0&refresh_mode=monthly&from_ts=1751353200032&to_ts=1753980942350&live=true)
5. [representation-management APM dashboard](https://vagov.ddog-gov.com/apm/entity/service%3Arepresentation-management?compareVersionEnd=0&compareVersionPaused=false&compareVersionStart=0&dependencyMap=qson%3A%28data%3A%28telemetrySelection%3Aall_sources%29%2Cversion%3A%210%29&dependencyMap.showNetworkMetrics=false&env=eks-prod&fromUser=false&graphType=flamegraph&groupMapByOperation=null&logs=qson%3A%28data%3A%28indexes%3A%5B%5D%29%2Cversion%3A%210%29&operationName=rack.request&panels=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&shouldShowLegend=true&sort=time&summary=qson%3A%28data%3A%28visible%3A%21t%2Cchanges%3A%28%29%2Cerrors%3A%28selected%3Acount%29%2Chits%3A%28selected%3Acount%29%2Clatency%3A%28selected%3Alatency%2Cslot%3A%28agg%3A95%29%2Cdistribution%3A%28isLogScale%3A%21f%29%2CshowTraceOutliers%3A%21t%29%2Csublayer%3A%28slot%3A%28layers%3AserviceAndInferred%29%2Cselected%3Apercentage%29%2ClagMetrics%3A%28selectedMetric%3A%21s%2CselectedGroupBy%3A%21s%29%29%2Cversion%3A%211%29&traceQuery=&traces=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&start=1753966555279&end=1753980955279&paused=false) - all activity related to ARM products

**Domo Dashboards**
1. [Accredited Representation Managment](https://va-gov.domo.com/page/1897070864) - User trends for ARM products
2. [VA.gov Forms KPIs](https://va-gov.domo.com/page/447193050) - for tracking our Appoint a Representative form experience (21-22/21-22a), working with Analytics to get rid of the extra filters
3. ~[User Reports of Outdated Information](https://va-gov.domo.com/page/1509130506) (Find a Representative)~ - no longer being maintained

## Resources
1. [ARM Github Project](https://github.com/orgs/department-of-veterans-affairs/projects/1180/views/10)
2. [ARM Figma Designs](https://www.figma.com/file/bzbwObT9hiItve0q3cQX9c/Find-and-Appoint-a-Representative?type=design&mode=design&t=qs3g0N5S6p6hSnJo-0)
3. [ARM Murals](https://app.mural.co/t/departmentofveteransaffairs9999/r/1613770853903?folderUuid=6f5bc102-a270-4486-8f72-551eb1f9a8b5) - IA and user flows, QA exercises
   1. [ARM Stakeholders and Advisors](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1699986925507/b10367544c62e9b5e91ce0402cfb40d15b33804f)
5. [IA redirect plan - Sharepoint](https://dvagov.sharepoint.com/:w:/r/sites/SitewideCAIA/_layouts/15/Doc.aspx?sourcedoc=%7B203EE57C-1260-4A20-9981-40A7396FB36A%7D&file=0.0%20Redirect%20plan.docx&action=default&mobileredirect=true)
6. [ARM Investigation](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representation%20Management/Research/ARM%20General%20Investigation.docx?d=wc58670f9e35140debe149ac21f20b65a&csf=1&web=1&e=lYiU0d)
7. [ARM Future Ideas](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representation%20Management/ARM%20Future%20Ideas.docx?d=wfe95a788166e4670bfda5a59798550d7&csf=1&web=1&e=7iFIw0)

## ARM Team Members

- DSVA Product Owner: Jennifer Bertsch, Jennifer.Bertsch@va.gov
- Product Manager: Lindsay Li-Smith, lindsay.li-smith@oddball.io
- [Full ARM team roster](https://github.com/orgs/department-of-veterans-affairs/projects/947/views/5)

## Communication
Questions?  You can find us on the OCTO/DSVA slack channel **#benefits-representation-management**
