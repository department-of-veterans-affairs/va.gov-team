# Help Desk Process for Broken Link Ticket Resolution

## Overview
Personnel within the Veterans Health Administration, Veterans Benefits Administration, and VA National Cemetery Administration utilize the Drupal CMS features to publish important information for Veterans and their families regarding Veteran benefits.  Users of the CMS create content that often includes links or hyperlinked information.   When a User publishes content containing links, an automated process begins checking each link and validating the success of the link to load the intended page.  If a link does not load a page it will result in a build failure and prevent one more more Users from being able to Publish content. 

The build failure triggers a Slack alert which notifies Tier 1 and Tier 2 to begin analysis of the Alert to determine the root cause.  

The Help Desk then makes notification to the people associated to the Ticket once the issue has been analyzed and resolved.  

## Alerts

### Handling
Builds currently occur 8 times during a single day during business hours.  When a build occurs User content is published to the Production server.  Various tasks execute and complete throughout the build process and are validated for success.   Broken Links can cause a build to fail one or more tasks and cause an alert to be sent to the Slack channels (**#cms-helpdesk-bot** , notifying **@cmshelpdesk**).  In the near future it is planned that this Alert will move to another channel,  **#vfs-engineers** 

In Slack notifications the Broken Link Alerts look similar:

```4 broken links found in the vagovprod build on master
@cmshelpdesk
http://jenkins.vfs.va.gov/job/testing/job/vets-website/job/master/123456/display/redirect
Page,Broken link
dir/url-of-page,[a href="/node/1234">Linkname</a>
dir/url-of-page,[a href="/node/1235">Linkname</a>
dir/url-of-page,[a href="/node/1236">Linkname</a>
```

The Help Desk should take ownership of Alerts with a URL that contains the word `master`, like the example above on line 13.   Master refers to a task involving a change in code, and understanding which part of the code broke the build will be best resolved by Tier 2 or engineers.  

If `Null` is found to have stopped the build with it appear in the log URLs, it triggers the Tier 1 Help Desk's ownership of the issue because null appears in issues related to User's publishing of content.

Null Alerts can look similar or include something like 

```
cannot read property of 'null'
```

### Response
Upon notification of the Alert, the Tier 1 Help Desk will use the Slack command /jira to create a Service Desk Ticket.   (using `/jira create`) a Jira Service Desk ticket to track this issue.  

Begin classifying the Ticket as follows:

Request Type = `Broken Link`
Issue Type = `Bug`
Urgency = 'High'

The above classifications ensure proper SLA tracking and reporting.  Once set, begin the Triage process by posting to the Slack #cms-product-triage channel and to notify the **#vfs-engineers** channel that we are investigating the broken link(s). This must happen within 30 minutes of the notification to meet SLA agreements. 

We may also choose to begin a **#cms-team** Slack conversation for the CMS team's awareness, and/or to reach out to Tier 2. 

# Steps to Investigate

### Requesting Tier 2 assistance
The first responsibility of the Tier 1 Help Desk is to analyze what the root cause of the issue could be, whether content or code related.   If any question about whether the issue is code related, Tier 2 engineers should always be engaged to assist in the analysis.  

### Root Cause Analysis 

Example 1:

```4 broken links found in the vagovprod build on master

@cmshelpdesk

1.	http://jenkins.vfs.va.gov/job/testing/job/...
	...vets-website/job/master/123456/display/redirectPage,Broken link
2.	dir/url-of-page,[a href="/node/1234">Linkname</a>
3.	dir/url-of-page,[a href="/node/1235">Linkname</a>
4.	dir/url-of-page,[a href="/node/1236">Linkname</a>
```

The above example of an Alert can be used to kick-off root cause analysis on a broken link.  The example above shows that Line 1 contains the URL of a page;  line 2, 
There is a list of one or more pairs: first the URL for a page, then a comma, then the details (including URL) for the link. We should be able to visit the indicated node(s) on the prod environment, to see its recent edit history and evaluate the cause of the broken link.

Example 2:
'''
<img class="news-img" src alt title width height>
'''

The above example occurred when an image that was expected was not used.  The "src, alt, title, width, height" metadata for that image was absent and resulted in a Broken Links Alert.

Steps we may wish to take include:
1. Visit each page indicated in the alert notification (see Example 1)
1. Visit prod.cms.va.gov/admin/content; in the Overview header click on the title "Updated" to sort the content by newest, descending 
1. Analyze the list just sorted, look for recently published content for the VISN or Node listed in the Alert
1. Collect the data for further analysis and comparison to People in Step 5
1. Alternatively, visit prod.cms.va.gov/admin/people and sort by clicking the Title "Last Accessed" and sort descending
1. Analyze the list and see if any commonalities exist between Step 3 results and the list. 

Important:  Always request Tier 2 assistance if any questions as to whether content or code caused the build failure.

## Contacting the Content User
Once analysis concludes that the root cause of the issue was content and it is resolved, the Tier 1 Help Desk can contact the User of the published content that caused the build failure.  

It is important that the Help Desk takes the time to educate the User so that the issue does not occur again.  Some key points to include in this education opportunity are:

1. The published content that caused the failure
1. What link drove the issue
1. Changes to the published content that were made by Tier 1 or Tier 2
1. Suggestions or tips or training for the User 

An example of what the email communication to the User can look like:

**Subject/ticket title:**
>We’ve made a content change to your CMS content

**Message body:**
>Hi name,
>The page that you edited today, page title, triggered an alert that it contained a broken hyperlink. Since content for the entire website couldn’t be updated until this was fixed, we took the liberty of correcting this link so that it wouldn’t prevent other users’ changes from updating across the entire website.

>The problem hyperlink was: link text which linked to https://badurl.whatever.gov. We corrected it to: https://goodurl.whatever.gov. Please double-check the page to make sure that this is correct.

>Let us know if you have any questions.

>Thanks!

>_Our name_

>VA CMS Help Desk


# Response Timeframe
Initial slack notification to **#vfs-engineers** = within 30 minutes

Issue resolve = 1 hour 

If > 1 hour, continue to update **#vfs-engineers**

When resolved, update **#vfs-engineers** with the status


