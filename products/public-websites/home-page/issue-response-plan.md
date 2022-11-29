# VA.gov Homepage Incident Response Plan 🔥

```diff
In the event of an incident, this document should serve as a useful guide for what to do, who to call, and when. 
```

# Overview
The purpose of this document is to provide a broad view of the systems and teams responsible for the VA.gov homepage. 

## People, Roles, and Responsibilities
|Team |OCTODE POC| Vendor POC|
|---|---|---|
[#sitewide-homepage-refresh](https://dsva.slack.com/archives/C03NSH4SLQY) | Dave Conlon (@Dave Conlon), VA OCTODE Lead | Michelle Middaugh (@Michelle Middaugh), Product Manager
[#sitewide-public-websites](https://dsva.slack.com/archives/C52CL1PKQ) | Dave Conlon (@Dave Conlon), VA OCTODE Lead | Wes Rowe (@Wes Rowe), Product Manager / Jill Adams (@Jill Adams), Delivery Manager 
[#cms-platform](https://dsva.slack.com/archives/C02HX4AQZ33) |Dave Conlon (@Dave Conlon), VA OCTODE Lead | Bentley Hensel(@Bentley Hensel), Product Manager 
[#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1)  | POC rotates 

## VA.gov homepage
|Page | URL| Description|
|---|---|---|
Static landing page| https://www.va.gov/ | existing homepage for VA.gov
Static staging implementation page| https://staging.va.gov/homepage-test/ _updated to https://staging.va.gov/new-home-page/ on 11/29/2022_| staging implementation during build and usability testing
Static soft launch URL| https://va.gov/new-home-page| users will be able to opt-in to new redesigned experience via modal during initial soft launch period (beginning in December 2022). During soft launch, the modal directing Veterans and beneficiaries to the redesigned experience can be toggled off if necessary. 

## Systems
### DevOps/Global: Website
- Provides static content for the Vets.gov website. Dependencies include VA network services (TIC, F5, ...), nginx reverse proxies and S3.
- The basics of the technical architecture that supports the Lighthouse Platform API and the Veteran-facing Services Platform (www.va.gov + api.va.gov) can be found in the [Technical Architecture Overview](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/eaf7de91784c2f18da908f5de47fe3f5117629d2/platform/engineering/TechnicalArchitectureOverview.md) folder

### CMS
- [VA-CMS Incident Response Procedure Overview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/helpdesk/incident-response.md)
- An overall architecture for the Content API is available, including this [high-level diagram showing the flow of HTML, content, and assets between Drupal and the React Application](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/public-content-api/architecture.md#high-level). 

### Search 
- Search.gov provides indexed search results via a web results API. The VA.gov API consumes responses from this endpoint and communicates results to the FE.
