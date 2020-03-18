# Local Development with Review Instances

Reviewing your changes is an integral part of front-end development. Usually, that involves running a build that's integrated with the API and interacting with it to see the actual results.

[Review instances](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/backend/review-instances.md) are one of the tools we have to facilitate this workflow. They're useful because you can review your changes in a staging-like environment (with integrations to actual external services) without needing to set up a local build of `vets-api`. The downside is that it does take time to build a new instance once you create a pull request or every time you commit new changes to the feature branch.

The good news is that it's possible to locally review your changes against the review instance. As long as you've already pushed your branch to remote, you can start testing out your changes before even creating a pull request.

## Workflow

After pushing your feature branch, run the following command in your local checkout of `vets-website`:

```
yarn watch:review
```

> What this does is figure out the URL for the review instance's API and use reference it in the build wherever requests are made to the API. This is effectively the same as the following command, but you don't have to create a pull request or crawl through Jenkins logs to find the review instance URL.
> ```
> yarn watch --api="<API_URL>"
> ```

If the build and deploy for the review instance hasn't completed yet, the script will return an error message with a possible reason for why the review instance is not ready yet (e.g., `'No deployments found. Build is probably in progress.'`).

If the review instance is ready, you're free to make any changes to your build and see the results of interactions with the review instance API.

