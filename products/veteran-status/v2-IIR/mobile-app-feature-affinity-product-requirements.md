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

|                          |                                                                                                  |                                                                                                                                                                                         |                                                                                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Desired User Outcome** | **Requirement**                                                                                  | **Implementation Ticket**                                                                                                                                                               | **UX Design**                                                                                                                                    |
| #1                       | Add the DoD ID section to the card                                                               | \[FE] Add DoD ID to Proof of Veteran Status [#9661](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/9661)   | [Link to Figma](https://www.figma.com/design/AobGKkBvIiDuYXR2QqkytC/IIR-Veteran-Status?node-id=607-39280\&node-type=frame\&t=PohsbGV4vGHCgHMX-0) |
|                          | Add dynamic logic so if a user does not have an EDIPI, the DoD ID section on the card is removed | Same as above                                                                                                                                                                           |                                                                                                                                                  |
| #1                       | DOB is removed from card                                                                         | \[FE] Remove DOB from Proof of Veteran Status [#9660](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/9660) | [Link to Figma](https://www.figma.com/design/AobGKkBvIiDuYXR2QqkytC/IIR-Veteran-Status?node-id=607-39280\&node-type=frame\&t=1KWARYeozWDBb1G0-0) |

