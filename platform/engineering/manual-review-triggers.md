# Triggering a manual review

----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/Triggering-a-manual-review.1846083890.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

Each PR on `vets-website` will run through an automated process which looks for code additions/modifications
which could be considered bad for the platform.  If a potential issue is found, a bot will leave an
automated comment and request a review from the **platform-release-tools**.

## Triggers

Any of the following items if found in a PR diff will prompt a manual review

- A call to `Sentry`
- ESLint being disabled
- An icon being added with `<i ...`

## Adding a new trigger

The automation right now only supports triggers in the form of regular expressions.
If you can represent your trigger in the form of a regular expression then all you should need to do is add a bit of YAML config.

In the [CircleCI config file](https://github.com/department-of-veterans-affairs/vets-website/blob/master/.circleci/config.yml) there is a `workflows` section that has an array of `jobs` inside the `flag-for-manual-review` key:

```yaml
workflows:
  version: 2
  flag-for-manual-review:
    jobs:
      - eslint-check:
          filters:
            branches:
              ignore: master
     ...
```

Each of these jobs has its own specification up in the `jobs` section of the YAML config. There is some boiler-plate config that must be included, but to add a new trigger you will only need to change three environment variables:

- `CODE_PATTERN`
- `OVERALL_REVIEW_COMMENT`
- `LINE_COMMENT`

Here is a sample template:

```yaml
jobs:
  my-review-trigger: # This name must correspond to the name used in the `jobs` list in the `flag-for-manual-review-workflow`.
    docker:
      - image: circleci/node:10.18
    environment:
      CODE_PATTERN: # the regex that will trigger a review
      OVERALL_REVIEW_COMMENT: >
        # An overall multiline, markdown-enabled comment left by the review bot
      LINE_COMMENT: # The comment left on each individual line where the bot was triggered
    steps:
      - checkout
      - run:
          name: Install dependencies
          command: yarn install
      - run:
          name: Try Diff
          command: npm run pr-check
```

Once you have added your new job, make sure that the `flag-for-manual-review` workflow knows to include it.

### Sentry calls

We review logs to Sentry to ensure that any new logs will be useful and will not contain PII.

Examples:
- Don't log an entire request response if all that's important is an error code
- Don't log user-identifying information such as names, emails, or user IDs

### Disabling ESLint

We have various ESLint rules in place to help improve code quality.
Disabling ESLint rules will be evaluated on a case-by-case basis.

### Adding icons

We use Font Awesome as a dependency, which uses the `<i>` tag for adding icons. Sometimes an icon is used purely as decoration, but other times it is used to convey meaning to the user.

We review to ensure that whenever an icon is being used semantically, those semantics are also conveyed to a screen reader.


## Required Environment variables

The script relies on some environment variables.

### Provided by Circle by default
-  `CIRCLE_PROJECT_REPONAME`
-  `CIRCLE_PROJECT_USERNAME`
-  `CIRCLE_PULL_REQUEST` (link to the PR -used to get PR number)

### Configured in the Circle UI
- `BOT_NAME`
  - This isn't sensitive, but it made sense to pair it with the auth token
- `GITHUB_TOKEN`
  - An Oauth token used to make calls to the Github API

### YAML config
- `CODE_PATTERN`
  - Regex pattern which will trigger a review comment if found
- `LINE_COMMENT`
  - Review comment for an individual line comment
- `OVERALL_REVIEW_COMMENT`
  - Review comment for the whole review
