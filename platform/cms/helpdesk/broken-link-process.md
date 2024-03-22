# Help Desk Process for Broken Link Resolution
This is one step in the [overall broken links strategy](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/READMES/broken-links.md).

## Broken Link Alerts

### Slack Alerts
Content releases occur continously (the next one starts after the previous one finished) from 8am-8pm ET weekdays (except some Federal holidays). Content releases can also be triggered outside this schedule when editors save certain content types (banner alerts, operating status) manually by admins, pr by bulk publishing).

The front end broken link checker runs during each content build, and reports its findings in jenkins logs as well as by posting to the **#content-broken-links** Slack channel in DSVA Slack.

The notification follows the format:

```
@cmshelpdesk 1 broken links found in the vagovprod build in a content-only deployment

http://jenkins.vfs.va.gov/job/builds/job/content-build-content-only-vagovprod/467/display/redirect

pittsburgh-health-care/programs/covid-19-vaccines :

<a href="/myhealth.va.gov%20">My Health<em>e</em>Vet</a>
```

### Response
Once the automatic notification is triggered:
1. the CMS team will create a Jira Service Desk ticket to track this issue. Labeling for the JSD ticket should include:
  - The `broken-link` label
  - A label for the team that owns the code/process/content and its resolution
    - If the issue originated from something wrong with the CMS application or CMS-API then add the `CMS` label
    - If another va.gov team, then add the `Front-End` label along with a label for the team (`facilities-team`, `public-websites-team`, `VAMC-upgrade-team`)
    - If the issue was caused by a CMS editor in the field, apply the `user-content` and `user-error` labels

There is a broken link threshold before the content build will break. Urgency is dependent on how close to that threshold we are at any given time.

Following the creation of the Ticket, the CMS team will notify in the automated notification that it is being triaged. This must happen within 30 minutes of the notification.
The **#content-broken-links** channel can be used to help determine the root cause and which team will be responsible for addressing the issue.

# Steps to Investigate

### CMS Tier 2 support
The first responsibility of triaging and diagnosing falls on CMS Tier 2 support. If it is determined that the broken link is a result of user error then they will loop in Tier 1 to coordinate a fix with the user. If the cause and solution are not easily identified, they will post in **#content-broken-links** for awareness and assistance.

### Finding the problem
If we look at the initial alert notification, we should see, in this fictional example:
```4 broken links found in the vagovprod build
@cmshelpdesk
http://jenkins.vfs.va.gov/job/testing/job/vets-website/job/123456/display/redirect
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

### Common types of known issues, and how to remedy them
So far, we've encountered a few types of broken link causes:
- Content being published too soon by non-dual-state editors (so far, this is common, but recent changes to roles may make it uncommon): best fixed by determining content that may need to be Archived. we should be cautious about this, since archiving content that _should_ be published will make things worse instead of better. We should always notify users after the issue is corrected.
- Content with actual broken links in the CMS (so far, this is uncommon, but may become more common as more editors gain access): we’ll want to fix links directly whenever possible, then notify the user. It’s probably a good idea to get a second opinion on any changes we make to content.
  - Examples include: missing `https://` on external links
- Content in the process of being published intentionally and appropriately, which triggers a false alarm due to a race condition between published/unpublished content: this is best solved just by re-triggering a content release. List content types
  - 

### Best Practices
Perform the least destructive to most destructive steps to resovle a broken link.  For example:
*from Least to Most*
- Edit the URL of the bad link and correct it, then Publish the content
- If the source of the link is a draft page, Publish the draft
- Remove the problematic link
- Unpublish the page that was the problem

## Contacting the author afterwards
Once we know the problem and have remedied it, we can contact the author of the problem content to explain that their broken link held up a content release, and ask them to review our fix. This request should include:
- The page in question
-  Which link was broken 
- What actions we (help desk and/or tier 2) took.
-  Any recommendations or guesses about what the author should do next, if we have them

Note: Editors do not understand our broken links alerts. Don't copy and paste the alert language to them. Use plain language.

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
The timeframe for an initial reponse to the Slack notification should be within 30 minutes at most.
Total time to fix the issue should be within a day. If we have reason to think it’ll take longer, we should continue to update in the Slack channel.
When the issue is resolved, we should also update the relevant Slack thread to say so.

# Related Procedures
Tier 1 and Tier 2 both have office hour requirements and other procedures defined in the [SLA](./service_level_agreement.md#help-desk-service-level-agreement-sla).
