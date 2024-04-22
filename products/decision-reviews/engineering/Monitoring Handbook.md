## Decision Reviews Monitoring Handbook

## Background

After discovering long-standing issues with the 526ez and 686c forms, we have endeavored to improve observability across our Decision Reviews Forms.  We started by setting up basic logging and monitoring for each of our forms (see “Dashboards” and “Monitors” sections below).  We then focused on building more comprehensive logging and monitoring for each form.  Meaning, for each form, we at minimum want the following:

* Backend KPI logging[^1]
* Dashboards to visualize those logs[^2]
* Monitors to trigger Slack alerts based on those logs[^3]
* Real User Monitoring[^4]

Though there is, and should always be, room for improvement, our logging and monitoring for NOD is fairly comprehensive.  But we have yet to build more comprehensive logging and monitoring for the SC and HLR forms.  Once we have the capacity, we ought to bring SC and HLRk up to par with NOD.

## Logging

While building more comprehensive logging and monitoring for the NOD form, we established a pattern for logging and monitoring [here](https://github.com/department-of-veterans-affairs/vets-api/commit/24d9d840e96b19af248cb11a553ed1b3cdac83f5), using a new [`logging_utils.rb` module](https://github.com/department-of-veterans-affairs/vets-api/blob/24d9d840e96b19af248cb11a553ed1b3cdac83f5/lib/decision_review_v1/utilities/logging_utils.rb).  As you can see from the module, most of our logs are, and should continue to be, searchable in DataDog by `form_id`, `action`, and `is_success`, among other things.  They should also contain whatever non-PII identifying information might be helpful for debugging and reporting purposes.

## Monitoring

The enumerated monitors below (see “Monitors” sections below) are configured to send alerts to the #benefits-alerts-notifications and #benefits-decision-reviews-notifications channels in VA’s Slack.  The former channel contains alerts from all benefits teams, including our own.  The latter channel contains alerts from our Decision Reviews apps only.  We have a rotating Monitor Triage Duty role (see “Monitor Triage Duty” below) to monitor this latter channel.

### Monitor Triage Duty

Every sprint, at least one engineer is assigned to monitor the #benefits-decision-reviews-notifications channel and triage any alerts that pop up during the sprint.  That engineer’s monitor triage work is represented by a ticket like [this one](https://github.com/department-of-veterans-affairs/va.gov-team/issues/77054).  Please note the description in the linked ticket.  The goal of monitor triage is _not_ to immediately resolve any bugs that arise.  Rather, the goal is to conduct a preliminary investigation to determine whether no follow up is necessary, or if follow up is necessary, to draft a ticket to be discussed and prioritized at the next standup (see “Creating a Bug Ticket” below).  Traditionally, we have assigned 2 points to this ticket.

During that duty, it is important to respond promptly to any alerts and keep VA stakeholders informed of our investigations.  To indicate that you are looking into an alert, react to the alert with an 👀 emoji.  If the alert was a false alarm, or otherwise resolved, react to the alert with an ✅ emoji, and leave an explanatory comment.  Here is [an example](https://dsva.slack.com/archives/C05UPRR0HK3/p1710712459247059).  If you end up creating a follow-up ticket, post a link to the ticket in the alert’s thread, and leave any other notes you think our VA stakeholders may find helpful.

Towards the end of an engineer’s monitor triage duty, they should create a triage duty ticket for the next sprint if one hasn’t already been created.  Ideally, a different engineer should be assigned to the next triage duty.

### Creating a Bug Ticket

We add bug tickets to [this board](https://github.com/orgs/department-of-veterans-affairs/projects/876/views/1?visibleFields=%5B%22Title%22%2C%22Assignees%22%2C46447480%2C46447511%2C46447563%2C56266716%2C%22Labels%22%5D).  When creating a bug ticket, don’t worry too much about creating “The Perfect Ticket.”  If you can, great; but if you can’t, you will be able to refine it later.  But please do make sure to indicate the following:

1. The date and time of the bug.
2. The severity of the bug (i.e. the extent of harm it causes to the Veteran), including whether it is a silent error.
3. The impact of the bug (i.e. the number of Veterans actually or potentially harmed).
4. A link to the Slack alert or any other Slack conversations relating to the bug.
5. Any helpful links (e.g. DataDog, Sentry, etc.).
6. Anything you learned during your preliminary investigation.
7. Anything else you think would be helpful.

Ideally, you would have gained a rough sense of the severity and impact of the bug during your preliminary investigation.  If you didn’t, consider extending it to learn these crucial details.  If doing so would be impracticable or otherwise unjustifiable during the current sprint, please indicate that the severity or impact are unknown.

Most bug tickets must begin as spikes, since the root cause of a bug is often not immediately apparent.  For such spikes, you can assume that the bug ticket will be an 8 hour (1 point) spike ticket, and that the goal of the spike ticket will be to:

1. Understand the root cause well enough to draft a non-spike ticket to address it.  Or, push a bug fix if the root cause is _very_ easy to fix.
2. If necessary and possible, somehow resolve the Veteran(s)’s immediate issue.  And if necessary but not possible, draft a follow-up ticket to do the same.

Once you have created your bug ticket, please post a link to it in the Monitor Triage Duty ticket for the current sprint.  Then, at the next standup (or earlier), please bring up the ticket, explain its severity and impact, and work with the team to determine whether it should be worked on during the current sprint, or in a later sprint.

### Types of Alerts

We have two types of alerts:  traffic anomaly alerts and error alerts.  

There are two types of traffic anomaly alerts:  low traffic alerts, and anomaly alerts.  Low traffic alerts are based on a lower threshold.  That lower threshold was originally estimated by looking at historical expected traffic over weekends and other periods of expectedly low traffic.  The anomaly alerts are a bit more complicated, but basically, they ask whether a certain percentage of traffic within a set time period is two standard deviations above or below the volume of traffic during that same time period, on that same day, in previous weeks.

We started out with low traffic alerts and then began trialing anomaly alerts some time ago.  I’ve kept the low traffic alerts around as a check against the anomaly alerts.  There may come a time in the future where we feel confident enough with the anomaly alerts to formally deprecate the low traffic alerts.

Error alerts are triggered when the number of errors related to some kind of action are above a certain threshold.  Usually, that threshold is one.

### How to Triage Alerts

#### Traffic Anomalies

When investigating a traffic anomaly, you should consider the following factors: the time of day, the day of the week, whether it was a holiday or otherwise special day, whether traffic was anomalously high or low,[^5] what traffic has looked like on that same day at that same time in previous weeks and months, whether there were any known outages or maintenance windows during that time, whether we recently pushed any code, whether the drop in traffic corresponded with the daily deploy, and the length of the anomaly.  This is a non-exhaustive list.

#### Errors

Every error is different, but here are some general tips for investigating error alerts.  First, use the click and drag function to highlight the narrow time range where the error occurred, and pin that time in DataDog.  Then, go to the dashboard corresponding to the alert and track down relevant charts, and especially any log widgets.

You can oftentimes find the backtrace for an error by clicking on a log’s “trace” tab, clicking “View Trace Details,” and then clicking “Errors.”

Many logs contain a user_uuid that you can use to find related errors in Sentry (via the `user.id` parameter).

Job logs contain a `@named_tags.jid` that you can use to find other logs associated with the job.  This can help you determine, among other things, whether a failed job succeeded on retry.  You can find job logs using the `class` and `jid` of the job (e.g. `@named_tags.class:"DecisionReview::SubmitUpload" @named_tags.jid:12345`).

Sometimes, 503 and 504 errors are erroneously characterized as 4xx errors.  This problem is ticketed [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/66874).

#### Inspecting InProgressForm Data

When debugging a submission blocking error, it can be helpful to inspect the Veteran’s InProgressForm data.  See [Script](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/engineering/scripts.md#get-inprogressform-data).  The form data shows what information the Veteran indicated, and the metadata shows, among other things, error messages the Veteran has experienced.

#### Finding Files in S3

Sometimes, you will need to inspect a file in S3.

The relevant S3 bucket is `dsva-vagov-prod-notice-of-disagreement` which contains the decision_review folder. Inside the decision_review folder are many folders named with UUIDs which match decision_review_evidence_attachment_guid values. These guid values are associated in a 1-to-1 relationship with lighthouse_upload_id values in the AppealSubmissionUpload table. See [Script](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/engineering/scripts.md#get-s3-decision-review-uuid-from-lighthouse-upload-uuid) for searching for an evidence uuid using a production terminal.

### Google Analytics

We haven’t really used Google analytics for much. VA currently hasn’t updated to use GA4 yet either. Product and research use it more for page views & funnel analysis, but we feel that DataDog is much more useful as a monitoring tool.

### Real User Monitoring

Real User Monitoring (RUM) is used to monitor performance, track errors, collect analytics and provide the team with session replay. We aren’t fully  utilizing the performance monitoring yet, but we are using the other benefits of RUM.

Using a session replay allows us to follow the Veteran’s progress through the form to determine if any JavaScript errors are blocking their progress. Within a session replay, the page is rendered so that user PHI/PII is hidden (see [privacy options](https://docs.datadoghq.com/real_user_monitoring/session_replay/browser/privacy_options/)).

RUM error management allows us to collect JavaScript errors and display them in the dashboard. There is a table of filtered front end errors in each dashboard used to track errors. When new errors appear that could potentially block form progress, we need to investigate the source - use RUM sessions to track them down.

A make-shift funnel graph is also included in each dashboard. They can show significant drop offs between pages because DataDog funnels only work in a linear flow. Any branches in the flow would need to be added into a new flow diagram. We’ve discussed this with DataDog support, and they don’t seem very interested in changing this behavior. So maybe remove these funnels if they prove too distracting.

In our daily routine, we check the dashboards for problems. Errors usually include a session replay button (replay sessions is set to 10% for Supplemental Claims due to cost), if you need to trace the source of an error.

All 3 decision review forms are initialized behind a feature toggle:

* `hlr_browser_monitoring_enabled`
* `nod_browser_monitoring_enabled`
* `sc_browser_monitoring_enabled`

And all 3 [decision review forms have the same settings](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/appeals/shared/utils/useBrowserMonitoring.js#L17-L27) except for the 10% RUM session rate for Supplemental Claims:

```
    site: 'ddog-gov.com',
    // see src/site/constants/vsp-environments.js for defaults
    env: environment.vspEnvironment(), // 'production'
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100, // 10 for Supplemental Claim
    trackInteractions: true,
    trackUserInteractions: true,
    trackFrustrations: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
```

We also have [browser monitoring enabled](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/appeals/shared/utils/useBrowserMonitoring.js#L80) (set up based on RUM initialization code) which records the validation errors which helped us discover the source of validation problems on the review & submit page. Users were getting blocked due to an unexpected validation error - this is why the Supplemental Claims dashboard includes a “Review & Submit Page Validation Errors” & “Top List”. We caught a issue due to partial evidence data within the form data causing schema validation to block form submission.

## Notice of Disagreement

### Dashboards

* [Benefits - Notice of Disagreement](https://vagov.ddog-gov.com/dashboard/tvp-imf-tb7/benefits---notice-of-disagreement?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1710179962604&to_ts=1710784762604&live=true)

### Real User Monitoring

* [Benefits - Notice of Disagreement](https://vagov.ddog-gov.com/rum/sessions?query=%40type%3Asession%20%40application.id%3Acabce133-7a68-46ba-ac9b-68c57e8375eb&cols=&fromUser=false&from_ts=1711379762626&to_ts=1711466162626&live=true)

### Monitors

* [NOD - Get Contestable Issues API traffic anomaly check](https://vagov.ddog-gov.com/monitors/172710)
* [NOD - Get Contestable Issues - Error rate](https://vagov.ddog-gov.com/monitors/202306)
* [NOD - Evidence Upload to S3 API traffic anomaly check](https://vagov.ddog-gov.com/monitors/172998?view=spans)
* [NOD - Overall Claim Submission traffic is low](https://vagov.ddog-gov.com/monitors/168196?view=spans)
* [NOD - Overall Claim Submission API traffic anomaly check](https://vagov.ddog-gov.com/monitors/172997?view=spans)
* [NOD - Overall Claim Submission - Errors](https://vagov.ddog-gov.com/monitors/165264?view=spans)
* [NOD and SC Evidence traffic is low](https://vagov.ddog-gov.com/monitors/159450?view=spans)
* [NOD and SC Evidence traffic anomaly check](https://vagov.ddog-gov.com/monitors/169739?view=spans)
* [NOD - Evidence Uploads to Lighthouse API traffic anomaly check](https://vagov.ddog-gov.com/monitors/173040?view=spans)
* [NOD/SC - Evidence Upload to Lighthouse - Permanent Errors](https://vagov.ddog-gov.com/monitors/168064?view=spans)

### Google Analytics

* [Successful submissions](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.dateOption=last7days&_r.drilldown=analytics.eventLabel:10182-board-appeal--submission/)

## Supplemental Claims

### Dashboards

* [Benefits - Supplemental Claims](https://vagov.ddog-gov.com/dashboard/uc7-8ai-6c3/benefits---supplemental-claims?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1710179856476&to_ts=1710784656476&live=true)

### Real User Monitoring

* [Benefits - Supplemental Claims](https://vagov.ddog-gov.com/rum/sessions?query=%40type%3Asession%20%40application.id%3A2779ccc3-be87-4b2d-a757-9ff54b58761b&cols=&fromUser=false&from_ts=1711379634052&to_ts=1711466034052&live=true)

### Monitors

* [Supplemental Claims errors](https://vagov.ddog-gov.com/monitors/159197?view=spans)
* [Supplemental Claims API traffic is low](https://vagov.ddog-gov.com/monitors/159229?view=spans)
* [Supplemental Claims API traffic anomaly check](https://vagov.ddog-gov.com/monitors/169719?view=spans)
* [NOD/SC - Evidence Upload to Lighthouse - Permanent Errors](https://vagov.ddog-gov.com/monitors/168064?view=spans)
* [NOD and SC Evidence traffic is low](https://vagov.ddog-gov.com/monitors/159450?view=spans)
* [NOD and SC Evidence traffic anomaly check](https://vagov.ddog-gov.com/monitors/169739?view=spans)

### Google Analytics

* [Successful submissions](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.dateOption=last30days&explorer-segmentExplorer.segmentId=analytics.eventLabel&_r.drilldown=analytics.eventLabel:995-supplemental-claim--submission/)

## Higher-Level Reviews

### Dashboards

* [Benefits - Higher Level Reviews](https://vagov.ddog-gov.com/dashboard/kiy-k3e-5ta/benefits---higher-level-reviews?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1710611857067&to_ts=1710784657067&live=true)

### Real User Monitoring

* [Benefits - Higher Level Review](https://vagov.ddog-gov.com/rum/sessions?query=%40application.id%3A321995f8-5fed-4b4f-907b-e3f5ec34c28f%20%40type%3Asession&cols=&fromUser=false&from_ts=1711379762626&to_ts=1711466162626&live=true)

### Monitors

* [Higher Level Review errors](https://vagov.ddog-gov.com/monitors/159451?view=spans)
* [Higher Level Review API traffic is low](https://vagov.ddog-gov.com/monitors/159452?view=spans)
* [Higher Level Review API traffic anomaly check](https://vagov.ddog-gov.com/monitors/169720?view=spans)

### Google Analytics

* [Successful submissions](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.dateOption=last7days&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.eventLabel:decision-reviews-va20-0996--submission-successful/)

## Footnotes

[^1]:

     For NOD, see [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Notice-of-Disagreement/engineering/backend_KPIs.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Notice-of-Disagreement/engineering/backend_KPIs.md), [https://github.com/department-of-veterans-affairs/va.gov-team/issues/65543](https://github.com/department-of-veterans-affairs/va.gov-team/issues/65543).  For HLR and SC, see analogous tickets in [https://github.com/department-of-veterans-affairs/va.gov-team/issues/57473](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57473).

[^2]:

     See [https://github.com/department-of-veterans-affairs/va.gov-team/issues/65549](https://github.com/department-of-veterans-affairs/va.gov-team/issues/65549) and analogous tickets in [https://github.com/department-of-veterans-affairs/va.gov-team/issues/57473](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57473).  See also “Dashboards” sections below.

[^3]:

     See [https://github.com/department-of-veterans-affairs/va.gov-team/issues/65554](https://github.com/department-of-veterans-affairs/va.gov-team/issues/65554) and analogous tickets in [https://github.com/department-of-veterans-affairs/va.gov-team/issues/57473](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57473).  See also “Monitoring” below and “Monitors” sections below.

[^4]:

     See [https://github.com/department-of-veterans-affairs/va.gov-team/issues/61817](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61817) and analogous tickets in [https://github.com/department-of-veterans-affairs/va.gov-team/issues/57473](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57473).  See also “Real User Monitoring” below.

[^5]:

     Currently, our anomaly monitors are configured to detect anomalously low _and high_ traffic.  For context, we originally set up traffic monitors to detect abrupt and extended drops in traffic potentially indicating a blocking error on our forms.  I’ve decided to also track anomalously high traffic because doing so may catch unexpected peaks of traffic indicating a bug in our code or upcoming deadline that could cause scaling issues.  Perhaps there are other examples that could be of interest.  

     To date, however, such alerts have only been triggered when we receive a small number of requests in the early morning when we don’t usually receive requests.  In the future, we may decide to detect only anomalously _low_ traffic.
