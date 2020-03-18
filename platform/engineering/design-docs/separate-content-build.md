# Separate Content Build

**Author(s):** Christopher Valarida  
**Last Updated:** March 16 2020  
**Status:** **Draft** | In Review | Approved  
**Approvers:** Dror Matalon, Andrew Gunsch, Rian Fowler  


## Overview

### Objective
The objective here is to define an approach to isolate the concerns of the
content build from the front end application build and vice versa.

This design document is intended for front end engineers and DevOps engineers on
the Veteran-facing Services Platform (VSP) and other Veteran-Facing Services
(VFS) teams. Most directly affected is the Content Management System (CMS) team.

### Background

#### Build script
This [Metalsmith](https://github.com/segmentio/metalsmith) script does many
things. The highlights include:
- Fetching static content from Drupal
- Building static HTML pages from the content
- Triggering Webpack to build JS and CSS bundles
- Creating the HTML pages for the React Single-Page Applications (SPAs)
- Checking all HTML pages for broken links

The script can be found [here](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/stages/build/index.js).

#### CI pipeline
The CI pipeline for `vets-website` triggers the above build and runs a number of
tests. Pertinent to this document are:
- Accessibility tests on static content pages
  - Using the [`npm run nightwatch:docker --
    --env=accessibility`](https://github.com/department-of-veterans-affairs/vets-website/blob/master/Jenkinsfile#L82) command
  - This iterates through all the pages on the sitemap, which is created by the
    content build script
- Broken link checks on static content pages
  - The actual link checking happens during the build script, but it isn't
    reported anywhere until [after the build script has been run](https://github.com/department-of-veterans-affairs/vets-website/blob/master/jenkins/common.groovy#L200)
    
#### Deployment
There are currently two kinds of deployments:
1. [Partial deploy](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/workflow/deploy/#partial-deploy--static-page-changes-only)
    - For static pages only
    - Uses the latest `vets-website` release and static assets
      - Does not trigger Webpack to build the JS and CSS bundles
      - Instead,
        [fetches](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/stages/build/plugins/configure-assets.js#L22-L23)
        the assets [from S3](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/stages/build/plugins/download-assets.js#L111)
        - Process is triggered [here](https://github.com/department-of-veterans-affairs/vets-website/blob/master/Jenkinsfile.content#L32)
    - Does **NOT** run any content validation such as accessibility tests or
      broken link checker
2. [Full deploy](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/workflow/deploy/#full-deploy-of-vagov-client-app)
    - For `vets-website` code changes
    - Creates a new release and deploys it
    - Fetches the latest Drupal content
      - Falls back to the cached content in S3 from the last successful deploy
        (full or partial)
        <!-- TODO: Verify that either deploy will cache the pages.json and files -->
    - Runs the accessibility tests and link checker

See [here](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/workflow/deploy/)
for more details.

#### Pain points
- Engineers developing applications need CMS content to build their applications
  - When their applications have nothing to with the CMS
  - It's a confusing requirement to new engineers
  - It requires either SOCKS proxy access or the `npm run fetch-drupal-cache`
    command, which isn't obvious
  - The build fails with an unexpected error when the CMS content cache
    (`pages.json`) is used with the updated Liquid templates to build the HTML
    files
    - Resulting in confused questions in the platform support channel and
      general frustration
- Application deployments depend on CMS content being valid
  - If content has accessibility errors, the build and deploy job will fail and
    application code won't be deployed to production
  - If there's an error in the content build, application code won't get
    deployed to production
    - This includes broken links
    - We have a safeguard that mostly works; if we run into a failure using the
      latest CMS content, we try again with the cached content
      - This doesn't work when the GraphQL query has been updated; that
        invalidates the cache
      - Errors in liquid templates would potentially break the build and falling
        back to the cache won't help

### High Level Design
The current front end build will be split up into two distinct builds:
1. Content build
    - Input: CMS content
    - Output: HTML files, assets from the CMS (PDFs, images and the like)
1. Application build
    - Input: `vets-website` code
    - Output: JavaScript and CSS bundles

The output of both these builds will be deployed to separate buckets. The
reverse proxies will route traffic intelligently to the appropriate bucket given
the request.

![Proposed traffic flow to S3 buckets](images/proposed-traffic-flow-to-s3-buckets.png)

**Important note:** JavaScript application landing pages will live in the CMS.
To get an application into production, the page in Drupal will need to be
published.

**Another important note:** There is no way to coordinate these two deploys to
make an application live for the first time. The process will be to manually:
1. Verify the application assets are live in production
1. Publish the landing page
1. Deploy a new content build

## Specifics

### Detailed Design
_Coming soon!_

<!--
_Designs that are too detailed for the above High Level Design section belong
here. Anything that will require a day or more of work to implement should be
described here._

_This is a great place to put APIs, communication protocols, file formats, and
the like._

_It is important to include assumptions about what external systems will
provide. For example if this system has a method that takes a user id as input,
will your implementation assume that the user id is valid? Or if a method has a
string parameter, does it assume that the parameter has been sanitized against
injection attacks? Having such assumptions explicitly spelled out here before
you start implementing increases the chances that misunderstandings will be
caught by a reviewer before they lead to bugs or vulnerabilities. Please
reference the external system's documentation to justify your assumption
whenever possible (and if such documentation doesn't exist, ask the external
system's author to document the behavior or at least confirm it in an email)._

_Here's an easy rule of thumb for deciding what to write here: Think of anything
that would be a pain to change if you were requested to do so in a code review.
If you put that implementation detail in here, you'll be less likely to be asked
to change it once you've written all the code._

NOTE: Don't forget about broken link validation with regard to links to
application assets. Specifically, how the application assets live in a
different location than the HTML files.
-->


### Code Location
To start, the **content build** will live at
`vets-website/src/stages/build-content/`. (This should be mostly just a rename
of `build/` to `build-content/` for clarity.) Once the implementation is
complete, this code will **move to a new repository.**

The **application build** will consist of **webpack configuration files** found in
the **root of the project.** If we need any script files to aid in the build
process, they will be located in `vets-website/scripts/build/`.

### Testing Plan

#### Conslidated build script
After the content and application builds have their own build scripts within
`vets-website`, we'll write a script to run both builds together to reproduce
the current build script's output. To test that this is working properly we can:

1. Run the script pre-separation (checkout `master` for this)
1. Rename the `vets-website/build/localhost/` directory
1. Run the post-separation build script
1. Check that the all same files are there
    - We can use `find` and `cmp` for this as needed
    
#### Forward proxy routing
We'll have two buckets: One for content, one for application assets. During the
transition, the application bucket will also contain content. Once the forward
proxy routing is set up and we're confident traffic is being routed to the right
buckets, we can remove the content from the application build.

**Question:** How will we be able to verify that traffic is being routed
properly?

### Logging
**Question:** What _should_ it log? Anything? Is this a Jenkins / Nomad /
CircleCI thing?

### Debugging

#### Content

##### Build
When the [`process-cms-exports`](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/stages/build/process-cms-exports/index.js)
system is live, there will be automated tests to validate input from the CMS and
output from the content transformers.

##### Deploy
To determine whether a page exists in the drupal content, we can go to
`staging.va.gov/drupal/debug/`. This page is not available in production,
however.

#### Application

##### Build
We have automated unit and end-to-end tests that are run on every CI build.

##### Deploy
**Question:** How _do_ we tell whether or not the deploy was successful and the
expected version of the application code is live in production?

#### Forward proxy routing
**Question:** How can we tell if any given request is being sent to the right
bucket?

### Caveats
- The content validation doesn't happen in the build job
  - The application CI runs tests, but the content CI does not
  - This is because it takes a long time and content editors are used to seeing
    their changes in production quickly
  - Validation instead happens in a separate job

### Security Concerns
There are no new concerns with a separated build process.

### Privacy Concerns
There are no new concerns with a separated build process.

### Open Questions and Risks
- Can we run the build and deploy job for `vets-website` (application build) in
  CircleCI?
- How often should we run content the separate content validation job?

### Work Estimates
The following estimates vary greatly depending on who's doing the work.

1. Write a standalone script that can be pointed to the build output directory
   to check for broken links
    - Run this in Jenkins after the build succeeds
    - **Estimate:** 3 hours - 3 days
1. Remove the broken link checker step from the Metalsmith script
    - **Estimate:** < 1 hour
1. Separate the content and application builds into their own scripts within
   `vets-website`
    - **Estimate:** 1 - 5 days
1. Coordinate the builds with a consolidated build script to produce the same
   output of the current build
    - **Estimate:** 2 hours - 2 days
1. Copy the content build script to another repo
    - **Estimate:** 2 hours - 1 day
1. Set up the CI for that new repo
    - **Estimate:** ??
    - I'm not sure what all goes into this
        - What does it take to wire this into Jenkins / Nomad?
1. Coordinate with Ops to use the new repo to deploy content to a new bucket
    - **Estimate:** ??
    - Again, not sure what it takes to make this happen
1. Set up the routing in the forward proxy
    - **Estimate:** ??
    - Probably between a few hours and a week...?
1. Once we're confident all traffic is routed properly, switch the `vets-website`
   build to build only webpack assets (content on the application bucket
   shouldn't be touched at this point anyhow)
    - **Estimate:** < 1 hour

### Alternatives

#### Mono-repo
The alternative to splitting out the content build into its own separate repo is
to keep it in `vets-website`. The reasons we're not doing this are:
- We're trying to reduce what `vets-website` is "in charge" of
  - Building static content from the CMS and compiling application code are two
    completely separate functions
- We can have one CI pipeline per repository
  - And they'll be more narrowly focused
- We can manage dependencies independently
  - All dependencies in the content build repo are not client-facing
    - There _may_ be exceptions later
  - It will be harder for an application to use be able to use a dependency that
    wasn't intended to be client-facing

#### Single S3 bucket
Instead of deploying content to a separate S3 bucket from the applications, we
could continue to deploy them both to the same bucket. We decided to split up
the deployment to:
- Promote a higher separation of concerns
  - **Question:** Is this even a thing we should be worried about?
- Enable simpler rollbacks
  - **Question:** Is this valid?

**Note to reviewers:** I spent a lot of time trying to figure out what
independent deployment and independent rollback looked like on one bucket, but
I'm just not experienced enough to have a good answer. I don't want to introduce
unneeded complexity, but separating the output from each build seemed like the
right approach. At this point, it's more hunch than anything and I very much
would like to get feedback on this part from somebody with experience in the
trenches.

### Future Work
_Features you'd like to (or will need to) add but aren't required for the
current release. This is a great place to speculate on potential features and
performance improvements._

### Revision History
Date | Revisions Made | Author
-----|----------------|--------
Mar ??, 2020 | Initial draft | Christopher Valarida

