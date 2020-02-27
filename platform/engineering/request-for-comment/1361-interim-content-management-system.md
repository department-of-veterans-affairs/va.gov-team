# RFC: Interim Content Management System

- Date: 2018-10-08
- Related Issue: https://github.com/department-of-veterans-affairs/vagov-content/pull/2
- Deadline for Comments: 2018-10-10

## Background

The `department-of-veterans-affairs/vets-website` repository contains all frontend related assets for the Vets.gov website. It began as a simple content-only website, and grew to become the primary development ground for content, layout, and frontend application code. Work involves multiple groups, consisting primarily of application developers and content editors. The workflow, testing, and release requirements for these groups vary dramatically. 

## Motivation

Given recent efforts toward a VA.gov relaunch for the purposes of brand consolidation, and the desire to provide more rapid content editing worfklows supporting a wider audience, we have decided to break Vets-Website into two different repositories. One should support the application development workflows, and the other should support the unique needs of the content group.

1. Some content editors should be able to publish changes to the site without additional review.
2. Other content editors must seek review for specific portions of the site from predefined groups within GitHub.
3. Changes to content should be continuously deployed and published directly to all environments.
4. Content publishing should be quick and reliable.

We have recently received [approval to host approved non-sensitive information outside of the TIC boundary](). This allows us to serve static assets, such as JS, CSS, and images, from servers that are better capable of addressing our performance needs. Evaluating our content publishing workflow to provide a better means of delivering static build assets to new targets is apt at this time. 

## Design

To make this work, I think we could imitate the relationship of the `vets-api`  repo with the `vets-api-mockdata` . We could define the `va-gov/pages` directory as the `vagov-content` repo, and clone it into a sibling directory of the `vets-website` repo (later to be renamed `vagov-apps`). This would be the extent of changes for FE engineers to migrate. A CMS deployment would be similar to the above, but slightly different because we no longer need to concern ourselves with updating the submodule, and because `vagov-content` would always require `vets-website` to execute. It would look like -

### CMS Deployment

1. Clone the latest release of `vets-website` into `applications/vets-website`
2. Clone `vagov-content` into `applications/vagov-content`
3. Execute `vet-website/script/build.js` with a flag indicating the location of previously-compiled app-code somewhere in S3
    - `node vagov-apps/script/build.js --cms-deployment {GIT_SHA}`
    - This build would link up to the sibling `vagov-content` directory as the source of Metalsmith pages. Other Metalsmith assets, such as layouts, includes, components, etc. continue to live in `vets-website`.
    - This flag would likely be the commit SHA of the latest release on `vets-website`
4. Skip JS-compilation
5. Grab distant `file-manifest.json` and process it into link references throughout generated HTML
5. Publish to S3

### App/Full-code Deployment

I think it would make sense for `build.js` to remain the single entry point for building the site, because even if we have a separate build script for compiling Webpack, we need to update the hash of each Webpack asset in the script tags of the compiled content pages. It just seems simpler for local work to keep `build.js` as that single point, but either way, separating the Webpack-compilation from the Metalsmith-compilation doesn't have a huge impact.

1. Tag a release on `vets-website`
2. Clone the latest release of `vets-website` into `applications/vets-website`
3. Clone `vagov-content` into `applications/vagov-content`
4. Execute `vet-website/script/build.js` with a flag indicating the destination of the to-be-compiled Webpack app-code
    - `node vagov-apps/script/build.js --webpack-destination {GIT_SHA}`
5. Compile the webpack code
    - Leave it in the same bucket, or a upload it into assets-dedicated bucket
6. Grab local/distant `file-manifest.json` and process it into link references throughout generated HTML
    - Local if we leave it in the same bucket; distant if we have an assets-dedicated bucket
7. Publish to S3

## Risks

1. It's harder to enforce that content changes in vagov-content don't break things in vets-website, because it's completely separate. We would likely need to fail builds based on a build process in another repo.
2. Previewing changes is probably harder, because we need to invoke a build process in another repo
3. Difficulty with Jenkins build process. 
4. We lose that preservation of how the app-code stood at the time of a CMS deployment, because the pages being a child/subdirectory/submodule of the app-code would no longer be able to maintain a pointer to  a commit of the app-code repository in Git. This wouldn't work with a submodule, because there isn't a way to configure a submodule to always take latest. I just tried adding the submodule to the Gitignore

## Alternatives

1. Detect changes to content in Vets-Website as it exists today, and update the build process to accomodate.
1. Separation of full metalsmith build to vagov-content, with application source and stylesheets in vets-website.
2. vagov-content as a submodule to vets-website
