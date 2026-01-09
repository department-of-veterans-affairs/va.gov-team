# **Product Outline: Representative Status**

**Team**: Accredited Representation Management

The Representative Status widget is available on the following pages:

1. [Find a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/find-rep)
2. [Get help from a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/)
3. [Profile Subpage: Accredited Representative](https://www.va.gov/profile/accredited-representative)
4. [MyVA Dashboard (link in "Claims and Appeals")](https://www.va.gov/my-va)

## **Overview**

Create a user-friendly, accessible service on VA.gov that reflects a user's (Veteran or claimant) current representative status. This includes both a lightweight widget and a detailed Profile subpage for LOA3 users.

## **Problem Statement**

There is not currently an experience on VA.gov for users to understand their current representative status. Without insight into existing representation, a Veteran or claimant may accidentally remove a representative who is actively assisting with a claim, potentially delaying their already lengthy claims process.

**How might we provide Veterans with insight into their current representative status on VA.gov?**

## **Desired User Outcomes**

1. Veterans and claimants can easily see if they have existing representation when interacting with the Find a Representative tool.
2. Veterans and claimants can easily see if they have existing representation when interacting with the Appoint a Representative tool.
3. Veterans and claimants can easily see their representative status in the Account Profile.

## **Desired Business Outcomes**

1. Increase the functionality of VA.gov to support Veteran insight into current representation.

## **Assumptions**

1. Many Veterans are unaware that they have a current representative appointed.
2. Veterans would like to see if they have current representation.

---

## **Measuring Success**

**Datadog Dashboards**
1. [ARM: Representative Status (Sitewide)](https://vagov.ddog-gov.com/dashboard/ttj-p2z-9gh?fromUser=true&refresh_mode=sliding&from_ts=1734903344987&to_ts=1737581744987&live=true)
2. [Authenticated Experience: Profile](https://vagov.ddog-gov.com/dashboard/86m-u8e-z5x/authenticated-experience-profile?fromUser=false&refresh_mode=sliding&from_ts=1753376169468&to_ts=1753980969468&live=true) - the Accredited Representative Status section reflects reporting of Representative Status in Profile

**Domo Dashboards**
1. [Accredited Representation Managment](https://va-gov.domo.com/page/1897070864) - User trends for ARM products

**Future Ideas for Measuring Success**
1. Sign ins from the unauthenticated Widget are on-par or above the "standard" sign in rate for VA.gov

## **Release History**

#### Version 1.0 (Widget MVP) | [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/representative-status-widget/release-plan-representative-status-1.0.md) and [Demo Video](https://dvagov.sharepoint.com/:v:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representation%20Management/Product%20Information/Product%20Demo%20Recordings/Representative%20Status%20Widget%20Demo.mp4?csf=1&web=1&e=nMo14H)

Released to 100% of users on May 20, 2024. Added the widget to the [landing page](https://www.va.gov/get-help-from-accredited-representative/) and [Find a Representative page](https://www.va.gov/get-help-from-accredited-representative/find-rep/).

Included widget states:

- Unauthenticated
- Authenticated, no representative
- Authenticated, represented by VSO
- Authenticated, represented by individual
- Error (401, 404, 500, 502, 503, 504)

#### Version 2.0 (in Profile/MyVA) | [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/representative-status-widget/release-plan-representative-status-2.0.md) and [Demo Video](https://dvagov.sharepoint.com/:v:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representation%20Management/Product%20Information/Product%20Demo%20Recordings/Representative%20Status%20in%20Profile_MyVA%20Demo.mp4?csf=1&web=1&e=KrCRpw)

Released to 100% of LOA3 users on June 2, 2025. Added a decidated Profile subpage, with the same states as the widget (version 1.0).

The URL for this Profile subpage is https://va.gov/profile/accredited-representative. There is also a link to this Profile subpage on MyVA, in the Claims and Appeals section titled “Get help from your accredited representative or VSO”. The URL for MyVA is https://va.gov/my-va.

---

## **Recommended Next Steps**

#### Next Version Priorities - Representative Status 2.1

A future version of Representative Status should strive to:
1. Bring the error rate (for calling the [Lighthouse Benefits Claims API](https://developer.va.gov/explore/api/benefits-claims/docs?version=current)) below 1%. Currently, the biggest impacts to error rate are when the API undergoes scheduled maintenance or has an unplanned incident/outage.
2. Improve UX and messaging around pending requests and the error state
3. Address known bugs

Please refer to these epics, to bring Representative Status 2.1 into Production:
1. [ARM Design: Representative Status 2.1](https://github.com/department-of-veterans-affairs/va.gov-team/issues/106743) - explore ideas to improve the Representative Status UX.
2. [ARM Development: Representative Status 2.1](https://github.com/department-of-veterans-affairs/va.gov-team/issues/115970) - reduce the error rate to below 1%, address known bugs, factor in any design updates.
 
#### Known Bugs
Some bugs have been identified for our Production experience. These have not yet been addressed due to lower priority, feel free to prioritize + address as needed.

[Known bugs are stored in this view of the Github project board](https://github.com/orgs/department-of-veterans-affairs/projects/1180/views/41). 

#### Future Ideas

Longer term ideas are stored in our [ARM Future Ideas](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representation%20Management/ARM%20Future%20Ideas.docx?d=wfe95a788166e4670bfda5a59798550d7&csf=1&web=1&e=7iFIw0) document.

---

## **Supporting Documentation**

1. [Representative Status in Profile documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/accredited-representative-status)
2. [Decision and Change Log: Representative Status](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/representative-status/decision-change-log-representative-status.md)
3. [Representative Status Widget Playbook/Incident Response Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/representative-status/technical-documentation/product-playbook-incident-response-plan.md)
4. [Contact Center Guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/representative-status/contact-center) (with screenshots)

Related Profile documentation
1. [Figma files](https://www.figma.com/design/FTwQPg1HxfiYsSh0e1HqvN/Profile---Dependents-and-contacts?node-id=1-27&t=Q8Naquq1eob20Deg-1)
2. [GH use case documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/accredited-representative-status)

## **Communications**

1. **Team Name**: Accredited Representation Management
2. **GitHub Label**: `accredited-representation-management-team`
3. **Slack channel**: `#benefits-representation-management`

## **Team Members**

1. **DEPO Lead**: Jennifer Bertsch
2. **PM**: Lindsay Li-Smith
3. **Engineering**: Holden Hinkle
4. **UX Research/Design**: Marisa Dominguez
