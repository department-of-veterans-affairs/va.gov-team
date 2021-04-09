## AP Problem Space Definition Summary

_As an "Accelerated Publishing" team member, I need to understand the problem space in depth before attempting to recommend solutions, so that I can avoid risks and miscommunication down the road._

This work was done in a collaborative workshop using [this mural board](https://app.mural.co/t/vagov6717/m/vagov6717/1617047958544/3dbc389b51891b47d460ae01860a0df4c3316433).

## What is the business need? What is the problem?

*   Business units not willing to adopt CMS
    *   VA leaders are reluctant to migrate their content to a system that does not meet or exceed industry standards and fulfill the VA Mission, which can pose an existential risk to OCTO-DE’s mission
*   Mission / Editor Experience
    *   Delayed publishing has a direct impact on editors’ ability to deliver Veteran-centered content that is consistent, accurate, and timely.
*   Cost
    *   The technical complexity and opaqueness of the content publishing process requires significant human capital to understand, explain, and execute, thereby creating an excessive cost to taxpayers.

## What do VFS and VSA Engineers want?

*   Add incremental builds -- if one page changes, we only build that page
*   Find a way to decrease the complexity. This might involve taking a close look at how we could better organize the build steps or it could be finding a different tool that could help us improve the build process.
*   Resolve broken links blocking builds per CMS team recommendation
*   Providing better documentation for the GraphQL API with sample queries for traversing entity relationships

## What have we tried?

**Actions**
*   CMS-Export/Transformers
*   Different publish methods by urgency (sitewide alert, vamc alert, and cms content)
*   Increased content release cadence
*   Used training to mitigate sub-optimal publishing experience

**Successes**
*   Breaking up monolithic GQL query bought us time for a new solution
*   GraphQL stability improvements
*   Monitoring individual GraphQL queries identified the slowest queries and opportunities for optimization


## What do we want to achieve?
*   One Click Instant Publishing
*   There is no "build" or "build time" concept
*   Delightful Experience for product Developers
*   A user interface + workflow that sets clear expectations for publishing 
*   One person editing one page can't break the content deploy
*   Seamless publishing experience for editors (no detection of decoupled back end state)

## How might we...

*   allow in-place content editing
*   give editors the ability to publish content in real-time?
*   design our publishing workflow/interface to match users expectations from other leading publishing products? 
*   allow content from multiple sources?
*   ensure that the veteran experience is not compromised?


## Knowledge Gaps

*   Expected number of businesses / users/ content onboarding to CMS in 2021/22 and max content in the next 5 yrs
*   Definition of success
*   Who approves the approach?
*   Is infrastructure cost a limiting factor at any level?
*   URL/path changing during build process


## Known Risks

*   Perfect being the enemy of good/better
*   Lack of alignment on the definition of "instant" 
*   Misalignment on the objective at OCTO-DE level
*   ATO says no (or it will take too long for change approval)
*   Insufficient resources 

## Assumptions

* Drupal and Preview will remain accessible via VA Network only (SOCKS/CAG/LAN)


## What does success look like?

*   I press publish and I see my content live
*   Content deploy time is completely independent of the amount of content 
*   The overall codebase is simpler at the end of the process
*   A new developer can understand the overall architecture in 3 minutes or less
*   The team feels really good about their accomplishment(s) at the end of this initiative


## Who is affected by the problem

**Those who have actions/input**
|WHO|DETAILS|
|---|-------|
|Jeff Barnes, Deputy OCTO-DE|Initiative Sponsor who will unblock the team at the highest levels if necessary. Not involved day to day|
|Rachael Rouche - OCTO-DE | Platform Product Lead|Will work with Mike to help prioritize our work across platform crew, including assistance with cross-team dependencies.|
|Mike Chelen, OCTO-DE CMS PO/Technical Advisor|1. Confirm there are no technical limitations. Document rationale for blockers. <br>2. Main OCTO-DE POC, will help prioritize our work across platform crew, including assistance with cross-team dependencies. <br>3. Review / Provide inputs / Sign off on solution. Buy-in.|
|Dror Matalon - OCTO-DE Head of Engineering, Platform Co-Lead|1. Confirm there are no technical limitations. Document rationale for blockers. <br>2. Review / Sign off on solution.|
|Dave Conlon, OCTO-DE Facilities PO|Key/primary stakeholder - OCTO-DE POC for communicating our timelines to Facility Stakeholders/business units. Set expectations for business units.|
|Michael Fleet & Demian Ginther  - VSP Leads|Review / Provide inputs on solution. Buy-in.|
|Stan Gardner + team|1. Encourage PAOs and others to participate in research. <br>2. Bridge for change management.|
|ATO POC|Approve third-party tools [if any] / Modify ATO - TBD.|

**Those who will be impacted**
|WHO|DETAILS|
|---|-------|
|Centralized CMS editors ie - Beth Potts, Danielle Terry (VA / USDS editors), Randi Hecht|Leaders of certain initiatives. Power users whose day to day experience will be greatly improved with this effort. <br>Most empowered group of editors working on larger content teams who may have more complex needs for communication between individual editors.|
|Localized CMS editors (ie Ryan Stubblebine)|Our largest group of CMS editors who will need the most amount of support for change management and training. <br>Ryan is a CMS editor at Pittsburgh VAMC - early adopter, heavily invested in  enhancements/improvements|
|Vet Center editors|Newest group of editors whose limited contact w/ the CMS may impact change management.|
|OPIA Teamsite business owners/editors|Selling to them. End customer. Have doubts about adopting CMS.|
