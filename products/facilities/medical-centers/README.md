# VA Medical Centers README 

[Key resources](#key-resources) 

[VAMC resources](#vamc-resources)

[Practice specific](#practice-specific-resources)
- [Product](#product)
- [Engineering](#engineering)
- [Design/research](#design-research)
- [CMS](#cms)

[Legacy info about the VAMC pages](#legacy-info-about-the-facility-locator)

## Key resources 

- [**VSA Facilities Team transition overview**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/facility-locator/product-transition-doc/product-transition-overview.md) | March 2022
- [**VSA Facilities team Research and Design Hub**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/facility-locator/product-transition-doc/vsa-ux-transition-doc.md) | March 2022

## VAMC resources
- [**VSA VAMC product transition document**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/facility-locator/product-transition-doc/vamc-pages-transition.md) | March 2022

## Practice specific resources

### Product 
- [**CMS product sheets**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/VA-CMS-Product-Sheets.pdf) | December 2020
- [**CMS VAMC Knowledge Base**](https://prod.cms.va.gov/help/vamc)

### Engineering
- [**VA.gov-cms repo**](https://github.com/department-of-veterans-affairs/va.gov-cms) contains docs for developers working on the CMS codebase.
- [**VAMC product demo environment training**](VACMS-product-demo-environments-training.pdf)

### Design-research

- [**Design folder**]()
- [**Research folder**](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/medical-centers/research)
- [**Research summary**](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/medical-centers/research#vamc-research-readme)
- [**CMS research folder**](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/cms/research)

### CMS

- [**Working with CMS team - Rules of Engagement**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/working-with-cms-team.md#working-with-cms-team---rules-of-engagement-roe)
- [**Content management system README**](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/cms#content-management-system)

## Legacy info about the VAMC pages

## VAMC upgrade work - October 1, 2020 thru December 31, 2020

**Product owner:** Dave Conlon (David.Conlon@va.gov), DEPO
**Business stakeholder:** Jenny Heiland-Luedtke (Jennifer.Heiland-Luedtke@va.gov) VHA Digital Media 

### Business goal
`By end of October 15th, 2021, VAMC will have all Systems in dual-state status.`

**What this means:**
- All 139 VAMC systems will either be in full production or in dual-state status. 
  - (Dual-state status, is where the CMS system has been published and is visible via a browser using the approved VA URL, but is not yet customer facing due to disallow blocking set up in robot.txt files) 
  - All new required site content is drafted and published in Drupal Prod (prod.cms.va.gov)
  - All legacy content, files, links, etc. have been accounted for and documented (upgraded or not)
  - The team has created and documented (e.g., upgrade runbook, content creation cheatsheets, step-by-step guides, etc.) a repeatable, scalable VAMC site upgrade process in order for VHA to be able to upgrade 134 legacy VAMC system websites over a 24-month period

**What this does not mean:**
- VAMC public affairs teams are trained on Drupal
- Each VAMC has reviewed and finalized their new website's content and information
- We have turned off the old websites and implemented site redirects
