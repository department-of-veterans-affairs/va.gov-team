# Incident Mitigation Plan

## Problem

Our codebase is monolithic and growing every day. As a result, it’s becoming more and more frequent that:
- One team’s code, when deployed, breaks some other part of VA.gov
- One team's bad automated test breaks the build for everyone
- Workarounds for QA'ing work in staging lead to code getting to prod with bugs, or even sometimes before it's supposed to go live

Then teams have to take the time to investigate, resolve, and coordinate an off-cycle deploy, and even when they get a PR for a fix in quickly, they have to wait 1+ hours for the build to run.

## Long term plan:

- **A true testing environment** will enable VFS teams to easily review their work (without relying on review instances or feature toggles) before it goes to production
    - will reduce # of firedrills that occur because because an error made it to prod
    - will reduce # of production deployment delay requests because teams need more time to check their work in staging
  
- **Code isolation** will prevent one VFS team's work from breaking the build for everyone, and from impacting the larger site.
    - will reduce # of firedrills that occur because a broken build is blocking everyone
    - will reduce # of firedrills that occur because one team's code broke another part of the site

- **Autonomous anytime deployment** will remove the need for a daily deploy at all -- VFS teams will be able to release whenever their want on their own.
    - will remove the need for off-cycle deploys, thus completely ending those firedrills

- **What else?**

But the long term work won't bear fruit for another 6-12 months. So what can we do more immediately to mitigate these firedrills until we reach that better future state?

## Short term plan:

Epic: [#22603](https://github.com/department-of-veterans-affairs/va.gov-team/issues/22603)

- **Faster FE and BE build time:** will make firedrills less painful when they happen, because fixes will get through faster. It'll also make staging changes render faster once main merges, so teams can use the full window to QA their work prior to the prod deploy. ETA mid April 2021.

- **Content & app isolation:** separating the content build from the vets-website build is the first part of our larger code isolation initiative. This will.... ? ETA mid May. This will prevent content changes from accidentally messing up vets-website, and vice versa and should help with some of the public websites issues we've been seeing.

- **[Tiered QA pilot on Public Websites team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/public-websites/Review%20Instance%20Use%20Cases.md):** will be a manual slowing down mechanism to more thoroughly check and get sign-off on work prior to merging to main for staging and prod. This should reduce the amount of times we have a firedrill because an issue is found post-deploy. 

- **Extend the "_slow_ down so we don't get _shut_ down" message across OCTO-DE:** using the Public Websites process as a pilot, socialize the need for all VFS teams to take this approach. Getting Chris J to help spread awareness will help with buy-in. We know this is not ideal - if teams had a better testing option, and if they could deploy fixes on their own, we wouldn't need to slow down. But since we're not there yet, we need to rely on manual process in the interim.

- **Updated documentation about review instances and staging** will help VFS teams better understand how they can leverage these options for testing purposes. Neither are ideal, but more clarity may help folks better use them, and thus do better QA -- thus reducing the volume of firedrills that come up because teams weren't ready for the daily deploy, or found an issue that needs fixing post-deploy. 
 
- **GitHub issues for off-cycle deploy requests** will help capture details in one place better, and will act as a prompt for post mortems since we can't close the ticket until the post-mortem has been linked. Taking off cycle deploys more seriously in this way may encourage teams to check their work more thoroughly before merging to main, and thus may reduce the volume of firedrills that come up because of broken stuff post-deploy.
    - This also includes updating and publishing the criteria for off-cycle deploys
    - This also includes making the post-mortem template more clear and readily available

- **Resolving flaky unit tests** will help prevent failing tests from blocking the build for everyone. 
- 
---

### Meeting notes 3/25


#### General notes
- We don't have really any QA standards
- We're light on QA, we have 20 different ways we do automated testing, but we have 1 QA person for all of the teams on the VSA contract
- This is relec of vets.gov times when teams were scrappy and PMs, engineers, designers would share the QA burden and review their stuff as a part of the ZenHub pipeline before a story would get released
- Do we need culture change wrt QA?
- Do we want to go after a crowd-sourcing QA solution?
    - We could use an outside service since VA.gov is public, similar to Perigian
    - Maybe some AI methods as well
- Deploy jobs to staging were backed up a ton, so you merged something into main and a couple hours later you look in staging and that merge has not appeared on staging yet. So you look at staging and everything looks cool good on staging, but you haven't actually seen your merge there yet.
    - Staging here means we can have certain feature flags on that we don't want on on production. Staging = main, but not deployed once a day and with feature flags.
    - Staging deploy goes at 9 am, people expect to see their stuff on staging at 10 am and then be able to check it prior to the 2 pm production deploy
    - They're both main branch
- We do have automated testing abilities to catch the things that have been issues lately, but the tests don't exist. 
    - Well we do, but it's only a smoke test and we need to also have it as a build test

#### Ideas / brainstorming
- **Manual process / workaround for "staging" to prevent un-reviewed things from going live**
    - "do not release until X person has seen it and tried it"
    - give OCTO-DE visibility into what is getting deployed
    - add that check into the acceptance criteria templates
    - Public Websites team is going to experiment with a possible process there
- **Move some tests from smoke tests / monitoring to e2e / build automated tests**
    - Do an audit for critical features that need to be covered by automated build tests, and then assign to appropriate teams to write them.
    - Some kind of process around making sure VFS teams are actually writing automated build tests for things that failed / broke as a part of the post mortem action item. Do we need to add language to the post-mortem documentation? How do we make sure ppl are doing that action item?
- **Blue / green deploys or rollback functionality**
    - We do have a way to do rollbacks, but it's not documented super well and not sure if anyone knows about these
    - There's an issue with the way google analytics schemas are architected that means we can't use the rollback functionality
    - Figure out what about analytics is making rollbacks not possible, or if there's something else making them not possible, and whether it would be a big LOE to get them to work [slack thread](https://dsva.slack.com/archives/G01M8VD9USC/p1616785866073200)
    - Rollbacks only let you go to previous releases, so if we did a daily release at 3 pm that broke something, it would take us back to previous day so we'd lose everything else that other teams had released.
- **Hotfixes**
    - Get a deploy out the door faster, but docs aren't detailed. When should we do this vs not do this? There are risks w/hotfixes. But we could establish process around that for emergencies.
    - Write up policy: when to use a rollback vs a hotfix?
    - If something broke, roll back unless something else critical HAS to stay up there.
    - If it breaks a universal critical service (search) then we rollback or hotfix, but if it's a static 2nd tier content page then maybe doesn't warrant action.
- **Research why don't we use a dev server**
- **Visual regression testing**
    - Current docs mention that there has been work done on this
    - Could be a good enhancement to our automated testing, would cover certain cases that our automated testing cannot handle
    - There's stuff right now that our automated tests CAN cover though so that seems more important to invest in right now than visual regression testing
    - You get a lot of false positives with visual regression testing, and we already have too much noise as it is
    - Is there a great new solution out there though that does a really good job at this?
    - Would consider this if we had everything else right, but we have other gaps that if filled would be more impactful
    - Examples: visual elements aren't aligned, banner is missing, flicker on homepage 
- **Reduce application build time (not specifically content build time)**
    - One sprint spike
- **Limit off-cycle deploys only to real outages or security incidents**
    - Would this help VFS teams take more seriously their releases, if they know they won't be able to fix/change until the next scheduled release?
    - Example: we accidentally released MyVA too early, doesn't warrant an off-cycle
    - Rachael has written up documentation for this, waiting for Fleet and Matalon to review if we want to use this.
    - Would this have the impact of teams take their releases more seriously?
    - Or would it not change behavior in a positive way and instead incentivize perfection over iteration?
    - Then we'd also need to communicate this widly -- that ppl need to carefully QA their stuff more, bc of this big risk
- **Daily pre-deploy go / no go w/defined criteria about what gets the thumbs up**
    - Does this mean anyone who's putting in a change would post it somewhere and provide enough information so the Go No Go decision makers could make a decision? We're too dispersed and the overhead would be huge.
    - Could be helpful, but would be dependent on having good information to be able to make that decision, and seems like we have issues getting that information.
    - This wouldn't be helpful if we haven't solved the staging deploy issue described below
- **Staging deploys**
    - Get staging deploys faster so people know what they're seeing in staging is what's going to go out the door in the 2 pm deploy
- **If we bring build time down to 20 min, could we migrate to twice a day deploys?**
    - One risk of this: the window to check main in staging prior to it getting merged is super short
    - It's doable but super difficult and extra work to use feature flags for this same ^ job
- **Fix feature flags / VA form system to make QA'ing using feature flags easier for QA/demo purposes**
- **2 week feature freeze for both VFS teams and Platform teams**
    - Don't ship anything new, work on tech debt or performance functionality
- **20% ongoing capacity for technical debt (VSP + VFS)**
    - Add missing automated tests to verify feature functionality, refactor unreliable code, write missing documentation for intra-team knowledge
- **FE Engineering Standards and Practices**
    - How do the VFS FE engineers do what they do? Is there enough redundancy and knowldege, or is it all silo'd in one person? Sometimes feels like John is the tech manager which doesn't make sense because he's from the product practice.
    - Ideally best practices would be a collaboration between Platform and VFS engineers
    - VSP [review process](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/workflow/review) and [guidelines](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/code_review_guidelines.md) do not cover code quality & standards, and VSP does not have resources to perform this.
    - Continue conversations with Jeff and Dror and Michelle to see if there's any process or meetings etc we could put in place to spread these best practices better
- **GitHub issue template for manual deploy request:**
    - is change a bug fix or new feature
    - if bug fix, # of affected users
    - does change affect content, application, or both?
    - if application change, is it frontend, backend, or both?
    - if application change, is it covered by automated tests?
    - if application change, is it using feature flags?
    - has change been reviewed in staging or review instance?
    - we don't close the issue until a Post Mortem has been linked
- Tests failing in `main` block deployments
    - Revert all PRs that cause tests to fail in `main` (slows VFS teams velocity, but keeps `main` in deployable state)
    - Require feature branches to be current with `main` before merge (might be impractical given current CI speed)

#### Which of these are long term plans that aren't on a roadmap, but should be evaluated by OCTO-DE as a potential idea?
- dev server so we can see things before they're merged to main
    - review instances / tugboat / or some other solution for previewing and demo'ing and QA'ing.
- visual regression testing

### Meeting Notes 4/1
- we have 2 options for QA right now: review instances, and staging
    - each has limitations and trade offs
    - staging connects with BE services
    - there's only one staging, and it's deployed from main branch, and it's CI as in as soon as something is merged into main and the build passes then it gets deployed automatically
    - today staging is so backed up that merged PRs don't reflect in staging with enough time to review them 
    - there's no versioning, it's just the most recent successfully built main branch gets deployed. You can see in Jenkins 
    - Teams should QA in a review instance when you can, and if you can't then use staging with feature toggles
- Chris said he thought we had better rigour around this stuff
    - Other govt agencies have more rigour and are super slow and waterfall. Making us nervous that new people at VA come in, hear about these incidents, and they start to raise questions that hinder our ability to keep running this platform. If we need to slow down a little bit to add more precautions, then that may be a valuable trade off but we need to communicate that.
- QA 
