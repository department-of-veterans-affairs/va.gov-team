# Content Validation

**Author(s):** Bill Fienberg
**Last Updated:** May 26 2020  
**Status:** **Draft** | In Review | Approved
**Approvers:** Dror Matalon [], Andrew Gunsch [], Rian Fowler [], Steve Wirt []

## Table of Contents

- [Content Validation](#content-validation)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Objective](#objective)
    - [Background](#background)
      - [Broken Link Checking](#broken-link-checking)
      - [Accessibility Checking](#accessibility-checking)
      - [Pain points](#pain-points)
        - [Content Writers](#content-writers)
        - [Users](#users)
        - [FE Tools team](#fe-tools-team)
    - [High Level Design](#high-level-design)
  - [Specifics](#specifics)
    - [Detailed Design](#detailed-design)
    - [Code Location](#code-location)
    - [Testing Plan](#testing-plan)
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

The `vets-website` repo currently contains [one script that builds both the content and the applications](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/stages/build/index.js). Chris V. wrote a [design doc to disentangle the content build from the application build](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/design-docs/2020-04-09-separate-content-build.md), and that work is currently in progress.

Right now, content validation consists of broken link checking and accessibility checking.

##### Broken Link Checking

The `check-broken-link` plugin does the following:

1. Loop through all of the HTML files in the Metalsmith pipeline
2. Extract all of the broken `href`/`src` values using the `getBrokenLinks` helper
3. Formats the result into useful console output
4. Breaks the build on production, and logs the output on lower environments

##### Accessibility Checking



#### Pain points

##### Content Writers

Content writers want to quickly draft, publish, and deploy content. However, `vets-website` is only deployed to production once per day, and `vets-website` deploys to staging take 20+ minutes. To allow content writers to move faster, there is a partial deploy, which only includes static page changes (`vagov-content` and Drupal).

Unfortunately, the partial deploys have no content validation. That means that content writers don't have a proactive reactive way to learn if their content includes broken links or accessibility errors.

##### Users

Content-only deploys create an opportunity for end users to encounter broken links and/or accessibility errors from CMS content that wasn't validated before being deployed.

##### FE Tools team

Invalid content causes warning logs during staging deploys, and breaks the build during production deploys. These broken builds then need manual intervention, and require coordinating with another team.

### High Level Design

Both the application and content builds need content validation.

## Specifics

### Detailed Design

COMING SOON

### Code Location

The validation of the application content will remain in `vets-website`. The validation of the static content will live in the [new `content-build` repo](https://github.com/department-of-veterans-affairs/content-build).

### Testing Plan

COMING SOON

### Logging

COMING SOON

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
