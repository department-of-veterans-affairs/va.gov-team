# Problem Brief: Drupal Drafts Management

## Situation

We use Drupal to show DEPO and SMEs content *in situ* as well as to publish content. The inability to merge and/or publish selected drafts of a Drupal page is becoming more problematic.

## Complication(s)

With more people working in Drupal, on projects with differing timelines, version control is growing more complex and the potential for inadvertently publishing content that isn't final is increasing.

**Version control example:**

Team member A is working on a months-long project that involves several SMEs. "A" makes changes to a benefit detail page that will go through several approval rounds and will not be ready for publishing for several weeks.

Team member B needs to make rate changes to this same benefit detail page and publish immediately.

Currently, Team member B's options are:

- Manually remove all the changes made by Team member A, make the rate change, publish, then re-make all of A's changes as a new draft.

- If the page has never been published, they can revert to a previous draft before Team Member A made any changes. Make the rates changes that need to be done and publish the page. Then revert back to the version Team Member A made changes in and manually make the same rates changes to that version so that all changes are now in the same place.

- Drupal doesn't allow users to revert to previous published version if a newer version is a draft. Therefore, publish Team Member A's unapproved draft and save it again as a draft. Then revert to the last published version and enter the rates changes. Publish that page. Then revert back to the draft version Team Member A made and enter in those rates changes again so all changes are in one place once the new extensive changes are ready to be published. The publishing of the two pages needs to be done before a CMS deploy or the unapproved page will be live on VA.gov.

## Question(s)

What workarounds can we use until the CMS team has the bandwidth to make draft merging/publishing possible?

How can we leverage the revisions log messages to ensure that we don't inadvertently publish content that hasn't been approved?

How might the workarounds differ for "quick fixes" versus pages with significant revisions and longer timelines?

What is the best environment for experimenting with content, and sharing it with stakeholders, when we know it won't be published for weeks or months?

## Answer(s)

We need clear, documented processes for:

- Handling changes with a long timeline versus those that need to be published right away

- Ensuring that only approved content is published

- Having the freedom to experiment with content prior to getting it approved
