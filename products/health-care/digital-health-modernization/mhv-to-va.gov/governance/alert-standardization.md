# My HealtheVet on VA.gov | Alert Standardization
Within the My HealtheVet portal, multiple alerts are required to display in one, many, or all applications that live within the `/my-health` namespace. This document seeks to explain the logic and standardized alert designs for each of these scenarios, so that all teams are aligned and deliver end-users a consistent user experience. 

## On this page: 
* High-level API access logic
* [User routing in error states]( )
* [ID-verification alerts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/governance/alert-standardization.md#ID-verification-alerts)
* [No access to My HealtheVet alerts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/governance/alert-standardization.md#No-access-to-My-HealtheVet-alerts)
* Account Creation API error alerts
* Oracle-Health / Cerner Routing alerts (guidance coming soon)
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
2. If an ID-verified credential (IAL2) is not detected, the application should redirect the user to the landing page, where the user will experience only: H1, lede text, and the ID-verification alert (all cards, links, and the secondary nav will not be shown).
3. If an ID-verified credential (IAL2) is detected, then /my-health application pages should look for the presence of a facility in the user's profile.
4. If there is no facility in the profile, the application should redirect the user to the landing page, where the user will experience only: H1, lede text, and the "No access to My HealtheVet" alert.
5. If a facility is in the user's profile, the application page should next look for an MHV-Identifier. For the rest of the high level logic for whether or not the page should be rendered with or without an alert, visit the [Account Creation API Overview document](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/health-care/digital-health-modernization/mhv-to-va.gov/account-creation-api.md).
   
## User routing in error states
Both error types - ID-verification and No access - gate access to all tools within the VA.gov portal (everything under /my-health). To avoid unnecessary dead-ends and confusion, the presence of either of these errors on any application page will immediately route users to the /my-health landing page, where the user will experience a simplified version of the landing page, which omits both the secondary nav and other /my-health tool links. We believe routing users in this way will help them avoid the frustrating experience of clicking in to various health tools only to uncover they are unable to use all of them.

## ID-Verification alerts

### Alert designs
For full details, [see Figma here](https://www.figma.com/design/m992k2m1DSl9MXV9hDytsQ/MHV-Account-Security-%26-Sign-In?node-id=6-13169&node-type=canvas&t=ivtTB3ovGbme2XjY-0).

<img width="928" alt="image" src="https://github.com/user-attachments/assets/556d9a69-b574-4eb9-905b-0906b5712635" />

## No access to My HealtheVet alerts

### Alert designs
For full details, [see Figma here](https://www.figma.com/design/m992k2m1DSl9MXV9hDytsQ/MHV-Account-Security-%26-Sign-In?node-id=6-14351&node-type=canvas&t=ivtTB3ovGbme2XjY-0).

<img width="860" alt="image" src="https://github.com/user-attachments/assets/b78cae33-f057-46a8-86be-bf276b4af1dd" />

## Account Creation API error alerts 
The account creation API effort & related error alerts are [documented separately here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/account-creation-api.md).  

## Oracle Health / Cerner Routing alerts
Guidance coming soon.

## 404 Page not found alerts 
Guidance coming soon.
