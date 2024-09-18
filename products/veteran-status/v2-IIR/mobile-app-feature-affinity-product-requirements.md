# Veteran Status Card
## Mobile App Feature Affinity Product Requirements

These requirements are based on the [Desired User Outcomes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-status/v2-IIR/mobile-app-feature-affinity-product-outline.md#desired-user-outcomes) listed in the product outline.

These same outcomes are also listed in number six in [this Mobile SoS Board ticket](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/9480#issue-2490482202). 

### Desired User Outcomes

1. Mobile app users can see their DoD ID number on their Proof of Status

2. Mobile app users who are ineligible for Proof of Status know why they are ineligible

3. Mobile app users who can’t access their Proof of Status know why they can’t access

4. Increase the number of Veterans that can view their Proof of Status (potential API change to reduce errors).

### 9/18 Update: 
Right now we can only move forward with requirements for #1. We will be changing the API we are using to determine a Veteran’s status which will impact #2, #3, and #4. Until the IIR team has made the necessary API changes on web, mobile app team should not proceed with work outside of #1.

|                          |                                                                                                  |                                                                                                                                                                                                   |                                                                                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Desired User Outcome** | **Requirement**                                                                                  | **Implementation Ticket**                                                                                                                                                                         | **UX Design**                                                                                                                                    |
| #1                       | Make the EDIPI user data available so FE can reference it on the card                            | \[BE] Save EDIPI in state and make it available to FE. See [vets-website branch](https://github.com/department-of-veterans-affairs/vets-website/tree/VA-IIR-745-locate-EDIPI-data) for this work. | [Link to Figma](https://www.figma.com/design/AobGKkBvIiDuYXR2QqkytC/IIR-Veteran-Status?node-id=607-39280\&node-type=frame\&t=PohsbGV4vGHCgHMX-0) |
|                          | Add the DoD ID section to the card                                                               | \[FE] Add the EDIPI to the Veteran Status Card (this is the new DoD ID section)                                                                                                                   |                                                                                                                                                  |
|                          | Add dynamic logic so if a user does not have an EDIPI, the DoD ID section on the card is removed | \[FE] If there is no EDIPI for a user, remove the DoD ID section on card                                                                                                                          |                                                                                                                                                  |
| #1                       | DOB is removed from card                                                                         | \[FE] Remove the DOB section from the card.                                                                                                                                                       | [Link to Figma](https://www.figma.com/design/AobGKkBvIiDuYXR2QqkytC/IIR-Veteran-Status?node-id=607-39280\&node-type=frame\&t=1KWARYeozWDBb1G0-0) |
