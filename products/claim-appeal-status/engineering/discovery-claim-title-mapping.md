# Discovery: Claim Title Mapping Implementation Refactoring

Issue: [#117659](https://github.com/department-of-veterans-affairs/va.gov-team/issues/117659)

- [Problem Statement](#problem-statement)
- [Current Implementation Analysis](#current-implementation-analysis)
  - [Request Flow with File References](#request-flow-with-file-references)
  - [Core Function: `generateClaimTitle()`](#core-function-generateclaimtitle)
  - [Components Using Title Generation](#components-using-title-generation)
  - [Claim Type Mappings](#claim-type-mappings)
  - [Processing Logic](#processing-logic)
  - [The Null ClaimType Problem](#the-null-claimtype-problem)
  - [Example 1: Compensation Claim Card Title](#example-1-compensation-claim-card-title)
  - [Example 2: Dependency Claim Browser Tab Title](#example-2-dependency-claim-browser-tab-title)
  - [Example 3: Misidentified Debt Validation Claim](#example-3-misidentified-debt-validation-claim)
- [Technical Limitations](#technical-limitations)
  - [Testing Coverage Gaps](#testing-coverage-gaps)
  - [Maintainability Issues](#maintainability-issues)
  - [Performance Concerns](#performance-concerns)
  - [Semantic Accuracy Issues](#semantic-accuracy-issues)
- [Solution Evaluation](#solution-evaluation)
  - [Evaluation Framework](#evaluation-framework)
  - [Option 1: JavaScript Map with Strategy Pattern](#option-1-javascript-map-with-strategy-pattern)
  - [Option 2: Configuration Object with Composition](#option-2-configuration-object-with-composition)
  - [Option 3: Hybrid Approach (Recommended)](#option-3-hybrid-approach-recommended)
  - [Comparison Matrix](#comparison-matrix)
  - [Recommendation: Option 3 - Hybrid Approach](#recommendation-option-3---hybrid-approach)
    - [Why This Is The Right Choice:](#why-this-is-the-right-choice)
    - [Implementation Roadmap:](#implementation-roadmap)
    - [Success Metrics:](#success-metrics)
    - [Risk Mitigation Strategies:](#risk-mitigation-strategies)
  - [Why Not The Other Options?](#why-not-the-other-options)
  - [Final Thoughts](#final-thoughts)

## Problem Statement

The Claims Status Tool's claim title generation functionality transforms technical claim codes into claim titles. This discovery document evaluates refactoring this critical claim title generation to improve testability, maintainability, and reliability.

The current claim title generation implementation in `generateClaimTitle()` has grown organically over time, resulting in complex nested logic that is difficult to test, maintain, and extend.

## Current Implementation Analysis

### Request Flow with File References

1. User loads Claims Status Tool

   - User navigates to `/track-claims` on VA.gov
   - React app mounts

2. Frontend initiates API request ([vets-website/src/applications/claims-status/actions/index.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/claims-status/actions/index.js))

   ```javascript
   return apiRequest('/benefits_claims'); // Calls vets-api endpoint
   ```

3. vets-api controller receives and forwards request ([vets-api/app/controllers/v0/benefits_claims_controller.rb](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/benefits_claims_controller.rb))

   - benefits_claims_controller calls service layer

4. vets-api service layer calls Lighthouse ([vets-api/lib/lighthouse/benefits_claims/service.rb](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_claims/service.rb#L32-L36))

   ```ruby
   def get_claims(lighthouse_client_id = nil, lighthouse_rsa_key_path = nil, options = {})
     claims = config.get("#{@icn}/claims", lighthouse_client_id, lighthouse_rsa_key_path, options).body
     # Endpoint: /services/claims/v2/veterans/{icn}/claims
   end
   ```

5. Lighthouse returns claimTypeCode, claimType and other claim data ([API Documentation](https://developer.va.gov/explore/api/benefits-claims/docs?version=current))
   - Example 200 response from `/services/claims/v2/veterans/{veteranId}/claims`:

```json
{
  "data": [
    {
      "id": "555555555",
      "type": "claim",
      "attributes": {
        "baseEndProductCode": "400",
        "claimDate": "2017-05-02",
        "claimPhaseDates": {
          "phaseChangeDate": "2017-10-18",
          "phaseType": "COMPLETE"
        },
        "claimType": "Compensation",
        "claimTypeCode": "400PREDSCHRG",
        "closeDate": "2017-10-18",
        "decisionLetterSent": false,
        "developmentLetterSent": false,
        "documentsNeeded": false,
        "endProductCode": "404",
        "evidenceWaiverSubmitted5103": false,
        "lighthouseId": null,
        "status": "COMPLETE"
      }
    }
  ]
}
```

6. vets-api transforms a singular claimType ([vets-api/app/controllers/v0/benefits_claims_controller.rb](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/benefits_claims_controller.rb#L13-L15))

   ```ruby
   CLAIM_TYPE_LANGUAGE_MAP = {
     'Death' => 'expenses related to death or burial'
   }.freeze
   ```

   - Transforms "Death" claimType to 'expenses related to death or burial'
   - Passes all other claimType and claimTypeCode unchanged to frontend

7. Frontend generates claim titles ([vets-website/src/applications/claims-status/utils/helpers.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/claims-status/utils/helpers.js#L1173-L1223))

   ```javascript
   export const generateClaimTitle = (claim, placement, tab) => {
     // Transforms claimType and claimTypeCode into claim titles
     // 123 claim codes mapped to claim titles
   };
   ```

8. UI displays claim title to user
   - Components render the transformed title
   - User never sees a claimTypeCode like "400PREDSCHRG"

### Core Function: `generateClaimTitle()`

Location: `src/applications/claims-status/utils/helpers.js`

```javascript
export const generateClaimTitle = (claim, placement, tab) => {
  // This will default to 'disability compensation'
  const claimType = getClaimType(claim).toLowerCase();
  const isRequestToAddOrRemoveDependent = addOrRemoveDependentClaimTypeCodes.includes(
    claim?.attributes?.claimTypeCode,
  );
  // Determine which word should follow the tab name.
  // "Files for...", "Status of...", "Details of...", "Overview of..."
  const tabPrefix = `${tab} ${tab === 'Files' ? 'for' : 'of'}`;
  // Use the following to (somewhat) cut down on repetition in the switch below.
  const addOrRemoveDependentClaimTitle = 'request to add or remove a dependent';
  const baseClaimTitle = isRequestToAddOrRemoveDependent
    ? addOrRemoveDependentClaimTitle
    : `${claimType} claim`;
  const renderTitle = () => {
    if (isRequestToAddOrRemoveDependent) {
      return sentenceCase(addOrRemoveDependentClaimTitle);
    }

    if (isPensionClaim(claim?.attributes?.claimTypeCode)) {
      const { claimTypeCode } = claim.attributes;
      if (survivorsPensionClaimTypeCodes.includes(claimTypeCode)) {
        return 'Claim for Survivors Pension';
      }
      if (DICClaimTypeCodes.includes(claimTypeCode)) {
        return 'Claim for Dependency and Indemnity Compensation';
      }
      if (veteransPensionClaimTypeCodes.includes(claimTypeCode)) {
        return 'Claim for Veterans Pension';
      }
      return 'Claim for pension';
    }
    return `Claim for ${claimType}`;
  };

  // This switch may not scale well; it might be better to create a map of the strings instead.
  // For examples of output given different parameters, see the unit tests.
  switch (placement) {
    case 'detail':
      return renderTitle();
    case 'breadcrumb':
      if (claimAvailable(claim)) {
        return `${tabPrefix} your ${baseClaimTitle}`;
      }
      // Default message if claim fails to load.
      return `${tabPrefix} your claim`;
    case 'document':
      if (claimAvailable(claim)) {
        const formattedDate = buildDateFormatter()(claim.attributes.claimDate);
        return titleCase(`${tabPrefix} ${formattedDate} ${baseClaimTitle}`);
      }
      // Default message if claim fails to load.
      return `${tabPrefix} Your Claim`;
    default:
      return renderTitle();
  }
};
```

Parameters:

- `claim`: claim object with claimType, claimTypeCode, claimDate
- `placement`: where title will be displayed
  - default: Card title on claims list page
  - 'document': Browser tab title
  - 'breadcrumb': Breadcrumb navigation on claim detail pages
  - 'detail': Main heading
- `tab`: Current page/section name ('Status', 'Files', 'Details', or 'Overview') - used to create contextual titles like "Files for..." or "Status of..."

Logic Flow:

1. Get base claim type (fallback to 'disability compensation')
2. Check against 6 hardcoded arrays for special cases
3. Apply placement-specific formatting
4. Return formatted title

### Components Using Title Generation

Changes to `generateClaimTitle` affect these 4 user-facing pages:

1. `ClaimsListItem.jsx` - Card titles in list view

   - URL: `/track-claims`
   - User sees: Card heading - "Claim for compensation"

2. `ClaimDetailLayout.jsx` - Detail page heading and breadcrumbs

   - URL: `/track-claims/:id/status` (and other tabs)
   - User sees:
     - Browser tab title (`'document'`) - "Status Of March 15, 2024 Claim For Compensation"
     - Breadcrumb navigation (`'breadcrumb'`) - "Status of your compensation claim"
     - Main page heading (`'detail'`) - "Claim for compensation"

3. `DocumentRequestPage.jsx` - Document request page titles

   - URL: `/track-claims/:id/document-request/:docId`
   - User sees:
     - Browser tab title (`'document'`) - "Files for March 15, 2024 Request to add or remove a dependent"
     - Page heading (`'detail'`) - "Request to add or remove a dependent"

4. `Standard5103NoticePage.jsx` - 5103 notice page titles
   - URL: `/track-claims/:id/standard-5103-notice`
   - User sees: Page heading (`'detail'`) - "Claim for disability compensation"

### Claim Type Mappings

The frontend maintains 123 claim codes across 6 arrays:

| Array                                  | Count | Purpose                 | Example Codes                |
| -------------------------------------- | ----- | ----------------------- | ---------------------------- |
| `disabilityCompensationClaimTypeCodes` | 37    | 8-phase claim process   | '010INITMORE8', '020NEW'     |
| `addOrRemoveDependentClaimTypeCodes`   | 47    | Dependent changes       | '130DPNDCYAUT', '130DPNDCY'  |
| `pensionClaimTypeCodes`                | 28    | Pension claims (parent) | '190ORGDPN', '180ORGPEN'     |
| `survivorsPensionClaimTypeCodes`       | 5     | Subset of pension       | '190ORGDPN', '140ISD'        |
| `DICClaimTypeCodes`                    | 3     | Subset of pension       | '290DICEDPMC', '020SMDICPMC' |
| `veteransPensionClaimTypeCodes`        | 3     | Subset of pension       | '180AILP', '180ORGPEN'       |

### Processing Logic

When a claim arrives from the API:

```
Step 1: Get claimType (via getClaimType function)
   - If claimType is null/undefined → "Disability Compensation" ⚠️
   - If claimType = "Death" → "expenses related to death or burial"
   - Otherwise → use claimType as-is

Step 2: Check claimTypeCode against arrays (via renderTitle function)
   a. If in Add/Remove Dependent array (47 codes) → "Request to add or remove a dependent"
   b. If in Pension arrays (28 codes total):
      - Survivors (5) → "Claim for Survivors Pension"
      - DIC (3) → "Claim for Dependency and Indemnity Compensation"
      - Veterans (3) → "Claim for Veterans Pension"
      - Other pension codes → "Claim for pension"
   c. Otherwise → "Claim for {claimType from Step 1}"
```

### The Null ClaimType Problem

These claims get defaulted to "Disability Compensation" in Step 1 when they arrive with `claimType: null`, causing them to display incorrectly:

| Code         | Claim Label                          | Category                 |
| ------------ | ------------------------------------ | ------------------------ |
| 130ISDDI     | In Service Death Dependency Issue   | Survivor compensation    |
| 330DVRPMC    | PMC - Dependency Verification Review| Automated verification   |
| 130DV0537PMC | PMC - Dependency Verification - 0537| Automated verification   |
| 290DVPMC     | PMC - Debt Validation               | Debt review              |
| 290DV        | Debt Validation                     | Debt review              |

This causes debt reviews, dependency verifications, and survivor claims to incorrectly display as "Claim for disability compensation."

### Example 1: Compensation Claim Card Title

Here's how a claim card title is generated when displaying a claim with code "020SUPP" (most common claimType code) in the claims list:

1. ClaimsListItem component renders ([src/applications/claims-status/components/ClaimsListItem.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/claims-status/components/ClaimsListItem.jsx))

   ```javascript
   // Component receives claim object from API:
   // { claimTypeCode: "020SUPP", claimType: "Compensation", ... }
   const title = generateClaimTitle(claim); // No placement param = default card view
   ```

2. generateClaimTitle called ([src/applications/claims-status/utils/helpers.js#L1173](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/claims-status/utils/helpers.js#L1173))

   ```javascript
   export const generateClaimTitle = (claim, placement, tab) => {
     // placement is undefined, so defaults to card view
   ```

3. getClaimType extracts base type ([src/applications/claims-status/utils/helpers.js#L1166](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/claims-status/utils/helpers.js#L1166))

   ```javascript
   const claimType = getClaimType(claim).toLowerCase();
   // Returns: "compensation" → "compensation"
   ```

4. Check against dependency array ([src/applications/claims-status/constants.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/claims-status/constants.js))

   ```javascript
   if (addOrRemoveDependentClaimTypeCodes.includes(claimTypeCode))
   // "020SUPP" not in array, continues
   ```

5. Check if pension claim

   ```javascript
   const isPensionClaim = pensionClaimTypeCodes.includes(claimTypeCode);
   // "020SUPP" not in pension array, returns false
   ```

6. renderTitle function builds title

   ```javascript
   function renderTitle() {
     // Not dependent claim, not pension
     return `Claim for ${claimType}`; // "Claim for compensation"
   }
   ```

7. Switch on placement (hits default case)

   ```javascript
   switch (placement) {
     default:
       // Card view
       return renderTitle(); // Returns: "Claim for compensation"
   }
   ```

8. ClaimsListItem displays title in claims list card
   ```jsx
   <h3 className="claims-list-item-header">
     {title} // "Claim for compensation"
   </h3>
   ```
   User sees this as the card heading on the "Your claims and appeals" page at `/track-claims`

Result: Technical code "020SUPP" → Card heading shows "Claim for compensation" on claims list page

### Example 2: Dependency Claim Browser Tab Title

Here's how a document (browser tab) title is generated for a Dependency claim with code "130DPEBNAJRE" (quite common as well):

1. ClaimDetailLayout component renders ([src/applications/claims-status/containers/ClaimDetailLayout.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/claims-status/containers/ClaimDetailLayout.jsx))

   ```javascript
   // Component receives claim object from API:
   // { claimTypeCode: "130DPEBNAJRE", claimType: "Dependency", claimDate: "2024-03-15" }
   const docTitle = generateClaimTitle(claim, 'document', 'Status');
   ```

2. generateClaimTitle called with document placement ([src/applications/claims-status/utils/helpers.js#L1173](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/claims-status/utils/helpers.js#L1173))

   ```javascript
   export const generateClaimTitle = (claim, placement, tab) => {
     // placement = 'document', tab = 'Status'
   ```

3. getClaimType extracts base type

   ```javascript
   const claimType = getClaimType(claim).toLowerCase();
   // Returns: "dependency" → "dependency"
   ```

4. Check for add/remove dependent

   ```javascript
   const isAddOrRemoveDependent = addOrRemoveDependentClaimTypeCodes.includes(
     '130DPEBNAJRE',
   );
   // "130DPEBNAJRE" IS in dependency array, returns true
   ```

5. Build base claim title

   ```javascript
   const baseClaimTitle = isAddOrRemoveDependent
     ? 'request to add or remove a dependent'
     : `${claimType} claim`;
   // Returns: "request to add or remove a dependent"
   ```

6. renderTitle with sentenceCase for dependent claims

   ```javascript
   function renderTitle() {
     if (isAddOrRemoveDependent) {
       return sentenceCase(baseClaimTitle);
       // Returns: "Request to add or remove a dependent"
     }
   }
   ```

7. Switch on placement (document case hit)

   ```javascript
   switch (placement) {
     case 'document':
       const tabPrefix = `${tab} ${tab === 'Files' ? 'for' : 'of'}`;
       // "Status of"
       const formattedDate = buildDateFormatter()(claim.attributes.claimDate);
       // "2024-03-15" → "March 15, 2024"
       return titleCase(`${tabPrefix} ${formattedDate} ${renderTitle()}`);
     // "Status of March 15, 2024 Request to add or remove a dependent"
     // titleCase → "Status Of March 15, 2024 Request To Add Or Remove A Dependent"
   }
   ```

8. Document title set in browser
   ```javascript
   document.title = docTitle;
   // Browser tab shows: "Status Of March 15, 2024 Request To Add Or Remove A Dependent | VA.gov"
   ```

Result: Technical code "130DPEBNAJRE" → Browser tab shows "Status Of March 15, 2024 Request To Add Or Remove A Dependent"

### Example 3: Misidentified Debt Validation Claim

Here's how a detail page heading is generated when the claim has a null claim type (code "290DV" - actually represents "Debt Validation"):

1. ClaimDetailLayout component renders ([src/applications/claims-status/containers/ClaimDetailLayout.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/claims-status/containers/ClaimDetailLayout.jsx))

   ```javascript
   // Component receives claim object from API:
   // { claimTypeCode: "290DV", claimType: null, ... }
   const heading = generateClaimTitle(claim, 'detail');
   ```

2. generateClaimTitle called with detail placement

   ```javascript
   export const generateClaimTitle = (claim, placement, tab) => {
     // placement = 'detail', tab = undefined
   ```

3. getClaimType handles null claim type

   ```javascript
   export function getClaimType(claim) {
     if (claim?.attributes?.claimType) {
       const { claimType } = claim.attributes;
       // claimType is null, so condition fails
     }
     return 'Disability Compensation'; // Fallback to default
   }
   // Returns: "Disability Compensation"
   ```

4. Check against dependency array

   ```javascript
   const claimType = getClaimType(claim).toLowerCase();
   // "disability compensation" → "disability compensation"
   const isAddOrRemoveDependent = addOrRemoveDependentClaimTypeCodes.includes(
     '290DV',
   );
   // "290DV" not in dependency array, returns false
   ```

5. Check if pension claim

   ```javascript
   const isPensionClaim = pensionClaimTypeCodes.includes('290DV');
   // "290DV" not in pension array, returns false
   ```

6. renderTitle builds default title

   ```javascript
   function renderTitle() {
     // Not dependent, not pension, uses default
     return `Claim for ${claimType}`;
     // Returns: "Claim for disability compensation"
   }
   ```

7. Switch on placement (detail case)

   ```javascript
   switch (placement) {
     case 'detail':
       return renderTitle();
     // Returns: "Claim for disability compensation"
   }
   ```

8. Detail page displays heading
   ```jsx
   <h1 className="claim-detail-heading">
     {heading} // "Claim for disability compensation"
   </h1>
   ```
   User sees this as the main heading on the claim detail page across all tabs (Status, Files, Overview, etc.)

Result:

- Actual: Technical code "290DV" with null claimType → Detail page heading shows "Claim for disability compensation"
- Expected: Should show "Request for debt review" or similar appropriate title
- Impact: Debt Validation claims are mislabeled as disability compensation claims

---

## Technical Limitations

### Testing Coverage Gaps

Current test coverage creates significant regression risk:

- Required test cases: 106 codes × 4 placements × 4 tabs = 1,696+ combinations
- Actual coverage: 16 tests for `generateClaimTitle` function (~1% coverage)
- Risk: Undetected UI changes affecting millions of veterans
- Impact: No regression safety net for claim title modifications

### Maintainability Issues

Adding or modifying claim types requires coordinated changes across 4-6 locations:

1. Constants arrays (6 separate arrays)
2. Function logic (8-10 conditional branches)
3. Test updates (manual verification required)
4. String literals scattered throughout (~15 hardcoded strings)

Key pain points:
- No single source of truth for code-to-title mappings
- 5 separate `.includes()` array searches per title generation
- Mixed responsibilities (formatting + business logic)

### Performance Concerns

Each title generation executes 5 linear searches across 106 total codes:

- `addOrRemoveDependentClaimTypeCodes.includes()` - 45 codes
- `isPensionClaim()` → `pensionClaimTypeCodes.includes()` - 26 codes
- `survivorsPensionClaimTypeCodes.includes()` - 5 codes
- `DICClaimTypeCodes.includes()` - 3 codes
- `veteransPensionClaimTypeCodes.includes()` - 3 codes

While current performance is acceptable, this O(n) approach doesn't scale efficiently.

### Semantic Accuracy Issues

The `claimType: null` default creates misrepresentation for 5+ known claim types:

| Code | Actual Purpose | Displayed As |
|------|---------------|--------------|
| 290DV | Debt Validation | "Claim for disability compensation" |
| 290DVPMC | PMC - Debt Validation | "Claim for disability compensation" |
| 130ISDDI | In Service Death Dependency | "Claim for disability compensation" |

Technical gaps:
- No null claimType detection or monitoring
- Silent fallback without alerting
- No telemetry on production frequency

Business impact:
- Veterans see incorrect claim descriptions
- Support burden from confused users
- Potential compliance issues with misrepresented claim types

---

## Solution Evaluation

### Evaluation Framework

Evaluating solutions for this critical veteran-facing system requires balancing multiple concerns:

1. Technical Excellence: Performance, scalability, maintainability
2. Developer Experience: How easily can the team work with this code?
3. Risk Management: Migration complexity, potential for regression
4. Business Value: Time to market, future extensibility
5. Operational Excellence: Monitoring, debugging, performance visibility

Each solution will be evaluated against these criteria with particular focus on the VA.gov context: a high-traffic government service where reliability and accessibility are paramount.

### Option 1: JavaScript Map with Strategy Pattern

Transform the current implementation into a Map-based lookup with strategy pattern for formatting logic.

```javascript
// Configuration as data
const CLAIM_TYPE_MAP = new Map([
  ['130DPNDCYAUT', 'Request to add or remove a dependent'],
  ['190ORGDPN', 'Claim for Survivors Pension'],
  ['290DV', 'Request for debt review'],
  // ... all 106 mappings
]);

// Strategy pattern for placement formatting
const formatStrategies = {
  detail: (title) => title,
  breadcrumb: (title, tab) => `${tab} ${tab === 'Files' ? 'for' : 'of'} your ${title.toLowerCase()}`,
  document: (title, tab, date) => titleCase(`${tab} ${tab === 'Files' ? 'for' : 'of'} ${date} ${title.toLowerCase()}`),
  default: (title) => title
};

export const generateClaimTitle = (claim, placement = 'default', tab) => {
  const title = CLAIM_TYPE_MAP.get(claim?.attributes?.claimTypeCode) ||
                getDefaultTitle(claim);
  return formatStrategies[placement](title, tab, claim?.attributes?.claimDate);
};
```

Pros:
- O(1) lookup performance with Map (faster than object for 100+ entries)
- Clear separation of data and behavior
- Strategy pattern enables easy addition of new placements
- Type-safe with TypeScript support

Cons:
- Map not directly JSON-serializable (requires conversion)
- Slightly more complex than plain objects
- Team less familiar with Map usage

Migration Risk: Low-Medium
- Can implement alongside existing code
- Easy rollback if issues arise

### Option 2: Configuration Object with Composition

Use plain JavaScript objects with composable formatting functions.

```javascript
// Simple object configuration
const CLAIM_TITLES = {
  '130DPNDCYAUT': 'Request to add or remove a dependent',
  '190ORGDPN': 'Claim for Survivors Pension',
  '290DV': 'Request for debt review',
  // ... all mappings
};

// Composable formatters
const formatters = {
  withTab: (title, tab) => `${tab} ${tab === 'Files' ? 'for' : 'of'} ${title}`,
  withDate: (title, date) => `${formatDate(date)} ${title}`,
  withOwnership: (title) => `your ${title.toLowerCase()}`,
  titleCase: (title) => titleCase(title)
};

// Compose formatters based on placement
const placementFormatters = {
  detail: (title) => title,
  breadcrumb: (title, tab) =>
    compose(formatters.withTab, formatters.withOwnership)(title, tab),
  document: (title, tab, date) =>
    compose(formatters.titleCase, formatters.withDate, formatters.withTab)(title, tab, date)
};
```

Pros:
- JSON-compatible (works with existing tooling)
- Familiar object syntax for team
- Composable functions promote reusability
- Aligns with VA.gov patterns in other apps

Cons:
- O(n) lookup in worst case (though V8 optimizes)
- Requires discipline to maintain composition patterns

Migration Risk: Low
- Most similar to current patterns
- Incremental migration possible

### Option 3: Hybrid Approach (Recommended)

Combine the best aspects: Map for performance, simple configuration objects, and progressive enhancement path.

```javascript
// Phase 1: Extract configuration
const CLAIM_TYPE_CONFIG = {
  // Dependency claims
  '130DPNDCYAUT': 'Request to add or remove a dependent',
  '130DPNAUTREJ': 'Request to add or remove a dependent',

  // Pension claims
  '190ORGDPN': 'Claim for Survivors Pension',
  '180ORGPEN': 'Claim for Veterans Pension',

  // Debt claims (currently showing as disability)
  '290DV': 'Request for debt review',
  '290DVPMC': 'Request for debt review',

  // ... all 106 mappings
};

// Phase 2: Convert to Map for performance (if needed)
const claimTypeMap = new Map(Object.entries(CLAIM_TYPE_CONFIG));

// Phase 3: Simple, testable formatting
const formatTitle = (baseTitle, placement, tab, date) => {
  switch (placement) {
    case 'detail':
      return baseTitle;
    case 'breadcrumb':
      return `${tab} ${tab === 'Files' ? 'for' : 'of'} your ${baseTitle.toLowerCase()}`;
    case 'document':
      const formattedDate = date ? formatDate(date) : '';
      return titleCase(`${tab} ${tab === 'Files' ? 'for' : 'of'} ${formattedDate} ${baseTitle.toLowerCase()}`);
    default:
      return baseTitle;
  }
};

// Clean, simple API
export const generateClaimTitle = (claim, placement = 'default', tab) => {
  const claimCode = claim?.attributes?.claimTypeCode;
  const title = CLAIM_TYPE_CONFIG[claimCode] || getDefaultTitle(claim);

  return formatTitle(title, placement, tab, claim?.attributes?.claimDate);
};
```

Why This Approach Works:

1. Progressive Enhancement: Start with objects, migrate to Map if performance requires
2. Familiarity: Uses patterns the team knows (objects, switch statements)
3. Testability: Each piece is independently testable
4. Performance: O(1) lookups with option to optimize further
5. Maintainability: Single source of truth for all claim titles

### Comparison Matrix

| Criteria | Option 1: Map + Strategy | Option 2: Object + Composition | Option 3: Hybrid (Recommended) |
|----------|-------------------------|-------------------------------|--------------------------------|
| Performance | O(1) lookups, excellent | O(1)* with V8 optimization | O(1) lookups |
| Maintainability | Good separation | Very good, familiar | Excellent |
| Testability | Good | Good | Excellent |
| Migration Risk | Medium | Low | Low |
| Team Learning Curve | Medium (Map usage) | Low | Low |
| Extensibility | Good | Good | Good |
| JSON Compatibility | Requires conversion | Native | Native initially |
| Code Complexity | Medium | Low-Medium | Low |
| VA.gov Alignment | Partial | Strong | Strong |

*V8 optimizes object property access to near O(1) for objects with stable shapes

### Recommendation: Option 3 - Hybrid Approach

Option 3 provides the optimal balance for the VA.gov context:

#### Why This Is The Right Choice:

1. Risk Mitigation: Progressive enhancement allows us to start simple and optimize if needed
2. Team Velocity: Familiar patterns mean the team can implement quickly without extensive training
3. Production Safety: Feature flag rollout ensures zero-downtime migration
4. Measurable Impact: Clear metrics for success (test coverage, performance, accuracy)

#### Implementation Roadmap:

Phase 1: Foundation
- Create configuration object with all 106 mappings
- Build compatibility layer
- Write comprehensive tests

Phase 2: Validation
- Deploy behind feature flag
- A/B test with 5% traffic
- Monitor for discrepancies
- Validate performance metrics

Phase 3: Rollout
- Gradual rollout: 5% → 25% → 50% → 100%
- Monitor error rates and performance
- Gather team feedback

Phase 4: Optimization
- Remove legacy code
- Consider Map conversion if performance requires
- Add telemetry for null claimType detection

#### Success Metrics:

- Test Coverage: 100% of claim code/placement combinations
- Performance: p95 < 5ms for title generation
- Accuracy: Zero misrepresented claim titles
- Developer Experience: 50% reduction in time to add new claim types
- Operational: Automated alerts for null claimType occurrences

#### Risk Mitigation Strategies:

1. Parallel Implementation: New and old code run side-by-side
2. Comprehensive Testing: Every combination tested before production
3. Gradual Rollout: Feature flags enable instant rollback
4. Monitoring: Real-time alerts for any discrepancies

### Why Not The Other Options?

Option 1 (Map + Strategy): While technically elegant, introduces unfamiliar patterns without proportional benefit for this use case.

Option 2 (Object + Composition): Good choice, but composition pattern might be over-engineering for simple formatting needs.

### Final Thoughts

The hybrid approach respects the existing codebase patterns while providing a clear path to improvement. It prioritizes:

- Simplicity over cleverness
- Incremental improvement over big-bang refactoring
- Team familiarity over architectural purity
- Measurable outcomes over theoretical benefits

This solution balances technical excellence with practical constraints, focuses on outcomes that matter to veterans, and ensures the team can maintain and extend the solution confidently.
