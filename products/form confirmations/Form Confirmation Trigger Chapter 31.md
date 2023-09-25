# Form Submission Trigger for Chapter 31

## Overview
The Chapter 31 submission process has two workflows. Two submission confirmation emails were created to support both of these paths.
- The Happy Path process: after the Veteran submits the Chapter 31 form, the VBMS table is updated successfully. A request to email the Veteran is made through the VA Notify system. The email the user entered when filling out the form is utilized for these notifications.
- The Central Mail process: after the Veteran submits the Chapter 31 form, if the VBMS table is not able to be updated then the form is sent to Central Mail. A request to email the Veteran is made through the VA Notify system. The email the user entered when filling out the form is utilized for these notifications.

## Trigger Behavior
* Happy path process:
[send_vbms_confirmation_email defined](https://github.com/department-of-veterans-affairs/vets-api/blob/401de75af73d0ab0ff7b7280cfca1422398be00c/app/models/saved_claim/veteran_readiness_employment_claim.rb#L176)

* Central mail process:
[send_central_mail_confirmation_email defined](https://github.com/department-of-veterans-affairs/vets-api/blob/401de75af73d0ab0ff7b7280cfca1422398be00c/app/models/saved_claim/veteran_readiness_employment_claim.rb#L189)
## Trigger Code
* Happy path process:
[send_vbms_confirmation_email](https://github.com/department-of-veterans-affairs/vets-api/blob/401de75af73d0ab0ff7b7280cfca1422398be00c/app/models/saved_claim/veteran_readiness_employment_claim.rb#L113C1-L113C24)

* Central mail process:
[send_central_mail_confirmation_email](https://github.com/department-of-veterans-affairs/vets-api/blob/401de75af73d0ab0ff7b7280cfca1422398be00c/app/models/saved_claim/veteran_readiness_employment_claim.rb#L113C1-L113C24)
## Outside of this Scope


---

## Launch Dates
- *Launch Date*: 100% of population as of April 13, 2022

---

## Reference Material

_Link to the following materials as relevant:_

- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/form%20confirmations/form%20submission%20product%20outline.md)
- [DOMO Dashboard](https://va-gov.domo.com/page/2040841289)

### Communications

<details>

- Team Name: VA Notify Forms Strike Team
- GitHub Label: Strike
- Slack channel: va-notify-forms-strike-team
- Product POCs: Melanie Jones PM, Tabinda Syed DM, Beverly Nelson PO

</details>
