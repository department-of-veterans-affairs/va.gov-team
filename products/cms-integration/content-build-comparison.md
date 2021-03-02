# Comparing GraphQL and CMS Export Build Times
This document is intended to outline the process for comparing the GraphQL and CMS Export build times.

# Table of Contents

1. [Background](#background)
2. [Metric](#metric)
2. [Tracking Process](#tracking-process)
   1. [Getting Deploy Time](#deploy-time)
   2. [Getting Build Time](#build-time)
   3. [Getting Content Loading Time](#loading-time)

## Background <a name="background"></a>

We want to have a consistent way of tracking the build time for both the GraphQL and CMS export builds. The goal is to reach a *publish time* of 5 minutes. This meaning the time it takes to publish content changes from Drupal to [va.gov](https://va.gov) should be under 5 minutes.

## Metric <a name="metric"></a>

The metric used for comparing both builds is ***content build time* + *deploy time***.

Currently the content build step happens in the [Build](https://github.com/department-of-veterans-affairs/vets-website/blob/master/jenkins/common.groovy#L208) stage of the Jenkins pipeline. The deploy is started in the [Deploy](https://github.com/department-of-veterans-affairs/vets-website/blob/master/Jenkinsfile#L122) stage of the Jenkins pipeline (at least for dev and staging deploys). The deploy is then carried out by another Jenkins pipeline. This means that the build time and deploy time will come from two separate Jenkins pipelines. This will change in the future once the content build separation takes place.

Adding the time of these two stages will give us the total time it takes to build and deploy content on the site.

In addition, we will track the ***content loading time*** which is the time it takes for content to be downloaded and processed by either build. The reason for tracking this metric is to get a more direct comparison of the GraphQL and CMS export builds. This strictly measures the time it takes to download and process content into the format used by the [Liquid](https://shopify.github.io/liquid/) [templates](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/site/layouts). This step occurs in the [loadDrupal](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/stages/build/drupal/metalsmith-drupal.js#L214) function of the Metalsmith pipeline. 

For the GraphQL build, content is loaded in the [getContentViaGraphQL](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/stages/build/drupal/metalsmith-drupal.js#L225) function via executing GraphQL queries. Content in the CMS export build is loaded in the [getContentFromExport](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/stages/build/drupal/metalsmith-drupal.js#L224) function, which includes downloading, unzipping, and transforming the CMS export from Drupal.

## Tracking Process <a name="tracking-process"></a>

Because the process of the content build & deploy will change with the build separation work, we will manually track the build and deploy times in a [spreadsheet](https://docs.google.com/spreadsheets/d/1VLLC9JN44fty0_gFTzCXjbGrkKFBTletcDoAi-3Fci0/edit#gid=0).

### Getting Deploy Time <a name="deploy-time"></a>

The deploy time can be found by visiting the [Build Time Trend](http://jenkins.vfs.va.gov/job/deploys/job/vets-website-vagovdev/buildTimeTrend) page of the build environment. The same link can be used for all build environments, the only change needed is changing the environment in the URL. For convenience, the links for each environment are listed below.

Ex: `http://jenkins.vfs.va.gov/job/deploys/job/vets-website-ENVIRONMENT-NAME-GOES-HERE/buildTimeTrend`

- [Dev build time trend](http://jenkins.vfs.va.gov/job/deploys/job/vets-website-vagovdev/buildTimeTrend) (vagovdev)
- [Staging build time trend](http://jenkins.vfs.va.gov/job/deploys/job/vets-website-vagovstaging/buildTimeTrend) (vagovstaging)
- [Prod build time trend](http://jenkins.vfs.va.gov/job/deploys/job/vets-website-vagovprod/buildTimeTrend) (vagovprod)

On the build time trend page you will see a section titled "Build Time Trend". This section lists the most recent deploys in descending order. The times listed in the *Duration* column show the duration of the deploys. This is what we want to add to the spreadsheet under the *Deploy Time* column.

<img width="1237" alt="Screen Shot 2020-12-08 at 7 02 45 PM" src="https://user-images.githubusercontent.com/9042882/101569784-fba30600-3989-11eb-94a6-1cc415cfb963.png">

**Note: SOCKS access is needed to view the Build Time Trend Page**

### Getting Build time <a name="build-time"></a>

The build time can be found by getting the Build # from the Deploy's Build Time Trend page, and replacing it in the following URL:
`http://jenkins.vfs.va.gov/blue/rest/organizations/jenkins/pipelines/testing/pipelines/vets-website/branches/master/runs/BUILD-NUMBER-GOES-HERE/nodes/97/steps/118/log/?start=0`.

The above link accesses the log of the [build.sh](https://github.com/department-of-veterans-affairs/vets-website/blob/master/script/build.sh) script that is ran in the `Build` stage of the pipeline. The log can also be accessed manually by: 
- Visiting the Deploy's Build Time Trend Page and clicking the Deploy's **Build #**
<img width="1609" alt="Screen Shot 2020-12-09 at 9 35 28 AM" src="https://user-images.githubusercontent.com/9042882/101665997-83c4f200-3a02-11eb-8580-2d38c3dab31b.png">

- Clicking the **build number** of the pipeline that triggered the deploy
<img width="1609" alt="Screen Shot 2020-12-08 at 7 35 45 PM" src="https://user-images.githubusercontent.com/9042882/101666917-8ffd7f00-3a03-11eb-83f7-dedd6d76c0c9.png">

- Opening the Open Blue Ocean view
<img width="1609" alt="Screen Shot 2020-12-08 at 7 35 54 PM" src="https://user-images.githubusercontent.com/9042882/101667310-08644000-3a04-11eb-8c2d-49941e48d551.png">

- Selecting the build environment name under the **Build** stage
- Opening the third drop down and clicking **Show complete log**
<img width="1609" alt="Screen Shot 2020-12-08 at 7 36 20 PM" src="https://user-images.githubusercontent.com/9042882/101667998-dc958a00-3a04-11eb-94bc-54f32c4e89ba.png">


Once you are on the log page, scroll to the bottom of the page to view the content build time. It will be shown on the last line of the log and should read "Done in --s." This is what we want to add to the spreadsheet under the *Build Time* column for the respective deploy.
```shell
[2020-12-08T18:09:58.988Z] Build finished!
[2020-12-08T18:09:59.242Z] Done in 87.95s. # This is the content build time
```

### Getting Content Loading time <a name="loading-time"></a>

The content load time can be found in the same log file as above in the [*Getting Build time*](#build-time) section. The load time will be displayed after the text **Total time to load content from [BUILD TYPE]: [LOADING TIME]**.

For example, in the CMS export build, the text should read something like:

```shell
Total time to load content from CMS export: 6.286s
```

Whereas in the GraphQL build, the text would read:

```shell
Total time to load content from GraphQL: 6.286s
```

The content loading time should be added to the *Load Time* column in the spreadsheet.
