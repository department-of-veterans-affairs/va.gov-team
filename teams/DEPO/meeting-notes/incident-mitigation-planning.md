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
    - We do have a way to do rollbacks, but it's not documented super well and not sure if anyone knows about these
    - There's an issue with the way google analytics schemas are architected that means we can't use the rollback functionality
    - Figure out what about analytics is making rollbacks not possible, or if there's something else making them not possible, and whether it would be a big LOE to get them to work [slack thread](https://dsva.slack.com/archives/G01M8VD9USC/p1616785866073200)
    - Rollbacks only let you go to previous releases, so if we did a daily release at 3 pm that broke something, it would take us back to previous day so we'd lose everything else that other teams had released.
- Hotfixes
    - Get a deploy out the door faster, but docs aren't detailed. When should we do this vs not do this? There are risks w/hotfixes. But we could establish process around that for emergencies.
    - Write up policy: when to use a rollback vs a hotfix?
    - If something broke, roll back unless something else critical HAS to stay up there.
    - If it breaks a universal critical service (search) then we rollback or hotfix, but if it's a static 2nd tier content page then maybe doesn't warrant action.
- Research why don't we use a dev server
- Visual regression testing
    - Current docs mention that there has been work done on this
    - Could be a good enhancement to our automated testing, would cover certain cases that our automated testing cannot handle
    - There's stuff right now that our automated tests CAN cover though so that seems more important to invest in right now than visual regression testing
    - You get a lot of false positives with visual regression testing, and we already have too much noise as it is
    - Is there a great new solution out there though that does a really good job at this?
    - Would consider this if we had everything else right, but we have other gaps that if filled would be more impactful
    - Examples: visual elements aren't aligned, banner is missing, flicker on homepage 
- Reduce application build time (not specifically content build time)
    - One sprint spike
- Limit off-cycle deploys only to real outages or security incidents
    - Would this help VFS teams take more seriously their releases, if they know they won't be able to fix/change until the next scheduled release?
    - Example: we accidentally released MyVA too early, doesn't warrant an off-cycle
    - Rachael has written up documentation for this, waiting for Fleet and Matalon to review if we want to use this.
    - Would this have the impact of teams take their releases more seriously?
    - Or would it not change behavior in a positive way and instead incentivize perfection over iteration?
    - Then we'd also need to communicate this widly -- that ppl need to carefully QA their stuff more, bc of this big risk
- Daily pre-deploy go / no go w/defined criteria about what gets the thumbs up
    - Does this mean anyone who's putting in a change would post it somewhere and provide enough information so the Go No Go decision makers could make a decision? We're too dispersed and the overhead would be huge.
    - Could be helpful, but would be dependent on having good information to be able to make that decision, and seems like we have issues getting that information.
    - This wouldn't be helpful if we haven't solved the staging deploy issue described below
- Staging deploys
    - Get staging deploys faster so people know what they're seeing in staging is what's going to go out the door in the 2 pm deploy
- If we bring build time down to 20 min, could we migrate to twice a day deploys?
    - One risk of this: the window to check master in staging prior to it getting merged is super short
    - It's doable but super difficult and extra work to use feature flags for this same ^ job
- Fix feature flags / VA form system to make QA'ing using feature flags easier for QA/demo purposes
- 2 week feature freeze for both VFS teams and Platform teams
    - Don't ship anything new, work on tech debt or performance functionality
- 20% ongoing capacity for technical debt (VSP + VFS)
    - Add missing automated tests to verify feature functionality, refactor unreliable code, write missing documentation for intra-team knowledge
- FE Engineering Standards and Practices
    - How do the VFS FE engineers do what they do? Is there enough redundancy and knowldege, or is it all silo'd in one person? Sometimes feels like John is the tech manager which doesn't make sense because he's from the product practice.
    - Ideally best practices would be a collaboration between Platform and VFS engineers
    - VSP [review process](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/workflow/review) and [guidelines](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/code_review_guidelines.md) do not cover code quality & standards, and VSP does not have resources to perform this.
    - Continue conversations with Jeff and Dror and Michelle to see if there's any process or meetings etc we could put in place to spread these best practices better

## Which of these are short term /stop gap ideas we could discuss getting in place within a sprint?

## Which of these are long term plans already on the roadmap?

## Which of these are long term plans that aren't on a roadmap, but should be evaluated by OCTO-DE as something we should figure out how to do?
- dev server so we can see things before they're merged to master
    - review instances / tugboat / or some other solution for previewing and demo'ing and QA'ing.
- visual regression testing
