### Meeting Purpose
This Scrum of Scrum (SoS) meeting is to ensure all teams working with the Drupal CMS for VA.gov are aligned on any shared work or dependencies.

### Running Agenda
11/26/2025
* [Flagged Facilities](https://github.com/orgs/department-of-veterans-affairs/projects/1859/views/1)
    * tickets have been updated
    * Update to URL publishing process
        * Publishing the URL Redirect before the URL of the Facility in Drupal causes less time for the page to be a 404 so we will be updating the runbook and Mural diagram to match this change.
    * Setting up a Flagged Facility touchpoint since that is a different audience
       * Item to add: touch base on the current tickets and make sure they are ready for handoffs
       * Set up cadence for once a sprint
       * Kelly will reach out to Renata and Alex and keep Michelle and Jon as optional
       * Sitewide facilities will create the alias and let CMS team know via GH ticket and Slack (and update the status of the ticket)
* Template Migration
    * Launching finished templates in December (no firm dates yet due to 11/26/2025 code freeze):
        * VAMC Billing & Insurance (11/25/2025)
        * VAMC Health Services listing
        * VAMC Operating Status
        * VAMC Policies
        * Vet Center Locations list
        * VAMC Register for care
        * VAMC Medical Records Office
     * QA needs for upcoming templates
        * See notes in Template Migration sync: https://docs.google.com/document/d/1Q-0CvPaMBzo6xBCGUU0ofTJIV-KgpEvKlN99QJqCP1o/edit?tab=t.0
        * VAMC Detail Page and Benefit Detail Page are the first templates that should be ready

11/13/2025
* [Flagged Facilities](https://github.com/orgs/department-of-veterans-affairs/projects/1859/views/1)
    * Stefanie is updating CMS Team tickets
* [Investigate Find Forms URL Issues #22299](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/22299)
* Henrico 2 - if we archive a page for a Facility that still comes back from the Facility Locator, how does it behave?
    * Facility does not need to be published to have an operating status
    * Archive the page and mark with 'Coming Soon', add to details to say it is a dental clinic that is not yet open

  

10/30/2025
* Flagged Facilities - we will talk specifics about process on Monday but want to check in on if there are any outstanding items

Anything else that was outstanding from the Sitewide team? Renata -- we still have a few questions that we will raise on Monday's meeting. We have a few tickets that are blocked because the new URLs haven't and can't be published during the shutdown. 
Action item: Renata will send Kelly the blocked tickets. Kelly will explore adding a new board to house both tickets. 

* Benfits detail pages - I saw there was work planned for PW, as a reminder these are in the middle of migrating and will be completed within the next 2 sprints

There's no immediate work, the work is in the future and will only be in Drupal. Fran will coordinate with Laura is there's any immediate issues that comes up with benefit details pages. 

* CLPs - There are instances of Draft content currently showing on prod, what should we do?

There are draft promos that are getting published on campaign landing pages. Randi will spot check the draft promos to make sure there's nothing terribly wrong with them and then published the draft promos. 

* Sidenav? Maybe, depends on attendees

Reverse the original decision. 

* Rescheduling this meeting
* First deployment after the code freeze is lifted.

10/16/2025
* Flagged Facilities sync (continuous agenda item)
   * CMS Platform team has updated the Flagged Facility runbook issue templates
   * CMS Platform team can set up a 1-off session with the Sitewide folks to review the processes and ticket ownership
* Drupal 11 Upgrade testing
   * Sitewide team should account time for testing in early 2026 for the Drupal 11 update testing
   * More to come in this SoS meeting as planning is underway
* Migration
  * Outreach Hub
    * Laura to ask Randi
  * Forms detail pages
    * This is being migrated by CMS Platform team, but sitewide team will be making changes soon
       * Timing should work out where migration can be finished and Sitewide can make changes on the migrated version
    * CMS Platform team to touch base with Sitewide folks to understand labels on their board so we understand what work is coming up
  * CTA analytics
    * Laura to reach out to Randi

10/02/2025
* [Guidance on seeking support from the Platform CMS Team](https://dsva.slack.com/docs/T03FECE8V/F09GWJK37PB)
* Drupal CoP meeting - anyone else want an invite?
* Laura's questions section:
  * Homepage
    * [Homepage fallback](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/12292) needed anymore?
         * Michelle's feedback: I don't think we need to migrate that feature to Next Build.
    * Sandbox homepage?
         * Michelle's feedback: I don't think we need to migrate that feature to Next Build. 
    * No search homepage?
         * Hasn't been updated in 7 years. Michelle's feedback: I don't think we need to migrate thate feature to Next Build.  
  * Resources and Support status
         * Fran: we have feedback from stakeholders and collab cycle and we are heading down to make the updates in Drupal and the UI. We will coordinate with Laura and Tim when we are ready for implementation. Especially important because elements of Resources and Support will be difficult to do in Next Build.  

09/18/2025
* Welcome and stage setting
  * Discuss meeting purpose
  * Ensure invitee list is correct
    * Sitewide PMs should attend.  Kelly to add Renata to invite
* Discussion Topics 
  * Scheduling a Meet & Greet for the teams
    * schedule a 1-off, wait til everyone new is onboarded enough to join - target week of 9/22
  * Agenda doc location
    * keep in GH
  * All of Laura's questions:
    * Vet Center launch
      * do we want to launch the VC main pages, or wait for all VC pages? - Need to discuss with Renata and Alex and Bryan Thompson - Laura to set up
    * Homepage or CLP?
      * Any structural changes planned for these pages? - not that we know of
    * Related links component
      * Links are Headings, but that's not great for accessibility, can we change that everywhere to not be Headings? - yes!
    * Promo images
      * Would we ever want to change this to be contextual? - Maybe, but Laura can make the change
  * Drupal 11 Upgrade - must be completed by June 2026
    * Will require collaboration with Sitewide teams so we anticipate needing bandwidth from sitewide teams in Jan./Feb 2026
    * Jon: anything being deprecated with 11? - Not that we have found yet from CMS team.
    * Randi: any changes for Editors that we will need to create/update training?  Yes, but not significant.  We know the tool bar formatting is changing which will be more accessible.  
    
