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

Link validation not only ensures that HREF/SRC attributes are valid, but inversely, it ensures that the resources expected at the HREF/SRC does exist. For example, if the page at `/health-care` were to be unpublished by mistake, the link checker would catch this by flagging every HREF pointing to `/health-care`, effectively safeguarding a key page of the website.

## Motivation
_Why do we want to change the current implementation? What problem(s) does the change solve?_

The modernized VA.gov has its roots in the now-gone Vets.gov, both originating from vets-website. On Vets.gov, content pages lived in vets-website in a directory aptly-named `content` in the form of plain-text Markdown files. When a pull request was issued to vets-website, the Jenkins CI would execute a build, and if there were broken links discovered, the build would fail just as it does today. 

This made sense during Vets.gov, because the broken-link-checker was ultimately validating work that was entirely under its own domain - the content produced entirely by Markdown files. Therefore, via Jenkins CI, we could execute the broken-link-checker on an open pull request and prevent that pull request from being merged if a broken link was found, knowing that the broken link originated from - and therefore could be resolved in - the branch associated with that pull request. __It served as a preventative measure to stop erroneous content from entering the master branch.__ 

However, under VA.gov, we have migrated content out of GitHub and into the VA CMS, Drupal. This Drupal implementation is "headless", meaning that although it contains the adminstrative and content-authoring user interfaces, it does not contain the templates used to build the user-facing HTML. Instead, the templating layer lives in vets-website. This means that CMS content in the form of JSON must be processed through the vets-website build pipeline in order to be rendered as HTML. Then, before outputting the finished HTML, we execute the broken link checker.

### Issues with current implementation

__The immediate issue with executing the broken link checker post-CMS integration is that although CMS content must pass through vets-website in order to be published as HTML, the erroneous content itself has already been saved into the CMS, which is then pulled by all branches of vets-website__. 

This is completely different than the Vets.gov model of validating broken links, because it means that when a bad link is saved into the CMS, that issue is immediately inherited by all branches in vets-website. The Vets.gov model prevented links from entering the master branch of vets-website and affected only those working in that pull request, while the model post-CMS integration allow the errenous content to immediately enter all branches of vets-website, potentially haulting merges/deployments until it has been resolved. This is especially cumbersome because the erroneous content of course does not live in vets-website - it lives in a completely separate system (Drupal) that has its own authentication system. Finally, since the bad link manifests itself as in error vets-website - a domain maintained by engineers - it is not raised to the practice area that manages it - content. 

### But doesn't the CMS cache fix this issue?
When a build in vets-website fails during Jenkins CI, the build will fallback to a CMS "cache" and attempt to rebuild. This model allows us to build the site using the last "good" data pulled from the CMS, essentially allowing us to deploy application code without worrying about grabbing the latest content. This model is complex and not foolproof, as we saw a broken link in both latest CMS and CMS cache [today](http://jenkins.vfs.va.gov/blue/organizations/jenkins/testing%2Fvets-website/detail/master/5213/pipeline), and it also prevents new CMS content from being deployed even though the broken link itself may live in a completely separate area of the site. Since builds fallback to the CMS cache almost exclusively due to broken links, the work proposed by this PR could be an opportunity to reconcile the concept of CMS cache with the latest CMS data, creating a single source of truth, since (spoiler alert!) broken links would no longer be a reason to invalidate CMS data.

## Design
_Explain the proposed changes in enough detail so that a team member with working knowledge 
of the project could implement the change themselves. Bonus points if this is easily mappable
to user stories or specs._

## Risks
_What are the risks of the proposed changes?_

## Alternatives
_What other alternatives solutions were considered, why weren't they chosen?_
