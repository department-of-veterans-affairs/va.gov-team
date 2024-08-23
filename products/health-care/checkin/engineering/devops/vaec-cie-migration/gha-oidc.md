# GitHub Actions and OIDC Authentication

## Introduction

We have updated our GitHub Actions workflows to use OIDC (OpenID Connect) authentication rather than access keys. 

Using access keys means we need to copy secrets, something like a username and password, into another system; they're usable from anywhere, by pretty much anyone. We have guidelines for rotating access keys, which means repetitive toil and a repeated risk of exposure. 

OIDC, by contrast, is based on the trust between AWS and GitHub; there are no credentials to rotate, the role in question can be assumed only by the repository (and optionally branch) we specify, and the role can be crafted to permit only the actions we require.

This document details how this is accomplished.

## OIDC Provider

The first step is to have an OpenID Connect Provider for GitHub Actions. This specification takes the following form:

```json
{
    // The URL uniquely identifies the identity provider.
    "Url": "token.actions.githubusercontent.com",
    // A list of AWS services that can use this identity provider.
    "ClientIDList": [
        // AWS Security Token Service, which provides temporary
        // credentials for AWS accounts.
        "sts.amazonaws.com"
    ],
    // A list of cryptographic identifiers that are used to verify
    // the authenticity of incoming requests from GitHub.
    "ThumbprintList": [
        "6938fd4d98bab03faadb97b34396831e3780aea1",
        "1c58a3a8518e8759bf075b76b750d4f2df264fcd"
    ]
}
```

This allows AWS to identify an identity provider, verify its requests, and match that identity provider up with specific services that it can access.

## IAM Role and Assume Role Policy

To allow actions within our AWS account to be performed by or on behalf of a GitHub repository, we need to define the actions that can be taken. We do that by creating an IAM role and attaching IAM policies to it. For instance:

```json
{
    // Paths can function as "namespaces" used to segregate roles
    // and policies for controlling access and capabilities.
    "Path": "/project/",
    // The unique, human-readable identifier for the role within
    // this AWS account.
    "RoleName": "project-checkin-devops-dev",
    // A globally unique identifier for the role.
    "Arn": "arn:aws-us-gov:iam::245325432245:role/project/project-checkin-devops-dev",
    // The policy defining which entities can assume this role, and
    // under what conditions.
    "AssumeRolePolicyDocument": {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Principal": {
                    // Allow entities to assume this role via the OIDC provider above.
                    "Federated": "arn:aws-us-gov:iam::245325432245:oidc-provider/token.actions.githubusercontent.com"
                },
                "Action": "sts:AssumeRoleWithWebIdentity",
                "Condition": {
                    "StringEquals": {
                        // Require the request tp specify that it is using the Simple
                        // Token Service (STS).
                        "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
                    },
                    "StringLike": {
                        // Only permit this role to be assumed by the repository
                        // `checkin-devops`, owned by the VA's GitHub account. Any
                        // branch of the codebase can assume this role.
                        "token.actions.githubusercontent.com:sub": "repo:department-of-veterans-affairs/checkin-devops:*"
                    }
                }
            }
        ]
    }
},
```

We can then attach IAM policies to that IAM role to allow GitHub Actions finely-grained access to our AWS account:

```json
{
    "AttachedPolicies": [
        {
            "PolicyName": "AWSCodeBuildAdminAccess",
            "PolicyArn": "arn:aws-us-gov:iam::aws:policy/AWSCodeBuildAdminAccess"
        }
    ]
}
```

## GHA Workflows and Role Assumption

With this in place, we can use a GitHub Actions workflow like the following to assume the role and perform actions as needed:

```yaml
name: Continuous Integration
on:
  # Run this workflow on pull requests targeting the `main` branch.
  pull_request:
    branches:
      - main
  # Also run this workflow manually, at the click of a button.
  workflow_dispatch:

# Explicitly grant this workflow permissions to access the id-token,
# which is necessary to use OIDC authentication.
permissions:
  id-token: write
  contents: read

env:
  # The role that this workflow wishes to assume.
  AWS_ROLE: "arn:aws-us-gov:iam::24524524532:role/project/project-checkin-devops-dev"

jobs:
  perform-some-action:
    name: "Perform some action"
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@692973e3d937129bcbf40652eb9f2f61becf3332 # v4.1.7

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@e3dd6a429d7300a6a4c196c26e071d42e0343502 # v4.0.2
        with:
          role-to-assume: ${{ env.AWS_ROLE }}
          role-skip-session-tagging: true
          aws-region: us-gov-west-1

      ...
```

## References

To see this approach in action, see:

- [An IAM Policy and Role in Terraform for Vista API](https://github.com/department-of-veterans-affairs/checkin-devops/blob/main/terraform/modules/iam/octo-vista-api.tf) -- A role with Elastic Container Repository-specific permissions, assumable via OIDC
- [An IAM Policy and Role in Terraform for System Tests](https://github.com/department-of-veterans-affairs/checkin-devops/blob/main/terraform/modules/iam/system-tests.tf) -- A role with broader read-only permissions and narrowly focused AppConfig-related permissions, assumable via OIDC
- [A Composite GitHub Action for Post-Checkout Tasks](https://github.com/department-of-veterans-affairs/checkin-devops/blob/main/.github/actions/post-checkout/action.yml) -- Assumes the role passed to it, installs dependencies that span common workflow operations, and returns information useful to other workflows.
- [A Composite GitHub Action for System Tests](https://github.com/department-of-veterans-affairs/checkin-devops/blob/main/.github/actions/system-tests/action.yml) -- Performed on self-hosted runners within a secure VPC, this needs to make VA TLS certificates available to our processes to ensure secure communication across network boundaries.
- [A System Tests Workflow](https://github.com/department-of-veterans-affairs/checkin-devops/blob/main/.github/workflows/system-tests.yml) -- Gathers the essential information to plan system tests, including passing the role to assume into the composite action.
