# **Product Outline: Representative Status**

**Team**: Accredited Representation Management

The Representative Status widget is available on the following pages:

1. [Find a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/find-rep)
2. [Get help from a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/)
3. [Profile Subpage: Accredited Representative](https://www.va.gov/profile/accredited-representative)
4. [MyVA Dashboard (link in "Claims and Appeals")](https://www.va.gov/my-va)

---

## **Overview**

Create a user-friendly, accessible service on VA.gov that reflects a user's (Veteran or claimant) current representative status. This includes both a lightweight widget and a detailed Profile subpage for LOA3 users.

---

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

## **Solution Approach**

Our goal is to provide Veterans and claimants with visibility into their current representation status via:

- A widget shown on relevant VA.gov pages
- A Profile subpage (only for LOA3 users) that provides detailed information

## **Measuring Success**

Performance is tracked in the [ARM: Representative Status](https://vagov.ddog-gov.com/dashboard/ttj-p2z-9gh/arm-representative-status?fromUser=false&refresh_mode=sliding&from_ts=1745099169063&to_ts=1747691169063&live=true) Datadog dashboard

We are actively working with the Platform Analytics team to visualize our [ARM OKRs](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1718224425278/b300ea8d63dcaaa0cdad0ebf6b4a65a20fcc9371?sender=ubac5f0487f25bc4431288699) in a Domo dashboard.

---

## **Supporting Documentation**

1. [Decision and Change Log: Representative Status](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/representative-status-widget/decision-change-log-representative-status.md)
2. [Representative Status Widget Playbook/Incident Response Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/representative-status-widget/launch-materials/product-playbook-incident-response-plan.md)
3. [Contact Center Guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/representative-status-widget/contact-center)
4. [Service Map](https://www.docstomarkdown.pro/convert-markdown-to-google-docs-online/service-map.md)

## **Release History**

### Version 1.0 (MVP) ([Demo](https://dsva.slack.com/archives/C05L6HSJLHM/p1716406611746829))

Released May 20, 2024. Added the widget to the [landing page](https://www.va.gov/get-help-from-accredited-representative/) and [Find a Representative page](https://www.va.gov/get-help-from-accredited-representative/find-rep/).

Included widget states:

- Unauthenticated
- Authenticated, no representative (200, 422)
- Authenticated, represented by VSO (200)
- Authenticated, represented by individual (200)
- Error (401, 404, 500, 502, 503, 504)

### Version 2.0 (in Profile/MyVA) (Demo TBD)

Representative Status 2.0 introduces the same states as the widget (version 1.0), but on a dedicated Profile subpage. **This release is scheduled to begin in May 2025.**

The URL for this Profile subpage is https://va.gov/profile/accredited-representative. There is also a link to this Profile subpage on MyVA, in the Claims and Appeals section titled “Get help from your accredited representative or VSO”. The URL for MyVA is https://va.gov/my-va.

The Representative Status Profile subpage can only be accessed by LOA3 users. This subpage is not available to:

1. LOA1 users. These users can only see an "Account security" page with a warning to verify their identity.
2. Users classified as "incompetent". These users can only see an "Account security" page with a warning "We can't show your information".
3. Users with a fiduciary appointed. These users can only see an "Account security" page with a warning "We can't show your information".

## **Future Plans and Ideas**

Longer term ideas are stored in our[ ARM Future Ideas](https://dsva.slack.com/docs/T03FECE8V/F06JUJ4CR19) Slack canvas.

## **Communications**

1. **Team Name**: Accredited Representation Management
2. **GitHub Label**: `accredited-representation-management-team`
3. **Slack channel**: `#benefits-representation-management`

---

## **Team Members**

1. **DEPO Lead**: Jennifer Bertsch
2. **PM**: Lindsay Li-Smith
3. **Engineering**: Holden Hinkle
4. **UX Research/Design**: Marisa Dominguez
