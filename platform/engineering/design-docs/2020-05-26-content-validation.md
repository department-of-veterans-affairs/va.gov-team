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
      - [Broken links](#broken-links)
      - [Accessibility errors](#accessibility-errors)
    - [Logging](#logging)
    - [Debugging](#debugging)
    - [Caveats](#caveats)
    - [Security Concerns](#security-concerns)
    - [Privacy Concerns](#privacy-concerns)
    - [Open Questions and Risks](#open-questions-and-risks)
    - [Work Estimates](#work-estimates)
    - [Alternatives](#alternatives)
      - [Highest quality, but lowest speed](#highest-quality-but-lowest-speed)
      - [Fastest speed, but lowest quality](#fastest-speed-but-lowest-quality)
    - [Future Work](#future-work)
    - [Revision History](#revision-history)

## Overview

### Objective

The objective here is to define an approach to validate the CMS content. Specifically, this design doc focuses on validating that CMS content has no accessibility errors and/or broken links.

This design document is intended for front end and DevOps engineers on the Veteran-facing Services Platform (VSP) and Veteran-Facing Services (VFS) teams.

### Background

The `vets-website` repo currently contains [one script that builds both the content and the applications](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/stages/build/index.js). Chris V. wrote a [design doc to disentangle the content build from the application build](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/design-docs/2020-04-09-separate-content-build.md), and has since broken the build into two two separate stages.

1. [Run Webpack](https://github.com/department-of-veterans-affairs/vets-website/blob/43ea0bdccd5e53886e3e38ea27d3f8e8e7bd9038/script/build.sh#L55)
2. [Run the content build](https://github.com/department-of-veterans-affairs/vets-website/blob/43ea0bdccd5e53886e3e38ea27d3f8e8e7bd9038/script/build.sh#L61)

Previously, Webpack was entangled in the content build, but no longer. Brooks is currently working on moving the content build into a [`content-build`](https://github.com/department-of-veterans-affairs/content-build/) repo to separate it from `vets-website`.

##### Content Sources

Static content currently comes from two sources:

1. The Drupal CMS
2. The [`vagov-content` repo](https://github.com/department-of-veterans-affairs/vagov-content/blob/master/pages/404.md)

This design doc will focus on validating content from the Drupal CMS.

##### Amazon S3

The frontend of VA.gov is served as static files via Amazon S3. Since `vets-website` currently handles both application and content building, a failure in one blocks both from being deployed to S3 during a full deploy.

###### Broken Link Checking

The [`check-broken-link` middleware](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/stages/build/plugins/check-broken-links/index.js) is a Metalsmith plugin that happens near the end of the Metalsmith static content build pipeline. It does the following:

1. Loop through all of the HTML files in the Metalsmith pipeline
2. Extract all of the broken `href`/`src` values using the `getBrokenLinks` helper
3. Formats the result into useful console output
4. Breaks the build on production, and logs the output on lower environments

###### Accessibility Checking

The accessibility checks only happen in CI ([the Integration step in Jenkins](https://github.com/department-of-veterans-affairs/vets-website/blob/master/Jenkinsfile#L81), which only happens during the full `vets-website` build.

Before accessibility checks can be run, the sitemap is generated via the [`create-sitemap` Metalsmith plugin](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/stages/build/plugins/create-sitemaps.js). Nightwatch iterates over all the paths found in the sitemap, and runs the [aXe accessibility checker](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/nightwatch-commands/axeCheck.js) to look for violations.

When violations are found, the build breaks and violations must be reported manually.

The accessibility checks are skipped during a content-only deploy.

Additionally, we have the preview server which shows content editors any accessibility violations, but they must deliberately go to the server from a link in Drupal to see this.

#### Pain points

##### Content Writers

Content writers want to quickly draft, publish, and deploy content. However, `vets-website` is only deployed to production once per day, and `vets-website` deploys to staging take 20+ minutes. To allow content writers to move faster, there is a partial deploy, which only includes static page changes (`vagov-content` and Drupal).

Unfortunately, the partial deploys have no content validation. That means that content writers don't have a proactive reactive way to learn if their content includes broken links or accessibility errors.

##### Users

Content-only deploys create an opportunity for end users to encounter broken links and/or accessibility errors. This happens because content can bypass any content validation checks if it's deployed via the content-only deployment.

##### FE Tools team

Invalid content causes warning logs during staging deploys, and breaks the build during production deploys. These broken builds then need manual intervention, and require coordinating with another team.

##### Anybody that is trying to ship code for the VA.gov front end

If invalid content is breaking the production build, and therefore blocking the production deploy, then no team on any contract is able to ship their frontend code to VA.gov.

### High Level Design

Once the `content-build` repo is successfully extracted from `vets-website`, the Metalsmith static content build pipeline will be deleted from `vets-website`. Webpack will handle the application build in `vets-website`, and Metalsmith will handle the static content build in the `content-build` repo. This will create two separate pipelines for built code to be deployed to S3, which will prevent failures in one from blocking the other.

The validation of the static content coming from the CMS will occur during the Metalsmith build.

## Specifics

### Detailed Design

Currently, the static CMS is only validated during the full deploy, which only happens once per day. To maintain some form of parity with that that process, the `content-build` repo will run a [daily job](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/design-docs/2020-04-09-separate-content-build.md#miscellaneous) in CI to validate the static content.

### Code Location

The validation of the application content will remain in `vets-website`. The validation of the static content will live in the [new `content-build` repo](https://github.com/department-of-veterans-affairs/content-build).

### Testing Plan

##### Broken links

1. Confirm that the content build is passing
2. Modify an HTML file, like [`header.html`](https://github.com/department-of-veterans-affairs/content-build/blob/master/src/site/includes/header.html) to have a broken link
3. Run the build again to confirm that it is failing

##### Accessibility errors

1. Confirm that the content build is passing
2. Modify an HTML file, like [`header.html`](https://github.com/department-of-veterans-affairs/content-build/blob/master/src/site/includes/header.html) to have an accessibility error
3. Run the build again to confirm that it is failing

### Logging

Currently, invalid content is logged during staging deploys.

### Debugging

COMING SOON

### Caveats

- Our [function to determine if a link is broken](https://github.com/department-of-veterans-affairs/vets-website/blob/e8b68850fc83fdae4386fe4ab392770dde38faee/src/site/stages/build/plugins/check-broken-links/helpers/isBrokenLink.js#L16) doesn't check if external links are broken.
- Our [accessibility check](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/assets/js/execute-axe-check.js#L8) only renders a banner on the preview server.

### Security Concerns

There are no new security concerns with a separated build process.

### Privacy Concerns

There are no new privacy concerns with a separated build process.

### Open Questions and Risks

COMING SOON

### Work Estimates

COMING SOON

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
