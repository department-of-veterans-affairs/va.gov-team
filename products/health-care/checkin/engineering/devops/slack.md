# Slack Channels

We have a few Slack channels in DSVA Slack for use in DevOps-related development tasks.

Webhooks for integration are stored in the vagov AWS SSM Parameter Store with keys noted individually.

Ideally, we'll document where each is used. This should not be expected to be a comprehensive list, though; if a webhook is deleted or rotated, it might cause breakage.

- [`#check-in-experience-devops`](https://dsva.slack.com/archives/C06LVA4NGFM):
  - **Purpose**: For notifications/development/etc that's of interest only to DevOps engineers.
  - **WebHook Parameter**: `/dsva-vagov/vets-api/prod/check_in/devops/slack_channel_webhook`
- [`#check-in-experience-devops-test`](https://dsva.slack.com/archives/C06M83B0MG9):
  - **Purpose**: For developing Slack integrations and anything else noisy.
  - **WebHook Parameter**: `/dsva-vagov/vets-api/prod/check_in/devops/test_slack_channel_webhook`
  - **Used In**:
    - `checkin-devops`:
      - Used for testing `day-end-summary` workflow. 
