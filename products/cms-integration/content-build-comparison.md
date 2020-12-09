# Comparing GraphQL and CMS Export Build Times
This document is intended to outline the process for comparing the GraphQL and CMS Export build times.

# Table of Contents

1. [Background](#background)
2. [Metric](#metric)
2. [Tracking Process](#tracking-process)
   1. [Getting Build Time](#build-time)
   2. [Getting Deploy Time](#deploy-time)
   5. [Custom commands](#custom-commands)
      1. [Mock users](#mock-users)
      2. [Test data (fixtures)](#test-data)
      3. [File uploads](#file-uploads)
      4. [Accessibility](#accessibility)

## Background <a name="background"></a>

We want to have a consistent way of tracking the build time for both the GraphQL and CMS export builds. The goal is to reach a *publish time* of 5 minutes. This meaning the time it takes to publish content changes from Drupal to [va.gov](https://va.gov) should be under 5 minutes.

## Metric <a name="metric"></a>

The metric used for comparing both builds is ***content build time* + *deploy time***.

Currently the content build step happens in the [Build](https://github.com/department-of-veterans-affairs/vets-website/blob/master/jenkins/common.groovy#L208) stage of the Jenkins pipeline. The deploy is started in the [Deploy](https://github.com/department-of-veterans-affairs/vets-website/blob/master/Jenkinsfile#L122) stage of the Jenkins pipeline (at least for dev and staging builds). The deploy is then carried out by another Jenkins pipeline. This means that the build time and deploy time will come from two seperate Jenkins pipelines. This will change in the future once the content build separation takes place.

Adding the time of these two stages will give us the total time it takes to build and deploy content on the site.

## Tracking Process <a name="tracking-process"></a>

Because the process of the content build & deploy will change with the build separation work, we will manually track the build and deploy times in a [spreadsheet](https://docs.google.com/spreadsheets/d/1VLLC9JN44fty0_gFTzCXjbGrkKFBTletcDoAi-3Fci0/edit#gid=0).
### Getting Deploy Time <a name="build-time"></a>

The deploy time can be found by visiting the [Build Time Trend](http://jenkins.vfs.va.gov/job/deploys/job/vets-website-vagovdev/buildTimeTrend) page of the build environment. The same link can be used for all build envirionments, the only change needed is changing the environment in the url. For convenience, the links for each environment are listed below.

Ex: `http://jenkins.vfs.va.gov/job/deploys/job/vets-website-ENVIRONMENT-NAME-GOES-HERE/buildTimeTrend`

- [Dev build time trend](http://jenkins.vfs.va.gov/job/deploys/job/vets-website-vagovdev/buildTimeTrend) (vagovdev)
- [Staging build time trend](http://jenkins.vfs.va.gov/job/deploys/job/vets-website-vagovstaging/buildTimeTrend) (vagovstaging)
- [Prod build time trend](http://jenkins.vfs.va.gov/job/deploys/job/vets-website-vagovprod/buildTimeTrend) (vagovprod)

On the build time trend page you will see a section titled "Build Time Trend". This section will list all of the deploy times starting from the most recent build. The times listed in the *Duration* column will show the duration of the deploy.

