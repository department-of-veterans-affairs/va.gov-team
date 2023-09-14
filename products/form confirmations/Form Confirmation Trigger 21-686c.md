# Form Submission Trigger for 686c

## Overview
When a veteran submits an application for the 21-686c, and the VNP table is updated successfully, then this trigger is fired. A request to email the Veteran is made through the VA Notify system. The email the user entered when filling out the form is utilized for these notifications.

## Trigger Behavior

Sends a confirmation email to the user's email address (associated with their VA profile) when the form is successfully submitted

- see the trigger behavior in the [repo](https://github.com/department-of-veterans-affairs/vets-api/blob/401de75af73d0ab0ff7b7280cfca1422398be00c/app/workers/bgs/submit_form686c_job.rb#L52)

---

## Trigger Code

- Link to the invocation of the trigger behavior (within the trigger code) [here](https://github.com/department-of-veterans-affairs/vets-api/blob/401de75af73d0ab0ff7b7280cfca1422398be00c/app/workers/bgs/submit_form686c_job.rb#L30)

---

## Outside of this Scope
The 21-686c and the 21-674 have a somewhat joined workflow. This trigger is only sending confirmation email requests with the 21-686c is submitted.

---

## Launch Dates
- *Launch Date*: 100% of population as of April 13, 2022

---

## Reference Material

_Link to the following materials as relevant._

- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/form%20confirmations/form%20submission%20product%20outline.md)
- [DOMO Dashboard](https://va-gov.domo.com/page/2040841289)

### Communications

<details>

- Team Name: VA Notify Forms Strike Team
- GitHub Label: Strike
- Slack channel: va-notify-forms-strike-team
- Product POCs: Megan Siddle PM, Zachary Law DM, Beverly Nelson PO

</details>
