# Automatic Deploy of Content

**Author(s):** Jhonny Gonzalez, Eugene Doan, Theo Bentum  
**Last Updated:** February 22, 2021  
**Status:** Draft | In Review | **Approved**  
**Approvers:**
- [x] Tim Wright
- [x] Neil Hastings
- [x] Steve Wirt
- [x] Dror Matalon
- [x] Michael Fleet

## Overview

### Objective

This document explores an approach to running automatic deploys (auto-deploys) of content built using GraphQL queries.
The approach also considers a feasible frequency for the build and deploy that does not overload the build system.

The intended audience are front-end (FE) and DevOps engineers on the Veteran-facing Services Platform (VSP) and the CMS teams.

### Background

#### Content build

The VA.gov website is built from the `vets-website` repo. The build outputs static HTML content, React applications, and styling.

The static content is built through a Metalsmith pipeline using data pulled from the Drupal-based CMS via GraphQL queries and the [`vagov-content` repo](https://github.com/department-of-veterans-affairs/vagov-content/).

#### Deployment

|                     | [Partial Deploy](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/workflow/deploy/#partial-deploy--static-page-changes-only)                                                                                                                                                                                                 | [Full Deploy](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/workflow/deploy/#full-deploy-of-vagov-client-app) |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Output              | Static pages (.html) only                                                                                                                                                                                                                                                                                                                                                  | Frontend applications (.js, .css) and static pages (.html)                                                                                                     |
| Assets              | Uses the latest `vets-website` release and static asset                                                                                                                                                                                                                                                                                                                    | Creates a new release and deploys it                                                                                                                           |
| Accessibility tests | N/A                                                                                                                                                                                                                                                                                                                                                                        | Runs tests                                                                                                                                                     |
| Links checker       | Runs checks                                                                                                                                                                                                                                                                                                                                                                                                                                          | Runs checks                                                                                                                                                    |

The VA.gov website can be deployed to production through the partial (or content-only) deploy or the full deploy.

The **full deploy** builds from _the latest commit of `vets-website`_ and the latest content downloaded from the Drupal server.

The **partial, content-only deploy** builds from the _latest release-tagged commit of `vets-website`_ and the latest content downloaded from the Drupal server.

Both deploys share the same Jenkins pipeline, described by the `deploys/warn-release-deploy` [Jenkinsfile](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/Jenkinsfiles/deploys/warn-release-deploy) in the `devops` repo.
- There is a `use_latest_release` flag passed as a parameter to the pipeline that determines which deploy is run.
  - This value is true for partial deploys in order to build from the latest release.
  - This value is false for full deploys in order to build from the latest commit.
- If the commit used in either deploy failed its build, the deploy will also fail.
- Either deploy can be manually invoked, independently of the daily schedule.

There is an existing [automatic full deploy job scheduled to run at 2:00pm ET daily](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/jenkins-vetsgov/seed_job.groovy#L255-L294). It runs an additional [pre-release job](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/jenkins-vetsgov/seed_job.groovy#L250) ([`builds/vets-website-content-vagovprod`](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/jenkins-vetsgov/seed_job.groovy)) defined in [`Jenkinsfile.content`](https://github.com/department-of-veterans-affairs/vets-website/blob/master/Jenkinsfile.content) in the `vets-website` repo.

To deploy content changes at will, that "auto-deploy" job is manually triggered with the `use_latest_release` flag by the CMS team or CMS users with the `Content Admin` or `Content Publisher` roles.

#### Pain points

- Content writers want to quickly draft, publish, and deploy content.
  - However, `vets-website` is only deployed to production once per day.
  - The CMS team can run content-only deploys independently of the daily production deploy, but that must be triggered manually.
- The content-only deploy does not include automated accessibility checks.
- In local development, engineers can encounter confusing build errors that are due to the mismatch in outdated locally cached content and updated Liquid templates.

### High Level Design

There will be a new content-only auto-deploy job in addition to the existing full auto-deploy.
- It will build content with GraphQL query data.
- It will be a recurring job that executes on a more frequent schedule than the daily prod deploy.

The initial schedule will run between 8am and 8pm ET to align with CMS support hours.
- At first, it will be set to run hourly as a conservative cadence.
- It will then be incrementally adjusted to a higher frequency as the build system allows.

To differentiate between the auto-deploys, we will refer to the new one as the **content-only auto-deploy** and the existing one as the **daily or full auto-deploy**.

## Specifics

### Detailed Design

#### Creating a new job

The content-only auto-deploy will be configured as a [seed job](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/jenkins-vetsgov/seed_job.groovy) (e.g., `deploys/vets-gov-autodeploy-content`) in the `devops` repo. It should also be possible to manually trigger it.

We will leverage the existing full auto-deploy job (`deploys/vets-gov-autodeploy-vets-website`) by having the content-only auto-deploy invoke it.
- The `use_latest_release` flag will be set to `true` and the `release_wait` will be set to 0.
- Since the content-only auto-deploy will be a recurring job, there are some concerns around potential conflicts with daily deploys.
- Having the new job invoke `deploys/vetsgov-autodeploy-vets-website` will allow both auto-deploys to share a queue in Jenkins and avoid conflicts.
- CMS stakeholders can still manually trigger the existing job for content-only deploys as before.

The Jenkinsfile for the content-only deploy (e.g., `ansible/Jenkinsfiles/deploys/content-only-autodeploy`) would contain this fundamental step:
```
stage('Autodeploy content') {
  steps {
    build job: 'deploys/vets-gov-autodeploy-vets-website', parameters: [
      stringParam(name: 'release_wait', value: '0'),
      booleanParam(name: 'use_latest_release', value: true),
    ], wait: true
  }
}
```

As it's a content-only deploy, it will build using the latest release instead of the latest commit of of `vets-website`.
- This matches the behavior of the current content-only deploy.
- The daily production deploy will continue deploying from the latest commit and retain the responsibility of tagging releases.

#### Validating the build

For now, the job will not retry or re-queue upon failure.
- Such failures might be related to build diffs, broken links, or other validations.
- The goal is for the job to recur at more frequent intervals, so we can look for a successful run in the next scheduled deploy.

#### Scheduling the deploy

The pipeline will [use a cron trigger](https://www.jenkins.io/doc/book/pipeline/syntax/#triggers) to run on the desired schedule.

We will roll out the content auto deploy gradually based on the following:

- Daily for 1-2 days at 11 AM EST
- 3 times a day for 1-2 days

Then lastly, the schedule will be hourly between 9AM and 4PM EST on weekdays.

```
node('vagov-autodeploy') {
  triggers {
    cron('0 8-21 * * 1-5')
  }

  dir('vets-website') {
    ...
  }

  stage('Build') {
    ...
  }
}
```

### Code Location

The configuration for the content-only autodeploy will be in the `devops` repo.
- The job and its cron trigger will be configured as a [seed job](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/jenkins-vetsgov/seed_job.groovy).
- The Jenkinsfile for the job will be in `ansible/Jenkinsfiles/deploys/content-only-autodeploy`.

Modifications to the build and deploy process itself will be made in the `vets-website` repo.
- The [helper functions](https://github.com/department-of-veterans-affairs/vets-website/blob/master/jenkins/common.groovy) used in the build are in `jenkins/common.groovy`.
- Anything specific to the [content-only build pipeline](https://github.com/department-of-veterans-affairs/vets-website/blob/master/Jenkinsfile.content) will be in `Jenkinsfile.content`.

### Testing Plan

The following behaviors should be observed cumulatively as they are implemented.
1. Build is stored at the proper location in S3 when the job runs.
2. Job runs on the defined schedule.
3. Deploy doesn't proceed when no new content has been published.

### Debugging

The auto-deploy pipeline can be debugged by reading its console output. The S3 bucket can be checked to confirm whether the build has been deployed.

To determine whether a page exists in the Drupal content, we can go to [`staging.va.gov/drupal/debug/`](staging.va.gov/drupal/debug/). This page is not available in production, however.

### Caveats

To be determined.

### Security Concerns

There are no new security concerns with the auto-deploy. There is no user interaction involved unless we include a manual trigger for use by internal VSP engineers, which still should not present any threat of malicious requests. Denial of service is also not a concern as builds are queued.

### Privacy Concerns

There are no new privacy concerns with the auto-deploy as user data is not involved.

### Open Questions and Risks

#### Questions

- What is the ideal schedule for the content-only auto-deploy?
  - The pipeline will initially run hourly 8am-8pm ET on weekdays.
  - The timeframe aligns with CMS support hours.
  - We want the highest rate of deploy that the system can sustain.

- How should we coordinate the schedule of the content-only auto-deploy with the daily production deploy?
  - The deploys from both pipelines will likely overlap.
  - The daily production deploy is still necessary for tagging the release.
  - [The queue of content-only deploys should naturally resolve conflicts without any special handling.](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18393)

- Is there a way to get the time of the last updated published content in Drupal and use that to determine if we should build or not?
  - If we have access to that information, we may not need to compare the GraphQL query data.

- Will this new auto-deploy continue fail on broken links?
  - With a high enough rate of deploy, failing on broken links would not be ideal.
  - If we maintain the same error alerting, broken links could spam notifications while being investigated.
  - There has been a [proposed plan](https://github.com/department-of-veterans-affairs/va.gov-team/pull/14092) to ignore these errors and upload the CSV of broken links on deploys.
  - For the initial hourly schedule, it may not be necessary to implement the changes for the proposed broken link improvements.
    - An hourly deploy should not generate too many notifications from failures.
    - As we increase the frequency of deploys, we might then want to dedicate some time to modifying the broken link behavior in a parallel effort.

#### Risks

- Having more content will inflate the runtime of the content-only deploy and could potentially exceed the scheduled interval.

### Work Estimates

- Run the partial deploy on a schedule (3 pts)
- Auto-deploy only new content (3 pts)

### Alternatives

Ideally, content would get deployed immediately as content writers make changes. However, the GraphQL queries are not suited for multiple invocations in quick succession, so we opted for a process that will essentially batch and deploy content changes as appropriate.

### Future Work

- There are plans to transition from Jenkins to CircleCI for our build pipeline. The auto-deploy job will have to be brought over to CircleCI at that time.
  - The `vets-website` CircleCI infrastructure is hosted on a public domain.
  - CircleCI does not have access to the CMS Drupal server, which is hosted within the internal VA network.
  - To circumvent the need for access to the VA network, we could run a job that keeps an up-to-date cache of the GraphQL query data.
  - We might consider running that job as a Lambda function or a CodeBuild pipeline.
- To improve the runtime, we might want to explore incremental deploys.

### Revision History

| Date         | Revisions Made | Author          |
| ------------ | -------------- | --------------- |
| Feb 22, 2021 | Removed the use of CMS export in favor of GraphQL  | Theo Bentum |
| Feb 2, 2021 | Updated approvals. Clarified background about CMS export data. | Eugene Doan |
| Jan 26, 2021 | <ul><li>Made nuanced corrections about the implementation. Clarified related sections and terminology.</li><li>Elaborated on validation error handling, including a new question about broken links.</li><li>Included proposal for timestamping updated content.</li><li>Added details about future plans to move to CircleCI.</li></ul> | Eugene Doan |
| Jan 21, 2021 | Cleaned up Background. Added info to Alternatives. | Eugene Doan |
| Jan 20, 2021 | Completed first draft | Eugene Doan |
| Dec 10, 2020 | Initial draft  | Jhonny Gonzalez |
