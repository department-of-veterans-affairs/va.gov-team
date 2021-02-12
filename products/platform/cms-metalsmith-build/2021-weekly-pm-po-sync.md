# 2021 Weekly PM/PO Sync for CMS Export Build

## 2-12-21

### Topics to Discuss
* Changes to broken link validation
   * Update from VSP on research
   * Out of scope for CMS Export release
* Status updates & timeline
   * What needs to happen by what deadline in order to stay on track for CMS Export release?

## 2-5-21

### Topics to Discuss
* Status update from all teams
* Change management messaging with content editors

### Notes
* Status update 
   * CMS: working on exploring low hanging updates re: performance improvements to GraphQL. Next week early we will be reconnecting again with CMS internal team on broken link strategy. Will meet with VSP next week to talk about broken links more.
      * Will touch base with other OCTODE stakeholders on broken link strategy 
      * Connecting with VSP on CMS Export build improvements 
   * VSP:
      * Still cautiously optimistic on the latest written out timeline! The coming sprint is ambitious so some things will likely bleed over into the following sprint, but that should not put our velocity at risk significantly. 
      * Significantly learnings this week about scalability and where breaking points and bottlenecks are, so the level of uncertainty there is now very minimal. This is a big win.
   * VFS: 
      * Facilities: we have 3 issues that are ready to be picked up that resulted from the diff tool. Half of them are blocked by the arraysort ticket that are in progress. 
      * Public Websites: we have prioritized work on Campaign Landing Page. we did run the diff on that. Team started working on transformers fully today and will have more info next week. 
         * Potential risk area
   
   Dave: need to keep our finger on the pulse of — we're trying not to do too much drift or changes but we also don't want to freeze. Do we build a GraphQL query on that or do we hold on that? 
   Dror: bottom line is — in theory we're a month away, anything we can do to limit GraphQL is helpful. 
   Michelle: we actively deferred a couple changes this week expecting this release soon, so that is currently part of our decision making. 
   Oksana: as we launch CMS Export, we are keeping GraphQL in parallel 
   Dror/Megan: keep things in parallel until this is live in prod + a week for risk mitigation
   
* Change messaging for content editors
   * Publishing every hour is a big change! CMS has historically handled the messaging to content editors. Is that still the plan here? 
      * Dave: VAMCs and Pittsburgh are the ones being most vocal about this need. Communication should come from CMS if that works for other teams.
      * CMS team is willing to take on this communication. Need to stay coordinated on timing. 
* Broken link change 
   * Mike: originally talked about doing a threshold/limit of broken links. Dave suggested a pattern matching allow list. Update is that we are proposing to do both — there's an allow list for new content purposes, etc, and also having a threshold that's higher than 0 based around having more pages in the system, more active editors, more frequent deploys. 
   * Dave: product side is indifferent — this is more of a platform decision. Platform has a process in place regarding policy for broken links on VA.gov. If platform goes with a threshold approach that is fine, my product owner interest is primarily in the allowlist because that is what I know I will need.
   * Dror: Need to double check with Rachael but would largely ask product stakeholders for this decision.
   * VSP will review this proposal & provide level of effort next week 
   
Action Items: 
* Megan be sure that VSP is coordinating with CMS on deploy tickets and rollback plan
* Brian to provide an async update early/mid-next week about PW's discrepancies and rough level of effort to work through those

## 1-29-21

### Topics to Discuss
* Status update from all teams
* Continued build errors
   * What caused this week's issue? 
   * How can we better manage this moving forward?
* Handling of broken links in VA.gov build
* Change management messaging with content editors

### Notes

Handling of broken links
* Proposal: don't block builds due to broken links in content layer, with threshold 
   * Generate public CSV about broken links - must contain paths that generated broken links
   * CMS team will be notified in Slack and begin help desk triage based on CSV triage
   * V1 is hourly autodeploy during business hours - 8-8 M-F hourly
   * Consider: If the threshold is reached and the build breaks, can there be a manual override?
      * Ex. when something is being shared with content editors (dual state) and there's no impact to Veterans
   * Need to consider long term vs short term solution
      * Warning content editors when they have a broken link 
      * Long term solution is that CMS help desk doesn't triage this, notifications are sent to content editors 
   * Next steps: 
      * Identify threshold for broken links to break build — does there need to be any threshold? 
         * Less important is the number of broken links, more important is the location of broken links
      * Identify SLA for CMS team fixing broken links
      * **Continue conversation including all people needed**
      * VSP discuss level of effort for implementing this potential solution
   * Questions: 
      * How often is the broken link CSV sent? Hourly? Or daily? Answer: CSV should be published every hour, and Slack alerts will be managed by CMS team 
      
Status updates
* VSP
   * Discrepancies are in good shape
   * Continued concerns about build errors and scalability, working hard to resolve these uncertainties
* Facilities
   * 11 discrepancies identified with the JSON comparison tool, have been blocked by the broken build
* Public Websites
   * Working towards reaching parity — hoping by next week we've reached parity
   * 5 days was initial estimate 
* CMS
   * Broken build issue should be fixed!
   * Broken link updates above
   * Scalability research is ongoing - should have some info by next week
      

## 1-22-21

### Topics to Discuss
* Status update from VSP FE Tools
   * Build failures caused by Erie release (circular reference)
   * Comparison tool will be sent out today or Monday [issue](https://app.zenhub.com/workspaces/vsp---frontend-tools-5fc9325744944e0015ed1861/issues/department-of-veterans-affairs/va.gov-team/13762)
* Change management messaging with content editors
   * CMS team will take point — what do they need from other teams?
* Timing for hourly auto-deploy
   * Hourly 24/7, or within "business hours"?
* Circular reference errors in cms-export build [issue](https://app.zenhub.com/workspaces/vsp---frontend-tools-5fc9325744944e0015ed1861/issues/department-of-veterans-affairs/va.gov-team/13762)

### Notes

* Build errors with Erie release: circular reference errors.
   * System publishes are supposed to be "just" content releases, and are supposed to scale up to 1/day
* Build failure this morning. Broken links will cause a build failure. The dozens of new content editors will be producing broken links. 
   * Linking content and app builds together will continue to have a massive risk of links breaking the build
   * Example today: content editors are learning by doing, one person updated their "about us" page and moved it to published even though that wasn't yet ready 
* What types of build errors do we expect to see? How can we document that & plan for that risk? 
   * Mike should talk to Steve Wirt about links — [design doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/7785e85e3c68452857ec510ed5d2cb22bbd5f6cc/platform/engineering/design-docs/2020-09-27-broken-links.md)
   * What should happen with broken links? What does the business want to have occur? **Need to have convo about this
   * Breakout convo re: build errors
      * What errors are likely to come up with content publishing? With changes to the data? etc? 
* When can we continue to decrease the uncertainties? 
   * JSON comparison tool is ready & engineers should be able to use that to decrease unknowns over the next few days (yay!)
* What about a GraphQL freeze? If we implement a freeze on 3/1 for 2 weeks, how does that impact POs & teams? 
   * Facilities team is not making changes to GraphQL without also addressing those changes in CMS Export
   * Teams _either_ need to freeze, _or_ need to own the parallel changes to CMS Export. Facilities is doing this, need to confirm with Public Websites & CMS teams. 
* Timing of hourly auto-deploy — have folks discussed this? Is there an easy hour? 
   * CMS provides support 8-8 M-F 
   * Go with that, and reconnect for V1.1 
