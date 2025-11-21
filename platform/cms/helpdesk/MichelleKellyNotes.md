
* Flagged Facilities
    * Fredericksburg 2 - archived the Health Services but the facility page is still published.  Do we want to archive the facility page too?
    * Get Michelle's opinion on URL publishing process for name changes options:
        * Update URL alias in Drupal first:
            * Wed, Nov 19, 9:49 am: I update the URL of a facility in Drupal to match the new name
            * Wed, Nov 19, 10:20 am: The content release completes, making the URL of the facility the new URL on [va.gov](http://va.gov/)
            * Wed, Nov 19, 10:21 am: A Veteran searches for the facility either on Google or the Facility locator, clicks the link and gets a 404 because the link in Google and the Facility Locator is to the old URL
            * Wed, Nov 19, 10:22 am: A redirect is created in the revproxy repo (PR created, reviewed, approved, merged--phew, that was fast!).
            * Thurs, Nov 20, 9:30 am (almost 24 hours later): The revproxy change is deployed. Finally, the URLs are in sync again.
        * Publish URL Redirect first:
            * do the redirect, wait until it deploys
            * then do the url change in Drupal and 30 minutes later, it's live. We have a broken link for 30 minutes as opposed to 23 hours.
            * We determined this is a better strategy
                * We want to look at the process some more to determine where we can streamline
                * We want the archiving of the Facility page to happen asap after the redirect is complete
                * We can change the process to archive the Health Services for an Editor so we don't need to wait for them, but we need to check if there are other locations in the System that offer the same HS, otherwise we need to archive at the System level as well
                * We should look for ways to automate
    * Status of [Flagged Facilities tickets on the board](https://github.com/orgs/department-of-veterans-affairs/projects/1859/views/1)
        * Stefanie and Sofia went through and updated all tickets, closing many
    * Mobile Medical Units are VAMC Facilities per Drupal, but they're also not really considered true facilities by VAMC editors.
        * We've had MMUs archived in the past with editors telling us “This is not a true clinic, but a Mobile Medical Unit that we use for outreach." (Actual quote)
        * MMUs at this time: 122 total -- 27 archived, 74 in draft, 21 published
        * May want to consider editor outreach re: whether MMUs are in use and if they need homepages.
            * Ask Justin
            * Ask Editors what they need
            * There are different kinds of MMUs: mobile units that move on a schedule and offer services to unhoused Veterans, mobile vaccination units, ones used only in emergencies, etc.
        * How strict should we be about enforcing health services with MMUs?
            * Ask Justin
    * St. Paul to Twin Cities Vet Center name change – is it happening? Mixed updates from Jira, would like to confirm.
        * Michelle to follow up to see if we plan to roll the change back in VAST or just go ahead with the change
