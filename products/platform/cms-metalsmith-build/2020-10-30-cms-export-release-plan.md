# CMS Export Build Release Plan

## Pre-release

1. Establish a rollback plan for each phase.
   * Provision separate S3 buckets for the CMS export builds in each environment.
      - Route the site to the CMS export build bucket when we're ready.
      - Route the site back to the GraphQL build bucket if we need to "roll back".
      - Will it suffice to have just one bucket to be re-used at each phase? Is that much easier to manage?
      - How fast would rev-proxy changes take effect?
      - How much of a burden will it be on Ops to coordinate with us?
   * As a fallback, prepare PRs to revert the switch to CMS export for the relevant environment.
2. Develop a test for comparing build outputs in Jenkins.
   * Test script will probably work similarly to the diffs used during development.
   * Could potentially make it more sophisticated by checking DOM equality rather than just comparing content hashes.
3. Plan a secondary or follow-up test if the automated test is inadequate for catching regressions.
   * This will probably be a manual test. Unless we think there might be value in Cypress tests for (some of) these?
   * For visual and functional validation, compile a list of pages with interactive elements like widgets.
   * Choose among any number of pages that use the `data-widget-type` attribute.
   * Pages that fail the automated validation might also be candidates for this follow-up validation.
   * This mainly covers pages that need validation beyond having matching static content.
4. Figure out how to auto-deploy content.
   * CMS team suggested deploying every 5 minutes.
   * Known unknown; specifics to be explored later.

## Release

Follow these processes at each phase in a three-phase process. Each phase will take a week (?).

The phase will correspond to the targeted environment, which is one of the following in order:
- Dev (vagovdev)
- Staging (vagovstaging)
- Production (vagovprod)

Consider doing the preparation step as pre-release to make sure it will work as expected.

### Preparation

Start of day 1.

Modify Jenkins pipeline to include the CMS export build for the targeted environment.

1. Run GraphQL and CMS export builds in parallel with GraphQL still as the default.
2. Upload the CMS export build to its own bucket.
3. Revise the content auto-deploy job for this environment to run every 5 minutes.

### Initial validation

Middle of day 1.

After incorporating the CMS export build into Jenkins, do the following validation after the build completes.

1. Run the test script to compare build outputs for that targeted environment.
   * This might run in Jenkins, but doesn't necessarily need to if we want to avoid the pain of dealing with Jenkins.
   * If they don't match, do we fail the build? Maybe Slack notification is less intrusive?
   * If the test is prone to false positives, maybe it shouldn't explicitly fail the build.
   * If results don't automatically alert, maybe we'd monitor the results manually.
   * Preferably, instead of messing with Jenkins, we could run the test locally by pulling the latest builds.
2. Review the results of the equality check and decide whether to switch the buckets.

### Rollout

End of day 1. Start of day 2.

Roll out the CMS export build to the targeted environment. Communicate to teams.

1. Create a PR to switch to the CMS export bucket.
2. At the start of the next day, merge the PR.
3. Once the change is merged, also prepare a rollback PR.
4. Notify teams that content pages are now based on the CMS export.

### Continuous validation

Days 2-5.

Validate content and functionality throughout the week.

1. Run the test script once a day (before standup?) and determine if there are significant failures.
2. Perform visual or functional checks on the set of pages chosen for the follow-up validation.
3. Repeat the validation process for a week.

### Rollback

Days 2-5.

1. Merge the PR that was prepared to revert the bucket change.
2. Resolve issues and repeat the validation process in the same environment (or start over at dev?).

### Conclusion

If no significant issues were found, repeat the same processes in the next environment.
