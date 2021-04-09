# Help Desk Process for Broken Link Resolution

## Broken Link Alerts

### Slack Alerts
When broken links stop a build, an alert is triggered in Slack (**#cms-helpdesk-bot** , notifying **@cmshelpdesk**). This alert will move soon to **#vfs-engineers**.
The notification follows the format:

```4 broken links found in the vagovprod build on master
@cmshelpdesk
http://jenkins.vfs.va.gov/job/testing/job/vets-website/job/master/123456/display/redirect
Page,Broken link
dir/url-of-page,[a href="/node/1234">Linkname</a>
dir/url-of-page,[a href="/node/1235">Linkname</a>
dir/url-of-page,[a href="/node/1236">Linkname</a>
```

As a general rule the help desk team only needs to attend to those of these which are built on either `master` (in which case a code review or being blocked) or `null` (in which case a content release is at stake).

### Response
We will immediately create (using `/jira create`) a Jira Service Desk ticket to track this issue, choosing Jira Issue Type `Bug`, then begin triage. 
In Jira, we will set the ticket's Request Type to `Broken Link` and its Urgency to `High`. This ensures proper SLA tracking and reporting.

Our initial first response responsibility is to notify the **#vfs-engineers** channel that we are investigating the broken link(s). This must happen within 30 minutes of the notification.

We may also choose to begin a **#cms-team** Slack conversation for the team's awareness, and/or to reach out to Tier 2. 

# Steps to Investigate

### Requesting Tier 2 assistance
The first responsibility of the help desk is to quickly assess if the problem can be resolved without Tier 2 assistance. When in doubt we should default to requesting assistance — but in some instances we may choose to resolve the issue without help.

### Finding the problem
If we look at the initial alert notification, we should see, in this fictional example:
```4 broken links found in the vagovprod build on master
@cmshelpdesk
http://jenkins.vfs.va.gov/job/testing/job/vets-website/job/master/123456/display/redirect
Page,Broken link
dir/url-of-page,[a href="/node/1234">Linkname</a>
dir/url-of-page,[a href="/node/1235">Linkname</a>
dir/url-of-page,[a href="/node/1236">Linkname</a>
```
There is a list of one or more pairs: first the URL for a page, then a comma, then the details (including URL) for the link. We should be able to visit the indicated node(s) on the prod environment, to see its recent edit history and evaluate the cause of the broken link.

Steps we may wish to take include:
1. Visiting each page indicated in the alert notification (per above)
2. Looking at the overall content list to see recently updated nodes
3. For any node, we can look on the right side for Revisions and Recent Changes to gather context about the person publishing and what happened. We may also want to preview the page, look at the links, and generally troubleshoot by gathering evidence. 
4. Looking at the user(s) who've recently updated nodes, to see what VISN they're in, and then looking at recently updated nodes for that VISN.

Note that we should always request Tier 2 assistance unless we feel confident that we can resolve the issue without them.

### Common types of known issues, and how to remedy them
So far, we've encountered a few types of broken link causes:
- Content being published too soon by non-dual-state editors (so far, this is common, but recent changes to roles may make it uncommon): best fixed by determining content that may need to be Archived. we should be cautious about this, since archiving content that _should_ be published will make things worse instead of better. We should always notify users after the issue is corrected.
- Content with actual broken links in the CMS (so far, this is uncommon, but may become more common as more editors gain access): we’ll want to fix links directly whenever possible, then notify the user. It’s probably a good idea to get a second opinion on any changes we make to content.
- Content in the process of being published intentionally and appropriately, which triggers a false alarm due to a race condition between published/unpublished content: this is best solved just by re-triggering a content release.

## Contacting the author afterwards
Once we know the problem and have remedied it, we can contact the author of the problem content to explain that their broken link held up a content release, and ask them to review our fix. This request should include:
1. The page in question
1. Which link is broken 
1. What actions we took.
1. Any recommendations or guesses about what they should do next, if we have them

See a suggested email template below:

**Subject/ticket title:**
>We’ve made a content change to your CMS page

**Message body:**
>Hi name,
>The page that you edited today, page title, triggered an alert that it contained a broken hyperlink. Since content for the entire website couldn’t be updated until this was fixed, we took the liberty of correcting this link so that it wouldn’t prevent other users’ changes from updating across the entire website.

>The problem hyperlink was: link text which linked to https://badurl.whatever.gov. We corrected it to: https://goodurl.whatever.gov. Please double-check the page to make sure that this is correct.

>Let us know if you have any questions.

>Thanks!

>_Our name_

>VA CMS Help Desk


# Response Timeframe
The timeframe for an initial slack notification to **#vfs-engineers** should be within 30 minutes at most.
Total time to fix the issue should be within an hour. If we have reason to think it’ll take longer, we should continue to update **#vfs-engineers**.


