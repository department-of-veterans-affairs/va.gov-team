# VA Notify Discovery

## Overview
This exercise is intended to learn about the VA Notify UI and requirements for creating and sending out bulk and event-triggered emails. 

## Questions & Answers
- How do we access the VA Notify UI?
  - Staging URL: https://staging.notifications.va.gov/ 
  - Prod URL: https://notifications.va.gov/
  - Note that these must be accessed from within the VA Network.

- What documentation is available?
  - [VANotify Platform README on GitHub](https://staging.notifications.va.gov/)
  - [VANotify Technical Onboarding Guide on GitHub](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/README.md#technical-onboarding-guide)
  - [VANotify API Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/README.md)

- Is there a cost associated with using VANotify?
  - Yes. These [costs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/README.md#pricing) and information about assigning AWS credits to cover the costs are explained in the documentation.

- Is there a template we can use?
  - Yes - There are [examples here](https://staging.notifications.va.gov/) and we can build our own.
  - I created a [draft template](https://staging.notifications.va.gov/service/5e5cded3-3c76-46a3-9eef-cb63589e76be/templates/149f000b-3cde-4150-b6aa-ce47da8e124b)
for us to iterate on. 
  - There are also template guides:
    - https://design.va.gov/patterns/email_template
    - https://github.com/department-of-veterans-affairs/notification-utils/tree/master/docs
    - https://notification.canada.ca/templates

- Is there a request form we need to use to request an email?
  - [Yes](https://app.zenhub.com/workspaces/vanotify-business-intake-board-606cc5c49392c900162c3971/issues/department-of-veterans-affairs/va.gov-team/new?issueType=issue)
  - There is also an [intake board](https://app.zenhub.com/workspaces/vanotify-business-intake-board-606cc5c49392c900162c3971/board?repos=133843125,261511794) for checking the status of the request.

- What fields are available for us to populate in the UI?
  - Fields are determined by us

- What fields are required?
  - N/A

- What fields are optional?
  - N/A

- How do we populate these fields?

- How do we sent a bulk email?

- What measures do we need to take to prevent flooding mail servers?

- How do we send an event-driven email (email that is sent as soon as a Veteran's address is flagged as invalid in the VA Profile database)?

- Where do bounced/rejected emails go?

- What email address should be used as the sender?

- Will there be a reply-to address or will this be a no-reply?

- What types of metrics can we gather?
  - Infrastructure and API stats through Datadog
  - Email open rates and click-through rates through [Google Analytics 360](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20210101&_u.date01=20210217&_r.drilldown=analytics.eventCategory:email,analytics.eventAction:open) - navigate to [this page](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20210101&_u.date01=20210217&_r.drilldown=analytics.eventCategory:email&explorer-segmentExplorer.segmentId=analytics.eventLabel&explorer-table.plotKeys=%5B%5D/) and select your notification from the list.
  - API Transaction logging through Cloudwatch
  - Alerts through Pagerduty

- Other considerations
  - Content and use case needs to be reviewed and approved by our Privacy Officer
  - The message should contain the following information:
    - Veteran's name
    - Mailing address in question
    - Information about how the mailing address is used
    - Link to the contact page for updating the address
  - We need to respect email notification opt-out settings
  - We need to provide a link for the Veteran to opt out of future emails
  - We need to provide the URL for updating the bad address
