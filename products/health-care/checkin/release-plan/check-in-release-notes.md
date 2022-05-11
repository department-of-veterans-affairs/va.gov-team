# RELEASE NOTES

## Product Summary
VA is replacing the proprietary VETLink appointment check-in kiosks with an in-house developed mobile friendly experience that allows Veterans to complete pre-appointment tasks from their home and check in for their health appointments. This system leverages the trusted VA.gov web experience to reduce costs and quickly surface veterans’ status to VA staff, while reducing required interactions and time spent. The check-in experience team does extensive 
research with veterans in order to focus on outcomes that reduce stress and provide intuitive interfaces to allow Veterans to complete check-in tasks at their own convenience. The check-in experience apps are currently being piloted in the St Louis area and will be launched nation-wide over the course of the summer.

When a Veteran arrives for their appointment, they can check-in through a text message on their personal mobile device. The Veteran receives a link back that they can use to complete check-in through a few simple prompts on a website on their phone. They don’t have to wait in line at a kiosk or to talk to a staff member- they can start checking in as soon as they’re ready. The new check-in experience integrates with existing VA systems to let the staff know that the Veteran has checked in. We also have a pre-check-in process that prompts the Veteran to complete some check-in steps before the day of their appointment in the comfort of their own home. This includes things such as verifying that their contact information and emergency contact are up to date, and health questionnaires are planned for future development. 

## Product Guides 
#### [Patient Check-in (day of appointment experience)](https://github.com/department-of-veterans-affairs/va.gov-team/files/8319305/PATIENT.CHECK-IN_PRODUCT_GUIDE.pdf)

#### [Pre-check-in (prior to day of appointment experience)](https://github.com/department-of-veterans-affairs/va.gov-team/files/8247195/PRE-CHECK-IN_PRODUCT_GUIDE.pdf)

## Releases

### 05/11/2022
- Fix to allow a veteran to seamlessly perform check-in and/or pre-check-in even if they have an active fully authenticated session.
    - [Ticket 39270](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/38679)

### 05/06/2022
- Added messaging to direct Veterans on where to go to update their demographic, emergency contact, and next-of-kin contact information.
    - [Epic 39270](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/39270)
    - Upon being asked to confirm if their contact, emergency contact, and next-of-kin information is correct
        - If a Veteran has indicated that any of the information needs updating, they will see information directing them how to update their information; different views are shown depending on which information they indicated need updating
            -  [Contact information](https://images.zenhubusercontent.com/61523b5b9d354750f04823db/aaa86267-0d68-42c2-8aa0-b37584a89479)
            -  [Emergency contact](https://images.zenhubusercontent.com/61523b5b9d354750f04823db/b71432c7-a158-4ad9-bc09-f3059b29f819)
            -  [Next of kin](https://images.zenhubusercontent.com/61523b5b9d354750f04823db/06470da7-f140-4226-918b-75711c25a785)
            -  [Contact and Emergency contact](https://images.zenhubusercontent.com/61523b5b9d354750f04823db/694f383d-d3af-4693-ab47-835ca3620b70)
            -  [Contact and Next of kin](https://images.zenhubusercontent.com/61523b5b9d354750f04823db/a5a7a94e-a76c-4cfd-a0ad-8013d5f6d07c)
            -  [Emergency contact and Next of kin](https://images.zenhubusercontent.com/61523b5b9d354750f04823db/b69904ff-90df-4fdd-b0ef-7d69cd75c4d3)
            -  [All three](https://images.zenhubusercontent.com/61523b5b9d354750f04823db/91cc549f-5195-4b1d-bdd2-03b9625a7b2a)
        - If a Veteran has indicated that all of the information is correct, they will not see this information
### 04/08/2022
- Change made to allow Veterans, who confirm their demographics information during the pre-check-in process but fail to check-in for their appointment, to return later to check-in for their appointment and not have to re-confirm their demographics information.
    - [Epic 39712](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/39712)
    - Feature Flag: check_in_experience_demographics_confirmation_enabled
