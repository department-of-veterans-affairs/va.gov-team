# 2021 Weekly PM/PO Sync for CMS Export Build

## 1-29-21

### Topics to Discuss
* Status update from all teams
* Continued build errors
   * What caused this week's issue? 
   * How can we better manage this moving forward?
* Handling of broken links in VA.gov build
* Change management messaging with content editors

#### Notes

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
