# Help Desk Process for Broken Link Resolution

## Broken Link Alerts

### Slack Alerts
When broken links stop a build, an alert is triggered in Slack (**#cms-helpdesk-bot** , notifying **@cmshelpdesk**). This alert follows the format:

```264 broken links found in the vagovprod build on 18408-jenkins-use-cms-export http://jenkins.vfs.va.gov/job/testing/job/vets-website/job/18408-jenkins-use-cms-export/12/display/redirect```

As a general rule we only need to attend to those of these which are a low number of broken links ( <10), and built on master, e.g:

```1 broken links found in the vagovprod build on master http://jenkins.vfs.va.gov/job/testing/job/vets-website/job/master/9848/display/redirect```

### Response
We will immediately create (using `/jira create`) a Jira Service Desk ticket to track this issue, then begin triage. 
We may choose to begin a **#cms-team** Slack conversation also that we are looking into the broken link for the team's awareness, and/or to reach out to Tier 2. 

# Steps to Investigate
### Finding the problem
If we click through to the link (we will need SOCKS / network access, and to be signed in to Jenkins), e.g. at http://jenkins.vfs.va.gov/job/testing/job/vets-website/job/master/9848/display/redirect

We’ll see a list of build steps. We can CTRL/CMD-F for “broken” to find the broken link. Typically, it will be towards the bottom of the second shell script. The usual format will show the page URL that the link occurs on, then the link URL that’s broken (after `href="`). Often there may be more than one.

Once we know the URL where the link occurs, we can visit it in prod by copying and pasting the URL into a browser, and it'll show the links warning at the top.

### Finding the author
We can look on the right side for Revisions and Recent Changes to gather context about the person publishing and what happened. We may also want to preview the page, look at the links, and generally troubleshoot by gathering evidence. 

# Remedying the problem
## Initial triage
Once we know the broken link, author, and some information about what happened, we can assess:
1. Is it reasonable to expect that we can contact the author and get them to fix it? 
- Are there other people (in the section or VAMC) who might be appropriate to contact also?
2. If not, is it something we know how to fix ourselves? 
- How certain of the content fix are we?
3. If not, it’s time to reach out to Tier 2 for assistance. 

## Contacting the author
Once we know the problem, we can contact the author of the problem content to explain that their broken link is holding up a content release, and ask them to fix the link. This request should include:
1. The page in question
1. Which link is broken
1. Any recommendations or guesses about how to fix it, if we have them

See a suggested email template in the templates section below.

## Fixing it ourselves
If contacting the author seems impractical, we’ll need to fix the link ourselves. This may be tricky, and it’s probably a good idea to get a second opinion on any changes we make to content (unless it’s obviously a typo-fix kind of situation).

Once we’ve made the change, we should tell the author that we’ve done so using the appropriate email template.

## Email templates
### Asking the author to fix it
**Subject/ticket title:**
>Urgent: immediate content fix needed to CMS page

**Message body:**
>Hi name,
>The page that you edited today, page title, has triggered an alert that it contains a broken hyperlink. Since content for the entire website can’t be updated until this is fixed, we’d like your immediate assistance correcting this link. This is extremely time-sensitive, since it is delaying other users’ changes from updating across the entire website. 

>The problem hyperlink appears to be: link text which links to https://badurl.whatever.gov. It looks like a better URL would be: https://goodurl.whatever.gov. Is that correct?

>Can you please login and correct this hyperlink within the next 20 minutes, so that content releases can move forward? If not, please let us know immediately so that we can take corrective action ourselves. 

>Thanks!

>_Our name_

>VA CMS Help Desk

### Telling the author that we fixed it
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
The timeframe for an initial email to users should be within 30 minutes at most, with a request for the content author that they remedy the problem within an additional 20 minutes at most, so that content releases can continue within the hour. If we have reason to think it’ll take longer, and/or the situation is urgent, we should attempt to correct the problem ourselves, and simply tell the author of the problem content that we’ve done so after the fact. Total time to fix the issue should be within an hour.


