# Decision log - Federal standardized header and footer 

## 3/20/24 - Design System / Public Websites agreements for build / launch
https://dsva.slack.com/archives/C01DBGX4P45/p1710948996488339?thread_ts=1709913842.908739&cid=C01DBGX4P45
* Design System Team will pick up the work to flatten the auth header.
    * Work will start in earnest when DS is past some of the upcoming USWDS v3 upgrade milestones.
    * The work that has been done gives the Design System Team a head start on converting the header & footer to web-components. The Design System Team will work on this next quarter with the expectation that we'll build web-components from the static versions that Randi has created and ship those in production.


## 1/24/24 - Design System / Public Websites agreements for build / launch
PW: Dave Conlon, Fran Cross, Jill Adams, Randi Mays, Chris Kim
DS: Matt Dingee, Micah Chang, Jami Gibbs, Ian Harrison, 
* Public Websites will implement design updates to launch first, not as a web component.
  * Justification: Componentizing does not fit within mandated schedule for attempting to ship updated designs by White House requested date of no later than 4/18/24, and by potential Sitewide contract end date/ team transition 3/31/24.
* Public Websites will attempt flattening the injected header, so it can be served more efficiently to TeamSites until deprecation.
* Design System team will own final componentizing of the header, likely as one large component.
  * Design System eng willing to support Public Websites engineering as needed, to make sure updates are usable toward the component effort. 
  * Public Websites FE to add DS engineers as code reviewers on anything that seems useful or where feedback would be helpful

## 1/8/24 - Injected header will fork
Dave Conlon
* Injected header will not adopt federal design. Timeline is too short for change management and/or all the testing required on injected sites to support the new header. (Web components, etc).
* We will determine technical path to fork, freeze design, and DaveC will run change management with TeamSite owners for awareness.
  * We will try to fast follow federal launch with a content update for the forked injected header/footer to update links to match the contents of VA.gov header/footer.
 
