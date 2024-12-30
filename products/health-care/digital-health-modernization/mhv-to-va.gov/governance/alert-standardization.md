# My HealtheVet on VA.gov | Alert Standardization
To ensure a consistent Veteran experience and reduce cognitive load within the My HealtheVet-on-VA.gov portal, it is necessary to **standardize application behavior under access-limiting conditions**. This document seeks to explain the logic and standardized alert designs for each of these scenarios, so that all teams are aligned and deliver end-users a consistent user experience. 

## On this page: 
* [High-level API access logic](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/governance/alert-standardization.md#high-level-api-access-logic)
* [User routing under access-limiting conditions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/governance/alert-standardization.md#user-routing-under-access-limiting-conditions)
* [ID-verification alerts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/governance/alert-standardization.md#ID-verification-alerts)
* [No access to My HealtheVet alerts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/governance/alert-standardization.md#No-access-to-My-HealtheVet-alerts)
* [Account Creation API error alerts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/governance/alert-standardization.md#account-creation-api-error-alerts)
* Oracle-Health Routing alerts (guidance coming soon)
* 404 page not found alerts (guidance coming soon)

## High-level API access logic
```mermaid
flowchart TD
    A[sign-in] --> B(Is the user ID-verified?)
    B --> |Yes| C(Is there a facility in the profile?)
    B --> |No| E{fa:fa-circle-exclamation ID verification alert}
    C -->|Yes| D(Does the user have an MHV-Identifier?)
    C -->|No| F{fa:fa-circle-exclamation 'No access' alert}
    D --> |Yes| G(Render application)
    D --> |No| H(What tools are they trying to access?)
    H --> |Landing page, Meds, Records, SM| I{fa:fa-circle-exclamation Account Creation API error alert on affected apps}
    H --> |Other health tool| J(Render application)
```
1. All /my-health application pages should look for an ID-verified credential (IAL2) as the first-order criteria before rendering a page for users.
2. If an ID-verified credential (IAL2) is not detected, the application should **redirect the user to the MHV-on-VA.gov landing page**, where the user will experience only: H1, lede text, and the ID-verification alert (all cards, links, and the secondary nav will not be shown).
3. If an ID-verified credential (IAL2) is detected, then /my-health application pages should look for the presence of a facility in the user's profile.
4. If there is no facility in the profile, the application should **redirect the user to the MHV-on-VA.gov landing page**, where the user will experience only: H1, lede text, and the "No access to My HealtheVet" alert.
5. If a facility is in the user's profile, the application page should next look for an MHV-Identifier (MHV UUID). 
6. For the rest of the high level logic regarding whether the page should be rendered with or without an alert, visit the [Account Creation API Overview document](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/health-care/digital-health-modernization/mhv-to-va.gov/account-creation-api.md).
   
## User routing under access-limiting conditions

Users who lack either of the first two conditions required to access all applications under `/my-health/` – verified identity and facilities - will be handled centrally on the MHV-on-VA.gov landing page. (See steps 1-4 in the chart above.) The user will experience a simplified version of the landing page, which omits both the secondary nav and other /my-health tool links. We believe routing users in this way will help them avoid the frustrating experience of clicking into various health tools they are unable to use.

### ID-Verification screenshots

NOTE: Screenshots below are taken from this [Figma file](https://www.figma.com/design/m992k2m1DSl9MXV9hDytsQ/MHV-Account-Security-%26-Sign-In?node-id=6-13278&t=B7BN9mFl9GkeJt3a-4).

<details><summary>MHV landing page: unverified Login.gov user</summary>

<img width="800" alt="LoginGov unverified alert" src="https://github.com/user-attachments/assets/ca3acd2d-53f4-4c1e-887f-1dccd6b94143" />


</details>

<details><summary>MHV landing page: unverified ID.me user</summary>
<img width="613" alt="Screenshot 2024-12-16 at 3 44 21 PM" src="https://github.com/user-attachments/assets/57ea68d0-216e-40cb-abf4-fdd2bfd883c8" />


</details>

<details><summary>MHV landing page: MHV Basic account user</summary>

<img width="800" alt="MHV Basic access alert" src="https://github.com/user-attachments/assets/33f4e433-3b1d-46db-b898-73b144705f75" />

</details>

### No access to My HealtheVet alert screenshot

<details><summary>MHV landing page: No access to MHV</summary>
<img width="972" alt="Screenshot 2024-12-16 at 3 46 42 PM" src="https://github.com/user-attachments/assets/94231bd6-e773-45cb-bd71-5318642f80f3" />


</details>


## Account Creation API error alerts (i.e., missing MHV UUID)

Applications which require the MHV back-end must next check for a MHV identifier (UUID). This check relies on the MHV Account Creation API, and the Cartography team has prepared a React component to make this check as easy as possible for application teams. However, in this case, users should not be sent to the MHV landing page. Instead, they should be alerted within the application.

Key differences between the missing-UUID case and earlier account-related cases:
1. To check for the UUID, application teams need to **add a special react component** to one or more of their application pages (any page where a user might first land within their app).
2. If the API returns an error code, the application will have to respond by (a) redirecting the user to the top page of the application and (b) hiding any functionality around the alert on that top page.

The component and UX requirements are [documented in greater here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/account-creation-api.md).

## Oracle Health / Cerner Routing alerts
Guidance coming soon.

## 404 Page not found alerts 
Guidance coming soon.
