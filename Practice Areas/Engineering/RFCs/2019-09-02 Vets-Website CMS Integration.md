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

This is completely different than the Vets.gov model of validating broken links, because:

1. __When a bad link is saved into the CMS, that issue is immediately inherited by all branches in vets-website__. The Vets.gov model prevented links from entering the master branch of vets-website and affected only those working in that pull request, while the model post-CMS integration allows the errenous content to immediately enter all branches of vets-website, potentially haulting merges/deployments until it has been resolved. 
1. __The erroneous content does not live in vets-website__ - it lives in a completely separate system (Drupal) that has its own authentication system. 
1. Since the bad link manifests itself as in error vets-website - a domain maintained by engineers - __the error is not raised to the practice area that manages it__ - content. 
1. As the CMS content continues to expand under WBC (Web Brand Consolidation), __there will be potentially hundreds of users updating content in the CMS__. This exponentially increases the risk of erroneous content being introduced.

### But doesn't the CMS cache fix this issue?
When a build in vets-website fails during Jenkins CI, the build will fallback to a CMS "cache" and attempt to rebuild. This model allows us to build the site using the last "good" data pulled from the CMS, essentially allowing us to deploy application code without worrying about grabbing the latest content. This model is complex and not foolproof, as we saw a broken link in both latest CMS and CMS cache [today](http://jenkins.vfs.va.gov/blue/organizations/jenkins/testing%2Fvets-website/detail/master/5213/pipeline), and it also prevents new CMS content from being deployed even though the broken link itself may live in a completely separate area of the site. Since builds fallback to the CMS cache almost exclusively due to broken links, the work proposed by this PR could be an opportunity to reconcile the concept of CMS cache with the latest CMS data, creating a single source of truth, since (spoiler alert!) broken links would no longer be a reason to invalidate CMS data.

## Design
_Explain the proposed changes in enough detail so that a team member with working knowledge 
of the project could implement the change themselves. Bonus points if this is easily mappable
to user stories or specs._

The link validation is the more pressing issue since it occurs more often, but the accessibility tests would need to be addressed as well. I recommend doing this in two pieces.

### Broken-Link Checker

__The broken-link-checker should no longer execute during a website build, but during a later stage of the CI.__ It should execute similarly to the `prearchive` stage of our CI, where the website has already been successfully built, and occur only when the CI is executing on the master branch. The outputted HTML is then processed and evaluated for broken links. We can summarize the result into a "report", with criteria that could include number of pages processed, number of links processed, any broken links found, etc. 

We could also define some build-breaking criteria, where we have reached a certain threshold that our is determined by our build to not be deployable. For example, perhaps 100 broken links is _okay_ (considering the website will eventually be composed of many, many pages), but if there are 100 broken links to the same resource (such as `/health-care`), then this is not an acceptable state for the website to be deployed, because a key resource is missing. In this case, the build or deployment will fail.

If there are other evaluations that we wish to perform at this step, we could group that with the broken-link checker into a general "health check" stage. As a later iteration, we could explore emailing the results of the health check to an email listing for CMS users, so that the alert is passed to the people managing the content.

### Accessibility tests

__The accessibility sub-step of our Integration step in our CI should be removed and replaced by a warning banner from our CMS Preview Server__. Currently, the accessibility step works by stepping throughout the generated website sitemap and executing an accessibility check via `axe-core` on each page. If one page fails, the whole build fails. Because HTML containing an accessibility issue can be entered into a CMS WYSIWYG, it has the same issues as the broken-link checker.

Currently, we already have accessibility tests executing in our application's E2E (end-to-end) tests via the `axe-core` module. This means that the React portion of the website should already largely meet accessibility standards, or at least in what can be automated. This means that only content pages need to be evaluated.

Instead of failing a build when an accessibility issue has been saved into the CMS, we should introduce "warnings" into the CMS Preview Server - the CMS Preview Server injects and executes `axe-core`, then when an issue(s) is found, an alert banner is rendered to the author with the results. We could also enable [best practices](https://www.deque.com/axe/axe-for-web/documentation/api-documentation/) to help encourage higher quality accessibility practices than we do currently. 

This proposal has already been captured into [issue 1794](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1794).


## Risks
_What are the risks of the proposed changes?_

The largest risk by far is degraded website quality overtime. If broken links become non-breaking and the parties responsible for maintaining the content aren't made aware, we could see broken links and small accessibility issues becoming widespread throughout the site.

## Alternatives
_What other alternatives solutions were considered, why weren't they chosen?_

1. When a broken link enters the build, notify cms-engineering channel of DSVA Slack to get the link fixed quickly
    - This was actually already implemented, but probably won't scale well. The first issue is that a broken link still breaks the automated deployment, and even when leveraging CMS cache, it blocks all other totally valid content from being published. Additionally, the DSVA Slack users are not necessarily who made the update or even who managed the affected area of the site. Eventually, it is also likely that most of the CMS users will _not_ be on Slack, and the small team that _is_ on Slack won't be able to regularly handle breaking issues.
1. Keep doing things the way we're doing them now
    - We've been able to recover each time after erroneous content is introduced into the website, so if no other team members really see the issue here, then we can keep right on going down the same path to see where we find ourselves in X amount of time.
1. Prevent broken links from entering the CMS in the first place
    - This was said to not be technically possible by the CMS team. Because there are so many moving pieces in writing content, we can't reliably determine when a link is pointing to an invalid resource.
