# Release Plan - Medical Records Phase 0.5 - September 2024

## Executive summary

The Medical Records integration withthe MHV on VA.gov landing page is expected to occur in mid September 2024. Medical Records will be available to 1% of users, use monitored, and a desicion to increase usage incrementally to 100% of users is expected in November 2024.

MHV-on-VA.gov UX will include:
- Secondary nav bar with 5 links (Home/landing page plus 4 tools)
- MHV-on-VA.gov Landing page links directly to VA.gov versions of tools
- Breadcrumbs on tool landing pages (only) will link back to MHV-on-VA.gov landing page

**Artifacts**:
- [IA (info architecture) Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1713450017254/6daf1f320cba1054fdfd840e4a7c881dda87120c?wid=0-1713461062826) covering changes for the integration

### Changes required within Medical Records application:
Required for integration go-live:
- MyHealtheVet secondary navigation component should display on Medical Records landing page and child pages
- Medical records landing page will add-in traditional breadcrumbs that connect it with the MHV-on-VA.gov landing page.
- Any cross-links to other My HealtheVet on VA.gov tools should prioritize the VA.gov version (update links and no longer point link text to the national portal).
- Need to have alerts for patients with Oracle Health/Cerner facilities in their profiles that they may need to navigate to My VA Health to manage that care. (Is this still outstanding?)

Non-blocking content changes:
- FAQs in accordions on MR page will get content updates

## Engineering notes on integration and release

### Secondary nav component

The MHV-on-VA.gov secondary navigation will be implemented by adding a shared component to each app that requries it. Cartographers have built this component. Placed at a particular location in the code, it will visually appear to be just below the primary navigation without any visible gap.

<img width="197" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/4054752/30469bae-0134-45b6-8643-ae74f44f683d">

Tool teams can add the secondary nav component with a single line of code in each location where it is needed.
- Import the following: `import { MhvSecondaryNav } from '@department-of-veterans-affairs/mhv/exports';`
- Add the following element to add the secondary nav. This element should be added to the top of your application where it can take the entire width of the page: `<MhvSecondaryNav />`
- You will also need to include the following SASS file in your application's entry point (e.g. in your `app-entry.jsx` file): `import '~/platform/mhv/secondary-nav/sass/mhv-sec-nav.scss';`


### Feature Toggles

We will use [feature toggles](https://github.com/department-of-veterans-affairs/vets-website/blob/cd3c891ea9fd80fb0023048dc24e3de3265b05d7/src/platform/utilities/feature-toggles/featureFlagNames.json#L105-L120) to release this integration.

This document must list all the toggles relevant to this integration release before we can do a final QA in Staging.

See Appendix for a list of toggles uncovered during discovery. It would be helpful for teams to update that table with information about any toggles relevant to this work.

#### Rolling out using feature toggles and/or deploys

1. Incorporate integration UX changes outlined in this document (above)
   - Toggle(s): _NEED toggle name_
2. Secondary nav enabled by its own feature toggle.
   - Toggle: `mhvSecondaryNavigationEnabled`
3. MHV-on-VA.gov Landing page incorporates UX changes for integration (links to the tools on VA.gov, content about Ph1 integration, etc.)
   - Toggles:
      -_NEED toggle name_
5. MHV Classic deploys try-me changes
   - Toggle: N/A

### Datadog analytics

Datadog Real User Monitoring (RUM) allows us to [specify names for click actions](https://docs.datadoghq.com/real_user_monitoring/browser/tracking_user_actions/#declare-a-name-for-click-actions) using the `data-dd-action-name` attributes, and that's useful when auto-detected action name might be unclear or misleading.

#### Adding data-dd-action-name values

In the secondary nav, the values can follow a `ToolTitle - [Link Label]` format. So `data-dd-action-name="MHV Secondary Nav - Medical Records"` would be the attribute for the medical records link in the MHV secondary nav component. 

For breadcrumbs, the format should be `AppTitle - Breadcrumb - [Breadcrumb Label]`. For the Medical Records tool, the breadcrumb pointing back to MHV-on-VA.gov home would be  `data-dd-action-name = "Medical Reocrds - Breadcrumb - Back to My HealtheVet"`.

#### Testing/Verifying Datadog

- Enter `window.DD_RUM.getInternalContext()` in browser console to verify Datadog RUM is running
- Inject styles into the page to visualize elements that have `data-dd-action-name` attributes

We can use the [Stylus browser extension](https://add0n.com/stylus.html) to use inject custom CSS to visualize  `data-dd-action-name` attributes, as [platform docs for RUM recommend](https://github.com/department-of-veterans-affairs/va.gov-team/blob/main/platform/analytics/setup-real-user-monitoring.md#testing-for-exposed-content).

##### Stylus styles

The following will outline elements that have the `data-dd-action-name` attribute and display the value of the attribute on the page:

```
@-moz-document url-prefix("http://localhost:3001"), url-prefix("https://staging.va.gov/") {
:root {
    --hl-color: hsl(120, 77%, 39%);
    --bg-color: hsl(0, 0%, 14%);
}

[data-dd-action-name] {
    outline: 6px double var(--hl-color);
    position: relative;
}

[data-dd-action-name]::after {
    color: var(--hl-color);
    font: caption;
    content: '[dd-action-name]: "' attr(data-dd-action-name) '"';
    background-color: var(--bg-color);
    outline: 6px double var(--hl-color);
    display: block;
    position: absolute;
    left: 0;
    top: 6rem;
    padding: 0.5rem;
    min-width: 180px;
    z-index: 100;
}
}
```

## Release strategy

### QA approach

Testrail will be used to document the test cases and results from testing. There are two sections that will be used, one for the secondary nav component and another for the link changes. Once development is complete, QA will begin verifying and informing the team of any bugs that may arise from testing. 

Each team will QA their own implementation in Staging, including secondary nav component and link changes. 

Final QA will be a dry run in Staging 

### Smoke test in Prod

Coordinate with Kaitlin Fink to smoke test in Production.

### Rollout

## Appendix

Cartogrphers artifacts:
- Cartographers epic: [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/88981)
- Main UX design ticket for this release: [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/88856)
- Implementation ticket for this release: [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/88856)

### Questions log
- Is any new handling required for Veterans with Oracle facilities?
  - No, beyond the alert mentioned above
- Should we suppress functionality on any tools for patients who ONLY have Cerner/OH facilities in their profile?
  * No, Kaitlin communicated on 4/22 [via Slack](https://dsva.slack.com/archives/C04DRS3L9NV/p1713455728629549) that some facilities migrating to new EHR systems may have historic data on VistA and those patients need to be able to access both systems to retrieve their records. 

### Decisions log
| Date | Decider | Decision |
|-|-|-|
| 4/17/24 | Lauren & Kaitlin | unauth benefit hub pages will not be updated to direct users to MHV-on-VAgov for Phase 1; will revisit for Ph 2 |
| 4/17/24 | Lauren & Kaitlin | MyVA links to My HealtheVet National Portal will not be updated at this point, we will revisit after the initial integration and work with those teams more closely |
| 4/19/24 | Kaitlin | Leave link to "manage folders" under Messages box on landing page until we are able to do a redesign of landing page |
| 4/19/24 | Kaitlin + Mikki | Breadcrumbs on tool landing pages will link `< Back to My HealtheVet home` on VA.gov landing page, regardless of whether the user bypassed that page (i.e. cross-link or the secondary nav component); we want to drive more people to the landing page to discover additional tools and pages whenever possible). May use dynamic `< Back` link on subtasks and deeper pages of tools |
| 4/22/24 | Kaitlin | Do not suppress any functionality within tools for patients with ONLY Cerner/OH facilities in their profile, let alerts do their job if there is no data for certain patients |
| 4/22/24 | Laura, Kaitlin | Link text on MHV landing page for "Compose message" should be updated to "Start a new message"; "Medications and allergies" should be updated to "Review medications" (remove reference to "Allergies" until this is available on VA.gov, and then it should live under Medical Records) |
| 4/22/24| Kaitlin | Need to have a return link on My HealtheVet "home" page that sends users back to the National Portal landing page if they want to opt out|
| 4/22/24| Kaitlin | Focus on implementing secondary navigation on the "big four" tools, with a fast-follow to make decisions around implementation on other apps (i.e. 10-10EZR)|
| 4/22/24| Kaitlin | Implement a temporary landing page for medical records that will be linked to from the secondary navigation to provide a consistent experience for all four links. The temporary landing page will provide context for users and route them back to the National Portal to view/download their health records|
| 4/26/24| Kaitlin | Do not need to implement Cerner/OH gating alerts on the temporary medical records landing page|

### Existing feature toggles (as seen on frontend on 19 April)

The Appoinments tool has [27 `vaOnlineScheduling*` feature toggles](https://github.com/department-of-veterans-affairs/vets-website/blob/cd3c891ea9fd80fb0023048dc24e3de3265b05d7/src/platform/utilities/feature-toggles/featureFlagNames.json#L204-L231), but is already live on VA.gov and so shouldn't need to add or flip on any feature toggles.

| Feature Toggle | Enable on release? | Comments |
| - | - | - | 
| "mhvLandingPageEnabled" | Yes | Landing page should be enabled in Phase 1 launch and not disabled after. Remove toggle after Phase 1? |
| "mhvLandingPagePersonalization" |  | Personalization not tied to phase 1 |
| "mhvLandingPageEnableVaGovHealthToolsLinks" | Yes | Controls landing page links on landing page, per department-of-veterans-affairs/vets-website/pull/29259 |
| "mhvSecureMessagingToVaGovRelease" | Yes? |  |
| "mhvSecureMessagingToPhase1" | Yes? |  |
| "mhvSecureMessagingCernerPilot" |  |  |
| "mhvMedicalRecordsAllowTxtDownloads" |  |  |
| "mhvMedicalRecordsDisplayConditions" |  |  |
| "mhvMedicalRecordsDisplayDomains" |  |  |
| "mhvMedicalRecordsDisplayLabsAndTests" |  |  |
| "mhvMedicalRecordsDisplayNotes" |  |  |
| "mhvMedicalRecordsDisplaySidenav" |  |  |
| "mhvMedicalRecordsDisplayVaccines" |  |  |
| "mhvMedicalRecordsDisplayVitals" |  |  |
| "mhvMedicalRecordsToVaGovRelease" | No |  |
| "mhvMedicationsToVaGovRelease" | Yes |  |
| "mhvMedicationsDisplayRefillContent" | ? |  |








