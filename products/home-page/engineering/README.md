# VA.gov Homepage Engineering README

Last updated: October 2023

Modern source of technical truth for VA.gov homepage iteration that shipped June 2023.

## Homepage monitoring
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/engineering/monitoring.md

## Homepage build

Homepage consists of several sections, driven by different technical mechanisms. 

| Section  | Technical Mechanism | Links | Drupal Role / Section required |
| ------------- | ------------- | -------- | ------------------ |
| Benefit promo | Drupal - custom block | https://prod.cms.va.gov/block/208 | Homepage manager, OPIA Home Page section; Drupal admin |  
| Create account call to action | Drupal - custom block | https://prod.cms.va.gov/block/227 | Homepage manager, OPIA Home Page section; Drupal admin |
| Search input | FE React widget | | N/A | 
| Other search tools menu | Drupal - Other search tools menu  |https://prod.cms.va.gov/admin/structure/menu/manage/other-search-tools | Drupal admin |
| Top pages menu | Drupal - Top pages menu | https://prod.cms.va.gov/admin/structure/menu/manage/popular-on-va-gov | Drupal admin |
| News promo | automated via ECA 4/2025,  [details here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/engineering/homepage-news-block-automation.md) | Drupal - custom block: https://prod.cms.va.gov/block/209 | Homepage manager, OPIA Home Page section; Drupal admin |
| Top tasks / Benefit | Drupal - Home page Hub list menu | https://prod.cms.va.gov/admin/structure/menu/manage/home-page-hub-list |  Drupal admin |
| Email signup | GovDelivery input form | N/A | N/A | 
| Veteran images | FE hard coded | N/A | N/A |

Homepage permissions: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/11160

## Homepage structure
[Homepage structure Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1735851918125/0a3e0b39b7534d90e886edb660012dc70bcad652) displays which visual elements tie to which Drupal data origin
