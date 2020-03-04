# Sprint 5
Dates: 2019-07-25 through 2019-08-06

## Leadership Team

- Sync with VSA program to understand timeline and volume of support necessary
- Document the Content & IA team responsibilities on VSA and VSP contracts (support for static content pages leading to tools, support / reviews for VA Content Owner work, and as a stretch goal)
- Discuss pros/cons to Content & IA being a standalone VSP team
- Update status indicator mechanism across Sprint Reports (and other artifacts) to be accessible
- Test (w/Triage) what it would look like to get the Product Model type of info integrated into ZenHub (w/eventual goal of not tracking in 2 places)
- Digest July 3 postmortems ([DB migration](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Postmortems/2019-07-03-GIDS-db-migration-failure.md), [deployment](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Postmortems/2019-07-03-VFS-emergency-deployment.md)) and decide what process changes to make

### Team PTO
- Emily OOO 7/31-8/2


## Insights & Analytics

- VFS Analytics Support
- Product Health MVP: For prototype, obtain product lines/categories templates
- Product Health MVP: For prototype, add Claims data
- Product Health MVP: (Discovery) For V2, document data availability from other sources (Foresee, Grafana, Contact Centers)
- KPI setting protocol for new VFS Teams: Iterate on va.gov KPI setting workshops for VSA usage
- Move the [Processes & documentation discovery](https://docs.google.com/document/d/1eLvSvWM_gCYbcg2V73WnG6o9iUX0BZqp8eE0d6VnwAw/edit#) for Analytics Requests into GitHub
    - _Note: Subject to Leah’s review / approval_
- _[Stretch]_ Product Health MVP: For prototype, meet with leads to gather types of ideal metrics fo the remaining lines/categories
- _[Stretch]_ Product Health MVP: For prototype, continue automation of GA data
- _[Stretch]_ Set up cadence for Google Analytics usage requests
- _[Stretch]_ Audit current Google Analytics for off-boarded users

### Epics

- [Analytics Implementation & Support](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/265)
- [Launch Education Analytics MVP](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/97)
- [Contact Center Issues MVP](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/266)

### Team PTO

- Amy: 7/24-7/30
- Joanne: 8/2 (PM), 8/5
- Nedie: 8/5-8/6


## Product Support

- Complete By Light onboarding
- VFS product development support
- Finalize the “prod dev criteria” (aka pre-launch criteria) and how it’s presented to VFS teams in onboarding 
    - How it’s used throughout product dev in check-ins and reviews
- Create documentation and strategy for onboarding teams that use GFE or any Windows device. 
    - Add to intake form -- What device is being used? GFE?
    - Add documentation for setting up Windows computers and GFEs
- Prepare for on-boarding of VSA teams (expected 8/5)
    - Identify who backfills what support roles when people are out (i.e. how to always remain able to provide support even when teammates are out)
    - Make sure everything is in the correct repo
    - How to make the 508 audit process more agile
- Share findings  + recommendations from By Light onboarding (is there anything we can adjust, before VSA onboards?)
- What should we do with the Design System?
    - Discuss the plan/approach for owning/ maintaining / iterating on VA Design System (now that Jared, previous owner at DSVA, has left the team)
    - Potentially start knowledge transfer? Or maybe next sprint depending upon how full this team already is? 
    - Some [context](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/design-system/design-system-summary.md)
- Write Rules of Engagement (ROE) for Slack access 
    - i.e. who gets added to DSVA Slack, based on what criteria / verification, and as what account type? 
- _[Stretch]_ Update onboarding process + docs per By Light onboarding research


### Team PTO

- Andrea: 7/26 - 8/2
- Peter: 8/5 - 8/9
- Bill Tran: 7/22 - 7/26


## Content & IA

- VFS Team Support: VFS Team Content + IA Reviews
    -  _Note: personalization research w/Samara and Lisa will make support a larger part of the Sprint._
- VFS Team Support: Onboard VSA (8/5+)
- Plain lang content review model: Collab with Prod Dev Support to work Content Review ROE into onboarding / ongoing interactions w/VFS Teams (and specifically go over it with By Light)
- CMS content migration QA / UAT / scheduling: Review Hubs for CMS according to their implementation schedule)
    -  _Note: This is a rather large migration effort, and we are filling the project management, QA, UAT role for CMS for now, will likely persist through early fall 2019._
- \[Rewritten legacy content + IA\]: Final content proof reads/edits
    - _Note: as Jen Lee has PTO this sprint, Peggy will likely be owning this / keeping the ship moving, which will take up more bandwidth than usual._
- \[Rewritten legacy content + IA\]: Validation of correct IA, and redirect mapping / communication about redirecting retired legacy pages.
    - _Note: implementing redirects requires DevOps support in future sprint_
- _[stretch]_ vets.gov-team repo to public va.gov-team repo migration IA: Start moving “safe” content into va.gov-team repo
- _[stretch]_ vets.gov-team repo to public va.gov-team repo migration IA: Make recommendation on how/where/whether to archive the stuff in va.gov-team repo about WBC/VA.gov launch

### Team PTO

- Mina: Jul 31 - Aug 2
- Mikki: couple of days here and there


## Tools & Improvements

- VFS Team Product Development Support (code reviews)
- [Create draft pull request guidelines for `vets-api` and `vets-website`](https://github.com/department-of-veterans-affairs/va.gov-team/issues/633)
- Draft documentation so VFS teams can build a vets-api endpoint using the sample app
- Start upgrading code to use newer MVI version ([issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/645))
    - _Note: requires GFE, Johnny only member but OOO for one week_
- [Investigate more robust branch protection for vets-website and vets-api](https://github.com/department-of-veterans-affairs/va.gov-team/issues/661)
- _[Discovery, possible resolution]_ Address NPM security advisory 1065 (lodash) ([issue](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/589#issuecomment-513309917))
- _[Discovery]_ Create plan for how to reduce content deployment time, including audit of existing process ([epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/605))
- Feature flags are available (demo-quality, not production use) with release toggle, ops toggle, and A/B testing ([epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/632))
- Investigate adding support for using `vets-api` in automated `vets-website` tests ([epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/643))
- Investigate adding login flow to automated tests in `vets-website` ([epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/644))
- Onboard product manager ([epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/647))
- Share approach for tracking support work in ZenHub across other VSP teams


### Team PTO

- Johnny: 7/29 - 8/2


## Triage Team

- Assign out Triage Backlog
- Write endpoint owner model for triage 
- Establish Sentry tagging standards
- Implement automatic code cleaning/linting using ansible during devops build
- Documenting the contact center training + proposed intake process for Tier 2/3 issues
- Improve FE starter-app scaffolding
- _[stretch]_ Implement automatic statsD metric initialization


### Epics

- [Launching MVP Triage Process](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/207)
- [Sentry Usability Updates](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/338)
- [Living RACI-like maps](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/670)
- [Contact center synthesis](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/667)
- [Improve FE starter-app scaffolding](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/673)


## Operations Team

- VFS Team Operations Support
- CMS infrastructure migration support
- Prep For Pittsburgh.va.gov Redirects
- Proposal for subdomain migration and management for web brand consolidation
    - _Note: waiting for indication of volume from Chris J/Andy before starting_


### Epics

- [Migrate CMS infrastructure into VSP-managed services](https://github.com/department-of-veterans-affairs/va.gov-team/issues/328)
- [Prep For Pittsburgh.va.gov Redirects](https://github.com/department-of-veterans-affairs/va.gov-team/issues/597)


### Team PTO

- TJ: 7/31 - 8/21
- Watson: 7/22 - 7/26
