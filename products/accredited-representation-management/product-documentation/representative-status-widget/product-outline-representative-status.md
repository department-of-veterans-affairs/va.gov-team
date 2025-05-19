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

Monthly performance metrics are currently documented in SharePoint: the [Performance Metrics](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Fvaabdvro%2FShared%20Documents%2FAccredited%20Representation%20Management%2FPerformance%20Metrics&viewid=3fa7a9bb%2D3d4e%2D44c2%2Db93f%2D629268a08e72) folder includes raw data, which is summarized in the monthly [Sprint Report](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Fvaabdvro%2FShared%20Documents%2FAccredited%20Representation%20Management%2FVeteran%20Facing%20Sprint%20Reports%20and%20Demos&viewid=3fa7a9bb%2D3d4e%2D44c2%2Db93f%2D629268a08e72) decks.

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

### Version 2.0 – Released May XX, 2025

**Key updates:**

- Added LOA1-specific state prompting users to verify their identity
- Added Profile subpage at [https://www.va.gov/profile/accredited-representative](https://www.va.gov/profile/accredited-representative)
- Added MyVA Dashboard link to the Profile subpage
- Updated error-handling behavior and messaging
- Added handling for "incompetent" users and those with fiduciaries (these users see an account security warning)

**User states now supported:**

1. **Unauthenticated** – Prompt to sign in
2. **LOA1** – Prompt to verify identity
3. **LOA3, no representative** – Message shown indicating no rep is on file
4. **LOA3, represented by VSO** – Displays VSO information
5. **LOA3, represented by individual (attorney or agent)** – Displays individual rep info
6. **Incompetent / fiduciary users** – Warning that information cannot be shown
7. **Error** – Generic error with support guidance

All authenticated states include a link to the [FAQ page](https://www.va.gov/resources/va-accredited-representative-faqs/) for more help.

## **Future Plans and Ideas**

Longer-term ideas for Find a Representative are stored in the [ARM Future Ideas](https://dsva.slack.com/docs/T03FECE8V/F06JUJ4CR19) Slack canvas.

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
