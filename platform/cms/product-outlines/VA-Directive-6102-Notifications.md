

# CMS Notifications for VA Directive 6102

Last updated 18 May 2023

This README page serves as a "front door" to documentation and resources pertaining to the MVP for CMS notifications. CMS Notifications began as an email trigger to editors regarding [VA Directive 6102](https://www.va.gov/web/) which requires Veteran-facing public website content to be reviewed once per year for accuracy. 


## Product Rationale, Needs
VA Directive 6102 states that, at minimum, web content should be reviewed by web editors once per year. The CMS timestamps content when migrated or last saved by a human editor, therefore, we can track when content has been published. The coorelation between the requirement of 6102 and the content flagging abilities of Drupal allow the CMS Team to create and send emails at a specified time.

The first iteration of notification emails will include a link to the outdated content report in the CMS. Editors will only see content for their assigned section(s).  

The data as of Februaary 2023 was analyzed and it was confirmed that VAMC content is the most outdated and will require at least 25 pieces of content to be compliant within a year. We have chosen not to bombared editors with all items that they need to update at once and refer to this as "smoothing the curve". The email will detail that the expectation is to update 25 minimum per month.  

## Lean Canvas
[Product Strategy Stack_2023-05-18_18-36-08.pdf](https://github.com/department-of-veterans-affairs/va.gov-team/files/11510672/Product.Strategy.Stack_2023-05-18_18-36-08.pdf) 
<br>
**NOTE: canvas was created midway through 2Q 2023 after initiative started.
</br>
<br>
Link to Product Strategy Stack here: https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1683147313588/afecd984e38a4d90f424e3ab80050f4d765ae7f6?sender=ub3a2c2a4de441f561d452324
</br>

## Hypothesis
HMW integrate VA directive 6102 into the existing editor workflow, to best ensure compliance and remove barriers of utilization?
- Editors will respond positively to email notifications regarding their tasks to complete to be 6102 compliant.
- Partner and stakeholder buy-in is crucial for the success of CMS email notifications. 
- Editors will respond positively to a "smoothing the curve" approach. 


## Decision Points
**Bisect VAMC and Vet Center user bases**
<br>
In early 2Q 2023, the decision was made by OCTO to separate out the VAMC user base from the Vet Center use base (which were planned to be combined user bases for the notifications MVP). This allowed the CMS team to further distinguish differnces with the user bases since they will be delivered and utilized in completely separate ways. Tickets to further describe this work are: #13243; #13467 and #13468. The delivery of the Vet Center notifications is currently blocked by VA approval to move ahead. The CMS team has completed all work in preparation and will only need to queue up the emails to be delivered when the approval is green-lit (tentative estimation is 3Q 2023).
</br>

## Measuring Success
- [DataDog Dashboard Tracking Outdated Content Over Time](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-b669341fc85c8445c4580d908aff923a?from_ts=1681926683195&to_ts=1684518683195&live=true)

## UX Research Artifacts
- [VA Directive 6102 Compliance Discovery](https://app.mural.co/t/vagov6717/m/vagov6717/1662643881820/ad0f6da63dba4998516450701abca6ec1944ec74?sender=ud7d3055567694e54f0133356)

- [CMS Notifications Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/cms/research/CMS%20Notifications)


## UX Design Artifacts
- MVP Plan: [Email Prototypes-Figma](https://www.figma.com/file/fQl2Y2k9MDA2dc0xViC645/6102-Notification-Email?node-id=0%3A1&t=wxKohWwD1bqA9N5f-1)
- Sprint 82 updates:
I've updated the designs for both the Vet Center and VAMC emails to include the updated verbiage within the body text, and that can be found using this Figma link: https://www.figma.com/file/fQl2Y2k9MDA2dc0xViC645/6102-Notification-Email?node-id=510%3A7202&t=fNO1WcUptIYDq7d6-1


## Contacts
- Product Owner: Erika Washburn (OCTO-DE)
- Delivery Manager: Dawn Pruitt (Agile 6)
- Engineering: CMS Team/Edmund Dunn (Agile 6)
- Designer/Researcher: Blake Organ (CivicActions)
- Accessibility Lead: Laura Flannery (CivicActions)

## Revelant Backlog
[CMS Notifications for VA Directive 6102](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/10477)

## Technical Implementation
- [How it works and how to add new product notifications](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/docroot/modules/custom/va_gov_notifications/README.md)
