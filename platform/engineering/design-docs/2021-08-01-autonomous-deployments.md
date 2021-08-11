# Autonomous Deployment Plan for vets-website React Applications

**Author(s):** Tim Wright  
**Last Updated:** 08-06-2021  
**Status:** **Draft** | In Review | Approved  
**Approvers:** 

- [ ] Mike Prichard 
- [ ] Dror Matalon 
- [ ] Michael Fleet 
- [ ] Demian Ginther

**Awareness and Review:**

- [ ] Mike Chelen
- [ ] Chris Valarida
- [ ] General VFS Team Members

## Table of Contents

- [Autonomous Deployment Plan for vets-website React Applications](#autonomous-deployment-plan-for-vets-website-react-applications)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Objective](#objective)
    - [Desired Outcomes](#desired-outcomes)
    - [Background](#background)
    - [High Level Design](#high-level-design)
      - [Production Deployments](#production-deployments)
      - [Staging and Dev deployments](#staging-and-dev-deployments)
  - [Specifics](#specifics)
    - [Detailed Design](#detailed-design)
      - [Roadmap](#roadmap)
      - [Technologies Being Used](#technologies-being-used)
    - [Work Estimates](#work-estimates)
      - [Milestone: Update current system to function with new workflows](#milestone-update-current-system-to-function-with-new-workflows)
      - [Milestone: Create and release staging/dev deployment behaviors](#milestone-create-and-release-stagingdev-deployment-behaviors)
      - [Milestone: Create and release initial production behaviors with "allow" list](#milestone-create-and-release-initial-production-behaviors-with-allow-list)
      - [Milestone: Create and release MVP production behaviors with "disallow" list](#milestone-create-and-release-mvp-production-behaviors-with-disallow-list)
    - [Alternatives](#alternatives)
    - [Post MVP](#post-mvp)
    - [Questions](#questions)
    - [Revision History](#revision-history)

## Overview

The document's purpose is to outline the minimum viable product (MVP) outcome to create autonomous deployment within the vets-website repository. The end of this document contains a post-MVP plan as well.

### Objective

VFS teams should be able to safely and reliably deploy their frontend applications to any environment at any time. This should happen without waiting for a scheduled deployment or manual intervention by Platform or other VFS teams. Deployments should also not cause significant risk to the build or to the site.

While adding the ability to autonomously deploy, VA should still maintain the benefits of shared components (i.e. VFS teams are still using shared patterns/components for standardization and quality purposes, and we don’t see wide variance from one VA.gov experience to another).

VFS teams should also be able to easily revert their change on their own, as needed.

### Desired Outcomes

- Increasing the production deployment rate
- Increasing customer satisfaction
- Decreasing support volume
- Decreasing the average time from kickoff to production, by initiative complexity
- Decreasing build failures

### Background

The current deployment model is to merge changes into the `master` branch to get changes deployed to production, staging, and dev servers. Commits to staging and dev happen with relative frequency, but deployments to production are done once a day for all teams/applications through a central platform-level action. If errors occur at the application level, teams need to request an [out-of-band deployment](https://depo-platform-documentation.scrollhelp.site/support/Deployment-Policies.1279787009.html#DeploymentPolicies-Requestingout-of-banddeploys), which needs to be approved by relevant stakeholders. If the error is not critical, the fix needs to wait a full day until the next scheduled deployment.

This model has increased platform support volume, deployment failures, and decreased customer satisfaction while limiting the deployments to only a handful a week. It has also increased support volume for on call teams when out-of-band deployments are needed outside business hours.

Our goal with this initiative is to allow teams to freely deploy their own code, breaking free of the current model.

**We are writing this with the assumption that Github Actions work will continue to completion.**

This phase of the initiative does not include
- Programmatic isolation of the applications
- Physical isolation of the applications

### High Level Design

Deployment environments will be remapped from `master` as a central release location to related environment branches. `master` will deploy to production (va.gov), `staging` will deploy to staging (staging.va.gov), and `dev` will deploy to dev (dev.va.gov).

For each environment (prod/staging/dev), a Github Action Workflow will be set up to handle application deployments to the appropriate S3 bucket.

The daily deployment will continue until all applications are approved and migrated into the new production release pattern. The same also applies to any platform or shared code that may need regular deployments.

After the system is rolled out, we will start working from a "disallowed" list instead of an "allowed" list to identify applications that are not yet ready for autonomous deployments (I.E. the static pages app).

VSP will always maintain an option to complete and deploy a full release to any environment as a system of developer hygiene and to keep all dependencies up to date. This can be the current daily deploy script, whether (long term) it is on a schedule or not.

#### Production Deployments 

Commits to the `master` branch will have an optional auto deployment flag  in the manifest.json file (at the discretion of the application, `deploy: true`) as well as a manual option for app teams to control production release with a higher level of granularity. A team may not want to deploy to production until after hours, for example.

Upon initial/beta release of production deployments there will be an "allowed" list for applications that VSP identifies as good candidates for testing the system (teams with frequent stable releases). All other applications will have the advantage of auto deployments to staging and dev environments, but will remain contained in the daily deployment until the system is ready to be truly switched on. Applications using the auto-deployment will also remain in the daily deployment while the system is in beta to clean up and issues and dependencies upgrades. This will also reduce complexity.

#### Staging and Dev deployments

Deployments to staging and dev will be automatic upon merge to the branch for all applications. This is a workflow change and will need heavy communication throughout VFS teams. This will mimic the current staging/dev deployment we have in master currently, but no tests will be run. This will cut down on failures due to flakiness in an environment where it isn't really needed since commits still need to complete the build and run through tests in a PR before merging into master in addition to tests run in master CI.

## Specifics

### Detailed Design

**Steps for a production deployment:**

VSP maintains the ability to create and deploy full production builds as a failsafe until the system is stable.

1. Merge feature branch into master to trigger workflow
2. Is the daily deployment running and/or is master running on this commit?
  - **Yes**: Pause until finished
  - **No**: Continue
3. Has an approved application changed?
  - **Yes**: Continue
  - **No**: Stop
4. Build changed applications / Run unit tests
5. Sync CSS/JS/images to prod S3 bucket

Manual deployments follow the same process, but do not need to check the commit status. Should be able to trigger via the Github action UI and provide an app name (or list of apps). Teams should be made aware that if they manually deploy something that's running in master CI, the manual deployment results will be overwritten when the auto-deploy completes.

**Steps for a staging/dev deployment:**

VSP maintains the ability to create and deploy full staging/dev builds as a failsafe.

1. Merge branch into staging/dev (locally or through PR)
2. Build all applications
3. If a deployment to staging/dev in in progress wait in a queue
4. Sync /build/vagov{env} to staging/dev S3 bucket

This will likely cause `staging` and `dev` to diverge from `master` over time. We can set up a scheduled job to merge master into staging/dev on a weekly basis and reserve the ability to completely reset the environments if needed. When an environment is reset, a slack notification should go out alerting VFS teams that they will need to remerge any branches. An alert should also go out to Slack the previous day if any preparations are needed as to not interfere with potential planned demos. 

We will also require commits to be merged into `staging` (not `dev`) before they are allowed to merge into `master`. After this requirement is in place, we would like to monitor for feedback to see if we need to allow teams to bypass this requirement with branch naming `hotfix/` and/or `revert/` prefixes.

#### Roadmap

1. Update current system to function with new workflows
2. Create and release staging/dev deployment behaviors
3. Create and release initial production behaviors with "allow" list
4. Create and release MVP production behaviors with "disallow" list

#### Technologies Being Used

- [Github Actions](https://github.com/features/actions)
- [AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)
- [Webpack](https://webpack.js.org/)

### Work Estimates

#### Milestone: Update current system to function with new workflows

- Update current (dev/staging) deploy scripts to sync and not delete files from s3 OR create new script
- Create single app build in webpack that includes assets.
- Alert VFS teams to the rollout plan (dev -> staging -> prod)

This work should be completed in 1-2 sprints with 2 people (1 person on each task).

#### Milestone: Create and release staging/dev deployment behaviors

- Create deployment script for dev
- Disable current dev deployment behaviors
- Announce and reserve time for troubleshooting dev before moving to staging
- Create deployment script for staging
- Disable current staging deployment behaviors
- Reserve time for troubleshooting staging
- Reach out to two application teams for production deployment beta
- Create script to "reset" each environment (with Slack alerts).

This work should be completed in 2-3 sprints with 3 people (3-4 with 2 people). Sprint 1 should be dev. Sprint 2 should be staging. Reserving and extra sprint for troubleshooting if needed.

A representative from each VFS team should have to review / approve the PR that activated this feature in each environment as a way to acknoledge the change. FE Tools will also attend the VSA Engineering meeting, alert slack, and add to the newsletter (with each environment release).

This release behavior should not replace Review Instances. Review Instances should still be used when possible as to not overload staging / dev deployments.

#### Milestone: Create and release initial production behaviors with "allow" list

- Create "allow" list for applications
- Create production deployment workflow
- Monitor auto and manual deployments for a week to debug and troubleshoot

This work should be completed in 2-3 sprints with 2 people, one of which should be very familiar with Github Actions.

#### Milestone: Create and release MVP production behaviors with "disallow" list

- Update deployment workflow to use disallow list instead of allow list
- Plan and execute VFS training on the update
- Release to teams
- Monitor auto and manual deployments for a sprint to debug and troubleshoot

This work should be completed in 2-3 sprints with 2 people.

### Alternatives

An alternative that was discussed was isolating the applications in their own repositories before executing autonomous deploys. We felt that this would bloat the timeline and delay the feature from being released for too long.

We also discussed monorepo isolation, but deemed it as unnecessary to complete the objective.

### Post MVP

Initial dashboard view where teams sign in with Github auth, view their apps and manage their deployments including: scheduling, reverting, and manual deployment. This dashboard and infrastructure should be scoped and estimated separately as a post-MVP item. It will be the basis for a future platform dashboard.

The goal of this post-MVP stage is to abstract the Github UI from the deployment actions so users are unaware of what is under the hood.

After autonomous deployment work has been completed, work on application isolation will begin and another design document will be created.

We would also like to be able to track which version of an app is currently released.

### Questions
- Should teams be able to merge into `master` without merging into `staging`/`dev`? Maybe only `hotfix/` and `revert/` branches can pass through?
- What is the turnaround time to revert a commit?
- Can we let teams deploy a full app or should be point to commits instead?
- Should there be a maximum deployment frequency so a single app doesn't clog up the system?

### Revision History

Date | Revisions Made | Author
-----|----------------|----------
August 3, 2021 | Initial draft | Tim Wright
August 4, 2021 | Revisions based on FE Tools feedback | Tim Wright
August 6, 2021 | Updated and ammended work estimates | Tim Wright