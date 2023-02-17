## Overview of eVSS Migration to Lighhouse platform for 526ez form


## Purpose
eVSS platform is being migrated to the modern Lighthouse platform being built for centralized location for all API services for va.gov. eVSS was the backend platform for older veteran facing online application called eBenefits. eBenefits has been migrated to va.gov and this project covers the migration of the underlying services.

## Scope
The scope of this work for the Disability Experience team is to replace all calls on the form 526 from eVSS endpoints to Lighthouse endpoints. As of Feb 17, 2023, these are the endpoints currently in scope:
- /submit
- /validate
- getPDF
- /rateddisabilities
- Benefits Reference Data API

This list excludes any other endpoints to eVSS that are found during the discovery process.

## Important links
- [Biweekly Lighthouse touchpoint notes and agenda](https://community.max.gov/pages/viewpage.action?spaceKey=VAExternal&title=Lighthouse+-+VA.gov+Touchpoint+Topics)

## Details
|Endpoint|Lighthouse Team|Lighthouse Update               |BDEX Zenhub ticket|Update|Notes|
|--------|---------------|--------------------------------|------------------|------|-----|
|/submit|[Dash](https://app.mural.co/t/agilesixapplications0942/m/agilesixapplications0942/1674666875176/5bffb27d080685913fc74b5e4e2179511e4c2089?wid=0-1674667332547)|Work in progress - ETA April 2023|[41353](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/41353)|In discovery||
|/getpdf|[Firefly](https://app.mural.co/t/agilesixapplications0942/m/agilesixapplications0942/1674666875176/5bffb27d080685913fc74b5e4e2179511e4c2089?wid=0-1674836238600)|Work in progress - ETA March 2023|[53437](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/53437)|In discovery||
|/rateddisabilities|[Ninja Pigs](https://app.mural.co/t/agilesixapplications0942/m/agilesixapplications0942/1674666875176/5bffb27d080685913fc74b5e4e2179511e4c2089?wid=0-1676647953351)|Will not be migrated. [Replacement endpoints](https://dsva.slack.com/archives/C02CQP3RFFX/p1676575053515999) are available.|[53755](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/53755)||ToDo - Schedule time with Team Ninja Pigs|
|/validate|[Dash](https://app.mural.co/t/agilesixapplications0942/m/agilesixapplications0942/1674666875176/5bffb27d080685913fc74b5e4e2179511e4c2089?wid=0-1674667332547)|Unknown|||ToDo - Check with PM Kayla on update|
| Benefits Reference Data(BRD) API|[Ninja Pigs](https://app.mural.co/t/agilesixapplications0942/m/agilesixapplications0942/1674666875176/5bffb27d080685913fc74b5e4e2179511e4c2089?wid=0-1676647953351)|In production||Work has been completed for military branch of service|ToDo - Schedule time with Robin Garrison to understand rest of the work|
|Common API <br>wss-common-services-web-11.6/rest/ratingInfoService/11.6/findRatingInfoPID<br> wss-form526-services-web-v2/rest/form526/v2/ratedDisabilities|N/A|Is not being migrated. [Details in this slack thread](https://dsva.slack.com/archives/C02CQP3RFFX/p1676574262007819). Potential replacement service is production.|||ToDo - Change the form526 wizard to use the Lighthouse veteran_verification/v1/disability_rating|
