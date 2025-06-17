Associated issue
[11045](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/11045)

# 0. 🤖 Introduction

This task is designed to gather the research and ideas of testing github actions so we no longer

- Notify stakeholders of tests on accident
- Adding more errounous workflows in the production workflow while testing
- Sharing the same secrets across both platforms
- Creating additional noise with all the the above mentioned.

# 1. ☑ Options

There are currently 2 viable options for this task.

## 1a. Create a workflow action library

This option will allow us to create a separate and maintainable repository that will contain just the workflow actions. From here we will be able to test the workflows and allow them to be consumed by other teams. The teams can call these reusable workflows from their repositories with the current major release tag at the end of the code line
`uses: ./.github/workflows/workflow.yml@v1`. the `v1` will remain the floating tag for all `1.x.x` versions. This will allow us to these the minor versions before committing them to production. It will also mean that the teams using this workflow will not need to update theitr version for incremental changes. When there is a major change, we will update to `v2`, `v3`, etc. This version can be stored in a github repository variable called `WORKFLOW_VERSION`. The new run command would look like this,
`./.github/workflows/workflow.yml@${{ var.WORKFLOW_VERSION}}`.

The secrets will need to be maintained at the repo level. Experience teams will have to manage their own secrets. The test repo (or tag) can use AWS ssm as the secrets manager. Once this is proven to be successful, then we can work to implement this across the board.

### Notes

- Where to test and build. Test in the test repo and then push to the prod repo? Do all testing directly in the library?
- Test in the library on a tag?
- Can you tag before committing everything? Or work in a branch and tag at the end?
- Create 1 aws secret and try to decrypt locally with the AWS cli.
- Try to create the secret with the role provided. If local fails, try a test pipeline run.
- Maybe push up to GitHub Marketplace?

## 2a. Add `is_test` syntax to the workflow

This option allows us to create a clause `is_test` at the top of the workflow. With this we will have a switch that shows this is a test workflow. From here we can isolate anything related to testing within our current workflows.

### Notes

- A parameter called `is_test` will need to be created in all workflows at the top level. This parameter will need to be called by each job.
- Workflows will most likely need to be re-written to handle this step. We will want it to do one thing for `is_test: true` and another thing for `is_test: false`.

# 2. 💡Summary

Out for the 2 options, option 1a seems to be the best canidate. We will be able to create actions separated from the repository. This will allow to manage them externally by tag and give us the ability to tag in the same way. This flow will give us the isolation we need to test these workflows and the ability for other teams to use them as well.
