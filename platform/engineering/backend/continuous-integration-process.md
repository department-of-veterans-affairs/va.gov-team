# vets.gov Continuous Integration Process

[Continuous Integration](https://www.thoughtworks.com/continuous-integration) is a cyclical development process consisting of the following steps:

1. Select the feature to work on
1. Create feature branch
1. Code new functionality
1. Write tests for new functionality
1. Submit pull request
1. Run unit tests and compliance scans (kicked off when a pull request is created)
1. Test and peer review code (read: code review)
1. Merge code to stable code base

_Note: The following steps are typically preceded by some level of prototyping and user/stakeholder validation._

When the last step is performed, the developer begins this process anew with another feature (why it is considered cyclic).

The workflow that we use closely resembles [GitHub Flow](https://guides.github.com/introduction/flow/).

Before the developer gets their hands on an issue, it first needs to be created, groomed by the team leads, and prioritized in Zenhub. See [How to File Bugs, Tasks, and Questions]() for more information on that process.

## Select the feature to work on

In Zenhub, find the highest-priority ticket from the Current Sprint column you can work on. Assign it to yourself if it isn't already and move it to In Progress. If there's nothing left for you in Current Sprint, grab the highest-priority ticket you can work on from Ready.

## Create feature branch

Each project's code base has a branch called `master` by default. Anything in `master` is deemed to be stable and deployable.

When work on a new issue or feature is started, the developer should start by creating a new feature branch based on `master`. Since most new work derives from a GitHub Issue, it's recommended to suffix your branch name with the issue. For example, if you're working on a feature to collect a veteran's address as detailed in Issue #25, you might call your issue `address-i25`.

## Code new functionality

Write the code for the new feature! This is often the fun part. :-)

It's very helpful if you restrict the scope of changes to only the issue/feature that you're working on. For example, you might see some code you can cleanup along the way and decide to change it. However, this increases the scope of your changes and increases risk if your commits/feature need to be rolled back (and the rollback pulls other things with it). It also helps your code reviewer, because they aren't left wondering how a tangential change impacts the feature promised by the pull request.

As you code your changes, commit changes to your feature branch. Commit early. Commit often.

## Write tests for new functionality

The only way to quickly know if your new change breaks the existing functionality of the application is to have a suite of automated tests that execute whenever new stuff is added. When you add new functionality, new tests are required so that future developers know if they have broken your contributions.

There are two kinds of tests you might add:

- Unit: Tests a specific method or very granular piece of the code base.
- Integration: Tests how your code interacts with other units of code. Example might be testing your method indirectly via a caller or doing an automated web UI test (like in Selenium, etc.)

Additionally, you should configure compliance-based tests to work with your new feature. For example, if you run an automated 508 compliance test, you should configure the test suite to hit the new or existing URLs added by your contribution.

These tests will get automatically executed in the next step, but your should run them locally before moving on.

This step can be swapped in order with "Code new functionality" a la test driven development (TDD) if that works best for a team. This works great for environments that have really clear acceptable criteria and have their functionality already vetted via prototype usability tests. TDD does not work great when functionality's business criteria is vague or uncertain, since you'll be writing tests for things that are likely to change immediately (and there's repeated wasted time).

What's more important than the ordering is that your new functionality has automated tests written that match acceptance criteria and boundary conditions prior to submitting a pull request.

Also before submitting the pull request, the developer has run the automated tests and they pass.

## Submit pull request

At this point all your code is committed to the feature branch. Additionally, you should sync your feature branch with changes from the `master` branch to incorporate work that has been done concurrently.

Once that is done, you can submit a pull request indicating that your code is ready for review.

Make sure to assign a fellow team member who you feel is qualified to review the code (this prevents the pull request from just sitting).

Depending on the type of work done, you may need a product person to review and / or a developer to review. See [Code Review Norms](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/code_review_guidelines.md) for more information on how we do code reviews.

**Connecting pull requests's**: In the PR, there is a "Connect this pull request with an existing issue" section at the bottom of the issue. Click the "Connect with an issue" button to link the PR to the original issue in Zenhub.

Once your pull request has been submitted, move the ticket and with the connected PR into the Validate column to indicate it's ready for review.

## Run unit tests and compliance scans

Unit tests for pre-existing functionality and your new tests will get executed. This will tell you if you've broken any existing functionality and if your tests execute within a non-local environment. If things fail, the test run will give you context on what broke and what needs to get fixed.

Because these tests are isolated to small chunks (units), these tests should execute quickly and modularly such that you have a rapid litmus tests for if your code has broken existing functionality. This increases confidence that your new code has not broken anything.

In addition to traditional unit tests, several compliance scans will run. These are essentially static code analysis tools that can detect issues with the code base. Here are things that need to be run examples:

- Security: This scans a code base for common security problems.
- Code Coverage: An automated testing suite can only reliably tell you if your app is still working after changes if enough of it is covered by automated tests. A code coverage scanner makes sure xx% of the application is always covered.
- Linting: This checks your code for clean style or easy to catch syntactic errors. This helps make the code more maintainable by helping make the code itself idiomatic and consistent looking across modules.

Note that integration tests and 508 compliance tests are not run during this phase, but are run in a later process during the [Deployment Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/deployment.md).

## Test and peer review code

This is an often ignored step, but is **EXTREMELY** important and catches a large number of issues if performed fully. You can think of this in two parts (below). Both are to be performed by someone other than the developer(s) of the new feature.

The below phases may involve back and forth responding to feedback, where the developer is committing updates and then performing the part again.

### Testing

This can involve some separate things:

- Making sure the functionality works in the web browsers users are most likely to use
- Run the code on production-like environment. This could be done by spinning up a cloud instance that resembles production, or launching a container that is production like (such as a Docker image, etc.)
- See if there are there any bugs or unexpected nuisances that users might encounter
- Does it meet the requirements?

### Code Review

Every pull request comes with an attached diff to see what's new. Look for things like:

- Is the code understandable/legible?
- Is the code idiomatic?
- Are there any security problems with the implementation?
- Are there any performance issues?
- Does this duplicate functionality elsewhere? Does it make use of libraries/frameworks when possible?
- Are errors handled?
- Do the tests adequately cover the new code?
- Is there documentation for any new setup/configuration steps?

Also see our team's [code review norms](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/code_review_guidelines.md) for more details.

## Merge code to stable code base

After all feedback from testing and code review is responded to and the developer and reviewer are in agreement that the code is satisfactory (including re-running automated tests and needing them to pass), it's time to merge the code from its feature branch into the `master` branch.

## Additional Steps for Third Party Contributions

Being an Open Source project there is also a possibility that the above steps will be done by a third party. Because we limit the testing infrastructure to only executing tests on internal branches there are a few additional steps that must take place to incorporate these changes into our CI pipeline. 

After all tests and peer review has been completed a member of the team will need to create a branch and manually merge in the proposed changes. They will then need to close the original PR and create a new PR from their branch. This will allow the testing infrastructure to trigger automated testing on the propsed work. Once that testing in complete a second internal team member will be required to approve the work and merge it into the `master` branch
