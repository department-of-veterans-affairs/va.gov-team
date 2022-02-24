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
  - [VANotify Notification Guide on GitHub](https://staging.notifications.va.gov/)
  - [VANotify API Documentation](https://staging.notifications.va.gov/)

- Is there a cost associated with using VANotify?
  - Yes. These [costs](https://staging.notifications.va.gov/) and information about assigning AWS credits to cover the costs are explained in the documentation.

- Is there a template we can use?
  - Yes - [example here](https://staging.notifications.va.gov/)

- Is there a reequest form we need to use to request an email?
  - Yes - https://staging.notifications.va.gov/ 

- What fields are available for us to populate in the UI?

- What fields are required?

- What fields are optional?

- How do we populate these fields?

- How do we sent a bulk email?

- What measures do we need to take to prevent flooding mail servers?

- How do we send an event-driven email (email that is sent as soon as a Veteran's address is flagged as invalid in the VA Profile database)?

- Where do bounced/rejected emails go?

- What email address should be used as the sender?

- Will there be a reply-to address or will this be a no-reply?

- What types of metrics can we gather?
  - Infrastructure and API stats through Datadog
  - Email open rates and click-through rates through Google Analytics
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
