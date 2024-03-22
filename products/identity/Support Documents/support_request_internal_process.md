# Identity Support Request Intake Process

This document outlines the intake process for identity support requests initiated via Slackbot. It details the types of requests expected, the responsibilities of product and engineering leadership in addressing these requests, the expected response times, and the procedures for handling specific types of inquiries.

Slackbot initiated requests will auto create a ticket using the github issue template (https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.github/ISSUE_TEMPLATE/1identity-help.yaml). There are four types of requests we expect to get from the slackbot:

- Product Leadership Responsible
    - Initial response will occur within 1 business day
    - questions about product on-boarding
        - sign-in service onboarding
        - large data requests (some data set requests must be filtered by product leadership)
- Engineering Leadership Responsible
    - Initial response will occur within 1 business hour
    - bug fix inquiries
        - auth errors
    - engineering specific questions
        - PR requests
        - small data requests regarding user attribute lookup
    - Critical system downtime inquiries
        - lead engineer is the main POC during standard work hours, off hours this is reported through pagerduty
