# Authenticated experience: 2023 goals & roadmap

## Goals

### 1,000 foot view: Support the 2023 OCTO objectives

In our October 2022 offsite, Charles shared 10 objectives for OCTO for the year. The authenticated experience team will primarily support the following objectives:

- Enhance veterans' personalized online experience
- Refresh the VA.gov homepage and information architecture
- Integrate the health protal features into VA.gov
- Improve the veteran login experience

### 500 foot view: What this means for work on our team

#### Expanding onsite notifications

Now that our MVP has launched, we have the opportunity to scale onsite notifications into a robust and highly-valuable VA.gov features. We know from countless user research efforts that the #1 thing people expect to see when they log in is personalized action items and updates, so scaling and elevating onsite notifications is a must. We''ll be spending the year figuring out our governance process, exploring a notification center, and, of course, adding new notifications.

#### Expanding notification preferences

For the profile, the notification preferences section is currently our biggest focus. We've got a lot of work coming down the pipeline, including incorporating preferences from MHV and eBenefits, as well as working with VANotify and VA Profile to add new preferences as other notifications are added. By year's end, I could see us adding 5 new preferences, if partners continue adding new notifications at the pace they did in 2022.

#### Improving IA and navigation for tasks and tools

One of our most important efforts this year will be working with Mikki and teams across OCTO to find areas for improvement with regards to navigating to tools and tasks. Right now, important tasks and tools are buried within content, and we regularly see users struggle to find tasks that aren't directly linked from the homepage or My VA. We'll review previous research, determine a strategy for moving forward, and hopefully start making and measuring improvements before year's end.

#### Supporting the health apartment migration

There are plenty of opportunities for us to collaborate as MHV health features move into VA.gov. Our largest effort will be supporting the migration of MHV notification preferences into VA.gov. Additionally, we'll update the My VA dashboard as health features move over.

#### Adding a new user role to VA.gov

Assuming that this work is ready to start in 2023, we'll work closely with the identity product team to update My VA and the profile to accommodate a new user type on VA.gov.

## Q1 CY2023 (January - March) Roadmap

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

## The rest of the year

### Q2 CY2023 (April - June)

Samara's maternity leave!! I'll be out most of this quarter.

## Q3 - Q4 CY2023 (July - December)

We'll determine what we'll be working on at this point as it gets closer.
