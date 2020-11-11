## Context 
  - Documenting developer experience can be used to identify issues with specific parts of the platform and create a cross discipline domain langauge
    - Objective of documenting developer experience includes identifying friction points in common processes and tasks
    - Current DX is nebulous and difficult to discuss with a common language across practices: UX, PM, and dev
    - Development work can be described in terms of common behaviors like change management and business processes
  - Important to have other disciplines engage the DX improvement process - UX + PM offer contextualization to the business and can help facilitate gathering feedback from users 
  - This document focuses on front end concerns 
  
## What are builds and how do they fit into the overall development process? 
  - The output of software development is features for users. Vets-website utilizes a **continuous integration** (CI) process to deliver new features to users. CI is an umbrella term that encompasses 
	  - Change management - e.g. tracking of all changes made to the code using git, facilitating and enforcing peer review 
	  - Quality control - e.g. running automated tests against every change
	  - Build process - includes all of the tasks to transform developer source code into the deliverable that users run on their computers 
	  - Feedback - providing actionable feedback to developers about each of these pieces
  - The **focus** of this document is **developer feedback** par of the platform CI. The current feedback from the platform CI has a few broad issues 
	  - **It's not always clearly actionable**: developers are often told that a failure has occurred but not how to resolve it. There can be many research steps involved to determine why something failed 
    - **The feedback is not pushed to developers**: when a pull request is submitted, the CI takes an indeterminant amount of time to through all of its validation stages and there's no estimate or notification to the engineer when the process is complete 
      - There can be significant cognitive friction associated with troubleshooting CI failures especially for users who are not familiar with the stack. There is not a clear mental model new engineers can use to understand everything the CI does.
  - Developers should be able to focus on hard problems related to their domain not on understanding the platform's CI tech stack

## Typical process for deploying features 
   - Developers pull the entire code base onto their computers to make their changes. This enables them to run their application locally for testing
  - Once a change has been made locally, they bundle the changes together into a feature branch. This is a code change request that represents the differences between the main code branch (which is deployed to production every day) and their feature branch. Feature branches are part of git. 
  - Pull requests are a manual review process enabled by GitHub and are initiated by the developer through the GitHub UI. 
    - GitHub and git are separate tools. GitHub is the site that houses the git repository a and git is the tool that's used to manage changes. 
  - A pull request a business process to manage manual peer and automated system review. 
    - Peer developers are able to review the change, engage in commentary, and approve the request for merging into the master branch in the pull request UI
    - Systems can be notified about a pull request and provide change approval to the GitHub pull request process 
    - Pull requests must be both approved by peer developers and by the automated CI checks (system) before they can be merged.
  - Vets-website initiates several automated checks when a pull request is created (i.e. when GitHub notifies the continuous integration system)
    - ![Platform CI overview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/tools/blue-ocean-overview.png)
    - Platform tools - (tools that the platform team maintains. These generally run inside of Jenkins)
      - Unit tests 
      - Linting
      - Security checks 
      - Full application builds for each environment (development, staging, production)
      - Accessibility tests 
      - End to end tests 
    - Third party tools - (these run outside of our system) 
      - Code Climate - analyzes various factors and provide suggests for improving code quality 
    - All of the testing provided by the platform must be successful before a developer can merge a their feature branch. The code climate feedback is optional and is mainly to facilitate code review 
  - The Required reviews UI
    - ![Required review UI](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/tools/required-reviews.png)
    - The required reviews UI is the provides developers with an overview of the change approval 
    - It's summarizes manual and automated approvals 
    - Once all approvals are met, the developer can click the Squash and Merge button on the reviews UI to close out their pull request and merge their change into master 
    - Squash and merge is a specific type of merging supported by git - every change made to a branch is called a commit, and when a feature branch is merged into the master branch, we like to have developers "squash" their changes into a single commit before it's merged into master. This keeps the change history cleaner 
      
## Typical exception flow
- Developer is notified through the Required Reviews UI that the continuous integration failed 
    - Developer turns on SOCKS proxy and clicks details link 
    - The SOCKS proxy requires browser configuration during initial set up and is ran as a command line app in the terminal. The command is cryptic (not user friendly):  ssh socks -D 2001 -N
      - The socks proxy must be re-activated anytime the user turns off their terminal or wakes up their machine. 
- ![Platform CI exception](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/tools/blue-ocean-exception.png)
- Jenkins provides a view of each of the stages of the CI validation. The stage that failed is marked with a red x. Developers can click on that to see a log of the process that triggered the failure along with an error message
	- A few troubleshooting steps can happen at this point
		- Lint, security, and Unit tests are usually simple failures. The errors are straight forward and easy to understand and running the tests locally will always give the same result as the CI. To find the command to run, they can refer to the vets-website readme or to the log (e.g. the example above ran npm --no-color run lint). Often the developer will not want to run the command ran by the CI- the commands documented in the readme will provide better output for developers
		- Integration tests (accessibility, end to end) and build failures are generally harder to troubleshoot. Their logs can span many hundreds of lines, their error outputs usually only give clues to why something failed, and it can be unclear if the failure was caused by the developer's change or an issue with the build script itself. Usually these failures will not manifest when locally testing
    
## Common CI exception types 
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
			-  There was something wrong with an external system (e.g. querying the Drupal CMS failed). These failures are often the hardest to troubleshoot because they require a deep understanding of the build process itself. Currently our build failure logging is not very sophisticated 
      
## Summary of feedback UIs 
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
