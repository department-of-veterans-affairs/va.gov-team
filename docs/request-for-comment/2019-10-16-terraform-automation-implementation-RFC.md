### Placeholder, will work on this more tomorrow ### 

# RFC: _Necessary Implementation of Automation for Terraform Workflow(s)_

- Date: _2019-10-16_
- Related Issue: _git/terraform issue(s)_

## Background
_Explain the current state of the feature._

Currently, we are running terraform (plan and apply) from workstations manually. When a PR is opened, the expectation is that they add a `plan` output, it's approved, the change is `apply`'ed, then merged into master.

## Motivation
_Why do we want to change the current implementation? What problem(s) does the change solve?_

The workflow described above worked for a while when there were only a 2-3 engineers working really closely together. While not ideal, there wasn't a strong enough need to add additional systems for a while. With more engineers onboarded and making changes, we see a number of problems:

1. Requires a workstation have write access to prod which:
   - imits the pool of folks able to contribute
   - weakens security posture
1. Involves manual steps of uploading a plan, then doing the apply/merge in the correct order

Wrapping this workflow in some for of automation will improve our process in multiple ways. It will help increase new hire velocity enabling them to `terraform plan` even before they get direct access to AWS. It could increase overall velocity by automating a currently manual, repetitive step. Finally, it will also provide us with a means to add a step for `terraform fmt` which will keep our terraform files clean and standardized. 

Additionally, there are times where edits to infrastructure may happen outside of Terraform (for example: someone is testing a setting change in an ELB by tweaking it in dev then forgets to commit back), and when it's time to run a `plan` there's unclean state that has to be addressed first.

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
