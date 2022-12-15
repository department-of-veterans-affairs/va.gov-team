# Authenticated experience 2023 roadmapping

## Q1 CY2023 (January - March)

### My VA and Onsite Notifications team

#### [My VA audit updates](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/2022-audit#readme)

**OCTO objective**: Enhance Veterans' personalized online experience

This work is carrying over from Q4 CY2022. We are making some major improvements to UX and accessibility on My VA by making it so all sections show all the time, improving consistency, and removing some overly-nuanced personalization that made the page more complex without adding enough value.
 
**Expected launch date**: Late March/Early April 2023.

#### [Onsite notifications V2: Scale notifications feature](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/onsite-notifications/notifications-v2#readme)

**OCTO objective**: Enhance Veterans' personalized online experience

The onsite notifications MVP launched in October 2022, and we are now ready to scale this feature. While we're still scoping this work, we'll likely tackle overall governance and adding at least 1 new notification.

**Expected launch date**: We are still scoping this work, so launches will depend on final scope. I'd at least like us to launch something in the first three months of the year, even if that means dividing this work into phases that extend beyond Q1.

#### Update claims section so it points to Lighthouse integration

Claims and appeals information on VA.gov is currently supported by EVSS. However, EVSS is going away, and EVSS integrations are in the process of moving over to the Lighthouse platform. Benefits team 1 has been working on this migration already, and it will likely be ready for us to start updating My VA in Jan 2023. We'll work closely with Benefits team 1 and Lighthouse to get this section updated, tested, and launched.

### Profile team

#### Frontend: [Finish accessibility updates](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/gh/department-of-veterans-affairs/va.gov-team/46756)

There are quite a few design updates that are complete and need to be implemented. We should wrap up frontend implementation on these tickets ahead of moving on to other work.

#### Backend: [Update direct deposit for comp & pen section so it points to Lighthouse integration](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration/README.md)

Direct deposit for comp & pen information on VA.gov is currently supported by EVSS. However, EVSS is going away in 2023 (need to confirm date), and EVSS integrations are in the process of moving over to the Lighthouse platform. According to [Nichole Harris](https://dsva.slack.com/archives/C8R3JS8BU/p1670604479375849?thread_ts=1670603198.743219&cid=C8R3JS8BU), the direct deposit information is almost in their Sandbox and will hopefully be ready for their production environment in January 2023. At this point, we can start moving over our integration from EVSS to Lighthouse. We'll work closely with Lighthouse to get this funtionality updated, tested, and launched.

**Expected launch date**: Assuming this is just a backend effort, this can likely launch before the end of Q1 CY2023.

#### Research/Design: Adding email as a channel to notification preferences

We'll eventually need to add email as a channel for notification preferences, we're just not sure when. Liz has created some preliminary mockups that need to be refined and tested in order to to determine whether this approach is usable and scalable long-term. 

#### Low lift: Add QuickSubmit notification preference

Quick Submit is a platform that supports the claims application process and allows users to upload documents. With regards to notifications, they need a preference that allows them to opt-in and out of notifications as to whether there is a new letter to view in the Quick Submit app. This is a text notification, so this should be easy for us to support with our existing VA Profile integration. We'll work with them to support this preferernce on VA.gov. 

**Expected launch date**: Before the end of Q1 CY2023.

### Either team

#### Support wayfinding research

**OCTO objectives**: Refresh the VA.gov homepage and information architecture; Integrate health portal features into VA.gov

With the addition of so many tools to VA.gov since the original redesign, we have seen issues with IA/navigation arise around how people find tools and tasks. Things are about to get extra complicated as the health apartment migrates into VA.gov. We'll be working with Mikki to support research that aims to understand the problems with VA.gov's current structure and to figure out how to keep it manageable and navigable over time as it grows.

## Q2 CY2023 (April - June)

Samara's maternity leave!! I'll be out most of this quarter.

## Q3 CY2023 (July - September)

## Q4 CY2023 (October - December)

---------------

## Work that's happening, but we are not sure when

### My VA and Onsite Notifications team

#### Incorporate health features into My VA as MHV features are migrated to VA.gov

**OCTO objective**: Integrate health portal features into VA.gov

This could be as small as updating links, or as big as adding new modules as features move over from MHV. I believe initial features/updates might include secure messaging and medical records.

#### Add a new user role/experience to VA.gov

**OCTO objective**: Improve the Veteran login experience

It is likely we'll start work on a new user role experience in VA.gov before the end of the calendar year, though unlikely within the first half of 2023 [Slack](https://dsva.slack.com/archives/G9TV2B50E/p1666828006560949?thread_ts=1666795077.350119&cid=G9TV2B50E). This will likely require updates to My VA.

### Profile team

#### [Incorporate MHV notification preferences into the VA.gov profile](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences/mhv-notification-preferences-migration#readme)

**OCTO objective**: Integrate health portal features into VA.gov

We are currently in the early stages of migrating notification preferences from MHV to VA.gov. The first step is getting preferences into the VA Profile backend, ideally followed by MyHealtheVet integrating their frontend with VA Profile. Over the year, we'll figure out when to support these preferences in VA.gov, and we'll work with VANotify as the actual notifications migrate from MHV systems into VANotify. In its entirety, this work will likely span this year and beyond as health features are moved from MHV to VA.gov.

#### Add a new user role/experience to VA.gov

**OCTO objective**: Improve the Veteran login experience

It is likely we'll start work on a new user role experience in VA.gov before the end of the calendar year, though unlikely within the first half of 2023 [Slack](https://dsva.slack.com/archives/G9TV2B50E/p1666828006560949?thread_ts=1666795077.350119&cid=G9TV2B50E). This will likely require updates to the VA.gov profile.
  
#### Add eBenefits notification preferences into VA.gov 

**OCTO objective**: Enhance Veterans' personalized online experience

In partnership with VANotify (leading this work) and VA Profile, we have been talking to eBenefits stakeholders about consolidating and moving over a bunch of benefit recommendation emails supported on eBenefits to VANotify. Preferences would be stored in VA Profile and need to be viewable and editable from VA.gov.

#### Additional potential projects

- Adding "pronouns" and "sexual orientation" to the VA.gov profile **if** those fields get PRA approval.
- Adding new fields to the military information section of the profile to support PACT Act ([Details](https://dsva.slack.com/archives/G03HQ55DC/p1667569982198959)).
- Investigating if the profile should have a way to view dependent information.

### Either team

#### Ongoing support of wayfinding research/IA and navigation updates

**OCTO objective**: Refresh the VA.gov homepage and information architecture

The wayfinding research mentioned above is part of a larger effort to improve the overall experience of navigating VA.gov, especially for logged-in users trying to get to tools and tasks. We don't know what the entirety of this work will look like now, but we can anticipate our team and others being involved to support Mikki in this work.
