# GitHub Apps

This document is for GitHub Apps used by the Check-In Experience Team.

## [VA.gov Check-In Experience DevOps](https://github.com/organizations/department-of-veterans-affairs/settings/apps/va-gov-check-in-experience-devops)

**App ID**: 979473
**Description**: GitHub App for DevOps-related functionality on and around the Department of Veterans Affairs' Check-In Experience team.

This App is used primarily to generate GitHub tokens for use with Check-In Experience infrastructure and API operations that should not use a user-specific PAT (Personal Access Token).

The [`cie-github-actions`](https://github.com/department-of-veterans-affairs/cie-github-actions/) Action [`get-github-token`](https://github.com/department-of-veterans-affairs/cie-github-actions/blob/main/get-github-token/action.yml) can be used from any workflow in a `department-of-veterans-affairs` repository. 

```yaml
  - name: Setup GitHub Token
    id: get-github-token
    uses: department-of-veterans-affairs/cie-github-actions/get-github-token@main
```

Following this action, the GitHub token stored in its output can be used with other actions to perform some authorized tasks, e.g. checking out private repositories, making certain API calls, etc.

```yaml
  - name: Break Terraform lock
    working-directory: "terraform"
    env:
      GITHUB_TOKEN: ${{ steps.get-github-token.outputs.github-token }}
    run: terragrunt force-unlock -force ${{ inputs.lock-id }}
```

Because it retrieves the GitHub App ID and private key from AWS Secrets Manager, the workflow needs to have appropriate AWS access configured already.
