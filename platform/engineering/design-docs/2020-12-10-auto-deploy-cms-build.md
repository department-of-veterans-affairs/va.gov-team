# Auto-deploy of content using CMS Export Build Design Doc

**Author(s):** Jhonny Gonzalez  
**Last Updated:** December 10, 2020  
**Status:** **Draft** | In Review | Approved  
**Approvers:**

- [ ] Theo Bentum
- [ ] Dan
- [ ] Neil Hastings
- [ ] Dror
- [ ] Fleet

## Overview

### Objective

The objective of this design document is to define an approach on how the CMS export build will be auto-deployed as full build
and as a partial build frequenly enough without affecting the platform.

The intended audience is front end and DevOps engineers on the Veteran-facing Services Platform (VSP) and the CMS teams.

### Background

VA.gov is currently built using the `vets-website` repo. This repo is composed by the static content, applications and styling.

The static content is being pulled from the Drupal CMS and the [`vagov-content` repo](https://github.com/department-of-veterans-affairs/vagov-content/)

The Drupal content is added to the build using the `--pull-drupal` flag which pulls the latest content from Drupal using GraphQL. However, the GraphQL has limitation, therefore, a new implementation of the [CMS build using transformers](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/cms-integration) is getting developed.

Eventually, the new CMS build will replace the current GraphQL build.

#### Build script

[Metalsmith](https://github.com/segmentio/metalsmith) is the helper that puts all the pieces together. The highlights of the script that is included in the content build can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/design-docs/2020-04-09-separate-content-build.md#build-script)

#### Drupal build script

We currently have the option of creating the build using the GraphQL (GraphQL build) or using transformers (CMS build). This is done by passing the `--use-cms-export` into the Jenkins file

##### Process to obtain the Drupal content from GraphQL

1. Metalsmith calls the `getDrupalContent` function from `/drupal/metalsmith-drupal`
2. The `getDrupalContent` function calls `loadDrupal` while passing `buildOptions` as the argument
3. The `loadDrupal` function then calls `getContentViaGraphQL`

##### Process to obtain the Drupal content from CMS

1. Metalsmith calls the `getDrupalContent` function from `/drupal/metalsmith-drupal`
2. The `getDrupalContent` function calls `loadDrupal` while passing `buildOptions` as the argument
3. The `loadDrupal` function verifies that the `--use-cms-export` flag is set to `true`, if so, it calls `getContentFromExport`

#### Deployment

There are two kinds of deployments:

|                     | [Partial Deploy](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/workflow/deploy/#partial-deploy--static-page-changes-only)                                                                                                                                                                                                 | [Full Deploy](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/workflow/deploy/#full-deploy-of-vagov-client-app) |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Output              | Static pages (.html) only                                                                                                                                                                                                                                                                                                                                                  | Frontend applications (.js, .css) and static pages (.html)                                                                                                     |
| Assets              | Uses the latest `vets-website` release and static asset                                                                                                                                                                                                                                                                                                                    | Creates a new release and deploys it                                                                                                                           |
| Drupal content      | [Fetches](https://github.com/department-of-veterans-affairs/vets-website/blob/006185b7c40fe85a8b219ae99f3aefb3d8bf0e09/src/site/stages/build/plugins/configure-assets.js#L22-L23) the assets [from S3](https://github.com/department-of-veterans-affairs/vets-website/blob/006185b7c40fe85a8b219ae99f3aefb3d8bf0e09/src/site/stages/build/plugins/download-assets.js#L111) | Fetches the latest Drupal content                                                                                                                              |
| Accessibility tests | N/A                                                                                                                                                                                                                                                                                                                                                                        | Runs tests                                                                                                                                                     |
| Links checker       | N/A                                                                                                                                                                                                                                                                                                                                                                        | Runs checks                                                                                                                                                    |

Both deployments will be essential to achieve the goal:

1. Webpack auto-deploy once per day (This already exists)
   - [Content build Jenkinsfile](https://github.com/department-of-veterans-affairs/vets-website/blob/master/Jenkinsfile#L63)
2. Content-only auto-deploy every 5 minutes (Needs to be implemented, interval time may vary)
   - [Content-only build Jenkinsfile](https://github.com/department-of-veterans-affairs/vets-website/blob/2b8c478ebe48882ca098a7c8f4cf684c69fb3114/Jenkinsfile.content#L72)

Both Jenkins files are called from `common.groovy`

#### Pain points

- Engineers encounter confusing build errors that are due to the mismatch in outdated locally cached content and updated Liquid templates
- Failure using the latest CMS content
- CMS triggers content build manually
- Content writers want to quickly draft, publish, and deploy content. However, `vets-website` is only deployed to production once per day. To allow content writers to move faster, there is a partial deploy, which only includes static page changes (vagov-content and Drupal).
- No accessibility checking
- No broken links checking

### High Level Design

Once the CMS build finishes successfully and all the transformers work is complete, there will be a transition from the GraphQL build to the CMS build in Metalsmith.

Metalsmith will pass the CMS flag so the CMS content build will be called.

There are three things that will be to happen:

1. A full deploy
2. A recurrent partial deploy (every 5 mins ideally)
3. A script to verify the CMS content

## Specifics

### Detailed Design

#### A full deploy

To deploy the CMS content build inside the current auto-deploy for `vets-website` the `--use-cms-export` flag will need to be passed to the `build` function inside `common.groovy`

#### A recurrent partial deploy (every 5 mins ideally)

In addition to the full deploy, a partial deploy needs to be fired up to create a content-only build and update the AWS bucket with the newest content.

Currently, the CMS team is doing this process manually. They have been deploying content-only as needed.

CMS team has recommended an auto-deploy with 5 mins intervals while they provide support.

The idea here is to create a Jenkins/CircleCI job to run a cron job that will trigger a partial deploy, initially, every hour from 8am-8pm EST. Depending on the success rate of the build, the intervals time will be reduced.

#### A script to verify the CMS content

Deploying the partial build every X minutes is not very proficient, therefore, there needs to be a script that verifies that the CMS content is not the same.

#### When to deploy the content-only build

There will be a script that will:

- Download the CMS content (`.tar`) file and will compare it with the previous one
- Ensure that the `.tar` file is zipped by using `File [namefile]`
- Test the files using `md5 Checksum`
- Deploy only if the contents are different
- Time to do the partial build (optional)

### Code Location

All the CMS export content (transformers) is located in `src/site/stages/build/process-cms-exports`

### Testing Plan

- There will be an automatic test for comparing build outputs in Jenkins
  There might be a secondary or follow-up test if the automated test is inadequate for catching regressions

### Logging

Currently, invalid content is logged in the build log during staging deploys. And failed builds trigger generic Slack notifications.

### Debugging

#### Content

##### Build

When the `process-cms-exports` system is live, there will be automated tests to validate input from the CMS and output from the content transformers.

##### Deploy

To determine whether a page exists in the drupal content, we can go to `staging.va.gov/drupal/debug/`. This page is not available in production, however.

### Caveats

To be determined.

### Security Concerns

There are no new security concerns with a full nor partial build.

### Privacy Concerns

There are no new privacy concerns with a full nor partial build.

### Open Questions and Risks

#### Questions

- CMS separation and the apps needs to happen first?
- What is the period to run the partial build intervals, from 8am-8pm EST?
- Should we consider incremental deploys instead?

#### Risks

- Introduction to new CMS content and no transformer schema is available can:
  - Break the build
  - Create new discrepancies, making the script that verifies the `diff` fail
  - the interval of running a partial build is smaller than the time the partial build takes

### Work Estimates

_Split the work into milestones that can be delivered, put them in the order that you think they should be done, and estimate roughly how much time you expect it each milestone to take. Ideally each milestone will take one week or less._

### Alternatives

_This section contains alternative solutions to the stated objective, as well as explanations for why they weren't used. In the planning stage, this section is useful for understanding the value added by the proposed solution and why particular solutions were discarded. Once the system has been implemented, this section will inform readers of alternative solutions so they can find the best system to address their needs._

### Future Work

_Features you'd like to (or will need to) add but aren't required for the current release. This is a great place to speculate on potential features and performance improvements._

### Revision History

| Date         | Revisions Made | Author          |
| ------------ | -------------- | --------------- |
| Dec 10, 2020 | Initial draft  | Jhonny Gonzalez |
