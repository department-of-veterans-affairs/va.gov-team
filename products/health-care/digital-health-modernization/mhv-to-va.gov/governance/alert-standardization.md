# My HealtheVet on VA.gov: Standards for account security, access, and error states
To ensure a consistent Veteran experience and reduce cognitive load within the My HealtheVet-on-VA.gov portal, it is necessary to **standardize application behavior under access-limiting conditions**. This document seeks to explain the logic and standardized alert designs for each of these scenarios, so that all teams are aligned and deliver end-users a consistent user experience. 

## On this page: 
* [High-level API access logic](#high-level)
* [User routing under access-limiting conditions](access-limiting-conditions)
* [Missing MHV Identifier (Account Creation API)](#ac-api)
* [Oracle-Health Routing alerts](#oh-routing-alerts)
* [Unauthenticated users](#unauth-users)
* [403 access denied component](#403)
* [404 page not found component](#404)
* [500 internal service error alert](#500)

## <a name="high-level"></a>High-level API access logic
Applications should route-guard any users who do not meet two high-level gating requirements to the `/my-health` landing page to see the relevant alert in place there. The goal of this requirement is to have a single place to maintain and update alerts, and to prevent users without access to My HealtheVet from getting to deeper child pages within the experience. Instead, they will be met with alerts or a distinct landing page at the "front door" to the portal, which we believe to be the best place to explain and contextualize why they do not have access, and steps they need to take in order to answer questions they may have about managing their healthcare on VA.gov. 

```mermaid
flowchart TD
    A[sign-in] --> B(Is the user ID-verified?)
    B --> |Yes| C(Is there a facility in the profile?)
    B --> |No| E{fa:fa-circle-exclamation route-guard user to /my-health}
    C -->|Yes| D(Does the user have an MHV-Identifier?)
    C -->|No| F{fa:fa-circle-exclamation route-guard user to /my-health}
    D --> |Yes| G(Render application)
    D --> |No| H(What tools are they trying to access?)
    H --> |Meds, Records, SM| I{fa:fa-circle-exclamation route-guard user to /my-health + render Acct Creation API error alert}
    H --> |Other health tool| J(Render application)
```
### Checks for ALL applications in the My HealtheVet portal
1. All `/my-health` application pages should look for an ID-verified credential (IAL2) as the first-order criteria before rendering a page for users. If an ID-verified credential (IAL2) is not detected, the application should **redirect the user to the MHV-on-VA.gov landing page**, where the page will render an ID-verification alert (all other page content, including access to the tools and the secondary nav bar will be suppressed).
2. If an ID-verified credential (IAL2) is detected, then `/my-health` application pages should check for the presence of a facility in the user's profile.
3. If there is no facility in the profile, the application should **redirect the user to the MHV-on-VA.gov landing page**, ~~where the page will render a "No access to My HealtheVet" alert (all other page content, including access to all health tools tools and the secondary nav bar will be suppressed)~~ Edit made 4/23/25: For Milestone 2, the landing page will no longer render a "No access to My HealtheVet" alert, but will instead be a modified landing page for non-patient users, which will include links for these users to download their data.
4. If a facility is in the user's profile, then any health portal applications that do not rely on the MHV-API backend should be rendered. 

### Checks only for applications that rely on the MHV-API backend
Affected applications: medications, medical records, and secure messages

5. If a facility is in the user's profile, but the application relies on the MHV-API back-end, check for the presence of an MHV-Identifier (MHV UUID). If there is no MHV-Identifier, see the [Account Creation API Overview document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/governance/mhv-account-creation-api.md) for more information about how to handle this. 
6. If there is an MHV-Identifier present, render the application. 
   
## <a name="access-limiting-conditions"></a>User routing under access-limiting conditions

Users who lack either of the first two conditions required to access all applications under `/my-health/` – verified identity and the presence of at least one facility in the profile - will be handled centrally on the MHV-on-VA.gov landing page. (See steps 1-3 in the chart above.) These users will experience a simplified version of the My HealtheVet landing page, which suppresses both the secondary nav and other `/my-health` tool links. We believe routing users in this way will help them avoid the frustrating experience of clicking into various health tools they are unable to use.

### ID-Verification screenshots

NOTE: Screenshots below are taken from this [Figma file](https://www.figma.com/design/m992k2m1DSl9MXV9hDytsQ/MHV-Account-Security-%26-Sign-In?node-id=6-13278&t=B7BN9mFl9GkeJt3a-4).

<details><summary>MHV landing page: unverified Login.gov user</summary>

<img width="800" alt="LoginGov unverified alert" src="https://github.com/user-attachments/assets/ca3acd2d-53f4-4c1e-887f-1dccd6b94143" />


</details>

<details><summary>MHV landing page: unverified ID.me user</summary>
<img width="613" alt="Screenshot 2024-12-16 at 3 44 21 PM" src="https://github.com/user-attachments/assets/57ea68d0-216e-40cb-abf4-fdd2bfd883c8" />


</details>

<details><summary>MHV landing page: MHV Basic account user</summary>

<img width="982" alt="Screenshot 2025-01-21 at 8 50 03 AM" src="https://github.com/user-attachments/assets/b2ff5e80-005f-436c-a3b5-01d568ac4118" />

</details>

### No facility registration: Non-patient landing page (previously was MHV landing page: No access to MHV)

<details><summary>Non-patient landing page</summary>
<img width="972" alt="Screenshot of non-patient landing page" src="https://github.com/user-attachments/assets/36207cc3-0a84-4f25-a29b-5e1de4bef561" />

</details>

## <a name="ac-api"></a>Missing MHV-Identifier (Account Creation API)

Users who lack the third condition: presence of an MHV-Identifier, will be access-limited to _only some applications_ that rely on the MHV-API backend. These applications include: medications, medical records, and secure messages. Applications that do not rely on the MHV-API backend do not have this requirement.

Affected applications must run a check for the presence of an MHV-Identifier (UUID). If one does exist, the application can be rendered. If one does not exist, additional steps must be taken. The Cartogrpahy team has prepared a React component to make this check as easy as possible for application teams. 

The additional steps that must be taken by affected applications if the check for an MHV-Identifier comes back as "false" are [documented in greater detail as part of Account Creation API work here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/governance/mhv-account-creation-api.md)

## <a name="oh-routing-alerts"></a>Oracle Health / Cerner Routing alerts
The "big four" health tools must provide routing alerts for users with OH/Cerner facilities in their profile that sends them to the My VA Health portal to manage their care related to those facilities. Once the My VA Health portal is fully integrated and combined with My HealtheVet on VA.gov, these alerts can be removed. 

### Health tool pages:
Anytime there is a presence of one or more OH/Cerner facilities in the profile, these alerts must display in-place on at least the entry-point page to the tool (page connected with the secondary navigation bar). There is a slightly varying design for a single facility vs. multiple OH/Cerner facilities in the profile. All teams currently have these alerts implemented and in-place within their applications, but the designs and content varies. All teams should standardize their alerts to reflect the standardized template version in [Figma here](https://www.figma.com/design/m992k2m1DSl9MXV9hDytsQ/MHV-Account-Security-%26-Sign-In?node-id=263-24267&p=f&t=lCwneRQNRv8cAMdX-0). 

Tool teams will need to provide their own: 
* Content for the "call to action" in the template alert heading that is most relevant to their health tool (e.g. "manage your appointments")
* Deep-link URL for the tool page they need to route users to within the My VA Health portal

#### Placement
The alerts should display beneath the page H1 and lede text (if applicable), and before any dynamic or conditional data for the user. Example below:

#### Example screenshot:
<details><summary>Medical records landing page: screenshot of OH/Cerner routing alert</summary>
<img width="675" alt="Screenshot 2025-01-03 at 3 53 51 PM" src="https://github.com/user-attachments/assets/b717121f-05d0-4881-9c99-d1bd1fa7e1b5" />
</details>

### Benefit hub pages: 
Benefit hub pages corresponding with these tools currently have more complex versions of these alerts in place. We do not plan to update those alerts, and instead will remove them from benefit hub pages when the unauth page URLs for each tool are updated to point to the new version of the tool on VA.gov, by Milestone 1 deadline at the latest (ETA March 2025). More information about this [transition plan is available here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/transition/benefit-hub-page-updates.md).

## <a name="unauth"></a>Unauthenticated users
The entire `/my-health` portal sits behind authentication and every application under this namespace must require authentication. Thus, any unauthenticated user who attempts to access a URL within any application in this space should trigger the sign-in modal. Until a user signs in, we cannot determine whether a user has authorization to access the page they are attempting to reach. 

## <a name="403"></a>Access denied component
The 403 error sends the user to a new page; this error component will only be experienced by users with access to My HealtheVet who attempt to access a url within the /my-health name space that they don't have credentials for (i.e. a records url for a different user). As shown in the screenshot below, the 403 error includes guidance to call the My HealtheVet helpdesk or navigate elsewhere within the portal using the MHV secondary nav.

[Figma file](https://www.figma.com/design/m992k2m1DSl9MXV9hDytsQ/MHV-Account-Security-%26-Access-Standards?node-id=685-14636)

Exception: In June 2025, the Medications team was given an exception and will implement the 404 design for both the intended Page not found scenario and for this 403 scenario. 

<details><summary>403 error page for MHV users</summary>
<img src="https://github.com/user-attachments/assets/6f779428-1b0b-4e9d-9a01-d62eed8a58a4" />
</details>

## <a name="404"></a>Page not found component
The 404 error sends users to a new page; this error component will only be experienced by users with access to My HealtheVet who change a link under the /my-health namespace to an incorrect / non-existant url will be sent to this same 404. As shown in the screenshot below, the 404 error includes guidance to go to the the My HealtheVet landing page, call the helpdesk, try other health-related resources, or navigate elsewhere within the portal using the MHV secondary nav.

[Figma file](https://www.figma.com/design/m992k2m1DSl9MXV9hDytsQ/MHV-Account-Security-%26-Access-Standards?node-id=1071-19363&t=rNA4JxDx5GaXwOk9-1)

<details><summary>404 Page not found for VA.gov</summary>
<img width="928" alt="Screenshot 2025-04-02 at 3 37 17 PM" src="https://github.com/user-attachments/assets/7cdda17c-95d6-4beb-aedb-f5a49c1324c9" />
</details>

## <a name="500"></a>Internal service error component
HTTP 500 errors happen when applications try to make an API call to fetch downstream data, but that call fails and they are unable to retrieve data. This can happen to any application that relies on a downstream API, and communicating this error to users is important. 500 errors are common across My HealtheVet. 

### Standardized portions of these errors include:
* Heading text
* Requirement to use the v3 error alert from VADS
* Placement of this error beneath a rendered page H1 (page title), breadcrumbs, and My HealtheVet secondary navigation component

**Why this matters**: standardizing heading text will allow us to pull analytics and metrics around the frequency of API failed calls (500 errors) across the portal from month to month, and maintain awareness of any overall spikes in API problems that may adversely impact My HealtheVet users in their digital healthcare management journey. Having consistent style, language, and placement in these errors will also help users understand what is happening, that it's a temporary problem, and will provide them with next steps to recover from the error. 

### Non-standardized portions of these errors include:
* Alert body text

Body text for these alerts is intentionally flexible and does not have a standardization requirement. This is because APIs can each have different next steps and instructions to give their users based on the purpose of the tool by design. We have included placeholder text in square brackets that individual teams may modify as needed. 

**Note**: any body text modifications within 500 error alerts should be approved by the centralized Content and IA team before launching to production. Please file an [intake ticket here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=CAIA-intake-form.md) to work with a content specialist if you need help with this. 

#### Examples of modified alert body text could include: 
* If you need help now, call us at [phone number]. We’re here [days and times].   
* If you need to schedule an appointment now, call your VA health facility.  
[Find a VA health facility] 
 * If you need to request a refill now, call your VA pharmacy. You can find the pharmacy phone number on your prescription label or on your VA health facility’s webpage. 
[Find your VA health facility]

### Design
[Figma file](https://www.figma.com/design/m992k2m1DSl9MXV9hDytsQ/MHV-Account-Security---Access-Standards?node-id=753-3&p=f&t=QtC83OeCWnOxgLdx-0)

<details><summary>500 error alert template for My HealtheVet</summary>
<img width="717" alt="Screenshot 2025-06-25 at 2 02 10 PM" src="https://github.com/user-attachments/assets/fa018c0f-d102-427e-ab9c-b95cc5af90cc" />
</details>
