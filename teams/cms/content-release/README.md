# CMS integration into the front-end website

1. [Summary of the Content Release process](#Summary-of-the-Content-Release-process)
2. Content build
3. Content data used beyond templating
    - React widgets
    - MegaMenu JSON (in-page and .json file)
    - Find Forms + Form Detail pages
    - Resources
    - React sidebars
    - Homepage banner

## Summary of the Content Release process
A _Content Release_ describes the entire process behind refreshing content on the website to reflect the content as stored in the CMS. The process begins after a CMS editor manually initiates it through a control in the CMS, when an engineer initiates it through a specific Jenkins job, or after being initiated automatically by a scheduled job. The process is complete once content on the website is visibly up-to-date with that in the CMS.

The Jenkins job behind a Content Release is the same job that is executed during the vets-website Full-Code Release, widely referred to as the "daily deployment." This Jenkins job is the [`Vets.gov Auto-Deploy for vets-website`](http://jenkins.vfs.va.gov/job/deploys/job/vets-gov-autodeploy-vets-website/), or just the _Auto-Deploy_.

<details><summary>The Auto-Deploy dashboard in Jenkins</summary>

![Screenshot of the Auto-Deploy dashboard](./images/jenkins-auto-deploy.png)

</details>

A step inside of the Auto-Deploy, its column labeled in the Auto-Deploy dashboard as `Prerelease Job`, issues a separate job and waits for that job to complete. This separate job is the [`vets-website content only build`](http://jenkins.vfs.va.gov/job/builds/job/vets-website-content-vagovprod/). This is commonly referred to as the _Content Build_, which is an execution of the vets-website static site generator. The result of this process is an updated version of the website uploaded to the cloud as a compressed directory of static HTML, CSS, JavaScript, and other static files - this compressed file is referred to as an "archive."

<details><summary>The vets-website Content Only Build dashboard in Jenkins</summary>

This job is executed synchronously during the `Prerelease Job` in the Auto-Deploy.

![Screenshot of the Content Only Build dashboard](./images/jenkins-content-only.png)

</details>

Towards the end of the pipeline, the Auto-Deploy issues another separate job under the column labeled `Release then trigger deploy`. This separate job is the [`vagovprod`](http://jenkins.vfs.va.gov/job/deploys/job/vets-website-vagovprod/), which actually populates the va.gov domain server with the contents of the archive. This job is executed asynchronously, which means it isn't well-reflected in the Auto-Deploy dashboard because the Auto-Deploy will complete before Vagovprod is finished. However, as a Content Release is finished only after content is visibly refreshed on va.gov, it is part of the Content Release as a whole. The `vagovprod` job takes roughly three minutes.

<details><summary>The Vagovprod dashboard in Jenkins</summary>

This job is executed asynchronously during the `Release then trigger deploy` job in the Auto-Deploy.

![Screenshot of the Content Only Build dashboard](./images/jenkins-vagovprod.png)

</details>

### Content Release vs. Full-code Release (daily deployment)
As said previously, a Content Release uses the same Jenkins build job as the Full-Code Release. However, there is a key difference between the two, in form of a build parameter - the Content Release has the property `use_latest_release` set to true. The screenshot below shows what a Content Release initiated through manual execution of the Jenkins Auto-Deploy job may look like -

<details><summary>Content Release manually executed through Jenkins</summary>

The `use_latest_release` parameter being set to `true` is what defines this Auto-Deploy job as a Content Release.

![Screenshot of the Auto-Deploy job with use_latest_release set to true](./images/jenkins-content-release.png)

</details>

This `use_latest_release` parameter indicates that rather than checking out the latest code in vets-website (master branch), the build job should check out the code behind the [latest vets-website release on GitHub](https://github.com/department-of-veterans-affairs/vets-website/releases).

Also observe that the `prerelease_job` parameter is set (by default, and probably shouldn't ever be changed) to `builds/vets-website-content-vagovprod`, which refers to the Content Only Build.

These parameters are passed to and processed throughout the [Auto-Deploy script](https://github.com/department-of-veterans-affairs/devops/blob/065333be3c199a75710ef4c98e589ef226d48d70/ansible/Jenkinsfiles/deploys/warn-release-deploy#L11). Together, the `use_latest_release` and `prerelease_job` parameters direct the Auto-Deploy to grab the commit SHA of the  latest _release_ (not the latest commit) in vets-website, then pass that commit SHA to the job for executing a Content Only Build.

Tracing further, the [Content Only Build](https://github.com/department-of-veterans-affairs/devops/blob/c46c02e05728902c5a4109671a388d76fb98d2af/ansible/deployment/config/jenkins-vetsgov/seed_job.groovy#L1428) will execute the [`Jenkinsfile.content` in vets-website](https://github.com/department-of-veterans-affairs/vets-website/blob/master/Jenkinsfile.content#L22), which contains the logic for executing the vets-website static website generator. This will result in a new archive of the latest vets-website release rebuilt to contain the latest content from the CMS.

## Understanding the Content Build
The _Content Build_ refers to a specific process in the front-end repo that executes the vets-website static site generator. The _Content Build_ is usually summarized as a task to generate everything on the website that isn't a standalone React app.

The tool behind the static website generator is [Metalsmith](https://metalsmith.io/). In general, Metalsmith is a simple library that accepts a local directory of content as an input (in the case of vets-website, the original input is a sibling GitHub repository named vagov-content, which contains Markdown file), processes that original input throughout some steps known as "plugins", and then outputs the resultant directory of static HTML and other assets to the file system.

The Metalsmith API for creating plugins is very simple and flexible - vets-website has _many_. In the entry point for executing Metalsmith in vets-website (usually referred to as the [build script](https://github.com/department-of-veterans-affairs/vets-website/blob/de246dc9f70078c08017edec297910fa3b50247c/src/site/stages/build/index.js)), observe that each plugin is registered using the `metalsmith.use` function.

## Content data used beyond templating
