# Editorial Workflow Assignments and Notifications

## Problem statement

An increased number of users and content in the Drupal CMS makes it challenging to locate the content that is relevant to the user. Communication about content needing review or other editorial actions takes places outside the Drupal CMS.

Many Content editors are accustomed to use applications that allow for an assignment of an owner / reviewer / approver and request the same capability for their Drupal CMS editorial workflow.

Based on these requests, the editorial workflow in the Drupal CMS should be enhanced with an ability to assign owners at various stages of the content lifecycle, so as to streamline editorial processes.

A critical component of the editorial workflow is timely notifications, which should inform CMS users about events related to editorial actions for the content they need to follow.

## Hypothesis or Bet

* Enabling CMS users to assign content for an action to their editorial colleagues will increase their productivity, establish a solid feedback loop and reduce the need for manual Slack/Email messaging.
* By providing timely and unintrusive messaging about various editorial workflow events in the CMS we can considerably enhance the CMS user experience and productivity.

## We will know we're done when... ("Definition of Done")
* CMS users can assign other CMS users to perform editorial actions on any content hosted in the Drupal CMS.
* CMS users receive email notifications when the content is assigned to them.
* CMS users receive email notification about any content lifecycle event for the content they are subscribed to.
* CMS users have quick access to content they are assigned to via their CMS user profile or product dashboard(s).

## Known Blockers/Dependencies

* CMS notifications framework needs to support timely and reliable email delivery (integration w/ VANotify).

## User stories
As a Content editor, who wants someone else to review my draft, or to make some edits, I want to be able to assign it to another CMS user so that they can take the next action.

As a Content editor, who made edits to an important page or assigned it to someone for review, I want to be notified when the page is updated or when it’s editorial status has been changed, so that I am informed of performed actions and don’t have to keep going back to the Drupal CMS and manually refreshing my page to understand its status.

As a CMS user, I want to be able to subscribe to notifications for a specific page, so that I can follow the updates to that page.

As a CMS user, I want to be able to UNsubscribe from notifications for a specific page when I no longer need to follow its updates.

## Relevant Backlog

[Editorial Workflow Assignments and Notifications](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/900)
