# FE Broken Link Notifications -> CMS -> Empowered People

**Author(s):** Steve Wirt
**Last Updated:** September 27, 2020
**Status:** **Draft** | In Review | Approved
**Approvers:**
   - [ ] Rian Fowler
   - [ ] Michael Fleet
   - [ ] Mikki Northuis
   - [ ] Nick Sullivan
   - [ ] Dave Conlon
   - [ ] Jen Lee
   - [ ] Jeff Barnes


## Overview

### Objective
To address broken links in a way that notifies the human source(s) quickly, clearly, and without human intervention so that the link may be resolved.  If we can get broken links resolved rapidly, and we are doing rapid content releases every 3-5 minutes, we should not be holding up content releases for broken links.  Alerts, situation updates, and all other content should not be held hostage by a broken link somewhere in the website.

### Background
Broken links discovered during the Front End content build currently prevent content releases.  Notifications are sent to Slack #CMS-Team.  This pulls CMS team members away from their planned work, to triage the situation.  This includes:
1. Logging into Jenkins to find the report.
2. Determining if the broken link comes from the CMS.
3. Reporting it to the editor or team that may be responsible.
4. Notify all editors in #CMS-Support and via email that content is NOT being released. (Email is required because most of the editors in the CMS are not on Slack.)
5. Notifying in #CMS-Support and via email that the issue has been resolved and content is now flowing as expected.
The effort is time consuming and unproductive.
While people are scrambling to investigate and notify affected editors, content is not going out.  Emergency alerts _(active shooter, hurricane closures, blizzard closures...)_ do not go out.  Email notifications from GovDelivery which are dependent on a FE content release, do not go out.  Timely releases of new initiatives, do not go out.

The CMS team built the [Node Link Report](https://www.drupal.org/project/node_link_report) module (open sourced module) to detect and warn of broken links upon node save. Editors now have immediate feedback about potential broken links before publishing. This greatly reduced the number of broken link related content release stoppages.  We have done as much as we can on that front at the CMS layer.


### Guiding Principles
1. Veterans should not get 404 errors. Content on VA.gov should not have broken links.
2. As the CMS scales from ~20 editors and daily content releases, up to ~500 editors and continuous content releases, we can not allow a broken link to prevent content releases.  Knowing about a storm closure or active shooter [saves more souls](https://www.informationweek.com/government/dont-get-side-tracked-by-flashy-metrics-success-is-in-the-people/d/d-id/1331791) than not getting a 404 when following a link.
3. Developers currently waste far too much time chasing down broken links.


### High Level Design
Currently the Front End link checker creates a CSV file and exposes that to Jenkins.  The CSV contains the location of the broken link, the url it is pointing to.  I propose publishing that file to the website as open data (perhaps located at /data/vagov-broken-links.csv or as json).  Currently the Front End build process notifies the CMS when a content release has succeeded by pinging the CMS  The CMS could act on that ping as a trigger and read the broken link data.  It could process it immediately and take the following actions:
1. Look up the location of the broken link, and determine if it is a CMS node.
2. If it is a CMS node, notify the editor that created the published revision immediately in the CMS and send an email to them.
    1. If the same page has a broken link for 3 separate content releases  _(~15 min span of time)_ notify other content owners responsible for the same section.
    2. If the same page has a broken link for 5 separate content releases _(~25 min span of time)_, or there are no other editors for that section, alert Slack #CMS-team so the team can escalate the fix.
3. If it is not a CMS based page, notify the appropriate Slack channel based on the location of the broken link.
4. Sections that are under construction (hidden behind basic auth) could be disregarded so broken links in that section would be ignored by the CMS to avoid creating extra noise.

## Specifics

### Detailed Design
There are three phases of changes that would need to be implemented across the two systems in the following order.

1. Front end build makes broken link CSV public.  The CSV already gets built, it just needs to be saved as a public file.  (https://www.va.gov/data/vagov-broken-links.csv)

2. The CMS builds the code to process the CSV and notify appropriate editors or Slack Channels.
    a.  This process is triggered when the Vetsweb build hits `prod.cms.va.gov/api/govdelivery_bulletins/queue?EndTime=[unix timestamp] to confirm that the build has gone out.  An event will subscriber will be added to this on the CMS side.  The event subscriber will cause the CMS to read the broken link CSV and begin processing them.
    b. For each item in the broken link report, the CMS will save in the CMS database, the following information:
     1. Page path  {'path/page-with-broken-link`}
     2. link text  {'click here'}
     3. link destination {'path/to/page-not-found`}
     4. uuid - a hash of page path, link text, link destination
     5. First appeared (timestamp) - The time that this particular UUID first appeared in the CSV.
     6. Drupal Page (boolean) - TRUE if it is a CMS based page
     7. Escalated to Section (timestamp) - Will be set when section owners have been notified.
     8. Escalated to CMS Team (timestamp)  - Will be set when the CMS team has been notified.
     9. Resolved (timestamp) - Will be set when this no longer appears in a broken link CSV.

   c.  The CMS will look up the page or menu item with the broken link.  If it is determined to be a CMS page or menu item, it will send a notification within the CMS to the last person who edited that page to that user's dashboard and send an email to that user using the notification queue.  If the same link text and broken destination appears on multiple pages, only one notification will be sent, to avoid sending a barrage of identical notifications (as would be the case of a broken menu item).
   d. If the same page has a broken link for 3 separate content releases  _(~15 min span of time)_ notify other content owners responsible for the same section.
    e. If the same page has a broken link for 5 separate content releases _(~25 min span of time)_, or there are no other editors for that section, alert Slack #CMS-team so the team can escalate the fix.
    f. If it is not a CMS based page, notify the appropriate Slack channel based on the location of the broken link. (Will need an array lookup to pattern to match paths to content owner channels.)

3. The Front End build removes the requirement that broken links prevent the content release.

### Code Location
* [Location of link checker](https://github.com/department-of-veterans-affairs/vets-website/blob/a5c099bce3ed146194ee9c0725dbbc66829de073/jenkins/common.groovy#L157) in the FE code.
* [Location of the GovDelivery endpoint trigger](https://www.drupal.org/project/govdelivery_bulletins) in CMS code.
* The broken link processor would be a new custom Drupal module.

### Testing Plan
A phpUnit test would be written in the CMS codebase that would mock a broken link CSV and validate that an email notification was added to the notification queue.  This test would run on each CMS build on CI, dev and staging.

### Logging
The CMS will log the notifications being sent within the Drupal dblog system.

### Debugging
No additional tools are needed.  CMS developers will debug using xdebug and log messages.

### Caveats
1. A decision is actively made to value timely release of pages and alerts over the risk of having a broken link present for a short duration. Knowing about a storm closure or active shooter saves more souls than not getting a 404 when following a link.


### Security Concerns
There are no security concerns, as publicly revealing a list of active broken links is not revealing anything of potential risk.

### Privacy Concerns
There are no privacy concerns.  The CMS already has the email addresses of all editors in the CMS.

### Open Questions and Risks
1.  There is a risk of a broken link being published at end of day and nobody being around to fix the broken link until the next morning.  This plan does not account for after-hours coverage, though it could easily notify anyone that might be on-call for such an emergency. Should it be planned that there is an editor on call to handle any after hours publishing that result in a broken link?


### Work Estimates
The following milestones must be completed in order.  They are each blocked by their predecessor.
1. Make the broken link CSV public as part of the vets-website build. - VSP Team  3 story points (1-2 days)
2. CMS code to process the broken link CSV into notifications - CMS Team  36 story points (2 sprints)
3. Remove criteria that broken links prevent content release and slack notifications.  - VSP Team  3 story points (1-2 days)


### Alternatives


### Future Work


### Revision History
_The table below should record the major changes to this document. You don't need to add an entry for typo fixes, other small changes or changes before finishing the initial draft._

Date | Revisions Made | Author
-----|----------------|--------
Oct 1, 2020 | Created | Steve Wirt (CMS Team)
