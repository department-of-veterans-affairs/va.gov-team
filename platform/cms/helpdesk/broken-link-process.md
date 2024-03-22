# CMS Team Tier 1 broken links resolution process
This is one step in the [overall broken links strategy](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/READMES/broken-links.md).

## Review broken link alert in **#content-broken-links**
The front end broken link checker runs during each content build (content release), and reports its findings in jenkins logs as well as by posting to the **#content-broken-links** Slack channel in DSVA Slack. CMS Team Tier 1 reviews this Slack channel for triaging/resolving.

Content builds occur continously (the next one starts after the previous one finished) from 8am-8pm ET weekdays (except some Federal holidays). Content builds can also be triggered outside this schedule when editors save certain content types (banner alerts, operating status) manually by admins, pr by bulk publishing). If any broken links are found, they will be posted in the Slack channel.

Note: This is not the same type of broken link that appears in Drupal to editors. Editors may not be aware of front end broken links.

The Slack alert follows the format:

```
@cmshelpdesk 1 broken links found in the vagovprod build in a content-only deployment

http://jenkins.vfs.va.gov/job/builds/job/content-build-content-only-vagovprod/467/display/redirect

pittsburgh-health-care/programs/covid-19-vaccines :

<a href="/myhealth.va.gov%20">My Health<em>e</em>Vet</a>
```

## Respond to a broken link alert
1. Review the broken link alert.
2. In that broken link alert Slack thread, indicate with an emoji or a message that you are reviewing it. For repeating broken link alerts (not resolved after the first time it appears), you don't need to repeat this action on subsequent alerts, unless someone aks.
3. Determine if the broken link is related to a user action.
  - If yes, create a Jira Service Desk ticket to track this issue. Labeling for the JSD ticket should includehe `broken-link` label
4. Determine if the broken link is not user-caused.
  - The **#content-broken-links** channel can be used to help determine the root cause and alert Tier 2.
  - If Tier 3 support is needed from another team, use that team's support Slack channel to make the team aware of it.

## Find the problem
A broken link alert may look like:
```4 broken links found in the vagovprod build
@cmshelpdesk
http://jenkins.vfs.va.gov/job/testing/job/vets-website/job/123456/display/redirect
Page,Broken link
dir/url-of-page,[a href="/node/1234">Linkname</a>
dir/url-of-page,[a href="/node/1235">Linkname</a>
dir/url-of-page,[a href="/node/1236">Linkname</a>
```
There is a list of one or more pairs: first the URL for a page, then a comma, then the details (including URL) for the link. We should be able to visit the indicated node(s) on the prod environment, to see its recent edit history and evaluate the cause of the broken link.

Potential steps:
1. Visit each page indicated in the alert notification (per above)
2. Look at the overall content list to see recently updated nodes
3. For any node, look on the right side for Revisions and Recent Changes to gather context about the person publishing and what happened.
4. Review the page, look at the links, and generally troubleshoot by gathering evidence. 
5. Look at the user(s) who've recently updated nodes, to see what Section they're in, and then looking at recently updated nodes for that Section.

### Common broken link causes and how to remedy them
#### Race conditions
##### Examples
- Common with List content types (Stories list, Events list, Leadership list, News releases list) and their related individual content types (Stories, Events, Staff profies, New releases).
- These content types are in the process of being published which triggers a false alarm due to a race condition between published/unpublished content types.

##### Resolution
These can be ignored as they resolve in the next content release. If they continue to show in the next report, they are not a race condition and should continue to be diagnosed.

#### Improperly formatted or invalid URL
##### Examples
- User copied a URL from VA email and the Safelinks code is appended to the URL
- Missing https:// or http:// on external links
- m. in front of the URL indicating a mobile URL
- Internal VA page that the public can't access, usually starting with vaww.
- Direct link to a Drupal node (instead of the va.gov page) that the public can't access, starting with prod.cms.va.gov

##### Resolution
While some of these issues may be easy for Tier 1 to fix, they are also a learning opportunity for the user. You may fix the issue and follow up with the user in Jira, or you may contact the user in Jira with instructions for fixing it. There may also be a Knowledge Base article you can share with the user for reference.

### Archiving a page without removing links to it
This is often indicated when multiple alerts show different source pages but the same link name. In this case, it may be necessary to re-publish the page and then alert the user through Jira, letting them know which pages contain the broken link and asking them to remove those links before archiving.

## Resolve the problem

### Broken link caused by user error
Tier 1 may
- Find the problem and fix it, following up with the user in Jira.
- Contact the user in Jira to fix the issue.

### Broken link that doesn't appear user-caused
If the cause and solution are not easily identified, post in **content-broken-links** for awareness and assistance from Tier 2. If Tier 3 support is needed from another team, use that team's support Slack channel to make them aware of it.

### Best Practices
Perform the least destructive to most destructive steps to resovle a broken link.  For example:
*from Least to Most*
- Edit the URL of the bad link and correct it, then Publish the content
- If the source of the link is a draft page, Publish the draft
- Remove the problematic link
- Unpublish the page that was the problem

### Always contact the author
Contact the author of the problem content to explain that Veterans can't access broken links. Ask them to fix it or, if you fixed it, explain the fix so they can review it.

This request should include:
- The page in question
- Which link was broken 
- What actions they need to take or what actions you took to fix it.
- Links to relevant Knowledge Baser articles, if any

Note: Editors do not understand our broken links alerts. Don't copy and paste the alert language to them. Use plain language.

See a suggested email template below:

**Subject/ticket title:**
>We’ve made a content change to your CMS page

**Message body:**
>Hi name,
>The page that you edited today, page title, triggered an alert that it contained a broken hyperlink. Broken links are a problem because Veterans can't access the important information you're trying to provide.

>The problem hyperlink was: link text which linked to https://badurl.whatever.gov. We corrected it to: https://goodurl.whatever.gov. Please double-check the page to make sure that this is correct.
>Let us know if you have any questions.
>Thanks!
>_Our name_
>VA CMS Help Desk

## Related Procedures
Tier 1 and Tier 2 have other Service Level Agreement requirements defined in the [SLA](./service_level_agreement.md#help-desk-service-level-agreement-sla).
