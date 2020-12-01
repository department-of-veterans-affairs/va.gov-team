# For VAPHS staff: Drupal CMS content publishing

Pasted from Slack: https://dsva.slack.com/files/T03FECE8V/FSUF7V90T

## Current state of content publishing for all VA.gov content in Drupal CMS [Jan. thru Mar. 2020]
- Daily VA.gov website deployments (content + code) happen Monday thru Friday at 2 PM ET
- Any content that has been edited in Drupal and is marked as “Published” goes into a queue to be published during the next daily deploy

## Current state of content publishing for VAMC Pittsburgh alerts and operating statuses [Jan. thru Mar. 2020]
- Any content that has been edited and marked “Published” will automatically trigger a VA.gov website build and be published to production in under 10 minutes, only for the following content types:
   - Facility alerts, operating statuses, and the operating status page
- Any content for all other content types that has been edited and marked “Published” in Drupal will go into a queue to be published during the next daily deploy
- Louis Scavnicky, VISN-4 PAO, will be given the Drupal permission to manually trigger a content publish, for urgent content updates that need to go live, outside of the daily build schedule (such as weekends)

## Long-term solution for publishing content for all VA.gov content in Drupal CMS [April 2020]
- Reduce content-only build and deploy time so content can be published to production faster
- Configure automated content-only deployments on an interval that meets the expectations of CMS users and is sustainable for the VA.gov platform infrastructure
