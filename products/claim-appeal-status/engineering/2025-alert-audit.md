# Alert Audit
Last Updated: 9-22-25

## Links
- Issue: [[CST Alert Improv] Audit CST Alerts #119651](https://github.com/department-of-veterans-affairs/va.gov-team/issues/119651)
- Epic: [CST Alerts Alignment and Improvements #119389](https://github.com/department-of-veterans-affairs/va.gov-team/issues/119389)

## Verification Steps

For each alert, include:

1. **Location** - Integrate component, routes, and screenshots:
   - Component: `[src/path/to/Component.jsx](../../relative/path)`
   - Each usage: `[/route-path](https://staging.va.gov/full-url) - [FileName.jsx:lineNumber](../../relative/path)`
   - Add screenshot inline for each usage location: `![Alert Name]()`

2. **Type** - Specify alert implementation (move after Location):
   - Legacy: `usa-alert usa-alert-[status]`
   - Modern: `<va-alert status="[status]" slim?>`

3. **Trigger** - Designer-friendly conditions:
   - Start with: "Shows when ALL of these conditions are true:"
   - List each condition clearly (API states, user permissions, data states)
   - Add notes for edge cases or important context

4. **Code** - Full component implementation:
   - Include complete component code
   - Add usage examples ONLY if props affect display (e.g., `headerLevel={2}`)
   - Show surrounding context (h1/h2) if it affects the alert presentation

5. **Deviations from Design System** - Only list actual deviations:
   - Order from most to least severe
   - Common: Using legacy USWDS classes, missing ARIA roles
   - Note: Fixed header levels are only a deviation when the component is reused in multiple contexts requiring different heading hierarchies
   - Skip lower severity items if fixing higher ones would resolve them
   - **Specifically check for (flagged in GitHub issue):**
     - **Stacked alerts**: Multiple alerts placed one after another (Design System: "Don't stack alerts one after the other" - place them appropriately throughout the page)
     - **Incorrect placement**:
       - Alert before h1 (should be after page title)
       - Alert not directly below intro text (Design System: "placed directly below the intro text, near the top of the page")
       - Alert under tabs instead of above them
       - Not below section header when section-specific (Design System: "placed directly below the header of that section")

**Testing Note**: Comment out trigger conditions with `true` to always show alerts for screenshots - this is intentional for verification, not a deviation.

## Claims List Page

### Claims Unavailable Alert
- Location:
  - Component: [src/applications/claims-status/components/ClaimsUnavailable.jsx](../../components/ClaimsUnavailable.jsx)
  - Your claims list: [/your-claims](https://staging.va.gov/track-claims/your-claims) - [YourClaimsPageV2.jsx:154](../../containers/YourClaimsPageV2.jsx)
  ![Claims Unavailable Alert](<Screenshot 2025-09-22 at 9.24.05 AM.png>)
  - Individual claim pages: [/your-claims/:id/*](https://staging.va.gov/track-claims/your-claims/:id/status) - [ClaimDetailLayout.jsx:117](../../components/ClaimDetailLayout.jsx)
  - STEM claim status: [/your-stem-claims/:id/status](https://staging.va.gov/track-claims/your-stem-claims/:id/status) - [StemClaimStatusPage.jsx:53](../../containers/StemClaimStatusPage.jsx)
- Type: Legacy `usa-alert usa-alert-warning`
- Trigger: Shows when ALL of these conditions are true:
  - User has access to claims data service (`canAccessClaims` is true)
  - Claims API has returned a response
  - Claims availability status is NOT 'AVAILABLE' (API returned an error or unavailable status)
  - Note: User can still see appeals information when claims are unavailable
- Code:
  ```jsx
  // Component definition
  function ClaimsUnavailable({ headerLevel = 4 }) {
    const Tag = `h${headerLevel}`;

    return (
      <div className="usa-alert usa-alert-warning claims-unavailable">
        <div className="usa-alert-body">
          <Tag className="claims-alert-header vads-u-font-size--h4">
            Claim status is unavailable
          </Tag>
          <p className="usa-alert-text">
            VA.gov is having trouble loading claims information at this time.
            Please check back again in an hour. Please note: You are still able to
            review appeals information.
          </p>
        </div>
      </div>
    );
  }

  // Usage in YourClaimsPageV2.jsx
  <h2>Your claims, decision reviews, or appeals</h2>
  <ClaimsUnavailable headerLevel={3} />

  // Usage in ClaimDetailLayout.jsx
  <h1>We encountered a problem</h1>
  <ClaimsUnavailable headerLevel={2} />

  // Usage in StemClaimStatusPage.jsx
  <h1>We encountered a problem</h1>
  <ClaimsUnavailable headerLevel={2} />
  ```
- Deviations from Design System:
  - Using legacy USWDS `usa-alert` CSS classes instead of modern `<va-alert>` web component
  - No ARIA role for dynamic alert (should have `role="alert"` if appearing after API failure)

### Appeals Unavailable Alert
- Location:
  - Component: [src/applications/claims-status/components/AppealsUnavailable.jsx](../../components/AppealsUnavailable.jsx)
  - Your claims list: [/your-claims](https://staging.va.gov/track-claims/your-claims) - [YourClaimsPageV2.jsx:161](../../containers/YourClaimsPageV2.jsx)
  ![Appeals Unavailable Alert](<Screenshot 2025-09-22 at 10.56.46 AM.png>)
- Type: Legacy `usa-alert usa-alert-warning`
- Trigger: Shows when ALL of these conditions are true:
  - User has access to appeals data service (`canAccessAppeals` is true)
  - Appeals API has returned a response
  - Appeals availability status is NOT 'AVAILABLE' (API returned an error or unavailable status)
  - Note: User can still see claims information when appeals are unavailable
- Code:
  ```jsx
  function AppealsUnavailable() {
    return (
      <div className="usa-alert usa-alert-warning claims-unavailable">
        <div className="usa-alert-body">
          <h4 className="claims-alert-header">Appeal status is unavailable</h4>
          <p className="usa-alert-text">
            VA.gov is having trouble loading appeals information at this time.
            Please check back again in a hour. Please note: You are still able to
            review claims information.
          </p>
        </div>
      </div>
    );
  }
  ```
- Deviations from Design System:
  - Using legacy USWDS `usa-alert` CSS classes instead of modern `<va-alert>` web component
  - No ARIA role for dynamic alert (should have `role="alert"` if appearing after API failure)
  - Typo: "in a hour" should be "in an hour"

### Claims & Appeals Unavailable Alert
- Location:
  - Component: [src/applications/claims-status/components/ClaimsAppealsUnavailable.jsx](../../components/ClaimsAppealsUnavailable.jsx)
  - Your claims list: [/your-claims](https://staging.va.gov/track-claims/your-claims) - [YourClaimsPageV2.jsx:150](../../containers/YourClaimsPageV2.jsx)
  ![Claims & Appeals Unavailable Alert](<Screenshot 2025-09-22 at 10.54.49 AM.png>)
- Type: Legacy `usa-alert usa-alert-warning`
- Trigger: Shows when ALL of these conditions are true:
  - User has access to BOTH claims and appeals services (`canAccessClaims` and `canAccessAppeals` are both true)
  - Both APIs have returned responses
  - Claims availability status is NOT 'AVAILABLE' (claims API returned an error)
  - Appeals availability status is NOT 'AVAILABLE' (appeals API returned an error)
  - Note: This takes priority over individual unavailable alerts
- Code:
  ```jsx
  function ClaimsAppealsUnavailable() {
    return (
      <div className="usa-alert usa-alert-warning claims-unavailable">
        <div className="usa-alert-body">
          <h4 className="claims-alert-header">
            Claim and Appeal status is unavailable
          </h4>
          <p className="usa-alert-text">
            VA.gov is having trouble loading claims and appeals information at
            this time. Please check back again in a hour.
          </p>
        </div>
      </div>
    );
  }

  // Usage in YourClaimsPageV2.jsx (appears after h2)
  <h2>Your claims, decision reviews, or appeals</h2>
  <ClaimsAppealsUnavailable />
  ```
- Deviations from Design System:
  - Using legacy USWDS `usa-alert` CSS classes instead of modern `<va-alert>` web component
  - No ARIA role for dynamic alert (should have `role="alert"` if appearing after API failure)
  - Typo: "in a hour" should be "in an hour"

### No Claims Alert
- Location:
  - Component: [src/applications/claims-status/components/NoClaims.jsx](../../components/NoClaims.jsx)
  - Your claims list (empty state): [/your-claims](https://staging.va.gov/track-claims/your-claims) - [YourClaimsPageV2.jsx:219](../../containers/YourClaimsPageV2.jsx)
  ![No Claims Alert](<Screenshot 2025-09-22 at 8.57.06 AM.png>)
- Type: Legacy `usa-alert usa-alert-info`
- Trigger: Shows when ALL of these conditions are true:
  - All data requests have completed loading (claims, appeals, and STEM claims APIs have returned)
  - The combined list of claims, appeals, and STEM claims is empty (user has zero items)
  - No errors occurred during data loading
- Code:
  ```jsx
  export default function NoClaims() {
    return (
      <div className="usa-alert usa-alert-info claims-alert background-color-only claims-alert-status">
        <h3 className="claims-alert-header usa-alert-heading">
          You do not have any submitted claims
        </h3>
        <p>This page shows only completed claim applications.</p>
      </div>
    );
  }
  ```
- Deviations from Design System:
  - Using legacy USWDS `usa-alert` CSS classes instead of modern `<va-alert>` web component

### Claims List Item - Requested Evidence Alert
- Location:
  - Component: [src/applications/claims-status/components/ClaimsListItem.jsx:103-111](../../components/ClaimsListItem.jsx)
  - Your claims list (individual claim cards): [/your-claims](/your-claims) - [ClaimsListItem.jsx](../../components/ClaimsListItem.jsx)
  ![Claims List Item - Requested Evidence Alert](<Screenshot 2025-09-22 at 8.27.57 AM.png>)
- Type: `<va-alert status="info" slim>`
- Trigger: Shows when ALL of these conditions are true:
  - Claim has `documentsNeeded` flag set to true (VA has requested evidence from the veteran)
  - Claim does NOT have a decision letter sent yet (`decisionLetterSent` = false)
  - Claim status is NOT 'COMPLETE' (claim is still in progress)
- Code:
  ```jsx
  <va-alert status="info" slim>
    <span className="vads-u-font-weight--bold">
      We requested more information from you:
    </span>{' '}
    Check the claim details to learn more.
    <div className="vads-u-margin-top--2">
      This message will go away when we finish reviewing your response.
    </div>
  </va-alert>
  ```
- Deviations from Design System:
  - None (Uses modern `<va-alert>` web component with slim variant appropriately)

## Claim Details - Status Tab

### What We Are Doing Alert
- Location: "What We Are Doing" section
- File: `src/applications/claims-status/components/claim-status-tab/WhatWeAreDoing.jsx:64-71`
- Type: `<va-alert>` (optional alert)
- CSS Class: `optional-alert vads-u-padding-bottom--1`
- Trigger: Based on claim processing status

### Recent Activity - Third Party Request Alert
- Location: Recent Activity section
- File: `src/applications/claims-status/components/claim-status-tab/RecentActivity.jsx:210-232`
- Type: `<va-alert>` (optional alert)
- CSS Class: `optional-alert vads-u-padding-bottom--1`
- Trigger: When third-party evidence is requested

### Closed Claim Alert
- Location: Top of status tab when claim is closed
- File: `src/applications/claims-status/components/claim-status-tab/ClosedClaimAlert.jsx:18-49`
- Type: `<va-alert status="info">`
- CSS Class: `vads-u-margin-bottom--4`
- Trigger: When claim status is closed/complete

### Phase Back Warning
- Location: Claim phase display when phase moves backward
- File: `src/applications/claims-status/components/PhaseBackWarning.jsx:5-13`
- Type: Legacy USWDS alert
- CSS Classes: `usa-alert usa-alert-warning claims-alert phase-back-alert`
- Trigger: When claim phase number decreases

### Ask VA To Decide Alert
- Location: Status tab when claim is ready for decision
- File: `src/applications/claims-status/components/AskVAToDecide.jsx:6-24`
- Type: Legacy USWDS alert
- CSS Classes: `usa-alert usa-alert-info background-color-only claims-alert-status alert-with-details`
- Trigger: When all evidence is submitted and user can request decision

## Claim Details - Files Tab

### Files Needed Alert
- Location: Top of Files tab when evidence is required
- File: `src/applications/claims-status/components/claim-files-tab/FilesNeeded.jsx:53-80`
- Type: `<va-alert status="warning">`
- CSS Class: `primary-alert vads-u-margin-bottom--2`
- Trigger: When VA requires evidence from the user

### Files Optional Alert
- Location: Files tab when additional evidence could help
- File: `src/applications/claims-status/components/claim-files-tab/FilesOptional.jsx:35-55`
- Type: `<va-alert status="info">`
- CSS Class: `optional-alert vads-u-margin-bottom--2`
- Trigger: When user can submit optional supporting evidence

### Standard 5103 Notice Alert
- Location: Files tab (may not be currently active)
- File: `src/applications/claims-status/components/claim-files-tab/Standard5103Alert.jsx:10-34`
- Type: `<va-alert status="warning">`
- CSS Class: `primary-alert vads-u-margin-bottom--2`
- Trigger: When standard 5103 evidence notice applies
- Note: Code comment indicates this may not be currently used

### Past Deadline Alert
- Location: Document request detail pages (accessed from Files tab)
- File: `src/applications/claims-status/components/claim-document-request-pages/DefaultPage.jsx:93-99`
- Type: `<va-alert status="warning">`
- CSS Class: `vads-u-margin-top--4`
- Trigger: When viewing a document request past its deadline

## Claim Details - Overview Tab

### Adding Details Alert
- Location: Claim detail pages when data is still loading
- File: `src/applications/claims-status/components/AddingDetails.jsx:5-17`
- Type: `<va-alert status="info" slim>`
- Trigger: When claim details are incomplete or still being processed

### Claim Phase Stepper Alert
- Location: Claim phase stepper component
- File: `src/applications/claims-status/components/claim-overview-tab/ClaimPhaseStepper.jsx:87-94`
- Type: `<va-alert>` (optional alert)
- CSS Class: `optional-alert vads-u-padding-bottom--1`
- Trigger: Conditional based on claim phase and status

## System-wide Components

### Work In Progress (WIP) Alert
- Location: Decision letters section when feature is unavailable
- File: `src/applications/claims-status/components/WIP.jsx:4-14`
- Type: `<va-alert status="warning">`
- Trigger: When decision letter download feature is disabled/unavailable

### Generic Notification Component
- Location: Various locations throughout the application
- File: `src/applications/claims-status/components/Notification.jsx:25-36`
- Type: `<VaAlert>` React component
- CSS Class: `claims-alert`
- Features:
  - Configurable `status` (error, warning, info, success)
  - Optional `closeable` with close button
  - Focus management for accessibility
  - Customizable title and body content
- Trigger: Various user actions and system responses

### STEM Denied Details (Alert-styled)
- Location: STEM scholarship denial page
- File: `src/applications/claims-status/components/StemDeniedDetails.jsx`
- Type: Custom div with alert-like styling (not a true alert component)
- CSS Class: `vads-u-background-color--primary-alt-lightest`

## Appeals Section

### Appeals Alert List
- Location: Appeals detail pages
- File: `src/applications/claims-status/components/appeals-v2/AlertsList.jsx`
- Type: Container for multiple legacy USWDS alerts
- Structure:
  - Groups alerts into "take action" and "informational"
  - Renders individual Alert components
- Alert Types (defined in `utils/appeals-v2-helpers.jsx`):
  - `form9Needed` - Action required to continue appeal
  - `scheduledHearing` - Upcoming hearing notification
  - `hearingNoShow` - Missed hearing warning
  - `heldForEvidence` - Evidence submission window
  - `cavcOption` - Court appeal option available
  - `rampEligible` - RAMP program eligibility
  - `rampIneligible` - RAMP program ineligibility
  - `decisionSoon` - Decision timeline information
  - `blockedByVso` - VSO representation blocking
  - `evidentiaryPeriod` - Evidence submission period
  - `amaPostDecision` - Post-decision options

### Individual Appeal Alert Component
- Location: Within appeals alert list
- File: `src/applications/claims-status/components/appeals-v2/Alert.jsx:14-18`
- Type: Legacy USWDS alert
- CSS Classes: Dynamic based on alert type (warning/info)

### Missing Events Alert
- Location: Past events section in appeals
- File: `src/applications/claims-status/components/appeals-v2/PastEventsSection.jsx` and `Expander.jsx`
- Type: Legacy `usa-alert usa-alert-warning`
- Trigger: When appeal has missing events in timeline
