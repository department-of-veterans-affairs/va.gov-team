# Hyperlinks Management

_Last updated: 12/23/20_

## Problem statement

Broken hyperlinks discovered in the content layer currently block the Va.gov Content Release. Notifications about broken hyperlinks are sent to Slack #CMS-Team and pull CMS team members away from their planned work, to triage the incident. Triage and resolution steps amount to 30 minutes to 1 hour spent by one or more CMS team members. Broken hyperlink incidents happen on average 2-4 times a week. Engineers currently waste far too much time chasing down broken hyperlinks instead of delivering value.

The CMS team built the [Node Link Report](https://www.drupal.org/project/node_link_report) open sourced module to detect and warn of broken links upon content save. Content Editors have immediate feedback about potential broken links before publishing. This greatly reduced the number of broken link incidents during Content Release.

As the CMS scales from ~20 editors and daily content releases, up to ~500 editors and continuous content releases, broken hyperlinks should be identified and resolved as early in the workstream as possible, but should not block content releases.

Veterans ability to receive timely information about urgent alerts and situational updates is of higher value than a random broken link in less urgent content. Although there may and will be exceptions.

More information can be found in [this design document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/7785e85e3c68452857ec510ed5d2cb22bbd5f6cc/platform/engineering/design-docs/2020-09-27-broken-links.md).

## Hypothesis or Bet

* Removing the Content Release dependency on 100% validated hyperlinks and providing a stable system of notifications targeted at the link’s author will
   * allow urgent content releases to happen without interruptions
   * reduce the amount of human resources from various teams simultaneously working on a content issue at the time of a build
   * allow the content author to address the issue asynchronously thereby greatly reducing waste of human resources and propensity for error
* Well structured email notifications about a broken hyperlink will help content authors to locate and fix the issue in an expeditious manner.
* An iteration on the proposed design document will reveal additional opportunities to streamline the process of locating / fixing broken hyperlinks.

## We will know we're done when... ("Definition of Done")

* The Content Release process is not blocked by a broken hyperlink.
* Content authors receive email or other notifications about broken hyperlinks that allow them to fix the issue in an expeditious manner.
* 90% of broken hyperlinks originating in the content layer are fixed within 1 hour of identification / notification.

## Known Blockers/Dependencies

* Design iteration on the [proposed design document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/7785e85e3c68452857ec510ed5d2cb22bbd5f6cc/platform/engineering/design-docs/2020-09-27-broken-links.md)
* Stakeholder review, buy in and approval of [proposed design document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/7785e85e3c68452857ec510ed5d2cb22bbd5f6cc/platform/engineering/design-docs/2020-09-27-broken-links.md)
* Realtime notification system within the CMS.

## Related Backlog

[Hyperlinks Management](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4018)
