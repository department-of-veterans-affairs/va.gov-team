# Engineering Outline: Veteran Readiness & Employement (Chapter 31), Form 28-1900

## 
[Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/94e-cku-2aq/benefits-veteran-readiness-employment-claims?fromUser=false&refresh_mode=sliding&from_ts=1740667190684&to_ts=1740670790684&live=true)

[Relevant GitHub Issues](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?filterQuery=product%3A%22Chapter+31+Form+%28VR%26E%29%22) - access is required to view


## Completed/Upcoming Work

### Front End

We are modernizing the web form to conform to the VA Design System, using V3 Form components.  Work in that effort can be found here:

#### Completed
- [GitHub Issue 1426](https://github.com/department-of-veterans-affairs/va-iir/issues/1426) - Begin updating the form
    - [vets-website PR](https://github.com/department-of-veterans-affairs/vets-website/pull/34904) - rough draft of the new form
    - [Content Build PR](https://github.com/department-of-veterans-affairs/content-build/pull/2460) - register the app at `temporary/new-vre-28-1900/`
    - [RevProxy PR](https://github.com/department-of-veterans-affairs/vsp-platform-revproxy/pull/858) - See more information [here](https://depo-platform-documentation.scrollhelp.site/developer-docs/routing) about the reverse proxy

#### Upcoming
**Note**: Access is required to view GitHub issues.

- [1475](https://github.com/department-of-veterans-affairs/va-iir/issues/1475) - Create "Your Information" pages
- [1476](https://github.com/department-of-veterans-affairs/va-iir/issues/1476) - Create "Contact Information" pages
- [1477](https://github.com/department-of-veterans-affairs/va-iir/issues/1477) - Set up conditionality between Contact Information fields and pages
- [1478](https://github.com/department-of-veterans-affairs/va-iir/issues/1478) - Set up "save-in-progress" functionality
- [1479](https://github.com/department-of-veterans-affairs/va-iir/issues/1479) - Check "Review" page - match designs and conditional configuration of form
- [1480](https://github.com/department-of-veterans-affairs/va-iir/issues/1480) - Create submit and transformer functions
- [1481](https://github.com/department-of-veterans-affairs/va-iir/issues/1481) - Create `vets-json-schema` entry for the new form
- [1482](https://github.com/department-of-veterans-affairs/va-iir/issues/1482) - Confirmation page
- [1483](https://github.com/department-of-veterans-affairs/va-iir/issues/1483) - E2E Tests


### Back End

We are moving the code into a Rails Engine, located in the `modules/` of `vets-api`.  See the documentation [here](https://depo-platform-documentation.scrollhelp.site/developer-docs/backend-endpoint-tutorial) about the use of Rails Engines in `vets-api`.  The common use case for Rails Engines is to make code modular, encapsulated, and reusable.  In `vets-api`, the main utility is to create clear lines of ownership and team responsibility.

#### Completed
- [GitHub Issue 1444](https://github.com/department-of-veterans-affairs/va-iir/issues/1444) - Created the design document to migrate backend code into a Rails Engine
    - see [the document here](./module_migration_design_document.md).  It is likely to become outdated as the actual implementation work is completed.

#### Upcoming
**Note**: Access is required to view GitHub issues.

- [1462](https://github.com/department-of-veterans-affairs/va-iir/issues/1462) - Feature flag removal
    - An old feature flag toggles between two code paths: `send_to_res` and `send_vre_form`
    - the code related to `send_vre_form` will be removed as a part of this work
    - See this [mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1727286761015/c720da157691aad3bd756fcd75f1e7ec6099cef7) (access required, working on exporting it to pdf)
- [1461](https://github.com/department-of-veterans-affairs/va-iir/issues/1461) - creation of Rails Engine in `modules/`
    - move controllers, models, sidekiq jobs, etc into a directory in `modules/`
    - dependent on completion of 1462
