WIP

# CMS Notifications for VA Directive 6102

Last updated February 2023

This README page serves as a "front door" to documentation and resources pertaining to the MVP for CMS notifications. CMS Notifications began as an email trigger to editors regarding [VA Directive 6102](https://www.va.gov/web/) which requires Veteran-facing public website content to be reviewed once per year for accuracy. 


## Product Context/Decisions
VA Directive 6102 states that, at minimum, web content should be reviewed by web editors once per year. The CMS timestamps content when migrated or last saved by a human editor, therefore, we can track when content has been published. The coorelation between the requirement of 6102 and the content flagging abilities of Drupal allow the CMS Team to create and send emails at a specified time.

The first iteration of notification emails will include a link to the outdated content report in the CMS. Editors will only see content for their assigned section(s).  

The data as of Februaary 2023 was anaylized and it was confirmed that VAMC content is the most outdated and will require at least 25 pieces of content to be compliant within a year. We have chosen not to bombared editors with all items that they need to update at once and refer to this as "smoothing the curve". 

## Hypothesis
- Editors will respond positively to email notifications regarding their tasks to complete to be 6102 compliant.
- Partner and stakeholder buy-in is crucial for the success of CMS email notifications. 
- Editors will respond positively to a "smoothing the curve" approach. 


## Research Artifacts
- [VA Directive 6102 Compliance Discovery](https://app.mural.co/t/vagov6717/m/vagov6717/1662643881820/ad0f6da63dba4998516450701abca6ec1944ec74?sender=ud7d3055567694e54f0133356)

- [CMS Notifications Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/cms/research/CMS%20Notifications)


## Design Artifacts
- [Email Prototypes in Figma](https://www.figma.com/file/fQl2Y2k9MDA2dc0xViC645/6102-Notification-Email?node-id=69%3A696&t=bwwf0cT8ouUE9R1l-0](https://www.figma.com/file/fQl2Y2k9MDA2dc0xViC645/6102-Notification-Email?node-id=273%3A2548&t=d7f8LpkwvlWQ1Qj9-0) 

## Contacts
- Product Owner: Dave Conlon (OCTO-DE)
- Product Manager: Erika Washburn (Friends From The City)
- Delivery Manager: Dawn Pruitt (Agile 6)
- Engineering: CMS Team/Edmund Dunn (Agile 6)
- Designer/Researcher: Blake Organ (CivicActions)
- Accessibility Lead: Laura Flannery (CivicActions)

## Revelant Backlog
[CMS Notifications for VA Directive 6102](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/10477)
