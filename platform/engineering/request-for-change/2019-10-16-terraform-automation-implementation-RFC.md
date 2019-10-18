### Placeholder, will work on this more tomorrow ### 

# RFC: _Necessary Implementation of Automation for Terraform Workflow(s)_

- Date: _2019-10-16_
- Related Issue: _git/terraform issue(s)_

## Background
_Explain the current state of the feature._

Currently, our terraform plans are gathered through a manual step that requires someone with access to `terraform plan`, copy the output, and paste it into a PR. There are two issues with that flow:

1. Requires someone with access. 

2. Involves manual steps.

## Motivation
_Why do we want to change the current implementation? What problem(s) does the change solve?_

Wrapping this workflow in some for of automation will improve our process in multiple ways. It will help increase new hire velocity enabling them to `terraform plan` even before they get access to AWS. It could increase overall velocity by automating a currently manual, repetitive step. Finally, it will also provide us with a means to add a step for `terraform fmt` which will keep our terraform files clean and standardized. 

## Design
_Explain the proposed changes in enough detail so that a team member with working knowledge 
of the project could implement the change themselves. Bonus points if this is easily mappable
to user stories or specs._

The design changes would involve implementing some form of automation that would see a new PR comparing a branch to master, run a `terraform fmt` to clean up extra or missing spaces / ensure standardized syntax, run a `terraform plan`, and paste the output of the plan to the PR as a comment. 

## Risks
_What are the risks of the proposed changes?_

## Alternatives
_What other alternatives solutions were considered, why weren't they chosen?_

Currently looking into / weighing options on:
 - [Atlantis (runatlantis.io)](https://www.runatlantis.io/guide/)
 - [Terraform cloud](https://www.terraform.io/docs/cloud/index.html)
 - [Terrahub.io](https://www.terrahub.io/index.html)
