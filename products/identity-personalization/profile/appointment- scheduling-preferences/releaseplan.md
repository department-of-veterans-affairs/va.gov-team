# Elizabeth Dole Appointment Scheduling Preferences Release Plan

**Last Updated 1/2/2026**
 

## Communication
- [DSVA Slack Channel](https://dsva.slack.com/archives/C09K4K47KHS)
- Teams Channels: Dole Section 145 - Technical Discussion; Dole Section 145

## Important Artifacts 
- [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/122591)
- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/appointment-%20scheduling-preferences/README.md)
- [Collaboration Cycle Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/123094)
- [Data Dog Dashboard](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-bd93d62d37a448b2511fce5becc4b731?fromUser=false&refresh_mode=sliding&from_ts=1712242328583&to_ts=1712328728583&live=true)
- [Domo Dashboard](https://va-gov.domo.com/page/825663825?userId=932934509)
- [Figma Designs](https://www.figma.com/design/smldak4d56moGObUR5jifE/E.-Dole-Act--Appointment-Scheduling-Preferences-in-VA-Profile?node-id=653-59136&t=r7DSpWU0Lhalm45x-1)
- Relevant Use Cases
  - [Healthcare Settings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/health-care-settings/health-care-settings-landingpg.md)
  - [Scheduling Preferences](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/health-care-settings/scheduling-preferences.md)
- QA Test Plan - in progress
- Staging Users - in progress



## Development & Test Plan
The VA Profile team is working on the API connections to and from the downstream systems (MAP, ISS), and va.gov is supporting the front end development and API transaction development of the healthcare settings page in the va.gov Profile. The va.gov Profile team is putting this development behind a feature flag, **profile_scheduling_preferences**.

This release is for a pilot segmentation dicated by the Elizabeth Dole Act. 
Release criteria:
- Only LOA3 Veterans with healthcare that are associated with VISNs 2, 15, and 21 will be able to view and update these settings.
- Veterans who are not applicable to this segmentation will have this page hidden in their va.gov Profile.


### Testing
For this release we will not perform UAT testing with Veterans. Due to testing constraints with the specific VISN population, we will be unlikely to identify users who fit the criteria in a timely manner to conduct the testing prior to release.

We will conduct QA testing in the va.gov staging environment, and participate in integrated testing with the VA Profile team to:
- Validate all content and interactions match the approved designs;
- Validate API transaction data matches the front-end user interactions;
- Validate all data is stored and saved appropriately.

## Release 
- Flip feature flag to on. Because this is for a small set of users / not all Veterans will be able to view the applicable page, a staged rollout will not be necessary. This will flip to 100% of all segmented users. 
- Monitoring by development team, product & delivery leads.

### Rollback Plan: 
Tech Lead, Design Lead, PM, and PO will monitor DataDog analytics. If the team notices a spike in errors, the team will disable the feature, debug, and re-release.


### Go Live 
We will measure success of the release by monitoring:
- API error rates & latency
- Veteran Support Center & Medallia feedback

### 1-week results at 100%
||Results|
|---|---|
|Number of unique users:||
|Any issues with VA handling/processing?||
|Types of errors logged:| )|
|Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?||
|If yes, what:||


### 1-month results at 100%
||Results|
|---|---|
|Number of unique users:||
|Any issues with VA handling/processing?| |
|Types of errors logged:|  |
|Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?| |
|If yes, what:||

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
2. What qualitative feedback have you gathered from users or other stakeholders, if any?
3. Which of the assumptions you listed in your product outline were/were not validated? 
4. How might your product evolve now or in the future based on these results?
