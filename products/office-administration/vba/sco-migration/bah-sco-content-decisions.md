# Booz-Allen Hamilton School Certifying Officials Content Decisions/Technical Solution Narrative

### See [Key Design Decisions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/sco-migration-key-decisions.md)

## Summary
In 2019, Booz-Allen Hamilton led an initiative to improve the content and experience of pages utilized by School Certifying Officials (SCOs). Because there is not yet a template for this type of content on the modernized VA.gov, it has been decided that the content will be migrated to a custom page on VA.gov and hosted in the `vagov-content` GitHub repository. 

This technical approach should not be the default for future content of this type; similar scenarios should be addressed on a case-by-case basis.

## Problem Statement
School Certifying Officials content migration efforts [documentation folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/office-administration/vba/sco-migration ). _Product Outline or SCO Migration Problem Statement to be linked here when created._

Booz-Allen Hamilton conducted [research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/research/SCO-Migration-Discovery-Readout-v1-20191003.pdf) on School Certifying Officials content, and found that “SCOs want and need VA resources to do their work effectively, but find it challenging to access information on the VA website.” As part of the team’s efforts to improve the usability and findability of SCO content, it has been decided that the content will be migrated to the modernized VA.gov. 

The content in question is not veteran-facing, which means it is designated it as Tier 2 content. At the time of the proposed migration (Q3/Q4 2019), there is no template for the design or technical implementation of Tier 2 content on VA.gov.

**In short, the team and stakeholders have determined that the best solution for their end users is to migrate the content to the modernized VA.gov, but at the time of the migration, VA.gov does not have a precedent set for the design or technical implementation of this type of content.**

## Solution Description
It has been decided that SCO content should be migrated to a custom page on the modernized VA.gov and hosted in the `vagov-content` GitHub repository. 

The SCO page will go through the multi-point review process with the VSP (platform) team to ensure that it upholds the standards of the modernized VA.gov.

## Alternatives Considered
Before arriving at the `vagov-content` repository solution, the team considered the following alternatives:

### VA.gov Drupal CMS
As stated previously, this option was not available because Drupal templates for Tier 2 have not yet been built. While Drupal Tier 2 templates are expected to be completed in the first half of 2020, this timeline did not align with the business stakeholder's requirement.

### TeamSite Template
The team discussed working with the TeamSite (legacy VA.gov CMS) team to build a new page template that followed the VA.gov Design System and then utilizing that template for the SCO content. This was not pursued due to level of effort and the reality that such a template may detract from the effort to migrate Tier 2 and Tier 3 content over to the modern VA.gov.

### TeamSite File Site
The TeamSite CMS is able to serve static pages. The option of hand coding the SCO pages following the VA.gov Design System and then loading them via the TeamSite File Site process was discussed but not pursued because of the bureaucratic overhead required.

## Acknowledged Risks
- Because the page layout does not match existing templates built out in the Drupal CMS, the content cannot be migrated into the CMS as is. The content will either need to be redesigned, or a template created in the CMS, in order for it to be migrated to the CMS. 
- Because of the risk stated above, VA stakeholders will need to rely on the VSA Public Websites team to update the content.

## Future Implications
Ideally, we will avoid this scenario in the future. Specifically, we do not recommend further migrations of Tier 2 content until a design and technical approach for said content is determined. 

If similar scenarios arise — either specific to Tier 2 content, or relating to other content migrations that we do not yet have templates for in the modernized VA.gov — these instances will be addressed on a case-by-case basis. In short, **the solution outlined here, used for SCO content, is not intended to set a precedent.**

## Stakeholder Endorsement

- Patrick Bateman
- Kevin Hoffman
- Chris Johnston
