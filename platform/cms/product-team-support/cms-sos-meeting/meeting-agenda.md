### Meeting Purpose
This Scrum of Scrum (SoS) meeting is to ensure all teams working with the Drupal CMS for VA.gov are aligned on any shared work or dependencies.

### Running Agenda

2/2/2026
*  CMS team is revisitng incident management for critical URLs. For an incidents with homepage, is there a best way that we can quickly notify a Sitewide engineer for support?

1/22/2026
*  Rescheduling this meeting so that more OCTO folks can join. Does Mondays work for folxs?
*  Changes to template migration process:
     - A new CMS PM will be starting on Monday (1/26) who will be taking over the PMing for template migration
     - We are going to be moving to schedule deployment of Next Build
     - We are going to be moving QAing away from staging and, likely, onto dev 

### Notes
- Reschedule meeting to Monday (avoiding 11:30am - 1pm EST)
- Kayla will be refining the structure and timing around QA
- Dave Pickett: homepage - "we've gotten through functionality and accessibility. We will be starting design. We are almost throught the first one. All of the findings were unrelated to next-build but are true in content-build. Jackie will fix this. Nothing implicates next-build or the migration work."
- CMS Will give notice to Sitewide when we switch from staging to dev
- The status of templates is scattered - we can ask Fran to get a clearer view on the status of templates.

1/08/2026
* Next Build QA
    * Next Build environments on Tugboats don't reference the content on that Tugboat ([slack](https://dsva.slack.com/archives/C01SR56755H/p1767737279782409))
      Draft ticket to fix this problem here: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/23168
    * Check in about upcoming templates that need to be QAed (see ([here](https://dsva.slack.com/lists/T03FECE8V/F0A5B9Z1HCG)))
     We will regroup about capacity during next week's template migration sync. Renata will be added to the meeting. 
    * Content Build's page-playbook.html (more details ([here](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/19708)))
      Per Dave Pickett: look at the queries associated with the playbook and ask POs
 * Drupal 11 Upgrade Timeline 

12/11/2025
* Unpublished content in right-hand menu on Content Build page: https://www.va.gov/decision-reviews/
    * We have seen similar issue with CB showing unpublished content previously.
    * Do we want to just publish this content since Editors and Veterans are acustomed to seeing it already?
    * [Source Slack convo](https://dsva.slack.com/archives/CT4GZBM8F/p1764891158001159)
    * No POs present for SoS so Kelly to bring this to Erika and Randi
* QAing Support for Template Migration
    * Ready Now - Homepage ([Accessibility QA ticket](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/22960) / [Functionality QA ticket](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/22961))
  
  Can this follow the same process with Dave and Jacqueline helping with QA? - Grace has added tickets to the Sitewide board.  Fran asked for timing and Grace said Homepage can be worked asap.  Fran said soonest would be the upcoming Sprint that starts next week but it may take multiple sprints due to the holiday.  Each ticket is currently estimated at a 5 but we can discuss if that is accurate.  The CMS Team would like to have a kick-off meeting when QA is started so we can show the QA tools we have available.  
  
    * Ready after 1/7/2026 - Benefit Detail Page ([Accessibility QA ticket](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/22966) / [Functionality QA Ticket](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/22965)) and VAMC Detail Page ([Accessibility QA ticket](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/22864) / [Functionality QA Ticket](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/22865)) - Fran to share this QA plan with Renata for the VAMC Detail Page coming up.
* CMS team will be picking up [Migration: Outreach Hub landing page](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/20544) and [Migration: Outreach Hub Publications listing](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/20590) - Sitewide is working a change to a data structure the Publication Listing page uses.  CMS Team will communicate with Dave from Sitewide on timing of this change.

* Burial & Memorials URL Redirect - Sofia asked Fran what the steps are that the CMS Team will need to do.  
* Steps needed
  - Updating side nav - done by CMS Team
  - Updating best bets
  - Updating crosslinks
* Fran is going to check and follow-up with Sofia
* We do not have this process documented so we have a lot of open questions around ETA of a fix
  * Fran to enhance the issue template with steps



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
    
