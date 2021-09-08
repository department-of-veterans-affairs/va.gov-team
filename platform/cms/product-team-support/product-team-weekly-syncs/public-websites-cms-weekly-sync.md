# Weekly sync: Public Websites / CMS

<details><summary>About this meeting</summary>

- Wednesdays 11am ET 
- Meeting owner: Clarence Maeng
- Facilitator: Kevin Walsh
- Standing agenda: 
  - Product by product, including CMS backlog review (eg: CLP, [Resources & support](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/board?epics=154174777_2915&repos=154174777), Outreach Hub, Benefit Hubs, VA Forms, etc)
  - How we work
  - etc.
  
</details>

<details><summary>Parking lot</summary>
 

</details>


<details><summary>Relevant CMS product backlogs and docs</summary>
  
- [**Resources & support** CMS backlog](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/board?epics=154174777_2915&repos=154174777)
- [**Campaign Landing Page MVP** CMS backlog](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/board?epics=154174777_2275,154174777_2274,154174777_2273,154174777_1475&filterLogic=any&repos=154174777)
  - [CLP FE documentation](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1607363793772/b7f9e809d68ace9c8d75ab649a758ed7653c8461)
  - [CLP CMS content model and rigidity decision logs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates/content-requirements-spec/cms-content-model-and-rigidity.md)                         
- [**VA Forms** CMS backlog](https://github.com/department-of-veterans-affairs/va.gov-cms/labels/VA%20Forms)
- [**Benefits hubs** CMS backlog](https://github.com/department-of-veterans-affairs/va.gov-cms/issues?q=is%3Aopen+is%3Aissue+label%3A%22Benefit+hubs%22)
- [**Outreach hub** CMS backlog](https://github.com/department-of-veterans-affairs/va.gov-cms/issues?q=is%3Aopen+is%3Aissue+label%3A%22Outreach+hub%22+)
- [**Banners and alerts** CMS backlog](https://github.com/department-of-veterans-affairs/va.gov-cms/labels/Banners%20and%20alerts)
- [**VA.gov homepage** CMS backlog](https://github.com/department-of-veterans-affairs/va.gov-cms/labels/VA.gov%20homepage)
- [**VA.gov megamenu** CMS backlog](https://github.com/department-of-veterans-affairs/va.gov-cms/labels/VA.gov%20megamenu)

</summary>

</details>

## September 8

Banners blocker to launch
- CMS finishing two blockers required for OPIA 
  - https://github.com/department-of-veterans-affairs/va.gov-cms/issues/6175 
  - https://github.com/department-of-veterans-affairs/va.gov-cms/issues/6015 
- Existing COVID banner migration
  - Current node 33317 only has half the URLs
  - We either need to finish migrating or finalize the rules with Danielle. 
  - Steve Randi Danielle (optional Kelson)
- Homepage banner
  - Needs updating to match what's on prod
- CMS team to book time with JoshT from OPIA (and others?) 




## September 1

Banners runbook

Recurring events knowledge transfer for design - who should be there

## Aug 25

**Recurring events**
* Design work needed around workflow, UX (from both listing page and detail page)
  * Loop in Mikki
  * Loop in Facilities team to ensure UX is coordinated across the CMS
* Can we get a list of all events and urls in the system? to see how many have been cloned **CMS to do**

**Banners**
* Currently on all non-prod environments
* CMS to update content to provide parity on all sites **CMS to do**
* PW to ensure banner component is reusable **PW to do**
  * Projecting to have in non-prod soon (latest ~early next week, dependent on review process)
* CMS to sync with Danielle on pathing (include Dave) **CMS to do**
  * OPIA should only have access to homepage alert
  * May need some editorial experience changes in order to only show what's relevant to OPIA (question for Danielle)
* Dismiss functionality: may want an expiry for dismissal (e.g. promo banner has been in use since ~Sept?, dismissed and forgotten about)
  * Does this need separate UX and governance?
  * Homepage update coming soon
  * If moving from local storage to session storage, shouldn't be a big lift for PW
* Governance around changing paths when not supposed to (not a blocker)

**Breadcrumbs**
* PR to fix hyphenation should be in by COB today
* Will wait for Kev to return to connect dots


## Aug 18

**Recurring events for Outreach Hub and VAMC**

Drupal
* One event node (entity) for many events
* Editors will be able to override individual event instances (cancel etc)
* GraphQL demo https://github.com/department-of-veterans-affairs/va.gov-cms/issues/6055

FE TBD 
* One node, many single pages
  * How to handle scaleability -- limits on number of instances
  * What is the right design for repeating events - one page with all instances or one page per instance
  * ICS calendar link feasibility for repeating events - 
  * What is the right URL for event pages
* Event listing page refactoring
* Preview experience
* PW team will design/research next steps here


**Banners**

* Content type close to ready, still working on governance features
* Scope
  * Non-content admins cannot create banners, but they can edit them. 
  * Non-content admins will not be able to edit 
  * PR open to support exceptions, catch alls, info and warning
* Governance
  * Punting on stacking and sorting issues for now, can be handled by business process by sitewide content team, who needs awareness. 
* Runbook for sunsetting block 42 (vaccine) 
  * Finish creating new node and scope (Steve and Randi/Danielle, need to confirm the visibility rules) 
  * Will we support both banner types at once? 
  * Testing the switch in a tugboat environment with Kelson's branch?  (archive block 42 + publish the new node, test the paths to see that they match prod), test the homepage banner. 
  * Merge Kelson's PR
  * Confirm the visibility rules with sitewide team. 
  * Repeat the launch on prod 
  * Then remove FE support for alert-block-based banners.
  * Then remove CMS support for alert-block-based banners.  
  * **CMS** issues for editorial experience - clear rules about what banners are for 
  * **CMS** issue to trigger content build

## August 11

**Banners**
* [rubric](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/banners/Banner-Alert%20Rubric.md) from discussions with John/Dave/Jen in 2020 is hypothetical, needs more discussion with design system and thinking across products and teams
 * none of this is critical path for this phase 
* Query to pull in in has a POC
* Dismissibility
  * CMS team will be adding a dismissability field soon, defaulting to true
  * same behavior from the existing block/42 dismissibility
  * What happens to a dismissable banner after it's edited? 
  * FE could use revision ID to reset, for now. Or a hash. 
  * Iteration could consider adding additional tools for dismissability settings, based on data from Veterans.  
* Stacking 
 * Current state is OK for now, can be handled by business process with teams managing banners.
 * governance for stacking probably can't be on the CMS side
* Existing VAMC (`full_width_banner_alerts`) should continue to work as is for now, could possibly be moved to `banners` in the future. 
* path scope problem
  * Needs to be agnostic to the CMS (like the homepage)
  * Need a clear regex pattern, like asterisk at the tail end, which is what sitewide content team needs to migrate block/42 to new content type. 
  * `!` at the start of a string for path blocking. 
  * Nice to have: being able to regex the asterisk anywhere in the path, like `/*-health-care/*` for any health care site, or for any events, like `*/events/*`. 

**Recurring events**
* To be discussed with Michelle present week of the 16th.


## August 4 

Banners for Sept 1
 * New banner content type
 * **CMS** 
   * Get Entity ID to hardcode against
   * New field: dismissible with default as TRUE
   * Change alert body limit to 300 character soft limit, 500 character hard limit, not including HTML (not 1000)
   * 2nd half of august: Knowledge Base article(s) 
   * Change management and adoption in September
 * **Public websites** 
   * to track dismisses of alerts


Og:image
* CMS provides only the path for og:images, but not the hostURL (www.va.gov) 

CLP
* Tim H and Katie working on a new one 
* Pride is staying up, not being retired and redirected
* Trust CLP staying up for now, still being promoted
* John reviewing Jane's KB articles, slidedeck for training

