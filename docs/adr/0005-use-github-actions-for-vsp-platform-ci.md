# 5. We will not use CircleCI for Platform CI

Date: 2021-02-16

Whom:
- Demian Ginther
- Jesse House
- Michael Fleet
- Dror Matalon
## Status

Accepted

## Context

[Slack discussion thread](https://dsva.slack.com/archives/C01CJV0L9PS/p1612651359029600?thread_ts=1612651359.029600&cid=C01CJV0L9PS).

### CircleCI + VA Security

CircleCI as implemented with VA restrictions does not allow easy management of permissions on ‘Contexts’ which contain credentials which are available to the entire ‘department-of-veterans-affairs’ Github Org. Although they are not displayed in plaintext in the CircleCI UI, they are obtainable in plaintext by running a build in CircleCI and using SSH to connect to your in-progress build, and outputting ENV variables. If the entire Org has access to the context, there is no way to stop anyone in the Org from doing so.

In addition, CircleCI as implemented with VA restrictions does not allow use of ‘third-party’ Orbs (reusable code) which means that we cannot publish our own Orbs either.

These two items are not preventing the use of CircleCI completely, as it is still possible to manage per-project secrets (only available to those with Github permissions on that repo) and you are free to cut and paste code from one workflow to another to re-use code, however, _it makes managing multiple repos that have similar functions very tedious, and error prone_.

In addition, managing the secrets per-repo means that if the Operations team wanted to rotate the credentials for that repo, they would have to use the CircleCI UI to change all of those credentials, one project at a time.

### Demian Shares The Thought Process

I have been evaluating multiple options for CI at this point and I think the best use-case for Operations is Github Actions, however, I have come to the conclusion that there would be no reason an application team could not use CircleCI, and manage the secrets in their own repo level secrets. There is also no reason that an application team could not use their own CI server that they manage, like CMS Tugboat does, or if they love Jenkins and want to use it, they can run their own Jenkins server somewhere.

I think our platform will strive to be CI-agnostic, but we will 100% provide examples of how to interact with ArgoCD, which WILL be required in the workflow

this has the benefit of removing Kubernetes credentials and interaction from the application teams completely. the Operations team will document what ArgoCD wants to receive as input, and how the team can make that input, and then Argo is the only place outside of members of the Operations team that has credentials to make changes to EKS clusters.

the application teams will also be able to log into ArgoCD and see their applications in Argo, along with logs and events that will help them troubleshoot their applications and deployments.

### Which CI Solutions For Whom?

Just to be clear, we're talking about CI for 3 groups:

1. VSP
2. VFS teams building on VSP
3. Others: CMS, VA Notify, etc.

For group 3 I can see being agnostic. For groups 1 and 2, I think we should be consistent so we can support the VFS teams.
For group 2, we will provide examples and best practices

and we will support VFS teams in building those
but I don’t want to REQUIRE them to use a particular process

I will strongly recommend to them that they use the process we build for them and my team will help them build it, absolutely.
what I’m saying is that if they love Circle and want to use it, we can support that

as long as they manage their own project-level credentials

## Decision

Use GitHub Actions for VSP Platform CI.

## Consequences

the problems with CircleCI for the Operations team is that we have many repos and managing those credentials at the repo level across all of those, as well as managing them all as separate pieces of code (when in reality they are 99% similar) is tedious, error prone, and makes Circle a bad fit (as long as the VA maintains those limitations)
Github Actions is, I think, the best option.
### Platform CI Vision

Each application has it’s own repository, it’s own ECR repo, and it’s own AWS user, with limited permission scope (able to push and pull from the application’s ECR repo, able to read parameters from only their path in Parameter Store). That AWS user has a token which is in Github Encrypted Secrets, managed by the application team. Any further secrets needed and variables for their application, are pulled from Parameter Store.

the Operations team manages these AWS users, ECR repos, and Github repos (using the Github terraform provider) with Terraform, as IaC. (edited)

that eases the lift on the Operations team because we can manage all of this using the tool we already use, we manage the permissions on the github repos by the github teams that already exist, and we scope the credentials we put on the repo to limit any blast radius.
### Other tools that were considered

Drone.io is really cool, but in the end too simple for our need.

Concourse-ci is also a great tool but almost as complex as Jenkins, with a steep learning curve

I had a demo of GoCD from some folks at Thoughtworks that Karl Brown got me in touch with and it is an amazing CI tool, miles ahead of Jenkins, but also very complex, and overkill for our needs

Jenkins is not viable for a number of reasons, not the least of which is the maintenance of the tool


AWS CodePipeline/Codebuild was also considered, but in order to use that, the Operations team would have to write all the projects, etc, in Terraform, which would increase the management load for my team
