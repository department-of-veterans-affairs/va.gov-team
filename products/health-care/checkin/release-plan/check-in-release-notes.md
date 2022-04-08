# RELEASE NOTES

## Product Summary
VA is replacing the proprietary VETLink appointment check-in kiosks with an in-house developed mobile friendly experience that allows Veterans to complete pre-appointment tasks from their home and check in for their health appointments. This system leverages the trusted VA.gov web experience to reduce costs and quickly surface veterans’ status to VA staff, while reducing required interactions and time spent. The check-in experience team does extensive 
research with veterans in order to focus on outcomes that reduce stress and provide intuitive interfaces to allow Veterans to complete check-in tasks at their own convenience. The check-in experience apps are currently being piloted in the St Louis area and will be launched nation-wide over the course of the summer.

When a Veteran arrives for their appointment, they can check-in through a text message on their personal mobile device. The Veteran receives a link back that they can use to complete check-in through a few simple prompts on a website on their phone. They don’t have to wait in line at a kiosk or to talk to a staff member- they can start checking in as soon as they’re ready. The new check-in experience integrates with existing VA systems to let the staff know that the Veteran has checked in. We also have a pre-check-in process that prompts the Veteran to complete some check-in steps before the day of their appointment in the comfort of their own home. This includes things such as verifying that their contact information and emergency contact are up to date, and health questionnaires are planned for future development. 

## Product Guides 
#### [Patient Check-in (day of appointment experience)](https://github.com/department-of-veterans-affairs/va.gov-team/files/8319305/PATIENT.CHECK-IN_PRODUCT_GUIDE.pdf)

#### [Pre-check-in (prior to day of appointment experience)](https://github.com/department-of-veterans-affairs/va.gov-team/files/8247195/PRE-CHECK-IN_PRODUCT_GUIDE.pdf)

## Releases

### 04/08/2022
- Change made to allow Veterans, who confirm their demographics information during the pre-check-in process but fail to check-in for their appointment, to return later to check-in for their appointment and not have to re-confirm their demographics information.
    - [Epic 39712](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/39712)
    - Feature Flag: check_in_experience_demographics_confirmation_enabled
