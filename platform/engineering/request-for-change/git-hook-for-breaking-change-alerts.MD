# RFC: Git Hook For Breaking Change Alerts

- Date: 2020/02/25

## Background
Currently while developing code for the VA.gov codebase there are several breaking changes committed to our code per month. A breaking change being something that stops a developer from writing code in order for them to have to run commands to update and fix their local development environment.
Since we have so many developers pusing code to our codebase per day these breaking changes tend to get buried and it is up to the developer to research or seek out a fix.
It would save a lot of time if we impliment a git hook to alert the developer of exactly what changed and exactly what steps to follow to fix it.

## Motivation
This would be a big time saver for our developers. Our mission here is to provide as much value for Vets as we can and every
minute we spend fixing our internal tools is a minute we can't spend providing value for Vets.

## Design
This would most likely be a good candidate for the `post-merge` hook on local environments. Using this hook we can look at
what files are changed by pulling the codebase and if certain files are changed, i.e. files that would include obvious 
breaking changes, we can give instructions on how to fix issues caused by the breaking changes. For example, if a change
was made to the `yarn.lock` file we can tell the user that this file was changed and that they will most likely need to -

1. Stop their local environment
2. Run `yarn install`
3. Restart their local environment

We would want to basically watch for changes in any file that can break a developer's local environment, i.e. all of the files
directly in the root of `vets-website` and all of the files directly in the root of `vets-api`. 

A nice to have would also be a git hook on the server that can send a Slack message to #vfs-platform-support telling developers
about the breaking change so that they can be on the lookout for it.

## Risks
The risks are minimal however since we already use git hooks using them for this scenario could lead users to get overwhelmed
and ignore our messages from git hooks altogether. 

## Alternatives
We could also impliment a specific Slack channel for breaking change notifications however most of our developers already
belong to numerous Slack channels and have turned off notifications for them. It is also very easy for a Slack notification
to get buried since we get so many of them a day.

We could have the developers send out an email to the other engineers telling them about the change however this could add
additional work to our developers' already heavy workload. It would also be quite easy for these emails to get buried as
many of our developers get many emails per day.
