# Incident Mitigation Plan

## Background / problem
Our codebase is monolithic and growing! As a result, it’s becoming more and more frequent that one team’s code, when deployed, breaks some other part of VA.gov. Then teams have to take the time to investigate and resolve and coordinate an off-cycle deploy, and even when they get a PR for a fix in quickly, they have to wait 1+ hours for the build to run. This has happened a handful of times recently with the Public Website team's code.

The platform has a long term strategy for how to improve this: rearchitect our codebase, implement better isolation, improve our stability, and launch autonomous / anytime deployment. BUT! The soonest element of that long term strategy is at least 6 months away. So what can we do in the interim to avoid these firedrills? What stop gaps do we need to get in place?

Folks (Mike, Michelle, Dror, perhaps others) have already been discussing interim/stop gap ideas, so this meeting is for John and I to hear those ideas, and for us to together align on a plan that we can communicate out.


## General notes

## Ideas / brainstorming
- Blue / green deploys
- Rolling back
- Visual regression testing
- Limit off-cycle deploys only to real outages or security incidents
- Daily pre-deploy go / no go
- Daily post-deploy check in
- What other ideas are there?

## Which of these are short term /stop gap ideas we could discuss getting in place within a sprint?

## Which of these are long term plans already on the roadmap?

## Which of these are long term plans that aren't on a roadmap, but should be evaluated by OCTO-DE as something we should figure out how to do?
