# Find a Form engineering README

## Architecture

### Data Flow Diagram
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/mvp/technical/findvaform-q3-arch.png?raw=true

### Drupal CMS Forms Migration Documentation
[Migrations: Forms](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/master/READMES/migrations-forms.md)

[Relationship Between VA Forms DB/Lighthouse API/Drupal](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/5702)

### End-to-End Flow to Forms API
Info provided by Srikanth Valluru in [Slack thread](https://dsva.slack.com/archives/CBU0KDSB1/p1633724003270500?thread_ts=1633718388.249000&cid=CBU0KDSB1)

TIC -> revproxy ALB -> nginx -> vets-api ELB -> vets-api -> revproxy ALB -> nginx -> Kong ELB -> Kong -> vets-api ELB -> vets-api -> fwdproxy -> backend 

### Content Flow Diagram
[Whimiscal VA Forms - content flow](https://whimsical.com/va-forms-content-flow-UpSBvigLWBK72p8ajG8v3a)

### Detail Page Content Architecture Diagram
[Whimsical diagram - form detail page content architecture](https://whimsical.com/forms-detail-page-content-architecture-Bn5zRk2PDzuSjpu1d5q4Pu)

### Code Repository
[vets-api/modules/va_forms](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/va_forms)

### VA Forms API Documentation
[VA Forms API](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/4621) 
Documentation for API that indexes data sourced from VA.gov, Lighthouse

### Error messages
When API hits a rate limit, an error message will be displayed to end users, "We're sorry. Something went wrong when we tried to load the search widget." That message originates from Drupal in a React widget on the Find-Form node
https://staging.cms.va.gov/node/2352/edit
https://staging.cms.va.gov/find-forms
