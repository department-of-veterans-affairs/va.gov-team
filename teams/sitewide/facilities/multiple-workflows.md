# VBA Regional Office MVP editorial workflows proposal

## Value to Customers
Veterans receive accurate and timely information about VBA facilities and services.

## Background
Facilities team will be piloting VBA Regional Offices (ROs) modernized web pages in an MVP with seven ROs.

## Current State
In Drupal, we currently have a single Editorial Workflow that governs all content types.

There is an explicit need to prevent editors from archiving valid facility locations. This is a problem because Veterans receive inaccurate information about VA facilities and services. Technically, it creates excess processing for editors, CMS Support staff, and Drupal engineers to correct inaccurate information.

Adding an additional workflow allows restricting of archiving by content type and by admins only. Editors won't be able to erroneously archive a valid facility, which might create inaccurate or misleading information for Veterans.

## Proposed Future State
Facilities is proposing the creation of a second, separate Workflow that would be considered an Experimental Feature, used only for VBA ROs. A second Workflow will provide the ability to have custom code that hides specific workflow functions (e.g. archive) on specific content types. If successful, additional content types could be migrated to the second Workflow later.

However, a separate Workflow was attempted in the past, with negative results. The separate Workflow affected the primary Content view filters by Editorial Workflow: https://prod.cms.va.gov/admin/content 

To address this concern, Facilities researched and documented the previous Workflow failure and proposed a solution for the failure.

## Problem to Solve
Multiple Workflows created a situation where multiple moderation states with the same name caused publishing failures.
<img width="624" alt="Screenshot 2023-09-13 at 12 25 44 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/73648238/33f3bde3-06a4-42ba-932f-7cf8ed45316e">

## Proposed Solution
Create a multiple filter where each Workflow has its own moderation states.

### Option 1
A moderation state has the same machine name, no matter the Workflow it’s a part of.
<img width="623" alt="Screenshot 2023-09-13 at 12 25 58 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/73648238/b890ee4b-fffd-4d0d-8b5d-95631c401505">

### Option 2
A moderation state has a different machine name depending on the Workflow it’s a part of.
<img width="618" alt="Screenshot 2023-09-13 at 12 26 09 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/73648238/d6115e50-baf5-4644-8276-7e88c8adb580">

## Measuring Success
We expect that success may be measured by the reduction in the number of valid facilities that are archived by editors. This data can be captured in CMS Support tickets related to inaccurately archived facilities.

## Appendix - related tickets
- [#5248](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5248) = Ticket where CMS team identified implemented a second workflows, encountered the bug with views, and decided to roll back to one workflow.
- [#14529](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/14529) = Ticket where Facilities team successfully patched the multi-workflow bug for views
- [#12662](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/12662) = Ticket where Helpdesk identified a number of Facilities that had been incorrectly archived
- [#11028](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/11028) = Ticket documenting issues with Facilities being incorrectly _unarchived_
