# Validating CMS content

**Author(s):** Bill Fienberg
**Last Updated:** May 26 2020  
**Status:** **Draft** | In Review | Approved
**Approvers:** Dror Matalon [], Andrew Gunsch [], Rian Fowler [], Steve Wirt []

## Table of Contents

- [Validating CMS content](#validating-cms-content)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Objective](#objective)
    - [Background](#background)
        - [Content Sources](#content-sources)
        - [Amazon S3](#amazon-s3)
        - [Current checks](#current-checks)
          - [Broken Link Checking](#broken-link-checking)
          - [Accessibility Checking](#accessibility-checking)
      - [Pain points](#pain-points)
        - [Content Writers](#content-writers)
        - [Users](#users)
        - [FE Tools team](#fe-tools-team)
        - [Anybody that is trying to ship code for the VA.gov front end](#anybody-that-is-trying-to-ship-code-for-the-vagov-front-end)
  - [High Level Design](#high-level-design)
  - [Specifics](#specifics)
    - [Detailed Design](#detailed-design)
    - [Code Location](#code-location)
    - [Testing Plan](#testing-plan)
    - [Logging](#logging)
    - [Debugging](#debugging)
        - [Broken links](#broken-links)
        - [Accessibility errors](#accessibility-errors)
    - [Caveats](#caveats)
    - [Security Concerns](#security-concerns)
    - [Privacy Concerns](#privacy-concerns)
    - [Open Questions and Risks](#open-questions-and-risks)
      - [Risks](#risks)
      - [Questions](#questions)
    - [Work Estimates](#work-estimates)
    - [Alternatives](#alternatives)
      - [Highest quality, but lowest speed](#highest-quality-but-lowest-speed)
      - [Fastest speed, but lowest quality](#fastest-speed-but-lowest-quality)
    - [Future Work](#future-work)
    - [Revision History](#revision-history)

## Overview

### Objective

The objective here is to define an updated approach to validate the CMS content. Specifically, this design doc focuses on identifying accessibility errors and/or broken links coming from the CMS content.

This design document is intended for front end and DevOps engineers on the Veteran-facing Services Platform (VSP) and CMS teams.

### Background

Originally on vets.gov, all content was in `vets-website` in a `content/` directory, and you would open a PR to edit content. CI would then run against that PR. Link-checking would run as part of the build the same way it does today. If a broken link or an accessibility error was found, CI would fail, and you wouldn't be able to merge. This meant that broken links and accessibility errors never made their way into the `master` branch.

At some point, the `content` directory was moved out of `vets-website`, and into the `vagov-content` repo. The `vagov-content` repo served as an intermediary CMS while the Drupal CMS was being built. While most of our content now comes from the CMS, there is still some content that comes from the `vagov-content` repo.

Currently, the `vets-website` repo contains [one script that builds both the content and the applications](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/stages/build/index.js). Chris V. wrote a [design doc to separate the content build from the application build](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/design-docs/2020-04-09-separate-content-build.md), and has since broken the build into two separate stages.

1. [Run Webpack](https://github.com/department-of-veterans-affairs/vets-website/blob/43ea0bdccd5e53886e3e38ea27d3f8e8e7bd9038/script/build.sh#L55)
2. [Run the content build](https://github.com/department-of-veterans-affairs/vets-website/blob/43ea0bdccd5e53886e3e38ea27d3f8e8e7bd9038/script/build.sh#L61)

Previously, Webpack was entangled in the content build, but no longer. Brooks is currently working on moving the content build into a [`content-build`](https://github.com/department-of-veterans-affairs/content-build/) repo to separate it from `vets-website`.

##### Content Sources

Static content currently comes from two sources:

1. The Drupal CMS
2. The [`vagov-content` repo](https://github.com/department-of-veterans-affairs/vagov-content/)

This design doc will focus on validating content from the Drupal CMS.

##### Amazon S3

The frontend of VA.gov is served as static files via Amazon S3. Since `vets-website` currently handles both application and content building, a failure in one blocks both from being deployed to S3 during a full deploy.

##### Current checks

###### Broken Link Checking

The [`check-broken-link` middleware](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/stages/build/plugins/check-broken-links/index.js) is a Metalsmith plugin that happens near the end of the Metalsmith static content build pipeline. It does the following:

1. Loop through all of the HTML files in memory in the Metalsmith pipeline
2. Extract all of the broken `href`/`src` values using the `getBrokenLinks` helper
3. Formats the result into useful console output
4. Blocks the deployment on production or logs the error output on lower environments

Broken links are displayed in the build log, and a Slack notification is sent to the #cms-team channel alerting them to the broken links.

![broken links in the build log](https://user-images.githubusercontent.com/6130520/83812868-def7df80-a681-11ea-904a-b9bd62ea8b67.png)

Link checking was also added to the CMS. That means every time a node is saved, every link (both internal and external) are tested, and a report is generated for that node. Broken links in the CMS are only reported. They don't block publishing. It is up to editors to note and fix.

![screenshot of link checking](https://user-images.githubusercontent.com/5752113/83689439-0a64c680-a5bd-11ea-9e38-e5c855f6f78e.png)

###### Accessibility Checking

The accessibility checks only happen in CI ([the Integration step in Jenkins](https://github.com/department-of-veterans-affairs/vets-website/blob/master/Jenkinsfile#L81)), which only happens during the full `vets-website` build.

Before accessibility checks can be run, the sitemap is generated via the [`create-sitemap` Metalsmith plugin](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/stages/build/plugins/create-sitemaps.js). Nightwatch iterates over all the paths found in the sitemap, and runs the [aXe accessibility checker](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/nightwatch-commands/axeCheck.js) to look for violations.

When violations are found, the build breaks and violations must be reported manually.

The accessibility checks are skipped during a content-only deploy.

Additionally, we have the preview server which shows content editors any accessibility violations, but they must deliberately go to the server from a link in Drupal to see this.

#### Pain points

##### Content Writers

Content writers want to quickly draft, publish, and deploy content. However, `vets-website` is only deployed to production once per day. To allow content writers to move faster, there is a [partial deploy](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/workflow/deploy/#partial-deploy--static-page-changes-only), which only includes static page changes (`vagov-content` and Drupal).

Unfortunately, the content-only deploys have no accessibility checking. That means that content writers don't have a proactive way to learn if their content includes accessibility errors. Adding accessibility checking to the CMS is on the roadmap, but it doesn't currently exist.

##### Users

To enable a faster publishing workflow, all tests (except link checking) are intentionally skipped during content-only deploys. That creates an opportunity for end users to encounter accessibility errors. Additionally, inconsistencies between how the CMS handles redirects and `vets-website` handles redirects, it's possible for users to encounter broken links in production.

##### FE Tools team

Invalid content causes warning logs during staging deploys, and breaks the build during production deploys. These broken builds then need manual intervention, and require coordinating with another team.

##### Anybody that is trying to ship code for the VA.gov front end

If invalid content is breaking the production build, and therefore blocking the production deploy, then no team on any contract is able to ship their frontend code to VA.gov.

## High Level Design

Once the `content-build` repo is successfully extracted from `vets-website`, the Metalsmith static content build pipeline will be deleted from `vets-website`. Webpack will handle the application build in `vets-website`, and Metalsmith will handle the static content build in the `content-build` repo. This will create two separate pipelines for built code to be deployed to S3, which will prevent failures in one from blocking the other.

The validation of static content will take place in a scheduled job that runs every workday. Since the broken link check happens during the Metalsmith build, and the accessibility check relies on the output of the content build, the scheduled job will run a script to produce a build that only has the steps necessary for content validation. That build will only be used for reporting broken links and accessibility errors, and will have no impact on deploys. Those reports will be delivered to the #cms-team channel via existing Slack integrations.

## Specifics

### Detailed Design

Using the current content build script as a reference, we will write another build script that only includes the steps necessary for the content validation. We will reuse the existing broken link check from the current content build. And using the existing accessibility tests as a reference, we will configure the accessibility tests to not stop on failure so we can identify all the accessibility errors. The script will generate a report of all the broken links and all the accessibility errors. Those reports will be sent to the #cms-team channel, just like the current broken link notifications today.

Lastly, we will write a scheduled Jenkins workflow to run the content validation script every workday at midnight.

### Code Location

The content validation script and scheduled job config will live in the [new `content-build` repo](https://github.com/department-of-veterans-affairs/content-build).

### Testing Plan

1. Configure a scheduled job to run a script once per workday
2. Write an initial script that logs when the script is run
3. Once the scheduled job is running at the correct time, replace the initial script with the actual script that runs the content validation

### Logging

Currently, invalid content is logged during staging deploys. And failed builds trigger generic [Slack notifications](https://dsva.slack.com/archives/C37M86Y8G/p1591099447374800).

### Debugging

##### Broken links

1. Confirm that the content build is passing
2. Modify an HTML file, like [`header.html`](https://github.com/department-of-veterans-affairs/content-build/blob/master/src/site/includes/header.html) to have a broken link
3. Run the build again to confirm that it is failing

##### Accessibility errors

1. Confirm that the content build is passing
2. Modify an HTML file, like [`header.html`](https://github.com/department-of-veterans-affairs/content-build/blob/master/src/site/includes/header.html) to have an accessibility error
3. Run the build again to confirm that it is failing

### Caveats

- The current broken link checking in Drupal can handle redirects, but those redirects are not currently synchronized with `vets-website`. When the front end doesn't have the redirects, a page that is moved in Drupal may pass the Drupal broken link check but fail the `vets-website` broken link check.
- Many of the broken links come from URLs that change, according to decisions by the Content & IA team, usually in conjunction with Public Websites. In that workflow, an engineer makes a code change for the redirect, and has to time the release of the redirect code to match the content release of the URL change in the content layer. It's a fragile and very time-consuming process, and will likely not be scalable as we add hundreds of editors from outside the tight Github/Slack communication flows (e.g. Public Affairs Officers at 2000+ VA facilities).

### Security Concerns

There are no new security concerns with a separated build process.

### Privacy Concerns

There are no new privacy concerns with a separated build process.

### Open Questions and Risks

#### Risks

- Neither the current content validation nor the proposed content validation will **prevent** invalid content from making it to production. But this proposal would prevent unrelated teams from being blocked by invalid content.

#### Questions

### Work Estimates

The following estimates vary greatly depending on who's doing the work.

1. Finish extracting the `content-build` repo out of the `vets-website` repo: ?
2. Write a Jenkins scheduled job to run a script every workday at midnight: <1 day
3. Write a script that builds only what is necessary for content validation: 1-2 days
4. Update the script so the accessibility checks don't stop on failure: <1 day
5. Update the script to generate a report of broken links: <1 day
6. Update the script to generate a report of accessibility errors: <1 day
7. Update the scheduled job to call the content validation script: <1

### Alternatives

#### Highest quality, but lowest speed

If we could proactively validate CMS content before it's published, we could eliminate a source of downstream broken links and/or accessibility errors, which would improve the experience for end users and/or reduce the number of frontend deploys that require manual intervention. The downside of this approach would be figuring out how to add the content validation to the CMS, and/or adding friction to the content writers workflow.

#### Fastest speed, but lowest quality

We could stop breaking the `vets-website` build due to invalid content. That would reduce the burden on the content writers and/or reduce the number of deploys requiring manual intervention. However, that would likely mean end users experience broken links and/or accessibility errors more often.

### Future Work

### Revision History

| Date         | Revisions Made | Author        |
| ------------ | -------------- | ------------- |
| May 26, 2020 | Initial draft  | Bill Fienberg |
