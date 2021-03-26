# Incident Mitigation Plan

## Background / problem
Our codebase is monolithic and growing! As a result, it’s becoming more and more frequent that one team’s code, when deployed, breaks some other part of VA.gov. Then teams have to take the time to investigate and resolve and coordinate an off-cycle deploy, and even when they get a PR for a fix in quickly, they have to wait 1+ hours for the build to run. This has happened a handful of times recently with the Public Website team's code.

The platform has a long term strategy for how to improve this: rearchitect our codebase, implement better isolation, improve our stability, and launch autonomous / anytime deployment. BUT! The soonest element of that long term strategy is at least 6 months away. So what can we do in the interim to avoid these firedrills? What stop gaps do we need to get in place?

Folks (Mike, Michelle, Dror, perhaps others) have already been discussing interim/stop gap ideas, so this meeting is for John and I to hear those ideas, and for us to together align on a plan that we can communicate out.


## General notes
- We don't have really any QA standards
- We're light on QA, we have 20 different ways we do automated testing, but we have 1 QA person for all of the teams on the VSA contract
- This is relec of vets.gov times when teams were scrappy and PMs, engineers, designers would share the QA burden and review their stuff as a part of the ZenHub pipeline before a story would get released
- Do we need culture change wrt QA?
- Do we want to go after a crowd-sourcing QA solution?
    - We could use an outside service since VA.gov is public, similar to Perigian
    - Maybe some AI methods as well
- Deploy jobs to staging were backed up a ton, so you merged something into master and a couple hours later you look in staging and that merge has not appeared on staging yet. So you look at staging and everything looks cool good on staging, but you haven't actually seen your merge there yet.
    - Staging here means we can have certain feature flags on that we don't want on on production. Staging = master, but not deployed once a day and with feature flags.
    - Staging deploy goes at 9 am, people expect to see their stuff on staging at 10 am and then be able to check it prior to the 2 pm production deploy
    - They're both master branch
- We do have automated testing abilities to catch the things that have been issues lately, but the tests don't exist. 
    - Well we do, but it's only a smoke test and we need to also have it as a build test

## Ideas / brainstorming
- Manual process / workaround for "staging" to prevent un-reviewed things from going live
    - "do not release until X person has seen it and tried it"
    - give OCTO-DE visibility into what is getting deployed
    - add that check into the acceptance criteria templates
    - Public Websites team is going to experiment with a possible process there
- Move some tests from smoke tests / monitoring to e2e / build automated tests
    - Do an audit for critical features that need to be covered by automated build tests, and then assign to appropriate teams to write them.
    - Some kind of process around making sure VFS teams are actually writing automated build tests for things that failed / broke as a part of the post mortem action item. Do we need to add language to the post-mortem documentation? How do we make sure ppl are doing that action item?
- Blue / green deploys or rollback functionality
    - We do have a way to do rollbacks or hot fixes, but they're not documented super well and not sure if anyone knows about these
    - There's an issue with the way google analytics schemas are architected that means we can't use the rollback functionality
    - Figure out what about analytics is making rollbacks not possible, or if there's something else making them not possible, and whether it would be a big LOE to get them to work
- Research why don't we use a dev server
- Visual regression testing
- Limit off-cycle deploys only to real outages or security incidents
- Daily pre-deploy go / no go
- Daily post-deploy check in
- What other ideas are there?

## Which of these are short term /stop gap ideas we could discuss getting in place within a sprint?

## Which of these are long term plans already on the roadmap?

## Which of these are long term plans that aren't on a roadmap, but should be evaluated by OCTO-DE as something we should figure out how to do?
- dev server so we can see things before they're merged to master
    - review instances / tugboat / or some other solution for previewing and demo'ing and QA'ing.
