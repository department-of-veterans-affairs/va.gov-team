
# UX-focused project summary (February 2017)

## Versions
* v.1: launched ~Dec 6, 2016, only displayed disability compensation claims
* v.2: launched Feb 7, 2017, expanded to "all" claims (all the ones accessible via eBenefits), separated closed claims from open claims via tabs in the list view (but when a claim moves from open to closed, it displays an alert at the top of the list for 30 days after closing)

## Basics
* 42% of calls to national call center calls are about claim status.
* Average processing time is about 7 months.
* Users often prompted to submit additional evidence.
* Prior research indicated lots of anxiety and trust issues.
* Redesign goals = make it easier for users to understand:
    * What's going on now?
    * How long will it take?
    * What happens next?
    * What do I need to do?

## Discovery & Research
* Hundreds of pages of frog research
* VSO interviews
* 2 Rounds of usability testing (one round of notes in optimal workshop's reframer tool if analysis or quotes are needed)
* Contact center impressions of common painpoints

## Key design improvements
* Overall: simplified design, responsive, accessible, more plain language.
* Focus on status of claim in context of the whole process (ebenefits only shows the step you're in and getting to info about the process takes 2 non-obvious clicks) and adding tracked item activity (eg., alerts that a file is needed and notices that files were uploaded) within the timeline to help emphasize that the claim is moving forward.
* Further actions are needed from the Veteran are prominently highlighted at the top of th status detail page and within the timeline.
* Simplified the number of steps from 8 to 5 (combined middle "processing" steps) to facilitate a better understanding of the process. With the old 8 steps, many claims would actually appear to jump backwards, causing a great deal of frustration for users. By combining the middle steps in the display, this backwards movement is eliminated. There were concerns from the contact center that while ebenefits version is still live that users who use both would be confused and calls would increase. Contact centers have not reported this to be happening now.
* Estimated decision date only shows end of range (ebenefits showed 2 date range) to reduce calls once early date is reached, language to emphasize that it's truly an estimate (a common point of confusion), plain language revision for "learn about this estimate" page.
* Files tab: More clear distinctions of what needed, by when, and by whom.
* Plain language revision of "Ask for your claim decision" page to better describe this confusing part of the process.
* Optional documents "Additional evidence" moved to less prominant location on files tab (ebenefits showed it in prominant location but apparently it rarely needed and when it gets over used to share too many documents, it can actually slow down processing time).


## Key documents
* Design (sketch) source files: Ask Suzanne Chapman.
* [All design-related docs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/claim-appeal-status/claims-status/track-claim-status/design)
* [Flow diagram of eBenefits version](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/claims-status/track-claim-status/design/ebenefits-flow-for-claim-status.pdf) with discovery/painpoint notes.
* Mel's V.1 [video walk-through](https://www.youtube.com/watch?v=74u3L23uX4M&feature=youtu.be)
eBenefits screenshots & redesigns
* [Screenshots of v.1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/claims-status/track-claim-status/design/claim-status-screenshots.zip)
* [User accounts](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/mvi-staging-users.csv)

## Other details
* There are no redirects in place but eBenefits displays a banner on their claim status detail pages encouraging their users to "try" the new vets.gov version.
* Claim status is navigable on vets.gov via site-wide navigation but also through disability benefits related topics. 
* Fake user test accounts: usable on staging and dev. Suzanne tends to use Johhnie Weaver - who has many claims with some set up to show certain dynamic elements.

## Additional work needed
* Make the "Ask VA" alert only show when a 5103 has been triggered and move alert to top of status tab. (When claim status was only disability claims, we were able to do this and displayed the alert at the top of the status tab but weren't able to make it dynamic easily when expanded to all claims and didn't want a glaring alert to show all the time on all claims when it might not actually be needed -- so we moved it to the bottom of the files tab).
* Complete work to add descriptive headers (to replace "request 1") and corresponding descriptions. Josh started revising these headers but we were unable to complete the technical aspect in the release timeline. Also, solution devised wouldn't have been sustainable as we were going to populate with a separate duplicate file not actually connected.
* More work on system down messages.
* Integrate efolders so files uploaded can be viewed.
* Notifications were desired but not feasible in timeframe.
