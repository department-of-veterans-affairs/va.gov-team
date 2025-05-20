# **Small Batch Publishing**

**Author(s):** Neil Hastings

**Last Updated:** : June, 11 2021

**Status:** **Draft** | In Review | Approved

**Approvers:** 

- [ ] Tim Wright 
- [ ] Mike Chelen 
- [ ] Michael Pritchard 
- [ ] Dror Matalon
- [ ] Steve Wirt
- [ ] Elijah Lynn
- [ ] VFS Public Website Team 
- [ ] VFS Facilities Team

## Table of Contents

* [Overview](#overview)
  * [Objective](#objective)
  * [Links](#links)
  * [Background](#background)
  * [High Level Design](#high-level-design)
* [Specifics](#specifics)
  * [Detailed Design](#detailed-design)
    * [Drupal Triggers Content Publishing](#drupal-triggers-content-publishing)
    * [Preview Server Changes](#preview-server-changes)
    * [Facility Banner Alerts](#facility-banner-alerts)
    * [Metalsmith plugins](#metalsmith-plugins)
    * [Refactoring of `metalsmith-drupal` plugin](#refactoring-of-metalsmith-drupal-plugin)
    * [Publish Batch API](#publish-batch-api)
    * [Continuous Integration](#continuous-integration)
    * [Assets](assets)
  * [Code Location](code-location)
  * [Testing Plan](#testing-plan)
  * [Logging](#logging)
  * [Debugging](#debugging)
  * [Caveats](#caveats)
  * [Security Concerns](#security-concerns)
  * [Privacy Concerns](#privacy-concerns)
  * [Open Questions and Risks](#open-questions-and-risks)
  * [Work Estimates](#work-estimates)
  * [Alternatives, Research, and Future Work](#alternatives-Research-and-future-work)
* [Mid Term Vision](#long-term-vision)
* [Eliminate the Content Build Pipeline](#eliminate-the-content-build-pipeline)
* [Revision History](#revision-history)

## **Overview**


### **Objective**

An editor on the CMS should be able to publish content to va.gov when the "Publish" button is pressed in the CMS. This document outlines an approach utilizing the preview server’s code to render HTML which is directly deployed to S3.

This design doc only covers publishing pages which are represented in Drupal as a node. The full content-only build still runs 9am-12pm Hourly, 1:45pm, 4pm, 5pm ET M-F until all content types have been migratred over to Small Batch Publishing.  As a content type is add to Small Batch Publishing, it will be removed from the hourly content build.

The primary editor use case is for updating currently published content.

#### Links

* [Initiative in Zenhub](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/issues/department-of-veterans-affairs/va.gov-cms/5499) 
* [Accelerated Publishing Initiave](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/issues/department-of-veterans-affairs/va.gov-cms/4746)
* [Accelerated Publishing Discovery](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/issues/department-of-veterans-affairs/va.gov-cms/4748)
* [Single Page Preview Discovery](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/issues/department-of-veterans-affairs/va.gov-cms/5095)
* [Accelerated Publishing Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/cms/accelerated_publishing/)
* [Accelerated Publishing Discovery Finding](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/accelerated_publishing/findings_recommendations.md)
* [Current Content Build Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/cms/accelerated_publishing/content-build)
* **[Visualization of current build process](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/platform/cms/accelerated_publishing/content-build/content-build.svg)**

### **Background**

The current content-only build for va.gov runs 9am-12pm Hourly, 1:45pm, 4pm, 5pm ET M-F and generates all HTML pages. The current build takes approximately 15 minutes for page to show up on va.gov. When the amount of content in Drupal reaches 48K nodes, the build will take close to 1 hour to publish content to va.gov.  Editors are often confused about when the content they published in the CMS will be live on va.gov.

Editors coming from Team Sites expect publication of content within 5 minutes.  As editors migrate from Team Sites to Drupal, editors often do not understand why the content they publish does not show up on va.gov in a timely mannter.


### **High Level Design**

The same code used to generate the HTML for the preview server can be used to generate the HTML for va.gov.  

The following diagram shows a high level design of how a node in Drupal would be published “immediately” on va.gov.

Drupal is in charge of determining when and which pages need to be published based upon the action by an editor.  When Drupal determines a page is to be published, a Publish Batch Record will be sent to Amazon Simple Queue Service (SQS). A Lambda job will pick up the Publish Batch Record to build the HTML. After the HTML has been created, it’s sent to an [S3 bucket](http://content.www.va.gov.s3-website-us-gov-west-1.amazonaws.com/) which serves the html for va.gov.  

The code used by the lambda to generate the HTML will utilize the current preview server code.  As part of this work, the preview server code will be abstracted and improved to provide production ready HTML.

![image](https://lucid.app/publicSegments/view/84e99c14-7cdf-4955-95b7-badf320be509/image.png)


Editable link: [https://lucid.app/lucidchart/a8445048-94ce-4473-aafa-e8ed6cbfbad5/edit?page=0_0#](https://lucid.app/lucidchart/a8445048-94ce-4473-aafa-e8ed6cbfbad5/edit?page=0_0#)


## **Specifics**


### **Detailed Design**


#### Drupal Triggers Content Publishing

When an editor performs an action in Drupal (ie publishing a node, edits a menu item), Drupal will determine which pages need to be published. [The logic will be encapsulated by a Drupal Service.](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/issues/department-of-veterans-affairs/va.gov-cms/5509) The rules around the dependency graph are being tracked on [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/cms/accelerated_publishing/dependency_graph) and are currently a work in progress. Which rules are addressed will be determined by the content type being worked on to support Small Batch Publishing.  As a content type is add to Small Batch Publishing, it will be removed from the hourly content build.  Having support in only one build at a time will eliminate the risk of the full content build overriding the html from the Small Batch Publishing.

Drupal will track the queue progress using the [advancedqueue](https://www.drupal.org/project/advancedqueue) and the Public Batch API described below. The advancedqueue module allows for observability and reporting.

#### Preview Server Changes

The code from the current preview server will be abstracted and reused in the lambda function.  The following changes will occur:

*   Support building pages for a specific node revision.  This allows the lambda function to generate HTML for a published revision or any draft revision.  
*   Add the ability to toggle [debug information](https://monosnap.com/file/e7gAeGAg7m0crd8anzjMt5Z3NiuGvL) 
*   Code will be updated to use the json processing from here: `src/site/stages/build/drupal/*.js`
*   `/diff` endpoint code will be refactored to use the same code as the lambda function.
*   GraphQL Query building will be refactored to have Full and Small Batch use the same queries.
*   The Get Drupal Content plugin should be broken apart to make the layers reusable with the different services.
*   When changes are made, validate local develpment workflow using the Preview Server with the Product and QA teams.


#### Facility Banner Alerts

The first type of data to be updated using the Small Batch Publishing will be the facility banner alerts. These types of content currently trigger a deploy from Drupal to the jenkins job. The trigger from Drupal to Jenkins will be replaced with Small Batch Publishing.  By removing the need for Drupal to trigger the Jenkins job, we eliminate logic around Drupal bulk publish events and when an editor is allowed to trigger a Small Batch Publish.

1. Banner Alert updated in Drupal
2. Drupal sends Publish Batch Record to SQS
3. Lambda picks up Publish Batch record
4. Metalsmith build runs for alerts and generates a JSON file instead of an HTML file.
5. JSON file is pushed to S3

In a separate effort, the code which generates the Facility Banner Alert will be moved from the Liquid Template to a React Widget.  The React widget will load the JSON file from S3 which was generated by Drupal in the process described above.

[This epic](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/issues/department-of-veterans-affairs/va.gov-cms/5528) tracks the progress of the effort descibed in this section.


#### Metalsmith plugins

Here is an analysis of the Metalsmith plugins used on the content-build vs the plugins which will be used by the Lambda function.

As progress is made through add support for different content types, the plugin usage will most likely change as more analysis is done.


| Plugin                                                    | Full Build     | Current Preview Server     | Small Batch Publish     | Notes                                                                                                                                                   |
|-----------------------------------------------------------|----------------|----------------------------|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| Create React pages                                        | X              | X                          |                         |                                                                                                                                                         |
| Get Drupal content                                        | X              |                            | X                       | The current preview server builds the page json data outside a metalsmith plugin.  The Get Drupal Content plugin will be refactored or split apart.  See [Refactoring of `metalsmith-drupal` plugin](refactoring-of-metalsmith-drupal-plugin) section below for more detail.   |
| Add Drupal Prefix                                         | X              |                            |                         |                                                                                                                                                         |
| Create Outreach Assets Data                               | X              |                            |                         |                                                                                                                                                         |
| Create "Resources and support" section of the website     | X              |                            |                         |                                                                                                                                                         |
| Create environment filter                                 | X              | X                          | X                       |                                                                                                                                                         |
| Add filenames for debugging                               | X              |                            |                         |                                                                                                                                                         |
| Check collections                                         | X              |                            |                         |                                                                                                                                                         |
| Group collections                                         | X              | X                          | X                       |                                                                                                                                                         |
| Reset left rail navigation menu levels                    | X              | X                          | X                       |                                                                                                                                                         |
| Add the date to filenames                                 | X              |                            |                         |                                                                                                                                                         |
| Add app assets                                            | X              |                            |                         |                                                                                                                                                         |
| Add content assets                                        | X              |                            |                         |                                                                                                                                                         |
| Plug the content into the templates                       | X              | X                          | X                       |                                                                                                                                                         |
| Translate the markdown to html                            | X              | X                          |                         | This probably isn’t needed on SBP since the markdown pages will not be processed.                                                                       |
| Add permalinks and change foo.md to foo/index.html        | X              | X                          |                         |                                                                                                                                                         |
| Create header and footer                                  | X              |                            |                         | Added to preview server in https://github.com/department-of-veterans-affairs/va.gov-team/issues/25793                                                                                                                                                        |
| Generate navigation                                       | X              | X                          | X                       |                                                                                                                                                         |
| Apply Layouts                                             | X              | X                          | X                       | Layout for SBP are determined per page/node.                                                                                                            |
| Rewrite VA domains for the buildtype                      | X              | X                          | X                       |                                                                                                                                                         |
| Rewrite Drupal pages                                      | X              |                            |                         |                                                                                                                                                         |
| Create Drupal debug page                                  | X              |                            |                         |                                                                                                                                                         |
| Download Drupal assets                                    | X              | X                          |                         | Drupal Assets will be pushed directly to S3.                                                                                                            |
| Download application assets                               | X              |                            |                         |                                                                                                                                                         |
| Create sitemap                                            | X              |                            |                         | Might move to new Lambda Job.                                                                                                                           |
| Update robots.txt                                         | X              |                            |                         | Might move to new Lambda Job.                                                                                                                           |
| Check for CMS URLs                                        | X              |                            |                         |                                                                                                                                                         |
| Parse a virtual DOM from every .html file                 | X              | X                          | X                       |                                                                                                                                                         |
| Ignore assets for build                                   | X              |                            |                         |                                                                                                                                                         |
| Rewrite AWS URLs                                          |                | X                          | X                       |                                                                                                                                                         |

#### Refactoring of `metalsmith-drupal` plugin

Most of the changes to build pipeline will occur in refactoring the [`metalsmith-drupal` plugin](https://github.com/department-of-veterans-affairs/content-build/blob/master/src/site/stages/build/drupal/metalsmith-drupal.js).  The pluing will be made so it can be reused by all part of the build including the Prevew server, full build and SBP.  The `metasmith-drupl` plugin contains all of the logic to fetch the data from Drupal including some data transformation.  This layer is also where several implict depedencies and derived pages are created.  Sharing this layer will ensure that SPB will automaticlly add the derived pages without any extra work.

[A visualiztion of the current build process in this link at the `GetDrupalContent` stage.](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/platform/cms/accelerated_publishing/content-build/content-build.svg).

An example of a derived page is the facilty locations.  The code which adds the `page` object for the faility location page to the `pages.json` is locating in the [`createHealthCareRegionListPages` function](https://github.com/department-of-veterans-affairs/content-build/blob/87b4e90db152fa666630115f59bd578bbf5f348c/src/site/stages/build/drupal/health-care-region.js#L82).  This logic is called in a post processing step of the GraphQL results within `metasmith-drupal` plugin.

Part of the refactor, we plan on moving some of the implict depedencies to Drupal.  An example of an implict depedency is with the [Facilty Side Bars](https://github.com/department-of-veterans-affairs/vets-website/blob/9443399bbad557977c39bd0d55e59261d826b12d/src/site/stages/build/drupal/page.js#L325) where the field `fieldAdministration.entity.name` is used to determin which menu object in Drupal is used as the side bar.  This logic will be moved to Drupal as per [this documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/accelerated_publishing/dependency_graph/megamenu_and__sidebar.md).

Instead of the `metasmith-drupal` plugin moving some data around, this will be done in Drupal GraphQL API.  The moving of the depedency tracking to Drupal will occur per content type as support is added to SBP.  Details of what will change depend on the impelemention of the content type support to SBP and will follow an `audit -> update -> test` cycle.

#### Publish Batch Event and API

A new entity will be added to Drupal to track when content deployments are triggered from Drupal. The entity will track the entity, revision and status of deployment. The JSON format of the Publish Batch will be the format Drupal pushes to SQS and the format the Lambda will use to process publishing.

The Publish Batch entity will be updatable via an API. The lambda function will update the API based upon the status of the batch.

The Publish Batch entities can also be used as an audit trail.

Publish Batch Format :

*   Batch UUID 
*   Trigger `{nid, vid, path}`
*   deps `[{nid, vid, path}]`
*   advanced queue integration?
*   state 
    *   Queued 
    *   In Progress 
    *   Complete 
    *   Error
*   Messages

Example JSON message:

```
{
  "uuid": "xxxx-33333-ffffd-4444"
  "triggeredEntity": 
    {
      "nid": 123,
      "vid": 2222,
      "path" "path/on/va/website"
    }
  "updatedEntities: [
    {
      "nid": 1111,
      "vid": 22222,
      "path": "publish/path"
    },
    {
      "nid": 33333,
      "vid": 44444,
      "path": "another/publish/path"
    }
  ],
  "state": "IN_PROGRESS",
  "messages": "This is a status message to gather error details or to communicate something to the editors"
}
```
[This epic](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-cms/issues/5568) will track the effort to create the Publish Batch API.

A Publish Batch Record will be sent to a AWS SNS Topic. An AWS SQS Queue for Small Batch Publishing will subscribe to the topic and be processed by the lambda function.  Using an SNS Topic provides flexiblity for other serverices to react to publish events from the CMS.  Documentation for the SNS topics and message formate will be created and maintaned in a public location.

#### Continuous Integration

As part of continuous integration (CI), a Github Action will zip the function source and upload it to AWS in S3.

*   Build the function and zip it.
*   Get the checksum or hash of the ZIP file.
*   Store the ZIP file in an S3 bucket at a key corresponding to the checksum if it doesn't already exist.

The S3 key will be vetsgov-website-builds-s3-upload/single-page-build/master/function.zip on the master branch. Non-master branches will replace master in that key with the checksum of the ZIP file.

Check the [list of function aliases](https://docs.aws.amazon.com/lambda/latest/dg/API_ListAliases.html) for an alias matching the checksum. If an alias doesn't exist yet for the checksum:

*   [Update and publish the function code](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionCode.html) using the archived function from S3 for dev and staging lambda functions.
*   [Create the alias](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateAlias.html) for the new version of the function.

If the current branch is `master`, also get the version that the `master` alias points to. If the master alias doesn't match the version of the checksum alias:

*   [Update the master alias](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/lambda/update-alias.html) to the version currently aliased with the checksum.

A second Github Action will be created that is [manually triggered](https://github.blog/changelog/2020-07-06-github-actions-manual-triggers-with-workflow_dispatch/). The action will [Update and publish the function code](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionCode.html) the production lambda function.


#### Assets

Assets (images, pdfs) which are generated in Drupal will be uploaded to S3.  A new field will be created in Drupal which will contant the full path to the file on S3.  The content build will be updated to use the new S3 field as the `src` for the assets.  The details of this implementation will be in a different design doc and implemented outside of Small Batch Publishing.  [This effort is tracked here](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/issues/department-of-veterans-affairs/va.gov-cms/5480).

### **Code Location**

The Lambda function and its supporting code will live in the `content-build` repository.   The POC code will be updated to support dev/stage/prod.

The handler source code, bundling, and upload code from the POC lives in the branch `nh_preview_server_lambda` on this [PR](https://github.com/department-of-veterans-affairs/content-build/pull/177).

*   Lambda function: `src/platform/lambdas/single-page-build.js`
*   Webpack: `config/webpack.single-page-build.js`
*   GitHub Actions: `.github/workflows/single-page-build.yml`

The Lambda functions will be provisioned in the devops repo.  The POC code will be updated to support dev/stage/prod.

The Drupal code will live in the `va.gov-cms` repository.


### **Testing Plan**

SBP, local build and full build need to be tested and the output validated per content type.  The preview server currently has a `/diff` endpoint which generates a visual difference between the preview server HTML and production.  Example: [http://preview-dev.vfs.va.gov/diff?nodeId=2578](http://preview-dev.vfs.va.gov/diff?nodeId=2578). The preview will manually check for a subset of each content type before we turn on instant publishing for the content type.

### **Logging**

GitHub Actions will output logs for the build and versioning of the function. Log output from the function (from calling console methods) will be stored in CloudWatch.

The lambda function will also communicate back to Druapl using the [Publish Batch API](#publish-batch-api) where Drupal will generate an Audit Trail of what was build by who and when.

### **Debugging**

*   One can start diagnosing any issues using the logs mentioned above.
*   The Webpack build of the function can be run locally to debug issues with the build.
*   The code should be abstracted in a way where the code can be executed outside of the lambda function.  For example, the preview server itself should be running the same code.
*   Debugging the HTML produced and using the `/diff` endpoint which shows the HTML from the code compared to production.
*   The pages generated by the lambda will have an extra piece of information indicating the page was generated by the Lambda, along with the date and revision.

Example Debug Information in HTML of published page on va.gov.
```
<--

  layout: vamc_operating_status_and_alerts.drupal.liquid
  path: central-california-health-care/operating-status
  entityId: 7831
  revisionId: 23223213
  generatedAt: &lt;time_stamp>
  generatedBy: &lt;some identifier>

-->
```

*   The information listed above will be used by Drupal to identify when the page was last published.

### **Caveats**

*   Initial Implementation will be with a limited number of content types.   
*   As content type support will migrate from the full content build to SBP. 

### **Security Concerns**

There are potential DDOS issues against the Drupal Server as editors are added.  This risk is reduced as requesting data for a single page puts a small load on the system.  If the lambda function is to be the source of all published content, [Drupal caching](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5243) will need to be improved. We do **not** anticipate this work to require a modification to the existing ATO.

### **Privacy Concerns**

There are no privacy concerns as no user data is involved.

### **Open Questions and Risks**

*   How will global elements like the site map be generated, Updated?
*   Can redirects be added to S3? [https://docs.aws.amazon.com/AmazonS3/latest/userguide/how-to-page-redirect.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/how-to-page-redirect.html)
*   Should the preview server be moved to lambda also?
*   Broken Link check will not run for each Small Batch Publish.  This check will continue to run as part of the hourly content build.
*   [How will the lambda function be tested before merging?](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5575)
*   AX and broken link checking will initially not be blocking the publishing of content. Since the hourly build will still run the AX and broken link.
*   Drift between Small Batch Publishing and full content build.  Work will be done to minimize the risk by abtracting build code to be used in multiple areas.

### **Work Estimates**

[Work is being tracked in the Small Batch Publishing Initiative](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/issues/department-of-veterans-affairs/va.gov-cms/5499)


### **Alternatives, Research, and Future Work**

Alternatives were explored as part of the Accelerated Publishing Initiative. Single Page Publishing using the preview server code was chosen for its most immediate impact.  Other solutions, such as exposing the Drupal API publicly will still be pursued. 

*   [Accelerated Publishing Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/accelerated_publishing/findings_recommendations.md)
*   [Proof of Concept Summaries](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/cms/accelerated_publishing/proof-of-concepts-summaries)
*   [Discovery of Single Page Preview Epic](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/issues/department-of-veterans-affairs/va.gov-cms/5095)
*   [Accelerated Publishing Initiative](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/issues/department-of-veterans-affairs/va.gov-cms/4746)

Assets coming out of Drupal will be sent directly to S3. More work is going to be tracked in [this Issue on GitHub](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5480)

Other global elements such as menus, sidebar menus, listing pages, header and footer should be investigated to see if they should be replaced by React Widgets.


## **Mid Term Vision**

The longer term vision is for all content publishing to use the Small Batch Publishing framework.  This would require all pages in va.gov to have a Drupal representation, including the current markdown content.  The current content build would be updated to trigger the SBP system depending on templates being updated.  With all pages represented in Drupal, the AX and broken link checkers can be controlled in the Drupal editorial experience.

The advantage of using Lambda is the ability to horizontally scale the processing of the pages.  If all publishing goes through the lambda, we have lots of flexibility about where the HTML is generated (Drupal vs preview server vs build).

## **Eliminate the Content Build Pipeline**

Eventually, Drupal will be exposed publiclly which will allow for more flexibiltiy in how content is published.  Either [Drupal will publish the HTML directly](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/issues/department-of-veterans-affairs/va.gov-cms/5127), or [React widgets will pull content from Drupal in real time](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/issues/department-of-veterans-affairs/va.gov-cms/5104).  Most likely it will be a mix of those two.


## **Revision History**

| Date              | Revisions Made     | Author            |
|-------------------|--------------------|-------------------|
|     June 11, 2021 | Initial Draft.     | Neil Hastings     |
