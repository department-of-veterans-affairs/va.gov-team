## Troubleshooting overview 

<details>
	<summary>What are builds and how do they fit into the overall development process?</summary>
	
  - Va.gov is a static site
    - html, js, and css are built and deployed to S3
    - requests for pages and assets are routed through the reverse proxy to S3 
  - Vets-website is deployed through a [**continuous integration** (CI)](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment) process.
  - Vets-website CI is a change management process that performs / provides
	  - **Change tracking** with [git](https://www.git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F) 
	  - [**Required reviews**](https://help.github.jp/enterprise/2.11/user/articles/about-required-reviews-for-pull-requests/) that include
	    - **Required peer reviews** that leverage [codeowners](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/codeowners.md)
	    - Quality control like running **required automated tests** against every change
	  - **Build process** - includes static content and webapp builds 
	  - **Feedback views** - provides actionable feedback to developers about each of these parts</details>
	  
<details>
	<summary>Current state of vets-website CI</summary>
	
  - The **focus** of this document is **developer feedback** part of the platform CI needed to troubleshoot build failures. The current feedback from the platform CI has a couple of broad issues 
	  - **It's not always clearly actionable**: developers are often told that a failure has occurred but not how to resolve it. There can be many research steps involved to determine why something failed 
    - **The feedback is not pushed to developers**: when a pull request is submitted, the CI takes an indeterminant amount of time to through all of its validation stages and there's no estimate or notification to the engineer when the process is complete 
      - There can be significant cognitive friction associated with troubleshooting CI failures especially for users who are not familiar with the stack. There is not a clear mental model new engineers can use to understand everything the CI does.
  - Developers should be able to focus on hard problems related to their domain not on understanding the platform's CI tech stack</details>

## Jenkins jobs

<details>
	<summary>Overview</summary>
	
![Overview of vets-website Jenkins jobs](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/teams/vsp/teams/tools/frontend/vets-website-jenkins-overview.png)
  - Jenkins runs the test, build, and deploy scripts for the va.gov frontend 
  - Production deployment is triggered by the auto deploy job
  - Most of the work happens in the **testing** job 
    - runs all of the build and testing scripts</details>
    
<details>
	<summary>List of all of the build script and configs files and how they are related</summary>
  
|File|Contains   |
|---|---|
|Testing job [Jenkinsfile](https://github.com/department-of-veterans-affairs/vets-website/blob/main/Jenkinsfile)|configures the workflow- most of the testing calls are configured here.|
|[Groovy file](https://github.com/department-of-veterans-affairs/vets-website/blob/main/jenkins/common.groovy)|jenkins/build script call|
|[jenkins/Bash script](https://github.com/department-of-veterans-affairs/vets-website/blob/main/jenkins/build.sh)|configures npm build script arguments|
|`npm run build`|calls script/bash script|
|[script/Bash script](https://github.com/department-of-veterans-affairs/vets-website/blob/main/script/build.sh)|conditionally calls `yarn build:webpack` and `yarn build:content`|
|`yarn build:webpack`|calls the webpack build using the webpack [config](https://github.com/department-of-veterans-affairs/vets-website/blob/main/config/webpack.config.js)|
|`yarn build:content`|calls [this](https://github.com/department-of-veterans-affairs/vets-website/blob/main/script/build-content.js) node script which is the main metalsmith build script|

_File order generally corresponds to call order._
  
  </details>
    
### Auto deploy Jenkins job
	
  <details>
	<summary> Auto deploy job summary shows the job history and has links to starting a new auto deployment. **Never** rerun an autodeploy job- always start a **new** auto deploy job. </summary>

[Jenkins job link](http://jenkins.vfs.va.gov/job/deploys/job/vets-gov-autodeploy-vets-website/)
	
![Auto deploy job summary](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/teams/vsp/teams/tools/frontend/vets-website-auto-deploy-summary.png)
    </details>
    
 <details>
	<summary>You can usually rule out an ops vs fe tools issue by looking at what stage failed.</summary>

![Auto deploy job steps](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/teams/vsp/teams/tools/frontend/vets-website-autodeploy-summary-steps.png)
    
_The test job is triggered at **Wait for a valid build status** - this is the most likely step to fail. Troubleshooting this will likely require looking at the testing job._
</details>
    
<details>
	<summary>Auto deploy detail view</summary>
- The auto deploy detail view has links to the logs and what triggered the build e.g. va-cms-bot is what starts the content deployments 

![Auto deploy job details](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/teams/vsp/teams/tools/frontend/vets-website-autodeploy-details.png)</details>

### Testing jenkins job

<details>
	<summary>Job list view</summary>
	
[Filtered](http://jenkins.vfs.va.gov/blue/organizations/jenkins/testing%2Fvets-website/activity?branch=main) by the main branch, this view will show if there are any immediate problems with the current main branch build. 
![main job list view](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/teams/vsp/teams/tools/frontend/vets-website-master-job-list-view.png)</details>

<details>
	<summary>summary / detail views</summary>
	
  - [Testing job](http://jenkins.vfs.va.gov/job/testing/job/vets-website/) summary shows the testing job history. 
    - The Blue Sky [view](http://jenkins.vfs.va.gov/blue/organizations/jenkins/testing%2Fvets-website/activity) is usually easier for viewing most things in the testing job 
  
    - The job detail view will show the workflow pipeline. Test failures can be viewed in the testing tab and each test failure has an accompanying stacktrace. 
    ![Testing job details](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/teams/vsp/teams/tools/frontend/vets-website-testing-job-detail.png)
        ![Testing job failure test detail](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/teams/vsp/teams/tools/frontend/vets-website-testing-job-failure-tests-view.png)
    ![Testing job failure](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/teams/vsp/teams/tools/frontend/vets-website-testing-job-failure.png)
    - Some steps are optionally run in the testing job: 
    	- CMS triggered: does not run the app build- uses the last successful app release
    	- Master branch change triggered: does not run the Cache Drupal content step</details>

## Troubleshooting 

<details>
	<summary>👀 What to watch 👀</summary>

### Failed [main branch jobs](http://jenkins.vfs.va.gov/blue/organizations/jenkins/testing%2Fvets-website/activity?branch=main) should be restarted- investigate details if they continue to fail 

![main job list restart](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/teams/vsp/teams/tools/frontend/vets-website-master-job-list-restart.png)

### Production deploy failure notifications in slack in #vfs-engineers

![vfs-engineers-vets-website-deploy-failure](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/teams/vsp/teams/tools/frontend/vfs-engineers-vets-website-failure.png)

### Manual deployment [documentation](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/workflow/deploy)

</details>

<details>
	<summary>Typical process for deploying features</summary>

   - Developers pull the entire code base onto their computers to make their changes. This enables them to run their application locally for testing
  - Once a change has been made locally, they bundle the changes together into a feature branch. This is a code change request that represents the differences between the main code branch (which is deployed to production every day) and their feature branch. Feature branches are part of git. 
  - Pull requests are a manual review process enabled by GitHub and are initiated by the developer through the GitHub UI. 
    - GitHub and git are separate tools. GitHub is the site that houses the git repository a and git is the tool that's used to manage changes. 
  - A pull request a business process to manage manual peer and automated system review. 
    - Peer developers are able to review the change, engage in commentary, and approve the request for merging into the main branch in the pull request UI
    - Systems can be notified about a pull request and provide change approval to the GitHub pull request process 
    - Pull requests must be both approved by peer developers and by the automated CI checks (system) before they can be merged.
  - Vets-website initiates several automated checks when a pull request is created (i.e. when GitHub notifies the continuous integration system)
    - ![Platform CI overview](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/teams/vsp/teams/tools/frontend/blue-ocean-overview.png)
    - Platform tools - (tools that the platform team maintains. These generally run inside of Jenkins)
      - Unit tests 
      - Linting
      - Security checks 
      - Full application builds for each environment (development, staging, production)
      - Accessibility tests 
      - End to end tests 
    - All of the testing provided by the platform must be successful before a developer can merge a their feature branch. The code climate feedback is optional and is mainly to facilitate code review 
  - The Required reviews UI
    - ![Required review UI](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/teams/vsp/teams/tools/frontend/required-reviews.png)
    - The required reviews UI is the provides developers with an overview of the change approval 
    - It's summarizes manual and automated approvals 
    - Once all approvals are met, the developer can click the Squash and Merge button on the reviews UI to close out their pull request and merge their change into main 
    - Squash and merge is a specific type of merging supported by git - every change made to a branch is called a commit, and when a feature branch is merged into the main branch, we like to have developers "squash" their changes into a single commit before it's merged into main. This keeps the change history cleaner.</details> 
      
<details>
	<summary>Typical exception flow</summary>
	
- Developer is notified through the Required Reviews UI that the continuous integration failed 
    - Developer turns on SOCKS proxy and clicks details link 
    - The SOCKS proxy requires browser configuration during initial set up and is ran as a command line app in the terminal. The command is cryptic (not user friendly):  ssh socks -D 2001 -N
      - The socks proxy must be re-activated anytime the user turns off their terminal or wakes up their machine. 
- ![Platform CI exception](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/teams/vsp/teams/tools/frontend/blue-ocean-exception.png)
- Jenkins provides a view of each of the stages of the CI validation. The stage that failed is marked with a red x. Developers can click on that to see a log of the process that triggered the failure along with an error message
	- A few troubleshooting steps can happen at this point
		- Lint, security, and Unit tests are usually simple failures. The errors are straight forward and easy to understand and running the tests locally will always give the same result as the CI. To find the command to run, they can refer to the vets-website readme or to the log (e.g. the example above ran npm --no-color run lint). Often the developer will not want to run the command ran by the CI- the commands documented in the readme will provide better output for developers
		- Integration tests (accessibility, end to end) and build failures are generally harder to troubleshoot. Their logs can span many hundreds of lines, their error outputs usually only give clues to why something failed, and it can be unclear if the failure was caused by the developer's change or an issue with the build script itself. Usually these failures will not manifest when locally testing.</details>
    
<details>
	<summary>Common CI exception types</summary>
	
  - Lint failure 
		- Linting enforces the code style of vets-website (e.g. spacing, indentation, order of operations). These failures are usually very atomic and usually can be corrected automatically by software. 
		- The way vets-website is set up, linting is ran as part of the commit process locally. It's sufficiently fast enough to not interfere with the git commit process. Also most editors support auto correcting linting errors so linting failures are not common in CI. Some engineers don't use auto correction in their editing tools
		- Could offer a command to auto fix linting errors locally 
  - Unit test failure 
		- Unit tests typically target a single function and validate its behavior. Unit test failures occur because a change caused a regression. These failures are usually very atomic and require changing the code to fix (i.e. either updating the test or updating the code change to pass the test) 
		- Could display a command to run all unit tests locally or just the unit tests that failed 
  - Functional tests: Accessibility / end to end test failure
		- Integration tests require running the website and performing browser interactions. These validate run time behavior of the application 
		- They validate behavior by checking the DOM for specific html markup 
		- Errors in these tests can be cryptic and difficult to understand from the console output. Troubleshooting these failures generally requires a deep understanding of the app's behavior.  Sometimes to troubleshoot these failures, the developer will need to run the tests locally with the browser visible and insert pauses in the test script- observing the behavior in the browser and inspecting the markup using chrome developer tools. 
  - Build failures 
		- Build failures generally occur for two reasons: 
			- There was something internally inconsistent about overall code. Linting generally catches errors in a single file while a build failure signals that there is something wrong with the way the files work together. 
			-  There was something wrong with an external system (e.g. querying the Drupal CMS failed). These failures are often the hardest to troubleshoot because they require a deep understanding of the build process itself. Currently our build failure logging is not very sophisticated.</details>
			
<details>
	<summary>Handling production deployment failures</summary>

  - Frontend tools team is responsible for resolving production deployment failures. **The website must be deployed every business day**.
  - Since many teams rely on this, failures should be handled with **proactive communication**
    - Stakeholders currently watch the #vfs-engineers channel for failures announcement; acknowledge a failure as soon as possible 
    - Proactively update status of failure resolution. It's good practice to link to the jobs you are monitoring or waiting for. 
    - Escalate failures as needed to engineering leadership. 
  - The autodeploy will wait until the latest main build finishes.
    - The release will include commits up to the most recent one as of starting the job.
    - Keeping the [main branch](http://jenkins.vfs.va.gov/blue/organizations/jenkins/testing%2Fvets-website/activity?branch=main) job passing is a good way to avoid delaying the production deployment.
  - **Before manually running the autodeploy, make sure that the most recent commits have been deployed to staging.**
    - Production should not have commits that have not been deployed to staging.
    - The simplest way to deploy the most recent commit to staging is to re-run the presumably failed build at the head of main until it passes.
    - You can inspect the [BUILD.txt on staging](https://staging.va.gov/BUILD.txt) to confirm what commit it's on.
</details>
      
<details>
	<summary>Summary of feedback UIs</summary>
	
  - Command line logs 
		- The most low level output of our processes 
		- We have a high level of control over what gets output 
		- Each of the validation types (e.g. unit tests, linting) use a third party module that has its own logging configuration 
  - Jenkins blue ocean: https://jenkins.io/projects/blueocean/
		- This allows navigation of the command line logs in a CI pipeline diagram (https://jenkins.io/doc/book/blueocean/pipeline-run-details/)
		- Requires logging into SOCKS proxy to access
		- Unsure how customizable this view is 
  - GitHub Pull request view (including Required Reviews UI)
		- Highest level summary of approvals 
		- Relies on a webhook to communicate failures / successes for approval management: https://developer.github.com/v3/repos/hooks/
		- We may have some ability to customize what gets displayed here (e.g. we might be able to convey a summary of the failure) 
  - #vfs-engineers
  	- production deployment failures are announced here</details>
