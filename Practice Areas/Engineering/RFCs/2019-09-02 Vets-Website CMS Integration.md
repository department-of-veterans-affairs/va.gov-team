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
             - **After all HTML pages have been processed, if the failures data structures contains any failures, throw the error to fail the whole build.**

### Why are we doing this?
The modernized VA.gov has its roots in the now-gone Vets.gov, both residing in the vets-website GitHub repository. On Vets.gov, content pages lived in vets-website in a directory aptly-named `content` in the form of plain-text Markdown files. When a pull request was issued to vets-website, the Jenkins CI would execute a build, and if there were broken links discovered, the build would fail just as it does today. 

This made sense during Vets.gov, because the broken-link-checker was ultimately validating the content produced entirely by our Markdown files. Therefore, when the broken-link-checker detected an issue, the issue originated vets-website, and is fixable there. 

### Why we still find value in this

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
