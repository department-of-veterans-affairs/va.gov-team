# Discovery: Github Actions + Feature Toggles

Date: 2025-06-04
Issue: [va.gov-team/issues/90205](https://github.com/department-of-veterans-affairs/va.gov-team/issues/90205)

## Overview

Removing feature toggles requires engineers to track code changes in multiple repos (vets-api and vets-website) and make sure vets-website's dependence on a feature toggle is removed in each environment before the code is removed from vets-api (and deployed).

Github CI actions and the Github CLI might allow us to search across repos for references to feature toggles, and help remind engineers to make sure PRs are taken care of in the correct order.

## Additional Context

The Cartography engineers performed this work to propose a tool that could help all teams track feature toggles more easily. Additionally, this provided an opportunity for the team to explore how Github actions work.

## Discoveries

### Github Actions

- Github offers "runners" (VMs) for Linux, Windows and macOS. Github's Linux runners are Ubuntu images, so we used [Ubuntu2404](https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2404-Readme.md)
- _Workflow_ is essentially synonymous with _action_, and _workflow_ is used more frequently in [the docs](https://docs.github.com/en/actions/writing-workflows)
- A _workflow_ can have multiple jobs, which run in parallel, and jobs consist of a sequence of steps
- There are many tools under <https://github.com/actions>, so when you see something like `uses: actions/checkout@v4` in a workflow, you should be able to find the repository that contains the code for that action, e.g. <https://github.com/actions/checkout>
- The `run` option of a step allows you to run shell commands. On Ubuntu runners, that means `bash`. For [Ubuntu2404](https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2404-Readme.md), that means _Bash 5.2.21(1)-release_. This added to the complexity of testing commands on macOS, which uses _zsh_ by default and has an old version of bash (e.g., _3.2.57_)
- Ubuntu runner images come with `jq` and `yq`, amongst many other utilities. `yq` can parse JSON and YAML files, so that was useful for looking at feature toggles
- Passing data from one step to the others involved the use of bash [here documents](https://www.gnu.org/software/bash/manual/html_node/Redirections.html#Here-Documents) and [appending redirected output](https://www.gnu.org/software/bash/manual/html_node/Redirections.html#Appending-Redirected-Output). So knowledge of shell/bash is handy
- Workflows support env variables and [context variables](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/accessing-contextual-information-about-workflow-runs#context-availability), which are [expressions](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/evaluate-expressions-in-workflows-and-actions) that get processed (like a template variable) outside of and before bash is sent a command
- `GITHUB_STEP_SUMMARY` is an [env variable](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables#default-environment-variables) used to populate a job summary. And the job summary can be written in markdown.
- When writing markdown, use `~~~` for code blocks, since the backtick, \`, is used for [command substitution in bash (and other shells)](https://www.gnu.org/software/bash/manual/html_node/Command-Substitution.html) and will be misinterpreted.

### The Github Actions Workflow

The following is a workflow that checks out `vets-api` and `vets-website`, parses each repo's respective feature toggle config file, uses [_comm_](https://manpages.ubuntu.com/manpages/trusty/man1/comm.1.html) to compare the two files line by line, then generates a markdown summary of which feature toggles exist in only repo and not the other. The `vets-website` only feature toggles are of higher interest because `vets-api` can use feature toggles internally, while `vets-website` depends on `vets-api` as the functional source of feature toggle values.

~~~yaml
name: Check up on Feature Toggles
run-name: ${{ github.actor }} is checking on feature toggles
# Controls when the workflow will run
on: workflow_dispatch
# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  search:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest
    steps:
      # Check out vets-website
      - name: Check out vets-website
        uses: actions/checkout@v4
        with:
          repository: department-of-veterans-affairs/vets-website
          path: vets-website
      # Check out vets-api
      - name: Check out vets-api
        uses: actions/checkout@v4
        with:
          repository: department-of-veterans-affairs/vets-api
          path: vets-api
      - name: Extract vets-api features
        id: vets-api-features
        run: |
          {
            echo 'FEATURES<<EOF'
            yq -o=yaml '.features | keys | sort' vets-api/config/features.yml | sed 's/- //'
            echo EOF
          } >> "$GITHUB_OUTPUT"
      - name: Extract vets-website featureToggles
        id: vets-website-features
        run: |
          {
            echo 'FEATURES<<EOF'
            yq -p=json -o=yaml '[.[]] | sort' vets-website/src/platform/utilities/feature-toggles/featureFlagNames.json | sed 's/- //'
            echo EOF
          } >> "$GITHUB_OUTPUT"
      - name: Compare feature lists
        id: compare-feature-lists
        run: |
          {
            echo 'VETS_API_ONLY<<VETS_API_EOF'
            comm -23 <(echo "${{ steps.vets-api-features.outputs.FEATURES }}") <(echo "${{ steps.vets-website-features.outputs.FEATURES }}")
            echo VETS_API_EOF
            echo
          } >> "$GITHUB_OUTPUT"
          {
            echo 'VETS_WEBSITE_ONLY<<VETS_WEBSITE_EOF'
            comm -13 <(echo "${{ steps.vets-api-features.outputs.FEATURES }}") <(echo "${{ steps.vets-website-features.outputs.FEATURES }}")
            echo VETS_WEBSITE_EOF
            echo
          } >> "$GITHUB_OUTPUT"
      - name: Report findings
        run: |
          echo "# Feature Toggle Findings" >> $GITHUB_STEP_SUMMARY
          echo ""  >> $GITHUB_STEP_SUMMARY
          echo "Comparing vets-api's features.yml and vets-website's featureFlagNames.json" >> $GITHUB_STEP_SUMMARY
          echo ""  >> $GITHUB_STEP_SUMMARY
          echo "Using 'comm' to select lists of feature toggles unique to vets-api or to vets-website. Common lines are ignored." >> $GITHUB_STEP_SUMMARY
          echo ""  >> $GITHUB_STEP_SUMMARY
          echo "## Flags only in vets-website featureFlagNames.json" >> $GITHUB_STEP_SUMMARY
          echo ""  >> $GITHUB_STEP_SUMMARY
          echo "~~~"  >> $GITHUB_STEP_SUMMARY
          echo "${{ steps.compare-feature-lists.outputs.VETS_WEBSITE_ONLY }}" >> $GITHUB_STEP_SUMMARY
          echo "~~~"  >> $GITHUB_STEP_SUMMARY
          echo ""  >> $GITHUB_STEP_SUMMARY
          echo ""  >> $GITHUB_STEP_SUMMARY
          echo "## Flags only in vets-api features.yaml" >> $GITHUB_STEP_SUMMARY
          echo ""  >> $GITHUB_STEP_SUMMARY
          echo "~~~"  >> $GITHUB_STEP_SUMMARY
          echo "${{ steps.compare-feature-lists.outputs.VETS_API_ONLY }}" >> $GITHUB_STEP_SUMMARY
          echo "~~~"  >> $GITHUB_STEP_SUMMARY
          echo ""  >> $GITHUB_STEP_SUMMARY
          echo ""  >> $GITHUB_STEP_SUMMARY
~~~

## Next Steps

The workflow created during this discovery is useful, but there's more that could be done. Adding a code search using [ripgrep](https://github.com/BurntSushi/ripgrep?tab=readme-ov-file) was part of the experiment, but ran into issues that we didn't have time to resolve. The Github API didn't appear to support code search during brief research.

The Cartography engineers discussed multiple possible improvements:

- Some sort of code search that reveals where the "orphaned" toggles are (or are not) used. Some potential approaches:
  1. Hack together a Github search URL, perhaps using the web interfaces support for regular expressions.
  2. Research Github's GraphQL API and `gh` cli capabilities, see if its possible to do a code search using those tools.
- Make "orphaned" feature toggles a deploy blocker. If we can identify committer's team, maybe we can make that team address their "orphaned" toggles?
- Post a report to a dashboard, slack channel, or other place for visibility
- Apply this knowledge of feature toggles from both `vets-website` and `vets-api` to PR review. How might we identify when toggle addition/removal might lead to issues?
