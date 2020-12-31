# Validating CMS content

**Author(s):** Bill Fienberg
**Last Updated:** May 26 2020  
**Status:** Draft | **In Review** | Approved
**Approvers:** Dror Matalon [], Andrew Gunsch [], Rian Fowler [], Steve Wirt []

## Table of Contents

- [Validating CMS content](#validating-cms-content)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Objective](#objective)
    - [Background](#background)
      - [Content Sources](#content-sources)
      - [Fresh or Cached Drupal Content](#fresh-or-cached-drupal-content)
        - [Code Path for the `useCache` Argument](#code-path-for-the-usecache-argument)
      - [Amazon S3](#amazon-s3)
      - [Current state](#current-state)
        - [Broken Link Checking](#broken-link-checking)
          - [The `check-broken-link` Metalsmith middleware](#the-check-broken-link-metalsmith-middleware)
          - [The `glean-broken-links` script](#the-glean-broken-links-script)
          - [CMS Broken Link Checking](#cms-broken-link-checking)
          - [Redirects](#redirects)
        - [Accessibility Checking](#accessibility-checking)
      - [Pain points](#pain-points)
        - [Content Writers](#content-writers)
        - [VA.gov Users](#vagov-users)
        - [FE Tools team](#fe-tools-team)
        - [Anybody that is trying to ship code for the VA.gov front end](#anybody-that-is-trying-to-ship-code-for-the-vagov-front-end)
  - [High Level Design](#high-level-design)
  - [Specifics](#specifics)
    - [Detailed Design](#detailed-design)
      - [Reuse existing broken link check](#reuse-existing-broken-link-check)
      - [New build script to supplement existing build script](#new-build-script-to-supplement-existing-build-script)
      - [Content to be validated](#content-to-be-validated)
      - [Update accessibility tests config](#update-accessibility-tests-config)
      - [Improved invalid content reporting](#improved-invalid-content-reporting)
      - [New scheduled job in CircleCI](#new-scheduled-job-in-circleci)
    - [Code Location](#code-location)
    - [Testing Plan](#testing-plan)
      - [Local](#local)
        - [Broken links](#broken-links)
          - [Positive](#positive)
          - [Negative](#negative)
        - [Accessibility errors](#accessibility-errors)
          - [Positive](#positive-1)
          - [Negative](#negative-1)
      - [CI](#ci)
        - [Positive](#positive-2)
        - [Negative](#negative-2)
    - [Logging](#logging)
    - [Debugging](#debugging)
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

The objective here is to ensure that CMS content is still being validated once the `content-build` has been successfully extracted from the `vets-website` repo.

This design document is intended for front end and DevOps engineers on the Veteran-facing Services Platform (VSP) and CMS teams.

### Background

Originally on vets.gov, all content was in `vets-website` in a `content/` directory, and you would open a PR to edit content. CI would then run against that PR. Link-checking would run as part of the build the same way it does today. If a broken link or an accessibility error was found, CI would fail, and you wouldn't be able to merge. This meant that broken links and accessibility errors never made their way into the `master` branch.

During Web Brand Consolidation, the `content` directory was moved out of `vets-website`, and into the `vagov-content` repo. The `vagov-content` repo served as an intermediary CMS while the Drupal CMS was being built. While most of our content now comes from the CMS, there is still some content that comes from the `vagov-content` repo.

Currently, the `vets-website` repo contains [one script that builds both the content and the applications](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/stages/build/index.js). Chris V. wrote a [design doc to separate the content build from the application build](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/design-docs/2020-04-09-separate-content-build.md), and has since broken the build into two separate stages.

1. [Run Webpack](https://github.com/department-of-veterans-affairs/vets-website/blob/43ea0bdccd5e53886e3e38ea27d3f8e8e7bd9038/script/build.sh#L55)
2. [Run the content build](https://github.com/department-of-veterans-affairs/vets-website/blob/43ea0bdccd5e53886e3e38ea27d3f8e8e7bd9038/script/build.sh#L61)

Previously, Webpack was entangled in the content build, but no longer. Brooks is [currently working](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/2719) on moving the content build into a [`content-build`](https://github.com/department-of-veterans-affairs/content-build/) repo to separate it from `vets-website`.

#### Content Sources

Static content currently comes from two sources:

1. The Drupal CMS
2. The [`vagov-content` repo](https://github.com/department-of-veterans-affairs/vagov-content/)

This design doc will focus on validating content from the Drupal CMS.

#### Fresh or Cached Drupal Content

##### Code Path for the `useCache` Argument

1. `Jenkinsfile` calls the `buildAll` function from `common.groovy`
2. The `buildAll` function from `common.groovy` tries to call the `build` function from `common.groovy` while passing `false` as the `useCache` argument
3. The `useCache` argument in the `build` function of `common.groovy` is used to set the `drupalMode`
   - If `useCache` is `true`, then `drupalMode` is `''`
   - If `useCache` is `false`, then `drupalMode` is `'--pull-drupal'`
4. The `--pull-drupal` flag is used to pull the latest content from Drupal.

![Screen Shot 2020-07-23 at 1 52 55 PM](https://user-images.githubusercontent.com/6130520/88327527-c05eae00-ccec-11ea-8c40-b2f7923a2817.png)

#### Amazon S3

The frontend of VA.gov is served as static files via Amazon S3. Since `vets-website` currently handles both application and content building, a failure in one blocks both from being deployed to S3 during a full deploy.

#### Current state

##### Broken Link Checking

###### The `check-broken-link` Metalsmith middleware

The [`check-broken-link` middleware](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/stages/build/plugins/check-broken-links/index.js) is a Metalsmith plugin that happens near the end of the Metalsmith static content build pipeline. It does the following:

1. Loop through all of the HTML files in memory in the Metalsmith pipeline
2. Extract all of the broken `href`/`src` values using the `getBrokenLinks` helper
3. Formats the result into useful console output
4. Blocks the deployment on production or logs the error output on lower environments

Code Path for the `check-broken-links` Metalsmith plugin

1. `package.json`’s `build-content` script gets called
2. `script/build-content.js` calls the build script for Metalsmith
3. `src/site/stages/build/index.js` calls the `check-broken-links` plugin
4. `src/site/stages/build/plugins/check-broken-links/index.js` calls the `getBrokenLinks` helper
5. `src/site/stages/build/plugins/check-broken-links/helpers/getBrokenLinks.js` calls the `isBrokenLink` function
6. `src/site/stages/build/plugins/check-broken-links/helpers/isBrokenLink.js` checks if an internal `href`/`src` value is included a specific array of paths
7. The `check-broken-links` plugin calls the `getBrokenLinks` helper to build up an array of broken links
8. The array of broken links from the `getBrokenLinks` helper is used by the `getErrorOutput` helper to build a CSV of broken links
9. The `check-broken-links` plugin logs the broken links in the build console

![screenshot of code path for check-broken-links Metalsmith plugin](https://user-images.githubusercontent.com/6130520/87714554-8849ef00-c771-11ea-8f20-ed52af7fcd3a.png)

If there are broken links, the `glean-broken-links` script parses the build log and creates a file that lists the broken links in a Comma-Separated Value (CSV) format. If broken links are found on the `master` branch, an exception is thrown during the Jenkins job to block the deploy.

###### The `glean-broken-links` script

![screenshot of code path for glean-broken-links script](https://user-images.githubusercontent.com/6130520/88299641-33a1f900-ccc8-11ea-9029-476f8222ee79.png)

1. `Jenkinsfile` calls the `buildAll` function from `common.groovy`
2. The `buildAll` function from `common.groovy` calls the `build` function from `common.groovy`
3. The `build` function from `common.groovy` calls the `checkBrokenLinks` function from `common.groovy`
4. The `checkBrokenLinks` function from `common.groovy` calls the `glean-broken-links.sh` script
   - The `glean-broken-links.sh` script produces a CSV file of broken links when broken links are detected.
5. If the `checkBrokenLinks` function from `common.groovy` detects a file of broken links, then it logs and sends a Slack notification in all environments, and throws an error to block the build on the `master` branch

![broken links in the build log](https://user-images.githubusercontent.com/6130520/83812868-def7df80-a681-11ea-904a-b9bd62ea8b67.png)

Example Slack notification sent to #cms-team channel: https://dsva.slack.com/archives/CT4GZBM8F/p1594936012465200

###### CMS Broken Link Checking

Link checking was also added to the CMS. That means every time a node is saved, every link (both internal and external) is tested, and a report is generated for that node. Broken links in the CMS are only reported. They don't block publishing. It is up to editors to note and fix.

![screenshot of link checking](https://user-images.githubusercontent.com/5752113/83689439-0a64c680-a5bd-11ea-9e38-e5c855f6f78e.png)

###### Redirects

The current broken link checking in Drupal can handle redirects, but those redirects are not currently synchronized with `vets-website`. When the redirects are not synchronized between `vets-website` and Drupal, a page that is moved in Drupal may pass the Drupal broken link check but fail the `vets-website` broken link check.

Many of the broken links come from URLs that change, according to decisions by the Content & IA team, usually in conjunction with Public Websites. In that workflow, an engineer makes a code change for the redirect, and has to time the release of the redirect code to match the content release of the URL change in the content layer. It's a fragile and very time-consuming process, and will likely not be scalable as we add hundreds of editors from outside the tight Github/Slack communication flows (e.g. Public Affairs Officers at 2000+ VA facilities).

##### Accessibility Checking

The accessibility checks only happen in CI ([the Integration step in Jenkins](https://github.com/department-of-veterans-affairs/vets-website/blob/master/Jenkinsfile#L81)), which only happens during the [full](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/workflow/deploy/#full-deploy-of-vagov-client-app) `vets-website` build.

**The accessibility checks are skipped during a content-only deploy.**

Before accessibility checks can be run, the sitemap is generated via the [`create-sitemap` Metalsmith plugin](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/stages/build/plugins/create-sitemaps.js). Nightwatch iterates over all the paths found in the sitemap, and runs the [aXe accessibility checker](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/nightwatch-commands/axeCheck.js) to look for violations.

When violations are found, the build breaks and violations must be reported manually.

Additionally, we have the preview server which shows content editors any accessibility violations, but they must deliberately go to the server from a link in Drupal to see this.

Code Path for the `inject-axe-core` Metalsmith plugin

1. Jenkins calls the `build` npm script from `package.json`
2. The `build` npm script from `package.json` calls the `build.sh` script
3. The `build.sh` script calls the `build:content` npm script
4. The `build:content` npm script calls the `build-content.sh` script
5. The `build-content.sh` script imports the `build` Metalsmith script
6. The `build` Metalsmith script imports the `inject-axe-core` Metalsmith plugin
7. The `inject-axe-core` Metalsmith plugin calls the `execute-axe-check` function
8. The `execute-axe-check` function prepends warning messages on staging's page preview

![screenshot of code path for inject-axe-core Metalsmith plugin](https://user-images.githubusercontent.com/6130520/87714544-854efe80-c771-11ea-960d-3aeff56e00d7.png)

#### Pain points

##### Content Writers

Content writers want to quickly draft, publish, and deploy content. However, `vets-website` is only deployed to production once per day. To allow content writers to move faster, there is a [partial deploy](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/workflow/deploy/#partial-deploy--static-page-changes-only), which only includes static page changes (`vagov-content` and Drupal).

No accessibility checking is performed on the content-only deploys. That means that content writers don't have a proactive way to learn if their content includes accessibility errors. Adding accessibility checking to the CMS is on the roadmap, but it doesn't currently exist.

Additionally, the current invalid content reporting is inconvenient. Broken links are extracted from the build log as a CSV. And accessibility errors are manually communicated from the Frontend Tools team.

##### VA.gov Users

To enable a faster publishing workflow, all tests (except link checking) are intentionally skipped during content-only deploys. That creates an opportunity for end users to encounter accessibility errors. Additionally, due to inconsistencies between how the CMS handles redirects and how `vets-website` handles redirects, it's possible for users to encounter broken links in production.

##### FE Tools team

Invalid content causes warning logs during staging deploys, and breaks the build during production deploys. These broken builds then need manual intervention, and require coordinating with the CMS team.

##### Anybody that is trying to ship code for the VA.gov front end

If invalid content is breaking the production build, and therefore blocking the production deploy, then no team on any contract is able to ship their frontend code to VA.gov.

## High Level Design

Once the [build separation work](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2719) is complete, there will be separate content and application builds. These distinct builds will prevent failures in one from blocking deployments to the other.

The Metalsmith static content build will be extracted to the `content-build` repo and deleted from the `vets-website` repo and deployment pipeline. Webpack will handle the application build for the `vets-website` repo, and Metalsmith will handle the static content build for the `content-build` repo.

The broken link validation will continue using the existing the `check-broken-link` Metalsmith plugin and `glean-broken-links` script. Since broken links currently block content-only deploys, then we will continue blocking content-only deploys when broken links are detected.

The validation of accessibility errors will take place in a scheduled job that runs daily during workdays, instead of happening as part of the full deploy. Since the accessibility check relies on the output of the content build, the scheduled job will run a script to produce a build that only has the steps necessary for accessibility checking. That build will only be used for reporting accessibility errors, and will have no impact on deploys. Those reports will be delivered to the #cms-team channel via existing Slack integrations.

For content writers, this approach preserves their ability to quickly draft, publish, and deploy content. And the improved reporting will make it easier for them to pinpoint errors. The downside of this approach is that content writers still won't have a proactive way to fully validate their content.

For the Frontend Tools team, this approach will reduce noise in the application build logs, and eliminate a source of failed application builds. Eliminating a source of failed application builds means the Frontend Tools team will have to spend less time manually triaging failed application builds, which will give the team more bandwidth to work on other priorities.

For anybody trying to ship code for the VA.gov front end, this approach will eliminate a source of failed application builds, which should allow them to ship code faster.

For VA.gov users, this approach will continue allowing users to quickly see updated content. The downside of this approach for VA.gov users is that it won't eliminate existing opportunities for users to see accessibility errors. Fortunately, the improved error reporting should allow content writers to easily identify, remedy, and deploy valid content, which should minimize the user's chance of encountering invalid content.

In summary, this approach will have the following impact for the following groups:

- **Content Writers**: Improve error reporting while maintaining current convenience
- **Frontend Tools team**: Reduce build noise, failure rate, and number of builds requiring manual intervention
- **VA.gov users**: Maintain existing time to see updated content and risk of seeing accessibility errors
- **Anybody trying to ship code for the VA.gov front end**: Reduce failed deploys due to accessibility errors which should allow them to ship faster

## Specifics

### Detailed Design

#### Reuse existing broken link check

Since broken links already block deploys during content deploys, we will preserve the functionality.

#### New build script to supplement existing build script

Before axe checks can be run, the content needs to be built. A new build script will be created to supplement the existing build script. The new build script will be derived from the existing build script, and modified to only include the steps necessary for the axe checks. Since the existing build script uses Metalsmith, the new build script will also use Metalsmith.

#### Content to be validated

To preserve the current functionality, we will first try to pull the latest content from Drupal. If we are unable to pull the latest content from Drupal, we will use the cached Drupal content.

#### Update accessibility tests config

The [current accessibility tests](https://github.com/department-of-veterans-affairs/vets-website/blob/f93e0c11d9e037bd2460ede5e2fb4b67fbaaf118/Jenkinsfile#L82-L84) use Nightwatch. The default value for [Nightwatch's `end_session_on_fail` test session setting](https://nightwatchjs.org/gettingstarted/configuration/#test-session-settings) is `true`. Since we want a report of all the failures, we would need to update the `end_session_on_fail` setting in our [Nightwatch config](https://github.com/department-of-veterans-affairs/content-build/blob/master/config/nightwatch.docker-compose.js) from `true` to `false`.

#### Improved invalid content reporting

Currently, accessibility errors need to be manually communicated from the Frontend Tools team to the CMS team. And broken links need to be extracted from the build log. We would improve that reporting by generating a file using Winston, and send that file to the #cms-team channel using existing Slack integrations.

#### New scheduled job in CircleCI

Lastly, we will write a scheduled workflow to run the content validation script hourly during workdays. That way, the content team learns about invalid content at a convenient cadence.

Since we plan on migrating from Jenkins to CircleCI in the future, we will write this new job in CircleCI.

### Code Location

The broken link checks, axe checks, and scheduled job config will live in the [new `content-build` repo](https://github.com/department-of-veterans-affairs/content-build).

### Testing Plan

#### Local

##### Broken links

###### Positive

1. Confirm that the content build has zero broken links
2. Run the content validation script
3. Confirm that the script reports zero broken links

###### Negative

1. Confirm that the content build has zero broken links
2. Modify an HTML file, like [`header.html`](https://github.com/department-of-veterans-affairs/content-build/blob/master/src/site/includes/header.html), to have a broken link
3. Run the content validation script
4. Confirm that the script reports the newly introduced broken link

##### Accessibility errors

###### Positive

1. Confirm that the content build has zero accessibility errors
2. Run the content validation script
3. Confirm that the script reports zero accessibility errors

###### Negative

1. Confirm that the content build has zero accessibility errors
2. Modify an HTML file, like [`header.html`](https://github.com/department-of-veterans-affairs/content-build/blob/master/src/site/includes/header.html), to have an accessibility error
3. Confirm that the script reports the newly introduced accessibility error

#### CI

##### Positive

1. Confirm that the content build has zero accessibility errors and zero broken links
2. Run the job that calls the content validation script
3. Confirm that a report is sent to the #cms-team Slack channel
4. Confirm that the report includes zero accessibility errors and zero broken links

##### Negative

1. Confirm that the content build has zero accessibility errors and zero broken links
2. Add a broken link, and an accessibility error
3. Run the job that calls the content validation script
4. Confirm that a report is sent to the #cms-team Slack channel
5. Confirm that the report includes the newly introduced accessibility error
6. Confirm that the report includes the newly introduced broken link
7. Fix the newly introduced accessibility error
8. Fix the newly introduced broken link
9. Run the job that calls the content validation script
10. Confirm that the report includes zero accessibility errors and zero broken links

### Logging

Currently, invalid content is logged in the build log during staging deploys. And failed builds trigger generic [Slack notifications](https://dsva.slack.com/archives/C37M86Y8G/p1591099447374800).

The updated content validation approach will continue logging invalid content errors in the build log, and will also post an automated report of the invalid content in the #cms-team Slack channel.

### Debugging

- Local build logs
- Jenkins build logs
- CircleCI build logs
- Slack notifications

### Caveats

### Security Concerns

There are no new security concerns with a separated content validation process.

### Privacy Concerns

There are no new privacy concerns with a separated content validation process.

### Open Questions and Risks

#### Risks

- Neither the current content validation nor the proposed content validation will **prevent** invalid content from making it to the live VA.gov site. But this proposal would prevent unrelated teams from being blocked by invalid content.

#### Questions

- What is the optimal frequency to run the scheduled job? Daily seems too slow. Every 10 minutes might be too fast for our builds. Hourly seems feasible. Is hourly acceptable? Should we be c concern about noise from a higher frequency?

### Work Estimates

The following estimates vary greatly depending on who's doing the work.

1. Finish extracting the `content-build` repo out of the `vets-website` repo: ?
2. Write a CircleCI scheduled job to run a script hourly on workdays: <1 day
3. Write a script that builds only what is necessary for content validation: 1-2 days
4. Update the script so the accessibility checks don't stop on failure: <1 day
5. Update the script to generate a report of accessibility errors: <1 day
6. Update the scheduled job to call the content validation script: <1 day

### Alternatives

#### Highest quality, but lowest speed

If we could proactively validate CMS content before it's published, and sync the Drupal redirects with `vets-website`, we could eliminate a source of downstream broken links and/or accessibility errors, which would improve the experience for end users and/or reduce the number of frontend deploys that require manual intervention. The downside of this approach would be figuring out how to synchronize the Drupal redirects with `vets-website`, and/or adding friction to the content writers workflow.

#### Fastest speed, but lowest quality

Since the partial deploy already provides an avenue for invalid content to land on the live VA.gov site, we could remove all the content validation from the full `vets-website` build. That would reduce the burden on the content writers and/or reduce the number of deploys requiring manual intervention. However, that would likely mean end users experience broken links and/or accessibility errors more often.

That would effectively be downgrading invalid content from an error to a warning.

### Future Work

- Delete the `accessibility` step of the `integration` stage from the `vets-website` Jenkins pipeline because that step will no longer be necessary in `vets-website`. It will no longer be necessary because the application accessibility checks are included in the tests run by the `e2e` step.

### Revision History

| Date         | Revisions Made | Author        |
| ------------ | -------------- | ------------- |
| May 26, 2020 | Initial draft  | Bill Fienberg |
