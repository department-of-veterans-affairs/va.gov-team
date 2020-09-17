# Drupal CMS content publishing: Current and future states

Pasted from Slack: https://dsva.slack.com/files/T03FECE8V/FSK7JQRMG

## North Star (CMS User Expectation)
When the workflow status of a Drupal node (i.e., a piece of content) is changed to “Published,” and the node is saved, then it will be live/viewable on the VA.gov production website within a few minutes.

Comment: Brandon - User refers to Content Editor editing on CMS, Vet reading content on va.gov or both?

## Problem
Today, the standard procedure is all “Published” content in Drupal is deployed once per day, along with the website code, in a daily deployment.

## Short Term Solution for VAMC Website’s Facility Alerts and Operating Statuses
When these content types are marked “Published,” then a new content-only build will be triggered, such that the alert and operating status content will be live on the VA.gov website within 10 minutes. This includes "alerts" which can trigger alert emails through the Granicus integration.
Comment: Brandon - How is this going to be triggered? VSP platform doesn't have an automated way to trigger a website build without manual intervention? This must be done in Drupal.
[Brauer] We will programmatically use the existing build/deploy hook we've collaborated on in the past (that's available as a button to admins in drupal today.) We'll just trigger the content deploy programmatically based on this publish/save action. 

## Long-Term Solution for publishing content on VA.gov
Reduce content-only build and deploy time  to under 3 minutes. Configure automated content-only deployments on an interval that meets the expectations of CMS users and is sustainable for the VA.gov platform infrastructure.  

## Current content publishing state: Jan. thru Mar. 2020
- Daily VA.gov website deployments (content + code) happen Monday thru Friday at 2 PM ET
- Any content that has been edited in Drupal and is marked as “Published” goes into a queue to be published during the next daily deploy
- Some members of the VA.gov content team have Drupal permissions to manually trigger a site build, for urgent content updates that need to go live, outside of the daily build schedule (such as weekends)

## Future content publishing state: Apr. 2020 and beyond
- Automated content publishing is no longer dependent on the VA.gov website’s daily code deployment
- Any content marked as “Published” in Drupal gets published to the website in under 3 minutes. (With certain infrastructure changes, it is possible the time could be brought down to under 1 minute.)
- Content can be published at any time and on any day (24 hours/365 days)
   - Note: “Immediate” publishing is not needed for most VA.gov content; but is needed for emergency banner alerts, other kinds of urgent alerts -- and in some situations, sometimes -- VA.gov content updates.
   
## Temporary state of content publishing for VAMC Pittsburgh product: Jan. thru Mar. 2019
- Any content that has been edited and marked “Published” will automatically trigger a VA.gov website build and be published to production in under 10 minutes, only for the following content types:
   - Content types: facility alerts, operating statuses, and the operating status page
- The content in Drupal marked “Published” will go to production, not just the VAMC Pittsburgh product.
- Any content for all other content types that has been edited and marked “Published” in Drupal will go into a queue to be published during the next daily deploy
- Louis Scavnicky, VISN-4 PAO, will be given the Drupal permission to manually trigger a content publish, for urgent content updates that need to go live, outside of the daily build schedule (such as weekends)

## Who’s leading this work
The VA.gov Platform team, in partnership with the Drupal CMS team, is continuing its work to re-architect and decouple our website content publishing from the front-end build process

## Accountable leads
VSP Product owner: Kevin H
VSP Development Lead: Andrew G
VSP FE Tools Product Manager : Brandon R
VSP FE Tools Dev Lead: Rian F
VSP Operations Product Manager: TJ R
VSP Operations Dev Lead: Wyatt W
Drupal CMS VA product owner: Jeff B
Drupal CMS product manager: Kevin W
Drupal CMS DevOps engineering lead: Elijah L

## Questions\Comments:
- Comment: Brandon - I think we should talk further about who leads this work. With VFS teams we typically are leveraged as resources that are utilized in a consultancy-type fashion. This allow us on VSP to best balance our roadmap with many different initiatives that help all customers on our platform.  I viewed our leadership of the CMS Superteam as a product of an understaffed CMS team  and with a scope to develop the best plan of action to achieve a short-term plan in cross-contract setting. It is my view that since the CMS team is now full staffed that any CMS project needs to be lead internally through their group.
- There is not anything mentioned about content validation above. Currently, the build is broken when invalid content is published leading to broken links. In our Superteam discussion, it was agreed upon that we would have more stringent validation of content so we can try and ensure va.gov is not filled with broken pages, broken links or links to pages that don't exist. If we decouple the build\deploy process and we no longer break the build when bad content is identified then we want to ensure that processes are in place to notify content editors that they need to correct their invalid content. Ideally this would automated as a post-deploy job and then notifications would be directed to content editors directly in the CMS since that is the where they will go to make adjustments. 
