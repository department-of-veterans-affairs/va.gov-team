# 2021 Weekly PM/PO Sync for CMS Export Build

## 1-29-21

### Topics to Discuss
* Status update from all teams
* Continued build errors
   * What caused this week's issue? 
   * How can we better manage this moving forward?
* Change management messaging with content editors

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
