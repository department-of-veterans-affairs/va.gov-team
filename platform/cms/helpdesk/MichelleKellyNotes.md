
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
    * Status of [Flagged Facilities tickets on the board](https://github.com/orgs/department-of-veterans-affairs/projects/1859/views/1)
        * Stefanie and Sofia went through and updated all tickets, closing many
    * Mobile Medical Units are VAMC Facilities per Drupal, but they're also not really considered true facilities by VAMC editors.
        * We've had MMUs archived in the past with editors telling us “This is not a true clinic, but a Mobile Medical Unit that we use for outreach." (Actual quote)
        * MMUs at this time: 122 total -- 27 archived, 74 in draft, 21 published
        * May want to consider editor outreach re: whether MMUs are in use and if they need homepages.
            * Ask Justin
            * Ask Editors what they need 
        * How strict should we be about enforcing health services with MMUs?
            * Ask Justin
    * St. Paul to Twin Cities Vet Center name change – is it happening? Mixed updates from Jira, would like to confirm.
        * Michelle to follow up to see if we plan to roll the change back in VAST or just go ahead with the change
