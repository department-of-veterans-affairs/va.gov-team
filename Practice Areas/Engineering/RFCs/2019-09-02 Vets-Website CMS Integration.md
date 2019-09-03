# RFC: Stop failing the vets-website build due to HTML validation issues (i.e. broken links and accessibility)

- Date: 2019-09-02
- Related Issue: https://github.com/department-of-veterans-affairs/va.gov-team/issues/1466

## Background
Currently, during the Jenkins CI, a build is executed for each environment (also referred to as _buildtype_) in vets-website. That build consumes the GitHub files from vagov-content as well as the Drupal content from a GraphQL API, pipes both data sets through a series of build steps via the Metalsmith framework, then outputs static HTML.

One of the final steps of this process before outputting the HTML is to analyze every HTML file, parse the link references, and validate that each one points to a valid resource. This looks like -

- For each HTML page on the site (about 300 in total)
  - Grab every anchor and image element and grab the `href` or `src` attribute value
    - If the reference begins with a protocol such as `https:`, `javascript:`, `mailto:`, __skip it__
    - Otherwise, the reference should be considered relative. Decode that path into a file path.
      - Check that the file path points to a valid resource in Metalsmith memory
         - If yes, move on to the next link
         - If not, capture the failure into a failures data structure.
             - **If the failures data structures contains any failures, throw the error to fail the whole build.**

as part of its Jenkins CI for each environment, vets-website executes a broken link checker. This tools inspects every image reference and link (href value) of every public HTML page in the website. If the link is relative, it confirms that there it's pointing to a valid resource. If not, the build fails.

## Motivation
_Why do we want to change the current implementation? What problem(s) does the change solve?_

## Design
_Explain the proposed changes in enough detail so that a team member with working knowledge 
of the project could implement the change themselves. Bonus points if this is easily mappable
to user stories or specs._

## Risks
_What are the risks of the proposed changes?_

## Alternatives
_What other alternatives solutions were considered, why weren't they chosen?_
